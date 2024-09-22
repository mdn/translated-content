---
title: "Performance: now() メソッド"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`performance.now()`** メソッドは高解像度のタイムスタンプをミリ秒で返します。これは {{domxref("Performance.timeOrigin")}} （ウィンドウコンテキストではナビゲーションを開始した時刻、 {{domxref("Worker")}} および {{domxref("ServiceWorker")}} コンテキストではワーカーを実行した時刻）からの経過時間を表します。

## 構文

```js-nolint
now()
```

### 引数

なし。

### 返値

ミリ秒単位で計測した {{domxref("DOMHighResTimeStamp")}} を返します。

## 解説

### `Performance.now` と `Date.now`

[`Date.now`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now) とは異なり、`performance.now()` が返すタイムスタンプは 1 ミリ秒の解像度に制限されません。時刻をマイクロ秒精度までの浮動小数点数で表します。

また、 `Date.now()` は Unix 元期 (1970-01-01T00:00:00Z) からの相対値で、システムクロックに依存しているため、システムクロックやユーザークロックの調整、クロックスキューなどの影響を受ける可能性があります。
一方、 `performance.now()` メソッドは、 [monotonic clock](https://w3c.github.io/hr-time/#dfn-monotonic-clock) である `timeOrigin` プロパティからの相対値です。その現在時刻は決して減少せず、調整の対象にはなりません。

### `performance.now` の仕様の変更

高解像度時間レベル 1 とレベル 2 では、 `performance.now()` メソッドの意味づけが変わりました。

| 変更     | レベル 1                                                                                   | レベル 2                                                                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 基点     | [`performance.timing.navigationStart`](/ja/docs/Web/API/PerformanceTiming/navigationStart) | {{domxref("Performance.timeOrigin")}}                                                                                                                               |
| 起動条件 | 文書の読み込みまたはアンロードのプロンプト（もしあれば）。                                 | 閲覧コンテキストの作成（前の文書がない場合）、アンロードプロンプト（ある場合）、またはナビゲーションの開始（HTML 内で定義しているように、取得のいくつか前の段階）。 |

`performance.now()` メソッドは、ナビゲーションタイミング仕様書の [`performance.timing.navigationStart`](/ja/docs/Web/API/PerformanceTiming/navigationStart) プロパティからの相対値を使用していました。これが変更され、 `performance.now()` は {{domxref("Performance.timeOrigin")}} からの相対値となり、ウェブページ間でタイムスタンプを比較する際の時計の変化のリスクを避けることができるようになりました。

```js
// レベル 1 （時計の変更のリスクあり）
currentTime = performance.timing.navigationStart + performance.now();

// レベル 2 （時計の変更のリスクなし）
currentTime = performance.timeOrigin + performance.now();
```

### スリープ中のカウント

詳細度（レベル2）では、スリープ中に `performance.now()` がカウント動作することが要求されています。Windows の Firefox と Windows の Chromium だけがスリープ中も動き続けているようです。他にも関連するブラウザーバグがあります。

- Chrome/Chromium ([bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1206450))
- Firefox ([bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1709767))
- Safari/WebKit ([bug](https://bugs.webkit.org/show_bug.cgi?id=225610))

詳細は仕様の issue [hr-time#115](https://github.com/w3c/hr-time/issues/115) でも得られます。

## 例

### `performance.now()` の使用

コードの具体的な点からの経過時間を調べるには、次のようにします。

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

## セキュリティ要件

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)から保護するために、 `performance.now()` はサイトの分離状態に基づいて粗くなります。

- 独立したコンテキストでの解像度: 5 マイクロ秒
- 独立していないコンテキストでの解像度: 100 マイクロ秒

{{HTTPHeader("Cross-Origin-Opener-Policy")}} と {{HTTPHeader("Cross-Origin-Embedder-Policy")}} ヘッダーを使用して、サイトをオリジン間分離します。

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

これらのヘッダーは、最上位の文書がクロスオリジン文書と閲覧コンテキストグループを共有しないことを保証します。 COOP プロセスは、文書を分離し、潜在的な攻撃者がポップアップでそれを開いていたとしても、グローバルオブジェクトにアクセスできないようにし、 [XS-Leaks](https://github.com/xsleaks/xsleaks) と呼ばれる一連のクロスオリジン攻撃を防止しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.timeOrigin")}}
