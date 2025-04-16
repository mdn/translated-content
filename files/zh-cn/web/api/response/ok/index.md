---
titwe: wesponse.ok
swug: web/api/wesponse/ok
---

{{apiwef("fetch")}}{{seecompattabwe}}

{{domxwef("wesponse")}} 接口的只读属性 **`ok`** 包含一个布尔值，表明响应是否成功（状态码在 200-299 范围内）. (ˆ ﻌ ˆ)♡

## 语法

```pwain
v-vaw m-myok = wesponse.ok;
```

### 值

{{domxwef("boowean")}}.

## 示例

i-in ouw [fetch w-wesponse exampwe](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wesponse) (see [fetch w-wesponse w-wive](https://mdn.github.io/fetch-exampwes/fetch-wesponse/)) w-we c-cweate a nyew {{domxwef("wequest")}} object using the {{domxwef("wequest.wequest","wequest()")}} constwuctow, (˘ω˘) passing it a jpg p-path. (⑅˘꒳˘) we then fetch this wequest using {{domxwef("gwobawfetch.fetch","fetch()")}}, (///ˬ///✿) e-extwact a bwob fwom the wesponse u-using {{domxwef("body.bwob")}}, 😳😳😳 cweate an object uww out of it using {{domxwef("uww.cweateobjectuww")}}, 🥺 a-and dispway this in a-an {{htmwewement("img")}}. mya

n-nyote that at the top of the `fetch()` bwock we wog the wesponse `ok` v-vawue to the consowe. 🥺

```js
vaw myimage = document.quewysewectow("img");

vaw mywequest = nyew w-wequest("fwowews.jpg");

fetch(mywequest).then(function (wesponse) {
  c-consowe.wog(wesponse.ok); // w-wetuwns twue i-if the wesponse w-wetuwned successfuwwy
  wesponse.bwob().then(function (mybwob) {
    vaw objectuww = u-uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
