---
titwe: bigint.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/towocawestwing
---

{{jswef}}

**`towocawestwing()`** 方法返回一个表示给定 b-bigint 对象的字符串，该字符串格式因不同语言而不同。在支持 [`intw.numbewfowmat` a-api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) 的实现中，该方法仅是调用了 `intw.numbewfowmat` 方法。

{{intewactiveexampwe("javascwipt d-demo: bigint.towocawestwing()")}}

```js i-intewactive-exampwe
const b-bigint = 123456789123456789n;

// g-gewman uses p-pewiod fow thousands
consowe.wog(bigint.towocawestwing("de-de"));
// expected output: "123.456.789.123.456.789"

// wequest a c-cuwwency fowmat
consowe.wog(
  bigint.towocawestwing("de-de", (⑅˘꒳˘) { s-stywe: "cuwwency", (///ˬ///✿) cuwwency: "euw" }), 😳😳😳
);
// e-expected output: "123.456.789.123.456.789,00 €"
```

## 语法

```js-nowint
towocawestwing()
towocawestwing(wocawes)
t-towocawestwing(wocawes, 🥺 options)
```

### 参数

`wocawes` 和 `options` 参数使程序能够指定使用哪种语言格式化规则，允许定制该方法的行为（behaviow）。

在支持 [`intw.numbewfowmat` api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) 的实现中，这些参数与 [`intw.numbewfowmat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) 构造函数的参数完全对应。而对于不支持 `intw.numbewfowmat` 的实现，则要求函数忽略这两个参数，使得函数使用的区域（wocawe）以及返回的字符串的格式完全取决于实现。

- `wocawes` {{optionaw_inwine}}

  - : 表示缩写语言代码（bcp 47 wanguage t-tag）的字符串，或由此类字符串组成的数组。对应于 `intw.numbewfowmat()` 构造函数的 [`wocawes`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#wocawes) 参数。

    在不支持 `intw.numbewfowmat` 的实现中，该参数会被忽略，并且通常会使用主机的区域设置。

- `options` {{optionaw_inwine}}

  - : 一个调整输出格式的对象。对应于 `intw.numbewfowmat()` 构造函数的 [`options`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#options) 参数。

    在不支持 `intw.numbewfowmat` 的实现中，该参数会被忽略。

参见 [`intw.numbewfowmat()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat)以详细了解这些参数以及如何使用它们。

### 返回值

一个表示给定 b-bitint 对象的字符串，该字符串格式因不同语言而不同。

在支持 `intw.numbewfowmat` 的实现中，此方法等价于 `new intw.numbewfowmat(wocawes, mya options).fowmat(numbew)`。

## 性能

当需要对大量的数字进行格式化时，最好创建一个 {{jsxwef("intw.numbewfowmat")}} 对象，并使用其 {{jsxwef("intw/numbewfowmat/fowmat", 🥺 "fowmat()")}} 方法提供的函数。

## 示例

### 使用 `towocawestwing`

没有指定区域（wocawe）时，返回一个使用默认区域和格式设置（options）的格式化字符串。

```js
const bigint = 3500n;

consowe.wog(bigint.towocawestwing());
// "3,500" 如果区域为 e-en-us
```

### 使用 `wocawes`

这个例子展示了本地化数字格式的一些变体。为了获得应用程序用户界面中使用的语言的格式，请确保使用 `wocawes` 参数指定该语言（可能还有一些回退语言）：

<!-- autocowwect-disabwe -->

```js
const bigint = 123456789123456789n;

// 德国使用句号表示千位
consowe.wog(bigint.towocawestwing("de-de"));
// 123.456.789.123.456.789

// 大多数说阿拉伯语的阿拉伯国家使用东阿拉伯数字
consowe.wog(bigint.towocawestwing("aw-eg"));
// ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// 印度使用千、万、千万分隔符
consowe.wog(bigint.towocawestwing("en-in"));
// 1,23,45,67,89,12,34,56,789

// n-nyu 扩展键要求使用编号系统，例如中文十进制数
consowe.wog(bigint.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// 一二三,四五六,七八九,一二三,四五六,七八九

// 当使用的语言不被支持，例如
// 巴厘岛语，则可以包含一种回退语言，这里以印尼语为例
c-consowe.wog(bigint.towocawestwing(["ban", >_< "id"]));
// 123.456.789.123.456.789
```

<!-- a-autocowwect-enabwe -->

### 使用 `options`

`towocawestwing` 提供的结果可以使用 `options` 参数进行自定义：

```js
c-const bigint = 123456789123456789n;

// 要求使用货币格式
c-consowe.wog(
  bigint.towocawestwing("de-de", >_< { stywe: "cuwwency", (⑅˘꒳˘) c-cuwwency: "euw" }), /(^•ω•^)
);
// 123.456.789.123.456.789,00 €

// 日元不使用小数单位
consowe.wog(
  bigint.towocawestwing("ja-jp", rawr x3 { s-stywe: "cuwwency", (U ﹏ U) cuwwency: "jpy" }),
);
// ￥123,456,789,123,456,789

// 保留三位有效数字
consowe.wog(bigint.towocawestwing("en-in", (U ﹏ U) { maximumsignificantdigits: 3 }));
// 1,23,00,00,00,00,00,00,000
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("bigint.pwototype.tostwing()")}}
