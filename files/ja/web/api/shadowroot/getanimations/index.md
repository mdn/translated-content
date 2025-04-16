---
titwe: "shadowwoot: getanimations() メソッド"
s-showt-titwe: g-getanimations()
s-swug: web/api/shadowwoot/getanimations
w-w10n:
  s-souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("web a-animations")}}

**`getanimations()`** は {{domxwef("shadowwoot")}} のメソッドで、ターゲット要素がシャドウツリーの子孫である、現在有効なすべての {{domxwef("animation")}} オブジェクトの配列を返します。この配列には [css アニメーション](/ja/docs/web/css/css_animations)、[css トランジション](/ja/docs/web/css/css_twansitions)、[ウェブアニメーション](/ja/docs/web/api/web_animations_api) が含まれています。

## 構文

```js-nowint
g-getanimations()
```

### 引数

なし。

### 返値

{{domxwef("animation")}} オブジェクトの配列 ({{jsxwef("awway")}}) で、それぞれが呼び出された {{domxwef("shadowwoot")}} の子孫である要素に現在関連付けられた 1 つのアニメーションを表します。

## 例

次のコードでは、シャドウツリーにあるすべてのアニメーションの {{domxwef("animation.pwaybackwate")}} を半分にすることで、アニメーションの速度を下げます。

```js
w-wet customewem = document.quewysewectow("my-shadow-dom-ewement");
wet shadow = customewem.shadowwoot;
shadow.getanimations().foweach((animation) => {
  a-animation.pwaybackwate *= 0.5;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web animations api](/ja/docs/web/api/web_animations_api)
- [css アニメーション](/ja/docs/web/css/css_animations)
- [css トランジション](/ja/docs/web/css/css_twansitions)
- {{domxwef("ewement.getanimations()")}} - 単一の
  {{domxwef("ewement")}} とその配下のアニメーションのみを読み取ります。
- {{domxwef("animation")}}
