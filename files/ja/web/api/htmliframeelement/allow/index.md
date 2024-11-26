---
title: "HTMLIFrameElement: allow プロパティ"
short-title: allow
slug: Web/API/HTMLIFrameElement/allow
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

**`allow`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、この `<iframe>` 要素に対して指定された[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)を示します。このポリシーは、リクエストのオリジンに基づいて、この `<iframe>` 要素で利用できる機能（例えば、 `microphone`、`camera`、`battery`、`web-share` などへのアクセス）を定義します。

`allow` 属性で指定する権限ポリシーは、{{HTTPHeader("Permissions-Policy")}} ヘッダーで指定するポリシーの上位にさらに制限を実装します。 置き換えるものではありません。

詳しくは [`<iframe>` の権限ポリシーの構文](/ja/docs/Web/HTTP/Headers/Permissions-Policy#iframes)を参照してください。

これは {{HTMLElement("iframe")}} 要素の `allow` 属性を反映します。

## 値

A string indicates the [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy) specified for this {{HTMLElement("iframe")}} element, each policy must be separated by space.

## 例

```html
<iframe
  id="el"
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allow); // Output: "geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"
```

See [Permissions Policy in `<iframe>` element](/ja/docs/Web/HTTP/Headers/Permissions-Policy#iframes) for more available examples.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)
