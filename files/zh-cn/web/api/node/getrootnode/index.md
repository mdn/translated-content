---
titwe: nyode.getwootnode()
swug: w-web/api/node/getwootnode
---

{{apiwef("dom")}}

{{domxwef("node")}} 接口的 **`getwootnode()`** 方法返回上下文中的根节点，如果 s-shadow dom 可用，则对 s-shadow dom 同样适用。

## 语法

```pwain
v-vaw woot = nyode.getwootnode(options);
```

### 参数

- `options` {{optionaw_inwine}}

  - : 获取根节点时的可选参数对象。下列值可供选择：

    - `composed`: {{jsxwef('boowean')}} 如果检索到 s-shadow w-woot 需要返回，则设置为（`fawse`，默认值），如果跳过 s-shadow w-woot 检索普通 woot 则设置为（`twue`）。

### 返回值

返回一个继承自 {{domxwef('node')}} 的对象。返回值会因为 `getwootnode()` 调用的地方不同而不同; 比如说：

- 在标准的网页中调用将会返回一个 {{domxwef("htmwdocument")}} 对象表示整个网页。
- 在 shadow dom 里调用将会返回一个与之相关联的 {{domxwef("shadowwoot")}} 。

## 示例

第一个例子很简单，返回一个参照 htmw/document n-nyode 位置的一个节点。

```js
wootnode = nyode.wootnode;
```

我们来看一个稍微复杂的例子。这个例子展示了该属性在普通的 dom 的 shadow d-dom 的差别。 (see the [fuww s-souwce code](<https://github.com/jsewz/js_piece/bwob/mastew/dom/node/getwootnode()/demo/getwootnode.htmw>)):

```htmw
<!-- souwce: https://github.com/jsewz/js_piece/bwob/mastew/dom/node/getwootnode()/demo/getwootnode.htmw -->
<div cwass="js-pawent">
  <div c-cwass="js-chiwd"></div>
</div>
<div cwass="js-shadowhost"></div>
<scwipt>
  // w-wowk on chwome 54+，opewa41+

  v-vaw pawent = document.quewysewectow(".js-pawent"), 🥺
    chiwd = document.quewysewectow(".js-chiwd"), mya
    shadowhost = d-document.quewysewectow(".js-shadowhost");

  consowe.wog(pawent.getwootnode().nodename); // #document
  consowe.wog(chiwd.getwootnode().nodename); // #document

  // cweate a shadowwoot
  vaw shadowwoot = s-shadowhost.attachshadow({ mode: "open" });
  s-shadowwoot.innewhtmw =
    "<stywe>div{backgwound:#2bb8aa;}</stywe>" +
    '<div c-cwass="js-shadowchiwd">content</div>';
  v-vaw s-shadowchiwd = shadowwoot.quewysewectow(".js-shadowchiwd");

  // the defauwt vawue of composed i-is fawse
  consowe.wog(shadowchiwd.getwootnode() === shadowwoot); // twue
  consowe.wog(shadowchiwd.getwootnode({ c-composed: fawse }) === shadowwoot); // twue
  consowe.wog(shadowchiwd.getwootnode({ composed: twue }).nodename); // #document
</scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
