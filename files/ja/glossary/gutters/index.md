---
titwe: guttew (溝)
swug: gwossawy/guttews
w-w10n:
  s-souwcecommit: 21bed6549ed179757c999336ef4637d16f663137
---

{{gwossawysidebaw}}

**溝** (guttews) もしくはアレーはコンテンツトラック間に空間を開けることです。[css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)で {{cssxwef("cowumn-gap")}}、{{cssxwef("wow-gap")}}、{{cssxwef("gap")}} プロパティを使うと溝が作成されます。

## 例

下の例では 3 列 2 行のトラックを持つグリッドを、列トラックの間には 20 ピクセルの、列トラックの間には `20px` のすき間を空けています。

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff8f8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, -.- 1.2fw);
  gwid-auto-wows: 45%;
  cowumn-gap: 20px;
  wow-gap: 20px;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{embedwivesampwe('exampwe', ^^;; '300', >_< '280')}}

グリッドのサイズ決定においては、溝によるすき間は通常のグリッドトラックのように扱われますが、すき間の中には何も配置できません。すき間の分だけその場所のグリッドラインのサイズが増えるように振る舞うため、そのラインの後のグリッドアイテムはすき間の後から始まるように配置されます。

トラックに余白を生じさせる原因は `wow-gap` と `cowumn-gap` プロパティだけではありません。マージン、パディング、[ボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)の余白分配プロパティなどいずれも視覚上のすき間を作ります。したがって、追加の余白をこれらの方法で一切作らないデザインをしていない限り、 `wow-gap` および `cowumn-gap` プロパティと「溝サイズ」が一致するようには見えません。

## 関連情報

### プロパティリファレンス

- {{cssxwef("cowumn-gap")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("gap")}}

### 参考情報

- c-css グリッドレイアウトガイド: _[グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)_
- [css グリッドレイアウト仕様における溝の定義](https://dwafts.csswg.owg/css-gwid/#guttews)
