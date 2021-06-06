export default function dateFormat(value, format = 'time', unix = true) {
  if (!value) return

  const options = {};

  if (format.includes('date')) {
    options.day = '2-digit',
      options.month = 'long',
      options.year = 'numeric'
  }

  if (format.includes('time')) {
    if (!unix) {
      options.hour = '2-digit',
        options.minute = '2-digit',
        options.second = '2-digit'
    }
    options.hour = '2-digit',
      options.minute = '2-digit'
  }

  if (format.includes('weekday')) {
    options.weekday = 'long',
      options.day = '2-digit'
  }
  let currentValue = '';
  if (unix) {
    currentValue = value * 1000
  } else {
    currentValue = value;
  }
  return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(currentValue))
}
