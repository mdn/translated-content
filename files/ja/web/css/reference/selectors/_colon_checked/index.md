---
title: :checked
slug: Web/CSS/Reference/Selectors/:checked
original_slug: Web/CSS/:checked
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

**`:checked`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、**ラジオボタン** ([`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio))、 **チェックボックス** ([`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox))、 **オプションボタン** ({{HTMLElement("select")}} の中の {{HTMLElement("option")}}) 要素がチェックされていたり `on` の状態にあったりすることを表します。

{{InteractiveExample("CSS デモ: :checked", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

input:checked {
  border: none;
  outline: 2px solid deeppink;
}
```

```html-nolint interactive-example
<form>
  <p>どのように私たちを知りましたか？</p>
  <label
    ><input name="origin" type="radio" value="google" checked /> Google</label
  >
  <label><input name="origin" type="radio" value="facebook" /> Facebook</label>
  <p>利用規約に同意してください。</p>

  <label
    ><input name="newsletter" type="checkbox" checked /> パーソナライズされたニュースレターを購読したいです。</label
  >

  <label
    ><input name="privacy" type="checkbox" />プライバシーポリシーをを読み、同意します。</label
  >

  <input type="submit" value="送信フォーム" />
</form>
```

ユーザーは要素をチェック/選択することでこの状態にすることができ、要素のチェックや選択を外すとこの状態から外れます。

> [!NOTE]
> ブラウザーは `<option>` を{{ glossary("replaced elements", "置換要素")}}として扱うことが多いので、 `:checked` 擬似クラスでスタイルが適用される部分の大きさはブラウザーによって異なります。[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)の機能を使用すると、対応しているブラウザーで、通常の DOM 要素と同様に、 `<option>` 要素を完全にカスタマイズすることができます。

## 構文

```css
:checked {
  /* ... */
}
```

## 例

### 基本的な例

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes" value="yes" />
  <label for="yes">はい</label>

  <input type="radio" name="my-input" id="no" value="no" />
  <label for="no">いいえ</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
  <label for="opt-in">チェックしてください</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">りんご</option>
  <option value="opt2">ぶどう</option>
  <option value="opt3">なし</option>
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
      <th>列 #1</th>
      <th>列 #2</th>
      <th>列 #3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[追加のテキスト]</td>
      <td>[追加のテキスト]</td>
      <td>[追加のテキスト]</td>
    </tr>
    <tr>
      <td>[セルのテキスト]</td>
      <td>[セルのテキスト]</td>
      <td>[セルのテキスト]</td>
    </tr>
    <tr>
      <td>[セルのテキスト]</td>
      <td>[セルのテキスト]</td>
      <td>[セルのテキスト]</td>
    </tr>
    <tr class="expandable">
      <td>[追加のテキスト]</td>
      <td>[追加のテキスト]</td>
      <td>[追加のテキスト]</td>
    </tr>
    <tr class="expandable">
      <td>[追加のテキスト]</td>
      <td>[追加のテキスト]</td>
      <td>[追加のテキスト]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">隠された行を表示/非表示</label>
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
  background: #dddddd;
}

/* ボタンにスタイルを適用 */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ffff77;
  border: 1px solid;
  border-radius: 3px;
}

/* チェックボックスをチェックしたときに隠しコンテンツを表示 */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* チェックボックスがチェックされていたらボタンにスタイルを適用 */
#expand-toggle:checked ~ #expand-btn {
  background-color: #cccccc;
}
```

#### 結果

{{EmbedLiveSample("Toggling_elements_with_a_hidden_checkbox", "auto", 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/Learn_web_development/Extensions/Forms)
- [ウェブフォームのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- 関連する HTML 要素: [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio), {{HTMLElement("select")}}, {{HTMLElement("option")}}
- {{glossary("Replaced elements", "置換要素")}}
