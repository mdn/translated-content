---
title: Firefox トラッキング防止
slug: Web/Privacy/Guides/Firefox_tracking_protection
l10n:
  sourceCommit: 0e638cb6498f7ae7dc1cb5c39fea99b00084c1e7
---

このページでは、Firefoxに組み込まれているトラッキング防止機能の仕組みと、それがサードパーティーコンテンツの読み込みにどのような影響を与えるかについて説明します。
トラッキング防止機能の仕組みを理解することで、訪問者がこの機能を有効にしている場合でも、サイトが期待通りに動作するよう実現するのに役立ちます。

## トラッキング防止とは

Firefox デスクトップ版および Firefox for Android には、トラッキング防止機能が含まれています。プライベートブラウジングウィンドウ（Firefox for Android ではタブ）では、Firefox は、サイトを超えて（つまり、[サードパーティクッキー](/ja/docs/Web/Privacy/Guides/Third-party_cookies)を通じて）ユーザーを追跡するドメインから読み込まれたコンテンツをブロックします。

ブロックされたコンテンツがページレイアウトの一部である場合、Firefox がそれらの読み込みをブロックした箇所で、ユーザーはレイアウトの不具合に気づく可能性があります。ページグリッドが適切に機能し、ブロックされた要素によって生じた隙間を他のページ要素が埋めるようにスライドして表示される場合、ユーザーがまったく気づかないこともあります。

Firefox がコンテンツをブロックすると、ウェブコンソールに次のようなメッセージが記録されます。

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

なお、Firefox for Android では、リモートデバッガーを使用してコンソールの出力にアクセスすることができます。

![ブロックされている可能性のあるコンテンツを示すページ情報。](blocked_content.png)

アドレスバーのⓘマークをクリックすると、現在読み込まれたページに関する情報を閲覧できます。表示されるポップアップでは、コンテンツがブロックされた際に通知されます。また、トラッキング設定にアクセスすることで、必要に応じてトラッキング防止機能を完全に無効にすることも可能です。

トラッキングクッキーが存在する場合、上の画像にある「トラッキングクッキーのブロック」をクリックすると、以下のポップアップが表示され、その一覧を確認できます。

![クッキーとサイトデータを示すページの情報。](tracking_cookies.png)

「コンテンツブロックの管理」をクリックすると、ブロック設定を変更できます。

![コンテンツブロックのレベルには、「標準」、「厳格」、「独自」の 3 種類があり、常に有効にするか、Firefox が既知のトラッカーをブロックするように設定されている場合のみ有効にするかを選択できます。](content_blocking.png)

## Firefox がブロックする対象を選ぶ方法

コンテンツは、読み込まれるドメインに基づいてブロックされます。

Firefox には、ユーザーのサイトをまたぐ追跡を行っていると特定されたサイトのリストが組み込まれています。追跡防止機能が有効になっている場合、Firefox はこのリストに含まれるサイトからのコンテンツをブロックします。

ユーザーを追跡するサイトとしては、主にサードパーティーの広告サイトや分析サイトが挙げられます。

## 自分のウェブサイトにおける意味

主に、トラッキング防止が有効になっている場合、以下のことが意味されます。

- サードパーティーのトラッカーから配信されるコンテンツは、ユーザーには表示されません。
- トラッキングを行うサードパーティーの広告や分析サービスは、サイト上で利用できなくなります。

さらに、サイトの他の部分がトラッカーの読み込みに依存している場合、トラッキング防止が有効になると、それらの部分も正常に動作しなくなります。例えば、トラッキングサイトからのコンテンツが読み込まれた際に実行されるコールバックがサイトに含まれている場合、そのコールバックは実行されません。

例えば、Google Analytics を次のような方法で使用してはいけません。

```js example-bad
function trackLink(url, event) {
  event.preventDefault();
  ga("send", "event", "outbound", "click", url, {
    transport: "beacon",
    hitCallback() {
      document.location = url;
    },
  });
}

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    trackLink(link.href, event);
  });
});
```

`ga` オブジェクトが初期化されているかどうかを調べることで、Google Analytics が読み込まれていない場合に対応する必要があります。

```js example-good
function trackLink(url, event) {
  event.preventDefault();
  if (window.ga && ga.loaded) {
    ga("send", "event", "outbound", "click", url, {
      transport: "beacon",
      hitCallback() {
        document.location = url;
      },
    });
  } else {
    document.location = url;
  }
}

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    trackLink(link.href, event);
  });
});
```

この手法に関する情報は、[Google Analytics, Privacy, and Event Tracking](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/) にあります。

> [!NOTE]
> このようにサードパーティーに依存することは、そもそも良い方法とは言えません。なぜなら、サードパーティーの応答が遅かったり利用できない場合、あるいはトラッカーがアドオンによってブロックされたりすると、サイトが正常に動作しなくなる可能性があるからです。
