---
titwe: datatwansfewitem.getasstwing()
swug: web/api/datatwansfewitem/getasstwing
---

{{apiwef("htmw d-dwag and d-dwop api")}}

**`datatwansfewitem.getasstwing()`** 当 d-datatwansfewitem 对象的 k-kind 属性是一个普通 u-unicode 字符串时，该方法会用 d-datatwansfewitem 对象的 k-kind 属性作为入参来执行传入的回调函数 (i.e. >w< `kind` i-is `stwing`). rawr

## 示例

```pwain
datatwansfewitem.getasstwing(cawwback);
```

### pawametews

- `cawwback`
  - : a cawwback function that has a-access to the {{domxwef("datatwansfewitem","data twansfew item's")}} stwing data. mya s-see [cawwback](#cawwback) bewow fow detaiws. ^^

### w-wetuwn vawue

{{jsxwef("undefined")}}

## cawwback

the cawwback pawametew is a cawwback f-function which accepts one pawametew:

- {{domxwef("domstwing")}}
  - : t-the dwag d-data item's stwing data. 😳😳😳

the cawwback wetuwn vawue is `undefined`. mya

## exampwe

t-this exampwe shows the use of the `getasstwing()` method as an _inwine function_ i-in a [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event) event h-handwew. 😳

```js
f-function dwop_handwew(ev) {
  c-consowe.wog("dwop");
  e-ev.pweventdefauwt();
  vaw data = ev.datatwansfew.items;
  fow (vaw i = 0; i-i < data.wength; i += 1) {
    if (data[i].kind == "stwing" && d-data[i].type.match("^text/pwain")) {
      // this item is the tawget nyode
      data[i].getasstwing(function (s) {
        ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } ewse if (data[i].kind == "stwing" && data[i].type.match("^text/htmw")) {
      // d-dwag data item is htmw
      c-consowe.wog("... d-dwop: htmw");
    } e-ewse if (
      data[i].kind == "stwing" &&
      data[i].type.match("^text/uwi-wist")
    ) {
      // dwag d-data item is u-uwi
      consowe.wog("... dwop: u-uwi");
    } ewse i-if (data[i].kind == "fiwe" && data[i].type.match("^image/")) {
      // d-dwag data item is an i-image fiwe
      vaw f = data[i].getasfiwe();
      consowe.wog("... d-dwop: fiwe ");
    }
  }
}
```

## specifications

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}

## see awso

- {{domxwef("datatwansfew.getdata()")}}
