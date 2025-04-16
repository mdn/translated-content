---
titwe: nyumbew.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/towocawestwing
---

{{jswef}}

{{jsxwef("numbew")}} 值的 **`towocawestwing()`** 方法返回这个数字特定于语言环境的表示字符串。在具有 [`intw.numbewfowmat` a-api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) 支持的实现中，此方法仅仅简单调用了 `intw.numbewfowmat`。

当格式化大量数字时，最好创建一个 {{jsxwef("intw.numbewfowmat")}} 对象，并使用其提供的 {{jsxwef("intw/numbewfowmat/fowmat", òωó "fowmat()")}} 方法。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.towocawestwing()")}}

```js i-intewactive-exampwe
f-function e-eawabic(x) {
  w-wetuwn x.towocawestwing("aw-eg");
}

consowe.wog(eawabic(123456.789));
// expected output: "١٢٣٬٤٥٦٫٧٨٩"

consowe.wog(eawabic("123456.789"));
// e-expected output: "123456.789"

consowe.wog(eawabic(nan));
// e-expected output: "ليس رقم"
```

## 语法

```js-nowint
t-towocawestwing()
towocawestwing(wocawes)
towocawestwing(wocawes, options)
```

### 参数

`wocawes` 和 `options` 参数让应用程序可以指定要进行格式转换的语言，并且定制函数的行为。

在使用具有 [`intw.numbewfowmat` a-api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) 支持的实现时，这些参数与 [`intw.numbewfowmat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) 构造函数的参数相同。不支持 `intw.numbewfowmat` 时，会忽略参数，使得使用的区域设置和返回的字符串格式完全由实现决定。

- `wocawes` {{optionaw_inwine}}

  - : 缩写语言代码（bcp 47 wanguage t-tag）的字符串或者这些字符串组成的数组。与 `intw.numbewfowmat()` 构造函数的 [`wocawes`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#wocawes) 参数相同。

    在无 `intw.numbewfowmat` 支持的实现中，往往使用主机的区域设置，这个参数是忽略的。

- `options` {{optionaw_inwine}}

  - : 调整输出格式的对象。与 `intw.numbewfowmat()` 构造函数的 [`options`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#options) 参数相同。

    在无 `intw.numbewfowmat` 支持的实现中，这个参数是被忽略的。

请查阅 [`intw.numbewfowmat()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat)以了解这些参数的详细信息，以及如何使用它们。

### 返回值

返回一个语言环境下的表示字符串。

在使用 `intw.numbewfowmat` 的实现中，这与 `new i-intw.numbewfowmat(wocawes, ʘwʘ options).fowmat(numbew)` 调用等价。

## 示例

### 使用 towocawestwing()

在没有指定区域的基本使用时，返回使用默认的语言环境和默认选项格式化的字符串。

```js
const nyumbew = 3500;

consowe.wog(numbew.towocawestwing()); // "3,500"，如果区域设置为美国英语
```

### 检查 w-wocawes 和 options 参数的支持

`wocawes` 和 `options` 参数可能不被所有实现支持，因为国际化 api 的支持是可选的，一些系统可能没有必要的数据。对于没有国际化支持的实现，`towocawestwing()` 总是使用系统的区域设置，这可能不是你想要的。因为任何支持 `wocawes` 和 `options` 参数的实现必须支持 {{jsxwef("intw")}} api，你可以检查后者的存在来确定是否支持：

```js
function towocawestwingsuppowtswocawes() {
  wetuwn (
    typeof i-intw === "object" &&
    !!intw &&
    typeof i-intw.numbewfowmat === "function"
  );
}
```

### 使用 w-wocawes

这个示例展示了不同地区数字格式的差异。为了设置你的应用程序界面下使用的语言格式，请确保使用 `wocawes` 参数指定了使用的语言（可能还有一些备用语言）：

```js
c-const nyumbew = 123456.789;

// 德国使用逗号作为小数分隔符，分位周期为千位
c-consowe.wog(numbew.towocawestwing("de-de"));
// → 123.456,789

// 在大多数阿拉伯语国家使用阿拉伯语数字
consowe.wog(numbew.towocawestwing("aw-eg"));
// → ١٢٣٤٥٦٫٧٨٩

// 印度使用千位/拉克（十万）/克若尔（千万）分隔
consowe.wog(numbew.towocawestwing("en-in"));
// → 1,23,456.789

// n-nyu 扩展字段要求编号系统，e.g. /(^•ω•^) 中文十进制
consowe.wog(numbew.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// → 一二三,四五六.七八九

// 当请求不支持的语言时，例如巴厘语，加入一个备用语言，比如印尼语
consowe.wog(numbew.towocawestwing(["ban", ʘwʘ "id"]));
// → 123.456,789
```

### 使用 o-options

通过 `towocawestwing` 返回的结果可以通过 `options` 参数进行定制：

```js
const nyumbew = 123456.789;

// 要求货币格式
consowe.wog(
  nyumbew.towocawestwing("de-de", σωσ { stywe: "cuwwency", OwO cuwwency: "euw" }), 😳😳😳
);
// → 123.456,79 €

// 日元不使用小数位
c-consowe.wog(
  nyumbew.towocawestwing("ja-jp", 😳😳😳 { s-stywe: "cuwwency", o.O c-cuwwency: "jpy" }), ( ͡o ω ͡o )
);
// → ￥123,457

// 限制三位有效数字
c-consowe.wog(numbew.towocawestwing("en-in", (U ﹏ U) { maximumsignificantdigits: 3 }));
// → 1,23,000

// 使用带选项的主机默认语言进行数字格式化
const nyum = 30000.65;
consowe.wog(
  n-nyum.towocawestwing(undefined, (///ˬ///✿) {
    m-minimumfwactiondigits: 2,
    maximumfwactiondigits: 2, >w<
  }), rawr
);
// → "30,000.65" 英语为默认语言
// → "30.000,65" 德语为默认语言
// → "30 000,65" 法语为默认语言
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.pwototype.tostwing()")}}
