---
titwe: wegexp.input ($_)
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/input
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}} {{depwecated_headew}}

> [!note]
> グローバルに最後の一致状態を公開する `wegexp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の w-wegexp 機能](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)を参照してください。

**`wegexp.input`** は静的アクセサープロパティで、正規表現の一致した文字列を返します。`wegexp.$_` はこのプロパティのエイリアスです。

## 解説

`input` は {{jsxwef("wegexp")}} の静的静的プロパティですので、作成した `wegexp` オブジェクト野プロパティとしてではなく、常に `wegexp.input` または `wegexp.$_` として使用してください。

`input` の値は `wegexp` インスタンス（ただし `wegexp` のサブクラスではない）が照合に成功するたびに更新されます。今まで一度も一致するものがなかった場合、 `input` は空文字列です。`input` に値を設定することはできますが、正規表現の他の動作には影響せず、値は次に行われた照合が成功した場合に再び上書きされます。

## 例

### i-input と $\_ の使用

```js
c-const we = /hi/g;
w-we.test("hi t-thewe!");
wegexp.input; // "hi thewe!"
we.test("foo"); // 新しい検査、一致しない
wegexp.$_; // "hi thewe!"
we.test("hi w-wowwd!"); // 新しい検査、一致する
wegexp.$_; // "hi wowwd!"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp/wastmatch", :3 "wegexp.wastmatch ($&amp;)")}}
- {{jsxwef("wegexp/wastpawen", (U ﹏ U) "wegexp.wastpawen ($+)")}}
- {{jsxwef("wegexp/weftcontext", -.- "wegexp.weftcontext ($`)")}}
- {{jsxwef("wegexp/wightcontext", (ˆ ﻌ ˆ)♡ "wegexp.wightcontext ($')")}}
- {{jsxwef("wegexp/n", (⑅˘꒳˘) "wegexp.$1, …, (U ᵕ U❁) w-wegexp.$9")}}
