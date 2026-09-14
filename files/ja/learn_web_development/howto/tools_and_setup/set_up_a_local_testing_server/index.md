---
title: ローカルテストサーバーを用意するには
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
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

ほとんどの学習領域では、ブラウザーでサンプルを直接開くだけで済みます。 HTML ファイルをダブルクリックするか、ブラウザーウィンドウにドラッグ＆ドロップするか、ファイル > 開く...を選択して HTML ファイルを選択するなどです。これを達成する方法はたくさんあります。

ウェブアドレスのパスが `file://` で始まり、その後にローカルハードドライブのファイルへのパスが続く場合、ローカルファイルが使用されています。対照的に、 GitHub でホストされている例 (または他のリモートサーバーの例) を見ると、ウェブアドレスは `http://` または `https://` で始まっており、ファイルが HTTP 経由で受信されたことを示します。

## ローカルファイルのテストに関する問題

一部のサンプルはローカルファイルとして開くと実行されません。これにはさまざまな理由があります。最も可能性が高いのは、

- **非同期リクエストを特徴としている**。 一部のブラウザー (Chrome を含む) は、ローカルファイルからサンプルを実行するだけでは非同期リクエストは実行しません ([サーバーからのデータの取得](/ja/docs/Learn_web_development/Core/Scripting/Network_requests)を参照)。これはセキュリティ上の制限があるためです (ウェブセキュリティの詳細については、[ウェブサイトのセキュリティ](/ja/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)を参照してください)
- **サーバー側の言語を使用している**。 サーバー側の言語 (PHP や Python など) では、コードを解釈して結果を提供する特別なサーバーが必要です。
- **他のファイルをインクルードしている**。 ブラウザーは通常、`file://` スキーマを使用してリソースを読み込むリクエストをオリジン間リクエストとして扱います。
  そのため、他のローカルファイルを入れることができるローカルファイルを読み込むと、 {{Glossary("CORS")}} エラーが発生することがあります。

## シンプルなローカル HTTP サーバーの実行

非同期リクエストの問題を回避するには、ローカルウェブサーバーを介して実行することによって、そのようなサンプルをテストする必要があります。

### コードエディターで拡張機能を使用する場合

HTML と CSS と JavaScript だけが必要で、サーバーサイドの言語が必要ない場合、最も簡単な方法はコードエディターの拡張機能を調べることです。ローカルの HTTP サーバーへのインストールと設定するには、自動化するだけでなく、コードエディターとうまく統合されます。 HTTP サーバーのローカルファイルをワンクリックでテストできます。

VS Code の場合は、次のフリーの拡張機能を試してみてください。

- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)

### Node.js の使用

Node.js の [`http-server`](https://www.npmjs.com/package/http-server) モジュールは、任意のディレクトリーで HTML ファイルをホストする最も簡単な方法です。

このモジュールを使用するには、次のようにします。

1. Node.js がすでにインストールされているかどうかを調べるには、次のコマンドを実行してください。

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Node.js がインストールされていない場合は、インストールする必要があります。Node.js のドキュメントにある[ダウンロード手順](https://nodejs.org/en/download)に従って、上記のコマンドを再度実行し、インストールが正常に行われたことを確認してください。

3. ディレクトリーが `/path/to/project` であると想定しましょう。サーバーを開始するには、次のコマンドを実行します。

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   これは、`localhost:9999` の `/path/to/project` ディレクトリにあるすべてのファイルをホストします。オプション `-o` は、ウェブブラウザーで `index.html` ページを開くためのものです。`index.html` が存在しない場合は、その代わりにディレクトリーが表示されます。

### Python の使用

これを実現するためのもう一つの方法は、 Python の `http.server` モジュールを使用することです。

> [!NOTE]
> 古いバージョンの Python (バージョン 2.7 まで) では、`SimpleHTTPServer` という名前の似たようなモジュールが提供されていました。Python 2 はすでにサポートが終了していますので、Python 3 を使用することをお勧めします。

このためには次のようにします。

1. Python がすでにインストールされているかどうかを調べるには、次のコマンドを実行してください。

   ```bash
   python -V
   # 上記のものが失敗する場合は、次のようにする
   python3 -V
   # または、 "py" コマンドが使用できる場合は、次のようにする
   py -3 -V
   ```

2. Python がインストールされていない場合は、インストールする必要があります。Python のドキュメントにある [ダウンロード手順](https://www.python.org/downloads/) に従ってください（[Django チュートリアル](/ja/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#python_3_のインストール)にもより詳しい説明があります）。その後、上記のコマンドを再度実行して、インストールが成功したかどうかを確認してください。

3. これによりバージョン番号が返されます。 これで OK であれば、 `cd` コマンドを使用して、テストしたいウェブサイトのコードを格納するディレクトリーに移動します。

   ```bash
   # 入力するディレクトリー名を入れる。例えば次のようにする
   cd Desktop
   # 必要であれば、 2 つのドットを使用するとディレクトリーを 1 つ上にジャンプする
   cd ..
   ```

4. そのディレクトリーにあるサーバーを起動するコマンドを入力します。

   ```bash
   # Windows では、 "python -m http.server" or "py -3 -m http.server" のようにする
   python3 -m http.server
   ```

5. 既定では、これはローカルウェブサーバー上のディレクトリーの内容を 8000 番ポート上で実行します。このサーバーにアクセスするには、ウェブブラウザーで `localhost:8000` の URL に移動します。ここにディレクトリーの内容が表示されるので、実行する HTML ファイルをクリックしてください。

> [!NOTE]
> すでに 8000 番ポートで何かが稼働している場合は、 server コマンドを実行して別のポート番号を選択することができます。例えば `python3 -m http.server 7800` です。これで `localhost:7800` でコンテンツにアクセスできます。

## サーバー側の言語をローカルで実行

Python、PHP、JavaScript などのサーバーサイド言語を使用する場合の最適な手法は、使用しているサーバーサイド言語、およびウェブフレームワークを使用しているか「スタンドアロン」のコードを使用しているかによって異なります。

ウェブフレームワークを使用している場合、通常、そのフレームワークは独自の開発サーバーを提供しています。
例えば、次の言語/フレームワークには開発サーバーが付属しています。

- Python のウェブフレームワークは、[Django](/ja/docs/Learn_web_development/Extensions/Server-side/Django)、[Flask](https://flask.palletsprojects.com/)、[Pyramid](https://trypyramid.com/) などです。
- Node/JavaScript のフレームワークは、[Express Web Framework (Node.js/JavaScript)](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) などです。
- PHP には独自の[組み込み開発サーバー](https://www.php.net/manual/en/features.commandline.webserver.php)があります。

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

サーバーサイドのフレームワークや、開発サーバーを提供するプログラミング言語を直接使用していない場合は、 Python の `http.server` モジュールを使用して、サーバーサイドの Common Gateway Interface (CGI) スクリプトを呼び出すことで、Python、PHP、JavaScript などの言語で記述されたサーバーサイドのコードをテストすることもできます。
この機能の使用例については、realpython.com の「Python コード 1 行で HTTP サーバーを起動する方法」の「[共通ゲートウェイインターフェイス (CGI) を使用してスクリプトをリモートで実行する](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi)」をご覧ください。
