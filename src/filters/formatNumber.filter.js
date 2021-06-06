export default function formatNumber(value) {
  if (!value) return
  let out = [];
  let temporary = '';

  while (value >= 1000) {
    temporary = Math.trunc(value).toString();
    out.unshift(' ', temporary.slice(-3));
    value /= 1000;
  }
  out.unshift(Math.trunc(value));

  return out.join('')
}
