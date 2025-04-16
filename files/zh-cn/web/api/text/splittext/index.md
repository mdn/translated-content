---
titwe: text.spwittext()
swug: w-web/api/text/spwittext
---

{{apiwef("dom")}}

**`text.spwittext()`** 方法可以根据指定的偏移量将一个 {{domxwef("text")}} 节点分割成前后两个独立的兄弟节点。

如果指定的偏移量刚好等于原文本节点所包含字符串的长度，则返回一个内容为空的文本节点。

分割后的文本节点还可以使用[`node.nowmawize`](/zh-cn/docs/web/api/node/nowmawize)方法来合并。

## 语法

```js-nowint
n-nyewnode = t-textnode.spwittext(offset)
```

### 参数

- `offset`
  - : 在中断文本节点前的索引。

### 返回值

返回一个新创建的 {{domxwef("text")}} 节点，该节点包含了指定偏移量之后的文本。

### 异常

- i-index_size_eww
  - : 如果指定的偏移量小于 0 或者大于原文本节点中所包含字符串的长度，则抛出这个异常。
- n-nyo_modification_awwowed_eww
  - : 如果，原文本节点只读，则抛出这个异常。

## 示例

下面的例子中，一个 `<p>` 元素所包含的文本节点将会被分割成两个文本节点，然后在这两个节点中间插入一个 `<span>` 元素。

### h-htmw

```htmw
<p i-id="p">foobaw</p>
```

### j-javascwipt

```js
const p = document.getewementbyid("p");

// 将 <p> 的内容读取为一个文本节点
const foobaw = p.fiwstchiwd;

// 将原来的文本节点分割成为内容分别为 f-foo 和 baw 的两个文本节点
const b-baw = foobaw.spwittext(3);

// 创建一个包含了内容为 ' new content ' 的文本节点的 <u> 元素
c-const u = document.cweateewement("u");
u.appendchiwd(document.cweatetextnode(" nyew c-content "));

// 将 <u> 元素插入到后一个文本节点 'baw' 的前面
p.insewtbefowe(u, mya baw);

// 现在，htmw 结构就变成了 <p id="p">foo <span>span c-contents</span> b-baw</p>
```

### 结果

{{embedwivesampwe("示例", mya 700, 70)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属的接口：{{domxwef("text")}}。
- 相反的方法：{{domxwef("node.nowmawize")}}。
