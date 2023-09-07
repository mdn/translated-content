---
title: list-style-type
slug: Web/CSS/list-style-type
---

{{CSSRef}}

**`list-style-type`** は [CSS](/ja/docs/Web/CSS) のプロパティで、リスト項目要素のマーカーを設定します (円、文字、独自のカウンタースタイルなど)。

{{EmbedInteractiveExample("pages/css/list-style-type.html")}}

マーカーの[色](/ja/docs/Web/CSS/color_value)は、適用先の要素における色の計算値と同じになります。

わずかな要素 ({{HTMLElement("li")}} と {{HTMLElement("summary")}}) だけが既定で `display: list-item` の値を持っています。しかし、 `list-style-type` プロパティは {{cssxref("display")}} の値が `list-item` に設定されているあらゆる要素に適用することができます。さらに、このプロパティは継承されるので、親要素 (普通は {{HTMLElement("ol")}} または {{HTMLElement("ul")}}) に設定することですべてのリスト項目に適用することができます。

## 構文

```css
/* マーカーの種類の一例 */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: trad-chinese-informal;
list-style-type: kannada;

/* <string> の値 */
list-style-type: "-";

/* @counter-style 規則に一致する識別子 */
list-style-type: custom-counter-style;

/* キーワード値 */
list-style-type: none;

/* グローバル値 */
list-style-type: inherit;
list-style-type: initial;
list-style-type: revert;
list-style-type: unset;
```

`list-style-type` プロパティは、以下のいずれかで定義することができます。

- 単一の `<custom-ident>` 値
- 単一の `symbols()` 値
- 単一の `<string>` 値
- キーワード `none`

注意事項:

- 種類によっては期待通りに表示するために適切なフォントのインストールが必要です。
- `cjk-ideographic` は `trad-chinese-informal` と同じです。歴史的な理由で存在しています。

### 値

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : {{cssxref("@counter-style")}} の値、または以下の定義済みスタイルのうちの一つに一致する識別子です。
- {{cssxref("symbols()")}}
  - : 無名のリストスタイルを定義します。
- {{cssxref("&lt;string&gt;")}}
  - : 特定の文字列を、リストのマーカーとして使用します。
- `none`
  - : マーカーは表示されません。
- `disc`
  - : 塗りつぶされた円形です (既定値)。
- `circle`
  - : 中空円です。
- `square`
  - : 塗りつぶされた四角形です。
- `decimal`
  - : 数値です。 1 から始まります。
- `cjk-decimal` {{experimental_inline}}
  - : 漢数字です。
- `decimal-leading-zero`
  - : 数値で、先頭がゼロ埋めされます。
- `lower-roman`
  - : 小文字のローマ数字です。
- `upper-roman`
  - : 大文字のローマ数字です。
- `lower-greek`
  - : 小文字の古代ギリシャ文字です。
- `lower-alpha`, `lower-latin`
  - : 小文字の ASCII 文字です。
- `upper-alpha`, `upper-latin`
  - : 大文字の ASCII 文字です。
- `arabic-indic`, `-moz-arabic-indic`
  - : アラビア－インド数字です。
- `armenian`
  - : 伝統的なアルメニア語の数値表記です。
- `bengali`, `-moz-bengali`
  - : ベンガル語の数値表記です。
- `cambodian`/`khmer`
  - : カンボジア／クメール語の数値表記です。
- `cjk-earthly-branch`, `-moz-cjk-earthly-branch`
  - : 漢字の「十二支」順です。
- `cjk-heavenly-stem`, `-moz-cjk-heavenly-stem`
  - : 漢字の「十干」順です。
- `cjk-ideographic`{{experimental_inline}}
  - : `trad-chinese-informal` と同じです。
- `devanagari`, `-moz-devanagari`
  - : デーヴァナーガリーの数値表記です。
- `ethiopic-numeric` {{experimental_inline}}
  - : エチオピア語の数値表記です。
- `georgian`
  - : 伝統的なジョージア語の数値表記です。
- `gujarati`, `-moz-gujarati`
  - : グジャラート語の数値表記です。
