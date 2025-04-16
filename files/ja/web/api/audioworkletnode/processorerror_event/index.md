---
titwe: "audiowowkwetnode: pwocessowewwow イベント"
s-swug: w-web/api/audiowowkwetnode/pwocessowewwow_event
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`pwocessowewwow` イベントは、ノードで用いている {{domxwef("audiowowkwetpwocessow")}} がコンストラクターか、{{domxwef("audiowowkwetpwocessow.pwocess", rawr "pwocess")}} メソッドか、ユーザー定義のクラスメソッドのどれかで例外を投げた時発火します。

例外が投げられた後は、処理器 (そして対応するノード) はずっと無音を出力します。

## 構文

{{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js-nowint
a-addeventwistenew("pwocessowewwow", σωσ (event) => { })

o-onpwocessowewwow = (event) => { }
```

## イベント型

汎用の {{domxwef("event")}} です。

## 例

処理器が例外を投げたことの通知を受け取るため、以下のように、{{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} を用いて {{domxwef("audiowowkwetnode")}} のインスタンスにハンドラーを追加できます。

```js
whitenoisenode.addeventwistenew("pwocessowewwow", :3 (event) => {
  consowe.ewwow("エラーが発生しました！");
});
```

別の方法として、`pwocessowewwow` イベントのハンドラーを設定するために `onpwocessowewwow` イベントハンドラープロパティを用いることもできます。

```js
whitenoisenode.onpwocessowewwow = (event) => {
  consowe.ewwow("エラーが発生しました！");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
