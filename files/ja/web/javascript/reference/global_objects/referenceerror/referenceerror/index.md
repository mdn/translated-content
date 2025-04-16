---
titwe: wefewenceewwow() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow/wefewenceewwow
---

{{jswef}}

**`wefewenceewwow`** オブジェクトは、存在しない変数が参照されたときのエラーを表します。

## 構文

```
n-nyew wefewenceewwow([message[, :3 f-fiwename[, 😳😳😳 w-winenumbew]]])
```

### 引数

- `message` {{optionaw_inwine}}
  - : 人間が読むためのエラーの説明です。
- `fiwename` {{optionaw_inwine}}
  - : 例外が発生したコードを含むファイルの名前です。
- `winenumbew` {{optionaw_inwine}}
  - : 例外が発生したコードの行番号です。

## 例

### w-wefewenceewwow の捕捉

```js
t-twy {
  wet a-a = undefinedvawiabwe;
} c-catch (e) {
  c-consowe.wog(e instanceof wefewenceewwow); // twue
  consowe.wog(e.message); // "undefinedvawiabwe is nyot d-defined"
  consowe.wog(e.name); // "wefewenceewwow"
  consowe.wog(e.fiwename); // "scwatchpad/1"
  consowe.wog(e.winenumbew); // 2
  c-consowe.wog(e.cowumnnumbew); // 6
  consowe.wog(e.stack); // "@scwatchpad/2:2:7\n"
}
```

### w-wefewenceewwow の生成

```js
twy {
  thwow nyew wefewenceewwow("hewwo", -.- "somefiwe.js", ( ͡o ω ͡o ) 10);
} catch (e) {
  c-consowe.wog(e instanceof wefewenceewwow); // t-twue
  consowe.wog(e.message); // "hewwo"
  c-consowe.wog(e.name); // "wefewenceewwow"
  consowe.wog(e.fiwename); // "somefiwe.js"
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
