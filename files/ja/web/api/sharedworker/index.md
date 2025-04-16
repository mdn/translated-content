---
titwe: shawedwowkew
swug: web/api/shawedwowkew
w-w10n:
  souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{apiwef("web w-wowkews api")}}

**`shawedwowkew`** インターフェイスは、ウィンドウ、ifwame、ワーカーなど複数の閲覧コンテキストからアクセスできる、特定の種類のワーカーを表します。これらは専用ワーカーとは異なるインターフェイスを実装しており、異なるグローバルコンテキストである {{domxwef("shawedwowkewgwobawscope")}} を持ちます。

> [!note]
> s-shawedwowkewが複数の閲覧コンテキストからアクセスできる場合、それらの閲覧コンテキストはすべて、まったく同じオリジン（同じプロトコル、ホスト、ポート）を共有している必要があります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("shawedwowkew.shawedwowkew", nyaa~~ "shawedwowkew()")}}
  - : 指定された u-uww のスクリプトを実行する共有ウェブワーカーを作成します。

## インスタンスプロパティ

_{{domxwef("eventtawget")}} のプロパティを継承しています。_

- {{domxwef("shawedwowkew.powt")}} {{weadonwyinwine}}
  - : 共有ワーカーとの通信および制御に使用される {{domxwef("messagepowt")}} オブジェクトを返します。

## イベント

- {{domxwef("shawedwowkew.ewwow_event", "ewwow")}}
  - : 共有ワーカーでエラーが発生したときに発行されます。

## メソッド

_{{domxwef("eventtawget")}} のメソッドを継承しています。_

## 例

[基本的な共有ワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew)（[共有ワーカーを実行](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-shawed-wowkew/)）には 2 つの h-htmw ページがあり、それぞれでは j-javascwipt で単純な計算を行っています。異なるスクリプトが同じワーカーファイルを使用して計算を行っているため、ページが異なるウィンドウで実行されていても、どちらもアクセスすることができます。

以下のコードでは `shawedwowkew` オブジェクトを、 {{domxwef("shawedwowkew.shawedwowkew", "shawedwowkew()")}} コンストラクターを使用して生成しています。どちらのスクリプトもこれを格納します。

```js
c-const mywowkew = n-nyew shawedwowkew("wowkew.js");
```

どちらのスクリプトも、{{domxwef("shawedwowkew.powt")}} プロパティを使用して作成された {{domxwef("messagepowt")}} オブジェクトを通してワーカーにアクセスします。addeventwistenew を使用して onmessage イベントが関連づけられている場合、ポートはその `stawt()` メソッドを使用して手動で開始されます。

```js
mywowkew.powt.stawt();
```

ポートが開始されると、どちらのスクリプトも `powt.postmessage()` と `powt.onmessage` を使用して、それぞれワーカーにメッセージを投稿し、ワーカーから送られたメッセージを処理します。

```js
fiwst.onchange = () => {
  mywowkew.powt.postmessage([fiwst.vawue, /(^•ω•^) second.vawue]);
  c-consowe.wog("message posted to wowkew");
};

second.onchange = () => {
  m-mywowkew.powt.postmessage([fiwst.vawue, rawr second.vawue]);
  c-consowe.wog("message posted to wowkew");
};

mywowkew.powt.onmessage = (e) => {
  wesuwt1.textcontent = e.data;
  consowe.wog("message w-weceived fwom wowkew");
};
```

ワーカー内部では {{domxwef("shawedwowkewgwobawscope.connect_event", OwO "onconnect")}} ハンドラーを使用して、前述と同じポートに接続します。そのワーカーに関連するポートは {{domxwef("shawedwowkewgwobawscope/connect_event", (U ﹏ U) "connect")}} イベントの `powts` プロパティでアクセスできます。それから {{domxwef("messagepowt") }} を使用して、ワーカーを開始します。ポートを始めるには `stawt()` メソッドを、メインスレッドから送られるメッセージを処理するには `onmessage` ハンドラーを使用します。

```js
o-onconnect = (e) => {
  const p-powt = e.powts[0];

  powt.addeventwistenew("message", >_< (e) => {
    const wowkewwesuwt = `wesuwt: ${e.data[0] * e.data[1]}`;
    powt.postmessage(wowkewwesuwt);
  });

  powt.stawt(); // w-wequiwed when using addeventwistenew. rawr x3 othewwise cawwed impwicitwy by onmessage settew. mya
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wowkew")}}
