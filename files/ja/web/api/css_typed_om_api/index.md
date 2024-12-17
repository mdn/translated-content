---
title: CSS 型付きオブジェクトモデル API
slug: Web/API/CSS_Typed_OM_API
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

CSS 型付きオブジェクトモデル API (CSS Typed Object Model API) は、 CSS の値を文字列ではなく、型付き JavaScript オブジェクトとして提供することにより、CSS のプロパティ操作を簡略化するものです。これは CSS の操作を単純化するだけでなく、 {{domxref('HTMLElement.style')}} と比較して、パフォーマンスへの悪影響も軽減できます。

一般的に、 CSS の値は JavaScript で文字列として読み書きすることができますが、これは遅くて煩わしい場合があります。 CSS 型付きオブジェクトモデル API は、文字列の解析と連結に比べてより簡単に、より確実に操作と理解ができる特殊な JS オブジェクトで値を表現することにより、基礎となる値と対話するためのインターフェイスを提供します。これは開発者にとって扱いがより簡単です（例えば、数値が実際の JS の数値に反映され、そこに定義されている単位を考慮した数値演算ができます）。また、 CSS の文字列の構築と解析の両方を行うことなく、値を直接操作し、安価に元の値に戻すことができるため、一般に高速に処理することができます。

CSS 型付きオブジェクトモデルは、 CSS のプロパティに割り当てられた値を効率的に操作できるとともに、より理解しやすく書きやすい保守性の高いコードを実現します。

## インターフェイス

### `CSSStyleValue`

{{domxref('CSSStyleValue')}} は CSS 型付きオブジェクトモデル API のインターフェイスで、型付きオブジェクトモデル API を通してアクセスできるすべての CSS 値の基底クラスとなるものです。このクラスのインスタンスは、文字列が期待される場所であればどこでも使用することができます。

- {{domxref('CSSStyleValue.parse()', 'CSSStyleValue.parse(property, cssText)')}}
  - : parse() は CSSStyleValue インターフェイスのメソッドで、 CSS 文字列から CSSNumericValue を構築することができます。これは、特定の CSS プロパティを指定された値に設定し、最初の値を CSSStyleValue オブジェクトとして返します。
- {{domxref('CSSStyleValue.parseAll()')}}
  - : parseAll() は CSSStyleValue インターフェイスのメソッドで、特定の CSS プロパティを指定された値に設定し、CSSStyleValue オブジェクトの配列を返すもので、それぞれが指定された値の一つを含んでいます。

### `StylePropertyMap`

{{domxref('StylePropertyMap')}} は CSS 型付きオブジェクトモデル API のインターフェイスで、 CSSStyleDeclaration の代替となる CSS 宣言ブロックの表現を提供します。

- {{domxref('StylePropertyMap.set()')}}
  - : StylePropertyMap インターフェイスのメソッドで、指定されたプロパティを持つ CSS 宣言を指定された値に変更します。
- {{domxref('StylePropertyMap.append()')}}
  - : 指定されたプロパティと値による新しい CSS 宣言を、この StylePropertyMap に追加するメソッドです。
- {{domxref('StylePropertyMap.delete()')}}
  - : 指定されたプロパティを持つ CSS 宣言を、この StylePropertyMap から削除するメソッドです。
- {{domxref('StylePropertyMap.clear()')}}
  - : StylePropertyMap からすべての宣言を削除するメソッドです。

### `CSSUnparsedValue`

{{domxref('CSSUnparsedValue')}} は CSS 型付きオブジェクトモデル API のインターフェイスで、カスタムプロパティを参照するプロパティ値を表します。文字列の断片と変数の参照のリストから成ります。

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}} コンストラクター
  - : カスタムプロパティを参照するプロパティ値を表す新しい CSSUnparsedValue オブジェクトを生成します。
- {{domxref('CSSUnparsedValue.entries()')}}
  - : このオブジェクト自身の列挙可能なプロパティの \[key, value] ペアの配列を for...in ループで提供されるのと同じ順序で返すメソッドです（for-in ループはプロトタイプチェーン内のプロパティも列挙する点が異なります）。
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : CSSUnparsedValue の各要素に対して、提供された関数を一回ずつ実行するメソッドです。
- {{domxref('CSSUnparsedValue.keys()')}}
  - : 配列のそれぞれのインデックスのキーを含む、新しい配列イテレーターオブジェクトを返すメソッドです。

