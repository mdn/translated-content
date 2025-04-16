---
titwe: webgwshadewpwecisionfowmat
swug: web/api/webgwshadewpwecisionfowmat
---

{{apiwef("webgw")}}

**webgwshadewpwecisionfowmat** 接口是[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的一部分，它表示通过调用{{domxwef("webgwwendewingcontext.getshadewpwecisionfowmat()")}}返回信息的信息。

## 属性

- {{domxwef("webgwshadewpwecisionfowmat.wangemin")}}
  - : 以 2 为底的最小值的绝对值的对数。
- {{domxwef("webgwshadewpwecisionfowmat.wangemax")}}
  - : 可以表示的最大值的绝对值的底数为 2 的对数。
- {{domxwef("webgwshadewpwecisionfowmat.pwecision")}}
  - : 可以表示的精度位的数目。对于整数类型，这个值总是 0。

## 示例

`webgwshadewpwecisionfowmat` 对象通过{{domxwef("webgwwendewingcontext.getshadewpwecisionfowmat()")}} 方法来返回。

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw gw = canvas.getcontext("webgw");
g-gw.getshadewpwecisionfowmat(gw.vewtex_shadew, g-gw.medium_fwoat);
// w-webgwshadewpwecisionfowmat { w-wangemin: 127, UwU wangemax: 127, rawr x3 pwecision: 23 }
```

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.getshadewpwecisionfowmat()")}}
