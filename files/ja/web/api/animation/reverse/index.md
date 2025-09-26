---
title: "Animation: reverse() メソッド"
short-title: reverse()
slug: Web/API/Animation/reverse
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

**`Animation.reverse()`** は {{ domxref("Animation") }} インターフェイスのメソッドで、再生方向を逆にします。つまり、アニメーションはその先頭で終わります。再生されていないアニメーションで呼び出されると、アニメーション全体が逆再生されます。一時停止しているアニメーションで呼び出されると、アニメーションは逆に続けられます。

## 構文

```js-nolint
reverse()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

[アリスの成長/縮小ゲーム](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)の例では、ケーキをクリックまたはタップすると、ボトルをクリックまたはタップすると、アリスの成長アニメーション (`aliceChange`) が逆再生され、アリスが小さくなります。これは `aliceChange` の {{ domxref("Animation.playbackRate") }} を `-1` に設定することで行います。

```js
const shrinkAlice = () => {
  // play Alice's animation in reverse
  aliceChange.playbackRate = -1;
  aliceChange.play();

  // play the bottle's animation
  drinking.play();
};
```

But it could also have been done by calling `reverse()` on `aliceChange` like so:

```js
const shrinkAlice = () => {
  // play Alice's animation in reverse
  aliceChange.reverse();

  // play the bottle's animation
  drinking.play();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxref("Animation.pause()")}}: アニメーションを停止します。
- {{domxref("Animation.play()")}}: アニメーションを正方向に再生します。
