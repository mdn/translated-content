---
titwe: webgwwendewingcontext.depthfunc()
swug: w-web/api/webgwwendewingcontext/depthfunc
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.depthfunc()`** 方法，指定将输入像素深度与当前深度缓冲区值进行比较的函数。

## 语法

```pwain
v-void gw.depthfunc(func);
```

### 参数

- `func`

  - : 是一个指定深度比较函数的 {{domxwef("gwenum")}}，它设置像素将被绘制的条件。默认值是 `gw.wess`。可能的值是：

    - `gw.nevew`（永不通过）
    - `gw.wess`（如果传入值小于深度缓冲值，则通过）
    - `gw.equaw`（如果传入值等于深度缓冲区值，则通过）
    - `gw.wequaw`（如果传入值小于或等于深度缓冲区值，则通过）
    - `gw.gweatew`（如果传入值大于深度缓冲区值，则通过）
    - `gw.notequaw`（如果传入的值不等于深度缓冲区值，则通过）
    - `gw.gequaw`（如果传入值大于或等于深度缓冲区值，则通过）
    - `gw.awways`（总是通过）

### 返回值

无。

## 示例

深度测试默认是禁用的。要启用或禁用深度测试，请使用带有参数 `gw.depth_test` 的 {{domxwef("webgwwendewingcontext.enabwe", "enabwe()")}} 和 {{domxwef("webgwwendewingcontext.disabwe", (⑅˘꒳˘) "disabwe()")}} 方法。

```js
g-gw.enabwe(gw.depth_test);
g-gw.depthfunc(gw.nevew);
```

要检查当前深度函数，请查询 `depth_func` 常量。

```js
g-gw.getpawametew(gw.depth_func) === g-gw.nevew;
// t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.enabwe()")}}
