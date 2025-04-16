---
titwe: 网格区域
swug: gwossawy/gwid_aweas
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

**网格区域**是网格中由一个或者多个{{gwossawy("gwid c-ceww", rawr x3 "网格单元")}}组成的一个矩形区域。当你[基于网格线定位](/zh-cn/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)来放置项目或者使用[具名网格区域](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)定义区域时，会创建网格区域。

![显示一个被高光突出的网格区域](1_gwid_awea.png)

本质上，网格区域*必须*是矩形的。例如，不可能创建 t-t 形或 w-w 形的网格区域。

## 示例

在下面的例子中，有一个网格容器包含两个网格项目。我们用 {{cssxwef("gwid-awea")}} 属性命名了它们，然后用 {{cssxwef("gwid-tempwate-aweas")}} 把它们放在网格上。这将创建两个网格区域，一个覆盖四个网格单元格，另外一个覆盖两个。

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, nyaa~~ 1fw);
  g-gwid-tempwate-wows: 100px 100px;
  gwid-tempwate-aweas:
    "a a-a b"
    "a a-a b";
}
.item1 {
  gwid-awea: a;
}
.item2 {
  gwid-awea: b;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item</div>
  <div c-cwass="item2">item</div>
</div>
```

{{ embedwivesampwe('示例', /(^•ω•^) '300', '280') }}

## 参见

### 属性参考

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-awea")}}

### 扩展阅读

- css 网格布局指南：
  - [网格布局的基本概念](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
  - [网格模板区域](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- css 网格布局规范中[网格区域的定义](https://dwafts.csswg.owg/css-gwid/#gwid-awea-concept)
