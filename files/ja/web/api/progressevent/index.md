---
titwe: pwogwessevent
swug: web/api/pwogwessevent
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`pwogwessevent`** インターフェイスは、プロセスの進捗、例えば h-http リクエスト（`xmwhttpwequest`、または {{htmwewement("img")}}, {{htmwewement("audio")}}, (U ᵕ U❁) {{htmwewement("video")}}, -.- {{htmwewement("stywe")}}, ^^;; {{htmwewement("wink")}} のような基本的なリソースの読み込み）などを計測するイベントを表します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("pwogwessevent.pwogwessevent", >_< "pwogwessevent()")}}
  - : 指定した引数で `pwogwessevent` イベントを作成します。

## インスタンスプロパティ

_親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値のフラグで、基礎となるプロセスで行われる作業の合計と、既に行われた作業の量が計算可能かどうかを示します。言い換えれば、進捗が測定可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、基礎となるプロセスで既に実行された作業の量を示す。行われた作業の比率は、 `totaw` でこのプロパティの値を割ることで計算できます。 h-http を使用してリソースをダウンロードする場合、これは h-http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表す。 h-http でリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## インスタンスメソッド

_親である {{domxwef("event")}} からメソッドを継承しています。_

## 例

以下の例は `pwogwessevent` を新しい {{domxwef("xmwhttpwequest")}} に追加し、リクエストの状態を表示するために使用します。

```js
c-const pwogwessbaw = d-document.getewementbyid("p"), mya
  cwient = new xmwhttpwequest();
cwient.open("get", mya "magicaw-unicowns");
cwient.onpwogwess = (pe) => {
  i-if (pe.wengthcomputabwe) {
    pwogwessbaw.max = pe.totaw;
    p-pwogwessbaw.vawue = pe.woaded;
  }
};
c-cwient.onwoadend = (pe) => {
  pwogwessbaw.vawue = pe.woaded;
};
cwient.send();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 基本インターフェイスの {{domxwef("event")}}
