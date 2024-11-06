---
title: "Element: scrollIntoViewIfNeeded() メソッド"
short-title: scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{Non-standard_header}}

**`Element.scrollIntoViewIfNeeded()`** メソッドは、現在の要素がまだブラウザーウィンドウの可視領域内にない場合、ブラウザーウィンドウの可視領域内にスクロールします。要素がすでにブラウザーウィンドウの可視領域内にある場合、スクロールは行われません。このメソッドは標準の [`Element.scrollIntoView()`](/ja/docs/Web/API/Element/scrollIntoView) メソッドの独自のバリエーションです。

## 構文

```js-nolint
scrollIntoViewIfNeeded()
scrollIntoViewIfNeeded(centerIfNeeded)
```

### 引数

- `centerIfNeeded` {{optional_inline}}

  - : オプションの論理値で、既定値は `true` です。

    - `true` の場合、要素はスクロール可能な祖先の可視領域の中央に配置されます。
    - `false` の場合、要素はスクロール可能な祖先の可視領域の最も近い端に揃えられます。可視領域のどの辺が要素に最も近いかに応じて、要素の上端が可視領域の上端に揃えられるか、要素の下端が可視領域の下端に揃えられます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const element = document.getElementById("my-el");

element.scrollIntoViewIfNeeded(); // 可視領域の中央に要素を移動
element.scrollIntoViewIfNeeded(false); // 要素を可視領域の最も近い辺に揃える
```

## 仕様書

どの仕様にも含まれていません。これは WebKit 独自のメソッドです。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [W3C CSSOM bug 17152: Support centering an element when scrolling into view.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) （同等の標準化された `scrollIntoViewIfNeeded` の機能リクエスト）
