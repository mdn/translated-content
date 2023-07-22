---
title: 完全なツールチェーンの導入
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

シリーズの最後の 2 つの記事では、ケーススタディのツールチェインサンプルを構築するプロセスを通して、ツールに関する知識を理解していきます。理にかなった開発環境のセットアップと変換ツールの配置から、実際にNetlifyにアプリをデプロイするまでの全過程を説明します。この記事では、ケーススタディの紹介、開発環境のセットアップ、コード変換ツールのセットアップを行います。

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
        ツールチェーンのケーススタディの演習を完了して、これまでに学んだことを確実に理解します。
      </td>
    </tr>
  </tbody>
</table>

ツールとその使用方法の組み合わせは実際に無限にあります。この記事と次の記事で説明したことは、プロジェクトで注目のツールを使用できる _1つの_ 方法にすぎません。

> **メモ:** これらのツールのすべてをコマンドラインで実行する必要があるわけではないことも繰り返し述べておきます。 現在のコードエディター (VS Code や Atom など) の _多く_ は、プラグインを介して多数のツールの統合をサポートしています。

## ツールチェーンのケーススタディの事例紹介

この記事で作成しているツールチェーンは、地球上の私たちの存在を脅かす潜在的に危険な宇宙物体に関するデータ ([NASA's open APIs](https://api.nasa.gov/) の 1 つから取得) をリストするミニサイトを構築して展開するために使用されます。 次のようになります。

![screenshot of the sample will it miss website](will-it-miss-screenshot.png)

このサイトのライブバージョンは、[near-misses.netlify.com](https://near-misses.netlify.app/) でご覧いただけます。

## ツールチェーンで使用されるツール

この記事では、次のツールと機能を使用します。

- [JSX](https://reactjs.org/docs/introducing-jsx.html)は、[React](https://reactjs.org) に関連する構文拡張のセットで、JavaScript 内でコンポーネント構造を定義するなどの作業を可能にします。このチュートリアルに行うのに React を理解する必要はありませんが、非ネイティブ Web 言語をツールチェーンに統合する方法を理解するためにこれを含めました。
- [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) などの最新の組み込み JavaScript 機能（執筆時点）です。
- フォーマット用の [Prettier](https://prettier.io/) や lint 用の [ESLint](https://eslint.org/) などの便利な開発ツール。
- [PostCSS](https://postcss.org/) は、CSS のネスティング機能を提供します。
- [Parcel](https://parceljs.org/) コードをビルドして縮小し、多数の構成ファイルのコンテンツを自動的に書き込みます。
- [GitHub](/ja/docs/Learn/Tools_and_testing/GitHub) を使ってソースコードを管理しています。
- [Netlify](https://www.netlify.com/) を使ってデプロイプロセスを自動化します。

上記の機能やツールが何をするものなのか、よく知らないかもしれないが、パニックにならないでください。この記事を進めながら各部分について説明します。

## ツールチェーンとその固有の複雑さ

他のチェーンと同様にツールチェーン内のリンクが増えるほど、ツールチェーンはより複雑になり脆弱になる可能性があります。たとえば構成がより複雑になり、壊れやすくなる可能性があります。 逆にリンクが少ないほど、ツールチェーンは壊れにくくなる可能性があります。

すべてのウェブプロジェクトは異なるため、ツールチェーンのどの部分が必要かを検討し、それぞれの部分を慎重に検討する必要があります。

最小のツールチェーンは、リンクがまったくないツールチェーンです。 HTML を手動でコーディングし、「vanilla JavaScript」 (フレームワークや中間言語を使用しないことを意味します) を使用し、それをすべて手動でサーバーにアップロードしてホスティングします。

しかし、より複雑なソフトウェア要件の場合は、開発プロセスを簡素化するツールを使用することで恩恵を得られる可能性があります。 さらに、本番サーバーにデプロイする前にソフトウェアが意図したとおりに動作することを確認するテストを含める必要があります。これはすでに必要なツールチェーンのように思えます。

サンプルプロジェクトではソフトウェア開発を支援し、ソフトウェア設計段階での技術的選択をサポートするために特別に設計されたツールチェーンを使用します。 ただし、複雑さを最小限に抑えることを目的としてて、余計なツールは使わないようにします。

例えば、ビルド中に SVG ファイルサイズを最小化するツールを組み込むこともできたかもしれません。 しかし、このプロジェクトには SVG 画像が 4 つしかなく、プロジェクトに追加する前に [SVGO を使用して手動で縮小](https://www.npmjs.com/package/svgo) しました。

## いくつかの前提条件

ツールチェーンに貢献するこれからインストールするツールの他に、上記のツールのリストで 2 つのウェブサービスを紹介しました。先に進む前にこの機会を利用して、セットアップが完了していることを確認しましょう。 チュートリアルを完了するには、GitHub と Netlify のアカウントを作成する必要があります。

- 前述したように、GitHub はソースコードリポジトリサービスであり、課題の追跡やプロジェクトのリリースのフォローなどのコミュニティ機能を追加しています。次の章では、GitHubのコードリポジトリにプッシュして、すべてのソフトウェアをウェブ上のホームにデプロイする（はずの）カスケード効果を引き起こします。
- Netlify は、静的ウェブサイト (つまり、リアルタイムでは変更されないファイルで完全に構成されているウェブサイト) 用のホスティングサービスです。これにより、1 日に何度もデプロイすることができ、あらゆる種類の静的サイトを自由にホストできます。 Netlify は、前述の「ウェブ上のホーム」、つまりテスト アプリをデプロイするための無料のホスティングを提供するものです。

[GitHub](https://github.com/) にサインアップすると（まだアカウントをお持ちでない場合は、ホームページの _Sign Up_ リンクをクリックし、指示に従ってください）、 [Netlify](https://www.netlify.com/) での認証に GitHub アカウントを使用できるようになる(_Sign Up_ をクリックし、[次のいずれかでサインアップ] リストから _GitHub_ を選択してください)ので、技術的には新しいアカウントを1つ作るだけで済みます。

後で、このプロジェクトをデプロイするために Netlify アカウントを GitHub リポジトリに接続する必要があります。 その方法については次の章で説明します。


## 3　段階のツール

[クライアントサイドツールの概要](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)で説明したようにツールチェーンは次のフェーズで構成されます。

- **セーフティネット**: ソフトウェア開発体験を安定させ、より効率的にします。 これを開発環境と呼ぶこともあります。
- **トランスフォーメーション**: 開発プロセスにおいて、ある言語 (JavaScript など) または別の言語全体 (JSX や TypeScript など) の最新機能を使用できるようにし、製品版がモダンなものから古いものまで、さまざまなブラウザで動作するようにコードを変換します。
- **ポスト開発**: 開発本体が終了後に、ソフトウェアがウェブに公開され、実行され続けることを保証するために使用するツールです。このケーススタディでは、コードにテストを追加し、Netlify を使用してアプリをデプロイし、ウェブ上で利用できるようにします。

開発環境から始めて、これらに取り組みましょう。

## 開発環境の構築

ツールチェーンのこの部分が実際の作業を遅らせているように見えることがあります。環境を「適切な」状態にするために多くの時間を費やすという、ツールの「ウサギの穴」にはまりやすい可能性があります。

しかし、これは物理的な作業環境を整えるのと同じように考えることができます。 椅子は快適であり、姿勢を助けるために適切な位置に設置されている必要があります。 電源、Wi-Fi、USB ポートが必要です。 あなたの精神状態を助ける重要な装飾や音楽があるかもしれません。これらはすべて、可能な限り最高の仕事をするために重要であり、適切に行われれば、セットアップは 1 回だけで済みます。

同様に、開発環境のセットアップは、うまくいけば、一度だけ行えばよく、将来の多くのプロジェクトで再利用できるはずです。 おそらく、ツールチェーンのこの部分を半定期的に確認し、導入すべきアップグレードや変更があるかどうかを検討することをお勧めしますが、これはあまり頻繁に行う必要はありません。

ツールチェーンはユーザー自身のニーズによって異なりますが、この (可能な) 完全なツールチェーンの例では、事前にインストールされるツールは次のとおりです。

- ライブラリインストールツール — 依存関係を追加するためのツール
- コードリビジョン管理
- コード整理ツール — JavaScript、CSS、HTML の整理
- コード lint ツール — コードを lint するためのツール


### ライブラリーインストールツール

第 2 章で初めて説明した npm を使用してツールをインストールします。Node.js と npm がすでにインストールされている必要がありますが、インストールされていない場合は、[そのセクションを参照してください](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups)。

> **メモ:** インストールプロセスから分かりませんが、npm をインストールすると、npx と呼ばれる補完ツールもインストールされます。 この章の後半では、プロジェクトのローカル依存関係としてインストールされているツールの実行に役立つ npx を使用します。

npm は、ツールチェーンの後続の部分をインストールするために使用されます。 ただし、まず最初に、リビジョン管理を支援するために git をインストールします。

### コードリビジョン管理

「git」について聞いたことがあるかもしれません。 [Git](https://git-scm.com/) は現在、開発者が利用できる最も人気のあるソースコードのリビジョン管理ツールです。リビジョン管理には、作業内容を遠隔地にバックアップする方法や、互いのコードを上書きすることを恐れずに同じプロジェクトでチームで作業するメカニズムなど、多くの利点があります。

当たり前のことかもしれないが、繰り返す伝える必要があります。Git は GitHub と同じではありません。 Git はリビジョン管理ツールですが、 [GitHub](https://github.com/) は git リポジトリ (およびそれらを操作するための便利なツール) のオンラインストアです。 この章では GitHub を使用していますが、 [GitLab](https://about.gitlab.com/) や [Bitbucket](https://www.atlassian.com/software/bitbucket) などの代替手段がいくつかあり、独自の Git リポジトリをホストすることもできます。

プロジェクトでリビジョン管理を使用し、ツールチェーンの一部として組み込むことは、コードの進化を管理するのに役立ちます。 これは、「X 個の新機能が実装されました」または「Y 個の変更によりバグ Z が修正されました」などのコメントとともに、作業の進行に合わせて作業ブロックを「コミット」する方法を提供します。

リビジョン管理を使用すると、変更が元のコードに影響を与えることなく、プロジェクトコードを「分岐」して別のバージョンを作成し、新しい機能を試すこともできます。

最後に、どこかに間違いが生じて修正が困難な場合に、変更を元に戻したり、コードを「動作していたとき」の状態に戻したりするのに役立ちます。これはすべての開発者が時々行う必要があります。

Git は [git-scm をウェブサイトからダウンロードしてインストールする](https://git-scm.com/downloads)ことができます。あなたのシステムに合ったインストーラーをダウンロードして実行し、画面の指示に従ってください。今のところ、必要なことはこれだけです。

コマンドラインを使ってコマンドを発行したり、[git GUIアプリ](https://git-scm.com/downloads/guis) を使ってボタンを押すことで同じコマンドを発行したり、あるいは以下の Visual Studio Code の例にあるように、コードエディターの中から直接操作したりと、さまざまな方法でgitと対話することができます。

![GitHub integration shown in VS Code](vscode-git.png)

とにかく、今のところやるべきことは git をインストールすることだけです。 次へ移りましょう。

### コード整理ツール

このプロジェクトでは、第 2 章で最初に説明した Prettier を使用してコードを整形します。 [Prettier のインストール](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#installing_prettier) セクションの指示に従っている場合は、すでに Prettier がインストールされている可能性があります。 そうでない場合は、今すぐターミナルを使用して Prettier をグローバル ユーティリティとしてインストールするように指示します。

次のコマンドを使用して、すでにグローバルにインストールされているかどうかを確認できます。

```bash
prettier -v
```

インストールされている場合は、2.0.2 のようなバージョン番号が返されます。 そうでない場合は、「command not found」のような内容が返されます。 この場合は、次のコマンドを使用してインストールします。

```bash
npm install prettier -g
```

Prettier がインストールされたので、コンピューター上のどこからでもコマンドラインで個々のファイルごとにコードの実行と整形を行うことができます。次に例を示します。

```bash
prettier --write ./src/index.html
```

> **メモ:** 上記のコマンドでは、`--write` フラグを指定して Prettier を使用しています。 Prettier は、これが「コードフォーマットに問題があれば、それを修正してからファイルを保存してください」という意味であると理解しています。 これは開発プロセスには問題ありませんが、フラグなしで `prettier` を使用することもでき、ファイルのチェックのみが行われます。 ファイルをチェックする (保存しない) ことは、リリース前に実行されるチェック、つまり「適切にフォーマットされていないコードをリリースしない」などの目的に役立ちます。

各ファイルに対して最初のコマンドを実行するのは大変なので、これを実行する単一のコマンドがあれば便利です ( lint ツールにも同じことが言えます)。

この問題を解決するには多くの方法があります。 ここにほんの一部を示します。

- npm スクリプトを使用して、コマンドラインから複数のコマンドを一度に実行します ( `npm run tidy-code` など)。
- 特別な「git hooks」を使用して、コミット前にコードがフォーマットされているかどうかをテストします。
- コードエディタープラグインを使用して、ファイルが保存されるたびに Prettier コマンドを実行します。

> **メモ:** git hooks とは何ですか? Git (GitHub ではありません) は、git で実行するタスク (コードのコミットなど) にプレアクションとポストアクションを付加できるシステムを提供します。 git hooks は (この著者の意見では) 少し複雑すぎるかもしれませんが、一度導入すると非常に強力になります。 hooks の使用に興味がある場合は、 [Husky](https://github.com/typicode/husky) を参照すると、 hooks を使用するためのルートが大幅に簡素化されます。

VS Code の場合、便利な拡張機能の 1 つは [Prettier Code Formatter by Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) です。これを使うと、VSCode は保存時にコードを自動的に整形してくれます。 これは、HTML、CSS、JavaScript、JSON、マークダウンなど、作業中のプロジェクト内のすべてのファイルが適切にフォーマットされることを意味します。 エディターに必要なのは、「Format On Save」を有効にすることだけです。

最近作られた多くのツールと同様に、Prettier には「使いやすいデフォルト」が用意されてます。 つまり、何も設定せずに Prettier を使用できるようになります ([デフォルト](https://prettier.io/docs/en/configuration.html) に満足している場合)。 これにより、重要な創造的な作業に取り組むことができます。

### コード lint ツール

 lint はコードの品質を向上させるのに役立ちますが、開発中の早い段階で潜在的なエラーを発見する方法でもあります。 これは優れたツールチェーンの重要な要素であり、多くの開発プロジェクトにデフォルトで組み込まれることになります。

ウェブ開発用の lint ツールは、主に JavaScript 用に存在します (ただし、HTML と CSS 用に利用できるツールもいくつかあります)。 これは当然のことです。不明な HTML 要素または無効な CSS プロパティが使用された場合、これら 2 つの言語の回復力の性質により、何も壊れる可能性はありません。 JavaScript ははるかに脆弱です。たとえば、存在しない関数を誤って呼び出すと、JavaScript が壊れてしまいます。 したがって、JavaScript の lint は、特に大規模なプロジェクトの場合には非常に重要です。

JavaScriptの lint に最適なツールは [ESLint](https://eslint.org/) です。 ESLint は非常に強力で多機能なツールですが、正しく設定するのは難しいので、設定を正しくするのに何時間も費やしてしまう可能性があります。

ESLint を実行すると、そのままでは設定ファイルが見つからないというメッセージが表示されます。 構成ファイルは複数の形式をサポートしていますが、このプロジェクトでは `.eslintrc.json` を使用します (先頭のピリオドはデフォルトで隠しファイルであることを意味します)。

ESLint は npm 経由でインストールされるため、第 2 章の説明に従って、このツールをローカルにインストールするかグローバルにインストールするかを選択できます。 両方を使用することをお勧めします。

- 共有するプロジェクトでは、独自のコピーを作成する誰もがプロジェクトに適用したルールに従うことができるように、常に ESLint をローカル依存関係として含める必要があります。
- ESLint をグローバルにインストールして、必要なファイルをすぐにチェックできるようにすることも検討してください。

わかりやすくするために、この章では ESLint のすべての機能については説明しませんが、特定のプロジェクトとその要件に適した構成を導入します。 ただし、コードの外観 (または検証) に関するルールを調整して強制したい場合は、適切な ESLint 構成を使用することで実現できる可能性が高いことに留意してください。

この章の少し後で、ESLint 構成を提供します。 動作する構成が設定されたら、コマンドを実行すると有用な情報が得られます。 ESLint の出力例を次に示します。

```bash
./my-project/src/index.js
   2:8 error 'React' is defined but never used  no-unused-vars
 22:20 error 'body' is defined but never used   no-unused-vars
 96:19 error 'b' is defined but never used      no-unused-vars

✖ 3 problems (3 errors, 0 warnings)
```

> **メモ:** 次のセクションでESLintをインストールしますが、今は気にしないでください。

他のツールと同様に、コードエディターとの統合サポートは、通常 ESLint に適しており、問題が発生したときにリアルタイムのフィードバックを提供できるため、より便利になる可能性があります。

![ESLint error integration shown in VS Code](eslint-error.png)

## 初期プロジェクトの設定

これらのツールを使用すると、多くの「基本的な」問題が早い段階で発見されることがわかっているので、新しいプロジェクトを安全にセットアップできます。

コマンドラインを使用して、プロジェクトを作成し、初期ツールをインストールし、基本的な構成ファイルを作成できます。 繰り返しになりますが、このプロセスを数回繰り返すと、デフォルトの設定がどのようなものであるかがわかるようになります。 もちろん、これは可能な構成の 1 つにすぎません。

### 初期設定

OK、プロジェクトの初期設定を済ませましょう。

1. まずターミナルを開いて、見つけやすい場所に移動します。 デスクトップ、あるいはホームフォルダーやドキュメントフォルダーでしょうか?
2. 次に、次のコマンドを実行してプロジェクトを保存するフォルダーを作成し、そのフォルダー内に移動します。

   ```bash
   mkdir will-it-miss
   cd will-it-miss
   ```

3. 次に、ウェブサイトのすべての開発コードが存在する新しいディレクトリを作成します。今すぐ次のコマンドを実行します。

   ```bash
   mkdir src
   ```

   コードの構成は、チームごとにかなり主観的なものになる傾向があります。 このプロジェクトの場合、ソース コードは `src` 内に存在します。

4. `will-it-miss` ディレクトリのルート内にいることを確認し、次のコマンドを入力して、ディレクトリ上で動作する git のソース管理機能を開始します。

   ```bash
   git init
   ```

   つまり、フォルダーの内容のリビジョンを保存したり、リモート リポジトリへの保存などを開始できることを意味します。これについては後ほど詳しく説明します！

5. 次に、次のコマンドを入力して、ディレクトリを npm パッケージに変換します。これには、前の記事で説明した利点があります。

   ```bash
   npm init --force
   ```

   これにより、デフォルトの `package.json` ファイルが作成され、必要に応じて後で構成できます。 `--force` フラグを指定すると、コマンドは (前に見たように) どのようなコンテンツを含めるかについての通常の質問を一切せずに、デフォルトの `package.json` ファイルを即座に作成します。 現時点ではデフォルトのみが必要なので、これにより時間を少し節約できます。

#### Getting the project code files

At this point, we'll get hold of the project's code files (HTML, CSS, JavaScript, etc.), and put them in our `src` directory. We won't teach you how they work, as that is not the point of this chapter. They are merely here to run the tools on, to teach you about how _they_ work.

1. To get hold of the code files, visit <https://github.com/remy/mdn-will-it-miss> and download and unzip the contents of this repo onto your local drive somewhere. You can download the entire project as a zip file by selecting _Clone or download_ > _Download ZIP_.

   ![The GitHub will it miss repo](github-will-it-miss.png)

2. Now copy the contents of the project's `src` directory to your currently empty `src` directory.

We have our project files in place. That's all we need to do for now!

> **Note:** To set up the project on your local machine, go to the root directory of the unzipped folder, open a terminal in that location, and execute the `npm install` command in the terminal. This will install all project dependencies that are mentioned in the `package.json` file.

#### Installing our tools

Now it's time to install the initial set of tools we'll be using in our dev environment. Run the following from inside your project's root directory:

```bash
npm install --save-dev eslint prettier babel-eslint
```

There are two important things to note about the command you just ran. The first is that we're installing the dependencies locally to the project — installing tools locally is better for a specific project. Installing locally (not including the `--global` option) allows us to easily recreate this setup on other machines.

The second important part of this install command is the `--save-dev` option. This tells the npm tool that these particular dependencies are only needed for development (npm therefore lists them in the `package.json` file under `devDependencies`, not `dependencies`). This means that if this project is installed in production mode these dependencies will not be installed. A "typical" project can have many development dependencies which are not needed to actually run the code in production. Keeping them as separate dependencies reduces any unnecessary work when deploying to production (which we will look at in the next chapter).

Before starting on the development of the actual application code, a little configuration is required for our tools to work properly. It's not a prerequisite of developing for the web, but it's useful to have the tools configured correctly if they're going to help catch errors during development — which ESLint is particularly useful for.

### Configuring our tools

In the root of the project (not in the `src` directory), we will add configuration files to configure some of our tools, namely Prettier and ESLint. This is general practice for tool configuration — you tend to find the config files in the project root, which more often than not contain configuration options expressed in a JSON structure (though our tools and many others also support YAML, which you can switch to if that's your preferred flavor of the configuration file).

1. First of all, create a file in the root of your `will-it-miss` directory called `.prettierrc.json`.
2. To configure Prettier, give `.prettierrc.json` the following contents:

   ```json
   {
     "singleQuote": true,
     "trailingComma": "es5"
   }
   ```

   With these settings, when Prettier formats JavaScript for you it will use single quotes for all your quoted values, and it won't use trailing commas (a newer feature of ECMAScript that will cause errors in older browsers). You can find more about [configuring Prettier](https://prettier.io/docs/en/configuration.html) in its documentation.

3. Next up, we'll configure ESLint — create another file in the root of your `will-it-miss` directory called `.eslintrc.json`, and give it the following contents:

   ```json
   {
     "env": {
       "es6": true,
       "browser": true
     },
     "extends": "eslint:recommended",
     "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module"
     },
     "rules": {
       "no-console": 0
     }
   }
   ```

   The above ESLint configuration says that we want to use the "recommended" ESLint settings, that we're going to allow usage of ES6 features (such as [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) or [`Set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)), that we can use module [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) statements, and that using [`console.log()`](/en-US/docs/Web/API/console/log) is allowed.

4. However, in the project's source files we are using React JSX syntax (for your real projects you might use React or Vue or any other framework, or no framework at all!).

   Putting JSX syntax in the middle of our JavaScript is going to cause ESLint to complain pretty quickly with the current configuration, so we'll need to add a little more configuration to the ESLint settings to get it to accept JSX features.

   The final config file should look like this — add in the bolded parts and save it:

   ```json
   {
     "env": {
       "es6": true,
       "browser": true
     },
     "extends": ["eslint:recommended", "plugin:react/recommended"],
     "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module",
       "ecmaFeatures": {
         "jsx": true
       }
     },
     "plugins": ["react"],
     "rules": {
       "semi": "error",
       "no-console": 0,
       "react/jsx-uses-vars": "error"
     }
   }
   ```

   As the configuration now uses a plugin called "React", this development dependency also needs to be installed, so that the code is there to actually run that part of the linting process.

5. Run the following terminal command in the root of your project folder:

   ```bash
   npm install --save-dev eslint-plugin-react
   ```

There's a complete [list of ESLint rules](https://eslint.org/docs/rules/) that you can tweak and configure to your heart's content and many companies and teams have published their [own ESLint configurations](https://www.npmjs.com/search?q=keywords:eslintconfig), which can sometimes be useful either to get inspiration or to select one that you feel suits your own standards. A forewarning though: ESLint configuration is a very deep rabbit hole!

That's our dev environment setup complete at this point. Now, finally we're (very nearly) ready to code.

## Build and transformation tools

For this project, as mentioned above, React is going to be used, which also means that JSX will be used in the source code. The project will also use the latest JavaScript features.

An immediate issue is that no browser has native support for JSX; it is an intermediate language that is meant to be compiled into languages the browser understands in the production code.

If the browser tries to run the source JavaScript it will immediately complain; the project needs a build tool to transform the source code to something the browser can consume without issue.

There's a number of choices for transform tools and though WebPack is a particularly popular one, this project is going to use Parcel — specifically because it requires a lot less configuration.

Parcel works on the basis that it will try to configure your development requirements on the fly. Parcel will watch the code and run a live-reloading web server during development. This also means that Parcel will install our software dependencies automatically as they are referenced in the source code, as we [saw in Chapter 3](/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management#using_the_package_ecosystem).

Parcel will take care of installing any transformation tooling and configuration required without us needing to intervene (in most cases).

Then as a final bonus, Parcel can bundle and prepare the code for production deployment, taking care of minification and browser compatibility requirements.

We therefore need to install the parcel dependency in our project too — run the following command in your terminal:

```bash
npm install --save-dev parcel-bundler
```

### Using future features

The code for our project is using some new web features including features that are so new they aren't fully standardized yet. For example, instead of reaching for a tool like [Sass](https://sass-lang.com/), this particular project uses the W3C proposal for [CSS nesting](https://drafts.csswg.org/css-nesting/). CSS nesting allows us to nest CSS selectors and properties inside one another thus creating more specific selector scope. Sass was one of the first preprocessors to support nesting (if not the first) but now after many years, nesting looks like it will soon be standardized, which means that we will have it available in our browsers without needing build tools.

Until then, Parcel will do the transformation between nested CSS and natively supported CSS with the help of [PostCSS](https://postcss.org/), which Parcel works with out of the box. Since we've specifically decided this project should use CSS nesting (instead of Sass), the project will need to include a PostCSS plugin.

Let's use the [postcss-preset-env](https://preset-env.cssdb.org/), which lets us "use tomorrow's CSS today". To do so, follow these steps:

1. Add a single file called `.postcssrc` to the root of your project directory.
2. Add the following contents to the new file, which will automagically give us full access to the latest CSS features:

   ```json
   {
     "plugins": {
       "postcss-preset-env": {
         "stage": 0
       }
     }
   }
   ```

That's all we need to do — remember that Parcel installs the dependencies for us by default!

Although this stage of our toolchain can be quite painful, because we've chosen a tool that purposely tries to reduce configuration and complexity, there's really nothing more we need to do during the development phase. Modules are correctly imported, nested CSS is correctly transformed to "regular CSS", and our development is unimpeded by the build process.

Now our software is ready to be written!

## Running the transformation

To start working with our project, we'll run the Parcel server on the command line. In its default mode it will watch for changes in your code and automatically install your dependencies. This is nice because we don't have to flit back and forth between the code and the command line.

1. To start Parcel off in the background, go to your terminal and run the following command:

   ```bash
   npx parcel src/index.html
   ```

   You should see an output like this (once the dependencies have been installed):

   ```bash
   Server running at http://localhost:1234
   ✨  Built in 129ms.
   ```

   Parcel also installs the dependencies that we will use in our code, including react, react-dom, react-async-hook, date-fns, and format-number. This first run will therefore be longer than a typical run of Parcel.

   > **Note:** if you run Parcel on this project and are faced with an error that reads `Error: ENOENT: no such file or directory`, stop the process using <kbd>Ctrl</kbd> + <kbd>C</kbd> and then try re-running it.

   The server is now running on the URL that was printed (in this case localhost:1234).

2. Go to this URL in your browser and you will see the example app running!

Another clever trick Parcel has up its sleeve is that any changes to your source code will now trigger an update in the browser. To try this out:

1. Load up the file `src/components/App.js` in your favorite text editor.
2. Search for the text "near misses", and replace it with something silly like "flying pigs".
3. Save the file, then go straight back to the app running in your browser. You'll notice that the browser has automatically refreshed, and the line "\<date> there will be \<number> near misses" at the top of the page has been changed!

You could also try using ESLint and Prettier too — try deliberately removing a load of the whitespace from one of your files and running Prettier on it to clean it up, or introduce a syntax error into one of your JavaScript files and see what errors ESLint gives you when you try to use Parcel to build it again.

## Summary

We've come a long way in this chapter, building up a rather nice local development environment to create an application in.

At this point during web software development you would usually be crafting your code for the software you intend to build. Since this module is all about learning the tools around web development, not web development code itself, we won't be teaching you any actual coding — you'll find that information in the rest of MDN!

Instead, we've written an example project for you to use your tools on. We'd suggest that you work through the rest of the chapter using our example code, and then you can try changing the contents of the src directory to your own project and publishing that on Netlify instead! And indeed, deploying to Netlify will be the end goal of the next chapter!

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
