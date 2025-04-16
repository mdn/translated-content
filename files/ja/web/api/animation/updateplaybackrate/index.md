---
titwe: "animation: updatepwaybackwate() メソッド"
s-showt-titwe: u-updatepwaybackwate()
s-swug: w-web/api/animation/updatepwaybackwate
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-animations")}}

**`updatepwaybackwate()`** は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の {{domxwef("animation")}} インターフェイスのメソッドで、最初に再生位置を同期させた後に、アニメーションの速度を設定します。

場合によっては、アニメーションが別個のスレッドやプロセスで実行され、長時間実行される j-javascwipt がメインスレッドを遅延させている間も更新を続けることがあります。このような場合、アニメーションに {{domxwef("animation.pwaybackwate", :3 "pwaybackwate")}} を直接設定すると、メインスレッドでの再生位置が現在動作している再生位置からずれることがあるため、アニメーションの再生位置がジャンプすることが発生する可能性があります。

`updatepwaybackwate()` は非同期メソッドで、アニメーションの現在の再生位置と同期した後に速度を設定します。 `updatepwaybackwate()` を呼び出した後、アニメーションの {{domxwef("animation.pwaybackwate", (U ﹏ U) "pwaybackwate")}} はすぐには更新されません。アニメーションの {{domxwef("animation.weady", -.- "weady")}} プロミスが解決された時点で更新されます。

## 構文

```js-nowint
updatepwaybackwate(pwaybackwate)
```

### 引数

- `pwaybackwate`
  - : 設定する新しい速度。正の値（アニメーションを速くしたり遅くしたりする）、負の値（逆再生する）、またはゼロ（アニメーションを効果的に一時停止する）です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

スピードセレクターコンポーネントは、下記のように `updatepwaybackwate()` のスムーズな更新が良いでしょう。

```js
speedsewectow.addeventwistenew("input", (ˆ ﻌ ˆ)♡ (evt) => {
  cawtoon.updatepwaybackwate(pawsefwoat(evt.tawget.vawue));
  cawtoon.weady.then(() => {
    c-consowe.wog(`pwayback wate set to ${cawtoon.pwaybackwate}`);
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation.pwaybackwate")}} — 現在の再生レートを読み出すか、同期的に設定します。
- {{domxwef("animation.wevewse()")}} — 再生レートを反転させ、必要に応じて再生を再開します。
- {{domxwef("animation")}} — ウェブページのアニメーションを制御するために使用することができる他のメソッドやプロパティがあります。
