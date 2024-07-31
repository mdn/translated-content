---
title: PerformanceNavigation.type
slug: Web/API/PerformanceNavigation/type
l10n:
  sourceCommit: 66c9543af6a0cf1baf89d5b0c972ee7dd08663b0
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

古い **`PerformanceNavigation.type`** プロパティは読み取り専用で、このページへの移動方法を表す定数を含む `unsigned short` を返します。

> [!WARNING]
> このインターフェイスは [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨です。代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

## 値

`unsigned short` の値です。

取りうる値は次の通りです。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">値</th>
      <th scope="col">定数名</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code></td>
      <td><code>TYPE_NAVIGATE</code></td>
      <td>
        リンク、ブックマーク、フォーム送信、スクリプト、またはアドレスバーに URL を入力してページにアクセスしました。
      </td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>TYPE_RELOAD</code></td>
      <td>
        このページには、 [再読み込み] ボタンをクリックするか、{{domxref("Location.reload()")}} メソッドを介してアクセスしました。
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>TYPE_BACK_FORWARD</code></td>
      <td>このページには履歴をたどってアクセスしました。</td>
    </tr>
    <tr>
      <td><code>255</code></td>
      <td><code>TYPE_RESERVED</code></td>
      <td>その他の方法。</td>
    </tr>
  </tbody>
</table>

## 仕様書

この機能は標準化の予定がなくなりました。 [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)で非推奨になったためです。
代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("PerformanceNavigation")}} インターフェイス
