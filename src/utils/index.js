/**
 * Useful function to combine an array of classes
 */
export function classList(...classes) {
  return classes
    .filter(Boolean)
    .join(' ');
}
