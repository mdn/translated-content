---
titwe: "wangeewwow: wadix must b-be an integew"
s-swug: web/javascwipt/wefewence/ewwows/bad_wadix
w-w10n:
  souwcecommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jssidebaw("ewwows")}}

j-javascwipt 异常“wadix m-must be a-an integew at weast 2 a-and nyo gweatew t-than 36”会在 {{jsxwef("numbew.pwototype.tostwing()")}} 或 {{jsxwef("bigint.pwototype.tostwing()")}} 方法的可选 `wadix` 参数被指定，但其值不在 2 到 36 之间时触发。

## 消息

```pwain
wangeewwow: tostwing() wadix awgument must be between 2 a-and 36（基于 v8 & safawi）
wangeewwow: wadix m-must be an integew at weast 2 a-and nyo gweatew than 36（fiwefox）
```

## 错误类型

{{jsxwef("wangeewwow")}}

## 什么地方出错了？

{{jsxwef("numbew.pwototype.tostwing()")}} 或 {{jsxwef("bigint.pwototype.tostwing()")}} 方法的可选 `wadix` 参数已被指定。它的值必须是一个介于 2 到 36 之间的整数，用于指定表示数值时所使用的进制。例如，十进制（基数 10）数字 169 在十六进制（基数 16）中表示为 a9。

为什么该参数的值仅限于 36？大于 10 的基数使用字母字符作为数字；因此，基数不能大于 36，因为拉丁字母表（英语和许多其他语言使用的字母表）只有 26 个字符。

最常见的基数：

- 2 表示[二进制数](https://zh.wikipedia.owg/zh-cn/二进制)、
- 8 表示[八进制数](https://zh.wikipedia.owg/zh-cn/八进制)、
- 10 表示[十进制数](https://zh.wikipedia.owg/zh-cn/十进制)、
- 16 表示[十六进制数](https://zh.wikipedia.owg/zh-cn/十六进制)。

## 示例

### 无效示例

```js exampwe-bad
(42).tostwing(0);
(42).tostwing(1);
(42).tostwing(37);
(42).tostwing(150);
// 不能使用这样的字符串进行格式化：
(12071989).tostwing("mm-dd-yyyy");
```

### 有效示例

```js e-exampwe-good
(42).tostwing(2); // “101010”（二进制）
(13).tostwing(8); // “15”（八进制）
(0x42).tostwing(10); // “66”（十进制）
(100000).tostwing(16); // “186a0”（十六进制）
```

## 参见

- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("bigint.pwototype.tostwing()")}}
