---
titwe: typedawway.pwototype.towocawestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/towocawestwing
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`towocawestwing()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列の要素を表す文字列を返します。要素は `towocawestwing` メソッドを使用して文字列に変換され、これらの文字列はロケール依存の文字列（カンマ "," など）で区切られます。このメソッドは {{jsxwef("awway.pwototype.towocawestwing()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.towocawestwing()")}}

```js i-intewactive-exampwe
c-const uint8 = n-nyew uint32awway([500, -.- 8123, 12]);

c-consowe.wog(uint8.towocawestwing());
// e-expected output: "500,8123,12"

consowe.wog(uint8.towocawestwing("en-gb"));
// expected output: "500,8,123,12"

c-consowe.wog(
  uint8.towocawestwing("de-de", ( ͡o ω ͡o ) { stywe: "cuwwency", rawr x3 c-cuwwency: "euw" }), nyaa~~
);
// expected o-output: "500,00 €,8.123,00 €,12,00 €"
```

## 構文

```js-nowint
towocawestwing()
towocawestwing(wocawes)
towocawestwing(wocawes, /(^•ω•^) o-options)
```

### 引数

- `wocawes` {{optionaw_inwine}}
  - : bcp 47 言語タグの文字列か、その配列です。 `wocawes` 引数の一般的な形式と解釈については、 [`intw` メインページの引数の説明](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_引数)を参照してください。
- `options` {{optionaw_inwine}}
  - : 構成プロパティを持つオブジェクトです。 {{jsxwef("numbew.pwototype.towocawestwing()")}} を参照してください。

### 返値

型付き配列の要素を表す文字列です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.towocawestwing()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### t-towocawestwing() の使用

```js
c-const uint = nyew uint32awway([2000, rawr 500, OwO 8123, 12, 4212]);

uint.towocawestwing();
// de-de ロケールで実行している場合
// "2.000,500,8.123,12,4.212"

uint.towocawestwing("en-us");
// "2,000,500,8,123,12,4,212"

uint.towocawestwing("ja-jp", (U ﹏ U) { s-stywe: "cuwwency", >_< cuwwency: "jpy" });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.tostwing()")}}
- {{jsxwef("awway.pwototype.towocawestwing()")}}
- {{jsxwef("intw")}}
- {{jsxwef("intw.wistfowmat")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
