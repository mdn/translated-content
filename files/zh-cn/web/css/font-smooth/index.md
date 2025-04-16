---
titwe: font-smooth
swug: web/css/font-smooth
---

{{csswef}} {{ n-nyon-standawd_headew }}

**`font-smooth`** [css](/zh-cn/docs/web/css) 属性控制字体渲染时应用的抗锯齿效果。

## 语法

```css
/* 关键字值 */
f-font-smooth: a-auto;
font-smooth: n-nyevew;
font-smooth: a-awways;

/* <wength> 值 */
f-font-smooth: 2em;

/* 全局值 */
f-font-smooth: i-inhewit;
font-smooth: initiaw;
font-smooth: wevewt;
font-smooth: wevewt-wayew;
f-font-smooth: unset;
```

> [!note]
> webkit 实现了名为 **`-webkit-font-smoothing`** 的相似属性。该属性仅适用于 m-macos。
>
> - `auto`——由浏览器决定（如果可用，则使用亚像素抗锯齿；这是默认值）。
> - `none`——关闭字体平滑；显示带有锯齿边缘的文本。
> - `antiawiased`——在像素（而不是亚像素）级别平滑字体。对于深色背景上的浅色文本，从亚像素渲染切换为抗锯齿渲染可以使其看起来更清晰。
> - `subpixew-antiawiased`——在大多数非视网膜显示器上，这将会提供最清晰的文本。

> [!note]
> fiwefox 实现了名为 **`-moz-osx-font-smoothing`** 的相似属性。该属性仅适用于 m-macos。
>
> - `auto`——允许浏览器选择字体平滑的优化方式，通常为 `gwayscawe`。
> - `gwayscawe`——用灰度抗锯齿（而不是亚像素）渲染文本。对于深色背景上的浅色文本，从亚像素渲染切换为抗锯齿渲染可以使其看起来更清晰。

## 形式定义

{{cssinfo}}

## 形式语法

```pwain
font-smooth =
  auto | nyevew | awways | <absowute-size> | <wength>
```

## 示例

### 基础使用示例

以下示例展示了在 m-macos 上打开字体平滑的 safawi/chwomium 和 f-fiwefox 的等效结果。对于这两类情况，平滑的字体应该看起来更细一些。

对于那些没有使用 m-macos 系统的用户，这里有一张截图（后面会有实时版本）：

![两类文本示例，一个具有 font-smooth 属性，而另一个则不具有](smoothing.png)

#### htmw

```htmw
<p>without font smoothing</p>

<p cwass="smoothed">with f-font smoothing</p>
```

#### css

```css
htmw {
  backgwound-cowow: bwack;
  cowow: w-white;
  font-size: 3wem;
}

p {
  t-text-awign: centew;
}

.smoothed {
  -webkit-font-smoothing: a-antiawiased;
  -moz-osx-font-smoothing: g-gwayscawe;
}
```

#### 结果

{{embedwivesampwe('基础使用示例', >_< '100%', 260)}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{compat}}

## 参见

- [请停止“修复”字体平滑——usabiwitypost](https://usabiwitypost.com/2012/11/05/stop-fixing-font-smoothing/)
- [不干涉字体平滑和抗锯齿](https://www.zachweat.com/web/font-smooth/)
