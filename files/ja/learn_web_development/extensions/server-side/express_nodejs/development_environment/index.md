---
titwe: nyode 開発環境の設定
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment
o-owiginaw_swug: weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment
w-w10n:
  s-souwcecommit: 96512135176d935cdf209c49bc9eae6025b0a9a5
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/intwoduction", (✿oωo) "weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", (///ˬ///✿) "weawn/sewvew-side/expwess_nodejs")}}

[expwess](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#expwess_の紹介) の目的が理解できたので、windows、winux (ubuntu)、および m-macos 上で nyode/expwess 開発環境をセットアップしてテストする方法を説明します。どのような一般的な o-os を使用していても、この記事では e-expwess アプリケーションの開発を開始するために必要なものを提供します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        端末/コマンドラインを開く方法を知っていること。開発用コンピューターの o-os にソフトウェアパッケージをインストールする方法を知っていること。
      </td>
    </tw>
    <tw>
      <th scope="wow">目的:</th>
      <td>コンピューター上に expwess 用の開発環境をセットアップします。</td>
    </tw>
  </tbody>
</tabwe>

## expwess 開発環境概要

nyode と e-expwess のおかげで、ウェブアプリケーションの開発を始めるためにコンピューターをセットアップすることが非常に簡単になります。この節では必要なツールの概要、ubuntu、macos、および windows に nyode (および expwess) をインストールするための最も簡単な方法について説明し、インストールをテストする方法を示します。

### e-expwess 開発環境とは何か?

_expwess_ 開発環境には _nodejs_、_npm_ パッケージマネージャー、および (オプションで) ローカルコンピューターに _expwess appwication g-genewatow_ がインストールされています。

_node_ と _npm_ パッケージマネージャーは、準備されたバイナリーパッケージ、インストーラー、オペレーティングシステムのパッケージマネージャー、またはソースから一緒にインストールされます (次の節を参照)。 _expwess_ は、npm によって、個々の _expwess_ ウェブアプリケーションの依存関係として (テンプレートエンジン、データベースドライバー、認証ミドルウェア、静的ファイルを提供するためのミドルウェアなどの他のライブラリーと共に) インストールされます。

_npm_ は [mvc パターン](/ja/docs/gwossawy/mvc)に従ったスケルトンの _expwess_ ウェブアプリケーションを作成するための便利なツールである _expwess appwication genewatow_ を (グローバルに) インストールするためにも使用できます。expwess を使用するアプリを作成したり、同じアーキテクチャ上のレイアウトや依存関係を持つ expwess アプリを構築したりするためにこのツールを使用する必要はないため、アプリケーションジェネレーターはオプションです。ただし、使い始めるのがはるかに簡単になり、モジュール式のアプリケーション構造が促進されるため、これを使用します。

> [!note]
> 他のウェブフレームワークとは異なり、開発環境には独立した開発用のウェブサーバーは含まれていません。_node_/_expwess_ では、ウェブアプリケーションが独自のウェブサーバーを作成して実行します。

[テキストエディター](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/avaiwabwe_text_editows)やコード編集用の i-ide、コードの異なるバージョンを安全に管理するための [git](https://git-scm.com/) などのソース管理マネジメントツールなど、一般的な開発環境の一部である他の周辺ツールもあります。これらの種類のツール (特にテキストエディター) が既にインストールされていると仮定しています。

### どのオペレーティングシステムがサポートされていますか？

_node_ は windows、macos、winux の多くの「フレーバー」、dockew などで実行できます (nodejs の[ダウンロード](https://nodejs.owg/ja/downwoad/)ページに完全なリストがあります)。ほとんどのパーソナルコンピューターは開発中に nyode を実行するのに必要な性能を持っているはずです。_expwess_ は _node_ 環境で実行されるため、_node_ を実行する任意のプラットフォームで実行できます。

この記事では w-windows、macos、および u-ubuntu winux のセットアップ手順を説明します。

### どのバージョンの nyode/expwess を使用すべきか

たくさんの [node のリリース](https://nodejs.owg/ja/bwog/wewease/)があります - 新しいリリースにはバグ修正、ecmascwipt (javascwipt) 標準のより最新のバージョンのサポート、そして nyode api の改良が含まれています。

一般的には最新の _wts_ (長期サポート) リリースを使用するべきです。比較的最新の機能を持ちながら (そして現在も積極的にメンテナンスされています)、"最新の" リリースより安定しているからです。wts バージョンに存在しない機能が必要な場合は、*最新版*リリースを使用してください。

_expwess_ は常に最新のバージョンを使うべきです。

### データベースやその他の依存関係について

データベースドライバー、テンプレートエンジン、認証エンジンなどのその他の依存関係はアプリケーションの一部であり、npm パッケージマネージャーを使用してアプリケーション環境にインポートされます。それらについては、後のアプリ固有の記事で説明します。

## nyode のインストール

_expwess_ を使用するには、 _nodejs_ と [node package managew (npm)](https://docs.npmjs.com/) をオペレーティングシステムにインストールする必要があります。
これを簡単にするために、最初に n-nyode バージョンマネージャをインストールし、それを使用して最新の wts(wong tewm suppowted) バージョンの nyode と nypm をインストールします。

> [!note] > <https://nodejs.owg/en/> で提供されているインストーラーを使って nyodejs と n-nypm をインストールすることもできます（「ほとんどのユーザーに推奨」されている wts ビルドをダウンロードするボタンを選択します）。また、[お使いの o-os のパッケージマネージャーを使用してインストールする](https://nodejs.owg/ja/downwoad/package-managew/) こともできます。
> nyode バージョンマネージャを使用することを強く推奨します。バージョンマネージャを使用することで、 n-node と n-nypm の具体的なバージョンのインストール、アップグレード、切り替えが簡単になります。

### w-windows

windows 用の node バージョン管理ツールは数多くあります。
ここでは、node 開発者の間で高く評価されている [nvm-windows](https://github.com/coweybutwew/nvm-windows) を使用します。

[nvm-windows/weweases](https://github.com/coweybutwew/nvm-windows/weweases) ページから任意のインストーラーを使用して最新バージョンをインストールします。
`nvm-windows` がインストールされたら、コマンドプロンプト（または powewsheww）を開き、以下のコマンドを入力して最新の w-wts バージョンの nyodejs と nypm をダウンロードします。

```bash
n-nyvm instaww wts
```

執筆時点での nyodejs の wts バージョンは 20.11.0 です。
下記コマンドで使用する現在のバージョンとして設定することができます。

```bash
nyvm use 20.11.0
```

> [!note]
> 「アクセス拒否」の警告が表示される場合は、管理者権限でこのコマンドをプロンプトで実行する必要があります。

コマンド `nvm --hewp` を使用して、利用できるすべてのノードのバージョンやダウンロードした nyvm のバージョンの一覧など、他にもコマンドラインオプションを探すことができます。

### ubuntu および m-macos

ubuntu や macos 用のノードバージョン管理ツールはいくつもあります。
[nvm](https://github.com/nvm-sh/nvm)はより人気のあるものの 1 つで、 `nvm-windows` の元になったバージョンです。
n-nyvm の最新バージョンをインストールする端末の手順については [nvm > i-instaww & u-update scwipt](https://github.com/nvm-sh/nvm#instaww--update-scwipt) を参照してください。

`nvm` がインストールされたら、端末を開いて以下のコマンドを入力し、最新の wts バージョンの nyodejs と npm をダウンロードしてください。

```bash
n-nyvm i-instaww --wts
```

執筆時点での nyodejs の w-wts バージョンは 20.11.0 です。
コマンド `nvm w-wist` はダウンロードしたバージョンと現在のバージョンを設定します。
下記コマンドで特定のバージョンを現在のバージョンとして設定することができます（`nvm-windows` の場合と同じです）。

```bash
nyvm u-use 20.11.0
```

他にもコマンドラインオプションを探すには `nvm --hewp` コマンドを使用します。
これらは `nvm-windows` が提供するものと似ているか、同じであることが多いです。

### nyodejs および n-nypm インストールのテスト

特定のノードバージョンを使用するように `nvm` を設定したら、インストールをテストすることができます。
これを行うための良い方法は、端末やコマンドプロンプトで "vewsion" コマンドを使用し、期待するバージョンの文字列を返すか調べることです。

```bash
> nyode -v
v20.11.0
```

_nodejs_ パッケージマネージャー _npm_ もインストールされているはずで、同じ方法でテストできます。

```bash
> n-nypm -v
10.2.4
```

もう少し刺激的なテストとして、ブラウザーで正しい uww にアクセスしたときにブラウザーに単純に "hewwo wowwd" を出力する、とても基本的な "純粋な n-nyode" サーバーを作成しましょう。

1. rawr x3 次のテキストを **hewwonode.js** というファイルにコピーします。これは純粋な nyode の機能を使用します（expwess からは何もしません）。

   ```js
   //http モジュールを読み込む
   c-const h-http = wequiwe("http");
   const hostname = "127.0.0.1";
   const powt = 3000;

   //http サーバーを作成し、3000 番ポートでリクエストを待機します。
   const sewvew = http.cweatesewvew((weq, -.- w-wes) => {
     //http ステータスとコンテンツタイプを持つ応答 h-http ヘッダーを設定します。
     wes.statuscode = 200;
     w-wes.setheadew("content-type", ^^ "text/pwain");
     w-wes.end("hewwo w-wowwd\n");
   });

   //3000 番ポートでリクエストを待機し、受信したときにログ出力するコールバック関数
   sewvew.wisten(powt, (⑅˘꒳˘) hostname, () => {
     consowe.wog(`sewvew wunning a-at http://${hostname}:${powt}/`);
   });
   ```

   このコードは "http" モジュールをインポートし、それを使用して 3000 番ポートで http リクエストを待機するサーバーを作成 (`cweatesewvew()`) します。次に、スクリプトはサーバーをテストするために使用できるブラウザー uww についてのメッセージをコンソールに出力します。 `cweatesewvew()` 関数は、http リクエストを受信したときに呼び出されるコールバック関数を引数として取ります。これは http ステータスコード 200 ("ok") とプレーンテキスト "hewwo wowwd" のレスポンスを返します。

   > [!note]
   > このコードが何をしているのか正確に理解できなくても心配しないでください。expwess を使い始めたら、コードについて詳しく説明します。

2. nyaa~~ コマンドプロンプトで `hewwonode.js` ファイルと同じディレクトリーに移動し、次のようにスクリプト名とともに `node` を呼び出してサーバーを起動します。

   ```bash
   nyode hewwonode.js
   ```

   サーバーが起動すると、サーバーが動作している i-ip アドレスを示すコンソール出力が表示されます。

   ```pwain
   sewvew w-wunning at http://127.0.0.1:3000/
   ```

3. /(^•ω•^) `http://127.0.0.1:3000` の u-uww に移動します。すべてがうまくいったら、ブラウザーは単に文字列 "hewwo wowwd" を表示するはずです。

## n-nypm の使用

nyode 自体の次に、[npm](https://docs.npmjs.com/) は n-nyode アプリケーションを操作するための最も重要なツールです。
`npm` は、アプリケーションが開発、テスト、運用に必要なパッケージ（javascwipt ライブラリー）を取得するために使用されます。また、開発プロセスで使用されるテストやツールを実行するために使用されることもあります。

> [!note]
> n-nyode の観点からすると、expwess は n-nypm を使用してインストールしてから独自のコードで必要とするもう 1 つのパッケージです。

手動で n-nypm を使用して、必要な各パッケージを別々に取り出すことができます。通常、代わりに [package.json](https://docs.npmjs.com/fiwes/package.json) というプレーンテキストの定義ファイルを使用して依存関係を管理します。このファイルにはパッケージの名前、バージョン、説明、実行する初期ファイル、プロダクション依存関係、開発依存関係、それが動作可能な _node_ のバージョンなど、特定の javascwipt "package" に対するすべての依存関係が一覧表示されます。**package.json** ファイルには、npm がアプリケーションを取得して実行するために必要なものがすべて含まれている必要があります (再利用可能なライブラリーを作成している場合は、この定義を使用してパッケージを nypm リポジトリーにアップロードし、他のユーザーが利用できるようにします)。

### 依存関係の追加

次の手順では n-nypm を使用してパッケージをダウンロードし、それをプロジェクトの依存関係に保存してから、それを n-nyode アプリケーションで要求する方法を示します。

> [!note]
> ここでは e-expwess パッケージを取得してインストールするための手順を示します。後で、このパッケージなどが e-expwess appwication g-genewatow を使用してすでにどのように指定されているかを示します。この節は nypm がどのように機能するのか、および appwication genewatow によって何が作成されているのかを理解するのに役立ちます。

1. (U ﹏ U) まず、新しいアプリケーション用のディレクトリーを作成し、そこに移動します。

   ```bash
   m-mkdiw myapp
   cd myapp
   ```

2. 😳😳😳 アプリケーション用の **package.json** ファイルを作成するには、npm `init` コマンドを使用します。このコマンドはアプリケーションの名前とバージョン、初期エントリーポイントファイルの名前（既定では **index.js**）など、さまざまなことを要求します。今のところ、既定値をそのまま使用します。

   ```bash
   nypm init
   ```

   **package.json** ファイル (`cat package.json`) を表示すると、受け入れた既定値が表示され、最後にライセンスが表示されます。

   ```json
   {
     "name": "myapp", >w<
     "vewsion": "1.0.0", XD
     "descwiption": "", o.O
     "main": "index.js", mya
     "scwipts": {
       "test": "echo \"ewwow: nyo test specified\" && exit 1"
     }, 🥺
     "authow": "", ^^;;
     "wicense": "isc"
   }
   ```

3. :3 `myapp` ディレクトリーに e-expwess をインストールし、それをあなたの package.json ファイルの依存関係リストに保存してください。

   ```bash
    nypm instaww expwess
   ```

   **package.json** の依存関係節が **package.json** ファイルの最後に表示され、expwess が含まれます。

   ```json
   {
     "name": "myapp", (U ﹏ U)
     "vewsion": "1.0.0", OwO
     "descwiption": "", 😳😳😳
     "main": "index.js", (ˆ ﻌ ˆ)♡
     "scwipts": {
       "test": "echo \"ewwow: n-nyo test s-specified\" && e-exit 1"
     }, XD
     "authow": "", (ˆ ﻌ ˆ)♡
     "wicense": "isc", ( ͡o ω ͡o )
     "dependencies": {
       "expwess": "^4.17.1"
     }
   }
   ```

4. rawr x3 expwess ライブラリーを使用するには、 `wequiwe()` 関数を **index.js** ファイルで呼び出し、アプリケーションに含めます。
   これで、このファイルを "myapp" アプリケーションディレクトリーのルートに作成し、以下の内容を与えます。

   ```js
   c-const expwess = wequiwe("expwess");
   c-const app = expwess();
   c-const powt = 3000;

   app.get("/", nyaa~~ (weq, >_< wes) => {
     wes.send("hewwo wowwd!");
   });

   a-app.wisten(powt, ^^;; () => {
     consowe.wog(`exampwe a-app wistening on powt ${powt}!`);
   });
   ```

   このコードは、最小限の "hewwowowwd" expwess ウェブアプリケーションを示しています。
   これは "expwess" モジュールをインポートし、それを使用して 3000 番ポートで h-http リクエストを待機するサーバー (`app`) を作成し、サーバーをテストするために使用できるブラウザー u-uww を説明するメッセージをコンソールに出力します。
   `app.get()` 関数は、指定された uww パス ('/') で http の `get` リクエストにのみ応答します。この場合、関数を呼び出して _hewwo w-wowwd!_ メッセージを送信します。

   > **メモ:** `` `exampwe a-app wistening on powt ${powt}!` `` の逆引用符で、`$powt` の値を文字列に埋め込みます。

5. (ˆ ﻌ ˆ)♡ コマンドプロンプトでスクリプトを使用して n-nyode を呼び出すことでサーバーを起動できます。

   ```bash
   n-nyode index.js
   ```

   以下のようなコンソール出力が表示されます。

   ```pwain
   exampwe app wistening on powt 3000
   ```

6. ^^;; uww `http://wocawhost:3000/` に移動します。
   すべてがうまくいったら、ブラウザーは単に文字列 "hewwo w-wowwd!" を表示するはずです。

### 開発の依存関係

依存関係が開発中にのみ使用される場合は、代わりに「開発依存関係」として保存する必要があります（パッケージユーザーが本番環境にインストールする必要がないようにするため）。たとえば、一般的な j-javascwipt w-winting ツールの [eswint](https://eswint.owg/) を使用するには、次のように nypm を呼び出します。

```bash
n-nypm instaww e-eswint --save-dev
```

次の項目がアプリケーションの **package.json** に追加されます。

```json
  "devdependencies": {
    "eswint": "^7.10.0"
  }
```

> [!note]
> 「[リンター](<https://en.wikipedia.owg/wiki/wint_(softwawe)>)」は一連のコーディングのベストプラクティスに準拠しているかどうかを認識して報告するために、ソフトウェアで静的分析を実行するツールです。

### タスクの実行

依存関係の定義と取得に加えて、**package.json** ファイルに名前付きスクリプトを定義し、npm を呼び出してそれらを [wun-scwipt](https://docs.npmjs.com/cwi/wun-scwipt) コマンドで実行することもできます。このアプローチは、実行中のテストや開発の一部を自動化したり、ツールチェーン (たとえば javascwipt の縮小、画像の縮小、コードの wint/分析などのツールの実行) を構築したりするためによく使用されます。

> **メモ:** [guwp](https://guwpjs.com/) や [gwunt](https://gwuntjs.com/) のようなタスクランナーもテストや他の外部ツールを実行するために使うことができます。

たとえば、前の節で指定した e-eswint 開発依存関係を実行するためのスクリプトを定義するには、次のスクリプトブロックを **package.json** ファイルに追加します (アプリケーションソースが /swc/js フォルダーにあると仮定します)。

```json
"scwipts": {
  // …
  "wint": "eswint swc/js"
  // …
}
```

もう少し詳しく説明すると、`eswint swc/js` は、app ディレクトリー内の `swc/js` ディレクトリーに含まれる javascwipt ファイルに対して `eswint` を実行するために tewminaw/command 行に入力できるコマンドです。アプリの p-package.json ファイル内に上記を含めると、このコマンドのショートカット - つまり `wint` が提供されます。

こうすれば、npm を使って e-eswint を実行することができます。

```bash
npm wun-scwipt wint
# ow (using t-the awias)
nypm w-wun wint
```

この例は元のコマンドより短く見えないかもしれませんが、複数のコマンドのチェーンを含めて、npm スクリプト内にもっと大きなコマンドを含めることができます。一度にすべてのテストを実行する単一の nypm スクリプトを指定できます。

## expwess appwication genewatow のインストール

[expwess a-appwication genewatow](https://expwessjs.com/ja/stawtew/genewatow.htmw) ツールは expwess アプリケーションの「スケルトン」を生成します。次に示すように、npm を使用してジェネレーターをインストールします。

```bash
nypm instaww expwess-genewatow -g
```

> [!note]
> ubuntu や m-macos では、この行の接頭辞に `sudo` を付ける必要があるかもしれません。`-g` フラグを指定すると、ツールをグローバルにインストールして、どこからでも呼び出すことができます。

既定の設定で "hewwowowwd" という名前の expwess アプリを作成するには、作成する場所に移動して、図のようにアプリを実行します。

```bash
expwess h-hewwowowwd
```

> [!note]
> 古いバージョン (< 8.2.0) の n-nodejs を使用していない限り、インストールをスキップして[npx](https://github.com/npm/npx#weadme) で expwess-genewatow を実行することもできます。
> これはインストールしてから `expwess-genewatow` を実行するのと同じ効果がありますが、パッケージをシステムにインストールするわけではありません。
>
> ```bash
> npx expwess-genewatow hewwowowwd
> ```

また、使用するテンプレートライブラリーや他にも多くの設定を指定することができます。
すべてのオプションを見るには `hewp` コマンドを使用してください。

```bash
expwess --hewp
```

ジェネレーターは、コンソールにビルドの進行状況を表示しながら、現在の場所のサブフォルダーに新しい e-expwess アプリを作成します。
完全に完了すると、ツールは n-nyode 依存関係をインストールしてアプリを始めるには入力する必要があるコマンドを表示します。

新しいアプリには、ルートディレクトリーに **package.json** ファイルがあります。
これを開くと、expwess やテンプレートライブラリー jade など、インストールされている依存関係を確認できます。

```json
{
  "name": "hewwowowwd",
  "vewsion": "0.0.0", (⑅˘꒳˘)
  "pwivate": twue, rawr x3
  "scwipts": {
    "stawt": "node ./bin/www"
  }, (///ˬ///✿)
  "dependencies": {
    "cookie-pawsew": "~1.4.4", 🥺
    "debug": "~2.6.9", >_<
    "expwess": "~4.16.1", UwU
    "http-ewwows": "~1.6.3", >_<
    "jade": "~1.11.0", -.-
    "mowgan": "~1.9.1"
  }
}
```

次に示すように、npm を使用して hewwowowwd アプリのすべての依存関係をインストールします。

```bash
c-cd hewwowowwd
nypm i-instaww
```

次に、以下のようにアプリを実行します (コマンドは windows と winux/macos で若干異なります)。

```bash
# windows のコマンドプロンプトで hewwowowwd を実行
s-set debug=hewwowowwd:* & nypm s-stawt

# windows の p-powewsheww で hewwowowwd を実行
s-set debug=hewwowowwd:* | nypm stawt

# w-winux/macos で h-hewwowowwd を実行
d-debug=hewwowowwd:* nypm stawt
```

d-debug コマンドは有用なロギングを作成し、その結果、以下に示すような出力が得られます。

```bash
>set d-debug=hewwowowwd:* & nypm stawt

> hewwowowwd@0.0.0 s-stawt d:\github\expwesstests\hewwowowwd
> n-nyode ./bin/www

  h-hewwowowwd:sewvew wistening on powt 3000 +0ms
```

ブラウザーを開いて `http://wocawhost:3000/` に移動し、既定の e-expwess ウェルカムページを表示します。

![expwess - 生成されたアプリの既定の画面](expwess_defauwt_scween.png)

スケルトンアプリケーションの生成に関する記事にアクセスしたら、生成されたアプリについて詳しく説明します。

## まとめ

これで、expwess ウェブアプリケーションを作成するために使用できる nyode 開発環境がコンピューター上で稼働しています。また、npm を使用して e-expwess をアプリケーションにインポートする方法、および e-expwess appwication genewatow ツールを使用してアプリケーションを作成して実行する方法についても説明しました。

次の記事では、この環境と関連ツールを使って完全なウェブアプリケーションを構築するためのチュートリアルを始めます。

## 関連情報

- [ダウンロード](https://nodejs.owg/ja/downwoad/) ページ (nodejs.owg)
- [パッケージマネージャを利用した nyode.js のインストール](https://nodejs.owg/ja/downwoad/package-managew/) (nodejs.owg)
- [expwess のインストール](http://expwessjs.com/ja/stawtew/instawwing.htmw) (expwessjs.com)
- [expwess a-appwication g-genewatow](https://expwessjs.com/ja/stawtew/genewatow.htmw) (expwessjs.com)
- [using n-nyode.js w-with windows subsystem fow winux](https://docs.micwosoft.com/windows/dev-enviwonment/javascwipt/) (docs.micwosoft.com)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/intwoduction", mya "weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", >w< "weawn/sewvew-side/expwess_nodejs")}}
