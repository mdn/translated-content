---
title: Django 開発環境の設定
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
original_slug: Learn/Server-side/Django/development_environment
l10n:
  sourceCommit: 4d9375ca739df44ef52cd026de9a20aaff60d9aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}

Django がどういうものかわかったところで、Windows、Linux (Ubuntu)、および macOS で Django 開発環境をセットアップしてテストする方法を説明します。一般的なオペレーティングシステムを使っていれば、Django アプリケーションの開発が始められます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        ターミナル/コマンドラインを開く方法を知っていること。開発用コンピューターのオペレーティングシステムにソフトウェアパッケージをインストールする方法を知っていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        自分のコンピューターで Django (4.*) の開発環境を動かすこと。
      </td>
    </tr>
  </tbody>
</table>

## Django 開発環境の概要

Django は自分のコンピューターをセットアップするのはとても簡単で、ウェブアプリケーションの開発を開始できます。このセクションでは、開発環境の内容を説明し、セットアップおよび構成オプションの一部の概要を示します。また、Ubuntu、macOS X、Windows に Django 開発環境をインストールする際の推奨される方法と、そのテスト方法について説明します。

### Django 開発環境とは何ですか？

開発環境は Django をローカルコンピューターにインストールしたものです。Django アプリを開発し、運用環境にデプロイする前にテストできます。

Django 自体が提供する主なツールは、Django プロジェクトを作成して作業するための Python スクリプトと、ローカルの（つまり、外部のウェブサーバーではなく）Django ウェブアプリケーションをあなたのコンピューター上のウェブブラウザーでテストするための簡単な開発用ウェブサーバーです。

開発環境の一部を構成する他の周辺ツールがありますが、ここではカバーしません。これには、コードを編集するための[テキストエディター](/ja/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors)や IDE、自動成型するためのリンター、などがあります。すでにテキストエディターがインストールされていると仮定しています。

### Django の構成オプションとは

Django は、インストール場所と設定の方法に関して非常に柔軟性があります。Django は次のようなことが可能です。

- 様々なオペレーティングシステムへのインストール
- ソースコード、Python パッケージインデックス (PyPi)、および多くの場合ホストコンピューターのパッケージマネージャアプリケーションからのインストール
- いくつかのデータベースのうち 1 つを使用するように構成したり、個別にインストールして構成する必要がある場合もあります。
- メインシステムの Python 環境または分離した Python 仮想環境で実行します。

これらのオプションは、それぞれわずかに異なる構成とセットアップを必要とします。以下のサブセクションでは、いくつかの選択肢について説明します。この記事の残りの部分では、いくつかオペレーティングシステムに Django をセットアップする方法を説明します。このモジュールの残りの部分は、セットアップが済んでいる想定です。

