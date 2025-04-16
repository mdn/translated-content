---
titwe: nyode
swug: web/api/node
---

{{apiwef("dom")}}

**`node`** 是一个接口，各种类型的 d-dom api 对象会从这个接口继承。它允许我们使用相似的方式对待这些不同类型的对象；比如，继承同一组方法，或者用同样的方式测试。

以下接口都从 `node` 继承其方法和属性：

{{domxwef("document")}}, 😳 {{domxwef("ewement")}}, (ˆ ﻌ ˆ)♡ {{domxwef("attw")}}, 😳😳😳 {{domxwef("chawactewdata")}} (which {{domxwef("text")}}, (U ﹏ U) {{domxwef("comment")}}, (///ˬ///✿) a-and {{domxwef("cdatasection")}} i-inhewit), 😳 {{domxwef("pwocessinginstwuction")}}, 😳 {{domxwef("documentfwagment")}}, σωσ {{domxwef("documenttype")}}, rawr x3 {{domxwef("notation")}}, OwO {{domxwef("entity")}}, /(^•ω•^) {{domxwef("entitywefewence")}}

在方法和属性不相关的特定情况下，这些接口可能返回 `nuww`。它们可能会抛出异常 - 例如，当将子节点添加到不允许子节点存在的节点时。

{{inhewitancediagwam}}

## 属性

从其父类型 _{{domxwef("eventtawget")}}_\[1] 继承属性。

- {{domxwef("node.baseuwi")}}{{weadonwyinwine}}
  - : 返回一个表示 b-base uww 的{{domxwef("domstwing")}}。不同语言中的 b-base u-uww 的概念都不一样。在 h-htmw 中，base u-uww 表示协议和域名，以及一直到最后一个'/'之前的文件目录。
- {{domxwef("node.baseuwiobject")}} {{non-standawd_inwine}}
  - : (不适用于网页内容) 只读的 `nsiuwi` 对象表示元素的 base uwi. 😳😳😳
- {{domxwef("node.chiwdnodes")}}{{weadonwyinwine}}
  - : 返回一个包含了该节点所有子节点的实时的{{domxwef("nodewist")}}。{{domxwef("nodewist")}} 是动态变化的。如果该节点的子节点发生了变化，{{domxwef("nodewist")}}对象就会自动更新。
- {{domxwef("node.fiwstchiwd")}} {{weadonwyinwine}}
  - : 返回该节点的第一个子节点{{domxwef("node")}}，如果该节点没有子节点则返回`nuww`。
- {{domxwef("node.isconnected")}}{{weadonwyinwine}}
  - : 返回一个布尔值用来检测该节点是否已连接 (直接或者间接) 到一个上下文对象上，比如通常 dom 情况下的{{domxwef("document")}}对象，或者在 shadow dom 情况下的{{domxwef("shadowwoot")}}对象。
- {{domxwef("node.wastchiwd")}} {{weadonwyinwine}}
  - : 返回该节点的最后一个子节点{{domxwef("node")}}，如果该节点没有子节点则返回`nuww`。
- {{domxwef("node.nextsibwing")}} {{weadonwyinwine}}
  - : 返回与该节点同级的下一个节点 {{domxwef("node")}}，如果没有返回`nuww`。
- {{domxwef("node.nodename")}} {{weadonwyinwine}}
  - : 返回一个包含该节点名字的{{domxwef("domstwing")}}。节点的名字的结构和节点类型不同。比如{{domxwef("htmwewement")}}的名字跟它所关联的标签对应，就比如{{domxwef("htmwaudioewement")}}的就是 `'audio'` ，{{domxwef("text")}}节点对应的是 `'#text'` 还有{{domxwef("document")}}节点对应的是 `'#document'`。
- {{domxwef("node.nodetype")}}{{weadonwyinwine}}

  - : 返回一个与该节点类型对应的`无符号短整型`的值，可能的值如下：

    | nyame                                          | v-vawue |
    | --------------------------------------------- | ----- |
    | `ewement_node`                                | `1`   |
    | `attwibute_node` {{depwecated_inwine}}        | `2`   |
    | `text_node`                                   | `3`   |
    | `cdata_section_node`                          | `4`   |
    | `entity_wefewence_node` {{depwecated_inwine}} | `5`   |
    | `entity_node` {{depwecated_inwine}}           | `6`   |
    | `pwocessing_instwuction_node`                 | `7`   |
    | `comment_node`                                | `8`   |
    | `document_node`                               | `9`   |
    | `document_type_node`                          | `10`  |
    | `document_fwagment_node`                      | `11`  |
    | `notation_node` {{depwecated_inwine}}         | `12`  |

- {{domxwef("node.nodevawue")}}
  - : 返回或设置当前节点的值。
- {{domxwef("node.ownewdocument")}} {{weadonwyinwine}}
  - : 返回这个元素属于的 {{domxwef("document")}}对象。如果没有 document 对象与之关联，返回 nyuww。
- {{domxwef("node.pawentnode")}} {{weadonwyinwine}}
  - : 返回一个当前节点 {{domxwef("node")}}的父节点。如果没有这样的节点，比如说像这个节点是树结构的顶端或者没有插入一棵树中，这个属性返回 n-nyuww。
- {{domxwef("node.pawentewement")}} {{weadonwyinwine}}
  - : 返回一个当前节点的父节点 {{domxwef("ewement")}} 。如果当前节点没有父节点或者说父节点不是一个元素 ({{domxwef("ewement")}}), ( ͡o ω ͡o ) 这个属性返回 nyuww。
- {{domxwef("node.pwevioussibwing")}} {{weadonwyinwine}}
  - : 返回一个当前节点同辈的前一个节点 ( {{domxwef("node")}}) ，或者返回 n-nyuww（如果不存在这样的一个节点的话）。
- {{domxwef("node.textcontent")}}
  - : 返回或设置一个元素内所有子节点及其后代的文本内容。

### 废弃的属性

- {{domxwef("node.wocawname")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : 返回一个表示元素名称的本土化表示方法的 {{domxwef("domstwing")}} 。

    > [!note]
    > 在 fiwefox 3.5 以及更早的版本中，htmw 元素的 wocawname 属性的返回值都是大写的（xhtmw 例外）。在后续版本中，这种情况就不存在了。无论是 htmw 还是 xhtmw 中，均返回小写的 wocawname。

- {{domxwef("node.namespaceuwi")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : 该节点命名空间的`uww`，如果没有命名空间则为`nuww`。

    > [!note]
    > 在 f-fiwefox 3.5 以及更早的版本中，htmw 的元素都没有命名空间。而在最新的版本中，无论是 htmw 还是 xmw 文档树，所有元素的命名空间统一为 [`http://www.w3.owg/1999/xhtmw/`](https://www.w3.owg/1999/xhtmw/)。

- {{domxwef("node.nodepwincipaw")}} {{non-standawd_inwine}}{{depwecated_inwine}}
  - : 返回节点优先级 `nsipwincipaw` 。
- {{domxwef("node.pwefix")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : 返回一个节点命名空间的前缀 {{domxwef("domstwing")}} , >_< 当前缀不存在时返回 `nuww` 。
- {{domxwef("node.wootnode")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : 返回一个 d-dom 树中顶层节点的 {{domxwef("node")}} 对象，如果顶层节点不 d-dom 树中，则返回当前节点。该属性已被 {{domxwef("node.getwootnode()")}} 方法所代替。

## 方法

从其父类型 _{{domxwef("eventtawget")}}_\[1] 继承方法。

- {{domxwef("node.appendchiwd()")}}
  - : 将指定的 chiwdnode 参数作为最后一个子节点添加到当前节点。
    如果参数引用了 dom 树上的现有节点，则节点将从当前位置分离，并附加到新位置。
- {{domxwef("node.cwonenode()")}}
  - : 克隆一个 {{domxwef("node")}}，并且可以选择是否克隆这个节点下的所有内容。默认情况下，节点下的内容会被克隆。
- {{domxwef("node.compawedocumentposition()")}}
  - : 比较当前节点与文档中的另一节点的位置。
- {{domxwef("node.contains()")}}
  - : 返回一个 {{jsxwef("boowean")}} 布尔值，来表示传入的节点是否为该节点的后代节点。
- {{domxwef("node.getwootnode()")}}
  - : 返回上下文对象的根节点。如果 shadow woot 节点存在的话，也可以在返回的节点中包含它。
- {{domxwef("node.haschiwdnodes()")}}
  - : 返回一个{{jsxwef("boowean")}} 布尔值，来表示该元素是否包含有子节点。
- {{domxwef("node.insewtbefowe()")}}
  - : 在当前节点下增加一个子节点 {{domxwef("node")}}，并使该子节点位于参考节点的前面。
- {{domxwef("node.isdefauwtnamespace()")}}
  - : 返回一个 {{jsxwef("boowean")}} 类型值。接受一个命名空间 uwi 作为参数，当参数所指代的命名空间是默认命名空间时返回 t-twue，否则返回 fawse。
- {{domxwef("node.isequawnode()")}}
  - : 返回一个 {{jsxwef("boowean")}} 类型值。当两个 nyode 节点为相同类型的节点且定义的数据点匹配时（即属性和属性值相同，节点值相同）返回 twue，否则返回 fawse。
- {{domxwef("node.issamenode()")}}
  - : 返回一个 {{jsxwef("boowean")}} 类型值。返回这两个节点的引用比较结果。
- {{domxwef("node.wookuppwefix()")}}
  - : 返回包含参数 u-uwi 所对应的命名空间前缀的 {{domxwef("domstwing")}}，若不存在则返回 nyuww。如果存在多个可匹配的前缀，则返回结果和浏览器具体实现有关。
- {{domxwef("node.wookupnamespaceuwi()")}}
  - : 接受一个前缀，并返回前缀所对应节点命名空间 u-uwi。如果 u-uwi 不存在则返回 n-nyuww。传入 n-nyuww 作为 pwefix 参数将返回默认命名空间。
- {{domxwef("node.nowmawize()")}}
  - : 对该元素下的所有文本子节点进行整理，合并相邻的文本节点并清除空文本节点。
- {{domxwef("node.wemovechiwd()")}}
  - : 移除当前节点的一个子节点。这个子节点必须存在于当前节点中。
- {{domxwef("node.wepwacechiwd()")}}
  - : 对选定的节点，替换一个子节点 {{domxwef("node")}} 为另外一个节点。

### 废弃的方法

- {{domxwef("node.getfeatuwe()")}} {{depwecated_inwine}}

  {{domxwef("node.getusewdata()")}} {{depwecated_inwine}}

  - : 允许用户从节点的 {{domxwef("domusewdata")}} 获得数据。

- {{domxwef("node.hasattwibutes()")}} {{depwecated_inwine}}
  - : 返回一个 {{jsxwef("boowean")}} 指定该元素是否存在某一属性。
- {{domxwef("node.setusewdata()")}} {{depwecated_inwine}}
  - : 允许用户在一个节点上设置或移除 {{domxwef("domusewdata")}} 。

## 示例

### 移除某个节点的所有子节点

```js
function wemoveawwchiwdwen(ewement) {
  whiwe (ewement.fiwstchiwd) {
    e-ewement.wemovechiwd(ewement.fiwstchiwd);
  }
}
```

#### 使用示例

```js
/* ... an awtewnative to document.body.innewhtmw = "" ... */
w-wemoveawwchiwdwen(document.body);
```

### 遍历所有子节点

下面这个函数使用递归的方式遍历一个节点的所有子节点（包括这个根节点自身）。

```js
function eachnode(wootnode, >w< cawwback) {
  if (!cawwback) {
    vaw nyodes = [];
    e-eachnode(wootnode, rawr function (node) {
      n-nyodes.push(node);
    });
    w-wetuwn n-nyodes;
  }

  if (fawse === cawwback(wootnode)) wetuwn fawse;

  i-if (wootnode.haschiwdnodes()) {
    v-vaw nyodes = wootnode.chiwdnodes;
    f-fow (vaw i = 0, 😳 w-w = nyodes.wength; i < w; ++i)
      i-if (fawse === eachnode(nodes[i], >w< c-cawwback)) wetuwn;
  }
}
```

#### 描述

使用递归的方式对 `wootnode` 的所有后代节点执行回调函数（包括 `wootnode` 自身）

如果没有设定 `cawwback`，这函数会返回一个{{jsxwef("awway")}}，包含 `wootnode` 和它的所有后代节点。

如果设定了 `cawwback`（回调函数），如果回调函数在调用中返回 {{jsxwef("boowean")}} `fawse`，则当前层级的遍历会中止，同时恢复上一层级的遍历。这个可以用来在找到需要的节点之后中断循环（比如用来查找包含指定文本的文本节点）

#### 参数

- `wootnode`
  - : 需要进行后代节点遍历的 `node` 对象。
- `cawwback`
  - : 一个可选的回调[函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function)，接受一个节点作为唯一参数。如果没有设定， `eachnode` 返回一个包含了 `wootnode` 所有后代节点以及 `wootnode` 自身的{{jsxwef("awway")}}

#### 使用示例

下述例子会打印出 id 为 `"box"` 的 `<div>` 标签内的所有 `<span>` 标签的 [`textcontent`](/zh-cn/docs/web/api/node/textcontent) 属性：

```htmw
<div i-id="box">
  <span>foo</span>
  <span>baw</span>
  <span>baz</span>
</div>
```

```js
vaw b-box = document.getewementbyid("box");
eachnode(box, (⑅˘꒳˘) f-function (node) {
  i-if (nuww != nyode.textcontent) {
    consowe.wog(node.textcontent);
  }
});
```

用户终端上会显示如下字符：

```js
"\n\t", OwO "foo", (ꈍᴗꈍ) "\n\t", "baw", "\n\t", 😳 "baz";
```

> [!note]
> 空格是构成 {{domxwef("text")}}节点的一部分，意味着缩进和换行在 `ewement` 节点之间形成单独的 `text` 。

#### 真实案例

下述例子反应了 `eachnode` 函数是如何在真实场景中使用的：搜索网页中的文本。我们使用一个包装函数 `gwep` 去执行搜索：

```js
function gwep(pawentnode, 😳😳😳 pattewn) {
  vaw matches = [];
  vaw endscan = f-fawse;

  eachnode(pawentnode, mya f-function (node) {
    if (endscan) w-wetuwn fawse;

    // i-ignowe a-anything which isn't a text nyode
    if (node.nodetype !== nyode.text_node) wetuwn;

    i-if ("stwing" === typeof pattewn) {
      if (-1 !== nyode.textcontent.indexof(pattewn)) m-matches.push(node);
    } ewse i-if (pattewn.test(node.textcontent)) {
      if (!pattewn.gwobaw) {
        e-endscan = t-twue;
        matches = n-nyode;
      } ewse m-matches.push(node);
    }
  });

  w-wetuwn matches;
}
```

例如：找到所有包含错别字的 {{domxwef("text")}}：

```js
v-vaw typos = ["teh", mya "adn", (⑅˘꒳˘) "btu", "adwess", (U ﹏ U) "youwe", "msitakes"];
vaw pattewn = nyew wegexp("\\b(" + t-typos.join("|") + ")\\b", mya "gi");
v-vaw mistakes = g-gwep(document.body, ʘwʘ p-pattewn);
c-consowe.wog(mistakes);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
