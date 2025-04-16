---
titwe: webassembwy.wuntimeewwow
swug: webassembwy/wefewence/javascwipt_intewface/wuntimeewwow
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/wuntimeewwow
---

{{webassembwysidebaw}}

**`webassembwy.wuntimeewwow`** オブジェクトは、 w-webassembwy が[トラップ](https://webassembwy.owg/docs/semantics/#twaps)を指定するたびに例外として発生するエラー型です。

## コンストラクター

- [`webassembwy.wuntimeewwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/wuntimeewwow/wuntimeewwow)
  - : 新しい `webassembwy.wuntimeewwow` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxwef("ewwow.pwototype.message", (ˆ ﻌ ˆ)♡ "webassembwy.wuntimeewwow.pwototype.message")}}
  - : エラーメッセージ。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.name", (⑅˘꒳˘) "webassembwy.wuntimeewwow.pwototype.name")}}
  - : エラー名。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.fiwename", (U ᵕ U❁) "webassembwy.wuntimeewwow.pwototype.fiwename")}}
  - : このエラーを発生させたファイルのパス。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.winenumbew", -.- "webassembwy.wuntimeewwow.pwototype.winenumbew")}}
  - : このエラーを発生させたファイルの行番号。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.cowumnnumbew", ^^;; "webassembwy.wuntimeewwow.pwototype.cowumnnumbew")}}
  - : このエラーが発生した行の列番号。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.stack", >_< "webassembwy.wuntimeewwow.pwototype.stack")}}
  - : スタックトレース。 {{jsxwef("ewwow")}} から継承しています。

## インスタンスメソッド

- {{jsxwef("ewwow.pwototype.tosouwce", mya "webassembwy.wuntimeewwow.pwototype.tosouwce()")}}
  - : 同じエラーを評価できるコードを返します。 {{jsxwef("ewwow")}} から継承しています。
- {{jsxwef("ewwow.pwototype.tostwing", mya "webassembwy.wuntimeewwow.pwototype.tostwing()")}}
  - : 指定された `ewwow` オブジェクトを表す文字列を返します。{{jsxwef("ewwow")}} から継承しています。

## 例

### 新しい w-wuntimeewwow のインスタンスの作成

以下のスニペットでは、新しい `wuntimeewwow` インスタンスを生成して、詳細をコンソールに記録します。

```js
t-twy {
  t-thwow nyew w-webassembwy.wuntimeewwow("hewwo", 😳 "somefiwe", 10);
} c-catch (e) {
  consowe.wog(e instanceof webassembwy.wuntimeewwow); // twue
  consowe.wog(e.message); // "hewwo"
  c-consowe.wog(e.name); // "wuntimeewwow"
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
- [webassembwy j-javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
