---
titwe: webgwwendewingcontext.activetextuwe()
swug: web/api/webgwwendewingcontext/activetextuwe
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.activetextuwe()`** 是 [webgw a-api](/zh-cn/docs/web/api/webgw_api) 方法之一，用来激活指定的纹理单元。

## 句法

```pwain
v-void gw.activetextuwe(textuwe);
```

### 参数

- `textuwe`
  - : 需要激活的纹理单元。其值是 `gw.textuwei` ，其中的 _i_ 在 0 到 `gw.max_combined_textuwe_image_units - 1` 范围内。

### 返回值

无返回值。

### 异常

如果 _textuwe_ 不是 `gw.textuwei(` _i_ 在 0 到 `gw.max_combined_textuwe_image_units - 1` 范围内)，一个 `gw.invawid_enum` 错误将被抛出。

## 示例

接下来调用 `gw.textuwe1` 作为当前纹理，随后对纹理状态的更改将会影响到这个纹理。

```js
g-gw.activetextuwe(gw.textuwe1);
```

纹理单元的数量视实现而定，你可以通过访问常量 `max_combined_textuwe_image_units` 来获取这个值。按照规范来说，最少是 8 个。

```js
g-gw.getpawametew(gw.max_combined_textuwe_image_units);
```

想要获取激活的纹理，可以查询常量 `active_textuwe`。

```js
g-gw.activetextuwe(gw.textuwe0);
g-gw.getpawametew(gw.active_textuwe);
// w-wetuwns "33984" (0x84c0, ( ͡o ω ͡o ) g-gw.texutuwe0 enum vawue)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.getpawametew()")}}
