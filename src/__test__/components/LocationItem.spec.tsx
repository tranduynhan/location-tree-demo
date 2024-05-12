

import { fireEvent, render } from "@testing-library/react";
import LocationRowItem from '../../pages/location-tree/components/LocationItem';


const mockData: ILocationProps = {
    is_remote: true,
    id: 1,
    label: "Viet Nam",
    is_area: true,
    locations: [
        {
            is_remote: true,
            id: 2,
            label: "Ho Chi Minh City",
            is_area: false,
            locations: []
        },
        {
            is_remote: true,
            id: 3,
            label: "Ha Noi",
            is_area: false,
            locations: []
        }
    ],
    isExpandDefault: false,
}
describe("<LocationRowItem />", () => {
    it("should display LocationRowItem", async () => {
        const wrapper = render(<LocationRowItem
            id={mockData.id}
            label={mockData.label}
            is_area={mockData.is_area}
            locations={mockData.locations}
            isExpandDefault={mockData.isExpandDefault}
            is_remote={mockData.is_remote} />);

        expect(wrapper).toBeTruthy();
    });
    it("should display isExpandDefault with value true", async () => {
        const wrapper = render(<LocationRowItem
            id={mockData.id}
            label={mockData.label}
            is_area={mockData.is_area}
            locations={mockData.locations}
            isExpandDefault={true}
            is_remote={mockData.is_remote} />);

        expect(wrapper).toBeTruthy();
    });

    it("should display child list when user onclick row", async () => {

        const { getByText, queryByText } = render(<LocationRowItem
            id={mockData.id}
            label={mockData.label}
            is_area={mockData.is_area}
            locations={mockData.locations}
            isExpandDefault={mockData.isExpandDefault}
            is_remote={mockData.is_remote} />);

        // Checking before onclick is not display
        expect(queryByText("Ho Chi Minh City")).toBeNull()

        fireEvent.click(getByText("Viet Nam"))

        expect(getByText("Ho Chi Minh City")).toBeTruthy()

    });
});