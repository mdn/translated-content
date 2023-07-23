---
title: クライアント - サーバの概要
slug: Learn/Server-side/First_steps/Client-Server_overview
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

サーバサイドプログラミングの目的と潜在的な利点を知ったので、サーバがブラウザーから "動的リクエスト" を受け取ったときに起こることを詳細に検討します。ほとんどの Web サイトのサーバサイドコードは同様の方法でリクエストとレスポンスを処理するので、これは自身のコードの大部分を書くときに何が必要かを理解するのに役立ちます。

| 前提条件 | 基本的なコンピュータリテラシー。Web サーバの基本的な理解。                                                            |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| 目的     | 動的な Web サイトにおけるクライアントとサーバのやりとり、特にサーバサイドのコードで実行する必要がある操作を理解する。 |

私たちはまだコードを書くために使う Web フレームワークを選択していないので、議論には本当のコードはありません！ ただし、どのプログラミング言語または Web フレームワークを選択したかに関係なく、記述された動作はサーバ側のコードで実装する必要があるため、この説明は依然として非常に重要です。

## Web サーバと HTTP (入門書)

Web ブラウザーは、**H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/ja/docs/Web/HTTP)) を使用して [Web サーバ](/ja/docs/Learn/Common_questions/What_is_a_web_server)と通信します。Web ページのリンクをクリックしたり、フォームを送信したり、検索を実行したりすると、ブラウザーは *HTTP リクエスト*をサーバに送信します。

このリクエストに含まれるもの:

- 対象のサーバとリソース (HTML ファイル、サーバ上の特定のデータポイント、実行するツールなど) を識別する URL
- 必要なアクション (たとえば、ファイルを取得したり、データを保存または更新したりするため) を定義するメソッド。さまざまなメソッド/動詞とそれに関連するアクションを以下にリストします。

  - `GET`: 特定のリソース (製品に関する情報を含む HTML ファイル、製品のリストなど) を取得します。
  - `POST`: 新しいリソース (たとえば、新しい記事を Wiki に追加したり、新しい連絡先をデータベースに追加したりします) を作成します。
  - `HEAD`: `GET` のように body を取得せずに、特定のリソースに関するメタデータ情報を取得します。たとえば、リソースが最後に更新された時刻を調べるために `HEAD` リクエストを使用し、リソースが変更された場合にのみ (より "高価な") `GET` リクエストを使用します。
  - `PUT`: 既存のリソースを更新します (または、存在しない場合は新しいリソースを作成します)。
  - `DELETE`: 指定したリソースを削除します。
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: これらの動詞は、あまり一般的ではない高度な作業のためのものなので、ここでは説明しません。

- 追加情報 (たとえば、HTML フォームデータ) をリクエストと共にエンコードすることができます。情報は次のようにエンコードできます。

  - URL パラメータ: `GET` リクエストは、サーバに送信された URL に名前と値のペアを末尾に追加することで、データをエンコードします (例：`http://mysite.com?name=Fred&age=11`)。URL パラメータから URL の残りの部分を区切る疑問符 (`?`)、関連する値から各名前を区切る等号 (`=`)、および各ペアを区切るアンパサンド (`&`) が常にあります。URL パラメータは、ユーザが変更して再送信することができるため、本質的に「安全ではありません」。結果として、URL パラメータの `GET` リクエストは、サーバ上のデータを更新するリクエストには使用されません。
  - `POST` データ: `POST` リクエストは新しいリソースを追加し、そのデータはリクエストボディ内にエンコードされます。
  - クライアントサイド Cookie : Cookie には、クライアントに関するセッションデータが含まれており、サーバはそれをログイン状態とリソースへの権限/アクセスを判断するために使用できます。

Web サーバはクライアントリクエストメッセージを待ち、メッセージが到着したときにそれらを処理し、HTTP レスポンスメッセージで Web ブラウザーにレスポンスします。レスポンスには、リクエストが成功したかどうかを示す [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status) (例: 成功した場合は "`200 OK`"、リソースが見つからない場合は "`404 Not Found`"、ユーザがリソースを見ることを許可されていない場合は "`403 Forbidden`"など) が含まれます。`GET` リクエストに対する成功したレスポンスの本文には、リクエストされたリソースが含まれます。

