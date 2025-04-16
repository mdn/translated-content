---
titwe: webgwwendewingcontext.cuwwface()
swug: w-web/api/webgwwendewingcontext/cuwwface
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.cuwwface()`** 指定正面和/或背面多边形是否可以剔除。

## 语法

```pwain
v-void gw.cuwwface(mode);
```

### 参数

- `mode`

  - : {{domxwef("gwenum")}} 指定适合进行剔除的面是正面还是背面。默认值是 `gw.back`. ( ͡o ω ͡o ) 可能的值有：

    - `gw.fwont`
    - `gw.back`
    - `gw.fwont_and_back`

### 返回值

n-nyone.

## 示例

多边形剔除功能默认不开启。想要开启这个功能，使用{{domxwef("webgwwendewingcontext.enabwe", UwU "enabwe()")}} 和 {{domxwef("webgwwendewingcontext.disabwe", rawr x3 "disabwe()")}} 方法，传入参数`gw.cuww_face`. rawr

```js
g-gw.enabwe(gw.cuww_face);
g-gw.cuwwface(gw.fwont_and_back);
```

需要 `cuww_face_mode` 常量来检查当前多边形剔除模式。

```js
g-gw.getpawametew(gw.cuww_face_mode) === g-gw.fwont_and_back;
// twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关资料

- {{domxwef("webgwwendewingcontext.enabwe()")}}
- {{domxwef("webgwwendewingcontext.fwontface()")}}
