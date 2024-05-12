import { render, screen, waitFor } from "@testing-library/react";

import LocationTree from '../../pages/location-tree/LocationTree';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import axios from "axios";
import httpService from "../../api/axiosInstance";
jest.mock('../../api/axiosInstance')

const mockResponseAPI = [
    {
        id: 1,
        label: "Viet Nam",
        is_area: true,
        is_remote: false,
        locations: [
            {

                id: 2,
                label: "Ho Chi Minh City",
                is_area: false,
                is_remote: true,
                locations: []
            },
            {
                id: 3,
                label: "Ha Noi",
                is_area: false,
                is_remote: true,
                locations: []
            }
        ],
        isExpandDefault: false,
    },
    {

        id: 5,
        label: "Ho Chi Minh City",
        is_area: false,
        is_remote: true,
        locations: []
    },
    {
        id: 6,
        label: "Ha Noi",
        is_area: false,
        is_remote: true,
        locations: []
    }
]


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
})



describe("<LocationTree />", () => {
    it("should display LocationTree", async () => {
        httpService.get = jest.mock('axios').fn().mockResolvedValue({
            data: mockResponseAPI,
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
        })
        render(<QueryClientProvider client={queryClient}><LocationTree /></QueryClientProvider>);
        await waitFor(() => {
            expect(screen.getByText('Viet Nam')).toBeTruthy();
            expect(httpService.get).toHaveBeenCalled()
        });
    });
})