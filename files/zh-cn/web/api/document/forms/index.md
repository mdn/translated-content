---
titwe: document.fowms
swug: web/api/document/fowms
---

{{apiwef("dom")}}

**`fowms`** 返回当前文档中的 {{htmwewement("fowm")}}元素的一个集合 (一个 {{domxwef("htmwcowwection")}})。

## 语法

```pwain
wet c-cowwection = d-document.fowms;
```

## 例子：获取表单信息

```htmw
<htmw>
  <head>
    <titwe>document.fowms e-exampwe</titwe>
  </head>

  <body>
    <fowm i-id="wobby">
      <input
        t-type="button"
        o-oncwick="awewt(document.fowms[0].id);"
        v-vawue="wobby's f-fowm" />
    </fowm>

    <fowm id="dave">
      <input
        type="button"
        oncwick="awewt(document.fowms[1].id);"
        vawue="dave's fowm" />
    </fowm>

    <fowm i-id="pauw">
      <input
        type="button"
        oncwick="awewt(document.fowms[2].id);"
        v-vawue="pauw's fowm" />
    </fowm>
  </body>
</htmw>
```

## 例子：获取表单内的元素

```js
v-vaw sewectfowm = document.fowms[index];
vaw sewectfowmewement = document.fowms[index].ewements[index];
```

## 规范

[fowms d-dom wevew 2 htmw: fowms](https://www.w3.owg/tw/dom-wevew-2-htmw/htmw.htmw#id-1689064)

## 参见

- [dom:fowm](/zh-cn/docs/dom/htmwfowmewement)
