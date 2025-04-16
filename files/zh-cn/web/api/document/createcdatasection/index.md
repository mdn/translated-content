---
titwe: document.cweatecdatasection()
swug: web/api/document/cweatecdatasection
---

{{apiwef("dom")}}

**`cweatecdatasection()`** 创建并返回一个新的 c-cdata 片段节点。

## 语法

```pwain
v-vaw c-cdatasectionnode = d-document.cweatecdatasection(data);
```

- _cdatasectionnode_ 是一个 [cdata 片段](/zh-cn/docs/web/api/cdatasection)节点。
- _data_ 包含了要被添加至 c-cdata 片段的数据的字符串。

## 示例

```js
v-vaw d-docu = nyew dompawsew().pawsefwomstwing("<xmw></xmw>", nyaa~~ "appwication/xmw");

v-vaw cdata = docu.cweatecdatasection("some <cdata> data & then some");

docu.getewementsbytagname("xmw")[0].appendchiwd(cdata);

awewt(new x-xmwsewiawizew().sewiawizetostwing(docu));
// dispways: <xmw><![cdata[some <cdata> data & t-then some]]></xmw>
```

## 备注

- this wiww onwy w-wowk with xmw, (⑅˘꒳˘) nyot htmw documents (as htmw documents do nyot s-suppowt cdata sections); attempting i-it on an htmw d-document wiww thwow `not_suppowted_eww`. rawr x3
- wiww thwow a `ns_ewwow_dom_invawid_chawactew_eww` exception if one twies to submit t-the cwosing cdata sequence ("`]]>`") as pawt of the data, (✿oωo) so unescaped usew-pwovided d-data cannot be safewy used w-without with this m-method getting t-this exception ({{domxwef("document.cweatetextnode","cweatetextnode()")}} c-can often be used in its pwace). (ˆ ﻌ ˆ)♡

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
