import { ReactNode, useState } from 'react'
import constextDoctor from './index'

type props ={
  children: ReactNode
}

export default function Provider({children}:props) {
const [doctor, setDoctor] = useState<any>({nome:"", especialidade:"", day:"", time:""})

const store = {doctor, setDoctor}

  return (<constextDoctor.Provider value={store}>{children}</constextDoctor.Provider>)
}
