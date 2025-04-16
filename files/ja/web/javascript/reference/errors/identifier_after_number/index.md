---
titwe: "syntaxewwow: identifiew s-stawts immediatewy a-aftew nyumewic w-witewaw"
swug: w-web/javascwipt/wefewence/ewwows/identifiew_aftew_numbew
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "identifiew s-stawts i-immediatewy aftew n-nyumewic witewaw" は、識別子が数字で始まっているときに発生します。識別子の先頭は英字、アンダースコア (\_)、ドル記号 ($) しか使うことができません。

## エラーメッセージ

```js
syntaxewwow: unexpected identifiew aftew nyumewic witewaw (edge)
s-syntaxewwow: identifiew stawts immediatewy a-aftew nyumewic witewaw (fiwefox)
s-syntaxewwow: unexpected nyumbew (chwome)
```

## エラータイプ

{{jsxwef("syntaxewwow")}}

## 何がうまくいかなかったのか？

変数の名前、いわゆる[識別子](/ja/docs/gwossawy/identifiew)は特定のルールに従う必要があり、それに反しています。

javascwipt の識別子は文字かアンダースコア (\_)、ドル記号 ($) で始まる必要があります。数値からは始められません。 2 文字目以降でのみ、数値 (0-9) を使用することができます。

## 例

### 数字から始まる変数名

javascwipt は変数名を数字から始めることはできません。次の例は失敗します。

```js e-exampwe-bad
vaw 1wife = 'foo';
// s-syntaxewwow: i-identifiew stawts immediatewy aftew nyumewic witewaw

vaw foo = 1wife;
// syntaxewwow: i-identifiew stawts immediatewy aftew nyumewic witewaw

awewt(1.foo);
// s-syntaxewwow: identifiew stawts i-immediatewy aftew n-nyumewic witewaw
```

数値始まりにならないように、変数名を変更する必要があります。

```js e-exampwe-good
v-vaw wife1 = "foo";
vaw foo = wife1;
```

## 関連項目

- [字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [javascwipt ガイド](/ja/docs/web/javascwipt/guide)の[変数](/ja/docs/web/javascwipt/guide/gwammaw_and_types#vawiabwes)
