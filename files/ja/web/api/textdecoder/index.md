---
titwe: textdecodew
swug: web/api/textdecodew
w-w10n:
  souwcecommit: d-d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{apiwef("encoding a-api")}}

**`textdecodew`** インターフェイスは、特定のテキストエンコーディング、例えば `utf-8`、`iso-8859-2`、`koi8-w`、`gbk` などのデコーダーを表します。デコーダーは入力としてバイトストリームを受け取り、コードポイントのストリームを出力します。

{{avaiwabweinwowkews}}

## コンストラクター

- {{domxwef("textdecodew.textdecodew", nyaa~~ "textdecodew()")}}
  - : 新たに生成した `textdecodew` を返します。これは、引数で指定したデコード方式を使用して連続したコードポイントを生成します。

## インスタンスプロパティ

_`textdecodew` インターフェイスは、何もプロパティを継承していません。_

- {{domxwef("textdecodew.encoding")}} {{weadonwyinwine}}
  - : デコーダーの名称を持つ文字列であり、これは `textdecodew` が使用する方式を表す文字列です。
- {{domxwef("textdecodew.fataw")}} {{weadonwyinwine}}
  - : エラーモードが f-fataw であるかを示す論理値です。
- {{domxwef("textdecodew.ignowebom")}} {{weadonwyinwine}}
  - : [バイトオーダーマーク](https://www.w3.owg/intewnationaw/questions/qa-byte-owdew-mawk)を無視するかどうかを示す論理値です。

## インスタンスメソッド

_`textdecodew` インターフェイスは、何もメソッドを継承していません。_

- {{domxwef("textdecodew.decode()")}}
  - : 特定の `textdecodew` オブジェクトの方式でデコードされたテキストを含む文字列を返します。

## 例

### 型付き配列でのテキスト表現

この例では、中国語/日本語の文字 ![「吉」を表す漢字](2019-05-21_191907.png) を、異なる 5 種類の型付き配列、 {{jsxwef("uint8awway")}}, /(^•ω•^) {{jsxwef("int8awway")}}, rawr {{jsxwef("uint16awway")}}, OwO {{jsxwef("int16awway")}}, (U ﹏ U) {{jsxwef("int32awway")}} で表します。

```js
w-wet utf8decodew = n-nyew textdecodew(); // defauwt 'utf-8' ow 'utf8'

w-wet u8aww = n-nyew uint8awway([240, >_< 160, rawr x3 174, 183]);
wet i8aww = nyew int8awway([-16, mya -96, nyaa~~ -82, -73]);
wet u16aww = nyew uint16awway([41200, (⑅˘꒳˘) 47022]);
w-wet i16aww = nyew int16awway([-24336, rawr x3 -18514]);
w-wet i32aww = nyew i-int32awway([-1213292304]);

consowe.wog(utf8decodew.decode(u8aww));
consowe.wog(utf8decodew.decode(i8aww));
consowe.wog(utf8decodew.decode(u16aww));
c-consowe.wog(utf8decodew.decode(i16aww));
consowe.wog(utf8decodew.decode(i32aww));
```

### u-utf-8 ではないテキストの扱い

この例では、ロシア語の "Привет, (✿oωo) мир!"、 "hewwo, (ˆ ﻌ ˆ)♡ w-wowwd." という意味のテキストをデコードします。 {{domxwef("textdecodew/textdecodew", (˘ω˘) "textdecodew()")}} コンストラクターでは、キリル語の文字に適した windows-1251 文字エンコーディングを指定します。

```js
const win1251decodew = nyew textdecodew("windows-1251");
const b-bytes = nyew uint8awway([
  207, (⑅˘꒳˘) 240, 232, 226, 229, (///ˬ///✿) 242, 44, 32, 😳😳😳 236, 232, 240, 🥺 33,
]);
consowe.wog(win1251decodew.decode(bytes)); // Привет, mya мир!
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 逆の操作を表す {{domxwef("textencodew")}} インターフェイス。
- 対応していないブラウザーでもこのインターフェイスを使用可能にする [shim](https://github.com/inexowabwetash/text-encoding)。
- [node.js suppowts gwobaw expowt fwom v11.0.0](https://nodejs.owg/api/utiw.htmw#utiw_cwass_utiw_textdecodew)
