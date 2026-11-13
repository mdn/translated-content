---
title: ローカルテストサーバーを用意するには
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

この記事では、マシン上に簡単なローカルテストサーバーを設定する方法と、その使い方の基本について説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >インターネットの仕組み</a
        >および<a href="/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server">ウェブサーバーとは何かを</a>知っておく必要があります。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>ローカルのテストサーバーを設定する方法を学習します。</td>
    </tr>
  </tbody>
</table>

## ローカルファイルとリモートファイル

MDN の「学習」記事の多くでは、サンプルをブラウザーで直接開くように案内しています。HTML ファイルをダブルクリックする、ブラウザーウィンドウにドラッグ＆ドロップする、または「ファイル」>「開く…」を選択して HTML ファイルを探すなど、いくつかの方法があります。

ウェブアドレスのパスが、ローカルハードドライブ上のファイルへのパスが続く `file://`、または `localhost:` や `http://127.0.0.1`（[ローカル HTTP サーバーの実行](#ローカル_http_サーバーの実行)を参照）で始まる場合、読み込まれたファイルはローカルハードドライブ上にあります。一方、GitHub またはほかのリモートサーバーでホストされている例を表示する場合、ウェブアドレスは `https://` で始まります。これはファイルがリモートにあり、HTTPS 経由で受信されたことを示します。

## file URL を使用する際の問題

`file://` URL を使用してサンプルをブラウザーで直接開くと、実行されないことがあります。これにはさまざまな理由があります。よくある理由は次のとおりです。

- **非同期リクエストを行う**。一部のブラウザー（Chrome を含む）は、サンプルをローカルファイルから実行しただけでは非同期リクエストを実行しません（[JavaScript でネットワークリクエストを行う](/ja/docs/Learn_web_development/Core/Scripting/Network_requests)を参照）。これはセキュリティ上の制限によるものです（ウェブセキュリティについて詳しくは、[ウェブサイトのセキュリティ](/ja/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)を参照してください）。
- **サーバー側の言語を使用している**。 サーバー側の言語 (PHP や Python など) では、コードを解釈して結果を提供する特別なサーバーが必要です。
- **他のファイルをインクルードしている**。ブラウザーは通常、`file://` スキームを使用してリソースを読み込むリクエストをオリジンをまたぐリクエストとして扱います。
  そのため、他のローカルファイルを入れることができるローカルファイルを読み込むと、 {{Glossary("CORS")}} エラーが発生することがあります。

## ローカル HTTP サーバーの実行

ローカルファイルの実行に伴う問題を避けるには、ローカルウェブサーバーを介してサンプルをテストする必要があります。この節では、そのためのいくつかの方法を説明します。

### コードエディターで拡張機能を使用する場合

サーバー側の言語は必要なく、HTML、CSS、JavaScript だけを使用する場合は、コードエディターの拡張機能を使用すると、ローカルの例を簡単に実行できます。拡張機能はサーバーのインストールと設定を自動化するだけでなく、コードエディターとうまく統合されます。

たとえば VS Code では、拡張機能パネルで [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) 拡張機能を検索してください。HTML ファイルを表示しているときに、ユーザーインターフェイスの右上に「Show Preview」ボタンが表示されます。これを押すと、HTML と関連ファイルが別のサイドパネルにレンダリングされます。

Live Preview は、`http://127.0.0.1:3000` のローカルサーバーを使用してファイルを提供します。

### Node.js の使用

Node.js の [`http-server`](https://www.npmjs.com/package/http-server) モジュールを使用すると、任意のディレクトリーで HTML ファイルをホストできます。

このモジュールを使用するには、次のようにします。

1. Node.js（および、通常は Node.js にバンドルされているパッケージマネージャーの npm）がすでにインストールされているか確認するには、[コマンドライン](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)で次のコマンドを実行してください。

   ```bash
   node -v
   npm -v
   ```

2. Node.js がインストールされていない場合は、インストールする必要があります。Node.js のドキュメントにある[ダウンロード手順](https://nodejs.org/en/download)に従って、上記のコマンドを再度実行し、インストールが正常に行われたことを確認してください。

3. コマンドプロンプトで `cd` コマンドを使い、サンプルがあるフォルダーに移動します。

4. サーバーを起動するには、次のコマンドを実行します。

   ```bash
   npx http-server -o -p 9999 -c-1
   ```

   これにより、現在のディレクトリーにあるすべてのファイルが `localhost:9999` でホストされ、`index.html` が自動的に読み込まれます。オプション `-o` は、すぐにウェブブラウザーで開くようにします。`index.html` がない場合はディレクトリーの内容が表示され、読み込むファイルを選択できます。オプション `-c-1` はサーバーがファイルをキャッシュしないようにするため、毎回最新のファイルが読み込まれます。

### Python の使用

ローカルの例を HTTP サーバーで実行するもう一つの方法は、Python の `http.server` モジュールを使用することです。

> [!NOTE]
> 古いバージョンの Python（バージョン 2.7 まで）では、`SimpleHTTPServer` という名前の似たモジュールが提供されていました。Python 2 は廃止されたため、Python 3 の使用をお勧めします。

このためには次のようにします。

1. Python がすでにインストールされているか確認するには、[コマンドライン](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)で次のコマンドを実行してください。

   ```bash
   # macOS または Linux では、次を実行
   python -V
   # 上記が失敗する場合は、次を試す
   python3 -V

   # Windows では、次を実行
   py -3 -V
   ```

2. Python がインストールされていない場合は、インストールする必要があります。Python のドキュメントにある[ダウンロード手順](https://www.python.org/downloads/)に従ってください（[Django チュートリアル](/ja/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#python_3_のインストール)にも詳しい説明があります）。その後、コマンドを再度実行して、インストールが成功したか確認してください。

3. Python がセットアップできたら、`cd` コマンドを使用して、テストしたいウェブサイトのコードがあるディレクトリーに移動します。

4. そのディレクトリーにあるサーバーを起動するコマンドを入力します。

   ```bash
   # macOS と Linux では、次を実行
   python3 -m http.server

   # Windows では、次を実行
   py -3 -m http.server
   ```

   デフォルトでは、現在のディレクトリーにあるすべてのファイルが `localhost:8000` でホストされ、`index.html` が自動的に読み込まれます。`index.html` がない場合はディレクトリーの内容が表示され、読み込むファイルを選択できます。

   > [!NOTE]
   > すでにポート 8000 でサーバーが動作している場合は、サーバーのコマンドに別のポート番号を指定できます。たとえば `python3 -m http.server 7800` とすると、`localhost:7800` でコンテンツにアクセスできます。

## サーバー側の言語をローカルで実行

Python、PHP、JavaScript などのサーバーサイド言語を使用する場合の最適な手法は、使用しているサーバーサイド言語、およびウェブフレームワークを使用しているか「スタンドアロン」のコードを使用しているかによって異なります。

ウェブフレームワークを使用している場合、通常、そのフレームワークは独自の開発サーバーを提供しています。
例えば、次の言語/フレームワークには開発サーバーが付属しています。

- Python のウェブフレームワークは、[Django](/ja/docs/Learn_web_development/Extensions/Server-side/Django) や [Flask](https://flask.palletsprojects.com/) などです。
- Node/JavaScript のフレームワークは、[Express](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) などです。
- PHP には独自の[組み込み開発サーバー](https://www.php.net/manual/en/features.commandline.webserver.php)があります。また、[MAMP](https://www.mamp.info/en/downloads/) (macOS) や [XAMPP](https://www.apachefriends.org/download.html) (Linux/Windows/macOS) などの PHP/データベース開発サーバーをインストールすることもできます。
