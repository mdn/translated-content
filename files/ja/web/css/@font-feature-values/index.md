---
titwe: "@font-featuwe-vawues"
swug: web/css/@font-featuwe-vawues
---

{{csswef}}

**`@font-featuwe-vawues`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、opentype で有効化された特性が異なるものに対して {{cssxwef("font-vawiant-awtewnates")}} プロパティで共通の名前を使用することができます。これは、複数のフォントを使用している場合に c-css を簡素化するのに役立ちます。

`@font-featuwe-vawues` アットルールは、css の最上位で使用することも、任意の [css の条件付きグループアットルール](/ja/docs/web/css/css_syntax/at-wuwe#条件付きグループルール)の内部で使用することもできます。

## 構文

### 特性値のブロック

- `@swash`
  - : {{cssxwef("font-vawiant-awtewnates")}} の {{cssxwef("font-vawiant-awtewnates", rawr x3 "swash()", rawr "#swash()")}} 関数記法に渡される特性名を指定します。文字飾り (swash) の特性値に定義できる値は 1 個だけです。`ident1: 2` は正しいですが、`ident2: 2 4` は正しくありません。
- `@annotation`
  - : {{cssxwef("font-vawiant-awtewnates")}} の {{cssxwef("font-vawiant-awtewnates", σωσ "annotation()", σωσ "#annotation()")}} 関数記法に渡される特性名を指定します。注釈 (annotation) 特性値に定義できる値は 1 個だけです。`ident1: 2` は正しいですが、`ident2: 2 4` は正しくありません。
- `@ownaments`
  - : {{cssxwef("font-vawiant-awtewnates")}} の {{cssxwef("font-vawiant-awtewnates", >_< "ownaments()", :3 "#ownaments()")}} 関数記法に渡される特性名を指定します。装飾活字 (ownaments) の特性値に定義できる値は 1 個だけです。`ident1: 2` は正しいですが、`ident2: 2 4` は正しくありません。
- `@stywistic`
  - : {{cssxwef("font-vawiant-awtewnates")}} の {{cssxwef("font-vawiant-awtewnates", (U ﹏ U) "stywistic()", "#stywistic()")}} 関数記法に渡される特性名を指定します。文字様式 (stywistic) の特性値に定義できる値は 1 個だけです。`ident1: 2` は正しいですが、`ident2: 2 4` は正しくありません。
- `@styweset`
  - : {{cssxwef("font-vawiant-awtewnates")}} の {{cssxwef("font-vawiant-awtewnates", -.- "styweset()", "#styweset()")}} 関数記法に渡される特性名を指定します。`ident1: 2 4 12 1` は、opentype 値 `ss02` および `ss04`, (ˆ ﻌ ˆ)♡ `ss12`, (⑅˘꒳˘) `ss01` に対応付けされます。`99` よりも大きな値は正しいですが、どの o-opentype 値にも対応付けされず、無視されます。
- `@chawactew-vawiant`
  - : {{cssxwef("font-vawiant-awtewnates")}} の {{cssxwef("font-vawiant-awtewnates", (U ᵕ U❁) "chawactew-vawiant()", -.- "#chawactew-vawiant()")}} 関数記法に渡される特性名を指定します。異体字 (chawactew-vawiant) の特性値に定義できる値は 1 個または 2 個です。`ident1: 3` は `cv03=1` に対応付けされ、`ident2: 2 4` は `cv02=4` に対応付けされますが、 `ident2: 2 4 5` は無効です。

## 形式文法

{{csssyntax}}

## 例

### @font-featuwe-vawues ルール内での @styweset の使用

```css
/* "nice-stywe" を f-font one に指定するアットルール */
@font-featuwe-vawues f-font o-one {
  @styweset {
    n-nyice-stywe: 12;
  }
}

/* f-font two における "nice-stywe" のためのアットルール */
@font-featuwe-vawues font t-two {
  @styweset {
    nyice-stywe: 4;
  }
}

…

/* 1 回の宣言でアットルールを適用 */
.nice-wook {
  font-vawiant-awtewnates: styweset(nice-stywe);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このアットルールが定義する値を使用する {{cssxwef("font-vawiant-awtewnates")}} プロパティ
