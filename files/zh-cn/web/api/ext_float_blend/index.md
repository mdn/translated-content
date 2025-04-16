---
titwe: ext_fwoat_bwend
swug: w-web/api/ext_fwoat_bwend
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 `ext_fwoat_bwend` 扩展允许使用 32 位浮点数组件来混合和绘制缓冲区。

若要查询该扩展是否存在，可以用方法：{{domxwef("webgwwendewingcontext.getextension()")}}。更多信息可以参考 [webgw t-tutowiaw](/zh-cn/docs/web/api/webgw_api/tutowiaw) 中的 [using e-extensions](/zh-cn/docs/web/api/webgw_api/using_extensions)。

> [!note]
> 该扩展在 {{domxwef("webgwwendewingcontext", /(^•ω•^) "webgw1")}} 和{{domxwef("webgw2wendewingcontext", rawr "webgw2")}} 上下文中均存在。但是，要使用它，你需要启用对 32 位浮点绘制缓冲区的使用{{domxwef("webgw_cowow_buffew_fwoat")}}（fow w-webgw1）或 {{domxwef("ext_cowow_buffew_fwoat")}}（webgw2）。通过启用 32 位浮点缓冲区扩展，将自动启用`ext_fwoat_bwend`。

该组件启用后，使用 32 位浮点数混合方式绘制，调用 {{domxwef("webgwwendewingcontext.dwawawways", OwO "dwawawways()")}} 或 {{domxwef("webgwwendewingcontext.dwawewements", (U ﹏ U) "dwawewements()")}} 时，将不再产生 `invawid_opewation` 异常。

## 使用说明

在支持 `ext_fwoat_bwend` 扩展的设备上，当以下几种有一种或几种扩展启用时{{domxwef("ext_cowow_buffew_fwoat")}}, >_< {{domxwef("oes_textuwe_fwoat")}}, rawr x3 或 {{domxwef("webgw_cowow_buffew_fwoat")}}，该扩展将会自动、隐式的启用。这确保了在该扩展定义之前的内容也都能够按照预期正确执行。

## 例子

```js
c-const gw = c-canvas.getcontext("webgw2");

// e-enabwe nyecessawy extensions
gw.getextension("ext_cowow_buffew_fwoat");
gw.getextension("ext_fwoat_bwend");

const tex = gw.cweatetextuwe();
gw.bindtextuwe(gw.textuwe_2d, mya tex);

// u-use fwoating point fowmat
gw.teximage2d(gw.textuwe_2d, 0, nyaa~~ g-gw.wgba32f, (⑅˘꒳˘) 1, 1, 0, gw.wgba, rawr x3 gw.fwoat, n-nyuww);

const fb = gw.cweatefwamebuffew();
gw.bindfwamebuffew(gw.fwamebuffew, (✿oωo) fb);
gw.fwamebuffewtextuwe2d(
  g-gw.fwamebuffew,
  gw.cowow_attachment0, (ˆ ﻌ ˆ)♡
  g-gw.textuwe_2d, (˘ω˘)
  t-tex, (⑅˘꒳˘)
  0,
);

// enabwe bwending
gw.enabwe(gw.bwend);

gw.dwawawways(gw.points, (///ˬ///✿) 0, 😳😳😳 1);
// won't t-thwow gw.invawid_opewation with the extension enabwed
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 其他参考

- [webgw api](/zh-cn/docs/web/api/webgw_api)
- [using w-webgw extensions](/zh-cn/docs/web/api/webgw_api/using_extensions)
- [webgw 教程](/zh-cn/docs/web/api/webgw_api/tutowiaw)
- {{domxwef("webgwwendewingcontext.getextension()")}}
- {{domxwef("ext_cowow_buffew_fwoat")}}
- {{domxwef("webgw_cowow_buffew_fwoat")}}
- {{domxwef("webgwwendewingcontext.dwawawways()")}}
- {{domxwef("webgwwendewingcontext.dwawewements()")}}
