# Tailwind Linear Scale

A more intuitive and predictable scaling system for Tailwind CSS v4 & v3. This configuration replaces Tailwind's default scaling system with a linear scale that makes it easier to work with design systems.

## Version Support

This repository supports both Tailwind CSS v4 and v3:

- [`main`](https://github.com/harshmandan/tailwind-linear-scale) branch: CSS configuration for Tailwind CSS v4
- [`v3` branch](https://github.com/harshmandan/tailwind-linear-scale/tree/v3): JavaScript configuration for Tailwind CSS v3

Both versions implement the same linear scale system, just in different formats to match their respective Tailwind versions.

## Why Linear Scale?

Tailwind's default scaling system can be unintuitive:

- Class names like `text-xl`, `text-2xl` don't immediately tell you the actual size
- Spacing values like `p-4` mean 16px (1rem) by default, which isn't immediately clear
- Border radius and breakpoint values follow a similar pattern

This configuration implements a linear scale where:

- Numbers directly correspond to pixel values at the _base_ font size
- All values are calculated using the same consistent scale factor as tailwind's default system
- Class names are more predictable and easier to understand
- Makes it very easy to work with design systems (Figma)

## Example:

```html
<div class="p-4 text-16 rounded-4">
  <!-- 4px padding, 16px text, 4px border radius -->
</div>
```

## Usage

1. Copy the CSS files from this repository
2. Import them into your Tailwind configuration
3. Use the new class names in your HTML

## Features

### Typography Scale

| Vanilla Tailwind | Linear Scale | Pixel Value (at base scale) |
| ---------------- | ------------ | --------------------------- |
| `text-xs`        | `text-12`    | 12px                        |
| `text-sm`        | `text-14`    | 14px                        |
| `text-base`      | `text-16`    | 16px                        |
| `text-lg`        | `text-18`    | 18px                        |
| `text-xl`        | `text-20`    | 20px                        |
| `text-2xl`       | `text-24`    | 24px                        |
| `text-3xl`       | `text-30`    | 30px                        |
| `text-4xl`       | `text-36`    | 36px                        |
| `text-5xl`       | `text-48`    | 48px                        |
| `text-6xl`       | `text-60`    | 60px                        |
| `text-7xl`       | `text-72`    | 72px                        |
| `text-8xl`       | `text-96`    | 96px                        |
| `text-9xl`       | `text-128`   | 128px                       |

### Spacing Scale

| Vanilla Tailwind | Linear Scale | Pixel Value (at base scale) |
| ---------------- | ------------ | --------------------------- |
| `p-0`            | `p-0`        | 0px                         |
| `p-1`            | `p-4`        | 4px                         |
| `p-2`            | `p-8`        | 8px                         |
| `p-3`            | `p-12`       | 12px                        |
| `p-4`            | `p-16`       | 16px                        |

### Border Radius Scale

| Vanilla Tailwind | Linear Scale   | Pixel Value (at base scale) |
| ---------------- | -------------- | --------------------------- |
| `rounded-none`   | `rounded-0`    | 0px                         |
| `rounded-sm`     | `rounded-2`    | 2px                         |
| `rounded`        | `rounded-4`    | 4px                         |
| `rounded-md`     | `rounded-8`    | 8px                         |
| `rounded-lg`     | `rounded-12`   | 12px                        |
| `rounded-xl`     | `rounded-16`   | 16px                        |
| `rounded-2xl`    | `rounded-24`   | 24px                        |
| `rounded-full`   | `rounded-full` | 9999px                      |

### Breakpoints

| Vanilla Tailwind | Linear Scale | Pixel Value (at base scale) |
| ---------------- | ------------ | --------------------------- |
| `sm`             | `640`        | 640px                       |
| `md`             | `768`        | 768px                       |
| `lg`             | `1024`       | 1024px                      |
| `xl`             | `1280`       | 1280px                      |
| `2xl`            | `1536`       | 1536px                      |

Container sizes follow the same pattern:

| Vanilla Tailwind | Linear Scale | Pixel Value (at base scale) |
| ---------------- | ------------ | --------------------------- |
| `@3xs`           | `@256`       | 256px                       |
| `@2xs`           | `@288`       | 288px                       |
| `@xs`            | `@320`       | 320px                       |
| `@sm`            | `@384`       | 384px                       |
| `@md`            | `@448`       | 448px                       |
| `@lg`            | `@512`       | 512px                       |
| `@xl`            | `@576`       | 576px                       |
| `@2xl`           | `@672`       | 672px                       |
| `@3xl`           | `@768`       | 768px                       |
| `@4xl`           | `@896`       | 896px                       |
| `@5xl`           | `@1024`      | 1024px                      |
| `@6xl`           | `@1152`      | 1152px                      |
| `@7xl`           | `@1280`      | 1280px                      |

## How It Works

The system uses a base scale factor (`--spacing-scale: 0.0625em`) to calculate all values. This means:

- At the default font size (16px), 1 unit = 1px
- All values scale proportionally with the font size
- The system remains responsive while being more predictable
