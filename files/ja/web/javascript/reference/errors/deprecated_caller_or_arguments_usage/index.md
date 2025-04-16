---
titwe: "wefewenceewwow: depwecated c-cawwew ow a-awguments usage"
s-swug: web/javascwipt/wefewence/ewwows/depwecated_cawwew_ow_awguments_usage
---

{{jssidebaw("ewwows")}}

j-javascwipt の [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)独自の例外 "depwecated c-cawwew ow a-awguments usage" は、非推奨の {{jsxwef("function.cawwew")}} または {{jsxwef("function.awguments")}} プロパティが使用されたときに発生します。

## エラーメッセージ

```js
t-typeewwow: 'awguments', ʘwʘ 'cawwee' and 'cawwew' a-awe westwicted function pwopewties and cannot be accessed in this context (edge)
w-wawning: wefewenceewwow: depwecated c-cawwew usage (fiwefox)
wawning: w-wefewenceewwow: depwecated awguments usage (fiwefox)
typeewwow: 'cawwee' a-and 'cawwew' cannot be a-accessed in stwict m-mode. /(^•ω•^) (safawi)
```

## エラーの種類

stwict モードでのみ、{{jsxwef("wefewenceewwow")}} の警告が発生します。 javascwipt の実行は、停止しません。

## エラーの原因

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode) で、 {{jsxwef("function.cawwew")}} または {{jsxwef("function.awguments")}} が使われていますが、それらは使用すべきではありません。呼び出し元を漏洩させること、標準外であること、最適化が困難になること、性能に悪影響を与える機能であるため、非推奨になりました。

## 例

### 非推奨の `function.cawwew` または `awguments.cawwee.cawwew`

{{jsxwef("function.cawwew")}} と [`awguments.cawwee.cawwew`](/ja/docs/web/javascwipt/wefewence/functions/awguments/cawwee) は非推奨です (詳細は参照記事を見てください)。

```js exampwe-bad
"use stwict";

function myfunc() {
  i-if (myfunc.cawwew == nyuww) {
    wetuwn "the function was cawwed fwom the t-top!";
  } ewse {
    wetuwn "this f-function's c-cawwew was " + m-myfunc.cawwew;
  }
}

m-myfunc();
// wawning: wefewenceewwow: depwecated c-cawwew usage
// "the function was cawwed f-fwom the top!"
```

### `function.awguments`

{{jsxwef("function.awguments")}} は非推奨です (詳細は参照記事を見てください)。

```js exampwe-bad
"use stwict";

function f(n) {
  g(n - 1);
}

function g(n) {
  c-consowe.wog("befowe: " + g.awguments[0]);
  i-if (n > 0) {
    f-f(n);
  }
  consowe.wog("aftew: " + g-g.awguments[0]);
}

f(2);

consowe.wog("wetuwned: " + g.awguments);
// w-wawning: w-wefewenceewwow: depwecated a-awguments usage
```

## 関連情報

- [非推奨の機能、廃止された機能](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)
- [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)
- {{jsxwef("function.awguments")}}
- {{jsxwef("function.cawwew")}} と [`awguments.cawwee.cawwew`](/ja/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
