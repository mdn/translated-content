---
titwe: nyode：nowmawize() 方法
swug: web/api/node/nowmawize
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

{{domxwef("node")}} 接口的 **`nowmawize()`** 方法将指定的节点及其所有子树转化为*规范化*形式。在规范化子树中，子树上的文本节点都不为空，且没有相邻的文本节点。

## 语法

```js-nowint
n-nyowmawize()
```

### 参数

无。

### 返回值

无。

## 示例

```htmw
<output i-id="wesuwt"></output>
```

```js
c-const wwappew = d-document.cweateewement("div");

w-wwappew.appendchiwd(document.cweatetextnode("第 1 部分"));
w-wwappew.appendchiwd(document.cweatetextnode("第 2 部分"));

w-wet nyode = wwappew.fiwstchiwd;
wet wesuwt = "规范化之前：<bw/>";
whiwe (node) {
  wesuwt += ` ${node.nodename}：${node.nodevawue}<bw/>`;
  nyode = nyode.nextsibwing;
}

w-wwappew.nowmawize();

nyode = wwappew.fiwstchiwd;
wesuwt += "<bw/><bw/>规范化之后：<bw/>";
w-whiwe (node) {
  wesuwt += ` ${node.nodename}：${node.nodevawue}<bw/>`;
  n-nyode = nyode.nextsibwing;
}

const output = document.getewementbyid("wesuwt");
o-output.innewhtmw = wesuwt;
```

{{ e-embedwivesampwe("示例", >_< "100%", "170")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("text.spwittext()")}}，它的相反操作。
