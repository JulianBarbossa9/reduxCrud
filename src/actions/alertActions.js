import {
  SHOW_ALERT,
  HIDE_ALERT,
} from '../types'


export function showAlert(alert){
  //In this case we don't use asyn becaouse we don't make querys to db
  return (dispatch) => {
    dispatch(createAlert(alert))
  }
}

const createAlert = (alert) => ({
  type: SHOW_ALERT,
  payload: alert
})


export function hideAlertAction(){
  return (dispatch) => {
    dispatch(hideAlert())
  }
}

const hideAlert = () => ({
  type: HIDE_ALERT
})