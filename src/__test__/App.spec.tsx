import 'jest';
import App from '../App';
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

describe("<App />", () => {
  it("should display App component", async () => {
    const wrapper = render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>);
    expect(wrapper).toBeTruthy();
  });
});