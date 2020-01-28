// Type definitions for @theme-ui/css 0.3.1
// Project: https://github.com/system-ui/theme-ui/
// Definitions by: Sebastian Sebald <https://github.com/sebald>
//                 Bartosz Szewczyk <https://github.com/sztobar>
//                 Piotr Monwid-Olechnowicz <https://github.com/hasparus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

// Mostly copied from @styled-system/css to match what happened with source code
// https://github.com/system-ui/theme-ui/issues/417

import * as CSS from 'csstype';
import { Theme as StyledSystemTheme } from 'styled-system';

type StandardCSSProperties = CSS.PropertiesFallback<number | string>;


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

/**
 * Omit exists in TypeScript >= v3.5, we're putting this here so typings can be
 * used with earlier versions of TypeScript.
 */
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 *
 * For more information see: https://styled-system.com/responsive-styles
 */
export type ResponsiveStyleValue<T> = T | Array<T | null>;

/**
 * All non-vendor-prefixed CSS properties. (Allow `number` to support CSS-in-JS libs,
 * since they are converted to pixels)
 */
export interface CSSProperties extends CSS.StandardProperties<number | string>, CSS.SvgProperties<number | string> {}

/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...)
 */
export type CSSPseudoSelectorProps = { [K in CSS.Pseudos]?: SystemStyleObject };

/**
 * CSS as POJO that is compatible with CSS-in-JS libaries.
 * Copied directly from [emotion](https://github.com/emotion-js/emotion/blob/ca3ad1c1dcabf78a95b55cc2dc94cad1998a3196/packages/serialize/types/index.d.ts#L45) types
 */
export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudosForCSSObject, CSSOthersObjectForCSSObject {}

type CSSPropertiesWithMultiValues = {
    [K in keyof CSSProperties]: CSSProperties[K];
};
type CSSPseudosForCSSObject = { [K in CSS.Pseudos]?: CSSObject };
type CSSInterpolation = undefined | number | string | CSSObject;
interface CSSOthersObjectForCSSObject {
    [propertiesName: string]: CSSInterpolation;
}

/**
 * Map all nested selectors
 */
interface CSSSelectorObject {
    [cssSelector: string]: SystemStyleObject;
}

interface AliasesCSSProperties {
    /**
     * The **`background-color`** CSS property sets the background color of an element.
     *
     * **Initial value**: `transparent`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/background-color
     */
    bg?: StandardCSSProperties['backgroundColor'];
    /**
     * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin
     */
    m?: StandardCSSProperties['margin'];
    /**
     * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
     */
    mt?: StandardCSSProperties['marginTop'];
    /**
     * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
     */
    mr?: StandardCSSProperties['marginRight'];
    /**
     * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
     */
    mb?: StandardCSSProperties['marginBottom'];
    /**
     * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
     */
    ml?: StandardCSSProperties['marginLeft'];
    /**
     * The **`mx`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value placesit
     * farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://styled-system.com/#margin-props
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
     */
    mx?: StandardCSSProperties['marginLeft'];
    /**
     * The **`marginX`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value
     * places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://styled-system.com/#margin-props
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
     */
    marginX?: StandardCSSProperties['marginLeft'];
    /**
     * The **`my`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places it
     * farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://styled-system.com/#margin-props
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
     */
    my?: StandardCSSProperties['marginTop'];
    /**
     * The **`marginY`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places
     * it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://styled-system.com/#margin-props
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
     */
    marginY?: StandardCSSProperties['marginTop'];
    /**
     * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding
     */
    p?: StandardCSSProperties['padding'];
    /**
     * The **`padding-top`** padding area on the top of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
     */
    pt?: StandardCSSProperties['paddingTop'];
    /**
     * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
     */
    pr?: StandardCSSProperties['paddingRight'];
    /**
     * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
     */
    pb?: StandardCSSProperties['paddingBottom'];
    /**
     * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
     */
    pl?: StandardCSSProperties['paddingLeft'];
    /**
     * The **`px`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://styled-system.com/#padding-props
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
     */
    px?: StandardCSSProperties['paddingLeft'];
    /**
     * The **`paddingX`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://styled-system.com/#padding-props
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
     */
    paddingX?: StandardCSSProperties['paddingLeft'];
    /**
     * The **`py`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://styled-system.com/#padding-props
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
     */
    py?: StandardCSSProperties['paddingTop'];
    /**
     * The **`paddingY`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://styled-system.com/#padding-props
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
     */
    paddingY?: StandardCSSProperties['paddingTop'];

