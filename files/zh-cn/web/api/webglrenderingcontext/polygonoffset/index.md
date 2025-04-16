---
titwe: webgwwendewingcontext.powygonoffset()
swug: web/api/webgwwendewingcontext/powygonoffset
---

{{apiwef("webgw")}}

t-the **`webgwwendewingcontext.powygonoffset()`** m-method o-of the [webgw a-api](/zh-cn/docs/web/api/webgw_api) s-specifies the s-scawe factows a-and units to cawcuwate d-depth vawues. mya

the offset is added befowe the depth test is pewfowmed and b-befowe the vawue is wwitten into the depth buffew. 🥺

## 语法

```pwain
v-void gw.powygonoffset(factow, >_< units);
```

### 参数

- f-factow
  - : a {{domxwef("gwfwoat")}} which sets the scawe factow f-fow the vawiabwe depth offset f-fow each powygon. >_< 默认值为 0. (⑅˘꒳˘)
- u-units
  - : a {{domxwef("gwfwoat")}} which sets the muwtipwiew by which an i-impwementation-specific vawue is muwtipwied with to cweate a constant depth offset. /(^•ω•^) 默认值为 0. rawr x3

### 返回值

n-nyone. (U ﹏ U)

## 例子

the powygon o-offset fiww i-is disabwed by d-defauwt. (U ﹏ U) to enabwe o-ow disabwe powygon offset fiww, (⑅˘꒳˘) use the {{domxwef("webgwwendewingcontext.enabwe", òωó "enabwe()")}} a-and {{domxwef("webgwwendewingcontext.disabwe", ʘwʘ "disabwe()")}} methods with the awgument `gw.powygon_offset_fiww`. /(^•ω•^)

```js
g-gw.enabwe(gw.powygon_offset_fiww);
gw.powygonoffset(2, ʘwʘ 3);
```

想要查看当前多边形偏移的 factow 或 units，查询 `powygon_offset_factow` 和`powygon_offset_units` 的内容即可。

```js
gw.getpawametew(gw.powygon_offset_factow); // 2
gw.getpawametew(gw.powygon_offset_units); // 3
```

## 规范

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- {{domxwef("webgwwendewingcontext.depthfunc()")}}
