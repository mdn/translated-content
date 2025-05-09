---
title: SVGLength
slug: Web/API/SVGLength
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

**`SVGLength`** インターフェイスは、[\<length>](/ja/docs/Web/SVG/Guides/Content_type#length) 基本データ型に対応します。

`SVGLength` オブジェクトは読み取り専用として指定されていることがあり、その場合はオブジェクトを変更しようとすると例外が発生します。

## インスタンスプロパティ

- {{domxref("SVGLength.unitType", "unitType")}}
  - : このインターフェイスで定義されている `SVG_ANGLETYPE_*` 定数のいずれかを指定します。
- {{domxref("SVGLength.value", "value")}}
  - : ユーザー単位における浮動小数点値としての値です。
- {{domxref("SVGLength.valueAsString", "valueAsString")}}
  - : 文字列値としての値を、`unitType` で表現された単位で表します。
- {{domxref("SVGLength.valueInSpecifiedUnits", "valueInSpecifiedUnits")}}
  - : `unitType` で指定された単位で表される浮動小数点数としての値です。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">名前</th>
      <th scope="col">値</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SVG_LENGTHTYPE_UNKNOWN</code></td>
      <td><code>0</code></td>
      <td>
         単位の型が定義済みの単位の型ではありません。この型の新しい値を定義しようとしたり、既存の値をこの型に切り替えようとしたりすることはできません。
      </td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_NUMBER</code></td>
      <td><code>1</code></td>
      <td>
        単位の型が指定されておらず（すなわち、単位のない値が指定されています）。ユーザー単位での値を示しています。
      </td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PERCENTAGE</code></td>
      <td><code>2</code></td>
      <td>パーセント値が指定されていました。</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_EMS</code></td>
      <td><code>3</code></td>
      <td>値が em 単位（CSS2 で定義）を使用して指定されていました。</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_EXS</code></td>
      <td><code>4</code></td>
      <td>値が ex 単位（CSS2 で定義）を使用して指定されていました。</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PX</code></td>
      <td><code>5</code></td>
      <td>値が px 単位（CSS2 で定義）を使用して指定されていました。</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_CM</code></td>
      <td><code>6</code></td>
      <td>値が cm 単位（CSS2 で定義）を使用して指定されていました。</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_MM</code></td>
      <td><code>7</code></td>
      <td>値が mm 単位（CSS2 で定義）を使用して指定されていました。</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_IN</code></td>
      <td><code>8</code></td>
      <td>値が in 単位（CSS2 で定義）を使用して指定されていました。</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PT</code></td>
      <td><code>9</code></td>
      <td>値が pt 単位（CSS2 で定義）を使用して指定されていました。</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PC</code></td>
      <td><code>10</code></td>
      <td>値が pc 単位（CSS2 で定義）を使用して指定されていました。</td>
    </tr>
  </tbody>
</table>

## インスタンスメソッド

- {{domxref("SVGLength.convertToSpecifiedUnits", "convertToSpecifiedUnits()")}}
  - : 根底に保存されたのと同じ値を維持しますが、格納された単位識別子を指定された `unitType` にリセットします。
- {{domxref("SVGLength.newValueSpecifiedUnits", "newValueSpecifiedUnits()")}}
  - : 値を関連付けられた `unitType` を持つ数値としてリセットし、それによってオブジェクト上の属性の値をすべて置き換えます。

## 例

```xml
<svg height="200" onload="start();" version="1.1" width="200" xmlns="http://www.w3.org/2000/svg">
  <script><![CDATA[
function start() {
  const rect = document.getElementById("myRect");
  const val  = rect.x.baseVal;

  // read x in pixel and cm units
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits: " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);

  // set x = 20pt and read it out in pixel and pt units
  val.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PT, 20);
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);

  // convert x = 20pt to inches and read out in pixel and inch units
  val.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_IN);
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);
}
]]></script>
  <rect id="myRect"
        x="1cm" y="1cm"
        fill="green" stroke="black" stroke-width="1"
        width="1cm" height="1cm"
  />
</svg>
```

デスクトップモニターでの結果です（ピクセル単位は DPI に依存します）。

```plain
value: 37.7952766418457, valueInSpecifiedUnits: 6: 1, valueAsString: 1cm
value: 26.66666603088379, valueInSpecifiedUnits 9: 20, valueAsString: 20pt
value: 26.66666603088379, valueInSpecifiedUnits 8: 0.277777761220932, valueAsString: 0.277778in
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
