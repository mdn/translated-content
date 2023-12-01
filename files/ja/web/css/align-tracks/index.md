---
title: align-tracks
slug: Web/CSS/align-tracks
---

{{CSSRef}}

{{SeeCompatTable}}

**`align-tracks`** は CSS のプロパティで、ブロック軸が[組積](/ja/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout)であるグリッドコンテナーの組積軸の配置を設定します。

## 構文

```css
/* キーワード値 */
align-tracks: start;
align-tracks: space-between;
align-tracks: center;
align-tracks: start, center, end;

/* グローバル値 */
align-tracks: inherit;
align-tracks: initial;
align-tracks: revert;
align-tracks: unset;
```

このプロパティは単一の値を取ることができ、その場合はすべてのトラックが同じように整列されます。値のリストが使用された場合、最初の値はグリッド軸の最初のトラックに適用され、2 番目は次のトラックに適用され、以下同様となります。

値がトラックより少ない場合は、最後の値が残りすべてのトラックに使用されます。トラックよりも値が多い場合、追加の値は無視されます。

### 値

- `start`
  - : アイテムは、組積軸の配置コンテナーの先頭の端に向かって、互いに詰められます。
- `end`
  - : アイテムは、組積軸の配置コンテナーの末尾の端に向かって、互いに詰められます。
- `center`
  - : アイテムは、組積軸に沿って配置コンテナーの中心に向かって、互いに詰められます。
- `normal`
  - : `start` として動作します。
- `baseline first baseline`
  `last baseline`
  - : ボックスの先頭または末尾のベースラインセットの配置ベースラインを、ベースライン共有グループのすべてのボックスの共有された先頭または末尾のベースラインセットの対応するベースラインに合わせます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `space-between`
  - : アイテムは配置コンテナー内で組積軸に沿って均等に配置されます。隣接するアイテム同士の間の間隔は同じです。先頭のアイテムは、コンテナーの先頭の端に詰められ、末尾のアイテムは、コンテナーの末尾の端に詰められます。
- `space-around`
  - : アイテムは配置コンテナー内で組積軸に沿って均等に配置されます。隣接するアイテム同士の間の間隔は同じです。先頭のアイテムの前と末尾のアイテムの後の空き空間は、隣接するアイテム同士の空間の半分に等しくなります。
- `space-evenly`
  - : アイテムは組積軸に沿って配置コンテナー内に均等に配置されます。隣接するアイテム同士の間隔、コンテナーの先頭の端と先頭のアイテム、およびコンテナーの末尾の端と末尾のアイテムは、すべて正確に同じです。
- `stretch`
  - : アイテムは組積の軸に沿って伸び、コンテンツボックスを満たします。確定したサイズのアイテムは引き伸ばされません。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

### align-tracks に複数の値がある組積レイアウト

{{EmbedGHLiveSample("css-examples/grid/masonry/align-tracks.html", '100%', 900)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("justify-tracks")}}, {{cssxref("masonry-auto-flow")}}
