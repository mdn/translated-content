---
title: vertical-align
slug: Web/CSS/vertical-align
tags:
  - CSS
  - CSS Property
  - Reference
translation_of: Web/CSS/vertical-align
---
{{CSSRef}}

**`vertical-align`** [CSS](/ko/docs/Web/CSS) 속성은 inline 또는 table-cell box에서의 수직 정렬을 지정합니다.

```css
/* keyword values */
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
vertical-align: unset;
```

vertical-align 속성은 두 컨텍스트에서 사용될 수 있습니다:

- 엘리먼트의 box를 이것이 포함된 line box 내부에서 수직 정렬하고자 할 때. 예를 들어서, {{HTMLElement("img")}} 엘리먼트를 텍스트 엘리먼트의 라인 속에서 정렬할 때 쓰일 수 있습니다:

```html hidden
<p>
top:<img style="vertical-align:top" src="https://mdn.mozillademos.org/files/15189/star.png"/>
middle:<img style="vertical-align:middle" src="https://mdn.mozillademos.org/files/15189/star.png"/>
bottom:<img style="vertical-align:bottom" src="https://mdn.mozillademos.org/files/15189/star.png"/>
super:<img style="vertical-align:super" src="https://mdn.mozillademos.org/files/15189/star.png"/>
sub:<img style="vertical-align:sub" src="https://mdn.mozillademos.org/files/15189/star.png"/>
</p>
<p>
text-top:<img style="vertical-align:text-top" src="https://mdn.mozillademos.org/files/15189/star.png"/>
text-bottom:<img  style="vertical-align:text-bottom" src="https://mdn.mozillademos.org/files/15189/star.png"/>
0.2em:<img style="vertical-align:0.2em" src="https://mdn.mozillademos.org/files/15189/star.png"/>
-1em:<img  style="vertical-align:-1em" src="https://mdn.mozillademos.org/files/15189/star.png"/>
20%:<img style="vertical-align:20%" src="https://mdn.mozillademos.org/files/15189/star.png"/>
-100%:<img  style="vertical-align:-100%" src="https://mdn.mozillademos.org/files/15189/star.png"/>
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
  padding: 0 .5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

{{EmbedLiveSample("vertical-align-inline", 1200, 160)}}

- table의 한 셀에서 포함하고 있는 내용을 수직 정렬할 때:

```html hidden
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable.</p>
<p>There is another theory which states that this has already happened.</p>
    </td>
  </tr>
</table>
```

```css hidden
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table, th, td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

{{EmbedLiveSample("vertical-align-table", 1200, 230)}}

`vertical-align은 오로지 inline과 table-cell 엘리먼트에만 적용된다는 것에 주의하세요: 이 속성을` [block level 엘리먼트](/ko/docs/Web/HTML/Block-level_elements)에 사용할 수 없습니다.

{{cssinfo}}

## 구문

이 속성은 아래의 키워드들로 지정됩니다.

### Values (inline elements에서)

_주로 부모 엘리먼트에 대하여 상대적으로 수직정렬하는 값들:_

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

(\<length> 와 \<percentage>에 대해서 음수 값이 허용됩니다.)

_다음 두 value는 부모가 아닌 전체 라인에 대해,수직정렬하는 값입니다:_

- `top`
  - : 해당 엘리먼트의 top과 이것의 자손들의 top을 전체 라인의 top으로 정렬합니다.
- `bottom`
  - : 해당 엘리먼트의 bottom과 이것의 자손들의 bottom을 전체 라인의 bottom으로 정렬합니다.

Baseline이 없는 엘리먼트에 대해서는 bottom margin edge가 baseline을 대신하여 사용됩니다.

### Values (table cells에서)

- `baseline` (`sub`, `super`, `text-top`, `text-bottom`, `<length>`, `<percentage>`)
  - : 셀의 baseline을 같은 행의 다른 cell들의 baseline과 정렬합니다.
- `top`
  - : 셀의 top padding edge를 행의 top으로 정렬합니다.
- `middle`
  - : 셀의 padding box의 중심을 행에서 중앙 정렬합니다.
- `bottom`
  - : 셀의 bottom padding edge를 행의 bottom으로 정렬합니다.

음수 값이 허용됩니다.

### 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<div>An <img src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> image with a default alignment.</div>
<div>An <img class="top" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> image with a text-top alignment.</div>
<div>An <img class="bottom" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> image with a text-bottom alignment.</div>
<div>An <img class="middle" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> image with a middle alignment.</div>
```

### CSS

```css
img.top { vertical-align: text-top; }
img.bottom { vertical-align: text-bottom; }
img.middle { vertical-align: middle; }
```

### 결과

{{EmbedLiveSample("Example")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
- [All You Need To Know About Vertical-Align](http://christopheraue.net/2014/03/05/vertical-align/)
