---
title: "`font` プロパティ (CSS)"
short-title: font
slug: Web/CSS/Reference/Properties/font
l10n:
  sourceCommit: 3f221b9845703eb21db70cdc321f843d5c1c072b
---

**`font`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、要素のフォントの様々なプロパティをすべて設定します。また、要素のフォントにシステムフォントを設定することもできます。

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
  <q id="example-element">
    Prejudices, it is well known, are most difficult to eradicate from the heart
    whose soil has never been loosened or fertilized by education: they grow
    there, firm as weeds among stones.
  </q>
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

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-width")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### リセットのみのサブプロパティ

このプロパティは、以下の CSS プロパティを初期値にリセットします。

- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

## 構文

```css-nolint
/* font-size font-family */
font: 1.2em sans-serif;

/* font-size/line-height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em monospace;

/* font-width font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em Montserrat, Helvetica, sans-serif;

/* システムフォント */
font: caption;
```

### 値

この値は、フォントに関連するさまざまなプロパティを指定する一括指定、または単一の `<system-font-family-name>` キーワードのどちらかです。

- `<'font-style'>` {{optional_inline}}
  - : {{cssxref("font-style")}} プロパティを参照してください。デフォルト値は `normal` です。
- `<font-variant-css2>` {{optional_inline}}
  - : {{cssxref("font-variant")}} プロパティの `normal` または `small-caps` のどちらかの値です。デフォルト値は `normal` です。
- `<'font-weight'>` {{optional_inline}}
  - : {{cssxref("font-weight")}} プロパティを参照してください。デフォルト値は `normal` です。
- `<font-width-css3>` {{optional_inline}}
  - : {{cssxref("font-width")}} プロパティで対応しているキーワードです。デフォルト値は `normal` です。
- `<'font-size'>`
  - : {{cssxref("font-size")}} プロパティを参照してください。
- `<'line-height'>` {{optional_inline}}
  - : {{cssxref("line-height")}} プロパティを参照してください。デフォルト値は `normal` です。
- `<'font-family'>`
  - : {{cssxref("font-family")}} プロパティを参照してください。最後の値である必要があります。

- `<system-font-family-name>`
  - : システムフォントを表す単一のキーワード。以下のいずれかです。
    - `caption`
      - : キャプション付きコントロール（ボタン、ドロップダウンなど）に使われるシステムフォント。
    - `icon`
      - : ラベルアイコンに使用されるシステムフォント。
    - `menu`
      - : メニュー（ドロップダウンメニュー、メニューリストなど）に使われるシステムフォント。
    - `message-box`
      - : ダイアログボックスに使われるシステムフォント。
    - `small-caption`
      - : 小さいコントロールのラベルに使われるシステムフォント。
    - `status-bar`
      - : ウィンドウのステータスバーに使われるシステムフォント。

    接頭辞をつけて実装されている標準外の値がいくつかあります。

## 解説

`font` プロパティの値は、システムフォントファミリー名を表す単一のキーワード、または要素のフォントに関するさまざまなプロパティをすべて設定するために使用される複数の個別指定プロパティの値のいずれかです。

### システムフォントの宣言

`font` を `<system-font-family-name>` キーワードとして指定する場合、プロパティの値全体を、その単一のキーワード（大文字と小文字を区別しない）に設定しなければなりません。有効な値には、`caption`, `icon`, `menu`, `message-box`, `small-caption`, `status-bar` があります。

ブラウザーは、標準外の接頭辞付き値にも対応しています。

- Chromium は `-webkit-control`, `-webkit-small-control`, `-webkit-mini-control` を実装しています。
- Webkit は Chromium の値に加え、`-webkit-body`, `-webkit-pictograph`, `-webkit-ruby-text` と、いくつかの `-apple-system-*` の接頭辞のシステムフォント名に対応しています。
-  Gecko は、 `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list`, `-moz-field` を実装しています。

