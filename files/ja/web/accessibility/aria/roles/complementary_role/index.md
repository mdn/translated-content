---
title: "ARIA: complementary ロール"
slug: Web/Accessibility/ARIA/Roles/complementary_role
---

補足 (`complementary`) [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、メインコンテンツに関連する補助セクションを指定するために使用され、しかも分離しても単独で成り立つことができます。 これらのセクションは、サイドバーやコールアウトボックスとして表示されることがよくあります。 可能であれば、代わりに HTML の {{htmlelement("aside")}} 要素を使用してください。

```html
<div role="complementary">
  <h2>私たちのパートナー</h2>
  <!-- 補足的なセクションのコンテンツ -->
</div>
```

これはイベントのスポンサーへのリンクを含むサイドバーです。

## 説明

補足 (`complementary`) ロールは[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)です。 ランドマーク (landmark) は、支援技術によって使用され、文書の大きなセクションを迅速に識別してナビゲートすることができます。 補足 (`complementary`) ランドマークロールを持つコンテナー内にリストされたコンテンツは、文書のメインのコンテンツから分離されている場合でも意味をなすべきです。

> **メモ:** {{htmlelement("aside")}} 要素を使用すると、自動的にセクションが補足 (`complementary`) ロールを持つことを伝えます。 開発者は、ARIA を使用するよりも正しい意味論の HTML 要素を常に使用するべきです。

## 例

```html
<div role="complementary">
  <h2>トレンド記事</h2>
  <ul>
    <li><a href="#">あなたがすべての気分を感じさせる18のツイート</a></li>
    <li>
      <a href="#"
        >私は完璧な昼食用の容器を見つけたので、それを探すのを停止する</a
      >
    </li>
    <li>
      <a href="#"
        >最終的に私たちがこれらの食品と呼ぶべきものを決定する時が来た</a
      >
    </li>
    <li><a href="#">Tumblr で今週見た17の本当に良い投稿</a></li>
    <li>
      <a href="#"
        >10の親のハック、私たちはそれらを試したので、働くことを知っている</a
      >
    </li>
  </ul>
</div>
```

## アクセシビリティに関する懸念

[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

## ベストプラクティス

### 好ましい HTML

{{htmlelement("aside")}} 要素を使用すると、自動的にセクションが補足 (`complementary`) ロールを持つことを伝えます。 可能であれば、それを代わりに使用することをお勧めします。

### ランドマークのラベル付け

#### 複数のランドマーク

文書に複数の補足 (`complementary`) ランドマークロールや {{htmlelement("aside")}} 要素がある場合は、各ランドマークに `aria-label` 属性を使用してラベルを付けるか、それらに適切な説明的なタイトルがある場合は、`aria-labelledby` 属性を使用してそれを指してください。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすばやく理解できるようになります。

```html
<aside aria-label="使用上の注意">
  <!-- コンテンツ -->
</aside>

...

<aside id="sidebar" aria-label="スポンサー">
  <!-- コンテンツ -->
</aside>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、 `aria-label="サイドバー"` の `role="complementary"` の宣言は、"complementary サイドバー" として重複してアナウンスされることがあります。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、非スクリーンリーダーユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agrip.org.uk/landmarks/) (英語)

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- {{htmlelement("aside")}}: 余談要素
- [complementary (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#complementary)
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](http://html5doctor.com/aside-revisited/)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
