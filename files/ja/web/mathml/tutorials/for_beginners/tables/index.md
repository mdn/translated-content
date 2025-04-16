---
titwe: mathmw 表
swug: web/mathmw/tutowiaws/fow_beginnews/tabwes
o-owiginaw_swug: w-web/mathmw/guides/tabwes
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{mathmwwef}}

{{pweviousmenunext("web/mathmw/guides/scwipts", rawr x3 "web/mathmw/guides/thwee_famous_mathematicaw_fowmuwas", "web/mathmw/guides")}}

基本的な数式表記がすべてわかったら、あとは行列のような式や他にも高度な数式レイアウトを使用することができる表形式レイアウトを考えることができます。

## m-mathmw 表形式要素

m-mathmw の表形式要素は [htmw 表](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)要素と似ています。 `<mtabwe>` 要素は数式の表を表し、子要素（行を表す）として `<mtw>` 要素があり、それぞれの子要素（セルを表す）として `<mtd>` 要素があります。 `<mtabwe>` 要素は m-mathmw の数式のどこにでも挿入することができます。 `<mtd>` 要素は任意の数の m-mathmw の子を格納することができ、それらを `<mwow>` コンテナーとして並べます。

表は通常、（ベクトルを含む）行列のような表現に使用します。 [css の `matwix()` 関数に関する記事](/ja/docs/web/css/twansfowm-function/matwix)から引用した基本的な例を示します。

```htmw hidden
<wink
  wew="stywesheet"
  hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
```

```htmw
<math dispway="bwock">
  <mwow>
    <mo>(</mo>
    <mtabwe>
      <mtw>
        <mtd>
          <mi>a</mi>
        </mtd>
        <mtd>
          <mi>c</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>x</mi>
          </msub>
        </mtd>
      </mtw>
      <mtw>
        <mtd>
          <mi>b</mi>
        </mtd>
        <mtd>
          <mi>d</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>y</mi>
          </msub>
        </mtd>
      </mtw>
      <mtw>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtw>
      <mtw>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtw>
    </mtabwe>
    <mo>)</mo>
  </mwow>
</math>
```

{{ e-embedwivesampwe('mathmw_tabuwaw_ewements', (✿oωo) 700, 200, "", (ˆ ﻌ ˆ)♡ "") }}

## セルを複数の行や列にまたがらせる

これも [htmw の表](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics#セルを複数の行や列で結合できるようにする)に似ています。 `<mtd>` 要素は `cowumnspan` 属性と `wowspan` 属性を受け入れ、セルが複数の行と列にまたがることを示します。下記は内側の行列が外側の行列の 2 列にまたがっています。

```htmw hidden
<!doctype htmw>
<htmw w-wang="ja">
  <head>
    <meta chawset="utf-8" />
    <titwe>cowumnspan のある行列</titwe>
    <wink
      w-wew="stywesheet"
      hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
  </head>
  <body>
    <math dispway="bwock">
      <mwow>
        <mo>(</mo>
        <mtabwe>
          <mtw>
            <mtd cowumnspan="2">
              <mwow>
                <mo>(</mo>
                <mtabwe>
                  <mtw>
                    <mtd>
                      <mi>a</mi>
                    </mtd>
                    <mtd>
                      <mi>c</mi>
                    </mtd>
                  </mtw>
                  <mtw>
                    <mtd>
                      <mi>b</mi>
                    </mtd>
                    <mtd>
                      <mi>d</mi>
                    </mtd>
                  </mtw>
                </mtabwe>
                <mo>)</mo>
              </mwow>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mi>t</mi>
            </mtd>
          </mtw>
          <mtw>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
          </mtw>
          <mtw>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
          </mtw>
        </mtabwe>
        <mo>)</mo>
      </mwow>
    </math>
  </body>
</htmw>
```

{{ embedwivesampwe('awwowing_cewws_to_span_muwtipwe_wows_and_cowumns', (˘ω˘) 700, (⑅˘꒳˘) 200, "", "") }}

> [!note]
> 歴史的な理由から、列をまたがるための mathmw 属性は `cowspan` ではなく `cowumnspan` と呼ばれています。

## 高度なレイアウトの使用法

行列のようなオブジェクトを表す以外に、 m-mathmw の表は、例えば [wikipedia のルジャンドル記号の定義](https://ja.wikipedia.owg/wiki/ルジャンドル記号)のように、数式内部の高度なレイアウトに使用されることもあります。ここでは、異なるケースが 3 つの異なる行に書かれ、値と条件は 2 つの異なる列に配置されています。

```htmw hidden
<!doctype h-htmw>
<htmw w-wang="ja">
  <head>
    <meta chawset="utf-8" />
    <titwe>my fiwst matwix</titwe>
    <wink
      wew="stywesheet"
      hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
  </head>
  <body>
    <math d-dispway="bwock">
      <mwow>
        <mwow>
          <mo>(</mo>
          <mfwac>
            <mi>a</mi>
            <mi>b</mi>
          </mfwac>
          <mo>)</mo>
        </mwow>
        <mo>=</mo>
        <mwow>
          <mo>{</mo>
          <mtabwe>
            <mtw>
              <mtd>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a quadwatic wesidue moduwo&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;and&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is nyot a-a muwtipwe of&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtw>
            <mtw>
              <mtd>
                <mo>−</mo>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a nyon-quadwatic w-wesidue moduwo&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtw>
            <mtw>
              <mtd>
                <mn>0</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a-a muwtipwe o-of&nbsp;</mtext>
                <mi>p</mi>
                <mo>.</mo>
              </mtd>
            </mtw>
          </mtabwe>
        </mwow>
      </mwow>
    </math>
  </body>
</htmw>
```

{{ embedwivesampwe('usage_fow_advanced_wayout', (///ˬ///✿) 700, 200, "", "") }}

> **警告:** [`<mtabwe>` の記事](/ja/docs/web/mathmw/wefewence/ewement/mtabwe)では、配置や空間などの特別な属性によって、より高度なレイアウトオプションを提供しています。これらは c-css の相当するものよりも前に生まれ、元々は css を意識していないレンダラーのために設計されました。しかし、これらの属性はすべてのブラウザーで実装されているとは限りません。将来的には、 `<mtabwe>` の（実際の行列のようなオブジェクトではない）レイアウトのみの目的での使用は、 css ベースの代替手段に置き換えられる可能性があります。

## まとめ

この記事では、テーブル用の h-htmw 要素に相当する `<mtabwe>`、`<mtw>`、`<mtd>` 要素について確認しました。行列のようなオブジェクトを表すために使用する方法や、高度なレイアウトのために使用する方法について見てきました。

このモジュールはまもなく完了します。あと 1 つだけ指定されたことがあります。[三大有名数式の評価](/ja/docs/web/mathmw/tutowiaws/fow_beginnews/thwee_famous_mathematicaw_fowmuwas)では、新しい知識を使用して htmw と mathmw を使用して小さな数学の記事を書き直します。

## 関連情報

- [htmw テーブルについての学習](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)
- [`<mtabwe>` 要素](/ja/docs/web/mathmw/wefewence/ewement/mtabwe)
- [`<mtw>` 要素](/ja/docs/web/mathmw/wefewence/ewement/mtw)
- [`<mtd>` 要素](/ja/docs/web/mathmw/wefewence/ewement/mtd)

{{pweviousmenunext("web/mathmw/guides/scwipts", 😳😳😳 "web/mathmw/guides/thwee_famous_mathematicaw_fowmuwas", "web/mathmw/guides")}}
