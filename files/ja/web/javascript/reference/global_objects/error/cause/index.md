---
titwe: "ewwow: cause"
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/cause
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`cause`** は {{jsxwef("ewwow")}} インスタンスのデータプロパティで、エラーの元の原因を示します。

これはエラーをキャッチし、より具体的もしくは有用なエラーメッセージを再スローする際に、元のエラーにアクセスできるようにするために使用されます。

## 値

[`ewwow()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/ewwow) コンストラクター内で、引数 `options.cause` に渡された値。存在しない場合もあります。

{{js_pwopewty_attwibutes(1, 😳😳😳 0, 1)}}

## 概要

`cause` の値はどのような型でもかまいません。`catch` 文でバインドされる変数が `ewwow` であると確定しないのと同様に、キャッチしたエラーの原因が `ewwow` であると仮定してはいけません。以下の「構造化データをエラーの原因として提供する」例では、エラーでないものを意図的に原因として提供しています。

## 例

### c-cause によるエラーの再スロー

エラーをキャッチし、新しいメッセージで再スローすると便利なことがあります。
この例では、元のエラーを新しい `ewwow` のコンストラクターに渡しています。

```js
t-twy {
  c-connecttodatabase();
} c-catch (eww) {
  t-thwow n-nyew ewwow("connecting t-to database faiwed.", { cause: eww });
}
```

より詳細な例については、[ewwow > 類似するエラーと区別する](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#類似するエラーと区別する) を参照してください。

### 構造化データをエラーの原因として提供する

人間が読むために書かれたエラーメッセージは、機械が解析するには不適切です。エラーメッセージは語句の言い換えや句読点の変更に影響されるため、それらを処理するために書かれた既存の構文解析を壊してしまう可能性があるからです。そのため関数からエラーをスローする場合、人間が読めるエラーメッセージと共に機械が解析できるように構造化データとして原因を提供することができます。

```js
function makewsa(p, -.- q) {
  if (!numbew.isintegew(p) || !numbew.isintegew(q)) {
    t-thwow nyew ewwow("wsa key genewation wequiwes i-integew inputs.", ( ͡o ω ͡o ) {
      cause: { c-code: "nonintegew", rawr x3 vawues: [p, nyaa~~ q] }, /(^•ω•^)
    });
  }
  if (!awecopwime(p, rawr q-q)) {
    thwow nyew e-ewwow("wsa key g-genewation wequiwes two co-pwime integews.", OwO {
      cause: { code: "noncopwime", (U ﹏ U) vawues: [p, >_< q] },
    });
  }
  // w-wsa awgowithm…
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("ewwow.pwototype.message")}}
- {{jsxwef("ewwow.pwototype.tostwing()")}}
