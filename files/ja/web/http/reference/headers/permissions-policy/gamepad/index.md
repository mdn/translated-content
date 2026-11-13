---
title: "Permissions-Policy: gamepad"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `gamepad` ディレクティブは、現在の文書が[ゲームパッド API](/ja/docs/Web/API/Gamepad_API) を使用できるかどうかを制御します。

具体的には、定義されたポリシーでこの機能の使用がブロックされた場合、 {{domxref('Navigator.getGamepads()')}} を呼び出すと `SecurityError` の {{domxref('DOMException')}} が発生します。さらに、 {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} および {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} イベントは発生しません。

## 構文

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`gamepad` の既定の許可リストは `self` です。

## 例

### 一般的な例

SecureCorp Inc. は、自社のオリジンおよびオリジンが `https://example.com` であるものを除く、すべての閲覧コンテキストでゲームパッド API を無効にしたいと考えています。
これは、次の HTTP レスポンスヘッダーを送信して、権限ポリシーを定義することで実現できます。

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### \<iframe> 要素の使用

ｃFastCorp Inc. は、 `gamepad` を、特定の `<iframe>` を除き、オリジン同士の子フレームすべてに対して無効にしたいと考えています。
これは、次の HTTP レスポンスヘッダーを配信して、権限ポリシーを定義することで実現できます。

```http
Permissions-Policy: gamepad=(self)
```

次に、 {{HTMLElement('iframe','allow','#Attributes')}} 属性を `<iframe>` 要素に記載します。

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

iframe 属性は、特定のフレームで機能を選択的に有効にすることができ、同じオリジンからの文書を含むフレームでも、他のフレームでは機能しないようにすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
