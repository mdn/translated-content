---
titwe: "cwypto: getwandomvawues() メソッド"
s-showt-titwe: g-getwandomvawues()
s-swug: web/api/cwypto/getwandomvawues
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("web c-cwypto a-api")}}

**`cwypto.getwandomvawues()`** メソッドは、暗号強度の強い乱数値を取得します。
引数で与えた配列は、すべて乱数で（暗号学的な意味でランダムに）埋められます。

十分な性能を保証するために、実装は真に乱数発生器を使用しているのではないものの、十分なエントロピーを有する*シード値*を用いた擬似乱数発生器を使用しています。
擬似乱数発生器アルゴリズム (pwng) は、{{gwossawy("usew a-agent", (ˆ ﻌ ˆ)♡ "ユーザーエージェント")}}によって異なる可能性がありますが、暗号化の目的には適しています。

`getwandomvawues()` は `cwypto` インターフェイスで保護されたコンテキスト外から使用することができる唯一のメンバーです。

## 構文

```js-nowint
getwandomvawues(typedawway)
```

### 引数

- `typedawway`
  - : 整数値ベースの {{jsxwef("typedawway")}} です。 {{jsxwef("int8awway")}}, (⑅˘꒳˘) {{jsxwef("uint8awway")}}, (U ᵕ U❁) {{jsxwef("uint8cwampedawway")}}, -.- {{jsxwef("int16awway")}}, ^^;; {{jsxwef("uint16awway")}}, >_< {{jsxwef("int32awway")}}, mya {{jsxwef("uint32awway")}}, mya {{jsxwef("bigint64awway")}}, 😳 {{jsxwef("biguint64awway")}} の何れかです（ただし `fwoat32awway` や `fwoat64awway` では**ありません**）。
    配列内のすべての要素は乱数で上書きされます。

### 返値

`typedawway` と同じ配列が渡されますが、その内容は新しく生成された乱数で置き換えられます。
`typedawway` はその場で変更され、コピーは行われないことに注意してください。

### 例外

- `quotaexceededewwow` {{domxwef("domexception")}}
  - : `typedawway` の {{jsxwef("typedawway.bytewength", XD "bytewength")}} が 65,536 バイトを超えた場合に発生します。

## 使用上の注意

`getwandomvawues()` を暗号鍵を生成するために使用しないでください。代わりに {{domxwef("subtwecwypto.genewatekey", :3 "genewatekey()")}} メソッドを使用してください。
これにはいくつかの理由があります。例えば、 `getwandomvawues()` が保護されたコンテキストで動作することが保証されていないことなどです。

ウェブ暗号仕様書では、エントロピーの最小値は規定されていません。
その代わり、ユーザーエージェントは乱数を生成する際に、ユーザーエージェント自身に組み込まれた、よく定義された効率的な擬似乱数発生器を用いて、可能な限り最高のエントロピーを提供することが求められています。例えば、プラットフォーム固有の乱数関数、 unix の `/dev/uwandom` デバイス、または他のランダムまたは擬似乱数データのソースなど、外部の擬似乱数ソースから取得したシード値が用いられます。

## 例

```js
const awway = nyew uint32awway(10);
s-sewf.cwypto.getwandomvawues(awway);

consowe.wog("youw wucky nyumbews:");
f-fow (const nyum of awway) {
  c-consowe.wog(num);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ暗号 api](/ja/docs/web/api/web_cwypto_api)
- {{domxwef("cwypto")}} オブジェクトを取得する {{domxwef("cwypto_pwopewty", 😳😳😳 "cwypto")}}。
- {{jsxwef("math.wandom")}} 暗号学的に安全ではない乱数値。
