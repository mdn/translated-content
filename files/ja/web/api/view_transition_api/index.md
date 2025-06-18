---
title: ビュー遷移 API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 0f7f19a62e8dadb2da69f8801db76c2eab2ff8f8
---

{{DefaultAPISidebar("View Transition API")}}

**ビュー遷移 API** は、異なるウェブサイトのビュー間のアニメーション遷移を簡単に作成するための仕組みを提供します。これには、単一ページアプリケーション (SPA) における DOM 状態変化のアニメーション、および複数ページアプリケーション (MPA) における文書内の移動時のアニメーションを含みます。

## 概念と使い方

ビュー遷移は、ユーザーがアプリケーションの状態またはビューの間を移動する際に、ユーザーの認知的負荷を縮小し、コンテキストにとどまることを支援し、読み込み待ちの知覚時間を短縮するための有力な設計の選択肢です。

しかし、ウェブ上でビュー遷移を作成するのは、従来は困難なことでした。

- 単一ページアプリ (SPA) で状態変化の遷移を行うには、かなりの CSS と JavaScript を書かなければならない傾向があります。
  - 古いコンテンツと新しいコンテンツの読み込みと位置決めを処理します。
  - 古い状態と新しい状態をアニメーション化して、遷移を作成します。
  - 古いコンテンツをユーザーが操作して問題を起こすことを防止します。
  - 遷移が完了したら、古いコンテンツを除去します。
    アクセシビリティに関する問題、例えば、読み込み位置の喪失、フォーカスの混乱、ライブリージョンに関する正しくないアナウンスなどといった問題も、新しいコンテンツと古いコンテンツの両方を同時に DOM に存在させることによって引き起こされる可能性があります。
- 文書間のビュー遷移（つまり、MPA の異なるページ間の移動）は不可能でした。

ビュー遷移 API は、要求される DOM の変更と遷移アニメーションをより簡単に処理する方法を提供します。

ブラウザーの既定では、ビュー遷移を作成するアニメーションはすばやく実行されます。また、SPA と MPA のビュー遷移の両方で、遷移アニメーションをカスタマイズしたり、ビュー遷移自体を操作したり（例えば、アニメーションをスキップする状況を指定したり）できる機能があります。

詳しくは[ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)を参照してください。

## インターフェイス

- {{domxref("ViewTransition")}}
  - : ビュー遷移を表します。遷移が異なる状態（アニメーションを実行する準備ができている、アニメーションが完了したなど）に達したり、遷移を完全にスキップしたりする機能を提供します。

## 他のインターフェイスの拡張

- {{domxref("Document.startViewTransition()")}}
  - : 新しい同一文書内 (SPA) ビュー遷移を開始し、それを表す {{domxref("ViewTransition")}} オブジェクトを返します。
- {{domxref("PageRevealEvent")}}
  - : {{domxref("Window.pagereveal_event", "pagereveal")}} イベント用のイベントオブジェクト。文書間の移動中に、移動先の文書内のビュー遷移が起動された場合、関連のビュー遷移を操作することができます（関連する {{domxref("ViewTransition")}} オブジェクトにアクセスできます）。
- {{domxref("PageSwapEvent")}}
  - : {{domxref("Window.pageswap_event", "pageswap")}} イベントのイベントオブジェクト。文書間の移動中、移動によってビュー遷移が起動された場合、移動元の文書から関連するビュー遷移を操作することができます（関連する {{domxref("ViewTransition")}} オブジェクトにアクセスできます）。 また、移動の種類や、移動元と移動先の文書の履歴項目に関する情報へのアクセスも提供します。
- {{domxref("Window")}} の {{domxref("Window.pagereveal_event", "pagereveal")}} イベント
  - : 文書が最初にレンダリングされるとき、ネットワークから新しい文書を読み込んだ場合、または文書（[バック/フォワードキャッシュ](/ja/docs/Glossary/bfcache) (bfcache)または[事前レンダリング](/ja/docs/Glossary/Prerender)）をアクティブにした場合に発行されます。
- {{domxref("Window")}} の {{domxref("Window.pageswap_event", "pageswap")}} イベント
  - : ナビゲーションにより文書がアンロードされようとするときに発行されます。

## HTML への追加

- [`<link rel="expect">`](/ja/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : ユーザーがページを最初に表示した際に、関連文書内の最も重要なコンテンツを識別します。 重要なコンテンツが解釈されるまで文書のレンダリングがブロックされ、すべての対応ブラウザーで一貫したファーストペイント（最初の描画）が保証され、その結果、ビューの遷移が保証されます。

## CSS の追加

### アットルール

- {{cssxref("@view-transition")}}
  - : 文書間の移動の場合、`@view-transition` を使用して、移動元と移動先の文書でビュー遷移を行うようにします。

### プロパティ

- {{cssxref("view-transition-name")}}
  - : 選択された要素に別な識別名を提供し、ルートのビュー遷移とは別のビュー遷移に参加させます。 `none` の値が指定された場合はビュー遷移に参加させません。

### 擬似要素

- {{cssxref("::view-transition")}}
  - : ビュー遷移オーバーレイのルートで、すべてのビュー遷移を格納し、他のすべてのページコンテンツの上に配置されます。
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : 単一のビュー遷移のルートです。
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : ビュー遷移の新旧ビュー（遷移前と遷移後）のコンテナーです。
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : ビュー遷移移行前の静止スクリーンショットです。
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : ビュー遷移後の新しいビューのライブ表現です。

## 例

- [Basic View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/): 基本的な画像ギャラリーのデモで、古い画像と新しい画像、古いキャプションと新しいキャプションの間に別個の遷移があります。
- [Basic View Transitions MPA demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): 2 ページのサイトの例で、2 つのページ間を移動する際に独自の「スワイプアップ」遷移が指定された、文書間 (MPA) のビュー遷移の使用例を示します。
- [HTTP 203 playlist](https://http203-playlist.netlify.app/): [ビュー遷移 API によるスムーズでシンプルな遷移](https://developer.chrome.com/docs/web-platform/view-transitions/)では、その多くが説明されています。さまざまな多くのビュー遷移機能を備えた、より洗練された動画プレーヤーのデモアプリです。
- [List of Chrome DevRel team members](https://view-transitions.netlify.app/profiles/mpa/): 基本的なチームプロフィールページのアプリで、{{domxref("Window.pagereveal_event", "pagereveal")}} および {{domxref("Window.pageswap_event", "pageswap")}} イベントを使用して、"from" と "to" の URL に基づいて、文書間ビュー遷移の流出・流入アニメーションをカスタマイズする方法を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [View Transition API によるスムーズな遷移](https://developer.chrome.com/docs/web-platform/view-transitions/) (developer.chrome.com, 2024)
- [View Transition API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/) (stackdiary.com, 2023)
- [View Transitions API: Single Page Apps Without a Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) (www.debugbear.com, 2024)
