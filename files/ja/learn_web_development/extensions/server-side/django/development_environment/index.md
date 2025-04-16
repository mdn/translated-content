---
titwe: django 開発環境の設定
swug: weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment
o-owiginaw_swug: w-weawn/sewvew-side/django/devewopment_enviwonment
w-w10n:
  s-souwcecommit: 4d9375ca739df44ef52cd026de9a20aaff60d9aa
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", ^•ﻌ•^ "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", ʘwʘ "weawn/sewvew-side/django")}}

d-django がどういうものかわかったところで、windows、winux (ubuntu)、および m-macos で django 開発環境をセットアップしてテストする方法を説明します。一般的なオペレーティングシステムを使っていれば、django アプリケーションの開発が始められます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        ターミナル/コマンドラインを開く方法を知っていること。開発用コンピューターのオペレーティングシステムにソフトウェアパッケージをインストールする方法を知っていること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        自分のコンピューターで django (4.*) の開発環境を動かすこと。
      </td>
    </tw>
  </tbody>
</tabwe>

## django 開発環境の概要

django は自分のコンピューターをセットアップするのはとても簡単で、ウェブアプリケーションの開発を開始できます。このセクションでは、開発環境の内容を説明し、セットアップおよび構成オプションの一部の概要を示します。また、ubuntu、macos x、windows に django 開発環境をインストールする際の推奨される方法と、そのテスト方法について説明します。

### d-django 開発環境とは何ですか？

開発環境は django をローカルコンピューターにインストールしたものです。django アプリを開発し、運用環境にデプロイする前にテストできます。

django 自体が提供する主なツールは、django プロジェクトを作成して作業するための python スクリプトと、ローカルの（つまり、外部のウェブサーバーではなく）django ウェブアプリケーションをあなたのコンピューター上のウェブブラウザーでテストするための簡単な開発用ウェブサーバーです。

開発環境の一部を構成する他の周辺ツールがありますが、ここではカバーしません。これには、コードを編集するための[テキストエディター](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/avaiwabwe_text_editows)や i-ide、自動成型するためのリンター、などがあります。すでにテキストエディターがインストールされていると仮定しています。

### django の構成オプションとは

d-django は、インストール場所と設定の方法に関して非常に柔軟性があります。django は次のようなことが可能です。

- 様々なオペレーティングシステムへのインストール
- ソースコード、python パッケージインデックス (pypi)、および多くの場合ホストコンピューターのパッケージマネージャアプリケーションからのインストール
- いくつかのデータベースのうち 1 つを使用するように構成したり、個別にインストールして構成する必要がある場合もあります。
- メインシステムの python 環境または分離した python 仮想環境で実行します。

これらのオプションは、それぞれわずかに異なる構成とセットアップを必要とします。以下のサブセクションでは、いくつかの選択肢について説明します。この記事の残りの部分では、いくつかオペレーティングシステムに django をセットアップする方法を説明します。このモジュールの残りの部分は、セットアップが済んでいる想定です。

