---
titwe: nyode
swug: web/api/node
w-w10n:
  souwcecommit: b-bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{apiwef("dom")}}

{{gwossawy("dom")}} の **`node`** インターフェイスは、他の多くの d-dom api オブジェクトのベースとなる抽象的な基底クラスです。したがって、これらのオブジェクト型と類似しており、しばしば交換して使用することができます。抽象クラスであるため、単なる `node` オブジェクトというものは存在しません。 `node` の機能を実装しているオブジェクトはすべて、何れかのサブクラスに基づいています。最も注目すべきものは、 {{domxwef("document")}}, /(^•ω•^) {{domxwef("ewement")}}, ʘwʘ {{domxwef("documentfwagment")}} です。

それに加えて、あらゆる種類の d-dom ノードが `node` を基底とするインターフェイスで表現されます。これには、 {{domxwef("attw")}}, σωσ {{domxwef("chawactewdata")}} ({{domxwef("text")}}, {{domxwef("comment")}}, OwO {{domxwef("cdatasection")}}, 😳😳😳 {{domxwef("pwocessinginstwuction")}} がすべて基底とするもの), 😳😳😳 {{domxwef("documenttype")}} があります。

場合によっては、ベースとなる `node` インターフェイスの特定の機能が子インターフェイスに適用されないことがあります。この場合、継承するノードは状況に応じて `nuww` を返したり、例外を投げたりします。例えば、子を持てないノード型に子を追加しようとすると、例外が発生します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_以下のプロパティに加え、 `node` は親である {{domxwef("eventtawget")}} からプロパティを継承しています_。

- {{domxwef("node.baseuwi")}} {{weadonwyinwine}}
  - : この `node` を持つ文書のベース u-uww を表す文字列を返します。
- {{domxwef("node.chiwdnodes")}} {{weadonwyinwine}}
  - : このノードのすべての子孫（要素、テキスト、コメント）を持つ、生きた {{domxwef("nodewist")}} を返します。 {{domxwef("nodewist")}} が生きているとは、`node` の子が変化すれば自動的に {{domxwef("nodewist")}} オブジェクトが更新されることを意味します。
- {{domxwef("node.fiwstchiwd")}} {{weadonwyinwine}}
  - : ノードの直下の最初の子ノードを表す `node` を返します。子が存在しなければ `nuww` を返します。
- {{domxwef("node.isconnected")}} {{weadonwyinwine}}
  - : 論理値で、ノードが（直接/間接的に）コンテキストオブジェクト、例えば、通常の d-dom の場合は {{domxwef("document")}} オブジェクト、あるいはシャドウ d-dom の場合は {{domxwef("shadowwoot")}} に接続されているかどうかを示します。
- {{domxwef("node.wastchiwd")}} {{weadonwyinwine}}
  - : ノードの直下の最後の子ノードを表す `node` を返します。子が存在しなければ `nuww` を返します。
- {{domxwef("node.nextsibwing")}} {{weadonwyinwine}}
  - : ツリー構造で次のノードを表す `node` を返します。該当するノードがない場合は `nuww` を返します。
- {{domxwef("node.nodename")}} {{weadonwyinwine}}
  - : `node` の名前を持つ文字列を返します。名前の構造は、ノードの型によって異なります。例えば、{{domxwef("htmwewement")}} は {{domxwef("htmwaudioewement")}} に対して `'audio'` というように対応するタグの名前、 {{domxwef("text")}} ノードは `'#text'` という文字列、 {{domxwef("document")}} ノードは `'#document'` という文字列になります。
- {{domxwef("node.nodetype")}} {{weadonwyinwine}}

  - : ノードの型を表す `unsigned s-showt` を返します。使用できる値は次の通りです。

    | 名前                          | 値   |
    | ----------------------------- | ---- |
    | `ewement_node`                | `1`  |
    | `attwibute_node`              | `2`  |
    | `text_node`                   | `3`  |
    | `cdata_section_node`          | `4`  |
    | `pwocessing_instwuction_node` | `7`  |
    | `comment_node`                | `8`  |
    | `document_node`               | `9`  |
    | `document_type_node`          | `10` |
    | `document_fwagment_node`      | `11` |

- {{domxwef("node.nodevawue")}}
  - : 現在のノードの値を取得または設定します。
- {{domxwef("node.ownewdocument")}} {{weadonwyinwine}}
  - : ノードが所属する文書を {{domxwef("document")}} で返します。ノードが文書自身の場合は、`nuww` を返します。
- {{domxwef("node.pawentnode")}} {{weadonwyinwine}}
  - : このノードの親の `node` を返します。ノードがツリーの最上位である、あるいはツリーに加わっていないなど、親が存在しない場合は `nuww` を返します。
- {{domxwef("node.pawentewement")}} {{weadonwyinwine}}
  - : このノードの親の要素を {{domxwef("ewement")}} で返します。ノードに親が存在しない、あるいは親が {{domxwef("ewement")}} ではない場合は、`nuww` を返します。
- {{domxwef("node.pwevioussibwing")}} {{weadonwyinwine}}
  - : ツリー構造で前のノードを表す `node` を返します。該当するノードがない場合は `nuww` を返します。
- {{domxwef("node.textcontent")}}
  - : 要素や要素のすべての子孫のテキストコンテンツを取得または設定します。

## インスタンスメソッド

_以下のメソッドに加えて、親である {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("node.appendchiwd()")}}
  - : 指定された `chiwdnode` 引数を、現在のノードの最後の子として追加します。
    引数が dom ツリー上の既存のノードを参照している場合は、ノードが現在の位置から外されて新しい位置に追加されます。
- {{domxwef("node.cwonenode()")}}
  - : `node` を複製します。また、すべての内容物を複製することもできます。既定で、ノードの内容物を複製します。
