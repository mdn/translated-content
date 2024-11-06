---
title: ":indeterminate"
slug: Web/CSS/:indeterminate
---

{{CSSRef}}

**`:indeterminate`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)セレクターで、未確定の状態にあるフォーム要素を表します。例えばチェックボックスで HTML の [`indeterminate`](/ja/docs/Web/HTML/Element/input/checkbox#indeterminate) 属性が `true` に設定されたもの、ラジオボタンでグループ内がすべて選択されていないもの、 {{HTMLElement("progress")}} 要素で中間の状態などです。

```css
/* 未確定の状態にある <input> をすべて選択 */
input:indeterminate {
  background: lime;
}
```

このセレクターが対象とする要素は以下の通りです。

- [`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox) 要素で、[JavaScript](/ja/docs/Web/JavaScript) によって `indeterminate` プロパティが `true` に設定されている場合
- [`<input type="radio">`](/ja/docs/Web/HTML/Element/input/radio) 要素で、フォーム内の同じ `name` の値を持つすべてのラジオボタンが未選択である場合
- {{HTMLElement("progress")}} 要素で、中間の状態の場合

## 構文

```
:indeterminate
```

## 例

### チェックボックスとラジオボタン

この例では中間の状態にあるフォームの要素に特殊なスタイルを適用します。

#### HTML

```html
<fieldset>
  <legend>Checkbox</legend>
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">This checkbox label starts out lime.</label>
  </div>
</fieldset>

<fieldset>
  <legend>Radio</legend>
  <div>
    <input type="radio" id="radio1" name="radioButton" />
    <label for="radio1">First radio label starts out lime.</label>
  </div>
  <div>
    <input type="radio" id="radio2" name="radioButton" />
    <label for="radio2">Second radio label also starts out lime.</label>
  </div>
</fieldset>
```

#### CSS

```css
input:indeterminate + label {
  background: lime;
}
```

```css hidden
fieldset {
  padding: 1em 0.75em;
}

fieldset:first-of-type {
  margin-bottom: 1.5rem;
}

fieldset:not(:first-of-type) > div:not(:last-child) {
  margin-bottom: 0.5rem;
}
```

#### JavaScript

```js
const inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}
```

#### 結果

{{EmbedLiveSample('Checkbox_radio_button', 'auto', 230)}}

### プログレスバー

#### HTML

```html
<progress></progress>
```

#### CSS

```css
progress {
  margin: 4px;
}

progress:indeterminate {
  width: 80vw;
  height: 20px;
}
```

#### 結果

{{EmbedLiveSample('Progress_bar', 'auto', 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/Learn/Forms)
- [ウェブフォームの整形](/ja/docs/Learn/Forms/Styling_web_forms)
- [`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox) 要素の [`indeterminate`](/ja/docs/Web/HTML/Element/input/checkbox#indeterminate) 属性
- {{HTMLElement("input")}} およびそれを実装している {{domxref("HTMLInputElement")}} インターフェイス
- {{cssxref(":checked")}} セレクターは、チェックボックスがチェックされているかどうかでスタイル付けすることができます
