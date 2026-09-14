---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `bluetooth` ディレクティブは、現在の文書で [Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の使用を許可するかどうかを制御します。

仕様上、ポリシーによってこの機能の使用がブロックされていた場合、 {{domxref('Navigator.bluetooth')}} から返される {{domxref('Bluetooth')}} オブジェクトのメソッドのアクセスをブロックします。

- {{DOMxRef("Bluetooth.getAvailability()")}} は常に、返されるプロミス ({{jsxref("Promise")}}) を `false` の値で履行します。
- {{DOMxRef("Bluetooth.getDevices()")}} は返されるプロミス ({{jsxref("Promise")}}) を `SecurityError` の {{domxref("DOMException")}} で拒否します。
- {{DOMxRef("Bluetooth.requestDevice()")}} は返されるプロミス ({{jsxref("Promise")}}) を `SecurityError` の {{domxref("DOMException")}} で拒否します。

## 構文

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`bluetooth` の既定の許可リストは `self` です。

## 例

### 全般的な例

SecureCorp Inc. は、 Web Bluetooth API を、自社のオリジンおよびオリジンが `https://example.com` であるものを除く、すべての閲覧コンテキストで無効にしたいと考えているとします。
これは、次の HTTP レスポンスヘッダーを送信して、権限ポリシーを定義することで実現できます。

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### \<iframe> 要素

FastCorp Inc. は、特定の `<iframe>` を除く、別オリジンの子フレームの `bluetooth` をすべて無効にしたいと考えています。
これは、次の HTTP レスポンスヘッダーを送信して、権限ポリシーを定義することで実現できます。

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

それから {{HTMLElement('iframe','allow','#Attributes')}} 属性を `<iframe>` 要素に設定します。

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>` 属性は、特定のフレームで機能を選択的に有効にし、他のフレームでは無効にすることができます。これらのフレームが同じオリジンからの文書を含んでいる場合でも同様です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
