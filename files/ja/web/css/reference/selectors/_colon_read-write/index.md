---
title: CSS `:read-write` 擬似クラス
short-title: :read-write
slug: Web/CSS/Reference/Selectors/:read-write
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:read-write`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、ユーザーが編集できる要素 (`input` や `textarea` など) を表します。

{{InteractiveExample("CSS デモ: :read-write", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

*:read-write {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
}
```

```html interactive-example
<p>詳細を記入してください:</p>

<form>
  <label for="email">メールアドレス:</label>
  <input id="email" name="email" type="email" value="test@example.com" />

  <label for="note">あなた自身についての一言メモ:</label>
  <textarea id="note" name="note">恥ずかしがるな</textarea>

  <label for="pic">あなたの写真:</label>
  <input id="pic" name="pic" type="file" />

  <input type="submit" value="Submit form" />
</form>
```

## 構文

```css
:read-write {
  /* ... */
}
```

## 例

### 読み取り専用のコントロールを使用したフォームの詳細の確認

[`readonly`](/ja/docs/Web/HTML/Reference/Attributes/readonly) フォームコントロールは、ユーザーに以前入力した情報を確認してもらい、その情報を読み書き可能なコントロールに入力された新しいデータとともに送信したい場合に使用することができます。
下記例では、{{cssxref(":read-only")}} 擬似クラスを使用して、{{htmlelement("textarea")}}（ユーザーの住所）を通常の段落のように表示しています。`:read-write` 擬似クラスを使用すると、編集可能な `<textarea>`（配送指示）を強調表示することができます。

```css hidden
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 10px auto;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

button,
label,
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

textarea {
  width: 50%;
}

textarea {
  height: 70px;
  resize: none;
}

label {
  width: 40%;
}
```

```css
textarea:read-only {
  border: 0;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

```html
<form>
  <fieldset>
    <legend>詳細を確認</legend>
    <div>
      <label for="address">住所:</label>
      <textarea id="address" name="address" readonly>
123 Choco Mountain,
Awesome Ridge,
CA</textarea>
    </div>
    <div>
      <label for="instructions">配達指示</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>
  <button type="submit">確認</button>
</form>
```

{{embedlivesample("confirming_form_details_using_read-only_controls", , "300")}}

### フォーム以外の読み書き用コントロールのスタイル付け

このセレクターは {{htmlElement("input")}}/{{htmlElement("textarea")}} 要素に [`readonly`](/ja/docs/Web/HTML/Reference/Elements/input#readonly) が設定されているものだけを選択するのではありません。ユーザーが編集できる*あらゆる*要素、例えば {{htmlelement("p")}} 要素に [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) が設定されたものを選択します。

```html
<p contenteditable>この段落は編集可能です。読み書き可です。</p>

<p>この段落は編集できません。読み取り専用です。</p>
```

```css
body {
  font-family: sans-serif;
}

p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}
```

{{EmbedLiveSample('Styling_read-write_non-form_controls')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":read-only")}}
- HTML の [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性