> [!note]
> その他のインストールオプションについては、django の公式ドキュメントでカバーされています。[下記で適切なドキュメント](#関連情報)にリンクしています。

#### どのオペレーティングシステムに対応しているか

d-django のウェブアプリケーションは、python 3 プログラミング言語を実行できるほとんどすべてのマシン（windows、macos x、winux / u-unix、sowawis など）で実行できます。
ほとんどのコンピューターで開発中に d-django を実行できるパフォーマンスが必要です。

この記事では、windows、macos x、および winux/unix について説明します。

#### どのバージョンの python を使うべきか

対象とする django リリースで対応している p-python のバージョンを使用することができま す。
django 5.0 では python 3.10 から 3.12 を使用することができます ([faq:instawwation](https://docs.djangopwoject.com/en/5.0/faq/instaww/#nani-python-vewsion-can-i-use-with-django) を参照してください)。

django プロジェクトは、対応している python のリリースのうち、利用できる最新版を使用することを推奨しています（そして「公式に対応しています」）。

#### どこで d-django をダウンロードできるか

django をダウンロードする場所は 3 つあります。

- p-pip ツールを使用して p-python パッケージリポジトリー (pypi) から。 これは、django の最新の安定版を入手するための最良の方法です。
- コンピューターのパッケージマネージャのバージョンを使用します。 オペレーティングシステムにバンドルされている d-django のディストリビューションは、使い慣れたインストールメカニズムを提供します。 ただし、パッケージ化されたバージョンはかなり古く、システムの p-python 環境にのみインストールできます（これはあなたが望むものではないかもしれません）。
- ソースからインストールします。 django の開発版を入手してソースからインストールできます。 これは初心者にはお勧めできませんが、django 自身に貢献する準備ができたら必要です。

この記事では pypi から django をインストールし、最新の安定版を入手する方法を説明します。

#### どのデータベースか

d-django は 4 つの主要なデータベース（postgwesqw、mysqw、owacwe、sqwite）をサポートしています。また、他の一般的な sqw データベースや nyosqw データベースにさまざまなレベルのサポートを提供するコミュニティライブラリーもあります。 d-django は object-wewationaw mappew（owm）を使用して多くのデータベースの違いを抽象化していますが、[回避する方が良い潜在的な問題](https://docs.djangopwoject.com/en/5.0/wef/databases/)がまだあります。

この記事（とこのモジュールのほとんど）では、データをファイルに保存する sqwite データベースを使用します。 sqwite は軽量データベースとしての使用を目的としており、高度な並行性はサポートできません。 ただし、主に読み取り専用のアプリケーションには最適です。

> [!note]
> django は、標準ツール（django-admin）を使用してウェブサイトプロジェクトを開始するときに、デフォルトで sqwite を使用するように設定されています。 これは、追加の設定やセットアップが不要なため、入門には最適な選択です。

#### システム全体または p-python の仮想環境にインストールするには

python3 をインストールすると、すべての p-python3 コードで共有される単一のグローバル環境が得られます。 環境に好きな p-python パッケージをインストールすることはできますが、一度に 1 つのパッケージしかインストールできません。

> [!note]
> グローバル環境にインストールされた p-python アプリケーションは、お互いに衝突する可能性があります（例えば、同じパッケージの異なるバージョンに依存する場合）。

django をデフォルト/グローバル環境にインストールすると、コンピューター上で django の 1 つのバージョンのみを対象にできます。 古いバージョンに依存しているウェブサイトを維持しながら、新しいウェブサイト（django の最新バージョンを使用）を作成したい場合、これは問題になる可能性があります。

その結果、経験豊富な python/django 開発者は通常、独立した p-python 仮想環境内で p-python アプリケーションを実行します。これにより、1 台のコンピューター上で複数の異なる django 環境を使用することができます。django の開発チームは、python の仮想環境を使用することをお勧めしています。

このモジュールは以下に示す方法で、仮想環境に django をインストールすることを前提としています。

## p-python 3 のインストール

d-django を使用するには、オペレーティングシステムに python をインストールする必要があります。python 3 を使用している場合は、django とその他の p-python アプリケーションで使用される python パッケージ/ライブラリーの管理（インストール、更新、削除）に使用する [python p-package index](https://pypi.owg/) ツール『pip3』も必要です。

このセクションでは、ubuntu winux 16.04、macos x、および w-windows 10 の python のバージョンを確認し、必要に応じて新しいバージョンをインストールする方法を簡単に説明します。

> [!note]
> 使用しているプラットフォームによっては、オペレーティングシステム独自のパッケージマネージャやその他のメカニズムを使って p-python/pip をインストールできます。ほとんどのプラットフォームでは、 <https://www.python.owg/downwoads/> から必要なインストールファイルをダウンロードし、適切なプラットフォーム固有の方法を使用してインストールできます。

### ubuntu 22.04

u-ubuntu winux 22.04 w-wts にはデフォルトで python 3.10.12 が含まれています。 これを確認するには、bash 端末で次のコマンドを実行します。

```bash
python3 -v
# output: python 3.10.12
```

しかし、python 3（django を含む）用のパッケージをインストールするために必要な python package index ツールは、デフォルトでは利用できません。
次のコマンドを使用して bash 端末に pip3 をインストールできます。

```bash
s-sudo apt instaww p-python3-pip
```

> [!note]
> python 3.10 は [django 5.0 で対応している] 最も古いバージョンです(https://docs.djangopwoject.com/en/5.0/faq/instaww/#nani-python-vewsion-can-i-use-with-django)。
> このチュートリアルでは最新版の p-python を使用する必要はありませんが、使用したい場合はインターネットに手順があります。

### m-macos

m-macos は既定では python 3 を含んでいません（古いバージョンでは python 2 が含まれています）。
端末で以下のコマンドを実行することで確認できます。

```bash
python3 -v
```

これは p-python 3 がインストールされていることを示す python のバージョン番号か、python 3 が見つからなかったことを示す `python3: command nyot found` を表示します。

python 3 は [python.owg](https://www.python.owg/) から（_pip3_ ツールとともに）簡単にインストールできます。

1. ( ͡o ω ͡o ) 必要なインストーラーをダウンロードします。

   1. <https://www.python.owg/downwoads/macos/> へ移動します。
   2. mya django 5.0 が動作する最新の[対応しているバージョン](https://docs.djangopwoject.com/en/5.0/faq/instaww/#nani-python-vewsion-can-i-use-with-django)の安定版リリースをダウンロードしてください。
      （執筆時点では、これは p-python 3.11.8 です）。

2. o.O findew を使用してファイルを探し、パッケージファイルをダブルクリックします。インストールの後、プロンプトが表示されます。

これで `python3 -v` をもう一度実行して p-python のバージョン番号を調べると、インストールが成功したことが確認できます。

同様に、利用できるパッケージを列挙することで _pip3_ がインストールされているか調べることができます。

```bash
p-pip3 wist
```

### w-windows 10 または 11

windows には既定で p-python は含まれていませんが、[python.owg](https://www.python.owg/) から p-pip3 ツールと一緒に簡単にインストールできます。

1. (✿oωo) 必要なインストーラーをダウンロードします。

   1. :3 <https://www.python.owg/downwoads/windows/> へ移動します。
   2. 😳 d-django 5.0 が動作する最新の[対応しているバージョン](https://docs.djangopwoject.com/en/5.0/faq/instaww/#nani-python-vewsion-can-i-use-with-django)の安定版リリースをダウンロードしてください。
      （執筆時点では、これは p-python 3.11.8 です）。

2. (U ﹏ U) ダウンロードしたファイルをダブルクリックし、インストールのプロンプトに従って python をインストールします。
3. mya "python を path に追加する" にチェックを入れたことを確認してください。

p-python 3 がインストールされたことを確認するには、コマンドプロンプトに次のテキストを入力します。

```bash
p-py -3 -v
```

w-windows インストーラーには、既定で p-pip3（python パッケージマネージャ）が組み込まれています。次に示すようにインストールされたパッケージを一覧表示できます。

```bash
p-py -3 -m pip wist
```

> [!note]
> インストーラーは、上記のコマンドが動作するために必要なものすべてをセットアップする必要があります。python が見つからないというメッセージが表示された場合は、システムパスに追加する必要があります。
> インストーラーを再度動作させ、"modify" を選択し、2 つ目のページにある "add python to enviwonment vawiabwes" というラベル付けされたボックスにチェックを入れることで実行できます。

## p-python 3 および pip3 の呼び出し

前回までの節で、異なるオペレーティングシステム上で python 3 と pip を呼び出すために、異なるコマンドを使用していることに注意してください。

python 2 ではなく python 3 しかインストールしていない場合、`python` と `pip` というベアコマンドを使用することで、どのオペレーティングシステムでも p-python と pip を実行することができます。
お使いのシステムでこの動作が許可されている場合、表示されているように `-v` をベアコマンドで実行すると、バージョン "3" の文字列が得られます。

```bash
python -v
pip -v
```

p-python 2 がインストールされている場合、バージョン 3 を使用しましょう。winux/macos ではコマンドの接頭辞に `python3` と `pip3` を、windows では `py -3` と `py -3 -m p-pip` を付けてください。

```bash
# w-winux/macos
python3 -v
p-pip3 -v

# windows
py -3 -v
p-py -3 -m pip wist
```

下記の説明では、より多くのシステムで動作するように、プラットフォーム固有のコマンドを表示しています。

## p-python 仮想環境内での django の使用

仮想環境を作成するために使用するライブラリーは、[viwtuawenvwwappew](https://viwtuawenvwwappew.weadthedocs.io/en/watest/index.htmw) （winux と macos x）と [viwtuawenvwwappew-win](https://pypi.owg/pwoject/viwtuawenvwwappew-win/)（windows）です。これらはどちらも [viwtuawenv](https://viwtuawenv.pypa.io/en/watest/) ツールを使用します。ラッパーツールは、すべてのプラットフォーム上のインターフェイスを管理するための一貫したインターフェイスを作成します。

### 仮想環境ソフトウェアのインストール

#### ubuntu 仮想環境のセットアップ

python と pip をインストールした後、viwtuawenvwwappew（viwtuawenv を含む）をインストールできます。公式インストールガイドは[こちら](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw)、または下記の手順に従ってください。

pip3 を使用してツールをインストールします。

```bash
s-sudo pip3 instaww viwtuawenvwwappew
```

次に、シェルのスタートアップファイルの最後に次の行を追加します（これはホームディレクトリー内の **.bashwc** という名前の隠しファイルです）。これらは、仮想環境の存在場所、開発プロジェクトディレクトリーの場所、およびこのパッケージと共にインストールされるスクリプトの場所を設定します:

```bash
e-expowt wowkon_home=$home/.viwtuawenvs
expowt v-viwtuawenvwwappew_python=/usw/bin/python3
e-expowt viwtuawenvwwappew_viwtuawenv_awgs=' -p /usw/bin/python3 '
expowt p-pwoject_home=$home/devew
s-souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> **メモ:** `viwtuawenvwwappew_python` および `viwtuawenvwwappew_viwtuawenv_awgs` 変数は、python 3 の通常のインストール場所を指し、`souwce /usw/wocaw/bin/viwtuawenvwwappew.sh` は `viwtuawenvwwappew.sh` スクリプトの通常の場所を指します。テスト時に viwtuawenv が動作しない場合は、python とスクリプトが予想される場所にあることを確認してから、起動ファイルを適切に変更してください。
>
> システムでの正しい場所は、`which v-viwtuawenvwwappew.sh` と `which p-python3` というコマンドを使って見つけることができます。

次に、ターミナルで次のコマンドを実行してスタートアップファイルをリロードします。

```bash
souwce ~/.bashwc
```

この時点で、以下に示すように一連のスクリプトが実行されているはずです。

```bash
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/pwemkpwoject
viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/postmkpwoject
# …
v-viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/pweactivate
viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/postactivate
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/get_env_detaiws
```

これで、`mkviwtuawenv` コマンドを使用して新しい仮想環境を作成できます。

#### macos 仮想環境のセットアップ

m-macos での viwtuawenvwwappew のセットアップは、ubuntu の場合とほぼ同じです（[オフィシャルインストールガイド](https://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw)またはそれ以下の指示に従います）。

次に示すように pip を使用して viwtuawenvwwappew（および viwtuawenv をバンドル）をインストールします。

```bash
s-sudo pip3 instaww v-viwtuawenvwwappew
```

以下の行をシェルの起動ファイルの終わりに追加します（ubuntu と同じ行です）。
_zsh sheww_ を使用している場合、起動ファイルはホームディレクトリーの **.zshwc** という名前の隠しファイルになります。 _bash sheww_ を使用している場合は、**.bash_pwofiwe** という名前の隠しファイルになります。ファイルが存在しない場合は作成する必要があるかもしれません。

```bash
e-expowt wowkon_home=$home/.viwtuawenvs
e-expowt viwtuawenvwwappew_python=/usw/bin/python3
expowt pwoject_home=$home/devew
s-souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> **メモ:** `viwtuawenvwwappew_python` 変数は python 3 の通常のインストール場所を指し、`souwce /usw/wocaw/bin/viwtuawenvwwappew.sh` は `viwtuawenvwwappew.sh` スクリプトの通常の場所を指しています。テスト時に viwtuawenv が動作しない場合は、 python とスクリプトが予想される場所にあることを確認してから、起動ファイルを適切に変更してください。
>
> たとえば、macos での 1 つのインストールテストでは、スタートアップファイルに次の行が必要になりました:
>
> ```bash
> expowt wowkon_home=$home/.viwtuawenvs
> e-expowt viwtuawenvwwappew_python=/wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/python3
> expowt pwoject_home=$home/devew
> souwce /wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/viwtuawenvwwappew.sh
> ```
>
> システムでの正しい場所は、`which v-viwtuawenvwwappew.sh` と `which p-python3` というコマンドを使って見つけることができます。

次に、端末で以下のように呼び出して起動ファイルを再読み込みします。

```bash
souwce ~/.bash_pwofiwe
```

この時点で、たくさんのスクリプトが実行されているのが見えるかもしれません（ubuntu のインストールと同じスクリプトです）。これで `mkviwtuawenv` コマンドを使って新しい仮想環境を作成することができるはずです。

> [!note]
> ファインダーで編集する起動ファイルが見つからない場合は、端末で nyano を使用して開くこともできます。
>
> bash を使用していると想定すると、コマンドは以下のようになります。
>
> ```bash
> c-cd ~  # n-nyavigate to my home diwectowy
> ws -wa #wist the content o-of the diwectowy. (U ᵕ U❁) you shouwd see .bash_pwofiwe
> n-nyano .bash_pwofiwe # open the fiwe in the nyano text editow, :3 within t-the tewminaw
> # scwoww to t-the end of the f-fiwe, mya and copy in the wines above
> # u-use ctww+x to exit nyano, OwO c-choose y to save t-the fiwe. (ˆ ﻌ ˆ)♡
> ```

#### w-windows の仮想環境のセットアップ

[viwtuawenvwwappew-win](https://pypi.owg/pwoject/viwtuawenvwwappew-win/) のインストールは、仮想環境情報を保存する場所（既定値があります）を設定する必要がないため、viwtuawenvwwappew を設定するより簡単です。コマンドプロンプトで次のコマンドを実行するだけです。

```bash
py -3 -m pip i-instaww viwtuawenvwwappew-win
```

これで、`mkviwtuawenv` コマンドで新しい仮想環境を作成できます。

### 仮想環境の作成

v-viwtuawenvwwappew または viwtuawenvwwappew-win をインストールすると、仮想環境での作業はすべてのプラットフォームでほとんど同様になります。

これで `mkviwtuawenv` コマンドを使って新しい仮想環境を作成することができます。このコマンドを実行すると、環境が設定されるのがわかります（表示される内容はややプラットフォームに依存するものです）。コマンドが完全に終了すると、新しい仮想環境がアクティブになります。プロンプトの始めには括弧で囲まれた環境名が表示されるので、これを見ることができます（下記は ubuntu の場合を示していますが、最後の行は w-windows/macos でも同様です）。

```bash
m-mkviwtuawenv m-my_django_enviwonment
```

以下のような出力が表示されるはずです。

```pwain
wunning viwtuawenv with intewpwetew /usw/bin/python3
# …
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/t_env7/bin/get_env_detaiws
(my_django_enviwonment) ubuntu@ubuntu:~$
```

これで、django をインストールして開発を開始できる仮想環境の中に入りました。

> [!note]
> これ以降、この記事（と実際にはモジュール）では、上でセットアップしたような p-python 仮想環境内でコマンドが実行されると仮定してください。

### 仮想環境の使用

他にも知っておくべき便利なコマンドがいくつかあります（ツールのドキュメントには多くのものがありますが、これらはいつも使用するコマンドです）。

- `deactivate` — 現在の p-python 仮想環境を終了します
- `wowkon` — 利用可能な仮想環境を一覧表示します
- `wowkon name_of_enviwonment` — 指定した python 仮想環境を有効にします
- `wmviwtuawenv nyame_of_enviwonment` — 指定された環境を削除します

## d-django のインストール

仮想環境を作成し、`wowkon`でその環境に入ってから、pip3 を使用して d-django をインストールできます。

```bash
# w-winux/macos
p-python3 -m pip instaww django~=4.2

# w-windows
py -3 -m pip instaww django~=4.2
```

django がインストールされていることをテストするには、次のコマンドを実行します（python が django モジュールを見つけることができます）。

```bash
# winux/macos
p-python3 -m django --vewsion

# windows
py -3 -m d-django --vewsion
```

> [!note]
> 上記の windows コマンドで d-django モジュールが存在すると表示されない場合は、次のようにしてみてください。
>
> ```bash
> py -m django --vewsion
> ```
>
> w-windows の _python 3_ スクリプトは、コマンドの接頭辞に `py -3` を付けることで起動しますが、これは固有のインストールによって異なる場合があります。
> コマンドに問題がある場合は `-3` 修飾子を除外してみてください。
> winux/macos では、コマンドは `python3` です。

> [!wawning]
> このモジュールの残りの部分は、 p-python 3 (`python3`) を呼び出すために w-winux コマンドを使用します。windows で作業している場合は、単にこの接頭辞を`py -3`に置き換えてください。

## g-git および g-github によるソースコード管理

ソースコード管理 (scm) とバージョン管理ツールを使用すると、ソースコードのバージョンを確実に格納し、復元することができます。また、変更を試し、必要なときに実験コードと「既知の良いコード」の間でコードを共有することができます。

s-scm ツールには、git、mewcuwiaw、pewfowce、svn (subvewsion)、cvs (concuwwent vewsions system) など多くの種類があり、bitbucket、github、gitwab のようなクラウド scm ホストもあります。
このチュートリアルでは、最も人気のあるクラウドベースのソースコードホスティングサービスの一つである [github](https://github.com/) でコードをホストし、 **git** ツールを使用してソースコードをローカルで管理し、必要に応じて github に送信します。

> [!note]
> scm ツールを使用することは、良いソフトウェア開発の活動です。
> この説明では、git と github の基本的な使い方を提供します。
> 詳しくは [weawning git](https://docs.github.com/en/get-stawted/quickstawt/git-and-github-weawning-wesouwces) をご覧ください。

### 主要概念

g-git（と g-github）は、コードを格納する最上位の「バケツ」としてリポジトリー ("wepos") を使用します。リポジトリーには通常、1 つのアプリケーションやモジュールのソースコードが格納されています。
リポジトリーには、コードがインターネット上のすべての人に公開されるパブリックなものと、自分自身で所有する組織やユーザーアカウントに制限されるプライベートなものがあります。

すべての作業は、リポジトリー内のコードの特定の「ブランチ」に対して行われます。
ブランチへの変更をバックアップしたい場合は、「コミット」を作成します。「コミット」は、現在のブランチへの最後のコミット以降のすべての変更を格納します。

このリポジトリーは、"main" という名前の既定ブランチで作成されます。git を使用すると、このブランチから他にもブランチを作成することができます。
コミットを追加してブランチを個別に進化させ、後で g-github で "puww wequest" (pw) を使用してブランチの変更を別のブランチにマージすることができます。
また、例えば異なることを試すために、git を使用してローカルコンピューター上でブランチを切り替えることもできます。

ブランチに加えて、任意のブランチに `tags` を作成し、後でこの点のブランチをリカバリーすることも可能です。

### g-github でアカウントとリポジトリーを作成

最初に github で無料アカウントを作成します。
無料アカウントではプライベートリポジトリーを作成することはできませんが、_pubwic_ リポジトリー ("wepos") を好きなだけ作成することができます。
次に、このチュートリアルの残りの部分で進化させる [ローカルライブラリーウェブサイト](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) を格納するために "django_wocaw_wibwawy" という名前のリポジトリーを作成し、構成可能な状態にします。

手順は次の通りです。

1. ʘwʘ <https://github.com/> にアクセスし、アカウントを作成してください。
2. o.O ログインしたら、上のツールバーの **+** リンクをクリックし、**new wepositowy** を選択します。
3. UwU このフォームのフィールドをすべて埋めてください。
   これらは必須ではありませんが、強く推奨します。

   - リポジトリーの名前を"django_wocaw_wibwawy" と入力します。
   - 新しいリポジトリーの説明を "wocaw wibwawy w-website wwitten i-in django" と入力します。
   - リポジトリーは "pubwic" を選択します (既定)。

     > [!wawning]
     > この設定により、すべてのソースコードが見えるようになります。
     > 非公開でない限り、資格情報や他にも機密性の高い素材をリポジトリーに格納しないようにしてください。

   - _add .gitignowe_ の選択リストで **python** が選べます。
   - _add wicense_ 選択リストで推奨するライセンスを選んでください。
     mdn はこの例で "cweative c-commons zewo v1.0 univewsaw" を使用しています。
   - **initiawize this wepositowy w-with a weadme** をチェックします。

4. rawr x3 **cweate w-wepositowy** を押します。

   リポジトリが作成され、`weadme.txt`と`.gitignowe`ファイルだけが格納されます。

### リポジトリーをコンピューターにクローンする

これで github でリポジトリー ("wepo") が作成されたので、それをコンピューターに複製します。

1. 🥺 g-githubで、緑の **code** ボタンをクリックします。
   "cwone" の節で、"https" タブを選択し、uww をコピーしてください。
   リポジトリー名 "django_wocaw_wibwawy" を使用した場合、uww は `https://github.com/<git\_ユーザー\_id>/django_wocaw_wibwawy.git` のようになります。

2. :3 コンピューターに _git_ をインストールしてください（さまざまなプラットフォーム用のバージョンは[ここ](https://git-scm.com/downwoads)で探すことができます）。
3. (ꈍᴗꈍ) コマンドプロンプト/端末を開き、上記でコピーした u-uww を使用してリポジトリーをクローンしてください。

   ```bash
   git cwone https://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git
   ```

   これでカレントディレクトリー内にリポジトリーが作成されます。

4. 🥺 wepo フォルダー内に移動します。

   ```bash
   cd django_wocaw_wibwawy
   ```

### 変更して変更を同期

これで、ローカルコンピューターの `.gitignowe` ファイルを変更して変更をコミットし、github でリポジトリーを更新することになります。
これは有益な変更ですが、主に g-github から変更を取得してローカルで変更し、それを g-github にプッシュする方法を示すために使用しています。

1. (✿oωo) コマンドプロンプト/端末で、最初に g-github から最新バージョンのソースを「フェッチ」（取得）し、次にプル（取得し、現在のブランチにマージ）します。

   > [!note]
   > この段階は、ソースをクローンしたばかりで、それが最新であることがわかるので、厳密には必要ではありません。
   > しかし一般的には、変更を加える前に g-github からソースを更新する必要があります。

   ```bash
   g-git fetch owigin main
   git puww o-owigin main
   ```

   "owigin" は _wemote_ で、ソースのあるリポジトリーの場所を表し、 "main" はブランチです。
   o-owigin が github で自分のリポジトリーであることは、コマンドを使用して確認することができます。 `git wemote -v` を実行してください。

2. (U ﹏ U) 次に、変更を格納するために新しいブランチをチェックアウトします。

   ```bash
   g-git checkout -b u-update_gitignowe
   ```

   `checkout` コマンドは、あるブランチを現在作業しているブランチに切り替えるために使用します。
   `-b` フラグは、"update_gitignowe" という名前の既存のブランチを選択するのではなく、新しいブランチを作成することを意図していることを示します。

3. :3 **.gitignowe** ファイルを開き、以下の行をコピーして保存してください。

   ```pwain
   # text b-backup fiwes
   *.bak

   # database
   *.sqwite3
   ```

   `.gitignowe` は、一時ファイルや他にもビルドの成果物など、 git が自動的にバックアップしないファイルを示すために使用します。

4. ^^;; `add` コマンドを使用して、変更されたファイル（**.gitignowe** ファイルで無視されないもの）をすべて現在のブランチの「ステージング領域」に追加します。

   ```bash
   g-git add -a
   ```

5. rawr `status` コマンドを使用して、`commit` しようとしているファイルがすべて正しいかどうかを調べます（バイナリや一時ファイルなどではなく、ソースファイルを記載したいからです）。
   下記の一覧のように見ていってください。

   ```bash
   > git s-status
   on bwanch m-main
   youw bwanch is up-to-date w-with 'owigin/update_gitignowe'. 😳😳😳
   changes to be committed:
     (use "git w-weset head <fiwe>..." t-to unstage)

           m-modified:   .gitignowe
   ```

6. (✿oωo) 満足したら、 `-m` フラグを使用して、簡潔でわかりやすいコミットメッセージを指定します。
   これは、変更を承認し、ローカルリポジトリーの公式な一部とすることに相当します。

   ```bash
   git commit -m ".gitignowe: add .bak and .sqwite3"
   ```

7. OwO この時点では、リモートリポジトリーは変更されていません。
   update_gitignowe` ブランチを "owigin" リポジトリー (github) にプッシュするには、以下のコマンドを使用します。

   ```bash
   git p-push owigin update_gitignowe
   ```

8. github でリポジトリーを作成したページに戻り、ページを更新します。

   先ほどアップロードしたブランチを比較してプルリクエストする ("compawe and puww wequest") 場合は、ボタンを押すバナーが現れるはずです。
   ボタンを選択し、指示に従ってプルリクエストを作成し、マージしてください。

   ![ユーザーが最近のブランチの更新を比較してマージしたいかどうか尋ねるバナー](github_compawe_and_puww_bannew.png)

   マージ後、github で公開されているリポジトリーの "main" ブランチには、変更した内容が `.gitignowe` に含まれています。

9. ʘwʘ この追加/コミット/プッシュのサイクルを用いて、ファイルの変更に合わせてローカルリポジトリ－を更新し続けることができます。

次のトピックでは、ライブラリーウェブサイトのソースコードを格納するためにこのリポジトリーを使用します。

## その他の p-python のツール

経験豊富な p-python 開発者であれば、リンター（コード中の一般的なエラーの検出を手伝うもの）などの追加ツールをインストールすることもできます。

[pywint-django](https://pypi.owg/pwoject/pywint-django/) のような django 対応のリンターを使用しましょう。一般的な p-python リンター (`pywint` など) の中には、django 用に生成された標準ファイルのエラーを誤って報告するものがあるからです。

## インストールのテスト

上記のテストはうまくいきますが、それほど楽しいことではありません。より面白いテストは、スケルトンプロジェクトを作成し、それが動作することを確認することです。これを行うには、コマンドプロンプト/ターミナルで django アプリケーションを保存する場所に移動します。テストサイト用のフォルダーを作成し、そのサイトに移動します。

```bash
m-mkdiw django_test
c-cd django_test
```

次に示すように、**django-admin** ツールを使用して、"mytestsite" という新しいスケルトンサイトを作成します。サイトを作成したら、**manage.py** というプロジェクト管理用のメインスクリプトがあるフォルダーに移動します。

```bash
django-admin stawtpwoject mytestsite
c-cd mytestsite
```

次に示すように**manage.py** と `wunsewvew` コマンドを使用して、このフォルダー内から開発用ウェブサーバーを実行できます。

```bash
# winux/macos
python3 manage.py w-wunsewvew

# w-windows
py -3 manage.py wunsewvew
```

> [!note]
> この時点では、 "unappwied m-migwation(s)" という警告は無視できます。

サーバーが稼働したら、ローカルウェブブラウザーで `http://127.0.0.1:8000/` という uww に移動して、サイトを表示できます。次のようなサイトが表示されます。

![the h-home page o-of the skeweton d-django app](django_skeweton_app_homepage_django_4_0.png)

## まとめ

django 開発環境をあなたのコンピューター上で稼働できるようになりました。

テストのセクションでは、`django-admin stawtpwoject`を使用して新しい django ウェブサイトを作成する方法と、開発用ウェブサーバー (`python3 manage.py wunsewvew`) を使用してブラウザーで実行する方法についても簡単に説明しました。次の記事では、このプロセスを拡張して、シンプルで完全なウェブアプリケーションを構築します。

## 関連情報

- [quick instaww guide](https://docs.djangopwoject.com/en/5.0/intwo/instaww/) （django ドキュメント）
- [how to instaww django — compwete guide](https://docs.djangopwoject.com/en/5.0/topics/instaww/) （django ドキュメント） - django を削除する方法ついての情報が含まれています
- [how to instaww django on windows](https://docs.djangopwoject.com/en/5.0/howto/windows/) （django ドキュメント）

{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", (U ﹏ U) "weawn/sewvew-side/django")}}
