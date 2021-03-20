import { render, screen } from '@testing-library/react'

import ComponentExample from '.'

describe('<ComponentExample/>', () => {
  it('should render the headind', () => {
    const { container } = render(<ComponentExample />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
