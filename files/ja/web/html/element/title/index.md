---
title: "<title>: 文書題名要素"
slug: Web/HTML/Element/title
l10n:
  sourceCommit: c6894b701b2297a7523d07855b47605c06f29c91
---

{{HTMLSidebar}}

**`<title>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{glossary("Browser", "ブラウザー")}}の題名バーやページのタブに表示される文書の題名を定義します。テキストのみを含めることができます。要素内のタグはすべて無視されます。

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a
          href="/ja/docs/Web/HTML/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        要素間の{{glossary("whitespace", "ホワイトスペース")}}ではないテキスト。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグと終了タグの両方が必要。なお、
        <code>&#x3C;/title></code>
        を忘れると、ブラウザーがページの残りの部分を無視することがある。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        他に {{HTMLElement("title")}} 要素を含まない
        {{HTMLElement("head")}} 要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTitleElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上のメモ

`<title>` 要素は常にページの {{HTMLElement("head")}} ブロックの中で使われます。

### ページの題名と SEO

ページの題名の内容は、検索エンジン最適化 ({{glossary("SEO")}}) に著しい影響を与えることがあります。一般的に、長く、説明的な題名は、短く、一般的な題名よりも効果があります。題名の内容は、検索エンジンのアルゴリズムが検索結果にページを列挙する順序を決定するために使用する材料の一つです。また、題名は検索結果ページを眺めている読者の注意を引く最初の「フック」となります。

良い題名を作成するためのガイドラインやコツを示します。

- 1 ～ 2 語の題名は避けましょう。説明的な文言を使用したり、用語集や参照スタイルのページでは用語と定義の組を使用したりしましょう。
- 検索エンジンは通常、ページの題名は最初のおよそ 55–60 文字を表示します。それを超えるテキストは失われることがあるので、それよりも長くはしないようにしてください。もっと長い題名を使う必要があるのであれば、重要な部分を前にもってくると、題名の中の重要な部分が落とされにくくなります。
- 「キーワード BLOB」を使用しないでください。題名が単なるキーワードの羅列であると、アルゴリズムはそのページの検索結果内の順位を落とすことがあります。
- 題名はできるだけサイト内で固有のものにするようにしてください。複写や複写に近いものは検索結果を不正確にすることがあります。

## 例

```html
<title>素敵で面白いこと</title>
```

この例ではページの題名全体 (ウィンドウの最上部またはウィンドウのタブに表示されるもの) を「素敵で面白いこと」にします。

## アクセシビリティの考慮

正確で簡潔な題名を提供し、ページの目的を記述することが重要です。

支援技術を使用するユーザーのためのナビゲーション技術として、ページの題名を読んで、どのようなコンテンツが含まれるかを推測するというものが良く使われます。これはコンテンツを特定するためにページ間を移動すると、時間を消費したり手順を間違える可能性があったりするからです。題名はウェブサイトのページごとに固有のものであるべきです。ページの主な目的を最初に示し、その後にウェブサイト名が続くのが理想的です。このパターンに従うことで、ページの主な目的が確実にスクリーンリーダーによって最初に告知されるようになります。こうすることで、ユーザーが同じウェブサイト内で移動するすべてのページで、固有のページ題名よりも先にウェブサイトの名前が読み上げられるのを待たなければならないよりも、はるかに優れた使い勝手になります。

### 例

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

フォームの送信にエラーが含まれていて、送信すると現在のページが再表示された場合、題名を使用してユーザーに送信のエラーを認識させることができます。例えば、ページ `title` の値を更新して、重要なページの状態変化（検証状態の問題など）を反映します。

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> **メモ:** 現在のところ、ページの題名を動的に更新しても、スクリーンリーダーによって自動的にアナウンスされることはありません。ページの状態の大幅な変更を反映するためにページの題名を更新する場合は、[ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)を使用する必要があるかもしれません。

- [MDN WCAG を理解する ― ガイドライン 2.4 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.2 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の [`<title>`](/ja/docs/Web/SVG/Element/title) 要素
