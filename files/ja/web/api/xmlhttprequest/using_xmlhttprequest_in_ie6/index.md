---
title: Using XMLHttpRequest in IE6
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest_in_IE6
---

[XMLHttpRequest](/ja/DOM/XMLHttpRequest) は、 Microsoft によって Internet Explorer 5.0 で ActiveX control として最初に導入されました。ただし、 IE7 およびその他のブラウザーでは XMLHttpRequest はネイティブ JavaScript オブジェクトです。

最近のすべてのブラウザーでは、次のコードを使用して新規の XMLHttpRequest オブジェクトを作成できます:

```js
var request = new XMLHttpRequest()
```

ただし、 Internet Explorer 6 以前もサポートする必要がある場合、次のようにコードを拡張する必要があります:

```js
if (window.XMLHttpRequest) {
    //Firefox、 Opera、 IE7、およびその他のブラウザーはネイティブオブジェクトを使用します
    var request = new XMLHttpRequest();
} else {
    //IE 5 および 6 は ActiveX control を使用します
    var request = new ActiveXObject("Microsoft.XMLHTTP");
}
```

### 関連項目

- [Using XMLHttpRequest](/ja/DOM/XMLHttpRequest/Using_XMLHttpRequest)
