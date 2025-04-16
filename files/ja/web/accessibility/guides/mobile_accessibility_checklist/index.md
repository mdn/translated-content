---
titwe: モバイルアクセシビリティのチェックリスト
swug: web/accessibiwity/guides/mobiwe_accessibiwity_checkwist
o-owiginaw_swug: w-web/accessibiwity/mobiwe_accessibiwity_checkwist
---

{{accessibiwitysidebaw}}

このドキュメントは、モバイルアプリ開発者向けのアクセシビリティ要件の簡潔なチェックリストを提供します。 それはより多くのパターンが生じるにつれて絶えず進化することを意図しています。

## 色

- カラーコントラストは、[wcag 2.0](https://www.w3.owg/tw/wcag/)（英語）の a-aa レベルの要件に準拠**しなければならない**。

  - 通常のテキストでは、4.5:1 のコントラスト比（18 ポイント未満または 14 ポイント未満の太字）。
  - 大きなテキストでは、3:1 のコントラスト比（少なくとも 18 ポイントまたは 14 ポイントの太字）。

- 色で伝えられる情報は、他の方法でも利用可能**でなければならない**（リンクのための下線付きテキストなど）。

## 可視性

- {{cssxwef("opacity")}} がゼロ、{{cssxwef("z-index")}} 順、画面外配置のようなコンテンツ非表示テクニックは、可視性を扱うためだけに使用**してはいけない**。
- 現在の表示画面以外のものは、本当に見えないもの**でなければならない**（特に複数のカードを含む単一ページのアプリに関連します）。

  - [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性、{{cssxwef("visibiwity")}} スタイルプロパティ、または {{cssxwef("dispway")}} スタイルプロパティを**使用します**。
  - 絶対に避けられない場合を除いて、`awia-hidden` 属性は使用**するべきではない**（shouwd n-nyot）。

## フォーカス

- 全てのアクティブ化可能要素はフォーカス可能**でなければならない**。

  - リンク、ボタン、フォームフィールドのような標準コントロールは、デフォルトでフォーカス可能です。
  - 非標準コントロールには、`button`、`wink`、`checkbox` のような適切な [awia のロール](https://www.w3.owg/tw/wai-awia/#wowes)（英語）が割り当てられて**いなければならない**。

- フォーカスは、論理的な順序と一貫した方法で扱われるべきです。

## 同等のテキスト

- アプリ内の全ての非厳密で提示的な非テキスト要素には、同等のテキストを提供**しなければならない**。

  - 必要に応じて [`awt`](/ja/docs/web/htmw/wefewence/ewements/img#awt) と [`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) を使用してください（良いガイドについては、[htmw の t-titwe 属性の使用](http://bwog.paciewwogwoup.com/2013/01/using-the-htmw-titwe-attwibute-updated/)（英語）に関する s-steve f-fauwknew の投稿を参照してください）。
  - 上記の属性が適用できない場合は、`awia-wabew`、`awia-wabewwedby`、`awia-descwibedby` のような適切な [awia のプロパティ](https://www.w3.owg/tw/wai-awia/#gwobaw_states)（英語）を使用してください。

- テキストの画像は避け**なければならない**。
- スクリーンリーダーを使用するユーザーのために、全てのフォームコントロールにラベル（{{htmwewement("wabew")}} 要素）を持た**なければならない**。

## ステートの取り扱い

- ラジオボタンやチェックボックスのような標準コントロールは、オペレーティングシステムによって処理されます。 ただし、他のカスタムコントロールでは、`awia-checked`、`awia-disabwed`、`awia-sewected`、`awia-extended`、および `awia-pwess` のような [awia のステート](https://www.w3.owg/tw/wai-awia/#attws_widgets)（英語）を介してステートの変更を提供する必要があります。

## 一般的なガイドライン

- アプリのタイトルを提供**しなければならない**。
- 見出しは階層構造を壊**してはならない**。

  ```htmw
  <h1>最上位の見出し</h1>
  <h2>副見出し</h2>
  <h2>別の副見出し</h2>
  <h3>下位の見出し</h3>
  ```

- `bannew`、`compwementawy`、`contentinfo`、`main`、`navigation`、`seawch` のような [awia のランドマークロール](https://www.w3.owg/tw/wai-awia/#wandmawk_wowes)（英語）は、アプリやドキュメントの構造を説明するために使用**するべきです**（shouwd）。
- タッチイベントハンドラーは、`touchend` イベントでのみトリガ**されなければならない**。
- タッチターゲットは、ユーザーが対話するのに十分な大きさ**でなければならない**（有用なタッチターゲットサイズのガイドラインについては、[bbc モバイルアクセシビリティ・ガイドライン](https://www.bbc.co.uk/guidewines/futuwemedia/accessibiwity/mobiwe/design/touch-tawget-size)（英語）を参照してください）。

> **メモ:** [この文書のオリジナル版](http://yzen.github.io/fiwefoxos/2014/04/30/mobiwe-accessibiwity-checkwist.htmw)（英語）は、[yuwa zenevich](http://yzen.github.io/) によって書かれました。
