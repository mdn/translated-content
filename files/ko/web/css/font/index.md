---
title: font
slug: Web/CSS/font
---

{{CSSRef}}

**`font`** CSS 속성은 {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, {{cssxref("font-family")}}의 [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)입니다. 요소의 글꼴을 시스템 폰트로 설정할 수도 있습니다.

{{EmbedInteractiveExample("pages/css/font.html")}}

다른 단축 속성과 마찬가지로, 생략한 속성은 초기값으로 설정하며 이 과정에서 다른 속성으로 설정한 값을 덮어 쓸 수도 있습니다. `font` 속성으로 설정할 수 없는 {{cssxref("font-stretch")}}, {{ cssxref("font-size-adjust")}}, {{cssxref("font-kerning")}}의 값도 초기값으로 돌아갑니다.

## 구문

`font` 속성은 하나의 키워드를 지정해 시스템 폰트를 사용하도록 설정할 수도 있고, 여러 글꼴 관련 속성의 단축 속성으로도 사용할 수 있습니다.

`font`를 시스템 폰트 키워드로 사용하려면 [`caption`](#caption), [`icon`](#icon), [`menu`](#menu), [`message-box`](#message-box), [`small-caption`](#small-caption), [`status-bar`](#status-bar) 중 하나를 사용해야 합니다.

`font`를 단축 속성으로 사용하려면,

- 다음 속성의 값을 포함해야 합니다.

  - {{cssxref("&lt;font-size&gt;")}}
  - {{cssxref("&lt;font-family&gt;")}}

- 다음 속성의 값을 포함할 수 있습니다.

  - {{cssxref("&lt;font-style&gt;")}}
  - {{cssxref("&lt;font-variant&gt;")}}
  - {{cssxref("&lt;font-weight&gt;")}}
  - {{cssxref("&lt;line-height&gt;")}}

- `font-style`, `font-variant`, `font-weight`는 `font-size`의 앞에 와야 합니다.
- `font-variant`는 CSS 2.1에서 정의한 `normal`과 `small-caps`만 사용할 수 있습니다.
- `line-height`는 `font-size` 바로 다음에 와야 하며 "/"로 구분해야 합니다. 예: "`16px/3`"
- `font-family`는 마지막 값이어야 합니다.

### 값

- `<'font-style'>`
  - : {{cssxref("font-style")}} 참고
- `<'font-variant'>`
  - : {{cssxref("font-variant")}} 참고
- `<'font-weight'>`
  - : {{cssxref("font-weight")}} 참고
- `<'font-stretch'>`
  - : {{cssxref("font-stretch")}} 참고
- `<'font-size'>`
  - : {{cssxref("font-size")}} 참고
- `<'line-height'>`
  - : {{cssxref("line-height")}} 참고
- `<'font-family'>`
  - : {{cssxref("font-family")}} 참고

#### 시스템 폰트 키워드

- `caption`
  - : 버튼, 드랍다운 메뉴 등 설명이 붙은 컨트롤에 사용하는 시스템 폰트.
- `icon`
  - : 아이콘 이름에 사용하는 시스템 폰트.
- `menu`
  - : 드랍다운 메뉴, 메뉴 리스트 등 메뉴에서 사용하는 시스템 폰트.
- `message-box`
  - : 다이얼로그 창에 사용하는 폰트.
- `small-caption`
  - : 소형 컨트롤에 사용하는 시스템 폰트.
- `status-bar`
  - : 창의 상태표시줄에 사용하는 시스템 폰트.
- 추가 시스템 폰트 키워드
  - : 각 브라우저마다 더 많은 키워드를 접두사와 함께 구현하고 있습니다. Gecko는 `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list`, `-moz-field`를 가지고 있습니다.

### 형식 구문

{{csssyntax}}

## Examples

### Setting font properties

```css
/* Set the font size to 12px and the line height to 14px.
   Set the font family to sans-serif */
p {
  font: 12px/14px sans-serif;
}

/* Set the font size to 80% of the parent element
   or default value (if no parent element present).
   Set the font family to sans-serif */
p {
  font: 80% sans-serif;
}

/* Set the font weight to bold,
   the font-style to italic,
   the font size to large,
   and the font family to serif. */
p {
  font: bold italic large serif;
}

/* Use the same font as the status bar of the window */
p {
  font: status-bar;
}
```

### Live sample

```html hidden
<p>
  Change the radio buttons below to see the generated shorthand and its effect.
</p>
<form action="createShortHand()">
  <div class="cf">
    <div class="setPropCont">
      font-style<br />
      <input
        type="radio"
        id="font-style-none"
        name="font_style"
        checked=""
        value=""
        onchange="setCss()" />
      <label for="font-style-none">none</label><br />
      <input
        type="radio"
        id="font-style-normal"
        name="font_style"
        value="normal"
        onchange="setCss()" />
      <label for="font-style-normal">normal</label><br />
      <input
        type="radio"
        id="font-style-italic"
        name="font_style"
        value="italic"
        onchange="setCss()" />
      <label for="font-style-italic">italic</label><br />
      <input
        type="radio"
        id="font-style-oblique"
        name="font_style"
        value="oblique"
        onchange="setCss()" />
      <label for="font-style-oblique">oblique</label>
    </div>

    <div class="setPropCont">
      font-variant<br />
      <input
        type="radio"
        id="font-variant-none"
        name="font_variant"
        checked=""
        value=" "
        onchange="setCss()" />
      <label for="font-variant-none">none</label><br />
      <input
        type="radio"
        id="font-variant-normal"
        name="font_variant"
        value="normal"
        onchange="setCss()" />
      <label for="font-variant-normal">normal</label><br />
      <input
        type="radio"
        id="font-variant-small-caps"
        name="font_variant"
        value="small-caps"
        onchange="setCss()" />
      <label for="font-variant-small-caps">small-caps</label>
    </div>

    <div class="setPropCont">
      font-weight<br />
      <input
        type="radio"
        id="font-weight-none"
        name="font_weight"
        value=""
        onchange="setCss()" />
      <label for="font-weight-none">none</label><br />
      <input
        type="radio"
        id="font-weight-normal"
        checked=""
        name="font_weight"
        value="400"
        onchange="setCss()" />
      <label for="font-weight-normal">normal</label><br />
      <input
        type="radio"
        id="font-weight-bold"
        name="font_weight"
        value="700"
        onchange="setCss()" />
      <label for="font-weight-bold">bold</label>
    </div>

    <div class="setPropCont">
      font-size<br />
      <input
        type="radio"
        id="font-size-12px"
        name="font_size"
        value="12px"
        onchange="setCss()" />
      <label for="font-size-12px">12px</label><br />
      <input
        type="radio"
        id="font-size-16px"
        name="font_size"
        value="16px"
        checked=""
        onchange="setCss()" />
      <label for="font-size-16px">16px</label><br />
      <input
        type="radio"
        id="font-size-24px"
        name="font_size"
        value="24px"
        onchange="setCss()" />
      <label for="font-size-24px">24px</label>
    </div>

    <div class="setPropCont">
      line-height<br />
      <input
        type="radio"
        id="line-height-none"
        name="line_height"
        checked=""
        value=""
        onchange="setCss()" />
      <label for="line-height-none">none</label><br />
      <input
        type="radio"
        id="line-height-1.2"
        name="line_height"
        value="/1.2"
        onchange="setCss()" />
      <label for="line-height-1.2">1.2</label><br />
      <input
        type="radio"
        id="line-height-3"
        name="line_height"
        value="/3"
        onchange="setCss()" />
      <label for="line-height-3">3</label>
    </div>
    <br />

    <div class="setPropCont fontfamily">
      font-family<br />
      <input
        type="radio"
        id="font-family-courier"
        name="font_family"
        checked=""
        value="courier"
        onchange="setCss(5,'courier')" />
      <label for="font-family-courier">courier</label><br />
      <input
        type="radio"
        id="font-family-serif"
        name="font_family"
        value="serif"
        onchange="setCss()" />
      <label for="font-family-serif">serif</label><br />
      <input
        type="radio"
        id="font-family-sans-serif"
        name="font_family"
        value="sans-serif"
        onchange="setCss()" />
      <label for="font-family-sans-serif">sans-serif</label><br />
      <input
        type="radio"
        id="font-family-arial"
        name="font_family"
        value="arial"
        onchange="setCss()" />
      <label for="font-family-arial">Arial</label><br />
      <input
        type="radio"
        id="font-family-monospace"
        name="font_family"
        value="monospace"
        onchange="setCss()" />
      <label for="font-family-monospace">monospace</label><br />
      <input
        type="radio"
        id="font-family-cursive"
        name="font_family"
        value="cursive"
        onchange="setCss()" />
      <label for="font-family-cursive">cursive</label><br />
      <input
        type="radio"
        id="font-family-fantasy"
        name="font_family"
        value="fantasy"
        onchange="setCss()" />
      <label for="font-family-fantasy">fantasy</label><br />
      <input
        type="radio"
        id="font-family-system-ui"
        name="font_family"
        value="system-ui"
        onchange="setCss()" />
      <label for="font-family-system-ui">system-ui</label><br />
    </div>
  </div>

  <div class="cf propInputs">
    <div class="propInputCont tar">font :</div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_style" /><br />
      font-style <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_variant" /> <br />
      font-variant <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_weight" /> <br />
      font-weight <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_size" /> <br />
      font-size <br />
      mandatory
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_line_height" /> <br />
      line-height <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_family" />
      <br />
      font-family <br />
      mandatory
    </div>
  </div>
</form>

<div class="fontShortHand">This is some sample text.</div>
<br /><br /><br /><br /><br /><br />
```

```css hidden
body,
input {
  font: 14px arial;
  overflow: hidden;
}

.propInputCont {
  float: left;
  text-align: center;
  margin-right: 5px;
  width: 80px;
}

.setPropCont {
  float: left;
  margin-right: 5px;
  width: 120px;
}

.propInputs,
.setPropCont {
  margin-bottom: 1em;
}

.curCss {
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  width: 80px;
}

.mandatory {
  border-bottom-color: red;
}

.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after {
  clear: both;
}

.tar {
  width: 40px;
  text-align: right;
}
.fontfamily {
  display: inline-block;
}
```

```js hidden
const textAreas = document.getElementsByClassName("curCss");

function getProperties() {
  return (
    `${getCheckedValue("font_style")} ` +
    `${getCheckedValue("font_variant")} ` +
    `${getCheckedValue("font_weight")} ` +
    `${getCheckedValue("font_size")}` +
    `${getCheckedValue("line_height")} ` +
    `${getCheckedValue("font_family")}`
  );
}

function getCheckedValue(radioName) {
  const radios = document.forms[0].elements[radioName];
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      const curElemName = `input_${radioName}`;
      const curElem = document.getElementById(curElemName);
      curElem.value = radios[i].value;

      return radios[i].value;
    }
  }
}

function setCss() {
  getProperties();
  injectCss(shortText);
}

function injectCss(cssFragment) {
  const old = document.body.getElementsByTagName("style");
  if (old.length > 1) {
    old[1].parentElement.removeChild(old[1]);
  }
  css = document.createElement("style");
  css.textContent = `.fontShortHand{font: ${cssFragment}}`;
  document.body.appendChild(css);
}

setCss();
```

{{ EmbedLiveSample('Live_sample','100%', '440px')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [Fundamental text and font styling](/ko/docs/Learn/CSS/Styling_text/Fundamentals)
