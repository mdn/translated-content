---
title: クライアントサイドツールの概要
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Overview
tags:
  - Beginner
  - Introduction
  - Learn
  - Tools
  - client-side
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

この記事では、最新の Web ツールの概要、利用可能なツールの種類、Web アプリ開発のライフサイクルのどこでそれらのツールに使用するか、個々のツールのヘルプを見つける方法について説明します。

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
        クライアントサイドツールの種類とその方法を理解する ツールを見つけて、それらのヘルプを取得します。 
      </td>
    </tr>
  </tbody>
</table>


## 最新ツールの概要

Web 用のソフトウェアの作成は、年月を経てより洗練されてきました。 HTML、CSS、および JavaScript を「手作業で」記述することは依然として完全に合理的ですが、開発者が Web サイトまたはアプリの構築プロセスを高速化するために使用できる豊富なツールが現在あります。 

開発コミュニティの間で一般的な「おなじみの名前」になっている非常に確立されたツールがいくつかあり、特定の問題を解決するために毎日新しいツールが作成およびリリースされています。 自分自身の開発プロセスを支援するソフトウェアを作成したり、既存のツールではまだ処理されていないように見える特定の問題を解決したりすることさえあるかもしれません。

1 つのプロジェクトに含めることができる膨大な数のツールに圧倒されがちです。 同様に、[Webpack](https://webpack.js.org/) のようなツールの単一の構成ファイルは数百行の長さになる可能性があり、そのほとんどは魔法の呪文であり、動作をしているように見えますが、それはマスターエンジニアだけが完全に理解します！

最も経験豊富な Web 開発者でさえ、ツールの問題で行き詰まってしまうことがあります。 アプリケーション コードの 1 行に触れる前に、ツール パイプラインを機能させるために何時間も無駄にする可能性があります。 過去に苦労したことがある場合でも、心配しないでください。あなたは一人ではありません。

これらの記事では、Web ツールに関するすべての質問に答えるわけではありませんが、基礎を理解するのに役立つ出発点を提供し、そこから構築することができます。 あらゆる複雑なトピックと同様に、小さく始めて、徐々に高度な用途へと進めていくのが良いでしょう。 

## 最新ツールのエコシステム 

今日の最新の開発者ツール エコシステムは巨大であるため、ツールがどのような主な問題を解決しているかについて幅広い考えを持っていると役に立ちます。 お気に入りの検索エンジンで、”フロントエンド開発者ツール”と検索すると、テキストエディターからブラウザー、メモを取るのに使用できるタイプのペンに至るまで、膨大な範囲の結果が表示されます。

コードエディターの選択は確かにツールの選択ですが、この一連の記事ではそれを超えて、Web コードをより効率的に作成するのに役立つ開発者ツールに焦点を当てます。

大まかな観点から、クライアントサイドツールは、解決すべき問題を次の 3 つの大きなカテゴリに分類できます。

- **セーフティネット** — コード開発時に役立つツール。
- **変換** — 何らかの方法でコードを変換するツール。 中間言語をブラウザーが理解できる JavaScript に変換します。
- **開発後** — テストツールやデプロイツールなど、コードを記述した後に役立つツール。

これらをそれぞれ詳しく見ていきましょう。

### セーフティネット

これらは、作成するコードを少し改善するためのツールです。

ツールのこの部分は、独自の開発環境に固有のものにする必要がありますが、すべての開発者がすべて同じプロセスを使用できるように、企業が何らかのポリシーまたは事前に作成された構成をインストールできるようにすることは珍しくありません。

これには、安定した信頼性の高いコードの生成に関して、開発プロセスを容易にするものすべてが含まれます。 セーフティネットツールは、コードを毎回ゼロから作成することなく、間違いを防止したり、間違いを自動的に修正したりするのにも役立ちます。

開発者が使用している非常に一般的なセーフティネットツールの種類は次のとおりです。

#### リンター

**リンター**は、コードをチェックして、存在するエラー、エラーの種類、エラーが存在するコード行を通知するツールです。 多くの場合、リンターはエラーを報告するだけでなく、チームが使用している可能性のある特定のスタイル ガイドの違反も報告するように構成できます (たとえば、インデントに間違った数のスペースを使用しているコード、または通常の文字列リテラルではなく[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)を使用しているコード）。

[ESLint](https://eslint.org/) は、業界標準の JavaScript リンターです。これは、潜在的な構文エラーを検出し、コード全体で "ベスト プラクティス" を奨励する高度に構成可能なツールです。 一部の企業やプロジェクトも [ESLint 構成を共有](https://www.npmjs.com/search?q=keywords:eslintconfig) しています。

[csslint](http://csslint.net/) など、他の言語用の lint ツールもあります。

[webhint](https://webhint.io/) も一見の価値があります。これは、アクセシビリティ、パフォーマンス、[MDN のブラウザー互換性データ](https://github.com/mdn/browser-compat-data)を介したクロスブラウザー互換、セキュリティ、PWA のテストなどのアプローチを含むベスト プラクティスを明らかにする、構成可能なオープンソースの Web リンターです。 これは、[Node.js コマンドラインツール](https://webhint.io/docs/user-guide/)および [VS Code 拡張機能](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint)として利用できます。

#### ソースコード管理


**バージョン管理システム** (VCS) とも呼ばれる**ソース コード管理**は、作業のバックアップやチームでの作業に不可欠です。 典型的な VCS には、変更を加えるローカル バージョンのコードが含まれます。 次に、サーバーのどこかに保存されているリモート リポジトリ内のコードの"マスター"バージョンに変更を"プッシュ"します。 通常、コードの"マスター"コピーに対してどのような変更がいつ行われるかを制御および調整する方法があるため、開発者のチームがお互いの作業を常に上書きすることはありません。


[Git](https://git-scm.com/) は、最近ほとんどの人が使用しているソース コード管理システムです。 主にコマンド ラインからアクセスしますが、使いやすいユーザー インターフェイスからアクセスすることもできます。 コードを git リポジトリに格納すると、それを独自のサーバーインスタンスにプッシュしたり、[GitHub](https://github.com/) 、[GitLab](https://about.gitlab.com/) 、[BitBucket](https://bitbucket.org/product/features) などのホストされたソース管理 Web サイトを使用したりできます。

このモジュールでは GitHub を使用します。 詳細については、[Git および GitHub](/ja/docs/Learn/Tools_and_testing/GitHub) を参照してください。 

#### Code formatters

Code formatters are somewhat related to linters, except that rather than point out errors in your code, they usually tend to make sure your code is formatted correctly, according to your style rules, ideally automatically fixing errors that they find.

[Prettier](https://prettier.io/) is a very popular example of a code formatter, which we'll make use of later on in the module.

#### Bundlers/packagers

These are tools that get your code ready for production, for example by "tree-shaking" to make sure only the parts of your code libraries that you are actually using are put into your final production code, or "minifying" to remove all the whitespace in your production code, making it as small as possible before it is uploaded to a server.

[Parcel](https://parceljs.org/) is a particularly clever tool that fits into this category — it can do the above tasks, but also helps to package assets like HTML, CSS, and image files into convenient bundles that you can then go on to deploy, and also adds dependencies for you automatically whenever you try to use them. It can even handle some code transformation duties for you.

[Webpack](https://webpack.js.org/) is another very popular packaging tool that does similar things.

### Transformation

This stage of your web app lifecycle typically allows you to code in either "future code" (such as the latest CSS or JavaScript features that might not have native support in browsers yet) or code using another language entirely, such as [TypeScript](https://www.typescriptlang.org/). Transformation tools will then generate browser-compatible code for you, to be used in production.

Generally web development is thought of as three languages: [HTML](/ja/docs/Learn/HTML), [CSS](/ja/docs/Learn/CSS), and [JavaScript](/ja/docs/Learn/JavaScript), and there are transformation tools for all of these languages. Transformation offers two main benefits (amongst others):

1. The ability to write code using the latest language features and have that transformed into code that works on everyday devices. For example, you might want to write JavaScript using cutting-edge new language features, but still have your final production code work on older browsers that don't support those features. Good examples here include:

   - [Babel](https://babeljs.io/): A JavaScript compiler that allows developers to write their code using cutting-edge JavaScript, which Babel then takes and converts into old-fashioned JavaScript that more browsers can understand. Developers can also write and publish [plugins for Babel](https://babeljs.io/docs/en/plugins).
   - [PostCSS](https://postcss.org/): Does the same kind of thing as Babel, but for cutting-edge CSS features. If there isn't an equivalent way to do something using older CSS features, PostCSS will install a JavaScript polyfill to emulate the CSS effect you want.

2. The option to write your code in an entirely different language and have it transformed into a web-compatible language. For example:

   - [Sass/SCSS](https://sass-lang.com/): This CSS extension allows you to use variables, nested rules, mixins, functions, and many other features, some of which are available in native CSS (such as variables), and some of which aren't.
   - [TypeScript](https://www.typescriptlang.org/): TypeScript is a superset of JavaScript that offers a bunch of additional features. The TypeScript compiler converts TypeScript code to JavaScript when building for production.
   - Frameworks such as [React](https://reactjs.org/), [Ember](https://emberjs.com/), and [Vue](https://vuejs.org/): Frameworks provide a lot of functionality for free and allow you to use it via custom syntax built on top of vanilla JavaScript. In the background, the framework's JavaScript code works hard to interpret this custom syntax and render it as a final web app.

### Post development

Post-development tooling ensures that your software makes it to the web and continues to run. This includes the deployment processes, testing frameworks, auditing tools, and more.

This stage of the development process is one that you want the least amount of active interaction with so that once it is configured, it runs mostly automatically, only popping up to say hello if something has gone wrong.

#### Testing tools

These generally take the form of a tool that will automatically run tests against your code to make sure it is correct before you go any further (for example, when you attempt to push changes to a GitHub repo). This can include linting, but also more sophisticated procedures like unit tests, where you run part of your code, making sure they behave as they should.

- Frameworks for writing tests include [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), and [Jasmine](https://jasmine.github.io/).
- Automated test running and notification systems include [Travis CI](https://travis-ci.org/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/), and [others](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Deployment tools

Deployment systems allow you to get your website published, are available for both static and dynamic sites, and commonly tend to work alongside testing systems. For example, a typical toolchain will wait for you to push changes to a remote repo, run some tests to see if the changes are OK, and then if the tests pass, automatically deploy your app to a production site.

[Netlify](https://www.netlify.com/) is one of the most popular deployment tools right now, but others include [Vercel](https://vercel.com/) and [GitHub Pages](https://pages.github.com/).

#### Others

There are a number of other tool types available to use in the post-development stage, including [Code Climate](https://codeclimate.com/) for gathering code quality metrics, the [webhint browser extension](https://webhint.io/docs/user-guide/extensions/extension-browser/) for performing runtime analysis of cross-browser compatibility and other checks, [GitHub bots](https://probot.github.io/) for providing more powerful GitHub functionality, [Updown](https://updown.io/) for providing app uptime monitoring, and so many more!

### Some thoughts about tooling types

There's certainly an order in which the different tooling types apply in the development lifecycle, but rest assured that you don't _have_ to have all of these in place to release a website. In fact, you don't need any of these. However, including some of these tools in your process will improve your own development experience and likely improve the overall quality of your code.

It often takes some time for new developer tools to settle down in their complexity. One of the best known tools, Webpack, has a reputation for being overly complicated to work with, but in the latest major release there was a huge push to simplify common usage so the configuration required is reduced down to an absolute minimum.

There's definitely no silver bullet that will guarantee success with tools, but as your experience increases you'll find workflows that work _for you_ or for your team and their projects. Once all the kinks in the process are flattened out, your tool chain should be something you can forget about and it _should_ just work.

## How to choose and get help with a particular tool

Most tools tend to get written and released in isolation, so although there's almost certainly help available it's never in the same place or format. It can therefore be hard to find help with using a tool, or even to choose what tool to use. The knowledge about which are the best tools to use is a bit tribal, meaning that if you aren't already in the web community, it is hard to find out exactly which ones to go for! This is one reason we wrote this series of articles, to hopefully provide that first step that is hard to find otherwise.

You'll probably need a combination of the following things:

- Experienced teachers, mentors, fellow students, or colleagues that have some experience, have solved such problems before, and can give advice.
- A useful specific place to search. General web searches for front-end developer tools are generally useless unless you already know the name of the tool you are searching for.

  - If you are using the npm package manager to manage your dependencies for example, it is a good idea to go to the [npm homepage](https://www.npmjs.com/) and search for the type of tool you are looking for, for example try searching for "date" if you want a date formatting utility, or "formatter" if you are searching for a general code formatter. Pay attention to the popularity, quality, and maintenance scores, and how recently the package was last updated. Also click through to the tool pages to find out how many monthly downloads a package has, and whether it has good documentation that you can use to figure out whether it does what you need it to do. Based on these criteria, the [date-fns library](https://www.npmjs.com/package/date-fns) looks like a good date formatting tool to use. You'll see this tool in action and learn more about package managers in general in Chapter 3 of this module.
  - If you are looking for a plugin to integrate tool functionality into your code editor, look at the code editor's plugins/extensions page — see [Atom packages](https://atom.io/packages) and [VSCode extensions](https://marketplace.visualstudio.com/VSCode), for example. Have a look at the featured extensions on the front page, and again, try searching for the kind of extension you want (or the tool name, for example search for "ESLint" on the VSCode extensions page). When you get results, have a look at information such as how many stars or downloads the extension has, as an indicator of its quality.

- Development-related forums to ask questions on about what tools to use, for example [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn/250), or [Stack Overflow](https://stackoverflow.com/).

When you've chosen a tool to use, the first port of call should be the tool project homepage. This could be a full blown website or it might be a single readme document in a code repository. The [date-fns docs](https://date-fns.org/docs/Getting-Started) for example are pretty good, complete, and easy to follow. Some documentation however can be rather technical and academic and not a good fit for your learning needs.

Instead, you might want to find some dedicated tutorials on getting started with particular types of tools. A great starting place is to search web sites like [CSS Tricks](https://css-tricks.com/), [Dev](https://dev.to/), [freeCodeCamp](https://www.freecodecamp.org/), and [Smashing Magazine](https://www.smashingmagazine.com/), as they're tailored to the web development industry.

Again, you'll probably go through several different tools as you search for the right ones for you, trying them out to see if they make sense, are well-supported, and do what you want them to do. This is fine — it is all good for learning, and the road will get smoother as you get more experience.

## Summary

That rounds off our gentle introduction to the topic of client-side web tooling, from a high level. Next up we provide you with a crash course on the command line, which is where a lot of tooling is invoked from. We'll take a look at what the command line can do and then try installing and using our first tool.

{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## In this module

- [クライアントサイドツールの概要](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)
- [Command line crash course](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
- [Package management basics](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
- [Introducing a complete toolchain](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain)
- [Deploying our app](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment)
