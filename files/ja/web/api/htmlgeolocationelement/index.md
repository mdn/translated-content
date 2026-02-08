---
title: HTMLGeolocationElement
slug: Web/API/HTMLGeolocationElement
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

**`HTMLGeolocationElement`** は [HTML DOM API](/ja/docs/Web/API/HTML_DOM_API) のインターフェイスで、{{htmlelement("geolocation")}} 要素を表し、そのプロパティとイベントへのアクセスを提供します。

この要素は {{domxref("HTMLElement")}} インターフェイスに基づいており、プロパティやメソッドを継承しています。

> [!NOTE]
> `<geolocation>` 要素と `HTMLGeolocationElement` インターフェイスは、従来の[位置情報 API](/ja/docs/Web/API/Geolocation_API) よりも一貫性と直感性に優れた方法で、ユーザーが位置データをページと共有することができるようになります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("HTMLGeolocationElement.HTMLGeolocationElement", "HTMLGeolocationElement()")}} {{experimental_inline}}
  - : 新しい `HTMLGeolocationElement` オブジェクトインスタンスを生成します。なお、このコンストラクターは直接呼び出されず、{{domxref("Document.createElement()")}} などの DOM メソッドを通じて呼び出されます。

## インスタンスプロパティ

_親インターフェイスである {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLGeolocationElement.autolocate", "autolocate")}} {{experimental_inline}}
  - : 論理値で、`<geolocation>` 要素がレンダリングされた際に、ブラウザーが直ちに位置情報をリクエストすべきかどうかを示します（事前にその権限を得ている場合）。`<geolocation>` 要素の [`autolocate`](/ja/docs/Web/HTML/Reference/Elements/geolocation#autolocate) 属性の値を反映します。
- {{domxref("HTMLGeolocationElement.error", "error")}} {{readonlyinline}} {{experimental_inline}}
  - : データ取得に失敗した場合のエラー情報を表す {{domxref("GeolocationPositionError")}} オブジェクトです。
- {{domxref("HTMLGeolocationElement.initialPermissionStatus", "initialPermissionStatus")}} {{readonlyinline}} {{experimental_inline}}
  - : ページが初めて読み込まれた際の `geolocation` 機能に対する権限の状態を表す列挙値。
- {{domxref("HTMLGeolocationElement.invalidReason", "invalidReason")}} {{readonlyinline}} {{experimental_inline}}
  - : `<geolocation>` 要素が無効である（[ブロックされている](/ja/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking)）場合の理由を表す列挙値。
- {{domxref("HTMLGeolocationElement.isValid", "isValid")}} {{readonlyinline}} {{experimental_inline}}
  - : `<geolocation>` 要素が有効か不正な状態（ブロックされている）かを示す論理値。
- {{domxref("HTMLGeolocationElement.permissionStatus", "permissionStatus")}} {{readonlyinline}} {{experimental_inline}}
  - : `geolocation` 機能の現在の権限の状態を表す文字列。
- {{domxref("HTMLGeolocationElement.position", "position")}} {{readonlyinline}} {{experimental_inline}}
  - : 位置データの取得に成功した場合に、ユーザーの位置を表す {{domxref("GeolocationPosition")}} オブジェクトです。
- {{domxref("HTMLGeolocationElement.watch", "watch")}} {{experimental_inline}}
  - : 論理値で、ブラウザーが端末の位置が変更されるたびにユーザーの現在地データを継続的に更新すべきか、それとも一度だけ取得すべきかを示します。`<geolocation>` の [`watch`](/ja/docs/Web/HTML/Reference/Elements/geolocation#watch) 属性の値を反映します。

## インスタンスメソッド

_親インターフェイスである {{domxref("HTMLElement")}} から継承したメソッドもあります。_

## イベント

_親インターフェイスである {{domxref("HTMLElement")}} から継承したイベントもあります。_

- {{domxref("HTMLGeolocationElement.location_event", "location")}} {{experimental_inline}}
  - : 位置データを受信したとき、または位置データリクエストが失敗した際のエラー情報を受信したときに発生します。
- {{domxref("HTMLGeolocationElement.promptaction_event", "promptaction")}} {{experimental_inline}}
  - : ユーザーが `<geolocation>` 要素をアクティブ化し、表示されるダイアログから `geolocation` 権限を許可または拒否するオプションを選択するたびに発生します。
- {{domxref("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} {{experimental_inline}}
  - : ユーザーが `<geolocation>` 要素をアクティブ化し、結果として表示されるダイアログが「閉じる」ボタンまたは <kbd>Esc</kbd> キーの押下によって閉じられた際に発生します。
- {{domxref("HTMLGeolocationElement.validationstatuschange_event", "validationstatuschange")}} {{experimental_inline}}
  - : `<geolocation>`要素の {{domxref("HTMLGeolocationElement.isValid", "isValid")}} 値が変更されるたびに発生します。

## 解説

`HTMLGeolocationElement` インターフェイスは、{{htmlelement("geolocation")}} 要素を表します。この要素は、ユーザーが位置データをページと共有することができる操作可能なコントロールを作成します。

ユーザーがコントロールを有効にすると、位置情報の共有許可を求めるダイアログボックスが表示されます。許可が与えられた場合、ブラウザーはバックグラウンドで位置情報 API を使用してユーザーの位置情報の取得を試みます。

デフォルトでは、ブラウザーは位置情報を一度だけリクエストします。これは、{{domxref("Geolocation.getCurrentPosition()")}} メソッドが呼び出された場合と同様です。しかし、[`watch`](/ja/docs/Web/HTML/Reference/Elements/geolocation#watch) 属性が `true` に設定されている場合、ブラウザーは端末の位置が変化するたびにデータを更新します。これは、{{domxref("Geolocation.watchPosition()")}} が呼び出される場合と同様です。

データリクエストが返ると、{{domxref("HTMLGeolocationElement.location_event", "location")}} イベントが発生します。これにより、データを取得して地図上に位置を表示するなど、例えば適切な対応をすることができます。

- 位置データが正常に取得された場合、{{domxref("HTMLGeolocationElement.position")}} プロパティで利用可能となり、このプロパティには {{domxref("GeolocationPosition")}} オブジェクトが含まれています。
- データ取得に失敗した場合、{{domxref("HTMLGeolocationElement.error")}} プロパティにエラー情報が格納され、このプロパティには {{domxref("GeolocationPositionError")}} オブジェクトが含まれます。

{{domxref("HTMLGeolocationElement.promptaction_event", "promptaction")}} イベントと {{domxref("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} イベントは、`<geolocation>` ダイアログボックスに対するユーザーの操作に対応することができます。例えば、データへのアクセス権限を拒否した場合に、別の選択を依頼するといった対応が可能です。

[ブロッカー](/ja/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) が {{htmlelement("geolocation")}} 要素に対して有効になっている場合、その要素は機能しなくなり（無効）、理由に応じて、一時的または永続的になります。無効状態かどうかを調べるには、{{domxref("HTMLGeolocationElement.isValid")}} プロパティを問い合わせます。また、無効な理由を返すには {{domxref("HTMLGeolocationElement.invalidReason")}} プロパティを使用します。考えられる理由の完全な一覧については、該当ページを参照してください。

## 例

### 基本的な使い方

`<geolocation>` 要素と関連付けられた `HTMLGeolocationElement` オブジェクトを使用して位置データを返す最小限の例については、[基本的な例](https://mdn.github.io/dom-examples/geolocation-element/basic-example/)（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)）および[基本的な監視の例](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/)（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)）を参照してください。

詳しい手順については、[`<geolocation>`](/ja/docs/Web/HTML/Reference/Elements/geolocation#basic_usage_example) のリファレンスページを参照してください。

### 組み込み地図の例

この例では `<geolocation>` 要素を使用して現在の位置情報を取得し、[Leaflet JS](https://leafletjs.com/) で描画された地図上にプロットします。また、非対応ブラウザーでは通常の `<button>` による代替手段で位置データを取得します。

#### HTML

`<geolocation>` 要素に `autolocate` 属性を記載することで、あらかじめ `geolocation` 権限が許可されている場合、ブラウザーが自動的に位置情報を取得しようと試みます。`<geolocation>`要素内部には、`<geolocation>` に対応していないブラウザー向けに位置情報のリクエストを可能にするための {{htmlelement("button")}} の代替手段を内蔵しています。

```html
<geolocation autolocate>
  <button id="fallback">位置情報を使用</button>
</geolocation>
```

次に、状態メッセージやエラーを表示するための {{htmlelement("p")}} 要素を記述します。

```html
<p id="status">状態:</p>
```

最後に、地図を描画するための {{htmlelement("div")}} 要素を記述します。

```html
<div id="map"></div>
```

#### JavaScript

スクリプトでは、まず状態の `<p>` 要素への参照を取得します。

```js
const statusElem = document.querySelector("#status");
```

次に、`typeof HTMLGeolocationElement === "function"` を検査することで、`<geolocation>` 要素に対応しているかどうかを検出します。

```js
if (typeof HTMLGeolocationElement === "function") {
  // <geolocation> に対応
} else {
  // <geolocation> に非対応、代替ボタンを使用
}
```

`<geolocation>` に対応している場合、`if` ブロックが実行されます。まず `<geolocation>` 要素への参照を取得します。

```js
const geo = document.querySelector("geolocation");
```

次に {{domxref("HTMLGeolocationElement.location_event", "location")}} イベントリスナーを、結果として得られる `HTMLGeolocationElement` オブジェクトに追加し、位置データリクエストが返されるタイミングを検出します。データが正常に返された場合、{{domxref("HTMLGeolocationElement.position")}} プロパティ経由でアクセスし、緯度と経度の値を取得します。これらの値をコンソールに記録した後、`drawMap()` 関数（後述）に `HTMLGeolocationElement` オブジェクトへの参照と共に渡すことで地図上にプロットします。データリクエストが失敗した場合、{{domxref("HTMLGeolocationElement.error")}} プロパティ経由でエラーにアクセスし、エラーメッセージをコンソールに記録します。

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `${geo.position.coords.latitude},${geo.position.coords.longitude}`,
    );
    drawMap(geo.position.coords.latitude, geo.position.coords.longitude, geo);
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

次に {{domxref("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} イベントと {{domxref("HTMLGeolocationElement.promptaction_event", "promptaction")}} イベントのリスナーを、結果として得られる `HTMLGeolocationElement` オブジェクトに追加します。これにより、ユーザーが `<geolocation>` プロンプトを閉じる操作を行った場合、またはプロンプトからオプションを選択した場合にそれぞれ対応する関数を実行することができる。

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

最後に `if` ブロックでは、前述の 2 つのイベントリスナーで参照されている `notifyUserRetrySelection()` 関数と `notifyUserGrantPermission()` 関数を定義します。前者は状態の段落にメッセージを表示し、ユーザーにボタンを再度押して位置情報の許可をすることができるよう指示します。この場合、常に再試行を促す必要があるためです。後者は {{domxref("HTMLGeolocationElement.permissionStatus")}} プロパティを使用して、権限の状態が `denied` または `prompt` かどうかを調べます。該当する場合は、ボタンを再度押して位置情報の許可を求めるようユーザーに依頼します。既に許可を与えている場合には、この確認は必要ありません。

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    "再度「位置情報を使用」ボタンを押し、このサイトへの位置情報へのアクセス許可してください。";
}

function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      '再度「位置情報を使用」ボタンを押し、このサイトへの位置情報へのアクセス許可してください。';
  }
}
```

`<geolocation>` に対応していない場合、`else` ブロックが実行されます。まず、代替となる `<button>` 要素への参照を取得します。

```js
const fallback = document.querySelector("#fallback");
```

次に、`click` イベントハンドラーを結果の `HTMLButtonElement` オブジェクトに追加します。内部では、{{domxref("Geolocation.getCurrentPosition()")}} 呼び出しを使用して `HTMLGeolocationElement` のコードパスにおける成功時と失敗時の場合をエミュレートします。結果は同じです。位置データを `drawMap()` 関数（`HTMLButtonElement` オブジェクトへの参照と共に）に渡して地図上にプロットするか、エラーメッセージを状態の段落に出力します。

```js
fallback.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      drawMap(position.coords.latitude, position.coords.longitude, fallback);
    },
    (error) => {
      statusElem.textContent += `${error.message}, `;
    },
  );
});
```

最後の段階は、緯度経度データとコマンドを発生させたボタンの参照を引数として取る `drawMap()` 関数を定義することです。関数本体では、[Leaflet JS](https://leafletjs.com/) のコード（説明については [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) を参照）を使用してユーザーの位置を地図上にプロットし、状態の段落に成功メッセージを表示し、ボタンを非表示にします。最後の段階は、成功後ユーザーが再度ボタンを押した場合にコードがエラーを起こさないよう簡略化した処理です。

```js
function drawMap(lat, long, btn) {
  const map = L.map("map").setView([lat, long], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const marker = L.marker([lat, long]).addTo(map);

  statusElem.textContent = "地図が正常に描画されました。";
  btn.style.display = "none";
}
```

#### 結果

このコードを[ライブ実行](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/)（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)）で確認してください。場合によっては、対応しているブラウザーと非対応のブラウザーでデモを表示し、`geolocation` を使用する際の権限ダイアログのフローの違いを確認してください。

同時に、次のことも試してみてください。

- `geolocation` 権限を許可して地図が表示されたら、利用できるブラウザコントロールを使用してその権限を解除し、ページを更新して例をリセットしてみてください。
- これで、`geolocation` の使用許可を拒否するか、許可ダイアログを閉じると、以前に設定した `promptdismiss` および `promptaction` イベントリスナーが、ユーザーがページを使用できるよう支援するメッセージを状態の段落に表示させる様子を確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
- {{httpheader("Permissions-Policy/geolocation", "geolocation")}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [位置情報 API](/ja/docs/Web/API/Geolocation_API)
- [権限 API](/ja/docs/Web/API/Permissions_API)
- [`<geolocation>` HTML 要素の導入](https://developer.chrome.com/blog/geolocation-html-element) - developer.chrome.com (2026)
