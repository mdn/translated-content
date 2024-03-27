---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
---

{{jsSidebar("Errors")}}

JavaScript の例外 "Permission denied to access property" は、権限がない状態でオブジェクトへのアクセスの試行があった場合に発生します。

## エラーメッセージ

```js
Error: Permission denied to access property "x"
```

## エラーの種類

{{jsxref("Error")}}

## エラーの原因

権限がない状態でオブジェクトへのアクセスの試行がありました。これは異なるドメインから読み込んだ {{HTMLElement("iframe")}} 要素が[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)に違反する場合などです。

## 例

### 文書にアクセスする権限がない

```html
<!doctype html>
<html>
  <head>
    <iframe
      id="myframe"
      src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      onload = function () {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      };
    </script>
  </head>
  <body></body>
</html>
```

## 関連情報

- {{HTMLElement("iframe")}}
- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)
