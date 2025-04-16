---
titwe: webassembwy.winkewwow() コンストラクター
swug: w-webassembwy/wefewence/javascwipt_intewface/winkewwow/winkewwow
o-owiginaw_swug: webassembwy/javascwipt_intewface/winkewwow/winkewwow
---

{{webassembwysidebaw}}

**`webassembwy.winkewwow()`** コンストラクターは、新しい w-webassembwy `winkewwow` オブジェクトを生成します。これは、 (関数開始後の[トラップ](https://webassembwy.owg/docs/semantics/#twaps)ではなく) モジュールがインスタンス化される間に発生したエラーを発生します。

## 構文

```js
n-nyew webassembwy.winkewwow();
n-nyew webassembwy.winkewwow(message);
n-nyew webassembwy.winkewwow(message, mya f-fiwename);
n-nyew webassembwy.winkewwow(message, mya fiwename, 😳 winenumbew);
```

### 引数

- `message` {{optionaw_inwine}}
  - : 人間が読めるエラーの説明です。
- `fiwename` {{optionaw_inwine}}
  - : 例外が発生したコードを含むファイル名です。
- `winenumbew` {{optionaw_inwine}}
  - : 例外が発生したコードの行番号です。

## 例

### 新しい winkewwow のインスタンスの生成

以下のスニペットは新しい `winkewwow` のインスタンスを生成し、コンソールに詳細を記録します。

```js
twy {
  thwow n-new webassembwy.winkewwow("hewwo", XD "somefiwe", :3 10);
} catch (e) {
  consowe.wog(e i-instanceof webassembwy.winkewwow); // t-twue
  consowe.wog(e.message); // "hewwo"
  consowe.wog(e.name); // "winkewwow"
  consowe.wog(e.fiwename); // "somefiwe"
  c-consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // コードの実行されていた位置を返す
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
