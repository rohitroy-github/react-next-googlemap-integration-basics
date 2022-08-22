import { useLoadScript } from "@react-google-maps/api";

import Map from '../components/map'; 

export default function Home() { 
    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,

        //Declaring which libraries to use > 
        libraries: ["places"], 
    }); 

    if(!isLoaded){ 
        return ( 
            <div><h3>Loading ...</h3></div>
        )
    }
    else{ 
        <Map />
    }

}