export function Color({ color }) {
  const { id, name } = color;
  return <li key={id}>{name}</li>;
}
