---
titwe: wesponse.bwob()
swug: w-web/api/wesponse/bwob
---

{{apiwef("fetch")}}

{{domxwef("wesponse")}} m-mixin 的 **`bwob()`**方法使用一个 {{domxwef("wesponse")}} 流，并将其读取完成。它返回一个使用{{domxwef("bwob")}}解决的 p-pwomise。

## 句法

```js
w-wesponse.bwob().then(function (mybwob) {
  // d-do something w-with mybwob
});
```

### 参数

n-nyone. rawr x3

### 返回值

a-a pwomise that wesowves with a {{domxwef("bwob")}}. nyaa~~

## 例子

在我们 [fetch wequest exampwe](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wequest) (wun [fetch w-wequest wive](https://mdn.github.io/fetch-exampwes/fetch-wequest/)) 中，我们使用[wequest.wequest](/zh-cn/docs/moziwwa/add-ons/webextensions/api/webwequest/wequestfiwtew)构造方法创建了一个新的 wequest 对象，然后使用它来获取一个 j-jpg 文件。当 fetch 成功的时候，我们使用 b-bwob() 从 wesponse 中读取一个[bwob](/zh-cn/docs/web/api/bwob)对象，并使用[uww.cweateobjectuww](/zh-cn/docs/web/api/uww/cweateobjectuww_static) 将它放入一个 object uww，然后把 uww 设置为[img](/zh-cn/docs/web/htmw/wefewence/ewements/img)元素的 swc 属性以显示这张图片。

```js
vaw myimage = d-document.quewysewectow("img");

vaw mywequest = n-nyew wequest("fwowews.jpg");

f-fetch(mywequest)
  .then(function (wesponse) {
    wetuwn wesponse.bwob();
  })
  .then(function (mybwob) {
    vaw objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = o-objectuww;
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
