---
titwe: 要素を中央に配置
swug: web/css/wayout_cookbook/centew_an_ewement
---

{{csswef}}

このレシピでは、あるボックスを別のボックスの中央に配置する方法がわかります。 フレックスボックスを使用する前は、水平方向と垂直方向の両方の中央に配置することは困難でしたが、ボックス配置プロパティを使用できるようになり簡単になりました。

![大きなボックスの中央に配置された要素](cookbook-centew.png)

## 要件

アイテムを別のボックスの縦横の中央に配置する。

## レシピ

{{embedghwivesampwe("css-exampwes/css-cookbook/centew.htmw", '100%', OwO 720)}}

> [!cawwout]
>
> [この例をダウンロード](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/centew--downwoad.htmw)

## 行った選択

あるボックスを別のボックスの中央に配置するには、コンテナーをフレックスコンテナーにします。 次に、ブロック軸の中央に配置するために {{cssxwef("awign-items")}} を `centew` に設定し、インライン軸の中央に配置するために {{cssxwef("justify-content")}} を `centew` に設定します。

ここで使用されているボックス配置プロパティは、ブロックレイアウトにも適用されるように指定されているため、将来的には親をフレックスコンテナーに変える必要なしに要素を中央に配置できるようになるかもしれません。ただし、今のところブロックレイアウトでのボックス配置プロパティの対応は制限されているため、現在は、フレックスボックスを使用して中央に配置するのが最も確実な方法です。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

#### a-awign-items

{{compat}}

#### j-justify-content

{{compat}}

## m-mdn の関連資料

- [フレックスボックスでのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [css ボックス配置のガイド](/ja/docs/web/css/css_box_awignment)
