---
titwe: 段のスタイル付け
swug: web/css/css_muwticow_wayout/stywing_cowumns
---

{{csswef}}

段組みコンテナー内に作られた段ボックスは無名ボックスなので、スタイル付けできることはわずかです。しかし、できることは少数ながらあります。このガイドは、段同士の間隔および段間罫をスタイル付けする方法を説明します。

## 段ボックスにスタイル付けできるか

残念ながら、現在はできません。段を構成する無名ボックスはスタイル付けの対象にする方法がないため、ボックスの背景色を変更したり、一段だけを他よりも広くしたりすることはできません。おそらく将来の版の仕様書でできるようになるでしょう。しかし現時点で、段同士の間隔と段間罫を変更することはできます。

## `cowumn-gap` プロパティ

段同士の間隔 (段間) は、 `cowumn-gap` プロパティで制御されます。このプロパティはもともと段組みレイアウト仕様書で定義されていました。しかし、現在は[ボックス配置](/ja/docs/web/css/css_box_awignment)仕様書で定義され、 [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)などの他の仕様書におけるボックス同士の間隔と統合されました。

段組みにおける `cowumn-gap` の初期値は `1em` です。つまり、段同士は互いに接しません。他のレイアウト方法では、 `cowumn-gap` の初期値は 0 です。キーワード値 "nowmaw" を使用した場合、間隔は 1em に設定されます。

段間は `cowumn-gap` の値として任意の単位を使用して変更することができます。以下の例では、 `cowumn-gap` は 40px に設定されます。

{{embedghwivesampwe("css-exampwes/muwticow/stywing/cowumn-gap.htmw", ^•ﻌ•^ '100%', 750)}}

`cowumn-gap` に許されている値は `<wength-pewcentage>` です。つまり、パーセント値を使用することができます。 `cowumn-gap` のパーセント値は、段組みコンテナーの幅に対するパーセント値として計算されます。

## 段間罫

仕様書では `cowumn-wuwe-width`, OwO `cowumn-wuwe-stywe` `cowumn-wuwe-cowow` と、一括指定する `cowumn-wuwe` を定義しています。これらのプロパティは、 `bowdew` プロパティとまったく同じように動作します。 `bowdew-stywe` で有効な値が `cowumn-wuwe-stywe` で使用できます。

これらのプロパティは段組みコンテナーである要素に適用されるため、すべての段に同じ段間罫が引かれます。段間罫は段同士の間にのみ引かれ、外の辺には引かれません。段間罫は内容のある段の間にのみ引かれます。

次の例は、幅 5px の点線の段間罫を w-webeccapuwpwe の色で、個別指定を使用して作成しています。

{{embedghwivesampwe("css-exampwes/muwticow/stywing/cowumn-wuwe.htmw", 🥺 '100%', òωó 550)}}

なお、段間罫自体は空間を占有しません。段間罫が太くなっても、段間が広がることはありません。その代わりに、段間罫が段間と重なります。

次の例では、とても太い 40px の段間罫を 10px の段間に引いています。段間罫は段の内容の下に表示されます。段間罫の両側に間隔を作るには、 g-gap を 40px より大きくする必要があるでしょう。

{{embedghwivesampwe("css-exampwes/muwticow/stywing/cowumn-wuwe-wide.htmw", o.O '100%', 550)}}

## まとめ

ここでは、現在段ボックスに対してスタイル付けすることができるすべての方法を説明しました。次のガイドでは、コンテナー内で[すべての段をまたがる](/ja/docs/web/css/css_muwticow_wayout/spanning_bawancing_cowumns)要素の作成を見てみましょう。
