---
title: PageRevealEvent
slug: Web/API/PageRevealEvent
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`PageRevealEvent`** イベントオブジェクトは、{{domxref("Window.pagereveal_event", "pagereveal")}} イベントのハンドラー関数内で利用できます。

文書間の移動中、ナビゲーションによってビュー遷移が起動された場合、移動先の文書から関連する[ビュー遷移](/ja/docs/Web/API/View_Transition_API)（関連の {{domxref("ViewTransition")}} オブジェクトにアクセスする）を操作することができます。

ビュー遷移以外にも、このイベントは、開始アニメーションの起動やページビューの報告などの場合に役立ちます。これは、文書の {{htmlelement("head")}} 内で `requestAnimationFrame()` を起動した場合、文書間移動後に最初の {{domxref("Window.requestAnimationFrame()")}} が実行されるのと同じです。例えば、次の `reveal()` 関数を `<head>` 内で実行した場合:

```js
function reveal() {
  // 開始アニメーションをここに入れる
}
/* これは、読み込んだ後にレンダリングされる最初のフレームで発行されます。 */
requestAnimationFrame(() => reveal());

/* ページが BFCache から復元された場合に発行されます。 */
window.onpagehide = () => requestAnimationFrame(() => reveal());
```

## コンストラクター

- {{domxref("PageRevealEvent.PageRevealEvent", "PageRevealEvent()")}} {{experimental_inline}}
  - : 新しい `PageRevealEvent` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

- {{domxref("PageRevealEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 文書間のナビゲーションにおけるアクティブなビュー遷移を 表す {{domxref("ViewTransition")}} オブジェクトを保持しています。

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

    // Went to profile page
    // ~> Set VT names on the main title and image
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

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
