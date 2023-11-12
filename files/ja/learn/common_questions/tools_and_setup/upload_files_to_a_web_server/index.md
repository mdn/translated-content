---
title: ウェブサーバーにファイルをアップロードするには？
slug: Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server
---

この記事では、ファイル転送ツールを使用してオンラインでサイトを公開する方法を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/Common_questions/What_is_a_web_server">ウェブサーバとは何か</a>と<a href="/ja/docs/Learn/Common_questions/What_is_a_domain_name">ドメイン名の仕組み</a>を知っている必要があります。<a href="/ja/docs/Learn/Common_questions/set_up_a_local_testing_server"
          >基本的な環境設定方法</a>と<a href="/ja/docs/Learn/Getting_started_with_the_web">簡単なウェブページの作成方法</a>も理解しておく必要があります。
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        様々なファイル転送ツールを使用し、ファイルをサーバーにプッシュする方法について説明します。
      </td>
    </tr>
  </tbody>
</table>

## 概要

シンプルなウェブページを作成している場合 (例として [HTML の基本](/ja/docs/Learn/Getting_started_with_the_web/HTML_basics)を参照)、ウェブサーバー上にオンラインで転送したいと思うかもしれません。この記事では SFTP クライアント、RSync、GitHub などの選択肢をとおして、その方法を説明します。

## SFTP

