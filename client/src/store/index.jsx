import axios from "axios";
import { create } from "zustand";
const LOCATION_SERVER = 'https://dev-api.fortiusys.com/api/location'
const BUSINESS_SERVER = 'https://dev-api.fortiusys.com/api/business'

const usePerkasaCounter = create((set) => {
    return {
        location: [],
        business: [],
        fetchLocation: async () => {
            try {
                const { data } = await axios({
                    url: LOCATION_SERVER,
                    method: 'GET'
                })

                set({
                    location: data.data
                })

                return data.data;
            } catch (error) {
                console.log(error);
            }
        },
        fetchBusiness: async () => {
            try {
                const { data } = await axios({
                    url: BUSINESS_SERVER,
                    method: 'GET'
                })

                set({
                    business: data.data
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
})

export default usePerkasaCounter