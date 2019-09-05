export default function allP<T> (values: Array<T>): Promise<Array<T>> {
  return Promise.all(values);
}
