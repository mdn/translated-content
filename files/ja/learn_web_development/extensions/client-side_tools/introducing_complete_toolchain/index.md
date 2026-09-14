---
title: 完全なツールチェーンの導入
short-title: ツールチェーンの例
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

このシリーズの最後の 2 つの記事では、サンプルケーススタディのツールチェインを構築するプロセスを紹介することで、ツールの知識を固めます。適切な開発環境のセットアップから、変換ツールの導入、そして実際にアプリケーションの展開に至るまでの方法をすべてご紹介します。この記事では、ケーススタディの紹介、開発環境のセットアップ、コード変換ツールの設定を行います。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        主要な <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、と <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a> 言語
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        ツールチェーンのケーススタディの演習を完了して、これまでに学んだことを確実に理解します。
      </td>
    </tr>
  </tbody>
</table>

ツールとその使用方法の組み合わせは実際に無限にあります。この記事と次の記事で説明したことは、プロジェクトで注目のツールを使用できる _1 つの_ 方法にすぎません。

> [!NOTE]
> これらのツールのすべてをコマンドラインで実行する必要があるわけではないことも繰り返し述べておきます。 現在のコードエディター (VS Code など) の _多く_ は、プラグインを介して多数のツールの統合をサポートしています。

## ツールチェーンのケーススタディの事例紹介

