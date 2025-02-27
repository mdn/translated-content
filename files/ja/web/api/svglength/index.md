---
title: SVGLength
slug: Web/API/SVGLength
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG length インターフェイス

`SVGLength` インターフェイスは、[\<length>](/ja/docs/Web/SVG/Content_type#length) 基本データ型に対応します。

`SVGLength` オブジェクトは読み取り専用として指定されていることがあり、その場合はオブジェクトを変更しようとすると例外が発生します。

### インターフェイス概要

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">実装しているもの</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">メソッド</th>
      <td>
        <ul>
          <li>
            <code
              >void <strong>newValueSpecifiedUnits</strong>(in unsigned short
              <var>unitType</var>, in float
              <var>valueInSpecifiedUnits</var>)</code
            >
          </li>
          <li>
            <code
              >void <strong>convertToSpecifiedUnits</strong>(in unsigned short
              <var>unitType</var>)</code
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">プロパティ</th>
      <td>
        <ul>
          <li>readonly unsigned short <code>unitType</code></li>
          <li>float <code>value</code></li>
          <li>float <code>valueInSpecifiedUnits</code></li>
          <li>
            string <code>valueAsString</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">定数</th>
      <td>
        <ul>
          <li><code>SVG_LENGTHTYPE_UNKNOWN</code> = <code>0</code></li>
          <li><code>SVG_LENGTHTYPE_NUMBER</code> = <code>1</code></li>
          <li><code>SVG_LENGTHTYPE_PERCENTAGE</code> = <code>2</code></li>
          <li><code>SVG_LENGTHTYPE_EMS</code> = <code>3</code></li>
          <li><code>SVG_LENGTHTYPE_EXS</code> = <code>4</code></li>
          <li><code>SVG_LENGTHTYPE_PX</code> = <code>5</code></li>
          <li><code>SVG_LENGTHTYPE_CM</code> = <code>6</code></li>
          <li><code>SVG_LENGTHTYPE_MM</code> = <code>7</code></li>
          <li><code>SVG_LENGTHTYPE_IN</code> = <code>8</code></li>
          <li><code>SVG_LENGTHTYPE_PT</code> = <code>9</code></li>
          <li><code>SVG_LENGTHTYPE_PC</code> = <code>10</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">正規文書</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGLength"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

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

Results on a desktop monitor (pixel units will be dpi-dependent):

```plain
value: 37.7952766418457, valueInSpecifiedUnits: 6: 1, valueAsString: 1cm
value: 26.66666603088379, valueInSpecifiedUnits 9: 20, valueAsString: 20pt
value: 26.66666603088379, valueInSpecifiedUnits 8: 0.277777761220932, valueAsString: 0.277778in
```

## 定数

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

## インスタンスプロパティ

<table class="no-markdown">
  <thead>
    <tr>
      <th>名前</th>
      <th>型</th>
      <th>解説</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>unitType</code></td>
      <td>unsigned short</td>
      <td>
        値の型で、このインターフェイスで定義されている <code>SVG_LENGTHTYPE_*</code> 定数のいずれかで指定されます。
      </td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>float</td>
      <td>
        <p>
          ユーザー単位における浮動小数点数値としての値。この属性を設定すると、この設定を反映して、<code>valueInSpecifiedUnits</code> と <code>valueAsString</code> が自動的に更新されます。
        </p>
        <p>
          <strong>設定時の例外:</strong> 長さが読み取り専用属性に対応している場合、またはオブジェクト自体が読み取り専用である場合に、{{ domxref("DOMException") }} 例外が <code>NO_MODIFICATION_ALLOWED_ERR</code> のコードで発生します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>valueInSpecifiedUnits</code></td>
      <td>float</td>
      <td>
        <p>
          <code>unitType</code> で指定された単位における浮動小数点数としての値。この属性を設定すると、<code>value</code> および <code>valueAsString</code> が自動的に更新され、この設定が反映されます。
        </p>
        <p>
          <strong>設定時の例外:</strong> 長さが読み取り専用属性に対応している場合、またはオブジェクト自体が読み取り専用である場合に、{{ domxref("DOMException") }} 例外が <code>NO_MODIFICATION_ALLOWED_ERR</code> のコードで発生します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>valueAsString</code></td>
      <td>string</td>
      <td>
        <p>
          <code>unitType</code> で指定された単位での文字列値。この属性を設定すると、<code>value</code>、<code>valueInSpecifiedUnits</code>、<code>unitType</code> が自動的に更新され、この設定が反映されます。
        </p>
        <p><strong>設定時の例外:</strong></p>
        <ul>
          <li>
            代入された文字列が有効な <a href="/ja/docs/Web/SVG/Content_type#length">&#x3C;length></a> として解釈できない場合、{{ domxref("DOMException") }} 例外が <code>SYNTAX_ERR</code> のコードで発生します。
          </li>
          <li>
            長さが読み取り専用属性に対応している場合、またはオブジェクト自体が読み取り専用である場合に、{{ domxref("DOMException") }} 例外が <code>NO_MODIFICATION_ALLOWED_ERR</code> のコードで発生します。
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## インスタンスメソッド

<table class="no-markdown">
  <thead>
    <tr>
      <th>名前と引数</th>
      <th>返値</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><strong>newValueSpecifiedUnits</strong>(in unsigned short
          <var>unitType</var>, in float <var>valueInSpecifiedUnits</var>)</code
        >
      </td>
      <td><var>void</var></td>
      <td>
        <p>
          関連する unitType を伴う数値として値をリセットし、それによってこのオブジェクト上のすべての属性の値を置き換えます。
        </p>
        <p><strong>例外:</strong></p>
        <ul>
          <li>
            <code>unitType</code> が <code>SVG_LENGTHTYPE_UNKNOWN</code> である場合、または有効な単位型定数（このインターフェイスで定義されている他の <code>SVG_LENGTHTYPE_*</code> 定数のいずれか）でない場合、{{ domxref("DOMException") }} が <code>NOT_SUPPORTED_ERR</code> のコードで発生します。
          </li>
          <li>
            長さが読み取り専用属性に一致する場合、またはオブジェクト自体が読み取り専用である場合に、{{ domxref("DOMException") }} が <code>NO_MODIFICATION_ALLOWED_ERR</code> のコードで発生します。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>convertToSpecifiedUnits</strong>(in unsigned short
          <var>unitType</var>)</code
        >
      </td>
      <td><var>void</var></td>
      <td>
        ベースとして保存された値は同じままですが、格納された単位識別子は指定された <code><var>unitType</var></code> にリセットされます。このメソッドの結果として、オブジェクトの <code>unitType</code>、<code>valueInSpecifiedUnits</code>、<code>valueAsString</code> の各属性が変更される場合があります。例えば、元の値が <code>"0.5cm"</code> で、ミリメートルへの変換を呼び出した場合、 <code>unitType</code> は <code>SVG_LENGTHTYPE_MM</code> に、<code>valueInSpecifiedUnits</code> は数値 <code>5</code> に、<code>valueAsString</code> は <code>"5mm"</code> に変更されます。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
