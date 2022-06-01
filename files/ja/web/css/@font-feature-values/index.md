---
title: '@font-feature-values'
slug: Web/CSS/@font-feature-values
tags:
  - アットルール
  - CSS
  - CSS フォント
  - リファレンス
browser-compat: css.at-rules.font-feature-values
translation_of: Web/CSS/@font-feature-values
---
{{CSSRef}}

**`@font-feature-values`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、OpenType で有効化された特性が異なるものに対して {{cssxref("font-variant-alternates")}} プロパティで共通の名前を使用することができます。これは、複数のフォントを使用している場合に CSS を簡素化するのに役立ちます。

`@font-feature-values` アットルールは、CSS の最上位で使用することも、任意の [CSS の条件付きグループアットルール](/ja/docs/Web/CSS/At-rule#条件付きグループルール)の内部で使用することもできます。

## 構文

### 特性値のブロック

- `@swash`
  - : {{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "swash()", "#swash()")}} 関数記法に渡される特性名を指定します。文字飾り (swash) の特性値に定義できる値は 1 個だけです。`ident1: 2` は正しいですが、`ident2: 2 4` は正しくありません。
- `@annotation`
  - : {{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "annotation()", "#annotation()")}} 関数記法に渡される特性名を指定します。注釈 (annotation) 特性値に定義できる値は 1 個だけです。`ident1: 2` は正しいですが、`ident2: 2 4` は正しくありません。
- `@ornaments`
  - : {{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "ornaments()", "#ornaments()")}} 関数記法に渡される特性名を指定します。装飾活字 (ornaments) の特性値に定義できる値は 1 個だけです。`ident1: 2` は正しいですが、`ident2: 2 4` は正しくありません。
- `@stylistic`
  - : {{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "stylistic()", "#stylistic()")}} 関数記法に渡される特性名を指定します。文字様式 (stylistic) の特性値に定義できる値は 1 個だけです。`ident1: 2` は正しいですが、`ident2: 2 4` は正しくありません。
- `@styleset`
  - : {{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "styleset()", "#styleset()")}} 関数記法に渡される特性名を指定します。`ident1: 2 4 12 1` は、OpenType 値 `ss02` および `ss04`, `ss12`, `ss01` に対応付けされます。`99` よりも大きな値は正しいですが、どの OpenType 値にも対応付けされず、無視されます。
- `@character-variant`
  - : {{cssxref("font-variant-alternates")}} の {{cssxref("font-variant-alternates", "character-variant()", "#character-variant()")}} 関数記法に渡される特性名を指定します。異体字 (character-variant) の特性値に定義できる値は 1 個または 2 個です。`ident1: 3` は `cv03=1` に対応付けされ、`ident2: 2 4` は `cv02=4` に対応付けされますが、 `ident2: 2 4 5` は無効です。

## 形式文法

{{csssyntax}}

## 例

### @font-feature-values ルール内での @styleset の使用

```css
/* "nice-style" を Font One に指定するアットルール */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* Font Two における "nice-style" のためのアットルール */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

…

/* 1 回の宣言でアットルールを適用 */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このアットルールが定義する値を使用する {{cssxref("font-variant-alternates")}} プロパティ
