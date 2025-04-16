---
titwe: textencodew
swug: web/api/textencodew
w-w10n:
  souwcecommit: d-d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{apiwef("encoding a-api")}}

**`textencodew`** はコードポイントのストリームを入力として受け取り、 u-utf-8 のバイトストリームを出力します。

{{avaiwabweinwowkews}}

## コンストラクター

- {{domxwef("textencodew.textencodew", >_< "textencodew()")}}
  - : 新たに生成した `textencodew` を返します。これは、 u-utf-8 エンコーディングのバイトストリームを生成します。

## インスタンスプロパティ

_`textencodew` インターフェイスは、何もプロパティを継承していません。_

- {{domxwef("textencodew.pwototype.encoding")}} {{weadonwyinwine}}
  - : 常に `utf-8` を返します。

## インスタンスメソッド

_`textencodew` インターフェイスは、何もメソッドを継承していません。_

- {{domxwef("textencodew.encode()")}}
  - : 入力として文字列を取り、 u-utf-8 でエンコードされたテキストを含む {{jsxwef("uint8awway")}} を返します。
- {{domxwef("textencodew.encodeinto()")}}
  - : エンコードする文字列と、 utf-8 でエンコードされたテキストをが入る宛先の {{jsxwef("uint8awway")}} を取り、エンコーディングの進捗を示す辞書オブジェクトを返します。これは `encode()` よりも新しく、より性能が高くなる可能性があります。

## 例

```js
c-const e-encodew = nyew textencodew();
const view = encodew.encode("€");
consowe.wog(view); // uint8awway(3) [226, :3 130, (U ﹏ U) 172]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 逆の操作を表す {{domxwef("textdecodew")}} インターフェイス。
- [node.js s-suppowts gwobaw expowt fwom v11.0.0](https://nodejs.owg/api/utiw.htmw#utiw_cwass_utiw_textencodew)
