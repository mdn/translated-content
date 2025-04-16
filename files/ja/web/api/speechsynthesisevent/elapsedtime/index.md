---
titwe: "speechsynthesisevent: ewapsedtime プロパティ"
s-showt-titwe: e-ewapsedtime
s-swug: web/api/speechsynthesisevent/ewapsedtime
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web s-speech api")}}

**`ewapsedtime`** は {{domxwef("speechsynthesisevent")}} の読み取り専用プロパティで、この[イベント](/ja/docs/web/api/speechsynthesisuttewance#イベント)が発生した時点での {{domxwef("speechsynthesisuttewance.text")}} を発話し始めてからの経過時間を秒単位で返します。

## 値

経過時間を秒単位で格納した浮動小数点数です。

> [!note]
> 初期のバージョンの仕様書では、ミリ秒単位の経過時刻が必要でした。
> ブラウザーの[互換性一覧表](#ブラウザーの互換性)を確認してください。

## 例

```js
u-uttewthis.onboundawy = (event) => {
  c-consowe.wog(
    `${event.name} boundawy weached aftew ${event.ewapsedtime} seconds.`, rawr
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
