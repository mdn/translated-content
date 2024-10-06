---
title: Cumulative Layout Shift (CLS)
slug: Glossary/CLS
l10n:
  sourceCommit: 4f0efd02396e920d7015832c3b6e52cde2542d0e
---

{{GlossarySidebar}}

**Cumulative Layout Shift(CLS)** はウェブサイトのユーザビリティを測定する指標であり、Googleが[Core Web Vital](https://web.dev/explore/learn-core-web-vitals)を構成する指標群の一つとして設計しました。

CLSは、ユーザーが予期しないレイアウトシフトにどの程度遭遇するかを測定します。レイアウトシフトとは、ページの要素が予期せずに移動することを指します。ただし、ボタンを押すなどのユーザーアクションや、アニメーションの一部として起こる移動は、測定の対象外となります。

レイアウトシフトは、例えば {{htmlelement("img")}} や {{htmlelement("video")}} 要素に `width` および `height` 属性が設定されていない場合に発生することがあります。ブラウザがこれらの要素を実際に読み込むまで、占有するスペースを正確に予測できないことが原因です。

{{domxref("LayoutShift")}}インターフェースは[Performance API](/ja/docs/Web/API/Performance_API) の一部であり、個々のレイアウトシフトを測定するために使用できます。個々のレイアウトシフトの値を用いて、ウェブページの CLS スコアを計算できます。

## 関連情報

- web.dev上の[CLS](https://web.dev/articles/cls)
