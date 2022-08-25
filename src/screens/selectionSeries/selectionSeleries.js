import React, { useState, useEffect, useContext } from "react";
import { View, FlatList } from "react-native";
import CardMovies from "../../Components/selectMoviesComp/cards/cardMovies";
import HeaderSeries from "../../Components/selectSeriesComp/header/header";
import styles from "./styles";
import { getSeries, getAccount} from "../../services/api";
import Loading from "../../Components/Loading";
import {Context} from "../../context/index";


export function SelectionSeries({ navigation }) {
    const [series, setSeries] = useState([])
    const [page, setPage] = useState(1)
    const [selectedId, setSelectedId] = useState()
    const [loading, setLoading] = useState(false)
    const [nameUser, setNameUser] = useState()
    const {sessionId} = useContext(Context)

    async function getResponseSeries() {
        const response = await getSeries(page)
        setSeries([
            ...series, ...response.data.results
        ])
        setPage(page + 1)
    }
    useEffect(() => {
        getResponseSeries()
    }, [])
    useEffect(() => {
        const getResponseAccount = async () => {
            const response = await getAccount(sessionId)
            setNameUser(response.data.name)
            console.log(response.data.name)
        }
        getResponseAccount()
    },  [])

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <HeaderSeries
                nameUser={nameUser} 
                />
            </View>
            <FlatList
                data={series}
                keyExtractor={(item, index) => `${index}`}
                numColumns={4}
                onEndReached={getResponseSeries}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<Loading load={loading} />}
                renderItem={({ item }) => {
                    return (
                        <CardMovies
                            text={`${item.vote_average}`}
                            poster_path={item.poster_path}
                            onPress={() => {
                                setSelectedId(item.id)
                                navigation.navigate('SeriesDetail', { item })
                            }}
                        />
                    )
                }}
            />
        </View>
    )
}