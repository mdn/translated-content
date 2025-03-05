---
title: "HTMLFormElement: elements プロパティ"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLFormElement")}} の **`elements`** プロパティは、 {{domxref("HTMLFormControlsCollection")}} で {{HTMLElement("form")}} 要素に含まれているすべてのフォームコントロールを列挙して返します。

これとは別に、 {{domxref("HTMLFormElement.length", "length")}} プロパティを使用してフォームコントロールの数だけを取得することができます。

返された集合の中の特定のフォームコントロールにアクセスするには、添字か要素の `name` または `id` 属性のいずれかを使用します。

HTML 5 より前のバージョンでは、返されるオブジェクトは {{domxref("HTMLCollection")}} でした。 `HTMLFormControlsCollection` これに基づいています。

> [!NOTE]
> 同様に、指定された文書内のすべてのフォームの一覧を取得するには、その文書の {{domxref("Document.forms", "forms")}} プロパティを使用してください。

## 値

フォームに含まれるすべての非画像コントロールが入った {{domxref("HTMLFormControlsCollection")}} です。
これは生きた集合です。フォームコントロールがフォームに追加されたりフォームから削除されたりすると、この集合はその変更を反映するために更新されます。

返されたコレクション内のフォームコントロールは、ツリーの前順、深さ優先の順序に従うことで、フォームに現れるのと同じ順序になります。
これは、**ツリー順**と呼ばれます。

以下の要素のみが返されます。

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} （ただし、 [`type`](/ja/docs/Web/HTML/Element/input#type) が `"image"` であるものは、過去の経緯から除外されています）。
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

## 例

### 構文の例

この例では、フォームコントロールの一覧を取得する方法と、添字と名前または ID でそのメンバーにアクセスする方法について説明します。

```html
<form id="my-form">
  <label>
    ユーザー名:
    <input type="text" name="username" />
  </label>
  <label>
    フルネーム:
    <input type="text" name="full-name" />
  </label>
  <label>
    パスワード:
    <input type="password" name="password" />
  </label>
</form>
```

```js
const inputs = document.getElementById("my-form").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];
```

### フォームコントロールへのアクセス

この例では、フォームの要素リストを取得し、そのリストを反復処理して、何らかの処理を行えるように [`"text"`](/ja/docs/Web/HTML/Element/input/text) 型の {{HTMLElement("input")}} 要素を探すものです。

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // Update text input
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### フォームの無効化

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (let i = 0; i < inputs.length; i++) {
  // Disable all form controls
  inputs[i].setAttribute("disabled", "");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
