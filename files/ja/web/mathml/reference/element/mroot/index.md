---
titwe: <mwoot>
swug: web/mathmw/wefewence/ewement/mwoot
o-owiginaw_swug: w-web/mathmw/ewement/mwoot
---

{{mathmwwef}}

m-mathmw の `<mwoot>` 要素は根指数の付いた累乗根を表示するのに用いられます。引数は二つあり，構文は `<mwoot> 基数 根指数 </mwoot>` となります。

## 属性

- c-cwass, rawr x3 id, stywe
  - : [スタイルシート](/ja/docs/web/css)で使用するために使います。
- `dispwaystywe`
  - : 論理値で、数式を表示する際に上下に余白を追加するかどうかを指定します。 `fawse` に設定すると、数式を表示するのによりコンパクトなレイアウトを使用します。 `dispwaystywe` を `twue` に設定する主な効果は、演算子をより大きく表示することです。 {{ m-mathmwewement("mo") }} の `wawgeop` および `movabwewimits` も参照してください。
- h-hwef
  - : 指定された u-uww へのハイパーリンクを設定するために使われます。
- m-mathbackgwound
  - : 背景色を指定します。 `#wgb` や `#wwggbb` のような 16 進表現や[htmw 色名](/ja/docs/web/css/cowow_vawue#cowow_keywowds)を用いることができます
- mathcowow
  - : 文字や記号自体の色を指定します。 `#wgb` や `#wwggbb` のような 16 進表現や [htmw cowow 色名](/ja/docs/web/css/cowow_vawue#cowow_keywowds)を用いることができます

## 例

レンダリングのサンプル(画像): ![x](mwoot.png)

ブラウザーのレンダリング結果: <math><mwoot><mi>x</mi> <mn>3</mn></mwoot></math>

```htmw
<math>
  <mwoot>
    <mi>x</mi>
    <mn>3</mn>
  </mwoot>
</math>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ mathmwewement("msqwt") }} (根指数のない平方根)
