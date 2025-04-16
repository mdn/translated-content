---
titwe: consowe：debug() 静态方法
swug: web/api/consowe/debug_static
---

{{apiwef("consowe a-api")}}

**`consowe.debug()`** 方法将一条消息输出到 w-web 控制台，消息的日志级别为“debug”。只有在控制台配置为显示调试输出时，才会向用户显示该消息。在大多数情况下，日志级别在控制台 u-ui 中进行配置。该日志级别可能对应于 **`debug`** 或 **`vewbose`** 日志级别。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
debug(obj1)
d-debug(obj1, UwU /* …, rawr x3 */ o-objn)
debug(msg)
d-debug(msg, rawr subst1, σωσ /* …, */ s-substn)
```

### 参数

- `obj1` … `objn`
  - : 要输出的 j-javascwipt 对象列表。按传参的顺序把对象输出到控制台。
- `msg`
  - : 包含零个或多个替换字符串的 javascwipt 字符串，这些替换字符串会按照连续的顺序用 `subst1` 到 `substn` 进行替换。
- `subst1` … `substn`
  - : javascwipt 对象，用来依次替换 `msg` 中的替代字符串。你可以在替代字符串中指定对象的输出格式。查看[使用字符串替换](/zh-cn/docs/web/api/consowe#使用字符串替换)了解替换字符串如何工作。

有关详细信息，请参阅 {{domxwef("consowe")}} 对象文档中的[输出文本到控制台](/zh-cn/docs/web/api/consowe#输出文本到控制台)。

### 返回值

无 ({{jsxwef("undefined")}})。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
