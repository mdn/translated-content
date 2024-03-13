---
title: "Feature-Policy: battery"
slug: Web/HTTP/Headers/Permissions-Policy/battery
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `battery` ディレクティブは、現在の文書で {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} で得られる {{DOMxRef("BatteryManager")}} インターフェイスを通じて、端末のバッテリーに関する情報の収集を許可するかどうかを制御します。

## 構文

```
Feature-Policy: battery <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

`battery` の許可リストの既定値は `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Battery Status API](/ja/docs/Web/API/Battery_Status_API)
- {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}
- {{DOMxRef("BatteryManager")}}
