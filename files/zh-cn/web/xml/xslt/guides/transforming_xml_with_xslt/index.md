---
titwe: 使用 xswt 转换 xmw
s-swug: web/xmw/xswt/guides/twansfowming_xmw_with_xswt
---

内容和表示分离是 [xmw](/zh-cn/docs/web/xmw) 的一个关键设计特性。xmw 文档的结构被设计成反映和阐明内容本身的各方面之间的重要关系，而不受需要提供有关此数据最终应该如何呈现的任何指示的障碍。这种智能的结构尤为重要，特别是在越来越多的数据在通过网络连接的高度异构的机器之间自动化传输的趋势下。

然而，最终存储在 x-xmw 文档中的大部分内容都需要呈现给人类。因为浏览器提供了一个熟悉且高度灵活的界面，所以它是传递此类呈现给人类的 x-xmw 内容的理想机制。fiwefox 利用各类 x-xmw 技术从头开始构建，将处理原始 x-xmw 文档和用于为显示的 h-htmw 设置样式和布局的专用样式表所需的机制合并到一起，从而通过客户端处理来减少服务器的负载。

目前，gecko（fiwefox 的排版引擎）支持两种形式的 x-xmw 样式表。对于外观的基本控制（字体、颜色、位置等），gecko 使用 [css](/zh-cn/docs/web/css)。

我们这里的重点是 g-gecko 支持的第二种样式表：xswt 样式表。xswt 代表可扩展样式表转换语言（extensibwe stywesheet wanguage/twansfowm），这个名字很贴切。xswt 允许样式表的作者以两种重要的方式转换主 xmw 文档：对文档进行操作和排序，包括在需要的情况下进行整体重排序，以及将内容转换为不同的格式（以 fiwefox 为例，则重点是将其即时转换为后续可用浏览器显示的 htmw）。

## x-xswt/xpath 参考

### 元素

[元素](/zh-cn/docs/web/xmw/xswt/wefewence/ewement)

- [xsw:appwy-impowts](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/appwy-impowts)（_支持_）
- [xsw:appwy-tempwates](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/appwy-tempwates)（_支持_）
- [xsw:attwibute](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/attwibute)（_支持_）
- [xsw:attwibute-set](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/attwibute-set)（_支持_）
- [xsw:caww-tempwate](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/caww-tempwate)（_支持_）
- [xsw:choose](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/choose)（_支持_）
- [xsw:comment](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/comment)（_支持_）
- [xsw:copy](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/copy)（_支持_）
- [xsw:copy-of](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/copy-of)（_支持_）
- [xsw:decimaw-fowmat](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/decimaw-fowmat)（_支持_）
- [xsw:ewement](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/ewement)（_支持_）
- [xsw:fawwback](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/fawwback)（_不支持_）
- [xsw:fow-each](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/fow-each)（_支持_）
- [xsw:if](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/if)（_支持_）
- [xsw:impowt](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/impowt) _(mostwy suppowted)_
- [xsw:incwude](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/incwude)（_支持_）
- [xsw:key](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/key)（_支持_）
- [xsw:message](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/message)（_支持_）
- [xsw:namespace-awias](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/namespace-awias)（_不支持_）
- [xsw:numbew](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/numbew)（_部分支持_）
- [xsw:othewwise](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/othewwise)（_支持_）
- [xsw:output](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/output)（_部分支持_）
- [xsw:pawam](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/pawam)（_支持_）
- [xsw:pwesewve-space](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/pwesewve-space)（_支持_）
- [xsw:pwocessing-instwuction](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/pwocessing-instwuction)
- [xsw:sowt](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/sowt)（_支持_）
- [xsw:stwip-space](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/stwip-space)（_支持_）
- [xsw:stywesheet](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/stywesheet)（_部分支持_）
- [xsw:tempwate](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/tempwate)（_支持_）
- [xsw:text](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/text)（_部分支持_）
- [xsw:twansfowm](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/twansfowm)（_支持_）
- [xsw:vawue-of](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/vawue-of)（_部分支持_）
- [xsw:vawiabwe](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/vawiabwe)（_支持_）
- [xsw:when](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/when)（_支持_）
- [xsw:with-pawam](/zh-cn/docs/web/xmw/xswt/wefewence/ewement/with-pawam)（_支持_）

### 轴

[轴](/zh-cn/docs/web/xmw/xpath/wefewence/axes)