この記事で作成するツールチェーンは、 [GitHub API](https://docs.github.com/en/rest/metrics/community) からデータを取得して、 [mdn/content](https://github.com/mdn/content) リポジトリーに関するデータを表示するミニサイトを構築および展開するために使用されます。

## ツールチェーンで使用されるツール

この記事では、次のツールと機能を使用します。

- [JSX](https://react.dev/learn/writing-markup-with-jsx) は [React](https://react.dev) に関連する構文拡張のセットで、 JavaScript 内でコンポーネント構造を定義するなどの作業を可能にします。このチュートリアルに行うのに React を理解する必要はありませんが、非ネイティブウェブ言語をツールチェーンに統合する方法を理解するためにこれを含めました。
- [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) などの最新の組み込み JavaScript 機能（執筆時点）です。
- フォーマット用の [Prettier](https://prettier.io/) や lint 用の [ESLint](https://eslint.org/) などの便利な開発ツール。
- [PostCSS](https://postcss.org/) は、 CSS のネスティング機能を提供します。
- [Vite](https://vite.dev/) コードのビルドと縮約、および一連の構成ファイルコンテンツの自動作成に使用しています。
- [GitHub](/ja/docs/Learn_web_development/Core/Version_control) ソースコードの管理、および最終的にはサイトの展開（GitHub Pages を使用）に使用しています。

上記の機能やツールが何をするものなのか、よく知らないかもしれないがパニックにならないでください。この記事を進めながら各部分について説明します。

## ツールチェーンとその固有の複雑さ

他のチェーンと同様にツールチェーン内のリンクが増えるほどツールチェーンはより複雑になり脆弱になる可能性があります。たとえば構成がより複雑になり、壊れやすくなる可能性があります。 逆にリンクが少ないほど、ツールチェーンは壊れにくくなる可能性があります。

すべてのウェブプロジェクトは異なるためツールチェーンのどの部分が必要かを検討し、それぞれの部分を慎重に検討する必要があります。

最小のツールチェーンは、リンクがまったくないツールチェーンです。 HTML を手動でコーディングし、「バニラ JavaScript」（フレームワークや中間言語を使用しないことを意味します）を使用し、それをすべて手動でサーバーにアップロードしてホスティングします。

しかし、より複雑なソフトウェア要件の場合は開発プロセスを簡素化するツールを使用することで恩恵を得られる可能性があります。 さらに、本番サーバーにデプロイする前にソフトウェアが意図したとおりに動作することを確認するテストを含める必要があります。これはすでに必要なツールチェーンのように思えます。

サンプルプロジェクトではソフトウェア開発を支援し、ソフトウェア設計段階での技術的選択をサポートするために特別に設計されたツールチェーンを使用します。 ただし、複雑さを最小限に抑えることを目的としてて余計なツールは使わないようにします。

## 前提条件の確認

これまでの節で説明した内容に従って作業を進めてきた場合は、ほとんどのソフトウェアはすでにインストールされているはずです。実際のセットアップ手順に進む前に、次のものを準備してください。これらは 1 回だけ実行すればよく、今後のプロジェクトで再度実行する必要はありません。

### GitHub アカウントの作成

ツールチェーンに役立つツールをインストールするほか、チュートリアルを完了するには GitHub アカウントを作成する必要があります。ただし、アカウントを作成しなくても、ローカル開発の部分は続行できます。前回述べたように、GitHub は、課題の追跡、プロジェクトのリリース情報のフォローなど、コミュニティ向けの機能を追加したソースコードリポジトリーサービスです。次の章では、GitHub コードリポジトリーにプッシュし、すべてのソフトウェアをウェブ上のホームに展開する（はずの）連鎖効果を発生させます。

アカウントをまだお持ちでない場合は、ホームページの _Sign Up_ リンクをクリックして [GitHub](https://github.com/) に登録し、指示に従ってください。

### git のインストール

リビジョン管理に役立つ別のソフトウェア、git をインストールします。

"git" という言葉を聞いたことがあるかもしれません。 [Git](https://git-scm.com/) は、現在開発者が利用できる最も人気のあるソースコードリビジョン管理ツールです。リビジョン管理には、自分の作業を遠隔地にバックアップできる、チームで同じプロジェクトに取り組んでもお互いのコードを上書きしてしまう心配がない、などの多くの利点があります。

一部の人には当然のことかもしれませんが、繰り返し述べます。 Git は GitHub と同じものではありません。 Git はリビジョン管理ツールであり、 [GitHub](https://github.com/) は git リポジトリーを格納するためのオンラインストア（および、それらを使用するための多くの便利なツール）です。この章では GitHub を使用していますが、 [GitLab](https://about.gitlab.com/) や [Bitbucket](https://www.atlassian.com/software/bitbucket) など、いくつかの代替手段があり、自分自身で git リポジトリーをホストすることも可能です。

自分のプロジェクトでリビジョン管理を使用し、それをツールチェーンの一部として含めることで、コードの進化の管理に役立ちます。これは、作業の進捗に合わせて、作業ブロックを「コミット」し、「X の新しい機能を実装しました」や「Y の変更により、バグ Z が修正されました」などのコメントを付けることができる機能です。

リビジョン管理を使用すると、プロジェクトのコードを「ブランチ」して別個のバージョンを作成し、元のコードに影響を与えることなく新しい機能を試すこともできます。

最後に、どこかにミスがあり、その修正に苦労している場合、変更を元に戻したり、コードを「正常に動作していた時点」に戻したりするのに役立ちます。これは、すべての開発者が時折行う必要がある作業です。

Git は、 [git-scm ウェブサイトからダウンロードしてインストール](https://git-scm.com/downloads)できます。お使いのシステムに適したインストーラをダウンロードし、実行して、画面に表示される指示に従ってください。これで、今のところ必要な作業はすべて完了です。

git を操作するには、コマンドラインを使用してコマンドを発行する方法、[git GUI アプリ](https://git-scm.com/downloads/guis) を使用してボタンを押して同じコマンドを発行する方法、あるいは、下記の Visual Studio Code の例のように、コードエディターから直接操作する方法など、さまざまな方法で操作することができます。

![VS Code にある git 統合](vscode-git.png)

### 既存のプロジェクト

前の章で始めた自分のプロジェクトをベースに作業を進めますので、まず[パッケージ管理](/ja/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)の指示に従って、プロジェクトの設定を行ってください。これまでの内容をまとめると、次のものが存在しているはずです。

- Node.js および npm がインストールされていること。
- `npm-experiment` (またはその他の名前) という新しいプロジェクト。
- 開発依存関係としてインストールされた Vite。
- 依存関係としてインストールされた `plotly.js-dist-min` パッケージ。
- package.json で定義された独自のスクリプト。
- 作成された `index.html` および `src/main.jsx` ファイル。

[第 1 章](/ja/docs/Learn_web_development/Extensions/Client-side_tools/Overview) で述べたように、ツールチェーンは次のフェーズで構成されます。

- **開発環境**: コードを実行するために最も基本的なツールです。この部分は、前回の章で設定済みです。
- **セーフティネット**: ソフトウェア開発体験を安定させ、より効率的にします。 これを開発環境と呼ぶこともあります。
- **トランスフォーメーション**: 開発プロセスにおいて、ある言語 (JavaScript など) または別の言語全体 (JSX や TypeScript など) の最新機能を使用できるようにし、製品版がモダンなものから古いものまで様々なブラウザーで動作するようにコードを変換します。
- **ポスト開発**: 開発本体が終了後に、ソフトウェアがウェブに公開され、実行され続けることを保証するために使用するツールです。このケーススタディではコードにテストを追加し GitHub Pages を使用してアプリをデプロイし、ウェブ上で利用できるようにします。

開発環境から始めて、これらに取り組みましょう。実際のプロジェクトの設定と同じ段階に従います。したがって、今後、新しいプロジェクトを設定する場合は、この章を参照して、同じ手順を実行してください。

## 開発環境の構築

ツールチェーンのこの部分が実際の作業を遅らせているように見えることがあります。環境を「適切な」状態にするために多くの時間を費やすという、ツールの「ウサギの穴」にはまりやすい可能性があります。

しかし、これは物理的な作業環境を整えるのと同じように考えることができます。 椅子は快適であり、姿勢を助けるために適切な位置に設置されている必要があります。 電源、 Wi-Fi 、 USB ポートが必要です。あなたの精神状態を助ける重要な装飾や音楽があるかもしれません。これらはすべて可能な限り最高の仕事をするために重要であり適切に行われれば、セットアップは 1 回だけで済みます。

同様に開発環境のセットアップはうまくいけば一度だけ行えばよく、将来の多くのプロジェクトで再利用できるはずです。 おそらくツールチェーンのこの部分を半定期的に確認し、導入すべきアップグレードや変更があるかどうかを検討することをお勧めしますが、これはあまり頻繁に行う必要はありません。

ツールチェーンは、自分のニーズに応じて異なりますが、この例では、かなり完全なツールチェーンとして、事前にインストール/初期化するツールは次のとおりです。

- ライブラリーインストールツール — 依存関係を追加するためのツール
- コードリビジョン管理
- コード整理ツール — JavaScript、CSS、HTML の整理
- コード検査ツール — コードの検査に使用します。

### ライブラリーインストールツール

これはすでに実行済みですが、参照しやすいように、npm パッケージを初期化し、必要な依存関係をインストールするためのコマンド（`npm-experiment` ディレクトリーのルートで実行）を以下に示します。

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### コードリビジョン管理

ディレクトリーで git のソース管理機能を動作させるには、次のコマンドを入力してください。

```bash
git init
```

既定では、 git はすべてのファイルの変更を追跡します。しかし、私たちが書いたコードではなく、いつでも再生成できる生成ファイルは追跡する必要がありません。プロジェクトディレクトリーのルートに `.gitignore` ファイルを作成することで、git にこれらのファイルを無視するように指示することができます。ファイルに次のコンテンツを追加してください。

```plain
node_modules
dist
```

### コード整理ツール

このプロジェクトでは、コードを整理するために、第 2 章で最初に紹介しました Prettier を使用します。このプロジェクトに Prettier を再度インストールします。次のコマンドを使用してインストールしてください。

```bash
npm install --save-dev prettier
```

開発中にのみ使用するため、開発依存関係として追加するには `--save-dev` を使用していることに再度注意してください。

多くの最近作成されたツールと同様に、 Prettier には「賢明な既定値」が設定されています。つまり、何らかの設定を行う必要なく Prettier を使用することができます（[既定値](https://prettier.io/docs/configuration.html)で問題がない場合）。これにより、重要な作業、つまり創造的な作業に集中することができます。デモのために、設定ファイルを追加します。 `npm-experiment` ディレクトリーのルートに、 `.prettierrc.json` というファイルを作成します。次のコンテンツを追加します。

```json
{
  "bracketSameLine": true
}
```

この設定により、 Prettier は、複数行の HTML (HTML、JSX、Vue、Angular) の開始タグの `>` を、次の行に単独で出力するのではなく、最後の行の終わりに出力します。これは MDN 自体が使用している書式化です。 Prettier の設定の詳細については、そのドキュメント (https://prettier.io/docs/configuration.html) をご覧ください。

既定では、Prettier は指定したすべてのファイルを書式化します。しかし、生成されたファイルは書式化する必要はありませんし、手をつけたくない古いコードもあるかもしれません。プロジェクトディレクトリーのルートに `.prettierignore` ファイルを作成することで、Prettier にこれらのファイルを常に無視するように指示することができます。このファイルに次の内容を追加してください。

```plain
node_modules
dist
```

これは `.gitignore` と同じ内容ですが、実際のプロジェクトでは、 git とは別のファイルを Prettier で無視したい場合もあるでしょう。

これで Prettier のインストールと設定が完了しました。コードの実行と整理は、コマンドラインから行うことができます。例えば、次のように入力します。

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> 上記のコマンドでは、 `--write` フラグを付けて Prettier を使用しています。 Prettier はこれを「コードの書式に問題がある場合は、それを修正してからファイルを保存してください」という意味と解釈します。これは開発プロセスには問題ありませんが、フラグを付けずに `prettier` を使用すると、ファイルがチェックされるだけです。ファイルをチェックする（保存はしません）ことは、リリース前に実行するチェックなど、有益な目的のために役立ちます。たとえば、「正規に書式化されていないコードはリリースしない」といった場合です。

また、 `./index.html` を他のファイルやフォルダーに置き換えて、それらを書式化することもできます。例えば、 `.` は現在のディレクトリー内のすべてを書式化します。構文を忘れてしまった場合のために、 package.json に独自の スクリプト として追加しておくこともできます。

```json
"scripts": {
  // …
  "format": "prettier --write ."
},
```

これで、次のコマンドを実行してディレクトリーを書式化できます。

```bash
npm run format
```

何かを変更するたびにコマンドを実行するのは依然として面倒ですが、このプロセスを自動化する方法がいくつかあります。

- 特別な「git フック」を使用して、コミット前にコードが書式化されているかどうかを検査します。
- コードエディタープラグインを使用して、ファイルが保存されるたびに Prettier コマンドを実行します。

> [!NOTE]
> git フックとは何でしょうか。 Git （GitHub ではありません）は、git で実行するタスク（コードのコミットなど）に事前アクションと事後アクションを付加できるシステムを提供しています。 git フックは（この著者の意見では）少し複雑すぎるかもしれませんが、一度導入すると非常に強力になります。フックの使用に興味がある場合は、 [Husky](https://github.com/typicode/husky) を参照すると、フックを使用するためのルートが大幅に簡素化されます。

VS Code の場合、便利な拡張機能の 1 つは [Prettier Code Formatter by Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) です。これを使うと、VSCode は保存時にコードを自動的に整形してくれます。これは、HTML、CSS、JavaScript、JSON、マークダウンなど、作業中のプロジェクト内のすべてのファイルが適切にフォーマットされることを意味します。エディターに必要なのは、 "Format On Save" を有効にすることだけです。

### コード検査ツール

リンターはコードの品質を向上させるのに役立ちますが、開発中の早い段階で潜在的なエラーを発見する方法でもあります。これは優れたツールチェーンの重要な要素であり、多くの開発プロジェクトにデフォルトで組み込まれることになります。

ウェブ開発用の検査ツールは、主に JavaScript 用に存在します(ただし、HTML と CSS 用に利用できるツールもいくつかあります)。これは当然のことです。不明な HTML 要素または無効な CSS プロパティが使用された場合、これら 2 つの言語の回復力の性質により、何も壊れる可能性はありません。 JavaScript ははるかに脆弱です。たとえば存在しない関数を誤って呼び出すと、JavaScript が壊れてしまいます。したがって JavaScript の検査は、特に大規模なプロジェクトの場合には非常に重要です。

JavaScriptの検査に最適なツールは [ESLint](https://eslint.org/) です。 ESLint は非常に強力で多機能なツールですが、正しく設定するのは難しいので、設定を正しくするのに何時間も費やしてしまう可能性があります。

ESLint は npm によってインストールされます。第 2 章の解説で述べたように、このツールはローカルにインストールすることも、グローバルにインストールすることもできますが、いずれの場合も、それぞれのプロジェクト用の設定ファイルが必要になるため、ローカルにインストールすることを強くお勧めします。実行するコマンドを覚えておいてください。

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> [!NOTE]
> `eslint@8` は ESLint のバージョン 8 をインストールしますが、最新バージョンは v9 です。これは、後で使用する `eslint-plugin-react` が [v9 に対応していない](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699)ためです。

`@eslint/js` パッケージは、定義済みの ESLint 設定を提供し、 `globals` パッケージは、それぞれの環境で認識されるグローバル名のリストを提供します。これらは、後で設定で使用します。npx eslint で実行すると、 ESLint は設定ファイルが見つからないとエラーを表示します。

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

以下は、動作する最小限の例です（自分のプロジェクトのルートにある `eslint.config.js` というファイルで）。

```js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
```

上記の ESLint 設定を紹介します。

- "recommended" の ESLint 設定を有効にします
- 他のツールと同様に、生成されたファイルを無視するように ESLint に指示します。
- `.js` および `.jsx` ファイルをリンティングの対象に含めるように ESLint に指示します。
- ブラウザのグローバル変数の存在を ESLint に指示します（存在しない変数を調べる `no-undef` などのリンティングルールで使用されます）。

ESLint パーサーは、既定では JSX を理解せず、その推奨ルールは React 独自の意味づけを処理しません。そのため、JSX および React を正規に対応させるため、いくつかの設定を追加します。まず、正しい、慣用的な React を記述するためのルールを提供する `eslint-plugin-react` および `eslint-plugin-react-hooks` をインストールします。

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

次に、ESLint 構成ファイルを更新して、これらのプラグインの推奨構成を含めます。これにより、推奨ルールが読み込まれ、JSX のパーサーオプションが設定されます。

```js
import js from "@eslint/js";
import globals from "globals";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactRecommended,
  reactJSXRuntime,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
];
```

> [!NOTE]
> `eslint-plugin-react-hooks` の設定は、 `eslint-plugin-react` の設定の 1 行の追加に比べ、少し面倒です。これは、 `eslint-plugin-react-hooks` が新しい ESLint 設定書式化に対応していないためです。詳細については、[facebook/react#28313](https://github.com/facebook/react/issues/28313) をご覧ください。

自由に調整して構成できる ESLint ルールの一覧 (https://eslint.org/docs/latest/rules/) があり、多くの企業やチームが [独自の ESLint 構成](https://www.npmjs.com/search?q=keywords:eslintconfig) を公開しています。これらは、インスピレーションを得るため、あるいは自分の基準に合ったものを選択するために有益な場合があります。ただし、 ESLint の設定は非常に難解であることにご留意ください。

分かりやすいように、この章では、この設定が自分の具体的なプロジェクトとその要件に合っているため、 ESLint のすべての機能については説明しません。ただし、コードの外観 (または検証) に関するルールを洗練して適用したい場合は、適切な ESLint 設定でそれを実現できる可能性が高いことを覚えておいてください。

それ以外のツールと同様、コードエディターとの統合は ESLint では通常良く、課題が発生したときにリアルタイムのフィードバックを得られるため、より有益である可能性があります。

![VS Code で見られる ESLint エラー統合](eslint-error.png)

これで、開発環境のセットアップは完了です。これで、いよいよ（ほぼ）コードを記述する準備が整いました。

## 初期プロジェクトの設定

### JavaScript の変換

このプロジェクトでは、前述のように React を使用することになりました。これは、ソースコードで JSX が使用されることを意味します。また、このプロジェクトでは最新の JavaScript 機能も使用します。当面の課題は、 JSX にネイティブで対応しているブラウザーが存在しないことです。 JSX は、本番コードでブラウザーが理解できる言語にコンパイルされる中間言語です。ブラウザーが JavaScript ソースを実行しようとすると、すぐにエラーになります。このプロジェクトでは、ソースコードをブラウザーが問題なく処理できる形式に変換するビルドツールが必要です。

変換ツールにはさまざまな選択肢があります。 Babel が特に人気がありますが、 Vite では、統合プラグインである `@vitejs/plugin-react` を使用します。次のコマンドを使用してインストールしてください。

```bash
npm install --save-dev @vitejs/plugin-react
```

Vite 設定はまだ指定されていません。プロジェクトディレクトリーのルートにある `vite.config.js` に追加してください。

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Vite の設定方法の詳細については、[Vite のドキュメント](https://vite.dev/guide/) をご覧ください。このサイトは GitHub ページで展開されているため、 `https://your-username.github.io/your-repo-name` でホストされます。そのため、GitHub リポジトリーの名前に応じて `base` オプションを設定してください。ただし[デプロイ](/ja/docs/Learn_web_development/Extensions/Client-side_tools/Deployment)で後でいつでも調整することができます。

### CSS の変換

CSS は、ブラウザーが理解できない構文を使用している場合もあります。例えば、最近のいくつかのブラウザーで実装された構文を使用している場合、古いブラウザーではその構文が認識されず、スタイルが正しく表示されません。ツールを使用して、ターゲットとするすべてのブラウザーが理解できる書式に CSS を変換することができます。

[PostCSS](https://postcss.org/) は CSS 後処理ツールです。　[Sass](https://sass-lang.com/) などのビルドツールと比較すると、　PostCSS は標準的な CSS （つまり、将来ブラウザーで取得される可能性のある CSS 構文）を記述するためのものです。一方、 Sass は CSS にコンパイルされる独自の言語です。 PostCSS はウェブに近く、学習曲線がはるかに緩やかです。Vite は PostCSS を既定で対応しています(https://vite.dev/guide/features.html#postcss)、そのため、機能を使用したい場合は PostCSS を設定するだけで済みます(https://github.com/postcss/postcss#usage)。対応している機能については、[cssdb](https://preset-env.cssdb.org/features/) を参照してください。

ここでは、別の CSS 変換、CSS モジュール (https://vite.dev/guide/features.html#css-modules) について説明します。これは、 CSS のモジュール化を実現する方法の 1 つです。 CSS セレクターはすべてグローバルであるため、 `.button` というクラス名がある場合、クラス名 `button` を持つすべての要素は同じスタイルが設定されます。これはしばしば名前の競合につながります。 JavaScript の変数がすべてグローバルスコープで定義されていることを想像してみてください。 CSS モジュールは、クラス名をそれを使用するページで一意にすることで、この問題を解決します。その仕組みを理解するには、ソースコードをダウンロードした後、 `.module.css` ファイルの使用方法を調べ、 [CSS モジュールのドキュメント](https://github.com/css-modules/css-modules) を参照してください。

ツールチェーンのこの段階は、設定と複雑さを意図的に減らすツールを選んだため、かなり面倒ですが、開発段階ではこれ以上のことは、実際には何も必要ありません。モジュールは正しくインポートされ、入れ子になった CSS は「通常の CSS」に正しく変換され、ビルドプロセスによって開発が妨げられることもありません。

これで、ソフトウェアの記述を始める準備が整いました。

## ソースコードを書く

これで、開発ツールチェーンがすべて設定されました。通常はこの時点で、実際のコードの記述、つまり最も時間を費やすべき作業に入ります。ただし、この章の目的は、既存のソースコードをコピーして、それを自分が書いたものとして扱うことです。これらがどのように動作するのかについては、この章では説明しません。この章では、ツールを実行して、ツールがどのように動作するのかを説明することが目的です。

コードファイルを取得するには、<https://github.com/mdn/client-toolchain-example> にアクセスし、このリポジトリーのコンテンツをダウンロードして、ローカルドライブの任意の場所に展開してください。_Clone or download_ > _Download ZIP_ を選択すると、プロジェクト全体を zip ファイルとしてダウンロードできます。

![GitHub の例のリポジトリー](github-repo.png)

これで、プロジェクトの `src` ディレクトリーのコンテンツをコピーし、現在の `src` ディレクトリーと置き換えてください。他のファイルについては心配する必要はありません。

ソースコードが使用するいくつかの依存関係もインストールしてください。

```bash
npm install react react-dom @tanstack/react-query
```

自分のプロジェクトファイルが指定された場所に保存されました。これで、今のところ必要な作業はすべて完了です。

## 変換の実行

自分のプロジェクトで作業を始めるには、コマンドラインで Vite サーバーを実行します。既定モードでは、コードの変更を監視し、サーバーを更新します。これにより、コードとコマンドラインの間を何度も行き来する必要がなくなるので便利です。

1. Vite をバックグラウンドで始めるには、端末に移動し、次のコマンドを実行します（先ほど定義した独自のスクリプトを使用します）。

   ```bash
   npm run dev
   ```

   依存関係がインストールされると、次のような出力が表示されます。

   ```plain
   > client-toolchain-example@1.0.0 dev
   > vite

   Re-optimizing dependencies because lockfile has changed

     VITE v5.2.13  ready in 157 ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
   ```

   これで、サーバーは出力された URL （この例では localhost:5173）で動作しています。

2. ブラウザーでこの URL にアクセスすると、サンプルアプリが実行されます。

これで、いくつかの変更を加えて、その効果をライブで確認することができます。

1. 好きなテキストエディターで `src/App.js` ファイルを開きます。
2. `mdn/content` を、 `facebook/react` など、お好みの GitHub リポジトリーに置き換えてください。
3. ファイルを保存し、ブラウザーで実行中のアプリに戻ってください。ブラウザーが自動的に更新され、グラフが変更されていることがわかります。

また、 ESLint と Prettier も試してみることができます。ファイルから意図的に多くの空白を削除して、 Prettier を実行して整形してみたり、 JavaScript ファイルに構文エラーを導入して Parcel を使用して再ビルドした際に ESLint がどのようなエラーを表示するか確認してみたりしてください。

## まとめ

この章では、かなり良いローカル開発環境を構築し、アプリケーションを作成する準備が整いました。

通常、ウェブソフトウェアの開発では、この時点で作成したいソフトウェアのコードを作成する段階に入ることになります。しかし、このモジュールはウェブ開発のコードそのものではなく、ウェブ開発周りのツールを学ぶことが目的ですので、実際のコーディングは教えません — 実際のコーディングについての情報は MDN の他の部分で見つけることができます！

代わりに、あなたがツールを使用するためのサンプルプロジェクトを用意しました。私たちは、残りの章でこのサンプルコードを使って作業することをお勧めします。そしてその後、 src ディレクトリーの内容を自分のプロジェクトに変更し、それを GitHub Pages に公開してみることもできます！実際に次の章では GitHub Pages へのデプロイが最終的な目標となります！

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
