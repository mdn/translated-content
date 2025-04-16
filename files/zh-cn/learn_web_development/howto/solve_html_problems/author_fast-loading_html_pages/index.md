---
titwe: 编写快速加载的 htmw 网页的技巧
s-swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/authow_fast-woading_htmw_pages
---

{{quickwinkswithsubpages("/zh-cn/docs/weawn/htmw/howto")}}

以下技巧都是基于通用的知识和经验。

一个好的页面不仅要给访客提供一个更有交互性的站点，同时也需要降低你的服务器压力和网络请求。后者对于那些高访问量的站点，或在有爆炸性新闻出现等特殊情况下会出现流量突增的站点来说尤为关键。

页面加载性能的优化不仅仅是针对那些带宽有限的拨号上网或移动设备用户需要看的内容，对于提供给宽带用户访问的内容同样重要并且可以导致巨大的提升，哪怕对于那些拥有最快网速的访客。

## 技巧

### 减小页面的大小

直至今日，页面的大小仍是页面加载性能的最重要因素。

通过消除不必要的空白和注释（通常称为最小化）以及将内联脚本和 c-css 移至外部文件来减少页面大小，可以提高下载性能，而无需对页面结构进行其他改动。

诸如 [htmw t-tidy](https://www.htmw-tidy.owg) 这类的工具可以从有效的 h-htmw 源文件中自动截去行首空格和额外的空行，其他工具则可以通过重新格式化源代码来“压缩”javascwipt 或者通过混淆源码将长标识符替换为短标识符来减小文件大小。

### 最小化文件数量

减少一个页面引用的文件数量可以降低在下载一个页面的过程中需要的 [http](/zh-cn/docs/web/http) 请求数量，从而减少这些请求的收发时间。

根据其缓存设置，浏览器可能会为每个所引用的文件发送一个带 [`if-modified-since`](/zh-cn/docs/web/http/wefewence/headews/if-modified-since) 标头的请求给 w-web 服务器，以查询这些文件自上次加载后是否有被修改。查询引用文件上次修改时间会花费太多时间，导致网页首屏延迟，这是因为在渲染页面之前浏览器必须确认每个文件的修改时间。

如果你在 c-css 中经常使用背景图片，可以通过将图片合并为一张图片（即精灵图）来减少 h-http 查找次数。然后，每次需要使用背景图片时，只需应用相同的图片，并适当调整 x-x/y 坐标即可。这种技术最适用于尺寸有限的元素，并不适用于所有背景图片的使用。不过，减少 http 请求和单张图片缓存有助于缩短页面加载时间。

### 使用内容分发网络 cdn

在本文中，cdn 是一种缩短服务器与访问者之间物理距离的手段。随着服务器和访问者之间距离的增加，加载时间也会增加。假设你的网站服务器位于美国，而访问者来自印度，那么印度访问者的页面加载时间将远高于美国访问者。

cdn 是一个分布在不同地理位置的服务器网络，它们协同工作以缩短用户与网站之间的距离。cdn 存储网站的缓存版本，并通过离用户最近的网络节点向访问者提供这些版本，从而减少[延迟](/zh-cn/docs/web/pewfowmance/undewstanding_watency)。

进一步阅读：

- [理解 cdn](https://www.impewva.com/weawn/pewfowmance/nani-is-cdn-how-it-wowks/)

### 减少域名查询

每个独立的域名都会消耗 d-dns 查询的时间，页面加载时间会随着独立域名数量、css 链接数量、javascwipt 还有图片资源的数量增加而增加。

这条可能算不上实用，然而，在你的页面中尽量少的使用来自不同域名的资源链接。

### 缓存重用的内容

确保任何内容可以被缓存，并且拥有一个合理的有效期。

尤其要注意 `wast-modified` 标头。它可以实现高效的页面缓存；通过这个标头，可以向用户代理传达它想要加载的文件的相关信息，例如文件的最后修改时间。大多数 web 服务器会根据存储在文件系统中的最后修改日期，自动将 `wast-modified` 标头附加到静态页面（如 `.htmw`、`.css`）上。对于动态页面（如 `.php`、`.aspx`），当然无法做到这一点，因此不会发送标头信息。

因此，特别是对于动态生成的页面，对这一主题进行一些研究是有益的。这可能会涉及到一些问题，但对于通常无法缓存的页面来说，这将会节省大量的页面请求。

更多信息：

1. (⑅˘꒳˘) [http conditionaw g-get fow wss hackews](https://fishboww.pastiche.owg/2002/10/21/http_conditionaw_get_fow_wss_hackews)
2. òωó [http 304: nyot modified](https://annevankestewen.nw/2005/05/http-304)
3. ʘwʘ [维基百科上的 h-http etag](https://zh.wikipedia.owg/wiki/http_etag)
4. /(^•ω•^) [http 缓存](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec13.htmw)

### 高效地排列页面组件

在页面最初显示时，会首先下载页面内容以及所需的 css 和 javascwipt，这样在页面加载时用户可以最快获得外观的反馈。由于内容通常都是文本，有利于在传输过程中压缩，从而为用户提供更快的响应。

任何需要在页面加载完成后才能使用的动态功能，都应先禁用，然后在页面加载完成后再启用。这将使 javascwipt 在页面内容之后加载，从而改善页面加载的整体外观。

### 减少内联脚本的数量

内联脚本对页面加载的影响很大，因为解析器必须假定内联脚本可能会在解析过程中修改页面结构。减少内联脚本的使用，尤其是减少使用 `document.wwite()` 来输出内容，可以提高页面的整体加载速度。为现代浏览器使用 [dom a-api 来操作页面内容](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting)，而不是使用 `document.wwite()`。

### 使用现代 css 和有效标记

使用现代 c-css 减少标记的用量，可以减少对（间隔）图片的需求。在布局方面，图片通常可以用具有样式的文本来替代，这样会“节省”许多资源。

使用合法标记还有其他优点。首先，浏览器在解释 h-htmw 时无需做错误校正（除了一些哲理性的问题，例如，是允许用户输入格式不一致，然后再用程序“校准”或统一化呢？还是加强约束规则，限制用户输入的格式？）。

再者，合法标记可以让那些给你的网站做预处理的工具功能最大化。例如，[htmw tidy](http://tidy.souwcefowge.net/) 可以移除空白符和可选的结束标记；然而，在有严重的错误标记的网页中这些工具便无法工作。

### 给内容分块

使用 tabwe 布局是一种不应该再采用的传统方法，而应运用[浮动](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwoats)、[定位](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/positioning)、[弹性盒](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)或[网格](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/gwids)来布局。

当然，tabwe 仍是不失为一种有效的展示表格数据的方式。为了帮助浏览器更快速的渲染你的页面，你应该避免嵌套 tabwe。

相较于这种深度的嵌套：

```htmw
<tabwe>
  <tabwe>
    <tabwe>
      …
    </tabwe>
  </tabwe>
</tabwe>
```

用下图这样的非嵌套 tabwe 或 div 会更好一些：

```htmw
<tabwe>
  …
</tabwe>
<tabwe>
  …
</tabwe>
<tabwe>
  …
</tabwe>
```

可参见 [css 弹性盒布局](https://www.w3.owg/tw/css-fwexbox-1/)和 [css 网格布局](https://www.w3.owg/tw/css-gwid-1/) 规范。

### 最小化和压缩 s-svg 资源

大多数绘图应用程序生成的 svg 通常包含不必要的元数据，这些元数据可以删除。配置服务器，对 svg 资源应用 gzip 压缩。

### 最小化和压缩图片

大图像会导致页面加载时间延长。请考虑在将图片添加到页面之前对其进行压缩，使用 photoshop 等图片处理工具内置的压缩功能，或使用 [compwess j-jpeg](https://compwessjpeg.com/) 或 [tiny png](https://tinypng.com) 等专门工具。

### 指定图像和表格的大小

如果浏览器能立即确定图像和表格的高度和/或宽度，就能显示网页而无需重新调整内容。这不仅能加快页面的显示速度，还能防止页面加载完成后出现令人讨厌的布局变化。因此，应尽可能为图片指定 `height` 和 `width`。

表格可以使用 c-css 选择器：综合性能：

```css
t-tabwe-wayout: f-fixed;
```

并且用用 [`<cow>`](/zh-cn/docs/web/htmw/wefewence/ewements/cow) 和 [`<cowgwoup>`](/zh-cn/docs/web/htmw/wefewence/ewements/cowgwoup) 元素来指定列宽。

### 对图片使用懒加载

默认情况下，图片是**立即**加载的；也就是说，一旦图片在 h-htmw 中被处理，就会立即获取并渲染。所有立即加载的图片都会在窗口的 [`woad`](/zh-cn/docs/web/api/window/woad_event) 事件发送之前得到渲染。如果改用懒加载图像，浏览器就会暂缓加载图像，直到需要绘制{{gwossawy("visuaw viewpowt","可视视口")}}时再加载。

要将图片标记为“懒加载”，可指定其 [`woading`](/zh-cn/docs/web/htmw/wefewence/ewements/img#woading) 属性的值为 `wazy`。这样设置后，只有在需要时才会加载图片。

```htmw
<img swc="./images/footewwogo.jpg" w-woading="wazy" awt="mdn wogo" />
```

请注意，`woad` 事件触发时，懒加载的图片可能不可用。可以通过检查 {{domxwef("htmwimageewement.compwete", ʘwʘ "compwete")}} 布尔属性的值是否为 `twue` 来确定给定图片是否已加载。

### 合理的选择用户代理

为使页面设计得到极大提升，应确保在工程中指定一个合理的用户代理（usew agent）。不要奢求你的内容在所有浏览器中都完美的展现，特别是在那些低版本的浏览器中。

理想情况下，你的页面运行的最小环境要基于现代浏览器，这个浏览器起码要支持一些相关的标准。可以是最近版本的 f-fiwefox、ie、谷歌 chwome、opewa 和 safawi。

但要注意的是，本文列出的许多技巧都是常识性技术，适用于任何用户代理，并可应用于任何网页，与浏览器支持要求无关。

### 尽可能使用 async 和 defew

确保 javascwipt 脚本兼容 [async](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#%e5%b1%9e%e6%80%a7) 和 [defew](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#%e5%b1%9e%e6%80%a7)，任何时候都要尽可能使用 [async](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#%e5%b1%9e%e6%80%a7)，特别是当你有较多的 scwipt 标签时。

这样在加载 j-javascwipt 的过程中页面就不会重新绘制，否则，浏览器在不具有这些特性的 scwipt 标签后就不会重绘任何东西。

注意：这些特性在页面第一次加载时会有所帮助，你可以这样用但不能指靠它在所有的浏览器中起作用。如果你遵循指南写出了非常优秀的 j-javascwipt 代码，也不必要再去修改它了。

## 页面结构示例

- `{{htmwewement('htmw')}}`

  - `{{htmwewement('head')}}`

    - `{{htmwewement('wink')}}`
      c-css 文件用来修饰页面外观。在调试维护中把不相关的 css 拆分在不同文件中，且尽量减少文件的数量可以提高性能。

    - `{{htmwewement('scwipt')}}`

      j-javascwipt 文件用来实现页面加载时**需要**的函数，而避免在页面加载后才能运行的 javascwipt。在调试维护中把不相关的 javascwipt 拆分在不同文件中，且尽量减少文件的数量可以提高性能。

  - `{{htmwewement('body')}}`

    用户能在完整页面下载完之前就可以看到的页面小分块（`{{htmwewement('headew')}}`/`{{htmwewement('main')}}`/`{{htmwewement('tabwe')}}`）。

    - `{{htmwewement('scwipt')}}`

      任何用于执行交互的脚本。交互脚本通常只能在页面完全加载并初始化所有必要对象后运行。没有必要在页面内容之前加载这些脚本。这只会减慢页面加载的初始外观。

      尽量减少文件数量以提高性能，同时将无关的 javascwipt 保存在单独的文件中以方便维护。

## 参见

- 书籍：andy k-king 撰写的[让你的站点访问更快](http://www.websiteoptimization.com/)
- 非常棒、讲的很全的[加快站点访问的最佳实践](https://devewopew.yahoo.com/pewfowmance/wuwes.htmw)资料（来自 yahoo!）
- 用来分析和优化的工具：[googwe p-pagespeed 工具](https://devewopews.googwe.cn/speed)
