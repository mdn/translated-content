---
title: ナビゲーション API
slug: Web/API/Navigation_API
page-type: web-api-overview
l10n:
  sourceCommit: 9c27111e8c096a18881d96d15d6fd41558acf6e5
---

{{DefaultAPISidebar("Navigation API")}}

**ナビゲーション API** を使用すると、ブラウザーのナビゲーション操作を開始、介入、管理することができます。同時に、アプリケーションの履歴項目を確認することも可能です。これは、{{domxref("History API", "履歴 API", "", "nocode")}} や {{domxref("window.location")}} といった従来のウェブプラットフォーム機能の後継であり、それらの欠点を解消するとともに、特に{{glossary("SPA", "単一ページアプリケーション (SPA)")}} のニーズに対応することを目的としています。

## 概念と使い方

SPA では、ページテンプレートは使用中に変更されず、ユーザーが異なるページや機能にアクセスする際にコンテンツが動的に書き換えられる傾向があります。その結果、ブラウザーには1つのページしか読み込まれないため、閲覧履歴内の異なる場所を行き来するという、ユーザーが期待する使い勝手が損なわれてしまいます。この問題は{{domxref("History API", "履歴 API", "", "nocode")}} によってある程度解決可能ですが、それは SPA のニーズに合わせて設計されたものではありません。ナビゲーション API は、そのギャップを埋めることを目的としています。

この API には、{{domxref("Window.navigation")}} プロパティを介してアクセスします。このプロパティは、グローバルな {{domxref("Navigation")}} オブジェクトへの参照を返します。それぞれの `window` オブジェクトには、それぞれ対応する `navigation` インスタンスがあります。

### ナビゲーションの処理

