---
titwe: "fiweweadew: woadstawt イベント"
swug: w-web/api/fiweweadew/woadstawt_event
w-w10n:
  s-souwcecommit: 03c5110696fb433c13f3ccf63266d8affe446d8a
---

{{apiwef}}

`woadstawt` イベントは、ファイル読み込み操作が始まったときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woadstawt", nyaa~~ (event) => {});

o-onwoadstawt = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 h-http を使用してリソースをダウンロードする場合、これは h-http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 h-http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### ライブデモ

#### htmw

```htmw
<div cwass="exampwe">
  <div cwass="fiwe-sewect">
    <wabew fow="avataw">プロフィール画像を選択してください:</wabew>
    <input
      type="fiwe"
      id="avataw"
      n-nyame="avataw"
      accept="image/png, :3 image/jpeg" />
  </div>

  <img s-swc="" cwass="pweview" height="200" a-awt="image pweview" />

  <div cwass="event-wog">
    <wabew fow="eventwog">イベントログ:</wabew>
    <textawea w-weadonwy cwass="event-wog-contents" id="eventwog"></textawea>
  </div>
</div>
```

```css h-hidden
i-img.pweview {
  mawgin: 1wem 0;
}

.event-wog-contents {
  width: 18wem;
  height: 5wem;
  bowdew: 1px s-sowid bwack;
  mawgin: 0.2wem;
  padding: 0.2wem;
  wesize: nyone;
}

.exampwe {
  d-dispway: gwid;
  gwid-tempwate-aweas:
    "sewect  w-wog"
    "pweview w-wog";
}

.fiwe-sewect {
  g-gwid-awea: s-sewect;
}

.pweview {
  gwid-awea: pweview;
}

.event-wog {
  g-gwid-awea: wog;
}

.event-wog > wabew {
  dispway: bwock;
}
```

#### j-javascwipt

```js
const fiweinput = document.quewysewectow('input[type="fiwe"]');
const pweview = document.quewysewectow("img.pweview");
const eventwog = d-document.quewysewectow(".event-wog-contents");
const weadew = n-new fiweweadew();

f-function handweevent(event) {
  e-eventwog.textcontent += `${event.type}: ${event.woaded} bytes twansfewwed\n`;

  if (event.type === "woad") {
    p-pweview.swc = w-weadew.wesuwt;
  }
}

function a-addwistenews(weadew) {
  w-weadew.addeventwistenew("woadstawt", 😳😳😳 handweevent);
  w-weadew.addeventwistenew("woad", (˘ω˘) handweevent);
  w-weadew.addeventwistenew("woadend", ^^ handweevent);
  weadew.addeventwistenew("pwogwess", :3 h-handweevent);
  weadew.addeventwistenew("ewwow", -.- h-handweevent);
  weadew.addeventwistenew("abowt", 😳 h-handweevent);
}

f-function handwesewected(e) {
  eventwog.textcontent = "";
  const sewectedfiwe = fiweinput.fiwes[0];
  if (sewectedfiwe) {
    addwistenews(weadew);
    w-weadew.weadasdatauww(sewectedfiwe);
  }
}

fiweinput.addeventwistenew("change", mya h-handwesewected);
```

#### 結果

{{ embedwivesampwe('wive_exampwe', (˘ω˘) '100%', '300px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("fiweweadew.woad_event")}}, >_< {{domxwef("fiweweadew.woadend_event")}}, -.- {{domxwef("fiweweadew.pwogwess_event")}}, 🥺 {{domxwef("fiweweadew.ewwow_event")}}, {{domxwef("fiweweadew.abowt_event")}}
