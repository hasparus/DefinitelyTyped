// Type definitions for theme-ui 0.3.1
// Project: https://github.com/system-ui/theme-ui#readme
// Definitions by: Erik Stockmeier <https://github.com/erikdstock>
//                 Ifiok Jr. <https://github.com/ifiokjr>
//                 Brian Andrews <https://github.com/sbardian>
//                 Rodrigo Pombo <https://github.com/pomber>
//                 Justin Hall <https://github.com/wKovacs64>
//                 Prateek Kathal <https://github.com/prateekkathal>
//                 Piotr Monwid-Olechnowicz <https://github.com/hasparus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as React from 'react';
export * from '@theme-ui/components';
export { css, SystemStyleObject } from '@theme-ui/css';

export {};


export interface ThemeProviderProps<Theme> {
    theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
    children?: React.ReactNode;
}

// tslint:disable-next-line: no-unnecessary-generics
export function ThemeProvider<Theme>(props: ThemeProviderProps<Theme>): React.ReactElement;

/**
 * A React renderer with awareness of the `sx` prop.
 * Requires the [custom @jsx jsx pragma](https://theme-ui.com/sx-prop) declaration
 * at the top of your file for use.
 */
export const jsx: typeof React.createElement;

/**
 * The `sx` prop accepts a `SxStyleProp` object and properties that are part of
 * the `Theme` will be transformed to their corresponding values. Other valid
 * CSS properties are also allowed.
 */
export type SxStyleProp = SystemStyleObject;

export interface SxProps {
    /**
     * The sx prop lets you style elements inline, using values from your
     * theme. To use the sx prop, add the custom pragma as a comment to the
     * top of your module and import the jsx function.
     *
     * ```ts
     * // @jsx jsx
     *
     * import { jsx } from 'theme-ui'
     * ```
     */
    sx?: SxStyleProp;
}

type SxComponent<T extends SxProps = IntrinsicSxElements['div']> = React.ComponentClass<T & { as?: React.ElementType }>;

export interface IntrinsicSxElements {
    p: JSX.IntrinsicElements['p'] & SxProps;
    b: JSX.IntrinsicElements['b'] & SxProps;
    i: JSX.IntrinsicElements['i'] & SxProps;
    a: JSX.IntrinsicElements['a'] & SxProps;
    h1: JSX.IntrinsicElements['h1'] & SxProps;
    h2: JSX.IntrinsicElements['h2'] & SxProps;
    h3: JSX.IntrinsicElements['h3'] & SxProps;
    h4: JSX.IntrinsicElements['h4'] & SxProps;
    h5: JSX.IntrinsicElements['h5'] & SxProps;
    h6: JSX.IntrinsicElements['h6'] & SxProps;
    img: JSX.IntrinsicElements['img'] & SxProps;
    pre: JSX.IntrinsicElements['pre'] & SxProps;
    code: JSX.IntrinsicElements['code'] & SxProps;
    ol: JSX.IntrinsicElements['ol'] & SxProps;
    ul: JSX.IntrinsicElements['ul'] & SxProps;
    li: JSX.IntrinsicElements['li'] & SxProps;
    blockquote: JSX.IntrinsicElements['blockquote'] & SxProps;
    hr: JSX.IntrinsicElements['hr'] & SxProps;
    table: JSX.IntrinsicElements['table'] & SxProps;
    tr: JSX.IntrinsicElements['tr'] & SxProps;
    th: JSX.IntrinsicElements['th'] & SxProps;
    td: JSX.IntrinsicElements['td'] & SxProps;
    em: JSX.IntrinsicElements['em'] & SxProps;
    strong: JSX.IntrinsicElements['strong'] & SxProps;
    div: JSX.IntrinsicElements['div'] & SxProps;
    delete: JSX.IntrinsicElements['div'] & SxProps;
    inlineCode: JSX.IntrinsicElements['div'] & SxProps;
    thematicBreak: JSX.IntrinsicElements['div'] & SxProps;
    root: JSX.IntrinsicElements['div'] & SxProps;
}

export type StyledTags = keyof IntrinsicSxElements;

export const Styled: {
    [P in keyof IntrinsicSxElements]: SxComponent<IntrinsicSxElements[P]>;
} &
    SxComponent;

interface ThemeUIContext {
    theme: Theme;
    components: { [P in keyof IntrinsicSxElements]: SxComponent<IntrinsicSxElements[P]> };
}

export const Context: React.Context<ThemeUIContext>;

/**
 * A hook for retrieving the ThemeUI Context.
 */
export function useThemeUI(): ThemeUIContext;

/**
 * A hook retrieving the current color mode and a setter for a new color mode
 * in the theme.
 *
 * @param initialMode - the default color mode to use
 */
export function useColorMode<Modes extends string>(
    initialMode?: Modes,
): [Modes, React.Dispatch<React.SetStateAction<Modes>>];

export const InitializeColorMode: React.ComponentType;
export const ColorMode: React.ComponentType;

declare module 'react' {
    // tslint:disable-next-line: no-empty-interface
    interface DOMAttributes<T> extends SxProps {}
}

declare global {
    namespace JSX {
        // tslint:disable-next-line: no-empty-interface
        interface IntrinsicAttributes extends SxProps {}
    }
}
