---
title: アプリのデプロイ
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Deployment
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

シリーズの最後の記事では、前の記事で構築したサンプルツールチェーンを取り上げ、サンプルアプリをデプロイできるようにそれに追加します。 コードを GitHub にプッシュし、Netlify を使用してデプロイし、プロセスに簡単なテストを追加する方法も示します。

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
        アプリのデプロイに焦点を当てて、完全なツールチェーンのケーススタディの作業を完了します。
      </td>
    </tr>
  </tbody>
</table>

## 開発後

プロジェクトのライフサイクルのこのセクションでは、解決すべき広範囲の問題が潜在的に存在します。 したがって、手動介入をできるだけ少なくする方法でこれらの問題を処理するツールチェーンを作成することが重要です。

この特定のプロジェクトに関して考慮すべき点がいくつかあります。

- 実稼働ビルドの生成： ファイルが最小化され、チャンク化され、ツリーシェイクが適用され、バージョンが「キャッシュが無効化」されていることを確認します。
- テストの実行： テストの範囲は、「このコードは適切にフォーマットされていますか?」などです。 「これは期待どおりの動作をするか?」ということを確認し、テストが失敗することを確認すると展開が妨げられます。
- 更新されたコードを実際にライブデプロイした URL： または、最初に確認できるようにステージング URL にデプロイすることもできます。

> **メモ：** キャッシュ無効化は、このモジュールではこれまでに見たことのない新しい用語です。 これはブラウザ自体のキャッシュ メカニズムを破壊する戦略であり、ブラウザにコードの新しいコピーを強制的にダウンロードさせます。 Parcel (そして実際には他の多くのツール) は、新しいビルドごとに一意のファイル名を生成します。 この一意のファイル名はブラウザのキャッシュを「破棄」し、デプロイされたコードが更新されるたびにブラウザが新しいコードをダウンロードするようにします。

上記のタスクはさらに別のタスクに分割されます。 ほとんどのウェブ開発チームは、開発後のフェーズの少なくとも一部について独自の条件とプロセスを持っていることに注意してください。

