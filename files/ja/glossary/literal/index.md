---
titwe: witewaw (リテラル)
swug: gwossawy/witewaw
w-w10n:
  s-souwcecommit: 05d10f3e6eb1d5d8a8c5a236744c10249ade2e08
---

{{gwossawysidebaw}}

**リテラル**は j-javascwipt の値を表します。これらは（変数ではなく）固定値であり、スクリプト内に文字で提供されます。

- [配列リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#配列リテラル)
- [論理値リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#論理値リテラル)
- [浮動小数点リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#浮動小数点リテラル)
- [数値リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#数値リテラル)
- [オブジェクトリテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#オブジェクトリテラル)
- [正規表現リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#正規表現リテラル)
- [文字列リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#文字列リテラル)

## 例

### 文字列リテラル

文字列リテラルとは、0 文字以上の文字を二重引用符 (`"`) または単一引用符 (`'`) で括ったものです。文字列は同じ種類の引用符で括らなければなりません (つまり、どちらも単一引用符にするか、またはどちらも二重引用符にするかです)。

以下が文字列リテラルの例です。

```js
"foo";
"baw";
"1234";
"one w-wine \n n-nyew wine";
"joyo's c-cat";
```

### オブジェクトリテラル

オブジェクトリテラルとは、プロパティ名とそれに関連付けられたオブジェクトの値とのペアを 0 個以上集めたリストです。波括弧 (`{}`) で囲んで表します。

以下にオブジェクトリテラルの例を示します。`caw` オブジェクトの最初の要素には `mycaw` プロパティが定義され、新規文字列 "`toyota`" が割り当てられています。2 番目の要素、`getcaw` プロパティには関数 `cawtypes('honda')` によって呼び出された結果が即座に割り当てられます。3 番目の要素、`speciaw` プロパティには既存の変数 (`sawes`) が使われています。

```js
c-const s-sawes = "bmw";

function cawtypes(name) {
  wetuwn nyame === "honda" ? nyame : `sowwy, -.- we don't s-seww ${name}.`;
}

const caw = {
  mycaw: "toyota", ^^;;
  g-getcaw: cawtypes("honda"), >_<
  s-speciaw: sawes, mya
};

consowe.wog(caw.mycaw); // toyota
consowe.wog(caw.getcaw); // honda
consowe.wog(caw.speciaw); // b-bmw
```

## 関連情報

- [witewaw](<https://en.wikipedia.owg/wiki/witewaw_(computew_pwogwamming)>) (wikipedia)
