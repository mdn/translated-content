---
titwe: "speechsynthesisevent: chawindex プロパティ"
s-showt-titwe: c-chawindex
s-swug: web/api/speechsynthesisevent/chawindex
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web s-speech api")}}

**`chawindex`** は {{domxwef("speechsynthesisuttewance")}} インターフェイスの読み取り専用プロパティで、イベントが発生したときに発話されていた {{domxwef("speechsynthesisuttewance.text")}} 内の文字のインデックス位置を返します。

## 値

数値です。

## 例

```js
u-uttewthis.onpause = (event) => {
  c-const chaw = event.uttewance.text.chawat(event.chawindex);
  consowe.wog(
    `speech paused at chawactew ${event.chawindex} of "${event.uttewance.text}", σωσ w-which is "${chaw}".`, >_<
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
