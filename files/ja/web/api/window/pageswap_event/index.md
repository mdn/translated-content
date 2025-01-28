---
title: "Window: pageswap イベント"
short-title: pageswap
slug: Web/API/Window/pageswap_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{seecompattable}}

**`pageswap`** イベントは、文書間の移動時、つまり前回表示していた文書がアンロードされようとする際に発行されます。

これは、文書間 (MPA) の[ビュー遷移](/ja/docs/Web/API/View_Transition_API)において、移動の流出ページからアクティブな遷移を操作する場合に便利です。例えば、遷移をスキップしたり、JavaScript で流出遷移のアニメーションをカスタマイズしたい場合などです。

また、ナビゲーションの種類や、移動元及び移動先文書内の履歴項目にアクセスすることもできます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("pageswap", (event) => {});
onpageswap = (event) => {};
```

## イベント型

{{domxref("PageSwapEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PageSwapEvent")}}

## インスタンスプロパティ

- {{domxref("PageSwapEvent.activation")}} {{ReadOnlyInline}}
  - : 同一オリジン内の移動に関するナビゲーション種別と、移動元および移動先の文書履歴項目を含む {{domxref("NavigationActivation")}} オブジェクトを返します。ナビゲーションのリダイレクトチェーンのどこかにオリジンをまたぐ URL がある場合は、`null` が返されます。
- {{domxref("PageSwapEvent.viewTransition")}} {{ReadOnlyInline}}
  - : イベント発生時にアクティブなものがあれば、文書間のナビゲーションにおけるアクティブなビュー遷移を表す {{domxref("ViewTransition")}} オブジェクトを返します。そうでない場合は `null` を返します。

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

- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)
- {{domxref("Window.pagereveal_event", "pagereveal")}} イベント