システムフォント（`<system-font-family-name>`）は、`font` プロパティでのみ設定できます。`font: icon` のような単一のキーワード値を定義すると、そのフォントのファミリー、サイズ、太さ、スタイルなどが、ブラウザーで設定されたシステムフォントに対して定義されている値に設定されます。これらの値はすべて、`font` 宣言の後で記述された個別指定宣言によって変更することができます。

`font` プロパティの値において、`<system-font-family-name>` キーワードの後に `font` の個別指定指定を記述すると、その宣言は無効になります。例えば、`font: icon small` は無効です。

値の中で、`<system-font-family-name>` キーワードが最初の成分以外の場所に現れた場合、そのキーワードは、標準の `font-family` 名を表す {{cssxref("ident")}} として扱われます。例えば、`font: small icon` という宣言は、`font-family` を `icon` という名前のフォントに設定します。これは、存在する場合もあれば存在しない場合もある、システムフォント以外のフォントです。また、この宣言は `font-size` を `small` に設定し、その他のすべての一括指定プロパティを初期値にリセットします。

### 一括指定のフォント宣言

`font` が、いくつかのフォント関連のプロパティの一括指定として指定されている場合、次のようになります。

- 次の値を指定しなければなりません。
  - {{cssxref("font-size")}}
  - {{cssxref("font-family")}}

- 次の値は任意で指定することができます。
  - {{cssxref("font-style")}}
  - {{cssxref("font-variant")}}
  - {{cssxref("font-weight")}}
  - {{cssxref("font-width")}}
  - {{cssxref("line-height")}}

他の一括指定プロパティと同様、指定されていない各成分プロパティは初期値に設定され、それによって、一括指定プロパティ以外を使用して以前に設定された値が上書きされる場合があります。さらに、この一括指定プロパティは、以下のプロパティを初期値にリセットします。これらのプロパティは、この一括指定プロパティで明示的に設定することはできません。

- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

### 一括指定プロパティの順序

一括指定の `font` 宣言に含まれる個別指定の値の一部の順序は、いくつかの規則に従わなければなりません。

