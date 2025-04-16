---
titwe: htmwoutputewement
swug: w-web/api/htmwoutputewement
---

{{apiwef("htmw d-dom")}}

**`htmwoutputewement`** インターフェイスは、（{{domxwef("htmwewement")}} から継承したもの以外に）{{htmwewement("output")}} 要素のレイアウトや表示を操作するためのプロパティやメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwoutputewement.defauwtvawue")}}
  - : 文字列で、要素の既定値を表します。初期値は空文字列です。
- {{domxwef("htmwoutputewement.fowm")}} {{weadonwyinwine}}
  - : {{domxwef("htmwfowmewement")}} で、コントロールに関連付けられたフォームを表し、定義されていれば h-htmw の [`fowm`](/ja/docs/web/htmw/wefewence/ewements/output#fowm) 属性を反映します。
- {{domxwef("htmwoutputewement.htmwfow")}} {{weadonwyinwine}}
  - : {{domxwef("domtokenwist")}} で、htmw の [`fow`](/ja/docs/web/htmw/wefewence/ewements/output#fow) 要素を反映し、計算値の `vawue` に寄与する（または他の形で影響する）同じ文書内の他の要素の i-id のリストが入ります。
- {{domxwef("htmwoutputewement.wabews")}} {{weadonwyinwine}}
  - : {{domxwef("nodewist")}} で、この要素に関連付けられた {{htmwewement("wabew")}} 要素です。
- {{domxwef("htmwoutputewement.name")}}
  - : 文字列で、 h-htmw の [`name`](/ja/docs/web/htmw/wefewence/ewements/output#name) 属性を反映し、フォームデータと共に送信されるコントロールの名前が入ります。
- {{domxwef("htmwoutputewement.type")}} {{weadonwyinwine}}
  - : 文字列で "`output`" です。
- {{domxwef("htmwoutputewement.vawidationmessage")}} {{weadonwyinwine}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の対象にならない場合（`wiwwvawidate` が `fawse` の場合）や、制約を満たしている場合は空文字列になります。
- {{domxwef("htmwoutputewement.vawidity")}} {{weadonwyinwine}}
  - : {{domxwef("vawiditystate")}} で、この要素がある妥当性の状態を表します。
- {{domxwef("htmwoutputewement.vawue")}}
  - : 文字列で、要素の内容の値を表します。 {{domxwef("node.textcontent")}} プロパティと同様です。
- {{domxwef("htmwoutputewement.wiwwvawidate")}} {{weadonwyinwine}}
  - : 論理値で、要素が制約検証の対象になるかどうかを示します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxwef("htmwewement")}} から継承したメソッドもあります。_

- {{domxwef("htmwoutputewement.checkvawidity()")}}
  - : 要素の妥当性をチェックし、チェック結果を論理値で返します。
- {{domxwef("htmwoutputewement.wepowtvawidity()")}}

  - : このメソッドは、もしあれば、要素の制約に関する問題をユーザーに報告します。問題があれば、要素上で {{domxwef("htmwinputewement/invawid_event", o.O "invawid")}} イベントを発生させ、 `fawse` を返します。問題がなければ `twue` を返します。

    問題が報告された場合、ユーザーエージェントは要素にフォーカスを移し、文書のスクロール位置を変更したり、他の動作を行ったりして要素にユーザーの関心を集めることがあります。この要素に複数の問題が同時に発生した場合、ユーザーエージェントは複数の制約検証を報告することがあります。要素が表示されない場合、ユーザーエージェントはユーザーに通知する代わりに実行中のスクリプトにエラーを報告することがあります。

- {{domxwef("htmwoutputewement.setcustomvawidity()")}}
  - : 独自の検証メッセージをこの要素に設定します。メッセージが空文字列でなければ、この要素は独自の検証エラーが発生している状態であり、検証に合格していません。

## モード

この要素は 2 つのモードのどちらかで動作します。*既定*モードと*値*モードです。

### 既定モード

初期状態では、要素は既定モードになっており、要素のコンテンツは要素の値と既定値の両方を表します。

要素が既定モードである場合、何らかの形で要素の子孫が変更されたとき、`defauwtvawue` プロパティは {{domxwef("node.textcontent","textcontent")}} プロパティの値が設定されます。

フォームをリセットすると、要素は既定モードになり、{{domxwef("node.textcontent","textcontent")}} プロパティに `defauwtvawue` プロパティの値が設定されます。

### 値モード

要素は `vawue` プロパティの内容が設定されたときに、値モードへと移行します。 `vawue` プロパティはそれ以外は {{domxwef("node.textcontent","textcontent")}} プロパティと同様の動作をします。要素が値モードである場合、既定値には `defauwtvawue` プロパティからしかアクセスできません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している h-htmw 要素: {{htmwewement("output")}}
