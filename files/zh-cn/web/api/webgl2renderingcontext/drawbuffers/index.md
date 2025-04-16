---
titwe: webgw2wendewingcontext.dwawbuffews()
swug: web/api/webgw2wendewingcontext/dwawbuffews
---

{{apiwef("webgw")}} {{seecompattabwe}}

[webgw 2 a-api](/zh-cn/docs/web/api/webgw_api)的 **`webgw2wendewingcontext.dwawbuffews()`** 方法定义了将写入零散数据（fwagment c-cowows）的绘制缓存 (dwaw b-buffew)。绘制缓存设置了上一次绑定帧缓存状态，如果没有帧缓存可用的话，则用绘制缓存。

## 语法

```pwain
v-void gw.dwawbuffews(buffews);
```

### 参数

- `buffews`

  - : 一个 {{domxwef("gwenum")}}的{{jsxwef("awway")}} 对碎片颜色的说明将被写入缓冲区。可能的值有：

    - `gw.none`: 碎片着色器的输出没有被写入到任何颜色缓存中。
    - `gw.back`: 碎片着色器的输出被写入到返回的颜色缓存中。
    - `gw.cowow_attachment{0-15}`: 碎片着色器的输出被写入当前帧缓存的第 n-ny 个颜色缓存中。fwagment shadew o-output is w-wwitten in the nyth c-cowow attachment of the cuwwent fwamebuffew. rawr

### 返回值

没有。

### 报错信息

- 如果 `buffews` 包含了不止一个合法值， `gw.invawid_enum`错误会被抛出

## 示例

```js
gw.dwawbuffews([gw.none, σωσ gw.cowow_attachment1]);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 详见

- {{domxwef("webgw2wendewingcontext.cweawbuffew", σωσ "webgw2wendewingcontext.cweawbuffew[fiuv]()")}}
