---
title: リソース URL
slug: Web/URI/Schemes/resource
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/ja/docs/Web/URI")}}{{non-standard_header}}

`resource:` というスキームのプレフィックスが付いたリソース URL は、Firefox と Firefox のブラウザー拡張機能によってリソースを内部的に読み込むために使用されますが、情報の一部はブラウザーが接続するサイトでも利用できます。

## 構文

リソース URL は、接頭辞 (`resource:`) と読み込むするリソースを指す URL の 2 つの部分で構成されます。

```url
resource://<path>
```

例

```url
resource://gre/res/svg.css
```

リソース URL ('->') に矢印がある場合は、最初のファイルが次のファイルにロードされたことを意味します。

```url
resource://<File-loader> -> <File-loaded>
```

より一般的な詳細については、[ウェブ上のリソースの識別](/ja/docs/Web/URI)を参照してください。

この記事では、組み込みのリソースを指すために Firefox が内部的に使用するリソース URI に焦点を当てます。

## 脅威

`resource:` URL によって共有される情報の一部はウェブサイトで利用できるため、ウェブページは内部スクリプトを実行し、デフォルトの設定を含む Firefox の内部リソースを調べることができます。

たとえば、[Browserleaks のスクリプト](https://browserleaks.com/resource-urls)は、サイトで実行されている簡単なスクリプトでクエリーが実行されたときに Firefox が表示する内容を強調表示します（コードは <https://browserleaks.com/resource-urls#more> にあります）。

ファイル firefox.js は、プリファレンス名と値を pref() 関数に渡します。 例えば、

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

ウェブサイトではこの `pref()` 関数をオーバーライドし、スクリプト`resource:///defaults/preferences/firefox.js` を使用して、 Firefox のデフォルト設定を簡単に収集できます。

さらに、プラットフォームやロケールなどのビルド構成によっては、ウェブサイトがこの情報を使用して個々のユーザーを識別できるという意味で、いくつかのデフォルト設定値が異なります。

## 解決方法

この問題を解決するために、 Mozilla は [Firefox バグ 863246](https://bugzil.la/863246) のリソースを読み込む動作を変更しました。これは [Firefox 57 (Quantum)](/ja/docs/Mozilla/Firefox/Releases/57) で登場しました。

過去には、ウェブコンテンツは、 Firefox の内部リソースだけでなく、拡張機能の資産も含め、URI が必要とするあらゆるリソースにアクセスすることができました。 現在、この動作はデフォルトでは禁止されています。

しかし、特定の状況下で Firefox がウェブコンテンツにリソースを読み込む必要があります。 たとえば、ビュー・ソース・ページ (ビュー・ソースまたはビュー選択ソース) を開くと、 `resource:` URI を介して `viewsource.css` が必要です。ウェブコンテンツに公開する必要があるリソースは、 `resource://content-accessible/`という名前の新しい場所に移動されました。これは隔離されており、重要ではないリソースのみが含まれています。 このようにして、重要なリソースを公開し、ほとんどの脅威を排除できます。

> [!NOTE]
> ウェブと拡張機能の開発者がリソース URL をもう使用しようとしないことをお勧めします。彼らの使い方はうまくいきませんでした。そしてほとんどの使用法はこれ以上動作しません。

## 仕様書

resource: はどの仕様書にも定義されていません。

## ブラウザーの対応

resource: は Firefox のみ対応

## 関連情報

- [ウェブ上のリソースの識別](/ja/docs/Web/URI)
- [URL とは何か](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` is [covered here](https://www.iana.org/assignments/uri-schemes/prov/resource))
