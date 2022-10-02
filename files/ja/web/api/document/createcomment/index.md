---
title: Document.createComment()
slug: Web/API/Document/createComment
---

{{APIRef("DOM")}}

**`createComment()`** は新たにコメントノードを作成し、返します。

## 構文

```
CommentNode = document.createComment(data);
```

### 引数

- _data_
  - : 文字列で、コメントに追加されるデータを含みます。

## 例

```js
var docu = new DOMParser().parseFromString('<xml></xml>',  'application/xml');
var comment = docu.createComment('This is a not-so-secret comment in your document');

docu.getElementsByTagName('xml')[0].appendChild(comment);

alert(new XMLSerializer().serializeToString(docu));
// 表示結果: <xml><!--This is a not-so-secret comment in your document--></xml>
```

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('DOM WHATWG', '#dom-document-createcomment', 'document.createComment')}} | {{Spec2('DOM WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}
