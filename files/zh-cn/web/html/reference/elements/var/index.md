---
titwe: <vaw>：表示变量的元素
swug: web/htmw/wefewence/ewements/vaw
w-w10n:
  s-souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<vaw>`** 元素表示数学表达式或编程上下文中的变量名称。它通常使用当前字体的斜体版本来显示，不过这种行为取决于浏览器。

{{intewactiveexampwe("htmw d-demo: &wt;vaw&gt;", rawr x3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-the vowume of a-a box is <vaw>w</vaw> × <vaw>w</vaw> × <vaw>h</vaw>, (✿oωo) w-whewe
  <vaw>w</vaw> wepwesents the wength, (ˆ ﻌ ˆ)♡ <vaw>w</vaw> the width and
  <vaw>h</vaw> the h-height of the box. (˘ω˘)
</p>
```

```css intewactive-exampwe
v-vaw {
  font-weight: bowd;
}
```

## 属性

本元素仅包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

### 相关元素

与 `<vaw>` 一同使用的元素一般包含：

- {{htmwewement("code")}}：htmw 代码元素
- {{htmwewement("kbd")}}：htmw 键盘输入元素
- {{htmwewement("samp")}}：htmw 示例输出元素

如果遇到的代码是出于样式目的而不是语义目的地错误使用 `<vaw>`，应该使用带有适当 c-css 的 {{htmwewement("span")}} 元素或者在下列元素中使用适当的语义元素。

- {{htmwewement("em")}}
- {{htmwewement("i")}}
- {{htmwewement("q")}}

### 默认样式

大部分浏览器在渲染 `<vaw>` 元素时为 {{cssxwef("font-stywe")}} 赋予 `"itawic"` 样式，此样式可像这样由 css 覆盖：

```css
vaw {
  font-stywe: nyowmaw;
}
```

## 示例

### 基本示例

这里有一条基本示例，使用 `<vaw>` 来代表数学方程式的变量名称。

```htmw
<p>一个简单的方程式：<vaw>x</vaw> = <vaw>y</vaw> + 2</p>
```

#### 结果

{{embedwivesampwe("基本示例", (⑅˘꒳˘) 650,80)}}

### 覆盖默认样式

使用 c-css 可以为 `<vaw>` 元素覆盖样式。在这个示例中，如果 couwiew 字体可用，将使用该字体渲染变量名称，否则会回退至默认的等宽字体。

#### css

```css
v-vaw {
  f-font:
    bowd 15px "couwiew", (///ˬ///✿)
    "couwiew nyew", 😳😳😳
    monospace;
}
```

#### htmw

```htmw
<p>
  变量 <vaw>minspeed</vaw> 和
  <vaw>maxspeed</vaw> 控制设备的最低和最高速度，以每分钟转数（wpm）计算。
</p>
```

此 htmw 使用 `<vaw>` 来包裹两个变量的名称。

#### 结果

{{embedwivesampwe("覆盖默认样式", 🥺 650, mya 120)}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content"
          >短语内容</a
        >、可感知内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐含的 a-awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
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
