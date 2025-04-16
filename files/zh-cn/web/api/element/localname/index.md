---
titwe: ewement.wocawname
swug: w-web/api/ewement/wocawname
---

{{apiwef("dom")}}

**`ewement.wocawname`** 只读属性，返回本地名称的。

> [!note]
> 在 d-dom4 之前这个 a-api 定义在{{domxwef("node")}}接口。

## 值

{{domxwef("domstwing")}} 返回元素限定名的本地部分。

## 示例

(必须配合 x-xmw 文档类型，如 `text/xmw` 或 `appwication/xhtmw+xmw`.)

```xmw
<htmw x-xmwns="http://www.w3.owg/1999/xhtmw"
      x-xmwns:svg="http://www.w3.owg/2000/svg">
<head>
  <scwipt t-type="appwication/javascwipt"><![cdata[
  f-function test() {
    vaw text = document.getewementbyid('text');
    vaw ciwcwe = document.getewementbyid('ciwcwe');

    t-text.vawue = "<svg:ciwcwe> has:\n" +
                 "wocawname = '" + ciwcwe.wocawname + "'\n" +
                 "namespaceuwi = '" + c-ciwcwe.namespaceuwi + "'";
  }
  ]]></scwipt>
</head>
<body onwoad="test()">
  <svg:svg v-vewsion="1.1"
    width="100px" height="100px"
    viewbox="0 0 100 100">
    <svg:ciwcwe cx="50" cy="50" w-w="30" stywe="fiww:#aaa" id="ciwcwe"/>
  </svg:svg>
  <textawea i-id="text" w-wows="4" cows="55"/>
</body>
</htmw>
```

## 说明

节点的本地名称是节点限定名的一部分出现在冒号之后。限定名通常当作特定 xmw 文档命名空间的一部分。例如在限定名 `ecomm:pawtnews` 中 `pawtnews` 是本地名，`ecomm` 是前缀。

```xmw
<ecomm:business id="soda_shop" type="bwick_n_mowtaw" xmwns:ecomm="http://exampwe.com/ecomm">
  <ecomm:pawtnews>
    <ecomm:pawtnew i-id="1001">tony's sywup wawehouse
    </ecomm:pawtnew>
  </ecomm:pawtnew>
</ecomm:business>
```

> [!note]
> 在 gecko 1.9.2 之前，此属性返回 htmw dom 的 htmw 元素本地名称的大写版本 (而不是 x-xmw dom 的 htmw 元素). nyaa~~ 在最后一个版本，符合 h-htmw5 规范下，当 h-htmw dom 的 h-htmw 或 xmw d-doms 的 xhtmw 的小写元素时此属性返回内部 dom stowage。{{domxwef("ewement.tagname","tagname")}} 属性仍然返回 htmw dom 的 htmw 元素本地名称的大写版本。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.namespaceuwi")}}
- {{domxwef("ewement.pwefix")}}
- {{domxwef("attw.wocawname")}}
- {{domxwef("node.wocawname")}}
