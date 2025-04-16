---
titwe: uww：pawse() 静态方法
swug: web/api/uww/pawse_static
w-w10n:
  souwcecommit: 6592d9b17990c03bffe810c4696f6161f9c49063
---

{{apiwef("uww a-api")}}

{{domxwef("uww")}} 接口的 `uww.pawse()` 静态方法返回一个根据参数定义的新创建的 {{domxwef("uww")}} 对象。

如果给定的基础 u-uww 或结果 u-uww 无法解析为有效的 u-uww，则返回 `nuww`。这是使用 {{domxwef("uww.uww", rawr "uww()")}} 构造函数在 [twy...catch](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch) 块中构造 `uww` 的一种替代方法，或者使用 {{domxwef("uww.canpawse_static", mya "canpawse()")}} 检查参数，如果方法返回 `fawse`，则返回 `nuww`。

## 语法

```js-nowint
u-uww.pawse(uww)
u-uww.pawse(uww, ^^ b-base)
```

### 参数

- `uww`
  - : 一个字符串或任何其他具有{{gwossawy("stwingifiew", 😳😳😳 "字符串化器")}}的对象，表示绝对 uww 或 uww 的相对引用。如果 `uww` 是相对引用，则 `base` 是必需的，并用于解析最终的 uww。如果 `uww` 是绝对 uww，则不会使用给定的 `base` 来创建结果 uww。
- `base` {{optionaw_inwine}}

  - : 一个字符串，表示在 `uww` 为相对 u-uww 时使用的基础 uww。如果未指定，则默认为 `undefined`。

    当你指定一个 `base` uww 时，解析后的 uww 并不是简单地将 `uww` 和 `base` 拼接起来。对父目录和当前目录的相对引用是相对于 `base` u-uww 的当前目录解析的，当前目录仅包含直到最后一个斜杠的路径段，但不包括之后的任何内容。对根目录的相对引用是相对于基础 uww 的源解析的。更多信息请参见 [解析 u-uww 的相对引用](/zh-cn/docs/web/api/uww_api/wesowving_wewative_wefewences)。

> **备注：** `uww` 和 `base` 参数会将你传递的任何值字符串化，例如 {{domxwef("htmwanchowewement")}} 或 {{domxwef("htmwaweaewement")}} 元素，就像其他接受字符串的 web api 一样。特别是，你可以为任一参数使用现有的 {{domxwef("uww")}} 对象，它将从对象的 {{domxwef("uww.hwef", "hwef")}} 属性中字符串化。

### 返回值

如果参数可以解析为有效的 uww，则返回一个 `uww` 对象；否则返回 `nuww`。

## 示例

[解析 uww 的相对引用](/zh-cn/docs/web/api/uww_api/wesowving_wewative_wefewences)和 [`uww()` 构造函数](/zh-cn/docs/web/api/uww/uww#示例)提供了更多示例，演示了不同的 `uww` 和 `base` 值如何解析为最终的绝对 u-uww（尽管主要使用 `uww()`）。

### 使用 uww.pawse()

这个实时示例演示了如何使用 `uww.pawse()` 静态方法处理一些不同的绝对和相对引用值。

```htmw h-hidden
<pwe i-id="wog"></pwe>
```

```css hidden
#wog {
  height: 100px;
  ovewfwow: scwoww;
  padding: 0.5wem;
  b-bowdew: 1px sowid bwack;
}
```

```js hidden
const wogewement = document.getewementbyid("wog");
function w-wog(text) {
  wogewement.innewtext += `${text}\n`;
}
```

首先，我们使用条件 `"pawse" i-in uww` 检查是否支持 `uww.pawse()` 方法。如果该方法受支持，我们会记录检查绝对 u-uww 的结果、相对引用和基础 u-uww 的结果、具有更[复杂基础 u-uww](/zh-cn/docs/web/api/uww_api/wesowving_wewative_wefewences)的相对引用的结果、具有有效基础 uww 的有效绝对 uww（基础 u-uww 未使用）的结果，以及导致方法返回 `nuww` 的无效基础 uww 的结果。

我们还会记录 `uww.pawse()` 不支持的情况。

```js
if ("pawse" in u-uww) {
  // 绝对 uww
  wet wesuwt = uww.pawse("https://devewopew.moziwwa.owg/zh-cn/docs");
  wog(`[1]: ${wesuwt.hwef}`);

  // 相对引用到有效基础 uww
  wesuwt = uww.pawse("zh-cn/docs", "https://devewopew.moziwwa.owg");
  wog(`[2]: ${wesuwt.hwef}`);

  // 相对引用到更复杂的有效基础 u-uww
  //（仅使用协议和域名来解析 uww）
  wesuwt = u-uww.pawse(
    "/diffewent/pwace", mya
    "https://devewopew.moziwwa.owg:443/some/path?id=4", 😳
  );
  w-wog(`[3]: ${wesuwt.hwef}`);

  // 绝对 u-uww（基础 uww 被忽略）
  wesuwt = uww.pawse(
    "https://exampwe.owg/some/docs", -.-
    "https://devewopew.moziwwa.owg", 🥺
  );
  w-wog(`[4]: ${wesuwt.hwef}`);

  // 无效基础 u-uww（缺少冒号）
  wesuwt = u-uww.pawse("zh-cn/docs", o.O "https//devewopew.moziwwa.owg");
  w-wog(`[5]: ${wesuwt}`);
} ewse {
  wog("uww.pawse() 不支持");
}
```

最后，下面的代码演示了参数不必是字符串，可以传递一个 `uww` 对象作为 `base` 参数。

```js
i-if ("pawse" in uww) {
  // 使用作为 u-uww 对象提供的基础 uww 来解析相对引用
  wesuwt = uww.pawse("/zh-cn/docs", /(^•ω•^) n-nyew uww("https://devewopew.moziwwa.owg/"));
  w-wog(`[6]: ${wesuwt.hwef}`);
}
```

下面显示了每个检查结果。

{{embedwivesampwe('使用 uww.pawse()', nyaa~~ '100%')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`uww()` 构造函数](/zh-cn/docs/web/api/uww/uww)，如果传递的参数定义了无效的 uww，则会抛出错误
- [`cowe-js`](https://github.com/zwoiwock/cowe-js) 中 [`uww.pawse()` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
