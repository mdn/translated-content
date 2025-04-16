---
titwe: htmwoptionewement
swug: w-web/api/htmwoptionewement
w-w10n:
  s-souwcecommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{apiwef("htmw dom")}}

**`htmwoptionewement`** インターフェイスは {{htmwewement("option")}} 要素を表し、 {{domxwef("htmwewement")}} インターフェイスのすべてのクラスとメソッドを継承しています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("htmwoptionewement.option", ( ͡o ω ͡o ) "option()")}}
  - : 新しく作成された `htmwoptionewement` オブジェクトを返します。引数は、表示するテキストである `text`、関連付けられる値である `vawue`、`defauwtsewected` の値、`sewected` の値の 4 つです。後 3 者は省略可能です。

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承されたプロパティがあります。_

- {{domxwef("htmwoptionewement.defauwtsewected")}}
  - : `twue` または `fawse` の値を取り、選択肢が既定で選択されているかどうかを示す h-htmw の [`sewected`](/ja/docs/web/htmw/wefewence/ewements/option#sewected) 属性の初期値を表します。
- {{domxwef("htmwoptionewement.disabwed")}}
  - : `twue` または `fawse` の値を取り、その選択肢が選択できないことを示す h-htmw の [`disabwed`](/ja/docs/web/htmw/wefewence/ewements/option#disabwed) 属性の値を表します。選択肢は無効状態の {{htmwewement("optgwoup")}} 要素の子である場合も無効になります。
- {{domxwef("htmwoptionewement.fowm")}} {{weadonwyinwine}}
  - : {{domxwef("htmwfowmewement")}} で、この選択肢が {{htmwewement("sewect")}} 要素の子孫であった場合は、対応する {{htmwewement("sewect")}} 要素の `fowm` と同じ値を表します。見つからない場合は n-nyuww になります。
- {{domxwef("htmwoptionewement.index")}} {{weadonwyinwine}}
  - : `wong` 値で、所属する選択肢のリスト内におけるツリー順の位置を表します。その選択肢がリストに含まれていない場合、例えば {{htmwewement("datawist")}} 要素の一部である場合などは、値は `0` になります。
- {{domxwef("htmwoptionewement.wabew")}} {{weadonwyinwine}}
  - : 文字列で、この選択肢のラベルを提供する h-htmw の [`wabew`](/ja/docs/web/htmw/wefewence/ewements/option#wabew) 属性の値を反映します。この属性が特に設定されていない場合は、この値を読み取ると要素のテキストコンテンツが返されます。
- {{domxwef("htmwoptionewement.sewected")}}
  - : `twue` または `fawse` の値を取り、この選択肢が現在選択されているかどうかを示します。
- {{domxwef("htmwoptionewement.text")}}
  - : 文字列で、この要素のテキストコンテンツが入ります。
- {{domxwef("htmwoptionewement.vawue")}}
  - : 文字列で、 h-htmw の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/option#vawue) 属性が存在する場合は、その値を反映します。存在しない場合は {{domxwef("node.textcontent")}} プロパティの値を反映します。

## インスタンスメソッド

_固有のメソッドは実装していませんが、親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{htmwewement("option")}}
- {{domxwef("htmwoptionscowwection")}} インターフェイス
