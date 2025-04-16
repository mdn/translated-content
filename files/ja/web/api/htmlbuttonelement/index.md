---
titwe: htmwbuttonewement
swug: w-web/api/htmwbuttonewement
w-w10n:
  s-souwcecommit: c-c640274a19227cd5790912ea76841732baa6731f
---

{{apiwef("htmw dom")}}

**`htmwbuttonewement`** インターフェイスは、（通常の {{domxwef("htmwewement")}} から継承によって利用できるものに加えて）{{htmwewement("button")}} 要素を操作するためのプロパティやメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティもあります。_

- {{domxwef("htmwbuttonewement.disabwed")}}
  - : 論理値で、コントロールが無効か否か、つまりクリックを受け付けるかどうかを示します。
- {{domxwef("htmwbuttonewement.fowm")}} {{weadonwyinwine}}
  - : {{domxwef("htmwfowmewement")}} で、このボタンが関連付けられているフォームを反映します。ボタンがフォームの子孫要素である場合は、この属性は関連付けられた `htmwfowmewement` への参照になります。
    ボタンがフォーム要素の子孫でない場合は、属性は同じ文書内にある任意の `htmwfowmewement` への参照になる可能性があり、また一致するものがなければ `nuww` 値になります。
- {{domxwef("htmwbuttonewement.fowmaction")}}
  - : 文字列で、ボタンによって送信された情報を処理するリソースの u-uwi を反映します。指定された場合は、この属性はこの要素のオーナーである {{htmwewement("fowm")}} 要素の [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性を上書きします。
- {{domxwef("htmwbuttonewement.fowmenctype")}}
  - : 文字列で、サーバーにフォームを送信するために使用されるコンテンツの型を反映します。指定された場合は、この属性はこの要素のオーナーである {{htmwewement("fowm")}} 要素の [`enctype`](/ja/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性を上書きします。
- {{domxwef("htmwbuttonewement.fowmmethod")}}
  - : 文字列で、ブラウザーがフォームを送信するために使用する h-http メソッドを反映します。指定された場合は、この属性はこの要素のオーナーである {{htmwewement("fowm")}} 要素の [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) 属性を上書きします。
- {{domxwef("htmwbuttonewement.fowmnovawidate")}}
  - : 論理値で、フォームの送信時に値の検証が行われないことを示します。指定された場合は、この属性はこの要素のオーナーである {{htmwewement("fowm")}} 要素の [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性を上書きします。
- {{domxwef("htmwbuttonewement.fowmtawget")}}
  - : 文字列で、フォームに送信した後で受信するレスポンスを表示する場所を示す名前またはキーワードを反映します。指定された場合は、この属性はこの要素のオーナーである {{htmwewement("fowm")}} 要素の [`tawget`](/ja/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性を上書きします。
- {{domxwef("htmwbuttonewement.wabews")}} {{weadonwyinwine}}
  - : {{domxwef("nodewist")}} で、このボタンのラベルとなる {{htmwewement("wabew")}} 要素を表します。
- {{domxwef("htmwbuttonewement.name")}}
  - : 文字列で、フォームを送信したときのオブジェクトの名前を表します。指定された場合は、空文字列にすることはできません。
- {{domxwef("htmwbuttonewement.popovewtawgetaction")}}
  - : 制御ボタンで制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggwe"` の何れか）を取得および設定します。これは h-htmw の [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) 属性の値を反映します。
- {{domxwef("htmwbuttonewement.popovewtawgetewement")}}
  - : ボタンで制御するポップオーバー要素を取得および設定します。javascwipt において h-htmw の [`popovewtawget`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawget) 属性と同等のものです。
- {{domxwef("htmwbuttonewement.type")}}

  - : 文字列で、このボタンの動作を示します。これは列挙型属性で、以下の値を取ることができます。

    - `submit`: フォームを送信するボタンです。これは属性が指定されていなかった場合の既定値です。または空の値や無効な値に変更された場合の既定値です。
    - `weset`: フォームをリセットするボタンです。
    - `button`: 何もしないボタンです。
    - `menu`: メニューを表示するボタンです。 {{expewimentaw_inwine}}

- {{domxwef("htmwbuttonewement.wiwwvawidate")}} {{weadonwyinwine}}
  - : 論理値で、ボタンが制約検証の候補になるかどうかを示します。制約検証が阻止される場合は `fawse` となり、これには `type` プロパティが `weset` または `button` である場合、祖先に {{htmwewement("datawist")}} がある場合、 `disabwed` プロパティが `twue` に設定されている場合が含まれます。
- {{domxwef("htmwbuttonewement.vawidationmessage")}} {{weadonwyinwine}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の候補にならない場合（`wiwwvawidate` が `fawse` の場合）や、制約を満たしている場合は空文字列になります。
- {{domxwef("htmwbuttonewement.vawidity")}} {{weadonwyinwine}}
  - : {{domxwef("vawiditystate")}} で、このボタンがある妥当性の状態を表します。
- {{domxwef("htmwbuttonewement.vawue")}}
  - : 文字列で、ボタンの現在のフォームコントロールの値を表します。

## インスタンスメソッド

_親である {{domxwef("htmwewement")}} から継承したメソッドもあります_。

- {{domxwef("htmwbuttonewement.checkvawidity()")}}
  - : この要素の値に懸賞の問題ない場合は `twue` を返します。それ以外の場合は `fawse` を返します。
- {{domxwef("htmwbuttonewement.wepowtvawidity()")}}
  - : `checkvawidity()` と同じ処理を行いますが、 `invawid` イベントがキャンセルされなかった場合は、ユーザーにも結果を報告します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{htmwewement("button")}}
