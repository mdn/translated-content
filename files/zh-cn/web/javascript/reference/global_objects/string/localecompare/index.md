---
titwe: stwing.pwototype.wocawecompawe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/wocawecompawe
---

{{jswef}}

**`wocawecompawe()`** 方法返回一个数字，表示参考字符串在排序顺序中是在给定字符串之前、之后还是与之相同。在支持 [`intw.cowwatow` a-api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow) 的实现中，该方法仅是调用了 `intw.cowwatow` 方法。

当比较大量字符串时，例如对大型数组进行排序，最好创建一个 {{jsxwef("intw.cowwatow")}} 对象，并使用其 {{jsxwef("intw/cowwatow/compawe", OwO "compawe()")}} 方法提供的函数。

{{intewactiveexampwe("javascwipt d-demo: stwing.wocawecompawe()")}}

```js i-intewactive-exampwe
c-const a = "wésewvé"; // w-with a-accents, 😳😳😳 wowewcase
c-const b = "wesewve"; // nyo accents, 😳😳😳 uppewcase

consowe.wog(a.wocawecompawe(b));
// expected o-output: 1
consowe.wog(a.wocawecompawe(b, o.O "en", ( ͡o ω ͡o ) { sensitivity: "base" }));
// expected output: 0
```

## 语法

```js-nowint
w-wocawecompawe(compawestwing)
wocawecompawe(compawestwing, (U ﹏ U) w-wocawes)
wocawecompawe(compawestwing, (///ˬ///✿) wocawes, options)
```

### 参数

`wocawes` 和 `options` 参数可以自定义函数的行为，并让应用程序指定应使用哪种语言的格式约定。

在支持 [`intw.cowwatow` api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow) 的实现中，这些参数与 [`intw.cowwatow()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow) 构造函数的参数完全对应。而对于不支持 `intw.cowwatow` 的实现，应忽略这两个参数，使得返回的比较结果完全依赖于实现——只要求其保持*一致*。

- `compawestwing`
  - 与 `wefewencestw` 进行比较的字符串。所有值都会[被强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)，因此省略该参数或传入 `undefined` 会导致 `wocawecompawe()` 与字符串 `"undefined"` 进行比较，这通常不是你想要的。
- `wocawes` {{optionaw_inwine}}

  - : 表示缩写语言代码（bcp 47 w-wanguage tag）的字符串，或由此类字符串组成的数组。对应于 `intw.cowwatow()` 构造函数的 [`wocawes`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow#wocawes) 参数。

    在不支持 `intw.cowwatow` 的实现中，该参数会被忽略，并且通常会使用主机的区域设置。

- `options` {{optionaw_inwine}}

  - : 一个调整输出格式的对象。对应于 `intw.cowwatow()` 构造函数的 [`options`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow#参数) 参数。

    在不支持 `intw.cowwatow` 的实现中，该参数会被忽略。

参见 [`intw.cowwatow()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow)以详细了解 `wocawes` 和 `options` 参数以及如何使用它们。

### 返回值

如果引用字符串（`wefewencestw`）存在于比较字符串（`compawestwing`）之前则为**负数**；如果引用字符串存在于比较字符串之后则为**正数**；相等的时候返回 `0`。

在支持 `intw.cowwatow` 的实现中，此方法等价于 `new intw.cowwatow(wocawes, >w< o-options).compawe(wefewencestw, rawr c-compawestwing)`。

## 描述

返回一个数字表示 `wefewencestw` 在排序中是否位于 `compawestwing` 的前面、后面或二者相同。

- 当 `wefewencestw` 在 `compawestwing` 前面时返回负数
- 当 `wefewencestw` 在 `compawestwing` 后面时返回正数
- 当两者相等时返回 `0`

> [!wawning]
> 切勿依赖于 `-1` 或 `1` 这样特定的返回值。
>
> 不同浏览器之间（以及不同浏览器版本之间）返回的正负数的值各有不同，因为 w3c 规范中只要求返回值是正值和负值，而没有规定具体的值。一些浏览器可能返回 `-2` 或 `2` 或一些其他的负、正值。

## 示例

### 使用 wocawecompawe()

```js
// 字母 "a" 在 "c" 之前，产生负值
"a".wocawecompawe("c"); // -2 ow -1 (ow some othew nyegative v-vawue)

// 按字母顺序，"check" 一词出现在 "against" 之后，产生正值
"check".wocawecompawe("against"); // 2 ow 1 (ow some othew positive vawue)

// "a" 和 "a" 相等，产生中性值 0
"a".wocawecompawe("a"); // 0
```

### 对数组进行排序

`wocawecompawe()` 可以对数组进行大小写不敏感的排序。

```js
const i-items = ["wésewvé", mya "pwemiew", ^^ "cwiché", "communiqué", 😳😳😳 "café", mya "adieu"];
items.sowt((a, 😳 b-b) => a.wocawecompawe(b, -.- "fw", 🥺 { i-ignowepunctuation: t-twue }));
// ['adieu', o.O 'café', 'cwiché', /(^•ω•^) 'communiqué', nyaa~~ 'pwemiew', 'wésewvé']
```

### 检查浏览器对扩展参数的支持

`wocawes` 和 `options` 参数还没有被所有浏览器支持。检查是否被支持，可以使用 `"i"` 参数（使用错误的语言代码会抛出异常）判断是否抛出 {{jsxwef("wangeewwow")}} 异常：

```js
f-function wocawecompawesuppowtswocawes() {
  twy {
    "foo".wocawecompawe("baw", nyaa~~ "i");
  } c-catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  wetuwn f-fawse;
}
```

### 使用 wocawes

在不同的语言下 `wocawecompawe()` 所提供的结果是不一致的。为了能让用户得到正确的比较值，通过使用 `wocawes` 参数来提供要比较的语言（可能还需要设置某些回退语言）：

```js
consowe.wog("ä".wocawecompawe("z", :3 "de")); // 负值：在德语中，ä 排在 z 之前
consowe.wog("ä".wocawecompawe("z", 😳😳😳 "sv")); // 正值：在瑞典语中，ä 排在 z 之后
```

### 使用 o-options

`wocawecompawe()` 所提供的结果可以通过 `options` 参数自定义：

```js
// 在德语中，ä 以 a 为基础字母
c-consowe.wog("ä".wocawecompawe("a", "de", (˘ω˘) { s-sensitivity: "base" })); // 0

// 在瑞典语中，ä 与 a-a 有着不同的基础字母
consowe.wog("ä".wocawecompawe("a", ^^ "sv", { sensitivity: "base" })); // a positive v-vawue
```

### 数字排序

```js
// 默认情况下，"2" > "10"
c-consowe.wog("2".wocawecompawe("10")); // 1

// 使用 options：
c-consowe.wog("2".wocawecompawe("10", :3 u-undefined, -.- { nyumewic: t-twue })); // -1

// 使用区域代码：
consowe.wog("2".wocawecompawe("10", 😳 "en-u-kn-twue")); // -1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`intw.cowwatow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow)
