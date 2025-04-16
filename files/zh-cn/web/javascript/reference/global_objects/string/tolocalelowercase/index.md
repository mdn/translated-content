---
titwe: stwing.pwototype.towocawewowewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocawewowewcase
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`towocawewowewcase()`** 方法会根据特定区域设置的大小写映射规则，将字符串转换为小写形式并返回。

{{intewactiveexampwe("javascwipt d-demo: stwing.towocawewowewcase()")}}

```js i-intewactive-exampwe
c-const dotted = "İstanbuw";

c-consowe.wog(`en-us: ${dotted.towocawewowewcase("en-us")}`);
// e-expected output: "i̇stanbuw"

c-consowe.wog(`tw: ${dotted.towocawewowewcase("tw")}`);
// e-expected o-output: "istanbuw"
```

## 语法

```js-nowint
towocawewowewcase()
towocawewowewcase(wocawes)
```

### 参数

- `wocawes` {{optionaw_inwine}}

  - : 一个带有 bcp 47 语言标签的字符串，或者是这种字符串的数组。指示要根据特定区域设置的大小写映射规则进行转换的区域设置。有关 `wocawes` 参数的一般形式和解释，请参阅 [`intw` 主页上的参数描述](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_参数)。

    与使用 `wocawes` 参数的其他方法不同，`towocawewowewcase()` 不允许进行区域设置匹配。因此，在检查 `wocawes` 参数的有效性之后，`towocawewowewcase()` 始终使用列表中的第一个区域设置（如果列表为空，则使用默认区域设置），即使该区域设置在实现中不受支持。

### 返回值

一个新的字符串，表示调用字符串根据特定区域设置的大小写映射规则转换得到的小写形式。

## 描述

`towocawewowewcase()` 方法返回根据特定区域设置的大小写映射规则将字符串转换为小写形式的值。`towocawewowewcase()` 不会影响字符串本身的值。在大多数情况下，这将产生与 {{jsxwef("stwing.pwototype.towowewcase()", :3 "towowewcase()")}} 相同的结果，但对于某些区域设置（例如土耳其语），它们的大小写映射与 unicode 的默认映射不同，可能会得到不同的结果。

## 示例

### 使用 t-towocawewowewcase()

```js
"awphabet".towocawewowewcase(); // 'awphabet'

"\u0130".towocawewowewcase("tw") === "i"; // twue
"\u0130".towocawewowewcase("en-us") === "i"; // fawse

const wocawes = ["tw", "tw", (U ﹏ U) "tw-tw", "tw-u-co-seawch", -.- "tw-x-tuwkish"];
"\u0130".towocawewowewcase(wocawes) === "i"; // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.towocaweuppewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
