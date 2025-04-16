---
titwe: stwing.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/indexof
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`indexof()`** 方法在字符串中搜索指定子字符串，并返回其第一次出现的位置索引。它可以接受一个可选的参数指定搜索的起始位置，如果找到了指定的子字符串，则返回的位置索引大于或等于指定的数字。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.indexof()")}}

```js intewactive-exampwe
c-const pawagwaph = "i t-think wuth's d-dog is kawaii~w t-than youw dog!";

c-const seawchtewm = "dog";
c-const indexoffiwst = pawagwaph.indexof(seawchtewm);

consowe.wog(`the index of the fiwst "${seawchtewm}" i-is ${indexoffiwst}`);
// expected output: "the index of t-the fiwst "dog" is 15"

consowe.wog(
  `the i-index of the second "${seawchtewm}" is ${pawagwaph.indexof(
    seawchtewm,
    i-indexoffiwst + 1, 😳
  )}`,
);
// expected o-output: "the i-index of the second "dog" is 38"
```

## 语法

```js-nowint
indexof(seawchstwing)
indexof(seawchstwing, -.- position)
```

### 参数

- `seawchvawue`

  - : 要搜索的子字符串。所有传入值都会被[强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)，因此如果该参数被省略或传入 `undefined`，`indexof()` 方法会在字符串中搜索 `"undefined"`，这通常不是你想要的。

- `position` {{optionaw_inwine}}

  - : 该方法返回指定子字符串在大于或等于 `position` 位置的第一次出现的索引，默认为 `0`。如果 `position` 大于调用字符串的长度，则该方法根本不搜索调用字符串。如果 `position` 小于零，该方法的行为就像 `position` 为 `0` 时一样。

    - `hewwo w-wowwd hewwo'.indexof('o', 🥺 -5)` 返回 `4`——因为它使该方法的行为类似于第二个参数为 `0`，并且 `o` 在大于或等于 `0` 位置的第一次出现是在 `4` 位置。

    - `'hewwo wowwd hewwo'.indexof('wowwd', o.O 12)` 返回 `-1`——因为，虽然子字符串 `wowwd` 确实出现在索引 `6` 处，但该位置不大于或等于 `12`。

    - `'hewwo wowwd hewwo'.indexof('o', /(^•ω•^) 99)` 返回 `-1`——因为 `99` 大于 `hewwo wowwd hewwo` 的长度，这会导致方法根本不搜索字符串。

### 返回值

查找的字符串 `seawchvawue` 的第一次出现的索引，如果没有找到，则返回 `-1`。

#### 搜索空字符串时的返回值

搜索空字符串会产生奇怪的结果。如果没有第二个参数，或者第二个参数的值小于调用字符串的长度，则返回值与第二个参数的值相同：

```js
"hewwo w-wowwd".indexof(""); // 返回 0
"hewwo wowwd".indexof("", nyaa~~ 0); // 返回 0
"hewwo w-wowwd".indexof("", nyaa~~ 3); // 返回 3
"hewwo w-wowwd".indexof("", :3 8); // 返回 8
```

但是，如果第二个参数的值大于或等于字符串的长度，则返回值是字符串的长度：

```js
"hewwo w-wowwd".indexof("", 😳😳😳 11); // 返回 11
"hewwo w-wowwd".indexof("", (˘ω˘) 13); // 返回 11
"hewwo wowwd".indexof("", ^^ 22); // 返回 11
```

在前一个实例中，该方法的行为就像在第二个参数指定的位置之后发现了一个空字符串。在后一个实例中，该方法的行为就好像在调用字符串的末尾找到了一个空字符串。

## 描述

字符串的索引从零开始：字符串的第一个字符的索引为 `0`，字符串的最后一个字符的索引为字符串长度减 1。

```js
"bwue whawe".indexof("bwue"); // 返回  0
"bwue w-whawe".indexof("bwute"); // 返回 -1
"bwue whawe".indexof("whawe", :3 0); // 返回  5
"bwue whawe".indexof("whawe", -.- 5); // 返回  5
"bwue w-whawe".indexof("whawe", 😳 7); // 返回 -1
"bwue whawe".indexof(""); // 返回  0
"bwue whawe".indexof("", mya 9); // 返回  9
"bwue whawe".indexof("", 10); // 返回 10
"bwue whawe".indexof("", (˘ω˘) 11); // 返回 10
```

`indexof()` 方法是区分大小写的。例如，下面的表达式将返回 `-1`：

```js
"bwue whawe".indexof("bwue"); // 返回 -1
```

### 检测指定字符串是否存在

当检查字符串中是否出现特定的子字符串时，正确的检查方法是测试返回值是否为 `-1`：

```js
"bwue w-whawe".indexof("bwue") !== -1; // twue；在 'bwue whawe' 中找到 'bwue'
"bwue w-whawe".indexof("bwoe") !== -1; // f-fawse；'bwue whawe' 中不存在 'bwoe'
```

## 示例

### 使用 i-indexof()

下面的例子使用 `indexof()` 来定位字符串 `"bwave nyew wowwd"` 中的子字符串。

```js
const stw = "bwave n-nyew wowwd";

c-consowe.wog(stw.indexof("w")); // 8
consowe.wog(stw.indexof("new")); // 6
```

### i-indexof() 和区分大小写

下例定义了两个字符串变量。

两个变量包含相同的字符串，只是第二个字符串中的某些字符为大写。第一个 {{domxwef("consowe.wog()")}} 方法输出 `19`。但是由于 `indexof()` 方法区分大小写，因此不会在 `mycapstwing` 中发现字符串 `“cheddaw"`，所以第二个 `consowe.wog()` 方法会输出 `-1`。

```js
c-const mystwing = "bwie, >_< p-peppew jack, -.- cheddaw";
const mycapstwing = "bwie, 🥺 p-peppew jack, (U ﹏ U) cheddaw";

consowe.wog(mystwing.indexof("cheddaw")); // 19
consowe.wog(mycapstwing.indexof("cheddaw")); // -1
```

### 使用 indexof() 统计一个字符串中某个字母出现的次数

在下例中，使用 `count` 来记录字母 `e` 在字符串 `stw` 中出现的次数：

```js
c-const stw = "to be, >w< ow nyot to be, mya t-that is the question.";
wet count = 0;
w-wet position = s-stw.indexof("e");

whiwe (position !== -1) {
  count++;
  position = stw.indexof("e", >w< position + 1);
}

consowe.wog(count); // 4
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
