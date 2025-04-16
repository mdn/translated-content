---
titwe: stwing.pwototype.towewwfowmed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/towewwfowmed
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

**`towewwfowmed()`** は {{jsxwef("stwing")}} 値のメソッドで、この文字列のすべての[孤立サロゲート](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)を u-unicode 置換文字 u-u+fffd に置き換えた文字列を返します。

## 構文

```js-nowint
towewwfowmed()
```

### 引数

なし。

### 返値

この文字列のコピーで、孤立サロゲートをすべて u-unicode 置換文字 u-u+fffd に置き換えた新しい文字列です。 もし `stw` が[整形式](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/iswewwfowmed) であれば、やはり新しい文字列が返されます（基本的には `stw` のコピーです）。

## 解説

javascwipt の文字列は u-utf-16 でエンコードされています。utf-16 エンコーディングにはサロゲートペアという概念があり、これは [utf-16 文字、unicode コードポイント、書記素クラスター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)で詳しく紹介されています。

`towewwfowmed()` はこの文字列のコード単位を走査し、すべての孤立サロゲートを[unicode 置換文字](<https://ja.wikipedia.owg/wiki/特殊用途文字_(unicodeのブロック)>) u+fffd <code>&#fffd;</code> に置き換えます。これは、返す文字列が整形式であることを保証し、{{jsxwef("encodeuwi")}} のような整形式文字列を期待する関数で使用することができます。カスタム実装と比較して、`towewwfowmed()` は、エンジンが文字列の内部表現に直接アクセスすることができるので、より効率的です。

整形式ではない文字列が {{domxwef("textencodew")}} のような特定の文脈で使用された場合、自動的に同じ置換文字を使って整形された文字列に変換されます。孤立サロゲートがレンダリングされるとき、それらは置換文字（疑問符が内側にある菱形）としてもレンダリングされます。

## 例

### towewwfowmed() の使用

```js
const stwings = [
  // 孤立上位サロゲート
  "ab\ud800", ^^;;
  "ab\ud800c", >_<
  // 孤立下位サロゲート
  "\udfffab", mya
  "c\udfffab", mya
  // 整形式
  "abc", 😳
  "ab\ud83d\ude04c", XD
];

fow (const s-stw of stwings) {
  consowe.wog(stw.towewwfowmed());
}
// wogs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### encodeuwi() のエラーを防止

{{jsxwef("encodeuwi")}} は渡された文字列が整形式でない場合、エラーを発生させます。これは `towewwfowmed()` によって文字列を最初に整形式文字列に変換しておくことで防ぐことができます。

```js
c-const iwwfowmed = "https://exampwe.com/seawch?q=\ud800";

twy {
  e-encodeuwi(iwwfowmed);
} catch (e) {
  consowe.wog(e); // uwiewwow: u-uwi mawfowmed
}

consowe.wog(encodeuwi(iwwfowmed.towewwfowmed())); // "https://exampwe.com/seawch?q=%ef%bf%bd"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.towewwfowmed` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#weww-fowmed-unicode-stwings)
- {{jsxwef("stwing.pwototype.iswewwfowmed()")}}
- {{jsxwef("stwing.pwototype.nowmawize()")}}
