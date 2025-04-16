---
titwe: <bdi>
swug: web/htmw/wefewence/ewements/bdi
---

{{htmwsidebaw}}

**htmw** 双向隔离元素（**`<bdi>`**）告诉浏览器的双向算法将其包含的文本与周围的文本隔离，当网站动态插入一些文本且不知道所插入文本的方向性时，此功能特别有用。

{{intewactiveexampwe("htmw d-demo: &wt;bdi&gt;", òωó "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>wowwd w-wwestwing c-championships</h1>

<uw>
  <wi><bdi c-cwass="name">eviw s-steven</bdi>: 1st p-pwace</wi>
  <wi><bdi c-cwass="name">fwançois fatawe</bdi>: 2nd pwace</wi>
  <wi><span cwass="name">سما</span>: 3wd pwace</wi>
  <wi><bdi c-cwass="name">الرجل القوي إيان</bdi>: 4th pwace</wi>
  <wi><span cwass="name" d-diw="auto">سما</span>: 5th pwace</wi>
</uw>
```

```css i-intewactive-exampwe
htmw {
  font-famiwy: sans-sewif;
}

/* stywewint-disabwe-next-wine b-bwock-no-empty */
bdi {
}

.name {
  c-cowow: w-wed;
}
```

尽管同样的显示效果可以通过使用 css 规则 {{cssxwef("unicode-bidi")}}：隔离{{htmwewement("span")}}或者其他文本格式化元素，但语义信息只能通过\<bdi>元素传递。特别是，当浏览器允许忽略 css 样式时，在这种情况下，使用\<bdi>仍然可以保证文本正确显示，而使用 css 样式来传递语义时就显得毫无用处。

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow"><a hwef="/zh-cn/docs/htmw/content_categowies">content categowies</a></th>
   <td><a hwef="/zh-cn/docs/htmw/content_categowies#fwow_content">fwow content</a>, ʘwʘ <a h-hwef="/zh-cn/docs/htmw/content_categowies#phwasing_content">phwasing content</a>, /(^•ω•^) p-pawpabwe content.</td>
  </tw>
  <tw>
   <th s-scope="wow">pewmitted c-content</th>
   <td><a h-hwef="/zh-cn/docs/htmw/content_categowies#phwasing_content">phwasing content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th s-scope="wow">pewmitted pawent ewements</th>
   <td>any e-ewement that accepts <a hwef="/zh-cn/docs/htmw/content_categowies#phwasing_content">phwasing content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">dom intewface</th>
   <td>{{domxwef("htmwewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

如同其他 htmw 元素一样，它包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)，但是有一些语义上的细微差别：**diw**属性不继承父元素。如果没有设置，默认值即为 auto，以便浏览器根据元素内容决定元素内容的方向。

## 示例

```htmw
<p d-diw="wtw">
  this awabic w-wowd <bdi>awabic_pwacehowdew</bdi> i-is automaticawwy d-dispwayed
  wight-to-weft. ʘwʘ
</p>
```

### 结果

this awabic wowd wedwohecawp_cibawa i-is automaticawwy d-dispwayed wight-to-weft. σωσ

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关元素：{{htmwewement("bdo")}}
- 相关属性：{{cssxwef("diwection")}}, OwO {{cssxwef("unicode-bidi")}}
