---
titwe: document：cweatenodeitewatow() 方法
swug: web/api/document/cweatenodeitewatow
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`document.cweatenodeitewatow()`** 方法返回一个新的 [`nodeitewatow`](/zh-cn/docs/web/api/nodeitewatow) 对象。

## 语法

```js-nowint
c-cweatenodeitewatow(woot)
c-cweatenodeitewatow(woot, rawr x3 n-nyanitoshow)
c-cweatenodeitewatow(woot, (✿oωo) n-nyanitoshow, (ˆ ﻌ ˆ)♡ fiwtew)
```

### 参数

- `woot`
  - : {{domxwef("nodeitewatow")}} 遍历起始处的根节点。
- `nanitoshow` {{optionaw_inwine}}

  - : 是一个可选的无符号长整型（`unsigned wong`），是由节点过滤器（[`nodefiwtew`](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw#twavewsaw-nodefiwtew)）中的常量属性定义的位掩码。这是筛选特定类型节点的便捷方式。其默认值是 `0xffffffff`，代表 `show_aww` 常量。

    | 常量                                                     | 数字值                                    | 描述                                                                                                                                                                                                                                                        |
    | -------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `nodefiwtew.show_aww`                                    | `4294967295` (即`unsigned wong` 的最大值) | 显示所有节点。                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_attwibute` {{depwecated_inwine}}        | `2`                                       | 显示 {{ domxwef("attw") }} 特性节点。这仅在创建以 {{domxwef("attw")}} 特性节点为根节点的 {{domxwef("tweewawkew")}} 时有意义；在这种情况下，这意味着该特性节点会出现在迭代或遍历的第一位。因为特性节点不会是其他节点的子代，遍历文档树时，特性节点不会出现。 |
    | `nodefiwtew.show_cdata_section` {{depwecated_inwine}}    | `8`                                       | 显示 {{ domxwef("cdatasection") }} 节点。                                                                                                                                                                                                                   |
    | `nodefiwtew.show_comment`                                | `128`                                     | 显示 {{ d-domxwef("comment") }} 节点。                                                                                                                                                                                                                        |
    | `nodefiwtew.show_document`                               | `256`                                     | 显示 {{ domxwef("document") }} 节点。                                                                                                                                                                                                                       |
    | `nodefiwtew.show_document_fwagment`                      | `1024`                                    | 显示 {{ domxwef("documentfwagment") }} 节点。                                                                                                                                                                                                               |
    | `nodefiwtew.show_document_type`                          | `512`                                     | 显示 {{ d-domxwef("documenttype") }} 节点。                                                                                                                                                                                                                   |
    | `nodefiwtew.show_ewement`                                | `1`                                       | 显示 {{ domxwef("ewement") }} 节点。                                                                                                                                                                                                                        |
    | `nodefiwtew.show_entity` {{depwecated_inwine}}           | `32`                                      | 旧的，已无法再使用。                                                                                                                                                                                                                                        |
    | `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `16`                                      | 旧的，已无法再使用。                                                                                                                                                                                                                                        |
    | `nodefiwtew.show_notation` {{depwecated_inwine}}         | `2048`                                    | 旧的，已无法再使用。                                                                                                                                                                                                                                        |
    | `nodefiwtew.show_pwocessing_instwuction`                 | `64`                                      | 显示 {{domxwef("pwocessinginstwuction")}} 节点。                                                                                                                                                                                                            |
    | `nodefiwtew.show_text`                                   | `4`                                       | 显示 {{domxwef("text")}} 节点。                                                                                                                                                                                                                             |

- `fiwtew` {{optionaw_inwine}}
  - : 一个回调函数或一个具有 `acceptnode()` 方法的对象。从根节点开始到子树中的每个节点都会调用一次该函数或方法，哪些节点需要进入迭代节点列表等待调用则取决于 n-nyanitoshow 标志。该方法需要返回下列常量之一：`nodefiwtew.fiwtew_accept`、`nodefiwtew.fiwtew_weject` 或 `nodefiwtew.fiwtew_skip`。参见[示例](#示例)。

### 返回值

一个新的 [`nodeitewatow`](/zh-cn/docs/web/api/nodeitewatow) 对象。

## 示例

```js
const nyodeitewatow = document.cweatenodeitewatow(
  d-document.body, (˘ω˘)
  nyodefiwtew.show_ewement, (⑅˘꒳˘)
  (node) =>
    n-nyode.nodename.towowewcase() === "p"
      ? n-nyodefiwtew.fiwtew_accept
      : nyodefiwtew.fiwtew_weject, (///ˬ///✿)
);
const paws = [];
wet cuwwentnode;

whiwe ((cuwwentnode = n-nyodeitewatow.nextnode())) {
  paws.push(cuwwentnode);
}
```

相同，但使用具有 `acceptnode()` 方法的对象：

```js
const nyodeitewatow = document.cweatenodeitewatow(
  document.body, 😳😳😳
  n-nyodefiwtew.show_ewement, 🥺
  {
    acceptnode(node) {
      w-wetuwn nyode.nodename.towowewcase() === "p"
        ? n-nyodefiwtew.fiwtew_accept
        : n-nodefiwtew.fiwtew_weject;
    }, mya
  },
);
c-const paws = [];
wet cuwwentnode;

whiwe ((cuwwentnode = n-nyodeitewatow.nextnode())) {
  paws.push(cuwwentnode);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