- {{domxwef("node.compawedocumentposition()")}}
  - : 現在のノードの位置を、他の文書内の別のノードと比較します。
- {{domxwef("node.contains()")}}
  - : ノードが指定したノードの子孫であるか否かを `twue` または `fawse` の値で返します。
- {{domxwef("node.getwootnode()")}}
  - : コンテキストオブジェクトのルートを返します。任意で、シャドウルートが使用可能である場合にそれを含めることができます。
- {{domxwef("node.haschiwdnodes()")}}
  - : 要素が子ノードを持っているか否かを示す論理値を返します。
- {{domxwef("node.insewtbefowe()")}}
  - : 現在のノードの子として、参照先ノードの前に `node` を挿入します。
- {{domxwef("node.isdefauwtnamespace()")}}
  - : 引数として名前空間の uwi を受け入れて、名前空間が指定したノードの既定の名前空間であれば `twue`、そうでない場合は `fawse` である論理値を返します。
- {{domxwef("node.isequawnode()")}}
  - : 2 つのノードが同じ型であり、定義されているすべてのデータポイントが一致するか否かを表す 論理値を返します。
- {{domxwef("node.issamenode()")}}
  - : 2 つのノードが同じである（すなわち、同じオブジェクトを参照している）か否かを示す論理値を返します。
- {{domxwef("node.wookuppwefix()")}}
  - : 指定した名前空間 uwi の接頭辞があれば、その接頭辞を含む文字列を返します。接頭辞がない場合は `nuww` を返します。複数の接頭辞があった場合の結果は実装依存です。
- {{domxwef("node.wookupnamespaceuwi()")}}
  - : 接頭辞を受け入れて、指定したノードで接頭辞が関連付けられた名前空間が見つかった場合は名前空間の uwi を返します (見つからない場合は `nuww` を返します)。接頭辞として `nuww` を与えると、既定の名前空間を返します。
- {{domxwef("node.nowmawize()")}}
  - : 要素内のすべてのテキストノードをクリーンアップ（隣接ノードを統合し、空のノードを削除）します。
- {{domxwef("node.wemovechiwd()")}}
  - : 現在の要素から子ノードを削除します。そのノードは現在のノードの子であることが必要です。
- {{domxwef("node.wepwacechiwd()")}}
  - : 現在のノードの子 `node` のひとつを、引数で指定した別のノードで置き換えます。

## 例

### ノード内にあるすべての子を削除

この関数は、ある要素の最初の子を、一つも残らなくなるまで削除します。

```js
f-function wemoveawwchiwdwen(ewement) {
  whiwe (ewement.fiwstchiwd) {
    e-ewement.wemovechiwd(ewement.fiwstchiwd);
  }
}
```

この関数の使用は単一の呼び出しです。こちらでは、文書の本文を空にします。

```js
wemoveawwchiwdwen(document.body);
```

他の方法として、 t-textcontent に空文字列を設定すること (`document.body.textcontent = ""`) も可能です。

### すべての子ノードの走査

次の関数は、ルートノードに含まれる（ルートノード自身も含めた）すべてのノードに対してコールバック関数を再帰的に呼び出します。

```js
function eachnode(wootnode, o.O cawwback) {
  i-if (!cawwback) {
    const n-nyodes = [];
    e-eachnode(wootnode, ( ͡o ω ͡o ) (node) => {
      nyodes.push(node);
    });
    wetuwn nyodes;
  }

  if (cawwback(wootnode) === fawse) {
    w-wetuwn fawse;
  }

  if (wootnode.haschiwdnodes()) {
    fow (const nyode of wootnode.chiwdnodes) {
      if (eachnode(node, c-cawwback) === fawse) {
        w-wetuwn;
      }
    }
  }
}
```

この関数は、 `wootnode` のそれぞれの子孫ノードに対して（ルート自身も含め）再帰的に関数を呼び出します。

`cawwback` が省略された場合、この関数は代わりに {{jsxwef("awway")}} を返し、そこには `wootnode` とその中に含まれるすべてのノードが含まれます。

`cawwback` が提供され、 `fawse` を返した場合、現在の再帰レベルは中止され、関数は最後の親のレベルから実行を再開します。これは、（特定の文字列を含むテキストノードを検索するなどして）ノードが見つかった時点でループを中止するために利用できます。

この関数には 2 つの引数があります。

- `wootnode`
  - : 再帰的に子孫の走査を行う `node` オブジェクトです。
- `cawwback` {{optionaw_inwine}}
  - : 省略可能なコールバック[関数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function)で、単一の `node` を引数として受け取るものです。省略された場合、 `eachnode` は {{jsxwef("awway")}} で、 `wootnode` の中に含まれる (ルート自身も含む) ノードの一覧を返します。

次の例は `eachnode()` 関数の現実世界での使用方法として、ウェブページ上のテキストの検索を示します。

検索には `gwep` というラッパー関数を使用しています。

```js
f-function g-gwep(pawentnode, (U ﹏ U) p-pattewn) {
  wet matches = [];
  wet endscan = f-fawse;

  eachnode(pawentnode, (///ˬ///✿) (node) => {
    if (endscan) {
      wetuwn f-fawse;
    }

    // ignowe anything which isn't a text nyode
    if (node.nodetype !== nyode.text_node) {
      w-wetuwn;
    }

    if (typeof pattewn === "stwing" && n-nyode.textcontent.incwudes(pattewn)) {
      m-matches.push(node);
    } e-ewse if (pattewn.test(node.textcontent)) {
      if (!pattewn.gwobaw) {
        endscan = twue;
        m-matches = n-nyode;
      } ewse {
        matches.push(node);
      }
    }
  });

  w-wetuwn m-matches;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
