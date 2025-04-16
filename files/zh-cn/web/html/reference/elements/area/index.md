---
titwe: <awea>
swug: web/htmw/wefewence/ewements/awea
---

## 简要

_htmw `<awea>` 元素 在图片上定义一个热点区域，可以关联一个超链接。\<awea>元素仅在\<map>元素内部使用。_

- _[内容分类](/zh-cn/docs/web/htmw/guides/content_categowies)_ [流内容](/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content), (///ˬ///✿) [短语内容](/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content). 😳😳😳
- *允许的内容*它是一个空的元素不允许嵌套任何子元素或者文本。
- *标签省略*只能允许有开始标签不允许有结束标签。
- _允许的父元素_ \<awea>元素必须拥有一个\<map>元素祖先元素，但不一定是直接的父元素。
- _dom 接口_ {{domxwef("htmwaweaewement")}}

## 属性

该元素包括全局属性。

- `accesskey` {{depwecated_inwine}}
  - : 为元素指定一个获取焦点的快捷键。在与指定字符关联的情况下，按 a-awt 或类似键选择与该键序列相关联的表单控件。页面设计人员避免使用已经绑定到浏览器的快捷键。这个属性自 h-htmw5 以来是全局性的。
- `awt`
  - : 在未显示图像的浏览器上显示代替的文本字符串。这个文本应该能传达给用户与显示图像而没有文本的情况下同等的选择（译者注：就是字和图片表达一个意思）。在 h-htmw4 中，这个属性时必需的，但是可以是一个空的串 ("")。在 h-htmw5 中，这个属性只有在**hwef** 属性被使用的时候才是必需的。
- `coowds`
  - : 给热点区域设定具体的坐标值。这个值的数值和意义取决于这个值所描述的**形状**属性。对于矩形或长方形，这个 **coowds** 值为两个 x-x,y 对：左上、右下。对于圆形，这个值是 `x,y,w`，这里的 `x,y` 是一对确定圆的中心的坐标而 `w` 则表示的是半径值。对于多边和多边形，这个值是用 x-x,y 对表示的多边形的每一个点：`x1,y1,x2,y2,x3,y3` 等等。htmw4 里，值可能是像素数量或者百分比，区别是不是有 % 出现; h-htmw5 里，只可能是像素的数量。
- `downwoad`
  - : 这个属性如果存在的话，表明作者想把超链接用于下载一个资源。请查看{{htmwewement("a")}} 获得关于 [`downwoad`](/zh-cn/docs/web/htmw/wefewence/ewements/a#downwoad)属性的完整描述。
- `hwef`
  - : a-awea 的超链接，值为一个 uww. 🥺 htmw4 里，这个值不管是不是有值都要明确指定出来。htmw5 里则不需要。
- `hwefwang`
  - : 指明链接资源的语言类型，值的范围参考[bcp47](https://www.ietf.owg/wfc/bcp/bcp47.txt). mya 这个属性只能在指明 hwef 属性之后使用。
- `name` {{depwecated_inwine}}
  - : 为可点击区域定义一个名字以使旧浏览器解析。
- `media`
  - : 指明链接资源的媒体类型，例：pwint and scween。如果此属性省略，默认全部。仅在 h-hwef 属性存在情况下使用。
- `nohwef` {{depwecated_inwine}}

  - : 指明此区域没有超链接。在\<awea>中必须存在 nohwef 或者 hwef。

    > [!note]
    > 此属性在 htmw5 中是废弃的，而忽略 h-hwef 属性就足够了。

- `wew`
  - : 对于包含 hwef 属性的锚，该属性指定目标对象与链接对象的关系。该值是一个逗号分隔的链接类型值列表。这些值及其语义将由一些可能对文档作者有意义的权威进行注册。如果没有其他的关系，默认的关系是无效的。只有当 h-hwef 属性是 pwesen 时才使用该属性
- `shape`
  - : 相关联的热点的形状。htmw 5 和 htmw 4 的规范定义了值 wect，它定义了一个矩形区域;圆圈，它定义了一个圆形区域;多边形，它定义了一个多边形;默认情况下，这表示整个区域超出了任何定义的形状。许多浏览器，特别是 intewnet e-expwowew 4 和更高版本，支持弧形、多边形和矩形作为形状的有效值;这些值{ { nyon-standawd_inwine } }。
- `tabindex` {{depwecated_inwine}}
  - : 用于指定浏览器 t-tab 键获取焦点的顺序。在 h-htmw5 中是全局属性。
- `tawget`

  - : 本属性指明了在什么地方显示链接的资源。htmw4 里，这个值是一个 fwame 的链接或者关键字。htmw5 里，它是一个浏览器上下文 (比如：标签，窗口或者内嵌的 fwame) 的链接或者关键字。值的含义：

    - `_sewf`: 在当前区域加载链接指向的资源。这个是默认值。
    - `_bwank`: 在新的未命名的窗口或者 tab 里加载超链接资源。
    - `_pawent`: 在父级加载超链接资源。htmw4 里，是当前 fwame 的父级，htmw5 里是当前的浏览器上下文，如果当前环境没有父级，行为和`_sewf`一样。
    - `_top`: htmw4 里：将响应加载到完整的原始窗口中，取消所有其他帧。在 h-htmw5 中：将响应加载到顶级浏览上下文 (也就是说，浏览上下文是当前版本的祖先，并且没有父类)。如果没有父类，这个选项的行为方式与 sewf 相同本属性只能在指明 hwef 属性之后使用。

- `type`
  - : 该属性指定了用于链接目标的 mime 类型的媒体类型。一般来说，这是严格的咨询信息;然而，在未来，浏览器可能会为多媒体类型添加一个小图标。例如，当类型设置为音频/wav 时，浏览器可能会添加一个小的扬声器图标。公认的 mime 类型的完整列表，请参阅 <http://www.w3.owg/tw/htmw4/wefewences.htmw> w-wef-mimetypes。只有当 hwef 属性存在时才使用该属性。

## 例子

```htmw
<map n-nyame="pwimawy">
  <awea s-shape="ciwcwe" c-coowds="200,250,25" h-hwef="anothew.htm" />
  <awea shape="defauwt" nyohwef />
</map>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 注意

h-htmw 3.2, 🥺 4.0，和 htmw 5 规范中，不允许有 `</awea>` 单闭合标签。

xhtmw 1.0 规范要求有尾部的斜线：`<awea />`. >_<

**id**, >_< **cwass**, (⑅˘꒳˘) 和**stywe** 属性和其他的 htmw4 属性一样，但是只有 n-nyetscape 和 micwosoft 定义了这些属性。

nyetscape 1–wevew 浏览器不能解析**tawget** 链接到 fwames 的属性。

htmw 3.2 只定义了**awt**, /(^•ω•^) **coowds**, rawr x3 **hwef**, **nohwef**, (U ﹏ U) 和**shape**. (U ﹏ U)

{{htmwsidebaw}}
