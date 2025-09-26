---
title: "Window: external プロパティ"
slug: Web/API/Window/external
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{Deprecated_Header}}

`external` は {{domxref("Window")}} API のプロパティで、`External` インターフェイスのインスタンスを返します。このインターフェイスは外部の検索プロバイダーをブラウザーに追加する関連の関数を格納するように意図されていました。しかし、これは現在非推奨のものであり、含まれるメソッドは仕様通り何もしないダミー関数になっています。

## インスタンスメソッド

`External` オブジェクトで、以下のメソッドがあります。

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>メソッド</th>
      <th>説明</th>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(<em>descriptionURL)</em></code>
      </td>
      <td>
        ダミー関数。何もしません。
        <a href="/ja/docs/Web/XML/Guides/OpenSearch#autodiscovery_of_search_plugins"
          >検索プラグインの自動発見</a
        >を参照してください。
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>ダミー関数。何もしません。</td>
    </tr>
  </tbody>
</table>

## 仕様書

Mozilla 固有です。どの標準にも属しません。

## ブラウザーの互換性

Firefox 102 で環境設定に隠されました。
詳細は、 [`window.external`](#ブラウザーの互換性) の Firefox 互換性情報を参照してください。
