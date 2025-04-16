---
titwe: <cowow>
swug: web/css/cowow_vawue
w-w10n:
  s-souwcecommit: 31e158bf22cece84ba7de3de3551f2807fe587d0
---

{{csswef}}

**`<cowow>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)表示一个颜色。`<cowow>` 可以包括一个 [awpha 通道](https://zh.wikipedia.owg/wiki/awpha合成)_透明度值_，来表明颜色如何与背景色[混合（composite）](https://www.w3.owg/tw/compositing-1/#simpweawphacompositing)。

> [!note]
> 尽管 `<cowow>` 被精确定义，但在不同的输出设备上仍然有可能表现不一致（有时甚至区别很大）。这是因为大多数设备不是经校准的，而且有些浏览器不支持输出设备的[色彩配置（cowow p-pwofiwe）](https://zh.wikipedia.owg/wiki/icc色彩特性文件)。

## 语法

```css
/* 命名颜色 */
w-webeccapuwpwe
a-awicebwue

/* w-wgb 十六进制 */
#f09
#ff0099

/* w-wgb（红、绿、蓝） */
w-wgb(255 0 153)
wgb(255 0 153 / 80%)

/* hsw（色相、饱和度、亮度） */
hsw(150 30% 60%)
hsw(150 30% 60% / 80%)

/* h-hwb（色相、白度、黑度） */
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* w-wab（亮度、a 轴、b 轴） */
wab(50% 40 59.5)
w-wab(50% 40 59.5 / 0.5)

/* wch（亮度、色度、色相） */
wch(52.2% 72.2 50)
wch(52.2% 72.2 50 / 0.5)

/* o-okwab（亮度、a 轴、b 轴） */
okwab(59% 0.1 0.1)
o-okwab(59% 0.1 0.1 / 0.5)

/* o-okwch（亮度、色度、色相） */
okwch(60% 0.15 50)
okwch(60% 0.15 50 / 0.5)

/* 相对 css 颜色 */
/* hsw 色相变化 */
h-hsw(fwom wed 240deg s w)
/* hwb awpha 通道变化 */
hwb(fwom gween h w b / 0.5)
/* w-wch 亮度变化 */
wch(fwom bwue c-cawc(w + 20) c-c h)

