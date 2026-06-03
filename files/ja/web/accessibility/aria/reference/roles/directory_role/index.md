---
title: "ARIA: directory ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/directory_role
l10n:
  sourceCommit: 4c0588c10b4266b8a87a1f80d93e8f99eabc1a4e
---

`directory` ロールは、グループのメンバーへの参照リスト（静的な目次など）に使用されていました。

> [!WARNING]
> `directory` ロールは ARIA 1.2 で非推奨になりました

## 説明

directory は、リンク付きまたはリンクなしの静的な目次です。これは、入れ子になったリストを含むリストで作成された目次を含みます。ただし、動的な目次には tree ロールが使われる場合があります。

非推奨となった `directory` ロールは、グループのメンバーへの参照リスト（静的な目次など）に使用されていました。
代わりに [`list`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) ロールを使用してください。あるいは、{{HTMLElement('ul')}} や {{HTMLElement('ol')}} 要素を使う方がより適切です。`directory` を使用しても支援技術のユーザーに追加のメリットはありません。

## 仕様書

{{Specifications}}

## 関連情報

- [`list` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- {{HTMLElement('ul')}} 要素
- {{HTMLElement('ol')}} 要素
