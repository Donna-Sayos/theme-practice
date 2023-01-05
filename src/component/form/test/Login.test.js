import { render, screen } from "@testing-library/react";
import Login from "../Login";

test('renders an h3 tag that points to Sign in', () => {
    render(<Login />);

    const h3Tag = screen.getByText("Sign in");
    expect(h3Tag).toBeInTheDocument();
})