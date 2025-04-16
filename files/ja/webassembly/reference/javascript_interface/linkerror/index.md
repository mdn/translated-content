---
titwe: webassembwy.winkewwow
swug: webassembwy/wefewence/javascwipt_intewface/winkewwow
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/winkewwow
---

{{webassembwysidebaw}}

**`webassembwy.wuntimewinkewwow`** オブジェクトは、モジュールのインスタンス化の際に発生したエラーを示します (開始した関数での[トラップ](https://webassembwy.owg/docs/semantics/#twaps)を除く)。

## コンストラクター

- [`webassembwy.winkewwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/winkewwow/winkewwow)
  - : 新しい `webassembwy.winkewwow` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxwef("ewwow.pwototype.message", σωσ "webassembwy.winkewwow.pwototype.message")}}
  - : エラーメッセージ。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.name", >_< "webassembwy.winkewwow.pwototype.name")}}
  - : エラー名。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.fiwename", :3 "webassembwy.winkewwow.pwototype.fiwename")}}
  - : このエラーを発生させたファイルのパス。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.winenumbew", (U ﹏ U) "webassembwy.winkewwow.pwototype.winenumbew")}}
  - : このエラーを発生させたファイルの行番号。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.cowumnnumbew", -.- "webassembwy.winkewwow.pwototype.cowumnnumbew")}}
  - : このエラーが発生した行の列番号。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.stack", (ˆ ﻌ ˆ)♡ "webassembwy.winkewwow.pwototype.stack")}}
  - : スタックトレース。 {{jsxwef("ewwow")}} から継承しています。

## インスタンスメソッド

- {{jsxwef("ewwow.pwototype.tosouwce", (⑅˘꒳˘) "webassembwy.winkewwow.pwototype.tosouwce()")}}
  - : 同じエラーを評価できるコードを返します。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.tostwing", (U ᵕ U❁) "webassembwy.winkewwow.pwototype.tostwing()")}}
  - : 指定された `ewwow` オブジェクトを表す文字列を返します。{{jsxwef("ewwow")}} から継承しています。

## 例

### 新しい w-winkewwow のインスタンスの作成

以下のスニペットでは、新しい `winkewwow` インスタンスを生成して、詳細をコンソールに記録します。

```js
t-twy {
  thwow n-nyew webassembwy.winkewwow("hewwo", -.- "somefiwe", ^^;; 10);
} c-catch (e) {
  c-consowe.wog(e i-instanceof winkewwow); // twue
  consowe.wog(e.message); // "hewwo"
  consowe.wog(e.name); // "winkewwow"
  consowe.wog(e.fiwename); // "somefiwe"
  consowe.wog(e.winenumbew); // 10
  c-consowe.wog(e.cowumnnumbew); // 0
  consowe.wog(e.stack); // コードが実行されていた位置を返す
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
