export default function createIteratorObject(report) {
  const array = Object.values(report.allEmployees);
  const res = [];
  array.forEach((e) => {
    res.push(...e);
  });
  return res;
}
