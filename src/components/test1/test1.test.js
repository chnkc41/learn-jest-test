import { render, screen } from '@testing-library/react';
import Test1 from './index';

test('renders learn react link', () => {
  render(<Test1 />);
  const element = screen.getByRole('button', {
    name: "Test1"
  }); 
  expect(element).toBeInTheDocument();
});
