---
title: Django 開発環境の設定
slug: Learn/Server-side/Django/development_environment
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}

Django がどういうものか知ったので、Windows、Linux（Ubuntu）、および macOS で Django 開発環境をセットアップしてテストする方法を説明します。一般的なオペレーティングシステムを使っていれば、Django アプリケーションの開発を始められます。

| 前提条件: | ターミナル/コマンドラインを開く方法を知っていること。開発用コンピュータのオペレーティングシステムにソフトウェアパッケージをインストールする方法を知っていること。 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | あなたのコンピュータで Django(2.0)の開発環境を動かします。                                                                                                        |

## Django 開発環境の概要

Django は自分のコンピュータをセットアップするのはとても簡単で、Web アプリケーションの開発を開始できます。このセクションでは、開発環境の内容を説明し、セットアップおよび構成オプションの一部の概要を示します。また、Ubuntu、macOS X、Windows に Django 開発環境をインストールする際の推奨される方法と、そのテスト方法について説明します。

### Django 開発環境とは何ですか？

開発環境は Django をローカルコンピュータにインストールしたものです。Django アプリを開発し、運用環境にデプロイする前にテストできます。

Django 自体が提供する主なツールは、Django プロジェクトを作成して作業するための Python スクリプトと、ローカルの（つまり、外部の Web サーバーではなく）Django Web アプリケーションをあなたのコンピュータ上のウェブブラウザーでテストするための簡単な開発用 Web サーバーです。

