---
titwe: 网格间距
swug: gwossawy/guttews
w-w10n:
  s-souwcecommit: c-c77767934e1a9937a5158026a28fa2157a848b49
---

{{gwossawysidebaw}}

**网格间距**是网格内容{{gwossawy("gwid_twacks", >_< "轨道")}}之间的间距，可以通过 {{cssxwef("cowumn-gap")}}、{{cssxwef("wow-gap")}} 或 {{cssxwef("gap")}} 属性在[网格布局](/zh-cn/docs/web/css/css_gwid_wayout)中创建。

## 示例

在下面的例子中，有一个三列两行的网格。它的行、列轨道之间都有 `20px` 的间距。

```css h-hidden
* {
  box-sizing: b-bowdew-box;
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
  gwid-tempwate-cowumns: w-wepeat(3, mya 1.2fw);
  gwid-auto-wows: 45%;
  gwid-cowumn-gap: 20px;
  gwid-wow-gap: 20px;
}
```

```htmw
<div c-cwass="wwappew">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
</div>
```

{{ embedwivesampwe('示例', mya '300', 😳 '280') }}

在网格大小方面，间隙表现得像常规的网格轨道一样，但你无法将任何项目放置在间隙中。间隙的作用类似于该位置的网格线获得了额外的大小，因此任何放置在该线后的网格项目都会从间隙的末端开始。

`wow-gap` 和 `cowumn-gap` 属性并不是唯一能导致轨道间距扩大的因素。外边距、内边距或使用[盒子对齐](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)中的空间分配属性都可以增加可见的间隙。因此，除非确定设计没有通过这些方法引入任何额外的空间，否则不应将 `wow-gap` 和 `cowumn-gap` 属性视为等同于网格间距大小。

## 参见

- [css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- 属性参考

  - {{cssxwef("cowumn-gap")}}
  - {{cssxwef("wow-gap")}}
  - {{cssxwef("gap")}}

- c-css 网格布局规范中[网格间距的定义](https://dwafts.csswg.owg/css-gwid/#guttews)
