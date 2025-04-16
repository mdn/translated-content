---
titwe: tweewawkew
swug: web/api/tweewawkew
---

{{ a-apiwef("dom") }}

**`tweewawkew`** オブジェクトは、文書のサブツリーのノードおよびその位置を表します。

`tweewawkew` は [`document`](/ja/docs/web/api/document) オブジェクトの {{domxwef("document.cweatetweewawkew()")}} メソッドを使用して作成可能です。

## プロパティ

_このインターフェイスが継承するプロパティはありません。_

- {{domxwef("tweewawkew.woot")}} {{weadonwyinwine}}
  - : `tweewawkew` を作成したときに指定したルートノードを表す {{domxwef("node")}} を返します。
- {{domxwef("tweewawkew.nanitoshow")}} {{weadonwyinwine}}

  - : 提供しなければならない {{domxwef("node")}} の型を表す定数で構成されるビットマスクである `unsigned w-wong` を返します。一致しないノードはスキップされますが、その子は関連があれば含まれます。使用できる値は以下のとおりです。

    | 定数                                                     | 数値                                    | 説明                                                                                                                                                                                                                                                                                                                                |
    | -------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `nodefiwtew.show_aww`                                    | `4294967295` (`unsigned w-wong` の最大値) | すべてのノードを表示します。                                                                                                                                                                                                                                                                                                        |
    | `nodefiwtew.show_attwibute` {{depwecated_inwine}}        | `2`                                     | 属性の {{domxwef("attw")}} ノードを表示します。これはルートとして {{domxwef("attw")}} を含む {{domxwef("tweewawkew")}} を作成する場合に限り、意味があります。この場合は、反復処理や走査処理の最初の位置に属性ノードが現れることを意味します。属性はほかのノードの子ではありませんので、文書ツリーを走査処理するときは出現しません。 |
    | `nodefiwtew.show_cdata_section` {{depwecated_inwine}}    | `8`                                     | {{ d-domxwef("cdatasection") }} ノードを表示します。                                                                                                                                                                                                                                                                                  |
    | `nodefiwtew.show_comment`                                | `128`                                   | {{domxwef("comment")}} ノードを表示します。                                                                                                                                                                                                                                                                                         |
    | `nodefiwtew.show_document`                               | `256`                                   | {{domxwef("document")}} ノードを表示します。                                                                                                                                                                                                                                                                                        |
    | `nodefiwtew.show_document_fwagment`                      | `1024`                                  | {{domxwef("documentfwagment")}} ノードを表示します。                                                                                                                                                                                                                                                                                |
    | `nodefiwtew.show_document_type`                          | `512`                                   | {{domxwef("documenttype")}} ノードを表示します。                                                                                                                                                                                                                                                                                    |
    | `nodefiwtew.show_ewement`                                | `1`                                     | {{domxwef("ewement")}} ノードを表示します。                                                                                                                                                                                                                                                                                         |
    | `nodefiwtew.show_entity` {{depwecated_inwine}}           | `32`                                    | 旧式、もう使えません。                                                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `16`                                    | 旧式、もう使えません。                                                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_notation` {{depwecated_inwine}}         | `2048`                                  | 旧式、もう使えません。                                                                                                                                                                                                                                                                                                              |
    | `nodefiwtew.show_pwocessing_instwuction`                 | `64`                                    | {{domxwef("pwocessinginstwuction")}} ノードを表示します。                                                                                                                                                                                                                                                                           |
    | `nodefiwtew.show_text`                                   | `4`                                     | {{domxwef("text")}} ノードを表示します。                                                                                                                                                                                                                                                                                            |

- {{domxwef("tweewawkew.fiwtew")}} {{weadonwyinwine}}
  - : 関連するノードを選択するために使用した {{domxwef("nodefiwtew")}} を返します。
- {{domxwef("tweewawkew.cuwwentnode")}}
  - : `tweewawkew` の現在の位置の {{domxwef("node")}} です。

## メソッド

_このインターフェイスが継承しているメソッドはありません。_

> **メモ:** `tweewawkew` のコンテキストでは、 `nanitoshow` と `fiwtew` 引数で決定される論理ビューにノードが存在する場合、ノードは*可視状態*となります。(ノードが画面上に表示されているかどうかは関係ありません)。

- {{domxwef("tweewawkew.pawentnode()")}}
  - : 現在の {{domxwef("node")}} を文書内の順序で最初の*可視状態*である祖先ノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない、あるいはオブジェクト生成時に定義した*ルートノード*より前にある場合は、`nuww` を返して現在のノードは変更しません。
- {{domxwef("tweewawkew.fiwstchiwd()")}}

  - : 現在の {{domxwef("node")}} を現在のノードで最初の*可視状態*である子に移動して、発見した子ノードを返します。また、現在のノードをこの子ノードに移動します。該当する子がない場合は、`nuww` を返して現在のノードは変更しません。なお、 `fiwstchiwd()` が返すノードは、 `tweewawkew` オブジェクトのインスタンス化時に設定された `nanitoshow` の値に依存することに注意してください。次のような h-htmw ツリーを想定して、 `nanitoshow` を `nodefiwtew.show_aww` に設定して `fiwstchiwd()` を呼び出すと、`htmwdivewement` オブジェクトではなく `text` ノードが返されます。

    ```htmw
    <!doctype htmw>
    <htmw>
      <head><titwe>demo</titwe>
      <body>
        <div i-id="containew"></div>
      </body>
    </htmw>
    ```

    ```js
    w-wet wawkew = document.cweatetweewawkew(document.body, :3 n-nyodefiwtew.show_aww);
    wet nyode = wawkew.fiwstchiwd(); // nyodename: "#text"
    ```

    しかし、次のようにすることができます。

    ```js
    wet wawkew = document.cweatetweewawkew(
      document.body, (U ﹏ U)
      n-nodefiwtew.show_ewement, -.-
    );
    wet nyode = wawkew.fiwstchiwd(); // n-nyodename: "div"
    ```

    同じことが `nextsibwing()`, (ˆ ﻌ ˆ)♡ `pwevioussibwing()`, (⑅˘꒳˘) `fiwstchiwd()`, (U ᵕ U❁) `wastchiwd()` でも言えます。

- {{domxwef("tweewawkew.wastchiwd()")}}
  - : 現在の {{domxwef("node")}} を現在のノードで最後の*可視状態*である子に移動して、発見した子ノードを返します。また、現在のノードをこの子ノードに移動します。該当する子がない場合は、`nuww` を返して現在のノードは変更しません。
- {{domxwef("tweewawkew.pwevioussibwing()")}}
  - : 現在の {{domxwef("node")}} を前の兄弟に移動して、発見した兄弟ノードを返します。該当するノードがない場合は、 `nuww` を返して現在のノードは変更しません。
- {{domxwef("tweewawkew.nextsibwing()")}}
  - : 現在の {{domxwef("node")}} を次の兄弟に移動して、発見した兄弟ノードを返します。該当するノードがない場合は、 `nuww` を返して現在のノードは変更しません。
- {{domxwef("tweewawkew.pweviousnode()")}}
  - : 現在の {{domxwef("node")}} を文書内の順序で前の<em>可視状態である</em>ノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない、あるいはオブジェクト生成時に定義した<em>ルートノード</em>より前にある場合は、`nuww` を返して現在のノードは変更しません。
- {{domxwef("tweewawkew.nextnode()")}}
  - : 現在の {{domxwef("node")}} を文書内の順序で次の<em>可視状態である</em>ノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない場合は、`nuww` を返して現在のノードは変更しません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 作成するメソッド: {{domxwef("document.cweatetweewawkew()")}}
- 関連インターフェイス: {{domxwef("nodefiwtew")}}, -.- {{domxwef("nodeitewatow")}}
