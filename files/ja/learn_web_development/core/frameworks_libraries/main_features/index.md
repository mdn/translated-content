---
title: フレームワークの主な機能
slug: Learn_web_development/Core/Frameworks_libraries/Main_features
l10n:
  sourceCommit: c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}

主要な JavaScript フレームワークはそれぞれ、 DOM の更新、ブラウザーイベントの処理、楽しい開発者エクスペリエンスの提供に関して、異なるアプローチが採用されています。この記事では、「ビッグ 4」フレームワークの主な特徴を探り、フレームワークがどのように機能する傾向があるかを高いレベルから見ていき、それらの違いを見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コアの <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>、
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
        <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a> 言語が分かっていること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>JavaScript フレームワークで提供される主要な機能を理解すること。</td>
    </tr>
  </tbody>
</table>

## ドメイン固有言語

このモジュールで説明するすべてのフレームワークは JavaScript を利用しており、アプリケーションを構築するためにドメイン固有言語 (DSL) を使用できます。特に、 React はコンポーネントの作成に **JSX** の使用を普及させ、一方、 Ember は **Handlebars** を利用します。 HTML とは異なり、これらの言語はデータ変数の読み取り方法を知っており、このデータを使用して UI を作成するプロセスを合理化できます。

Angular アプリでは、 **TypeScript** が頻繁に使用されます。 TypeScript はユーザーインターフェイスの記述には関与しませんが、ドメイン固有の言語であり、通常の JavaScript とは大きな違いがあります。

DSL はブラウザーで直接読み取ることはできません。最初に JavaScript または HTML に変換する必要があります。フレームワークツールには通常、このステップを処理するために必要なツールが含まれているか、このステップを含めるように調整することができます。これらのドメイン固有言語を使用せずにフレームワークアプリを構築することも可能ですが、これらの言語を採用すると、開発プロセスが合理化され、それらのフレームワークに関するコミュニティからのヘルプを見つけやすくなります。

### JSX

