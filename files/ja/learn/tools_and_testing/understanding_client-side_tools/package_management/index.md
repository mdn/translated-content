---
title: パッケージ管理の基本
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
l10n:
  sourceCommit: 84747e4b342492f04ec943acd47bb4f8665586cc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

この記事では、パッケージマネージャーを詳細に見て、プロジェクトツールの依存関係をインストールし、それらを最新の状態に保つなど、独自のプロジェクトでパッケージマネージャーを使用する方法を理解します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件：</th>
      <td>
        主要な <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、と <a href="/ja/docs/Learn/JavaScript">JavaScript</a> 言語
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>
        パッケージマネージャーとパッケージリポジトリとは何か、必要な理由や使用方法の基本を理解する。
      </td>
    </tr>
  </tbody>
</table>

## プロジェクトの依存関係

**依存関係**とは、サードパーティ製のソフトウェアであり、おそらく他の誰かによって作成されたものであり、理想的には 1 つの問題を解決してくれます。 Web プロジェクトには、0 から多数の範囲で任意の数の依存関係を含めることができます。また依存関係には、明示的にインストールしていないサブ依存関係が含まれる場合があります。依存関係には、独自の依存関係がある場合があります。

プロジェクトで必要になる可能性のある便利な依存関係の簡単な例は、相対日付を人間が判読できるテキストとして計算するコードです。 もちろん自分でコーディングすることもできますが、他の誰かがすでにこの問題を解決している可能性が高いです。 さらに、信頼できるサードパーティの依存関係は、さまざまな状況でテストされている可能性が高く、独自のソリューションよりも堅牢でクロスブラウザー互換性があります.

プロジェクトの依存関係は、React や Vue などの JavaScript ライブラリまたはフレームワーク全体、または人間が読める日付ライブラリのような非常に小さなユーティリティ、または以前の記事で説明した Prettier や ESLint などのコマンドラインツールである可能性があります。

最新のビルド ツールがなければ、単純な [`<script>`](/en-US/docs/Web/HTML/Element/script) 要素を使用して、このような依存関係をプロジェクトに含めることができますが、これはすぐには機能しない可能性があります。 また、コードと依存関係が Web 上にリリースされるときに、コードと依存関係を一緒にバンドルするための最新のツールが必要になる可能性があります。 バンドルとは、通常、ソフトウェアのすべての JavaScript を含む Web サーバー上の単一のファイルを指すために使用される用語です。通常、ソフトウェアをダウンロードしてブラウザの訪問者に表示にかかる時間を短縮するために、可能な限り圧縮されています。

さらに、現在のツールの代わりに使用したいより良いツールを見つけた場合、または更新したい依存関係の新しいバージョンがリリースされた場合はどうなりますか? これは、いくつかの依存関係についてはそれほど苦痛ではありませんが、多くの依存関係がある大規模なプロジェクトでは、この種のことを追跡するのが非常に困難になる可能性があります。 npm などの **パッケージ マネージャー** を使用する方が理にかなっています。これにより、コードがクリーンに追加および削除され、他の多くの利点が得られることが保証されます。

## パッケージマネージャーとは正確には何ですか？

