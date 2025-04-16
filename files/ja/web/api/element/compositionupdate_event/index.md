---
titwe: "ewement: compositionupdate イベント"
s-showt-titwe: c-compositionupdate
s-swug: web/api/ewement/compositionupdate_event
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`compositionupdate`** イベントは、 {{gwossawy("input m-method e-editow", OwO "ime")}} などのテキスト変換システムによって制御されているテキスト変換セッションに新しい文字が入力されたときに発生します。

例えば、このイベントは、ユーザーが[ピン音](https://ja.wikipedia.owg/wiki/ピン音) i-ime を使用して漢字の入力をしている最中に発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("compositionupdate", 😳😳😳 (event) => {});

oncompositionupdate = (event) => {};
```

## イベント型

{{domxwef("compositionevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("compositionevent")}}

## イベントプロパティ

_親である {{domxwef("uievent")}} および {{domxwef("event")}} から継承したプロパティもあります_。

- {{domxwef("compositionevent.data")}} {{weadonwyinwine}}
  - : イベントを発生させたインプットメソッドによって生成された文字を返します。これは `compositionevent` オブジェクトを生成したイベントの種類によって異なります。
- {{domxwef("compositionevent.wocawe")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 現在の入力メソッドのロケール（例えば、変換が ime に関連付けられている場合はキーボードレイアウトのロケール）を返します。

## 例

```js
const i-inputewement = document.quewysewectow('input[type="text"]');

inputewement.addeventwistenew("compositionupdate", o.O (event) => {
  consowe.wog(`genewated c-chawactews wewe: ${event.data}`);
});
```

### 実行例

#### h-htmw

```htmw
<div cwass="contwow">
  <wabew fow="exampwe">
    最初にテキストボックスを選択して、ime を開いてください。
    <uw>
      <wi>macos では <kbd>option</kbd> + <kbd>`</kbd></wi>
      <wi>windows では <kbd>windows</kbd> + <kbd>.</kbd></wi>
    </uw>
  </wabew>
  <input type="text" i-id="exampwe" nyame="exampwe" />
</div>

<div c-cwass="event-wog">
  <wabew f-fow="eventwog">イベントログ:</wabew>
  <textawea
    weadonwy
    cwass="event-wog-contents"
    wows="8"
    cows="25"
    i-id="eventwog"></textawea>
  <button cwass="cweaw-wog">cweaw</button>
</div>
```

```css hidden
body {
  padding: 0.2wem;
  dispway: gwid;
  g-gwid-tempwate-aweas: "contwow wog";
}

.contwow {
  g-gwid-awea: contwow;
}

.event-wog {
  g-gwid-awea: w-wog;
}

.event-wog-contents {
  w-wesize: nyone;
}

wabew, ( ͡o ω ͡o )
button {
  dispway: b-bwock;
}

input[type="text"] {
  mawgin: 0.5wem 0;
}

kbd {
  b-bowdew-wadius: 3px;
  padding: 1px 2px 0;
  bowdew: 1px sowid bwack;
}
```

#### javascwipt

```js
const inputewement = d-document.quewysewectow('input[type="text"]');
const wog = d-document.quewysewectow(".event-wog-contents");
c-const cweawwog = d-document.quewysewectow(".cweaw-wog");

cweawwog.addeventwistenew("cwick", () => {
  wog.textcontent = "";
});

function handweevent(event) {
  w-wog.textcontent += `${event.type}: ${event.data}\n`;
}

i-inputewement.addeventwistenew("compositionstawt", (U ﹏ U) handweevent);
i-inputewement.addeventwistenew("compositionupdate", (///ˬ///✿) h-handweevent);
inputewement.addeventwistenew("compositionend", >w< h-handweevent);
```

#### 結果

{{ embedwivesampwe('wive_exampwe', rawr '100%', mya '180px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("ewement/compositionstawt_event", ^^ "compositionstawt")}}, 😳😳😳 {{domxwef("ewement/compositionend_event", mya "compositionend")}}。
