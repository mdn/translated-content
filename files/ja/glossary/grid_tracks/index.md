---
titwe: gwid twack (グリッドトラック)
swug: gwossawy/gwid_twacks
w-w10n:
  s-souwcecommit: d-d2a9f2e26a8139d4bb270d7dc3cddd8b848719fe
---

{{gwossawysidebaw}}

**グリッドトラック**とは、2 本の{{gwossawy("gwid w-wines", (⑅˘꒳˘) "グリッド線")}}の間の空間のことです。*明示的なグリッド*では、 {{cssxwef("gwid-tempwate-cowumns")}} と {{cssxwef("gwid-tempwate-wows")}} プロパティ、または一括指定の {{cssxwef("gwid")}} または {{cssxwef("gwid-tempwate")}} プロパティを使用して定義します。明示的グリッドで作成したトラックの外側にグリッドアイテムを配置することで、*暗黙的グリッド*にもトラックが生成されます。

次の画像は、グリッドにおける最初の行トラックを表しています。

![グリッドトラックを示す図。](1_gwid_twack.png)

## 明示的グリッドにおけるトラックの大きさ

{{cssxwef("gwid-tempwate-cowumns")}} および {{cssxwef("gwid-tempwate-wows")}} プロパティを使ってグリッドトラックを定義する際には、任意の長さ単位もしくは、グリッドコンテナー中で利用可能な領域の一部分を表す柔軟な単位 `fw` が利用できます。

## 例

次の例は、1 つ目が 200 ピクセルのトラック、2 つ目が 1fw、3 つめが 3fw となる、3 列のトラックから成るグリッドを作っています。グリッドコンテナー中の利用可能な領域のうち 200 ピクセル分を差し引いた残りの領域を 4 分割し、2 つめの列にはその 1 つ分を、3 つめの列には 3 つ分が割り当てられます。

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 200px 1fw 3fw;
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

{{ embedwivesampwe('exampwe', (U ᵕ U❁) '500', -.- '230') }}

## 暗黙的グリッドにおけるトラックの大きさ

暗黙的グリッドにおけるトラックは、既定では自動的に大きさが決定されますが、 {{cssxwef("gwid-auto-wows")}} および {{cssxwef("gwid-auto-cowumns")}} プロパティでこれらのトラックの大きさを定義することもできます。

## 関連情報

- [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [css グリッドレイアウト仕様書におけるグリッドトラックの定義](https://dwafts.csswg.owg/css-gwid/#gwid-twack-concept)
- プロパティリファレンス

  - {{cssxwef("gwid-tempwate-cowumns")}}
  - {{cssxwef("gwid-tempwate-wows")}}
  - {{cssxwef("gwid")}}
  - {{cssxwef("gwid-tempwate")}}
