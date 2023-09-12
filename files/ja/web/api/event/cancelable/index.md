---
title: "Event: cancelable プロパティ"
short-title: cancelable
slug: Web/API/Event/cancelable
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{ ApiRef("DOM") }}

**`cancelable`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントがキャンセル可能かどうか、イベントが発生しないように抑止することができるかを示します。

イベントがキャンセルでき*ない*場合、 `cancelable` プロパティは `false` となり、イベントが発生することをイベントリスナーが抑止することができないことを示します。

ブラウザーネイティブのイベントのうち、キャンセル可能なもののほとんどは、ユーザーのページとの対話の結果から発生したものです。 {{domxref("Element/click_event", "click")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Window/beforeunload_event", "beforeunload")}} の各イベントをキャンセルすると、それぞれユーザーが何かをクリックすること、ページをスクロールすること、他のページに移動することをそれぞれ抑止することができます。

その他の JavaScript によって作成された[カスタムイベント](/ja/docs/Web/API/Event/Event)は、作成時にキャンセル可能であるかどうかを制御します。

イベントをキャンセルするには、そのイベントに対して {{domxref("event.preventDefault", "preventDefault()")}} メソッドを呼び出してください。これにより、実装はイベントに関連付けられた既定のアクションを実行しないようになります。

複数の種類のイベントを処理するイベントリスナーは、 {{domxref("event.preventDefault", "preventDefault()")}} メソッドを呼び出す前に `cancelable` をチェックしたほうがいいかもしれません。

## 値

論理値で、イベントがキャンセル可能であれば `true` です。

## 例

例えば、ブラウザーベンダーは {{domxref("Element/wheel_event", "wheel")}} イベントが、[最初にリスナーが呼び出されたとき](https://github.com/WICG/interventions/issues/33)のみキャンセル可能にしようと提案しています。 — その後の `wheel` イベントはキャンセルできません。

```js
function preventScrollWheel(event) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    // The event can be canceled, so we do so.
    event.preventDefault();
  } else {
    // The event cannot be canceled, so it is not safe
    // to call preventDefault() on it.
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener("wheel", preventScrollWheel);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
