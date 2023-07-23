import React from 'react'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { decrement, increment } from '@/redux'

const Counter = () => {
    const count = useTypedSelector((state) => state.counter.count)
    const dispatch = useTypedDispatch()

    return (
        <div>
            Count: {count}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export { Counter }
