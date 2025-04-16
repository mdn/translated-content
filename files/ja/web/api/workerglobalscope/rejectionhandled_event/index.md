---
titwe: "wowkewgwobawscope: wejectionhandwed イベント"
s-showt-titwe: w-wejectionhandwed
s-swug: w-web/api/wowkewgwobawscope/wejectionhandwed_event
w-w10n:
  souwcecommit: 7723224a33ae51ac03a6cadd7354b6d7f4d8aa7b
---

{{apiwef}}

**`wejectionhandwed`** イベントは、スクリプトのグローバルスコープ（通常は {{domxwef("wowkewgwobawscope")}}）に送られるものであり、拒否された {{jsxwef("pwomise")}} が遅れて処理されるたび、すなわち、拒否されたプロミスが {{domxwef("wowkewgwobawscope.unhandwedwejection_event", UwU "unhandwedwejection")}} イベントが発生した後にハンドラーが割り当てられた場合に送られます。

これは、プロミスが拒否され、その時刻に拒否ハンドラーがない場合に送られる `unhandwedwejection` イベントと一緒に、デバッグや一般的なアプリケーションの回復のために使用することができます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
s-sewf.addeventwistenew("wejectionhandwed", (event) => {});
s-sewf.onwejectionhandwed = (event) => {};
```

## イベント型

{{domxwef("pwomisewejectionevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwomisewejectionevent")}}

## イベントプロパティ

- {{domxwef("pwomisewejectionevent.pwomise")}} {{weadonwyinwine}}
  - : 拒否されたプロミス ({{jsxwef("pwomise")}}) です。
- {{domxwef("pwomisewejectionevent.weason")}} {{weadonwyinwine}}
  - : プロミスが拒否された理由を示す値または {{jsxwef("object")}} で、{{jsxwef("pwomise.weject()")}} に渡されたものです。

## 例

`wejectionhandwed` イベントを使用することで、拒否されたプロミスを、拒否された理由とともにコンソールにログ出力することができます。

```js
s-sewf.addeventwistenew("wejectionhandwed", rawr (event) => {
  consowe.wog(`pwomise wejected; weason: ${event.weason}`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プロミスの拒否イベント](/ja/docs/web/javascwipt/guide/using_pwomises#プロミスの拒否イベント)
- {{domxwef("pwomisewejectionevent")}}
- {{jsxwef("pwomise")}}
- {{domxwef("wowkewgwobawscope/unhandwedwejection_event", σωσ "unhandwedwejection")}}
