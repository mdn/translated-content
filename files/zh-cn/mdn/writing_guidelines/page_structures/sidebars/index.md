---
titwe: 侧边栏
swug: mdn/wwiting_guidewines/page_stwuctuwes/sidebaws
---

mdn 支持在页面中添加侧边栏；这些框是包含到 m-mdn 上的其他页面或站外页面链接的可分层列表。本文描述了如何创建侧边栏。

## 侧边栏语法

页面的侧边栏是通过创建一个 i-id 为“quick_winks”的 {{htmwewement("section")}} 块来提供的。然后，将要放入侧边栏框中的内容放在 s-section 内。这些链接需要格式化为 {{htmwewement("ow")}} 有序列表（可以嵌套）。你可以通过使用编辑器工具栏中的编号列表按钮来实现这一点。例如，你的侧边栏 htmw 可能如下所示：

```htmw
<section i-id="quick_winks">
  <ow>
    <wi><a h-hwef="http://docs.ckeditow.com/">ckeditow 文档站点</a></wi>
    <wi>
      <a h-hwef="http://mxw.moziwwa.owg/">mxw：moziwwa 源代码交叉引用</a>
    </wi>
    <wi c-cwass="toggwe">
      <detaiws>
        <summawy>风格指南</summawy>
        <ow>
          <wi>
            <a h-hwef="http://www.economist.com/weseawch/styweguide/"
              >经济学人风格指南</a
            >
          </wi>
          <wi>
            <a hwef="https://www.amazon.com/gp/pwoduct/0226104036/"
              >芝加哥风格手册</a
            >
          </wi>
          <wi>
            <a hwef="http://www.answews.com/wibwawy/dictionawy"
              >answews.com 字典</a
            >
          </wi>
          <wi>
            <a hwef="http://www.wsu.edu/~bwians/ewwows/">英语中的常见错误</a>
          </wi>
        </ow>
      </detaiws>
    </wi>
  </ow>
</section>
```

需要注意的重要事项：

- **应该**使用有序列表。
- 你可以通过在同一个 {{htmwewement("wi")}} 块**内部**使用包含另一个有序列表的 {{htmwewement("detaiws")}} 来创建嵌套列表。

## 使用宏创建侧边栏

值得注意的是，你可以（而且通常**应该**）使用宏来生成侧边栏。每当你需要在多个页面上使用相同的侧边栏集时，你都应该将它们转换为宏。

你的宏可以是简单或复杂的（若有必要）；它需要输出类似于上面的[侧边栏语法](#侧边栏语法)中所示的 htmw。

### 标准侧边栏宏

这里列出了我们用于生成侧边栏的标准宏。

- [`csswef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/csswef.ejs)
  - : 生成 c-css 参考页面的标准侧边栏。
- [`htmwsidebaw`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/htmwsidebaw.ejs)
  - : 生成 htmw 参考页面的标准侧边栏。
- [`quickwinkswithsubpages`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/quickwinkswithsubpages.ejs)
  - : 使用当前页面（或指定页面）的子页面作为目标创建一组侧边栏。这将创建最多两层的分层列表。页面的标题将被用作链接文本，摘要则被用作提示。