    /**
     * The **`size`** is shorthand property for CSS properties **`width`** and **`height`**. They set the width and height of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://github.com/system-ui/theme-ui/blob/master/packages/css/src/index.js#L39
     * @see https://developer.mozilla.org/docs/Web/CSS/height
     * @see https://developer.mozilla.org/docs/Web/CSS/width
     */
    size?: StandardCSSProperties['width'];
}

interface OverwriteCSSProperties {
    /**
     * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the
     * element, blur and spread radii, and color.
     *
     * **Initial value**: `none`
     *
     * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
     * | :-----: | :-----: | :-----: | :----: | :---: |
     * | **10**  |  **4**  | **5.1** | **12** | **9** |
     * | 1 _-x-_ |         | 3 _-x-_ |        |       |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
     */
    boxShadow?: CSS.BoxShadowProperty | number;
    /**
     * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only
     * available in `normal` and `bold`.
     *
     * **Initial value**: `normal`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **2**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
     */
    fontWeight?: CSS.FontWeightProperty | string;
}

/**
 * Map of all available CSS properties (including aliases) and their raw value.
 * Only used internally to map CCS properties to input types (responsive value,
 * theme function or nested) in `SystemCssProperties`.
 */
interface AllSystemCSSProperties
    extends Omit<CSSProperties, 'boxShadow' | 'fontWeight'>,
        AliasesCSSProperties,
        OverwriteCSSProperties {}

export type SystemCssProperties = {
    [K in keyof AllSystemCSSProperties]:
        | ResponsiveStyleValue<AllSystemCSSProperties[K]>
        | ((theme: any) => ResponsiveStyleValue<AllSystemCSSProperties[K]>)
        | SystemStyleObject;
};

interface VariantProperty {
    /**
     * **`Variants`** can be useful for applying complex styles to a component based on a single prop.
     *
     * @example
     * const theme = {
     *   buttons: {
     *     primary: {
     *       p: 3,
     *       fontWeight: 'bold',
     *       color: 'white',
     *       bg: 'primary',
     *       borderRadius: 2,
     *     },
     *   },
     * }
     * const result = css({
     *   variant: 'buttons.primary',
     * })(theme)
     *
     * @see https://styled-system.com/variants
     */
    variant: string;
}

interface UseThemeFunction {
    (theme: any): SystemStyleObject;
}

type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> };

/**
 * The `SystemStyleObject` extends [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type SystemStyleObject =
    | SystemCssProperties
    | CSSPseudoSelectorProps
    | CSSSelectorObject
    | VariantProperty
    | UseThemeFunction;

/**
 * To use Theme UI color modes, color scales should include at least a text
 * and background color. These values are used in the ColorMode component to
 * set body foreground and background colors. Color modes should be defined as
 * nested objects within a theme.colors.modes object. Each key in this object
 * should correspond to a color mode name, where the name can be anything, but
 * typically light and dark are used for applications with a dark mode. The
 * initialColorModeName key is required to enable color modes and will be used as
 * the name for the root color palette.
 */
export type ColorMode = {
    [k: string]: CSS.ColorProperty | ObjectOrArray<CSS.ColorProperty>;
} & {
    /**
     * Body background color
     */
    background: CSS.ColorProperty;

    /**
     * Body foreground color
     */
    text: CSS.ColorProperty;

    /**
     * Primary brand color for links, buttons, etc.
     */
    primary?: CSS.ColorProperty;

    /**
     * A secondary brand color for alternative styling
     */
    secondary?: CSS.ColorProperty;

    /**
     * A faint color for backgrounds, borders, and accents that do not require
     * high contrast with the background color
     */
    muted?: CSS.ColorProperty;

    /**
     * A contrast color for emphasizing UI
     */
    accent?: CSS.ColorProperty;
};

