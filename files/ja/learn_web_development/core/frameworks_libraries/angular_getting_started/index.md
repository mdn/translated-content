---
title: Angular を始める
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

今度は、Google の Angular フレームワークを見てみましょう。これは、よく目にするもう 1 つの人気のあるオプションです。 この記事では、Angular が提供するものを確認し、前提条件をインストールしてサンプルアプリをセットアップし、Angular の基本的なアーキテクチャを確認します。

> [!NOTE]
> このチュートリアルは [Angular バージョン 18](https://angular.dev/overview) を対象としており、 2024 年 8 月に最終改訂されました (`Angular CLI: 18.2.1`)。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        主要な
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> と
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
        <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a>
        言語を扱うことができ、
        <a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >端末/コマンドライン</a
        >に関する知識があること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        <p>
          ローカルの Angular 開発環境をセットアップするには、スターターアプリを作成し、 そしてそれがどのように機能するかの基本を理解します。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Angular とはなんですか ?

Angular は、[TypeScript](https://www.typescriptlang.org/) でビルドする開発プラットフォームです。 Angular には次のものが含まれます。

- スケーラブルなウェブアプリケーションを構築するためのコンポーネントベースのフレームワーク
- ルーティング、フォーム管理、クライアント/サーバー通信など、さまざまな機能をカバーする、十分に統合されたライブラリーのコレクション
- コードの開発、ビルド、テスト、更新を支援する一連の開発者ツール

Angular を使用してアプリケーションを構築する場合、単一の開発者プロジェクトからエンタープライズレベルのアプリケーションまで拡張できるプラットフォームを利用しています。 Angular は、更新を可能な限り簡単にするように設計されているため、最小限の労力で最新の開発を利用できます。 何よりも、 Angular エコシステムは、170 万人を超える開発者、ライブラリー作成者、コンテンツ作成者からなる多様なグループで構成されています。

Angular プラットフォームの探索を開始する前に、 Angular CLI について知っておく必要があります。 Angular CLI は、Angular アプリケーションを開発するための最も速く、最も簡単で、推奨される方法です。 Angular CLI を使用すると、多くのタスクを簡単に実行できます。 ここではいくつかの例を示します。

| コマンド                                          | 説明                                                                          |
| ------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`ng build`](https://angular.dev/cli/build)       | Angular アプリを出力ディレクトリーにコンパイルします。                        |
| [`ng serve`](https://angular.dev/cli/serve)       | アプリケーションのビルド・起動をして、ファイルの変更時に再構築します。        |
| [`ng generate`](https://angular.dev/cli/generate) | セマンティックに基づいてファイルを生成または変更します。                      |
| [`ng test`](https://angular.dev/cli/test)         | 対象のプロジェクトで単体テストを実行します。                                  |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Angular アプリケーションをビルドして提供し、end to end のテストを実行します。 |

Angular CLI は、アプリケーションを構築するための大事なツールであることがわかります。

## 構築に必要なもの

このチュートリアルシリーズでは、 to-do list アプリケーションの作成について説明します。 このアプリケーションを介して、Angular を使用してアイテムを管理、編集、追加、削除、およびフィルタリングする方法を学習します。

## 前提条件

ローカルシステムに Angular をインストールするには、次のものが必要です。

- **Node.js**

  Angular には、Node.js の[現在のアクティブな LTS、またはメンテナンス LTS](https://nodejs.org/about/releases) バージョンが必要です。特定のバージョン要件については、[バージョン間の互換](https://angular.dev/reference/versions)ページを参照してください。

  Node.js のインストールの詳細については、[nodejs.org](https://nodejs.org/en/download/package-manager) を参照してください。
  システムで実行されている Node.js のバージョンがわからない場合は、端末ウィンドウで、 `node-v` を実行してください。

- **npm パッケージマネージャー**

  Angular、Angular CLI、および Angular アプリケーションは、多くの機能を [npm パッケージ](https://docs.npmjs.com/getting-started/what-is-npm)に依存しています。
  npm パッケージをダウンロードしてインストールするには、npm パッケージマネージャーが必要です。
  このガイドでは、 [npm client](https://docs.npmjs.com/cli/install/) コマンドラインインターフェイスを使用します。このコマンドラインインターフェイスは、デフォルトで `Node.js` とともにインストールされます。
  npm クライアントがインストールされていることを確認するには、端末ウィンドウで `npm -v` を実行します。

## アプリケーションをセットアップする

Angular CLI を使用して、Angular アプリケーションを生成、構築、テスト、およびデプロイするためのコマンドを端末で実行できます。
Angular CLI をインストールするには、端末で次のコマンドを実行します。

```bash
npm install -g @angular/cli
```

Angular CLI コマンドはすべて `ng` で始まり、その後に CLI で実行する操作が続きます。
アプリを構築したい場所に新しいディレクトリーを作成し、端末でそのディレクトリーに切り替えます。次に、以下の [`ng new`](https://angular.dev/cli/new) コマンドを使用して、todo という新しいアプリケーションを作成します。

```bash
ng new todo --routing=false --style=css --ssr=false
```

`ng new` コマンドで、最小限のスターター Angular アプリケーションを作成します。
追加のフラグ `--routing` と `--style` は、アプリケーションでナビゲーションとスタイルを処理する方法を定義します。
このチュートリアルでは、これらの機能について後で詳しく説明します。

`ng` を初めて実行すると、端末の[自動補完](https://angular.dev/cli/completion)（英語）と分析を有効にするかどうかを尋ねられる場合があります。
自動補完は、 `ng` コマンドを入力中に <kbd>TAB</kbd> キーを押すと、選択可能なオプションが表示され、引数が自動補完されるので便利です。

また、 CLI の使用状況に関する分析を Google の Angular メンテナーに送信することを許可するかどうかを決定することもできます。
分析についてさらに詳しく知りたい場合は、[Angular の `ng analytics` CLI のドキュメント](https://angular.dev/cli/analytics)（英語）を参照してください。

`todo` アプリケーションを実行するには、 `cd` コマンドで新しいプロジェクトに移動し、 `ng serve` を実行します。

```bash
cd todo
ng serve
```

ブラウザーで、 `http://localhost:4200/` に移動すると、新しいスターターアプリケーションを表示します。
ソースファイルのいずれかを変更すると、アプリケーションは自動的に再読み込みされます。

`ng serve` の実行中に、 2 番目の端末タブまたはウィンドウを開くと、サーバーを止めることなくコマンドを実行することができます。
アプリケーションの実行を停止したい場合は、任意の時点で `ng serve` コマンドを実行した端末から `Ctrl+c` を押してください。

## Angular アプリケーションに慣れましょう

このチュートリアルで焦点を当てているアプリケーションのソースファイルは、 `src/app` にあります。

```plain
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts
```

CLI が自動的に生成するキーファイルには、次のものが含まれます。

1. `app.component.ts`: クラスとも呼ばれ、アプリケーションのメインページのロジックが含まれています。
2. `app.component.html`: `AppComponent` の HTML が含まれています。 このファイルの内容は、テンプレートとも呼ばれます。
   テンプレートは、ブラウザーに表示されるビューまたは内容を決定します。
3. `app.component.css`: `AppComponent` のスタイルが含まれています。 このファイルは、アプリケーション全体ではなく、特定のコンポーネントにのみ適用されるスタイルを定義する場合に使用します。

Angular のコンポーネントは、テンプレート、スタイル、クラスの 3 つの主要部分で構成されています。
たとえば、 `app.component.ts`、`app.component.html`、`app.component.css` は一緒に `AppComponent` を構成します。
この構造により、ロジック、ビュー、スタイルが分離され、アプリケーションの保守性と拡張性が向上します。
このようにして、最初期から最善の手法を使用しています。

Angular CLI は `app.component.spec.ts` と呼ばれるコンポーネントテスト用のファイルも生成しますが、このチュートリアルではテストに入らないため、そのファイルは無視してかまいません。
コンポーネントを生成するたびに、CLI は指定した名前のディレクトリーにこれらの 4 つのファイルを作成します。

テストについての詳細は、 [Angular testing guide](https://angular.dev/guide/testing) を参照してください。

## Angular アプリケーションの構造

Angular は TypeScript で構築されています。
TypeScript は JavaScript のスーパーセットであり、有効な JavaScript が有効な TypeScript であることを意味します。
TypeScript は、単純な JavaScript よりもタイピングとより簡潔な構文を提供します。これにより、より保守しやすいコードを作成し、バグを最小限に抑えるためのツールが提供されます。

コンポーネントは、Angular アプリケーションの構成要素です。
コンポーネントには TypeScript クラスがあり、これには `@Component()` デコレーターが含まれています。

### デコレーター

クラスに関するメタデータ（HTML テンプレートやスタイル）を指定するには、`@Component()` デコレーターを使用します。

### クラス

このクラスは、コンポーネントに必要なロジックを配置する場所です。
このコードには、関数、イベントリスナー、プロパティ、サービスへの参照などを含めることができます。
クラスは、 `feature.component.ts` などの名前のファイルにあります。ここで、`feature` はコンポーネントの名前です。
したがって、 `header.component.ts` 、`signup.component.ts` 、または `feed.component.ts` などの名前のファイルを作成できます。
HTML と CSS の場所を Angular に指示するメタデータを持つ `@Component()` デコレーターを使用してコンポーネントを作成します。
一般的なコンポーネントは次のとおりです。

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  standalone: true,
  imports: [],
  // 以下のメタデータは、コンポーネントの他の部分の場所を指定します
  templateUrl: "./item.component.html",
  styleUrl: "./item.component.css",
})
export class ItemComponent {
  // コードをここに書く
}
```

このコンポーネントは `ItemComponent` と呼ばれ、そのセレクターは `app-item` です。
セレクターは、他のテンプレート内に 通常の HTML タグとと同様に、すなわち `<app-item></app-item>` のように使用します。
セレクターがテンプレート内にある場合、ブラウザーはそのコンポーネントのテンプレートをレンダリングします。
このチュートリアルでは、2 つのコンポーネントを作成し、一方を他方のコンポーネント内で使用する方法について説明します。

> [!NOTE]
> 上記コンポーネントの名前は `ItemComponent` であり、これはクラスの名前でもあります。
> 名前が同じなのは、部分が単に TypeScript のデコレーターから補足されたクラスにすぎないからです。

Angular のコンポーネントモデルは、強力なカプセル化と直感的なアプリケーション構造を提供します。
コンポーネントを使用すると、アプリケーションの単体テストが容易になり、コードの全体的な可読性が向上します。

### HTML テンプレート

すべてのコンポーネントには、そのコンポーネントのレンダリング方法を宣言する HTML テンプレートがあります。
このテンプレートは、インラインまたはファイルパスで定義できます。

外部 HTML ファイルを参照するには、`templateUrl` プロパティを使用します。

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // コードをここに書く
}
```

インライン HTML を作成するには、 `template` プロパティを使用して、バッククォート内に HTML を作成します。

```js
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // コードをここに書く
}
```

Angular は、コンポーネントから動的な値を挿入できる追加の構文で HTML を拡張します。
Angular は、コンポーネントの状態が変化すると、レンダリングされた DOM を自動的に更新します。
この機能の使用法の 1 つは、次の例に示すように、動的テキストを挿入することです。

```html
<h1>\{{ title }}</h1>
```

二重中括弧は、 Angular にその中のコンテンツを補間するように指示するものです。
`title` の値は、コンポーネントクラスから取得されます。

```js-nolint
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  template: "<h1>\{{ title }}</h1>",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "To do application";
}
```

アプリケーションがコンポーネントとそのテンプレートを読み込むと、ブラウザーには次のように表示されます。

```html
<h1>To do application</h1>
```

### スタイル

コンポーネントは、アプリケーションの `styles.css` ファイルからグローバルスタイルを継承し、それらを独自のスタイルで拡張またはオーバーライドできます。
コンポーネント固有のスタイルを `@Component()` デコレーターに直接書き込むか、CSS ファイルへのパスを指定できます。

コンポーネントデコレーターにスタイルを直接含めるには、`styles` プロパティを使用します。

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

通常、コンポーネントは別のファイルにあるスタイルを適用します。
複数の CSS スタイルシートを記載したい場合は、 CSS ファイルへのパスを文字列として指定した `styleUrl` プロパティ、または文字列の配列を指定した `styleUrls` を使用することができます。

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

コンポーネント固有のスタイルを使用すると、CSS を整理して、保守と移植が容易になります。

### スタンドアロンコンポーネント

自分のプロジェクトで既にコードを整理するために [NgModules](https://angular.dev/guide/ngmodules)（Angular モジュール）を使用している場合を除き、[コンポーネントをスタンドアロンにする](https://angular.dev/guide/components/importing#standalone-components)（英語）ことをお勧めします。
このチュートリアルでは、簡単に始められる[スタンドアロンコンポーネント](https://angular.dev/guide/components/importing#standalone-components)（英語）を使用します。

[`CommonModule`](https://angular.dev/api/common/CommonModule)（英語）をインポートして、共通の[ディレクティブ](https://angular.dev/guide/directives)（英語）や[パイプ](https://angular.dev/guide/pipes)（英語）を使用できるようにすることは一般的です。

```js
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
```

## まとめ

Angular の最初の紹介は以上です。 この時点で、Angular アプリをセットアップして構築する準備ができており、Angular がどのように機能するかについての基本的な理解が必要です。 次の記事では、その知識を深め、やることリストアプリケーションの構造を構築し始めます。

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
