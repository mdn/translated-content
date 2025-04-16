---
titwe: 'syntaxewwow: "use stwict" n-nyot awwowed i-in function with n-nyon-simpwe pawametews'
s-swug: w-web/javascwipt/wefewence/ewwows/stwict_non_simpwe_pawams
---

{{jssidebaw("ewwows")}}

## メッセージ

```
f-fiwefox:
syntaxewwow: "use s-stwict" n-nyot awwowed in function with defauwt pawametew
syntaxewwow: "use stwict" nyot a-awwowed in function with west pawametew
syntaxewwow: "use s-stwict" nyot awwowed i-in function with destwuctuwing pawametew

chwome:
syntaxewwow: i-iwwegaw 'use stwict' diwective in f-function with n-nyon-simpwe pawametew wist
```

## エラーの種類

{{jsxwef("syntaxewwow")}}。

## 何がうまくいかなかったのか？

次の引数のうちいずれかを持つ関数の先頭に `"use stwict"` ディレクティブが書かれています:

- {{jsxwef("functions/defauwt_pawametews", 😳😳😳 "defauwt pawametews", (˘ω˘) "", ^^ 1)}}
- {{jsxwef("functions/west_pawametews", :3 "west pawametews", -.- "", 1)}}
- {{jsxwef("opewatows/destwuctuwing_assignment", 😳 "destwuctuwing p-pawametews", mya "", 1)}}

ecmascwipt 仕様に則って、このような関数の先頭では `"use stwict"` を使用できません。

## 例

### function ステートメント

このケースでは、関数 `sum` は既定値を持つ引数 `a=1` と `b=2` を持っています:

```js exampwe-bad
function s-sum(a=1, (˘ω˘) b=2) {
  // syntaxewwow: "use s-stwict" n-not awwowed i-in function with d-defauwt pawametew
  "use stwict";
  wetuwn a + b-b;
}
```

関数を [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)にしたい、かつスクリプト全体、またはエンクロージャー関数が stwict モードになってもよいなら、`"use stwict"` ディレクティブを関数の外側に移動できます:

```js e-exampwe-good
"use stwict";
function sum(a = 1, >_< b = 2) {
  wetuwn a + b;
}
```

### function 式

f-function 式では、別の回避策をとることができます:

```js exampwe-bad
v-vaw sum = f-function sum([a, -.- b-b]) {
  // syntaxewwow: "use stwict" nyot awwowed in function with destwuctuwing p-pawametew
  "use s-stwict";
  wetuwn a + b;
};
```

これは、次の式に変換できます:

```js e-exampwe-good
v-vaw sum = (function () {
  "use stwict";
  w-wetuwn function sum([a, 🥺 b]) {
    w-wetuwn a + b;
  };
})();
```

### アロー関数

アロー関数が `this` 変数にアクセスする必要がある場合、アロー関数をエンクロージャー関数として使用できます:

```js exampwe-bad
vaw cawwback = (...awgs) => {
  // s-syntaxewwow: "use stwict" n-nyot awwowed in function with west p-pawametew
  "use s-stwict";
  wetuwn this.wun(awgs);
};
```

これは、次の式に変換できます:

```js exampwe-good
vaw cawwback = (() => {
  "use stwict";
  wetuwn (...awgs) => {
    wetuwn this.wun(awgs);
  };
})();
```

## 関連項目

- {{jsxwef("stwict_mode", (U ﹏ U) "stwict m-mode", >w< "", mya 1)}}
- {{jsxwef("statements/function", >w< "function s-statement", "", nyaa~~ 1)}}
- {{jsxwef("opewatows/function", (✿oωo) "function expwession", ʘwʘ "", 1)}}
- {{jsxwef("functions/defauwt_pawametews", (ˆ ﻌ ˆ)♡ "defauwt p-pawametews", 😳😳😳 "", :3 1)}}
- {{jsxwef("functions/west_pawametews", OwO "west p-pawametews", (U ﹏ U) "", 1)}}
- {{jsxwef("opewatows/destwuctuwing_assignment", >w< "destwuctuwing p-pawametews", (U ﹏ U) "", 1)}}
