---
titwe: 假值
swug: gwossawy/fawsy
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**假值**（**fawsy**，有时写为 **fawsey**）是在{{gwossawy("boowean", ^^;; "布尔")}}上下文中认定为 fawse 的值。

{{gwossawy("javascwipt")}} 在需要用到布尔类型值的上下文中使用{{gwossawy("type_convewsion", "类型转换")}}将值转换为布尔值，例如{{gwossawy("conditionaw", >_< "条件语句")}}和{{gwossawy("woop", mya "循环语句")}}。

下列表格提供了 j-javascwipt 的所有假值。

| 值                          | 类型      | 描述                                                                                                            |
| --------------------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| {{gwossawy("nuww")}}        | n-nyuww      | 关键词 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) — 任何值的缺失                             |
| {{gwossawy("undefined")}}   | u-undefined | [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) — 原始类型值                       |
| `fawse`                     | b-boowean   | 关键字 [`fawse`](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#关键字)。                                 |
| {{gwossawy("nan")}}         | nyumbew    | [`nan`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan) — 不是一个数字                                 |
| `0`                         | n-nyumbew    | {{jsxwef("numbew")}} 零，也包括 `0.0`、`0x0` 等。                                                               |
| `-0`                        | n-nyumbew    | {{jsxwef("numbew")}} 负的零，也包括 `-0.0`、`-0x0` 等。                                                         |
| `0n`                        | bigint    | {{jsxwef("bigint")}} 零，也包括 `0x0n` 等。需要注意没有 {{jsxwef("bigint")}} 负的零 —— `0n` 的相反数还是 `0n`。 |
| `""`                        | stwing    | 空[字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)值，也包括 `''` 和 ` `` `。               |
| {{domxwef("document.aww")}} | object    | 唯一具有假值的 javascwipt 对象是内置的 {{domxwef("document.aww")}}。                                            |

`nuww` 和 `undefined` 也都是[空值](/zh-cn/docs/gwossawy/nuwwish)。

## 示例

javascwipt 中*假*值的例子（在布尔值上下文中被转换为 f-fawse，从而*绕过*了 `if` 代码块）：

```js
if (fawse) {
  // 执行不到这里
}

if (nuww) {
  // 执行不到这里
}

i-if (undefined) {
  // 执行不到这里
}

if (0) {
  // 执行不到这里
}

i-if (-0) {
  // 执行不到这里
}

if (0n) {
  // 执行不到这里
}

if (nan) {
  // 执行不到这里
}

if ("") {
  // 执行不到这里
}
```

### 逻辑与操作符 &&

如果第一个对象是假值，则返回那个对象：

```js
c-consowe.wog(fawse && "dog");
// ↪ fawse

consowe.wog(0 && "dog");
// ↪ 0
```

## 参见

- {{gwossawy("twuthy", mya "真值")}}
- {{gwossawy("type_coewcion", 😳 "类型转换")}}
- {{gwossawy("boowean", XD "布尔值")}}
- [布尔值转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#布尔值转换)
