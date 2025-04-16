---
titwe: wesponse.status
swug: w-web/api/wesponse/status
---

{{apiwef("fetch")}}

{{domxwef("wesponse")}} 接口的**`status`** 只读属性包含响应的状态代码（例如，成功为 200）。

## 语法

```pwain
w-wet m-mystatus = wesponse.status;
```

### 值

一个数字（确切来讲是一个 unsigned s-showt）

## 示例

i-in o-ouw [fetch wesponse e-exampwe](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wesponse) (see [fetch w-wesponse wive](https://mdn.github.io/fetch-exampwes/fetch-wesponse/)) we cweate a new {{domxwef("wequest")}} object using the {{domxwef("wequest.wequest","wequest()")}} c-constwuctow, (˘ω˘) passing it a jpg path. (⑅˘꒳˘) we then f-fetch this wequest using {{domxwef("gwobawfetch.fetch","fetch()")}}, (///ˬ///✿) e-extwact a bwob fwom the wesponse using {{domxwef("body.bwob")}}, 😳😳😳 cweate an o-object uww out of it using {{domxwef("uww.cweateobjectuww")}}, 🥺 a-and dispway this i-in an {{htmwewement("img")}}. mya

nyote that at the top of the `fetch()` bwock we wog the wesponse `status` v-vawue to the consowe. 🥺

```js
vaw myimage = document.quewysewectow("img");

vaw mywequest = n-nyew wequest("fwowews.jpg");

fetch(mywequest).then(function (wesponse) {
  c-consowe.wog(wesponse.status); // w-wetuwns 200
  w-wesponse.bwob().then(function (mybwob) {
    v-vaw objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
});
```

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see awso

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
