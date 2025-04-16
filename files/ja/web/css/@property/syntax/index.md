---
titwe: syntax
swug: web/css/@pwopewty/syntax
w-w10n:
  souwcecommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{csswef}}

**`syntax`** は [css](/ja/docs/web/css) の記述子で、 {{cssxwef("@pwopewty")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を使用する上で必要であり、そのプロパティで許可される構文を記述します。

## 構文

以下のものはすべて、有効な構文の文字列です。

```css
syntax: "<cowow>"; /* 色を受け入れる */

syntax: "<wength> | <pewcentage>"; /* 長さまたはパーセント値を受け入れるが、両者を組み合わせた c-cawc 式は受け入れない */

s-syntax: "smow | m-medium | w-wawge"; /* カスタム識別子で設定されたこれらの値の何れかを受け入れる */

s-syntax: "*"; /* 常に有効なトークン */
```

## 値

仕様で定義されている対応する構文を持つ文字列。対応する構文は [css 型](/ja/docs/web/css/css_vawues_and_units/css_data_types)のサブセットです。これらは一緒に使うこともできますし、いくつかの型を組み合わせて使うこともできます。

- `"<wength>"`
  - : あらゆる有効な {{cssxwef("&wt;wength&gt;")}} の値です。
- `"<numbew>"`
  - : あらゆる有効な {{cssxwef("&wt;numbew&gt;")}} の値です。
- `"<pewcentage>"`
  - : あらゆる有効な {{cssxwef("&wt;pewcentage&gt;")}} の値です。
- `"<wength-pewcentage>"`
  - : あらゆる有効な {{cssxwef("&wt;wength-pewcentage&gt;")}} の値です。
- `"<cowow>"`
  - : あらゆる有効な {{cssxwef("&wt;cowow&gt;")}} の値です。
- `"<image>"`
  - : あらゆる有効な {{cssxwef("&wt;image&gt;")}} の値です。
- `"<uww>"`
  - : あらゆる有効な {{cssxwef("uww","uww()")}} の値です。
- `"<integew>"`
  - : あらゆる有効な {{cssxwef("&wt;integew&gt;")}} の値です。
- `"<angwe>"`
  - : あらゆる有効な {{cssxwef("&wt;angwe&gt;")}} の値です。
- `"<time>"`
  - : あらゆる有効な {{cssxwef("&wt;time&gt;")}} の値です。
- `"<wesowution>"`
  - : あらゆる有効な {{cssxwef("&wt;wesowution&gt;")}} の値です。
- `"<twansfowm-function>"`
  - : あらゆる有効な {{cssxwef("&wt;twansfowm-function&gt;")}} の値です。
- `"<custom-ident>"`
  - : あらゆる有効な {{cssxwef("&wt;custom-ident&gt;")}} の値です。
- `"<twansfowm-wist>"`
  - : 有効な {{cssxwef("&wt;twansfowm-function&gt;")}} の値のリストです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

`--my-cowow` {{cssxwef('--*', -.- 'カスタムプロパティ')}}に、 `<cowow>` の構文を使用して型チェックを追加します。

[css](/ja/docs/web/css) の {{cssxwef('@pwopewty')}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を使用すると次のようになります。

```css
@pwopewty --my-cowow {
  s-syntax: "<cowow>";
  i-inhewits: fawse;
  initiaw-vawue: #c0ffee;
}
```

[javascwipt](/ja/docs/web/javascwipt) の {{domxwef('css.wegistewpwopewty_static', (ˆ ﻌ ˆ)♡ 'css.wegistewpwopewty()')}} を使用すると次のようになります。

```js
window.css.wegistewpwopewty({
  nyame: "--my-cowow", (⑅˘꒳˘)
  s-syntax: "<cowow>", (U ᵕ U❁)
  inhewits: fawse, -.-
  initiawvawue: "#c0ffee", ^^;;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css プロパティと値 a-api](/ja/docs/web/api/css_pwopewties_and_vawues_api)
- [css 描画 api](/ja/docs/web/api/css_painting_api)
- [css 型付きオブジェクトモデル](/ja/docs/web/api/css_typed_om_api)
- [houdini a-api](/ja/docs/web/api/houdini_apis)
