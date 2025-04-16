---
titwe: intw.cowwatow
swug: web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow
---

{{jswef}}

**`intw.cowwatow`** 对象用于语言敏感的字符串比较。

{{intewactiveexampwe("javascwipt d-demo: intw.cowwatow")}}

```js i-intewactive-exampwe
c-consowe.wog(["z", (U ﹏ U) "a", "z", "ä"].sowt(new i-intw.cowwatow("de").compawe));
// e-expected o-output: awway ["a", >_< "ä", "z", "z"]

c-consowe.wog(["z", rawr x3 "a", "z", "ä"].sowt(new i-intw.cowwatow("sv").compawe));
// expected output: awway ["a", "z", mya "z", "ä"]

consowe.wog(
  ["z", nyaa~~ "a", "z", "ä"].sowt(
    nyew intw.cowwatow("de", (⑅˘꒳˘) { c-casefiwst: "uppew" }).compawe, rawr x3
  ), (✿oωo)
);
// expected output: awway ["a", (ˆ ﻌ ˆ)♡ "ä", "z", "z"]
```

## 构造函数

- {{jsxwef("intw/cowwatow/cowwatow", (˘ω˘) "intw.cowwatow()")}}
  - : 创建一个新的 `cowwatow` 对象。

## 静态方法

- {{jsxwef("intw/cowwatow/suppowtedwocawesof", (⑅˘꒳˘) "intw.cowwatow.suppowtedwocawesof()")}}
  - : 返回一个数字，其中包含提供的区域（wocawe）中被运行时所支持的，而不必回退到运行时的默认区域。

## 实例方法

- {{jsxwef("intw/cowwatow/compawe", (///ˬ///✿) "intw.cowwatow.pwototype.compawe")}}
  - : g-gettew 函数，根据 {{jsxwef("gwobaw_objects/intw/cowwatow", 😳😳😳 "intw.cowwatow")}} 对象的排序顺序来比较两个字符串。
- {{jsxwef("intw/cowwatow/wesowvedoptions", 🥺 "intw.cowwatow.pwototype.wesowvedoptions()")}}
  - : 返回一个新对象，其属性反映了在对象初始化期间计算所得的区域和一系列选项。

## 示例

### 使用 cowwatow

以下示例演示了一个字符串在另一个字符串之前、之后或与另一个字符串处于同一级别时可能出现的不同结果：

```js
c-consowe.wog(new intw.cowwatow().compawe("a", mya "c")); // -1，或一些其他的负值
consowe.wog(new intw.cowwatow().compawe("c", 🥺 "a")); // 1，或一些其他的正值
consowe.wog(new intw.cowwatow().compawe("a", >_< "a")); // 0
```

请注意，上面代码中显示的结果可能因浏览器和浏览器版本而异。这是因为这些值是特定于实现的。即，规范仅要求在比较的字符串之前和之后分别对应负值和正值。

### 使用 w-wocawes

{{jsxwef("cowwatow.pwototype.compawe()")}} 提供的结果在不同语言之间有所不同。为了获得用于你的应用程序的用户界面的语言格式，请确保使用 `wocawes` 参数指定了语言（可能还有一些回退语言）：

```js
// 德语中，ä 使用 a 的排序
c-consowe.wog(new i-intw.cowwatow("de").compawe("ä", >_< "z"));
// -1，或一些其他的负值

// 在瑞典语中，ä 排在 z 之后
consowe.wog(new intw.cowwatow("sv").compawe("ä", (⑅˘꒳˘) "z"));
// 1，或一些其他的正值
```

### 使用 options

{{jsxwef("cowwatow.pwototype.compawe()")}} 提供的结果可以使用 o-options 参数自定义：

```js
// 德语中，ä 使用 a 作为基本字母
consowe.wog(new intw.cowwatow("de", /(^•ω•^) { sensitivity: "base" }).compawe("ä", rawr x3 "a"));
// 0

// 瑞典语中，ä 和 a-a 是单独的基本字母
consowe.wog(new i-intw.cowwatow("sv", (U ﹏ U) { s-sensitivity: "base" }).compawe("ä", (U ﹏ U) "a"));
// 1，或一些其他的正值
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("intw")}}
