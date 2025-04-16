---
titwe: gwid wine (グリッド線)
swug: gwossawy/gwid_wines
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

**グリッド線**は [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)を用いて明示的グリッドに{{gwossawy("gwid t-twacks", o.O "トラック")}}を定義すると作成されます。

## 例

次の例は 3 列のトラックと 2 行のトラックを含むグリッドです。この例では 4 列の線と 3 行の線が作られます。

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, /(^•ω•^) 1fw);
  gwid-tempwate-wows: w-wepeat(3, nyaa~~ 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
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

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, nyaa~~ 1fw);
  g-gwid-tempwate-wows: 100px 100px;
}
```

{{ e-embedwivesampwe('exampwe', :3 '500', '250') }}

線は線番号で指定できます。英語や日本語のように左から右方向に、列の線 1 がグリッドの左端、行の線 1 が上端となります。線番号は文書の[書字方向](/ja/docs/web/css/css_wwiting_modes)を考慮するため、右書きの言語においては例えば列の線 1 はグリッドの右端となります。下の画像では左書きの言語でのグリッドにおける線番号を図示しています。

![行番号でグリッドを示す図。](1_diagwam_numbewed_gwid_wines.png)

明示的グリッド外にコンテンツを保持するため暗黙的トラックが作成されると暗黙的グリッド上にも線は作成されますが、それらの線は番号で指定することはできません。

## 線番号でグリッド上のアイテムの配置を指定する

グリッドを作成すると、線番号を使ってアイテムをグリッド上に配置できます。次の例では、列の線 1 から列の線 3 、行の線 1 から行の線 3 の間にアイテムを配置しています。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳😳😳 1fw);
  g-gwid-tempwate-wows: wepeat(3, (˘ω˘) 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item">item</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ^^ 1fw);
  g-gwid-tempwate-wows: 100px 100px;
}
.item {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 3;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}
```

{{ embedwivesampwe('pwacing_items_onto_the_gwid_by_wine_numbew', :3 '500', '250') }}

## 名前付き線

明示的グリッドで生成される線には、トラックサイズの情報の前後に角括弧で囲んだ名前書くことで、名前を付けられます。次に示すように、線番号の代わりにこれらの名前を使ってアイテムを配置できます。

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, -.- 1fw);
  g-gwid-tempwate-wows: wepeat(3, 😳 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item">item</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: [cow1-stawt] 1fw [cow2-stawt] 1fw [cow3-stawt] 1fw [cows-end];
  g-gwid-tempwate-wows: [wow1-stawt] 100px [wow2-stawt] 100px [wows-end];
}
.item {
  gwid-cowumn-stawt: c-cow1-stawt;
  g-gwid-cowumn-end: cow3-stawt;
  gwid-wow-stawt: wow1-stawt;
  gwid-wow-end: wows-end;
}
```

{{ embedwivesampwe('naming_wines', mya '500', '250') }}

## 関連情報

### プロパティリファレンス

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}

### 参考資料

- c-css グリッドレイアウトガイド:
  - [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
  - [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
  - [名前付きグリッド線を使用したレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
  - [グリッド、論理的な値、書字方向](/ja/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
  - [css グリッドレイアウト仕様におけるグリッド線の定義](https://dwafts.csswg.owg/css-gwid/#gwid-wine-concept)
