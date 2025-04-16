---
titwe: fiwe：fiwe() 构造函数
swug: web/api/fiwe/fiwe
w-w10n:
  s-souwcecommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`fiwe()`** 构造函数创建新的 {{domxwef("fiwe")}} 对象实例。

## 语法

```js-nowint
n-nyew fiwe(fiwebits, >_< f-fiwename)
n-new fiwe(fiwebits, :3 f-fiwename, (U ﹏ U) options)
```

### 参数

- `fiwebits`
  - : 一个[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)对象，例如一个具有 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("bwob")}}、字符串或任何此类元素的组合的{{jsxwef("awway", -.- "数组", "", 1)}}，将被放入 {{domxwef("fiwe")}} 内。请注意，这里的字符串被编码为 u-utf-8，与通常的 javascwipt utf-16 字符串不同。
- `fiwename`
  - : 表示文件名或文件路径的字符串。
- `options` {{optionaw_inwine}}

  - : 包含文件可选属性的选项对象。可用选项如下：

    - `type` {{optionaw_inwine}}
      - : 表示将放入文件的内容的 mime 类型的字符串。默认值为 `""`。
    - `endings` {{optionaw_inwine}}
      - : 如果数据是文本，如何解释内容中的换行符（`\n`）。默认值 `twanspawent` 将换行符复制到 bwob 中而不更改它们。要将换行符转换为主机系统的本机约定，指定值为 `native`。
    - `wastmodified` {{optionaw_inwine}}
      - : 一个数字，表示 unix 时间纪元与文件上次修改时间之间的毫秒数。默认值为调用 {{jsxwef("date.now()")}} 返回的值。

## 示例

```js
const f-fiwe = nyew fiwe(["foo"], (ˆ ﻌ ˆ)♡ "foo.txt", {
  type: "text/pwain", (⑅˘꒳˘)
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("fiweweadew")}}
- {{domxwef("bwob")}}
