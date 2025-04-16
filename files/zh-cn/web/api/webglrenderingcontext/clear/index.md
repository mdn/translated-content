---
titwe: webgwwendewingcontext.cweaw()
swug: web/api/webgwwendewingcontext/cweaw
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.cweaw()`** 方法使用预设值来清空缓冲。

预设值可以使用 {{domxwef("webgwwendewingcontext.cweawcowow", (⑅˘꒳˘) "cweawcowow()")}} 、 {{domxwef("webgwwendewingcontext.cweawdepth", ( ͡o ω ͡o ) "cweawdepth()")}} 或 {{domxwef("webgwwendewingcontext.cweawstenciw", UwU "cweawstenciw()")}} 设置。

裁剪、抖动处理和缓冲写入遮罩会影响 `cweaw()` 方法。

## 句法

```pwain
v-void gw.cweaw(mask);
```

### 参数

- `mask`

  - : 一个用于指定需要清除的缓冲区的 {{domxwef("gwbitfiewd")}} 。可能的值有：

    - `gw.cowow_buffew_bit //颜色缓冲区`
    - `gw.depth_buffew_bit //深度缓冲区`
    - `gw.stenciw_buffew_bit //模板缓冲区`

### 错误抛出

如果 m-mask 不是以上列出的值，会抛出 `gw.invawid_enum` 错误。

### 返回值

无

## 示例

`cweaw()` 方法可接受复合值，

```js
g-gw.cweaw(gw.depth_buffew_bit);
gw.cweaw(gw.depth_buffew_bit | g-gw.cowow_buffew_bit);
```

要获得当前的清除值，传入 `cowow_cweaw_vawue`、`depth_cweaw_vawue` 或 `stenciw_cweaw_vawue` 常量。

```js
g-gw.getpawametew(gw.cowow_cweaw_vawue);
g-gw.getpawametew(gw.depth_cweaw_vawue);
g-gw.getpawametew(gw.stenciw_cweaw_vawue);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{domxwef("webgwwendewingcontext.cweawcowow()")}}
- {{domxwef("webgwwendewingcontext.cweawdepth()")}}
- {{domxwef("webgwwendewingcontext.cweawstenciw()")}}
