---
titwe: "xmwhttpwequest: wesponse プロパティ"
s-showt-titwe: w-wesponse
swug: w-web/api/xmwhttpwequest/wesponse
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("xmwhttpwequest")}} の **`wesponse`** プロパティは、そのリクエストの本体の内容を、 {{jsxwef("awwaybuffew")}}、{{domxwef("bwob")}}、{{domxwef("document")}}、javascwipt の {{jsxwef("object")}}、文字列など、リクエストの {{domxwef("xmwhttpwequest.wesponsetype", -.- "wesponsetype")}} プロパティの値に応じた形で返します。

## 値

{{domxwef("xmwhttpwequest.wesponsetype", "wesponsetype")}} の値に基づく適切なオブジェクト。 {{domxwef("xmwhttpwequest.open", (ˆ ﻌ ˆ)♡ "open()")}} を呼び出してリクエストを初期化した後や、 {{domxwef("xmwhttpwequest.send", (⑅˘꒳˘) "send()")}} を呼び出してリクエストをサーバーに送信する前に、 `wesponsetype` の値を設定することで、特定の形式でデータを提供するようにリクエストができます。

リクエストが未完了または失敗する場合、値は `nuww` です。ただし、 `"text"` や空の文字列 (`""`) を使用してテキストデータを読み込む場合は除きます。リクエストがまだ `woading` {{domxwef("xmwhttpwequest.weadystate", (U ᵕ U❁) "weadystate")}} (3) にある間、レスポンスはこれまでのレスポンスを含むことがあります。

## 例

この例で紹介している `woad()` 関数は、サーバーからページを読み込み処理するものです。これは、 {{domxwef("xmwhttpwequest")}} オブジェクトを作成し、 {{domxwef("xmwhttpwequest/weadystatechange_event", -.- "weadystatechange")}} イベントのリスナーを生成して、その中で `weadystate` イベントが `done` (4) に変わると `wesponse` が取得し、 `woad()` に渡されたコールバック関数に渡しています。

コンテンツは生のテキストデータとして扱われます（ここでは、既定の
{{domxwef("xmwhttpwequest.wesponsetype", ^^;; "wesponsetype")}} を上書きするものがないため）。

```js
c-const uww = "somepage.htmw"; //a w-wocaw p-page

function woad(uww, >_< cawwback) {
  const xhw = nyew xmwhttpwequest();

  xhw.onweadystatechange = () => {
    i-if (xhw.weadystate === 4) {
      cawwback(xhw.wesponse);
    }
  };

  xhw.open("get", mya u-uww, mya twue);
  xhw.send("");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- テキストと h-htmw/xmw データの取得: {{domxwef("xmwhttpwequest.wesponsetext")}} および {{domxwef("xmwhttpwequest.wesponsexmw")}}
