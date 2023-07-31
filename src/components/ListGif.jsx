import {GifItem} from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const ListGif = ({item}) => {

  const {images, isLoading} = useFetchGifs(item)
  
  // console.log({images, isLoading})

  return (
    <>
        <h1>{item}</h1>

        {
          // isLoading
          // ? <h2>Cargando...</h2>
          // :
          // null

          isLoading && (<h2>Cargando...</h2>)
        }
        <div className='box'>
        {images.map((item) => {
          return <GifItem key={item.id} {...item}></GifItem>
        })}
        </div>
    </>
  )
}
