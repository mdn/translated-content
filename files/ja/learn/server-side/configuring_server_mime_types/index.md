---
title: サーバーで MIME タイプを正しく設定する
slug: Learn/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{LearnSidebar}}

MIME タイプは、電子メール、またはウェブサーバやウェブアプリケーションによって提供されるコンテンツのメディアの種類を記述します。これらは、コンテンツがどのように処理され表示されるべきかのヒントを提供することを支援することを意図しています。

MIME タイプの例です。

- `text/html` は HTML 文書
- `text/plain` はプレーンテキスト
- `text/css` はカスケーディングスタイルシート
- `text/javascript` は JavaScript ファイル
- `text/markdown` は Markdown ファイル
- `application/octet-stream` はユーザーの操作が必要なバイナリーファイル

サーバーの既定の設定はさまざまで、コンテンツの種類を定義していないファイルには異なる MIME 型の既定値を設定します。

Apache ウェブサーバーの **2.2.7 より前**のバージョンでは、未知のコンテンツの種類に対して `text/plain` か `application/octet-stream` の MIME タイプを報告するように設定されていました。

[Nginx](https://nginx.org/) は既定ののコンテンツの種類を定義しない場合、`text/plain` を報告します。

新しいコンテンツの種類が生まれたりウェブサーバーに追加されたりすると、ウェブ管理者は新しい MIME タイプをウェブサーバーの設定に追加しないことがあります。これは、ウェブサーバーやアプリケーションから報告される MIME タイプを尊重するブラウザー のユーザーにとって、主要な問題の原因となります。

## なぜ正しい MIME タイプが重要なのか

ウェブサーバーやアプリケーションがコンテンツに対して正しくない MIME タイプ（未知のコンテンツに対する「既定値」を含む）を報告した場合、ウェブブラウザーは作者の意図を知る術がありません。これにより、予期しない動作が発生する可能性があります。

ウェブブラウザーの中には、正しい MIME タイプを推測しようとするものがあります。このため、誤設定されたウェブサーバーやアプリケーションは、そのブラウザーで動作し続けることができます（ただし、標準を正しく実装した他のブラウザーでは動作しません）。これは HTTP の仕様に違反するだけでなく、他にもいくつかの重大な理由から悪い考えであると言えます。

- 制御ができなくなる

  - : 報告された MIME タイプをブラウザーが無視した場合、ウェブ管理者や作者は、コンテンツがどのように処理されるかを制御することができなくなります。

    例えば、ウェブ開発者向けのウェブサイトでは、ある HTML 文書の例を `text/html` か `text/plain` のどちらかで送信し、その文書が HTML として処理されて表示されるか、ソースコードとして表示されるかを選択することができる場合があります。ブラウザーが MIME タイプを推測した場合、作者がこのオプションを利用することができなくなります。

- セキュリティ

  - : 実行可能プログラムなど、一部の種類のコンテンツは本質的に安全ではありません。このため、これらの MIME タイプでは通常、その種類のコンテンツが指定されたときにウェブブラウザーが取ることができる動作が制限されています。実行可能なプログラムは、ユーザーのコンピューター上で実行されるべきではなく、少なくとも、ファイルをダウンロードするかどうかを**ユーザーに尋ねる**ダイアログを示す必要があります。

    MIME タイプの推測は、悪意のある作成者が危険なファイルの MIME タイプを安全なタイプとして誤って報告することに基づく、インターネットエクスプローラーのセキュリティ悪用につながりました。これは通常のダウンロードダイアログを迂回し、結果としてインターネットエクスプローラがコンテンツを実行可能なプログラムであると推測し、ユーザーのコンピューター上で実行することになります。

## JavaScript の古い MIME タイプ

JavaScript の MIME タイプに関する情報を探していると、JavaScript を参照する MIME タイプに複数遭遇することがあります。これらの MIME タイプには次のようなものがあります。

- `application/javascript`
- `application/ecmascript`
- `application/x-ecmascript`
- `application/x-javascript`
- `text/ecmascript`
- `text/javascript1.0`
- `text/javascript1.1`
- `text/javascript1.2`
- `text/javascript1.3`
- `text/javascript1.4`
- `text/javascript1.5`
- `text/x-ecmascript`
- `text/x-javascript`

ブラウザーはこれらの代替 MIME タイプのいずれか、いくつか、またはすべてに対応しているかもしれませんが、JavaScript ファイルの MIME タイプを示すには、`text/javascript` **のみ**を使用しましょう。

> **メモ:** 詳しくは [MIME タイプ（IANA メディア種別）](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)をご覧ください。

## 設定する MIME タイプの決定方法

コンテンツを提供するために使用する正しい MIME タイプの値を決定する方法はいくつかあります。

- コンテンツが商用ソフトウェアを使用して作成された場合は、ベンダーの文書を読んで、アプリケーションに報告されるべき MIME タイプを確認してください。
- IANA の [MIME Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml) の中を調べてください。ここには登録済みの MIME タイプに関するすべての情報があります。
- [FILExt](https://filext.com/) や [File extensions reference](https://www.file-extensions.org/) でファイルの拡張子を検索し、その拡張子に関連する MIME タイプを確認してください。アプリケーションは 1 文字だけ異なる複数の MIME タイプを持っていることがあるので、よく注意してください。

## 受信したコンテンツの MIME タイプを調べる方法

- Firefox では

  - ファイルを読み込み、**ツール > ページの情報**を実行して、アクセスしたページの MIME タイプを確認してください。
  - **ツール > ウェブ開発者 > ネットワーク**を実行して、ページを再読み込みしてください。リクエストタブには、ページが読み込んでいるすべてのリソースのリストが表示されます。いずれかのリソースをクリックすると、ページの [`Content-Type`](/ja/docs/Web/HTTP/Headers/Content-Type) ヘッダーを含む、利用可能なすべての情報が一覧表示されます。

- Chrome では

  - ファイルを読み込んで、**表示 > 開発者 > 開発者ツール** に進み、_ネットワーク_ タブを選びます。ページを再読み込みし、検査したいリソースを選択します。ヘッダーの下にある `Content-Type` を見ていくと、リソースのコンテンツの種類が表示されます。

- ページのソースの中で、MIME タイプを示す `<meta>` 要素を探してください。例えば、`<meta http-equiv="Content-Type" content="text/html">` です。

  - 標準によると、MIME タイプを指定する `<meta>` 要素は、Content-Type ヘッダーが利用できる場合は無視されるべきです。

[IANA](https://www.iana.org/) は登録済みの [MIME メディア型](https://www.iana.org/assignments/media-types/media-types.xhtml) ほ保守しています。[HTTP 仕様書](https://www.w3.org/Protocols/rfc2616/rfc2616.html)は MIME タイプのスーパーセットを定義しており、ウェブ上で使用できるメディア型を記述するために使用することができます。

## 正しい MIME タイプを送信するようにサーバーを設定するには

目標は、サーバーを設定して各文書に対して正しい {{HTTPHeader("Content-Type")}} ヘッダーを送信するようにすることです。

- Apache ウェブサーバーを使用している場合は、[Apache の設定: .htaccess](/ja/docs/Learn/Server-side/Apache_Configuration_htaccess) の **_メディア型と文字エンコーディング_** の節で、様々な文書の種類とそれに対応する MIME タイプの例を調べてください。
- Nginx を使用している場合、Nginx には `.htaccess` に相当するツールがないので、変更はすべてメインの設定ファイルに入ることに注意してください。
- サーバーサイドスクリプトやフレームワークを使用してコンテンツを生成している場合、コンテンツの種類を示す方法は、使用しているツールによって異なります。

どのサーバーシステムを使用しているかにかかわらず、達成すべき効果は、{{httpheader("Content-Type")}} という名前にコロンと空白が続き、MIME タイプが続くレスポンスヘッダーを設定することです。高水準の環境では、ページを生成するときにこのようなヘッダーを設定することが多いようです。例えば PHP 環境では、この例のように PDF リソースのレスポンスヘッダーを設定することができます。

```php
header('Content-Type: application/pdf')
```

代わりに `header('application/pdf')` を設定しようとしても、動作しません。

## 関連リンク

- [IANA | MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)（英語）
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)（英語）
- [MIME タイプ（IANA メディア種別）](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [Apache vs Nginx: Practical Considerations](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)（英語）
- [Migrate Apache .htaccess to Nginx server block](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block)（英語）
