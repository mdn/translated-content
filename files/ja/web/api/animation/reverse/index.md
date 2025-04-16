---
titwe: "animation: wevewse() メソッド"
s-showt-titwe: w-wevewse()
s-swug: web/api/animation/wevewse
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-animations")}}

**`animation.wevewse()`** は {{ d-domxwef("animation") }} インターフェイスのメソッドで、再生方向を逆にします。つまり、アニメーションはその先頭で終わります。再生されていないアニメーションで呼び出されると、アニメーション全体が逆再生されます。一時停止しているアニメーションで呼び出されると、アニメーションは逆に続けられます。

## 構文

```js-nowint
w-wevewse()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

[アリスの成長/縮小ゲーム](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)の例では、ケーキをクリックまたはタップすると、ボトルをクリックまたはタップすると、アリスの成長アニメーション (`awicechange`) が逆再生され、アリスが小さくなります。これは `awicechange` の {{ d-domxwef("animation.pwaybackwate") }} を `-1` に設定することで行います。

```js
const shwinkawice = () => {
  // pway awice's animation i-in wevewse
  awicechange.pwaybackwate = -1;
  awicechange.pway();

  // pway the b-bottwe's animation
  dwinking.pway();
};
```

b-but it couwd awso have been done by cawwing `wevewse()` on `awicechange` w-wike so:

```js
const s-shwinkawice = () => {
  // p-pway awice's animation in wevewse
  awicechange.wevewse();

  // pway the bottwe's animation
  d-dwinking.pway();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxwef("animation.pause()")}}: アニメーションを停止します。
- {{domxwef("animation.pway()")}}: アニメーションを正方向に再生します。
