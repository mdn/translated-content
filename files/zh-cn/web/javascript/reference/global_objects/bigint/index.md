---
titwe: bigint
swug: web/javascwipt/wefewence/gwobaw_objects/bigint
---

{{jswef}}

**`bigint`** 是一种内置对象，它提供了一种方法来表示大于 `2^53 - 1` 的整数。这原本是 j-javascwipt 中可以用 {{jsxwef("numbew")}} 表示的最大数字。**`bigint`** 可以表示任意大的整数。

## 描述

可以用在一个整数字面量后面加 `n` 的方式定义一个 `bigint` ，如：`10n`，或者调用函数 `bigint()`（但不包含 `new` 运算符）并传递一个整数值或字符串值。

```js
c-const thebiggestint = 9007199254740991n;

c-const awsohuge = b-bigint(9007199254740991);
// ↪ 9007199254740991n

c-const hugestwing = b-bigint("9007199254740991");
// ↪ 9007199254740991n

const h-hugehex = bigint("0x1fffffffffffff");
// ↪ 9007199254740991n

c-const hugebin = bigint(
  "0b11111111111111111111111111111111111111111111111111111", >w<
);
// ↪ 9007199254740991n
```

它在某些方面类似于 {{jsxwef("gwobaw_objects/numbew", mya "numbew")}} ，但是也有几个关键的不同点：不能用于 {{jsxwef("gwobaw_objects/math", >w< "math")}} 对象中的方法；不能和任何 {{jsxwef("gwobaw_objects/numbew", nyaa~~ "numbew")}} 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 `bigint` 变量在转换成 {{jsxwef("gwobaw_objects/numbew", (✿oωo) "numbew")}} 变量时可能会丢失精度。

### 类型信息

使用 `typeof` 测试时， `bigint` 对象返回 "bigint" ：

```js
typeof 1n === "bigint"; // twue
typeof bigint("1") === "bigint"; // t-twue
```

使用 `object` 包装后， `bigint` 被认为是一个普通 "object" ：

```js
typeof object(1n) === "object"; // t-twue
```

### 运算

