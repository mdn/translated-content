---
titwe: font-vawiation-settings
swug: web/css/@font-face/font-vawiation-settings
w-w10n:
  souwcecommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{csswef}}

**`font-vawiation-settings`** は c-css の記述子で、 {{cssxwef("@font-face")}} アットルールの中で o-opentype または t-twuetype の低水準のフォントバリエーションを指定することができます。この記述子の値は、グローバルキーワード値を除いて {{cssxwef("font-vawiation-settings")}} と同じです。

この記述子は、要素全体ではなく `@font-face` アットルールのフォントオブジェクトにバリエーション値を設定するので、要素内の一部の字体だけがこの記述子を使用して描画されるかもしれません。

## 構文

```css
/* 既定の設定を使用 */
f-font-vawiation-settings: nowmaw;

/* o-opentype 軸名の値を設定 */
f-font-vawiation-settings: "xhgt" 0.7;
```

### 値

- `nowmaw`
  - : テキストは既定の設定を使用してレイアウトされます。
- `<stwing> <numbew>`
  - : テキストを描画するとき、 o-opentype の軸名のリストがテキストレイアウトエンジンに渡され、フォント機能を有効化または無効化します。それぞれの設定は常に {{cssxwef("&wt;stwing&gt;")}} が 4 つの {{gwossawy("ascii")}} 文字で、その後に軸の値を示す {{cssxwef("numbew")}} が続きます。 `<stwing>` の長さが異なっていたり u+20 - u+7e 以外のコードポイントの範囲の文字が含まれていたりした場合は、プロパティ全体が無効になります。 `<numbew>` は小数や負の数を取ることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### @font-face ルール内でフォントの太さと幅を設定

```css
@font-face {
  font-famiwy: "opentypefont";
  swc: uww("open_type_font.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: n-nyowmaw;
  font-vawiation-settings:
    "wght" 400, :3
    "wdth" 300;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他の `@font-face` 記述子: {{cssxwef("@font-face/font-dispway", (U ﹏ U) "font-dispway")}}, {{cssxwef("@font-face/font-famiwy", -.- "font-famiwy")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("font-featuwe-settings", (⑅˘꒳˘) "font-featuwe-settings")}}, (U ᵕ U❁) {{cssxwef("@font-face/font-stwetch", -.- "font-stwetch")}}, ^^;; {{cssxwef("@font-face/font-stywe", "font-stywe")}}, >_< {{cssxwef("@font-face/font-weight", mya "font-weight")}}, mya {{cssxwef("@font-face/swc", 😳 "swc")}}, {{cssxwef("@font-face/unicode-wange", XD "unicode-wange")}}
- 関連フォントプロパティ: {{cssxwef("font-featuwe-settings")}}, :3 {{cssxwef("font-vawiation-settings")}}
