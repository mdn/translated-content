---
title: text-transform
slug: Web/CSS/text-transform
---

{{CSSRef}}

A propriedade de CSS **`text-transform`** especifica como capitalizar um texto de um elemento. Pode ser usado para que o texto apareça com todas as letras maiúsculas ou todas minúsculas, ou com cada palavra em maiúscula.

```css
/* Keyword values */
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: none;
text-transform: full-width;

/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: unset;
```

The `text-transform` property takes into account language-specific case mapping rules, like:

- in Turkic languages, like Turkish (`tr`), Azerbaijani (`az`), Crimean Tatar (`crh`), Volga Tatar (`tt`), and Bashkir (`ba`), there are two kinds of i, with and without the dot, and two case pairings: `i`/`İ` and `ı`/`I`.
- In German (`de`), the `ß` becomes `SS` in uppercase.
- In Dutch (`nl`), the `ij` digraph becomes `IJ`, even with `text-transform: capitalize`, which only put the first letter of a word in uppercase.
- In Greek (`el`), vowels lose their accent when the whole word is in uppercase (`ά`/`Α`), except for the disjunctive eta (`ή`/`Ή`). Also, diphthongs with an accent on the first vowel lose the accent and gain a diaeresis on the second vowel (`άι`/`ΑΪ`).
- In Greek (`el`), the lowercase sigma character has two forms: `σ` and `ς`. `ς` is used only when sigma terminates a word. When applying `text-transform: lowercase` to an uppercase sigma (`Σ`), the browser needs to choose the right lowercase form based on context.
- in Irish (`ga`), certain prefixed letters remain in lowercase when the base initial is capitalised, so for example `text-transform: uppercase` will change `ar aon tslí` to `AR AON tSLÍ` and not, as one might expect, `AR AON TSLÍ` (Firefox only). In some cases, a hyphen is also removed upon uppercasing: `an t-uisce` transforms to `AN tUISCE` (and the hyphen is correctly reinserted by `text-transform: lowercase`)

The language is defined by the `lang` HTML attribute or the `xml:lang` XML attribute.

