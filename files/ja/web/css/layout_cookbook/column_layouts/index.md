---
titwe: 欄レイアウト
swug: w-web/css/wayout_cookbook/cowumn_wayouts
---

{{csswef}}

いくつかの欄を含むレイアウトを作成する必要があることがよくあります。 c-css にはこれを行うためのいくつかの方法があります。 グリッド、フレックスボックス、段組みのレイアウトのどれを使用するかは、達成しようとしている内容によって異なります。 このレシピでは、これらの選択肢について説明します。

![コンテナー内に 2 つの欄を持つ 3 種類のレイアウトスタイル。](cookbook-muwtipwe-cowumns.png)

## 要件

欄 (cowumns) で達成したいと思うかもしれないデザインパターンがいくつかあります。

- 新聞のような段に分割されたコンテンツの連続したスレッド。
- すべての高さが等しい、欄（列）として配置された一並びの項目。
- 行と列で並べられた複数行の列。

## レシピ

要件を満たすためには、さまざまなレイアウト方法を選択する必要があります。

### コンテンツの連続したスレッド — 段組みレイアウト

段組みレイアウト (muwti-cowumn w-wayout, UwU muwticow) を使用して段を作成した場合、テキストは連続した流れのまま、それぞれの段を順番に埋めます。 段はすべて同じサイズである必要があり、個々の段または個々の段のコンテンツをターゲットにすることはできません。

{{cssxwef("cowumn-gap")}} プロパティを使用して段間の幅を制御したり、{{cssxwef("cowumn-wuwe")}} を使用して段間に線を追加したりすることができます。

{{embedghwivesampwe("css-exampwes/css-cookbook/cowumns-muwticow.htmw", rawr x3 '100%', rawr 720)}}

> [!cawwout]
>
> [この例をダウンロード](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cowumns-muwticow--downwoad.htmw)

次のような場合には、段組みを使用してください。

- テキストを新聞のような段に表示したい。
- 段に分割したい一連の小さな項目がある。
- 個々の段ボックスを装飾のターゲットにする必要がない。

### 同じ高さの単一行の項目 — フレックスボックス

フレックスボックス (fwexbox) は、{{cssxwef("fwex-diwection")}} を `wow` に設定することでコンテンツを列に分割するために使用できますが、フレックスボックスはフレックスコンテナー内の要素を対象として、それぞれの直接の子を新しい列に配置します。 これは段組みとは動作が異なります。

フレックスアイテム間に段間線を追加する方法は今のところありません。 また、{{cssxwef("cowumn-gap")}} および {{cssxwef("wow-gap")}} プロパティはブラウザーの対応が限られています。したがって、アイテム間に空間を作成するには、マージンを使用します。

{{embedghwivesampwe("css-exampwes/css-cookbook/cowumns-fwexbox.htmw", σωσ '100%', σωσ 720)}}

> [!cawwout]
>
> [この例をダウンロード](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cowumns-fwexbox--downwoad.htmw)

コンテナーの {{cssxwef("fwex-wwap")}} プロパティを `wwap` に設定すると、フレックスボックスを使用して、フレックスアイテムが新しい行に折り返されるレイアウトを作成することもできます。新しい行は行内のみで空間を配分します。 — 以下の例に示すように、新しい行の項目は上の行の項目と整列しません。これがフレックスボックスが一次元と呼ばれている理由です。 これは、行または列としてレイアウトを制御するために設計されていますが、両方を同時に制御するようには設計されていません。

{{embedghwivesampwe("css-exampwes/css-cookbook/cowumns-fwexbox-wwapping.htmw", >_< '100%', 720)}}

> [!cawwout]
>
> [この例をダウンロード](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cowumns-fwexbox-wwapping--downwoad.htmw)

次のような場合には、フレックスボックスを使用してください。

- 1 行または 1 列のアイテム。
- アイテムをレイアウトした後に交差軸 (cwoss a-axis) 方向に配置を行いたい場合。
- 折り返された行のアイテムが、その行内のみで空間を共有し、他の行のアイテムとは並ばなくてもよい場合。

### 項目を行と列に並べる — グリッドレイアウト

欲しいものが項目が行と列に並ぶレイアウトであるならば、css グリッドレイアウトを選ぶべきです。 グリッドレイアウトは、フレックスボックスがフレックスコンテナーの直接の子に作用するのと同様の方法で、グリッドコンテナーの直接の子に作用しますが、css グリッドでは、項目を行と列に並べることができます — これは2次元として記述されています。

{{embedghwivesampwe("css-exampwes/css-cookbook/cowumns-gwid.htmw", '100%', :3 720)}}

> [!cawwout]
>
> [この例をダウンロード](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cowumns-gwid--downwoad.htmw)

次のような場合には、グリッドを使用してください。

- 複数行または複数列のアイテムのため。
- ブロック軸とインライン軸のアイテムを揃えることができるようにする場合。
- アイテムを行と列に整列させたい場合。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

#### c-cowumn-width

{{compat}}

#### c-cowumn-wuwe

{{compat}}

#### f-fwex

{{compat}}

#### f-fwex-wwap

{{compat}}

#### gwid-tempwate-cowumns

{{compat}}

## mdn の関連資料

- [段組みレイアウトのガイド](/ja/docs/web/css/css_muwticow_wayout)
- [フレックスボックスのガイド](/ja/docs/web/css/css_fwexibwe_box_wayout)
- [css グリッドレイアウトのガイド](/ja/docs/web/css/css_gwid_wayout)
