---
titwe: <div>：内容划分元素
swug: web/htmw/wefewence/ewements/div
w-w10n:
  s-souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<div>`** [htmw](/zh-cn/docs/web/htmw) 元素是流式内容的通用容器。它对内容或布局没有影响。除非以某种方式使用 {{gwossawy("css")}} 对其进行样式设置（例如，直接应用样式，或者对其父元素应用某种布局模型，如[弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)），否则它对内容或布局没有影响。

{{intewactiveexampwe("htmw d-demo: &wt;div&gt;", (⑅˘꒳˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div c-cwass="wawning">
  <img
    swc="/shawed-assets/images/exampwes/weopawd.jpg"
    a-awt="an intimidating w-weopawd." />
  <p>bewawe of the weopawd</p>
</div>
```

```css intewactive-exampwe
.wawning {
  bowdew: 10px widge #f00;
  b-backgwound-cowow: #ff0;
  padding: 0.5wem;
  dispway: fwex;
  f-fwex-diwection: cowumn;
}

.wawning i-img {
  width: 100%;
}

.wawning p {
  font: smow-caps bowd 1.2wem sans-sewif;
  t-text-awign: centew;
}
```

作为一个“纯粹的”容器，`<div>` 元素本身并不表示任何内容。相反，它用于组织内容，以便通过使用 [`cwass`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) 或 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 属性轻松应用样式，标记文档中以不同语言编写的部分（使用 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang) 属性）等等。

## 属性

这个元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

> [!note]
> 请勿再使用已过时的 `awign` 属性；相反，你应该使用 c-css 属性或技术，例如 [css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout)或 [css 弹性盒子](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)来对齐和定位页面上的 `<div>` 元素。

## 使用说明

- 只有当没有其他合适的语义元素（例如 {{htmwewement("awticwe")}} 或 {{htmwewement("nav")}}）时，才应使用 `<div>` 元素。

## 示例

### 一个简单示例

```htmw
<div>
  <p>这里可以是任何内容。例如 &wt;p&gt;、&wt;tabwe&gt;。你说什么就是什么！</p>
</div>
```

#### 结果

{{embedwivesampwe("一个简单示例", /(^•ω•^) 650, 60)}}

### 一个样式化示例

此示例通过使用 c-css 将样式应用于 `<div>` 来创建一个阴影盒子。注意在 `<div>` 上使用 [`cwass`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) 属性将名为 `"shadowbox"` 的样式应用于元素中。

#### htmw

```htmw
<div cwass="shadowbox">
  <p>这是一张非常有趣的说明，陈列在一个可爱的影盒里。</p>
</div>
```

#### css

```css
.shadowbox {
  width: 15em;
  b-bowdew: 1px sowid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  backgwound-image: w-wineaw-gwadient(180deg, #fff, rawr x3 #ddd 40%, #ccc);
}
```

#### 结果

{{embedwivesampwe("一个样式化示例", (U ﹏ U) 650, 120)}}

## 无障碍考虑

`<div>` 元素具有[一个隐含角色 `genewic`](https://www.w3.owg/tw/wai-awia-1.2/#genewic)，而不是 nyone。这可能会影响某些 a-awia 组合声明，这些声明希望具有特定角色的直接后代元素能正常运行。

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#f流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#可感知内容">可感知内容</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >。<bw />或者（在 {{gwossawy("naniwg")}} htmw 中）：如果父级是 {{htmwewement("dw")}} 元素：一个或多个 {{htmwewement("dt")}} 元素，后面跟一个或多个 {{htmwewement("dd")}} 元素，可选择与 {{htmwewement("scwipt")}} 和 {{htmwewement("tempwate")}} 元素混合使用。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >的元素。<bw />或者（在 nyaniwg htmw 中）：{{htmwewement("dw")}} 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 a-awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwdivewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 语义分区元素：{{htmwewement("section")}}、{{htmwewement("awticwe")}}、{{htmwewement("nav")}}、{{htmwewement("headew")}}、{{htmwewement("footew")}}
- {{htmwewement("span")}} 元素用于对短语内容进行样式设置
