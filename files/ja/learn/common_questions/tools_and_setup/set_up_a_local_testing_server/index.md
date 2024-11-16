---
title: ローカルテストサーバーを用意するには
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: f21b731803ee077d060a11038d9b284bab37ecc3
---

{{QuicklinksWithSubPages("/ja/Learn/Common_questions")}}

この記事では、マシン上に簡単なローカルテストサーバーを設定する方法と、その使い方の基本について説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >インターネットの仕組み</a
        >および<a href="/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server">ウェブサーバーとは何かを</a>知っておく必要があります。
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

- **非同期リクエストを特徴としている**。 一部のブラウザー (Chrome を含む) は、ローカルファイルからサンプルを実行するだけでは非同期リクエストは実行しません ([サーバーからのデータの取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)を参照)。これはセキュリティ上の制限があるためです (ウェブセキュリティの詳細については、[ウェブサイトのセキュリティ](/ja/docs/Learn/Server-side/First_steps/Website_security)を参照してください)
- **サーバー側の言語を使用している**。 サーバー側の言語 (PHP や Python など) では、コードを解釈して結果を提供する特別なサーバーが必要です。
- **他のファイルをインクルードしている**。 ブラウザーは通常、`file://` スキーマを使用してリソースを読み込むリクエストをオリジン間リクエストとして扱います。
  そのため、他のローカルファイルを入れることができるローカルファイルを読み込むと、 {{Glossary("CORS")}} エラーが発生することがあります。

## シンプルなローカル HTTP サーバーの実行

非同期リクエストの問題を回避するには、ローカルウェブサーバーを介して実行することによって、そのようなサンプルをテストする必要があります。

### コードエディターで拡張機能を使用する場合

HTML と CSS と JavaScript だけが必要で、サーバーサイドの言語が必要ない場合、最も簡単な方法はコードエディターの拡張機能を調べることです。ローカルの HTTP サーバーへのインストールと設定するには、自動化するだけでなく、コードエディターとうまく統合されます。 HTTP サーバーのローカルファイルをワンクリックでテストできます。

VSCode については、以下の無料拡張機能を調べると良いでしょう。

- `vscode-preview-server`。[ホームページ](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)でチェックできます。

### Python の使用

これを実現するためのもう一つの方法は、 Python の `http.server` モジュールを使用することです。

> [!NOTE]
> 古いバージョンの Python (バージョン 2.7 まで) では、`SimpleHTTPServer` という名前の似たようなモジュールが提供されていました。Python 2.x を使用している場合、`http.server` の使用をすべて `SimpleHTTPServer` に置き換えることで、このガイドを実行することができます。しかし、最新バージョンの Python を使用することをお勧めします。

このためには次のようにします。

1. Python をインストールします。 Linux または Mac OS X を使用している場合は、既にシステム上で使用可能になっているはずです。 Windows ユーザーの方は、 Python ホームページからインストーラーを入手し、インストーラーの指示に従ってインストールすることができます。

   - [python.org](https://www.python.org/) に進みます
   - ダウンロードセクションの下で、 Python "3.xxx" のリンクをクリックします
   - ページ下部の _Windows Installer_ を選択してダウンロードします
   - ダウンロードしたら、実行します
   - インストーラーの最初のページで、 "Add Python 3.xxx to PATH" チェックボックスをオンにします
   - [インストール]をクリックし、インストールが完了したら[閉じる]をクリックします

2. コマンドプロンプト (Windows)/ターミナル (macOS/ Linux) を開きます。 Python がインストールされていることを確認するには、次のコマンドを入力してください。

   ```bash
   python -V
   # 上記のものが失敗する場合は、次のようにする
   python3 -V
   # または、 "py" コマンドが使用できる場合は、次のようにする
   py -V
   ```

3. これによりバージョン番号が返されます。 これで OK であれば、 `cd` コマンドを使用して、テストしたいウェブサイトのコードを格納するディレクトリーに移動します。

   ```bash
   # 入力するディレクトリー名を入れる。例えば次のようにする
   cd Desktop
   # 必要であれば、 2 つのドットを使用するとディレクトリーを 1 つ上にジャンプする
   cd ..
   ```

4. そのディレクトリーにあるサーバーを起動するコマンドを入力します。

   ```bash
   # 上記で Python のバージョンが 3.X と返ってきた場合
   # Windows では、 "python -m http.server" or "py -3 -m http.server" のようにする
   python3 -m http.server
   # 上記で Python のバージョンが 2.X と返ってきた場合
   python -m SimpleHTTPServer
   ```

5. 既定では、これはローカルウェブサーバー上のディレクトリーの内容を 8000 番ポート上で実行します。このサーバーにアクセスするには、ウェブブラウザーで `localhost:8000` の URL に移動します。ここにディレクトリーの内容が表示されるので、実行する HTML ファイルをクリックしてください。

> [!NOTE]
> すでに 8000 番ポートで何かが稼働している場合は、 server コマンドを実行して別のポート番号を選択することができます。例えば `python3 -m http.server 7800` (Python 3.x) または `python -m SimpleHTTPServer 7800` (Python 2.x) です。これで `localhost:7800` でコンテンツにアクセスできます。

## サーバー側の言語をローカルで実行

Python の `http.server` （Python 2 では `SimpleHTTPServer`）モジュールは便利ですが、単なる静的ファイルサーバーに過ぎません。 Python、PHP、JavaScript などの言語で書かれたコードの実行方法はわかりません。これを処理するには、必要なことがあります。必要なのは、実行しようとしているサーバー側の言語に依存します。いくつかの例があります。

- Python のサーバー側コードを実行するには、Python ウェブフレームワークを使用する必要があります。 Python のウェブフレームワークには、 Django（[ガイド](/ja/docs/Learn/Server-side/Django)が利用できます）、[Flask](https://flask.palletsprojects.com/)、[Pyramid](https://trypyramid.com) など人気のものが多く存在します。
- Node.js (JavaScript) サーバー側コードを実行するには、生のノードまたはその上に構築されたフレームワークを使用する必要があります。 Express は良い選択です - [Express Web Framework (Node.js/JavaScript)](/ja/docs/Learn/Server-side/Express_Nodejs) を参照してください
- PHP サーバー側コードを実行するには、[PHP の組み込み開発サーバー](https://www.php.net/manual/ja/features.commandline.webserver.php)を起動してください。

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```
