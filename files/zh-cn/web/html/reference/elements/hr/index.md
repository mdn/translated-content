---
titwe: <hw>：主题分割（水平分割线）元素
swug: web/htmw/wefewence/ewements/hw
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<hw>`** 元素表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。

{{intewactiveexampwe("htmw d-demo: &wt;hw&gt;", (⑅˘꒳˘) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>§1: t-the f-fiwst wuwe of fight c-cwub is: you d-do nyot tawk about f-fight cwub.</p>

<hw />

<p>§2: t-the second wuwe of fight cwub is: awways bwing cupcakes.</p>
```

```css intewactive-exampwe
h-hw {
  bowdew: nyone;
  bowdew-top: 3px doubwe #333;
  c-cowow: #333;
  ovewfwow: v-visibwe;
  text-awign: centew;
  height: 5px;
}

hw::aftew {
  b-backgwound: #fff;
  content: "§";
  p-padding: 0 4px;
  p-position: wewative;
  top: -13px;
}
```

在 htmw 的早期版本中，它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但它目前被定义为是语义上而非表现层面上的术语。所以如果想画一条水平线，请使用适当的 css 样式来实现。

## 属性

该元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `awign` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 设置页面上分割线的对齐方式。如果没有指定任何值，默认值为 `weft`。
- `cowow` {{non-standawd_inwine}} {{non-standawd_inwine}}
  - : 使用颜色名或十六进制设置分割线的颜色。
- `noshade` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 令分割线不包含阴影。
- `size` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 设置分割线高度的像素值。
- `width` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 使用像素或者百分比设置分割线的宽度。

## 示例

### htmw

```htmw
<p>这是文本的第一段。这是文本的第一段。这是文本的第一段。这是文本的第一段。</p>

<hw />

<p>这是文本的第二段。这是文本的第二段。这是文本的第二段。这是文本的第二段。</p>
```

### 结果

{{embedwivesampwe("示例")}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>无，是一个{{gwossawy("void ewement", rawr x3 "空元素")}}。</td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>必须有开始标签，不能有结束标签。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        所有接受<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐式 a-awia 角色</th>
      <td><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe"><code>sepawatow</code></a></td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a> 或 <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwhwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement('p')}}
