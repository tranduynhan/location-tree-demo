import * as React from "react"
import { useEffect, useState } from "react";
import styles from "../styles/LocationItem.module.scss";
// import LocationIcon from "../../../assets/location-icon.svg?react";
// import FolderOpenIcon from "../../../assets/folder-open.svg?react";
// import FolderCloseIcon from "../../../assets/folder-close.svg?react";

const LocationRowItem: React.FC<ILocationProps> = ({
  label,
  is_area,
  locations,
  isExpandDefault,
}) => {
  const isHasChild = is_area && locations.length > 0;
  const [isExpandChild, setIsExpandChild] = useState(false);
  useEffect(() => {
    if (isExpandDefault) {
      setIsExpandChild(isExpandDefault);
    }
  }, [isExpandDefault]);

  // const renderIcon = () => {
  //   if (!isHasChild) {
  //     return <LocationIcon className={styles.icon_item} />;
  //   } else {
  //     if (isExpandChild) {
  //       return <FolderOpenIcon className={styles.icon_item} />;
  //     } else {
  //       return <FolderCloseIcon className={styles.icon_item} />;
  //     }
  //   }
  // };
  const rennderChild = () => {
    if (isHasChild && locations && isExpandChild) {
      return locations.map((it) => {
        return <LocationRowItem {...it} key={it.id} />;
      });
    }
  };
  return (
    <div className={styles.location_wrap}>
      <button
        className={styles.location_wrap_row}
        onClick={() => setIsExpandChild((pre) => !pre)}
      >
        {/* <span className={styles.icon_item}>{renderIcon()}</span> */}
        <label className={styles.label_item}>{label}</label>
      </button>
      {rennderChild()}
    </div>
  );
};

export default LocationRowItem;
