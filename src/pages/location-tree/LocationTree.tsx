import { useQuery } from "@tanstack/react-query";
import LocationRowItem from "./components/LocationItem";
import styles from "./styles/LocationTress.module.scss";
import { locationService } from "../../api/Location.service";
import Loader from "./components/Loader";

const DEFAULT_EXPAND = 201;
const LocationTree: React.FC = () => {
  const { data: locations, isLoading } = useQuery({
    queryKey: ["locationsList"],
    queryFn: () => locationService.getAll(),
  });
  return (
    <div className={styles.tree_section}>
      <Loader isLoading={isLoading} />
      {!isLoading &&
        locations &&
        locations?.map((it) => (
          <LocationRowItem
            {...it}
            key={it.id}
            isExpandDefault={it.id === DEFAULT_EXPAND}
          />
        ))}
    </div>
  );
};

export default LocationTree;