HTML ページが返されると、Web ブラウザーによってレンダリングされます。 処理の一部として、ブラウザーは他のリソースへのリンクを発見することができ (例えば HTML ページは通常 JavaScript と CSS ページを参照します)、これらのファイルをダウンロードするために別々の HTTP リクエストを送信します。

静的および動的 Web サイト (以降のセクションで説明) は、まったく同じ通信プロトコル/パターンを使用しています。

### GET リクエスト/レスポンス 例

リンクをクリックするか (検索エンジンホームページのように) サイトを検索することで簡単な `GET` リクエストをすることができます。たとえば、MDN で「クライアント - サーバの概要」という用語を検索したときに送信される HTTP リクエストは、次のようになります (メッセージの一部はあなたのブラウザーや設定に依存するので、同一にはなりません)。

> **メモ:** HTTP メッセージのフォーマットは「Web 標準」([RFC7230](http://www.rfc-editor.org/rfc/rfc7230.txt)) で定義されています。このレベルの詳細を知る必要はありませんが、少なくとも今、これら全てがどこから来たのかを知っています！

#### リクエスト

リクエストの各行にはそれに関する情報が含まれています。 最初の部分は**ヘッダー**と呼ばれ、[HTML head](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) に HTML 文書に関する有用な情報が含まれるのと同じで、リクエストに関する有用な情報が含まれます (ただし、実際のコンテンツ自体は含まれません)。

```
GET https://developer.mozilla.org/en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

1 行目と 2 行目には、上記で説明したほとんどの情報が含まれています。

- リクエストのタイプ (`GET`)
- ターゲットリソースの URL (`/en-US/search`)
- URL パラメータ (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`)
- ターゲット/ホストの Web サイト (developer.mozilla.org)
- 最初の行の終わりには、特定のプロトコルバージョンを識別する短い文字列 (`HTTP/1.1`) も含まれています。

最後の行にはクライアントサイドの Cookie に関する情報が含まれています。この場合、Cookie にはセッションを管理するための ID (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; ...`) が含まれています。

残りの行には、使用されているブラウザーとそれが処理できるレスポンスの種類に関する情報が含まれています。たとえば、次のようになります。

- 私のブラウザー (`User-Agent`) は Mozilla Firefox (`Mozilla/5.0`) です。
- gzip 圧縮情報 (`Accept-Encoding: gzip`) を受け入れることができます。
- 指定された文字セット (`Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7`) および言語 (`Accept-Language: de,en;q=0.7,en-us;q=0.3`) を受け入れることができます。
- `Referer` 行は、このリソースへのリンク (つまり、要求の発信元、`https://developer.mozilla.org/en-US/`) を含んだ Web ページのアドレスを示します。

HTTP リクエストもボディを持つことができますが、この場合は空です。

#### レスポンス

このリクエストに対するレスポンスの最初の部分を以下に示します。ヘッダーには、次のような情報が含まれています。

- 最初の行にはレスポンスコード `200 OK` が含まれています。これはリクエストが成功したことを示しています。
- レスポンスが `text/html` フォーマットの (`Content-Type`) であることがわかります。
- また、UTF-8 文字セット(`Content-Type: text/html; charset=utf-8`) が使用されていることもわかります。
- head はそれがどれくらい大きいかも教えてくれます (`Content-Length: 41823`)。

メッセージの最後に **body** があります。これにはリクエストによって返された実際の HTML が含まれています。

```http
HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept,Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823

<!DOCTYPE html>
<html lang="en-US" dir="ltr" class="redesign no-js"  data-ffo-opensanslight=false data-ffo-opensans=false >
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  ...
```

レスポンスヘッダの残りの部分には、レスポンス (たとえば、いつ生成されたか)、サーバ、およびブラウザーがページを処理する方法についての情報が含まれます (たとえば、`X-Frame-Options: DENY` 行は、このページを別のサイトの {{htmlelement("iframe")}} に埋め込むことを許可しないようにブラウザーに指示します)。

### POST リクエスト/レスポンス 例

HTTP `POST` は、サーバに保存する情報を含むフォームを送信したときに作成されます。

#### リクエスト

以下のテキストは、ユーザがこのサイトに新しいプロファイルの詳細を送信したときに行われる HTTP リクエストを示しています。最初の行はこのリクエストを `POST` として識別しますが、リクエストのフォーマットは前述の `GET` リクエストの例とほぼ同じです。

```http
POST https://developer.mozilla.org/en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
```

主な違いは URL にパラメータがないことです。ご覧のとおり、フォームからの情報はリクエストの本文にエンコードされています (たとえば、新しいユーザーの fullname は `&user-fullname=Hamish+Willee` を使用して設定されます)。

#### レスポンス

リクエストからのレスポンスは以下のとおりです。ステータスコード "`302 Found`" は、投稿が成功したこと、および `Location` フィールドで指定されたページを読み込むために 2 番目の HTTP リクエストを発行する必要があることをブラウザーに通知します。その他の点では、この情報は GET リクエストへのレスポンスに関する情報と似ています。

```http
HTTP/1.1 302 FOUND
Server: Apache
X-Backend-Server: developer3.webapp.scl3.mozilla.com
Vary: Cookie
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:38:13 GMT
Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
X-Frame-Options: DENY
X-Cache-Info: not cacheable; request wasn't a GET or HEAD
Content-Length: 0
```

> **メモ:** これらの例に示されている HTTP レスポンスとリクエストは [Fiddler](https://www.telerik.com/download/fiddler) アプリケーションを使ってキャプチャされました、しかしあなたはウェブスニファ (例えば [Websniffer](http://websniffer.cc/)) または [HttpFox](https://addons.mozilla.org/en-US/firefox/addon/httpfox/) のようなブラウザー拡張を使って同様の情報を得ることができます。あなたはこれを自分で試すことができます。リンクされているツールを使用してから、サイト内を移動してプロファイル情報を編集し、さまざまなリクエストとレスポンスを確認します。最近のほとんどのブラウザーには、ネットワーク要求を監視するツール (たとえば、Firefox の[ネットワークモニタツール](/ja/docs/Tools/Network_Monitor)) もあります。

## 静的サイト

*静的サイト*は、特定のリソースがリクエストされたときはいつでもサーバから同じハードコードされたコンテンツを返すものです。たとえば、製品に関するページが `/static/myproduct1.html` にある場合、この同じページがすべてのユーザに返されます。サイトに他の似たような製品を追加するならば、別のページ (例えば `myproduct2.html`) を追加する必要があるでしょう。これは本当に非効率的になり始めます — 何千もの製品ページにたどり着くとどうなるでしょう？ 各ページ (基本的なページテンプレート、構造など) に渡って多くのコードを繰り返すことになります。ページ構造について何か変更したい場合 (たとえば、新しい「関連商品」セクションを追加するなど) 各ページを個別に変更する必要があります。

> **メモ:** ページ数が少なく、すべてのユーザに同じコンテンツを送信したい場合は、静的サイトが優れています。ただし、ページ数が増えると、管理に多大なコストがかかる可能性があります。

前回の記事で見た静的サイトのアーキテクチャ図をもう一度見て、これがどのように機能するのかを要約しましょう。

![A simplified diagram of a static web server.](Basic%20Static%20App%20Server.png)

ユーザがページにナビゲートしたい場合、ブラウザーはその HTML ページの URL を指定した HTTP `GET` リクエストを送信します。サーバはファイルシステムからリクエストされた文書を検索し、その文書と "`200 OK`" の [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status) (成功を示す) を含む HTTP レスポンスを返します。ファイルがサーバに存在しない場合は "`404 Not Found`"、ファイルが存在するが別の場所にリダイレクトされている場合は "`301 Moved Permanently`" など、サーバは別のステータスコードを返すことがあります。

静的サイトのサーバは可変データを格納しないため、GET リクエストを処理するだけで済みます。また、HTTP リクエストデータ (URL パラメータやクッキーなど) に基づいてレスポンスを変更することもありません。

それでも、動的サイトは静的ファイル (CSS、JavaScript、静的イメージなど) に対するリクエストをまったく同じ方法で処理するため、静的サイトの機能を理解することはサーバーサイドプログラミングを学ぶときに役立ちます。

## 動的サイト

*動的サイト*とは、特定のリクエスト URL とデータに基づいてコンテンツを生成して返すことができる (特定の URL に対して常に同じハードコードファイルを返すのではない) サイトです。製品サイトの例を使用すると、サーバは個々の HTML ファイルではなくデータベースに製品の「データ」を保管します。商品の HTTP `GET` リクエストを受信すると、サーバは商品 ID を決定し、データベースからデータを取得してから、そのデータを HTML テンプレートに挿入することによって、レスポンス用の HTML ページを作成します。これは静的サイトよりも大きな利点があります。

データベースを使用すると、製品情報を簡単に拡張、変更、および検索可能な方法で効率的に格納できます。

HTML テンプレートを使用すると、HTML 構造の変更が非常に簡単になります。これは 1 つの場所、1 つのテンプレート内で行う必要があるだけで、潜在的に何千もの静的ページでは行わないためです。

### 動的リクエストの構造

このセクションでは、前回の記事で説明した内容に基づいて、「動的な」HTTP リクエストとレスポンスのサイクルの概要を段階的に説明します。"物事を現実のものにする" ために、コーチが HTML 形式で彼らのチーム名とチームサイズを選択して、彼らの次のゲームのために提案された "最高のラインナップ" を取り戻すことができるスポーツチームマネージャーウェブサイトのコンテキストを使います。

以下の図は、"チームコーチ" Web サイトの主な要素と、コーチが "ベストチーム"リストにアクセスしたときの一連の操作の番号付きラベルを示しています。サイトの一部は _Web アプリケーション_ (これは HTTP リクエストを処理し、HTTP レスポンスを返すサーバーサイドコードを指す方法です)、_データベース_、これにはプレイヤー、チーム、コーチ、そして彼らの関係についての情報が含まれています、そして *HTML テンプレート*です。

![This is a diagram of a simple web server with step numbers for each of step of the client-server interaction.](Web%20Application%20with%20HTML%20and%20Steps.png)

コーチがチーム名と選手の数を記入したフォームを送信した後、一連の操作は次のようになります。

1. Web ブラウザーはリソースのベース URL (`/best`) を使用し、URL パラメータ (例: `/best?team=my_team_name&show=11`) または URL パターンの一部 (例: `/best/my_team_name/11/`) としてチームと選手の番号をエンコードしたものを使用して、サーバへの HTTP `GET` リクエストを作成します。 `GET` リクエストが使用されるのは、リクエストがデータをフェッチするだけである (データを変更しない) ためです。
2. *Web サーバ*はリクエストが「動的」であることを検出し、それを処理 (Web サーバは、その構成で定義されたパターンマッチング規則に基づいてさまざまな URL を処理する方法を決定します) のために *Web アプリケーション*に転送します。
3. *Web アプリケーション*は、リクエストの*意図*が URL (`/best/`) に基づいて「最善のチームリスト」を取得することであることを識別し、URL から必要なチーム名とプレーヤーの数を見つけます。その後、*Web アプリケーション*はデータベースから必要な情報を取得します (どのプレーヤーが「最高」であるかを定義するために追加の「内部」パラメータを使用し、クライアント側の Cookie からログインしたコーチの身元も取得する可能性があります)。
4. *Web アプリケーション*は、(*データベース*からの) データを HTML テンプレート内のプレースホルダに入れることで、HTML ページを動的に作成します。
5. *Web アプリケーション*は、生成された HTML を HTTP ステータスコード 200 ("成功") とともに (*Web サーバ*経由で) Web ブラウザーに返します。HTML が返されるのを妨げるものがあると、*Web アプリケーション*は別のコードを返します。たとえば、"404" はチームが存在しないことを示します。
6. Web ブラウザーは返された HTML の処理を開始し、それが参照する他の CSS または JavaScript ファイルを取得するための個別のリクエストを送信します (手順 7 を参照)。
7. Web サーバはファイルシステムから静的ファイルをロードして直接ブラウザーに返します (これも正しいファイル処理は設定ルールと URL パターンマッチングに基づいています)。

データベース内のレコードを更新する操作も同様に処理されます。データベースの更新と同じですが、ブラウザーからの HTTP リクエストは `POST` リクエストとしてエンコードされるはずです。

### 他の仕事をする

*Web アプリケーション*の仕事は、HTTP リクエストを受信し、HTTP レスポンスを返すことです。情報を取得または更新するためにデータベースと相互にやり取りすることは非常に一般的な作業ですが、コードは同時に他のことを実行することも、データベースとやり取りしないこともあります。

*Web アプリケーション*が実行する追加のタスクの良い例は、ユーザにメールを送信してサイトへの登録を確認することです。サイトはロギングやその他の操作も実行する可能性があります。

### HTML 以外のものを返す

サーバサイドの Web サイトのコードは、レスポンスに HTML スニペット/ファイルを返す必要はありません。代わりに動的に他の種類のファイル (テキスト、PDF、CSV など) あるいはデータ (JSON、XML など) を作成して返すことができます。

データを動的に更新して自身のコンテンツ ({{glossary("AJAX")}}) を更新できるようにするために Web ブラウザーにデータを返すという考えはかなり前からありました。ごく最近では、必要に応じて動的に更新される単一の HTML ファイルを使用して Web サイト全体が作成される「シングルページアプリケーション」が普及しています。このスタイルのアプリケーションを使用して作成された Web サイトは、サーバから Web ブラウザーに多くの計算コストをかけます。その結果、Web サイトは (応答性が高いなど) ネイティブアプリケーションのように動作するように見えます。

## Web フレームワークはサーバサイドの Web プログラミングを簡素化します

サーバサイド Web フレームワークにより、上記の操作を処理するコードを非常に簡単に書くことができます。

それらが実行する最も重要な操作の 1 つは、異なるリソース/ページの URL を特定のハンドラ関数にマッピングするための単純なメカニズムを提供することです。これにより、各タイプのリソースに関連付けられているコードを別々にしておくことが容易になります。また、ハンドラ機能を変更することなく、特定の機能を提供するために使用される URL を 1 か所で変更できるため、メンテナンスの面でもメリットがあります。

たとえば、2 つの URL パターンを 2 つのビュー関数にマップする次の Django (Python) コードを考えてみましょう。最初のパターンは、`/best` のリソース URL を持つ HTTP リクエストが `views` モジュールの `index()` という名前の関数に渡されることを保証します。パターン "`/best/junior`" を持つリクエストは、代わりに `junior()` ビュー関数に渡されます。

```python
# file: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # example: /best/
    url(r'^$', views.index),
    # example: /best/junior/
    url(r'^junior/$', views.junior),
]
```

> **メモ:** `url()` 関数の最初のパラメータは、「正規表現」(RegEx, または RE) と呼ばれるパターンマッチング手法を使用するため、少し奇妙に見える (たとえば、`r'^junior/$'`) ことがあります。この時点で正規表現がどのように機能するのかを知る必要はありませんが、(上のハードコードされた値ではなく) URL のパターンと一致させてビュー関数のパラメータとして使用できるという点が異なります。例として、非常に単純な RegEx は、「1 つの大文字に一致し、その後に 4〜7 つの小文字を一致させる」と言うかもしれません。

Web フレームワークはまた、ビュー関数がデータベースから情報を取得するのを容易にします。データの構造はモデルで定義されています。これは基礎となるデータベースに格納されるフィールドを定義する Python クラスです。"_team_type_" のフィールドを持つ _Team_ というモデルがある場合は、単純なクエリ構文を使用して特定のタイプを持つすべてのチームを取り戻すことができます。

以下の例では、 "大文字と小文字を区別する" 正確な `team_type` が "junior" であるすべてのチームのリストを取得します — フォーマットに注意してください。フィールド名 (`team_type`) の後に二重下線、そして使用する一致のタイプ (この場合は `exact`) です。他にもたくさんの種類の一致があり、それらをデイジーチェーンでつなげることができます。 順序と返される結果の数も制御できます。

```python
#best/views.py

from django.shortcuts import render

from .models import Team


def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

`junior()` 関数は、ジュニアチームのリストを取得した後、`render()` 関数を呼び出して、元の `HttpRequest`、HTML テンプレート、およびテンプレートに含める情報を定義する "context" オブジェクトを渡します。`render()` 関数は、コンテキストと HTML テンプレートを使用して HTML を生成し、それを `HttpResponse` オブジェクトに返す便利な関数です。

明らかに Web フレームワークは他にも多くのタスクで役に立ちます。次の記事では、さらに多くの利点といくつかの一般的な Web フレームワークの選択について説明します。

## まとめ

この時点で、サーバサイドコードが実行しなければならない操作の概要を把握し、サーバーサイド Web フレームワークがこれを容易にする方法をいくつか知っているはずです。

次のモジュールでは、最初のサイトに最適な Web フレームワークを選択する手助けをします。

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
