---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

JavaScript の例外 "Permission denied to access property" は、権限がない状態でオブジェクトへのアクセスの試行があった場合に発生します。

## エラーメッセージ

```plain
DOMException: Blocked a frame with origin "x" from accessing a cross-origin frame. (Chromium-based)
DOMException: Permission denied to access property "x" on cross-origin object (Firefox)
SecurityError: Blocked a frame with origin "x" from accessing a cross-origin frame. Protocols, domains, and ports must match. (Safari)
```

## エラー型

{{domxref("DOMException")}}.

## エラーの原因

権限がない状態でオブジェクトへのアクセスの試行がありました。これは異なるドメインから読み込んだ {{HTMLElement("iframe")}} 要素が[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)に違反する場合などです。

## 例

### 文書にアクセスする権限がない

```html
<iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"></iframe>
```

```js
console.log(frames[0].document);
// Error: Permission denied to access property "document"
```

## 関連情報

- {{HTMLElement("iframe")}}
- [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)
