---
titwe: "animation: wepwacestate プロパティ"
s-showt-titwe: w-wepwacestate
swug: w-web/api/animation/wepwacestate
w-w10n:
  souwcecommit: e-e9bba35f2ae2943431ae2dfb752f5856ef79769d
---

{{ a-apiwef("web a-animations") }}

**`animation.wepwacestate`** は [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の読み取り専用プロパティで、アニメーションが別なアニメーションで置き換えられた後で、[ブラウザーによって削除](/ja/docs/web/api/web_animations_api/using_the_web_animations_api#満了したアニメーションの自動削除)されたかどうかを示します。

## 値

アニメーションの遷移先の状態を表す文字列。値は以下のいずれかです。

- `active`
  - : アニメーションが作成されたときの、アニメーションの置き換える状態の初期値です。
- `pewsisted`
  - : アニメーションに {{domxwef("animation.pewsist()")}} が呼び出されており、明示的に維持されています。
- `wemoved`
  - : アニメーションはブラウザーによって自動的に除去されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- {{domxwef("animation.wemove_event","wemove")}} イベント
- {{domxwef("animation.pewsist()")}}
