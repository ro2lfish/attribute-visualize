import { useState } from "react";
import Group from "../Group/Group";
import AppendButton from "../AppendButton/AppendButton";

import styles from "./board.module.css";

export default function (props) {
  const [groups, updateGroups] = useState([]);
  const [groupId, increaseId] = useState(1);
  const [editMode, setMode] = useState(true)

  const appendGroup = () => {
    groups.push({
      id: "group" + groupId,
      index: groups.length,
    });
    increaseId(groupId + 1);
    updateGroups(() => [...groups]);
  };

  const deleteGroup = (id) => {
    const index = groups.findIndex((g) => g.id === id);
    groups.splice(index, 1);
    updateGroups(() => [...groups]);
  };

  return (
    <div className={styles.board}>
      <div>
        <button>save</button>
        <button>cancel</button>
      </div>
      {groups.map((group, index) => {
        return <Group key={index} settings={group} onDelete={deleteGroup} />;
      })}
      <AppendButton onClick={appendGroup} />
    </div>
  );
}