[JSX](https://ja.react.dev/learn/writing-markup-with-jsx) は、 JavaScript と XML の略で、JavaScript 環境に HTML のような構文をもたらす JavaScript の拡張機能です。これは React アプリケーションで使用するために React チームによって発明されましたが、 Vue アプリなどの他のアプリケーションの開発にも使用できます。

以下に簡単な JSX の例を示します。

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

この式は、 HTML の [`<header>`](/ja/docs/Web/HTML/Reference/Elements/header) 要素の内部に [`<h1>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) 要素があることを表します。 `{subject}` を囲む中括弧は、アプリケーションに `subject` 定数の値を読み取り、それを `<h1>` に挿入するように指示します。

React で使用すると、前のスニペットの JSX は次のようにコンパイルされます。

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

最終的にブラウザーによってレンダリングされると、上記のスニペットは次のような HTML を生成します。

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

[Handlebars](https://handlebarsjs.com/) はテンプレート言語で、 Ember アプリケーションに固有のものではありませんが、 Ember アプリケーションで頻繁に利用されています。 Handlebars コードは HTML に似ていますが、他の場所からデータを取り込むオプションがあります。このデータは、アプリケーションが最終的に構築する HTML に影響を与えるために使用できます。

JSX と同様に、 Handlebars は中括弧を使用して変数の値を挿入します。ハンドルバーは、単一ペアではなく、二重ペアの中括弧を使用します。

このハンドルバーテンプレートを考慮すると、次のようになります。

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

そしてこのデータは次のようになります。

```js
{
  subject: "World";
}
```

Handlebars は次のような HTML を構築します。

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) は JavaScript の「スーパーセット」です。つまり、 JavaScript を拡張したものです。すべての JavaScript コードは有効な TypeScript ですが、その逆はありません。 TypeScript は、開発者がコードに厳密性を適用できるという点で役立ちます。たとえば、整数 `a` と `b` を受け取り、その合計を返す関数 `add()` について考えてみましょう。

JavaScript では、この関数は次のように記述できます。

```js
function add(a, b) {
  return a + b;
}
```

このコードは JavaScript に慣れている人にとっては簡単かもしれませんが、さらに明確になる可能性があります。 JavaScript では `+` 演算子を使用して文字列を連結できるため、 `a` と `b` が文字列の場合でもこの関数は技術的には機能しますが、期待する結果が得られない可能性があります。この関数に数値のみを渡すことを許可したい場合はどうすればよいでしょうか? TypeScript を使用すると、次のことが可能になります。

```ts
function add(a: number, b: number) {
  return a + b;
}
```

ここで各引数の後に書かれた `: number` は、TypeScript に `a` と `b` の両方が数値でなければならないことを伝えます。この関数を使用して引数として `'2'` を渡すと、 TypeScript はコンパイル中にエラーを発生させ、間違いを修正する必要があります。これらのエラーを発生させる独自の JavaScript を作成することもできますが、ソースコードが大幅に冗長になります。 TypeScript にそのようなチェックを処理させる方がおそらく合理的です。

## コンポーネントの作成

前の章で述べたように、ほとんどのフレームワークには何らかのコンポーネントモデルがあります。 React コンポーネントは JSX で、 Ember コンポーネントは Handlebars で、 Angular コンポーネントと Vue コンポーネントは HTML を軽く拡張したテンプレート構文で作成できます。

コンポーネントをどのように記述するべきかについての意見が何であろうと、各フレームワークのコンポーネントは、必要となる可能性のある外部プロパティ、コンポーネントが管理する必要がある内部状態、およびユーザーがコンポーネントのマークアップでトリガーできるイベントを記述する方法を提供します。

この節の残りのコードスニペットは例として React を使用し、 JSX で書かれています。

### プロパティ

プロパティ (Properties、または **props**) は、コンポーネントがレンダリングするために必要な外部データです。オンラインマガジンのウェブサイトを構築していて、それぞれの寄稿者が自分の作品に対してクレジットを取得できるようにする必要があるとします。各記事に付随する `AuthorCredit` コンポーネントを作成することもできます。このコンポーネントは、著者の肖像と著者に関する短い署名文を表示する必要があります。どの画像をレンダリングするか、どの署名欄を印刷するかを知るために、 `AuthorCredit` はいくつかのプロパティを受け入れる必要があります。

この `AuthorCredit` コンポーネントの React 表現は次のようになります。

```jsx
function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.byline}</figcaption>
    </figure>
  );
}
```

`{props.src}`, `{props.alt}`, および `{props.byline}` は、 props がコンポーネントに挿入される場所を表します。このコンポーネントをレンダリングするには、レンダリングしたい場所（おそらく別のコンポーネント内にあるでしょう）に次のようなコードを記述します。

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

これにより、最終的に次の [`<figure>`](/ja/docs/Web/HTML/Reference/Elements/figure) 要素がブラウザーにレンダリングされます。その構造は `AuthorCredit` コンポーネントで定義されているとおりであり、そのコンテンツは次のようになります。 `AuthorCredit` コンポーネント呼び出しに含まれるプロパティで定義されます。

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### 状態

前の章で状態 (**state**) の概念について説明しました。効果的なフレームワークの鍵となるのは堅牢な状態処理メカニズムであり、各コンポーネントには状態の制御が必要なデータが含まれる場合があります。この状態は、コンポーネントが使用されている限り、何らかの形で持続します。プロパティと同様に、状態を使用してコンポーネントのレンダリング方法に影響を与えることができます。

例として、クリックされた回数を数えるボタンについて考えてみましょう。このコンポーネントは、自身の _count_ 状態を追跡する必要があり、次のように記述できます。

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://ja.react.dev/reference/react/useState) は **[React フック](https://ja.react.dev/reference/react)**です。データ値は、更新されるたびにその値を追跡します。コードは最初、ブラウザーで次のように表示されます。

```html
<button>Clicked 0 times</button>
```

`useState()` 呼び出しは、アプリ全体にわたって堅牢な方法で `count` 値を追跡します。そのためのコードを自分で記述する必要はありません。

### イベント

操作できるようにするためには、アプリケーションがユーザーに応答できるように、コンポーネントがブラウザーイベントに応答する方法が必要です。フレームワークはそれぞれ、ブラウザーイベントを待ち受けするための独自の構文を提供し、同等のネイティブブラウザーイベントの名前を参照します。

React では、[`click`](/ja/docs/Web/API/Element/click_event) イベントを待ち受けするには、特別なプロパティ `onClick` が必要です。上記の `CounterButton` コードを更新して、クリック数をカウントできるようにしましょう。

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

このバージョンでは、追加の `useState()` 機能を使用して特別な `setCount()` 関数を作成し、これを呼び出して `count` の値を更新します。この関数を `onClick` イベントハンドラー内で呼び出して、「count」を現在の値に 1 を加えた値に設定します。

## スタイル設定コンポーネント

各フレームワークは、コンポーネント、またはアプリケーション全体のスタイルを定義する方法を提供します。コンポーネントのスタイルを定義するための各フレームワークのアプローチは若干異なりますが、いずれのフレームワークでも複数の方法が提供されています。いくつかのヘルパーモジュールを追加すると、 [Sass](https://sass-lang.com/) または [Less](https://lesscss.org/) でフレームワークアプリのスタイルを設定したり、 CSS スタイルシートを [PostCSS](https://postcss.org/) を使用してトランスパイルしたりできます。

## 依存関係の処理

すべての主要なフレームワークは、他のコンポーネント内のコンポーネントを使用して、場合によっては複数の階層レベルを使用して、依存関係を処理するためのメカニズムを提供します。他の機能と同様、正確なメカニズムはフレームワークによって異なりますが、最終的な結果は同じです。コンポーネントは、標準の [JavaScript モジュール構文](/ja/docs/Web/JavaScript/Guide/Modules) 、または少なくともそれに類似したものを使用して、コンポーネントを他のコンポーネントにインポートする傾向があります。

### コンポーネント内のコンポーネント

コンポーネントベースの UI アーキテクチャの主な利点の 1 つは、コンポーネントを一緒に構成できることです。 HTML タグを相互に記述してウェブサイトを構築できるのと同じように、他のコンポーネント内でコンポーネントを使用してウェブアプリケーションを構築できます。 各フレームワークを使用すると、他のコンポーネントを利用する (したがって依存する) コンポーネントを作成できます。

たとえば、 `AuthorCredit` React コンポーネントは、 `Article` コンポーネント内で利用される可能性があります。 つまり、 `Article` は `AuthorCredit` をインポートする必要があります。

```js
import AuthorCredit from "./components/AuthorCredit";
```

それが完了すると、 `AuthorCredit` を `Article` コンポーネント内で次のように使用できます。

```jsx
<Article>
  <AuthorCredit />
