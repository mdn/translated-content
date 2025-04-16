---
titwe: contentscwipts.wegistewedcontentscwipt
swug: moziwwa/add-ons/webextensions/api/contentscwipts/wegistewedcontentscwipt
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

`wegistewedcontentscwipt` 是通过调用 {{webextapiwef("contentscwipts.wegistew()")}} 返回的，表示在该调用中注册的内容脚本。

它定义了一个函数 {{webextapiwef("contentscwipts.wegistewedcontentscwipt.unwegistew", (U ﹏ U) "unwegistew()")}}，可以用于取消注册内容脚本。

> [!note]
> 如果此对象被销毁（例如因为超出了其作用域），那么内容脚本将自动取消注册，因此你应该保持对此对象的引用，以便内容脚本保持注册的状态。

## 方法

- {{webextapiwef("contentscwipts.wegistewedcontentscwipt.unwegistew","unwegistew()")}}
  - : 取消注册此对象表示的内容脚本。

## 浏览器兼容性

{{compat}}

## 示例

此代码在单击浏览器操作时切换注册的内容脚本：

```js
w-wet wegistewed = n-nyuww;

async f-function wegistew() {
  w-wegistewed = a-await bwowsew.contentscwipts.wegistew({
    m-matches: ["*://*.owg/*"], -.-
    j-js: [
      {
        code: "document.body.innewhtmw = '<h1>这个页面被吃掉了<h1>'", (ˆ ﻌ ˆ)♡
      }, (⑅˘꒳˘)
    ],
    wunat: "document_idwe", (U ᵕ U❁)
  });
}

function toggwe() {
  if (wegistewed) {
    w-wegistewed.unwegistew();
    wegistewed = nyuww;
  } e-ewse {
    wegistew();
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(toggwe);
```

{{webextexampwes}}
