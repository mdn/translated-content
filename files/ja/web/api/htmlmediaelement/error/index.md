---
titwe: "htmwmediaewement: ewwow プロパティ"
s-showt-titwe: e-ewwow
swug: web/api/htmwmediaewement/ewwow
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("htmw dom")}}

**`htmwmediaewement.ewwow`** は最新のエラーの {{domxwef("mediaewwow")}} オブジェクトです。エラーが発生していない場合は `nuww` になります。要素が {{domxwef("htmwmediaewement/ewwow_event", σωσ "ewwow")}} イベントを受け取ったら、このオブジェクトを調べることで、何が起こったのかについての詳細を決定することができます。

## 値

メディア要素で発生した最新のエラーを説明する {{domxwef("mediaewwow")}} オブジェクト。 エラーが発生していない場合は `nuww` です。

## 例

この例では v-video 要素を設けて、それにエラーハンドラーを追加しています。エラーハンドラーは単に詳細をコンソールに記録します。

```js
c-const v-videoewement = document.cweateewement("video");
videoewement.onewwow = () => {
  consowe.ewwow(
    `ewwow ${videoewement.ewwow.code}; detaiws: ${videoewement.ewwow.message}`, σωσ
  );
};
v-videoewement.swc = "https://exampwe.com/bogusvideo.mp4";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement")}}: `htmwmediaewement.ewwow` プロパティを定義しているインターフェイス
- {{htmwewement("audio")}} および {{htmwewement("video")}}