export interface Theme extends StyledSystemTheme {
    /**
     * Enable/disable custom CSS properties/variables if lower browser
     * support is required (for eg. IE 11).
     *
     * References: https://theme-ui.com/color-modes/#turn-off-custom-properties
     */
    useCustomProperties?: boolean;

    /**
     * Provide a value here to enable color modes
     */
    initialColorModeName?: string;

    /**
     * Define the colors that are available through this theme
     */
    colors?: ColorMode & {
        /**
         * Nested color modes can provide overrides when used in conjunction with
         * `Theme.initialColorMode and `useColorMode()`
         */
        modes?: {
            [k: string]: ColorMode;
        };
    };

    /**
     * Styles for elements rendered in MDX can be added to the theme.styles
     * object. This is the primary, low-level way to control typographic and
     * other styles in markdown content. Styles within this object are processed
     * with @theme-ui/css and have access to base theme values like colors,
     * fonts, etc.
     */
    styles?: {
        [P in StyledTags]?: SystemStyleObject;
    };

    // Variants
}

/**
 * Helper to define theme values.
 *
 * Theme values can be nested, but their value eventually has to match a certain `CSSProperty`.
 * E.g. `colors.light.primary`, `primary` has to be from type `CSS.ColorProperty`.
 */
export type ThemeValue<T> =
    | T[]
    | {
          [name: string]: T | ThemeValue<T>;
      };