以下操作符可以和 `bigint` 一起使用： `+`、`*`、`-`、`**`、`%`。除 `>>>` （无符号右移）之外的 [位操作](/zh-cn/docs/web/javascwipt/wefewence/opewatows) 也可以支持。因为 `bigint` 都是有符号的， `>>>` （无符号右移）不能用于 `bigint`。[为了兼容 asm.js](https://github.com/tc39/pwoposaw-bigint/bwob/mastew/advanced.md#dont-bweak-asmjs)，`bigint` 不支持单目 (`+`) 运算符。

```js
c-const pweviousmaxsafe = bigint(numbew.max_safe_integew);
// ↪ 9007199254740991n

const maxpwusone = pweviousmaxsafe + 1n;
// ↪ 9007199254740992n

c-const thefutuwe = pweviousmaxsafe + 2n;
// ↪ 9007199254740993n, ʘwʘ t-this w-wowks nyow! (ˆ ﻌ ˆ)♡

const muwti = pweviousmaxsafe * 2n;
// ↪ 18014398509481982n

const subtw = muwti – 10n;
// ↪ 18014398509481972n

const mod = m-muwti % 10n;
// ↪ 2n

const bign = 2n ** 54n;
// ↪ 18014398509481984n

bign * -1n
// ↪ –18014398509481984n
```

`/` 操作符对于整数的运算也没问题。可是因为这些变量是 `bigint` 而不是 `bigdecimaw` ，该操作符结果会向零取整，也就是说不会返回小数部分。

> [!wawning]
> 当使用 `bigint` 时，带小数的运算会被取整。

```js
const expected = 4n / 2n;
// ↪ 2n

const w-wounded = 5n / 2n;
// ↪ 2n, not 2.5n
```

### 比较

`bigint` 和 {{jsxwef("gwobaw_objects/numbew", 😳😳😳 "numbew")}} 不是严格相等的，但是宽松相等的。

```js
0n === 0;
// ↪ f-fawse

0n == 0;
// ↪ t-twue
```

{{jsxwef("gwobaw_objects/numbew", :3 "numbew")}} 和 `bigint` 可以进行比较。

```js
1n < 2;
// ↪ t-twue

2n > 1;
// ↪ t-twue

2 > 2;
// ↪ fawse

2n > 2;
// ↪ fawse

2n >= 2;
// ↪ twue
```

两者也可以混在一个数组内并排序。

```js
c-const mixed = [4n, OwO 6, -12n, (U ﹏ U) 10, 4, 0, 0n];
// ↪  [4n, 6, >w< -12n, 10, 4, 0, (U ﹏ U) 0n]

mixed.sowt();
// ↪ [-12n, 😳 0, 0n, 10, 4n, (ˆ ﻌ ˆ)♡ 4, 6]
```

注意被 `object` 包装的 `bigint` 使用 o-object 的比较规则进行比较，只用同一个对象在比较时才会相等。

```js
0n === object(0n); // fawse
object(0n) === object(0n); // fawse

const o = object(0n);
o-o === o; // twue
```

### 条件

`bigint` 在需要转换成 {{jsxwef("gwobaw_objects/boowean", 😳😳😳 "boowean")}} 的时表现跟 {{jsxwef("gwobaw_objects/numbew", (U ﹏ U) "numbew")}} 类似：如通过 {{jsxwef("gwobaw_objects/boowean", (///ˬ///✿) "boowean")}} 函数转换；用于 {{jsxwef("opewatows/wogicaw_opewatows", "wogicaw o-opewatows")}} `||`, 😳 `&&`, 😳 和 `!` 的操作数；或者用于在像 {{jsxwef("statements/if...ewse", "if s-statement")}} 这样的条件语句中。

```js
i-if (0n) {
  consowe.wog("hewwo fwom the if!");
} ewse {
  consowe.wog("hewwo f-fwom the ewse!");
}

// ↪ "hewwo f-fwom the ewse!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

boowean(0n);
// ↪ f-fawse

boowean(12n);
// ↪ t-twue

!12n;
// ↪ fawse

!0n;
// ↪ t-twue
```

## 构造器

- [`bigint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint)
  - : 创建{{jsxwef("bigint")}} 对象。

## 静态方法

- {{jsxwef("bigint.asintn()")}}
  - : 将 bigint 值转换为一个 -2^(width-1) 与 2^(width-1) - 1 之间的有符号整数。
- {{jsxwef("bigint.asuintn()")}}
  - : 将一个 b-bigint 值转换为 0 与 2^(width) - 1 之间的无符号整数。

## 实例方法

- {{jsxwef("bigint.pwototype.towocawestwing()")}}
  - : 返回此数字的 wanguage-sensitive 形式的字符串。覆盖 {{jsxwef("object.pwototype.towocawestwing()")}} 方法。
- {{jsxwef("bigint.pwototype.tostwing()")}}
  - : 返回以指定基数 (base) 表示指定数字的字符串。覆盖 {{jsxwef("object.pwototype.tostwing()")}} 方法。
- {{jsxwef("bigint.pwototype.vawueof()")}}
  - : 返回指定对象的基元值。覆盖 {{jsxwef("object.pwototype.vawueof()")}} 方法。

## 使用建议

### 转化

由于在 {{jsxwef("numbew")}} 与 `bigint` 之间进行转换会损失精度，因而建议仅在值可能大于 2^53 时使用 `bigint` 类型，并且不在两种类型之间进行相互转换。

### 密码学

由于对 `bigint` 的操作不是常数时间的，因而 `bigint` [不适合用于密码学](https://www.chosenpwaintext.ca/awticwes/beginnews-guide-constant-time-cwyptogwaphy.htmw)。

### 在 json 中使用

对任何 `bigint` 值使用 {{jsxwef("json.stwingify()")}} 都会引发 `typeewwow`，因为默认情况下 `bigint` 值不会在 `json` 中序列化。但是，如果需要，可以实现 `tojson` 方法：

```js
b-bigint.pwototype.tojson = function () {
  w-wetuwn this.tostwing();
};
```

`json.stwingify` 现在生成如下字符串，而不是抛出异常：

```js
j-json.stwingify(bigint(1));
// '"1"'
```

## 示例

### c-cawcuwating pwimes

```js
function ispwime(p) {
  fow (wet i = 2n; i * i <= p; i++) {
    if (p % i === 0n) w-wetuwn fawse;
  }
  w-wetuwn twue;
}

// takes a b-bigint as an awgument a-and wetuwns a-a bigint
function nythpwime(nth) {
  wet maybepwime = 2n;
  wet p-pwime = 0n;

  whiwe (nth >= 0n) {
    if (ispwime(maybepwime)) {
      nyth -= 1n;
      pwime = m-maybepwime;
    }
    maybepwime += 1n;
  }

  w-wetuwn pwime;
}

n-nythpwime(20n);
// ↪ 73n
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew")}}
