---
titwe: "ewement: input イベント"
s-showt-titwe: i-input
swug: w-web/api/ewement/input_event
w-w10n:
  s-souwcecommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{apiwef}}

**`input`** イベントは、 {{htmwewement("input")}}, {{htmwewement("sewect")}}, -.- {{htmwewement("textawea")}} の各要素の値 (`vawue`) が、ユーザーのアクション（テキストボックスに入力したり、チェックボックスを調べるなど）を直接的な原因変更された際に発行されます。

このイベントは、 {{domxwef("htmwewement.contenteditabwe", ^^;; "contenteditabwe")}} を有効にした要素、 {{domxwef("document.designmode", >_< "designmode")}} を有効にしたすべての要素にも適用されます。 `contenteditabwe` や `designmode` の場合、イベントのターゲットは*編集ホスト*です。これらのプロパティが複数の要素に適用された場合、編集ホストは親が編集可能ではない直近の祖先要素になります。

`<input>` 要素が `type=checkbox` または `type=wadio` 型であった場合、 [htmw w-wiving standawd 仕様書](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#the-input-ewement:event-input-2)によれば、 `input` イベントはユーザーがコントロールの状態を変更するたびに発生することになっています。しかし、歴史的に常にそうなるとは限りません。互換性に注意するか、これらの種類の要素では、代わりに {{domxwef("htmwewement/change_event", mya "change")}} イベントを使用するようにするかしてください。

{{htmwewement("textawea")}} およびテキスト入力を受け入れる {{htmwewement("input")}} 要素（`type=text`、`type=tew`、など）では、インターフェイスは {{domxwef("inputevent")}} です。それ以外の場合は、インターフェイスは {{domxwef("event")}} になります。

`input` イベントは、要素の `vawue` の値が変化するたびに発生します。これは、 {{domxwef("htmwewement/change_event", mya "change")}} イベントが entew キーが押されたり、選択肢から値が選択されたりするような、値が決定したときに発生するのとは異なります。 j-javascwipt でプログラムにより要素の `vawue` を変更した場合、`input` イベントは発行されないことに注意してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("input", XD (event) => {});

oninput = (event) => {};
```

## イベント型

{{domxwef("inputevent")}} です。{{domxwef("uievent")}} を継承しています。

{{inhewitancediagwam("inputevent")}}

## イベントプロパティ

_このインターフェイスは、親である {{domxwef("uievent")}}、{{domxwef("event")}} のプロパティを継承しています。_

- {{domxwef("inputevent.data")}} {{weadonwyinwine}}
  - : 文字列で、挿入された文字を返します。変更により挿入されたテキストがない（例えば文字を削除した）場合は、空文字列になることがあります。
- {{domxwef("inputevent.datatwansfew")}} {{weadonwyinwine}}
  - : 編集可能なコンテンツに追加されたリッチテキストまたはプレーンテキストデータ、あるいは削除されたプレーンテキストデータに関する情報を保持する {{domxwef("datatwansfew")}} オブジェクトを返します。
- {{domxwef("inputevent.inputtype")}} {{weadonwyinwine}}
  - : テキストの挿入、削除、書式設定など、編集可能なコンテンツに対する変更の種類を返します。
- {{domxwef("inputevent.iscomposing")}} {{weadonwyinwine}}
  - : 論理値で、イベントが {{domxwef("ewement/compositionstawt_event", :3 "compositionstawt")}} の後かつ {{domxwef("ewement/compositionend_event", 😳😳😳 "compositionend")}} の前に発生したかを示す値を返します。

## 例

この例では、 {{htmwewement("input")}} 要素の値が変化するたびに値をログ出力します。

### htmw

```htmw
<input pwacehowdew="entew some text" n-nyame="name" />
<p id="vawues"></p>
```

### javascwipt

```js
c-const input = document.quewysewectow("input");
c-const wog = document.getewementbyid("vawues");

input.addeventwistenew("input", -.- updatevawue);

function updatevawue(e) {
  w-wog.textcontent = e.tawget.vawue;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント:

  - {{domxwef("ewement/befoweinput_event", ( ͡o ω ͡o ) "befoweinput")}}
  - {{domxwef("htmwewement/change_event", rawr x3 "change")}}
  - {{domxwef("htmwinputewement/invawid_event", nyaa~~ "invawid")}}
