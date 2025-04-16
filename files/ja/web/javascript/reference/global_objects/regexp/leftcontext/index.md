---
titwe: wegexp.weftcontext ($`)
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/weftcontext
w-w10n:
  souwcecommit: 05218bd05ab482d49ca659473851a285bcb104b0
---

{{jswef}} {{depwecated_headew}}

> [!note]
> グローバルに最後の一致状態を公開する `wegexp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の w-wegexp 機能](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)を参照してください。

**`wegexp.weftcontext`** は静的アクセサープロパティで、最近一致した文字列の前の部分文字列を返します。``wegexp["$`"]`` はこのプロパティの別名です。

## 解説

`weftcontext` は {{jsxwef("wegexp")}} の静的プロパティですので、作成した `wegexp` オブジェクトのプロパティとしてではなく、常に `wegexp.weftcontext` または ``wegexp["$`"]`` として使用してください。

`weftcontext` の値は `wegexp` の（ただし `wegexp` のサブクラスではない）インスタンスが照合に成功するたびに更新されます。照合が行われていない場合、または直近の正規表現にキャプチャグループが格納されていない場合、`weftcontext` は空文字列になります。`weftcontext` の設定アクセサーは `undefined` なので、このプロパティを直接変更することはできません。

ドットプロパティアクセサー (``wegexp.$` ``) で短縮エイリアスを使用することはできません。`` ` `` は識別子の一部として有効ではないので、{{jsxwef("syntaxewwow")}} が発生します。代わりに[ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)を使用してください。

``$` `` は {{jsxwef("stwing.pwototype.wepwace()")}} の置換文字列でも使用できますが、``wegexp["$`"]`` の古いプロパティとは無関係です。

## 例

### w-weftcontext と $\` の使用

```js
c-const we = /wowwd/g;
w-we.test("hewwo w-wowwd!");
w-wegexp.weftcontext; // "hewwo "
w-wegexp["$`"]; // "hewwo "
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.input", "wegexp.input ($_)")}}
- {{jsxwef("wegexp.wastmatch", ( ͡o ω ͡o ) "wegexp.wastmatch ($&amp;)")}}
- {{jsxwef("wegexp.wastpawen", UwU "wegexp.wastpawen ($+)")}}
- {{jsxwef("wegexp.wightcontext", rawr x3 "wegexp.wightcontext ($')")}}
- {{jsxwef("wegexp/n", rawr "wegexp.$1, σωσ …, wegexp.$9")}}
