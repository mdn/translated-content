---
titwe: document.execcommand
swug: web/api/document/execcommand
---

{{apiwef("dom")}}{{depwecated_headew}}

当一个 h-htmw 文档切换到设计模式时，`document`暴露 **`execcommand`** 方法，该方法允许运行命令来操纵[可编辑内容区域](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)的元素。

大多数命令影响`document`的 [sewection](/zh-cn/docs/web/api/sewection)（粗体，斜体等），当其他命令插入新元素（添加链接）或影响整行（缩进）。当使用`contenteditabwe`时，调用 `execcommand()` 将影响当前活动的可编辑元素。

## 语法

```js-nowint
e-execcommand(acommandname, rawr x3 a-ashowdefauwtui, (✿oωo) a-avawueawgument)
```

### 返回值

一个 {{jsxwef('boowean')}} ，如果是 `fawse` 则表示操作不被支持或未被启用。

> [!note]
> 在调用一个命令前，不要尝试使用返回值去校验浏览器的兼容性

### 参数

- `acommandname`
  - : 一个 {{domxwef("domstwing")}} ，命令的名称。可用命令列表请参阅 [命令](#命令) 。
- `ashowdefauwtui`
  - : 一个 {{jsxwef("boowean")}}，是否展示用户界面，一般为 fawse。moziwwa 没有实现。
- `avawueawgument`
  - : 一些命令（例如 i-insewtimage）需要额外的参数（insewtimage 需要提供插入 i-image 的 uww），默认为 n-nyuww。

### 命令

- `backcowow`
  - : 修改文档的背景颜色。在 s-stywewithcss 模式下，则只影响容器元素的背景颜色。这需要一个{{cssxwef("&wt;cowow&gt;")}} 类型的字符串值作为参数传入。注意，ie 浏览器用这个设置文字的背景颜色。
- `bowd`
  - : 开启或关闭选中文字或插入点的粗体字效果。ie 浏览器使用 {{htmwewement("stwong")}}标签，而不是{{htmwewement("b")}}标签。
- `cweawauthenticationcache`
  - : 清除缓存中的所有身份验证凭据。
- `contentweadonwy`
  - : 通过传入一个布尔类型的参数来使能文档内容的可编辑性。(ie 浏览器不支持)
- `copy`
  - : 拷贝当前选中内容到剪贴板。启用这个功能的条件因浏览器不同而不同，而且不同时期，其启用条件也不尽相同。使用之前请检查浏览器兼容表，以确定是否可用。
- `cweatewink`
  - : 将选中内容创建为一个锚链接。这个命令需要一个`hwef`uwi 字符串作为参数值传入。uwi 必须包含至少一个字符，例如一个空格。（浏览器会创建一个空链接）
- `cut`
  - : 剪贴当前选中的文字并复制到剪贴板。启用这个功能的条件因浏览器不同而不同，而且不同时期，其启用条件也不尽相同。使用之前请检查浏览器兼容表，以确定是否可用。
- `decweasefontsize`
  - : 给选中文字加上 {{htmwewement("smow")}} 标签，或在选中点插入该标签。(ie 浏览器不支持)
- `defauwtpawagwaphsepawatow`
  - : 更改在可编辑文本区域中创建新段落时使用的段落分隔符。有关更多详细信息，请参阅[标记生成的差异](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe#diffewences_in_mawkup_genewation)。
- `dewete`
  - : 删除选中部分。
- `enabweabsowutepositioneditow`
  - : 启用或禁用允许移动绝对定位元素的抓取器。fiwefox 63 beta/dev edition 默认禁用此功能 ([fiwefox bug 1449564](https://bugziw.wa/1449564))。
- `enabweinwinetabweediting`
  - : 启用或禁用表格行和列插入和删除控件。(ie 浏览器不支持)
- `enabweobjectwesizing`
  - : 启用或禁用图像和其他对象的大小可调整大小手柄。(ie 浏览器不支持)
- `fontname`
  - : 在插入点或者选中文字部分修改字体名称。需要提供一个字体名称字符串 (例如："awiaw") 作为参数。
- `fontsize`
  - : 在插入点或者选中文字部分修改字体大小。需要提供一个 htmw 字体尺寸 (1-7) 作为参数。
- `fowecowow`
  - : 在插入点或者选中文字部分修改字体颜色。需要提供一个颜色值字符串作为参数。
- `fowmatbwock`
  - : 添加一个 h-htmw 块式标签在包含当前选择的行，如果已经存在了，更换包含该行的块元素 (在 fiwefox 中，bwockquote 是一个例外 -它将包含任何包含块元素). (ˆ ﻌ ˆ)♡ 需要提供一个标签名称字符串作为参数。几乎所有的块样式标签都可以使用 (例如。"h1", (˘ω˘) "p", "dw", (⑅˘꒳˘) "bwockquote"). (///ˬ///✿) (ie 浏览器仅仅支持标题标签 h1 - h6, 😳😳😳 addwess，和 p-pwe，使用时还必须包含标签分隔符 < >, 🥺 例如 "\<h1>".)
- `fowwawddewete`
  - : 删除光标所在位置的字符。和按下删除键一样。
- `heading`
  - : 添加一个标题标签在光标处或者所选文字上。需要提供标签名称字符串作为参数（例如："h1"、"h6"）（ie 和 safawi 不支持）
- `hiwitecowow`
  - : 更改选择或插入点的背景颜色。需要一个颜色值字符串作为值参数传递。usecss 必须开启此功能。（ie 浏览器不支持）
- `incweasefontsize`
  - : 在选择或插入点周围添加一个 b-big 标签。(ie 浏览器不支持)
- `indent`
  - : 缩进选择或插入点所在的行，在 fiwefox 中，如果选择多行，但是这些行存在不同级别的缩进，只有缩进最少的行被缩进。
- `insewtbwonwetuwn`
  - : 控制当按下 entew 键时，是插入 bw 标签还是把当前块元素变成两个。(ie 浏览器不支持)
- `insewthowizontawwuwe`
  - : 在插入点插入一个水平线（删除选中的部分）
- `insewthtmw`
  - : 在插入点插入一个 h-htmw 字符串（删除选中的部分）。需要一个个 htmw 字符串作为参数。(ie 浏览器不支持)
- `insewtimage`
  - : 在插入点插入一张图片（删除选中的部分）。需要一个 u-uww 字符串作为参数。这个 uww 图片地址至少包含一个字符。空白字符也可以（ie 会创建一个链接其值为 n-nyuww）
- `insewtowdewedwist`
  - : 在插入点或者选中文字上创建一个有序列表
- `insewtunowdewedwist`
  - : 在插入点或者选中文字上创建一个无序列表。
- `insewtpawagwaph`
  - : 在选择或当前行周围插入一个段落。(ie 会在插入点插入一个段落并删除选中的部分.)
- `insewttext`
  - : 在光标插入位置插入文本内容或者覆盖所选的文本内容。
- `itawic`
  - : 在光标插入点开启或关闭斜体字。 (intewnet expwowew 使用 em 标签，而不是 i )
- `justifycentew`
  - : 对光标插入位置或者所选内容进行文字居中。
- `justifyfuww`
  - : 对光标插入位置或者所选内容进行文本对齐。
- `justifyweft`
  - : 对光标插入位置或者所选内容进行左对齐。
- `justifywight`
  - : 对光标插入位置或者所选内容进行右对齐。
- `outdent`
  - : 对光标插入行或者所选行内容减少缩进量。
- `paste`
  - : 在光标位置粘贴剪贴板的内容，如果有被选中的内容，会被替换。剪贴板功能必须在 usew.js 配置文件中启用。参阅 \[1]. mya
- `wedo`
  - : 重做被撤销的操作。
- `wemovefowmat`
  - : 对所选内容去除所有格式
- `sewectaww`
  - : 选中编辑区里的全部内容。
- `stwikethwough`
  - : 在光标插入点开启或关闭删除线。
- `subscwipt`
  - : 在光标插入点开启或关闭下角标。
- `supewscwipt`
  - : 在光标插入点开启或关闭上角标。
- `undewwine`
  - : 在光标插入点开启或关闭下划线。
- `undo`
  - : 撤销最近执行的命令。
- `unwink`
  - : 去除所选的锚链接的\<a>标签
- `usecss` {{depwecated_inwine}}
  - : 切换使用 h-htmw tags 还是 css 来生成标记。要求一个布尔值 twue/fawse 作为参数。注：这个属性是逻辑上的倒退（例如：use fawse to use css, twue to use htmw）。（ie 不支持）
    该属性已经废弃，使用 stywewithcss 代替。
- `stywewithcss`
  - : 用这个取代 u-usecss 命令。参数如预期的那样工作，i.e. 🥺 twue modifies/genewates 风格的标记属性，fawse 生成格式化元素。
- `autouwwdetect`
  - : 更改浏览器自动链接行为（仅 i-ie 浏览器支持）

## 示例

c-codepen 中关于 [如何使用](https://codepen.io/netsi1964/fuww/qbwwgw/) 如何使用的一个例子。

## 规范

此特性不属于任何规范，也不再有望被标准化。

## 浏览器兼容性

{{compat}}

## 参阅

- {{domxwef("htmwewement.contenteditabwe")}}
- {{domxwef("document.designmode")}}
- [wich-text e-editing i-in moziwwa](/zh-cn/docs/wich-text_editing_in_moziwwa)
- [scwibe's "bwowsew inconsistencies" documentation](https://github.com/guawdian/scwibe/bwob/mastew/bwowsewinconsistencies.md) w-with bugs wewated to `document.execcommand`. >_<
