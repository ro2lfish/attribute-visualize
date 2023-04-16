import { useState } from "react";
import styles from "./group.module.css";
// import SelectModal from "../Group/SelectModal";
import { Modal } from "antd";
import VItem from "../VItems/VItem";

export default function (props) {
  const [vItems, updateVItems] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [chooseModalVisible, setVisible] = useState(false);

  const deleteSelf = () => {
    if (props) {
      const { settings, onDelete } = props;
      onDelete && onDelete(settings.id);
    }
  };

  const openOptions = () => {};

  const addVItem = (event) => {
    // const target = event.currentTarget || event.target;
    // setPosition({
    //   x: target.offsetLeft,
    //   y: target.offsetTop + target.clientHeight,
    // });
    // setVisible(true);

    updateVItems((list) => [...list, {}]);
  };

  return (
    <div className={styles["group-box"]}>
      <div className={styles["group-header"]}>
        <div className={styles["group-info"]}>{props.settings.id}</div>
        <button className={styles.options} onClick={openOptions}>
          options
        </button>

        <button className={styles.delete} onClick={deleteSelf}>
          delete
        </button>
      </div>

      <div className={styles["group-body"]}>
        {vItems.map((vitem, index) => {
          return <VItem key={index} />;
        })}

        <button onClick={(e) => addVItem(e)}>add a component</button>
      </div>
      <Modal
        title=""
        width={200}
        height={200}
        open={chooseModalVisible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}
