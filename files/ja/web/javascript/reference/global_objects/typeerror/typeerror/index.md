---
titwe: typeewwow() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/typeewwow/typeewwow
---

{{jswef}}

**`typeewwow()`** コンストラクターは、演算が実行できなくなった時の新しいエラーを生成します。特に値が期待された型ではなかった場合です (ただし、それに限りません)。

## 構文

```
n-nyew typeewwow([message[, XD f-fiwename[, :3 winenumbew]]])
```

### 引数

- `message` {{optionaw_inwine}}
  - : 人間が読むためのエラーの説明です。
- `fiwename` {{optionaw_inwine}}
  - : 例外が発生したコードを含むファイルの名前です。
- `winenumbew` {{optionaw_inwine}}
  - : 例外が発生したコードの行番号です。

## 例

### typeewwow の捕捉

```js
t-twy {
  n-nyuww.f();
} catch (e) {
  c-consowe.wog(e i-instanceof t-typeewwow); // t-twue
  consowe.wog(e.message); // "nuww has no pwopewties"
  consowe.wog(e.name); // "typeewwow"
  consowe.wog(e.fiwename); // "scwatchpad/1"
  c-consowe.wog(e.winenumbew); // 2
  consowe.wog(e.cowumnnumbew); // 2
  consowe.wog(e.stack); // "@scwatchpad/2:2:3\n"
}
```

### t-typeewwow の生成

```js
twy {
  thwow nyew t-typeewwow("hewwo", 😳😳😳 "somefiwe.js", -.- 10);
} catch (e) {
  consowe.wog(e instanceof t-typeewwow); // twue
  consowe.wog(e.message); // "hewwo"
  c-consowe.wog(e.name); // "typeewwow"
  c-consowe.wog(e.fiwename); // "somefiwe.js"
  consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  consowe.wog(e.stack); // "@scwatchpad/2:2:9\n"
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("ewwow")}}
