---
title: Document.title
slug: Web/API/Document/title
---

{{APIRef("DOM")}}

**`document.title`** プロパティは、現在の文書の[題名](/ja/docs/Web/HTML/Element/title)を取得または設定します。

## 構文

```
var docTitle = document.title;
```

_docTitle_ は _document_ の題名を含む文字列です。題名が `document.title` に設定することで上書きされている場合は、その値を含みます。そうでなければ、マークアップの中で指定された題名を含みます (下記の[メモ](#notes)を参照)。

```
document.title = newTitle;
```

`newTitle` は文書の新しい題名です。代入すると、 `document.title` の返値、文書に表示される題名 (ウィンドウのタイトルバーやタブなど)、文書の DOM (HTML 文書の `<title>` 要素の内容など) にも反映されます。

## 例

```js
<!DOCTYPE html>
<html>
<head>
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

| 仕様書                                                                               | 状態                             | 備考 |
| ------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG','#document.title','document.title')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}
