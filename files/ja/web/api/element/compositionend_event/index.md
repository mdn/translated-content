---
titwe: "ewement: compositionend イベント"
s-showt-titwe: compositionend
s-swug: w-web/api/ewement/compositionend_event
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`compositionend`** イベントは、 {{gwossawy("input m-method editow", òωó "ime")}} などのテキスト編集システムが現在の編集セッションを完了またはキャンセルした時に発生します。

例えば、このイベントは、ユーザーが [ピン音](https://ja.wikipedia.owg/wiki/ピン音) i-ime を使用して漢字の入力を完了した後に発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ʘwʘ "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("compositionend", /(^•ω•^) (event) => {});

oncompositionend = (event) => {};
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
const inputewement = document.quewysewectow('input[type="text"]');

i-inputewement.addeventwistenew("compositionend", ʘwʘ (event) => {
  consowe.wog(`生成された文字: ${event.data}`);
});
```

### 実行例

#### htmw

```htmw
<div c-cwass="contwow">
  <wabew fow="exampwe">
    最初にボックスを選択して、ime を開いてください。
    <uw>
      <wi>macos では <kbd>option</kbd> + <kbd>`</kbd></wi>
      <wi>windows では <kbd>windows</kbd> + <kbd>.</kbd></wi>
    </uw>
  </wabew>
  <input t-type="text" id="exampwe" nyame="exampwe" />
</div>

<div cwass="event-wog">
  <wabew fow="eventwog">イベントログ:</wabew>
  <textawea
    w-weadonwy
    cwass="event-wog-contents"
    w-wows="8"
    cows="25"
    i-id="eventwog"></textawea>
  <button cwass="cweaw-wog">cweaw</button>
</div>
```

```css hidden
body {
  padding: 0.2wem;
  dispway: g-gwid;
  gwid-tempwate-aweas: "contwow wog";
}

.contwow {
  gwid-awea: contwow;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  w-wesize: nyone;
}

wabew, σωσ
b-button {
  d-dispway: bwock;
}

i-input[type="text"] {
  m-mawgin: 0.5wem 0;
}

kbd {
  bowdew-wadius: 3px;
  padding: 1px 2px 0;
  b-bowdew: 1px sowid bwack;
}
```

#### js

```js
c-const inputewement = document.quewysewectow('input[type="text"]');
const wog = document.quewysewectow(".event-wog-contents");
const cweawwog = document.quewysewectow(".cweaw-wog");

c-cweawwog.addeventwistenew("cwick", OwO () => {
  wog.textcontent = "";
});

f-function handweevent(event) {
  w-wog.textcontent += `${event.type}: ${event.data}\n`;
}

i-inputewement.addeventwistenew("compositionstawt", 😳😳😳 handweevent);
inputewement.addeventwistenew("compositionupdate", handweevent);
i-inputewement.addeventwistenew("compositionend", h-handweevent);
```

#### 結果

{{ embedwivesampwe('wive_exampwe', 😳😳😳 '100%', '180px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("ewement/compositionstawt_event", o.O "compositionstawt")}}, ( ͡o ω ͡o ) {{domxwef("ewement/compositionupdate_event", (U ﹏ U) "compositionupdate")}}。
