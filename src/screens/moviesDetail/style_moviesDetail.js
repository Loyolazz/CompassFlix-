import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  ImgBackground: {
    width: '100%',
    height: 189,
    justifyContent: 'center',
  },
  btnGoBack: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elencoView: {
    backgroundColor: '#9C4A8B',
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 6,
    marginBottom: 7,
  },
  elencoText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  elenco: {
    color: '#FFFFFF',
    paddingLeft: 3,
    paddingTop: 1,
  },
  elencoButton: {
    backgroundColor: '#9C4A8B',
    borderRadius: 20,
    width: 58,
    height: 24,
    bottom: 95,
    left: 18,
  },
  ButtonAvaluete: {
    backgroundColor: '#E9A6A6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 116,
    height: 22,
    marginLeft: 20,
    marginTop: -4,
  },
  textModal: {
    fontSize: 10,
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  ButtonAvalueteOk: {
    backgroundColor: '#8BE0EC',
    alignItems: 'center',
    justifyContent: 'center',
    width: 116,
    height: 22,
    marginLeft: 20,
    marginTop: -4,
  },
  textModalOk: {
    fontSize: 10,
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  iconPincel: {
    position: 'absolute',
    top: -4,
    right: -4,
    padding: 1,
    borderRadius: 30,
    backgroundColor: '#C4C4C4',
  },
  buttonFavorite: {
    width: '100%',
    position: 'absolute',
    alignItems: 'flex-end',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  containerModalAddList:{
    backgroundColor: '#fff', 
    height: '35%', 
    justifyContent: 'flex-start', 
    borderTopLeftRadius: 23, 
    borderTopRightRadius: 23, 
    marginTop: 600, 
    alignItems: 'center' 
  },
  viewTitleAndBtnExitModal:{
    justifyContent: 'space-between',
     width: '100%', 
     flexDirection: 'row', 
     marginTop: 12,
    paddingHorizontal: 15, 
    height: 23
  },
  styleTxtTitleModal:{
    color: '#000', 
    fontWeight: 'bold'
  },
  txtExit:{
    color: '#000', 
    fontSize: 20 
  },
  containerAddMovieList:{
    borderBottomWidth: 1, 
    borderColor: 'grey', 
    width: '100%', 
    height: 14, 
    marginBottom: 10
  },
  viewFlatlistAddMovie:{
    flexDirection: 'row', 
    width: '100%', 
    height: 180, 
    paddingHorizontal: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  containerItemAddMovie:{
    width: '100%', 
    flexDirection: 'row'
  },
  viewCircleSelection:{
    backgroundColor: '#fff', 
    marginBottom: 10, 
    height: 25, 
    width: 25, 
    borderRadius: 23, 
    borderWidth: 2, 
    borderColor: '#000', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  circleSelection:{   
    height: 17, 
    width: 17, 
    borderRadius: 20 
  },
  viewBtnSaveAddMovie:{
    width: 100, 
    backgroundColor: '#000', 
    alignItems: 'center', 
    height: 25, 
    borderRadius: 5, 
    justifyContent: 'center', 
    marginBottom: 40 
  },
  txtBtnSaveAddMovie:{
    color: '#fff', 
    fontSize: 12
  }
});

export default styles;
