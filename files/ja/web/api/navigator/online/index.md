---
title: Navigator.onLine
slug: Web/API/Navigator/onLine
---

{{ApiRef("HTML DOM")}}

ブラウザーのオンライン状態を返します。このプロパティは、オンラインを意味する `true` とオフラインを意味する `false` の論理値を返します。このプロパティは、ブラウザーのネットワークへの接続状態が変化するたびに更新を送信します。更新は、ユーザーがリンクをたどったときや、スクリプトがリモートページを要求したときに発生します。例えば、ユーザーがインターネット接続を失った直後にリンクをクリックした場合、このプロパティは `false` を返します。

このプロパティの実装は、ブラウザーにより異なります。

Chrome および Safari は、ブラウザーがローカルエリアネットワーク (LAN) またはルーターに接続できないときにオフライン、それ以外の状況では `true` を返します。従って、`false` 値が返る場合はブラウザーがオフラインであると考えることができますが、`true` 値は必ずインターネットにアクセスできると考えることはできません。仮想イーサネットアダプタを持つ仮想化ソフトウェアを実行しているコンピュータでは常に「接続中」になるなど、誤検出になる可能性があります。よって、本当にブラウザーのオンラインである状態を検出したい場合は、チェックするための追加の手段を開発する必要があります。詳しくは HTML5 Rocks の記事 [Working Off the Grid](https://www.html5rocks.com/en/mobile/workingoffthegrid.html) をご覧ください。

Firefox と Internet Explorer では、ブラウザーをオフラインモードに切り替えると、 `false` 値が送信されます。 Firefox 41 までは、それ以外の条件では `true` 値が返されます。 Windows の Nightly 68 で実際の動作を確認したところ、 Chrome や Safari のように LAN 接続のみを確認しているため、誤検出が発生していました。

[`window.ononline`](/ja/docs/Web/API/document.ononline) および [`window.onoffline`](/ja/docs/Web/API/document.onoffline) イベントを待ち受けすることにより、ネットワーク接続状態の変化を確認することができます。

## 構文

```js
online = window.navigator.onLine;
```

### 値

`online` には `true` または `false` の論理値が返されます。

## 例

### 基本的な使い方

オンラインであるかを確認するには、以下の例のように `window.navigator.onLine` を確認します。

```js
if (navigator.onLine) {
  console.log('online');
} else {
  console.log('offline');
}
```

ブラウザーが `navigator.onLine` に対応していない場合は、上記の例では常に `false`/`undefined` が返ります。

### ネットワーク状態の変化の待ち受け

ネットワーク接続状態の変化を確認するには、以下の例のように [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して、 `window.online` および `window.offline` を待ち受けします。

```js
window.addEventListener('offline', function(e) { console.log('offline'); });

window.addEventListener('online', function(e) { console.log('online'); });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 注

Firefox 3 で導入された新しいオフライン関連イベントと、このプロパティの詳しい説明は、[Online/Offline Events‎](/ja/docs/Web/API/Navigator/Online_and_offline_events) を参照してください。

## 関連情報

- [HTML5 Rocks: Working Off the Grid With HTML5 Offline](https://www.html5rocks.com/en/mobile/workingoffthegrid.html)
- [HTML5 Rocks: "Offline": What does it mean and why should I care?](https://www.html5rocks.com/en/tutorials/offline/whats-offline/)
- [Mozilla Blog: Offline Web Applications](https://hacks.mozilla.org/2010/01/offline-web-applications/)
