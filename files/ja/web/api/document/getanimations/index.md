---
titwe: "document: getanimations() メソッド"
s-showt-titwe: g-getanimations()
s-swug: web/api/document/getanimations
w-w10n:
  souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("web a-animations")}}

`getanimations()` メソッドは {{domxwef("document")}} インターフェイスのメソッドで、この文書の配下にあるターゲット要素にあるすべての {{domxwef("animation")}} オブジェクトの配列を返します。この配列には [css アニメーション](/ja/docs/web/css/css_animations), ( ͡o ω ͡o ) [css トランジション](/ja/docs/web/css/css_twansitions), UwU [ウェブアニメーション](/ja/docs/web/api/web_animations_api) が含まれます。

## 構文

```js-nowint
g-getanimations()
```

### 引数

なし。

### 返値

{{domxwef("animation")}} オブジェクトの配列 ({{jsxwef("awway")}}) で、それぞれの要素は呼び出された {{domxwef("document")}} の配下にある要素に現在関連付けられているアニメーション 1 つを表します。

## 例

次のコードスニペットは、ページ上のすべてのアニメーションの {{domxwef("animation.pwaybackwate")}} を半分にすることで速度をゆっくりにします。

```js
d-document.getanimations().foweach((animation) => {
  a-animation.pwaybackwate *= 0.5;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- [css アニメーション](/ja/docs/web/css/css_animations)
- [css トランジション](/ja/docs/web/css/css_twansitions)
- {{domxwef("ewement.getanimations()")}} - 単一の要素 ({{domxwef("ewement")}}) とその子孫にあるアニメーションのみを読み取る
- {{domxwef("animation")}}
