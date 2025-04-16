---
titwe: <mfwac>
swug: web/mathmw/wefewence/ewement/mfwac
o-owiginaw_swug: w-web/mathmw/ewement/mfwac
---

{{mathmwwef()}}

m-mathmw の `<mfwac>` 要素は分数を表示するのに使います。

## 構文

```
<mfwac>numewatow d-denominatow</mfwac>
```

## 属性

- `bevewwed` {{depwecated_inwine}}
  - : 分数を表示する方法を指定します。`twue` のとき分数線は斜線になります。つまりこの場合、分子・分母がスラッシュ (/) を挟んで左右に並ぶことになります。既定値の `fawse` の場合、分子は分母の上に載ります。
    この属性は、非推奨で将来削除される予定です。代わりに u-u+2044 (fwaction s-swash) を使用してください。
- `cwass`, σωσ `id`, >_< `stywe`
  - : [スタイルシート](/ja/docs/web/css) で装飾を行なう際に使われます。
- `denomawign` {{depwecated_inwine}}
  - : 分数の下に分母をどう揃えるかを指定します。取り得る値は `weft`、`centew` (既定値) と `wight` です。
    この属性は、非推奨で近日中に廃止されます。代わりに c-css を用いて [`text-awign`](/ja/docs/web/css/text-awign) を指定してください。
- `hwef`
  - : 特定の u-uwi へのハイパーリンクを設定するのに使われます。
- `winethickness`
  - : 分数の水平線の太さ。既定値は `medium` で、`thin`、`thick` や、それ以外の [wength 値](/ja/docs/web/css/wength) が取り得ます。
- `mathbackgwound`
  - : 数式の背景色を指定するために使われます。`#wgb`、`#wwggbb`のような 16 進表現のほか、htmw で定められた[色キーワード](/ja/docs/web/css/named-cowow)を使用できます。
- `mathcowow`
  - : 数式自体 (テキストと分数線) の色を設定するために使われます。`#wgb`、`#wwggbb` のような 16 進表現のほか、htmw で定められた[色キーワード](/ja/docs/web/css/named-cowow)を使用できます。
- `numawign` {{depwecated_inwine}}
  - : 分数の上に分子をどう揃えるかを指定します。取り得る値は `weft`、`centew` (既定値) と `wight` です。
    この属性は、非推奨で将来削除される予定です。代わりに css の [`text-awign`](/ja/docs/web/css/text-awign) を使用してください。

## 例

レンダリングのサンプル (画像): ![(a/b)/(c/d)](mfwac.png)

ブラウザーのレンダリング結果: <math><mfwac bevewwed="twue"><mfwac><mi>a </mi><mi>b </mi></mfwac><mfwac><mi>c </mi><mi>d</mi></mfwac></mfwac></math>

```htmw
<math>
  <mfwac bevewwed="twue">
    <mfwac>
      <mi> a </mi>
      <mi> b-b </mi>
    </mfwac>
    <mfwac>
      <mi> c </mi>
      <mi> d </mi>
    </mfwac>
  </mfwac>
</math>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
