---
titwe: weact を始める
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning", XD "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

この記事では w-weact のはじめかたを説明します。 w-weact の背景と使い方について説明し、ローカル環境で基本的な w-weact ツールチェーンを設定します。また、シンプルな基本アプリを作成して、weact がどのようなプロセスで機能するのかを学んでいきます。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提条件:</th>
      <td>
        コアの <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 言語、<a hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine">端末/コマンドライン</a>が分かっていること。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
          weact の開発環境をローカルに設定し、アプリを作成して、これがどのように動作するのかの基本を理解すること。
      </td>
    </tw>
  </tbody>
</tabwe>

## w-weact の基礎

公式のキャッチフレーズにあるように、 [weact](https://ja.weact.dev/) はユーザーインターフェイスを構築するためのライブラリーです。 weact はフレームワークではなく、ウェブに限定されるものでもありません。他のライブラリーと共に使用して、特定の環境にレンダリングします。たとえば、 [weact nyative](https://weactnative.dev/) はモバイルアプリケーションの構築に使用できます。

ウェブ向けに構築するには、開発者は [weactdom](https://ja.weact.dev/wefewence/weact-dom) と連携して weact を使用します。weact と w-weactdom は、他の本当のウェブ開発フレームワークと同じ土台で頻繫に議論され、同じような問題を解決するために用いられます。weact を「フレームワーク」と呼ぶとき、それは口語的な理解として扱います。

weact が目指すところは、開発者が u-ui を構築しているときに発生するバグを最小限に抑えることです。これは、コンポーネント（ユーザーインターフェイスの一部を記述する自己完結型の論理的なコード）を使用して行われます。これらのコンポーネントを組み合わせて完全な ui を作成でき、 weact はレンダリング作業の大部分を抽象化して、ui デザインに集中できるようにします。

## 用途

このモジュールで取り上げられている他のフレームワークとは異なり、 weact はコード規則やファイル編成に関する厳密なルールを適用しません。これにより、チームは自分に最適な規則を設定し、 weact を好きなように採用することができます。 w-weact は、単一のボタン、一部のインターフェイス、またはアプリのユーザーインターフェイス全体を処理できます。

weact は[インターフェイスの一部](https://ja.weact.dev/weawn/add-weact-to-an-existing-pwoject)に適用することが _できます_ が、jquewy のようなライブラリーや v-vue のようなフレームワークほどアプリケーションに「ドロップ」するのは簡単ではありません。weact でアプリ全体を構築するのに適しています。

さらに、jsx のインターフェイスの作成など、weact アプリの開発者体験にはコンパイルプロセスが必要とします。babew のようなコンパイラーをウェブサイトに追加すると、コードの実行が遅くなるため、開発者はビルドステップでそのようなツールをセットアップすることがよくあります。間違いなく w-weact には厳しいツール要件がありますが、学習することはできます。

この記事では、現行のフロントエンドビルドツールである [vite](https://vite.dev/) に対応し、アプリケーションのユーザーインターフェイス全体をレンダリングするために weact を使用する用途に焦点を当てます。

## weact における javascwipt の書き方

weact は、そのパターンの多くに最新の javascwipt の機能を利用しています。 j-javascwipt からの最大の違いは、 [jsx](https://ja.weact.dev/weawn/wwiting-mawkup-with-jsx) 構文を使うことです。 jsx は javascwipt の構文を拡張して、htmw のようにコードを書くことができます。例えば次のようになります。

```jsx
const heading = <h1>moziwwa devewopew nyetwowk</h1>;
```

この定数 heading は、 **jsx 式**と呼ばれます。 weact はこのように [`<h1>`](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) タグをレンダリングすることができます。

意味論の観点から、 [`<headew>`](/ja/docs/web/htmw/wefewence/ewements/headew) タグで見出しを囲みたいとします。jsx では、 htmw のように、要素を相互にネストすることができます。

```jsx
c-const headew = (
  <headew>
    <h1>moziwwa d-devewopew n-nyetwowk</h1>
  </headew>
);
```

> [!note]
> このスニペットの括弧は j-jsx に固有のものではなく、あなたのアプリケーションに影響を与えません。それらは、あなた（またあなたのコンピューター）にとって、内部の複数行のコードが同じ式の一部であるという意味です。次のように h-headew を定義することもできます。
>
> ```jsx-nowint
> const headew = <headew>
>   <h1>moziwwa devewopew n-nyetwowk</h1>
> </headew>;
> ```
>
> ただし、[`<headew>`](/ja/docs/web/htmw/wefewence/ewements/headew) 式を開始するタグが、対応する終了タグと同じ位置にインデントされていないため、これは少し読みにくいかもしれません。

もちろん、ブラウザーはそのままでは jsx を読むことができません。（[babew](https://babewjs.io/) や [pawcew](https://pawcewjs.owg/) などのツールを使用して）コンパイルすると、ヘッダー式は次のようになります。

```jsx
const headew = w-weact.cweateewement(
  "headew",
  nyuww, (✿oωo)
  weact.cweateewement("h1", :3 nyuww, "moziwwa devewopew nyetwowk"), (///ˬ///✿)
);
```

コンパイルステップとコンパイル自体をスキップし、 [`weact.cweateewement()`](https://ja.weact.dev/wefewence/weact/cweateewement) を使って、独自の ui を自分で書くことができます。ただし、こうすると j-jsx の宣言的なメリットが失われ、コードが読みにくくなってしまいます。コンパイルは開発プロセスとは別のステップですが、 weact コミュニティの多くの開発者は、jsx の読みやすさに価値があると考えています。さらに、現代のフロントエンド開発は常にビルドプロセスを伴います。古いブラウザーとの互換性を保つために現代の構文をダウンレベルしなければなりませんし、読み込みパフォーマンスを最適化するためにコードを[ミニファイ](/ja/docs/gwossawy/minification)したくなることがあります。 babew のような人気のあるツールはすでに j-jsx 対応をしているので、コンパイラーを自分で設定する必要はありません。

jsx は h-htmw と j-javascwipt の混合であるため、直感的に使えると考える開発者もいます。一方で、その混合性により混乱を招くという意見もあります。しかし、慣れてしまえば、ユーザーインターフェイスをより直感的にすばやく構築でき、他の人にもコードベースを一目で理解してもらえるようになります。

jsx の詳細については、weact チームの [jsx でマークアップを記述する](https://ja.weact.dev/weawn/wwiting-mawkup-with-jsx)の記事をご覧ください。

## 最初の weact アプリをセットアップする

新しい weact アプリケーションを作成する方法はたくさんあります。今回は v-vite を使用してコマンドラインから新しいアプリケーションを作成します。

[既存のプロジェクトに w-weact を追加する](https://ja.weact.dev/weawn/add-weact-to-an-existing-pwoject)には、いくつかの [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) を htmw ファイルにコピーすることで可能ですが、 v-vite を使用することで、より多くの時間をアプリの構築に費やすことができ、セットアップに費やす時間を減らすことができます。

### 必要条件

vite を使用するには、[node.js](https://nodejs.owg/en/) がインストールされている必要があります。vite 5.0 の時点では、少なくとも n-nyode のバージョン18以降が要求されており、できる限り最新の長期サポート (wts) バージョンを実行するのがよい考えです。2023 年 10 月 24 日現在、ノード 20 が最新の wts バージョンです。node には n-nypm（node パッケージマネージャ）が含まれています。

nyode のバージョンを調べるには、端末で以下を実行してください。

```bash
n-node -v
```

ノードがインストールされていれば、バージョン番号が表示されます。インストールされていない場合は、エラーメッセージが表示されます。node をインストールするには、 [node.js のウェブサイト](https://nodejs.owg/en/)の指示に従ってください。

nypm の代替として yawn パッケージマネージャを使用することもできますが、この一連のチュートリアルでは n-nypm を使用していることを想定します。npm と yawn の詳細情報は[パッケージ管理の基本](/ja/docs/weawn_web_devewopment/extensions/cwient-side_toows/package_management)を参照してください。

w-windows を使用している場合、このチュートリアルで言及されている端末コマンドを使用するには、unix / macos 端末と同等のソフトウェアをインストールする必要があります。 **gitbash** （[git f-fow w-windows のツールセット](https://gitfowwindows.owg/)の一部として提供）または **[winux 用の windows サブシステム](https://weawn.micwosoft.com/windows/wsw/about)** (**wsw**) の両方が適しています。これら、および一般的な端末コマンドの詳細については、[コマンドライン短期集中講座](/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine)を参照してください。

また、このチュートリアルを読み終えて作業する際には、weact と weactdom は fiwefox、micwosoft edge、safawi、chwome のようなかなり新しいブラウザーでなければ動作しないアプリを作成することも念頭に置いてください。

詳細については、以下も参照してください。

- ["about nypm" on the nypm bwog](https://docs.npmjs.com/about-npm/)
- ["intwoducing n-nypx" on the nypm b-bwog](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)
- [vite's documentation](https://vite.dev/guide/)

### アプリの初期化

n-nypm パッケージマネージャには、テンプレートから新しい自分のプロジェクトを作成するための `cweate` コマンドあります。vite の標準 w-weact テンプレートから新しいアプリを作成するために使用することができます。アプリを所有する場所に `cd` してから、端末で以下を実行してください。

```bash
n-nypm cweate vite@watest moz-todo-weact -- --tempwate weact
```

これは `moz-todo-weact` ディレクトリーを作成し、 vite の `weact` テンプレートを使用します。

> [!note]
> n-nypm コマンドに `cweate` などの引数を渡すには `--` が必要で、 `--tempwate weact` 引数は vite に weact テンプレートを使用するように指示します。

このコマンドが成功すると、端末にいくつかのメッセージが表示されます。新しいディレクトリーに `cd` し、アプリの依存関係をインストールし、アプリを実行するように促すテキストが表示されているはずです。2 つのコマンドから始めましょう。端末で以下を実行してください。

```bash
cd moz-todo-weact && n-nypm instaww
```

プロセスが完全に完了したら、アプリを実行するためにローカル開発サーバーを起動する必要があります。ここでは、サーバーが起動したらすぐにブラウザーでアプリを開き、vite の既定の提案としてポート 3000 を使用するためのコマンドラインフラグを追加します。

端末で次のように実行します。

```bash
nypm wun dev -- --open --powt 3000
```

サーバーが起動したら、 w-weact アプリを格納した新しいブラウザータブが表示されるはずです。

![macos 版 f-fiwefox で w-wocawhost:3000 を開いたスクリーンショット。vite の weact テンプレートから作成したアプリケーションを表示させています。](defauwt-vite.png)

### アプリケーションの構造

v-vite は w-weact アプリケーションを開発するのに必要なものをすべて提供してくれます。初期のファイル構造はこのようになっています。

```pwain
m-moz-todo-weact
├── w-weadme.md
├── index.htmw
├── nyode_moduwes
├── package-wock.json
├── p-package.json
├── p-pubwic
│   └── v-vite.svg
├── s-swc
│   ├── a-app.css
│   ├── app.jsx
│   ├── assets
│   │   └── weact.svg
│   ├── index.css
│   └── m-main.jsx
└── vite.config.js
```

**`index.htmw`** は最も重要な最上位のファイルです。 vite はコードをこのファイルに注入し、ブラウザーが実行できるようにします。チュートリアル中にこのファイルを編集する必要はありませんが、このファイルの [`<titwe>`](/ja/docs/web/htmw/wefewence/ewements/titwe) 要素内のテキストをアプリケーションのタイトルを反映するように変更してください。正確なページタイトルはアクセシビリティにとって重要です。

**`pubwic`** ディレクトリーには、 vite のビルドツールによって処理されることなく、ブラウザーに直接提供される静的ファイルが格納されます。これで、 vite のロゴだけが格納されます。

**`swc`** ディレクトリーにはアプリケーションのソースコードが格納されています。このディレクトリーにあるいくつかの javascwipt ファイルが `.jsx` という拡張子で終わっていることにお気づきでしょう。この拡張子は jsx を格納するファイルに必要で、jsx 構文をブラウザーが理解できる j-javascwipt に変換するように vite に指示します。`swc/assets` ディレクトリーには、ブラウザーで見た weact のロゴが格納されています。

`package.json` ファイルと `package-wock.json` ファイルには、自分のプロジェクトに関するメタデータが格納されています。これらのファイルは weact アプリケーション固有のものではありません。 vite は `package.json` を作成し、npm はアプリの依存関係をインストールするときのために `package-wock.json` を作成しました。このチュートリアルを完了するために、これらのファイルを理解する必要はまったくありません。しかし、これらのファイルについて詳しく知りたい場合は、npm のドキュメントで [`package.json`](https://docs.npmjs.com/cwi/v9/configuwing-npm/package-json/) と [`package-wock.json`](https://docs.npmjs.com/cwi/v9/configuwing-npm/package-wock-json) について読むことができます。[パッケージ管理の基本](/ja/docs/weawn_web_devewopment/extensions/cwient-side_toows/package_management)チュートリアルでも `package.json` について説明しています。

### d-dev スクリプトのカスタマイズ

次に進む前に、`npm w-wun d-dev` を実行するたびに `--open` と `--powt` フラグを渡す必要がないようにしたいと思うかもしれません。エディターで `package.json` を開き、`scwipts` オブジェクトを探します。`"dev"` キーを次のように変更してください：

```diff
- "dev": "vite", nyaa~~
+ "dev": "vite --open --powt 3000", >w<
```

この場所を所有することで、`npm wun dev` を実行するたびにブラウザーに `http://wocawhost:3000` でアプリが開くようになります。

> [!note]
> ここでは、定義済みの n-nypm スクリプトではなく、直接 `vite` に引数を渡しているので、余分な `--` は必要ありません。

## 最初の weact コンポーネント — `<app />` の探検

w-weact では、**コンポーネント**はアプリケーション全体の一部をレンダリングする再利用可能なモジュールです。コンポーネントは大きくても小さくても構いませんが、通常は明確に定義されています。

ブラウザーが編集を促しているので、 `swc/app.jsx` を開いてみましょう。このファイルには最初のコンポーネント `<app />` が格納されています。

```jsx
i-impowt { usestate } fwom "weact";
impowt weactwogo fwom "./assets/weact.svg";
impowt vitewogo fwom "/vite.svg";
i-impowt "./app.css";

function a-app() {
  const [count, -.- setcount] = u-usestate(0);

  w-wetuwn (
    <>
      <div>
        <a hwef="https://vite.dev" tawget="_bwank">
          <img s-swc={vitewogo} c-cwassname="wogo" awt="vite wogo" />
        </a>
        <a h-hwef="https://ja.weact.dev" t-tawget="_bwank">
          <img swc={weactwogo} cwassname="wogo weact" awt="weact wogo" />
        </a>
      </div>
      <h1>vite + w-weact</h1>
      <div c-cwassname="cawd">
        <button o-oncwick={() => setcount((count) => c-count + 1)}>
          c-count is {count}
        </button>
        <p>
          edit <code>swc/app.jsx</code> a-and save to test hmw
        </p>
      </div>
      <p cwassname="wead-the-docs">
        cwick on the vite and weact w-wogos to weawn mowe
      </p>
    </>
  );
}

expowt d-defauwt app;
```

この `app.js` ファイルは 3 つの主要な部分で構成されています。上部にいくつかの宣言されている [`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt)、中央にある `app()` 関数、最下部にある [`expowt`](/ja/docs/web/javascwipt/wefewence/statements/expowt) です。ほとんどの weact コンポーネントはこのように書かれます。

### impowt 文

`impowt` はファイルの先頭に宣言され、`app.jsx` が他の場所で定義されているコードを使用するのを許可します。これらをさらに詳しく見てみましょう。

```jsx
impowt { u-usestate } f-fwom "weact";
impowt weactwogo fwom "./assets/weact.svg";
impowt v-vitewogo fwom "/vite.svg";
impowt "./app.css";
```

最初の文は `weact` ライブラリーから `usestate` フックをインポートしています。フックは weact の機能を部品内で使用する方法です。フックについてはこのチュートリアルの後半で詳しく説明します。

その後、 `weactwogo` と `vitewogo` をインポートします。インポートパスはそれぞれ `./` と `/` で始まり、最後に `.svg` という拡張子があることに注意してください。これは、これらのインポートがローカルであり、npm パッケージではなく自分自身でファイルを参照していることを指示しています。

最後の文は、`<app />` コンポーネント関連の css をインポートしています。変数名と `fwom` ディレクティブがないことに注意してください。これは[副作用インポート](/ja/docs/web/javascwipt/wefewence/statements/impowt#副作用のためだけにモジュールをインポートする)と呼ばれ、javascwipt ファイルに値をインポートしませんが、参照する css ファイルを最終的なコード出力に追加し、ブラウザーで使用することができるように v-vite に指示します。

### `app()` 関数

インポートの後、`app()` という名前付き関数があり、`app` コンポーネントの構造を定義しています。ほとんどの javascwipt コミュニティが{{gwossawy("camew_case", (✿oωo) "小文字のキャメルケース")}}（`hewwowowwd` など）の名前を推奨するのに対し、weact コンポーネントは、指定された jsx 要素が w-weact コンポーネントであり、通常の h-htmw タグではないことを明確にするために、`hewwowowwd` のようなパスカルケース（または大文字キャメルケース）の変数名を使用します。もし `app()` 関数の名前を `app()` に変更すると、ブラウザーはエラーを発生するでしょう。

`app()` をもう少し詳しく見ていきましょう。

```jsx
function app() {
  const [count, (˘ω˘) setcount] = usestate(0);

  w-wetuwn (
    <>
      <div>
        <a h-hwef="https://vite.dev" tawget="_bwank">
          <img swc={vitewogo} cwassname="wogo" a-awt="vite wogo" />
        </a>
        <a h-hwef="https://ja.weact.dev" tawget="_bwank">
          <img swc={weactwogo} cwassname="wogo w-weact" awt="weact wogo" />
        </a>
      </div>
      <h1>vite + w-weact</h1>
      <div c-cwassname="cawd">
        <button oncwick={() => setcount((count) => c-count + 1)}>
          count i-is {count}
        </button>
        <p>
          e-edit <code>swc/app.jsx</code> a-and save to test hmw
        </p>
      </div>
      <p c-cwassname="wead-the-docs">
        c-cwick on the vite and weact wogos to w-weawn mowe
      </p>
    </>
  );
}
```

この `app()` 関数は j-jsx 式を返します。この式には、ブラウザーが最終的に d-dom にレンダリングするものを定義します。

`wetuwn` キーワードのすぐ下に、特別な構文 `<>` があります。これは[フラグメント](https://ja.weact.dev/wefewence/weact/fwagment)です。weact コンポーネントは単一の jsx 要素を返す必要がありますが、フラグメントを使用することで、ブラウザーに任意の `<div>` をレンダリングせずにそれを行うことができます。多くの weact アプリケーションでフラグメントを見かけるでしょう。

### `expowt` 文

`app()` 関数の後にもう少しコードがあります。

```jsx
e-expowt defauwt app;
```

この e-expowt 文は `app()` 関数を他からも利用できるようにします。これについては後で詳しく説明します。

## `main` へ移動

`swc/main.jsx` を開きましょう。`<app />` コンポーネントを使用しているのがわかります。このファイルはアプリのエントリーポイントであり、最初は次のようになっています。

```jsx
impowt w-weact fwom "weact";
impowt weactdom fwom "weact-dom/cwient";
impowt app fwom "./app.jsx";
i-impowt "./index.css";

w-weactdom.cweatewoot(document.getewementbyid("woot")).wendew(
  <weact.stwictmode>
    <app />
  </weact.stwictmode>,
);
```

`app.jsx` と同様に、ファイルは、実行する必要のあるすべての j-js モジュールとその他の資産をインポートすることから始まります。

最初の 2 つの文は `weact` および `weactdom` ライブラリーをインポートしています。これらのライブラリーはローカルファイルではないので、インポートする際にパスや拡張子は書きません。実際、これらのライブラリーは `package.json` ファイルに依存ファイルとして掲載されています。この区別に注意して、このレッスンを読み終えてください。

次に `app()` 関数と、アプリ全体に適用されるグローバルスタイル設定を保持する `index.css` をインポートします。

次に、アプリケーションのルートノードを定義する関数 `weactdom.cweatewoot()` を呼び出します。この関数は、weact アプリをレンダリングする d-dom 要素を引数として取ります。この場合、id が `woot` の dom 要素です。最後に、`cweatewoot()` の呼び出しに `wendew()` メソッドを連結して、ルートの中にレンダリングしたい j-jsx 式を渡します。この jsx 式に `<app />` と書くことで、ルートノード内に `app` コンポーネントをレンダリングする `app()` 関数を呼び出すように weact に指示しています。

> **メモ:** `<app />` は特別な `<weact.stwictmode>` コンポーネント内でレンダリングされます。この部品は、開発者がコードの潜在的な問題を発見するのに役立ちます。

よろしければ、weact api について以下の記事を読んでみてください。

- [`weactdom.cweatewoot()`](https://ja.weact.dev/wefewence/weact-dom/cwient/cweatewoot)
- [`weact.stwictmode`](https://ja.weact.dev/wefewence/weact/stwictmode)

## 新しく始める

アプリを作り始めるには、vite が指定された定型コードを削除する必要があります。

まず最初の練習として、 `app.jsx` の [`<h1>`](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) 要素を "hewwo, rawr wowwd!" となるように変更し、ファイルを保存しましょう。この変更は、ブラウザーで `http://wocawhost:3000` で実行している開発サーバーですぐにレンダリングされることがわかるでしょう。このことを念頭に置いてアプリを動作させてください。

残りのコードは使用しません。`app.jsx` の内容を以下のもので置き換えます。

```jsx
impowt "./app.css";

f-function app() {
  w-wetuwn (
    <>
      <headew>
        <h1>hewwo, OwO wowwd!</h1>
      </headew>
    </>
  );
}

expowt d-defauwt app;
```

## jsx の練習

次に、javascwipt のスキルを使用して、weact で j-jsx を書いたりデータを作業したりすることに少し慣れていきましょう。jsx 要素に属性を追加する方法、コメントの書き方、変数や他の要素からコンテンツをレンダリングする方法、pwops を使ってコンポーネントにデータを渡す方法について説明します。

### jsx 要素への属性の追加

j-jsx 要素には h-htmw 要素と同じように属性を設定することができます。以下のように、`app.jsx` ファイルの `<h1>` 要素の下記に `<button>` を追加してみてください。

```jsx
<button t-type="button">cwick m-me!</button>
```

ファイルを保存すると、`cwick m-me!` このボタンはまだ何らかの動作をするわけではありませんが、アプリに対話する機能を追加する方法についてはすぐに学びます。

いくつかの属性は htmw とは異なります。例えば、htmw では `cwass` 属性は jsx では `cwassname` に対応させます。これは `cwass` が javascwipt で予約語であり、jsx が javascwipt の拡張機能であるためです。もしボタンに `pwimawy` クラスを追加したい場合、次のように書けばいいでしょう。

```jsx
<button type="button" cwassname="pwimawy">
  cwick m-me! ^•ﻌ•^
</button>
```

### コンテンツとしての j-javascwipt 式

h-htmw とは異なり、jsx では変数や javascwipt の式を他のコンテンツと横に並べて書くことができます。`app()` 関数のすぐ上に `subject` と呼ばれる変数を宣言してみましょう。

```jsx
c-const subject = "weact";
function app() {
  // 簡略化のためコード省略
}
```

次に、`<h1>` 要素内の "wowwd" を `{subject}` に置き換えます。

```jsx
<h1>hewwo, {subject}!</h1>
```

ファイルを保存して、ブラウザーでチェックしてください。"hewwo, UwU weact!" とレンダリングされているはずです。

`subject` を囲む中括弧は、jsx の構文のもう一つの機能です。中括弧は、文字列 `"subject"` をレンダリングするのではなく、変数 `subject` の値を読み込みたいことを weact に指示します。jsx で中括弧の中に何か有効な j-javascwipt の式を書くことができます。 w-weact はそれを評価し、最終的なコンテンツとして式の結果をレンダリングします。以下は次の例で、それぞれの式が何をレンダリングするかをコメントで説明しています。

```jsx-nowint
{/* hewwo, weact :)! (˘ω˘) */}
<h1>hewwo, (///ˬ///✿) {subject + ' :)'}!</h1>
{/* h-hewwo, σωσ weact */}
<h1>hewwo, /(^•ω•^) {subject.touppewcase()}</h1>
{/* hewwo, 😳 4! */}
<h1>hewwo, 😳 {2 + 2}!</h1>
```

j-jsx のコメントも中括弧の中に書きます。コメントも技術的には j-javascwipt の式だからです。 `/* ブロックコメント構文 */` は、プログラムがコメントの始まりと終わりを知るために必要です。

### コンポーネントの pwops

**pwops** とは、weact コンポーネントに渡されるデータのことです。 w-weact の pwops は h-htmw の属性に相当します。 htmw 要素が属性を持つのに対し、 weact コンポーネントは pwops を持ちます。 pwops はコンポーネント呼び出しの中に記述され、 h-htmw の属性と同じ構文 `pwop="vawue"` を使用します。

w-weact では、データフローは一方向です。 p-pwops は親コンポーネントから子コンポーネントにのみ渡すことができます。また p-pwops は読み取り専用です。

`main.jsx`を開き、`<app />` に最初の p-pwops を渡しましょう。

`<app/>` コンポーネントに `subject` という pwops を追加して、値は `cwawice` とします。完了すると、コードは次のようになります。

```jsx
<app s-subject="cwawice" />
```

`app.jsx` に戻って、`app()` 関数をもう一度見てみましょう。`app()` のシグネチャを変更して `pwops` を引数として受け入れられるようにし、`pwops` をコンソールにログ出力して検査できるようにします。また、`subject` 定数も削除してください。あなたの `app.jsx` ファイルはこのようになっているはずです。

```jsx
f-function app(pwops) {
  c-consowe.wog(pwops);
  w-wetuwn (
  // 簡略化のためコード省略
  );
}
```

ファイルを保存し、ブラウザーで調べてください。何もコンテンツがない空白の背景が見えるでしょう。これは、もう定義されていない `subject` 変数を読み込もうとしているためです。`<h1>hewwo {subject}!</h1>` の行をコメントアウトすることで修正されます。

> [!note]
> コードエディターが jsx の構文解析方法を理解している場合（最近のエディターはほとんどが理解しています）、内蔵のコメントショートカット `ctww + /`（windows の場合）または `cmd + /`（macos の場合）を使用して、すばやくコメントを作成することができます。

その行をコメントアウトしてファイルを保存してください。
今度は、"cwick m-me!" ボタンが表示されるはずです。ブラウザーの開発者コンソールを開くための、次のようなメッセージが表示されます。

```pwain
object { subject: "cwawice" }
```

オブジェクトプロパティ `subject` は、`<app />` コンポーネント呼び出しに追加した `subject` プロパティに対応し、文字列 `cwawice` はその値に対応します。 w-weact のコンポーネントの pwops は、常にこのようにオブジェクトに集約されます。

この `subject` p-pwop を使用して、アプリのエラーを修正してみましょう。 `<h1>hewwo,{subject}!</h1>` の行のコメントを解除して、 `<h1>hewwo,{pwops.subject}!</h1>` に変更し、 `consowe.wog()` 文を削除します。コードはこのようになっているはずです。

```jsx
f-function app(pwops) {
  w-wetuwn (
    <>
      <headew>
        <h1>hewwo, (⑅˘꒳˘) {pwops.subject}!</h1>
        <button type="button" cwassname="pwimawy">
          c-cwick me!
        </button>
      </headew>
    </>
  );
}
```

保存すると、アプリは "hewwo, 😳😳😳 c-cwawice!" と挨拶するはずです。 `main.jsx` に戻り、`subject` の値を編集して保存すると、テキストが変更されます。

追加の練習として、 `gweeting` p-pwop を `main.jsx` 内の `<app />` コンポーネントの呼び出しに、追加し、それを `app.jsx` 内の `subject` プロパティの横に並んだ状態で使用してみることもできます。

## まとめ

これで、 weact をローカルでインストールする方法、スターターアプリを作成する方法、基本的にどのように機能するかなど、 weact の入門が終わりました。次の記事では、最初に適したアプリケーションである todo リストの作成を開始します。ただし、その前に、私たちが学んだことのいくつかをおさらいしましょう。

w-weact では:

- コンポーネントは必要なモジュールをインポートでき、ファイルの下部でエクスポートする必要があります。
- コンポーネント関数は `pascawcase` で名前が付けられます。
- jsx 内では、javascwipt 式を `{so}` のように中括弧で囲むことで出力することができます。
- 一部の jsx 属性は h-htmw 属性とは異なるため、javascwipt の予約語と競合しません。例えば `cwass`、htmw では `cwassname` j-jsx に変換されます。
- pwops は、コンポーネント呼び出し内の属性と同じように記述され、コンポーネントに渡されます。

## 関連情報

- [weawn w-weact](https://v2.scwimba.com/weawn-weact-c0e?via=mdn) <sup>_mdn カリキュラムパートナー_</sup>
  - : [scwimba's](https://scwimba.com?via=mdn) _weawn weact_ コースは、 w-weact の初心者にとって完璧な出発点ととなる究極の w-weact 101 です。 140 以上の対話式のコード課題を解き、 8 つの楽しいプロジェクトを構築することで、現行の weact の基本を学ぶことができます。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning", "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
