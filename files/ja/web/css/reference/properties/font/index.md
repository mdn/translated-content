---
title: font
slug: Web/CSS/Reference/Properties/font
original_slug: Web/CSS/font
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

**`font`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、要素のフォントの様々なプロパティをすべて設定します。また、要素のフォントにシステムフォントを設定することもできます。

{{InteractiveExample("CSS デモ: font")}}

```css interactive-example-choice
font:
  1.2rem "Fira Sans",
  sans-serif;
```

```css interactive-example-choice
font:
  italic 1.2rem "Fira Sans",
  serif;
```

```css interactive-example-choice
font: italic small-caps bold 16px/2 cursive;
```

```css interactive-example-choice
font: small-caps bold 24px/1 sans-serif;
```

```css interactive-example-choice
font: caption;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Italic"),
    url("/shared-assets/fonts/FiraSans-Italic.woff2") format("woff2");
  font-weight: normal;
  font-style: italic;
}

section {
  margin-top: 10px;
  font-size: 1.1em;
}
```

他の一括指定プロパティ同様、個別の値が指定されなかった場合は、それぞれの初期値が設定されます (おそらく一括指定ではないプロパティを使用して設定された以前の値を上書きします)。 `font` によって直接設定できない個別指定の {{cssxref("font-size-adjust")}}, {{cssxref("font-kerning")}} も初期値に設定されます。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

## 構文

```css-nolint
/* font-size font-family */
font: 1.2em "Fira Sans", sans-serif;

/* font-size/line-height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em "Fira Sans", sans-serif;

/* font-stretch font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em "Fira Sans", sans-serif;

/* システムフォント */
font: caption;
```

`font` プロパティはシステムフォントを選択するための単一のキーワード、又は様々なフォント関連プロパティの一括指定のどちらかで指定することができます。

`font` をシステムキーワードとして指定する場合は、 `caption`, `icon`, `menu`, `message-box`, `small-caption`, `status-bar` のうちの一つでなければなりません。

`font` を様々なフォント関連プロパティの一括指定とする場合は、次のようになります。

- 次の値を含めなければなりません。
  - {{cssxref("&lt;font-size&gt;")}}
  - {{cssxref("&lt;font-family&gt;")}}

- 次の値は任意で含めることができます。
  - {{cssxref("&lt;font-style&gt;")}}
  - {{cssxref("&lt;font-variant&gt;")}}
  - {{cssxref("&lt;font-weight&gt;")}}
  - {{cssxref("&lt;font-stretch&gt;")}}
  - {{cssxref("&lt;line-height&gt;")}}

- `font-style`, `font-variant`, `font-weight` は `font-size` よりも前になければなりません。
- `font-variant` は CSS 2.1 で定義された値、つまり `normal` および `small-caps` のみ指定できます。
- `font-stretch` は単一のキーワード値のみを指定することができます。
- `line-height` は `font-size` の直後に、 "/" で区切って、 "`16px/3`" のように指定します。
- `font-family` は指定される最後の値である必要があります。

### 値

- `<'font-style'>`
  - : {{cssxref("font-style")}} プロパティを参照。
- `<'font-variant'>`
  - : {{cssxref("font-variant")}} プロパティを参照。
- `<'font-weight'>`
  - : {{cssxref("font-weight")}} プロパティを参照。
- `<'font-stretch'>`
  - : {{cssxref("font-stretch")}} プロパティを参照。
- `<'font-size'>`
  - : {{cssxref("font-size")}} プロパティを参照。
- `<'line-height'>`
  - : {{cssxref("line-height")}} プロパティを参照。
- `<'font-family'>`
  - : {{cssxref("font-family")}} プロパティを参照。

#### システムフォント値

- `caption`
  - : キャプション付きコントロールに使われるシステムフォント (ボタン、ドロップダウンなど)。
- `icon`
  - : ラベルアイコンに使用されるシステムフォント。
- `menu`
  - : メニューに使われるシステムフォント (ドロップダウンメニュー、メニューリストなど)。
- `message-box`
  - : ダイアログボックスに使われるシステムフォント。
- `small-caption`
  - : 小さいコントロールのラベルに使われるシステムフォント。
- `status-bar`
  - : ウィンドウのステータスバーに使われるシステムフォント。
- 接頭辞付きのシステムフォントキーワード
  - : ブラウザーは他にも、接頭辞付きのキーワードをいくつか実装していることがあります。 Gecko は、 `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list`, `-moz-field` を実装しています。

## 公式定義

{{CSSInfo}}

## 形式定義

{{CSSSyntax}}

## 例

### フォントのプロパティの設定

```css
/* フォントの大きさを 12px に設定し、行の高さを 14px にする。
   フォントファミリは sans-serif に設定する */
p {
  font: 12px/14px sans-serif;
}

/* フォントの大きさを親要素の 80% または既定値
   (親要素がない場合) に設定する。
   フォントファミリは sans-serif に設定する */
p {
  font: 80% sans-serif;
}

/* フォントの太さを太字に、
   フォントスタイルを斜体に、
   フォントの大きさを large に、
   フォントファミリーは serif に設定する */
p {
  font: bold italic large serif;
}

/* ウィンドウのステータスバーと同じフォントに設定する */
p {
  font: status-bar;
}
```

### ライブサンプル

```html hidden
<p>
  下のラジオボタンを変更すると、生成された一括指定とその効果が確認できます。
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

.cf::before,
.cf::after {
  content: " ";
  display: table;
}

.cf::after {
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
  injectCss(getProperties());
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)
