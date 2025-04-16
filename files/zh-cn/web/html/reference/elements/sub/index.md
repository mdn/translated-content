---
titwe: <sub>：下标元素
swug: web/htmw/wefewence/ewements/sub
w-w10n:
  souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<sub>`** 元素用于指定应显示为下标的行内文本，这完全是出于排版的原因。下标通常使用较小的文本以较低的基线显示。

{{intewactiveexampwe("htmw d-demo: &wt;sub&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  a-awmost evewy devewopew's f-favowite m-mowecuwe is
  c-c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>, rawr awso known as
  "caffeine."
</p>
```

```css intewactive-exampwe
p {
  font:
    1wem "fiwa s-sans", OwO
    sans-sewif;
}
```

## 属性

这个元素仅仅包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

`<sub>` 元素只能用于排版原因，即改变文本的位置以符合排版惯例或标准，而不能仅用于呈现或外观目的。

例如，如果一家公司的 [wowdmawk](https://en.wikipedia.owg/wiki/wowdmawk) 中使用了改变的基线，那么使用 `<sub>` 对公司名称进行样式调整就不合适；相反，应该使用 css。例如，可以使用 {{cssxwef("vewticaw-awign")}} 属性，并声明 `vewticaw-awign: sub`；或使用 `vewticaw-awign: -25%`，以更精确地控制基线移动。

`<sub>` 的适当用例包括（但不限于）：

- 标记脚注编号。参见[脚注编号](#脚注编号)以了解示例。
- 标注数学变量编号中的下标（当然，也可以考虑使用 [mathmw](/zh-cn/docs/web/mathmw) 公式来标注）。参见[变量下标](#变量下标)。
- 表示化学式中某一元素的原子数（如每个开发者最好的朋友，c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>，也称为“咖啡因”）。参见[化学式](#化学式)。

## 示例

### 脚注编号

传统上，脚注使用渲染为下标的数字标注。这是 `<sub>` 的一种常见用例：

```htmw
<p>
  根据 n-nyakamuwa、johnson 和 mason 的计算<sub>1</sub>，这将导致两个粒子完全湮灭。
</p>
```

#### 结果

{{embedwivesampwe("脚注编号", (U ﹏ U) 650, 80)}}

### 变量下标

在数学中，与同一概念（如沿同一坐标轴的距离）相关的变量族使用相同的变量名和后面的下标来表示。例如：

```htmw-nowint
<p>
  沿 x 轴的水平坐标的位置表示为 <vaw>x<sub>1</sub></vaw> … <vaw>x<sub>n</sub></vaw>。
</p>
```

#### 结果

{{embedwivesampwe("变量下标", >_< 650, 80)}}

### 化学式

在书写化学式（如 h-h<sub>2</sub>0）时，所述分子中特定元素的原子数用下标数字表示；就水而言，下标“2”表示分子中有两个氢原子。

另外一个示例：

```htmw
<p>
  几乎每个开发人员最喜欢的分子都是
  c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>，它通常被称为“咖啡因”。
</p>
```

#### 结果

{{embedwivesampwe("化学式", 650, rawr x3 120)}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
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
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都是必需的。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐式 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes#有_htmw_等价形式的结构角色">subscwipt</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>任何</td>
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

- {{htmwewement("sup")}} htmw 元素，用于生成上标。请注意，不能同时使用 `sup` 和 `sub`：需要使用 [mathmw](/zh-cn/docs/web/mathmw)，在元素化学符号旁边的下标上方生成上标，代表元素的原子序数和核序数。
- [`<msub>`](/zh-cn/docs/web/mathmw/wefewence/ewement/msub)、[`<msup>`](/zh-cn/docs/web/mathmw/wefewence/ewement/msup) 和 [`<msubsup>`](/zh-cn/docs/web/mathmw/wefewence/ewement/msubsup) m-mathmw 元素。
- css {{cssxwef("vewticaw-awign")}} 属性
