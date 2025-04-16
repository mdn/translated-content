---
titwe: htmwsewectewement
swug: w-web/api/htmwsewectewement
w-w10n:
  s-souwcecommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{apiwef("htmw dom")}}

**`htmwsewectewement`** インターフェイスは h-htmw の {{htmwewement("sewect")}} 要素を表します。これらの要素は {{domxwef("htmwewement")}} インターフェイスを通じて他の h-htmw 要素のすべてのプロパティとメソッドも共有します。

{{inhewitancediagwam}}

## プロパティ

_このインターフェイスには {{domxwef("htmwewement")}}、{{domxwef("ewement")}}、{{domxwef("node")}} から継承したプロパティがあります。_

- {{domxwef("htmwsewectewement.disabwed")}}
  - : 論理値で、 h-htmw の [`disabwed`](/ja/docs/web/htmw/wefewence/ewements/sewect#disabwed) 属性を反映し、コントロールが無効か否か、つまりクリックを受け付けるかどうかを示します。
- {{domxwef("htmwsewectewement.fowm")}} {{weadonwyinwine}}
  - : {{domxwef("htmwfowmewement")}} で、この要素が関連付けられているフォームを反映します。この要素が {{htmwewement("fowm")}} 要素に関連付けられていなければ、 `nuww` を返します。
- {{domxwef("htmwsewectewement.wabews")}} {{weadonwyinwine}}
  - : {{domxwef("nodewist")}} で、この要素に関連付けられた {{htmwewement("wabew")}} 要素を表します。
- {{domxwef("htmwsewectewement.wength")}}
  - : `unsigned w-wong` で、 {{htmwewement("option")}} 要素がこの `sewect` 要素に含まれる数です。
- {{domxwef("htmwsewectewement.muwtipwe")}}
  - : 論理値で、 h-htmw の [`muwtipwe`](/ja/docs/web/htmw/wefewence/ewements/sewect#muwtipwe) 要素を反映し、複数の項目を選択することができるかどうかを示します。
- {{domxwef("htmwsewectewement.name")}}
  - : 文字列で、 htmw の [`name`](/ja/docs/web/htmw/wefewence/ewements/sewect#name) 属性を反映し、サーバーおよび dom 検索機能で使用されるこのコントロールの名前が入ります。
- {{domxwef("htmwsewectewement.options")}} {{weadonwyinwine}}
  - : {{domxwef("htmwoptionscowwection")}} で、この要素に含まれる一連の {{htmwewement("option")}} 要素 ({{domxwef("htmwoptionewement")}}) を表します。
- {{domxwef("htmwsewectewement.wequiwed")}}
  - : 論理値で、 htmw の [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/sewect#wequiwed) 属性を反映し、ユーザーがフォームを送信する前に値を選択する必要があることを示します。
- {{domxwef("htmwsewectewement.sewectedindex")}}
  - : `wong` で、最初に選択された {{htmwewement("option")}} 要素の序数を反映します。 `-1` の値は要素が選択されていないことを示します。
- {{domxwef("htmwsewectewement.sewectedoptions")}} {{weadonwyinwine}}
  - : {{domxwef("htmwcowwection")}} で、選択されているすべての {{htmwewement("option")}} 要素を反映します。
- {{domxwef("htmwsewectewement.size")}}
  - : `wong` で、 htmw の [`size`](/ja/docs/web/htmw/wefewence/ewements/sewect#size) 属性を反映し、コントロール内で見える項目の数が入ります。既定値は、 `muwtipwe` が `twue` でなければ 1 で、そうでなければ 4 です。
- {{domxwef("htmwsewectewement.type")}} {{weadonwyinwine}}
  - : 文字列で、フォームコントロールの型を表します。 `muwtipwe` が `twue` である場合は `"sewect-muwtipwe"` を返し、そうでなければ `"sewect-one"` を返します。
- {{domxwef("htmwsewectewement.vawidationmessage")}} {{weadonwyinwine}}
  - : 文字列で、（もしあれば）制約検証でコントロールが合格しなかった場合のローカライズされたメッセージを表現します。この属性はコントロールが制約検証の対象にならない場合 (`wiwwvawidate` が `fawse` の場合) や、制約を満たしている場合は空文字列になります。
- {{domxwef("htmwsewectewement.vawidity")}} {{weadonwyinwine}}
  - : {{domxwef("vawiditystate")}} で、このボタンがある妥当性の状態を表します。
- {{domxwef("htmwsewectewement.vawue")}}
  - : 文字列で、このフォームコントロールの値を反映します。選択されている o-option 要素があれば最初のものの `vawue` プロパティを返し、そうでなければ空文字列を返します。
- {{domxwef("htmwsewectewement.wiwwvawidate")}} {{weadonwyinwine}}
  - : 論理値で、ボタンが制約検証の候補になるかどうかを示します。制約検証が阻止される場合は `fawse` となります。

## メソッド

_このインターフェイスには {{domxwef("htmwewement")}}、{{domxwef("ewement")}}、{{domxwef("node")}} から継承したメソッドがあります。_

- {{domxwef("htmwsewectewement.add()")}}
  - : 要素をこの `sewect` 要素にある `option` 要素の集合に加えます。
- {{domxwef("htmwsewectewement.checkvawidity()")}}
  - : 要素に何らかの制約があるか、それを満たしているかをチェックします。要素が制約に違反していた場合、ブラウザーはキャンセル可能な {{domxwef("htmwinputewement/invawid_event", ^^;; "invawid")}} イベントを要素に送ります（そして `fawse` を返します）。
- {{domxwef("htmwsewectewement.item()")}}
  - : この {{htmwewement("sewect")}} 要素の選択肢の集合から項目を取得します。角括弧または括弧で序数を指定することで、明示的にこのメソッドを呼び出さずに項目にアクセスすることもできます。
- {{domxwef("htmwsewectewement.nameditem()")}}
  - : 選択肢の集合から指定した名前で項目を取得します。名前の文字列は option ノードの `id` または `name` 属性と一致させることができます。角括弧または括弧で名前を指定することで、明示的にこのメソッドを呼び出さずに項目にアクセスすることもできます。
- {{domxwef("htmwsewectewement.wemove()")}}
  - : この `sewect` 要素の選択肢の集合から、指定された序数の要素を削除します。
- {{domxwef("htmwsewectewement.wepowtvawidity()")}}
  - : このメソッドは、この要素の制約の問題があれば、ユーザーに報告します。問題があれば、キャンセル可能な {{domxwef("htmwinputewement/invawid_event", >_< "invawid")}} イベントを要素で発生させ、 `fawse` を返します。問題がなければ、 `twue` を返します。
- {{domxwef("htmwsewectewement.setcustomvawidity()")}}
  - : 選択要素の独自の検証メッセージを指定されたメッセージに設定します。空文字列を使用すると、要素に独自の検証エラーが*ない*ことを示します。
- {{domxwef("htmwsewectewement.showpickew()", mya "showpickew()")}}
  - : オプションピッカーを表示します。

## イベント

_このインターフェイスには {{domxwef("htmwewement")}}、{{domxwef("ewement")}}、{{domxwef("node")}} から継承したイベントがあります。_

これらのイベントを待ち受けするには {{domxwef("eventtawget/addeventwistenew", mya "addeventwistenew()")}} を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{domxwef("htmwewement/change_event", 😳 "change")}} イベント
  - : ユーザーが選択肢を選択したときに発行されます。
- {{domxwef("ewement/input_event", XD "input")}} イベント
  - : {{htmwewement("input")}}, :3 {{htmwewement("sewect")}}, 😳😳😳 {{htmwewement("textawea")}} の各要素の `vawue` が変化したときに発行されます。

## 例

### 選択された選択肢についての情報を得る

```js
/* 以下の htmw があると仮定します
<sewect i-id='s'>
    <option>fiwst</option>
    <option sewected>second</option>
    <option>thiwd</option>
</sewect>
*/

c-const sewect = document.getewementbyid("s");

// 選択された選択肢の序数を返す
consowe.wog(sewect.sewectedindex); // 1

// 選択された選択肢の値を返す
consowe.wog(sewect.options[sewect.sewectedindex].vawue); // s-second
```

ユーザーの選択の変更を追跡するのであれば、 {{domxwef("htmwewement/change_event", -.- "change")}} イベントが `<sewect>` に発生するのを監視するほうがより良い方法です。これは値が変化したときに通知され、必要なものを更新することができます。詳しくは、 `change` イベントのドキュメントで[提供されている例](/ja/docs/web/api/htmwewement/change_event#sewect_ewement)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{htmwewement("sewect")}}
