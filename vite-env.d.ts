/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

// Asset type declarations for Vite
// These declarations are necessary because Vite and vite-imagetools
// do not provide default type declarations for image imports

// Basic image imports (without query parameters)
declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.avif" {
  const src: string;
  export default src;
}

declare module "*.ico" {
  const src: string;
  export default src;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

// vite-imagetools query parameter declarations
// These allow TypeScript to recognize image imports with query parameters
// like ?format=webp, ?w=400, etc.
declare module "*?format=webp" {
  const src: string;
  export default src;
}

declare module "*?format=avif" {
  const src: string;
  export default src;
}

declare module "*?format=png" {
  const src: string;
  export default src;
}

declare module "*?format=jpg" {
  const src: string;
  export default src;
}

// For multiple query parameters (e.g., ?w=400&format=webp)
declare module "*?*" {
  const src: string;
  export default src;
}
