---
title: "HTMLGeolocationElement: permissionStatus プロパティ"
short-title: permissionStatus
slug: Web/API/HTMLGeolocationElement/permissionStatus
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

**`permissionStatus`** は {{domxref("HTMLGeolocationElement")}} インターフェイスの読み取り専用プロパティで、現在の `geolocation` 機能に対する権限の状態を表す列挙値を返します。

`geolocation` 機能のページが初めて読み込まれた際の、初期の権限の状態にアクセスしたい場合は、{{domxref("HTMLGeolocationElement.initialPermissionStatus", "initialPermissionStatus")}} プロパティを使用してください。

## 値

列挙値で、次のいずれかの値を取ります。

- `granted`
  - : ユーザーは {{htmlelement("geolocation")}} 要素またはその他の仕組みを通じて、ブラウザーが `geolocation` 機能を使用することを許可しました。`<geolocation>` 要素を使用する場合、これはユーザーが表示されたボタンを押して「許可」オプションを選択したことを意味し、その時点でブラウザーは位置情報のリクエストを開始します。
- `denied`
  - : ユーザーは、`<geolocation>` 要素またはその他の仕組みを通じて、ブラウザーが `geolocation` 機能を使用することを拒否しました。`<geolocation>` 要素を使用する場合、これは表示されたボタンをユーザーがボタンを押して「許可しない」オプションを選択したことを意味します。この時点で、ブラウザーは位置情報をリクエストしません。これは表示されたボタンをユーザーが再度押して「許可」オプションを選択するまで続きます。
- `prompt`
  - : ユーザーはブラウザーが `geolocation` 機能を使用することについて、明示的に許可も拒否もしていません。これは、ユーザーが許可を与えるまでブラウザーが位置情報をリクエストしないということです。`<geolocation>` 要素を使用する場合、これはユーザーがまだ表示されたボタンを押していない状態を示します。ユーザーがボタンを押すと、ブラウザーが位置情報をリクエストする権限を与えるか拒否するかを選択するオプションが表示されます。

権限の状態はページ読み込みをまたがって維持されます。`<geolocation>` 要素の [`autolocate`](/ja/docs/Web/HTML/Reference/Elements/geolocation#autolocate) 属性が `true` に設定されており、かつ以前に権限が許可されていた場合、ブラウザーは `<geolocation>` 要素が表示された直後から、ユーザーがボタンを押す必要なく位置情報の取得を開始します。

## 例

### 基本的な使い方

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.permissionStatus);
// ユーザーがこのページにアクセスした初回であれば "prompt"
```

### 権限の状態を使用してユーザーへ確認する

[埋め込み地図](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/)の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)）では、 {{domxref("HTMLGeolocationElement.promptaction_event", "promptaction")}} イベントリスナーを `<geolocation>` 要素を表す `HTMLGeolocationElement` オブジェクトに追加しています。

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

参照されている `notifyUserGrantPermission()` 関数では、`permissionStatus` プロパティを使用して権限の状態が `denied` または `prompt` かどうかを調べ、該当する場合はユーザーに再度ボタンを押して位置情報の許可を求めるよう依頼します。許可が与えられている場合は、この確認は必要ありません。

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      "再度「位置情報を使用」ボタンを押して、このサイトへの位置情報の許可を行うことができるようにしてください。";
  }
}
```

この例の完全な手順を追った解説については、{{domxref("HTMLGeolocationElement")}} のメインページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
