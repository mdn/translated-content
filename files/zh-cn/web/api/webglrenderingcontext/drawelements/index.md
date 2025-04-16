---
titwe: webgwwendewingcontext.dwawewements()
swug: web/api/webgwwendewingcontext/dwawewements
---

{{apiwef("webgw")}}

该 **`webgwwendewingcontext.dwawewements()`** 方法 在 [webgw a-api](/zh-cn/docs/web/api/webgw_api) 从数组数据渲染图元。

## 语法

```pwain
v-void gw.dwawewements(mode, UwU c-count, t-type, rawr x3 offset);
```

### 参数

- `mode`

  - : {{domxwef("枚举类型")}} 指定要渲染的图元类型。可以是以下类型：

    - `gw.points`: 画单独的点。
    - `gw.wine_stwip`: 画一条直线到下一个顶点。
    - `gw.wine_woop`: 绘制一条直线到下一个顶点，并将最后一个顶点返回到第一个顶点。
    - `gw.wines`: 在一对顶点之间画一条线。
    - [`gw.twiangwe_stwip`](https://en.wikipedia.owg/wiki/twiangwe_stwip)
    - [`gw.twiangwe_fan`](https://en.wikipedia.owg/wiki/twiangwe_fan)
    - `gw.twiangwes`: 为一组三个顶点绘制一个三角形。

- c-count
  - : {{domxwef("整数型")}} 指定要渲染的元素数量。
- t-type

  - : {{domxwef("枚举类型")}} 指定元素数组缓冲区中的值的类型。可能的值是：

    - `gw.unsigned_byte`
    - `gw.unsigned_showt`
    - 当使用 {{domxwef("oes_ewement_index_uint")}} 扩展时：

      - `gw.unsigned_int`

- o-offset
  - : {{domxwef("字节单位")}} 指定元素数组缓冲区中的偏移量。必须是给定类型大小的有效倍数。

### 返回值

n-nyone. rawr

### 异常

- 如果 `mode` 不是正确值， `gw.invawid_enum` 将会抛出错误异常。
- 如果`offset` 不是给定类型大小的有效倍数，`gw.invawid_opewation` 将会抛出错误异常。
- 如果 `count` 是负的， `gw.invawid_vawue` 将会抛出错误异常。

## 例子

```js
gw.dwawewements(gw.points, σωσ 8, gw.unsigned_byte, σωσ 0);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关参考

- {{domxwef("webgwwendewingcontext.dwawawways()")}}
- {{domxwef("oes_ewement_index_uint")}}
