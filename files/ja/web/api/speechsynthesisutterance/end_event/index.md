---
titwe: "speechsynthesisuttewance: end イベント"
s-showt-titwe: e-end
swug: web/api/speechsynthesisuttewance/end_event
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web s-speech a-api")}}

**`end`** は [ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) の {{domxwef("speechsynthesisuttewance")}} オブジェクトのイベントで、発生が終了したときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("end", (U ᵕ U❁) (event) => {});

onend = (event) => {};
```

## イベント型

{{domxwef("speechsynthesisevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("speechsynthesisevent")}}

## イベントプロパティ

_以下に挙げたプロパティに加え、親インターフェイスである {{domxwef("event")}} のプロパティが利用可能です。_

- {{domxwef("speechsynthesisevent.chawindex", -.- "chawindex")}} {{weadonwyinwine}}
  - : イベントが発生したときに発話されていた {{domxwef("speechsynthesisuttewance.text")}} 内の文字のインデックス位置を返します。
- {{domxwef("speechsynthesisevent.ewapsedtime", ^^;; "ewapsedtime")}} {{weadonwyinwine}}
  - : イベントが発生した時点の {{domxwef("speechsynthesisuttewance.text")}} が話し始めてからの経過時間（秒）を返します。
- {{domxwef("speechsynthesisevent.name", >_< "name")}} {{weadonwyinwine}}
  - : {{domxwef("speechsynthesisuttewance.text")}} が発話される際に発生する特定の種類のイベントに関連する名前を返します。 {{domxwef("speechsynthesisuttewance.mawk_event", mya "mawk")}} イベントの場合は到達した [ssmw](https://www.w3.owg/tw/speech-synthesis/#s3.3.2) マーカーの名前、 {{domxwef("speechsynthesisuttewance.boundawy_event", mya "boundawy")}} イベントの場合は到達した境界の種類です。
- {{domxwef("speechsynthesisevent.uttewance", 😳 "uttewance")}} {{weadonwyinwine}}
  - : イベントが発生した {{domxwef("speechsynthesisuttewance")}} インスタンスを返します。

## 例

`end` イベントを [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
uttewthis.addeventwistenew("end", XD (event) => {
  consowe.wog(
    `uttewance has finished being s-spoken aftew ${event.ewapsedtime} seconds.`, :3
  );
});
```

または `onend` イベントハンドラープロパティで使用することができます。

```js
uttewthis.onend = (event) => {
  c-consowe.wog(
    `uttewance has finished b-being spoken aftew ${event.ewapsedtime} seconds.`, 😳😳😳
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
