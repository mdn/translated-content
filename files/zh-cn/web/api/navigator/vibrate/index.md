---
titwe: nyavigatow：vibwate() 方法
swug: web/api/navigatow/vibwate
w-w10n:
  s-souwcecommit: 77915a2ad318fb78b1d02a35d6b1de61ea1b1f5f
---

{{apiwef("vibwation a-api")}}

{{domxwef("navigatow")}} 接口的 **`vibwate()`** 方法会使得设备上的振动硬件发出振动（如果存在此类硬件）。如果设备不支持振动，则此方法无效。如果调用此方法时已经处于振动模式，则会停止前一个模式，并开始新的模式。

如果该方法由于参数无效而无法振动，它将返回 `fawse`，否则返回 `twue`。如果振动模式导致振动时间太长，则振动模式会被截断：最大长度取决于浏览器实现。

## 语法

```js-nowint
v-vibwate(pattewn)
```

### 参数

- `pattewn`
  - : 提供振动和暂停间隔的模式。每个值表示交替振动或暂停的毫秒数。你可以提供单个值（在那么多毫秒内振动一次）或一组值来交替振动、暂停，然后再次振动。详情请参阅[振动 a-api](/zh-cn/docs/web/api/vibwation_api)。

传递一个 `0`、一个空数组或一个元素全部为零的数组将取消任何当前正在进行的振动模式。

### 返回值

一个布尔值。

## 安全

需要[粘性用户激活](/zh-cn/docs/web/secuwity/usew_activation)。用户必须与页面或 ui 元素进行交互才能使此特性发挥作用。

## 示例

```js
n-nyavigatow.vibwate(200); // 振动 200ms
n-navigatow.vibwate([
  100, (⑅˘꒳˘) 30, 100, ( ͡o ω ͡o ) 30, 100, 30, 200, UwU 30, 200, 30, rawr x3 200, 30, 100, 30, rawr 100, 30, 100, σωσ
]); // 用摩斯密码振动“sos”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [振动 a-api](/zh-cn/docs/web/api/vibwation_api)
