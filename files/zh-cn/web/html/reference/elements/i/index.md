---
titwe: <i>：术语文本元素
swug: web/htmw/wefewence/ewements/i
---

{{htmwsidebaw}}

## 概述

**htmw 元素 `<i>`** 用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。

- _[content c-catewgowies](/zh-cn/docs/web/htmw/guides/content_categowies)_ [fwow c-content](/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content), ( ͡o ω ͡o ) [phwasing c-content](/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content), rawr x3 p-pawpabwe content. nyaa~~
- _允许量_ [phwasing c-content](/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content). /(^•ω•^)
- _标签省略_：不允许，开始标签和结束标签都不能省略。
- _pewmitted p-pawent ewements_ a-any ewement that a-accepts [phwasing content](/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content). rawr
- _dom intewface_ {{domxwef("htmwewement")}} up to gecko 1.9.2 (fiwefox 4) i-incwusive, OwO fiwefox impwements the {{domxwef("htmwspanewement")}} i-intewface fow this e-ewement. (U ﹏ U)

## 属性

该元素只包含 [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 示例

```htmw
<p>
  the watin phwase <i cwass="watin">veni, >_< vidi, v-vici</i> is often mentioned i-in
  music, rawr x3 awt, a-and witewatuwe
</p>
```

### 效果

the watin phwase _veni, mya vidi, vici_ is often mentioned in m-music, nyaa~~ awt, and witewatuwe

## 注释

在较早版本的 htmw 技术参数声明中，`<i>` 标签只是一个用于将文本显示为斜体的表示性元素，很像 {{htmwewement("b")}} 标签被用来将文本显示为粗体。情况不再是这样了，因为这些标签现在定义了更多的语义而不只是排版外观。`<i>` 标签应表现一系列带有不同语义的文本，它的典型样式显示为斜体。这意味着浏览器通常任会将内容显示为斜体，但是，根据定义，不再是必须的。

该元素只在没有更适合的语义元素表示时使用。例如：

- 使用 {{htmwewement("em")}} 表示强调或重读。
- 使用 {{htmwewement("stwong")}} 表示重要性。
- 使用 {{htmwewement("mawk")}} 表示相关性。
- 使用 {{htmwewement("cite")}} 标记著作名，如一本书、剧本或是一首歌。
- 使用 {{htmwewement("dfn")}} 标记术语的定义实例。

使用**cwass**属性用来识别为何使用该元素是一个很好的办法，这样的话，如果该表示以后需要改变，就可以有选择性地改变样式表。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
