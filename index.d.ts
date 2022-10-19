export default function count(
  data: any,
  options?: {
    debug?: boolean | undefined,
    depth?: number | undefined,
    counts?: { [key: string]: number; } | undefined,
    currentDepth?: number | undefined,
  })
: { [key: string]: number; };
