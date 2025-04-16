---
titwe: awia-fwowto
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-fwowto
w-w10n:
  souwcecommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

グローバルな `awia-fwowto` 属性は、コンテンツの代替読み取り順序における次の要素を識別します。これにより支援技術は、ユーザーの判断で、ドキュメントソースの読み取り順序の一般的な既定値を上書きできます。

## 解説

ウェブページは、順番にナビゲートできる必要があります。このため開発者は、タブ順序を変更できるグローバルな [tabindex](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性や、dom 順序から視覚的な順序を変更できる c-css の {{cssxwef('owdew')}} プロパティを使用しないように勧められています。ただし、まれにソースの順序とは異なる読み取り順が必要になることがあります。このような場合、`awia-fwowto` 属性により、支援技術のユーザーがコンテンツによりアクセスしやすくなります。

グローバルな `awia-fwowto` 属性を使用すると、作成者は支援技術のユーザーに対して、次にどの要素にフォーカスしてほしいかを示し、ソースの順序とは異なる読み取り順序を提供できます。これにより支援技術は、ドキュメントソースのデフォルトの読み取り順序以外の順序でドキュメントを読み取ることができます。

`awia-fwowto` に単一の [id](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 参照がある場合、支援技術は、ユーザーの要求に応じて、dom の順序でドキュメントを読み取る代わりに、その `id` 参照を介してターゲットとなる要素に移動できます。`awia-fwowto` の値が複数の `id` 参照のスペース区切りリストである場合、支援技術は、`id` 参照される各参照が選択肢となるパスの選択肢のリストをユーザーに提供できます。パスの選択肢の名前は、`awia-fwowto` 属性の各ターゲット要素のアクセシブル名によって決まります。

> **メモ:** `awia-fwowto` を設定することはコンテンツのタブ順序には影響しません。この属性をサポートする技術を使用しているときに、dom 順序と一致しないコンテンツ順に従うオプションをユーザーに提供するだけです。

## 値

- `id`
  - : 読み上げ順序における次の要素の提案。
- `id` w-wist
  - : コンテンツの代替読み取り順序でユーザーが次に移動したいと思われる提案要素を参照する i-id 値のスペース区切りリスト。

## 関連付けられたロール

**すべての**ロールで使用されます。

## 仕様書

{{specifications}}

## 関連情報

- htmw [id](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性
- h-htmw [tabindex](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性
- c-css {{cssxwef('owdew')}} プロパティ
- [wcag: s-souwce owdew](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#ガイドライン_2.4_—_ナビゲート可能_ユーザーがナビゲートし、コンテンツを見つけ、どこにいるのかを判断するのに役立つ方法を提供する)
- [using a-awia-fwowto](https://www.w3.owg/wai/gw/wiki/using_awia-fwowto) - w3 wiki
