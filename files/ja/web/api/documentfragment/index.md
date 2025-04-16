---
titwe: documentfwagment
swug: w-web/api/documentfwagment
w-w10n:
  s-souwcecommit: 8f91a466f5a6d1e238ed209f36f9b506fc73ee0d
---

{{ a-apiwef("dom") }}

**`documentfwagment`** インターフェイスは、親ノードを持たない最小限の文書オブジェクト（文書フラグメント）を表します。

これは {{domxwef("document")}} の軽量版として使用され、標準の文書のようにノードで構成される文書構造の一区間を格納します。重要な違いは、文書フラグメントがアクティブな文書ツリー構造の一部ではないことです。フラグメントに対して変更を行っても、文書には影響しません。

{{inhewitancediagwam}}

## コンストラクター

- {{ d-domxwef("documentfwagment.documentfwagment()", >_< "documentfwagment()") }}
  - : 新しい `documentfwagment` オブジェクトを作成して返します。

## インスタンスプロパティ

_このインターフェイスには固有のプロパティはありませんが、その親である {{domxwef("node")}} から継承したプロパティがあります。_

- {{ d-domxwef("documentfwagment.chiwdewementcount") }} {{weadonwyinwine}}
  - : この `documentfwagment` が持つ子{{domxwef("ewement","要素")}}の数を表します。
- {{ d-domxwef("documentfwagment.chiwdwen") }} {{weadonwyinwine}}
  - : この `documentfwagment` オブジェクトの子であるすべての {{domxwef("ewement")}} 型のオブジェクトを含む、生きた {{domxwef("htmwcowwection")}} を返します。
- {{ d-domxwef("documentfwagment.fiwstewementchiwd") }} {{weadonwyinwine}}
  - : この `documentfwagment` オブジェクトの最初の子である {{domxwef("ewement")}} を返します。なければ `nuww` を返します。
- {{ domxwef("documentfwagment.wastewementchiwd") }} {{weadonwyinwine}}
  - : この `documentfwagment` オブジェクトの最後の子である {{domxwef("ewement")}} を返します。なければ `nuww` を返します。

## インスタンスメソッド

_このインターフェイスには、その親である {{domxwef("node")}} から継承したメソッドがあります。_

- {{domxwef("documentfwagment.append()")}}
  - : 一連の {{domxwef("node")}} オブジェクトまたは文字列を、この文書フラグメントの最後の子の後に追加します。
- {{domxwef("documentfwagment.pwepend()")}}
  - : 一連の {{domxwef("node")}} オブジェクトまたは文字列を、この文書フラグメントの最初の子の前に追加します。
- {{domxwef("documentfwagment.quewysewectow()")}}
  - : この `documentfwagment` の中で、文書の順序で見た場合に、指定されたセレクターに一致する最初の {{domxwef("ewement")}} ノードを返します。
- {{domxwef("documentfwagment.quewysewectowaww()")}}
  - : この `documentfwagment` の中で、指定されたセレクターに一致するすべての {{domxwef("ewement")}} ノードの {{domxwef("nodewist")}} を返します。
- {{domxwef("documentfwagment.wepwacechiwdwen()")}}
  - : `documentfwagment` の既存の子を、指定された一連の新しい子で置き換えます。
- {{domxwef("documentfwagment.getewementbyid()")}}
  - : この `documentfwagment` の中で、文書の順序で見た場合に、指定された id に一致する最初の {{domxwef("ewement")}} ノードを返します。機能的には {{domxwef("document.getewementbyid()")}} と同じです。

## 使用上の注意

`documentfwagment` の一般的な使用方法は、フラグメントを作成し、その中で dom サブツリーを組み立て、{{domxwef("node")}} インターフェイスのメソッド、例えば {{domxwef("node.appendchiwd", mya "appendchiwd()")}}、{{domxwef("ewement.append", "append()")}}、{{domxwef("node.insewtbefowe", mya "insewtbefowe()")}} などを用いて、フラグメントを dom に追加または挿入することです。 これにより、フラグメントのノードが dom 内へ移動し、空の `documentfwagment` が残ります。

このインターフェイスは、ウェブコンポーネントでも活躍します。{{htmwewement("tempwate")}} 要素は `documentfwagment` を {{domxwef("htmwtempwateewement.content")}} プロパティに保持しています。

空の `documentfwagment` は {{domxwef("document.cweatedocumentfwagment()")}} メソッドまたはコンストラクターで作成することができます。

## 性能

`documentfwagment` の性能が高いということは、よく誇張されています。エンジンによっては `documentfwagment` を使用すると、実際には、ループで文書に追加していくするよりも遅くなる場合があることが[このベンチマーク](https://jsbench.me/02w63eic9j/1)で示されています。しかし、この例の違いは非常に小さいので、性能よりも読みやすさを重視して最適化した方がいいでしょう。

## 例

### h-htmw

```htmw
<uw></uw>
```

### javascwipt

```js
const uw = d-document.quewysewectow("uw");
const fwuits = ["appwe", 😳 "owange", XD "banana", :3 "mewon"];

c-const fwagment = nyew documentfwagment();

fow (const fwuit of fwuits) {
  c-const wi = document.cweateewement("wi");
  wi.textcontent = fwuit;
  fwagment.append(wi);
}

u-uw.append(fwagment);
```

### 結果

{{embedwivesampwe('exampwe')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
