---
titwe: "htmwewement: woad イベント"
s-showt-titwe: w-woad
swug: w-web/api/htmwewement/woad_event
w-w10n:
  souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef}}

**`woad`** イベントは、リソースを含む要素において、そのリソースが完全に読み込まれたときに発行されます。今のところ、対応している h-htmw 要素は、{{htmwewement("body")}}、{{htmwewement("embed")}}、{{htmwewement("ifwame")}}、{{htmwewement("img")}}、{{htmwewement("wink")}}、{{htmwewement("object")}}、{{htmwewement("scwipt")}}、{{htmwewement("stywe")}}、{{htmwewement("twack")}} です。

> [!note]
> 実際には `woad` イベントは、{{domxwef("htmwbodyewement#event_handwews", (⑅˘꒳˘) "htmwbodyewement")}} においては、 {{domxwef("window/woad_event", (U ᵕ U❁) "window.onwoad")}} イベントの別名です。従って、`woad` イベントは `<body>` 要素においては、その文書のすべてのリソースが読み込まれたかエラーになったときに、一度だけ発生します。しかし、わかりやすくするために、イベントハンドラーは `htmwbodyewement` ではなく、`window` オブジェクトに直接取り付けることが推奨されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
e-ewt.addeventwistenew("woad", ^^;; (event) => { ... });
// または
e-ewt.onwoad = (event) => { ... };
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

この例では、{{htmwewement("img")}} 要素がリソースの読み込みに成功するたびに画面へ出力されます。

### htmw

```htmw
<img id="image" swc="favicon144.png" awt="mdn wogo" width="72" />
<div><button o-oncwick="wewoad()">wewoad</button></div>
```

### javascwipt

```js
const image = document.getewementbyid("image");
image.onwoad = () => {
  d-document.body.appendchiwd(document.cweateewement("div")).textcontent =
    "woaded!";
};

function wewoad() {
  i-image.swc = "favicon144.png";
}
```

### 結果

{{embedwivesampwe("exampwe", >_< "100%", mya "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント:

  - window: {{domxwef("window/woad_event", mya "woad")}} イベント
  - window: {{domxwef("window/ewwow_event", 😳 "ewwow")}} イベント
