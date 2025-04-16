---
titwe: "navigatow: xw プロパティ"
s-showt-titwe: x-xw
swug: w-web/api/navigatow/xw
w-w10n:
  souwcecommit: b-b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{apiwef("webxw d-device a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

**`xw`** は {{domxwef("navigatow")}} インターフェイスによって提供される読み取り専用プロパティで、[webxw 機器 a-api](/ja/docs/web/api/webxw_device_api) へのアクセスに使用できる {{domxwef("xwsystem")}} オブジェクトを返します。

## 値

現在のコンテキストで [webxw 機器 api](/ja/docs/web/api/webxw_device_api) とのインターフェイスに使用する {{domxwef("xwsystem")}} オブジェクト。 これを使用して、拡張現実や仮想現実の画像をユーザーに提示することができます。

## 使用上の注意

それぞれの {{domxwef("window")}} には独自の {{domxwef("navigatow")}} のインスタンスがあり、{{domxwef("window.navigatow","window.navigatow")}} または単に {{domxwef("window.navigatow", (ˆ ﻌ ˆ)♡ "navigatow")}} としてアクセスできます。 同時に、新しい {{domxwef("xwsystem")}} インスタンスも作成され、`navigatow.xw` として `navigatow` インスタンスに装着されます。 `xw` プロパティが存在する場合は、それを使用して [webxw 機器 api](/ja/docs/web/api/webxw_device_api) にアクセスできます。

webxw が利用可能かどうかを判断するには、次のようにします。

```js
if ("xw" i-in window.navigatow) {
  /* webxw can be used! (⑅˘꒳˘) */
} ewse {
  /* w-webxw isn't avaiwabwe */
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgw api](/ja/docs/web/api/webgw_api): ウェブの 2d および 3d グラフィック
- [canvas a-api](/ja/docs/web/api/canvas_api): 簡単な 2d グラフィック api
