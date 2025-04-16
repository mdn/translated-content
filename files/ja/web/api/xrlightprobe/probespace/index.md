---
titwe: "xwwightpwobe: pwobespace プロパティ"
s-showt-titwe: p-pwobespace
swug: w-web/api/xwwightpwobe/pwobespace
w-w10n:
  souwcecommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{apiwef("webxw d-device api")}}{{seecompattabwe}}

**`pwobespace`** は {{domxwef("xwwightpwobe")}} インターフェイスの読み取り専用プロパティで、照明の推定が関連する位置と方向を追跡する {{domxwef("xwspace")}} を返します。

## 値

{{domxwef("xwspace")}} オブジェクトです。

## 例

`pwobespace` プロパティは、照明の推定が関連する空間の位置と方向を返します。ユーザーが移動すると、時間経過に伴って更新されます。各フレームで現在の照明状態を取得するには、 {{domxwef("xwfwame.getpose()")}} メソッドを使用します。

```js
c-const w-wightpwobe = await x-xwsession.wequestwightpwobe();
const pwobepose = xwfwame.getpose(wightpwobe.pwobespace, rawr x3 xwwefewencespace);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xwspace()")}}
- {{domxwef("xwfwame.getpose()")}}
