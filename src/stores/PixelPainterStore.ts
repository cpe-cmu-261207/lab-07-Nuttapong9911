import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  selectedColor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selectedColor: "#FFFFFF"
})

export const setSelectedColor = (color:string) => {
  PixelPainterStore.update(
    s => {s.selectedColor = color}
  )
}

export const setColor = (x:number,y:number) => {
  PixelPainterStore.update(
    s => {s.canvas[y][x] = s.selectedColor}
  )
}

export const clear = () => {
  PixelPainterStore.update(
    s => {s.canvas.forEach(s => {
      for(var i = 0; i< 16; i++)
          s[i] = "#FFFFFF"
      })
    }
  )
}

export const random = () => {
  PixelPainterStore.update(
    s => {s.canvas.forEach(s => {
      for(var i = 0; i< 16; i++)
          switch (Math.floor(Math.random() * 12) + 1) {
            case 1:
              s[i] = '#000000'
              break;
            case 2:
              s[i] = '#804000'
              break;
            case 3:
              s[i] = '#FE0000'
              break;
            case 4:
              s[i] = '#FE6A00'
              break;
            case 5:
              s[i] = '#FFD800'
              break;
            case 6:
              s[i] = '#00FF01'
              break;
            case 7:
              s[i] = '#FFFFFF'
              break;
            case 8:
              s[i] = '#01FFFF'
              break; 
            case 9:
              s[i] = '#0094FE'
              break;
            case 10:
              s[i] = '#0026FF'
              break;
            case 11:
              s[i] = '#B100FE'
              break;
            case 12:
              s[i] = '#FF006E'  
              break;   
            default:
              break;
          }
      })
    }
  )
}
