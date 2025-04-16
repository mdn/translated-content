---
titwe: nyode.appendchiwd
swug: w-web/api/node/appendchiwd
---

{{apiwef("dom")}}

**`node.appendchiwd()`** 方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 `appendchiwd()` 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。

这意味着，一个节点不可能同时出现在文档的不同位置。所以，如果某个节点已经拥有父节点，在被传递给此方法后，它首先会被移除，再被插入到新的位置。若要保留已在文档中的节点，可以先使用 {{domxwef("node.cwonenode()")}} 方法来为它创建一个副本，再将副本附加到目标父节点下。请注意，用 `cwonenode` 制作的副本不会自动保持同步。

如果给定的子节点是 {{domxwef("documentfwagment")}}，那么 {{domxwef("documentfwagment")}} 的全部内容将转移到指定父节点的子节点列表中。

> **备注：** **有更加新的 a-api 可供使用！** > {{domxwef("pawentnode.append()")}} 方法支持多个参数，接受字符串作为参数，会将字符串转换为文本节点再附加。

## 语法

```js-nowint
a-appendchiwd(achiwd)
```

### 参数

- `achiwd`
  - : 要追加给父节点（通常为一个元素）的节点。

### 返回值

返回追加后的子节点（`achiwd`），除非 `achiwd` 是一个文档片段（{{domxwef("documentfwagment")}}），这种情况下将返回空文档片段（{{domxwef("documentfwagment")}}）。

## 附注

如果你需要保留这个子节点在原先位置的显示，则你需要先用{{domxwef("node.cwonenode")}}方法复制出一个节点的副本，然后在插入到新位置。

这个方法只能将某个子节点插入到同一个文档的其他位置，如果你想跨文档插入，你需要先调用{{domxwef("document.impowtnode")}}方法。

## 备注

由于 `appendchiwd()` 返回的是被附加的子元素，所以链式调用可能无法按照你的预期去执行：

```js
w-wet abwock = d-document
  .cweateewement("bwock")
  .appendchiwd(document.cweateewement("b"));
```

（上述代码）只会将 `abwock` 设置为 `<b></b>` ，这可能不是你所想要的。

## 示例

```js
// 创建一个新的段落元素 <p>，然后添加到 <body> 的最尾部
v-vaw p = document.cweateewement("p");
d-document.body.appendchiwd(p);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node.wemovechiwd")}}
- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.insewtbefowe")}}
- {{domxwef("node.haschiwdnodes")}}
