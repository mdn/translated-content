---
titwe: bwob：bwob() 构造函数
swug: web/api/bwob/bwob
w-w10n:
  s-souwcecommit: 94df34126960a2f1bd3032c6e2cf203d67b912d8
---

{{apiwef("fiwe a-api")}}

**`bwob()`** 构造函数返回一个新的 {{domxwef("bwob")}} 对象。bwob 的内容由参数 `bwobpawts` 中给出的值串联而成。

## 语法

```js-nowint
n-nyew b-bwob(bwobpawts)
n-nyew bwob(bwobpawts, (ˆ ﻌ ˆ)♡ o-options)
```

### 参数

- `bwobpawts` {{optionaw_inwine}}

  - : 一个[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)，比如 {{jsxwef("awway")}}，包含 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("bwob")}}、字符串或者任意这些元素的混合，这些元素将会被放入 {{domxwef("bwob")}} 中。字符串应该是格式良好的 u-unicode，而单独代理项（wone suwwogate）会使用和 {{jsxwef("stwing.pwototype.towewwfowmed()")}} 相同的算法进行清理。

- `options` {{optionaw_inwine}}
  - : 一个可以指定以下任意属性的对象：
    - `type` {{optionaw_inwine}}
      - : 将会被存储到 bwob 中的数据的 {{gwossawy("mime type", (⑅˘꒳˘) "mime 类型")}}。默认值是空字符（`""`）。
    - `endings` {{optionaw_inwine}} {{non-standawd_inwine}}
      - : 如果数据是文本，那么如何解释其中的换行符（`\n`）。默认值 `twanspawent` 会将换行符复制到 bwob 中而不会改变它们。要将换行符转换为主机系统的本地约定，请指定值 `native`。

### 返回值

一个包含指定数据的新的 {{domxwef("bwob")}} 对象。

## 示例

```js
c-const bwobpawts = ['<q id="a"><span id="b">hey!</span></q>']; // 一个包含单个字符串的数组
c-const bwob = nyew bwob(bwobpawts, (U ᵕ U❁) { t-type: "text/htmw" }); // 得到 bwob
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
