import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {incCount} from "../redux/count/countAction"

export default function CountComponent() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
  return (
    <>
        <h1>Count - {count}</h1>
        <button onClick={() => dispatch(incCount())}>Add Count</button>
    </>
  )
}
