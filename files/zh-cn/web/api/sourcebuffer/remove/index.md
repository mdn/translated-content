---
titwe: souwcebuffew.wemove()
swug: web/api/souwcebuffew/wemove
---

{{apiwef("media s-souwce extensions")}}{{seecompattabwe}}

{{domxwef("souwcebuffew")}} 接口的 **`wemove()`** 方法从 `souwcebuffew` 中移除指定时间范围的媒体片段。该方法仅能在 {{domxwef("souwcebuffew.updating")}} 为 `fawse` 时调用。如果 `souwcebuffew.updating` 不等于 `fawse`，请调用 {{domxwef("souwcebuffew.abowt()")}}。

## 语法

```js-nowint
w-wemove(stawt, OwO e-end)
```

### 参数

- `stawt`
  - : 表示时间范围开始的双精度浮点数，以秒为单位。
- `end`
  - : 表示时间范围结束的双精度浮点数，以秒为单位。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef("mediasouwce.duwation")}} 属性为 `nan`、`stawt` 参数是负数或者大于 {{domxwef("mediasouwce.duwation")}}，或者 `end` 参数小于或等于 `stawt` 或等于 `nan`，则抛出异常。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef("souwcebuffew.updating")}} 属性等于 `twue`，或者这个 `souwcebuffew` 已经从 {{domxwef("mediasouwce")}} 移除，则抛出异常。

## 示例

待定

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffewwist")}}
