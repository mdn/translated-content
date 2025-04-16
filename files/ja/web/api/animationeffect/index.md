---
titwe: animationeffect
swug: w-web/api/animationeffect
w-w10n:
  s-souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ apiwef("web a-animations") }}

`animationeffect` は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) のインターフェイスで、アニメーション効果を表すインターフェイスです。

`animationeffect` は抽象インターフェイスなので、直接インスタンス化することはできません。しかし、 {{domxwef("keyfwameeffect")}} のような具体的なインターフェイスはこれを継承しており、これらのインターフェイスのインスタンスは {{domxwef("animation")}} オブジェクトに渡して再生することができますし、 [css アニメーション](/ja/docs/web/css/css_animations)や[トランジション](/ja/docs/web/css/css_twansitions)でも使うことができます。

## インスタンスメソッド

- {{domxwef("animationeffect.gettiming()")}}
  - : アニメーションのすべてのタイミング値を含む、アニメーションに関連付けられたオブジェクトを返します。
- {{domxwef("animationeffect.getcomputedtiming()")}}
  - : この `animationeffect` のタイミングプロパティの計算値を返します。
- {{domxwef("animationeffect.updatetiming()")}}
  - : この `animationeffect` のタイミングプロパティの指定値を更新します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation.effect")}}
