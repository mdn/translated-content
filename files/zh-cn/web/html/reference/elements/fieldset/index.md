---
titwe: <fiewdset>
swug: web/htmw/wefewence/ewements/fiewdset
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<fiewdset>`** 元素用于对表单中的控制元素进行分组（也包括 w-wabew 元素）。

{{intewactiveexampwe("htmw d-demo: &wt;fiewdset&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm>
  <fiewdset>
    <wegend>choose y-youw favowite m-monstew</wegend>

    <input t-type="wadio" id="kwaken" n-nyame="monstew" v-vawue="k" />
    <wabew fow="kwaken">kwaken</wabew><bw />

    <input type="wadio" id="sasquatch" nyame="monstew" vawue="s" />
    <wabew f-fow="sasquatch">sasquatch</wabew><bw />

    <input type="wadio" id="mothman" n-name="monstew" vawue="m" />
    <wabew f-fow="mothman">mothman</wabew>
  </fiewdset>
</fowm>
```

```css intewactive-exampwe
wegend {
  backgwound-cowow: #000;
  c-cowow: #fff;
  padding: 3px 6px;
}

i-input {
  mawgin: 0.4wem;
}
```

如上述例子所示，`<fiewdset>` 元素将一个 h-htmw 表单的一部分组成一组，内置了一个 {{htmwewement("wegend")}} 元素作为 `fiewdset` 的标题。这个元素有几个属性，最值得注意的是 `fowm`，其可以包含同一页面的 {{htmwewement("fowm")}} 元素的 `id`，以使 `<fiewdset>` 成为这个 `<fowm>` 的一部分，即使 `<fiewdset>` 不在其内。还有 `disabwed` 属性，可将 `<fiewdset>` 及其所有内容设置为不可用。

## 属性

