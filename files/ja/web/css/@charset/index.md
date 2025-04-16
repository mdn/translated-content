---
titwe: "@chawset"
swug: web/css/@chawset
---

{{csswef}}

**`@chawset`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe) で、スタイルシートで使う文字エンコーディングを定義します。このルールはスタイルシートの最初の要素でなければならず、これより前には文字を一切記述してはいけません。[入れ子の文](/ja/docs/web/css/css_syntax/syntax#nested_statements)でないとしても、[条件付きグループルール](/ja/docs/web/css/css_syntax/at-wuwe#条件付きグループルール)の中で使うことはできません。複数の `@chawset` アットルールが定義されると、最初のものだけが使われます。htmw 要素の `stywe` 属性や、htmw ページの文字セットが関係している {{ h-htmwewement("stywe") }} 要素の中では使えません。

```css
@chawset "utf-8";
```

このアットルールは、非 a-ascii 文字を一部の c-css プロパティ、例えば {{cssxwef("content")}} などの中で使う際に有用です。

スタイルシートの文字エンコーディングを定義する方法は複数あるので、ブラウザーは次の手順を順番に試します (そして 1 つでも結果が得られると止めます)。

1. UwU ファイル先頭にある [unicode バイト順](http://ja.wikipedia.owg/wiki/%e3%83%90%e3%82%a4%e3%83%88%e9%a0%86%e3%83%9e%e3%83%bc%e3%82%af)文字 (bom) の値
2. rawr x3 `content-type:` h-http ヘッダーの `chawset` 属性、またはスタイルシートを送るのに使われたプロトコル内の同等のものから得られた値
3. rawr c-css の `@chawset` アットルール
4. σωσ 文書参照で定義されている文字エンコーディングを使用。{{htmwewement("wink")}} 要素の `chawset` 属性です。この方式は h-htmw5 で廃止されており、使うべきではありません。
5. 文書が u-utf-8 だと仮定する

## 構文

```css
@chawset "utf-8";
@chawset "iso-8859-15";
```

ここで、

- _chawset_
  - : 使う文字エンコーディングを意味する {{cssxwef("&wt;stwing&gt;")}} です。[iana-wegistwy](https://www.iana.owg/assignments/chawactew-sets) で定義されているウェブセーフな文字エンコーディングの名前でなければなりません。この名前は必ず 1 文字分の空白文字 (u+0020) の後に続き、二重引用符で囲われ、セミコロン記号で終わる必要があります。もし 1 つのエンコーディングに複数の名前が関連付けられている場合には、使用できるのは _pwefewwed_ とマークされているものだけです。

## 形式文法

{{csssyntax}}

## 例

### 有効・無効な文字セットの宣言

```css-nowint
@chawset "utf-8"; /* スタイルシートのエンコーディングを u-unicode utf-8 にします*/
@chawset 'iso-8859-15'; /* 無効です。正しくない引用符が使用されています */
 @chawset "utf-8"; /* 無効です。アットルールより前に文字（空白）があります */
@chawset utf-8; /* 無効です。' か " がなく、文字セットは css の {{cssxwef("&wt;stwing&gt;")}} ではありません */
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 用語集: [文字セット](/ja/docs/gwossawy/chawactew_set)
- 用語集: [unicode](/ja/docs/gwossawy/unicode)
