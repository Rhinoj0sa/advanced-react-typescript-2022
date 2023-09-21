import React, {  useState } from "react";
import { LabeledInput } from "../components";

type Props<TData> = {
  header: string;
  initialValues: TData;
  onSubmit: (values: TData) => void;
};

export function GenericForm<TData extends Record<string, string | number | readonly string[] | undefined>>({
  header,
  initialValues,
  onSubmit,
}: Props<TData>): React.ReactElement {
  const [values, setValues] = useState(initialValues);

  return (
    <form className="mb-5" onSubmit={() => onSubmit(values)}>
      <h3 className="mb-3">{header}</h3>

      {Object.keys(values).map((key) => (
        <LabeledInput
          key={key}
          value={values[key]}
          onChange={(e) => setValues({ ...values, [key]: e.target.value })}
        >
          <span className="text-capitalize">{key}:</span>
        </LabeledInput>
      ))}
      <p>{JSON.stringify(values, null, 2)}</p>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
