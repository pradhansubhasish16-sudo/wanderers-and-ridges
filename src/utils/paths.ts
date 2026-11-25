const cleanBase = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Prefixes a root-relative path with Astro's configured BASE_URL without duplicating it.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  if (cleanBase && (path === cleanBase || path.startsWith(`${cleanBase}/`))) {
    return path;
  }
  return `${cleanBase}${path}`;
}

/**
 * Resolves encoded fallback JPEG/PNG and WebP asset URLs for a public image path.
 */
export function resolveImageAssets(src: string): { fallbackSrc: string; webpSrc: string } {
  const fallbackSrc = encodeURI(withBase(src));
  const webpSrc = fallbackSrc.replace(/\.(jpe?g|png)$/i, '.webp');
  return { fallbackSrc, webpSrc };
}
