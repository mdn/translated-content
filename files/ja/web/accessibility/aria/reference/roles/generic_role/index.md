---
title: "ARIA: generic ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/generic_role
original_slug: Web/Accessibility/ARIA/Roles/generic_role
l10n:
  sourceCommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`generic` ロールは、自分自身で意味を持たない名前のないコンテナー要素を作成します。

> [!NOTE]
> `generic` ロールはユーザーエージェントが使用する一般的な要素の暗黙のロールです。文書化を完全にするためにここに記載しています。ウェブ作成者が使用すべきではありません。

## 解説

ARIA は主に意味づけを表現するために使用されますが、支援技術に意味づけ名を公開すべきではない要素もあります。 `generic` ロールは、要素のロールが意味づけされていない {{HTMLElement('div')}} や {{HTMLElement('span')}} 要素と同等であることを示します。

`generic` ロールは、ホスト言語の一般的な要素の暗黙的なロールとして、ユーザーエージェントのみが使用することを意図しています。代わりに、暗黙的なアクセシビリティの意味づけを除去するには、 [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) や `none`、意味づけのない {{HTMLElement('div')}} 要素や {{HTMLElement('span')}} 要素を使用してください、 または [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) のような意味づけされたコンテナーロールにより、名前付きコンテナー内の子孫を意味づけしてグループ化します。

要素に `presentation` ロールが付いた場合と同様に、`role="generic"` を持つ要素は、[`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) 属性のように、その子孫にアクセス可能なステートやプロパティを制限付きで提供することができます。しかし、 `presentation` ロールを持つ要素とは異なり、 `generic` 要素はアクセシビリティ API で公開されるので、支援する技術はレイアウトや境界などの特定のプロパティを収集することができます。

一般的なロールは名前がないので、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) と [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性は禁止されています。ロールは一般的なので、[`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) と [`aria-brailleroledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) 属性も禁止されています。

> [!NOTE]
> `role="generic"` を持つ要素は、アクセシブル名やロールの記述を持つべきではありません。

### 関連する WAI-ARIA のロール、ステート、プロパティ

なし。グローバル ARIA ステートとプロパティが設定されている場合、 `generic` または `none` は無視され、要素の暗黙のロールを使用します。

## 例

この役割はユーザーエージェントが使用するものであり、開発者が使用するものではありません。そのため、適切な例は存在しません。

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('div')}} および {{HTMLElement('span')}} 要素
- [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) ロール
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロール

<section id="Quick_links">

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles", 1)}}

</section>
