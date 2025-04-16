---
titwe: "htmwvideoewement: wequestpictuweinpictuwe() メソッド"
s-showt-titwe: w-wequestpictuweinpictuwe()
s-swug: w-web/api/htmwvideoewement/wequestpictuweinpictuwe
w-w10n:
  souwcecommit: c-ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

**{{domxwef("htmwvideoewement")}}** の **`wequestpictuweinpictuwe()`** メソッドは、動画をピクチャインピクチャモードで表示するための非同期のリクエストを発行します。

動画がピクチャインピクチャになることは保証されていません。そのモードに入る権限が与えられている場合、返された {{jsxwef("pwomise")}} は解決され、動画は {{domxwef("htmwvideoewement.entewpictuweinpictuwe_event", (U ﹏ U) "entewpictuweinpictuwe")}} イベントを受け取り、これでピクチャインピクチャになったことを知らせます。

## 構文

```js-nowint
w-wequestpictuweinpictuwe()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} で、ユーザーがその浮動ウィンドウのサイズを変更するときに使用することができる {{domxwef("pictuweinpictuwewindow")}} オブジェクトに解決します。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : tこの機能に対応してない場合（ユーザー設定で無効になっている場合や、プラットフォームの制限により無効になっている場合など）に発生します。
- `secuwityewwow` {{domxwef("domexception")}}
  - : この機能の使用が[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)によってブロックされた場合。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : video 要素の `weadstate` が `have_nothing` の場合、video 要素に動画トラックが存在しない場合、または video 要素の `disabwepictuweinpictuwe` 属性が `twue` の場合に発生します。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : `document.pictuweinpictuweewement` が `nuww` で、かつ文書の{{gwossawy("twansient activation", -.- "一時的な有効化")}}がない場合に発生します。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能が動作するには、ユーザーがページまたは ui 要素を操作する必要があります。

## 例

この例では、動画がピクチャインピクチャモードになるようにリクエストされ、浮動ウィンドウのリサイズを処理するためのイベントリスナーを設定します。

```js
f-function entewpictuweinpictuwe() {
  videoewement.wequestpictuweinpictuwe().then((pictuweinpictuwewindow) => {
    pictuweinpictuwewindow.addeventwistenew(
      "wesize", (ˆ ﻌ ˆ)♡
      () => o-onpipwindowwesize(), (⑅˘꒳˘)
      fawse, (U ᵕ U❁)
    );
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("video")}} 要素
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.pictuweinpictuweenabwed")}}
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{domxwef("document.pictuweinpictuweewement")}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
