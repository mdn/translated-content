---
title: OpenSearch 記述形式
slug: Web/OpenSearch
l10n:
  sourceCommit: f5ced29119fa3495e8d5664247c2680330c9310f
---

{{AddonSidebar}}

**[OpenSearch 記述形式](https://github.com/dewitt/opensearch)** は、検索エンジンのウェブインターフェイスを記述するために使用することができます。これにより、ウェブサイトは自分自身のために検索エンジンを記述することができ、ブラウザーや他のクライアントアプリケーションがその検索エンジンを使用することができます。OpenSearch は、(少なくとも) Firefox、Edge、Internet Explorer、Safari、Chrome が対応しています。（他のブラウザーのドキュメントへのリンクは[参考資料](#参考資料)をご覧ください。）

また、Firefox では、検索候補や `<SearchForm>` 要素など、OpenSearch 規格にない追加機能にも対応しています。この記事では、これらの Firefox の追加機能に対応した OpenSearch 互換の検索プラグインの作成に焦点を当てます。

OpenSearch 記述ファイルは、[検索プラグインの自動検出](#autodiscovery_of_search_plugins)で説明されているように通知することができます。

> [!WARNING]
> OpenSearch プラグインは [addons.mozilla.org](https://addons.mozilla.org) (AMO) にアップロードできなくなりました。検索エンジン機能は `manifest.json` ファイルに[クローム設定](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)を指定して WebExtension API を使用する必要があります。

## OpenSearch 記述ファイル

検索エンジンを記述する XML ファイルはとてもシンプルで、以下の基本的なテンプレートに従います。書いている検索エンジンに応じて、 _\[角括弧]_ で囲まれた部分をカスタマイズする必要があります。

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Search engine full name and summary]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
  <moz:SearchForm>[https://example.com/search]</moz:SearchForm>
</OpenSearchDescription>
```

- ShortName
  - : 検索エンジンの短い名前です。 HTML やその他のマークアップを使用しない、 **16 文字以下**のプレーンテキストでなければなりません。
- Description
  - : 検索エンジンの簡単な説明です。 **1024 文字以下**のプレーンテキストで、 HTML やその他のマークアップは使用しないでください。
- InputEncoding
  - : 検索エンジンへ送信する入力欄に使用する[文字エンコーディング](/ja/docs/Glossary/Character_encoding)です。
- Image

  - : 検索エンジンのアイコンの URL です。可能であれば、 16×16 の画像を `image/x-icon` 形式で (`/favicon.ico` など)、 および 64×64 の画像を `image/jpeg` または `image/png` 形式で含めてください。

    この URL には [`data:` URL スキーム](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)を使用することもできます。 (`data:` URL はアイコンファイルから [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) で生成することができます。)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA … DAAA=</Image>
    ```

    Firefox はアイコンを [base64](https://ja.wikipedia.org/wiki/Base64) `data:` URI としてキャッシュします (検索プラグインは[プロファイル](https://support.mozilla.org/ja/kb/profiles-where-firefox-stores-user-data)の `searchplugins/` フォルダーに格納されます)。これを行う際に、 `http:` および `https:` URL は `data:` URI に変換されます。

    > [!NOTE]
    > リモートからアイコンを読み込む際 (すなわち、 `data:` URI とは対照的に `https://` URI からの場合)、 Firefox は**10 KB**より大きなアイコンを拒否します。

    ![Firefox の検索ボックスに表示される Google の検索候補](searchsuggestionsample.png)

- Url

  - : 検索に使う 1 つまたは複数の URL を記述します。 `template` 属性は検索クエリーのベース URL を指定します。

    Firefox は 3 種類の URL に対応しています。

    - `type="text/html"` は実際の検索結果そのものの URL を指定します。
    - `type="application/x-suggestions+json"` は検索候補を読み取るための URL を指定します。 Firefox 63 以降では、 `type="application/json"` をこの別名として受け付けます。
    - `type="application/x-moz-keywordsearch"` はロケーションバーに入力されるキーワード検索の際に使用する URL を指定します。これは Firefox のみが対応しています。

    これらの種類の URL では、ユーザーが検索バーやロケーションバーに入力した検索語に置き換えらえる `{searchTerms}` を使うことができます。対応している他の動的な検索引数は [OpenSearch 1.1 引数](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters)に記述されています。

    検索候補については、 `application/x-suggestions+json` URL テンプレートを使用して候補リストを [JSON](/ja/docs/Glossary/JSON) 形式で読み取ります。

## 検索プラグインの自動検出

検索プラグインを提供しているウェブサイトは、 Firefox ユーザーがプラグインを簡単にダウンロードしてインストールできるように通知することができます。

自動検出に対応するには、それぞれのプラグインの `<link>` 要素をウェブページの `<head>` セクションにします。

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="searchTitle"
  href="pluginURL" />
```

太字の項目を以下の説明のように置き換えてください。

- searchTitle
  - : "MDC を検索" や 'Yahoo! 検索" のような実行する検索の名前です。この値は、プラグインファイルの `<ShortName>` と一致させる必要があります。
- pluginURL
  - : ブラウザーがダウンロードできる XML 検索プラグインの URL です。

もしサイトが複数の検索プラグインを提供しているなら、すべてを自動検出させることができます。例を示します。

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: 著者"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: タイトル"
  href="http://example.com/mysitetitle.xml" />
```

この方法で、著者とタイトルによる検索を行うプラグインをサイトで提供することができます。

> [!NOTE]
> Firefox では、検索プラグインで提供されたアイコンがある場合は、検索ボックスのアイコンが変化して示します。 (画像を参照。緑のプラスの記号です。) そのため、ユーザーのインターフェイスで検索ボックスが非表示になっている場合、これを示すことは*ありません*。_一般に、この動作はブラウザーによって異なります_。

## OpenSearch プラグインの自動更新の対応

OpenSearch プラグインは自動的に更新することができます。 `Url` 拡張要素を `type="application/opensearchdescription+xml"` および `rel="self"` を付けて設置してください。 `template` 属性には、自動的に更新する OpenSearch 文書の URL を設定してください。

例:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> 現時点で、 [addons.mozilla.org](https://addons.mozilla.org) (AMO) は OpenSearch プラグインの自動更新に対応していません。自分の検索プラグインを AMO に登録したい場合は、送信前に自動更新機能を削除してください。

## トラブルシューティングのヒント

検索プラグインの XML に問題があると、検出されたプラグインをに追加する際にエラーが発生します。エラーメッセージが参考にならない場合、以下のヒントが問題を探す手助けになる可能性があります。

- サーバーは OpenSearch プラグインを、 `Content-Type: application/opensearchdescription+xml` を使用して提供するべきです。
- 検索プラグインの XML が整形式であることを確認してください。ファイルを直接 Firefox に読み込むことでチェックすることができます。アンパーサンド (&) を `template` の URL の中では `&amp;` にエスケープしなければなりません。タグは最後にスラッシュをまたは対応する終了タグで閉じる必要があります。
- `xmlns` 属性は重要です。 — これがないと、 "Firefox could not download the search plugin" というエラーメッセージが出る可能性があります。
- `text/html` の URL を含める**必要があります**。 Atom または [RSS](/ja/docs/Glossary/RSS) の URL 型のみを含む検索プラグインは (有効なものですが、 Firefox は対応していません)、 "could not download the search plugin" エラーを引き起こします。
- リモートで取得されるファビコンは 10KB 以上でなければなりません ([Firefox バグ 361923](https://bugzil.la/361923) を参照)。

さらに、検索プラグインサービスはプラグイン開発者に役立つであろうログの仕組みを提供します。 `about:config` を使い '`browser.search.log`' を `true` に設定してください。検索プラグインが追加されるとログ情報が Firefox の[ブラウザーコンソール](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) (ツール ➤ ブラウザーツール ➤ ブラウザーコンソール)に表示されます。

## 参考資料

- [OpenSearch ドキュメント](https://github.com/dewitt/opensearch)
- [Safari 8.0 リリースノート: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge 開発ガイド: Search provider discovery](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/)
- [The Chromium Projects: Tab to Search](https://www.chromium.org/tab-to-search)
- imdb.com には [動作する `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml) があります
- [Ready2Search](https://ready.to/search/jp/) - OpenSearch プラグインの作成 (日本語可, GET メソッドのみ)。 [Customized Search through Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
