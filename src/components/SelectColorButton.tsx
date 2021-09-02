import {PixelPainterStore, setSelectedColor} from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {

  const state = PixelPainterStore.useState()

  //modify this function to highlight correctly
  const computeRingSize = (selectedColor:string | null) => {
    if(selectedColor === color)
      return "ring-8 ring-green-400"
    else 
      return ""
  }

  return (
    <button className={`${computeRingSize(state.selectedColor)} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }}
      onClick={() => {
        setSelectedColor(color)
      }}
    >
    </button>
  )
}

export default SelectColorButton