Support for these specific cases vary from one browser to the other, so check the [browser compatibility table](#Browser_compatibility).

{{cssinfo}}

## Syntax

- `capitalize`

  - : Is a keyword forcing the first _letter_ of each word to be converted to uppercase. Other characters are unchanged; that is, they retain their original case as written in the element's text. A letter is any Unicode character part of the Letter or Number general categories {{experimental_inline}} : it excludes any punctuation marks or symbols at the beginning of the word.

    > **Nota:** Authors should not expect `capitalize` to follow language-specific title casing conventions (such as skipping articles in English).

    > **Nota:** The `capitalize` keyword was under-specified in CSS 1 and CSS 2.1. There were differences between browsers in the way the first letter was calculated (Firefox considered - and \_ as letters, but not the others. Both Webkit and Gecko incorrectly considered letter-based symbols like `ⓐ` to be real letters. Internet Explorer 9 was the closest to the CSS 2 definition, but with some weird cases). By precisely defining the correct behavior, CSS Text Level 3 cleans this mess up. The `capitalize` line in the browser compatibility table contains the version the different engines started to support this now precisely defined behavior.

- `uppercase`
  - : Is a keyword forcing all characters to be converted to uppercase.
- `lowercase`
  - : Is a keyword forcing all characters to be converted to lowercase.
- `none`
  - : Is a keyword preventing the case of all characters to be changed.
- `full-width` {{experimental_inline}}
  - : Is a keyword forcing the writing of a character — mainly ideograms and latin scripts — inside a square, allowing them to be aligned in the usual East Asian scripts (like Chinese or Japanese).

### Formal syntax

{{csssyntax}}

## Examples

### Example using "none"

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>
</p>
<p>
  text-transform: none
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: none;
}
strong {
  float: right;
}
```

This demonstrates no text transformation.

{{ EmbedLiveSample('Example using "none"', '100%', '100px') }}

### `capitalize` (General)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

This demonstrates text capitalization.

{{ EmbedLiveSample('capitalize_(General)', '100%', '100px') }}

### `capitalize` (Punctuation)

```html
<p>
  Initial String
  <strong
    >(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize?
    ?¡transform!</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize?
      ?¡transform!</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

This demostrates how initial punctuations of a word are ignored. The keyword target the first letter, that is the first Unicode character part of the Letter or Number general category.

{{ EmbedLiveSample('capitalize_(Punctuation)', '100%', '100px') }}

### `capitalize` (Symbols)

```html
<p>
  Initial String
  <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

This demonstrates how initial symbols are ignored. The keyword target the first letter, that is the first Unicode character part of the Letter or Number general category.

{{ EmbedLiveSample('capitalize_(Symbols)', '100%', '100px') }}

### `capitalize` (Dutch _ij_ digraph)

```html
<p>
  Initial String
  <strong lang="nl">The Dutch word: "ijsland" starts with a digraph.</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span lang="nl"
      >The Dutch word: "ijsland" starts with a digraph.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

This demonstrates how the Dutch _ij_ digraph must be handled like one single letter.

{{ EmbedLiveSample('capitalize_(Dutch_ij_digraph)', '100%', '100px') }}

### `uppercase` (General)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

This demonstrates transforming the text to uppercase.

{{ EmbedLiveSample('uppercase_(General)', '100%', '100px') }}

### `uppercase` (Greek Vowels)

```html
<p>
  Initial String
  <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong>
</p>
<p>
  text-transform: uppercase
  <strong><span>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong>
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

This demonstrates how Greek vowels except disjunctive _eta_ should have no accent, and the accent on the first vowel of a vowel pair becomes a diaeresis on the second vowel.

{{ EmbedLiveSample('uppercase_(Greek_Vowels)', '100%', '100px') }}

### `lowercase` (General)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

This demonstrates transforming the text to lowercase.

{{ EmbedLiveSample('lowercase_(General)', '100%', '100px') }}

### `lowercase` (Greek Σ)

```html
<p>
  Initial String
  <strong>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

This demonstrates how the Greek character sigma (`Σ`) is transformed into the regular lowercase sigma (`σ`) or the word-final variant (`ς`), according the context.

{{ EmbedLiveSample('lowercase_(Greek_Σ)', '100%', '100px') }}

### `full-width` (General)

```html
<p>
  Initial String
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Some characters exists in two formats, normal width and a full-width, with different Unicode code points. The full-width version is used to mix them smoothly with Asian ideographic characters.

{{ EmbedLiveSample('full-width_(General)', '100%', '175px') }}

## Specifications

| Specification                                                   | Status                 | Comment                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS4 Text', '#text-transform', 'text-transform')}}  | {{Spec2('CSS4 Text')}} | From {{SpecName('CSS3 Text', '#text-transform', 'text-transform')}}, adds the `full-size-kana` keyword and allows the `full-width` keyword to be used together with another keyword.                                                                                                                                                                                                 |
| {{SpecName('CSS3 Text', '#text-transform', 'text-transform')}}  | {{Spec2('CSS3 Text')}} | From {{SpecName('CSS2.1', 'text.html#caps-prop', 'text-transform')}}, extends letters to any Unicode character in the Number or Letter general category. Modifies the behavior of `capitalize` to apply to the first letter of the word, ignoring initial punctuations or symbols. Adds the `full-width` keyword to mix smoothly ideographic characters and alphabetical characters. |
| {{SpecName('CSS2.1', 'text.html#caps-prop', 'text-transform')}} | {{Spec2('CSS2.1')}}    | From {{SpecName('CSS1', '#text-transform', 'text-transform')}}, extends letters to non-latin bi-cameral scripts                                                                                                                                                                                                                                                                      |
| {{SpecName('CSS1', '#text-transform', 'text-transform')}}       | {{Spec2('CSS1')}}      | Initial definition                                                                                                                                                                                                                                                                                                                                                                   |

## Compatibilidade com navegadores

{{Compat("css.properties.text-transform")}}

## See also

- {{cssxref("font-variant")}}