- `font-size` および `font-family` 成分が必要です（[システムフォントの宣言](#システムフォントの宣言)の場合を除く）。
- `font-style`, `font-variant`, `font-weight` は `font-size` よりも前になければなりません。
- `line-height` を指定することができるのは、`font-size` を指定している場合だけです。`line-height` を指定する場合は、`font-size` の直後に記載し、2 つの値はスラッシュ (`/`) で区切って `16px / 3` のように指定する必要があります。
- `font-family` は指定される最後の値である必要があります。

### 値に制限がある成分

下位互換性を確保するため、`font-variant` および `font-width` 成分の有効な値には、すべての有効な値や個別指定の同等値が含まれているわけではありません。

`font-variant` 要素の有効な値は、`normal` または `small-caps` に限定されています。それ以外にも値は対応していないのですが、一括指定 `font` 宣言を使用すると、すべての`font-variant-*`の個別指定プロパティを `normal` にリセットします。対象となるのは {{cssxref("font-variation-settings")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-emoji")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}} です。

`font-width` 要素の有効な値は、キーワード値（`normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`）に制限されます。個別指定の {{cssxref("font-width")}} プロパティは {{cssxref("percentage")}} 値にも対応していますが、この一括指定で指定することはできません。

## 公式定義

{{CSSInfo}}

## 形式定義

{{CSSSyntax}}

## 例

### 基本的な使い方

この例では、`font` ですべての {{htmlelement("p")}} 要素のフォントを定義しています。`font-size` を `12px`、`line-height` を `14px` に設定し、スラッシュ (`/`) で区切っています。また、この宣言では `font-family` を `sans-serif` に設定しています。

```css
p {
  font: 12px / 14px sans-serif;
}
```

```html-nolint hidden
<p>
  これは、サンセリフ体のテキストの段落です。フォントのサイズは 12px と小さめです。
  このテキストが折り返された場合、行高が 14px とかなり狭いため、読みづらくなることがあります。
</p>
```

{{EmbedLiveSample('basic usage','100%', '100')}}

### 複数のプロパティ

この例では、`font-weight` を `bold`、`font-style` を `italic`、`font-size` を `large`、`line-height` を `1.6`、`font-family` を `serif` に設定しています。

```css
p {
  font: bold italic large / 1.6 serif;
}
```

```html-nolint hidden
<p>
  この例では、フォントの太さを太字、フォントスタイルをイタリック、フォントサイズを large、行間を 1.6 に、フォントファミリを serif に設定しています。
</p>
```

{{EmbedLiveSample('Multiple properties','100%', '100')}}

### システムフォント

この例では、`font` プロパティを使用してシステムフォントを設定する方法を示しています。

#### CSS

その段落のフォントを、ウィンドウのステータスバーと同じ `font-family`、`line-height`、`font-size` などを持つように設定し、その後、`line-height` を `1.6` に設定します。

```css
p {
  font: status-bar;
  line-height: 1.6;
}
```

#### HTML

この HTML には段落 ({{htmlelement("p")}}) があり、その中に複雑な [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) 属性値を持つリンク ({{htmlelement("a")}}) をあります。レンダリングされたリンクにカーソルを合わせたり、フォーカスを合わせたりすると、ブラウザーのステータスバーに `href` 属性の値を表示させるはずです。

```html-nolint
<p>
  <a
    href="/%20The%20font%20should%20be%20the%20same%20
family%20and%20size%20and%20the%20text%20in%20the%20example."
    >このテキストにカーソルを合わせたり、フォーカスを合わせたりしてみてください。フォントは、ステータスバーのテキストと同じフォントファミリーおよびサイズである必要があります。</a
  >
</p>
```

#### JavaScript

HTML リンクに URL を直接記述するのは望ましくないため、リンクがクリックされた際に、存在しないページへリダイレクトされるのを防ぐスクリプトを記載しています。

```js
const aElem = document.querySelector("a");
aElem.addEventListener("click", (e) => {
  e.preventDefault();
  return false;
});
```

#### 結果

{{EmbedLiveSample('System font','100%', '100')}}

リンクにカーソルを合わせたり、リンクを選択したりしてみてください。フォントは、ブラウザーウィンドウの下部にあるステータスバーのテキストと同じフォントファミリーおよびサイズである必要があります。

### 一括指定装飾クリエイター

このライブデモでは、さまざまなラジオボタンを選択して異なる一括指定値を生成すると同時に、作成した一括指定宣言の効果を視覚的に確認することができます。

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
        checked
        value="" />
      <label for="font-style-none">省略値</label><br />
      <input
        type="radio"
        id="font-style-normal"
        name="font_style"
        value="normal" />
      <label for="font-style-normal">normal</label><br />
      <input
        type="radio"
        id="font-style-italic"
        name="font_style"
        value="italic" />
      <label for="font-style-italic">italic</label><br />
      <input
        type="radio"
        id="font-style-oblique"
        name="font_style"
        value="oblique" />
      <label for="font-style-oblique">oblique</label>
    </div>

    <div class="setPropCont">
      font-variant<br />
      <input
        type="radio"
        id="font-variant-none"
        name="font_variant"
        checked
        value=" " />
      <label for="font-variant-none">省略値</label><br />
      <input
        type="radio"
        id="font-variant-normal"
        name="font_variant"
        value="normal" />
      <label for="font-variant-normal">normal</label><br />
      <input
        type="radio"
        id="font-variant-small-caps"
        name="font_variant"
        value="small-caps" />
      <label for="font-variant-small-caps">small-caps</label>
    </div>

    <div class="setPropCont">
      font-weight<br />
      <input type="radio" id="font-weight-none" name="font_weight" value="" />
      <label for="font-weight-none">省略値</label><br />
      <input
        type="radio"
        id="font-weight-normal"
        checked
        name="font_weight"
        value="400" />
      <label for="font-weight-normal">normal</label><br />
      <input
        type="radio"
        id="font-weight-bold"
        name="font_weight"
        value="700" />
      <label for="font-weight-bold">bold</label>
    </div>

    <div class="setPropCont">
      font-size<br />
      <input type="radio" id="font-size-12px" name="font_size" value="12px" />
      <label for="font-size-12px">12px</label><br />
      <input
        type="radio"
        id="font-size-16px"
        name="font_size"
        value="16px"
        checked />
      <label for="font-size-16px">16px</label><br />
      <input type="radio" id="font-size-24px" name="font_size" value="24px" />
      <label for="font-size-24px">24px</label>
    </div>

    <div class="setPropCont">
      line-height<br />
      <input
        type="radio"
        id="line-height-none"
        name="line_height"
        checked
        value="" />
      <label for="line-height-none">省略値</label><br />
      <input
        type="radio"
        id="line-height-1-2"
        name="line_height"
        value="/1.2" />
      <label for="line-height-1-2">1.2</label><br />
      <input type="radio" id="line-height-3" name="line_height" value="/3" />
      <label for="line-height-3">3</label>
    </div>
    <br />

    <div class="setPropCont fontfamily">
      font-family<br />
      <input
        type="radio"
        id="font-family-courier"
        name="font_family"
        checked
        value="courier" />
      <label for="font-family-courier">courier</label><br />
      <input
        type="radio"
        id="font-family-serif"
        name="font_family"
        value="serif" />
      <label for="font-family-serif">serif</label><br />
      <input
        type="radio"
        id="font-family-sans-serif"
        name="font_family"
        value="sans-serif" />
      <label for="font-family-sans-serif">sans-serif</label><br />
      <input
        type="radio"
        id="font-family-arial"
        name="font_family"
        value="arial" />
      <label for="font-family-arial">Arial</label><br />
      <input
        type="radio"
        id="font-family-monospace"
        name="font_family"
        value="monospace" />
      <label for="font-family-monospace">monospace</label><br />
      <input
        type="radio"
        id="font-family-cursive"
        name="font_family"
        value="cursive" />
      <label for="font-family-cursive">cursive</label><br />
      <input
        type="radio"
        id="font-family-fantasy"
        name="font_family"
        value="fantasy" />
      <label for="font-family-fantasy">fantasy</label><br />
      <input
        type="radio"
        id="font-family-system-ui"
        name="font_family"
        value="system-ui" />
      <label for="font-family-system-ui">system-ui</label><br />
    </div>
  </div>

  <div class="cf propInputs">
    <div class="propInputCont tar">font :</div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_style" /><br />
      font-style <br />
      オプション
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_variant" /> <br />
      font-variant <br />
      オプション
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_weight" /> <br />
      font-weight <br />
      オプション
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_size" /> <br />
      font-size <br />
      必須
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_line_height" /> <br />
      line-height <br />
      オプション
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_family" />
      <br />
      font-family <br />
      必須
    </div>
  </div>
</form>

<div class="fontShortHand">
  これはサンプルテキストです。<br />
  This is some more sample text.
</div>
```

```css hidden
body,
input {
  font: 14px "Arial";
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
  for (const radio of radios) {
    if (radio.checked) {
      const curElemName = `input_${radioName}`;
      const curElem = document.getElementById(curElemName);
      curElem.value = radio.value;

      return radio.value;
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

document.querySelectorAll("input[type='radio']").forEach((el) => {
  el.addEventListener("change", setCss);
});
```

{{EmbedLiveSample('Shorthand declaration creator','100%', '500px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [System font stack](https://css-tricks.com/snippets/css/system-font-stack/) - CSS-Tricks (2017)
