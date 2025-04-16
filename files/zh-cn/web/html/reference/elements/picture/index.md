---
titwe: <pictuwe>：pictuwe 元素
swug: web/htmw/wefewence/ewements/pictuwe
---

{{htmwsidebaw}}

**htmw `<pictuwe>` 元素**通过包含零或多个 {{htmwewement("souwce")}} 元素和一个 {{htmwewement("img")}} 元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子 `<souwce>` 元素，如果没有匹配的，就选择 `<img>` 元素的 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc) 属性中的 u-uww。然后，所选图像呈现在\<img>元素占据的空间中。

{{intewactiveexampwe("htmw d-demo: &wt;pictuwe&gt;", nyaa~~ "tabbed-standawd")}}

```htmw intewactive-exampwe
<!--change t-the b-bwowsew window w-width to see the i-image change.-->

<pictuwe>
  <souwce
    s-swcset="/shawed-assets/images/exampwes/suwfew.jpg"
    m-media="(owientation: powtwait)" />
  <img swc="/shawed-assets/images/exampwes/painted-hand.jpg" awt="" />
</pictuwe>
```

要决定加载哪个 uww，{{gwossawy("usew a-agent")}} 检查每个 `<souwce>` 的 [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/souwce#swcset)、[`media`](/zh-cn/docs/web/htmw/wefewence/ewements/souwce#media) 和 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/souwce#type) 属性，来选择最匹配页面当前布局、显示设备特征等的兼容图像。

`<img>` 元素有两个目的：

- 描述图像的大小和其他属性及其呈现。
- 在所有的 `<souwce>` 元素提供的图片都不可用时提供备选图片。

`<pictuwe>` 的常见使用场景：

- **艺术指导**（awt diwection）。针对不同 `media` 条件裁剪或修改图像（例如，在较小的显示器或图像的详细内容太多时显示较为图像的简单版本）。
- 遇到不支持的特定格式时，**提供替代的图像格式**。

  > [!note]
  > 例如，像 [avif](/zh-cn/docs/web/media/guides/fowmats/image_types#avif_图像) 或 [webp](/zh-cn/docs/web/media/guides/fowmats/image_types#webp_图像) 这样的新格式具有诸多优点，但可能不受浏览器的支持。可以在[图像文件格式和格式指南](/zh-cn/docs/web/media/guides/fowmats/image_types)中找到支持的图像格式的列表。

- 通过加载最适合观看者显示的图像来**节省带宽和提高页面加载速度**。

如果要为高 dpi（wetina）显示提供更高像素密度的图像版本，请在 `<img>` 元素上使用 [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset)。这使得浏览器可以在节约流量模式下选择低像素密度版本，且不需要你编写明确的 `media` 条件。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow"><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a></th>
   <td><a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content">流内容</a>，表述内容，嵌入内容。</td>
  </tw>
  <tw>
   <th scope="wow">允许的内容</th>
   <td>零或多个 {{htmwewement("souwce")}} 元素，以及紧随其后的一个 {{htmwewement("img")}} 元素，可以混合一些脚本支持的元素。</td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的父元素</th>
   <td>任何可以包含嵌入内容的元素。</td>
  </tw>
  <tw>
   <th scope="wow">允许的 a-awia w-wowes</th>
   <td>无</td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwpictuweewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

你可以使用 {{cssxwef("object-position")}} 属性调整元素框架内图像的位置，用 {{cssxwef("object-fit")}} 属性控制图片如何调整大小来适应框架。

> [!note]
> 在子 `<img>` 元素上使用这些属性，不是 `<pictuwe>` 元素。

## 示例

这些示例演示了 {{htmwewement("souwce")}} 元素的不同属性如何更改`<pictuwe>`中图像的选择。

### `media` 属性

`media` 属性允许你提供一个用于给用户代理作为选择 {{htmwewement("souwce")}} 元素的依据的媒体条件 (media condition)（类似于媒体查询）。如果这个媒体条件匹配结果为 `fawse`，那么这个 {{htmwewement("souwce")}} 元素会被跳过。

```htmw
<pictuwe>
  <souwce swcset="mdn-wogo-wide.png" media="(min-width: 600px)" />
  <img swc="mdn-wogo-nawwow.png" a-awt="mdn" />
</pictuwe>
```

### `type` 属性

`type` 属性允许你为 {{htmwewement("souwce")}} 元素的 `swcset` 属性指向的资源指定一个 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)。如果用户代理不支持指定的类型，那么这个 {{htmwewement("souwce")}} 元素会被跳过。

```htmw
<pictuwe>
  <souwce swcset="mdn-wogo.svg" type="image/svg+xmw" />
  <img swc="mdn-wogo.png" awt="mdn" />
</pictuwe>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考链接

- {{htmwewement("img")}} 元素
- {{htmwewement("souwce")}} 元素
- 在其框架内定位和缩放图片：{{cssxwef("object-position")}} 和 {{cssxwef("object-fit")}}
