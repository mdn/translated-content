---
title: 'Feature-Policy: geolocation'
slug: Web/HTTP/Headers/Feature-Policy/geolocation
tags:
  - 機能ポリシー
  - Geolocation
  - HTTP
  - ヘッダー
  - 実験的
browser-compat: http.headers.Feature-Policy.geolocation
translation_of: Web/HTTP/Headers/Feature-Policy/geolocation
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `geolocation` ディレクティブは、現在の文書が {{domxref('Geolocation')}} インターフェイスを使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} および {{domxref('Geolocation.watchPosition','watchPosition()')}} を呼び出すと、関数のコールバックが呼び出され、 {{domxref('GeolocationPositionError')}} のコードが `PERMISSION_DENIED` になります。</span>

既定では、 Geolocation API は最上位の文書およびその同じオリジンの子フレームの中で使用することができます。このディレクティブは別オリジンのフレームによる位置情報へのアクセスを許可したり拒否したりします。同じオリジンのフレームも含みます。

## 構文

```
Feature-Policy: geolocation <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#syntax) を参照してください。

## 既定のポリシー

`geolocation` の既定の許可リストは `'self'` です。

## 例

### 一般的な例

SecureCorp Inc. が、自分自身のオリジンおよびオリジンが `https://example.com` のものを除いてすべての Geolocation API を無効にしようとしているとします。以下の機能ポリシーを設定する HTTP レスポンスヘッダーを配信することで実現できます。

```
Feature-Policy: geolocation 'self' https://example.com
```

### \<iframe> 要素と

FastCorp Inc. が、特定の \<iframe> を除いたすべての別オリジンの子フレームの `geolocation` を無効にしようとしているとします。以下の機能ポリシーを設定する HTTP レスポンスヘッダーを配信することで実現できます。

```
Feature-Policy: geolocation 'self'
```

それから {{HTMLElement('iframe','allow','#Attributes')}} 属性を `<iframe>` 要素に含めてください。

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

興味深いことに、 `allow` 属性は、同じオリジンの文書を含むフレームであっても、あるフレームでは機能を有効にし、他のフレームでは機能を無効にするという選択をすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
