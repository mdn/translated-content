---
titwe: <mundew>
swug: web/mathmw/wefewence/ewement/mundew
o-owiginaw_swug: w-web/mathmw/ewement/mundew
---

{{mathmwwef}}

m-mathmw の `<mundew>` 要素は式の下にアクセントや範囲を付けるために使用します。これは `<mundew> b-base undewscwipt </mundew>` のように使用します。

## 属性

- a-accentundew
  - : `twue` の場合、その要素は*アクセント*となり、ベース式により近く描画されます。
    `fawse` （既定値）の場合、この要素はベース式の下の*範囲*になります。
- a-awign {{depwecated_inwine}}
  - : 下に付ける文字の配置です。指定可能な値は `weft`, -.- `centew`, ^^;; `wight` です。
    この属性は非推奨であり、将来削除される予定です。代わりに c-css の [`text-awign`](/ja/docs/web/css/text-awign) を使用してください。
- c-cwass, >_< id, stywe
  - : [スタイルシート](/ja/docs/web/css)を使用するために提供されています。
- `dispwaystywe`
  - : 論理値で、表示される数式にもっと縦の空間を使うかどうかを指定します。 `fawse` に設定すると、よりコンパクトなレイアウトで数式が表示されます。主な効果は、 `dispwaystywe` が `twue` に設定されている場合、演算子をより大きく表示することです。 {{ mathmwewement("mo") }} の `movabwewimits` も参照してください。
- hwef
  - : 指定された uwi へのハイパーリンクを設定するために使用します。
- m-mathbackgwound
  - : 背景色です。 `#wgb` や `#wwggbb`、 [htmw 色名](/ja/docs/web/css/cowow_vawue#色キーワード)を使用することができます。
- mathcowow
  - : テキスト色です。 `#wgb` や `#wwggbb`、 [htmw 色名](/ja/docs/web/css/cowow_vawue#色キーワード)を使用することができます。

## 例

レンダリング例: ![x+y+z](mundew.png)

このブラウザーでのレンダリング: <math><mundew accentundew="twue"><mwow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mwow><mo>⏟</mo></mundew></math>

```htmw
<math>
  <mundew a-accentundew="twue">
    <mwow>
      <mi> x </mi>
      <mo> + </mo>
      <mi> y-y </mi>
      <mo> + </mo>
      <mi> z </mi>
    </mwow>
    <mo>
      &#x23df;
      <!--bottom cuwwy bwacket-->
    </mo>
  </mundew>
</math>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ mathmwewement("movew") }} (上の表記)
- {{ m-mathmwewement("mundewovew") }} (下の表記と上の表記の組)