export interface ScaleThemeProperties {
    /**
     * | Prop                | CSS Property     | Theme Field |
     * | :------------------ | :--------------- | :---------- |
     * | color               | color            | colors      |
     * | bg, backgroundColor | background-color | colors      |
     *
     * @see https://styled-system.com/table#color
     */
    colors?: ThemeValue<CSS.ColorProperty>;
    /**
     * | Prop              | CSS Property                   | Theme Field |
     * | :---------------- | :----------------------------- | :---------- |
     * | m, margin	       | margin                         | space       |
     * | mt, marginTop     | margin-top                     | space       |
     * | mr, marginRight   | margin-right                   | space       |
     * | mb, marginBottom  | margin-bottom                  | space       |
     * | ml, marginLeft    | margin-left                    | space       |
     * | mx                | margin-left and margin-right   | space       |
     * | my                | margin-top and margin-bottom   | space       |
     * | p, padding        | padding                        | space       |
     * | pt, paddingTop    | padding-top                    | space       |
     * | pr, paddingRight  | padding-right                  | space       |
     * | pb, paddingBottom | padding-bottom                 | space       |
     * | pl, paddingLeft   | padding-left                   | space       |
     * | px                | padding-left and padding-right | space       |
     * | py                | padding-top and padding-bottom | space       |
     *
     * @see https://styled-system.com/table#space
     */
    space?: ThemeValue<CSS.MarginProperty<number> & CSS.PaddingProperty<number>>;
    /**
     * | Prop       | CSS Property | Theme Field |
     * | :--------- | :----------- | :---------- |
     * | fontFamily | font-family  | fonts       |
     *
     * @see https://styled-system.com/table#typography
     */
    fonts?: ThemeValue<CSS.FontFamilyProperty>;
    /**
     * | Prop     | CSS Property | Theme Field |
     * | :------- | :----------- | :---------- |
     * | fontSize | font-size    | fontSizes   |
     *
     * @see https://styled-system.com/table#typography
     */
    fontSizes?: ThemeValue<CSS.FontSizeProperty<number>>;
    /**
     * | Prop       | CSS Property | Theme Field |
     * | :--------- | :----------- | :---------- |
     * | fontWeight | font-weight  | fontWeights |
     *
     * @see https://styled-system.com/table#typography
     */
    fontWeights?: ThemeValue<CSS.FontWeightProperty>;
    /**
     * | Prop       | CSS Property | Theme Field |
     * | :--------- | :----------- | :---------- |
     * | lineHeight | line-height  | lineHeights |
     *
     * @see https://styled-system.com/table#typography
     */
    lineHeights?: ThemeValue<CSS.LineHeightProperty<string>>;
    /**
     * | Prop          | CSS Property   | Theme Field    |
     * | :------------ | :------------- | :------------- |
     * | letterSpacing | letter-spacing | letterSpacings |
     *
     * @see https://styled-system.com/table#typography
     */
    letterSpacings?: ThemeValue<CSS.LetterSpacingProperty<string | number>>;
    /**
     * | Prop         | CSS Property               | Theme Field |
     * | :----------- | :------------------------- | :---------- |
     * | border       | border                     | borders     |
     * | borderTop    | border-top                 | borders     |
     * | borderRight  | border-right               | borders     |
     * | borderBottom | border-bottom              | borders     |
     * | borderLeft   | border-left                | borders     |
     * | borderX      | border-left & border-right | borders     |
     * | borderY      | border-top & border-bottom | borders     |
     *
     * @see https://styled-system.com/table#border
     */
    borders?: ThemeValue<CSS.BorderProperty<{}>>;
    /**
     * | Prop        | CSS Property | Theme Field  |
     * | :---------- | :----------- | :----------- |
     * | borderWidth | border-width | borderWidths |
     *
     * @see https://styled-system.com/table#border
     */
    borderWidths?: ThemeValue<CSS.BorderWidthProperty<{}>>;
    /**
     * | Prop        | CSS Property | Theme Field  |
     * | :---------- | :----------- | :----------- |
     * | borderStyle | border-style | borderStyles |
     *
     * @see https://styled-system.com/table#border
     */
    borderStyles?: ThemeValue<CSS.LineStyle>;
    /**
     * | Prop         | CSS Property  | Theme Field |
     * | :----------- | :------------ | :---------- |
     * | borderRadius | border-radius | radii       |
     *
     * @see https://styled-system.com/table#border
     */
    radii?: ThemeValue<CSS.BorderRadiusProperty<{}>>;
    /**
     * | Prop       | CSS Property | Theme Field |
     * | :--------- | :----------- | :---------- |
     * | textShadow | text-shadow  | shadows     |
     * | boxShadow  | box-shadow   | shadows     |
     *
     * @see https://styled-system.com/table#shadow
     */
    shadows?: ThemeValue<CSS.BoxShadowProperty>;
    /**
     * | Prop    | CSS Property | Theme Field |
     * | :------ | :----------- | :---------- |
     * | zIndex  | z-index      | zIndices    |
     *
     * @see https://styled-system.com/table#position
     */
    zIndices?: ThemeValue<CSS.ZIndexProperty>;
    /**
     * | Prop      | CSS Property | Theme Field |
     * | :-------- | :----------- | :---------- |
     * | width     | width        | sizes       |
     * | height    | height       | sizes       |
     * | minWidth  | min-width    | sizes       |
     * | maxWidth  | max-width    | sizes       |
     * | minHeight | min-height   | sizes       |
     * | maxHeight | max-height   | sizes       |
     * | size      | width height | sizes       |
     *
     * @see https://styled-system.com/table#layout
     */
    sizes?: ThemeValue<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>>;
}

/**
 * Transforms `input` to a style object that can be processed by CSS-in-JS
 * libraries. Note that this function should be used with the [css prop](https://emotion.sh/docs/css-prop).
 *
 * If you're using variants in your theme, you can access them by using the `variant`
 * property. The value of the property has to correspond to a path of your `Theme`.
 */
export function css(
    input?: SystemStyleObject,
): (props?: import('theme-ui').Theme | { theme: import('theme-ui').Theme }) => CSSObject;
export default css;

/**
 * Safe getter with fallback. Basically https://github.com/developit/dlv
 */
export function get(object: object, key: string | string[], defaultValue?: any): any;

/**
 * Get responsive array from styles and theme.
 */
export function responsive(styles: object): (theme: object) => any[];
