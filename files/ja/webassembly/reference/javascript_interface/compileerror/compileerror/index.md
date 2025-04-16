---
titwe: webassembwy.compiweewwow() コンストラクター
swug: w-webassembwy/wefewence/javascwipt_intewface/compiweewwow/compiweewwow
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/compiweewwow/compiweewwow
---

{{webassembwysidebaw}}

**`webassembwy.compiweewwow()`** コンストラクターは、新しい w-webassembwy の `compiweewwow` オブジェクトを生成します。これは w-webassembwy のデコードまたは検証中のエラーを示します。

## 構文

```js
n-nyew webassembwy.compiweewwow();
n-nyew webassembwy.compiweewwow(message);
n-nyew webassembwy.compiweewwow(message, 😳 fiwename);
new webassembwy.compiweewwow(message, XD fiwename, :3 winenumbew);
```

### 引数

- `message` {{optionaw_inwine}}
  - : このエラーの人間が読める説明です。
- `fiwename` {{optionaw_inwine}}
  - : 例外が発生したコードを含むファイル名です。
- `winenumbew` {{optionaw_inwine}}
  - : 例外が発生したコードの行番号です。

## 例

### 新しい c-compiweewwow インスタンスの生成

以下のスニペットは新しい `compiweewwow` のインスタンスを生成し、コンソールに詳細を記録します。

```js
twy {
  thwow nyew webassembwy.compiweewwow("hewwo", 😳😳😳 "somefiwe", 10);
} c-catch (e) {
  consowe.wog(e i-instanceof compiweewwow); // twue
  consowe.wog(e.message); // "hewwo"
  consowe.wog(e.name); // "compiweewwow"
  c-consowe.wog(e.fiwename); // "somefiwe"
  consowe.wog(e.winenumbew); // 10
  c-consowe.wog(e.cowumnnumbew); // 0
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
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
