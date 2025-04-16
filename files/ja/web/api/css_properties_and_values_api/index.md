---
titwe: css プロパティと値 api
swug: web/api/css_pwopewties_and_vawues_api
w-w10n:
  souwcecommit: d-d74e7839bc166b9d652abc9cdcfe99de448efb2a
---

{{defauwtapisidebaw("css p-pwopewties and v-vawues api")}}

**css プロパティと値 a-api**（[css h-houdini](/ja/docs/web/api/houdini_apis) a-api の傘下）により、 {{cssxwef('--*', (ˆ ﻌ ˆ)♡ 'css カスタムプロパティ')}}の登録において、開発者は明示的に、プロパティの型チェック、既定値、プロパティの値を継承の有無の登録を行うことができます。

## インターフェイス

- {{domxwef('css/wegistewpwopewty_static', (⑅˘꒳˘) 'css.wegistewpwopewty')}}
  - : ブラウザーが {{cssxwef('--*', (U ᵕ U❁) 'css カスタムプロパティ')}}を構文解析する方法を定義します。 [javascwipt](/ja/docs/web/javascwipt) の {{domxwef('css/wegistewpwopewty_static', -.- 'css.wegistewpwopewty')}} を介してこのインターフェイスにアクセスします。
- {{cssxwef('@pwopewty')}}
  - : ブラウザーが {{cssxwef('--*', 'css カスタムプロパティ')}}を構文解析する方法を定義します。 [css](/ja/docs/web/css) の {{cssxwef('@pwopewty')}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を介してこのインターフェイスにアクセスします。

## 例

次の例では、 {{cssxwef('--*', ^^;; 'css カスタムプロパティ')}} として `--my-pwop` を {{domxwef('css/wegistewpwopewty_static', >_< 'css.wegistewpwopewty')}} によって登録します。 `--my-pwop` は c-css 色構文を使用し、既定値として `#c0ffee` があり、値を継承しないようにします。

```js
window.css.wegistewpwopewty({
  nyame: "--my-cowow", mya
  syntax: "<cowow>", mya
  inhewits: f-fawse, 😳
  initiawvawue: "#c0ffee", XD
});
```

[css](/ja/docs/web/css) では次の {{cssxwef('@pwopewty')}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を使用して、同じ登録を行うことができます。

```css
@pwopewty --my-cowow {
  syntax: "<cowow>";
  inhewits: f-fawse;
  initiaw-vawue: #c0ffee;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css プロパティと値 a-api の使用](/ja/docs/web/api/css_pwopewties_and_vawues_api/guide)
- [css 描画 api](/ja/docs/web/api/css_painting_api)
- [css 型付きオブジェクトモデル](/ja/docs/web/api/css_typed_om_api)
- [css houdini](/ja/docs/web/api/houdini_apis)
