---
title: "ARIA: contentinfo ロール"
short-title: contentinfo
slug: Web/Accessibility/ARIA/Reference/Roles/contentinfo_role
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

`contentinfo` ロールは、サイト内のすべての文書に含まれる、著作権情報、ナビゲーションリンク、プライバシーポリシーなどの識別情報を含むフッターを定義します。このセクションは、一般に「フッター」と呼ばれます。

```html
<div role="contentinfo">
  <h2>フッター</h2>
  <!-- フッターのコンテンツ -->
</div>
```

これはウェブサイトのフッターです。 代わりに {{HTMLElement('footer')}} 要素を使用することをお勧めします。

```html
<footer>
  <h2>フッター</h2>
  <!-- フッターのコンテンツ -->
</footer>
```

## 解説

`contentinfo` ロールは、ページフッターを識別するための[ランドマーク](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール)です。ランドマークは、支援技術によって使用され、文書の大きなセクションを迅速に識別してナビゲートすることができます。各ページには、最上位の `contentinfo` ランドマークロールは 1 つだけ設置するようしてください。

それぞれのページには、`contentinfo` ランドマークを 1 つだけ置く必要があり、これは {{HTMLElement('footer')}} 要素を使用するか、`role="contentinfo"` を宣言することで作成されます。{{HTMLElement('iframe')}} を通じて埋め込まれたコンテンツ内に存在する `contentinfo` ランドマークは、この制限の対象には含まれません。

> [!NOTE]
> {{HTMLElement('footer')}} 要素を使用すると、自動的にセクションが `contentinfo` ロールを持つことを伝えます。 開発者は、ARIA を使用するよりも正しい意味論の HTML 要素を常に使用するべきで、念のため VoiceOver の{{HTMLElement('footer#アクセシビリティ', '既知の問題をテスト')}}してください。

## 例

```html-nolint
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
      © 2005-2012 Mozilla および個人の貢献者 コンテンツは<a href="#">これらのライセンス</a>の下で公開されています。
    </p>
  </div>
</body>
```

## アクセシビリティの注意事項

### 控えめに使用する

[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール)は、文書のより大きな全体的なセクションを識別することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

### ページあたり 1 つの `contentinfo` ランドマーク

#### `<body>` 要素

{{htmlelement("body")}} 要素の直接の子孫として使用し、文書ごとに存在する `contentinfo` ランドマークは 1 つだけであるべきです。

#### 巨大フッター

文書のフッターの中に追加の {{HTMLElement('footer')}} 要素や `contentinfo` ランドマークをネストしないでください。代わりに、他の[コンテンツ区分要素](/ja/docs/Web/HTML/Reference/Elements#コンテンツ区分)を使用してください。

### ランドマークのラベル付け

#### 複数のランドマーク

文書に複数の　`contentinfo` ランドマークロールや {{HTMLElement('footer')}} 要素がある場合は、各ランドマークの [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性でラベルを指定します。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすばやく理解することができます。

```html
<body>
  …

  <article>
    <h2>毎日パッタイ</h2>
    <!-- 記事のコンテンツ -->
    <footer aria-label="毎日パッタイのメタデータ">
      <p>
        <a href="#">リサ</a>によって <time datetime="2021-09-23 12:17"
          >9 月 23 日</time
        >に投稿されました。
      </p>
    </footer>
  </article>

  …

  <footer aria-label="フッター">
    <!-- フッターのコンテンツ -->
  </footer>
</body>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`aria-label="フッター"` の `role="contentinfo"` の宣言は、"contentinfo フッター" として重複してアナウンスされることがあります。

## ベストプラクティス

### 好ましい HTML

{{HTMLElement('body')}} 要素の直接の子孫である場合、{{HTMLElement('footer')}} 要素を使用すると、自動的にセクションが `contentinfo` ロールを持つことを伝えます（VoiceOver の{{HTMLElement('footer#accessibility', '既知の問題')}}は別として）。 可能であれば、代わりに `<footer>` を使用することをお勧めします。 `article`、`aside`、`main`、`nav`、`section` 内にネストされた `<footer>` 要素は、`contentinfo` とはみなされないことに注意してください。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、非スクリーンリーダーユーザーは文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agrip.org.uk/landmarks/) <sup>(英語)</sup>

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('footer')}}: フッター要素
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
