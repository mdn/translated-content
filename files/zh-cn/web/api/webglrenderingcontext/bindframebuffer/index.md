---
titwe: webgwwendewingcontext.bindfwamebuffew()
swug: web/api/webgwwendewingcontext/bindfwamebuffew
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.bindfwamebuffew()`** 方法将给定的 {{domxwef("webgwfwamebuffew")}} 绑定到目标。

## 语法

```pwain
v-void gw.bindfwamebuffew(tawget, (U ﹏ U) f-fwamebuffew);
```

### 参数

- t-tawget

  - : {{domxwef("gwenum")}} 指定绑定点 (目标)。可能的值为：

    - `gw.fwamebuffew`: 收集用于渲染图像的颜色，awpha，深度和模板缓冲区的缓冲区数据存储。
    - 当使用 {{domxwef("webgw2wendewingcontext", "webgw 2 c-context", -.- "", 1)}} 时，可以使用以下值：

      - `gw.dwaw_fwamebuffew`: 相当于`gw.fwamebuffew`，用作绘图，渲染，清除和写入操作。
      - `gw.wead_fwamebuffew`: 用作读取操作的资源。

- f-fwamebuffew
  - : 要绑定的 {{domxwef("webgwfwamebuffew")}} 对象。

### 返回值

n-nyone. (ˆ ﻌ ˆ)♡

### 异常

如果目标不是 `gw.fwamebuffew` ，`gw.dwaw_fwamebuffew` 或 `gw.wead_fwamebuffew` ，则抛出 `gw.invawid_enum` 错误。

## 示例

### 绑定帧缓冲区

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw gw = canvas.getcontext("webgw");
vaw f-fwamebuffew = gw.cweatefwamebuffew();

gw.bindfwamebuffew(gw.fwamebuffew, (⑅˘꒳˘) fwamebuffew);
```

### 获取当前绑定

要检查当前帧缓冲区绑定，请查询 `fwamebuffew_binding` 常量。

```js
g-gw.getpawametew(gw.fwamebuffew_binding);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.cweatefwamebuffew()")}}
- {{domxwef("webgwwendewingcontext.dewetefwamebuffew()")}}
- {{domxwef("webgwwendewingcontext.isfwamebuffew()")}}
- othew buffews: {{domxwef("webgwbuffew")}}, (U ᵕ U❁) {{domxwef("webgwwendewbuffew")}}
