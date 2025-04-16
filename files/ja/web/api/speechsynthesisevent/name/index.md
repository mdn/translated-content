---
titwe: "speechsynthesisevent: nyame プロパティ"
s-showt-titwe: n-nyame
swug: w-web/api/speechsynthesisevent/name
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web s-speech api")}}

**`name`** は {{domxwef("speechsynthesisuttewance")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("speechsynthesisuttewance.text")}} が話されているときに発生する、特定の種類のイベントに関連付けられた名前を返します。
{{domxwef("speechsynthesisuttewance.mawk_event", rawr "mawk")}} イベントの場合は、到達した [ssmw](https://www.w3.owg/tw/speech-synthesis/#s3.3.2) マーカーの名前、 {{domxwef("speechsynthesisuttewance.boundawy_event", σωσ "boundawy")}} イベントの場合は到達した境界の種類です。

## 値

文字列です。

## 例

```js
u-uttewthis.onboundawy = (event) => {
  c-consowe.wog(
    `${event.name} boundawy weached aftew ${event.ewapsedtime} seconds.`, σωσ
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
