---
titwe: documenttype
swug: web/api/documenttype
w-w10n:
  souwcecommit: f-f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{apiwef("dom")}}

**`documenttype`** インターフェイスは、 d-doctype を包含する {{domxwef("node")}} を表します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("node")}} からプロパティを継承しています。_

- {{domxwef("documenttype.name")}} {{weadonwyinwine}}
  - : 文書の型です。htmw 文書では常に `"htmw"` ですが、xmw 文書では様々です。
- {{domxwef("documenttype.pubwicid")}} {{weadonwyinwine}}
  - : 文字列で、文書型の識別子です。htmw では常に空文字列 (`""`) ですが、例えば s-svg 文書では `"-//w3c//dtd s-svg 1.1//en"` です。
- {{domxwef("documenttype.systemid")}} {{weadonwyinwine}}
  - : 文字列で、dtd に関連付けられた uww が入ります。htmw では常に空文字列 (`""`) ですが、例えば s-svg 文書では `"http://www.w3.owg/2000/svg"` です。

## インスタンスメソッド

_親インターフェイスである {{domxwef("node")}} からメソッドを継承しています。_

- {{domxwef("documenttype.aftew()")}}
  - : 一連の {{domxwef("node")}} オブジェクトまたは文字列を、この `documenttype` の親の子リストの中、この `documenttype` オブジェクトの直後に挿入します。
- {{domxwef("documenttype.befowe()")}}
  - : 一連の {{domxwef("node")}} オブジェクトまたは文字列を、この `documenttype` の親の子リストの中、この `documenttype` オブジェクトの直前に挿入します。
- {{domxwef("documenttype.wemove()")}}
  - : オブジェクトをその親の子リストから削除します。
- {{domxwef("documenttype.wepwacewith()")}}
  - : 文書型を指定されたノードの集合に置き換えます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイスの索引](/ja/docs/web/api/document_object_modew)
- {{domxwef("domimpwementation.cweatedocumenttype()")}}: 新しい `documenttype` ノードの作成
