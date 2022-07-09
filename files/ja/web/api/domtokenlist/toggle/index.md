---
title: DOMTokenList.toggle()
slug: Web/API/DOMTokenList/toggle
tags:
  - メソッド
  - リファレンス
browser-compat: api.DOMTokenList.toggle
translation_of: Web/API/DOMTokenList/toggle
---
{{APIRef("DOM")}}

**`toggle()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、渡されたトークンをリストから削除し、 `false` を返します。そのトークンが存在しなかった場合は、追加して `true` を返します。

## 構文

```js
toggle(token);
toggle(token, force);
```

## 引数

- `token`
  - : 文字列で、トグル切り替えしたいトークンを表します。
- `force` {{optional_inline}}
  - : 存在する場合は、片方の操作のみを行います。 `false` に設定すると、 `token` を削除する*だけ*となり、追加は行いません。 `true` に設定すると、 `token` を追加する*だけ*となり、削除は行いません。

### 返値

`true` または `false` の論理値で、呼び出し後に `token` がリストに存在するかどうかを示します。

## 例

### クリック時にクラスをトグル切り替え

以下の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを `DOMTokenList` として受け取るのに {{domxref("Element.classList")}} を使用しています。それからリスト内のトークンを置き換え、リストを `<span>` の {{domxref("Node.textContent")}} に書き込みます。

最初に HTML です。

```html
<span class="a b">classList is 'a b'</span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;

span.addEventListener('click', function() {
  const result = classes.toggle("c");

  if (result) {
    span.textContent = `'c' added; classList is now "${classes}".`;
  } else {
    span.textContent = `'c' removed; classList is now "${classes}".`;
  }
})
```

出力結果は以下のようになり、テキストをクリックするたびに変化します。

{{ EmbedLiveSample('Toggling_a_class_on_click', '100%', 60) }}

### force 引数の設定

2 番目の引数は、クラスを含めるかどうかを決定するために使用することができます。この例では、ブラウザーのウィンドウ幅が 1000 ピクセル以上の場合にのみ 'c' クラスを含めます。

```js
span.classList.toggle("c", window.innerWidth > 1000);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
