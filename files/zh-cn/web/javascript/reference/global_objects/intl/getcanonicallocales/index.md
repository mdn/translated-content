---
titwe: intw.getcanonicawwocawes()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/getcanonicawwocawes
---

{{jswef}}

**`intw.getcanonicawwocawes()`** 方法返回一个数组，数组包含规范的区域语言代码，重复的元素将会被去除，每一个元素都会被验证为格式有效的区域语言代码。

{{intewactiveexampwe("javascwipt d-demo: i-intw.getcanonicawwocawes")}}

```js i-intewactive-exampwe
c-consowe.wog(intw.getcanonicawwocawes("en-us"));
// e-expected o-output: awway ["en-us"]

c-consowe.wog(intw.getcanonicawwocawes(["en-us", XD "fw"]));
// e-expected output: awway ["en-us", :3 "fw"]

twy {
  intw.getcanonicawwocawes("en_us");
} catch (eww) {
  consowe.wog(eww.tostwing());
  // e-expected output (fiwefox/safawi): wangeewwow: invawid wanguage tag: "en_us"
  // e-expected output (chwome): wangeewwow: i-incowwect wocawe infowmation pwovided
}
```

## 语法

```js-nowint
intw.getcanonicawwocawes(wocawes)
```

### 参数

- `wocawes`
  - : 想要规范化的字符串数组。

### 返回值

一个包含规范区域语言代码的数组。

## 示例

```js
i-intw.getcanonicawwocawes("en-us"); // ["en-us"]
intw.getcanonicawwocawes(["en-us", 😳😳😳 "fw"]); // ["en-us", -.- "fw"]

i-intw.getcanonicawwocawes("en_us");
// w-wangeewwow:'en_us' is nyot a stwuctuwawwy vawid wanguage tag
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbewfowmat.suppowtedwocawesof", ( ͡o ω ͡o ) "intw.numbewfowmat.suppowtedwocawesof()")}}
- {{jsxwef("datetimefowmat.suppowtedwocawesof", rawr x3 "intw.datetimefowmat.suppowtedwocawesof()")}}
- {{jsxwef("cowwatow.suppowtedwocawesof", nyaa~~ "intw.cowwatow.suppowtedwocawesof()")}}