[npm](https://www.npmjs.com/) については既に触れましたが、npm 自体から離れて、パッケージマネージャーはプロジェクトの依存関係を管理するシステムです。

パッケージマネージャーは、新しい依存関係 (「パッケージ」とも呼ばれます) をインストールする方法を提供し、ファイルシステム上のパッケージの保存場所を管理し、独自のパッケージを公開する機能を提供します。

理論的には、パッケージマネージャーは必要なく、プロジェクトの依存関係を手動でダウンロードして保存することもできますが、パッケージマネージャーはパッケージのインストールとアンインストールをシームレスに処理します。 使用していない場合は、手動で処理する必要があります。

- すべての正しいパッケージ JavaScript ファイルの検索。
- それらをチェックして、既知の脆弱性がないことを確認します。
- それらをダウンロードして、プロジェクト内の正しい場所に配置します。
- アプリケーションにパッケージを含めるためのコードを作成します (これは、よく読んで理解する価値のあるもう 1 つの主題である [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules) モジュールを使用して行われます)。
- すべてのパッケージのサブ依存関係 (数十または数百になる可能性があります) に対して同じことを行います。
- パッケージを削除する場合は、すべてのファイルを再度削除します。

さらに、パッケージマネージャーは重複した依存関係 (フロントエンド開発で重要かつ一般的になるもの) を処理します。

npm (と JavaScript と Node ベースのパッケージマネージャー) の場合、依存関係をインストールする場所には 2 つのオプションがあります。 前回の記事で触れたように、依存関係はプロジェクトにグローバルまたはローカルにインストールできます。 グローバルにインストールする方がメリットが多い傾向にありますが、コードの移植性やバージョンのロックなど、ローカルにインストールする方がより重要です。

たとえば、プロジェクトが特定の構成の Webpack に依存している場合、そのプロジェクトを別のマシンにインストールしたり、後でそのプロジェクトに戻ったりした場合でも、構成が引き続き機能することを確認する必要があります。 異なるバージョンの Webpack がインストールされている場合、互換性がない可能性があります。 これを軽減するために、依存関係がプロジェクトにローカルにインストールされます。

ローカルの依存関係が本当に輝いていることを確認するには、既存のプロジェクトをダウンロードして実行するだけです。ーそれが機能し、すべての依存関係が箱から出してすぐに機能する場合、コードが移植可能であるという事実に感謝するローカル依存関係があります。

> **メモ:** 利用可能なパッケージマネージャーは npm だけではありません。 成功し、人気のある代替パッケージマネージャーは [Yarn](https://yarnpkg.com/) です。 Yarn は別のアルゴリズムを使用して依存関係を解決します。これは、より高速なユーザー エクスペリエンスを意味します。 [pnpm](https://pnpm.js.org/) など、他の多くの新しいクライアントもあります。

## パッケージレジストリ

パッケージマネージャーが機能するには、どこからパッケージをインストールするかを知る必要があり、これはパッケージレジストリの形式で提供されます。 レジストリは、パッケージが公開され、そこからインストールできる中心的な場所です。 npm は、パッケージマネージャーであるだけでなく、JavaScript パッケージで最も一般的に使用されるパッケージ レジストリの名前でもあります。 npm レジストリは [npmjs.com](https://www.npmjs.com/) にあります。

npm だけが選択肢ではありません。 独自のパッケージ レジストリを管理できます。[Microsoft Azure](https://azure.microsoft.com/) などの製品を使用すると、npm レジストリへのプロキシを作成できます (特定のパッケージをオーバーライドまたはロックできます)。[GitHub もパッケージレジストリサービス提供しています。](https://github.com/features/packages) であり、時間が経つにつれてより多くのオプションが表示される可能性があります。

重要なのは、自分に最適なレジストリを選択したことを確認することです。 多くのプロジェクトで npm が使用されるため、モジュールの残りの例ではこれに関係します。

## パッケージエコシステムの使用

パッケージマネージャーとレジストリを使用してコマンドラインユーティリティをインストールするための例を見てみましょう。

[Parcel](https://parceljs.org/) は、開発者が開発プロセスでよく使用する別のツールです。 Parcel は、依存関係の呼び出しについてコードの内容を監視し、コードが必要とするすべての依存関係を自動的にインストールするという点で賢いです。 また、コードを自動的にビルドすることもできます。

### アプリを npm パッケージとしてセットアップする 

まず、実験的なアプリを保存するための新しいディレクトリを作成します。 これを parcel-experiment と呼びますが、好きなように呼ぶことができます。

```bash
mkdir parcel-experiment
cd parcel-experiment
```

次に、構成ファイルを作成する npm パッケージとしてアプリを初期化しましょう — `package.json` — これにより、後でこの環境を再作成したり、パッケージを npm レジストリに公開したりする場合に備えて、構成の詳細を保存できます (ただし、これはこの記事の範囲を超えています)。

`parcel-experiment` ディレクトリ内で、次のコマンドを入力します。

```bash
npm init
```

ここで、いくつか質問されます。 npm は、回答に基づいてデフォルトの `package.json` ファイルを作成します。

- `name`: アプリを識別するための名前。

  <kbd>Return</kbd> を入力します。

  デフォルトの `parcel-experiment` がアプリ名になります。

- `version`: アプリの開始バージョン番号。

  再度 <kbd>Return</kbd> を入力します。

  デフォルトの `1.0.0` がアプリの開始バージョン番号になります。

- `description`: アプリの目的の簡単な説明。 「npm の使い方を学ぶための簡単な npm パッケージ」など、非常に簡単なことを入力してから、

  <kbd>Return</kbd> を入力します。

- `entry point`: これは、アプリの最上位の JavaScript ファイルになります。 今のところデフォルトの `index.js` で問題ありません。 — 

  <kbd>Return</kbd> を入力します。

- `test command`, `git repository`, と `keywords` :

  <kbd>Return</kbd> を入力します。

  それぞれを入力する時は、空白のままにしておきます。 

- `author`: プロジェクトの作成者。 自分の名前を入力し、

  <kbd>Return</kbd> を入力します。

- `license`: パッケージを公開するためのライセンス。 

  <kbd>Return</kbd> を入力します。

  ここではデフォルトを設定します。 

これらの設定を受け入れるためにもう一度 <kbd>Return</kbd> を入力します。

`parcel-experiment` ディレクトリに移動すると、package.json ファイルが作成されていることがわかります。 それを開くと、次のようになります。 

```json
{
  "name": "parcel-experiment",
  "version": "1.0.0",
  "description": "A simple npm package to learn about using npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Chris Mills",
  "license": "ISC"
}
```

したがって、これはパッケージを定義する構成ファイルです。 今はこれでいいので、先に進みます。

### Parcel のインストール

次のコマンドを実行して、Parcel をローカルにインストールします。 

```bash
npm install parcel-bundler
```

上記コマンドが全て完了すると、"最新のクライアント側開発" の準備が整います (これは、ビルド ツールを使用して、開発者のエクスペリエンスを少し簡単にすることを意味します)。 ただし、まず最初に、package.json ファイルをもう一度見てください。 npm が新しいフィールドの依存関係を追加したことがわかります。

```json
"dependencies": {
  "parcel-bundler": "^1.12.4"
}
```

これは npm マジックの一部です。将来、コードベースを別の場所、別のマシンに移動した場合、コマンドを実行して同じセットアップを再作成できます。`npm install` を実行すると npm が依存関係を調べてインストールします。

欠点の 1 つは、Parcel が `parcel-experiment` アプリ内でしか利用できないことです。 別のディレクトリで実行することはできません。 しかし、利点は欠点を上回ります。

### サンプルアプリのセットアップ 

とにかく、セットアップを続けます。 

Parcel は `index.html` と `index.js` ファイルが動作することを期待していますが、それ以外の場合、プロジェクトをどのように構築するかについて非常に意見がありません。 他のツールは非常に異なる場合がありますが、少なくとも Parcel は最初の実験を容易にします。

そのため、 `index.html` ファイルを作業ディレクトリに追加する必要があります。 テスト ディレクトリに `index.html` を作成し、次の内容を指定します。

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

次に、 `index.html` と同じディレクトリに `index.js` ファイルを追加する必要があります。 今のところ、 `index.js` は空で構いません。 存在する必要があるだけです。 これを今すぐ作成します。

### Parcel を楽しむ

次に、新しくインストールした Parcel ツールを実行します。 ターミナルで、次のコマンドを実行します。

```bash
 parcel index.html
```

ターミナルに次のような出力が表示されるはずです。

```bash
Server running at http://localhost:1234
✨  Built in 193ms.
```

> **メモ:** "command not found" エラーをターミナルに返す場合は、上記のコマンドを `npx` ユーティリティ、つまり `npx parcel index.html`で実行してみてください。

これで、完全な JavaScript パッケージ エコシステムを活用する準備が整いました。 まず、 `http://localhost:1234` で実行されているローカル Web サーバーがあります。 ここにアクセスすると、今のところ何も表示されませんが、すばらしいのは、アプリに変更を加えると、Parcel がアプリを再構築してサーバーを自動的に更新するため、更新の効果をすぐに確認できることです。

次に、いくつかのページ コンテンツについて説明します。 「2時間前」、「4日前」など、人間が読める相対的な日付を表示したいとしましょう。 [`date-fns`](https://date-fns.org/) パッケージの `formatDistanceToNow()` メソッドは役立ちます (同じことを行う他のパッケージもあります)。

`index.js` ファイルに次のコードを追加して保存します。

```js
import { formatDistanceToNow } from "date-fns";

const date = "1996-09-13 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
```

`http://localhost:1234` に戻ると、作者が 18 歳になってからどれくらい経ったかがわかります。

上記のコードで特に特別なのは、インストールしていない `date-fns` パッケージの `formatDistanceToNow()` 関数を使用していることです! Parcel は、モジュールが必要であることを発見し、 `npmjs.com` パッケージ レジストリで検索して、自動的にローカルにインストールしました。 これは、 `package.json` ファイルをもう一度見ることで証明できます — `dependencies` フィールドが更新されていることがわかります。

```json
"dependencies": {
  "date-fns": "^2.12.0",
  "parcel-bundler": "^1.12.4"
}
```

Parcel は、他の誰かがこのプロジェクトを取得し、使用した依存関係をインストールするために必要なファイルも追加しました。 `parcel` コマンドを実行したディレクトリを調べると、多数の新しいファイルが見つかります。 最も興味深いものは次のとおりです。

- `node_modules`: Parcel と date-fns の依存ファイル。
- `dist`: 配布ディレクトリ — これらは、自動的にパッケージ化され、Parcel がビルドして縮小したファイルであり、 `localhost:1234` で提供されているファイルです。 これらは、サイトを公開してオンラインで公開するときに Web サーバーにアップロードするファイルです。

パッケージ名を知っている限り、コードでそれを使用でき、Parcel はパッケージをローカルディレクトリ (`node_modules` の下) に取り出し、フェッチし、インストール (実際には「コピー」) します。

### Building our code for production

However, this code is not ready for production. Most build tooling systems will have a "development mode" and a "production mode". The important difference is that a lot of the helpful features you will use in development are not needed in the final site, so will be stripped out for production, e.g. "hot module replacement", "live reloading", and "uncompressed and commented source code". Though far from exhaustive, these are some of the common web development features that are very helpful at the development stage but are not very useful in production. In production, they will just bloat your site.

Now stop the previous Parcel command using <kbd>Ctrl</kbd> + <kbd>C</kbd>.

We can now prepare our bare bones example site for an imaginary deployment. Parcel provides an additional command to generate files that are suited to publication, making bundles (mentioned earlier) with the build option.

Run the following command:

```bash
parcel build index.html
```

You should see an output like so:

```bash
✨  Built in 9.35s.

dist/my-project.fb76efcf.js.map    648.58 KB     64ms
dist/my-project.fb76efcf.js        195.74 KB    8.43s
dist/index.html                        288 B    806ms
```

Again, the destination for our production files is the `dist` directory.

### Reducing your app's file size

However, as with all tools that "help" developers there's often a tradeoff. In this particular case, it's the file size. The JavaScript bundle my-project.fb76efcf.js is a whopping 195K — very large, given that all it does is print a line of text. Sure, there's some calculation, but we definitely don't need 195K worth of JavaScript to do this!

When you use development tooling it's worth questioning whether they're doing the right thing for you. In this case, the bundle is nearly 200K because it has in fact included the entire `date-fns` library, not just the function we're using.

If we had avoided any development tools and pointed a `<script src="">` element to a hosted version of `date-fns`, roughly the same thing would have happened — all of the library would be downloaded when our example page is loaded in a browser.

However, this is where development tooling has a chance to shine. Whilst the tooling is on our machine, we can ask the software to inspect our use of the code and only include the functions that we're actually using in production — a process known as "Tree Shaking".

This makes a lot of sense as we want to reduce file size and thus make our app load as quickly as possible. Different tooling will let you tree shake in different ways.

Although the list grows by the month, there are three main offerings for tools that generate bundles from our source code: Webpack, [Rollup](https://rollupjs.org/guide/en/), and Parcel. There will be more available than this, but these are popular ones:

- The RollUp tool offers tree shaking and code splitting as its core features.
- Webpack requires some configuration (though "some" might be understating the complexity of some developers' Webpack configurations).
- In the case of Parcel (prior to Parcel version 2), there's a special flag required — `--experimental-scope-hoisting` — which will tree shake while building.

Let's stick with Parcel for now, given that we've already got it installed. Try running the following command:

```bash
parcel build index.html --experimental-scope-hoisting
```

You'll see that this makes a huge difference:

```bash
✨  Built in 7.87s.

dist/my-project.86f8a5fc.js    10.34 KB    7.17s
dist/index.html                   288 B    753ms
```

Now the bundle is approximately 10K. Much better.

If we were to release this project to a server, we would only release the files in the `dist` folder. Parcel has automatically handled all the filename changes for us. We recommend having a look at the source code in `dist/index.html` just so you can see what changes Parcel has performed automatically.

> **Note:** At the time of writing, Parcel 2 had not been released. However when it does, these commands will all still work because the authors of Parcel have had the good sense to name the tool slightly differently. To install Parcel 1.x you have to install `parcel-bundler`, but parcel 2.x is called `parcel`.

There's a lot of tools available and the JavaScript package ecosystem is growing at an unprecedented rate, which has pros and cons. There's improvements being made all the time and the choice, for better or worse, is constantly increasing. Faced with the overwhelming choice of tooling, probably the most important lesson is to learn what the tool you select is capable of.

## A rough guide to package manager clients

This tutorial installed the Parcel package using npm, but as mentioned earlier on there are some alternatives. It's worth at least knowing they exist and having some vague idea of the common commands across the tools. You've already seen some in action, but let's look at the others.

The list will grow over time, but at the time of writing, the following main package managers are available:

- npm at [npmjs.org](https://www.npmjs.com/)
- pnpm at [pnpm.js.org](https://pnpm.js.org/)
- Yarn at [yarnpkg.com](https://yarnpkg.com/)

npm and pnpm are similar from a command line point of view — in fact, pnpm aims to have full parity over the argument options that npm offers. It differs in that it uses a different method for downloading and storing the packages on your computer, aiming to reduce the overall disk space required.

Where npm is shown in the examples below, pnpm can be swapped in and the command will work.

Yarn is often thought to be quicker than npm in terms of the installation process (though your mileage may vary). This is important to developers because there can be a significant amount of time wasted on waiting for dependencies to install (and copy to the computer).

> **Note:** The npm package manager is **not** required to install packages from the npm registry, even though they share the same name. pnpm and Yarn can consume the same `package.json` format as npm, and can install any package from the npm and other package registries.

Let's review the common actions you'll want to perform with package managers.

### Initialise a new project

```bash
npm init
yarn init
```

As shown above, this will prompt and walk you through a series of questions to describe your project (name, license, description, and so on) then generate a `package.json` for you that contains meta-information about your project and its dependencies.

### Installing dependencies

```bash
npm install date-fns
yarn add date-fns
```

We also saw `install` in action above. This would directly add the `date-fns` package to the working directory in a subdirectory called `node_modules`, along with `date-fns`'s own dependencies.

By default, this command will install the latest version of `date-fns`, but you can control this too. You can ask for `date-fns@1`, which gives you the latest 1.x version (which is 1.30.1). Or you could try `date-fns@^2.3.0`, which means the latest version after or including 2.3.0 (2.8.1 at the time of writing).

### Updating dependencies

```bash
npm update
yarn upgrade
```

This will look at the currently installed dependencies and update them, if there is an update available, within the range that's specified in the package.

The range is specified in the version of the dependency in your `package.json`, such as `date-fns@^2.0.1` — in this case, the caret character `^` means all minor and patch releases after and including 2.0.1, up to but excluding 3.0.0.

This is determined using a system called [semver](https://semver.org/), which might look a bit complicated from the documentation but can be simplified by considering only the summary information and that a version is represented by `MAJOR.MINOR.PATCH`, such as 2.0.1 being major version 2 with patch version 1. An excellent way to try out semver values is to use the [semver calculator](https://semver.npmjs.com/).

It's important to remember that `npm update` will not upgrade the dependencies to beyond the range defined in the `package.json` — to do this you will need to install that version specifically.

### Audit for vulnerabilities

```bash
npm audit
yarn audit
```

This will check all of the dependency tree for your project and run the specific versions you're using against a vulnerability database and notify you if there are potential vulnerable packages in your project.

A good starting point for learning about vulnerabilities is the [Snyk project](https://snyk.io/), which covers both JavaScript packages and other programming languages.

### Checking on a dependency

```bash
npm ls date-fns
yarn why date-fns
```

This command will show what version of a dependency is installed and how it came to be included in your project. It's possible that another, top-level, package could have pulled in `date-fns`. It's equally possible (and not ideal) that you have multiple versions of a package in your project (this has been seen many times over with the [lodash](https://lodash.com/) package, as it's so useful).

Although the package manager will do its best to deduplicate packages you may want to investigate exactly which version is installed.

### More commands

You can find out more about the individual commands for [npm](https://docs.npmjs.com/cli-documentation/) and [yarn](https://classic.yarnpkg.com/en/docs/cli/) online. Again, [pnpm](https://pnpm.js.org/en/cli/add) commands will have parity with npm, with a handful of additions.

## Making your own commands

The package managers also support creating your own commands and executing them from the command line. For instance, we could create the following command:

```bash
npm run dev
# or yarn run dev
```

This would run a custom script for starting our project in "development mode". In fact, we regularly include this in all projects as the local development setup tends to run slightly differently to how it would run in production.

If you tried running this in your Parcel test project from earlier it would (likely) claim the "dev script is missing". This is because npm, Yarn (and the like) are looking for a property called dev in the `scripts` property of your `package.json` file.

Parcel can run a development server using the command `parcel serve filename.html`, and we'd like to use that often during our development.

So, let's create a custom shorthand command — "dev" — in our `package.json`.

If you followed the tutorial from earlier, you should have a `package.json` file inside your parcel-experiment directory. Open it up, and its `scripts` member should look like this:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Update it so that it looks like this, and save the file:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "parcel serve index.html"
},
```

We've added a custom `dev` command as an npm script.

Now try running the following in your terminal, making sure you are inside the `parcel-experiment` directory:

```bash
 npm run dev
```

This should start Parcel and serve up your `index.html` at the local development server, as we saw before:

```bash
Server running at http://localhost:1234
✨  Built in 5.48s.
```

In addition, the npm (and yarn) commands are clever in that they will search for command line tools that are locally installed to the project before trying to find them through conventional methods (where your computer will normally store and allow software to be found). You can [learn more about the technical intricacies of the `run` command](https://docs.npmjs.com/cli/run-script/), although in most cases your own scripts will run just fine.

You can add all kinds of things to the `scripts` property that help you do your job. We certainly have, and [others have too](https://github.com/facebook/create-react-app/blob/c5b96c2853671baa3f1f297ec3b36d7358898304/package.json#L6).

## Summary

This brings us to the end of our tour of package managers. Our next move is to build up a sample toolchain, putting all that we've learnt so far into practice.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## See also

- [npm scripts reference](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
