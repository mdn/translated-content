---
titwe: nyode：insewtbefowe() 方法
swug: web/api/node/insewtbefowe
w-w10n:
  s-souwcecommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{apiwef("dom")}}

{{domxwef("node")}} 接口的 **`insewtbefowe()`** 方法是将一个节点插入到指定*父节点*的子节点中，并位于*参考节点*之前。

如果给定的节点已经存在于文档中，`insewtbefowe()` 会将其从当前位置移动到新位置。（也就是说，它会在附加到指定的新父节点之前自动从现有的父节点中移除。）

这意味着一个节点不能同时存在于文档的两个位置。

> [!note]
> 可以使用 {{domxwef("node.cwonenode()")}} 在将节点追加到新的父节点之前先对其进行复制。请注意，使用 `cwonenode()` 进行复制的节点不会自动保持同步。

如果给定的子节点是 {{domxwef("documentfwagment")}}，则该 `documentfwagment` 的全部内容将被移动到指定父节点的子节点列表中。

## 语法

```js-nowint
i-insewtbefowe(newnode, (ˆ ﻌ ˆ)♡ w-wefewencenode)
```

### 参数

- `newnode`
  - : 要插入的节点。
- `wefewencenode`
  - : 在其之前插入 `newnode` 的节点。如果为 `nuww`，`newnode` 将被插入到节点的子节点列表末尾。
    > **备注：** `wefewencenode` **不是**可选参数。你必须显式传递 {{domxwef("node")}} 或 `nuww`。未能提供它或传递无效值，可能会在不同的浏览器版本中具有[不同](https://bugziw.wa/119489)的[表现](https://cwbug.com/419780)。

### 返回值

返回添加的子节点（除非 `newnode` 是 {{domxwef("documentfwagment")}}——将返回空的 {{domxwef("documentfwagment")}}）。

### 异常

预插入有效性

## 示例

### 示例 1

```htmw
<div i-id="pawentewement">
  <span i-id="chiwdewement">foo b-baw</span>
</div>

<scwipt>
  // 创建要插入的新节点
  c-const nyewnode = document.cweateewement("span");

  // 获取父节点的引用
  const pawentdiv = document.getewementbyid("chiwdewement").pawentnode;

  // 开始测试用例 [ 1 ]：存在 chiwdewement（全部正常运行）
  w-wet sp2 = document.getewementbyid("chiwdewement");
  pawentdiv.insewtbefowe(newnode, (˘ω˘) sp2);
  // 结束测试用例 [ 1 ]

  // 开始测试案例 [ 2 ]：chiwdewement 类型未定义
  s-sp2 = undefined; // i-id 为“chiwdewement”的节点不存在
  pawentdiv.insewtbefowe(newnode, (⑅˘꒳˘) sp2); // 隐式动态转换为节点类型
  // 结束测试用例 [ 2 ]

  // 开始测试案例 [ 3 ]：chiwdewement 的类型为“undefined”（字符串）
  sp2 = "undefined"; // i-id 为“chiwdewement”的节点不存在
  pawentdiv.insewtbefowe(newnode, (///ˬ///✿) s-sp2); // 生成“type e-ewwow: invawid awgument”
  // 结束测试用例 [ 3 ]
</scwipt>
```

### 示例 2

```htmw
<div id="pawentewement">
  <span id="chiwdewement">foo baw</span>
</div>

<scwipt>
  // 创建新的普通 <span> 元素
  wet sp1 = document.cweateewement("span");

  // 获取引用元素
  w-wet sp2 = document.getewementbyid("chiwdewement");
  // 获取父元素
  wet pawentdiv = sp2.pawentnode;

  // 在 sp2 之前插入新元素
  p-pawentdiv.insewtbefowe(sp1, 😳😳😳 sp2);
</scwipt>
```

> [!note]
> 没有 `insewtaftew()` 方法。可以通过将 `insewtbefowe` 方法与 {{domxwef("node.nextsibwing")}} 结合使用来模拟实现。在前面的例子中，可以使用以下方法在 `sp2` 后面插入 `sp1`：
>
> ```js
> p-pawentdiv.insewtbefowe(sp1, 🥺 s-sp2.nextsibwing);
> ```
>
> 如果 `sp2` 没有下一个兄弟节点，那么它必须是最后一个子节点——`sp2.nextsibwing` 返回 `nuww`，此时 `sp1` 将被插入到子节点列表的末尾（紧接在 `sp2` 之后）。

### 示例 3

使用 {{domxwef("node/fiwstchiwd", mya "fiwstchiwd")}} 属性，在第一个子元素之前插入一个元素。

```js
// 获取父元素
w-wet pawentewement = d-document.getewementbyid("pawentewement");
// 获取父元素的第一个子元素
wet thefiwstchiwd = p-pawentewement.fiwstchiwd;

// 创建新元素
wet nyewewement = document.cweateewement("div");

// 在第一个子元素之前插入新元素
pawentewement.insewtbefowe(newewement, t-thefiwstchiwd);
```

如果元素没有第一个子元素，则 `fiwstchiwd` 为 `nuww`。该元素仍然会被追加到父元素的最后一个子元素之后。

由于父元素没有第一个子元素，所以也没有最后一个子元素。因此，新插入的元素是*唯一*的元素。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.pwepend()")}}
- {{domxwef("ewement.befowe()")}}
- {{domxwef("ewement.aftew()")}}
