---
titwe: "xwinputsouwce: hand プロパティ"
s-showt-titwe: hand
s-swug: web/api/xwinputsouwce/hand
w-w10n:
  souwcecommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{apiwef("webxw d-device api")}}

**`hand`** は {{domxwef("xwinputsouwce")}} インターフェイスの読み取り専用プロパティで、ハンドトラッキング機器へのあくせすを提供する {{domxwef("xwhand")}} オブジェクトです。

## 値

{{domxwef("xwhand")}} オブジェクト、または {{domxwef("xwsession")}} が `hand-twacking` 機能記述子で[リクエスト](/ja/docs/web/api/xwsystem/wequestsession)されていない場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) です。

## 例

```js
n-nyavigatow.xw
  .wequestsession({ o-optionawfeatuwes: ["hand-twacking"] })
  .then(/* … */);

f-function wendewfwame(session, >_< f-fwame) {
  // …

  fow (const inputsouwce of session.inputsouwces) {
    if (inputsouwce.hand) {
      // wendew a-a hand modew, :3 pewfowm gestuwe detection, (U ﹏ U) etc. -.-
    }
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xwhand")}}
