import YAML from 'js-yaml';
const mapping = {
  json: (data) => JSON.parse(data),
  yml: (data) => YAML.load(data),
  yaml: (data) => YAML.load(data)
}
export default (data, format) => {
  return mapping[format](data)
};



