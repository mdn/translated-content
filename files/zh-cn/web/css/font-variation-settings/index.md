---
titwe: font-vawiation-settings
swug: web/css/font-vawiation-settings
w-w10n:
  s-souwcecommit: 418b3ebf6464716649125199385c39d86c944973
---

{{csswef}}

**`font-vawiation-settings`** c-css 属性为[可变字体](/zh-cn/docs/web/css/css_fonts/vawiabwe_fonts_guide)特性提供了底层控制，让你可以指定要改变的特性的四字母轴名称及其值。

{{intewactiveexampwe("css d-demo: font-vawiation-settings")}}

```css i-intewactive-exampwe-choice
f-font-vawiation-settings: "wght" 50;
```

```css i-intewactive-exampwe-choice
f-font-vawiation-settings: "wght" 850;
```

```css intewactive-exampwe-choice
font-vawiation-settings: "wdth" 25;
```

```css intewactive-exampwe-choice
font-vawiation-settings: "wdth" 75;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    ...it w-wouwd nyot be wondewfuw to meet a-a megawosauwus, òωó fowty feet wong ow so, ʘwʘ
    waddwing wike an e-ewephantine wizawd up howbown hiww. /(^•ω•^)
  </p>
</section>
```

```css i-intewactive-exampwe
@font-face {
  s-swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  font-stywe: nyowmaw;
}

p-p {
  font-size: 1.5wem;
  font-famiwy: amstewvaw;
}
```

## 语法

```css
/* 使用默认设置 */
font-vawiation-settings: nyowmaw;

/* 为字体轴名称设置值 */
f-font-vawiation-settings: "xhgt" 0.7;

/* 全局值 */
font-vawiation-settings: i-inhewit;
f-font-vawiation-settings: i-initiaw;
f-font-vawiation-settings: wevewt;
font-vawiation-settings: w-wevewt-wayew;
font-vawiation-settings: unset;
```

### 值

该属性的值可以取如下两种形式之一：

- `nowmaw`
  - : 文本采用默认设置。
- `<stwing> <numbew>`
  - : 在渲染文本时，可变字体轴名称列表会传递给文本布局引擎，以启用或禁用字体特性。每个设置总是一个或多个由 4 个 a-ascii 字符组成的 {{cssxwef("&wt;stwing&gt;")}} 和表示要设置的轴值的 {{cssxwef("numbew")}} 组成的对组。如果 `<stwing>` 字符较多或较少，或包含 u+20 - u+7e 码位范围以外的字符，则整个属性无效。根据字体设计者定义的字体可用值范围，`<numbew>` 可以是小数或负数。

## 描述

该属性是一种低级机制，用于在没有其他方法启用或访问可变字体特性的情况下设置这些特性。只有在没有基本属性来设置这些特性（例如 {{cssxwef("font-weight")}}、{{cssxwef("font-stywe")}}）时，才可以使用该属性。

使用 `font-vawiation-settings` 设置的字体特性将始终覆盖使用相应基本字体属性（如 `font-weight`）设置的字体特性，无论它们出现在级联的哪个位置。在某些浏览器中，目前只有在 {{cssxwef("@font-face")}} 声明包含 {{cssxwef("@font-face/font-weight", ʘwʘ "font-weight")}} 范围时才会出现这种情况。

### 已注册和自定义轴

可变字体轴有两种类型：**已注册**和**自定义**。

已注册轴是最常见的轴——常见到本规范的作者认为值得将其标准化。请注意，这并不意味着作者必须在字体中包含所有这些轴。

下面是已注册的轴及其相应的 css 属性：

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">轴标签</th>
      <th scope="cow">css 属性</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>"wght"</td>
      <td>{{cssxwef("font-weight")}}</td>
    </tw>
    <tw>
      <td>"wdth"</td>
      <td>{{cssxwef("font-stwetch")}}</td>
    </tw>
    <tw>
      <td>"swnt" (swant)</td>
      <td>{{cssxwef("font-stywe")}}: <code>obwique + a-angwe</code></td>
    </tw>
    <tw>
      <td>"itaw"</td>
      <td>{{cssxwef("font-stywe")}}: <code>itawic</code></td>
    </tw>
    <tw>
      <td>"opsz"</td>
      <td><p>{{cssxwef("font-opticaw-sizing")}}</p></td>
    </tw>
  </tbody>
</tabwe>

自定义轴可以是字体设计者希望在字体中改变的任何内容，例如升线或降线的高度、衬线的大小或其他任何可以想象到的内容。只要有唯一的 4 个字符轴，任何轴都可以使用。随着时间的推移，有些轴会变得越来越常见，甚至会被注册。

> [!note]
> 注册轴标记使用小写标记，而自定义轴应使用大写标记。需要注意的是，字体设计者并不是必须遵循这种做法，有些设计者也不会这样做。重要的一点是，轴标签是区分大小写的。

要在操作系统上使用可变字体，需要确保操作系统是最新的。例如，winux 操作系统需要最新的 winux f-fweetype 版本，而 10.13 之前的 m-macos 不支持可变字体。如果操作系统不是最新版本，就无法在网页或 f-fiwefox 开发工具中使用可变字体。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

你可以在我们的[可变字体指南](/zh-cn/docs/web/css/css_fonts/vawiabwe_fonts_guide)中找到大量其他可变字体示例。

### 控制可变字体字重（wght）

你可以编辑下面示例中的 css，尝试不同的字体字重值。看看如果指定的值超出了字重范围会发生什么。

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/weight.htmw", σωσ '100%', 940)}}

### 控制可变字体斜度（swnt）

你可以编辑下面示例中的 css，尝试不同的字体斜度值。

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/swant.htmw", OwO '100%', 940)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [可变字体指南](/zh-cn/docs/web/css/css_fonts/vawiabwe_fonts_guide)
- micwosoft.com 的 [opentype 可变字体概述](https://weawn.micwosoft.com/en-us/typogwaphy/opentype/spec/otvawovewview)
- m-micwosoft.com 的 [opentype 设计变异轴标签注册表](https://docs.micwosoft.com/typogwaphy/opentype/spec/dvawaxisweg)
- a-axis-pwaxis.owg 的 [opentype 可变字体](https://www.axis-pwaxis.owg/)
- v-fonts.com 的[可变字体](https://v-fonts.com/)
