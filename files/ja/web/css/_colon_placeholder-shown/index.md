---
title: ':placeholder-shown'
slug: Web/CSS/:placeholder-shown
tags:
  - ':placeholder-shown'
  - CSS
  - 擬似クラス
  - リファレンス
  - セレクター
browser-compat: css.selectors.placeholder-shown
translation_of: Web/CSS/:placeholder-shown
---
{{CSSRef}}

**`:placeholder-shown`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、[プレイスホルダー文字列](/ja/docs/Web/HTML/Element/input#attr-placeholder)が表示されている {{HTMLElement("input")}} または {{HTMLElement("textarea")}} 要素を表します。

```css
/* プレイスホルダーが有効な要素を選択 */
:placeholder-shown {
  border: 2px solid silver;
}
```

## 構文

{{CSSSyntax}}

## 例

### 基本的な例

この例は、プレイスホルダーが表示されているときに特殊なフォントと境界線を適用します。

#### HTML

```html
<input placeholder="何か入力してください！">
```

#### CSS

```css
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: teal;
  color: purple;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample("Basic_example", 200, 80)}}

### 文字列があふれる場合

スマートフォンのような狭い画面では、検索ボックスやその他の入力欄の幅はとても狭くなります。これにより、プレイスホルダーの文字列が望ましくない形で切り取られることがあります。 {{cssxref("text-overflow")}} プロパティでこの挙動を修正すると便利です。

#### HTML

```html
<input id="input1" placeholder="Name, Rank, and Serial Number">
<br><br>
<input id="input2" placeholder="Name, Rank, and Serial Number">
```

#### CSS

```css
#input2:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### 結果

{{EmbedLiveSample("Overflowing_text", 200, 80)}}

### カスタマイズした入力欄

以下の例では部署名と ID コード欄をカスタムスタイルで強調します。

#### HTML

```html
<form id="test">
  <p>
    <label for="name">Enter Student Name:</label>
    <input id="name" placeholder="Student Name"/>
  </p>
  <p>
    <label for="branch">Enter Student Branch:</label>
    <input id="branch" placeholder="Student Branch"/>
  </p>
  <p>
    <label for="sid">Enter Student ID:</label>
    <input type="number" pattern="[0-9]{8}" title="8 digit ID" id="sid" class="studentid" placeholder="8 digit id"/>
  </p>
  <input type="submit"/>
</form>
```

#### CSS

```css
input {
  background-color: #E8E8E8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample("Customized_input_field", 200, 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("::placeholder")}} 擬似要素はプレイスホルダー*自身*にスタイルを適用します。
- 関連する HTML 要素: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML フォーム](/ja/docs/Learn/Forms)
