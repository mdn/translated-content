---
title: "Window: pagereveal イベント"
short-title: pagereveal
slug: Web/API/Window/pagereveal_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{seecompattable}}

**`pagereveal`** イベントは、ネットワークから新しい文書を読み込んだり、文書（[バック/フォワードキャッシュ](/ja/docs/Glossary/bfcache) (bfcache) または[事前レンダリング](/ja/docs/Glossary/Prerender)）をアクティブにしたりして、文書が最初にレンダリングされたときに発行されます。

これは、文書間 (MPA) の移動の[ビュー遷移](/ja/docs/Web/API/View_Transition_API)において、移動の流入ページからのアクティブな遷移を操作する場合に便利です。例えば、遷移をスキップしたり、JavaScript で流入遷移アニメーションをカスタマイズしたりしたい場合などです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("pagereveal", (event) => {});
onpagereveal = (event) => {};
```

## イベント型

{{domxref("PageRevealEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PageRevealEvent")}}

## インスタンスプロパティ

- {{domxref("PageRevealEvent.viewTransition")}} {{ReadOnlyInline}}
- : イベントが発生したときに、アクティブなものがあれば、文書間のナビゲーションにおけるアクティブなビュー遷移を表す {{domxref("ViewTransition")}} オブジェクトを返します。それ以外の場合は `null` を返します。

## 例

```js
window.addEventListener("pagereveal", async (e) => {
  // "from" 履歴項目が存在しない場合は戻る
  if (!navigation.activation.from) return;

  // アクティブなビュー遷移が存在する場合のみ実行
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // プロフィールページからホームページに移動
    // ~> VT 名を関連するリストアイテムに設定
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // view-transition-name の値をアニメーションする要素に設定
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // スナップショットが採られた後、名前を除去
      // そうすることで、次のナビゲーションの準備ができる
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // プロフィールページに移動
    // ~> VT 名をメインタイトルと画像に設定
    if (isProfilePage(currentUrl)) {
      // view-transition-name の値をアニメーションする要素に設定
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // スナップショットが採られた後、名前を除去
      // そうすることで、次のナビゲーションの準備ができる
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
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
- {{domxref("Window.pageswap_event", "pageswap")}} event
