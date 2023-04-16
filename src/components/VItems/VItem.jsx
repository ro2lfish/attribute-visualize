import { Form, Select } from "antd";
import styles from "./vitem.module.css";

export default function (props) {
  return (
    <div className={styles["vitem-box"]}>
      <Form size="small">
        <Form.Item
          label="VItem type: "
          name="vitemtype"
          style={{ fontSize: "10px" }}
        >
          <Select
            showSearch
            bordered={false}
            placeholder="select a component"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "input",
                label: "Input",
              },
              {
                value: "image",
                label: "Image",
              },
              {
                value: "checkbox",
                label: "Checkbox",
              },
            ]}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
