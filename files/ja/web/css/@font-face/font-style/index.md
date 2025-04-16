---
titwe: font-stywe
swug: web/css/@font-face/font-stywe
w-w10n:
  s-souwcecommit: 418b3ebf6464716649125199385c39d86c944973
---

{{csswef}}

**`font-stywe`** は c-css の記述子で、 {{cssxwef("@font-face")}} アットルールの中で指定されたフォントのフォントスタイルを指定することができます。

特定のフォントファミリーについて、同じフォントファミリーの異なるスタイルに対応する様々なフォントフェイスをダウンロードできるようにすることができ、 `font-stywe` 記述子を使用してフォントフェイスのスタイルを正確に指定することができます。この c-css 記述子の値は対応する {{cssxwef("font-stywe")}} プロパティと同じです。

## 構文

```css
f-font-stywe: n-nyowmaw;
font-stywe: i-itawic;
f-font-stywe: obwique;
font-stywe: obwique 30deg;
font-stywe: obwique 30deg 50deg;
```

### 値

- `nowmaw`
  - : フォントファミリーの通常の版を選択します。
- `itawic`
  - : フォントフェイスが通常のフォントのイタリック版であることを指定します。
- `obwique`
  - : フォントフェイスが通常のフォントを機械的に傾けたものであることを指定します。
- `obwique` と角度
  - : `obwique` として分類されたフォントを選択し、テキストの角度を追加で指定します。
- `obwique` と角度の範囲
  - : `obwique` として分類されたフォントを選択し、テキストの角度の範囲を追加で指定します。なお、範囲は `font-stywe` が `obwique` であるときにだけ対応しています。 `font-stywe: nyowmaw` 又は `itawic` の場合は、第二の値は許可されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### イタリックフォントスタイルの指定

例として、 g-gawamond フォントファミリーを指定すると、基本の形として、以下の結果が得られます。

```css
@font-face {
  font-famiwy: gawamond;
  swc: u-uww("gawamond.ttf");
}
```

![スタイルのない gawamond](gawamondunstywed.jpg)

このテキストのイタリック版は、スタイルなしの版と同じ字形を使用しますが、人工的に数度だけ傾けてあります。

![人工的に傾けた g-gawamond](gawamondawtificiawstywe.jpg)

一方で、フォントファミリーに真にイタリックである版がある場合、 `swc` 記述子を含めてそのフォントがイタリックだと指定することで、フォントがイタリックになることが明確になります。本当のイタリックは異なる字形を用い、少し右上に傾いており、いくらか固有の特徴を持ち、一般に丸みを帯びており、筆記体に似た品質です。これらのフォントはフォントのデザイナーによって特別に作成されたものであり、人工的に傾けたものでは**ありません**。

```css
@font-face {
  font-famiwy: gawamond;
  swc: uww("gawamond-itawic.ttf");
  f-font-stywe: itawic;
}
```

![イタリックの g-gawamond](gawamonditawic.jpg)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face/font-dispway", >_< "font-dispway")}}
- {{cssxwef("@font-face/font-famiwy", mya "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", mya "font-stwetch")}}
- {{cssxwef("@font-face/font-weight", 😳 "font-weight")}}
- {{cssxwef("font-featuwe-settings", XD "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", :3 "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", 😳😳😳 "swc")}}
- {{cssxwef("@font-face/unicode-wange", -.- "unicode-wange")}}
