---
title: '`<meta name="responsive-embedded-sizing">` 属性値'
short-title: responsive-embedded-sizing
slug: Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing
l10n:
  sourceCommit: 04c41175b160dc00b1a1b8e4e13b2183d89fdf1a
---

{{SeeCompatTable}}

**`responsive-embedded-sizing`** は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性の値で、{{htmlelement("iframe")}} に埋め込まれた文書が、そのサイズ情報を親文書と共有することを許可します。これにより、CSS の {{cssxref("frame-sizing")}} プロパティを使って、iframe のサイズを埋め込まれた文書のレイアウトサイズに応じて設定できます。

## 解説

セキュリティとプライバシー上の理由から、{{htmlelement("iframe")}} 要素はデフォルトでは、埋め込んだ文書内のコンテンツのサイズ情報を親文書に公開しません。

コンテンツに応じた {{htmlelement("iframe")}} 要素のサイズ変更を有効にするには、埋め込まれる文書に `<meta name="responsive-embedded-sizing">` タグを含めて、その文書がサイズ情報を親文書と共有することを許可します。

その後、CSS の {{cssxref("frame-sizing")}} プロパティを `<iframe>` に設定すると、埋め込まれた文書の実際のコンテンツサイズと同じ水平方向または垂直方向のサイズになります。仕様書ではこのサイズを**内部レイアウトの内在サイズ** (internal layout intrinsic size) と呼びますが、MDN の文書では「レイアウトサイズ」と略しています。これにより、`<iframe>` 内のコンテンツが埋め込み先の要素に自然に収まり、不要なスクロールバーが表示されないようにできます。

埋め込まれた文書のレイアウトサイズが変わったときに `<iframe>` のサイズも動的に変更するには、埋め込まれた文書から {{domxref("Window.requestResize()")}} メソッドを呼び出して、更新後のサイズを報告させます。

## 例

完全な例については、{{cssxref("frame-sizing")}} および {{domxref("Window.requestResize()")}} の各ページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.requestResize()")}}
- CSS {{cssxref("frame-sizing")}} プロパティ
- [CSS ボックスサイズ設定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
