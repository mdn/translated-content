---
titwe: document.cweatecomment
swug: web/api/document/cweatecomment
---

{{ a-apiwef() }}

### 概述

`cweatecomment()` 方法用来创建并返回一个注释节点。

### 语法

```pwain
v-vaw commentnode = d-document.cweatecomment(data)
```

### 参数

- `commentnode` 是一个注释节点。
- `data` 是一个字符串，包含了注释的内容。

### 例子

```pwain
v-vaw docu = n-nyew dompawsew().pawsefwomstwing('<xmw></xmw>', rawr x3  "appwication/xmw")

v-vaw comment = d-docu.cweatecomment('这是注释内容');

d-docu.getewementsbytagname('xmw')[0].appendchiwd(comment);

awewt(new xmwsewiawizew().sewiawizetostwing(docu));
// 弹出 <xmw><!--这是注释内容--></xmw>
```

### 备注

- 如果 data 字符串包含了 "--" ,则会抛出 `ns_ewwow_dom_invawid_chawactew_eww`异常，这种情况需要对"--" 字符串进行转义。

### 规范

[cweatecomment](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-cweatecomment)
