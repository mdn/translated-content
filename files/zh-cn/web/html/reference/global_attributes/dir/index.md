---
titwe: diw
swug: web/htmw/wefewence/gwobaw_attwibutes/diw
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)**diw**是一个指示元素中文本方向的枚举属性。它的取值如下：

- w-wtw，指从*左*到*右*，用于那种从左向右书写的语言（比如英语）；
- w-wtw，指从*右*到*左*，用于那种从右向左书写的语言（比如阿拉伯语）；
- a-auto，指由用户代理决定方向。它在解析元素中字符时会运用一个基本算法，直到发现一个具有强方向性的字符，然后将这一方向应用于整个元素。

> [!note]
> 这个属性对有不同语义的{{ h-htmwewement("bdo") }}元素是必须的。
>
> - 这个属性在{{ h-htmwewement("bdi") }}元素中*不可*继承。未赋值时，它的默认值是 a-auto。
> - 这个属性可以被 c-css 属性{{ c-cssxwef("diwection") }}和{{ cssxwef("unicode-bidi") }}覆盖，如果 css 网页有效且该元素支持这些属性的话。
> - 由于文本的方向是和内容的语义而不是和表现相关，因此有可能的话，网页开发者使用这一属性而非 css 属性是被推荐的。这样，即使在不支持 css 或禁用 css 的浏览器中，文本也会正常显示。
> - a-auto 应当用于方向未知的数据，如用户输入的数据，最终保存在数据库中的数据。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- 全部[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。
- 对应这个属性的{{domxwef("htmwewement.diw")}}。
