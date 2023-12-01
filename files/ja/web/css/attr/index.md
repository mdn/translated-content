---
title: attr()
slug: Web/CSS/attr
---

{{CSSRef}}

> **メモ:** `attr()` 関数はどの CSS プロパティでも使用することができますが、 {{CSSxRef("content")}} 以外のプロパティでの対応は実験的であり、型や単位の引数の対応はまちまちです。

**`attr()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、選択された要素の属性の値を受け取り、スタイルシートの中で使うために使用されます。[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で使用することもでき、その場合は擬似要素を作る元になった要素の属性値が返されます。

```css
/* 単純な使用法 */
attr(data-count);
attr(title);

/* 型付き */
attr(src url);
attr(data-count number);
attr(data-width px);

/* 代替値付き */
attr(data-count number, 0);
attr(src url, "");
attr(data-width px, inherit);
attr(data-something, "default");
```

## 構文

### 値

- `attribute-name`
  - : CSS で参照する、 HTML 要素の属性名です。
- `<type-or-unit>` {{Experimental_Inline}}

  - : 属性値の型またはその単位を示すキーワードです。 HTML では暗黙に単位を持つ属性があります。属性に対して無効な値を `<type-or-unit>` で与えると、 `attr()` 式も無効になります。省略すると既定値の `string` になります。有効な値は以下の通りです。

    - `string`

      - : 属性値は CSS {{CSSxRef("&lt;string&gt;")}} として扱われます。再解析はされず、特に文字は CSS エスケープで他の文字に変換されることなく、そのまま使用されます。

        既定値は空文字列です。

    - `color` {{Experimental_Inline}}

      - : 属性値はハッシュ (3 値または 6 値のハッシュ) またはキーワードとして解析されます。妥当な CSS の {{CSSxRef("&lt;string&gt;")}} 値でなければなりません。前後の空白は除去されます。

        既定値は `currentcolor` です。

    - `url` {{Experimental_Inline}}

      - : 属性値は、 CSS の `url()` 関数の中で使用される文字列として解析されます。
        相対 URL は、スタイルシートからの相対ではなく、元の文書からの相対で解決されます。
        前後の空白は除去されます。

        既定値は、一般的なエラーの状況で存在しない文書を指す `about:invalid` の URL です。

    - `integer` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;integer&gt;")}} として解析されます。妥当ではない場合、つまり整数ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0`、または `0` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `number` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;number&gt;")}} として解析されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0`、または `0` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `length` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;length&gt;")}} の距離として単位を含んで (`12.5em` など) 解釈されます。妥当ではない場合、つまり長さではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        指定された値が相対的な長さの場合は、 `attr()` は絶対的な値に変換して計算します。<br>
        前後の空白は除去されます。

        既定値は `0`、または `0` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, or `pc` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (`12.5` など) で解析され、特定の単位を付けた {{CSSxRef("&lt;length&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        指定された値が相対的な長さの場合は、 `attr()` は絶対的な値に変換して計算します。<br>
        前後の空白は除去されます。

        既定値は `0`、または `0` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `angle` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;angle&gt;")}} の大きさとして単位を含んで (`30.5deg` など) 解釈されます。妥当ではない場合、つまり角度ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0deg`、または `0deg` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `deg`, `grad`, `rad` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (`12.5` など) で解析され、特定の単位を付けた {{CSSxRef("&lt;angle&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0deg`、または `0deg` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `time` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;time&gt;")}} の大きさとして単位を含んで (`30.5ms` など) 解釈されます。妥当ではない場合、つまり時間ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0s`、または `0s` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `s`, `ms` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (`12.5` など) で解析され、特定の単位を付けた {{CSSxRef("&lt;time&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0s`、または `0s` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `frequency` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;frequency&gt;")}} の大きさとして単位を含んで (`30.5ms` など) 解釈されます。妥当ではない場合、つまり周波数ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。

        既定値は `0Hz`、または `0Hz` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `Hz`, `kHz` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (`12.5` など) で解析され、特定の単位を付けた {{CSSxRef("&lt;frequency&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        前後の空白は除去されます。

        既定値は `0Hz`、または `0Hz` が妥当な値ではないプロパティでは、プロパティの最小値です。

    - `%` {{Experimental_Inline}}

      - : 属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (`12.5` など) で解析され、 {{CSSxRef("&lt;percentage&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。
        指定された値が長さの場合は、 `attr()` は絶対的な値に変換して計算します。
        前後の空白は除去されます。

        既定値は `0%`、または `0%` が妥当な値ではないプロパティでは、プロパティの最小値です。

- `<fallback>` {{Experimental_Inline}}
  - : 関連する属性が見つからないか、無効値を含むときに使われる値です。設定されていない場合は、 CSS は各 `<type-or-unit>` で定義された既定値を使います。

### 形式文法

{{CSSSyntax}}

## 例

<h3 id="content_property">content プロパティ</h3>

#### HTML

```html
<p data-foo="hello">world</p>
```

#### CSS

```css
[data-foo]::before {
  content: attr(data-foo) " ";
}
```

#### 結果

{{EmbedLiveSample("content_property", "100%", 50)}}

<h3 id="color_value">&lt;color&gt; 値</h3>

{{SeeCompatTable}}

#### HTML

```html
<div class="background" data-background="lime">
  background expected to be red if your browser does not support advanced usage
  of attr()
</div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background color, red);
}
```

#### 結果

{{EmbedLiveSample("color_value", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*` 属性](/ja/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` 属性](/ja/docs/Web/SVG/Attribute/data-*)