開発環境の一部を構成する他の周辺ツールがありますが、ここではカバーしません。これには、コードを編集するための[テキストエディタ](/jadocs/Learn/Common_questions/Available_text_editors)や IDE、コードの異なるバージョンを安全に管理するための[Git](https://git-scm.com/)のようなソース管理ツールなどがあります。すでにテキストエディタがインストールされていると仮定しています。

### Django の構成オプションとは?

Django は、インストール場所と設定の方法に関して非常に柔軟性があります。Django は次のようなことが可能です:

- 異なるオペレーティングシステムへのインストール
- ソースコード、Python パッケージインデックス（PyPi）、および多くの場合ホストコンピュータのパッケージマネージャアプリケーションからのインストール
- いくつかのデータベースのうち 1 つを使用するように構成したり、個別にインストールして構成する必要がある場合もあります。
- メインシステムの Python 環境または分離した Python 仮想環境で実行します。

これらのオプションは、それぞれわずかに異なる構成とセットアップを必要とします。以下のサブセクションでは、いくつかの選択肢について説明します。この記事の残りの部分では、いくつかオペレーティングシステムに Django をセットアップする方法を説明します。このモジュールの残りの部分は、セットアップが済んでいる想定です。

> **メモ:** その他のインストールオプションについては、Django の公式ドキュメントでカバーされています。[下記で適切なドキュメントにリンクしています。](#furtherreading)

#### どのオペレーティングシステムがサポートされていますか？

Django の Web アプリケーションは、Python 3 プログラミング言語を実行できるほとんどすべてのマシン（Windows、MacOS X、Linux / Unix、Solaris など）で実行できます。ほとんどのコンピュータで開発中に Django を実行できるパフォーマンスが必要です。

この記事では、Windows、macOS X、および Linux/Unix について説明します。

#### どのバージョンの Python を使うべきですか？

最新のバージョンを使用することをお勧めします - 執筆時点では Python 3.6 です。

必要であれば Python 3.4 以上を使用できます（Python 3.4 のサポートは将来のリリースでは廃止される予定です）。

> **メモ:** Python 2.7 は Django 2.0 では使用できません（Django 1.11.x 系は Python 2.7 をサポートする最後のバージョンです）。

#### どこで Django をダウンロードできますか？

Django をダウンロードする場所は 3 つあります:

- pip を使用して Python パッケージリポジトリ（PyPi）から。 これは、Django の最新の安定版を入手するための最良の方法です。
- コンピュータのパッケージマネージャのバージョンを使用します。 オペレーティングシステムにバンドルされている Django のディストリビューションは、使い慣れたインストールメカニズムを提供します。 ただし、パッケージ化されたバージョンはかなり古く、システムの Python 環境にのみインストールできます（これはあなたが望むものではないかもしれません）。
- ソースからインストールします。 Django の開発版を入手してソースからインストールできます。 これは初心者にはお勧めできませんが、Django 自身に貢献する準備ができたら必要です。

この記事では PyPi から Django をインストールし、最新の安定版を入手する方法を説明します。

#### どのデータベースですか？

Django は 4 つの主要なデータベース（PostgreSQL、MySQL、Oracle、SQLite）をサポートしています。また、他の一般的な SQL データベースや NOSQL データベースにさまざまなレベルのサポートを提供するコミュニティライブラリもあります。 Django は Object-Relational Mapper（ORM）を使用して多くのデータベースの違いを抽象化していますが、[回避する方が良い潜在的な問題](https://docs.djangoproject.com/en/2.0/ref/databases/)がまだあります。

この記事（とこのモジュールのほとんど）では、データをファイルに保存する SQLite データベースを使用します。 SQLite は軽量データベースとしての使用を目的としており、高度な並行性はサポートできません。 ただし、主に読み取り専用のアプリケーションには最適です。

> **メモ:** Django は、標準ツール（django-admin）を使用して Web サイトプロジェクトを開始するときに、デフォルトで SQLite を使用するように設定されています。 これは、追加の設定やセットアップが不要なため、入門には最適な選択です。

#### システム全体または Python の仮想環境にインストールするには？

Python3 をインストールすると、すべての Python3 コードで共有される単一のグローバル環境が得られます。 環境に好きな Python パッケージをインストールすることはできますが、一度に 1 つのパッケージしかインストールできません。

> **メモ:** グローバル環境にインストールされた Python アプリケーションは、お互いに衝突する可能性があります（例えば、同じパッケージの異なるバージョンに依存する場合）。

Django をデフォルト/グローバル環境にインストールすると、コンピュータ上で Django の 1 つのバージョンのみを対象にできます。 古いバージョンに依存している Web サイトを維持しながら、新しい Web サイト（Django の最新バージョンを使用）を作成したい場合、これは問題になる可能性があります。

その結果、経験豊富な Python/Django 開発者は通常、独立した Python 仮想環境内で Python アプリケーションを実行します。これにより、1 台のコンピュータ上で複数の異なる Django 環境を使用することができます。Django の開発チームは、Python の仮想環境を使用することをお勧めしています。

このモジュールは以下に示す方法で、仮想環境に Django をインストールすることを前提としています。

## Python 3 のインストール

Django を使用するには、オペレーティングシステムに Python をインストールする必要があります。Python 3 を使用している場合は、Django とその他の Python アプリケーションで使用される Python パッケージ/ライブラリの管理（インストール、更新、削除）に使用する [Python Package Index](https://pypi.python.org/pypi)ツール『pip3』も必要です。

このセクションでは、Ubuntu Linux 16.04、macOS X、および Windows 10 の Python のバージョンを確認し、必要に応じて新しいバージョンをインストールする方法を簡単に説明します。

> **メモ:** 使用しているプラットフォームによっては、オペレーティングシステム独自のパッケージマネージャやその他のメカニズムを使って Python/pip をインストールできます。ほとんどのプラットフォームでは、 <https://www.python.org/downloads/> から必要なインストールファイルをダウンロードし、適切なプラットフォーム固有の方法を使用してインストールできます。

### Ubuntu 16.04

Ubuntu Linux 16.04 LTS にはデフォルトで Python 3.5.2 が含まれています。 これを確認するには、bash 端末で次のコマンドを実行します:

```bash
python3 -V
 Python 3.5.2
```

しかし、Python 3（Django を含む）用のパッケージをインストールするために必要な Python Package Index ツールは、デフォルトでは利用できません。 次のコマンドを使用して bash 端末に pip3 をインストールできます:

```bash
sudo apt-get install python3-pip
```

### macOS X

macOS X "El Capitan"やその他の最近のバージョンには Python 3 は含まれていません。これは bash 端末で次のコマンドを実行することで確認できます:

```bash
python3 -V
 -bash: python3: command not found
```

[python.org](https://www.python.org/)の Python 3（pip3 ツールと一緒に）を簡単にインストールできます:

1. 必要なインストーラをダウンロードします:

   1. <https://www.python.org/downloads/> を開きます
   2. **Download Python 3.6.4** ボタンを選択します（正確なマイナーバージョン番号は異なる場合があります）。

2. Finder を使用してファイルを探し、パッケージファイルをダブルクリックします。インストールの後、プロンプトが表示されます。

以下に示すように、Python 3 を確認することで、正常にインストールされたことを確認できます:

```bash
python3 -V
 Python 3.6.4
```

同様に pip3 がインストールされていることを確認するには、利用可能なパッケージを一覧表示します:

```bash
pip3 list
```

### Windows 10

Windows にはデフォルトで Python は含まれていませんが、[python.org](https://www.python.org/)から pip3 ツールと一緒に簡単にインストールできます:

1. 必要なインストーラをダウンロードします:

   1. <https://www.python.org/downloads/> を開きます
   2. **Download Python 3.6.4** ボタンを選択します（正確なマイナーバージョン番号は異なる場合があります）。

2. ダウンロードしたファイルをダブルクリックし、インストールのプロンプトに従って Python をインストールします。

Python 3 がインストールされたことを確認するには、コマンドプロンプトに次のテキストを入力します:

```bash
py -3 -V
 Python 3.6.4
```

Windows インストーラには、デフォルトで pip3（Python パッケージマネージャ）が組み込まれています。次に示すようにインストールされたパッケージを一覧表示できます:

```bash
pip3 list
```

> **メモ:** インストーラは、上記のコマンドが動作するために必要なものすべてをセットアップする必要があります。Python が見つからないというメッセージが表示された場合は、システムパスに追加する必要があります。

## Python 仮想環境内での Django の使用

仮想環境を作成するために使用するライブラリは、 [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) （Linux と macOS X）と[virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win)（Windows）です。これらはどちらも[virtualenv](/ja/docs/Python/Virtualenv)ツールを使用します。ラッパーツールは、すべてのプラットフォーム上のインターフェイスを管理するための一貫したインターフェイスを作成します。

### 仮想環境ソフトウェアのインストール

#### Ubuntu 仮想環境のセットアップ

Python と pip をインストールした後、virtualenvwrapper（virtualenv を含む）をインストールできます。公式インストールガイドは[こちら](http://virtualenvwrapper.readthedocs.io/en/latest/install.html)、または下記の手順に従ってください。

pip3 を使用してツールをインストールします:

```
sudo pip3 install virtualenvwrapper
```

次に、シェルのスタートアップファイルの最後に次の行を追加します（これはホームディレクトリー内の **.bashrc** という名前の隠しファイルです）。これらは、仮想環境の存在場所、開発プロジェクトディレクトリーの場所、およびこのパッケージと共にインストールされるスクリプトの場所を設定します:

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> **メモ:** `VIRTUALENVWRAPPER_PYTHON`および`VIRTUALENVWRAPPER_VIRTUALENV_ARGS`変数は、Python3 の通常のインストール場所を指し、`source /usr/local/bin/virtualenvwrapper.sh`は`virtualenvwrapper.sh` スクリプトの通常の場所を指します。テスト時に virtualenv が動作しない場合は、Python とスクリプトが予想される場所にあることを確認してから、起動ファイルを適切に変更してください。
>
> あなたのシステムでの正しい場所は、`which virtualenvwrapper.sh`と`which python3`というコマンドを使って見つけることができます。

次に、ターミナルで次のコマンドを実行してスタートアップファイルをリロードします:

```
source ~/.bashrc
```

この時点で、以下に示すように一連のスクリプトが実行されているはずです:

```
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
...
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

これで、`mkvirtualenv`コマンドを使用して新しい仮想環境を作成できます。

#### macOS X 仮想環境のセットアップ

macOS X での virtualenvwrapper のセットアップは、Ubuntu の場合とほぼ同じです（[オフィシャルインストールガイド](http://virtualenvwrapper.readthedocs.io/en/latest/install.html)またはそれ以下の指示に従います）。

次に示すように pip を使用して virtualenvwrapper（および virtualenv をバンドル）をインストールします。

```
sudo pip3 install virtualenvwrapper
```

次に、シェルスタートアップファイルの最後に次の行を追加します。

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> **メモ:** `VIRTUALENVWRAPPER_PYTHON`変数は Python3 の通常のインストール場所を指し、`source /usr/local/bin/virtualenvwrapper.sh`は`virtualenvwrapper.sh`スクリプトの通常の場所を指しています。テスト時に virtualenv が動作しない場合は、Python とスクリプトが予想される場所にあることを確認してから、起動ファイルを適切に変更してください。
>
> たとえば、macOS での 1 つのインストールテストでは、スタートアップファイルに次の行が必要になりました:
>
> ```
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> あなたのシステムでの正しい場所は、`which virtualenvwrapper.sh`と`which python3`というコマンドを使って見つけることができます。

これらは Ubuntu の場合と同じ行ですが、スタートアップファイルはホームディレクトリー内で **.bash_profile** という別の名前の隠しファイルです。

> **メモ:** 編集する**.bash-profile**が Finder で見つからない場合は、ターミナルで nano を使用して開くこともできます。
>
> コマンドは次のようになります:
>
> ```
> cd ~  # Navigate to my home directory
> ls -la #List the content of the directory. YOu should see .bash_profile
> nano .bash_profile # Open the file in the nano text editor, within the terminal
> # Scroll to the end of the file, and copy in the lines above
> # Use Ctrl+X to exit nano, Choose Y to save the file.
> ```

ターミナルで次の呼び出しを行うことによって、スタートアップファイルをリロードします:

```bash
source ~/.bash_profile
```

この時点で、たくさんのスクリプトが実行されているのを見ることができます（Ubuntu のインストールと同じスクリプト）。`mkvirtualenv`コマンドを使用して新しい仮想環境を作成できるようになりました。

#### Windows 10 仮想環境のセットアップ

[virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win)のインストールは、仮想環境情報を保存する場所（デフォルト値があります）を設定する必要がないため、virtualenvwrapper を設定するより簡単です。コマンドプロンプトで次のコマンドを実行するだけです:

```
pip3 install virtualenvwrapper-win
```

これで、`mkvirtualenv`コマンドで新しい仮想環境を作成できます。

### 仮想環境の作成

virtualenvwrapper または virtualenvwrapper-win をインストールすると、仮想環境での作業はすべてのプラットフォームでほとんど同様になります。

`mkvirtualenv` コマンドを使用して新しい仮想環境を作成できます。このコマンドが実行されると、セットアップされる環境が表示されます（表示されるのはプラットフォーム固有のものです）。コマンドが完了すると、新しい仮想環境がアクティブになります。これは、プロンプトの開始が環境の名前（下に示すように）になるので、確認できます。

```
$ mkvirtualenv my_django_environment

Running virtualenv with interpreter /usr/bin/python3
...
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

これで、Django をインストールして開発を開始できる仮想環境の中に入りました。

> **メモ:** これ以降、この記事（と実際にはモジュール）では、上でセットアップしたような Python 仮想環境内でコマンドが実行されると仮定してください。

### 仮想環境の使用

他にも知っておくべき便利なコマンドがいくつかあります（ツールのドキュメントには多くのものがありますが、これらはいつも使用するコマンドです）:

- `deactivate` — 現在の Python 仮想環境を終了します
- `workon` — 利用可能な仮想環境を一覧表示します
- `workon name_of_environment` — 指定した Python 仮想環境を有効にします
- `rmvirtualenv name_of_environment` — 指定された環境を削除します

## Django のインストール

仮想環境を作成し、`workon`でその環境に入ってから、pip3 を使用して Django をインストールできます。

```bash
pip3 install django
```

Django がインストールされていることをテストするには、次のコマンドを実行します（Python が Django モジュールを見つけることができます）:

```bash
# Linux/macOS X
python3 -m django --version
 2.0

# Windows
py -3 -m django --version
 2.0
```

> **メモ:** Windows では`py -3`コマンドをプレフィックスにして Python 3 スクリプトを起動し、Linux/macOS X では `python3`を実行します。

> **警告:** このモジュールの残りの部分は、 Python 3 (`python3`) を呼び出すために Linux コマンドを使用します。Windows で作業している場合は、単にこの接頭辞を`py -3`に置き換えてください。

## インストールのテスト

上記のテストはうまくいきますが、それほど楽しいことではありません。より面白いテストは、スケルトンプロジェクトを作成し、それが動作することを確認することです。これを行うには、コマンドプロンプト/ターミナルで Django アプリケーションを保存する場所に移動します。テストサイト用のフォルダを作成し、そのサイトに移動します。

```bash
mkdir django_test
cd django_test
```

次に示すように、**django-admin**ツールを使用して、 "mytestsite"という新しいスケルトンサイトを作成します。サイトを作成したら、**manage.py**というプロジェクト管理用のメインスクリプトがあるフォルダに移動します。

```bash
django-admin startproject mytestsite
cd mytestsite
```

次に示すように**manage.py**と`runserver`コマンドを使用して、このフォルダ内から開発用 Web サーバーを実行できます。

```bash
$ python3 manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).

You have 14 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.

December 29, 2017 - 03:03:47
Django version 2.0, using settings 'mytestsite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

> **メモ:** 上記のコマンドは、Linux/macOS X コマンドを示しています。この時点では、 "14 unapplied migration(s)" という警告は無視できます！

サーバーが稼働したら、ローカル Web ブラウザーで `http://127.0.0.1:8000/` という URL に移動して、サイトを表示できます。次のようなサイトが表示されます:

![Django Skeleton App Homepage](Django_Skeleton_Website_Homepage.png)

## 要約

Django 開発環境をあなたのコンピュータ上で稼働できるようになりました。

テストのセクションでは、`django-admin startproject`を使用して新しい Django Web サイトを作成する方法と、開発用 Web サーバー（`python3 manage.py runserver`）を使用してブラウザーで実行する方法についても簡単に説明しました。次の記事では、このプロセスを拡張して、シンプルで完全な Web アプリケーションを構築します。

## 参考文献

- [Quick Install Guide](https://docs.djangoproject.com/en/2.0/intro/install/) （Django ドキュメント）
- [How to install Django — Complete guide](https://docs.djangoproject.com/en/2.0/topics/install/) （Django ドキュメント） - Django を削除する方法ついての情報が含まれています
- [How to install Django on Windows](https://docs.djangoproject.com/en/2.0/howto/windows/) （Django ドキュメント）

{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}
