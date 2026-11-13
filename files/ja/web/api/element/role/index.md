---
title: "Element: role プロパティ"
short-title: role
slug: Web/API/Element/role
l10n:
  sourceCommit: 0b9c68dc63f9c6803cced8d9a76c31012d87b530
---

{{ ApiRef("DOM") }}

**`role`** は {{domxref("Element")}} インターフェイスのプロパティで、この要素に対して明示的に設定された [WAI-ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)を返します。

すべての HTML 要素には暗黙の ARIA ロールが割り当てられており、そのロールが [`generic`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) であっても同様です。 この 意味的な関連付けにより、ツールは、その型のそれ以外のオブジェクトに対するユーザーの期待と整合性のある方法で、オブジェクトを表示し、オブジェクトの操作に対応できるようになります。 `role` 属性は、要素の ARIA ロールを明示的に設定するために使用する属性であり、暗黙のロールを上書きします。例えば、暗黙的に [`list`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) ロールを持つ {{htmlelement("ul")}} には、明示的に [`role="treegrid"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) が設定される場合があります。 `role` プロパティは、明示的に設定された `role` 属性の値（この場合は `treegrid`）を反映します。明示的に設定されていない限り、要素の暗黙的な `list` ロールは返しません。

定義されている ARIA ロールの完全な一覧は、[ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)リファレンスページで見ることができます。

## 値

文字列。 `role` 属性の値、または明示的に設定されていない場合 `null` です。

## 例

この例では、 `alt` 属性が空または欠落している画像には、 [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) の `role` が指定されています。

```js
const images = document.querySelectorAll("img");
images.forEach((image) => {
  if (!image.alt) {
    image.role = "presentation";
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ElementInternals.role")}}
- [ARIA 属性](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes)
