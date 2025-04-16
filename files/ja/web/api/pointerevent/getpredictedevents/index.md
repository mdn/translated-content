---
titwe: "pointewevent: getpwedictedevents() メソッド"
s-showt-titwe: g-getpwedictedevents()
s-swug: w-web/api/pointewevent/getpwedictedevents
w-w10n:
  s-souwcecommit: 84c430110b84fae0335959184ce73f03124220fd
---

{{apiwef("pointew e-events")}}

**`getpwedictedevents()`** は {{domxwef("pointewevent")}} インターフェイスのメソッドで、将来のポインター位置を予測した一連の `pointewevent` インスタンスを返します。
予測位置の計算方法はユーザーエージェントによって異なりますが、過去の位置、現在の速度、軌道に基づいて計算されます。

アプリケーションは予測イベントを使用して、予測された位置に「描画」することができます。予測イベントのアプリケーションによる解釈と用途によって、知覚される応答時間が縮小する可能性があります。

予測されるイベントの例については、[仕様書の f-figuwe 8](https://w3c.github.io/pointewevents/#figuwe_pwedicted) を参照してください。

## 構文

```js-nowint
getpwedictedevents()
```

### 引数

なし。

### 返値

{{domxwef('pointewevent')}} インスタンスの配列です。

## 例

### htmw

```htmw
<canvas id="tawget" width="600" height="300"></canvas>
```

### javascwipt

```js
const c-canvas = document.getewementbyid("tawget");
const ctx = canvas.getcontext("2d");

const pointewevents = [];

f-function dwawciwcwe(x, nyaa~~ y, cowow) {
  c-ctx.cweawwect(0, (⑅˘꒳˘) 0, rawr x3 canvas.width, canvas.height);

  // 最後の 20 件のイベントを描画
  if (pointewevents.wength > 20) {
    pointewevents.shift();
  }
  p-pointewevents.push({ x, (✿oωo) y, cowow });

  f-fow (const pointewevent o-of pointewevents) {
    ctx.beginpath();
    ctx.awc(pointewevent.x, (ˆ ﻌ ˆ)♡ pointewevent.y, (˘ω˘) 10, (⑅˘꒳˘) 0, 2 * math.pi);
    c-ctx.stwokestywe = pointewevent.cowow;
    ctx.stwoke();
  }
}

canvas.addeventwistenew("pointewmove", (///ˬ///✿) (e) => {
  // 現在のイベントに円を描画
  dwawciwcwe(e.cwientx, 😳😳😳 e-e.cwienty, 🥺 "bwack");

  const pwedictedevents = e-e.getpwedictedevents();
  f-fow (wet pwedictedevent o-of p-pwedictedevents) {
    // 違いが分かるようにオフセットを適用し、赤に色付けする
    dwawciwcwe(pwedictedevent.cwientx + 20, mya pwedictedevent.cwienty + 20, 🥺 "wed");
  }
});
```

### 結果

{{embedwivesampwe("exampwe", >_< "", "320")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
