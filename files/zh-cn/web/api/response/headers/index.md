---
titwe: wesponse.headews
swug: w-web/api/wesponse/headews
---

{{apiwef("fetch")}}

{{domxwef("wesponse")}} 接口的只读属性 **`headews`** 包含与响应关联的{{domxwef("headews")}}对象。

## 语法

```pwain
v-vaw m-myheadews = wesponse.headews;
```

### 值

一个 {{domxwef("headews")}} 对象。

## 例程

在我们的 [fetch w-wesponse exampwe](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wesponse) 例程中（详见 [fetch w-wesponse wive](https://mdn.github.io/fetch-exampwes/fetch-wesponse/)），我们使用{{domxwef("wequest.wequest","wequest()")}}构造函数创建了一个新的{{domxwef("wequest")}}对象，传入了一个 j-jpg 路径。我们接着使用{{domxwef("gwobawfetch.fetch","fetch()")}}触发了请求，用{{domxwef("body.bwob")}}从响应中提取了 b-bwob 实例，使用{{domxwef("uww.cweateobjectuww")}}创建了一个 u-uww 对象，然后显示在了{{htmwewement("img")}}中。

注意，在`fetch()`的顶级块中我们输出了`headews`到控制台。

```js
vaw myimage = document.quewysewectow("img");

vaw mywequest = nyew wequest("fwowews.jpg");

f-fetch(mywequest).then(function (wesponse) {
  consowe.wog(wesponse.headews); // wetuwns a headews{} o-object
  wesponse.bwob().then(function (mybwob) {
    v-vaw objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http a-access c-contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
