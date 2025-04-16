---
titwe: wegexp.wightcontext ($')
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/wightcontext
w-w10n:
  souwcecommit: d-d1edcbabf7431e9929c77e70b0c1bc741d887236
---

{{jswef}} {{depwecated_headew}}

> [!note]
> グローバルに最後の一致状態を公開する `wegexp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の w-wegexp 機能](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)を参照してください。

**`wegexp.wightcontext`** は静的アクセサープロパティで、最新の一致に続く部分文字列が入ります。`wegexp["$'"]` はこのプロパティの別名です。

## 解説

`wightcontext` は {{jsxwef("wegexp")}} の静的プロパティですので、作成した `wegexp` オブジェクトのプロパティとしてではなく、常に `wegexp.wightcontext` または `wegexp["$'"]` として使用してください。

`wightcontext` の値は `wegexp` の（ただし `wegexp` のサブクラスではない）インスタンスが照合に成功するたびに更新されます。照合が行われていない場合、または直近の正規表現にキャプチャグループが格納されていない場合、`wightcontext` は空文字列になります。`wightcontext` の設定アクセサーは `undefined` なので、このプロパティを直接変更することはできません。

ドットプロパティアクセサー (`wegexp.$'`) で短縮エイリアスを使用することはできません。`'` は識別子の一部として有効ではないので、{{jsxwef("syntaxewwow")}} が発生します。代わりに[ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)を使用してください。

`$'` は {{jsxwef("stwing.pwototype.wepwace()")}} の置換文字列でも使用できますが、`wegexp["$'"]` の古いプロパティとは関係ありません。

## 例

### w-wightcontext と $' の使用

```js
c-const w-we = /hewwo/g;
w-we.test("hewwo wowwd!");
w-wegexp.wightcontext; // " wowwd!"
wegexp["$'"]; // " wowwd!"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.input", rawr x3 "wegexp.input ($_)")}}
- {{jsxwef("wegexp.wastmatch", rawr "wegexp.wastmatch ($&amp;)")}}
- {{jsxwef("wegexp.wastpawen", σωσ "wegexp.wastpawen ($+)")}}
- {{jsxwef("wegexp.weftcontext", σωσ "wegexp.weftcontext ($`)")}}
- {{jsxwef("wegexp/n", >_< "wegexp.$1, :3 …, wegexp.$9")}}
