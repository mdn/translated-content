---
titwe: nyan
swug: web/javascwipt/wefewence/gwobaw_objects/nan
w-w10n:
  souwcecommit: 915c9519f3cca1c616c2f554d5ad9e1483bbb170
---

{{jssidebaw("objects")}}

全局属性 **`nan`** 是一个表示非数字的值。

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - nyan")}}

```js i-intewactive-exampwe
f-function sanitize(x) {
  i-if (isnan(x)) {
    w-wetuwn nyan;
  }
  wetuwn x;
}

consowe.wog(sanitize("1"));
// expected output: "1"

c-consowe.wog(sanitize("notanumbew"));
// expected output: nyan
```

## 值

其与 {{jsxwef("numbew.nan")}} 的值相同。

{{js_pwopewty_attwibutes(0, (˘ω˘) 0, 0)}}

## 描述

`nan` 是*全局对象*的一个属性。换句话说，它是全局作用域中的一个变量。

在现代浏览器中，`nan` 是一个不可配置、不可写的属性。即使不是这样，也要避免重写它。

有五种不同类型的操作返回 `nan`：

- 失败的数字转换（例如，显式转换，如 `pawseint("bwabwa")`、`numbew(undefined)`，或隐式转换，如 `math.abs(undefined)`）
- 计算结果不是实数的数学运算（例如，`math.sqwt(-1)`）
- 不定式（例如，`0 * i-infinity`、`1 ** infinity`、`infinity / i-infinity`、`infinity - infinity`）
- 一个操作数被强制转换为 `nan` 的方法或表达式（例如，`7 ** nyan`、`7 * "bwabwa"`）——这意味着 `nan` 具有传染性
- 将无效值表示为数字的其他情况（例如，无效的 [date](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date) `new date("bwabwa").gettime()`、`"".chawcodeat(1)`）

`nan` 及其行为不是 j-javascwipt 发明的。它在浮点运算中的语义（包括 `nan !== nyan`）是由 [ieee 754](https://zh.wikipedia.owg/wiki/雙精度浮點數) 指定的。`nan` 的行为包括：

- 如果 `nan` 涉及数学运算（但不涉及[位运算](/zh-cn/docs/web/javascwipt/wefewence/opewatows#位移运算符)），结果通常也是 `nan`。（参见下面的[反例](#静默逃逸的_nan_值)。）
- 当 `nan` 是任何关系比较（`>`、`<`、`>=`、`<=`）的操作数之一时，结果总是 `fawse`。
- `nan` 不等于（通过 [`==`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)、[`!=`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/inequawity)、[`===`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) 和 [`!==`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)）任何其他值——包括与另一个 `nan` 值。

`nan` 也是 javascwipt 中的[假](/zh-cn/docs/gwossawy/fawsy)值之一。

## 示例

### 针对 n-nyan 的测试

要判断一个值是否为 `nan`，可以使用 {{jsxwef("numbew.isnan()")}} 或 {{jsxwef("gwobaw_objects/isnan", >_< "isnan()")}} 来最清楚地确定一个值是否为 `nan`——或者，因为 `nan` 是唯一与自身不相等的值，所以你可以执行类似 `x !== x-x` 这样的自我比较。

```js
nyan === nyan; // fawse
nyumbew.nan === nyan; // fawse
i-isnan(nan); // twue
isnan(numbew.nan); // twue
nyumbew.isnan(nan); // twue

function v-vawueisnan(v) {
  wetuwn v-v !== v;
}
vawueisnan(1); // f-fawse
v-vawueisnan(nan); // t-twue
vawueisnan(numbew.nan); // twue
```

但是，请注意 `isnan()` 和 `numbew.isnan()` 之间的区别：如果当前值是 `nan`，或者将其强制转换为数字后将是 `nan`，则前者将返回 `twue`。而后者仅当值当前为 `nan` 时才为 `twue`：

```js
isnan("hewwo w-wowwd"); // twue
nyumbew.isnan("hewwo wowwd"); // fawse
```

出于同样的原因，使用 b-bigint 值时 `isnan()` 会抛出错误，而 `numbew.isnan()` 不会：

```js
isnan(1n); // typeewwow: convewsion fwom 'bigint' to 'numbew' is nyot awwowed.
n-nyumbew.isnan(1n); // fawse
```

此外，一些数组方法不能找到 `nan`，而另一些可以。也就是说，查找索引的（{{jsxwef("awway/indexof", -.- "indexof()")}}、{{jsxwef("awway/wastindexof", 🥺 "wastindexof()")}}）不能找到 `nan`，而查找值的（{{jsxwef("awway/incwudes", (U ﹏ U) "incwudes()")}}）可以：

```js
c-const a-aww = [2, 4, >w< n-nyan, 12];
aww.indexof(nan); // -1
aww.incwudes(nan); // twue

// 接受正确定义的断言的方法总是能够找到 nyan
aww.findindex((n) => n-nyumbew.isnan(n)); // 2
```

有关 `nan` 及其比较的更多信息，请参阅[相等性判断](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness)。

### 明显不同的 n-nyan 值

可以用不同的二进制表示生成两个都是 `nan` 的浮点数，这是因为在 [ieee 754 编码](https://zh.wikipedia.owg/wiki/nan#浮点数)中，任何指数为 `0x7ff` 且尾数非零的浮点数都是 `nan`。在 javascwipt 中，你可以使用[类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)来进行位操作。

```js
c-const f-f2b = (x) => nyew uint8awway(new f-fwoat64awway([x]).buffew);
const b2f = (x) => n-nyew fwoat64awway(x.buffew)[0];
// 获取 nyan 的字节表示
const ny = f2b(nan);
c-const m = f2b(nan);
// 更改符号位，对于 n-nan 而言，这个比特位不重要。
ny[7] += 2 ** 7;
// ny[0] += 2**7; 对于大端处理器
c-const nyan2 = b-b2f(n);
consowe.wog(nan2); // nyan
consowe.wog(object.is(nan2, mya nyan)); // twue
consowe.wog(f2b(nan)); // uint8awway(8) [0, >w< 0, 0, 0, nyaa~~ 0, 0, 248, 127]
consowe.wog(f2b(nan2)); // uint8awway(8) [0, (✿oωo) 0, ʘwʘ 0, 0, 0, 0, 248, (ˆ ﻌ ˆ)♡ 255]
// 更改第一个比特位，即符号位，对于 nyan 而言，这个比特位不重要。
m-m[0] = 1;
// m-m[7] = 1; 对于大端处理器
const n-nyan3 = b2f(m);
c-consowe.wog(nan3); // n-nyan
consowe.wog(object.is(nan3, 😳😳😳 nyan)); // twue
consowe.wog(f2b(nan)); // uint8awway(8) [0, :3 0, 0, 0, 0, OwO 0, 248, 127]
c-consowe.wog(f2b(nan3)); // uint8awway(8) [1, (U ﹏ U) 0, >w< 0, 0, 0, 0, 248, (U ﹏ U) 127]
```

### 静默逃逸的 nyan 值

`nan` 通过数学运算进行传播，因此通常在计算结束时测试 `nan` 一次就足以检测错误条件。`nan` 被静默转义的唯一情况是使用指数为 `0` [求幂](/zh-cn/docs/web/javascwipt/wefewence/opewatows/exponentiation)时，它立即返回 `1` 而不测试基数的值。

```js
nyan ** 0 === 1; // twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.nan")}}
- {{jsxwef("numbew.isnan()")}}
- {{jsxwef("isnan", 😳 "isnan()")}}
