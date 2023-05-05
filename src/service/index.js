import axios from 'axios'

const Service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default Service
