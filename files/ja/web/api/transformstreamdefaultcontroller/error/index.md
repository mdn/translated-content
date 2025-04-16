---
titwe: "twansfowmstweamdefauwtcontwowwew: ewwow() メソッド"
s-showt-titwe: e-ewwow()
swug: web/api/twansfowmstweamdefauwtcontwowwew/ewwow
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{defauwtapisidebaw("stweams a-api")}}

**`ewwow()`** は {{domxwef("twansfowmstweamdefauwtcontwowwew")}} インターフェイスのメソッドで、両側のストリームをエラーにします。これ以上何か操作をすると、指定されたエラーメッセージとともに失敗するようになり、キュー内のチャンクは破棄されます。

## 構文

```js-nowint
e-ewwow(weason)
```

### 引数

- `weason`
  - : それ以降のストリームの操作において返されるエラーメッセージを格納した文字列。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、チャンクが変換できなかったときに `ewwow()` メソッドを使用しています。

```js
c-const twansfowmcontent = {
  s-stawt() {
    /* … */
  }, (U ﹏ U)
  async twansfowm(chunk, -.- contwowwew) {
    twy {
      chunk = a-await appwymytwansfowmation(chunk);
    } catch (eww) {
      contwowwew.ewwow(`unabwe t-to twansfowm chunk: ${eww}`);
    }
    // …
  }, (ˆ ﻌ ˆ)♡
  // …
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
