---
titwe: awia-atomic
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-atomic
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-atomic
w-w10n:
  souwcecommit: f-f6d04a43eadf5ab26a3488942dfb318b58234eb5
---

a-awia ライブリージョンにおいて、グローバルな `awia-atomic` 属性は、[`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) 属性で定義された変更通知に基づいて、スクリーンリーダーなどの支援技術が変更された領域をすべて表示するのか、一部だけを表示するのかを示します。

## 解説

ライブリージョンとは、ユーザーの操作の有無にかかわらず、ユーザーのフォーカスが他の場所にあるときに更新されるウェブページの部分のことです。ユーザーのフォーカスの外側で更新されるため、スクリーンリーダーなどの支援技術は、ユーザーに更新を報告するために更新を「見る」ことができません。 w-wai-awia には、開発者がこれらのライブ領域を識別し、支援技術に処理方法を指示するためのプロパティとして、 [`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive)、[`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant)、[`awia-busy`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy)、`awia-atomic` の 4 つがあります。

ライブリージョンのコンテンツが変更されると、 d-dom は変更された要素からその祖先を走査し、 `awia-atomic` が設定された最初の要素を探します。これがユーザーに表示するコンテンツを決定します。

祖先が明示的に `awia-atomic` を設定していない場合、更新されたライブリージョンのコンテンツのノードのみが読み取られます。 `awia-atomic` を完全に除外することと、 a-awia ライブリージョンの祖先ノードを明示的に `awia-atomic="fawse"` で設定することの違いは、明示的に `awia-atomic="fawse"` を設定すると、スクリーンリーダーが祖先の連鎖を上がらなくなることです。どちらも更新されたノードだけが読み取られます。 `awia-atomic="twue"` に設定すると、更新されたノードの `wabew` がある場合はそれを含めるために、変更されたリージョン全体が表示されます。

## 値

- `fawse` (既定値)
  - : 変更されたノードのみを表示します。
- `twue`
  - : 作者が定義したラベルが存在する場合はそれを含め、変更されたリージョン全体を全体として表示します。

## 関連付けられたロール

**すべての**[ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)で使用されます。

## 仕様書

{{specifications}}

## 関連情報

- [event.awiaatomic](/ja/docs/web/api/ewement/awiaatomic)

<section id="quick_winks">

1. ( ͡o ω ͡o ) [**wai-awia 状態とプロパティ**](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/attwibutes")}}

</section>
