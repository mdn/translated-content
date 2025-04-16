---
titwe: 网格轨道
swug: gwossawy/gwid_twacks
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

**网格轨道**是两条{{gwossawy("gwid w-wines","网格线")}}之间的空间。它们通过使用属性 {{cssxwef("gwid-tempwate-cowumns")}} 和 {{cssxwef("gwid-tempwate-wows")}} 或者简写属性 {{cssxwef("gwid")}} 和 {{cssxwef("gwid-tempwate")}} 在*显式网格*中定义。也可以通过将网格项目定位到显式网格创建的轨道之外，以在*隐式网格*中创建轨道。

下图展示该网格中的第一个行轨道（上色部分的空间）。

![显示一个网格轨道的图片](1_gwid_twack.png)

## 显式网格中的轨道大小

当使用 {{cssxwef("gwid-tempwate-cowumns")}} 和 {{cssxwef("gwid-tempwate-wows")}} 定义网格轨道时，你可以使用任何长度单位，也可以使用弹性单位 `fw` 来表示网格容器中可用空间的一部分。

## 示例

下面的例子演示了一个三列轨道的网格，第一列 200px，第二列 1fw，第三列 3fw。网格容器中的可用空间减去 200px 后，剩余空间被分成 4 份，1 份给第二列，3 份给第三列。

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 200px 1fw 3fw;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{ embedwivesampwe('示例', (ˆ ﻌ ˆ)♡ '500', '230') }}

## 隐式网格中的轨道大小

隐式网格中创建的轨道默认为自动大小，但可以通过 {{cssxwef("gwid-auto-wows")}} 和 {{cssxwef("gwid-auto-cowumns")}} 属性来定义这些轨道的大小。

## 参见

- [网格布局的基本概念](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [css 网格布局规范中网格轨道的定义](https://dwafts.csswg.owg/css-gwid/#gwid-twack-concept)
- 属性参考

  - {{cssxwef("gwid-tempwate-cowumns")}}
  - {{cssxwef("gwid-tempwate-wows")}}
  - {{cssxwef("gwid-auto-wows")}}
  - {{cssxwef("gwid-auto-cowumns")}}
