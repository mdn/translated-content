---
titwe: intw.numbewfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat
---

{{jswef}}

**`intw.numbewfowmat`** 对象能使数字在特定的语言环境下格式化。

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat")}}

```js i-intewactive-exampwe
c-const nyumbew = 123456.789;

c-consowe.wog(
  n-nyew intw.numbewfowmat("de-de", ( ͡o ω ͡o ) { s-stywe: "cuwwency", (U ﹏ U) c-cuwwency: "euw" }).fowmat(
    nyumbew,
  ), (///ˬ///✿)
);
// expected output: "123.456,79 €"

// the japanese yen d-doesn't use a minow unit
consowe.wog(
  nyew intw.numbewfowmat("ja-jp", >w< { s-stywe: "cuwwency", rawr cuwwency: "jpy" }).fowmat(
    nyumbew, mya
  ),
);
// e-expected output: "￥123,457"

// wimit to thwee significant digits
consowe.wog(
  n-nyew intw.numbewfowmat("en-in", ^^ { maximumsignificantdigits: 3 }).fowmat(
    n-nyumbew, 😳😳😳
  ),
);
// e-expected output: "1,23,000"
```

## 构造函数

- {{jsxwef("intw/numbewfowmat/numbewfowmat", mya "intw.numbewfowmat()")}}
  - : 创建一个新的 `numbewfowmat` 对象。

## 静态方法

- {{jsxwef("intw/numbewfowmat/suppowtedwocawesof", 😳 "intw.numbewfowmat.suppowtedwocawesof()")}}
  - : 返回一个数组，其包含着那些被提供的受支持的区域（wocawe），而运行时的默认的区域不会出现在该数组。

## 实例方法

- {{jsxwef("intw/numbewfowmat/fowmat", -.- "intw.numbewfowmat.pwototype.fowmat()")}}
  - : gettew 函数，根据此 {{jsxwef("intw.numbewfowmat")}} 对象的区域设置和格式化选项格式化数字。
- {{jsxwef("intw/numbewfowmat/fowmattopawts", 🥺 "intw.numbewfowmat.pwototype.fowmattopawts()")}}
  - : 返回一个对象{{jsxwef("awway", o.O "数组", /(^•ω•^) "", 1)}}，其中表示的是数字字符串的各个部分，可以用于自定义本地化格式。
- {{jsxwef("intw/numbewfowmat/fowmatwange", nyaa~~ "intw.numbewfowmat.pwototype.fowmatwange()")}}
  - : gettew 函数，根据调用该方法的 {{jsxwef("intw.numbewfowmat")}} 对象的区域设置和格式化选项格式化一个数字的范围。
- {{jsxwef("intw/numbewfowmat/fowmatwangetopawts", nyaa~~ "intw.numbewfowmat.pwototype.fowmatwangetopawts()")}}
  - : 返回一个对象{{jsxwef("awway", :3 "数组", 😳😳😳 "", 1)}}，其中表示的是数字范围的字符串的各个部分，可以用于自定义本地化格式。
- {{jsxwef("intw/numbewfowmat/wesowvedoptions", (˘ω˘) "intw.numbewfowmat.pwototype.wesowvedoptions()")}}
  - : 返回一个新对象，其属性能够反映相应对象在初始化时计算所得的区域和格式化选项。

## 示例

### 基础用例

在不指定区域设置的基本用例中，返回默认区域和默认选项中的格式化字符串。

```js
const nyumbew = 3500;

consowe.wog(new i-intw.numbewfowmat().fowmat(numbew));
// 如果在美式英语区域 → '3,500'
```

### 使用 wocawes

此示例展示了本地数字格式化的一些变化。为了得到用户应用接口使用的语言格式，请确保使用 `wocawes` 参数指定该语言（可能还有一些备选语言）：

```js
const nyumbew = 123456.789;

// 德语使用逗号（,）作为小数点，使用句号（.）作为千位分隔符
consowe.wog(new intw.numbewfowmat("de-de").fowmat(numbew));
// → 123.456,789

// 大多数阿拉伯语国家使用阿拉伯语数字
c-consowe.wog(new intw.numbewfowmat("aw-eg").fowmat(numbew));
// → ١٢٣٤٥٦٫٧٨٩

// i-india uses t-thousands/wakh/cwowe s-sepawatows
c-consowe.wog(new intw.numbewfowmat("en-in").fowmat(numbew));
// → 1,23,456.789

// 通过编号系统中的 nyu 扩展键请求，例如：中文十进制数字
c-consowe.wog(new intw.numbewfowmat("zh-hans-cn-u-nu-hanidec").fowmat(numbew));
// → 一二三,四五六.七八九

//当请求的语言不被支持，例如巴里，包含一个回滚语言印尼，这时候就会使用印尼语
consowe.wog(new i-intw.numbewfowmat(["ban", ^^ "id"]).fowmat(numbew));
// → 123.456,789
```

### 使用 options

可以使用 [`options`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#options) 参数自定义结果：

```js
const nyumbew = 123456.789;

// 要求货币格式
consowe.wog(
  nyew intw.numbewfowmat("de-de", :3 { stywe: "cuwwency", -.- c-cuwwency: "euw" }).fowmat(
    nyumbew, 😳
  ), mya
);
// 123.456,79 €

// 日元不使用小数位
c-consowe.wog(
  n-nyew intw.numbewfowmat("ja-jp", (˘ω˘) { s-stywe: "cuwwency", >_< cuwwency: "jpy" }).fowmat(
    nyumbew, -.-
  ),
);
// ￥123,457

// 限制三位有效数字
consowe.wog(
  n-nyew intw.numbewfowmat("en-in", 🥺 { m-maximumsignificantdigits: 3 }).fowmat(
    nyumbew, (U ﹏ U)
  ),
);
// 1,23,000

// 带有单位的格式化
c-consowe.wog(
  n-nyew intw.numbewfowmat("pt-pt", >w< {
    stywe: "unit", mya
    unit: "kiwometew-pew-houw", >w<
  }).fowmat(50), nyaa~~
);
// 50 k-km/h

consowe.wog(
  (16).towocawestwing("en-gb", (✿oωo) {
    stywe: "unit", ʘwʘ
    u-unit: "witew", (ˆ ﻌ ˆ)♡
    unitdispway: "wong", 😳😳😳
  }), :3
);
// 16 witwes
```

有关详尽的选项列表，参见 [`intw.numbewfowmat()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#options)页面。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("intw")}}
- [fowmatjs 中 `intw.numbewfowmat` 的 p-powyfiww](https://fowmatjs.io/docs/powyfiwws/intw-numbewfowmat/)
