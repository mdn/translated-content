---
title: "Serial: requestPort() メソッド"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: de73dc7280b2b84ce58d2a93b241bd8a93e8096d
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}

**`requestPort()`** は {{domxref("Serial")}} インターフェイスのメソッドで、接続するシリアル機器を選択するようユーザーに求めるダイアログを表示します。このメソッドはプロミス ({{jsxref("Promise")}}) を返し、そのプロミスが解決されると、ユーザーが選択した機器を表す {{domxref("SerialPort")}} のインスタンスが得られます。

## 構文

```js-nolint
requestPort()
requestPort(options)
```

### 引数

- `options`
  - : 以下のプロパティを持つオブジェクトです。
    - `filters`
      - : ユーザーが接続をリクエストできる特定の機器の種類を絞り込むために使用される、ベンダー ID、製品I D、Bluetooth サービスクラス ID を含むオブジェクトのリストです。
        フィルターが指定されていない場合、利用できるすべての機器の一覧をユーザーに表示し、そこから選べます。
        フィルターは以下の値を含みます。
        - `bluetoothServiceClassId` {{optional_inline}}
          - : Bluetooth サービスクラス ID を表す正の整数または文字列。
            この UUID エイリアスは、16 ビットまたは 32 ビットの UUID、任意の有効な UUID、あるいは [GATT 割り当てサービスキー](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt)に記載されている有効な名前のいずれかです。
        - `usbVendorId` {{optional_inline}}
          - : USB 機器の製造元を特定する `unsigned short` の整数です。
            [USB 実装者フォーラム](https://www.usb.org/)が、それぞれのベンダーに ID を割り当てています。
        - `usbProductId` {{optional_inline}}
          - : USB 端末を識別するための正の整数。
            それぞれのベンダーが、自社の製品に ID を割り当てています。
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : Bluetooth サービスクラス ID を表す正の整数や文字列のリスト。
        独自のサービスクラス ID を持つ Bluetooth ポートは、そのサービスクラス ID がこのリストに含まれていない限り、ユーザーに表示されるポートの一覧から除外されます。
        これは、リストをフィルタリングするかどうかに関係なく true です。

### 返値

{{domxref("SerialPort")}} のインスタンスで解決するプロミス ({{jsxref("Promise")}}) を返します。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : 返された `Promise` は、以下のいずれかの場合、このエラーで拒否されます。
    - {{httpheader('Permissions-Policy/serial','serial')}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)により、この機能の使用がブロックされます。
    - ユーザーがその権限を拒否しました。
- `NotFoundError` {{domxref("DOMException")}}
  - : ユーザーが要求に応じてポートを選択しなかったとき、返された `Promise` がこのエラーで拒否されます。

## 解説

ユーザーが初めてサイトにアクセスした時点では、そのサイトにはシリアル機器へのアクセス権限を持っていません。
サイトはまず `requestPort()` を呼び出し、サイトが制御することができる機器をユーザーに選択してもらう必要があります。

このメソッドは、[一時的な有効化](/ja/docs/Glossary/Transient_activation)を通じて呼び出す必要があります。
この機能が動作するには、ユーザーがページまたは UI の要素を操作する必要があります。

同時に、{{httpheader('Permissions-Policy/serial','serial')}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)によって、ウェブサイトへのアクセスがブロックされることもあります。
ブロックされた場合、ユーザーには機器へのアクセス許可を求めるプロンプトは表示されません。

## 例

### ユーザーが任意の機器を選択できるようにする

この例では、`<button>` が押された際に、`requestPort()` を通じてユーザーに機器の選択を促します。
フィルターは含まれていないため、選択リストには利用できるすべての機器が記載されます。

```html
<button id="connect">接続</button>
```

```js
const connectBtn = document.getElementById("connect");
connectBtn.addEventListener("click", async () => {
  try {
    const port = await navigator.serial.requestPort();
    // ポートに接続するか、利用できるポートのリストに追加
  } catch (e) {
    // ユーザーが機器を選択しなかった
  }
});
```

### ユーザーが特定ベンダーの機器を選択できるようにする

この場合、`requestPort()` に USB ベンダー ID をつけてフィルターを渡すことで、ユーザーに表示される端末の一覧を、具体的なメーカーが製造した USB 端末に制限します。

```js
connectBtn.addEventListener("click", async () => {
  const usbVendorId = 0xabcd;
  try {
    const port = await navigator.serial.requestPort({
      filters: [{ usbVendorId }],
    });
    // `port` に接続する、すなわち利用可能なポートのリストに加えます。
  } catch (e) {
    // ユーザーがポートを選択しませんでした。
  }
});
```

### ユーザーが RFCOMM ベースの独自のサービスを選択できるようにする

ほとんどの機器は、SPP ベースの通信を、標準化された Bluetooth クラシックシリアルポートプロファイルを通じて公開していますが、一部の機器では、独自の無線周波数通信 (RFCOMM) に基づくサービスを使用しています。これらの機器のサービスクラス ID は、標準の Bluetooth UUID の範囲外となっています。

これらの独自の RFCOMM ベースのサービスにアクセスするには、`allowedBluetoothServiceClassIds` のリストを `requestPort()` に渡す必要があります。

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// ユーザーに任意のシリアルポートを選択するよう促す
// 上記の独自の Bluetooth RFCOMM サービスへのアクセスが許可される
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
```

また、`requestPort()` を呼び出す際に `bluetoothServiceClassId` フィルターキーを使用することで、サービスクラス ID によって識別されるフィルタリング済みの Bluetooth シリアルポートのリストをユーザーに表示することもできます。

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// 上記の独自の Bluetooth RFCOMM サービスワーカースクリプトで、
// ユーザーに Bluetooth シリアルポートの選択を促す
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
  filters: [{ bluetoothServiceClassId: myBluetoothServiceUuid }],
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