</Article>
```

### 依存関係の注入

実際のアプリケーションには、多くの場合、複数レベルのネストを含むコンポーネント構造が含まれることがあります。多くのレベルでネストされた `AuthorCredit` コンポーネントは、何らかの理由で、アプリケーションのまさにルートレベルからのデータを必要とする場合があります。

私たちが構築している雑誌サイトが次のような構造になっているとします。

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

`App` コンポーネントには、`AuthorCredit` コンポーネントが必要とするデータが含まれています。 `Home` と `Article` を書き換えて、 props を渡すことができるようにすることもできます。しかし、データの送信元と送信先の間に非常に多くのレベルがある場合、これは面倒になる可能性があります。これも行き過ぎです。 `Home` と `Article` では、実際には著者の肖像画や署名が使用されていません。しかし、その情報を `AuthorCredit` に取り込みたい場合は、それに合わせて `Home` と `Article` を変更する必要があります。

多くのコンポーネント層を介してデータを渡す問題はプロップドリルと呼ばれ、大規模なアプリケーションには理想的ではありません。

プロップドリルを回避するために、フレームワークは依存関係注入として知られる機能を提供します。これは、特定のデータを、介在するレベルを介さずに、必要なコンポーネントに直接取得する方法です。各フレームワークは、異なる名前で異なる方法で依存性注入を実装しますが、結果は最終的には同じです。

Angular では、このプロセスを[依存関係の注入](https://angular.dev/guide/di/dependency-injection)と呼びます。 Vue には [`provide()` および `inject()` コンポーネントメソッド](https://v2.vuejs.org/v2/api/#provide-inject)があります。 React には[Context API](https://ja.react.dev/learn/passing-data-deeply-with-context) があります。 Ember は [サービス](https://guides.emberjs.com/release/services/)を通じて状態を共有します。

### ライフサイクル

フレームワークのコンテキストでは、コンポーネントの **ライフサイクル** は、コンポーネントが DOM に追加されてブラウザーによってレンダリングされる時点 DOM の追加（マウントと呼ばれることが多い）から削除される時点まで、コンポーネントが通過するフェーズの集合です。 DOM の削除（アンマウントと呼ばれることが多い）。各フレームワークはこれらのライフサイクルフェーズに異なる名前を付けており、すべてのフレームワークで開発者が同じフェーズにアクセスできるわけではありません。すべてのフレームワークは同じ一般的なモデルに従います。開発者は、コンポーネントの _DOM の追加（マウント）_ , _DOM の描画 (レンダリング)_, _DOM の削除（アンマウント）_ およびそれらの間の多くのフェーズで特定のアクションを実行できます。

レンダリングフェーズは、ユーザーがアプリケーションを操作するときに最も頻繁に繰り返されるため、理解することが最も重要です。これは、ブラウザーが何か新しい情報を表示する必要があるたびに実行されます。その新しい情報がブラウザー内の情報への追加、削除、または編集であるかどうかに関係ありません。

この [React コンポーネントのライフサイクルの図](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)は、概念の概要を示しています。

## 要素のレンダリング

ライフサイクルと同様に、フレームワークはアプリケーションをレンダリングする方法に対して、異なるものの同様のアプローチを採用します。これらはすべて、ブラウザーの DOM の現在レンダリングされたバージョンを追跡し、アプリケーションのコンポーネントが再レンダリングされるときに DOM がどのように変更されるべきかについて、それぞれわずかに異なる決定を下します。これらの決定はフレームワークが行うため、通常は自分で DOM を操作することはありません。 DOM から離れたこの抽象化は、 DOM を自分で更新するよりも複雑でメモリーを大量に消費しますが、これがなければ、フレームワークでよく知られている宣言型の方法でプログラミングすることはできません。

**仮想 DOM** は、ブラウザーの DOM に関する情報を JavaScript メモリーに保存するアプローチです。アプリケーションは、 DOM のこのコピーを更新し、それを「実際の」 DOM (ユーザーに対して実際にレンダリングされる DOM) と比較して、何をレンダリングするかを決定します。アプリケーションは、更新された仮想 DOM と現在レンダリングされている DOM の違いを比較する「差分」を構築し、その差分を使用して実際の DOM に更新を適用します。 React と Vue はどちらも仮想 DOM モデルを利用しますが、差分分析やレンダリング時にまったく同じロジックを適用するわけではありません。

[仮想 DOM の詳細については、React のドキュメントをご覧ください](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)。

**増分 DOM** は、何をレンダリングするかを決定するために DOM diff を構築するという点で仮想 DOM に似ていますが、 JavaScript メモリー内に DOM の完全なコピーを作成しないという点で異なります。変更する必要のない DOM の部分は無視されます。 Angular は、このモジュールでこれまで説明した、増分 DOM を使用する唯一のフレームワークです。

[Incremental DOM の詳細については、Auth0 ブログをご覧ください](https://auth0.com/blog/incremental-dom/)。

**Glimmer VM** は Ember に固有のものです。これは仮想 DOM や増分 DOM ではありません。これは、 Ember のテンプレートを、 JavaScript よりも読みやすく高速に読み取れる一種の「バイトコード」にトランスパイルする別のプロセスです。

## ルーティング

[前の章で述べたように、ルーティング](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing)はウェブエクスペリエンスの重要な部分です。多数のビューを備えた非常に複雑なアプリでの操作性の低下を避けるために、このモジュールで説明する各フレームワークは、開発者がアプリケーションにクライアント側ルーティングを実装するのに役立つライブラリー(または複数のライブラリー)を提供します。

## テスト

すべてのアプリケーションは、ソフトウェアが期待どおりに動作し続けることを保証するテストカバレッジの恩恵を受けます。ウェブアプリケーションも例外ではありません。各フレームワークのエコシステムは、テストの作成を容易にするツールを提供します。テストツールはフレームワーク自体には組み込まれていませんが、フレームワークアプリの生成に使用される CLI ツールを使用すると、適切なテストツールにアクセスできます。

各フレームワークには、そのエコシステム内に単体テストと統合テストの機能を備えた広範なツールがあります。

[Testing Library](https://testing-library.com/) は、React、Vue、Angular などの多くの JavaScript 環境用のツールを備えたテストユーティリティのスイートです。 Ember ドキュメントでは、[Ember アプリのテスト](https://guides.emberjs.com/release/testing/)について説明しています。

これは、 React テストライブラリーの助けを借りて書かれた `CounterButton` の簡単なテストです。ボタンの存在や、ボタンが 0 、1 、 2 回クリックされた後に正しいテキストが表示されているかどうかなど、さまざまなことをテストします。

```jsx
import { fireEvent, render, screen } from "@testing-library/react";

import CounterButton from "./CounterButton";

it("Renders a semantic button with an initial state of 0", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});
```

## まとめ

この時点で、フレームワークを使用してアプリケーションを作成するときに使用する実際の言語、機能、ツールについてさらに理解できるはずです。あなたはきっと、実際にコーディングをしてみたいと熱意を持って取り組んでいると思います。それが次に行うことです。この時点で、最初に学習を開始するフレームワークを選択できます。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}
