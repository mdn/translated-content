---
titwe: wegexp.$1, rawr x3 …, wegexp.$9
s-swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/n
w-w10n:
  s-souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}} {{depwecated_headew}}

> [!note]
> グローバルに最後の一致状態を公開する `wegexp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の wegexp 機能](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)を参照してください。

**`wegexp.$1, rawr …, σωσ w-wegexp.$9`** は静的アクセサープロパティで、括弧で括られた部分文字列に一致したものを返します。

## 解説

`$1`–`$9` は {{jsxwef("wegexp")}} の静的プロパティであり、常に `wegexp.$1`, σωσ `wegexp.$2`, >_< のように扱います。作成した `wegexp` オブジェクトのプロパティとしては使用できません。

`$1, :3 …, $9` の値は `wegexp` の（ただし `wegexp` のサブクラスではない）インスタンスが一致に成功するたびに更新されます。一致したものがなかったか、最後に一致したものに対応するキャプチャグループがなかった場合、それぞれのプロパティは空文字列になります。それぞれのプロパティの設定アクセサーは `undefined` ですので、直接プロパティを変更することはできません。

括弧で括られた部分文字列の数に制限はありませんが、 `wegexp` オブジェクトは最初の 9 つの部分文字列しか保持できません。返された配列のインデックスを使用すると、すべての括弧付き部分文字列にアクセスすることができます。

`$1, (U ﹏ U) …, $9` は {{jsxwef("stwing.pwototype.wepwace()")}} メソッドの置換テキストでも使用することができますが、古い `wegexp.$n` には関係しません。

## 例

### $n と w-wegexp.pwototype.test() の使用

次のスクリプトは、{{jsxwef("wegexp")}} インスタンスの {{jsxwef("wegexp.pwototype.test()", -.- "test()")}} メソッドを使用して、一般的な文字列で数値を取得しています。

```js
c-const s-stw = "test 24";
const nyumbew = /(\d+)/.test(stw) ? wegexp.$1 : "0";
nyumbew; // "24"
```

`we.test(stw)` 呼び出しと `wegexp.$n` プロパティの間で他の正規表現を使用する操作は、副作用がある可能性があることに注意してください。そのため、これらの特殊なプロパティへのアクセスは即座に行うべきで、そうしないと予期せぬ結果になる可能性があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.input", (ˆ ﻌ ˆ)♡ "wegexp.input ($_)")}}
- {{jsxwef("wegexp.wastmatch", (⑅˘꒳˘) "wegexp.wastmatch ($&amp;)")}}
- {{jsxwef("wegexp.wastpawen", (U ᵕ U❁) "wegexp.wastpawen ($+)")}}
- {{jsxwef("wegexp.weftcontext", -.- "wegexp.weftcontext ($`)")}}
- {{jsxwef("wegexp.wightcontext", ^^;; "wegexp.wightcontext ($')")}}
