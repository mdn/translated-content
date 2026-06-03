---
title: CSS `:read-only` 擬似クラス
short-title: :read-only
slug: Web/CSS/Reference/Selectors/:read-only
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:read-only`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、ユーザーが編集できない要素（特定の {{htmlelement("input")}} 型や {{htmlelement("textarea")}} など）を表します。HTML の [`readonly`](/ja/docs/Web/HTML/Reference/Attributes/readonly) 属性が適用されない要素（[`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio)、[`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)、他のすべてのフォーム以外の要素など）も、`:read-only` 擬似クラスによって選択されます。実際、`:read-only` は {{cssxref(":read-write")}} に一致しないすべての要素に一致するため、`:not(:read-write)` と同等となります。

{{InteractiveExample("CSS デモ: :read-only", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

*:read-only {
  font-weight: bold;
  color: indigo;
}
```

```html interactive-example
<p>あなた自身について記入してください:</p>

<form>
  <label for="email">メールアドレス:</label>
  <input id="email" name="email" type="email" value="test@example.com" />

  <label for="note">短い自己紹介:</label>
  <textarea id="note" name="note">恥ずかしがらないで</textarea>

  <label for="pic">写真:</label>
  <input id="pic" name="pic" type="file" />

  <input type="submit" value="フォームを送信" />
</form>
```

## 構文

```css
:read-only {
  /* ... */
}
```

## 例

### 読み取り専用/読み書きコントロールによるフォーム情報の確認

読み取り専用のフォームコントロールの使用方法の一つは、ユーザーが以前のフォームに入力した情報 (例えば、配送方法の詳細など) をチェックして確認しながら、フォームの残りの部分と一緒に情報を送信することができるようにすることです。以下の例では、これを実現しています。

`:read-only` 擬似クラスは、入力欄をクリック可能なフィールドのように見せるスタイル付けをすべて削除するために使用されており、読み取り専用の段落のように見えます。一方、 `:read-write` 擬似クラスは、編集可能な `<textarea>` により良いスタイル付けを行うために使用されています。

```html hidden
<form>
  <fieldset>
    <legend>送り先を確認してください</legend>
    <div>
      <label for="name">名前: </label>
      <input id="name" name="name" type="text" value="Mr Soft" readonly />
    </div>
    <div>
      <label for="address">住所: </label>
      <textarea id="address" name="address" readonly>
23 Elastic Way,
Viscous,
Bright Ridge,
CA
</textarea
      >
    </div>
    <div>
      <label for="postal-code">郵便番号: </label>
      <input
        id="postal-code"
        name="postal-code"
        type="text"
        value="94708"
        readonly />
    </div>
  </fieldset>

  <fieldset>
    <legend>最終確認</legend>
    <div>
      <label for="sms-confirm">SMS で確認を送信</label>
      <input id="sms-confirm" name="sms-confirm" type="checkbox" />
    </div>
    <div>
      <label for="instructions">特記事項はありますか？</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>

  <div><button type="submit">詳細を修正して送信</button></div>
</form>
```

```css hidden
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
  margin-bottom: 20px;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

button,
label,
input[type="text"],
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

input[type="text"],
textarea {
  width: 50%;
}

textarea {
  height: 110px;
  resize: none;
}

label {
  width: 40%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  background-color: #eeeeee;
}

button {
  width: 60%;
  margin: 20px auto;
}
```

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: #dddddd;
}

textarea:read-write {
  outline: 1px dashed red;
  outline-offset: 2px;
  border-radius: 5px;
}
```

{{EmbedLiveSample("Confirming form information using read-only or read-write controls", "100%", 620)}}

### フォーム以外の読み取り専用コントロールのスタイル設定

このセレクターは {{htmlElement("input")}}/{{htmlElement("textarea")}} 要素のみを選択するものではありません。ユーザーが編集できないあらゆる要素を選択します。

```html
<p contenteditable>この段落は編集可能です。読み書き可です。</p>

<p>この段落は編集できません。読み取り専用です。</p>
```

```css
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

{{EmbedLiveSample('Styling_read-only_non-form_controls', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":read-write")}}
- HTML の [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性
