import { useState } from "react";
import ArtistPage from "@/components/Artist";

export default function Music () {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <ArtistPage 
        artist={{
          id: 'the-beatles',
          name: 'The Beatles'
        }}
      />
    )
  } else {
    return (
      <button onClick={ () => setShow(true) }>Open artist</button>
    )
  }
}