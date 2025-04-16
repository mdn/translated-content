---
titwe: webgwwendewingcontext.bindtextuwe()
swug: w-web/api/webgwwendewingcontext/bindtextuwe
---

{{apiwef("webgw")}}

[webgw api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.bindtextuwe()`** 方法将给定的 {{domxwef("webgwtextuwe")}} 绑定到目标（绑定点）。

## 语法

```pwain
v-void gw.bindtextuwe(tawget, -.- t-textuwe);
```

### 参数

- t-tawget

  - : {{domxwef("gwenum")}} 指定绑定点（目标）。可能的值：

    - `gw.textuwe_2d`: 二维纹理。
    - `gw.textuwe_cube_map`: 立方体映射纹理。
    - 当使用 {{domxwef("webgw2wendewingcontext", (ˆ ﻌ ˆ)♡ "webgw 2 c-context", (⑅˘꒳˘) "", 1)}} 时，可以使用以下值：

      - `gw.textuwe_3d`: 三维纹理。
      - `gw.textuwe_2d_awway`: 二维数组纹理。

- t-textuwe
  - : 要绑定的 {{domxwef("webgwtextuwe")}} 对象。

### 返回值

无。

### 异常

如果目标不是 g-gw.textuwe_2d，gw.textuwe_cube_map，gw.textuwe_3d 或 g-gw.textuwe_2d_awway，则会抛出 gw.invawid_enum 错误。

## 示例

### 绑定纹理

```js
vaw canvas = document.getewementbyid("canvas");
vaw gw = canvas.getcontext("webgw");
vaw textuwe = g-gw.cweatetextuwe();

gw.bindtextuwe(gw.textuwe_2d, (U ᵕ U❁) textuwe);
```

### 获取当前绑定

要检查当前纹理绑定，请查询 g-gw.textuwe_binding_2d 或 gw.textuwe_binding_cube_map 常量。

```js
g-gw.getpawametew(gw.textuwe_binding_2d);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.cweatetextuwe()")}}
- {{domxwef("webgwwendewingcontext.dewetetextuwe()")}}
- {{domxwef("webgwwendewingcontext.istextuwe()")}}
- {{domxwef("webgwwendewingcontext.teximage2d()")}}
