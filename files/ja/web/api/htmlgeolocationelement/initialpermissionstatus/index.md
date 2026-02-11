---
title: "HTMLGeolocationElement: initialPermissionStatus プロパティ"
short-title: initialPermissionStatus
slug: Web/API/HTMLGeolocationElement/initialPermissionStatus
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

**`initialPermissionStatus`** は {{domxref("HTMLGeolocationElement")}} インターフェイスの読み取り専用プロパティで、ページが初めて読み込まれた際の `geolocation` 機能に対する権限の状態を表す列挙値を返します。

`geolocation` 機能の現在の権限の状態にアクセスしたい場合は、{{domxref("HTMLGeolocationElement.permissionStatus")}} プロパティを使用してください。

## 値

列挙値で、次のいずれかの値を取ります。

- `granted`
  - : ユーザーは以前、{{htmlelement("geolocation")}} 要素またはその他の仕組みを通じて、ブラウザーが `geolocation` 機能を使用することを許可しました。`<geolocation>` 要素を使用する場合、これはユーザーが以前、表示されたボタンを押して「許可」オプションを選択したことを意味します。

    `<geolocation>` 要素の [`autolocate`](/ja/docs/Web/HTML/Reference/Elements/geolocation#autolocate) 属性が `true` に設定されており、かつ事前ににその権限が与えられている場合、ブラウザーはページ読み込み直後に位置情報のリクエストを開始します。ユーザーがボタンを押す必要はありません。

- `denied`
  - : ユーザーは以前、`<geolocation>` 要素またはその他の仕組みを通じて、ブラウザーが `geolocation` 機能を使用することを拒否しました。`<geolocation>` 要素を使用する場合、これは以前、表示されたボタンをユーザーがボタンを押して「許可しない」オプションを選択したことを意味します。
- `prompt`
  - : ユーザーはこれまで、ブラウザーが `geolocation` 機能を使用することについてその権限を許可または拒否していません。`<geolocation>` 要素を使用する場合、これはユーザーがこれまでレンダリングされたボタンを押していないということです。

## 例

### 基本的な使い方

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.initialPermissionStatus);
// ユーザーがページを再読み込みする前にその権限を事前に許可していた場合
```

### ページ読み込み時に初期権限の状態を使用してユーザーに情報を提供

この例では、初期の権限の状態を使用して、{{htmlelement("geolocation")}} ボタンが実行する操作をユーザーに通知する適切なメッセージを画面に表示します。

#### HTML

`<geolocation>` 要素と 2 つの {{htmlelement("p")}} を記載しています。一方は、権限の状態に関するメッセージを出力するための、もう一方は位置データを出力するための要素です。

```html
<geolocation>
  このブラウザーは <code>&lt;geolocation&gt;</code> 要素に対応していません。
</geolocation>
<p id="status"></p>
<p id="output"></p>
```

#### JavaScript

JavaScript で、まず 3 つの HTML 要素すべてへの参照を取得することから始めます。

```js
const statusElem = document.querySelector("#status");
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
```

次に、`if...else if` 構造で `initialPermissionStatus` の値を調べ、画面に状態メッセージを表示します。これにより、ユーザーに現在の状態、アプリを使用する際に必要な操作、およびボタン押下時の動作を通知します。

```js
if (geo.initialPermissionStatus === "prompt") {
  statusElem.textContent =
    "位置データへのアクセスをすることができるようにし、リクエストが始まるようにボタンを押してください。";
} else if (geo.initialPermissionStatus === "denied") {
  statusElem.textContent =
    "権限が以前拒否されています。位置データへのアクセスをすることができるようにし、リクエストが始まるようにボタンを押してください。";
} else if (geo.initialPermissionStatus === "granted") {
  statusElem.textContent =
    "権限は既に付与されています。位置情報のリクエストが始まるようにボタンを押してください。";
}
```

最後に、位置データのリクエストが返されたことを検出するため、{{domxref("HTMLGeolocationElement.location_event", "location")}} イベントリスナーを `HTMLGeolocationElement` オブジェクトに追加します。データが正常に返された場合、{{domxref("HTMLGeolocationElement.position")}} プロパティ経由でアクセスし、緯度と経度の値を出力段落に表示します。データのリクエストが失敗した場合、{{domxref("HTMLGeolocationElement.error")}} プロパティ経由でエラーにアクセスし、出力段落に表示します。

```js
geo.addEventListener("location", () => {
  statusElem.textContent = "データがリクエストされました";
  if (geo.position) {
    outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
  } else if (geo.error) {
    outputElem.textContent += `${geo.error.message}, `;
  }
});
```

#### 結果

[ライブ実行](https://mdn.github.io/dom-examples/geolocation-element/initial-permission-status/)（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/initial-permission-status)）でこの例を確認してください。`<geolocation>` ボタンを複数回選択し、表示されるダイアログでそれぞれの時点で異なるオプションを選択してページを再読み込みすると、状況に応じて出力メッセージがどのように変化するかを確認できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
