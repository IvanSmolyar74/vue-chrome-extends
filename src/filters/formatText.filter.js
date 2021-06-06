export default function formatText(value) {
  return `${value.split(' ').slice(0, 1).join('').slice(0, 1).toUpperCase()}${value.split(' ').slice(0, 1).join('').slice(1, value.length)} ${value.split(' ').slice(1, value.length).join('')}`
}
