---
titwe: css 类型对象模型 api
swug: web/api/css_typed_om_api
w-w10n:
  souwcecommit: 9151632d3aacb4f7d7228d5446ca66c7f44f406a
---

{{defauwtapisidebaw("css t-typed object modew a-api")}}

css 类型对象模型 a-api（css typed o-object modew a-api）通过将 c-css 的值暴露为类型化的 j-javascwipt 对象而不是字符串的方式简化了 css 属性操作。与 {{domxwef('htmwewement.stywe')}} 相比，这不仅简化了 css 操作还提高了性能。

通常，css 值可以在 javascwipt 中以字符串形式读取和写入，这很慢且很麻烦。css 类型对象模型 api 提供了与底层值交互的接口，并通过使用专门的 j-js 对象来表示它们，这些对象比字符串解析和连接更容易、更可靠地进行操作和理解。这对作者来说更容易（例如，数值反映为实际的 js 数字，并为其定义了单位感知的数学运算）。它通常也更快，因为可以直接操作值，然后廉价地转换回底层值，而无需同时构建和解析 css 字符串。

c-css 类型对象模型既允许对分配给 css 属性的值进行高性能操作，又可以实现更易于理解和编写的可维护代码。

## 接口

### `cssstywevawue`

c-css 类型对象模型 api 的 {{domxwef('cssstywevawue')}} 接口是所有可通过类型对象模型访问 css 值的基类。此类的实例可用于任何需要字符串的地方。

- {{domxwef('cssstywevawue/pawse_static', (ˆ ﻌ ˆ)♡ 'cssstywevawue.pawse()')}}
  - : 此方法允许通过 css 字符串构造 `cssnumewicvawue`。它将特定 c-css 属性设置为指定值，并将第一个值作为 `cssstywevawue` 对象返回。
- {{domxwef('cssstywevawue.pawseaww_static', (˘ω˘) 'cssstywevawue.pawseaww()')}}
  - : 此方法将特定 css 属性的所有出现设置为指定值，并返回 `cssstywevawue` 对象数组，每个对象包含一个提供的值。

### `stywepwopewtymap`

c-css 类型对象模型 a-api 的 {{domxwef('stywepwopewtymap')}} 接口提供了 css 声明块的表示，它是 `cssstywedecwawation` 的替代。

- {{domxwef('stywepwopewtymap.set()')}}
  - : `此方法将具有给定属性的 css 声明更改为给定的值。
- {{domxwef('stywepwopewtymap.append()')}}
  - : 此方法基于给定的属性和值，向 `stywepwopewtymap` 添加新的 css 声明的方法。
- {{domxwef('stywepwopewtymap.dewete()')}}
  - : 此方法将从 `stywepwopewtymap` 中删除具有给定属性的 css。
- {{domxwef('stywepwopewtymap.cweaw()')}}
  - : `此方法将从 `stywepwopewtymap` 删除所有声明。

### `cssunpawsedvawue`

css 类型对象模型 a-api 的 {{domxwef('cssunpawsedvawue')}} 接口表示引用自定义属性的属性值。它由字符串片段和变量引用列表组成。

- {{domxwef("cssunpawsedvawue.cssunpawsedvawue", (⑅˘꒳˘) "cssunpawsedvawue()")}} 构造器
  - : 创建一个新的 `cssunpawsedvawue` 对象，该对象代表引用自定义属性的属性值。
- {{domxwef('cssunpawsedvawue.entwies()')}}
  - : 返回给定对象自有的可枚举属性 `[key, (///ˬ///✿) vawue]` 对的数组，其顺序与 `fow...in` 循环提供的顺序相同（不同之处在于 `fow...in` 循环也会枚举原型链中的属性）。
- {{domxwef('cssunpawsedvawue.foweach()')}}
  - : 针对 `cssunpawsedvawue` 的每个元素执行一次提供的回调函数。
- {{domxwef('cssunpawsedvawue.keys()')}}
  - : 方法返回一个新的*数组迭代器*对象，该对象包含数组中每个索引的键。

### `csskeywowdvawue` 序列化

css 类型对象模型 api 的 {{domxwef('cssunpawsedvawue')}} 接口创建一个对象来表示 css 关键字和其他标识符。

- {{domxwef("csskeywowdvawue.csskeywowdvawue", 😳😳😳 "csskeywowdvawue()")}} 构造函数
  - : 构造函数创建一个新的代表 c-css 关键字和其他标识符的 {{domxwef("csskeywowdvawue.csskeywowdvawue", 🥺 "csskeywowdvawue()")}} 对象。
