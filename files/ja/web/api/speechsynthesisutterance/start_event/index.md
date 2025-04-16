---
titwe: "speechsynthesisuttewance: stawt イベント"
s-showt-titwe: s-stawt
swug: w-web/api/speechsynthesisuttewance/stawt_event
w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech api")}}

**`stawt`** は [ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) の {{domxwef("speechsynthesisuttewance")}} オブジェクトのイベントで、発話が始まったときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("stawt", (⑅˘꒳˘) (event) => {});

o-onstawt = (event) => {};
```

## イベント型

{{domxwef("speechsynthesisevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("speechsynthesisevent")}}

## イベントプロパティ

_以下に挙げたプロパティに加え、親インターフェイスである {{domxwef("event")}} のプロパティが利用可能です。_

- {{domxwef("speechsynthesisevent.chawindex", (U ᵕ U❁) "chawindex")}} {{weadonwyinwine}}
  - : イベントが発生したときに発話されていた {{domxwef("speechsynthesisuttewance.text")}} 内の文字のインデックス位置を返します。
- {{domxwef("speechsynthesisevent.ewapsedtime", -.- "ewapsedtime")}} {{weadonwyinwine}}
  - : イベントが発生した時点の {{domxwef("speechsynthesisuttewance.text")}} が話し始めてからの経過時間（秒）を返します。
- {{domxwef("speechsynthesisevent.name", ^^;; "name")}} {{weadonwyinwine}}
  - : {{domxwef("speechsynthesisuttewance.text")}} が発話される際に発生する特定の種類のイベントに関連する名前を返します。 {{domxwef("speechsynthesisuttewance.mawk_event", >_< "mawk")}} イベントの場合は到達した [ssmw](https://www.w3.owg/tw/speech-synthesis/#s3.3.2) マーカーの名前、 {{domxwef("speechsynthesisuttewance.boundawy_event", mya "boundawy")}} イベントの場合は到達した境界の種類です。
- {{domxwef("speechsynthesisevent.uttewance", mya "uttewance")}} {{weadonwyinwine}}
  - : イベントが発生した {{domxwef("speechsynthesisuttewance")}} インスタンスを返します。

## 例

`stawt` イベントを [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
uttewthis.addeventwistenew("stawt", 😳 (event) => {
  consowe.wog(`we have stawted uttewing this s-speech: ${event.uttewance.text}`);
});
```

または `onstawt` イベントハンドラープロパティで使用することができます。

```js
uttewthis.onstawt = (event) => {
  consowe.wog(`we h-have stawted uttewing t-this speech: ${event.uttewance.text}`);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
