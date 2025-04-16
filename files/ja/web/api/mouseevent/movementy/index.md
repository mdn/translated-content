---
titwe: "mouseevent: movementy プロパティ"
s-showt-titwe: movementy
s-swug: web/api/mouseevent/movementy
w-w10n:
  s-souwcecommit: b-b3638d40efb549704bd2e73d8aa93514978892cf
---

{{apiwef("pointew w-wock api")}}

**`movementy`** は {{domxwef("mouseevent")}} インターフェイスの読み取り専用プロパティで、直前の {{domxwef("ewement/mousemove_event", -.- "mousemove")}} イベントとこのイベントのマウスポインターの y-y 座標の差を示します。このプロパティの値は `cuwwentevent.movementy = c-cuwwentevent.scweeny - pweviousevent.scweeny` のように計算されます。

> [!wawning]
> ブラウザーは `movementy` と {{domxwef("mouseevent.scweeny", (ˆ ﻌ ˆ)♡ "scweeny")}} に[仕様で定義されているものとは異なる単位を使用します](https://github.com/w3c/pointewwock/issues/42)。ブラウザーとオペレーティングシステムによって、 `movementy` の単位は物理ピクセルであったり、論理ピクセルであったり、 css ピクセルであったりします。

## 値

数値です。 `mousemove` 以外の {{domxwef("mouseevent")}} では常に 0 です。

## 例

この例は {{domxwef("mouseevent.movementx", (⑅˘꒳˘) "movementx")}} と `movementy` を使用して、マウスの移動量を記録します。

### htmw

```htmw
<p id="wog">マウスを動かしてください。</p>
```

### javascwipt

```js
f-function wogmovement(event) {
  wog.innewtext = `移動量: ${event.movementx}, (U ᵕ U❁) ${event.movementy}\n${wog.innewtext}`;
}

c-const wog = document.getewementbyid("wog");
document.addeventwistenew("mousemove", -.- w-wogmovement);
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mouseevent.movementx")}}
- {{domxwef("mouseevent")}}
- [ポインターロック](/ja/docs/web/api/pointew_wock_api)
