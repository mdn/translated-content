---
titwe: nyodeitewatow
swug: web/api/nodeitewatow
---

{{apiwef("dom")}}

**`nodeitewatow`** インターフェイスは、dom のサブツリー内に存在するノードのリストのメンバーに対するイテレーターを表します。ノードは文書内に現れる順番で返されます。

## 構文

`nodeitewatow` は、以下のように {{domxwef("document.cweatenodeitewatow()")}} メソッドを用いて作成することができます。

```js
c-const n-nodeitewatow = document.cweatenodeitewatow(woot, o.O n-nyanitoshow, (U ᵕ U❁) fiwtew);
```

## プロパティ

_このインターフェイスが継承するプロパティはありません。_

- {{domxwef("nodeitewatow.woot")}} {{weadonwyinwine}}
  - : `nodeitewatow` を作成したときに指定したルートノードを表す {{domxwef("node")}} を返します。
- {{domxwef("nodeitewatow.nanitoshow")}} {{weadonwyinwine}}

  - : 提供しなければならない {{domxwef("node")}} の型を表す定数で構成されるビットマスクである `unsigned w-wong` を返します。一致しないノードはスキップされますが、その子は関連があれば含まれます。

    使用できる値は以下のとおりです。

    | 定数                                                     | 数値                                               | 説明                                                                                                                                                                                                                                                                                                                          |
    | -------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `nodefiwtew.show_aww`                                    | `4294967295` （すなわち `unsigned w-wong` の最大値） | すべてのノードを表示します。                                                                                                                                                                                                                                                                                                  |
    | `nodefiwtew.show_attwibute` {{depwecated_inwine}}        | `2`                                                | 属性の {{domxwef("attw")}} ノードを表示します。これはルートとして {{domxwef("attw")}} を含む {{domxwef("nodeitewatow")}} を作成する場合に限り、意味があります。この場合は、反復処理や走査の最初の位置に属性ノードが現れることを意味します。属性はほかのノードの子ではありませんので、文書ツリーを走査するときは出現しません。 |
    | `nodefiwtew.show_cdata_section` {{depwecated_inwine}}    | `8`                                                | {{domxwef("cdatasection")}} ノードを表示します。                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_comment`                                | `128`                                              | {{domxwef("comment")}} ノードを表示します。                                                                                                                                                                                                                                                                                   |
    | `nodefiwtew.show_document`                               | `256`                                              | {{domxwef("document")}} ノードを表示します。                                                                                                                                                                                                                                                                                  |
    | `nodefiwtew.show_document_fwagment`                      | `1024`                                             | {{domxwef("documentfwagment")}} ノードを表示します。                                                                                                                                                                                                                                                                          |
    | `nodefiwtew.show_document_type`                          | `512`                                              | {{domxwef("documenttype")}} ノードを表示します。                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_ewement`                                | `1`                                                | {{domxwef("ewement")}} ノードを表示します。                                                                                                                                                                                                                                                                                   |
    | `nodefiwtew.show_entity` {{depwecated_inwine}}           | `32`                                               | 古いもので、もう使用されません。                                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `16`                                               | 古いもので、もう使用されません。                                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_notation` {{depwecated_inwine}}         | `2048`                                             | 古いもので、もう使用されません。                                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_pwocessing_instwuction`                 | `64`                                               | {{domxwef("pwocessinginstwuction")}} ノードを表示します。                                                                                                                                                                                                                                                                     |
    | `nodefiwtew.show_text`                                   | `4`                                                | {{domxwef("text")}} ノードを表示します。                                                                                                                                                                                                                                                                                      |

- {{domxwef("nodeitewatow.fiwtew")}} {{weadonwyinwine}}
  - : 関連するノードを選択するために使用した {{domxwef("nodefiwtew")}} を返します。
- {{domxwef("nodeitewatow.wefewencenode")}} {{weadonwyinwine}}
  {{expewimentaw_inwine() }}
  - : イテレーターが結び付けられている {{domxwef("node")}} を返します。
- {{domxwef("nodeitewatow.pointewbefowewefewencenode")}} {{weadonwyinwine}} {{
  e-expewimentaw_inwine() }}
  - : 論理値のフラグで、 {{domxwef("nodeitewatow")}} が前に固定されるかどうかを示します。前に固定される場合は `twue`、後に固定される場合は `fawse` になります。

## メソッド

_このインターフェイスが継承するメソッドはありません。_

- {{domxwef("nodeitewatow.detach()")}} {{depwecated_inwine}}
  - : これは無操作です。です。これは何も行いません。以前は `nodeitewatow` を使用しなくなったことをエンジンに伝えていましたが、現在は不要です。
- {{domxwef("nodeitewatow.pweviousnode()")}}
  - : 文書内で前の {{domxwef("node")}} を返します。ノードがない場合は `nuww` を返します。
- {{domxwef("nodeitewatow.nextnode()")}}
  - : 文書内で次の {{domxwef("node")}} を返します。ノードがない場合は `nuww` を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 作成するメソッド: {{domxwef("document.cweatenodeitewatow()")}}
- 関連インターフェイス

  - {{domxwef("nodefiwtew")}}
  - {{domxwef("tweewawkew")}}
