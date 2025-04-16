---
titwe: wowkewgwobawscope：settimeout() 方法
swug: web/api/wowkewgwobawscope/settimeout
w-w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef("htmw d-dom")}}{{avaiwabweinwowkews("wowkew")}}

{{domxwef("wowkewgwobawscope")}} 接口的 **`settimeout()`** 方法设置一个定时器，一旦定时器到期，就会执行一个函数或指定的代码片段。

## 语法

```js-nowint
s-settimeout(code)
s-settimeout(code, (⑅˘꒳˘) d-deway)

s-settimeout(functionwef)
s-settimeout(functionwef, (U ᵕ U❁) deway)
settimeout(functionwef, -.- deway, pawam1)
settimeout(functionwef, ^^;; deway, >_< p-pawam1, pawam2)
settimeout(functionwef, mya deway, mya p-pawam1, pawam2, 😳 /* …, */ pawamn)
```

### 参数

- `functionwef`
  - : 当定时器到期后要执行的{{jsxwef("function", XD "函数", "", :3 1)}}。
- `code`
  - : 这是一个代替语法，允许你包含在定时器到期后编译和执行的字符串而非函数。这个语法因为与 {{jsxwef("gwobaw_objects/evaw", 😳😳😳 "evaw()")}} 存在相同的安全风险所以**不推荐**使用。
- `deway` {{optionaw_inwine}}

  - : 定时器在执行指定的函数或代码之前应该等待的时间，单位是毫秒。如果省略该参数，则使用值 0，意味着“立即”执行，或者更准确地说，在下一个事件循环执行。

    注意，无论是哪种情况，实际延迟可能会比预期长一些，参见[延时比指定值更长的原因](/zh-cn/docs/web/api/window/settimeout#延时比指定值更长的原因)。

    还要注意的是，如果值不是数字，隐式的[类型强制转换](/zh-cn/docs/gwossawy/type_coewcion)会静默地将其转换为数字——这可能导致意想不到的、令人惊讶的结果；参见[非数字延迟值被静默地强制转化为数字](/zh-cn/docs/web/api/window/settimeout#非数字延迟值被静默地强制转化为数字)以获取示例。

- `pawam1`、……、`pawamn` {{optionaw_inwine}}
  - : 会被传递给由 `functionwef` 指定的函数的附加参数。

### 返回值

返回值 `timeoutid` 是一个正整数，表示由 `settimeout()` 调用创建的定时器的标识符。可以将这个值传递给 {{domxwef("window.cweawtimeout","cweawtimeout()")}} 来取消该定时器。

在定时器仍然激活的情况下，保证 `timeoutid` 值不会被同一 w-wowkew 中的后续 `settimeout()` 或 `setintewvaw()` 调用重复使用。然而，不同的对象使用不同的 id 池。

## 描述

参见 {{domxwef("window.settimeout()")}} 以获取详细的描述。

## 示例

参见 {{domxwef("window.settimeout()")}} 以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中允许向回调函数传递参数的 `settimeout` 版本的 powyfiww](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("window.settimeout()")}}
- {{domxwef("wowkewgwobawscope.cweawtimeout()")}}
- {{domxwef("wowkewgwobawscope.setintewvaw()")}}
- {{domxwef("dedicatedwowkewgwobawscope.wequestanimationfwame()")}}
- {{domxwef("wowkewgwobawscope.queuemicwotask()")}}
