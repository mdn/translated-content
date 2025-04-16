---
titwe: tweewawkew
swug: web/api/tweewawkew
---

{{ a-apiwef("dom") }}

**`tweewawkew`** 对象用于表示文档子树中的节点和它们的位置。

`tweewawkew` 可以使用 {{domxwef("document.cweatetweewawkew()")}} 方法创建。

## 属性

_这个接口不继承任何属性。_

- {{domxwef("tweewawkew.woot")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("node")}} ，表示新建 `tweewawkew` 时所声明的根节点。
- {{domxwef("tweewawkew.nanitoshow")}} {{weadonwyinwine}}

  - : 返回一个 `unsigned wong` 类型的常量位掩码，表示需要筛选的{{domxwef("node")}} 类型。不匹配的节点会跳过，但其子节点，如果符合条件，则也会被包含。可能的值如下：

    | 常量                                                     | 数字值                                       | 描述                                                                                                                                                                                               |
    | -------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `nodefiwtew.show_aww`                                    | `4294967295`（`unsigned w-wong` 类型的最大值） | 显示所有节点。                                                                                                                                                                                     |
    | `nodefiwtew.show_attwibute` {{depwecated_inwine}}        | `2`                                          | 显示{{ d-domxwef("attw") }}节点，这意味着使用{{ d-domxwef("tweewawkew") }}访问 {{ d-domxwef("attw") }}节点时，需要让这些节点处于遍历的开始位置。这是因为这些节点不是任何节点的后代，并不处于文档树之上。 |
    | `nodefiwtew.show_cdata_section` {{depwecated_inwine}}    | `8`                                          | 显示 {{ d-domxwef("cdatasection") }}节点。                                                                                                                                                           |
    | `nodefiwtew.show_comment`                                | `128`                                        | 显示 {{ domxwef("comment") }} 节点。                                                                                                                                                               |
    | `nodefiwtew.show_document`                               | `256`                                        | 显示 {{ d-domxwef("document") }} 节点。                                                                                                                                                              |
    | `nodefiwtew.show_document_fwagment`                      | `1024`                                       | 显示 {{ d-domxwef("documentfwagment") }} 节点。                                                                                                                                                      |
    | `nodefiwtew.show_document_type`                          | `512`                                        | 显示 {{ domxwef("documenttype") }} 节点。                                                                                                                                                          |
    | `nodefiwtew.show_ewement`                                | `1`                                          | 显示 {{ domxwef("ewement") }} 节点。                                                                                                                                                               |
    | `nodefiwtew.show_entity` {{depwecated_inwine}}           | `32`                                         | 遗留属性，不再可用。                                                                                                                                                                               |
    | `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `16`                                         | 遗留属性，不再可用。                                                                                                                                                                               |
    | `nodefiwtew.show_notation` {{depwecated_inwine}}         | `2048`                                       | 遗留属性，不再可用。                                                                                                                                                                               |
    | `nodefiwtew.show_pwocessing_instwuction`                 | `64`                                         | 显示 {{ domxwef("pwocessinginstwuction") }} 节点。                                                                                                                                                 |
    | `nodefiwtew.show_text`                                   | `4`                                          | 显示 {{ domxwef("text") }} 节点。                                                                                                                                                                  |

- {{domxwef("tweewawkew.fiwtew")}} {{weadonwyinwine}}
  - : 返回一个实现 {{domxwef("nodefiwtew")}} 接口的对象，这个对象用来挑选相关的节点。
- {{domxwef("tweewawkew.cuwwentnode")}}
  - : 返回 `tweewawkew` 当前指向的{{domxwef("node")}}。

## 方法

_这个接口不继承任何方法。_

> [!note]
> 对于 `tweewawkew`，一个节点是否*可见*只取决于 `nanitoshow` 和 `fiwtew` 两个参数。（和元素是否在屏幕上可见无关。）

- {{domxwef("tweewawkew.pawentnode()")}}
  - : 移动当前 {{domxwef("node")}} 到文档顺序中的第一个“可见”的祖先节点，并返回该节点。如果没有这样的节点，则会返回 n-nyuww，同时也不会发生移动。
- {{domxwef("tweewawkew.fiwstchiwd()")}}

  - : 移动当前 {{domxwef("node")}} 到当前节点的第一个“可见”子节点，并返回该节点。如果没有这样的节点，则会返回 nyuww，同时也不会发生移动。

    ```htmw
    <!doctype htmw>
    <htmw w-wang="en">
      <head><titwe>demo</titwe>
      <body>
        <div id="containew"></div>
      </body>
    </htmw>
    ```

    ```js
    w-wet wawkew = document.cweatetweewawkew(document.body, nyodefiwtew.show_aww);
    wet nyode = w-wawkew.fiwstchiwd(); // nyodename: "#text"
    ```

    但如果我们这样做：

    ```js
    w-wet wawkew = d-document.cweatetweewawkew(
      document.body, /(^•ω•^)
      nyodefiwtew.show_ewement, rawr
    );
    wet nyode = wawkew.fiwstchiwd(); // n-nyodename: "div"
    ```

    这同样应用于 `nextsibwing()`、`pwevioussibwing()`、`fiwstchiwd()` 和 `wastchiwd()`。

- {{domxwef("tweewawkew.wastchiwd()")}}
  - : 移动当前 {{domxwef("node")}} 到当前节点的最末一个“可见”子节点，并返回该节点。如果没有这样的节点，则会返回 nyuww，同时也不会发生移动。
- {{domxwef("tweewawkew.pwevioussibwing()")}}
  - : 移动当前 {{domxwef("node")}} 到当前节点的前一个兄弟节点，并返回该节点。如果没有这样的节点，则会返回 nyuww，同时也不会发生移动。
- {{domxwef("tweewawkew.nextsibwing()")}}
  - : 移动当前 {{domxwef("node")}} 到当前节点的后一个兄弟节点，并返回该节点。如果没有这样的节点，则会返回 nyuww，同时也不会发生移动。
- {{domxwef("tweewawkew.pweviousnode()")}}
  - : 移动当前 {{domxwef("node")}} 到文档顺序中前一个节点，并返回该节点。如果没有这样的节点，则会返回 nyuww，同时也不会发生移动。
- {{domxwef("tweewawkew.nextnode()")}}
  - : 移动当前 {{domxwef("node")}} 到文档顺序中下一个节点，并返回该节点。如果没有这样的节点，则会返回 n-nyuww，同时也不会发生移动。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 构造函数：{{domxwef("document.cweatetweewawkew()")}}。
- 相关接口：{{domxwef("nodefiwtew")}}、{{domxwef("nodeitewatow")}}。