このプロジェクトでは、 [Netlify](https://www.netlify.com/) の素晴らしい静的ホスティングサービスを使用してプロジェクトをホストします。 Netlify は、プロジェクトをオンラインで表示し、友人、家族、同僚と共有するためのホスティング、つまり URL を提供します。

ホスティングへのデプロイはプロジェクトのライフサイクルの最後になる傾向がありますが、 Netlify などのサービスを使用すると、デプロイのコスト (金銭面と実際のデプロイに必要な時間の両方) が削減され、開発中にデプロイすることが可能になります。 進行中の作業を共有するか、他の目的でプレリリースするかのいずれかです。

Netlify では、特に、デプロイ前のタスクを実行することもできます。これは、この場合、すべての実稼働コードのビルド プロセスを Netlify 内で実行でき、ビルドが成功すると、Web サイトの変更がデプロイされることを意味します。

Netlify は [ドラッグアンドドロップデプロイメントサービス](https://app.netlify.com/drop) を提供していますが、 GitHub リポジトリにプッシュするたびに Netlify への新しいデプロイメントをトリガーする予定です。

独自のビルドツールチェーンを決定する際に探すことをお勧めするのは、まさにこの種の接続されたサービスです。 コードをコミットして GitHub にプッシュすると、更新されたコードによってビルドルーチン全体が自動的にトリガーされます。 すべて問題がなければ、ライブ変更が自動的にデプロイされます。 実行する必要があるアクションは、最初の「プッシュ」だけです。

ただし、これらの手順を設定する必要があるので、それについてはこれから見ていきます。

## ビルドプロセス

繰り返しになりますが、開発には Parcel を使用しているため、ビルドオプションの追加は非常に簡単です。 `npx parcel src/index.html` を使用してサーバーを実行する代わりに、 `npx parcel build src/index.html` を使用してサーバーを実行することができます。これにより、Parcel は、単に開発やテストの目的で実行するのではなく、本番環境に備えたすべてのものを構築します。 これには、コードの縮小とツリーシェイクの実行、およびファイル名のキャッシュ無効化が含まれます。

新しく作成された実稼働コードは、 `dist` という新しいディレクトリに配置されます。このディレクトリには、ウェブサイトを実行するために必要なすべてのファイルが含まれており、すぐにサーバーにアップロードできます。

ただし、このステップを手動で実行することが最終的な目的ではありません。私たちが望んでいるのは、ビルドが自動的に行われ、 `dist` ディレクトリの結果がウェブサイトにライブでデプロイされることです。

GitHub のコードリポジトリを更新するたびに、 Netlify がその変更を自動的に拾い上げ、ビルドタスクを実行し、最終的に新しいアップデートをリリースします。

ビルドコマンドを npm スクリプトとして `package.json` ファイルに追加して、コマンド `npm run build` がビルド プロセスをトリガーするようにします。 このステップは必須ではありませんが、セットアップの習慣を身につけるのは良いベストプラクティスです。すべてのプロジェクトにわたって、 `npm run build` を利用して、覚えておく必要なく常に完全なビルドステップを実行できます。 各プロジェクトの特定のビルド コマンド引数。

1. プロジェクトのルート ディレクトリにある `package.json` ファイルを開き、 `scripts` プロパティを見つけます。
2. コードをビルドするために実行できる `build` コマンドを追加します。 次の行をプロジェクトに追加します。

   ```json
   "scripts": {
     // …
     "build": "parcel build src/index.html"
   }
   ```

   > **メモ：** `scripts` プロパティ内にすでにコマンドが含まれている場合は、コマンドの末尾にカンマを入れます。 JSON を有効なままにしておきます。

3. これで、プロジェクトディレクトリのルートで次のコマンドを実行して実稼働ビルドステップを実行できるようになります。 (必要に応じて、まず最初に <kbd>Ctrl</kbd> + <kbd>C</kbd> を押して実行中のプロセスを終了します）
   ```bash
   npm run build
   ```

   これにより次のような出力が得られ作成された実稼働ファイル、そのサイズ、およびビルドにかかった時間が示されます。

   ```bash
   dist/src.99d8a31a.js.map       446.15 KB     63ms
   dist/src.99d8a31a.js           172.51 KB    5.55s
   dist/stars.7f1dd035.svg          6.31 KB    145ms
   dist/asteroid2.3ead4904.svg      3.51 KB    155ms
   dist/asteroid1.698d75e9.svg       2.9 KB    153ms
   dist/src.84f2edd1.css.map        2.57 KB      3ms
   dist/src.84f2edd1.css            1.25 KB    1.53s
   dist/bg.084d3fd3.svg               795 B    147ms
   dist/index.html                    354 B    944ms
   ```

   やってみましょう！

このプロジェクトの独自のインスタンスを作成するには、このプロジェクトのコードを独自の git リポジトリでホストする必要があります。 次のステップは、プロジェクトを GitHub にプッシュすることです。

## GitHub への変更のコミット

このセクションでは、コードを git リポジトリに保存するまでの手順を説明しますが、これは git チュートリアルとは程遠いものです。優れたチュートリアルや書籍が数多く提供されており、[Git and GitHub](/en-US/docs/Learn/Tools_and_testing/GitHub) ページから始めるのが適しています。

先ほど作業ディレクトリを git 作業ディレクトリとして初期化しました。 これを簡単に確認するには、次のコマンドを実行します。

```bash
git status
```

どのファイルが追跡されているか、どのファイルがステージングされているかなどのステータスレポートを取得する必要があります。これらの用語はすべて git 文法の一部です。 `fatal: not a git repository` というエラーが返された場合、作業ディレクトリは git 作業ディレクトリではないため、 `git init` を使用して git を初期化する必要があります。

今、私たちの前には 3 つのタスクがあります。

- ステージに加えた変更を追加します ( git がファイルをコミットする場所の特別な名前)。
- 変更をリポジトリにコミットします。
- 変更を GitHub にプッシュします。

1. 変更を追加するには、次のコマンドを実行します。

   ```bash
   git add .
   ```

   最後のピリオドに注意してください。これは「このディレクトリ内のすべて」を意味します。 `git add .` コマンドは、少し強力なアプローチです。これまでに行ったすべてのローカル変更を一度に追加します。追加するものをより細かく制御したい場合は、対話型プロセスに `git add -p` を使用するか、 `git add path/to/file` を使用して個々のファイルを追加します。

2. これですべてのコードがステージングされ、コミットできるようになりました。 次のコマンドを実行します。

   ```bash
   git commit -m 'committing initial code'
   ```

   > **メモ:** コミットメッセージには自由に何を書き込んでも構いませんが、適切なコミットメッセージに関する役立つヒントがウェブ上にいくつかあります。変更の内容を明確に説明できるように、短く簡潔に説明するようにしてください。

3. 最後にコードを GitHub でホストされているリポジトリにプッシュする必要があります。今すぐそうしましょう。
   
   GitHub で <https://github.com/new> にアクセスし、このコードをホストする独自のリポジトリを作成します。

4. リポジトリにスペースを含まない短くて覚えやすい名前 (単語を区切るにはハイフンを使用します) と説明を付けて、ページの下部にある _Create repository_ をクリックします。

    これで、新しい GitHub リポジトリを指す「リモート」 URL が作成されたはずです。

   ![GitHub screenshot showing remote URLs you can use to deploy code to a GitHub repo](github-quick-setup.png)

5. これで、コードを GitHub にプッシュする準備が整いました。 今すぐ次のコマンドを実行します。 

   ```bash
   git remote add github https://github.com/yourname/repo-name.git
   ```

   したがって、上のスクリーンショットのように、「リモート」 URL が `https://github.com/remy/super-website.git` の場合、コマンドは次のようになります。

   ```bash
   git remote add github https://github.com/remy/super-website.git
   ```

   URL を独自のリポジトリに変更し、今すぐ実行します。

6. これで、コードを GitHub にプッシュする準備が整いました。今すぐ次のコマンドを実行します。

   ```bash
   git push github main
   ```

   この時点で、 Git がプッシュの送信を許可する前に、ユーザー名とパスワードの入力を求められます。これは、前のスクリーンショットに見られるように、 SSH オプションではなく HTTPS オプションを使用したためです。 このためには、 GitHub ユーザー名が必要です。次に、2 要素認証 (2FA) が有効になっていない場合は、 GitHub パスワードが必要です。可能であれば 2FA を使用することを常にお勧めしますが、その場合は「個人アクセストークン」も使用する必要があることに注意してください。 GitHub のヘルプページには、 [その入手方法を説明する優れた簡単なチュートリアル](https://docs.github.com/en/authentication/keeper-your-account-and-data-secure/creating-a-personal-access) が記載されています。

> **メモ:** SSH オプションを使用して、GitHub にプッシュするたびにユーザー名とパスワードを入力する必要をなくすことに興味がある場合は、 [このチュートリアルでその方法を説明します](https://docs.github.com/en/authentication/) 。 

この最後のコマンドは、ブランチ `main` を使用して、 `github` と呼ばれる「リモート」の場所（github.com でホストされているリポジトリです。好きな名前にすることができます）にコードをプッシュする（別名パブリッシュする）ように git に指示します。 ブランチにはまったく遭遇しませんでしたが、 `main` ブランチが作業のデフォルトの場所であり、git がそこから開始されます。 これは Netlify が検索するデフォルトのブランチでもあり、便利です。

> **メモ:** 2020 年 10 月まで、GitHub のデフォルト ブランチは `master` でしたが、さまざまな社会的理由により `main` に切り替えられました。 この古いデフォルト ブランチは、遭遇するさまざまなプロジェクトに表示される可能性があることに注意してください。ただし、独自のプロジェクトには `main` を使用することをお勧めします。

プロジェクトを Git でコミットし、GitHub リポジトリにプッシュしたら、ツールチェーンの次のステップは、GitHub を Netlify に接続して、プロジェクトをウェブ上でライブデプロイできるようにすることです。

## デプロイに Netlify を使用する

GitHub から Netlify へのデプロイは、手順さえわかれば、特にこのプロジェクトのような「静的ウェブサイト」の場合、驚くほど簡単です。

> **メモ:** 開発ワークフローの改善に役立つ [Netlify のガイドとチュートリアル](https://www.netlify.com/blog/tags/tutorial/)も多数あります。

これをやってみましょう。

1. <https://app.netlify.com/start> に移動します。
2. _Continuous Deploymen(継続的デプロイメント)_ という見出しの下にある GitHub ボタンを押します。 _Continuous Deployment(継続的デプロイメント)_ とは、コードリポジトリが変更されるたびに、Netlify がコードのデプロイメントを試みる(つまり _continuous(継続的)_ である)ことを意味します。

   ![netlify deployment options, as described in the surrounding text](netlify-deploy.png)

3. 以前に Netlify を認証したかどうかに応じて、GitHub で Netlify を認証し、それを認証するアカウントを選択する必要がある場合があります(複数の GitHub アカウントまたは組織がある場合)。プロジェクトをプッシュしたものを選択します。
4. Netlify は、検索できる GitHub リポジトリのリストを表示します。プロジェクトリポジトリを選択し、次のステップに進みます。
5. Netlify を GitHub アカウントに接続し、プロジェクトリポジトリをデプロイするためのアクセス権を付与したため、 Netlify はプロジェクトのデプロイメントを _どのように_ 準備するか、 _何を_ デプロイするかを尋ねます。

   _Build コマンド_ としてコマンド `npm run build` を入力し、 _Publish ディレクトリ_ として `dist` ディレクトリを指定する必要があります。これには公開したいコードが含まれています。

6. 最後に、 _サイトのデプロイ_ をクリックします。

   ![netlify distribution options, as described in the surrounding text](netlify-dist.png)

7. デプロイメントが行われるまで少し待った後、公開されたサイトを表示するためにアクセスできる URL を取得します。試してみてください。
8. さらに良いことに変更を加えてリモート git リポジトリ (GitHub 上) にその変更を _プッシュ_ するたびに、 Netlify への通知がトリガーされ、指定されたビルドタスクが実行され、結果として得られる `dist` ディレクトリが公開されたディレクトリにデプロイされます。
   
   今すぐ試してください。アプリに小さな変更を加えてから、次のコマンドを使用して GitHub にプッシュします。 

   ```bash
   git add .
   git commit -m 'simple netlify test'
   git push github main
   ```

   公開されたサイトが変更に応じて更新されるはずです。公開には数分かかる場合があるので、少しお待ちください。

Netlify については以上です。 必要に応じて、Netlify プロジェクトの名前を変更したり、独自のドメイン名を使用するように指定したりできます。 Netlify では、[優れたドキュメント](https://docs.netlify.com/) を提供しています。

ここで、ツールチェーンの最後のリンクとして、コードが機能することを確認するテストを説明します。

## Testing

Testing itself is a vast subject, even within the realm of front-end development. I'll show you how to add an initial test to your project and how to use the test to prevent or to allow the project deployment to happen.

When approaching tests there are a good deal of ways to approach the problem:

- End-to-end testing, which involves your visitor clicking a thing and some other thing happening.
- Integration testing, which basically says "does one block of code still work when connected to another block?"
- Unit testing, where small and specific bits of functionality are tested to see if they do what they are supposed to do.
- [And many more types](https://en.wikipedia.org/wiki/Functional_testing). Also, see our [cross browser testing module](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing) for a bunch of useful testing information

Remember also that tests are not limited to JavaScript; tests can be run against the rendered DOM, user interactions, CSS, and even how a page looks.

However, for this project we're going to create a small test that will check the third-party NASA data feed and ensure it's in the correct format. If not, the test will fail and will prevent the project from going live. To do anything else would be beyond the scope of this module — testing is a huge subject that really requires its own separate module. We are hoping that this section will at least make you aware of the need for testing, and will plant the seed that inspires you to go and learn more.

Although the test for this project does not include a test framework, as with all things in the front-end development world, there are a slew of [framework options](https://www.npmjs.com/search?q=keywords%3Atesting).

The test itself isn't what is important. What is important is how the failure or success is handled. Some deployment platforms will include a specific method for testing as part of their pipeline. Products like GitHub, GitLab, etc., all support running tests against individual commits.

As this project is deploying to Netlify, and Netlify only asks about the build command, we will have to make the tests part of the build. If the test fails, the build fails, and Netlify won't deploy.

Let's get started.

1. Go to your `package.json` file and open it up.
2. Find your `scripts` member, and update it so that it contains the following test and build commands:

   ```json
   "scripts": {
     …
     "test": "node tests/*.js",
     "build": "npm run test && parcel build src/index.html"
   }
   ```

3. Now of course we need to add the test to our codebase; create a new directory in your root directory called tests:

   ```bash
   mkdir tests
   ```

4. Inside the new directory, create a test file:

   ```bash
   cd tests
   touch nasa-feed.test.js
   ```

5. Open this file, and add the contents of [nasa-feed.test.js](https://raw.githubusercontent.com/remy/mdn-will-it-miss/master/tests/nasa-feed.test.js) to it:
6. This test uses the axios package to fetch the data feed we want to test; to install this dependency, run the following command:

   ```bash
   npm install --save-dev axios
   ```

   We need to manually install axios because Parcel won't help us with this dependency. Our tests are outside of Parcel's view of our system — since Parcel never sees nor runs any of the test code, we're left to install the dependency ourselves.

7. Now to manually run the test, from the command line we can run:

   ```bash
   npm run test
   ```

   The result, if successful, is … nothing. This is considered a success. In general, we only want tests to be noisy if there's something wrong. The test also exited with a special signal that tells the command line that it was successful — an exit signal of 0. If there's a failure the test fails with an exit code of 1 — this is a system-level value that says "something failed".

   The `npm run test` command will use node to run all the files that are in the tests directory that end with `.js`.

   In our build script, `npm run test` is called, then you see the string `&&` — this means "if the thing on the left succeeded (exited with zero), then do this thing on the right". So this translates into: if the tests pass, then build the code.

8. You'll have to upload your new code to GitHub, using similar commands to what you used before:

   ```bash
   git add .
   git commit -m 'adding test'
   git push github main
   ```

   In some cases you might want to test the result of the built code (since this isn't quite the original code we wrote), so the test might need to be run after the build command. You'll need to consider all these individual aspects whilst you're working on your own projects.

Now, finally, a minute or so after pushing, Netlify will deploy the project update. But only if it passes the test that was introduced.

## Summary

That's it for our sample case study, and for the module! We hope you found it useful. While there is a long way to go before you can consider yourself a client-side tooling wizard, we are hoping that this module has given you that first important step towards understanding client-side tooling, and the confidence to learn more and try out new things.

Let's summarize all the parts of the toolchain:

- Code quality and maintenance are performed by ESLint and Prettier. These tools are added as `devDependencies` to the project via `npm install --dev eslint prettier eslint-plugin-react` (the ESLint plugin is needed because this particular project uses React).
- There are two configuration files that the code quality tools read: `.eslintrc` and `.prettierrc`.
- During development, we use Parcel to handle our dependencies. `parcel src/index.html` is running in the background to watch for changes and to automatically build our source.
- Deployment is handled by pushing our changes to GitHub (on the "main" branch), which triggers a build and deployment on Netlify to publish the project. For our instance this URL is [near-misses.netlify.com](https://near-misses.netlify.app/); you will have your own unique URL.
- We also have a simple test that blocks the building and deployment of the site if the NASA API feed isn't giving us the correct data format.

For those of you wanting a challenge, consider whether you can optimize some part of this toolchain. Some questions to ask yourself:

- Can [images be compressed](https://github.com/ralscha/parcel-plugin-compress) during the build step?
- Could React be swapped out for [something smaller](https://preactjs.com/)?
- Could you add more tests to prevent a bad build from deploying, such as [performance audits](https://web.dev/lighthouse-performance/)?
- Could you set up a notification to let you know when a new deploy succeeded or failed?

{{PreviousMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
