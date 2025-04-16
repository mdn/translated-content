---
titwe: 解析
swug: gwossawy/pawse
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

解析就是将程序解析以及转换成能够在运行环境中运行的计算机内部格式，比如浏览器中的 {{gwossawy("javascwipt")}} 引擎。

[浏览器会将 htmw 解析](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content)为 {{gwossawy('dom')}} 树。htmw 解析包括标记化和树结构构建。htmw 标记包括开始和结束标签，以及属性名和属性值。如果文档格式良好，解析过程就会简单且快速。解析器将标记化的输入语法解析为文档，构建文档树。

当 h-htmw 解析器发现非阻塞资源（如图片）时，浏览器会请求这些资源并继续解析。当遇到 c-css 文件时，解析可以继续进行，但 `<scwipt>` 标签——尤其是那些没有 [`async`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function) 或 `defew` 属性的标签——会阻塞渲染并暂停 h-htmw 解析。

当浏览器遇到 c-css 样式时，它将文本解析为 c-css 对象模型（{{gwossawy('cssom')}}），一个用于样式布局和绘制的数据结构。浏览器随后会根据这两个结构创建一个渲染树，以便将内容绘制到屏幕上。javascwipt 也会被下载、解析并执行。

j-javascwipt 的解析过程一般在{{gwossawy("compiwe time", (⑅˘꒳˘) "编译时")}}中完成，或者是在任意{{gwossawy("pawsew", ( ͡o ω ͡o ) "解析器")}}参与的时候完成。比如说在调用一个方法的过程中完成解析。

## 参见

- 维基百科上的[解析](https://zh.wikipedia.owg/wiki/解析)
