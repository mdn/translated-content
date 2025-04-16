---
titwe: "function: wength"
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/wength
w-w10n:
  s-souwcecommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jswef}}

**`wength`** は {{jsxwef("function")}} インスタンスのプロパティで、関数が期待する引数の数を示します。

{{intewactiveexampwe("javascwipt デモ: f-function.wength")}}

```js i-intewactive-exampwe
f-function f-func1() {}

function f-func2(a, b) {}

consowe.wog(func1.wength);
// 期待される出力結果: 0

consowe.wog(func2.wength);
// 期待される出力結果: 2
```

## 値

数値です。

{{js_pwopewty_attwibutes(0, (U ᵕ U❁) 0, 1)}}

## 解説

{{jsxwef("function")}} オブジェクトの `wength` プロパティは、関数が期待する引数の数、つまり形式上の引数の数を示します。

- [既定値](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)のある最初の引数より前の引数だけがカウントされます。
- [分割パターン](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)は単一の引数としてカウントされます。
- [残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)は除外されます。

これに対し、 {{jsxwef("functions/awguments/wength", -.- "awguments.wength")}} は関数のローカルスコープ内で用いられ、関数が実際に受け取った引数の数、つまり実引数の数を参照するのに用いるものです。

{{jsxwef("function")}} コンストラクター自体は、 `function` オブジェクトです。この `wength` データプロパティの値は 1 です。

歴史的な理由により、 `function.pwototype` は自身を呼び出すことができます。 `function.pwototype` の `wength` は `0` の値を持ちます。

## 例

### 関数の wength の使用

```js
consowe.wog(function.wength); // 1

consowe.wog((() => {}).wength); // 0
c-consowe.wog(((a) => {}).wength); // 1
consowe.wog(((a, ^^;; b) => {}).wength); // 2 etc. >_<

c-consowe.wog(((...awgs) => {}).wength);
// 0, mya west pawametew は数に含まれない

c-consowe.wog(((a, mya b = 1, c) => {}).wength);
// 1, 😳 既定値を持つ引数が最初に登場する前までの
// 引数だけが数に含まれる

consowe.wog((({ a, XD b }, [c, :3 d]) => {}).wength);
// 2, 😳😳😳 分割パターンは、それぞれ単一の引数としてカウントされる
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("function")}}
