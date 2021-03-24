import { render, screen } from '@testing-library/react'

import ComponentExample from '.'

describe('<ComponentExample/>', () => {
  it('should render the headind', () => {
    const { container } = render(<ComponentExample />)

    expect(
      screen.getByRole('heading', { name: /Advanced React/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render colors correct', () => {
    const { container } = render(<ComponentExample />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
