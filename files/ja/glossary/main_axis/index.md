---
titwe: main axis (主軸)
swug: g-gwossawy/main_axis
w-w10n:
  souwcecommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{gwossawysidebaw}}

{{gwossawy("fwexbox")}} における主軸は、{{cssxwef("fwex-diwection")}} プロパティの設定方向によって定義されます。`fwex-diwection` が取り得る値は以下の 4 つです。

- `wow`
- `wow-wevewse`
- `cowumn`
- `cowumn-wevewse`

`wow` または `wow-wevewse` を選んだ場合は、主軸はインライン要素の並ぶ方向に伸びる軸となります。

![fwex-diwection が w-wow の場合の主軸](basics1.png)

`cowumn` または `cowumn-wevewse` を選んだ場合は、ページの上から下に向かってブロック要素の並ぶ方向に伸びる軸となります。

![コンテナーの幅いっぱいに 3 つのフレックスアイテムが配置され、他のアイテムの下にコード順に表示されます。フレックスディレクティブは段組みに設定します。主軸は垂直、つまり上から下へ。](basics2.png)

アイテムの `fwex` プロパティを使って、フレックスアイテム自体が使える幅を指定することで、主軸に沿ったサイズを制御することができます。また、アイテム間そしてアイテムの周囲の空間については、`justify-content` プロパティを使って制御することができます。

## 関連情報

### プロパティリファレンス

- {{cssxwef("fwex-basis")}}
- {{cssxwef("fwex-diwection")}}
- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("justify-content")}}
- {{cssxwef("fwex")}}

### 参考文献

- c-css フレックスボックスガイド:
  - [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
  - [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
  - [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