- `gurmukhi`, `-moz-gurmukhi`
  - : グルムキー語の数値表記です。
- `hebrew` {{experimental_inline}}
  - : 伝統的なヘブライ語の数値表記です。
- `hiragana` {{experimental_inline}}
  - : ひらがなの辞書順の文字です。
- `hiragana-iroha` {{experimental_inline}}
  - : ひらがなの[いろは順](https://ja.wikipedia.org/wiki/いろは歌)の文字です。
- `japanese-formal` {{experimental_inline}}
  - : 法律や金融関係の書類に使用される日本の公的な数値表記です。漢字は、他の正しい文字に似せて修正することができないように設計されています。
- `japanese-informal` {{experimental_inline}}
  - : 日本語の日常的な数値表記です。
- `kannada`, `-moz-kannada`
  - : カンナダ語の数値表記です。
- `katakana` {{experimental_inline}}
  - : カタカナの辞書順の文字です。
- `katakana-iroha` {{experimental_inline}}
  - : カタカナの[いろは順](https://ja.wikipedia.org/wiki/いろは歌)の文字です。
- `korean-hangul-formal` {{experimental_inline}}
  - : 韓国語のハングルの数値表記です。
- `korean-hanja-formal` {{experimental_inline}}
  - : 韓国語の公的な漢数字です。
- `korean-hanja-informal` {{experimental_inline}}
  - : 韓国語の漢数字です。
- `lao`, `-moz-lao`
  - : ラオス語の数値表記です。
- `lower-armenian` {{experimental_inline}}\*
  - : アルメニア語の小文字の数値表記です。
- `malayalam`, `-moz-malayalam`
  - : マラヤーラム語の数値表記です。
- `mongolian` {{experimental_inline}}
  - : モンゴル語の数値表記です。
- `myanmar`, `-moz-myanmar`
  - : ミャンマー語 (ビルマ語) の数値表記です。
- `oriya`, `-moz-oriya`
  - : オリヤー語の数値表記です。
- `persian` {{experimental_inline}}, `-moz-persian`
  - : ペルシャ語の数値表記です。
- `simp-chinese-formal` {{experimental_inline}}
  - : 公的な簡体字中国語の数値表記です。
- `simp-chinese-informal` {{experimental_inline}}
  - : 日常的な簡体字中国語の数値表記です。
- `tamil` {{experimental_inline}}, `-moz-tamil`
  - : タミル語の数値表記です。
- `telugu`, `-moz-telugu`
  - : テルグ語の数値表記です。
- `thai`, `-moz-thai`
  - : タイ語の数値表記です。
- `tibetan` {{experimental_inline}}\*
  - : チベット語の数値表記です。
- `trad-chinese-formal` {{experimental_inline}}
  - : 公的な繁体字中国語の数値表記です。
- `trad-chinese-informal` {{experimental_inline}}
  - : 日常的な繁体字中国語の数値表記です。
- `upper-armenian` {{experimental_inline}}\*
  - : 伝統的なアルメニア語の大文字の数値表記です。
- `disclosure-open` {{experimental_inline}}
  - : {{HTMLElement("details")}} などの展開ウィジェットを開いていることを示す記号
- `disclosure-closed` {{experimental_inline}}
  - : {{HTMLElement("details")}} などの展開ウィジェットを閉じていることを示す記号

### 標準外の拡張

Mozilla (Firefox)、Blink (Chrome、Opera)、WebKit (Safari) では、他の言語のリストの種類に対応するために、さらにいくつかの定義済みの種類が提供されています。どのブラウザーがどの拡張に対応しているかを確認するには、互換性一覧表を参照してください。

- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `ethiopic-halehame-ti-er`, `-moz-ethiopic-halehame-ti-er`
- `ethiopic-halehame-ti-et`, `-moz-ethiopic-halehame-ti-et`
- `hangul`, `-moz-hangul`
- `hangul-consonant`, `-moz-hangul-consonant`
- `urdu`, `-moz-urdu`

## アクセシビリティの考慮

スクリーンリーダーの [VoiceOver](https://help.apple.com/voiceover/info/guide/) には、 `list-style-type` の値に `none` が適用された順序なしリストをリストとして読み上げないという問題があります。リストが正しく読み上げられるようにするには、それぞれのリスト項目の前に[幅ゼロの空白](https://en.wikipedia.org/wiki/Zero-width_space)を[擬似コンテンツ](/ja/docs/Web/CSS/content)として追加する必要があります。これはデザインがバグ修正に影響されないことを保証し、リスト項目の表記が正しくなくなるわけではありません。

```css
ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}
```

- [VoiceOver and list-style-type: none – Unfettered Thoughts](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
- [MDN WCAG の理解、ガイドライン 1.3 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_list_item_markers">リスト項目マーカーの設定</h3>

#### HTML

```html
List 1
<ol class="normal">
  <li>Hello</li>
  <li>World</li>
  <li>What's up?</li>
</ol>

List 2
<ol class="shortcut">
  <li>Looks</li>
  <li>Like</li>
  <li>The</li>
  <li>Same</li>
</ol>
```

#### CSS

```css
ol.normal {
  list-style-type: upper-alpha;
}

/* or use the shortcut "list-style": */
ol.shortcut {
  list-style: upper-alpha;
}
```

#### 結果

{{EmbedLiveSample("Setting_list_item_markers","200","300")}}

<h3 id="All_list_style_types">リストスタイルのすべての種類</h3>

#### HTML

```html
<ol>
  <li>Apollo</li>
  <li>Hubble</li>
  <li>Chandra</li>
  <li>Cassini-Huygens</li>
  <li>Spitzer</li>
</ol>

<h2>Choose a list style type:</h2>

<div class="container">
  <label for="disc">
    <input type="radio" id="disc" name="type" value="disc" />disc
  </label>

  <label for="circle">
    <input type="radio" id="circle" name="type" value="circle" />circle
  </label>

  <label for="square">
    <input type="radio" id="square" name="type" value="square" />square
  </label>

  <label for="decimal">
    <input type="radio" id="decimal" name="type" value="decimal" />decimal
  </label>

  <label for="cjk-decimal">
    <input
      type="radio"
      id="cjk-decimal"
      name="type"
      value="cjk-decimal" />cjk-decimal
  </label>

  <label for="decimal-leading-zero">
    <input
      type="radio"
      id="decimal-leading-zero"
      name="type"
      value="decimal-leading-zero" />decimal-leading-zero
  </label>

  <label for="lower-roman">
    <input
      type="radio"
      id="lower-roman"
      name="type"
      value="lower-roman" />lower-roman
  </label>

  <label for="upper-roman">
    <input
      type="radio"
      id="upper-roman"
      name="type"
      value="upper-roman" />upper-roman
  </label>

  <label for="lower-greek">
    <input
      type="radio"
      id="lower-greek"
      name="type"
      value="lower-greek" />lower-greek
  </label>

  <label for="lower-alpha">
    <input
      type="radio"
      id="lower-alpha"
      name="type"
      value="lower-alpha" />lower-alpha, lower-latin
  </label>

  <label for="upper-alpha">
    <input
      type="radio"
      id="upper-alpha"
      name="type"
      value="upper-alpha" />upper-alpha, upper-latin
  </label>

  <label for="arabic-indic">
    <input
      type="radio"
      id="arabic-indic"
      name="type"
      value="arabic-indic" />arabic-indic
  </label>

  <label for="armenian">
    <input type="radio" id="armenian" name="type" value="armenian" />armenian
  </label>

  <label for="bengali">
    <input type="radio" id="bengali" name="type" value="bengali" />bengali
  </label>

  <label for="cambodian">
    <input type="radio" id="cambodian" name="type" value="cambodian" />cambodian
  </label>

  <label for="cjk-earthly-branch">
    <input
      type="radio"
      id="cjk-earthly-branch"
      name="type"
      value="cjk-earthly-branch" />cjk-earthly-branch
  </label>

  <label for="cjk-heavenly-stem">
    <input
      type="radio"
      id="cjk-heavenly-stem"
      name="type"
      value="cjk-heavenly-stem" />cjk-heavenly-stem
  </label>

  <label for="cjk-ideographic">
    <input
      type="radio"
      id="cjk-ideographic"
      name="type"
      value="cjk-ideographic" />cjk-ideographic
  </label>

  <label for="devanagari">
    <input
      type="radio"
      id="devanagari"
      name="type"
      value="devanagari" />devanagari
  </label>

  <label for="ethiopic-numeric">
    <input
      type="radio"
      id="ethiopic-numeric"
      name="type"
      value="ethiopic-numeric" />ethiopic-numeric
  </label>

  <label for="georgian">
    <input type="radio" id="georgian" name="type" value="georgian" />georgian
  </label>

  <label for="gujarati">
    <input type="radio" id="gujarati" name="type" value="gujarati" />gujarati
  </label>

  <label for="gurmukhi">
    <input type="radio" id="gurmukhi" name="type" value="gurmukhi" />gurmukhi
  </label>

  <label for="hebrew">
    <input type="radio" id="hebrew" name="type" value="hebrew" />hebrew
  </label>

  <label for="hiragana">
    <input type="radio" id="hiragana" name="type" value="hiragana" />hiragana
  </label>

  <label for="hiragana-iroha">
    <input
      type="radio"
      id="hiragana-iroha"
      name="type"
      value="hiragana-iroha" />hiragana-iroha
  </label>

  <label for="japanese-formal">
    <input
      type="radio"
      id="japanese-formal"
      name="type"
      value="japanese-formal" />japanese-formal
  </label>

  <label for="japanese-informal">
    <input
      type="radio"
      id="japanese-informal"
      name="type"
      value="japanese-informal" />japanese-informal
  </label>

  <label for="kannada">
    <input type="radio" id="kannada" name="type" value="kannada" />kannada
  </label>

  <label for="katakana">
    <input type="radio" id="katakana" name="type" value="katakana" />katakana
  </label>

  <label for="katakana-iroha">
    <input
      type="radio"
      id="katakana-iroha"
      name="type"
      value="katakana-iroha" />katakana-iroha
  </label>

  <label for="khmer">
    <input type="radio" id="khmer" name="type" value="khmer" />khmer
  </label>

  <label for="korean-hangul-formal">
    <input
      type="radio"
      id="korean-hangul-formal"
      name="type"
      value="korean-hangul-formal" />korean-hangul-formal
  </label>

  <label for="korean-hanja-formal">
    <input
      type="radio"
      id="korean-hanja-formal"
      name="type"
      value="korean-hanja-formal" />korean-hanja-formal
  </label>

  <label for="korean-hanja-informal">
    <input
      type="radio"
      id="korean-hanja-informal"
      name="type"
      value="korean-hanja-informal" />korean-hanja-informal
  </label>

  <label for="lao">
    <input type="radio" id="lao" name="type" value="lao" />lao
  </label>

  <label for="lower-armenian">
    <input
      type="radio"
      id="lower-armenian"
      name="type"
      value="lower-armenian" />lower-armenian
  </label>

  <label for="malayalam">
    <input type="radio" id="malayalam" name="type" value="malayalam" />malayalam
  </label>

  <label for="mongolian">
    <input type="radio" id="mongolian" name="type" value="mongolian" />mongolian
  </label>

  <label for="myanmar">
    <input type="radio" id="myanmar" name="type" value="myanmar" />myanmar
  </label>

  <label for="oriya">
    <input type="radio" id="oriya" name="type" value="oriya" />oriya
  </label>

  <label for="persian">
    <input type="radio" id="persian" name="type" value="persian" />persian
  </label>

  <label for="simp-chinese-formal">
    <input
      type="radio"
      id="simp-chinese-formal"
      name="type"
      value="simp-chinese-formal" />simp-chinese-formal
  </label>

  <label for="simp-chinese-informal">
    <input
      type="radio"
      id="simp-chinese-informal"
      name="type"
      value="simp-chinese-informal" />simp-chinese-informal
  </label>

  <label for="tamil">
    <input type="radio" id="tamil" name="type" value="tamil" />tamil
  </label>

  <label for="telegu">
    <input type="radio" id="telegu" name="type" value="telegu" />telegu
  </label>

  <label for="thai">
    <input type="radio" id="thai" name="type" value="thai" />thai
  </label>

  <label for="tibetan">
    <input type="radio" id="tibetan" name="type" value="tibetan" />tibetan
  </label>

  <label for="trad-chinese-formal">
    <input
      type="radio"
      id="trad-chinese-formal"
      name="type"
      value="trad-chinese-formal" />trad-chinese-formal
  </label>

  <label for="trad-chinese-informal">
    <input
      type="radio"
      id="trad-chinese-informal"
      name="type"
      value="trad-chinese-informal" />trad-chinese-informal
  </label>

  <label for="upper-armenian">
    <input
      type="radio"
      id="upper-armenian"
      name="type"
      value="upper-armenian" />upper-armenian
  </label>

  <label for="disclosure-open">
    <input
      type="radio"
      id="disclosure-open"
      name="type"
      value="disclosure-open" />disclosure-open
  </label>

  <label for="disclosure-closed">
    <input
      type="radio"
      id="disclosure-closed"
      name="type"
      value="disclosure-closed" />disclosure-closed
  </label>

  <label for="-moz-ethiopic-halehame">
    <input
      type="radio"
      id="-moz-ethiopic-halehame"
      name="type"
      value="-moz-ethiopic-halehame" />-moz-ethiopic-halehame
  </label>

  <label for="-moz-ethiopic-halehame-am">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-am"
      name="type"
      value="-moz-ethiopic-halehame-am" />-moz-ethiopic-halehame-am
  </label>

  <label for="ethiopic-halehame-ti-er">
    <input
      type="radio"
      id="ethiopic-halehame-ti-er"
      name="type"
      value="ethiopic-halehame-ti-er" />ethiopic-halehame-ti-er
  </label>

  <label for="ethiopic-halehame-ti-et">
    <input
      type="radio"
      id="ethiopic-halehame-ti-et"
      name="type"
      value="ethiopic-halehame-ti-et" />ethiopic-halehame-ti-et
  </label>

  <label for="hangul">
    <input type="radio" id="hangul" name="type" value="hangul" />hangul
  </label>

  <label for="hangul-consonant">
    <input
      type="radio"
      id="hangul-consonant"
      name="type"
      value="hangul-consonant" />hangul-consonant
  </label>

  <label for="urdu">
    <input type="radio" id="urdu" name="type" value="urdu" />urdu
  </label>

  <label for="-moz-ethiopic-halehame-ti-er">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-ti-er"
      name="type"
      value="-moz-ethiopic-halehame-ti-er" />-moz-ethiopic-halehame-ti-er
  </label>

  <label for="-moz-ethiopic-halehame-ti-et">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-ti-et"
      name="type"
      value="-moz-ethiopic-halehame-ti-et" />-moz-ethiopic-halehame-ti-et
  </label>

  <label for="-moz-hangul">
    <input
      type="radio"
      id="-moz-hangul"
      name="type"
      value="-moz-hangul" />-moz-hangul
  </label>

  <label for="-moz-hangul-consonant">
    <input
      type="radio"
      id="-moz-hangul-consonant"
      name="type"
      value="-moz-hangul-consonant" />-moz-hangul-consonant
  </label>

  <label for="-moz-urdu">
    <input type="radio" id="-moz-urdu" name="type" value="-moz-urdu" />-moz-urdu
  </label>
</div>
```

#### CSS

```css
ol {
  font-size: 1.2rem;
}

.container {
  column-count: 3;
}

label {
  display: block;
}

input {
  margin: 0.4rem;
}
```

#### JavaScript

```js
const container = document.querySelector(".container");
container.addEventListener("change", (event) => {
  const list = document.querySelector("ol");
  list.setAttribute("style", `list-style-type: ${event.target.value}`);
});
```

#### 結果

{{EmbedLiveSample("All_list_style_types", "600", "800")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
