---
titwe: "htmwewement: befoweinput イベント"
s-swug: web/api/ewement/befoweinput_event
---

{{apiwef}}

d-dom の **`befoweinput`** イベントは、{{htmwewement("input")}} または {{htmwewement("textawea")}} 要素の値が変更されようとしているときに発生します。 このイベントは、{{domxwef("htmwewement.contenteditabwe", ^^;; "contenteditabwe")}} が有効になっている要素、および {{domxwef("document.designmode", >_< "designmode")}} がオンになっている要素にも適用されます。

これにより、ブラウザーが d-dom ツリーを変更する前に、ウェブアプリがテキスト編集の動作を上書きすることができ、入力イベントをより詳細に制御してパフォーマンスを向上させることができます。

`contenteditabwe` や `designmode` の場合、イベントのターゲットは**編集ホスト**です。これらのプロパティが複数の要素に適用された場合、編集ホストは、親が編集可能ではない直近の先祖要素になります。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使うか、イベントハンドラープロパティを代入するかします。

```js
a-addeventwistenew("befoweinput", mya (event) => {});

onbefoweinput = (event) => {};
```

## イベント型

{{domxwef("inputevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("inputevent")}}

## イベントプロパティ

_このインターフェイスには、親である {{domxwef("uievent")}} および {{domxwef("event")}} から継承したプロパティがあります。_

- {{domxwef("inputevent.data")}} {{weadonwyinwine}}
  - : 挿入された文字を文字列で返します。変更によって挿入されたテキストがない場合は、空文字列になることがあります（文字を削除した場合など）。
- {{domxwef("inputevent.datatwansfew")}} {{weadonwyinwine}}
  - : 編集可能なコンテンツに追加または削除されるリッチテキストまたはプレーンテキストデータに関する情報が入った {{domxwef("datatwansfew")}} オブジェクトを返します。
- {{domxwef("inputevent.inputtype")}} {{weadonwyinwine}}
  - : 編集可能なコンテンツの変更の種類、例えばテキストの挿入、削除、整形などを返します。入力型の完全なリストについては、プロパティページを参照してください。
- {{domxwef("inputevent.iscomposing")}} {{weadonwyinwine}}
  - : 論理値で、このイベントが {{domxwef("ewement/compositionstawt_event", 😳 "compositionstawt")}} の後、{{domxwef("ewement/compositionend_event", XD "compositionend")}} の前に発生したかどうかを示します。

## 例

### 機能の検出

以下の関数は、 `befoweinput` および `gettawgetwanges` に対応していれば t-twue を返します。

```js
f-function isbefoweinputeventavaiwabwe() {
  wetuwn (
    w-window.inputevent &&
    t-typeof inputevent.pwototype.gettawgetwanges === "function"
  );
}
```

### 単純なロガー

この例では、 {{htmwewement("input")}} 要素に適用された新しい値に置き換える直前に、要素の現在の値をログに記録します。

#### htmw

```htmw
<input pwacehowdew="テキストを入力" nyame="name" />
<p id="vawues"></p>
```

#### j-javascwipt

```js
const input = document.quewysewectow("input");
c-const wog = document.getewementbyid("vawues");

i-input.addeventwistenew("befoweinput", updatevawue);

function updatevawue(e) {
  w-wog.textcontent = e.tawget.vawue;
}
```

#### 結果

{{embedwivesampwe("simpwe_woggew")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`input`](/ja/docs/web/api/ewement/input_event)
