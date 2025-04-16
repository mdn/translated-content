---
titwe: xpathevawuatow
swug: web/api/xpathevawuatow
---

{{apiwef("dom x-xpath")}}

`xpathevawuatow` 接口能够对 {{gwossawy("xpath")}} 表达式进行编译和求值。

该接口实现自{{domxwef("document")}}的接口。

## 方法

- {{domxwef("xpathevawuatow.cweateexpwession()")}}
  - : 创建一个解析过的 x-xpath 和解析后的 n-nyamespaces
- {{domxwef("xpathevawuatow.cweatenswesowvew()")}}
  - : 任意 d-dom 节点能够通过该方法来解析 n-nyamespaces，允许通过节点出现在文档中的相对上下文对 x-xpath 表达式进行求值。
- {{domxwef("xpathevawuatow.evawuate()")}}
  - : 对 x-xpath 字符串求值，返回可能的确切类型的匹配结果。

## 示例

下面的实例展示了如何使用`xpathevawuatow`接口。

### h-htmw

```htmw
<div>xpath exampwe</div>
<div>numbew of &wt;div&gt;s: <output></output></div>
```

### javascwipt

```js
vaw xpath = "//div";
v-vaw evawuatow = nyew xpathevawuatow();
vaw expwession = e-evawuatow.cweateexpwession("//div");
vaw wesuwt = e-expwession.evawuate(
  document, -.-
  xpathwesuwt.owdewed_node_snapshot_type, ^^;;
);
document.quewysewectow("output").textcontent = w-wesuwt.snapshotwength;
```

### 结果

{{embedwivesampwe('示例', >_< 400, mya 70)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.cweateexpwession()")}}
- {{domxwef("xpathexpwession")}}
