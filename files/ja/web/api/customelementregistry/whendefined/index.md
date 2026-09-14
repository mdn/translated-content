---
title: "CustomElementRegistry: whenDefined() メソッド"
short-title: whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("Web Components")}}

**`whenDefined()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、指定した名前の要素が定義されたときに解決されるプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
whenDefined(name)
```

### 引数

- `name`
  - : カスタム要素の名前。

### 返値

指定された名前でカスタム要素が定義された際に、[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)のコンストラクターで履行されるプロミス ({{jsxref("Promise")}}) です。
その名前でカスタム要素がすでに定義されている場合、このプロミスは直ちに履行されます。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された [name](#name) が、[有効なカスタム要素名](/ja/docs/Web/API/CustomElementRegistry/define#有効なカスタム要素名)ではない場合。

## 例

### 基本的な使い方

以下の例では、 `whenDefined()` を用いてメニューを生成するカスタム要素が定義されたタイミングを検出しています。
実際にメニューコンテンツの表示準備が完了するまでは、メニューはプレースホルダーのコンテンツを表示します。

```html
<nav id="menu-container">
  <div class="menu-placeholder">読み込み中…</div>
  <nav-menu>
    <menu-item>アイテム 1</menu-item>
    <menu-item>アイテム 2</menu-item>
    …
    <menu-item>アイテム N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById("menu-container");
const placeholder = container.querySelector(".menu-placeholder");
// まだ定義されていないメニューの子を取得する
const undefinedElements = container.querySelectorAll(":not(:defined)");

async function removePlaceholder() {
  // 要素を固有の localName で絞り込む
  const tags = new Set(
    [...undefinedElements].map((button) => button.localName),
  );
  const promises = [...tags].map((tag) => customElements.whenDefined(tag));

  // すべての子がアップグレードされるまで待つ
  await Promise.all(promises);
  // それからプレースホルダーを削除
  container.removeChild(placeholder);
}

removePlaceholder();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
