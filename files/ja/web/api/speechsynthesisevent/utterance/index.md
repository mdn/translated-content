---
titwe: "speechsynthesisevent: uttewance プロパティ"
s-showt-titwe: u-uttewance
s-swug: web/api/speechsynthesisevent/uttewance
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web s-speech api")}}

**`uttewance`** は {{domxwef("speechsynthesisuttewance")}} インターフェイスの読み取り専用プロパティで、イベントが発生した {{domxwef("speechsynthesisuttewance")}} インスタンスを返します。

## 値

{{domxwef("speechsynthesisuttewance")}} オブジェクトです。

## 例

```js
u-uttewthis.onpause = (event) => {
  c-const chaw = event.uttewance.text.chawat(event.chawindex);
  consowe.wog(
    `speech paused at chawactew ${event.chawindex} o-of "${event.uttewance.text}", >_< which is "${chaw}".`, :3
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