SFTP クライアントには、いくつもの選択肢があります。ここのデモは [FileZilla](https://filezilla-project.org/) を使うことにします。 Windows、macOS、Linux で使え、無料だからです。 FileZilla をインストールするには、 [FileZilla ダウンロードページ](https://filezilla-project.org/download.php?type=client)に移動し、大きなダウンロードボタンをクリックしてから、通常の方法でインストーラーファイルからインストールします。

> **メモ:** もちろん他にもたくさんの選択肢があります。詳しくは[公開ツール](/ja/docs/Learn/Common_questions/How_much_does_it_cost#公開ツール)を参照してください。

FileZilla アプリケーションを開きます。次のようなものが表示されます。

![](filezilla-ui.png)

### ログイン

この例では、ホスティングプロバイダー (私たちの HTTP ウェブサーバーをホスティングするサービス) が架空の会社 "Example Hosting Provider" であり、 URL は `mypersonalwebsite.examplehostingprovider.net` であったとします。

私たちはアカウントを開設し、その情報を受け取ったばかりです。

> Example Hosting Provider でアカウントを開設しましたことをお祝いします。
>
> アカウント: `demozilla`
>
> あなたのウェブサイトは `demozilla.examplehostingprovider.net` で表示されます。
>
> このアカウントに公開するには、 SFTP を使用して次の資格情報で接続してください。
>
> - SFTP サーバー: `sftp://demozilla.examplehostingprovider.net`
> - ユーザー名: `demozilla`
> - パスワード: `quickbrownfox`
> - ポート: `5548`
> - ウェブ上に公開するには、ファイルを `Public/htdocs` ディレクトリーに置いてください。

最初に `http://demozilla.examplehostingprovider.net/` を見てみましょう。見ての通り、まだそこには何もありません。

![Our demozilla personal website, seen in a browser: it's empty](demozilla-empty.png)

> **メモ:** ホスティングプロバイダーによっては、最初にあなたのウェブアドレスに行ったときに、「このウェブサイトは[ホスティングサービス]によってホストされています。」というようなページが表示されます。

SFTP クライアントを遠隔のサーバーに接続するには、次の手順を実行します。

1. メインメニューから**ファイル > サイトマネージャ...** を選択します。
2. **サイトマネージャ**ウィンドウで、**新規サイト**ボタンをクリックし、提供されたスペースにサイト名を **demozilla** として入力します。
3. ホスティングプロバイダーから提供された SFTP サーバーのホストを　**Host:** フィールドに入力します。
4. **ログオンの種類**ドロップダウンで**標準**を選択し、提供されたユーザー名とパスワードを該当するフィールドに入力します。
5. 正しいポートおよびその他の情報を入力します。

ウィンドウは次のようになります。

![](site-manager.png)

次に Connect を押して SFTP サーバーに接続します。

注意: ホスティングプロバイダーがホスティングスペースへの SFTP (セキュア FTP) 接続を提供していることを確認してください。 FTP は本質的に安全ではないため、使用しないでください。

### こちらとあちら：ローカルビューとリモートビュー

一度接続すると、画面は次のようになります（私たち自身の例と結びつけて、イメージをつかんでください。）

![](connected.png)

あなたが見ているものを調べてみましょう。

- 中央の左ペインには、ローカルファイルが表示されます。ウェブサイトを保存しているディレクトリー (例: `mdn`) に移動します
- 中央の右ペインには、リモートファイルが表示されます。遠くの FTP ルート (このケースでは、`users/demozilla`) にログインしています
- 今のところ、下部と上部のペインを無視することができます。それぞれ、あなたのコンピューターと SFTP サーバー間の接続状態を示すメッセージのログ、 SFTP クライアントとサーバー間のすべてのインタラクションのライブログです

### サーバーへのアップロード

私たちのホスト命令の例では、「ウェブ上に公開するには、ファイルを `Public/htdocs` ディレクトリーに入れてください」となっています。右ペインの指定されたディレクトリーに移動する必要があります。このディレクトリーは実質的にあなたのウェブサイトのルートで、`index.html` ファイルやその他の資産がどこに行くかを示します。

ファイルを置く正しいリモートディレクトリーが見つかったら、サーバーにファイルをアップロードしますが、それにはファイルを左ペインから右ペインにドラッグ＆ドロップする必要があります。

### 本当にオンラインですか？

これまでのところとても良いですが、ファイルは本当にオンラインですか？ ブラウザーでウェブサイト (例えば `http://demozilla.examplehostingprovider.net/`) に戻って再確認することができます。

![Here we go: our website is live!](here-we-go.png)

やりました！ウェブサイトは動いています！

## Rsync

{{Glossary("Rsync")}} はローカルからリモートへのファイル同期ツールで、ほとんどの Unix ベースのシステム (macOS や Linux など) で一般的に利用可能ですが、Windows 版も存在します。

既定ではコマンドラインで使用されるため、SFTP よりも高度なツールと見なされています。基本的なコマンドはこんな感じです。

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` はダッシュの後に 1 つ以上の文字が続きます。たとえば、詳細エラーメッセージの場合は `-v`、バックアップを作成する場合は `-b` です。完全なリストは [rsync の man ページ](https://linux.die.net/man/1/rsync)にあります ("Options summary" を検索してください)。
- `SOURCE` は、ファイルのコピー元となるローカルファイルまたはディレクトリーへのパスです。
- `user@` は、ファイルのコピー先となるリモートサーバー上のユーザーの資格情報です。
- `x.x.x.x` はリモートサーバーの IP アドレスです。
- `DESTINATION` は、リモートサーバー上のディレクトリーまたはファイルをコピーする場所へのパスです。

あなたはホスティングプロバイダーからそのような詳細を得る必要があるでしょう。

詳細およびその他の例については、 [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/hipaa-compliant-cloud-hosting-services/how-to-use-rsync-copy-sync-files-servers/) を参照してください。

もちろん、FTP の時と同じように安全な接続のもとで使用することをお勧めします。Rsync の場合は `-e` オプションを使用して、SSH を介した接続を確立するための SSH 詳細を指定します。

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

必要なものの詳細については、[How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh) を参照してください。

### Rsync GUI ツール

他のコマンドラインツールと同様に、コマンドラインの使用に慣れていない人向けに Rsync 用の GUI ツールもあります。 [Acrosync](https://acrosync.com/mac.html) はそのようなツールの1つで、Windows と macOS で利用可能です。

繰り返しになりますが、ホスティングプロバイダーから接続認証情報を取得する必要がありますが、この方法でそれらを入力するための GUI が得られます。

## GitHub

GitHub では、[GitHub pages](https://pages.github.com/) (gh-pages) を介してウェブサイトを公開することができます。

これの使い方の基本については、[ウェブ入門](/ja/docs/Learn/Getting_started_with_the_web)の[ウェブサイトの公開](/ja/docs/Learn/Getting_started_with_the_web/Publishing_your_website)の記事で説明しているので、ここでは繰り返しません。

ただし、 GitHub でウェブサイトをホスティングすることはできますが、カスタムドメインを使用することもできます。詳しいガイドは [Using a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) をご覧ください。

## ファイルをアップロードするその他の方法

FTP プロトコルは、ウェブサイトを公開するためのよく知られた方法の 1 つですが、唯一の方法ではありません。 他にもいくつかのやり方があります。

- **ウェブインターフェイス**。リモートファイルアップロードサービスのフロントエンドとして機能する HTML インターフェイス。ホスティングサービスから提供されます。
- **{{Glossary("WebDAV")}}**。より高度なファイル管理を可能にする {{Glossary("HTTP")}} プロトコルの拡張。
