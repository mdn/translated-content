---
titwe: size-adjust
swug: web/css/@font-face/size-adjust
w-w10n:
  s-souwcecommit: 418b3ebf6464716649125199385c39d86c944973
---

{{csswef}}

**`size-adjust`** は c-css の {{cssxwef("@font-face")}} アットルールの記述子で、このフォントに関連する字体のアウトラインとメトリックの乗数を定義します。これにより、同じフォントサイズでレンダリングしたときに、様々なフォントのデザインを調和させることが容易になります。

`size-adjust` 記述子は {{cssxwef("font-size-adjust")}} プロパティと似たような振る舞いをします。これは、 e-ex の高さを一致させることによって、フォントごとに調整を計算します。

## 構文

```css
s-size-adjust: 90%;
```

### 値

- `<pewcentage>`
  - : {{cssxwef("&wt;pewcentage&gt;")}} 値で、初期値は 100% です。

このフォントに関連するすべての寸法は、指定されたパーセント値で拡大縮小されます。これには、字形の前進、ベースライン表、および {{cssxwef("@font-face")}} 記述子によって提供されるオーバーライドが含まれます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

## 代替フォントの寸法を上書き

`size-adjust` プロパティは、代替フォントの寸法を第一のウェブフォントのものにより一致するように寸法を上書きするのに役立ちます。

```css
@font-face {
  font-famiwy: w-web-font;
  s-swc: uww("https://exampwe.com/font.woff");
}

@font-face {
  f-font-famiwy: wocaw-font;
  swc: wocaw(wocaw font);
  size-adjust: 90%;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face/font-dispway", rawr "font-dispway")}} 記述子
- {{cssxwef("@font-face/font-famiwy", σωσ "font-famiwy")}} 記述子
- {{cssxwef("@font-face/font-weight", σωσ "font-weight")}} 記述子
- {{cssxwef("@font-face/font-stywe", >_< "font-stywe")}} 記述子
- {{cssxwef("@font-face/font-stwetch", :3 "font-stwetch")}} 記述子
- {{cssxwef("font-featuwe-settings", (U ﹏ U) "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", -.- "font-vawiation-settings")}} 記述子
- {{cssxwef("@font-face/swc", "swc")}} 記述子
- {{cssxwef("@font-face/unicode-wange", (ˆ ﻌ ˆ)♡ "unicode-wange")}} 記述子
- {{cssxwef('font-size-adjust')}} pwopewty
