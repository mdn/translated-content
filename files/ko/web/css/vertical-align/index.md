---
title: vertical-align
slug: Web/CSS/vertical-align
---

{{CSSRef}}

**`vertical-align`** [CSS](/ko/docs/Web/CSS) 속성은 inline 또는 table-cell box에서의 수직 정렬을 지정합니다.

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

vertical-align 속성은 두 가지 상황에서 사용할 수 있습니다.

- 인라인 요소의 상자를 선 상자를 포함해 자기 자신 안에 수직으로 정렬합니다. 예를 들어, 텍스트 줄에 이미지를 세로로 배치하는 데 사용할 수 있습니다.
- 테이블 셀 내용을 정렬합니다.

`vertical-align`은 인라인, 인라인 블록 및 테이블 셀 요소에만 적용되므로 블록 레벨 요소를 수직으로 정렬하는 데 사용할 수 없습니다.

## 구문

```css
/* Keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;

/* Global values */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

`vertical-align` 속성은 아래 나열된 값 중 하나로 지정됩니다.

### 인라인 요소의 값

#### 부모-상대 값

다음 값은 요소를 부모 요소에 대해 수직으로 정렬합니다.

- `baseline`
  - : 부모의 baseline에 맞추어 해당 엘리먼트의 baseline 을 정렬합니다. 몇몇 [replaced elements](/ko/docs/Web/CSS/Replaced_element)의 베이스라인은 예를들면{{HTMLElement("textarea")}}은 HTML 명세에 정의되어 있지 않으므로, 이 키워드는 브라우저마다 다른 결과를 보여줍니다.
- `sub`
  - : 해당 엘리먼트의 baseline을 부모의 subscript-baseline으로 정렬합니다.
- `super`
  - : 해당 엘리먼트의 baseline을 부모의 superscript-baseline으로 정렬합니다.
- `text-top`
  - : 해당 엘리먼트의 top을 부모 엘리먼트 폰트의 top으로 정렬합니다.
- `text-bottom`
  - : 해당 엘리먼트의 bottom을 부모 엘리먼트 폰트의 bottom으로 정렬합니다.
- `middle`
  - : 해당 엘리먼트의 middle을 부모의 baseline + x-height / 2 로 정렬합니다.
- {{cssxref("&lt;length&gt;")}}
  - : 해당 엘리먼트의 baseline을 부모의 baseline에서 주어진 길이만큼 위로 정렬합니다.
- {{cssxref("&lt;percentage&gt;")}}
  - : \<length> value와 마찬가지로 해당 엘리먼트의 baseline을 부모의 baseline에서 {{Cssxref("line-height")}}의 퍼센트로 주어진 퍼센트만큼 위로 정렬합니다.

#### 선-상대 값

다음 값은 요소를 전체 선을 기준으로 수직으로 정렬합니다.

- `top`
  - : 해당 엘리먼트의 top과 이것의 자손들의 top을 전체 라인의 top으로 정렬합니다.
- `bottom`
  - : 해당 엘리먼트의 bottom과 이것의 자손들의 bottom을 전체 라인의 bottom으로 정렬합니다.

Baseline이 없는 엘리먼트에 대해서는 bottom margin edge가 baseline을 대신하여 사용됩니다.

### 테이블 셀 값

- `baseline` (`sub`, `super`, `text-top`, `text-bottom`, `<length>`, `<percentage>`)
  - : 셀의 baseline을 같은 행의 다른 cell들의 baseline과 정렬합니다.
- `top`
  - : 셀의 top padding edge를 행의 top으로 정렬합니다.
- `middle`
  - : 셀의 padding box의 중심을 행에서 중앙 정렬합니다.
- `bottom`
  - : 셀의 bottom padding edge를 행의 bottom으로 정렬합니다.

음수 값이 허용됩니다.

## 형식 정의

{{CSSInfo}}

### 형식 구문

{{csssyntax}}

## 예제

### 기본 예제

#### HTML

```html
<div>
  An <img src="frame_image.svg" alt="link" width="32" height="32" /> image with
  a default alignment.
</div>
<div>
  An
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a text-top alignment.
</div>
<div>
  An
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a text-bottom alignment.
</div>
<div>
  An
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a middle alignment.
</div>
```

#### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

### 결과

{{EmbedLiveSample("기본_예제")}}

### 선 상자의 수직 정렬

#### HTML

```html
<p>
  top: <img style="vertical-align: top" src="star.png" /><br />
  middle: <img style="vertical-align: middle" src="star.png" /><br />
  bottom: <img style="vertical-align: bottom" src="star.png" /><br />
  super: <img style="vertical-align: super" src="star.png" /><br />
  sub: <img style="vertical-align: sub" src="star.png" /><br />
</p>

<p>
  text-top: <img style="vertical-align: text-top" src="star.png" /><br />
  text-bottom: <img style="vertical-align: text-bottom" src="star.png" /><br />
  0.2em: <img style="vertical-align: 0.2em" src="star.png" /><br />
  -1em: <img style="vertical-align: -1em" src="star.png" /><br />
  20%: <img style="vertical-align: 20%" src="star.png" /><br />
  -100%: <img style="vertical-align: -100%" src="star.png" /><br />
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### 결과

{{EmbedLiveSample("선_상자의_수직_정렬", '100%', 160, "", "")}}

### 테이블 셀의 수직 정렬

#### HTML

```html
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>
        There is a theory which states that if ever anyone discovers exactly
        what the Universe is for and why it is here, it will instantly disappear
        and be replaced by something even more bizarre and inexplicable.
      </p>
      <p>
        There is another theory which states that this has already happened.
      </p>
    </td>
  </tr>
</table>
```

#### CSS

```css
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

#### 결과

{{EmbedLiveSample("테이블_셀의_수직_정렬", '100%', 230, "", "")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Typical use cases of Flexbox, section "Center item"](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: All You Need To Know](https://christopheraue.net/design/vertical-align)
