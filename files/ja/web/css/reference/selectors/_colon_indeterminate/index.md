---
title: CSS `:indeterminate` 擬似クラス
short-title: :indeterminate
slug: Web/CSS/Reference/Selectors/:indeterminate
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:indeterminate`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、未確定の状態にあるフォーム要素を表します。例えばチェックボックスで [`indeterminate`](/ja/docs/Web/API/HTMLInputElement/indeterminate) 状態に設定されたもの、ラジオボタンでグループ内がすべて選択されていないもの、{{HTMLElement("progress")}} 要素で中間の状態などです。

```css
/* 未確定の状態にある <input> をすべて選択 */
input:indeterminate {
  background: lime;
}
```

このセレクターが対象とする要素は以下の通りです。

- [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) 要素で、[`indeterminate`](/ja/docs/Web/API/HTMLInputElement/indeterminate) プロパティが `true` に設定されている場合
- [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio) 要素で、フォーム内の同じ `name` の値を持つすべてのラジオボタンが `checked` でない場合
- {{HTMLElement("progress")}} 要素に `value` がなく、未確定の状態のもの

## 構文

```css
:indeterminate {
  /* ... */
}
```

## 例

### チェックボックスとラジオボタン

この例では中間の状態にあるフォームの要素に特殊なスタイルを適用します。

#### HTML

```html-nolint
<fieldset>
  <legend>チェックボックス</legend>
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">このチェックボックスのラベルは、ライム色で始まります。</label>
  </div>
</fieldset>

<fieldset>
  <legend>ラジオボタン</legend>
  <div>
    <input type="radio" id="radio1" name="radioButton" value="val1" />
    <label for="radio1">1 つ目のラジオボタンで、ライム色で始まります。</label>
  </div>
  <div>
    <input type="radio" id="radio2" name="radioButton" value="val2" />
    <label for="radio2">2 つ目のラジオボタンで、ライム色で始まります。</label>
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

for (const input of inputs) {
  input.indeterminate = true;
}
```

#### 結果

{{EmbedLiveSample('Checkbox_radio_button', 'auto', 230)}}

### 進捗バー

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

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/Learn_web_development/Extensions/Forms)
- [ウェブフォームの整形](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) 要素の [`indeterminate`](/ja/docs/Web/API/HTMLInputElement/indeterminate) 属性
- {{HTMLElement("input")}} およびそれを実装している {{domxref("HTMLInputElement")}} インターフェイス
- {{cssxref(":checked")}} セレクターは、チェックボックスがチェックされているかどうかでスタイル付けすることができます
