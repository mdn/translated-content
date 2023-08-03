---
title: "Feature-Policy: fullscreen"
slug: Web/HTTP/Headers/Permissions-Policy/fullscreen
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `fullscreen` ディレクティブは、現在の文書が {{domxref('Element.requestFullScreen()')}} を使用することを許可するかどうかを制御します。このポリシーが有効であれば、 返却された {{jsxref('Promise')}} が {{jsxref('TypeError')}} で拒否されます。

既定では、最上位の文書およびその同じオリジンの子フレームが全画面モードを要求し、入ることができます。このディレクティブは別オリジンのフレームが全画面モードを使用することを許可したり拒否したりします。同じオリジンのフレームも含みます。

> **メモ:** このディレクティブ (つまり `allow` 属性で設定したもの) と `allowfullscreen` 属性の両方が `<iframe>` 要素に存在する場合、このディレクティブが優先されます。以前は `fullscreen` ディレクティブが `allowfullscreen` 属性と同時に存在しないと動作しないバグがありましたが、Firefox 80 では修正されています ([Firefox バグ 1608358](https://bugzil.la/1608358))。

## 構文

```
Feature-Policy: fullscreen <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

`fullscreen` の既定の許可リストは `'self'` です。

## 例

### 一般的な例

SecureCorp Inc. は、自分自身のオリジンおよびオリジンが `https://example.com` のものを除いてすべての Fullscreen API を無効にしようとしているとします。以下の機能ポリシーを設定する HTTP レスポンスヘッダーを配信することで実現できます。

```
Feature-Policy: fullscreen 'self' https://example.com
```

### \<iframe> 要素と

FastCorp Inc. は、特定の \<iframe> を除いたすべての別オリジンの子フレームの `fullscreen` を無効にしようとしているとします。以下の機能ポリシーを設定する HTTP レスポンスヘッダーを配信することで実現できます。

```
Feature-Policy: fullscreen 'self'
```

それから {{HTMLElement('iframe','allow','#Attributes')}} 属性を `<iframe>` 要素に含めます。

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

iframe の属性は、選択的に特定のフレームの機能を有効にし、その他はたとえそれらのフレームが同じオリジンからきた文書を含んでいても無効にします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
