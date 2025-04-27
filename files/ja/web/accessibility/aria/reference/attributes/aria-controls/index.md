---
title: aria-controls
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-controls
original_slug: Web/Accessibility/ARIA/Attributes/aria-controls
l10n:
  sourceCommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{AccessibilitySidebar}}

グローバルな `aria-controls` 属性は、この属性が設定されている要素によってコンテンツまたは存在が制御される要素を識別します。

## 解説

コンボボックス、タブ、ボタンなどの対話可能なウィジェットまたは要素を使用して、ドキュメントまたはアプリケーション内の別の要素またはコンポーネントを調整または変更する場合、`aria-controls` 属性を使用して、対応する要素を制御する要素にプログラムで関連付けることができます。`aria-controls` 属性は、影響を受ける動作を開始するインタラクションの種類に関係なく、この属性が設定されている要素によってコンテンツまたは存在が制御される要素を識別します。

[combobox](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) 要素には、ポップアップとして機能する要素を参照する `aria-controls` の値が設定されています。ポップアップが表示されている場合にのみ `aria-controls` を設定する必要がありますが、表示されていない要素を参照することも有効であり、プログラムが簡単になります。

その他のコントロールの例は次のとおりです:

- アコーディオンウィジェットの、関連付けられているパネルコンテンツの表示・非表示を切り替えるボタン部分。各ボタンは、呼び出し元のコントロールに関連付けられているコンテンツを含む要素の ID を参照する `aria-controls` を指定する場合があります。
- ロールが [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) の要素: スクロールバーが制御している要素の ID を参照する `aria-controls` 属性が必要です。
- それぞれ異なるタブパネルを表示するタブのグループ: [`role="tab"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の各要素には、関連付けられている [`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) を参照する `aria-controls` 属性があります。

## 例

このタブの例では、各タブが 1 つのタブパネルを制御します:

```html
<div class="tab-interface">
  <div role="tablist" aria-label="Sample Tabs">
    <span
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      First Tab
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Second Tab
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Third Tab
    </span>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div
    id="panel-2"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-2"
    class="display-none">
    <p>Content for the second panel</p>
  </div>
  <div
    id="panel-3"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-3"
    class="display-none">
    <p>Content for the third panel</p>
  </div>
</div>
```

> [!NOTE]
> ARIA は要素のアクセシビリティツリーのみを変更し、支援技術がコンテンツをユーザーに提示する方法を識別します。ARIA は暗黙的な機能やスタイルを変更しません。

## 値

- `id` list
  - : 現在の要素によって制御されている要素を参照する 1 つ以上の ID 値のスペース区切りのリスト

## 関連インターフェイス

- {{domxref("Element.ariaControlsElements")}}
  - : `ariaControlsElements` プロパティは各要素のインターフェイスの一部です。その値は、`aria-controls` 属性で指定された ID 値に対応する {{domxref("Element")}} のリストです。

## 関連付けられたロール

**すべて**のロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
