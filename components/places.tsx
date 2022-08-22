//Places component file 

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";

  import "@reach/combobox/styles.css";

import "@reach/combobox/styles.css"; 

type PlacesProps = { 
    setOffice: (position: google.maps.LatLngLiteral) => void; 
}; 

export default function Places({ setOffice }: PlacesProps) { 

    const {ready, value, setValue, suggestions: {status, data}, clearSuggestions} = usePlacesAutocomplet(); 


    return( 
        <Combobox onSelect={() => {}}> 
        <ComboboxInput value={value} onChange={ e => setValue(e.target.value) } 
        className="combobox-input" />
        </Combobox>
    )
}