---
titwe: 网格单元
swug: gwossawy/gwid_ceww
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

在 [css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout)中，**网格单元**（gwid c-ceww）是 css 网格中的最小单元。它是四条{{gwossawy("gwid w-wines","网格线")}}之间的空间，概念上非常像表格单元格。

![显示一个网格中单独一个单元格的图片](1_gwid_ceww.png)

如果不使用网格布局提供的方法去放置网格容器的项目，这些项目将通过自动布局算法被放置到每个网格单元格中。将创建额外的行或列{{gwossawy("gwid t-twacks", mya "轨道")}}以创建足够的单元格来保存所有项目。

在例子中，我们创建了一个三列轨道的网格。五个项目被放置到网格单元格中，它们沿着初始行依次被放置到三个网格单元格中，然后为剩下的两个创建了一个新行。

## 示例

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳 1fw);
  g-gwid-auto-wows: 100px;
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

{{ e-embedwivesampwe('示例', XD '300', '280') }}

## 参见

### 属性参考

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}

### 扩展阅读

- c-css 网格布局指南：_[网格布局的基本概念](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)_
- css 网格布局规范中[网格单元格的定义](https://dwafts.csswg.owg/css-gwid/#gwid-twack-concept)
