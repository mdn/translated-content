---
title: "HTML 属性: form"
short-title: form
slug: Web/HTML/Reference/Attributes/form
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

`form` は HTML の属性で、フォーム関連要素を、同じ文書内の {{htmlelement("form")}} 要素に関連付けます。この属性は、{{htmlelement("button")}}、{{htmlelement("fieldset")}}、{{htmlelement("input")}}、{{htmlelement("object")}}、{{htmlelement("output")}}、{{htmlelement("select")}}、{{htmlelement("textarea")}} の各要素に適用されます。

## 値

この要素を関連付ける `<form>` 要素の `id` 属性値。

## 使用上のメモ

既定では、フォームコントロールは最も近い祖先の {{htmlelement("form")}} 要素に関連付けられます。一方、`<form>` 内に含まれていないフォームコントロールは、どのフォームにも関連付けられません。`form` 属性を使用すると、これらの既定の動作を上書きできます。

`form` 属性を指定することで、{{htmlelement("button")}}、{{htmlelement("fieldset")}}、{{htmlelement("input")}}、{{htmlelement("object")}}、{{htmlelement("output")}}、{{htmlelement("select")}}、{{htmlelement("textarea")}} の各要素に明示的にフォームオーナーを指定することができます。これにより、 あるフォームコントロールを、同じ文書内の任意の場所に配置された `<form>` 要素に関連付けられた状態にすることができます。

フォームが送信されると、 `<form>` 要素に関連付けられたコントロールの名前と値が送信されます。これらは物理的にその `<form>` 内に含まれていなくても、また別の `<form>` 内に含まれていても、送信対象となります。

コントロールの `form` 属性は、そのコントロールを関連付けたい `<form>` 要素の `id` を値として取ります。それ以外の値を `form` 属性に設定してもすべて無視されます。

属性値を最も近い祖先 `<form>` の `id` に設定することは必須ではありませんが、あるフォームコントロールとその最も近い祖先フォームとの関連を明示的に定義することで、スクリプトや不正な HTML によってその特定の `<form>` がコントロールの最も近い祖先フォームでなくなった場合でも、フォームコントロールがフォームから切り離されることがないよう にします。

### 祖先ではないフォームとの関連付け

`form` 属性を使用することで、ある `<form>` に含まれたフォームコントロールを別の `<form>` と関連付けられます。

このサンプルコードでは、ユーザー名の `<input>` は `internalForm` 内に含まれていますが、 `form` 属性によって、このコントロールは含まれている祖先フォームから切り離され、代わりに `externalForm` に関連付けられています。

```html
<form id="externalForm"></form>
<form id="internalForm">
  <label for="username">ユーザー名:</label>
  <input form="externalForm" type="text" name="username" id="username" />
</form>
```

この場合、 `externalForm` が送信されたときにユーザー名が送信されますが、 `internalForm` には関連付けられたフォームコントロールは存在しません。

### `form` 属性は継承されない

`form` 属性は、それが設定された要素のみに関連付けます。この属性の動作は継承されません。例えば、 `<fieldset>` 要素に `form` 属性が設定された場合、関連付けられるのは `<fieldset>` のみであり、その `<fieldset>`内に含まれるフォームコントロールは自動的には関連付けられ**ません**。

この例では、 `<fieldset>` と `username` の `<input>` は `exampleForm` に関連付けられており、{{domxref("HTMLFormControlsCollection")}} のプロパティである {{domxref("HTMLFormElement.elements")}} に含まれていますが、 `password` は含まれません。 `exampleForm` が送信される際には、 `username` のみが含まれます。

```html
<form id="exampleForm"></form>

<fieldset form="exampleForm">
  <legend>ログイン情報</legend>
  <label
    >ユーザー名: <input form="exampleForm" type="text" name="username"
  /></label>
  <label>パスワード: <input type="password" name="password" /></label>
</fieldset>
```

それぞれの入れ子要素は、自分自身で `form` 属性を持つか、フォーム内に含まれている必要があります。どの要素がフォームに関連付けられたかは、 JavaScript を使用して [HTMLFormElement.elements](/ja/docs/Web/API/HTMLFormElement/elements) で調べることができます。

### フォーム送信

`form` 属性を設定しても、その要素がフォームと共に送信されるということではありません。送信可能な要素（`<button>`、`<input>`、`<select>`、`<textarea>` など）のみが、関連付けられた `<form>` が送信された際にその名前と値が送信されます。

この場合、たとえ `<output>` が暗黙的に、そして明示的に `calcForm` に関連付けられたとしても、 `calcForm` が送信される際に `result` は `a` や `b` につけて送信されません。ただし、 `result` はフォームの `HTMLFormControlsCollection` の一部です。

```html-nolint
<form id="calcForm">
  <label>1 つ目の数値: <input id="a" value="2" type="number" /></label>
  <label>2 つ目の数値: <input id="b" value="3" type="number" /></label>
  <label>合計: <output name="result" for="a b" form="calcForm">5</output></label>
</form>
```

## 例

### 基本的な例

この例では、明示的に `<form>` 要素内に含まれていなくても、 `form` 属性を使用してフォーム関連要素を `<form>` 要素に関連付ける方法を示しています。この例では表示されるフォーム関連要素はすべて、暗黙的に（フォーム内に直接含まれていることで）または明示的に（`form` 属性を通じて） `loginForm` に関連付けられた状態にあります。ログインフォームが送信されると、それぞれの送信可能な要素の名前と値が記載されます。

```html
<form id="loginForm">
  <label>ユーザー名: <input type="text" name="username" /></label>
</form>

<label
  >パスワード: <input form="loginForm" type="password" name="password"
/></label>
<label>
  選択してください:
  <select form="loginForm" name="options">
    <option value="A">A</option>
    <option value="B">B</option>
  </select>
</label>
<label
  >説明:
  <textarea form="loginForm" rows="4" name="description">
Hello, World!</textarea
  >
</label>
<button form="loginForm" type="submit" name="submitLogin" value="Login">
  送信
</button>
```

### 異なるフォームに関連付けられた要素

この例では、 `<form>` 要素が `parentForm` と `targetForm` の 2 つがあります。 `parentForm` 内の `<button>` は、 `form` 属性が `targetForm` に設定されており、最も近い祖先要素である `parentForm` との関連付けを解除し、代わりに `targetForm` に関連付けられています。送信ボタンが押されると、その祖先である `parentForm` ではなく、 `targetForm` が送信されます。

```html
<form id="targetForm">
  <input type="text" name="targetInput" />
</form>
<form id="parentForm">
  <button form="targetForm" type="submit" name="submitTarget" value="Target">
    Submit target form
  </button>
</form>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [既定のフォームの動作の上書き](/ja/docs/Web/HTML/Reference/Elements/input/image#既定のフォームの動作の上書き)
