---
title: HTML のパフォーマンス機能
slug: Learn_web_development/Extensions/Performance/HTML
original_slug: Learn/Performance/HTML
l10n:
  sourceCommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/JavaScript", "Learn/Performance/CSS", "Learn/Performance")}}

HTML は既定で高速でアクセシビリティに優れています。開発者としての私たちの仕事は、HTML コードを作成・編集する際に、この 2 つのプロパティを確実に保持することです。例えば、{{htmlelement("video")}} の埋め込みファイルのサイズが大きすぎる場合や、ウェブページがモバイル端末に最適化されていない場合など、複雑な問題が発生することがあります。このモジュールでは、ウェブページの品質を劇的に向上させることができる、主要な HTML パフォーマンス機能を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアのインストール</a
        >、
        <a href="/ja/docs/Learn/Getting_started_with_the_web"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        HTML 要素や属性がウェブのパフォーマンス最適化に与える影響について学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## パフォーマンスに影響を与える要素と属性

- [`<picture>` 要素](/ja/docs/Web/HTML/Element/picture)
- [`<video>` 要素](/ja/docs/Web/HTML/Element/video)
- [`<source>` 要素](/ja/docs/Web/HTML/Element/source)
- [`<img> srcset` 属性](/ja/docs/Web/HTML/Element/img#attributes)

  - [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [`rel="preload"` によるコンテンツの先読み](/ja/docs/Web/HTML/Attributes/rel/preload)
- [(https://w3c.github.io/preload/](https://w3c.github.io/preload/))
- `async` / `defer` 属性
- {{htmlelement('iframe')}}
- {{htmlelement('object')}}
- {{htmlelement('script')}}
- [`rel` 属性](/ja/docs/Web/HTML/Attributes/rel)

## まとめ

{{PreviousMenuNext("Learn/Performance/JavaScript", "Learn/Performance/CSS", "Learn/Performance")}}

## 関連情報

- [`<picture>` 要素](/ja/docs/Web/HTML/Element/picture)
- [`<video>` 要素](/ja/docs/Web/HTML/Element/video)
- [`<source>` 要素](/ja/docs/Web/HTML/Element/source)
- [`<img> srcset` 属性](/ja/docs/Web/HTML/Element/img#attributes)

  - [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [`rel="preload"` によるコンテンツの先読み](/ja/docs/Web/HTML/Attributes/rel/preload)
- [(https://w3c.github.io/preload/](https://w3c.github.io/preload/))
