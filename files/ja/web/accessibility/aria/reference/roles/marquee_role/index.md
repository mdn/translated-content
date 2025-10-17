---
title: "ARIA: marquee ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/marquee_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`marquee` は、頻繁に変化する重要でない情報を含む [ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) の一種です。

## 説明

`marquee` ロールは、頻繁に変化する重要でない情報を提示するライブリージョンの一種として領域を定義します。marquee の例には、株価表示やバナー広告などがあります。これらは、ユーザーが必ずしも求めているわけではない情報で、任意の順序で表示される場合があります。`marquee` と [`log`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) の主な違いは、log の情報は日付など意味のある順序で表示されることです。

marquee ロールを持つ要素は、暗黙的な [aria-live](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) 値として `off` を持ちます。

marquee にはアクセシブル名が必要です。表示されるラベルが存在する場合は [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用し、そうでなければ [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : 支援技術がコンテンツの更新をユーザーに知らせるタイミングを定義します。`marquee` ロールを持つ要素は、暗黙的な `aria-live` 値として `off` を持ちます。これは、ユーザーがアイドル状態であっても、スクリーンリーダーが marquee 内の変更をアナウンスしないことを意味します。

- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : `marquee` にはアクセシブル名が必要です。表示されるラベルが存在する場合は `aria-labelledby` を使用し、そうでなければ `aria-label` を使用してください。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA: `alert` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `status` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)
