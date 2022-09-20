export function getDateFromTimestamp(timestamp: number) {
  return new Date(timestamp).toLocaleDateString();
}
