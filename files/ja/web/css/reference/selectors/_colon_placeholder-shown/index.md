---
title: CSS `:placeholder-shown` 擬似クラス
short-title: :placeholder-shown
slug: Web/CSS/Reference/Selectors/:placeholder-shown
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:placeholder-shown`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、{{HTMLElement("input")}} または {{HTMLElement("textarea")}} 要素のうち、現在[プレイスホルダー文字列](/ja/docs/Web/HTML/Reference/Elements/input#placeholder)が表示されているものを表します。

{{InteractiveExample("CSS デモ: :placeholder-shown", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:placeholder-shown {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
}
```

```html interactive-example
<form>
  <label for="name">名前:</label>
  <input id="name" name="name" type="text" />

  <label for="email">メールアドレス:</label>
  <input id="email" name="email" type="email" placeholder="name@example.com" />

  <label for="age">年齢:</label>
  <input
    id="age"
    name="age"
    type="number"
    value="18"
    placeholder="18 歳以上" />
</form>
```

## 構文

```css
:placeholder-shown {
  /* ... */
}
```

## 例

### 基本的な例

この例は、プレイスホルダーが表示されているときに特殊なフォントと境界線を適用します。

#### HTML

```html
<input placeholder="何か入力してください！" />
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
<input id="input1" placeholder="氏名、ランク、シリアル番号" /> <br /><br />
<input id="input2" placeholder="氏名、ランク、シリアル番号" />
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
    <label for="name">生徒名を入力:</label>
    <input id="name" placeholder="生徒名" />
  </p>
  <p>
    <label for="branch">生徒の所属を入力:</label>
    <input id="branch" placeholder="所属名" />
  </p>
  <p>
    <label for="sid">生徒 ID を入力:</label>
    <input
      pattern="[0-9]{8}"
      title="数字 8 桁の ID"
      id="sid"
      class="student-id"
      placeholder="数字 8 桁の id" />
  </p>
  <input type="submit" />
</form>
```

#### CSS

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.student-id:placeholder-shown {
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
- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
