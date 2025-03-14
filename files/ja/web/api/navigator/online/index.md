---
title: "Navigator: onLine プロパティ"
short-title: onLine
slug: Web/API/Navigator/onLine
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}

ブラウザーのオンライン状態を返します。このプロパティは、オンラインを意味する `true` とオフラインを意味する `false` の論理値を返します。このプロパティは、ブラウザーのネットワークへの接続状態が変化するたびに更新を送信します。更新は、ユーザーがリンクをたどったときや、スクリプトがリモートページを要求したときに発生します。例えば、ユーザーがインターネット接続を失った直後にリンクをクリックした場合、このプロパティは `false` を返します。

このプロパティの実装は、ブラウザーにより異なります。

Chrome および Safari は、ブラウザーがローカルエリアネットワーク (LAN) またはルーターに接続できないときにオフライン、それ以外の状況では `true` を返します。従って、`false` 値が返る場合はブラウザーがオフラインであると考えることができますが、`true` 値は必ずインターネットにアクセスできると考えることはできません。仮想イーサネットアダプタを持つ仮想化ソフトウェアを実行しているコンピューターでは常に「接続中」になるなど、誤検出になる可能性があります。よって、本当にブラウザーのオンラインである状態を検出したい場合は、チェックするための追加の手段を開発する必要があります。

Firefox では、ブラウザーをオフラインモードに切り替えると、 `false` 値が送信されます。 Firefox 41 までは、それ以外の条件では `true` 値が返されます。 Windows の Nightly 68 で実際の動作を確認したところ、 Chrome や Safari のように LAN 接続のみを確認しているため、誤検出が発生していました。

[`online`](/ja/docs/Web/API/Window/online_event) および [`offline`](/ja/docs/Web/API/Window/offline_event) イベントを待ち受けすることにより、ネットワーク接続状態の変化を確認することができます。

## 値

論理値です。

## 例

### 基本的な使い方

オンラインであるかを確認するには、以下の例のように `window.navigator.onLine` を確認します。

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

ブラウザーが `navigator.onLine` に対応していない場合は、上記の例では常に `false`/`undefined` が返ります。

### ネットワーク状態の変化の待ち受け

ネットワーク接続状態の変化を確認するには、以下の例のように [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して、 `window.online` および `window.offline` を待ち受けします。

```js
window.addEventListener("offline", (e) => {
  console.log("offline");
});

window.addEventListener("online", (e) => {
  console.log("online");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
