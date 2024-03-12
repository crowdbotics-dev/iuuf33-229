import axios from "axios"
import {
  CONNECTOR_NEW_FINE_PASSWORD,
  CONNECTOR_NEW_FINE_USERNAME
} from "react-native-dotenv"
const newFine = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: {
    username: CONNECTOR_NEW_FINE_PASSWORD,
    password: CONNECTOR_NEW_FINE_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
