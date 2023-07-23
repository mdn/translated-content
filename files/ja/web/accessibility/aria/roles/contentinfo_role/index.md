---
title: "ARIA: contentinfo ロール"
slug: Web/Accessibility/ARIA/Roles/contentinfo_role
---

コンテンツ情報 (`contentinfo`) [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、著作権情報、ナビゲーションリンク、プライバシーステートメントなど、ウェブサイトの各ページの最後に繰り返される情報を識別するために使用します。 このセクションは一般的にフッターと呼ばれます。

```html
<div role="contentinfo">
  <h2>フッター</h2>
  <!-- フッターのコンテンツ -->
</div>
```

これはウェブサイトのフッターです。 代わりに {{htmlelement("footer")}} 要素を使用することをお勧めします。

```html
<footer>
  <h2>フッター</h2>
  <!-- フッターのコンテンツ -->
</footer>
```

## 説明

コンテンツ情報 (`contentinfo`) ロールは、ページフッターを識別するための[ランドマーク](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)です。 ランドマークは、支援技術によって使用され、文書の大きなセクションを迅速に識別してナビゲートすることができます。 ページには、1 ページあたり 1 つのトップレベルのコンテンツ情報 (`contentinfo`) ランドマークロールのみが含まれているべきです。

各ページには、{{htmlelement("footer")}} 要素を使用するか、または `role="contentinfo"` を宣言することによって作成されたコンテンツ情報 (`contentinfo`) ランドマークが 1 つだけ含まれているべきです。 {{htmlelement("iframe")}} 要素を介して埋め込まれたコンテンツに存在するコンテンツ情報 (`contentinfo`) ランドマークは、この制限に含まれません。

> **メモ:** {{htmlelement("footer")}} 要素を使用すると、自動的にセクションがコンテンツ情報 (`contentinfo`) ロールを持つことを伝えます。 開発者は、ARIA を使用するよりも正しい意味論の HTML 要素を常に使用するべきで、念のため VoiceOver の[既知の問題をテスト](/ja/docs/Web/HTML/Element/footer#accessibility_concerns)してください。

## 例

```html
<body>
  <!-- 他のページのコンテンツ -->

  <div role="contentinfo">
    <h2>MDN Web Docs</h2>
    <ul>
      <li><a href="#">ウェブ技術</a></li>
      <li><a href="#">ウェブ開発について学ぶ</a></li>
      <li><a href="#">MDN について</a></li>
      <li><a href="#">フィードバック</a></li>
    </ul>
    <p>
      © 2005-2018 Mozilla および各貢献者 コンテンツは
      <a href="#">これらのライセンス</a> の下で公開されています。
    </p>
  </div>
</body>
```

## アクセシビリティに関する懸念

### 控えめに使用する

[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書のより大きな全体的なセクションを識別することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

### ページあたり 1 つの `contentinfo` ランドマーク

#### `<body>` 要素

{{htmlelement("body")}} 要素の直接の子孫として使用し、文書ごとに 1 つだけコンテンツ情報 (`contentinfo`) ランドマークが存在するべきです。

#### 巨大フッター

文書のフッターの中に追加の {{htmlelement("footer")}} 要素やコンテンツ情報 (`contentinfo`) ランドマークをネストしないでください。 代わりに、他の[コンテンツセクショニング要素](/ja/docs/Web/HTML/Element#content_sectioning)を使用してください。

### ランドマークのラベル付け

#### 複数のランドマーク

文書に複数のコンテンツ情報 (`contentinfo`) ランドマークロールや {{htmlelement("footer")}} 要素がある場合は、各ランドマークの `aria-label` 属性でラベルを指定します。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすばやく理解することができます。

```html
<body>
  ...

  <article>
    <h2>毎日パッタイ</h2>
    <!-- 記事のコンテンツ -->
    <footer aria-label="毎日パッタイのメタデータ">
      <p>
        <a href="#">リサ</a>によって<time datetime="2018-09-23 12:17"
          >5月16日</time
        >に投稿されました。
      </p>
    </footer>
  </article>

  ...

  <footer aria-label="フッター">
    <!-- フッターのコンテンツ -->
  </footer>
</body>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`aria-label="フッター"` の `role="contentinfo"` の宣言は、"contentinfo フッター" として重複してアナウンスされることがあります。

## ベストプラクティス

### 好ましい HTML

{{htmlelement("body")}} 要素の直接の子孫である場合、{{htmlelement("footer")}} 要素を使用すると、自動的にセクションがコンテンツ情報 (`contentinfo`) ロールを持つことを伝えます (VoiceOver の[既知の問題](/ja/docs/Web/HTML/Element/footer#accessibility_concerns)は別として)。 可能であれば、代わりに `<footer>` を使用することをお勧めします。 `<article>`、`<aside>`、`<main>`、`<nav>`、`<section>` 内にネストされた `<footer>` 要素は、コンテンツ情報 (`contentinfo`) とはみなされないことに注意してください。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、非スクリーンリーダーユーザーは文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agrip.org.uk/landmarks/) (英語)

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

## 関連情報

- {{htmlelement("footer")}}: フッター要素
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](http://html5doctor.com/the-footer-element-update/)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
