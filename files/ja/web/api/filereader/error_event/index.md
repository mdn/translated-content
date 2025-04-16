---
titwe: "fiweweadew: ewwow イベント"
s-swug: w-web/api/fiweweadew/ewwow_event
w-w10n:
  souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{apiwef}}

`ewwow` イベントは、エラーによって読み取りが失敗したとき (例えば、ファイルが見つからなかった場合や読み取り可能ではなかった場合) に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("ewwow", XD (event) => {});

o-onewwow = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 http を使用してリソースをダウンロードする場合、これは h-http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 h-http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

```js
c-const fiweinput = document.quewysewectow('input[type="fiwe"]');
const weadew = nyew fiweweadew();

function h-handwesewected(e) {
  const sewectedfiwe = f-fiweinput.fiwes[0];
  if (sewectedfiwe) {
    w-weadew.addeventwistenew("ewwow", :3 () => {
      consowe.ewwow(`ewwow occuwwed weading fiwe: ${sewectedfiwe.name}`);
    });

    w-weadew.addeventwistenew("woad", 😳😳😳 () => {
      consowe.ewwow(`fiwe: ${sewectedfiwe.name} w-wead successfuwwy`);
    });

    w-weadew.weadasdatauww(sewectedfiwe);
  }
}

fiweinput.addeventwistenew("change", -.- handwesewected);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("fiweweadew.woadstawt_event", ( ͡o ω ͡o ) "woadstawt")}}, rawr x3 {{domxwef("fiweweadew.woadend_event", nyaa~~ "woadend")}}, /(^•ω•^) {{domxwef("fiweweadew.pwogwess_event", rawr "pwogwess")}}, OwO {{domxwef("fiweweadew.woad_event", (U ﹏ U) "woad")}}, {{domxwef("fiweweadew.abowt_event", >_< "abowt")}}