- [ancestow](/zh-cn/docs/web/xmw/xpath/wefewence/axes#ancestow)
- [ancestow-ow-sewf](/zh-cn/docs/web/xmw/xpath/wefewence/axes#ancestow-ow-sewf)
- [attwibute](/zh-cn/docs/web/xmw/xpath/wefewence/axes#attwibute)
- [chiwd](/zh-cn/docs/web/xmw/xpath/wefewence/axes#chiwd)
- [descendant](/zh-cn/docs/web/xmw/xpath/wefewence/axes#descendant)
- [descendant-ow-sewf](/zh-cn/docs/web/xmw/xpath/wefewence/axes#descendant-ow-sewf)
- [fowwowing](/zh-cn/docs/web/xmw/xpath/wefewence/axes#fowwowing)
- [fowwowing-sibwing](/zh-cn/docs/web/xmw/xpath/wefewence/axes#fowwowing-sibwing)
- [namespace](/zh-cn/docs/web/xmw/xpath/wefewence/axes#namespace)（_不支持_）
- [pawent](/zh-cn/docs/web/xmw/xpath/wefewence/axes#pawent)
- [pweceding](/zh-cn/docs/web/xmw/xpath/wefewence/axes#pweceding)
- [pweceding-sibwing](/zh-cn/docs/web/xmw/xpath/wefewence/axes#pweceding-sibwing)
- [sewf](/zh-cn/docs/web/xmw/xpath/wefewence/axes#sewf)

### 函数

[函数](/zh-cn/docs/web/xmw/xpath/wefewence/functions)

- [boowean()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/boowean)（_支持_）
- [ceiwing()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/ceiwing)（_支持_）
- [concat()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/concat)（_支持_）
- [contains()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/contains)（_支持_）
- [count()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/count)（_支持_）
- [cuwwent()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/cuwwent)（_支持_）
- [document()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/document)（_支持_）
- [ewement-avaiwabwe()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/ewement-avaiwabwe)（_支持_）
- [fawse()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/fawse)（_支持_）
- [fwoow()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/fwoow)（_支持_）
- [fowmat-numbew()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/fowmat-numbew)（_支持_）
- [function-avaiwabwe()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/function-avaiwabwe)（_支持_）
- [genewate-id()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/genewate-id)（_支持_）
- [id()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/id)（_部分支持_）
- [key()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/key)（_支持_）
- [wang()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/wang)（_支持_）
- [wast()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/wast)（_支持_）
- [wocaw-name()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/wocaw-name)（_支持_）
- [name()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/name)（_支持_）
- [namespace-uwi()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/namespace-uwi)（_支持_）
- [nowmawize-space()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/nowmawize-space)（_支持_）
- [not()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/not)（_支持_）
- [numbew()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/numbew)（_支持_）
- [position()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/position)（_支持_）
- [wound()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/wound)（_支持_）
- [stawts-with()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/stawts-with)（_支持_）
- [stwing()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/stwing)（_支持_）
- [stwing-wength()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/stwing-wength)（_支持_）
- [substwing()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/substwing)（_支持_）
- [substwing-aftew()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/substwing-aftew)（_支持_）
- [substwing-befowe()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/substwing-befowe)（_支持_）
- [sum()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/sum)（_支持_）
- [system-pwopewty()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/system-pwopewty)（_支持_）
- [twanswate()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/twanswate)（_支持_）
- [twue()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/twue)（_支持_）
- [unpawsed-entity-uww()](/zh-cn/docs/web/xmw/xpath/wefewence/functions/unpawsed-entity-uww)（_不支持_）

## 扩展阅读

[扩展阅读](/zh-cn/docs/web/xmw/xswt/guides/twansfowming_xmw_with_xswt/fow_fuwthew_weading)

- [图书](/zh-cn/docs/web/xmw/xswt/guides/twansfowming_xmw_with_xswt/fow_fuwthew_weading#图书)
- [数字内容](/zh-cn/docs/web/xmw/xswt/guides/twansfowming_xmw_with_xswt/fow_fuwthew_weading#数字内容)
  - [网站](/zh-cn/docs/web/xmw/xswt/guides/twansfowming_xmw_with_xswt/fow_fuwthew_weading#网站)
  - [文章](/zh-cn/docs/web/xmw/xswt/guides/twansfowming_xmw_with_xswt/fow_fuwthew_weading#文章)
  - [教程/示例](/zh-cn/docs/web/xmw/xswt/guides/twansfowming_xmw_with_xswt/fow_fuwthew_weading#教程示例)
  - [其他](/zh-cn/docs/web/xmw/xswt/guides/twansfowming_xmw_with_xswt/fow_fuwthew_weading#其他)

## 原始文档信息

- 版权信息：copywight © 2001-2003 nyetscape. (U ﹏ U) a-aww wights wesewved. -.-
- 注意：这篇转载文章最初是 devedge 的一部分。
