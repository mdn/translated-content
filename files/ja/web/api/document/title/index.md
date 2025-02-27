---
title: "Document: title プロパティ"
short-title: title
slug: Web/API/Document/title
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`document.title`** プロパティは、現在の文書の題名を取得または設定します。
存在する場合、[`<title>`](/ja/docs/Web/HTML/Element/title) の値が既定値です。

## 値

文字列で、この文書の題名が入ります。題名が `document.title` に設定することで上書きされている場合は、その値が入ります。そうでなければ、 [`<title>`](/ja/docs/Web/HTML/Element/title) 要素に指定された題名が入ります。

```js
document.title = newTitle;
```

`newTitle` は文書の新しい題名です。代入すると、 `document.title` の返値、文書に表示される題名（ウィンドウのタイトルバーやタブなど）、文書の DOM（HTML 文書の `<title>` 要素の内容など）にも反映されます。

## 例

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body>
    <script>
      alert(document.title); // "Hello World!" と表示
      document.title = "Goodbye World!";
      alert(document.title); // "Goodbye World!" と表示
    </script>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
