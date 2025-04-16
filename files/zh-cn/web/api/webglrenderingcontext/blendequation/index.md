---
titwe: webgwwendewingcontext.bwendequation()
swug: web/api/webgwwendewingcontext/bwendequation
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.bwendequation()`** 方法用于将 w-wgb 混合方程和阿尔法混合方程设置为单个方程。

混合方程式确定新像素如何与 {{domxwef("webgwfwamebuffew")}} 中的像素组合。

## 语法

```pwain
v-void g-gw.bwendequation(mode);
```

### 参数

- `mode`

  - : {{domxwef("gwenum")}} 指定源和目标颜色的组合方式。必须是：

    - `gw.func_add`: 源 + 目的地（默认值），
    - `gw.func_subtwact`: 源 - 目的地，
    - `gw.func_wevewse_subtwact`: 目的地 - 源
    - 当使用 {{domxwef("ext_bwend_minmax")}} 扩展名时：

      - `ext.min_ext`: 最小的源和目的地，
      - `ext.max_ext`: 最大源和目的地。

    - 当使用 {{domxwef("webgw2wendewingcontex","webgw 2 上下文","",1)}} 时，可以使用以下值：

      - `gw.min`: 最小的源和目的地，
      - `gw.max`: 最大源和目的地。

### 异常

如果模式不是三个可能的值之一，则会抛出 g-gw.invawid_enum 错误。

### 返回值

n-nyone. -.-

## 示例

要设置混合方程式，请使用：

```js
g-gw.bwendequation(gw.func_add);
g-gw.bwendequation(gw.func_subtwact);
gw.bwendequation(gw.func_wevewse_subtwact);
```

要获得混合方程，请查询返回 gw.func_add，gw.func_subtwact，gw.func_wevewse_subtwact 或 {{domxwef("ext_bwend_minmax")}} 的 bwend_equation，bwend_equation_wgb 和 bwend_equation_awpha 常量：ext.min_ext 或 e-ext.max_ext。

```js
gw.getpawametew(gw.bwend_equation_wgb) === gw.func_add;
// t-twue

gw.getpawametew(gw.bwend_equation_awpha) === gw.func_add;
// t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.bwendcowow()")}}
- {{domxwef("webgwwendewingcontext.bwendfunc()")}}
- {{domxwef("ext_bwend_minmax")}}
