---
title: 小贴士：如何制作快速加载的 HTML 页面
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
---

以下技巧都是基于通用的知识和经验。

一个好的页面不仅要给访客提供一个更有交互性的站点，同时也需要降低你的服务器压力和网络请求。后者对于那些高访问量的站点，或在有爆炸性新闻出现等特殊情况下会出现流量突增的站点来说尤为关键。

页面加载性能的优化不仅仅是针对那些带宽有限的拨号上网或移动设备用户需要看的内容，对于提供给宽带用户访问的内容同样重要并且可以导致巨大的提升，哪怕对于那些拥有最快网速的访客。

## Tips

### 减小页面的大小

直至今日，页面的大小仍是页面加载性能的最重要因素。

通过压缩——排除不必要空格，注释，和将脚本、CSS 放入外部文件等减小页面的大小，可以在页面结构改变很小的情况下提高下载性能。

诸如 [HTML Tidy](http://tidy.sourceforge.net/) 这类的工具可以从有效的 HTML 源文件中自动截去行首空格和额外的空行，其他工具则可以通过重新格式化源代码来压缩 JavaScript 或者通过混淆源码将长标识符替换为短标识符来减小文件大小。

### 最小化文件数量

减少一个页面引用的文件数量可以降低在下载一个页面的过程中需要的[HTTP](/zh-CN/docs/HTTP)请求数量，从而减少这些请求的收发时间。

根据其缓存设置，浏览器可能会为每个所引用的文件发送一个带 [If-Modified-Since](/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since) 的请求给网络服务器，以查询这些文件自上次加载后是否有被修改。查询引用文件上次修改时间会花费太多时间，导致网页首屏延迟，这是因为在渲染页面之前浏览器必须确认每个文件的修改时间。

If you use background images a lot in your CSS, you can reduce the number of HTTP lookups needed by combining the images into one, known as an image sprite. Then you just apply the same image each time you need it for a background and adjust the x/y coordinates appropriately. This technique works best with elements that will have limited dimensions, and will not work for every use of a background image. However, the fewer HTTP requests and single image caching can help reduce page-load time.

### 使用 CDN

For the purposes of this article, a CDN is a means to reduce the physical distance between your server and your visitor. As the distance between your server origin and visitor increases, the load times will increase. Suppose your website server is located in the United States and it has a visitor from India; the page load time will be much higher for the Indian visitor compared to a visitor from the US.

A CDN is a geographically distributed network of servers that work together to shorten the distance between the user and your website. CDNs store cached versions of your website and serve them to visitors via the network node closest to the user, thereby reducing [latency](http://www.webperformancetoday.com/2012/04/02/latency-101-what-is-latency-and-why-is-it-such-a-big-deal/).

Further reading:

- [Understanding CDNs](https://www.incapsula.com/cdn-guide/what-is-cdn-how-it-works.html)

### 减少域名查找

每个独立的域名都会消耗 DNS 查找的时间，页面加载时间会随着独立域名数量、CSS 链接数量、JavaScript 还有图片资源的数量增加而增加。

这条可能算不上实用，然而，在你的页面中尽量少的使用来自不同域名的资源链接。

### 缓存重用的内容

确保任何内容可以被缓存，并且拥有一个合理的有效期。

特别要注意 `Last-Modified` 头，它会让页面高效的缓存。自上次修改之后，这部分 header 指示将信息传递给用户代理（要加载这些信息的文件）。大部分网页服务器会自动追加 `Last-Modified` header 部分到静态页面（如 `.html`，`.css`），基于上次修改的日期储存在文件系统中。至于动态页面（如 `.php`，`.aspx`），便无法做到，这部分请求的头也就不会被发送出去。

所以，特别是动态产生的页面，花点时间研究一下这个课题会是有益的。或许有些什么关联，无论怎样，这么做在那些不能被缓存的网页中都会节省很多的页面请求。

更多信息：

1. [HTTP Conditional Get for RSS Hackers](http://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](http://annevankesteren.nl/archives/2005/05/http-304)
3. [HTTP ETag on Wikipedia](http://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### 高效地排列页面组件

在页面最初显示时，会首先下载页面内容以及所需的 CSS 和 JavaScript，这样在页面加载时用户可以最快获得外观的反馈。由于内容通常都是文本，有利于在传输过程中压缩，因此给用户以更快的响应。

页面中任何具有动态特性的资源需要在页面被完全加载后才可以使用，所以最好在初始化时关闭动态特性（disable dynamic features），等页面加载完后再打开它。这样 JavaScript 就会在网页内容之后才加载，有助于提升页面加载的整体表现。

### 减少内联脚本的数量

内联脚本在页面加载过程中消耗很多资源，因为解析器认为内联脚本会改变页面结构。通常，尽量少的使用内联脚本和减少用`document.write()`来输出内容，在一定情况下可以加速整体页面的载入。现在浏览器中一般使用现代的 W3C DOM 方法操作页面内容，优于使用`document.write()`的传统方法。

### 使用现代 CSS 和合法标记

使用现代 CSS 减少标记（markup）的用量，可以减少对（spacer）图片的需求。在布局方面，图片通常可以用风格化的文本（text）来替代，这样会“节省”许多资源。

使用合法标记还有其他优点。首先，浏览器在解释 HTML 时无需做错误校正（除了一些哲理性的问题，例如，是允许用户输入格式不一致，而后再用程序“校准”或统一化呢？还是加强约束规则，限制用户输入的格式？）。

再者，合法标记可以让那些给你的网站做预处理的工具功能最大化。例如，[HTML Tidy](http://tidy.sourceforge.net/) 可以移除空白（whitespace）和可选的末尾标记（ending tags）；然而，在有严重的错误标记的网页中这些工具便无法工作。

### 给内容分块

使用 table 布局是一种不应该再采用的传统方法，而应运用 [floats](/zh-CN/docs/Learn/CSS/CSS_layout/Floats), [positioning](/zh-CN/docs/Learn/CSS/CSS_layout/Positioning), [flexbox](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox), 或 [grids](/zh-CN/docs/Learn/CSS/CSS_layout/Grids) 来布局。

当然，table 仍是不失为一种有效的展示表格数据的方式。为了帮助浏览器更快速的渲染你的页面，你应该避免嵌套 table。

相较于这种深度的嵌套：

```html
<table>
  <table>
    <table>
      ...
    </table>
  </table>
</table>
```

用下图这样的非嵌套结构更好一些：

```html
<table>
  ...
</table>
<table>
  ...
</table>
<table>
  ...
</table>
```

可参见 [CSS Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/) 和 [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/) 规范。

### Minify and compress SVG assets

SVG produced by most drawing applications often contains unnecessary metadata which can be removed. Configure your servers, apply gzip compression for SVG assets.

### Minify and compress your images

Large images cause your page to take more time to load. Consider compressing your images before adding them to your page, using compression features built into image-manipulation tools such as Photoshop, or using a specialized tool such as [Compress Jpeg](https://compressjpeg.com/) or [Tiny PNG](https://tinypng.com/),.

### 指定图像和表格的大小

如果浏览器可以即时决定你的照片（images）和表格（tables）宽高，它在展示网页时就不必进行内容重新排版。这不仅可以加速网页的显示，还能在网页完成加载的过程中防止恼人的布局改变。因此，图片的 `height` 和 `width` 应尽可能确定下来。

表格可以使用 CSS 选择器：综合性能：

```css
table-layout: fixed;
```

用 [`<col>`](/zh-CN/docs/Web/HTML/Element/col) 和 [`<colgroup>`](/zh-CN/docs/Web/HTML/Element/colgroup) 元素来指定列宽。

### 合理的选择 user-agent

为使页面设计得到极大提升，应确保在工程中指定一个合理的 user-agent。不要奢求你的内容在所有浏览器中都完美的展现，特别是在那些低版本的浏览器中。

理想情况下，你的页面运行的最小环境要基于现代浏览器，这个浏览器起码要支持一些相关的标准（如 html5 标准）。可以是最近版本的火狐，IE，谷歌 Chrome，Opera 还有 Safari。

需要注意一下，这篇文章当中的许多 tips 都是些技术性常识，可以不必担心浏览器的支持需求而应用到任何 user-agent 和网页中去。

### 尽可能使用 async 和 defer

确保 JavaScript 脚本兼容 [async](/zh-CN/docs/HTML/Element/script#Attributes) 和 [defer](/zh-CN/docs/HTML/Element/script#Attributes)，任何时候都要尽可能使用 [async](/zh-CN/docs/HTML/Element/script#Attributes) ，特别是当你有较多的 script 标签时。

这样在加载 JavaScript 的过程中页面就不会重新绘制，否则，浏览器在不具有这些特性的 script 标签后就不会重绘任何东西。

注意：这些特性在页面第一次加载时会有所帮助，你可以这样用但不能指靠它在所有的浏览器中起作用。如果你遵循指南（guidelines）写出了非常优秀的 JavaScript 代码，也不必要再去修改它了。

## 页面结构示例

- `{{htmlelement('html')}}`
  - `{{htmlelement('head')}}`
    - `{{htmlelement('link')}}`
      CSS 文件用来修饰页面外观。在调试维护中把不相关的 CSS 拆分在不同文件中，且尽量减少文件的数量可以提高性能。
    - `{{htmlelement('script')}}`
      JavaScript 文件用来实现页面加载时**需要**的函数，而避免在页面加载后才能运行的 JavaScript。在调试维护中把不相关的 JavaScript 拆分在不同文件中，且尽量减少文件的数量可以提高性能。
  - `{{htmlelement('body')}}`
    用户能在完整页面下载完之前就可以看到的页面小分块（`{{htmlelement('header')}}`/`{{htmlelement('main')}}`/`{{htmlelement('table')}}`）。
    - `{{htmlelement('script')}}`
      DHTML 脚本通常在页面完全加载或者所有必要的对象（objects）已初始化完毕之后才能运行。没有必要在页面内容之前加载这些脚本，这只会拖慢页面加载和初始化的体验。在调试维护中把不相关的 script 拆分在不同文件中，且尽量减少文件的数量可以提高性能。如有图像用到了反转效果，你应该在页面内容下载完后预加载这些图像。

## 参见

- 书籍：["Speed Up Your Site" by Andy King](http://www.websiteoptimization.com/)
- 非常棒、讲的很全 [Best Practices for Speeding Up Your Web Site](http://developer.yahoo.com/performance/rules.html) (Yahoo!)
- 用来分析和优化的工具：[Google PageSpeed Tools](https://developers.google.cn/speed)