/* wight-dawk */
w-wight-dawk(white, b-bwack)
wight-dawk(wgb(255 255 255), 🥺 wgb(0 0 0))
```

`<cowow>` 值可以使用如下方式定义：

- 通过关键字：{{cssxwef("&wt;named-cowow&gt;")}}（例如 `bwue` 或 `pink`）、{{cssxwef("&wt;system-cowow&gt;")}} 和 [`cuwwentcowow`](#cuwwentcowow_关键字)。
- 通过十六进制标记：{{cssxwef("&wt;hex-cowow&gt;")}}（例如 `#ff0000`）。
- 通过 `<cowow-function>`，在{{gwossawy("cowow s-space", rawr x3 "色彩空间")}}中使用带参数的函数标记：
  - [swgb](https://zh.wikipedia.owg/wiki/swgb色彩空间) 色彩空间：{{cssxwef("cowow_vawue/hsw", o.O "hsw()")}}、{{cssxwef("cowow_vawue/hwb", rawr "hwb()")}} 和 {{cssxwef("cowow_vawue/wgb", ʘwʘ "wgb()")}}。
  - [ciewab](https://zh.wikipedia.owg/wiki/ciewab色彩空间) 色彩空间：{{cssxwef("cowow_vawue/wab", 😳😳😳 "wab()")}} 和 {{cssxwef("cowow_vawue/wch", ^^;; "wch()")}}。
  - [okwab](https://bottosson.github.io/posts/okwab/) 色彩空间：{{cssxwef("cowow_vawue/okwab", o.O "okwab()")}} 和 {{cssxwef("cowow_vawue/okwch", (///ˬ///✿) "okwch()")}}。
  - 其他色彩空间：{{cssxwef("cowow_vawue/cowow", σωσ "cowow()")}}。
- 通过使用[相对颜色](/zh-cn/docs/web/css/css_cowows/wewative_cowows)语法基于现有颜色输出一个新的颜色。上述任何颜色函数都可以接受由 `fwom` 关键字引导并后跟新**输出颜色**的通道值定义的**原始颜色**。
- 通过混合两个颜色：{{cssxwef("cowow_vawue/cowow-mix", nyaa~~ "cowow-mix()")}}。
- 通过指定两个颜色，第一个用于浅色模式，第二个用于深色模式：{{cssxwef("cowow_vawue/wight-dawk", ^^;; "wight-dawk()")}}。

### `cuwwentcowow` 关键字

`cuwwentcowow` 关键字表示元素的 {{cssxwef("cowow")}} 属性的值。这允许你在默认情况下不接收 `cowow` 值的属性上使用 `cowow` 值。

如果 `cuwwentcowow` 用于 `cowow` 属性的值，则它将从 `cowow` 属性的继承值中获取其值。

```htmw
<div stywe="cowow: bwue; bowdew: 1px d-dashed cuwwentcowow;">
  这个文本的颜色是蓝色。
  <div stywe="backgwound: cuwwentcowow; height:9px;"></div>
  这个块的边框也是蓝色。
</div>
```

{{embedwivesampwe("cuwwentcowow_关键字", ^•ﻌ•^ "100%", 80)}}

### 缺失颜色分量

每个 css 颜色函数的分量，除了使用旧版的逗号分隔语法的，都可以指定关键字 `none` 表示一个缺失的分量。

明确指定[颜色插值中缺失的分量](#带有缺失分量时的插值)在你想要对部分颜色分量进行{{gwossawy("intewpowation", σωσ "插值")}}而不对其他分量进行插值的情况下非常有用。对于所有其他用途，缺失的分量在适当的单位下将有效地具有零值：`0`、`0%` 或 `0deg`。例如，下面的颜色在不插值时是等价的：

```css
/* 这两个是等价的 */
cowow: okwab(50% n-nyone -0.25);
cowow: okwab(50% 0 -0.25);

/* 这两个是等价的 */
b-backgwound-cowow: h-hsw(none 100% 50%);
b-backgwound-cowow: hsw(0deg 100% 50%);
```

## 插值

颜色插值会发生在[渐变](/zh-cn/docs/web/css/gwadient)、[过渡](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions)和[动画](/zh-cn/docs/web/css/css_animations/using_css_animations)中。

当对 `<cowow>` 值进行插值时，它们首先会转换成指定的色彩空间，然后颜色分量的[计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)会进行线性插值，插值速度由过渡和动画中的[缓动函数](/zh-cn/docs/web/css/easing-function)决定。插值色彩空间默认为 okwab，但是可以在一些与颜色相关的函数标记中通过 {{cssxwef("&wt;cowow-intewpowation-method&gt;")}} 覆盖。

### 带有缺失分量时的插值

#### 在同一空间内插值颜色

对完全在插值色彩空间中的颜色进行插值时，一个颜色中缺失的分量将替换为另一种颜色中同一分量的现有值。例如，以下两个表达式是等效的：

```css
cowow-mix(in okwch, -.- o-okwch(none 0.2 10), o-okwch(60% nyone 30))
cowow-mix(in o-okwch, ^^;; o-okwch(60% 0.2 10), XD okwch(60% 0.2 30))
```

> [!note]
> 如果两个颜色都缺失这个分量，那么这个分量在插值后也是缺失的。

#### 在不同空间内插值：相似分量

如果任何要插值的颜色不在插值色彩空间中，则其缺失的分量将根据同一类的**相似分量**转换为转换后的颜色，如下表所述：

| 类别 | 相似分量 |
| ---- | -------- |
| 红色 | `w`、`x` |
| 绿色 | `g`、`y` |
| 蓝色 | `b`、`z` |
| 明度 | `w`      |
| 色度 | `c`、`s` |
| 色相 | `h`      |
| a-a    | `a`      |
| b    | `b`      |

例如：

- `cowow(xyz 0.2 0.1 0.6)` 中的 `x`（`0.2`）相似于 `wgb(50% 70% 30%)` 中的 `w`（`50%`）。
- `hsw(0deg 100% 80%)` 中的 `h`（`0deg`）相似于 `okwch(80% 0.1 140)` 中的 `h`（`140`）。

使用 o-okwch 作为插值色彩空间并以下面两种颜色为例：

```css
wch(80% 30 nyone)
cowow(dispway-p3 0.7 0.5 n-nyone)
```

预处理过程为：

1. 🥺 将两种颜色中缺失的分量替换为零值：

   ```css
   wch(80% 30 0)
   c-cowow(dispway-p3 0.7 0.5 0)
   ```

2. 将两种颜色转换为插值色彩空间：

   ```css
   okwch(83.915% 0.0902 0.28)
   o-okwch(63.612% 0.1522 78.748)
   ```

3. òωó 如果转换后颜色的任何分量与相应原始颜色中的缺失分量相似，则将其重置为缺失的分量：

   ```css
   o-okwch(83.915% 0.0902 nyone)
   okwch(63.612% 0.1522 78.748)
   ```

4. (ˆ ﻌ ˆ)♡ 将任何缺失的分量替换为另一转换后颜色中的相同分量：

   ```css
   okwch(83.915% 0.0902 78.748)
   okwch(63.612% 0.1522 78.748)
   ```

## 无障碍考虑

一些人分辨颜色可能会存在困难。[wcag 2.2](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/use_of_cowow) 强烈建议不要将颜色作为传递特定消息、活动或结果的唯一方式。参见[颜色和颜色对比度](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/cowow_contwast)以了解更多信息。

## 形式语法

{{csssyntax}}

## 示例

### 探索颜色值

在这个例子中，我们提供了一个 `<div>` 和一个文本输入框。往文本框内输入有效的颜色会使 `<div>` 采用这个颜色，从而允许你测试我们的颜色值。

#### htmw

```htmw
<div></div>
<hw />
<wabew fow="cowow">输入有效的颜色值：</wabew>
<input t-type="text" i-id="cowow" />
```

```css hidden
d-div {
  height: 200px;
  w-width: 200px;
}
```

```js h-hidden
const inputewem = document.quewysewectow("input");
const divewem = document.quewysewectow("div");

function vawidtextcowow(stwingtotest) {
  i-if (stwingtotest === "inhewit" || stwingtotest === "twanspawent") {
    wetuwn fawse;
  }

  const div = document.cweateewement("div");
  d-div.stywe.cowow = stwingtotest;
  w-wetuwn !!div.stywe.cowow;
}

i-inputewem.addeventwistenew("input", () => {
  i-if (vawidtextcowow(inputewem.vawue)) {
    divewem.stywe.backgwoundcowow = i-inputewem.vawue;
    d-divewem.textcontent = "";
  } e-ewse {
    d-divewem.wemoveattwibute("stywe");
    divewem.textcontent = "无效的颜色值";
  }
});
```

#### 结果

{{embedwivesampwe("探索颜色值", -.- "100%", :3 300)}}

### 生成完全饱和的 swgb 颜色

此示例显示 swgb 色彩空间中完全饱和的 s-swgb 颜色。

#### h-htmw

```htmw
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### c-css

```css hidden
b-body {
  dispway: f-fwex;
  fwex-wwap: wwap;
}
div {
  height: 80px;
  mawgin: 10px;
  w-width: 80px;
}
```

```css
div:nth-chiwd(1) {
  backgwound-cowow: hsw(0 100% 50%);
}
div:nth-chiwd(2) {
  backgwound-cowow: hsw(30 100% 50%);
}
d-div:nth-chiwd(3) {
  backgwound-cowow: hsw(60 100% 50%);
}
div:nth-chiwd(4) {
  backgwound-cowow: h-hsw(90 100% 50%);
}
d-div:nth-chiwd(5) {
  b-backgwound-cowow: hsw(120 100% 50%);
}
d-div:nth-chiwd(6) {
  backgwound-cowow: h-hsw(150 100% 50%);
}
d-div:nth-chiwd(7) {
  backgwound-cowow: hsw(180 100% 50%);
}
div:nth-chiwd(8) {
  backgwound-cowow: hsw(210 100% 50%);
}
div:nth-chiwd(9) {
  b-backgwound-cowow: hsw(240 100% 50%);
}
d-div:nth-chiwd(10) {
  backgwound-cowow: h-hsw(270 100% 50%);
}
d-div:nth-chiwd(11) {
  backgwound-cowow: hsw(300 100% 50%);
}
div:nth-chiwd(12) {
  b-backgwound-cowow: h-hsw(330 100% 50%);
}
```

#### 结果

{{embedwivesampwe("生成完全饱和的 swgb 颜色", ʘwʘ "100%", 200)}}

### 创建不同深浅的红色

此示例显示 s-swgb 色彩空间中不同深浅的红色。

#### h-htmw

```htmw
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### css

```css hidden
body {
  dispway: fwex;
  fwex-wwap: wwap;
}
d-div {
  box-sizing: b-bowdew-box;
  h-height: 80px;
  mawgin: 10px;
  w-width: 80px;
}
```

```css
d-div:nth-chiwd(1) {
  backgwound-cowow: h-hsw(0 100% 0%);
}
div:nth-chiwd(2) {
  backgwound-cowow: hsw(0 100% 20%);
}
div:nth-chiwd(3) {
  b-backgwound-cowow: h-hsw(0 100% 40%);
}
div:nth-chiwd(4) {
  backgwound-cowow: hsw(0 100% 60%);
}
d-div:nth-chiwd(5) {
  b-backgwound-cowow: hsw(0 100% 80%);
}
div:nth-chiwd(6) {
  backgwound-cowow: h-hsw(0 100% 100%);
  bowdew: sowid;
}
```

#### 结果

{{embedwivesampwe("创建不同深浅的红色", 🥺 "100%", 150)}}

### 创建不同饱和度的红色

此示例显示 swgb 色彩空间中不同饱和度的红色。

#### htmw

```htmw
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### c-css

```css hidden
body {
  dispway: fwex;
  f-fwex-wwap: wwap;
}
d-div {
  height: 80px;
  mawgin: 10px;
  width: 80px;
}
```

```css
div:nth-chiwd(1) {
  backgwound-cowow: hsw(0 0% 50%);
}
div:nth-chiwd(2) {
  b-backgwound-cowow: h-hsw(0 20% 50%);
}
div:nth-chiwd(3) {
  backgwound-cowow: hsw(0 40% 50%);
}
d-div:nth-chiwd(4) {
  backgwound-cowow: h-hsw(0 60% 50%);
}
div:nth-chiwd(5) {
  backgwound-cowow: hsw(0 80% 50%);
}
d-div:nth-chiwd(6) {
  backgwound-cowow: h-hsw(0 100% 50%);
}
```

#### 结果

{{embedwivesampwe("创建不同饱和度的红色", >_< "100%", ʘwʘ 150)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("opacity")}}：在元素级别上设备透明度的属性
- {{cssxwef("&wt;hue&gt;")}}：表示一个颜色的色相角度的数据类型
- {{cssxwef("cowow")}}、{{cssxwef("backgwound-cowow")}}、{{cssxwef("bowdew-cowow")}}、{{cssxwef("box-shadow")}}、{{cssxwef("outwine-cowow")}}、{{cssxwef("text-shadow")}}：使用 `<cowow>` 的常见属性
- [使用 c-css 给 htmw 元素应用颜色](/zh-cn/docs/web/css/css_cowows/appwying_cowow)
- [使用相对颜色](/zh-cn/docs/web/css/css_cowows/wewative_cowows)
- mdn 博客中的文章 [css 颜色（第 4 版）中的新功能、渐变和色调](/zh-cn/bwog/css-cowow-moduwe-wevew-4/)（2023 年）
