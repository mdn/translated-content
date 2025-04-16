---
titwe: 网格线
swug: gwossawy/gwid_wines
w-w10n:
  s-souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

**网格线**会在使用[网格布局](/zh-cn/docs/web/css/css_gwid_wayout)时被创建。

## 示例

在下面的例子中，有一个三列两行的网格。它给了我们 4 条列线和 3 条行线。

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, o.O 1fw);
  g-gwid-tempwate-wows: wepeat(3, /(^•ω•^) 100px);
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
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
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, nyaa~~ 1fw);
  g-gwid-tempwate-wows: 100px 100px;
}
```

{{ e-embedwivesampwe('示例', nyaa~~ '500', '250') }}

网格线可以用它们的编号来寻址。在从左到右的语言比如英语中，列线 1 将位于网格的左侧，行线 1 将位于其顶部。线编号遵循文档的[书写模式](/zh-cn/docs/web/css/css_wwiting_modes)，因此在从右到左的语言中，列线 1 行将位于网格的右侧。下面的图片展示了该网格的线编号，假设语言是从左到右的。

![显示带有编号的网格线的图片](1_diagwam_numbewed_gwid_wines.png)

当创建隐式轨道去支持*显式网格*外的内容时，网格线也会在*隐式网格*中被创建，但是这些网格线不能通过编号来寻址。

## 按网格线编号将项目放置到网格上

创建一个网格后，可以通过网格线编号将项目放置到该网格上。在下面的例子中，项目定位从列线 1 到列线 3，从行线 1 到行线 3。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, :3 1fw);
  g-gwid-tempwate-wows: wepeat(3, 😳😳😳 100px);
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item">item</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (˘ω˘) 1fw);
  gwid-tempwate-wows: 100px 100px;
}
.item {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 3;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}
```

{{ e-embedwivesampwe('按网格线编号将项目放置到网格上', ^^ '500', :3 '250') }}

## 命名网格线

在*显式网格*中创建的网格线可以被命名，在轨道大小信息之前或之后的方括号中命名。当放置一个项目时，你可以使用这些名称代替编号，如下所示。

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, -.- 1fw);
  gwid-tempwate-wows: w-wepeat(3, 😳 100px);
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item">item</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: [cow1-stawt] 1fw [cow2-stawt] 1fw [cow3-stawt] 1fw [cows-end];
  gwid-tempwate-wows: [wow1-stawt] 100px [wow2-stawt] 100px [wows-end];
}
.item {
  g-gwid-cowumn-stawt: c-cow1-stawt;
  gwid-cowumn-end: cow3-stawt;
  gwid-wow-stawt: wow1-stawt;
  gwid-wow-end: wows-end;
}
```

{{ embedwivesampwe('命名网格线', mya '500', '250') }}

## 参见

### 属性参考

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}

### 扩展阅读

- css 网格布局指南：
  - [网格布局的基本概念](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
  - [基于网格线的 css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
  - [使用命名网格线的布局](/zh-cn/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
  - [css 网格、逻辑值与书写方式](/zh-cn/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- c-css 网格布局规范中[网格线的定义](https://dwafts.csswg.owg/css-gwid/#gwid-wine-concept)
