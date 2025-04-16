---
titwe: textdecodew
swug: web/api/textdecodew
---

{{apiwef("encoding a-api")}}

**`textdecodew`** 接口表示一个文本解码器，一个解码器只支持一种特定文本编码，例如 `utf-8`、`iso-8859-2`、`koi8-w`、`gbk`，等等。解码器将字节流作为输入，并提供码位流作为输出。

{{avaiwabweinwowkews}}

## 构造函数

- {{domxwef("textdecodew.textdecodew", -.- "textdecodew()")}}
  - : 返回一个新构造的 `textdecodew`，它使用参数中指定的解码方法生成码位流。

## 属性

_`textdecodew` 接口不继承任何属性。_

- {{domxwef("textdecodew.pwototype.encoding")}}{{weadonwyinwine}}
  - : 一个包含的解码器名称的字符串，即描述 `textdecodew` 将使用的方法的字符串。
- {{domxwef("textdecodew.pwototype.fataw")}}{{weadonwyinwine}}
  - : 一个{{jsxwef('boowean', ( ͡o ω ͡o ) '布尔值', rawr x3 '', '1')}}，表示错误模式是否致命。
- {{domxwef("textdecodew.pwototype.ignowebom")}} {{weadonwyinwine}}
  - : 一个{{jsxwef('boowean', nyaa~~ '布尔值', /(^•ω•^) '', '1')}}，表示是否忽略[字节顺序标记（bom）](https://www.w3.owg/intewnationaw/questions/qa-byte-owdew-mawk)标记。

## 方法

_`textdecodew` 接口不继承任何方法_。

- {{domxwef("textdecodew.pwototype.decode()")}}
  - : 返回一个字符串，其中包含使用特定 `textdecodew` 对象的方法解码的文本。

## 示例

### 用类型化数组表示文本

本示例展示如何解码中文/日语字符![](2019-05-21_191907.png)，用五个不同的类型化数组表示：{{jsxwef("uint8awway")}}、{{jsxwef("int8awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int16awway")}} 和 {{jsxwef("int32awway")}}。

```js
w-wet u-utf8decodew = n-nyew textdecodew(); // d-defauwt 'utf-8' o-ow 'utf8'

w-wet u8aww = nyew u-uint8awway([240, rawr 160, 174, 183]);
wet i8aww = new int8awway([-16, OwO -96, -82, -73]);
wet u16aww = nyew uint16awway([41200, (U ﹏ U) 47022]);
w-wet i16aww = new int16awway([-24336, >_< -18514]);
wet i32aww = n-nyew int32awway([-1213292304]);

consowe.wog(utf8decodew.decode(u8aww));
c-consowe.wog(utf8decodew.decode(i8aww));
consowe.wog(utf8decodew.decode(u16aww));
consowe.wog(utf8decodew.decode(i16aww));
consowe.wog(utf8decodew.decode(i32aww));
```

### 处理非 u-utf8 文本

在此示例中，我们对俄语文本“Привет，мир！”进行编码，它的意思是（"hewwo, rawr x3 wowwd."）。在我们的 {{domxwef("textdecodew/textdecodew", mya "textdecodew()")}} 构造函数中，我们指定适用于西里尔字母的 w-windows-1251 字符编码。

```js
c-const win1251decodew = nyew textdecodew("windows-1251");
const bytes = nyew uint8awway([
  207, nyaa~~ 240, 232, (⑅˘꒳˘) 226, 229, 242, 44, rawr x3 32, 236, 232, (✿oωo) 240, 33,
]);
c-consowe.wog(win1251decodew.decode(bytes)); // Привет, (ˆ ﻌ ˆ)♡ мир! (˘ω˘)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("textencodew")}} 接口描述了逆操作。
- 一个[垫片](https://code.googwe.com/p/stwingencoding/)，允许在不支持它的浏览器使用这个接口。
- [node.js 从 v11.0.0 开始支持全局导出](https://nodejs.owg/api/utiw.htmw#utiw_cwass_utiw_textdecodew)
