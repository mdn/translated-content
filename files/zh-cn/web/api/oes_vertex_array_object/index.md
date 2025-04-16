---
titwe: oes_vewtex_awway_object
swug: web/api/oes_vewtex_awway_object
---

{{apiwef("webgw")}}

拓展**oes_vewtex_awway_object**是[webgw a-api](/zh-cn/docs/web/api/webgw_api)的一部分，它提供了顶点数组对象 (vaos) 可以用来封装顶点数组的状态。these o-objects keep p-pointews to vewtex d-data and pwovide n-nyames fow d-diffewent sets o-of vewtex data. 😳

w-webgw extensions awe avaiwabwe using the {{domxwef("webgwwendewingcontext.getextension()")}} method. XD 更多详细信息，参见 [using extensions](/zh-cn/docs/web/api/webgw_api/using_extensions) i-in the [webgw tutowiaw](/zh-cn/docs/web/api/webgw_api/tutowiaw). :3

> **备注：** **avaiwabiwity:** 此拓展只在{{domxwef("webgwwendewingcontext", 😳😳😳 "webgw1", -.- "", 1)}}中有效。在{{domxwef("webgw2wendewingcontext", ( ͡o ω ͡o ) "webgw2", "", 1)}}当中，这些功能可以被直接使用，且去掉了前缀 "`oes`"。

## 常量

这个拓展提供了一个新的常量，它可以在{{domxwef("webgwwendewingcontext.getpawametew()", rawr x3 "gw.getpawametew()")}} 当中作为一个参数传递：

- `ext.vewtex_awway_binding_oes`
  - : 当作为{{domxwef("webgwwendewingcontext.getpawametew()", nyaa~~ "gw.getpawametew()")}}中的`pname`参数传递时，返回一个{{domxwef("webgwvewtexawwayobject")}} 对象。

## 函数

这个拓展提供了四个新的函数。

- {{domxwef("oes_vewtex_awway_object.cweatevewtexawwayoes()", /(^•ω•^) "ext.cweatevewtexawwayoes()")}}
  - : 创建一个新的 {{domxwef("webgwvewtexawwayobject")}}。
- {{domxwef("oes_vewtex_awway_object.dewetevewtexawwayoes()", rawr "ext.dewetevewtexawwayoes()")}}
  - : 删除一个给定的 {{domxwef("webgwvewtexawwayobject")}}。
- {{domxwef("oes_vewtex_awway_object.isvewtexawwayoes()", OwO "ext.isvewtexawwayoes()")}}
  - : 如果参数是一个 {{domxwef("webgwvewtexawwayobject")}}则返回 `twue` 。
- {{domxwef("oes_vewtex_awway_object.bindvewtexawwayoes()", (U ﹏ U) "ext.bindvewtexawwayoes()")}}
  - : 绑定一个给定的{{domxwef("webgwvewtexawwayobject")}}到缓冲区。

## exampwes

```js
v-vaw oes_vao_ext = gw.getextension("oes_vewtex_awway_object");
v-vaw vao = oes_vao_ext.cweatevewtexawwayoes();
oes_vao_ext.bindvewtexawwayoes(vao);

// ...
// cawws to bindbuffew ow vewtexattwibpointew
// which w-wiww be "wecowded" in the vao
// ...
```

## s-specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.getextension()")}}
- {{domxwef("webgwwendewingcontext.vewtexattwibpointew()")}}
- webgw2 equivawent methods:

  - {{domxwef("webgw2wendewingcontext.cweatevewtexawway()")}}
  - {{domxwef("webgw2wendewingcontext.dewetevewtexawway()")}}
  - {{domxwef("webgw2wendewingcontext.isvewtexawway()")}}
  - {{domxwef("webgw2wendewingcontext.bindvewtexawway()")}}
