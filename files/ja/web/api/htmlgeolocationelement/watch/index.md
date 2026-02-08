---
title: "HTMLGeolocationElement: watch プロパティ"
short-title: watch
slug: Web/API/HTMLGeolocationElement/watch
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

**`watch`** は {{domxref("HTMLGeolocationElement")}} インターフェイスのプロパティで、ユーザーの端末位置が変更されるたびにブラウザーが位置データを継続的に更新すべきか、それとも一度だけ取得すべきかを示す論理値を取得および設定します。

これは `<geolocation>` の [`watch`](/ja/docs/Web/HTML/Reference/Elements/geolocation#watch) 属性の値を反映します。

## 値

論理値です。

- `true` の場合、位置データは継続的にリクエストされます。{{domxref("Geolocation.watchPosition()")}} メソッドが呼び出された場合と同様です。
- `false` の場合、位置データは一度だけリクエストされます。{{domxref("Geolocation.getCurrentPosition()")}} メソッドが呼び出された場合と同様です。

デフォルトは `false` です。

## 例

### 基本的な使い方

```html
<geolocation watch></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.watch); // true
```

### 位置データを継続的に取得

この例では、位置データを継続的に取得し、ページに表示します。

#### HTML

{{htmlelement("geolocation")}} 要素を設置し、これに `watch` 属性を設定しています。ユーザーが結果として表示されるボタンをクリックし、`geolocation` 機能の使用権限を付与すると、ユーザーの端末の位置が変化するたびに、ブラウザーは位置データを継続的にリクエストし始めます。また、位置データやエラーを出力するための {{htmlelement("p")}} 要素も設置しています。

```html
<geolocation watch></geolocation>
<p id="output"></p>
```

#### JavaScript

JavaScript では、まず出力段落と `<geolocation>` 要素への参照を取得し、`watch` プロパティにアクセスして `watch` 値を検査します。

```js
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
console.log(geo.watch); // true
```

次に、{{domxref("HTMLGeolocationElement.location_event", "location")}} イベントリスナーを結果として得られる `HTMLGeolocationElement` オブジェクトに追加し、位置データリクエストが返されるタイミングを検出します。データが正常に返された場合、{{domxref("HTMLGeolocationElement.position")}} プロパティ経由でアクセスし、緯度と経度の値を出力段落に表示します。データリクエストが失敗した場合、{{domxref("HTMLGeolocationElement.error")}} プロパティ経由でエラーにアクセスし、エラーメッセージを出力段落に表示します。

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
  } else if (geo.error) {
    outputElem.textContent += `${geo.error.message}, `;
  }
});
```

#### 結果

このコードを[ライブ実行](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/)（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)）で確認できます。完全なコードには、`<geolocation>` 要素に対応していないブラウザー向けの代替機能も含まれています。

可能であれば、対応しているブラウザーと非対応のブラウザーでこのデモを表示し、 `geolocation` を使用する際にその権限を許可または拒否する際に表示される権限ダイアログのフローの違いを確認してください。

また、`<geolocation>` の `watch` 属性が `true` に設定されているため、位置データがリクエストされ、ユーザーが位置を変更するたびに `location` イベントが継続的に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
