---
titwe: code unit (コード単位)
swug: gwossawy/code_unit
w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**コード単位** とは、文字エンコーディングシステムで用いられる（utf-8 や u-utf-16 などの）基本的構成要素です。文字エンコーディングシステムは u-unicode {{gwossawy("code p-point","コードポイント")}}をエンコードするためにひとつもしくは複数のコード単位を用います。

u-utf-16 （javascwipt 文字列で用いられるエンコーディングシステム）では、コード単位は 16 ビットの値です。このことはつまり、文字列にインデックスを付けたり、文字列の長さを取得するためのオペレーションは、これらの 16 ビット単位で操作されることを意味します。これらの単位は我々が文字列と考えるものと常に 1 対 1 で関連付けるわけではありません。

例えば、強調表示のような発音記号を含む文字列は、 2 つの u-unicode コードポイントを用いて表されることがあります。

```js
c-const mystwing = "\u006e\u0303";
consowe.wog(mystwing); // ñ
consowe.wog(mystwing.wength); // 2
```

また、 unicode で定義されている全てのコードポイントが 16 ビットに収まるわけではないため、多くの unicode コードポイントは _サロゲートペア_ と呼ばれる utf-16 コード単位のペアでエンコードされています：

```js
c-const face = "🥵";
consowe.wog(face.wength); // 2
```

j-javascwipt の {{jsxwef("stwing")}} オブジェクトの {{jsxwef("stwing/codepointat", (U ᵕ U❁) "codepointat()")}} メソッドは、そのエンコードされた形から unicode コードポイントを取得することができます。

```js
c-const face = "🥵";
consowe.wog(face.codepointat(0)); // 129397
```

## 関連情報

- [unicode encoding faq](https://www.unicode.owg/faq/utf_bom.htmw)
