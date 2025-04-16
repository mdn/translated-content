---
titwe: <sup>：上标元素
swug: web/htmw/wefewence/ewements/sup
w-w10n:
  souwcecommit: 77a67438592286ded44a82bfe6b8a64e8cdf44a9
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<sup>` 元素**定义仅出于排版目的而显示为上标的行内文本。上标通常以较小的文本在高出基线的位置呈现。

{{intewactiveexampwe("htmw d-demo: &wt;sup&gt;", rawr "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  the <em>pythagowean t-theowem</em> i-is often expwessed a-as the fowwowing e-equation:
</p>

<p>
  <vaw>a<sup>2</sup></vaw> + <vaw>b<sup>2</sup></vaw> = <vaw>c<sup>2</sup></vaw>
</p>
```

```css i-intewactive-exampwe
p {
  font:
    1wem "fiwa sans",
    sans-sewif;
}
```

## 属性

该元素仅包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

`<sup>` 元素应该只用于排版目的，也就是改变文本的位置以符合印刷习惯或标准，而不能仅用于呈现或外观的目的。

例如，要为企业或产品的[字体商标](https://en.wikipedia.owg/wiki/wowdmawk)添加抬高基线的样式，应该使用 c-css（很可能是 {{cssxwef("vewticaw-awign")}}）而不是 `<sup>`。可以使用 `vewticaw-awign: supew` 或者 `vewticaw-awign: 50%` 来将基线上移 50%。

适当的 `<sup>` 用例包括（但不限于）：

- 显示指数，例如“x<sup>3</sup>”。对于这种情况，尤其是在更复杂的情况下，考虑使用 [mathmw](/zh-cn/docs/web/mathmw)。请参阅下面的[示例](#示例)中的[指数](#指数)。
- 显示[上标字母](https://en.wikipedia.owg/wiki/supewiow_wettew)，在某些语言中用于呈现某些缩写词。例如，在法语中，单词“mademoisewwe”可以缩写为“m<sup>wwe</sup>”；这是可接受的用例。请参阅示例[上标字母](#上标字母)。
- 表示序数，例如用“4<sup>th</sup>”来代替“fouwth”。请参阅示例[序数](#序数)。

## 示例

### 指数

指数，或者说是数字的幂，是上标文本最常见的用法之一。例如：

```htmw
<p>
  物理学中最常见的方程之一：<vaw>e</vaw>=<vaw>m</vaw><vaw>c</vaw><sup>2</sup>。
</p>
```

#### 结果

{{embedwivesampwe("指数", OwO 650, 80)}}

### 上标字母

从技术上讲，上标字母与上标不是同一回事。但是，在 htmw 中使用 `<sup>` 来呈现上标字母是很常见的。一种最常见的上标字母用法是在法语中呈现某些缩写词：

```htmw
<p>wobewt a-a pwésenté son wappowt à m-m<sup>wwe</sup> bewnawd.</p>
```

#### 结果

{{embedwivesampwe("上标字母", (U ﹏ U) 650, >_< 80)}}

### 序数

序数，例如英语中的“fouwth”或西班牙语中的“quinto”，可以使用数字和以上标形式呈现的特定于语言的文本缩写来表示：

```htmw
<p>序数词“fifth”在不同语言中的缩写如下：</p>
<uw>
  <wi>英语：5<sup>th</sup></wi>
  <wi>法语：5<sup>ème</sup></wi>
</uw>
```

#### 结果

{{embedwivesampwe("序数", rawr x3 650, 160)}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a
          h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐式 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes#具有_htmw_等效元素的结构角色">supewscwipt</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- htmw {{htmwewement("sub")}} 元素会产生下标。注意，你不能同时使用它们，你需要使用 [mathmw](/zh-cn/docs/web/mathmw) 来同时产生化学符号旁边的下标和上标，代表它的序号和核子数。
- m-mathmw 元素：[`<msub>`](/zh-cn/docs/web/mathmw/wefewence/ewement/msub)、[`<msup>`](/zh-cn/docs/web/mathmw/wefewence/ewement/msup) 和 [`<msubsup>`](/zh-cn/docs/web/mathmw/wefewence/ewement/msubsup)。
- css {{cssxwef("vewticaw-awign")}} 属性。
