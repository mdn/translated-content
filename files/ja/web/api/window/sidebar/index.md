---
title: Window.sidebar
slug: Web/API/Window/sidebar
---

{{APIRef}} {{Deprecated_Header}}

> **警告:** この [`window.external`](/ja/docs/Web/API/Window/external) プロパティの Firefox だけの標準外のエイリアスは[削除](#ブラウザーの互換性)されました。

ブラウザーにアドオンを登録するためのいくつかのメソッドを含むサイドバーオブジェクトを返します。

## メソッド

返されるサイドバーオブジェクトは、以下のメソッドを持っています。

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>メソッド</th>
      <th>説明 (SeaMonkey)</th>
      <th>説明 (Firefox)</th>
    </tr>
    <tr>
      <td>
        <code>addPanel(<var>title</var>, <var>contentURL</var>, "")</code>
      </td>
      <td>サイドバーパネルを追加します。</td>
      <td rowspan="2">
        Firefox 23 からは廃止されました (SeaMonkey にのみ存在します)。<br />エンドユーザーは、代わりに「このブックマークをサイドバーに読み込む」オプションを使用できます。また、 <a href="/ja/docs/Mozilla/Creating_a_Firefox_sidebar">Firefox のサイドバーを作成する</a>を参照してください。
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >addPersistentPanel(<var>title</var>, <var>contentURL</var>, "")</code
        >
      </td>
      <td>バックグラウンドで動作可能なサイドバーパネルを追加します。</td>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(<em>descriptionURL)</em></code>
      </td>
      <td colspan="2">
        ダミー関数です。何もしません。
        <a href="/ja/docs/Web/OpenSearch#Autodiscovery_of_search_plugins">検索プラグインの自動検出</a>を参照してください。
      </td>
    </tr>
    <tr>
      <td>
        <code>addSearchEngine(<var>engineURL</var>, <var>iconURL</var>, <var>suggestedTitle</var>, <var>suggestedCategory</var>)</code>
        {{deprecated_inline}}
      </td>
      <td colspan="2">
        <p>
          検索エンジンをインストールします (Sherlock)。
          詳細は<a href="/ja/docs/Web/API/Window/sidebar/Adding_search_engines_from_Web_pages#Installing_Sherlock_plugins" title="Adding_search_engines_from_web_pages">Sherlock 検索エンジンを追加</a>にあります。
        </p>
        <div class="note">
          <p>
            <strong>Note:</strong> これは Firefox 44 で廃止され、 Firefox 59 で完全に削除されました。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>IsSearchProviderInstalled(<em>descriptionURL)</em></code>
      </td>
      <td colspan="2">
        特定の検索プロバイダー (OpenSearch) がインストールされているかどうかを示します。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

Mozilla 固有です。どの標準にも属しません。

## ブラウザーの互換性

Firefox 102 で環境設定に隠されました。
詳細は、 [`window.external`](/ja/docs/Web/API/Window/external#ブラウザーの互換性) の Firefox 互換性情報を参照してください。
