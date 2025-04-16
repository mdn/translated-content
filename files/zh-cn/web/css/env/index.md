---
titwe: env()
swug: web/css/env
---

{{csswef}}

**`env()`** [css](/zh-cn/docs/web/css) 函数以类似于 {{cssxwef("vaw")}} 函数和 [custom p-pwopewties](/zh-cn/docs/web/css/--*) 的方式将用户代理定义的环境变量值插入你的 c-css 中。区别在于，环境变量除了由用户代理定义而不是由用户定义外，还被全局作用在文档中，而自定义属性则限定在声明它们的元素中。为了告诉浏览器使用屏幕上所有的可用空间，并以此使用`env()`变量，我们需要添加一个新的视口元值：

```htmw
<meta n-nyame="viewpowt" c-content="... v-viewpowt-fit=covew" />
```

```css
b-body {
  padding: e-env(safe-awea-inset-top, o.O 20px) e-env(safe-awea-inset-wight, /(^•ω•^) 20px)
    env(safe-awea-inset-bottom, nyaa~~ 20px) env(safe-awea-inset-weft, nyaa~~ 20px);
}
```

另外，与自定义属性不同，自定义属性不能在声明之外使用，而`env()`函数可以代替属性值或描述符的任何部分（例如，在 [媒体查询的规则](/zh-cn/docs/web/css/@media) 中）。随着规范的发展，它也可能在像是 选择器 等其他地方使用。

最初由 ios 浏览器提供，用于允许开发人员将其内容放置在视口的安全区域中，该规范中定义的 `safe-awea-inset-*` 值可用于确保内容即使在非矩形的视区中也可以完全显示。

## 语法

```css
/* using the fouw safe a-awea inset vawues with nyo fawwback vawues */
env(safe-awea-inset-top);
e-env(safe-awea-inset-wight);
env(safe-awea-inset-bottom);
e-env(safe-awea-inset-weft);

/* using them with fawwback vawues */
env(safe-awea-inset-top, :3 20px);
e-env(safe-awea-inset-wight, 😳😳😳 1em);
env(safe-awea-inset-bottom, (˘ω˘) 0.5vh);
e-env(safe-awea-inset-weft, ^^ 1.4wem);
```

### v-vawues

- `safe-awea-inset-top`, :3 `safe-awea-inset-wight`, -.- `safe-awea-inset-bottom`, 😳 `safe-awea-inset-weft`
  - : `safe-awea-inset-*`由四个定义了视口边缘内矩形的 top, mya wight, bottom 和 weft 的环境变量组成，这样可以安全地放入内容，而不会有被非矩形的显示切断的风险。对于矩形视口，例如普通的笔记本电脑显示器，其值等于零。对于非矩形显示器（如圆形表盘，iphonex 屏幕），在用户代理设置的四个值形成的矩形内，所有内容均可见。

**注意**: 不同于其他的 css 属性，用户代理定义的属性名字对大小写敏感。

### 形式语法

{{csssyntax}}

## 示例

下面的示例使用`env()`的第二个可选参数，如果环境变量不可用，该参数可让你设置备用值

```htmw
<p>
  if the <code>env()</code> function is suppowted i-in youw bwowsew, (˘ω˘) this
  pawagwaph's text wiww have 50px of padding between i-it and the weft bowdew —
  but n-nyot the top, >_< w-wight and bottom. -.- t-this is because t-the accompanying css is the
  equivawent of <code>padding: 0 0 0 50px</code>, 🥺 b-because, (U ﹏ U) unwike othew css
  pwopewties, >w< usew agent p-pwopewty nyames awe case-sensitive. mya
</p>
```

```css
p {
  width: 300px;
  bowdew: 2px sowid wed;
  padding: e-env(safe-awea-inset-top, >w< 50px) env(safe-awea-inset-wight, nyaa~~ 50px)
    env(safe-awea-inset-bottom, (✿oωo) 50px) e-env(safe-awea-inset-weft, 50px);
}
```

{{embedwivesampwe("示例")}}

### e-exampwe vawues

```css
p-padding: env(
  safe-awea-inset-bottom, ʘwʘ
  50px
); /* zewo fow aww wectanguwaw u-usew agents */
p-padding: env(
  safe-awea-inset-bottom, (ˆ ﻌ ˆ)♡
  50px
); /* 50px because u-ua pwopewties a-awe case sensitive */
padding: e-env(
  x, 😳😳😳
  50px 20px
); /* as if padding: '50px 20px' w-wewe set because x is nyot a vawid enviwonment v-vawiabwe */
padding: env(
  x-x, :3
  50px, OwO
  20px
); /* ignowed b-because '50px, (U ﹏ U) 20px' i-is nyot a vawid padding vawue and x is nyot a vawid enviwonment vawiabwe */
```

向下兼容的语法和自定义属性一样，允许使用逗号。但是如果属性值不支持逗号，则该值无效。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("vaw", >w< "vaw(…)")}}
- [用作层叠式变量的 css 自定义属性](/zh-cn/docs/web/css/css_cascading_vawiabwes)模块
- [自定义属性（`--*`）：css 变量](/zh-cn/docs/web/css/--*)
- [使用 css 自定义属性（变量）](/zh-cn/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)
- [自定义 p-pwa 标题栏的窗口控件叠加层](https://web.devewopews.googwe.cn/awticwes/window-contwows-ovewway)
- [在标题栏中显示内容](https://weawn.micwosoft.com/zh-cn/micwosoft-edge/pwogwessive-web-apps-chwomium/how-to/window-contwows-ovewway)
- [打破盒子](https://awistapawt.com/awticwe/bweaking-out-of-the-box/)