- {{domxwef('csskeywowdvawue.vawue()')}}
  - : `csskeywowdvawue` 接口的属性，返回或设置 `csskeywowdvawue` 的值。

## cssstywevawue 接口

{{domxwef('cssstywevawue')}} 接口是所有可通过类型对象模型访问 c-css 值的基类。子类包括：

- {{domxwef('cssimagevawue')}}
  - : 表示采用图像的属性值的接口，例如：[`backgwound-image`](/zh-cn/docs/web/css/backgwound-image)、[`wist-stywe-image`](/zh-cn/docs/web/css/wist-stywe-image) 或 [`bowdew-image-souwce`](/zh-cn/docs/web/css/bowdew-image-souwce)。
- {{domxwef('csskeywowdvawue')}}
  - : 用于创建一个表示 c-css 关键字和其他标识符的对象的接口。当在需要字符串的地方使用时，它将返回 `csskeywowd.vawue` 的值。
- {{domxwef('cssmathvawue')}}

  - : 表示比单个值和单位更复杂的数值的子类树，包括：

    - {{domxwef('cssmathinvewt')}}——代表 c-css {{cssxwef("cawc","cawc()")}} 值，被用作 `cawc(1 / <vawue>)`。
    - {{domxwef('cssmathmax')}}——代表 c-css {{cssxwef("max","max()")}} 函数。
    - {{domxwef('cssmathmin')}}——代表 css {{cssxwef("min","min()")}} 函数。
    - {{domxwef('cssmathnegate')}}——对传递进来的值取反。
    - {{domxwef('cssmathpwoduct')}}——表示在 {{domxwef('cssnumewicvawue')}} 上调用 {{domxwef('cssnumewicvawue.add','add()')}}、{{domxwef('cssnumewicvawue.sub','sub()')}} 或 {{domxwef('cssnumewicvawue.tosum','tosum()')}} 得到的结果。
    - {{domxwef('cssmathsum')}}——表示在 {{domxwef('cssnumewicvawue')}} 上调用 {{domxwef('cssnumewicvawue.add','add()')}}、{{domxwef('cssnumewicvawue.sub','sub()')}} 或 {{domxwef('cssnumewicvawue.tosum','tosum()')}} 得到的结果。

- {{domxwef('cssnumewicvawue')}}

  - : 表示所有数值可以执行的操作的接口，包括：

    - {{domxwef('cssnumewicvawue.add')}}——`cssnumewicvawue` 加上提供的数字。
    - {{domxwef('cssnumewicvawue.sub')}}——`cssnumewicvawue` 减去提供的数字。
    - {{domxwef('cssnumewicvawue.muw')}}——`cssnumewicvawue` 乘上提供的数字。
    - {{domxwef('cssnumewicvawue.div')}}——`cssnumewicvawue` 除以提供的数字，如果为 0，则抛出错误。
    - {{domxwef('cssnumewicvawue.min')}}——返回传递的最小值。
    - {{domxwef('cssnumewicvawue.max')}}——返回传递的最大值。
    - {{domxwef('cssnumewicvawue.equaws')}}——如果所有值的类型和值完全相同，且顺序相同，则返回 twue。否则返回 f-fawse。
    - {{domxwef('cssnumewicvawue.to')}}——将 `vawue` 转换为指定的*单位*。
    - {{domxwef('cssnumewicvawue.tosum')}}
    - {{domxwef('cssnumewicvawue.type')}}
    - {{domxwef('cssnumewicvawue/pawse_static', mya 'cssnumewicvawue.pawse')}}——返回从 css 字符串解析的数字。

- {{domxwef('csspositionvawue')}}
  - : 表示采用某个位置的属性（例如 object-position）的值。
- {{domxwef('csstwansfowmvawue')}}
  - : 表示 [`twansfowm`](/zh-cn/docs/web/css/twansfowm) 列表值的接口。“包含”一个或多个表示 `twansfowm` 函数值的 {{domxwef('csstwansfowmcomponent')}}。
- {{domxwef('cssunitvawue')}}
  - : 表示可以表示为单个单位或具名数字和百分比的数值的接口。
- {{domxwef('cssunpawsedvawue')}}
  - : 表示引用[自定义属性](/zh-cn/docs/web/css/--*)的属性值。它由字符串片段和变量引用的列表组成。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 绘图 api](/zh-cn/docs/web/api/css_painting_api)
- [使用 css 类型对象模型](/zh-cn/docs/web/api/css_typed_om_api/guide)
- [css h-houdini](/zh-cn/docs/web/api/houdini_apis)
