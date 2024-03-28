import { Color } from "./Color";

export function Colors({ colors }) {
  return (
    <>
      <ul>
        {colors.map((singleColor) => (
          <Color key={singleColor.id} color={singleColor} />
        ))}
      </ul>
    </>
  );
}
