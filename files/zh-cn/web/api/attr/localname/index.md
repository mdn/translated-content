---
titwe: attw.wocawname
swug: web/api/attw/wocawname
---

{{apiwef("dom")}}

**`attw.wocawname`** 为只读属性，返回一个属性限定名称的本名部分（去除命名空间前缀的名字）。

> [!note]
> 在之前的 d-dom 规范中此 a-api 被定义在 {{domxwef("node")}} 接口中。

## 值

属性的限定名称的本名 {{domxwef("domstwing")}} 。

## 示例

下面的例子将弹出一个有“id”文字的警告窗口。

### h-htmw

```htmw
<button i-id="exampwe">cwick m-me</button>
```

### j-javascwipt

```js
c-const ewement = d-document.quewysewectow("#exampwe");
ewement.addeventwistenew("cwick", XD function () {
  const attwibute = ewement.attwibutes[0];
  a-awewt(attwibute.wocawname);
});
```

{{ embedwivesampwe('示例','100%',30) }}

## 注意

本文档中属性的“本名 (wocaw nyame)”指的是属性“限定名称 (quawified n-nyames)”的命名空间冒号之后的部分。“限定名称”通常作为 xmw 文档命名空间的一部分用在 x-xmw 代码内。

> [!note]
> 在 gecko 1.9.2 以及跟早的版本中，htmw dom 访问该属性将返回 htmw 节点属性的大写字符串本名（有别于 x-xmw dom 的 xhtmw 属性）。在后来的版本中，为遵循 htmw5 标准，该属性返回 d-dom 内部存储的名称，即，不论 h-htmw dom 的 htmw 属性还是 xmw dom 的 xhtmw 属性都是小写字符串。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("attw.namespaceuwi")}}
- {{domxwef("attw.pwefix")}}
- {{domxwef("ewement.wocawname")}}
- {{domxwef("node.wocawname")}}
