---
title: ":checked"
slug: Web/CSS/:checked
---

{{CSSRef}}

**`:checked`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)セレクターで、**ラジオボタン** ([`<input type="radio">`](/ja/docs/Web/HTML/Element/input/radio))、 **チェックボックス** ([`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox))、 **オプションボタン** ({{HTMLElement("select")}} の中の {{HTMLElement("option")}}) 要素がチェックされていたり `on` の状態にあったりすることを表します。

```css
/* すべての選択中のラジオボタン、チェックボックス、オプションボタン */
:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

ユーザーは要素をチェック/選択することでこの状態にすることができ、要素のチェックや選択を外すとこの状態から外れます。

> **メモ:** ブラウザーは `<option>` を[置換要素](/ja/docs/Web/CSS/Replaced_element)として扱うことが多いので、 `:checked` 擬似クラスでスタイルが適用される部分の大きさはブラウザーによって異なります。

## 構文

```
:checked
```

## 例

### 基本的な例

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes" />
  <label for="yes">Yes</label>

  <input type="radio" name="my-input" id="no" />
  <label for="no">No</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
  <label for="opt-in">Check me!</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Apples</option>
  <option value="opt2">Grapes</option>
  <option value="opt3">Pears</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* チェックが入った入力のラベル */
input:checked + label {
  color: red;
}

/* チェックが入ったラジオボタン */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* チェックが入ったチェックボックス */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* 選択されたオプション */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### 結果

{{EmbedLiveSample("Basic_example")}}

### 非表示のチェックボックスの要素を切り替え

この例では、 `:checked` 擬似クラスを利用して、ユーザーにチェックボックスの状態に基づいたコンテンツの切り替えができるようにします。 [JavaScript](/ja/docs/Web/JavaScript) はまったく使っていません。

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr>
      <th>Column #1</th>
      <th>Column #2</th>
      <th>Column #3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Toggle hidden rows</label>
```

#### CSS

```css
/* トグルチェックボックスを隠す */
#expand-toggle {
  display: none;
}

/* 開く要素は既定で隠す */
.expandable {
  visibility: collapse;
  background: #ddd;
}

/* ボタンにスタイルを適用 */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* チェックボックスをチェックしたときに隠しコンテンツを表示 */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* チェックボックスがチェックされていたらボタンにスタイルを適用 */
#expand-toggle:checked ~ #expand-btn {
  background-color: #ccc;
}
```

#### 結果

{{EmbedLiveSample("Toggling_elements_with_a_hidden_checkbox", "auto", 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/Learn/Forms)
- [ウェブフォームの整形](/ja/docs/Learn/Forms/Styling_web_forms)
- 関連する HTML 要素: [`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/ja/docs/Web/HTML/Element/input/radio), {{HTMLElement("select")}}, {{HTMLElement("option")}}
- [置換要素](/ja/docs/Web/CSS/Replaced_element)
