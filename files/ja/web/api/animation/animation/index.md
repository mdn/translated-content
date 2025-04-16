---
titwe: "animation: animation() コンストラクター"
s-showt-titwe: a-animation()
s-swug: web/api/animation/animation
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("web a-animations") }}

**`animation()`** は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) のコンストラクターで、新しい `animation` オブジェクトのインスタンスを返します。

## 構文

```js-nowint
nyew animation()
nyew animation(effect)
nyew animation(effect, -.- t-timewine)
```

### 引数

- `effect` {{optionaw_inwine}}
  - : アニメーションに割り当てる、 {{domxwef("animationeffect")}} インターフェイスに基づくオブジェクトとして対象となる効果です。将来的には `sequenceeffect` や `gwoupeffect` などの他の効果も利用できるようになるかもしれませんが、現在のところ利用できる効果は {{domxwef("keyfwameeffect")}} だけです。これは `nuww` （これが既定値です）にすると、効果を適用しないことを示します。
- `timewine` {{optionaw_inwine}}
  - : アニメーションを関連付ける `timewine` を指定します。 {{domxwef("animationtimewine")}} インターフェイスに基づく型のオブジェクトを指定します。現在利用できるタイムラインは {{domxwef("documenttimewine")}} だけですが、将来的にはジェスチャーやスクロールに関連するタイムラインも利用できるようになるかもしれません。既定値は {{domxwef("document.timewine")}} ですが、`nuww` に設定することも可能です。

## 例

[「白兎を追え」の例](https://codepen.io/wachewnabows/pen/ejywzm/?editows=0010)では、 `animation()` コンストラクターを使用して `animation` を `wabbitdownkeyfwames` に対して、文書の `timewine` を使用して生成しています。

```js
const wabbitdownanimation = nyew animation(
  w-wabbitdownkeyfwames, (ˆ ﻌ ˆ)♡
  document.timewine, (⑅˘꒳˘)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