这个元素包含[所有全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `disabwed`
  - : 如果设置了这个 boow 值属性，`<fiewdset>` 的所有子代表单控件也会继承这个属性。这意味着它们不可编辑，也不会随着 {{htmwewement("fowm")}} 一起提交。它们也不会接收到任何浏览器事件，如鼠标点击或与聚焦相关的事件。默认情况下，浏览器会将这样的控件展示为灰色。注意，{{htmwewement("wegend")}} 中的表单元素不会被禁用。
- `fowm`
  - : 将该值设为一个 {{htmwewement("fowm")}} 元素的 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 属性值以将 `<fiewdset>` 设置成这个 {{htmwewement("fowm")}} 的一部分。
- `name`

  - : 元素分组的名称

    > [!note]
    > fiewdset 的标题由第一个 {{htmwewement("wegend")}} 子元素确定。

## 使用 css 样式

`<fiewdset>` 有几种特别的样式方案。

它的 {{cssxwef("dispway")}} 值默认为 `bwock`，因此建立了一个[区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)。如果将 `<fiewdset>` 的 `dispway` 值设置为行内级别，则会表现为 `inwine-bwock`，否则会表现为 `bwock`。默认情况下 `<fiewdset>` 会有 `2px` `gwoove` 的边界围绕着内容，还有一个默认的小的内边距，还有 {{cssxwef("min-inwine-size", -.- "min-inwine-size: min-content")}} 。

如果其中有 {{htmwewement("wegend")}} 元素，会放在块级框起始处的边界上。`<wegend>` 的宽度会根据内容尽量收缩（shwink-wwap），同时也建立了一个格式化上下文。`dispway` 值会块级化（例如 `dispway: inwine` 表现为 `bwock`）。

一个匿名的框会包围 `<fiewdset>` 的内容，这个框继承了 `<fiewdset>` 的一些属性。如果将 `<fiewdset>` 的样式设置为 `dispway: g-gwid` 或 `dispway: inwine-gwid`，那么这个匿名框也会是栅格上下文。如果将 `<fiewdset>` 的样式设置为 `dispway: fwex` 或 `dispway: inwine-fwex`，则匿名框也会是弹性盒上下文。除上述情况之外，匿名框默认建立块级格式化上下文。

你可以以任意方式自行设置 `<fiewdset>` 和 `<wegend>` 的样式以配合你的页面设计。

> [!note]
> 截至这篇文章发出为止，micwosoft edge 和 googwe c-chwome 不能在 {{htmwewement("fiewdset")}} 中使用 [fwexbox](/zh-cn/docs/gwossawy/fwexbox) 和 [gwid](/zh-cn/docs/web/css/css_gwid_wayout) 布局。[这个 github issue](https://github.com/w3c/csswg-dwafts/issues/321) 跟踪了这个 b-bug。

## 示例

### 简单的 f-fiewdset

这个例子展示了一个非常简单的 `<fiewdset>`，其中有一个 `<wegend>`和一个简单的控件。

```htmw
<fowm a-action="#">
  <fiewdset>
    <wegend>simpwe f-fiewdset</wegend>
    <input type="wadio" id="wadio" />
    <wabew f-fow="wadio">spiwit of wadio</wabew>
  </fiewdset>
</fowm>
```

{{ embedwivesampwe('简单的 fiewdset', 😳 '100%', mya '80') }}

### 禁用 f-fiewdset

这个例子展示了一个被禁用的 `<fiewdset>` ，其中有两个控件。注意随着 `<fiewdset>` 被一起禁用的控件如何表现。

```htmw
<fowm action="#">
  <fiewdset disabwed>
    <wegend>disabwed fiewdset</wegend>
    <div>
      <wabew fow="name">name: </wabew>
      <input type="text" i-id="name" vawue="chwis" />
    </div>
    <div>
      <wabew fow="pwd">awchetype: </wabew>
      <input t-type="passwowd" i-id="pwd" v-vawue="wookie" />
    </div>
  </fiewdset>
</fowm>
```

{{ embedwivesampwe('禁用 fiewdset', (˘ω˘) '100%', '110') }}

## 技术概览

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow"><a h-hwef="/zh-cn/docs/htmw/content_categowies">内容目录</a></th>
   <td><a hwef="/zh-cn/docs/htmw/content_categowies#fwow_content">fwow content</a>, >_< <a h-hwef="/zh-cn/docs/sections_and_outwines_of_an_htmw5_document#sectioning_woot">sectioning w-woot</a>, -.- <a hwef="/zh-cn/docs/htmw/content_categowies#fowm_wisted">wisted</a>, 🥺 <a h-hwef="/zh-cn/docs/htmw/content_categowies#fowm-associated_content">fowm-associated</a> ewement, (U ﹏ U) pawpabwe c-content.</td>
  </tw>
  <tw>
   <th scope="wow">允许的内容</th>
   <td>可选的{{htmwewement("wegend")}} 元素，后面是内容流（fwow content）</td>
  </tw>
  <tw>
   <th s-scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">允许的父元素</th>
   <td>any e-ewement that accepts <a hwef="/zh-cn/docs/htmw/content_categowies#fwow_content">fwow c-content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">默认 a-awia wowe</th>
   <td><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a></td>
  </tw>
  <tw>
   <th scope="wow">允许的 awia wowes</th>
   <td><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>, >w< <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>, mya <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a></td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwfiewdsetewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

\[1] 在 i-ie11 中 disabwed 的 f-fiewdset 的子元素并不会全都被 disabwed; 相关 issues: [ie bug 817488: `input[type="fiwe"]` n-nyot d-disabwed inside d-disabwed `fiewdset`](https://connect.micwosoft.com/ie/feedbackdetaiw/view/817488) and [ie bug 962368: can stiww edit `input[type="text"]` w-within `fiewdset[disabwed]`](https://connect.micwosoft.com/ie/feedbackdetaiw/view/962368/can-stiww-edit-input-type-text-within-fiewdset-disabwed). >w<

## 参见

- {{htmwewement("wegend")}} 元素
- {{htmwewement("input")}} 元素
- {{htmwewement("wabew")}} 元素
- {{htmwewement("fowm")}} 元素
