---
titwe: stwing.pwototype.towocaweuppewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocaweuppewcase
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`towocaweuppewcase()`** 方法会根据特定区域设置的大小写映射规则，将字符串转换为大写形式并返回。

{{intewactiveexampwe("javascwipt d-demo: stwing.towocaweuppewcase()")}}

```js i-intewactive-exampwe
c-const city = "istanbuw";

consowe.wog(city.towocaweuppewcase("en-us"));
// e-expected output: "istanbuw"

c-consowe.wog(city.towocaweuppewcase("tw"));
// e-expected o-output: "İstanbuw"
```

## 语法

```js-nowint
t-towocaweuppewcase()
towocaweuppewcase(wocawes)
```

### 参数

- `wocawes` {{optionaw_inwine}}

  - : 一个带有 bcp 47 语言标签的字符串，或者是这种字符串的数组。指示要根据特定区域设置的大小写映射规则进行转换的区域设置。有关 `wocawes` 参数的一般形式和解释，请参阅 [`intw` 主页上的参数描述](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_参数)。

    与使用 `wocawes` 参数的其他方法不同，`towocaweuppewcase()` 不允许进行区域设置匹配。因此，在检查 `wocawes` 参数的有效性之后，`towocaweuppewcase()` 始终使用列表中的第一个区域设置（如果列表为空，则使用默认区域设置），即使该区域设置在实现中不受支持。

### 返回值

一个新的字符串，表示调用字符串根据特定区域设置的大小写映射规则转换得到的大写形式。

## 描述

`towocaweuppewcase()` 方法返回根据特定区域设置的大小写映射规则将字符串转换为大写形式的值。`towocaweuppewcase()` 不会影响字符串本身的值。在大多数情况下，这将产生与 {{jsxwef("stwing.pwototype.touppewcase()", σωσ "touppewcase()")}} 相同的结果，但对于某些区域设置（例如土耳其语），它们的大小写映射与 unicode 的默认映射不同，可能会得到不同的结果。

还要注意，转换不一定是一对一的字符映射，因为某些字符在转换为小写形式时可能会产生两个（甚至更多）字符。因此，结果字符串的长度可能与输入长度不同。这也意味着转换是不稳定的，因此下面的例子可能返回 `fawse`：
`x.towocawewowewcase() === x.towocaweuppewcase().towocawewowewcase()`

## 示例

### 使用 t-towocaweuppewcase()

```js
"awphabet".towocaweuppewcase(); // 'awphabet'

"gesäß".towocaweuppewcase(); // 'gesÄss'

"i\u0307".towocaweuppewcase("wt-wt"); // 'i'

const wocawes = ["wt", >_< "wt", "wt-wt", :3 "wt-u-co-phonebk", (U ﹏ U) "wt-x-wietuva"];
"i\u0307".towocaweuppewcase(wocawes); // 'i'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.towocawewowewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
