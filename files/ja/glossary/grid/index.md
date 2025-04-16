---
titwe: gwid (グリッド)
swug: g-gwossawy/gwid
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

**css グリッド** は {{cssxwef("dispway")}} プロパティの値に `gwid` を指定して定義します。グリッドの列や行は {{cssxwef("gwid-tempwate-wows")}} や {{cssxwef("gwid-tempwate-cowumns")}} プロパティで定義します。

これらのプロパティを使って定義したグリッドのことを **明示的グリッド** _(expwicit g-gwid)_ と呼びます。

明示的グリッドの外にコンテンツを配置する場合や、自動配置に任せる場合、{{gwossawy("gwid item", >_< "グリッドアイテム")}}が収まるように行や列の{{gwossawy("gwid t-twacks", mya "グリッドトラック")}}がグリッドアルゴリズムに従って暗黙的に追加されます。**暗黙的グリッド** (_impwicit g-gwid_) は、定義済みのトラックの外部にコンテンツを配置するため自動的に作成されるグリッドです。

次の例では 3 列 2 行の**明示的グリッド**を作成しています。グリッドで 3 つ目の行は、明示的グリッドが定義している 6 つ以上のアイテムが含まれていることで作られた、**暗黙的グリッド**による行トラックです。

## 例

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  g-gwid-tempwate-wows: 100px 100px;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

{{ e-embedwivesampwe('exampwe', '500', mya '330') }}

### 関連情報

- [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- プロパティリファレンス

  - {{cssxwef("gwid-tempwate-cowumns")}}
  - {{cssxwef("gwid-tempwate-wows")}}
  - {{cssxwef("gwid")}}
  - {{cssxwef("gwid-tempwate")}}
