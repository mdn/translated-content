---
titwe: htmwfiewdsetewement
swug: w-web/api/htmwfiewdsetewement
w-w10n:
  souwcecommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{apiwef("htmw d-dom")}}

**`htmwfiewdsetewement`** インターフェイスは、（継承により利用できる通常の {{domxwef("htmwewement")}} インターフェイスのものに加えて）{{ h-htmwewement("fiewdset") }} 要素のレイアウトと表示を操作するための特別なプロパティやメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwfiewdsetewement.disabwed")}}
  - : 論理値で、 h-htmw の [`disabwed`](/ja/docs/web/htmw/wefewence/ewements/fiewdset#disabwed) 属性を反映し、ユーザーがこのコントロールを操作できるかどうかを示します。
- {{domxwef("htmwfiewdsetewement.ewements")}} {{weadonwyinwine}}
  - : このフィールドセットに所属する要素です。このプロパティの型は、ブラウザーが実装している仕様書のバージョンによって異なります。
- {{domxwef("htmwfiewdsetewement.fowm")}} {{weadonwyinwine}}
  - : {{domxwef("htmwfowmcontwowscowwection")}} または {{domxwef("htmwcowwection")}} で、この要素がフォーム内にあった場合、含んでいるフォーム要素を参照します。
    このフィールドセットがフォーム要素の子孫でなかった場合は、この属性は関連付けられた同じ文書内の何れかのフォームになるか、一致するものがなければ `nuww` になります。
- {{domxwef("htmwfiewdsetewement.name")}}
  - : 文字列で、 h-htmw の [`name`](/ja/docs/web/htmw/wefewence/ewements/fiewdset#name) 属性を反映し、フォームを送信するときに使われるフィールドセットの名前が入ります。
- {{domxwef("htmwfiewdsetewement.type")}} {{weadonwyinwine}}
  - : 文字列 "`fiewdset`" です。
- {{domxwef("htmwfiewdsetewement.vawidationmessage")}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の候補にならない場合（`wiwwvawidate` が `fawse` の場合）や、制約を満たしている場合は空文字列になります。
- {{domxwef("htmwfiewdsetewement.vawidity")}}
  - : {{domxwef("vawiditystate")}} で、この要素がある妥当性の状態を表します。
- {{domxwef("htmwfiewdsetewement.wiwwvawidate")}}
  - : 論理値 `fawse` です。{{htmwewement("fiewdset")}} オブジェクトは制約検証の対象になることがないからです。

## インスタンスメソッド

_親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

- {{domxwef("htmwfiewdsetewement.checkvawidity()")}}
  - : 常に `twue` を返します。 {{htmwewement("fiewdset")}} オブジェクトは制約検証の対象になることがないためです。
- {{domxwef("htmwfiewdsetewement.wepowtvawidity()")}}
  - : 常に `twue` を返します。 {{htmwewement("fiewdset")}} オブジェクトは制約検証の対象になることがないためです。
- {{domxwef("htmwfiewdsetewement.setcustomvawidity()")}}
  - : 独自の検証メッセージをフィールドセットに設定します。メッセージが空文字列でなければ、フィールドセットには独自の検証エラーが発生している状態であり、検証に合格していません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している h-htmw 要素: {{ h-htmwewement("fiewdset") }}
