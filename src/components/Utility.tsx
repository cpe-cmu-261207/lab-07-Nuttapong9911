import {PixelPainterStore, clear, random} from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36"
      onClick={() => {
        clear()
      }}
      >Clear</button>
      <button className="w-36"
      onClick={() => {
        random()
      }}
      >Random color</button>
    </div>
  )
}

export default Utility