`navigation` インターフェイスにはいくつかの関連付けられたイベントがありますが、中でも特に注目すべきは {{domxref("Navigation/navigate_event", "navigate")}} イベントです。これは、[あらゆる種類のナビゲーション](https://github.com/WICG/navigation-api#appendix-types-of-navigations)が開始された際に発生します。つまり、すべてのページナビゲーションを一元的に制御できるため、SPA フレームワークにおけるルーティング機能に最適です。（{{domxref("History API", "", "", "nocode")}} の場合とは異なり、履歴 API ではすべてのナビゲーションを検出して対応することが難しい場合があります。） `navigate` イベントハンドラーには、{{domxref("NavigateEvent")}} オブジェクトが渡されます。このオブジェクトには、ナビゲーションの出力先や種類、`POST` フォームデータやダウンロードリクエストが含まれているかどうかなど、詳細な情報が含まれています。

`NavigateEvent` オブジェクトには、2 つメソッドも提供されています。

- {{domxref("NavigateEvent.intercept", "intercept()")}} は、ナビゲーションに対する独自の動作を指定することができ、以下の引数を取ることができます。
  - コールバックハンドラー関数。これを使用すると、ナビゲーションが実行されたときと、ナビゲーションが実行される直前の両方で、どのような動作を行うかを指定できます。例えば、移動先の URL のパスに基づいて、関連する新しいコンテンツを UI に読み込んだり、URL がアクセス制限のあるページを指しており、かつユーザーがサインインしていない場合に、ブラウザーをサインインページにリダイレクトしたりすることができます。
  - ナビゲーション後、ブラウザーのデフォルトのフォーカスおよびスクロール動作を有効または無効にすることができるプロパティです。
- {{domxref("NavigateEvent.scroll", "scroll()")}} は、ブラウザーのスクロール動作（URL 内のフラグメント識別子への移動など）を手動で開始することができます。ブラウザーが自動的に処理するのを待つのではなく、コードの都合上適切な場合に行うことができます。

ナビゲーションが開始され、`intercept()` のハンドラーが呼び出されると、{{domxref("NavigationTransition")}} オブジェクトのインスタンスが作成されます（{{domxref("Navigation.transition")}} 経由でアクセス可能）。これを使用して、進行中のナビゲーションのプロセスを追跡することができます。

> [!NOTE]
> この文脈における "transition" とは、ある履歴項目と別の履歴項目との間の遷移を指します。CSS のトランジションとは関連ありません。

> [!NOTE]
> {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出すことでも、ほとんどの[種類のナビゲーション](/ja/docs/Web/API/NavigateEvent/navigationType#値)において、ナビゲーションを完全に停止させることができます。ただし、トラバースナビゲーションの中止機能はまだ実装されていません。

`intercept()` ハンドラー関数によって返されたプロミスが履行されると、`Navigation` オブジェクトの {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} イベントが発生し、ナビゲーションが正常に完了した後にクリーンアップコードを実行できるようになります。プロミスが拒否された場合、つまりナビゲーションが失敗した場合は、代わりに {{domxref("Navigation/navigateerror_event", "navigateerror")}} が発生し、失敗時の処理を適切に行うことができます。また、ナビゲーションメソッド（{{domxref("Navigation.navigate()")}} など）の返値には `finished` プロパティがあり、これは前述のイベントが発生するのと同時に履行または拒否されるため、成功および失敗のケースを処理するための別の手段となります。

> [!NOTE]
> ナビゲーション API が利用できるようになる前は、同様の処理を行うには、リンクのすべてのクリックイベントを監視し、`e.preventDefault()` を実行し、適切な {{domxref("History.pushState()")}} 呼び出しを行い、新しい URL に基づいてページ表示を設定する必要がありました。また、この方法ではすべてのナビゲーションに対応できるわけではなく、ユーザーがリンクをクリックした場合のみ対応可能でした。

### プログラムによるナビゲーション履歴の更新と移動

ユーザーがアプリケーション内を移動する際、新しい場所へ移動するたびに、ナビゲーション履歴の項目が作成されます。それぞれの履歴項目は、固有の {{domxref("NavigationHistoryEntry")}} オブジェクトのインスタンスとして表されます。これらは、項目の一意のキー、URL、状態情報などのいくつかのプロパティを含んでいます。{{domxref("Navigation.currentEntry")}} を使用すると、ユーザーが現在表示している項目を取得でき、{{domxref("Navigation.entries()")}} を使用すると、既存のすべての履歴項目の一覧を取得できます。それぞれの `NavigationHistoryEntry` オブジェクトには、項目がブラウザーの履歴から削除された際に発生する {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}} イベントがあります。例えば、ユーザーが 3 回戻る操作を行い、その後別の場所へ進むと、その 3 つの履歴項目は破棄されます。

> [!NOTE]
> ナビゲーション API は、現在のページと同じオリジンを持つ、現在の閲覧コンテキスト内で生成された履歴項目のみを公開します（例えば、埋め込み {{htmlelement("iframe")}} 内のナビゲーションや、オリジンを越えるナビゲーションは対象外です）。これにより、アプリ専用の正確な過去の履歴項目一覧が提供されます。この方法により、履歴の探索は、以前の{{domxref("History API", "履歴 API", "", "nocode")}} による方法に比べて、はるかに安定した処理が可能になります。

`Navigation` オブジェクトには、ナビゲーション履歴の更新や移動に必要なすべてのメソッドが含まれています。

- {{domxref("Navigation.navigate", "navigate()")}}
  - : 新しい URL に移動し、新しいナビゲーション履歴項目を作成します。
- {{domxref("Navigation.reload", "reload()")}}
  - : 現在のナビゲーション履歴項目を再読み込みします。
- {{domxref("Navigation.back", "back()")}}
  - : 可能であれば、前回のナビゲーション履歴項目に移動します。
- {{domxref("Navigation.forward", "forward()")}}
  - : 可能であれば、次のナビゲーション履歴項目に移動します。
- {{domxref("Navigation.traverseTo", "traverseTo()")}}
  - : キー値によって識別される特定のナビゲーション履歴項目に移動します。このキー値は、該当する項目の {{domxref("NavigationHistoryEntry.key")}} プロパティから取得されます。

以上の各メソッドは、2 つのプロミス (`{ committed, finished }`) を含むオブジェクトを返します。これにより、呼び出し元関数は、以下のいずれかが完了するまで、次のアクションを実行するのを待つことができます。

- `committed` が履行されるのは、表示されている URL が変更され、新しい {{domxref("NavigationHistoryEntry")}} が作成されたことを表します。
- `finished` が履行されるのは、`intercept()` ハンドラーによって返されたすべてのプロミスが履行されたことを表します。これは、前述の通り、{{domxref("NavigationTransition.finished")}} プロミスが、{{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} イベントの発生の際に履行されることと同等です。
- 上記のどちらかのプロミスが拒否された場合、何らかの理由でナビゲーションが失敗したということです。

### 状態

ナビゲーション API を使用すると、それぞれの履歴項目に状態を保存することができます。これは開発者が定義する情報であり、自由に設定可能です。例えば、ビューが閲覧された回数を記録する `visitCount` プロパティや、UI の状態に関連する複数のプロパティを含むオブジェクトを保存することで、ユーザーがそのビューに戻った際に状態を復元できるようにすることができます。

{{domxref("NavigationHistoryEntry")}} の状態を取得するには、その {{domxref("NavigationHistoryEntry.getState", "getState()")}} メソッドを呼び出します。初期状態では `undefined` ですが、項目に状態情報が設定されると、前回設定された状態情報が返されます。

状態の設定は、もう少し複雑です。状態の値を取得して直接更新することはできません。項目に格納されているコピーは変更されないからです。その代わりに、{{domxref("Navigation.navigate", "navigate()")}} または {{domxref("Navigation.reload", "reload()")}} を実行する際に更新します。それぞれにはオプションで options オブジェクトの引数を渡すことができ、その中に `state` プロパティを記載することで、履歴項目に設定する新しい状態を指定できます。これらのナビゲーションが実行されると、状態の変更が自動的に適用されます。

ただし、場合によっては、状態の変化がナビゲーションや再読み込みとは無関係になることもあります。例えば、ページに展開・折りたたみ可能な {{htmlelement("details")}} 要素が含まれている場合、ユーザーがページに戻ってきたときやブラウザーを再起動したときに状態を復元できるよう、展開／折りたたみ状態を履歴項目に保存しておきたい場合があります。このようなケースは、{{domxref("Navigation.updateCurrentEntry()")}} を使用して処理します。現在の項目の変更が完了すると、{{domxref("Navigation/currententrychange_event", "currententrychange")}} イベントが発生します。

### 制限

ナビゲーション API には、いくつかの認識されている制限があります。

1. 現在の仕様では、ページの初回読み込み時に {{domxref("Navigation.navigate_event", "navigate")}} イベントは発生しません。サーバーサイドレンダリング (SSR) を採用しているサイトであれば、これでも問題ないかもしれません。サーバーが正しい初期状態を返すことで、ユーザーにコンテンツを届ける最も速い方法となるからです。しかし、クライアントサイドのコードを利用してページを生成するサイトでは、ページを初期化するための追加の関数が必要になる場合があります。
2. ナビゲーション API は、単一のフレーム内（最上位のページ、または特定の {{htmlelement("iframe")}}）でのみ動作します。これにはいくつかの興味深い意味合いがあり、[仕様書でさらに詳しく説明されています](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites)が、実際には、開発者の混乱を軽減することになります。以前の{{domxref("History API", "履歴 API", "", "nocode")}} には、フレームの対応など、混乱を招きやすいいくつかの特殊な場合がありましたが、ナビゲーション API ではこれらを最初から適切に処理しています。
3. 現在、ナビゲーション API を使用して、履歴リストをプログラムで変更したり並べ替えたりすることはできません。ユーザーが情報を入力するよう求められる一時的なモーダル画面に遷移し、その後で元の URL に戻るような場合は、一時的な状態をし寄す売るとよいかもしれません。この場合、ユーザーが進むボタンを押してそのモーダル画面を再度開いてしまい、アプリケーションのフローが乱れるのを防ぐために、その一時的なモーダル画面のナビゲーション項目を削除しておく必要があります。

## インターフェイス

- {{domxref("NavigateEvent")}} {{Experimental_Inline}}
  - : {{domxref("Navigation/navigate_event", "navigate")}} イベントのイベントオブジェクトです。このイベントは、[あらゆる種類のナビゲーション](https://github.com/WICG/navigation-api#appendix-types-of-navigations)が開始された際に発生します。このオブジェクトが提供する情報により、そのナビゲーションに関する情報にアクセスできます。特に注目すべきは {{domxref("NavigateEvent.intercept", "intercept()")}} であり、これを使用することで、ナビゲーションが開始された際の動作を制御することができます。
- {{domxref("Navigation")}} {{Experimental_Inline}}
  - : 現在の `window` に対するすべてのナビゲーション操作を、一元的に制御することができます。これには、プログラムによるナビゲーションの開始、ナビゲーション履歴項目の確認、およびナビゲーションが現れたときの管理などが含まれます。
- {{domxref("NavigationActivation")}} {{Experimental_Inline}}
  - : 直近の文書間のナビゲーションを表します。これには、ナビゲーションの種類、および現在と出力先の文書履歴項目が含まれます。
- {{domxref("NavigationCurrentEntryChangeEvent")}} {{Experimental_Inline}}
  - : {{domxref("Navigation/currententrychange_event", "currententrychange")}} イベント用のイベントオブジェクトです。このイベントは、{{domxref("Navigation.currentEntry")}} が変更された際に発生します。このオブジェクトを使用すると、ナビゲーションの型や、移動元の前回の履歴項目にアクセスすることができます。
- {{domxref("NavigationDestination")}} {{Experimental_Inline}}
  - : 現在のナビゲーションで移動先の出力先を表します。
- {{domxref("NavigationHistoryEntry")}} {{Experimental_Inline}}
  - : 単一のナビゲーション履歴項目を表します。
- {{domxref("NavigationPrecommitController")}} {{Experimental_Inline}}
  - : {{domxref(「NavigateEvent.intercept()」)}} メソッド呼び出しの [`precommitHandler`](/ja/docs/Web/API/NavigateEvent/intercept#precommithandler) コールバックに渡すと、ナビゲーションの事前コミットハンドラーのリダイレクト動作を定義します。
- {{domxref("NavigationTransition")}} {{Experimental_Inline}}
  - : 現在進行中のナビゲーションを表します。

## 他のインターフェイスへの拡張

- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の `window` に関連付けられた {{domxref("Navigation")}} オブジェクトを返します。これがナビゲーション API のエントリーポイントです。

## 例

> [!NOTE]
> [ナビゲーション API のライブデモ](https://mdn.github.io/dom-examples/navigation-api/) ([ソースを表示](https://github.com/mdn/dom-examples/tree/main/navigation-api)) を確認してください。

### `intercept()` を使用してナビゲーションを処理

```js-nolint
navigation.addEventListener("navigate", (event) => {
  // オリジンをまたいだナビゲーションなど、一部のナビゲーションは介入できない
  // 処理から早期に返すことで、ブラウザーが通常通り処理する
  if (!event.canIntercept) {
    return;
  }

  // フラグメントナビゲーションやダウンロードに介入すべきではない
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // URL はすでに変更されているので、新しいコンテンツを取得している間は、
        // 読み込み中を表すスピナーやページなどのプレースホルダーを表示する
        renderArticlePagePlaceholder();

        // 新しいコンテンツを取得し、準備ができ次第表示させる
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

### `scroll()` を使用したスクロールの扱い

このナビゲーションの介入の例では、`handler()` 関数はまず記事コンテンツを取得して表示しますが、その後、補助コンテンツも取得して表示します。補助コンテンツが表示されるまで待つのではなく、メインの記事コンテンツが利用できる次第、ページをスクロールしてユーザーが操作できるようにするのが意味があります。この目的で、2 つの処理の間に {{domxref("NavigateEvent.scroll", "scroll()")}} の呼び出しを追加しました。

```js
navigation.addEventListener("navigate", (event) => {
  // 介入しないものについては早期に返る
  if (
    !event.canIntercept ||
    event.hashChange ||
    event.downloadRequest !== null
  ) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);

        event.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
      },
    });
  }
});
```

### 特定の履歴項目を走査

```js
// JavaScript の起動時に、まず読み込まれたページの ID を取得し、
// ユーザーが常にそのページに戻れるようにする
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// 他のページに移動しても、このボタンは常に動作する
await navigation.navigate("/another_url").finished;
```

### 状態を更新

```js
navigation.navigate(url, { state: newState });
```

または

```js
navigation.reload({ state: newState });
```

あるいは、その状態がナビゲーションや再読み込みとは無関係である場合

```js
navigation.updateCurrentEntry({ state: newState });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
