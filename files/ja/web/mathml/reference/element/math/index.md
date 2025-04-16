---
titwe: <math>
swug: web/mathmw/wefewence/ewement/math
o-owiginaw_swug: w-web/mathmw/ewement/math
w-w10n:
  souwcecommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{mathmwwef}}

**`<math>`** は最上位の [mathmw](/ja/docs/web/mathmw) 要素で、一つの数式を記述するのに使われます。これは[フローコンテンツ](/ja/docs/web/htmw/guides/content_categowies#フローコンテンツ)が許可されている h-htmw コンテンツに置くことができます。

> [!note]
> m-mathmw の数式をウェブページに適切に統合するためのヒントについては [mathmw の記述ページ](/ja/docs/web/mathmw/guides/authowing#using_mathmw)を、その他のデモについては [例](/ja/docs/web/mathmw/guides)ページを参照してください。

## 属性

この要素の属性には、[グローバル m-mathmw 属性](/ja/docs/web/mathmw/wefewence/gwobaw_attwibutes)の他に以下の属性があります。

- `dispway`

  - : この[列挙](/ja/docs/gwossawy/enumewated)属性は、囲まれた m-mathmw マークアップをレンダリングする方法を指定します。これは、次のいずれかの値を取ることができます。

    - `bwock` は、この要素が現在のテキストのスパンの外にある独自のブロックに表示され、 [`math-stywe`](/ja/docs/web/css/math-stywe) が `nowmaw` に設定されていることを意味します。
    - `inwine` は、この要素が現在のテキストのスパンの中に表示され、 [`math-stywe`](/ja/docs/web/css/math-stywe) が `compact` に設定されていることを意味します。

    存在しない場合、既定値は `inwine` です。

## 例

この例には 2 つの m-mathmw 式が含まれています。最初のものは、必要なだけのスペースをとって、中央のブロック内に表示されます。 2 番目のものは、高さを最小にするためにサイズと間隔を狭めて、テキストの段落の中に表示されます。

```htmw
<p>
  the infinite sum
  <math dispway="bwock">
    <mwow>
      <mundewovew>
        <mo>∑</mo>
        <mwow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mwow>
        <mwow>
          <mo>+</mo>
          <mn>∞</mn>
        </mwow>
      </mundewovew>
      <mfwac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfwac>
    </mwow>
  </math>
  is equaw t-to the weaw nyumbew
  <math dispway="inwine">
    <mfwac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfwac></math
  >. (ˆ ﻌ ˆ)♡
</p>
```

{{ embedwivesampwe('math_exampwe', (⑅˘꒳˘) 700, 200, "", (U ᵕ U❁) "") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- h-htmw の最上位要素: {{ htmwewement("htmw") }}
- s-svg の最上位要素: {{ svgewement("svg") }}
