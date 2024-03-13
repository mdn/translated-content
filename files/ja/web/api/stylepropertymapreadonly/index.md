---
title: StylePropertyMapReadOnly
slug: Web/API/StylePropertyMapReadOnly
---

{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

**`StylePropertyMapReadOnly`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_Object_Model_API) のインターフェイスで、 {{domxref("CSSStyleDeclaration")}} の代替となる読み取り専用の CSS 宣言ブロックの表現を提供します。このインターフェイスのインスタンスを取得するには、 {{domxref('Element.computedStyleMap','Element.computedStyleMap()')}} を使用してください。

## プロパティ

- {{domxref('StylePropertyMapReadOnly.size')}}
  - : `StylePropertyMapReadOnly` オブジェクトの大きさを、符号なし長整数値で返します。

## メソッド

- {{domxref('StylePropertyMapReadOnly.entries()')}}
  - : このオブジェクト自身の列挙可能なプロパティ `[key, value]` の組を、 {{jsxref("Statements/for...in", "for...in")}} ループが提供するものと同じ順序で配列として返します（違いは、 for-in ループがプロトタイプチェーン内のプロパティも列挙することです）。
- {{domxref('StylePropertyMapReadOnly.forEach()')}}
  - : 指定された関数を `StylePropertyMapReadOnly` のそれぞれの要素について 1 回ずつ実行します。
- {{domxref('StylePropertyMapReadOnly.get()')}}
  - : 指定されたプロパティの値を返します。
- {{domxref('StylePropertyMapReadOnly.getAll()')}}
  - : 指定されたプロパティの値を含む {{domxref("CSSStyleValue")}} オブジェクトの配列を返します。
- {{domxref('StylePropertyMapReadOnly.has()')}}
  - : 指定されたプロパティが `StylePropertyMapReadOnly` オブジェクトにあるかどうかを示します。
- {{domxref('StylePropertyMapReadOnly.keys()')}}
  - : `StylePropertyMapReadOnly` 内のそれぞれの項目のキーを含む新しい*配列イテレーター*を返します。
- {{domxref('StylePropertyMapReadOnly.values()')}}
  - : `StylePropertyMapReadOnly` 内のそれぞれの項目の値を含む新しい*配列イテレーター*を返します。

## 例

観察するための要素を用意します。

```html
<p>
  これは、いくつかのテキストを含む段落です。 CSS
  を追加することもできますし、しないこともできます。スタイルマップには、既定のものと継承されたすべての
  CSS プロパティ値が含まれます。
</p>
<dl id="output"></dl>
```

出力をよりよくするに、カスタムプロパティで CSS を少々追加します。

```css
p {
  --someVariable: 1.6em;
  --someOtherVariable: translateX(33vw);
  --anotherVariable: 42;
  line-height: var(--someVariable);
}
```

JavaScript を追加して段落を取得し、 {{domxref('Element.computedStyleMap()')}} を使って、すべての既定の CSS プロパティ値の定義リストを返します。

```js
// 要素を取得
const myElement = document.querySelector("p");

// 入力する <dl> を取得
const stylesList = document.querySelector("#output");

// computedStyleMap() ですべての計算済みスタイルを取得
const stylePropertyMap = myElement.computedStyleMap();

// すべてのプロパティと値のマップを反復処理して、それぞれ <dt> と <dd> を追加
for (const [prop, val] of stylePropertyMap) {
  // プロパティ
  const cssProperty = document.createElement("dt");
  cssProperty.innerText = prop;
  stylesList.appendChild(cssProperty);

  // 値
  const cssValue = document.createElement("dd");
  cssValue.innerText = val;
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample("Examples", 120, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