### `CSSKeywordValue` シリアライズ

{{domxref('CSSKeywordValue')}} は CSS 型付きオブジェクトモデル API のインターフェイスで、 CSS キーワードやその他の識別子を表現するためのオブジェクトを作成します。

- {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}} コンストラクター
  - : CSS キーワードなどの識別子を表す新しい {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}} オブジェクトを作成するコンストラクターです。
- {{domxref('CSSKeywordValue.value()')}}
  - : CSSKeywordValue インターフェイスのプロパティで、CSSKeywordValue の値を返すか設定します。

## CSSStyleValue インターフェイス

CSSStyleValue は、すべての CSS 値が表現される基本クラスです。サブクラスは以下の通りです。

- {{domxref('CSSImageValue')}} オブジェクト
  - : 画像を取るプロパティ、例えば [`background-image`](/ja/docs/Web/CSS/background-image), [`list-style-image`](/ja/docs/Web/CSS/list-style-image), [`border-image-source`](/ja/docs/Web/CSS/border-image-source) の値を表すインターフェイスです。
- {{domxref('CSSKeywordValue')}}
  - : CSS のキーワードやその他の識別子を表現するオブジェクトを生成する インターフェイスです。文字列が期待される場所で使用された場合、 CSSKeyword.value の値を返します。
- {{domxref('CSSMathValue')}}

  - : 単一の値や単位よりも複雑な数値を表すサブクラスのツリーで、次のようなものがあります。

    - {{domxref('CSSMathInvert')}} - CSS の {{cssxref("calc","calc()")}} 値を `calc(1 / <value>)` のように使用したものを表現します。
    - {{domxref('CSSMathMax')}} - CSS の {{cssxref("max","max()")}} 関数を表します。
    - {{domxref('CSSMathMin')}} - CSS の {{cssxref("min","min()")}} 関数を表します。
    - {{domxref('CSSMathNegate')}} - 渡された値を否定します。
    - {{domxref('CSSMathProduct')}} - {{domxref('CSSNumericValue')}} に対して {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, {{domxref('CSSNumericValue.toSum','toSum()')}} を実行した結果を表します。
    - {{domxref('CSSMathSum')}} - {{domxref('CSSNumericValue')}} に対して {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, {{domxref('CSSNumericValue.toSum','toSum()')}} を実行した結果を表します。

- {{domxref('CSSNumericValue')}}

  - : すべての数値が実行可能な操作を表すインターフェイスです。

    - {{domxref('CSSNumericValue.add')}} - 与えられた数字を `CSSNumericValue` に加算します。
    - {{domxref('CSSNumericValue.sub')}} - 与えられた数値を `CSSNumericValue` から減算します。
    - {{domxref('CSSNumericValue.mul')}} - 与えられた数値を `CSSNumericValue` に乗算します。
    - {{domxref('CSSNumericValue.div')}} - 与えられた数値を他の数値で割り、0 の場合はエラーが発生します。
    - {{domxref('CSSNumericValue.min')}} - 渡された値の最小値を返します。
    - {{domxref('CSSNumericValue.max')}} - 渡された値の最大値を返します。
    - {{domxref('CSSNumericValue.equals')}} - すべての値がまったく同じ型と値で、同じ順序である場合には true を返します。そうでなければ、 false を返します。
    - {{domxref('CSSNumericValue.to')}} - `value` を指定された*単位*の別の値に変換する。
    - {{domxref('CSSNumericValue.toSum')}}
    - {{domxref('CSSNumericValue.type')}}
    - {{domxref('CSSNumericValue.parse')}} - CSS の文字列から解釈された数値を返します。

- {{domxref('CSSPositionValue')}}
  - : object-position など、位置を取るプロパティの値を表します。
- {{domxref('CSSTransformValue')}}
  - : [`transform`](/ja/docs/Web/CSS/transform) のリスト値を表すインターフェイスです。これらは 1 つ以上の {{domxref('CSSTransformComponent')}} を含んでおり、個々の `transform` 関数値を表します。
- {{domxref('CSSUnitValue')}}
  - : 単一の単位、または名前付き数値とパーセントで表現できる数値を表すインターフェイスです。
- {{domxref('CSSUnparsedValue')}}
  - : [カスタムプロパティ](/ja/docs/Web/CSS/--*)を参照するプロパティ値を表します。文字列の断片と変数参照のリストで構成されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/ja/docs/Web/API/Houdini_APIs)
