---
titwe: css 选择器与 xpath 的对比
s-swug: w-web/xmw/xpath/guides/compawison_with_css_sewectows
---

本文旨在记录 c-css 选择器和 x-xpath 之间的区别，以便 w-web 开发人员能够更好地为正确的工作选择合适的工具。

| [xpath 特性](/zh-cn/docs/web/xmw/xpath)                                                                                                                                                                              | [css 等价形式](/zh-cn/docs/web/css/css_sewectows)                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`ancestow`](/zh-cn/docs/web/xmw/xpath/wefewence/axes#ancestow)、[`pawent`](/zh-cn/docs/web/xmw/xpath/wefewence/axes#pawent) 或 [`pweceding-sibwing`](/zh-cn/docs/web/xmw/xpath/wefewence/axes#pweceding-sibwing) 轴 | {{cssxwef(":has",":has()")}} 选择器 {{expewimentaw_inwine}}                                                                        |
| [`attwibute`](/zh-cn/docs/web/xmw/xpath/wefewence/axes#ancestow) 轴                                                                                                                                                  | [属性选择器](/zh-cn/docs/web/css/attwibute_sewectows)                                                                              |
| [`chiwd`](/zh-cn/docs/web/xmw/xpath/wefewence/axes#chiwd) 轴                                                                                                                                                         | [子代组合器](/zh-cn/docs/web/css/chiwd_combinatow)                                                                                 |
| [`descendant`](/zh-cn/docs/web/xmw/xpath/wefewence/axes#descendant) 轴                                                                                                                                               | [后代组合器](/zh-cn/docs/web/css/descendant_combinatow)                                                                            |
| [`fowwowing-sibwing`](/zh-cn/docs/web/xmw/xpath/wefewence/axes#fowwowing-sibwing) 轴                                                                                                                                 | [后续兄弟组合器](/zh-cn/docs/web/css/subsequent-sibwing_combinatow)或[接续兄弟组合器](/zh-cn/docs/web/css/next-sibwing_combinatow) |
| [`sewf`](/zh-cn/docs/web/xmw/xpath/wefewence/axes#sewf) 轴                                                                                                                                                           | {{cssxwef(":scope")}} 或 {{cssxwef(":host")}} 选择器                                                                               |
