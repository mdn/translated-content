---
title: font-family
slug: Web/CSS/font-family
---

{{CSSRef}}

CSS **`font-family`** 속성은 선택된 요소에 우선 순위가 지정된 font family 이름과 generic family 이름을 지정할 수 있게 해줍니다.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

값은 콤마로 구분하여 대체가 될 수 있음을 나타냅니다. 브라우저는 폰트 목록에서 컴퓨터에 설치되어 있거나 {{cssxref("@font-face")}} 규칙을 이용하여 다운로드 받을 수 있는 폰트 중 가장 첫번째 폰트를 선택할 것입니다.

웹 제작자는 font-family 목록에 최소 한 개의 generic family를 추가해야 하는데, 시스템이나 {{cssxref("@font-face")}} 규칙을 이용 해 다운로드 받은 폰트 중에 특정 폰트가 있다는 것을 보장할 수 없기 때문입니다. generic family는 브라우저가 대체할 수 있는 폰트가 필요한 경우 선택할 수 있게 해줍니다.

font-size를 설정하거나 다른 폰트 관련 속성들을 한꺼번에 지정하는 경우 {{cssxref("font")}}가 단축형으로 자주 사용됩니다.

## 구문

```css
/* A font family name and a generic family name */
font-family:
  Gill Sans Extrabold,
  sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;

/* Global values */
font-family: inherit;
font-family: initial;
font-family: unset;
```

The `font-family` property lists one or more font families, separated by commas. Each font family is specified as either a [\<family-name>](#family-name) or a [\<generic-name>](#generic-name) value.

The example below lists two font families, the first with a `<family-name>` and the second with a `<generic-name>`:

```
font-family: Gill Sans Extrabold, sans-serif;
```

### 값

- `<family-name>`

  - : The name of a font family. For example, "Times" and "Helvetica" are font families. Font family names containing whitespace should be quoted.

- `<generic-name>`

  - : Generic font families are a fallback mechanism, a means of preserving some of the style sheet author's intent when none of the specified fonts are available. Generic family names are keywords and must not be quoted. A generic font family should be the last item in the list of font family names. The following keywords are defined:

    - `serif`
      - : Glyphs have finishing strokes, flared or tapering ends, or have actual serifed endings.
        E.g. Lucida Bright, Lucida Fax, Palatino, "Palatino Linotype", Palladio, "URW Palladio", serif.
    - `sans-serif`
      - : Glyphs have stroke endings that are plain.
        E.g. "Open Sans", "Fira Sans", "Lucida Sans", "Lucida Sans Unicode", "Trebuchet MS", "Liberation Sans", "Nimbus Sans L", sans-serif.
    - `monospace`
      - : All glyphs have the same fixed width.
        E.g. "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace.
    - `cursive`
      - : Glyphs in cursive fonts generally have either joining strokes or other cursive characteristics beyond those of italic typefaces. The glyphs are partially or completely connected, and the result looks more like handwritten pen or brush writing than printed letterwork.
        E.g. "Brush Script MT", "Brush Script Std", "Lucida Calligraphy", "Lucida Handwriting", "Apple Chancery", cursive.
    - `fantasy`
      - : Fantasy fonts are primarily decorative fonts that contain playful representations of characters.
        E.g. Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.
    - `system-ui`
      - : Glyphs are taken from the default user interface font on a given platform. Because typographic traditions vary widely across the world, this generic is provided for typefaces that don't map cleanly into the other generics.

### 유효한 폰트 패밀리 이름

Font family names must either be given quoted as strings, or unquoted as a sequence of one or more identifiers. This means that punctuation characters and digits at the start of each token must be escaped in unquoted font family names.

For example, the following declarations are valid:

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;
```

The following declarations are **invalid**:

```css example-bad
font-family:
  Goudy Bookletter 1911,
  sans-serif;
font-family: Red/Black, sans-serif;
font-family:
  "Lucida" Grande,
  sans-serif;
font-family: Ahem!, sans-serif;
font-family:
  test @foo,
  sans-serif;
font-family: #POUND, sans-serif;
font-family:
  Hawaii 5-0,
  sans-serif;
```

### 형식 구문

{{csssyntax}}

## 예제

### Some common font families

```css
.serif {
  font-family:
    Times,
    Times New Roman,
    Georgia,
    serif;
}

.sansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.monospace {
  font-family:
    Lucida Console,
    Courier,
    monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}
```

```html hidden
<div class="serif">This is an example of a serif font.</div>
<div class="sansserif">This is an example of a sans-serif font.</div>
<div class="monospace">This is an example of a monospace font.</div>
<div class="cursive">This is an example of a cursive font.</div>
<div class="fantasy">This is an example of a fantasy font.</div>
```

{{ EmbedLiveSample('Some_common_font_families','600','220') }}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}
