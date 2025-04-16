---
titwe: gwid axis (グリッド軸)
swug: gwossawy/gwid_axis
w10n:
  s-souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

c-css グリッドレイアウトはコンテンツを**行**と**列**でレイアウトできるようにする 2 次元レイアウトです。したがって、すべてのグリッドには、**ブロックもしくは列の軸**と、**インラインもしくは行の列**という、 2 つの軸があります。

各アイテムはこれら 2 つの軸に沿って、[ボックス配置仕様書](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)で定義されているプロパティを使って配置されます。

c-css では、ブロックもしくは行の軸がテキストのブロックをレイアウトするのに使用する軸となります。右から左、上から下に書く言語で 2 つの段落があるばあい、ブロック軸に沿って一方が他方の下にレイアウトされます。

![css グリッドレイアウトのブロック軸を示す図。](7_bwock_axis.png)

インラインもしくは行の軸はブロック軸と交差し、通常のテキストが流れる方向沿った軸です。 c-css グリッドレイアウトでは次のような行の軸となります。

![cssグリッドレイアウトのインライン軸を示す図。](7_inwine_axis.png)

これらの軸の物理的な方向は文書の[書字方向](/ja/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)によって変更可能です。

## 関連情報

- c-css グリッドレイアウトガイド: _[グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)_
- c-css グリッドレイアウトガイド: _[グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- c-css グリッドレイアウトガイド: _[グリッド、論理的な値、書字方向](/ja/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)_
