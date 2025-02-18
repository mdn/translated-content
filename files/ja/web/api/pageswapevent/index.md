---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`PageSwapEvent`** イベントオブジェクトは、 {{domxref("Window.pageswap_event", "pageswap")}} イベントのハンドラー関数内で利用できます。

`pageswap` イベントは、前の文書がアンロードされようとしているときに、文書間を移動するときに発行されます。文書間の移動中に、`PageSwapEvent` イベントオブジェクトを使用すると、移動元の文書から関連する[ビュー遷移](/ja/docs/Web/API/View_Transition_API)（関連する {{domxref("ViewTransition")}} オブジェクトにアクセス）を操作することができます。また、ナビゲーションの種類や現在の文書と出力先文書に関する情報にもアクセスできます。

## コンストラクター

- {{domxref("PageSwapEvent.PageSwapEvent", "PageSwapEvent()")}} {{experimental_inline}}
  - : 新しい `PageSwapEvent` オブジェクトインスタンスを作成します。

## インスタンスプロパティ

- {{domxref("PageSwapEvent.activation", "activation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("NavigationActivation")}} オブジェクトを保持しており、これは、同一オリジン内の移動に関するナビゲーション種別と、移動元および移動先の文書履歴項目が含まれています。ナビゲーションのリダイレクトチェーンのどこかにオリジンをまたぐ URL がある場合は、`null` が返されます。
- {{domxref("PageSwapEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 文書間のナビゲーションにおけるアクティブなビュー遷移を表す {{domxref("ViewTransition")}} オブジェクトを保持しています。

## 例

```js
window.addEventListener("pageswap", async (e) => {
  // アクティブなビュー遷移が存在する場合のみ実行
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // プロフィールページからホームページへ移動
    // ~> それぞれの大きな画像とタイトル
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // view-transition-name の値をアニメーションする要素に設定
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // スナップショットが採られた後、view-transition-names を除去
      // BFCacheにページの状態が保持されたことによる名前の競合を回避
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // プロフィールページへ移動
    // ~> クリックしたアイテム
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // view-transition-name の値をアニメーションする要素に設定
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // スナップショットが採られた後、view-transition-names を除去
      // BFCacheにページの状態が保持されたことによる名前の競合を回避
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> このコードの採取元のライブデモは、[List of Chrome DevRel team members](https://view-transitions.netlify.app/profiles/mpa/) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
