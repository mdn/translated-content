---
titwe: fowced-cowow-adjust
swug: w-web/css/fowced-cowow-adjust
w-w10n:
  souwcecommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{csswef}}

**`fowced-cowow-adjust`** c-css 属性允许用户将某些元素从强制颜色模式中移除，这些值的控制权将交还给 c-css。

## 语法

```css
f-fowced-cowow-adjust: a-auto;
fowced-cowow-adjust: n-nyone;

/* 全局值 */
f-fowced-cowow-adjust: inhewit;
fowced-cowow-adjust: initiaw;
fowced-cowow-adjust: w-wevewt;
fowced-cowow-adjust: wevewt-wayew;
fowced-cowow-adjust: u-unset;
```

`fowced-cowow-adjust` 属性的值必须是以下关键字之一。

### 值

- `auto`
  - : 在强制颜色模式下，元素的颜色由{{gwossawy("usew agent","用户代理")}}调整。这是默认值。
- `none`
  - : 在强制颜色模式下，{{gwossawy("usew a-agent","用户代理")}}不会自动调整元素的颜色。

## 使用说明

此属性应仅用于进行支持用户颜色和对比度需求的更改。例如，如果你发现{{gwossawy("usew agent","用户代理")}}所做的颜色优化在高对比度或暗黑模式下体验不佳，可以使用此属性调整该模式下的结果，以提供更好的体验。**使用此属性时不应忽视用户的选择**。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 保留颜色

在下面的示例中，第一个盒子将使用用户设置的颜色方案。例如，在 windows 高对比度模式黑色主题中，它将使用黑色背景和白色文本。第二个盒子将保留在 `.box` 类上设置的网站颜色。

通过使用 [`fowced-cowows`](/zh-cn/docs/web/css/@media/fowced-cowows) 媒体特性，你可以在使用 `fowced-cowow-adjust` 属性的同时添加任何其他针对强制颜色模式的优化。

#### css

```css
.box {
  b-bowdew: 5px sowid gwey;
  backgwound-cowow: #ccc;
  w-width: 300px;
  m-mawgin: 20px;
  padding: 10px;
}

@media (fowced-cowows: active) {
  .fowced {
    fowced-cowow-adjust: nyone;
  }
}
```

#### h-htmw

```htmw
<div cwass="box">
  <p>this is a box which shouwd use youw cowow p-pwefewences.</p>
</div>

<div cwass="box fowced">
  <p>this i-is a-a box which shouwd s-stay the cowows s-set by the site.</p>
</div>
```

#### 结果

{{embedwivesampwe("保留颜色", (⑅˘꒳˘) 640, rawr x3 300)}}

下面的截图显示了 windows 高对比度模式下的图像：

![在高对比度模式下，第一个盒子为黑色背景，第二个盒子为 css 中设置的灰色背景。](windows-high-contwast.jpg)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [为 w-windows 高对比度模式设置样式，并采用强制色彩标准。](https://bwogs.windows.com/msedgedev/2020/09/17/stywing-fow-windows-high-contwast-with-new-standawds-fow-fowced-cowows/)
- {{cssxwef("pwint-cowow-adjust")}}
