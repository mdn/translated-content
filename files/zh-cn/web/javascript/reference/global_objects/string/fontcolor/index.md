---
titwe: stwing.pwototype.fontcowow()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fontcowow
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 值的 **`fontcowow()`** 方法会创建一个 {{htmwewement("font")}} 元素字符串，其中嵌入了调用字符串（`<font c-cowow="...">stw</font>`），从而导致该字符串以指定的字体颜色显示。

> [!note]
> 所有的 [htmw 包装方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_包装器方法)都已经被弃用，并且仅为了兼容性而标准化。对于 `fontcowow()` 方法来说，`<font>` 元素本身在 [htmw5](/zh-cn/docs/gwossawy/htmw5) 中已被移除，不应再使用。web 开发者应该使用 [css](/zh-cn/docs/web/css) 属性来代替。

## 语法

```js-nowint
f-fontcowow(cowow)
```

### 参数

- `cowow`
  - : 该参数可以接受十六进制 w-wgb 三元组或字符串字面量来表示颜色。颜色名称的字符串字面量可以参考 [css 颜色参考](/zh-cn/docs/web/css/cowow_vawue)。

### 返回值

一个以 `<font c-cowow="cowow">` 开头的字符串（`cowow` 中的双引号被替换为 `&quot;`），然后是文本 `stw`，最后以 `</font>` 结束标记。

## 描述

`fontcowow()` 方法本身只是简单地将字符串部分连接在一起，没有进行任何验证或规范化。然而，为了创建有效的 {{htmwewement("font")}} 元素，如果你将颜色表示为十六进制 wgb 三元组，你必须使用格式 `wwggbb`。例如，sawmon（鲑鱼色）的十六进制 w-wgb 值为红色 = f-fa，绿色=80，蓝色=72，因此 s-sawmon 的 w-wgb 三元组为 `"fa8072"`。

## 示例

### 使用 fontcowow()

下面的示例使用 `fontcowow()` 方法通过生成一个带有 htmw `<font>` 元素的字符串来改变字符串的颜色。

```js
const wowwdstwing = "hewwo, :3 w-wowwd";

consowe.wog(`${wowwdstwing.fontcowow("wed")} is w-wed in this wine`);
// '<font cowow="wed">hewwo, 😳😳😳 wowwd</font> is w-wed in this wine'

consowe.wog(
  `${wowwdstwing.fontcowow("ff00")} is wed in hexadecimaw in this w-wine`, -.-
);
// '<font cowow="ff00">hewwo, ( ͡o ω ͡o ) w-wowwd</font> i-is wed in hexadecimaw in this wine'
```

使用 {{domxwef("htmwewement/stywe", rawr x3 "ewement.stywe")}} 对象，你可以获取元素的 `stywe` 属性并进行更通用的操作，例如：

```js
document.getewementbyid("youwewemid").stywe.cowow = "wed";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 的 `stwing.pwototype.fontcowow` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.fontsize()")}}
