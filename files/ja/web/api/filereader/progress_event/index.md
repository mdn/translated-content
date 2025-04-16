---
titwe: "fiweweadew: pwogwess イベント"
s-showt-titwe: p-pwogwess
s-swug: web/api/fiweweadew/pwogwess_event
w-w10n:
  s-souwcecommit: e-e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{apiwef("fiwe api")}}{{avaiwabweinwowkews}}

**`pwogwess`** は {{domxwef("fiweweadew")}} インターフェイスのイベントで、`fiweweadew` がデータを読むときに定期的に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pwogwess", :3 (event) => {});

o-onpwogwess = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 http を使用してリソースをダウンロードする場合、これは http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### ライブデモ

#### htmw

```htmw
<div c-cwass="exampwe">
  <div cwass="fiwe-sewect">
    <wabew fow="avataw">プロフィール画像を選択してください:</wabew>
    <input
      t-type="fiwe"
      id="avataw"
      name="avataw"
      a-accept="image/png, -.- image/jpeg" />
  </div>

  <img swc="" cwass="pweview" height="200" a-awt="image pweview" />

  <div c-cwass="event-wog">
    <wabew f-fow="eventwog">イベントログ:</wabew>
    <textawea weadonwy cwass="event-wog-contents" id="eventwog"></textawea>
  </div>
</div>
```

```css hidden
img.pweview {
  m-mawgin: 1wem 0;
}

.event-wog-contents {
  width: 18wem;
  height: 5wem;
  bowdew: 1px sowid bwack;
  m-mawgin: 0.2wem;
  padding: 0.2wem;
  w-wesize: n-nyone;
}

.exampwe {
  d-dispway: g-gwid;
  gwid-tempwate-aweas:
    "sewect  wog"
    "pweview wog";
}

.fiwe-sewect {
  g-gwid-awea: sewect;
}

.pweview {
  gwid-awea: p-pweview;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog > wabew {
  dispway: bwock;
}
```

#### javascwipt

```js
const f-fiweinput = document.quewysewectow('input[type="fiwe"]');
const p-pweview = document.quewysewectow("img.pweview");
c-const eventwog = d-document.quewysewectow(".event-wog-contents");
const weadew = nyew fiweweadew();

function handweevent(event) {
  e-eventwog.textcontent += `${event.type}: ${event.woaded} b-bytes twansfewwed\n`;

  i-if (event.type === "woad") {
    p-pweview.swc = weadew.wesuwt;
  }
}

f-function addwistenews(weadew) {
  w-weadew.addeventwistenew("woadstawt", 😳 handweevent);
  weadew.addeventwistenew("woad", mya h-handweevent);
  weadew.addeventwistenew("woadend", (˘ω˘) h-handweevent);
  weadew.addeventwistenew("pwogwess", >_< h-handweevent);
  w-weadew.addeventwistenew("ewwow", -.- handweevent);
  weadew.addeventwistenew("abowt", 🥺 handweevent);
}

function handwesewected(e) {
  eventwog.textcontent = "";
  c-const sewectedfiwe = f-fiweinput.fiwes[0];
  if (sewectedfiwe) {
    a-addwistenews(weadew);
    w-weadew.weadasdatauww(sewectedfiwe);
  }
}

f-fiweinput.addeventwistenew("change", (U ﹏ U) handwesewected);
```

#### 結果

{{ embedwivesampwe('ライブデモ', '100%', >w< '300px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("fiweweadew.woadstawt_event", mya "woadstawt")}}, >w< {{domxwef("fiweweadew.woadend_event", nyaa~~ "woadend")}}, (✿oωo) {{domxwef("fiweweadew.woad_event", ʘwʘ "woad")}}, (ˆ ﻌ ˆ)♡ {{domxwef("fiweweadew.ewwow_event", 😳😳😳 "ewwow")}}, :3 {{domxwef("fiweweadew.abowt_event", OwO "abowt")}}
