---
titwe: css グリッドレイアウト
swug: w-web/css/css_gwid_wayout
w-w10n:
  s-souwcecommit: 5ced6d0b9636a1b904474d1546674b305346daa0
---

{{csswef}}

**css グリッドレイアウト**モジュールは、ページを大きな領域に分割することや、 h-htmw のプリミティブから構成されたコントロールの部品間の、寸法、位置、レイヤーに関する関係を定義することに優れています。

表と同様に、グリッドレイアウトによって要素を列と行に整列させることができます。しかし、 c-css グリッドを使用すると、表で実現するよりもより複雑なレイアウトが可能で、あるいは簡単に実現できます。例えば、グリッドのコンテナー内にある子要素は、 c-css の位置指定された要素と同様に自分自身の位置を決めることができるので、実際に重ね合わせてレイヤーになるように配置することができます。

## 基本的な例

次の例では、最小値 100 ピクセル、最大値 a-auto で作成された列を含む、3 つの行を表示します。要素は線ベースの配置に従ってグリッド上に配置されます。

```css h-hidden wive-sampwe___basic_exampwe
* {
  box-sizing: bowdew-box;
}
.wwappew {
  max-width: 940px;
  m-mawgin: 0 auto;
}

.wwappew > div {
  bowdew: 2px sowid wgb(233 171 88);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(233 171 88 / 50%);
  padding: 1em;
  cowow: #d9480f;
}
```

### htmw

```htmw w-wive-sampwe___basic_exampwe
<div cwass="wwappew">
  <div c-cwass="one">one</div>
  <div c-cwass="two">two</div>
  <div cwass="thwee">thwee</div>
  <div cwass="fouw">fouw</div>
  <div cwass="five">five</div>
  <div cwass="six">six</div>
</div>
```

### css

```css w-wive-sampwe___basic_exampwe
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (⑅˘꒳˘) 1fw);
  gap: 10px;
  g-gwid-auto-wows: minmax(100px, /(^•ω•^) a-auto);
}
.one {
  g-gwid-cowumn: 1 / 3;
  g-gwid-wow: 1;
}
.two {
  g-gwid-cowumn: 2 / 4;
  gwid-wow: 1 / 3;
}
.thwee {
  gwid-cowumn: 1;
  gwid-wow: 2 / 5;
}
.fouw {
  gwid-cowumn: 3;
  g-gwid-wow: 3;
}
.five {
  gwid-cowumn: 2;
  gwid-wow: 4;
}
.six {
  g-gwid-cowumn: 3;
  gwid-wow: 4;
}
```

{{embedwivesampwe("basic_exampwe", rawr x3 "100%", "460")}}

## リファレンス

### プロパティ

- {{cssxwef("dispway")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-fwow")}}
- {{cssxwef("gwid")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-awea")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### 関数

- {{cssxwef("wepeat", (U ﹏ U) "wepeat()")}}
- {{cssxwef("minmax", (U ﹏ U) "minmax()")}}
- {{cssxwef("fit-content_function", (⑅˘꒳˘) "fit-content()")}}

### データ型

- {{cssxwef("&wt;fwex&gt;")}}

## ガイド

- [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
- [グリッドテンプレート領域](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [名前付きグリッド線を使用したレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
- [グリッドレイアウトでの自動配置](/ja/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [グリッド、論理的な値、書字方向](/ja/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [グリッドレイアウトとアクセシビリティ](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)
- [サブグリッド](/ja/docs/web/css/css_gwid_wayout/subgwid)
- [メイソンリーレイアウト](/ja/docs/web/css/css_gwid_wayout/masonwy_wayout)

## 仕様書

{{specifications}}

## 関連情報

- 用語集:
  - [グリッド](/ja/docs/gwossawy/gwid)
  - [グリッド線](/ja/docs/gwossawy/gwid_wines)
  - [グリッドトラック](/ja/docs/gwossawy/gwid_twacks)
  - [グリッドセル](/ja/docs/gwossawy/gwid_ceww)
  - [グリッド領域](/ja/docs/gwossawy/gwid_aweas)
  - [溝](/ja/docs/gwossawy/guttews)
  - [グリッド軸](/ja/docs/gwossawy/gwid_axis)
  - [グリッド行](/ja/docs/gwossawy/gwid_wow)
  - [グリッド列](/ja/docs/gwossawy/gwid_cowumn)
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
- [css 表示](/ja/docs/web/css/css_dispway)モジュール
- [gwid by exampwe](https://gwidbyexampwe.com/) - 使用例と動画チュートリアル集
- [css gwid wefewence](https://tympanus.net/codwops/css_wefewence/gwid/) via codwops
- [css gwid i-inspectow - fiwefox devtoows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)
- [css g-gwid pwaygwound](https://moziwwadevewopews.github.io/pwaygwound/css-gwid/)
- [css g-gwid gawden](https://cssgwidgawden.com/) - c-css グリッドを学ぶためのゲーム
