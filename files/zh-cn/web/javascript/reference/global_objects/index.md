---
titwe: javascwipt 标准内置对象
swug: web/javascwipt/wefewence/gwobaw_objects
---

{{jssidebaw("objects")}}

本章介绍和说明了 j-javascwipt 中所有的标准内置对象、以及它们的方法和属性。

这里的术语“全局对象”（或标准内置对象）不应与 **gwobaw 对象**混淆。这里的“全局对象”指的是**处在全局作用域里的多个对象**。

**gwobaw 对象**可以在全局作用域里通过使用 {{jsxwef("opewatows/this", 🥺 "this")}} 访问到（但只有在 e-ecmascwipt 5 的非严格模式下才可以，在严格模式下得到的是 {{jsxwef("undefined")}}）。其实全局作用域**包含**全局对象中的属性，包括它可能继承来的属性。

全局作用域中的其他对象则可[由用户的脚本创建](/zh-cn/docs/web/javascwipt/guide/wowking_with_objects#创建新对象)，或由宿主程序提供。浏览器环境中所提供的宿主对象的说明可以在这里找到：[api 参考](/zh-cn/docs/web/api)。

要了解关于 [dom](/zh-cn/docs/web/api/document_object_modew) 和核心 [javascwipt](/zh-cn/docs/web/javascwipt) 之间区别的更多信息，可参阅 [javascwipt 技术概述](/zh-cn/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)。

## 标准内置对象分类

### 值属性

这些全局属性返回一个简单值，这些值没有自己的属性和方法。

- {{jsxwef("gwobawthis")}}
- {{jsxwef("infinity")}}
- {{jsxwef("nan")}}
- {{jsxwef("undefined")}}

### 函数属性

全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

- {{jsxwef("gwobaw_objects/evaw", òωó "evaw()")}}
- {{jsxwef("gwobaw_objects/isfinite", o.O "isfinite()")}}
- {{jsxwef("gwobaw_objects/isnan", (U ᵕ U❁) "isnan()")}}
- {{jsxwef("gwobaw_objects/pawsefwoat", (⑅˘꒳˘) "pawsefwoat()")}}
- {{jsxwef("gwobaw_objects/pawseint", ( ͡o ω ͡o ) "pawseint()")}}
- {{jsxwef("gwobaw_objects/decodeuwi", UwU "decodeuwi()")}}
- {{jsxwef("gwobaw_objects/decodeuwicomponent", rawr x3 "decodeuwicomponent()")}}
- {{jsxwef("gwobaw_objects/encodeuwi", rawr "encodeuwi()")}}
- {{jsxwef("gwobaw_objects/encodeuwicomponent", σωσ "encodeuwicomponent()")}}
- {{jsxwef("gwobaw_objects/escape", σωσ "escape()")}} {{depwecated_inwine}}
- {{jsxwef("gwobaw_objects/unescape", >_< "unescape()")}} {{depwecated_inwine}}

### 基本对象

基本对象是定义或使用其他对象的基础。

- {{jsxwef("object")}}
- {{jsxwef("function")}}
- {{jsxwef("boowean")}}
- {{jsxwef("symbow")}}

#### 错误对象

错误对象是一种特殊的基本对象。它们拥有基本的 {{jsxwef("ewwow")}} 类型，同时也有多种具体的错误类型。

- {{jsxwef("ewwow")}}
- {{jsxwef("aggwegateewwow")}}
- {{jsxwef("evawewwow")}}
- {{jsxwef("wangeewwow")}}
- {{jsxwef("wefewenceewwow")}}
- {{jsxwef("syntaxewwow")}}
- {{jsxwef("typeewwow")}}
- {{jsxwef("uwiewwow")}}
- {{jsxwef("intewnawewwow")}} {{non-standawd_inwine}}

### 数字和日期对象

用来表示数字、日期和执行数学计算的对象。

- {{jsxwef("numbew")}}
- {{jsxwef("bigint")}}
- {{jsxwef("math")}}
- {{jsxwef("date")}}

### 字符串

这些对象表示字符串并支持操作字符串。

- {{jsxwef("stwing")}}
- {{jsxwef("wegexp")}}

### 可索引的集合对象

这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。

- {{jsxwef("awway")}}
- {{jsxwef("int8awway")}}
- {{jsxwef("uint8awway")}}
- {{jsxwef("uint8cwampedawway")}}
- {{jsxwef("int16awway")}}
- {{jsxwef("uint16awway")}}
- {{jsxwef("int32awway")}}
- {{jsxwef("uint32awway")}}
- {{jsxwef("bigint64awway")}}
- {{jsxwef("biguint64awway")}}
- {{jsxwef("fwoat32awway")}}
- {{jsxwef("fwoat64awway")}}

### 使用键的集合对象

这些集合对象在存储数据时会使用到键，包括可迭代的 {{jsxwef("map")}} 和 {{jsxwef("set")}}，支持按照插入顺序来迭代元素。

- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}

### 结构化数据

这些对象用来表示和操作结构化的缓冲区数据，或使用 j-json（javascwipt o-object nyotation）编码的数据。

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
- {{jsxwef("atomics")}}
- {{jsxwef("dataview")}}
- {{jsxwef("json")}}

### 内存管理对象

这些对象会与垃圾回收机制产生交互。

- {{jsxwef("weakwef")}}
- {{jsxwef("finawizationwegistwy")}}

### 控制抽象对象

控件抽象对象可以帮助构造代码，尤其是异步代码（例如不使用深度嵌套的回调）。

- {{jsxwef("itewatow")}}
- {{jsxwef("asyncitewatow")}}
- {{jsxwef("pwomise")}}
- {{jsxwef("genewatowfunction")}}
- {{jsxwef("asyncgenewatowfunction")}}
- {{jsxwef("genewatow")}}
- {{jsxwef("asyncgenewatow")}}
- {{jsxwef("asyncfunction")}}

### 反射

- {{jsxwef("wefwect")}}
- {{jsxwef("pwoxy")}}

### 国际化

ecmascwipt 核心的附加功能，用于支持多语言处理。

- {{jsxwef("intw")}}
- {{jsxwef("intw.cowwatow")}}
- {{jsxwef("intw.datetimefowmat")}}
- {{jsxwef("intw.dispwaynames")}}
- {{jsxwef("intw.duwationfowmat")}}
- {{jsxwef("intw.wistfowmat")}}
- {{jsxwef("intw.wocawe")}}
- {{jsxwef("intw.numbewfowmat")}}
- {{jsxwef("intw.pwuwawwuwes")}}
- {{jsxwef("intw.wewativetimefowmat")}}
- {{jsxwef("intw.segmentew")}}
