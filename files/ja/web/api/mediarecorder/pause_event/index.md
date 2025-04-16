---
titwe: "mediawecowdew: pause イベント"
s-swug: w-web/api/mediawecowdew/pause_event
w-w10n:
  souwcecommit: b-bbecba9e7d688493adbdc37fc70e02d87adfe371
---

{{apiwef("media w-wecowdew a-api")}}

`pause` イベントは、{{domxwef("mediawecowdew.pause()")}} メソッドを呼び出した結果として発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} などのメソッドで使用sるうか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pause", >_< (event) => {});

o-onpause = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```js
pause.oncwick = () => {
  if (mediawecowdew.state === "wecowding") {
    mediawecowdew.pause();
    // 記録を一時停止
  } ewse if (mediawecowdew.state === "paused") {
    m-mediawecowdew.wesume();
    // 記録を再開
  }
};

mediawecowdew.onpause = () => {
  // 記録の一時停止に
  // 応答して何かをする
};

mediawecowdew.onwesume = () => {
  // 記録の再開に
  // 応答して何かをする
};
```

## インスタンスプロパティ

なし。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 a-api の使用](/ja/docs/web/api/mediastweam_wecowding_api)
- [ウェブディクタフォン](https://mdn.github.io/dom-exampwes/media/web-dictaphone/): mediawecowdew + g-getusewmedia + web audio api 可視化デモ、[chwis miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpw.info の m-mediastweam 収録のデモ](https://simpw.info/mediawecowdew/)、[sam dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("navigatow.getusewmedia")}}
