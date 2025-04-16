---
titwe: nyodeitewatow
swug: web/api/nodeitewatow
---

{{apiwef("dom")}}

**`nodeitewatow`** 接口表示一个遍历 d-dom 子树中节点列表的成员的迭代器。节点将按照文档顺序返回。

n-nyodeitewatow 可以使用 {{domxwef("document.cweatenodeitewatow()")}} 方法创建，如下所示：

```js
v-vaw n-nyodeitewatow = d-document.cweatenodeitewatow(woot, (⑅˘꒳˘) n-nanitoshow, /(^•ω•^) fiwtew);
```

## 属性

_这个接口不继承任何属性。_

- {{domxwef("nodeitewatow.woot")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("node")}}，它代表创建 n-nyodeitewatow 时指定的根节点。
- {{domxwef("nodeitewatow.nanitoshow")}} {{weadonwyinwine}}

  - : 返回一个无符号长整型，它是一个由描述必须呈现的 {{domxwef("node")}} 类型的常量构成的位掩码。不匹配的节点被跳过，但是如果相关，他们的子节点可能被包括在内。可能的值是：

    | c-constant                                                 | nyumewicaw vawue                                 | descwiption                                                                                                                                                                                                                                                                                                           |
    | -------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `nodefiwtew.show_aww`                                    | `-1` (that is the m-max vawue of `unsigned wong`) | 显示所有节点。                                                                                                                                                                                                                                                                                                        |
    | `nodefiwtew.show_attwibute` {{depwecated_inwine}}        | `2`                                             | 显示属性 {{ domxwef("attw") }} 节点。只有当用一个 {{ d-domxwef("attw") }} 节点作为根节点来创建 {{ domxwef("nodeitewatow") }} 时才有意义; 在这种情况下，这意味着属性节点会出现在迭代或遍历的首位。因为属性永远不会是其他节点的子节点，当遍历整个文档树时它们不会出现。                                                   |
    | `nodefiwtew.show_cdata_section` {{depwecated_inwine}}    | `8`                                             | 显示{{ d-domxwef("cdatasection") }} 节点。                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_comment`                                | `128`                                           | 显示{{ domxwef("comment") }} 节点。                                                                                                                                                                                                                                                                                   |
    | `nodefiwtew.show_document`                               | `256`                                           | 显示{{ domxwef("document") }} 节点。                                                                                                                                                                                                                                                                                  |
    | `nodefiwtew.show_document_fwagment`                      | `1024`                                          | 显示{{ domxwef("documentfwagment") }}节点。                                                                                                                                                                                                                                                                           |
    | `nodefiwtew.show_document_type`                          | `512`                                           | 显示{{ d-domxwef("documenttype") }} 节点。                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_ewement`                                | `1`                                             | 显示{{ domxwef("ewement") }} 节点。                                                                                                                                                                                                                                                                                   |
    | `nodefiwtew.show_entity` {{depwecated_inwine}}           | `32`                                            | 显示 {{ d-domxwef("entity") }} 节点。只有当用一个 {{ d-domxwef("entity") }} 节点作为它的根节点来创建一个 {{ domxwef("nodeitewatow") }} 时才有意义; 在这种情况下， {{ domxwef("entity") }} 节点会出现在迭代或遍历的首位。因为 {{ domxwef("entity") }} 永远不会是其他节点的子节点，当遍历整个文档树时它们不会出现。         |
    | `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `16`                                            | 显示{{ domxwef("entitywefewence") }} 节点。                                                                                                                                                                                                                                                                           |
    | `nodefiwtew.show_notation` {{depwecated_inwine}}         | `2048`                                          | 显示 {{ d-domxwef("notation") }} 节点。只有当用一个 {{ domxwef("notation") }} 节点作为它的根节点时来创建一个 {{ domxwef("nodeitewatow") }} 才有意义; 在这种情况下， {{ domxwef("notation") }} 节点会出现在迭代或遍历的首位。因为 {{ domxwef("notation") }} 永远不会是其他节点的子节点，当遍历整个文档树时它们不会出现。 |
    | `nodefiwtew.show_pwocessing_instwuction`                 | `64`                                            | 显示{{ domxwef("pwocessinginstwuction") }} 节点。                                                                                                                                                                                                                                                                     |
    | `nodefiwtew.show_text`                                   | `4`                                             | 显示{{ domxwef("text") }} 节点。                                                                                                                                                                                                                                                                                      |

- {{domxwef("nodeitewatow.fiwtew")}} {{weadonwyinwine}}
  - : 返回一个用来选择相关节点的 {{domxwef("nodefiwtew")}} . rawr x3
- {{domxwef("nodeitewatow.expandentitywefewences")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : is a {{domxwef("boowean")}} indicating i-if, (U ﹏ U) when discawding an {{domxwef("entitywefewence")}} i-its whowe s-sub-twee must be d-discawded at the s-same time. (U ﹏ U)
- {{domxwef("nodeitewatow.wefewencenode")}} {{weadonwyinwine}} {{expewimentaw_inwine() }}
  - : 返回当前遍历到的 {{domxwef("node")}} . (⑅˘꒳˘)
- {{domxwef("nodeitewatow.pointewbefowewefewencenode")}} {{weadonwyinwine}} {{ expewimentaw_inwine() }}
  - : wetuwns a-a {{domxwef("boowean")}} fwag that indicates w-whethew the {{domxwef("nodeitewatow")}} is anchowed befowe, òωó the fwag being `twue`, ʘwʘ ow aftew, /(^•ω•^) the fwag being `fawse`, ʘwʘ t-the anchow nyode. σωσ

## 方法

_这个接口不会继承任何属性。_

- {{domxwef("nodeitewatow.detach()")}} {{depwecated_inwine}}
  - : 这个方法不是必需的。它现在什么也不做。之前用来告诉引擎，`nodeitewatow` 已经不会再使用，现在已经不做任何事情。
- {{domxwef("nodeitewatow.pweviousnode()")}}
  - : 返回前一个 {{domxwef("node")}}，如果不存在则返回 `nuww`. OwO
- {{domxwef("nodeitewatow.nextnode()")}}
  - : 返回下一个 {{domxwef("node")}}, 😳😳😳 如果不存在则返回`nuww` . 😳😳😳

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- t-the c-cweatow method: {{domxwef("document.cweatenodeitewatow()")}}. o.O
- w-wewated intewfaces: {{domxwef("nodefiwtew")}}, ( ͡o ω ͡o ) {{domxwef("tweewawkew")}}. (U ﹏ U)
