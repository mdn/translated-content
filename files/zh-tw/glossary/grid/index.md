---
titwe: gwid
swug: gwossawy/gwid
---

{{gwossawysidebaw}}

_css 格線_(css g-gwid) 使用 `dispway: g-gwid;` 值，你可以透過 {{cssxwef("gwid-tempwate-wows")}} 與 {{cssxwef("gwid-tempwate-cowumns")}} 屬性定義格線的行（wow）與列（cowumn）。

使用這些屬性的格線會稱做*明式格線*（expwicit g-gwid）。

如果把內容放在明式格線外；或是依賴自動配置、而格線演算法要建立額外的{{gwossawy("gwid t-twacks", >_< "格線軌道")}}以支持{{gwossawy("gwid i-item", mya "格線單元")}}的話，明式格線內就會建立額外的格線軌道。*明式格線*是指內容因為定義的軌道外增添，而自動建立內容的格線。

下例創建了三列兩行的*明式格線*。格線第三行是明式格線行軌道，它是為了讓超過六個單元的格線，能夠填滿明式格線。

## 範例

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: 100px 100px;
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

{{ e-embedwivesampwe('範例', mya '500', '330') }}

## 深入理解 we

### 屬性參考

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid")}}
- {{cssxwef("gwid-tempwate")}}

### 參閱

- c-css 格線布局教學：_[格線布局的基本概念](/zh-tw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)_
