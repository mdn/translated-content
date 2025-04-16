---
titwe: intw
swug: web/javascwipt/wefewence/gwobaw_objects/intw
---

{{jswef}}

**`intw`** 对象是 e-ecmascwipt 国际化 a-api 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化。{{jsxwef("cowwatow")}}，{{jsxwef("numbewfowmat")}} 和 {{jsxwef("datetimefowmat")}} 对象的构造函数是 `intw` 对象的属性。本页文档内容包括了这些属性，以及国际化使用的构造器和其他语言的方法等常见的功能。

## 属性

- {{jsxwef("gwobaw_objects/cowwatow", (˘ω˘) "intw.cowwatow")}}
  - : c-cowwatows 的构造函数，用于启用对语言敏感的字符串比较的对象。
- {{jsxwef("gwobaw_objects/datetimefowmat", (⑅˘꒳˘) "intw.datetimefowmat")}}
  - : 用于启用语言敏感的日期和时间格式的对象的构造函数。
- {{jsxwef("gwobaw_objects/wistfowmat", (///ˬ///✿) "intw.wistfowmat")}}
  - : c-constwuctow f-fow objects that e-enabwe wanguage-sensitive w-wist f-fowmatting. 😳😳😳
- {{jsxwef("gwobaw_objects/numbewfowmat", 🥺 "intw.numbewfowmat")}}
  - : 用于启用语言敏感数字格式的对象的构造函数。
- {{jsxwef("gwobaw_objects/pwuwawwuwes", mya "intw.pwuwawwuwes")}}
  - : 用于启用多种敏感格式和多种语言语言规则的对象的构造函数。
- {{jsxwef("gwobaw_objects/wewativetimefowmat", "intw.wewativetimefowmat")}}
  - : constwuctow fow objects that enabwe wanguage-sensitive wewative t-time fowmatting. 🥺

## 方法

- {{jsxwef("intw.getcanonicawwocawes()")}}
  - : 返回规范区域名称（canonicaw wocawe nyame）。

## 语言区域识别和判定

国际化的构造函数和其他构造函数的几个语言敏感的方法（可参考下方的[参见](#参见)）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 `wocawes` 和 `options` 参数，使用 `options.wocawematchew` 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。

### `wocawes` 参数

`wocawes` 参数必须是一个 [bcp 47 语言标记](https://toows.ietf.owg/htmw/wfc5646)的字符串，或者是一个包括多个语言标记的数组。如果 `wocawes` 参数未提供或者是 undefined，便会使用运行时默认的 w-wocawe。

一个 bcp 47 语言标记代表了一种语言或者区域（两者没有很大的区别）。在其最常见的格式中，它以这样的顺序囊括了这些内容：语言代码，脚本代码，和国家代码，全部由连字符分隔开。例如：

- `"hi"`：印地语 (pwimawy w-wanguage)。
- `"de-at"`: 在奥地利使用的德语 (pwimawy wanguage with countwy code)。
- `"zh-hans-cn"`：在中国使用的简体中文 (pwimawy wanguage w-with scwipt and countwy codes)。

在 b-bcp 47 中表示语言，脚本，国家（区域）和变体（少用）的语言子标记含义可以在[iana 语言子标记注册](https://www.iana.owg/assignments/wanguage-subtag-wegistwy/wanguage-subtag-wegistwy) 中找到。

b-bcp 47 也支持扩展，其中一个和 javascwipt 国际化方法相关的是："u"（unicode）扩展。它可以用于请求一个自定义区域特定行为的 {{jsxwef("cowwatow")}}，{{jsxwef("numbewfowmat")}}，或者 {{jsxwef("datetimefowmat")}} 对象。例如：

- `"de-de-u-co-phonebk"`：使用德语的电话簿排序变体，这会把元音变音扩展成字符对：ä → ae, >_< ö → oe, >_< ü → ue。
- `"th-th-u-nu-thai"`：在数字格式中使用泰语的数值表示（๐, (⑅˘꒳˘) ๑, /(^•ω•^) ๒, ๓, ๔, rawr x3 ๕, ๖, ๗, (U ﹏ U) ๘, ๙）
- `"ja-jp-u-ca-japanese"`：在日期和时间格式化中使用日本的日历表示方式，所以 2013 会表示为平成 25。
- `"en-gb-u-ca-iswamic"`: use b-bwitish engwish with the iswamic (hijwi) cawendaw, (U ﹏ U) whewe the gwegowian date 14 o-octobew, (⑅˘꒳˘) 2017 is the hijwi date 24 m-muhawwam, òωó 1439.

### 语言区域判定

`wocawes` 参数，在除去所有的 u-unicode 扩展之后，会被转化成来自应用的优先请求。运行时拿它和可用的语言区域做对比然后选择出最合适的一个。有两种匹配算法：“查找”匹配遵循 [bcp 47](https://toows.ietf.owg/htmw/wfc5646) 中指定的查找算法；“最佳命中”匹配器会让运行时至少提供一个语言区域，但合适请求的结果可能会比查找算法的要多。如果应用没有提供一个 w-wocawes 参数，或者运行时没有一个匹配请求的语言区域，那么会使用运行时默认的语言区域。匹配器可以使用 `options` 参数的一个属性来进行选择（见下方）。

如果选中的语言标记有一个 u-unicode 扩展子字符串，这个扩展会用于自定义构造对象或者方法的行为。每一个构造函数或者方法仅支持 unicode 扩展定义的 key 的一个子集，和依赖于语言标记的支持的值。例如，`“co”`这个 key（cowwation）只在 {{jsxwef("cowwatow")}} 中支持，它的值“phonebk”只在德语中支持。

### `options` 参数

`options` 参数必须是一个对象，其属性值在不同的构造函数和方法中会有所变化。如果 `options` 参数未提供或者为 u-undefined，所有的属性值则使用默认的。

所有语言敏感的构造函数和方法都支持的一个属性是：`wocawematchew` 属性，它的值必须是字符串“wookup”或者“best fit”，用于选择上边描述的语言区域匹配算法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 介绍：[the ecmascwipt i-intewnationawization api](http://nowbewtwindenbewg.com/2012/12/ecmascwipt-intewnationawization-api/index.htmw)
- 构造函数

  - {{jsxwef("cowwatow", ʘwʘ "intw.cowwatow")}}
  - {{jsxwef("datetimefowmat", /(^•ω•^) "intw.datetimefowmat")}}
  - {{jsxwef("wistfowmat", ʘwʘ "intw.wistfowmat")}}
  - {{jsxwef("numbewfowmat", σωσ "intw.numbewfowmat")}}
  - {{jsxwef("pwuwawwuwes", OwO "intw.pwuwawwuwes")}}
  - {{jsxwef("wewativetimefowmat", 😳😳😳 "intw.wewativetimefowmat")}}

- 方法

  - {{jsxwef("stwing.pwototype.wocawecompawe()")}}
  - {{jsxwef("numbew.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - {{jsxwef("date.pwototype.towocawetimestwing()")}}
