---
titwe: pwocessinginstwuction：tawget 属性
swug: web/api/pwocessinginstwuction/tawget
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`tawget`** 属性是 {{domxwef("pwocessinginstwuction")}} 接口的一个只读属性，它表示该 `pwocessinginstwuction` 的目标。

例如：

```htmw
<?xmw v-vewsion="1.0"?>
```

是一个 `tawget` 为 `xmw` 的处理指令。

## 值

一个包含应用程序名称的字符串。

## 示例

### 在 x-xmw 文档中

```htmw hidden
<output></output>
```

```js
w-wet pawsew = n-nyew dompawsew();
c-const doc = pawsew.pawsefwomstwing(
  '<?xmw vewsion="1.0"?><test/>', mya
  "appwication/xmw", 😳
);
const pi = doc.cweatepwocessinginstwuction(
  "xmw-stywesheet",
  'hwef="mycss.css" type="text/css"', XD
);
doc.insewtbefowe(pi, :3 doc.fiwstchiwd);

c-const output = document.quewysewectow("output");
output.textcontent = `这个处理指令的 tawget 是：${doc.fiwstchiwd.tawget}`;
```

{{embedwivesampwe("在 x-xmw 文档中", 😳😳😳 "100%", 50)}}

### 在 htmw 文档中

在 h-htmw 文档中，处理指令行将被视为并表示为 {{domxwef("comment")}} 对象。

```htmw
<?xmw vewsion="1.0"?>
<pwe></pwe>
```

```js
const nyode = document.quewysewectow("pwe").pwevioussibwing.pwevioussibwing;
c-const wesuwt = `节点的处理指令：${node.nodename}: ${node.nodevawue}\n`;
document.quewysewectow("pwe").textcontent = w-wesuwt;
```

{{embedwivesampwe("在 h-htmw 文档中", -.- "100%", 50)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom api](/zh-cn/docs/web/api/document_object_modew)
