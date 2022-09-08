import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Arrow from 'react-native-vector-icons/Feather';
import { removeItem, getMoviesList } from '../../services/api';
import { styles } from './style_movieList';
import * as Animatable from 'react-native-animatable';
import { Context } from '../../context';
import ModalExitAccount from '../../Components/ModalExitAccount';

export default function MovieList({ route, navigation }) {
  const [movieButtonFocused, setMovieButtonFocused] = useState(true);
  const [listMovieDetails, setListMovieDetails] = useState([]);
  const [listMovie, setListMovie] = useState([]);
  const [idMovie, setIdMovie] = useState();
  const [modalVisibleExit, setVisibleModalExit] = useState(false);
  const { item } = route?.params || {};
  const id = `${item.id}`;
  const { sessionId, evaluation, setEvaluation } = useContext(Context);

  useEffect(() => {
    const getInfoList = async () => {
      const response = await getMoviesList(id);
      setListMovie(response.data.items);
      setListMovieDetails(response.data);
    };

    getInfoList();
  }, [evaluation]);

  const itemRemoved = async () => {
    await removeItem(
      id,
      sessionId,
      idMovie,
    );
    setVisibleModalExit(false);
    setEvaluation(!evaluation);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>

      <View
        style={styles.ContainerTop}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('SeeMovieList')}>
          <Arrow
            name="arrow-left"
            size={23}
            color={'#000'} />
        </TouchableOpacity>
        <View>
          <View style={styles.ContainerButtonSandM}>
            <View style={styles.BorderButton}>
              <TouchableOpacity
                onPress={() => {
                  setMovieButtonFocused(true);
                }}>
                {movieButtonFocused ? (
                  <View
                    style={styles.ViewEyeIconOne}>
                    <Icon
                      name="eye"
                      size={37}
                      color="#fff"
                      style={styles.Icon}
                    />
                  </View>
                ) : (
                  <View
                    style={styles.ViewEyeIconTwo}>
                    <Icon
                      name="eye"
                      size={37}
                      color="#000"
                      style={styles.Icon}
                    />
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.BorderButton}>
              <TouchableOpacity
                onPress={() => {
                  setMovieButtonFocused(false);
                }}>
                {!movieButtonFocused ? (
                  <View
                    style={{
                      width: 60,
                      height: 40,
                      borderRadius: 100,
                      backgroundColor: '#E9A6A6',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon
                      name="pencil"
                      size={35}
                      color="#fff"
                      style={styles.Icon}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      width: 65,
                      height: 40,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon
                      name="pencil"
                      size={35}
                      color="#000"
                      style={styles.Icon}
                    />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: 10, alignItems: 'center' }}>
        <View>
          <Text style={{ color: '#E9A6A6', paddingTop: 40 }}>
            {listMovieDetails.name}
          </Text>
        </View>
        <View>
          <Text style={{ color: '#FFFFFF', paddingTop: 30 }}>
            {listMovieDetails.description}
          </Text>
        </View>
      </View>
      {movieButtonFocused ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <FlatList
            data={listMovie}
            keyExtractor={(item, index) => `${index}`}
            numColumns={4}
            renderItem={({ item }) => {
              const poster = `${item.poster_path}`;
              const id = `${item.id}`;
              return (
                <View style={{
                  width: 95,
                  marginTop: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      width: 95,
                      marginTop: 15,
                      alignItems: 'center',
                    }}>
                    <Image
                      style={styles.Image}
                      source={{ uri: `http://image.tmdb.org/t/p/w185/${poster}` }}
                      onPress={() => {
                        setSelectedId(id);
                        navigation.navigate('MoviesDetail', { item });
                      }}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <FlatList
            data={listMovie}
            keyExtractor={(item, index) => `${index}`}
            numColumns={4}
            renderItem={({ item }) => {
              const poster = `${item.poster_path}`;
              const id = `${item.id}`;
              return (
                <View style={{
                  width: 95,
                  marginTop: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      width: 95,
                      marginTop: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={styles.Image}
                      source={{ uri: `http://image.tmdb.org/t/p/w185/${poster}` }}
                      onPress={() => {
                        setSelectedId(id);
                        navigation.navigate('MoviesDetail', { item });
                      }}
                    />
                    <>
                      <View style={{ position: 'absolute', width: '90%', height: 20, alignItems: 'flex-end', top: -10 }}>
                        <TouchableOpacity
                          style={{
                            width: 20,
                            height: 20,
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                          }}
                          onPress={() => {
                            setIdMovie(item.id);
                            setVisibleModalExit(!modalVisibleExit);
                          }}>
                          <Text style={{ color: 'red', fontSize: 14, fontWeight: '900' }}>-</Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  </View>
                </View>
              );
            }}
          />
          <ModalExitAccount
            title="Deseja mesmo remover o filme ?"
            modalExit={modalVisibleExit}
            onPress={() => setVisibleModalExit(false)}
            logout={() => itemRemoved()}
          />
        </View>
      )}
    </View>
  );
}
