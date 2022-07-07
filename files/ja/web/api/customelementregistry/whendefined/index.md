---
title: CustomElementRegistry.whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
tags:
  - API
  - CustomElementRegistry
  - メソッド
  - リファレンス
  - ウェブコンポーネント
  - カスタム要素
  - whenDefined
translation_of: Web/API/CustomElementRegistry/whenDefined
---
{{APIRef("CustomElementRegistry")}}

**`whenDefined()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、指定した名前の要素が定義されたときに解決されるプロミス ({{jsxref("Promise")}}) を返します。</span>

## 構文

```js
customElements.whenDefined(name): Promise<CustomElementConstructor>;
```

### 引数

- name
  - : カスタム要素の名前。

### 返値

指定された名前の[カスタム要素](/ja/docs/Web/API/Window/customElements)が定義された時に、[カスタム要素](/ja/docs/Web/API/Window/customElements)のコンストラクターで履行されるプロミス ({{jsxref("Promise")}}) です。（そのような[カスタム要素](/ja/docs/Web/API/Window/customElements)が既に定義されている場合、返されるプロミスは直ちに履行されます。）

## 例外

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">例外</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SyntaxError</code></td>
      <td>
        指定された名前が<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name">有効なカスタム要素名</a>でなかった場合、プロミスは <code>SyntaxError</code> で拒否されます。
      </td>
    </tr>
  </tbody>
</table>

## 例

以下の例では、 `whenDefined()` を用いてメニューを生成するカスタム要素が定義されたタイミングを検出しています。実際にメニューコンテンツの表示準備が完了するまでは、メニューはプレースホルダーのコンテンツを表示します。

```html
<nav id="menu-container">
  <div class="menu-placeholder">Loading...</div>
  <nav-menu>
    <menu-item>Item 1</menu-item>
    <menu-item>Item 2</menu-item>
     ...
    <menu-item>Item N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById('menu-container');
const placeholder = container.querySelector('.menu-placeholder');
// まだ定義されていないメニューの子を取得する
const undefinedElements = container.querySelectorAll(':not(:defined)');

async function removePlaceholder(){
  const promises = [...undefinedElements].map(
    button => customElements.whenDefined(button.localName)
  );

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
