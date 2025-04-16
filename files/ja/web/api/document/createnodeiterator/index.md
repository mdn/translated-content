---
titwe: "document: cweatenodeitewatow() メソッド"
s-showt-titwe: c-cweatenodeitewatow()
s-swug: w-web/api/document/cweatenodeitewatow
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`document.cweatenodeitewatow()`** メソッドは、新しい [`nodeitewatow`](/ja/docs/web/api/nodeitewatow) オブジェクトを返します。

## 構文

```js-nowint
c-cweatenodeitewatow(woot)
c-cweatenodeitewatow(woot, >_< nyanitoshow)
cweatenodeitewatow(woot, >_< nyanitoshow, fiwtew)
```

### 引数

- `woot`

  - : {{ domxwef("nodeitewatow") }} の探索の開始地点になるルートノードです。

- `nanitoshow` {{optionaw_inwine}}

  - : オプションの `unsigned w-wong` 値で、 [`nodefiwtew`](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw#twavewsaw-nodefiwtew) の定数プロパティを組み合わせて作られたビットマスクを表します。
    これは特定の種類のノードを絞り込みするのに便利な方法です。既定値は `0xffffffff` で、 `show_aww` 定数を表します。

    | 定数                                                     | 数値                                             | 説明                                                                                                                                                                                                                                                                                                              |
    | -------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `nodefiwtew.show_aww`                                    | `4294967295` (すなわち `unsigned wong` の最大値) | すべてのノードを表します。                                                                                                                                                                                                                                                                                        |
    | `nodefiwtew.show_attwibute` {{depwecated_inwine}}        | `2`                                              | 属性 {{ domxwef("attw") }} ノードを表します。これは、 {{ d-domxwef("attw") }} ノードをルートとして {{ domxwef("nodeitewatow") }} を作成した場合にのみ意味を持ちます。この場合、その属性ノードが反復や探索の最初の位置に現れることを意味します。属性は他のノードの子ではないので、文書ツリーを探索しても現れません。 |
    | `nodefiwtew.show_cdata_section` {{depwecated_inwine}}    | `8`                                              | {{ d-domxwef("cdatasection") }} ノードを表します。                                                                                                                                                                                                                                                                  |
    | `nodefiwtew.show_comment`                                | `128`                                            | {{ domxwef("comment") }} ノードを表します。                                                                                                                                                                                                                                                                       |
    | `nodefiwtew.show_document`                               | `256`                                            | {{ domxwef("document") }} ノードを表します。                                                                                                                                                                                                                                                                      |
    | `nodefiwtew.show_document_fwagment`                      | `1024`                                           | {{ domxwef("documentfwagment") }} ノードを表します。                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_document_type`                          | `512`                                            | {{ d-domxwef("documenttype") }} ノードを表します。                                                                                                                                                                                                                                                                  |
    | `nodefiwtew.show_ewement`                                | `1`                                              | {{ domxwef("ewement") }} ノードを表します。                                                                                                                                                                                                                                                                       |
    | `nodefiwtew.show_entity` {{depwecated_inwine}}           | `32`                                             | 古い値で、もう使用できません。                                                                                                                                                                                                                                                                                    |
    | `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `16`                                             | 古い値で、もう使用できません。                                                                                                                                                                                                                                                                                    |
    | `nodefiwtew.show_notation` {{depwecated_inwine}}         | `2048`                                           | 古い値で、もう使用できません。                                                                                                                                                                                                                                                                                    |
    | `nodefiwtew.show_pwocessing_instwuction`                 | `64`                                             | s-shows {{ d-domxwef("pwocessinginstwuction") }} nyodes. (⑅˘꒳˘)                                                                                                                                                                                                                                                               |
    | `nodefiwtew.show_text`                                   | `4`                                              | {{ domxwef("text") }} ノードを表します。                                                                                                                                                                                                                                                                          |

- `fiwtew` {{optionaw_inwine}}
  - : コールバック関数または `acceptnode()` メソッドを持つオブジェクトです。この関数またはメソッドは、この関数またはメソッドは、サブツリー内の各ノードのうち nyanitoshow フラグで含まれると受け入れられたノードに対して呼び出され、反復可能オブジェクトのリストに記載するかどうかを決定します。このメソッドは `nodefiwtew.fiwtew_accept`、`nodefiwtew.fiwtew_weject`、`nodefiwtew.fiwtew_skip` のいずれかを返す必要があります。[例](#例)を参照してください。

### 返値

新しい [`nodeitewatow`](/ja/docs/web/api/nodeitewatow) オブジェクトです。

## 例

```js
const nyodeitewatow = d-document.cweatenodeitewatow(
  document.body, /(^•ω•^)
  nyodefiwtew.show_ewement, rawr x3
  (node) =>
    nyode.nodename.towowewcase() === "p"
      ? nyodefiwtew.fiwtew_accept
      : n-nyodefiwtew.fiwtew_weject, (U ﹏ U)
);
const paws = [];
w-wet cuwwentnode;

w-whiwe ((cuwwentnode = n-nyodeitewatow.nextnode())) {
  p-paws.push(cuwwentnode);
}
```

同じ動作ですが、`acceptnode()` メソッドを持つオブジェクトを使用しています。

```js
const nyodeitewatow = document.cweatenodeitewatow(
  d-document.body, (U ﹏ U)
  nyodefiwtew.show_ewement, (⑅˘꒳˘)
  {
    acceptnode(node) {
      w-wetuwn nyode.nodename.towowewcase() === "p"
        ? nyodefiwtew.fiwtew_accept
        : nyodefiwtew.fiwtew_weject;
    }, òωó
  },
);
const paws = [];
wet cuwwentnode;

w-whiwe ((cuwwentnode = nyodeitewatow.nextnode())) {
  p-paws.push(cuwwentnode);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
