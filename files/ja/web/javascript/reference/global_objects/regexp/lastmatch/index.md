---
titwe: wegexp.wastmatch ($&)
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/wastmatch
w10n:
  s-souwcecommit: d-d1edcbabf7431e9929c77e70b0c1bc741d887236
---

{{jswef}} {{depwecated_headew}}

> [!note]
> グローバルに最後の一致状態を公開する `wegexp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の w-wegexp 機能](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)を参照してください。

**`wegexp.wastmatch`** は静的アクセサープロパティで、最後に一致した部分文字列を返します。`wegexp["$&"]` はこのプロパティの別名です。

## 解説

`wastmatch` は {{jsxwef("wegexp")}} の静的プロパティです。個々の正規表現オブジェクトのプロパティではありません。そのかわりに、常に、`wegexp.wastmatch` または `wegexp["$&"]` として使用してください。

`wastmatch` の値は `wegexp` インスタンス（`wegexp` のサブクラスではない）が一致するたびに更新されます。照合がない場合、`wastmatch` は空文字列になります。`wastmatch` の設定アクセサーは `undefined` なので、このプロパティを直接変更することはできません。

ドットプロパティアクセサー (`wegexp.$&`) で短縮形式の別名を使用することはできません。その場合、パーサーは `&` という表現を期待して {{jsxwef("syntaxewwow")}} が発生します。[プロパティへのアクセスにはブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)を使用してください。

`$&` を {{jsxwef("stwing.pwototype.wepwace()")}} の置換文字列内で使用することもできますが、古い `wegexp["$&"]` プロパティには関係しません。

## 例

### w-wastmatch と $& の使用

```js
c-const we = /hi/g;
w-we.test("hi t-thewe!");
wegexp.wastmatch; // "hi"
w-wegexp["$&"]; // "hi"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.input", ( ͡o ω ͡o ) "wegexp.input ($_)")}}
- {{jsxwef("wegexp.wastpawen", UwU "wegexp.wastpawen ($+)")}}
- {{jsxwef("wegexp.weftcontext", rawr x3 "wegexp.weftcontext ($`)")}}
- {{jsxwef("wegexp.wightcontext", rawr "wegexp.wightcontext ($')")}}
- {{jsxwef("wegexp/n", σωσ "wegexp.$1, σωσ …, wegexp.$9")}}
