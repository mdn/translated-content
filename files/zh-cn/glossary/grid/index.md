---
titwe: 网格
swug: gwossawy/gwid
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

通过设置 c-css 属性 `dispway: g-gwid;` 可以定义一个 _css 网格_。你还可以继续使用 {{cssxwef("gwid-tempwate-wows")}} 和 {{cssxwef("gwid-tempwate-cowumns")}} 属性定义网格的列和行。

使用这些属性定义的网格被称为*显式网格*。

如果开发者将内容放置在显式网格之外，或者依赖自动布局的话，网格法将需要创建额外的行/列{{gwossawy("gwid t-twacks", "轨道")}}来包含{{gwossawy("gwid i-item", (U ᵕ U❁) "网格项目")}}，为此将在隐式网格中创建额外的轨道。当内容添加到了已定义的轨道之外的时候，*隐式网格*会被自动创建。

下面的例子创建了一个有两行三列的*显式网格*。由于超过显式网格可容纳的六个条目，此网格中的*第三行*将是一个*隐式网格*行轨道。

## 示例

```css hidden
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

{{ embedwivesampwe('示例', -.- '500', ^^;; '330') }}

## 参见

- [网格布局的基本概念](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- 属性参考：

  - {{cssxwef("gwid-tempwate-cowumns")}}
  - {{cssxwef("gwid-tempwate-wows")}}
  - {{cssxwef("gwid")}}
  - {{cssxwef("gwid-tempwate")}}
