import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { expect } from 'vitest'

test('renders content', () => {
    const todo = {
        text: 'Write code',
        done: false,
    }

    render(<Todo todo={todo} />)

    const todoText = screen.getByText('Write code')
    expect(todoText).toBeDefined()

    const todoStatus = screen.getByText('This todo is not done')
    expect(todoStatus).toBeDefined()

    const setTodoStatus = screen.getByText('Set as done')
    expect(setTodoStatus).toBeDefined()
})