> [!NOTE]
> その他のインストールオプションについては、Django の公式ドキュメントでカバーされています。[下記で適切なドキュメント](#関連情報)にリンクしています。

#### どのオペレーティングシステムに対応しているか

Django のウェブアプリケーションは、Python 3 プログラミング言語を実行できるほとんどすべてのマシン（Windows、MacOS X、Linux / Unix、Solaris など）で実行できます。
ほとんどのコンピューターで開発中に Django を実行できるパフォーマンスが必要です。

この記事では、Windows、macOS X、および Linux/Unix について説明します。

#### どのバージョンの Python を使うべきか

対象とする Django リリースで対応している Python のバージョンを使用することができま す。
Django 5.0 では Python 3.10 から 3.12 を使用することができます ([FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) を参照してください)。

Django プロジェクトは、対応している Python のリリースのうち、利用できる最新版を使用することを推奨しています（そして「公式に対応しています」）。

#### どこで Django をダウンロードできるか

Django をダウンロードする場所は 3 つあります。

- pip ツールを使用して Python パッケージリポジトリー (PyPi) から。 これは、Django の最新の安定版を入手するための最良の方法です。
- コンピューターのパッケージマネージャのバージョンを使用します。 オペレーティングシステムにバンドルされている Django のディストリビューションは、使い慣れたインストールメカニズムを提供します。 ただし、パッケージ化されたバージョンはかなり古く、システムの Python 環境にのみインストールできます（これはあなたが望むものではないかもしれません）。
- ソースからインストールします。 Django の開発版を入手してソースからインストールできます。 これは初心者にはお勧めできませんが、Django 自身に貢献する準備ができたら必要です。

この記事では PyPi から Django をインストールし、最新の安定版を入手する方法を説明します。

#### どのデータベースか

Django は 4 つの主要なデータベース（PostgreSQL、MySQL、Oracle、SQLite）をサポートしています。また、他の一般的な SQL データベースや NOSQL データベースにさまざまなレベルのサポートを提供するコミュニティライブラリーもあります。 Django は Object-Relational Mapper（ORM）を使用して多くのデータベースの違いを抽象化していますが、[回避する方が良い潜在的な問題](https://docs.djangoproject.com/en/5.0/ref/databases/)がまだあります。

この記事（とこのモジュールのほとんど）では、データをファイルに保存する SQLite データベースを使用します。 SQLite は軽量データベースとしての使用を目的としており、高度な並行性はサポートできません。 ただし、主に読み取り専用のアプリケーションには最適です。

> [!NOTE]
> Django は、標準ツール（django-admin）を使用してウェブサイトプロジェクトを開始するときに、デフォルトで SQLite を使用するように設定されています。 これは、追加の設定やセットアップが不要なため、入門には最適な選択です。

#### システム全体または Python の仮想環境にインストールするには

Python3 をインストールすると、すべての Python3 コードで共有される単一のグローバル環境が得られます。 環境に好きな Python パッケージをインストールすることはできますが、一度に 1 つのパッケージしかインストールできません。

> [!NOTE]
> グローバル環境にインストールされた Python アプリケーションは、お互いに衝突する可能性があります（例えば、同じパッケージの異なるバージョンに依存する場合）。

Django をデフォルト/グローバル環境にインストールすると、コンピューター上で Django の 1 つのバージョンのみを対象にできます。 古いバージョンに依存しているウェブサイトを維持しながら、新しいウェブサイト（Django の最新バージョンを使用）を作成したい場合、これは問題になる可能性があります。

その結果、経験豊富な Python/Django 開発者は通常、独立した Python 仮想環境内で Python アプリケーションを実行します。これにより、1 台のコンピューター上で複数の異なる Django 環境を使用することができます。Django の開発チームは、Python の仮想環境を使用することをお勧めしています。

このモジュールは以下に示す方法で、仮想環境に Django をインストールすることを前提としています。

## Python 3 のインストール

Django を使用するには、オペレーティングシステムに Python をインストールする必要があります。Python 3 を使用している場合は、Django とその他の Python アプリケーションで使用される Python パッケージ/ライブラリーの管理（インストール、更新、削除）に使用する [Python Package Index](https://pypi.org/) ツール『pip3』も必要です。

このセクションでは、Ubuntu Linux 16.04、macOS X、および Windows 10 の Python のバージョンを確認し、必要に応じて新しいバージョンをインストールする方法を簡単に説明します。

> [!NOTE]
> 使用しているプラットフォームによっては、オペレーティングシステム独自のパッケージマネージャやその他のメカニズムを使って Python/pip をインストールできます。ほとんどのプラットフォームでは、 <https://www.python.org/downloads/> から必要なインストールファイルをダウンロードし、適切なプラットフォーム固有の方法を使用してインストールできます。

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS にはデフォルトで Python 3.10.12 が含まれています。 これを確認するには、bash 端末で次のコマンドを実行します。

```bash
python3 -V
# Output: Python 3.10.12
```

しかし、Python 3（Django を含む）用のパッケージをインストールするために必要な Python Package Index ツールは、デフォルトでは利用できません。
次のコマンドを使用して bash 端末に pip3 をインストールできます。

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 は [Django 5.0 で対応している] 最も古いバージョンです(https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)。
> このチュートリアルでは最新版の Python を使用する必要はありませんが、使用したい場合はインターネットに手順があります。

### macOS

macOS は既定では Python 3 を含んでいません（古いバージョンでは Python 2 が含まれています）。
端末で以下のコマンドを実行することで確認できます。

```bash
python3 -V
```

これは Python 3 がインストールされていることを示す Python のバージョン番号か、Python 3 が見つからなかったことを示す `python3: command not found` を表示します。

Python 3 は [python.org](https://www.python.org/) から（_pip3_ ツールとともに）簡単にインストールできます。

1. 必要なインストーラーをダウンロードします。
   1. <https://www.python.org/downloads/macos/> へ移動します。
   2. Django 5.0 が動作する最新の[対応しているバージョン](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)の安定版リリースをダウンロードしてください。
      （執筆時点では、これは Python 3.11.8 です）。

2. Finder を使用してファイルを探し、パッケージファイルをダブルクリックします。インストールの後、プロンプトが表示されます。

これで `python3 -V` をもう一度実行して Python のバージョン番号を調べると、インストールが成功したことが確認できます。

同様に、利用できるパッケージを列挙することで _pip3_ がインストールされているか調べることができます。

```bash
pip3 list
```

### Windows 10 または 11

Windows には既定で Python は含まれていませんが、[python.org](https://www.python.org/) から pip3 ツールと一緒に簡単にインストールできます。

1. 必要なインストーラーをダウンロードします。
   1. <https://www.python.org/downloads/windows/> へ移動します。
   2. Django 5.0 が動作する最新の[対応しているバージョン](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)の安定版リリースをダウンロードしてください。
      （執筆時点では、これは Python 3.11.8 です）。

2. ダウンロードしたファイルをダブルクリックし、インストールのプロンプトに従って Python をインストールします。
3. "Python を PATH に追加する" にチェックを入れたことを確認してください。

Python 3 がインストールされたことを確認するには、コマンドプロンプトに次のテキストを入力します。

```bash
py -3 -V
```

Windows インストーラーには、既定で pip3（Python パッケージマネージャ）が組み込まれています。次に示すようにインストールされたパッケージを一覧表示できます。

```bash
py -3 -m pip list
```

> [!NOTE]
> インストーラーは、上記のコマンドが動作するために必要なものすべてをセットアップする必要があります。Python が見つからないというメッセージが表示された場合は、システムパスに追加する必要があります。
> インストーラーを再度動作させ、"Modify" を選択し、2 つ目のページにある "Add Python to environment variables" というラベル付けされたボックスにチェックを入れることで実行できます。

## Python 3 および pip3 の呼び出し

前回までの節で、異なるオペレーティングシステム上で Python 3 と pip を呼び出すために、異なるコマンドを使用していることに注意してください。

Python 2 ではなく Python 3 しかインストールしていない場合、`python` と `pip` というベアコマンドを使用することで、どのオペレーティングシステムでも Python と pip を実行することができます。
お使いのシステムでこの動作が許可されている場合、表示されているように `-V` をベアコマンドで実行すると、バージョン "3" の文字列が得られます。

```bash
python -V
pip -V
```

Python 2 がインストールされている場合、バージョン 3 を使用しましょう。Linux/macOS ではコマンドの接頭辞に `python3` と `pip3` を、Windows では `py -3` と `py -3 -m pip` を付けてください。

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

下記の説明では、より多くのシステムで動作するように、プラットフォーム固有のコマンドを表示しています。

## Python 仮想環境内での Django の使用

仮想環境を作成するために使用するライブラリーは、[virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) （Linux と macOS X）と [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/)（Windows）です。これらはどちらも [virtualenv](https://virtualenv.pypa.io/en/latest/) ツールを使用します。ラッパーツールは、すべてのプラットフォーム上のインターフェイスを管理するための一貫したインターフェイスを作成します。

### 仮想環境ソフトウェアのインストール

#### Ubuntu 仮想環境のセットアップ

Python と pip をインストールした後、virtualenvwrapper（virtualenv を含む）をインストールできます。公式インストールガイドは[こちら](http://virtualenvwrapper.readthedocs.io/en/latest/install.html)、または下記の手順に従ってください。

pip3 を使用してツールをインストールします。

```bash
sudo pip3 install virtualenvwrapper
```

次に、シェルのスタートアップファイルの最後に次の行を追加します（これはホームディレクトリー内の **.bashrc** という名前の隠しファイルです）。これらは、仮想環境の存在場所、開発プロジェクトディレクトリーの場所、およびこのパッケージと共にインストールされるスクリプトの場所を設定します:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> `VIRTUALENVWRAPPER_PYTHON` および `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` 変数は、Python 3 の通常のインストール場所を指し、`source /usr/local/bin/virtualenvwrapper.sh` は `virtualenvwrapper.sh` スクリプトの通常の場所を指します。テスト時に virtualenv が動作しない場合は、Python とスクリプトが予想される場所にあることを確認してから、起動ファイルを適切に変更してください。
>
> システムでの正しい場所は、`which virtualenvwrapper.sh` と `which python3` というコマンドを使って見つけることができます。

次に、ターミナルで次のコマンドを実行してスタートアップファイルをリロードします。

```bash
source ~/.bashrc
```

この時点で、以下に示すように一連のスクリプトが実行されているはずです。

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

これで、`mkvirtualenv` コマンドを使用して新しい仮想環境を作成できます。

#### macOS 仮想環境のセットアップ

macOS での virtualenvwrapper のセットアップは、Ubuntu の場合とほぼ同じです（[オフィシャルインストールガイド](https://virtualenvwrapper.readthedocs.io/en/latest/install.html)またはそれ以下の指示に従います）。

次に示すように pip を使用して virtualenvwrapper（および virtualenv をバンドル）をインストールします。

```bash
sudo pip3 install virtualenvwrapper
```

以下の行をシェルの起動ファイルの終わりに追加します（Ubuntu と同じ行です）。
_zsh shell_ を使用している場合、起動ファイルはホームディレクトリーの **.zshrc** という名前の隠しファイルになります。 _bash shell_ を使用している場合は、**.bash_profile** という名前の隠しファイルになります。ファイルが存在しない場合は作成する必要があるかもしれません。

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> `VIRTUALENVWRAPPER_PYTHON` 変数は Python 3 の通常のインストール場所を指し、`source /usr/local/bin/virtualenvwrapper.sh` は `virtualenvwrapper.sh` スクリプトの通常の場所を指しています。テスト時に virtualenv が動作しない場合は、 Python とスクリプトが予想される場所にあることを確認してから、起動ファイルを適切に変更してください。
>
> たとえば、macOS での 1 つのインストールテストでは、スタートアップファイルに次の行が必要になりました:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> システムでの正しい場所は、`which virtualenvwrapper.sh` と `which python3` というコマンドを使って見つけることができます。

次に、端末で以下のように呼び出して起動ファイルを再読み込みします。

```bash
source ~/.bash_profile
```

この時点で、たくさんのスクリプトが実行されているのが見えるかもしれません（Ubuntu のインストールと同じスクリプトです）。これで `mkvirtualenv` コマンドを使って新しい仮想環境を作成することができるはずです。

> [!NOTE]
> ファインダーで編集する起動ファイルが見つからない場合は、端末で nano を使用して開くこともできます。
>
> bash を使用していると想定すると、コマンドは以下のようになります。
>
> ```bash
> cd ~  # Navigate to my home directory
> ls -la #List the content of the directory. You should see .bash_profile
> nano .bash_profile # Open the file in the nano text editor, within the terminal
> # Scroll to the end of the file, and copy in the lines above
> # Use Ctrl+X to exit nano, choose Y to save the file.
> ```

#### Windows の仮想環境のセットアップ

[virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) のインストールは、仮想環境情報を保存する場所（既定値があります）を設定する必要がないため、virtualenvwrapper を設定するより簡単です。コマンドプロンプトで次のコマンドを実行するだけです。

```bash
py -3 -m pip install virtualenvwrapper-win
```

これで、`mkvirtualenv` コマンドで新しい仮想環境を作成できます。

### 仮想環境の作成

virtualenvwrapper または virtualenvwrapper-win をインストールすると、仮想環境での作業はすべてのプラットフォームでほとんど同様になります。

これで `mkvirtualenv` コマンドを使って新しい仮想環境を作成することができます。このコマンドを実行すると、環境が設定されるのがわかります（表示される内容はややプラットフォームに依存するものです）。コマンドが完全に終了すると、新しい仮想環境がアクティブになります。プロンプトの始めには括弧で囲まれた環境名が表示されるので、これを見ることができます（下記は Ubuntu の場合を示していますが、最後の行は Windows/macOS でも同様です）。

```bash
mkvirtualenv my_django_environment
```

以下のような出力が表示されるはずです。

```plain
Running virtualenv with interpreter /usr/bin/python3
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

これで、Django をインストールして開発を開始できる仮想環境の中に入りました。

> [!NOTE]
> これ以降、この記事（と実際にはモジュール）では、上でセットアップしたような Python 仮想環境内でコマンドが実行されると仮定してください。

### 仮想環境の使用

他にも知っておくべき便利なコマンドがいくつかあります（ツールのドキュメントには多くのものがありますが、これらはいつも使用するコマンドです）。

- `deactivate` — 現在の Python 仮想環境を終了します
- `workon` — 利用可能な仮想環境を一覧表示します
- `workon name_of_environment` — 指定した Python 仮想環境を有効にします
- `rmvirtualenv name_of_environment` — 指定された環境を削除します

## Django のインストール

仮想環境を作成し、`workon`でその環境に入ってから、pip3 を使用して Django をインストールできます。

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Django がインストールされていることをテストするには、次のコマンドを実行します（Python が Django モジュールを見つけることができます）。

```bash
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

> [!NOTE]
> 上記の Windows コマンドで django モジュールが存在すると表示されない場合は、次のようにしてみてください。
>
> ```bash
> py -m django --version
> ```
>
> Windows の _Python 3_ スクリプトは、コマンドの接頭辞に `py -3` を付けることで起動しますが、これは固有のインストールによって異なる場合があります。
> コマンドに問題がある場合は `-3` 修飾子を除外してみてください。
> Linux/macOS では、コマンドは `python3` です。

> [!WARNING]
> このモジュールの残りの部分は、 Python 3 (`python3`) を呼び出すために Linux コマンドを使用します。Windows で作業している場合は、単にこの接頭辞を`py -3`に置き換えてください。

## Git および GitHub によるソースコード管理

ソースコード管理 (SCM) とバージョン管理ツールを使用すると、ソースコードのバージョンを確実に格納し、復元することができます。また、変更を試し、必要なときに実験コードと「既知の良いコード」の間でコードを共有することができます。

SCM ツールには、git、Mercurial、Perforce、SVN (Subversion)、CVS (Concurrent Versions System) など多くの種類があり、Bitbucket、GitHub、GitLab のようなクラウド SCM ホストもあります。
このチュートリアルでは、最も人気のあるクラウドベースのソースコードホスティングサービスの一つである [GitHub](https://github.com/) でコードをホストし、 **git** ツールを使用してソースコードをローカルで管理し、必要に応じて GitHub に送信します。

> [!NOTE]
> SCM ツールを使用することは、良いソフトウェア開発の活動です。
> この説明では、git と GitHub の基本的な使い方を提供します。
> 詳しくは [Learning Git](https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources) をご覧ください。

### 主要概念

Git（と GitHub）は、コードを格納する最上位の「バケツ」としてリポジトリー ("repos") を使用します。リポジトリーには通常、1 つのアプリケーションやモジュールのソースコードが格納されています。
リポジトリーには、コードがインターネット上のすべての人に公開されるパブリックなものと、自分自身で所有する組織やユーザーアカウントに制限されるプライベートなものがあります。

すべての作業は、リポジトリー内のコードの特定の「ブランチ」に対して行われます。
ブランチへの変更をバックアップしたい場合は、「コミット」を作成します。「コミット」は、現在のブランチへの最後のコミット以降のすべての変更を格納します。

このリポジトリーは、"main" という名前の既定ブランチで作成されます。git を使用すると、このブランチから他にもブランチを作成することができます。
コミットを追加してブランチを個別に進化させ、後で GitHub で "Pull Request" (PR) を使用してブランチの変更を別のブランチにマージすることができます。
また、例えば異なることを試すために、git を使用してローカルコンピューター上でブランチを切り替えることもできます。

ブランチに加えて、任意のブランチに `tags` を作成し、後でこの点のブランチをリカバリーすることも可能です。

### GitHub でアカウントとリポジトリーを作成

最初に GitHub で無料アカウントを作成します。
無料アカウントではプライベートリポジトリーを作成することはできませんが、_public_ リポジトリー ("repos") を好きなだけ作成することができます。
次に、このチュートリアルの残りの部分で進化させる [ローカルライブラリーウェブサイト](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) を格納するために "django_local_library" という名前のリポジトリーを作成し、構成可能な状態にします。

手順は次の通りです。

1. <https://github.com/> にアクセスし、アカウントを作成してください。
2. ログインしたら、上のツールバーの **+** リンクをクリックし、**New repository** を選択します。
3. このフォームのフィールドをすべて埋めてください。
   これらは必須ではありませんが、強く推奨します。
   - リポジトリーの名前を"django_local_library" と入力します。
   - 新しいリポジトリーの説明を "Local Library website written in Django" と入力します。
   - リポジトリーは "Public" を選択します (既定)。

     > [!WARNING]
     > この設定により、すべてのソースコードが見えるようになります。
     > 非公開でない限り、資格情報や他にも機密性の高い素材をリポジトリーに格納しないようにしてください。

   - _Add .gitignore_ の選択リストで **Python** が選べます。
   - _Add license_ 選択リストで推奨するライセンスを選んでください。
     MDN はこの例で "Creative Commons Zero v1.0 Universal" を使用しています。
   - **Initialize this repository with a README** をチェックします。

4. **Create repository** を押します。

   リポジトリが作成され、`README.txt`と`.gitignore`ファイルだけが格納されます。

### リポジトリーをコンピューターにクローンする

これで GitHub でリポジトリー ("repo") が作成されたので、それをコンピューターに複製します。

1. GitHubで、緑の **Code** ボタンをクリックします。
   "Clone" の節で、"HTTPS" タブを選択し、URL をコピーしてください。
   リポジトリー名 "django_local_library" を使用した場合、URL は `https://github.com/<git\_ユーザー\_id>/django_local_library.git` のようになります。

2. コンピューターに _git_ をインストールしてください（さまざまなプラットフォーム用のバージョンは[ここ](https://git-scm.com/downloads)で探すことができます）。
3. コマンドプロンプト/端末を開き、上記でコピーした URL を使用してリポジトリーをクローンしてください。

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   これでカレントディレクトリー内にリポジトリーが作成されます。

4. repo フォルダー内に移動します。

   ```bash
   cd django_local_library
   ```

### 変更して変更を同期

これで、ローカルコンピューターの `.gitignore` ファイルを変更して変更をコミットし、GitHub でリポジトリーを更新することになります。
これは有益な変更ですが、主に GitHub から変更を取得してローカルで変更し、それを GitHub にプッシュする方法を示すために使用しています。

1. コマンドプロンプト/端末で、最初に GitHub から最新バージョンのソースを「フェッチ」（取得）し、次にプル（取得し、現在のブランチにマージ）します。

   > [!NOTE]
   > この段階は、ソースをクローンしたばかりで、それが最新であることがわかるので、厳密には必要ではありません。
   > しかし一般的には、変更を加える前に GitHub からソースを更新する必要があります。

   ```bash
   git fetch origin main
   git pull origin main
   ```

   "origin" は _remote_ で、ソースのあるリポジトリーの場所を表し、 "main" はブランチです。
   origin が GitHub で自分のリポジトリーであることは、コマンドを使用して確認することができます。 `git remote -v` を実行してください。

2. 次に、変更を格納するために新しいブランチをチェックアウトします。

   ```bash
   git checkout -b update_gitignore
   ```

   `checkout` コマンドは、あるブランチを現在作業しているブランチに切り替えるために使用します。
   `-b` フラグは、"update_gitignore" という名前の既存のブランチを選択するのではなく、新しいブランチを作成することを意図していることを示します。

3. **.gitignore** ファイルを開き、以下の行をコピーして保存してください。

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   `.gitignore` は、一時ファイルや他にもビルドの成果物など、 git が自動的にバックアップしないファイルを示すために使用します。

4. `add` コマンドを使用して、変更されたファイル（**.gitignore** ファイルで無視されないもの）をすべて現在のブランチの「ステージング領域」に追加します。

   ```bash
   git add -A
   ```

5. `status` コマンドを使用して、`commit` しようとしているファイルがすべて正しいかどうかを調べます（バイナリや一時ファイルなどではなく、ソースファイルを記載したいからです）。
   下記の一覧のように見ていってください。

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. 満足したら、 `-m` フラグを使用して、簡潔でわかりやすいコミットメッセージを指定します。
   これは、変更を承認し、ローカルリポジトリーの公式な一部とすることに相当します。

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. この時点では、リモートリポジトリーは変更されていません。
   update_gitignore` ブランチを "origin" リポジトリー (GitHub) にプッシュするには、以下のコマンドを使用します。

   ```bash
   git push origin update_gitignore
   ```

8. GitHub でリポジトリーを作成したページに戻り、ページを更新します。

   先ほどアップロードしたブランチを比較してプルリクエストする ("Compare and pull request") 場合は、ボタンを押すバナーが現れるはずです。
   ボタンを選択し、指示に従ってプルリクエストを作成し、マージしてください。

   ![ユーザーが最近のブランチの更新を比較してマージしたいかどうか尋ねるバナー](github_compare_and_pull_banner.png)

   マージ後、GitHub で公開されているリポジトリーの "main" ブランチには、変更した内容が `.gitignore` に含まれています。

9. この追加/コミット/プッシュのサイクルを用いて、ファイルの変更に合わせてローカルリポジトリ－を更新し続けることができます。

次のトピックでは、ライブラリーウェブサイトのソースコードを格納するためにこのリポジトリーを使用します。

## その他の Python のツール

経験豊富な Python 開発者であれば、リンター（コード中の一般的なエラーの検出を手伝うもの）などの追加ツールをインストールすることもできます。

[pylint-django](https://pypi.org/project/pylint-django/) のような Django 対応のリンターを使用しましょう。一般的な Python リンター (`pylint` など) の中には、Django 用に生成された標準ファイルのエラーを誤って報告するものがあるからです。

## インストールのテスト

上記のテストはうまくいきますが、それほど楽しいことではありません。より面白いテストは、スケルトンプロジェクトを作成し、それが動作することを確認することです。これを行うには、コマンドプロンプト/ターミナルで Django アプリケーションを保存する場所に移動します。テストサイト用のフォルダーを作成し、そのサイトに移動します。

```bash
mkdir django_test
cd django_test
```

次に示すように、**django-admin** ツールを使用して、"mytestsite" という新しいスケルトンサイトを作成します。サイトを作成したら、**manage.py** というプロジェクト管理用のメインスクリプトがあるフォルダーに移動します。

```bash
django-admin startproject mytestsite
cd mytestsite
```

次に示すように**manage.py** と `runserver` コマンドを使用して、このフォルダー内から開発用ウェブサーバーを実行できます。

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> この時点では、 "unapplied migration(s)" という警告は無視できます。

サーバーが稼働したら、ローカルウェブブラウザーで `http://127.0.0.1:8000/` という URL に移動して、サイトを表示できます。次のようなサイトが表示されます。

![The home page of the skeleton Django app](django_skeleton_app_homepage_django_4_0.png)

## まとめ

Django 開発環境をあなたのコンピューター上で稼働できるようになりました。

テストのセクションでは、`django-admin startproject`を使用して新しい Django ウェブサイトを作成する方法と、開発用ウェブサーバー (`python3 manage.py runserver`) を使用してブラウザーで実行する方法についても簡単に説明しました。次の記事では、このプロセスを拡張して、シンプルで完全なウェブアプリケーションを構築します。

## 関連情報

- [Quick Install Guide](https://docs.djangoproject.com/en/5.0/intro/install/) （Django ドキュメント）
- [How to install Django — Complete guide](https://docs.djangoproject.com/en/5.0/topics/install/) （Django ドキュメント） - Django を削除する方法ついての情報が含まれています
- [How to install Django on Windows](https://docs.djangoproject.com/en/5.0/howto/windows/) （Django ドキュメント）

{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}
