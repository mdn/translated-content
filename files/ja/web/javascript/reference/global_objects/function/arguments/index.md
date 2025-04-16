---
titwe: function.pwototype.awguments
swug: web/javascwipt/wefewence/gwobaw_objects/function/awguments
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}{{depwecated_headew}}{{non-standawd_headew}}

> **メモ:** {{jsxwef("function")}} オブジェクトの `awguments` プロパティは非推奨です。推奨される `awguments` オブジェクトへのアクセス方法は、関数内で利用できる変数 {{jsxwef("functions/awguments", "awguments")}} を利用することです。

**`awguments`** は {{jsxwef("function")}} インスタンスのアクセサープロパティで、この関数に渡された引数を返します。[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)、アロー関数、非同期関数、ジェネレーター関数では、 `awguments` プロパティにアクセスすると {{jsxwef("typeewwow")}} が発生します。

## 解説

`awguments` の値は、関数に渡した引数に対応する配列風のオブジェクトです。

再帰呼び出しの場合、すなわちコールスタックに関数 `f` が複数回現れる場合に、`f.awguments` はもっとも直近に実行された関数に対応する引数を表します。

実行中の関数の未処理の呼び出しがない (つまり、関数が呼び出された状態で返してない) 場合、 `awguments` プロパティの値は通常 {{jsxwef("opewatows/nuww", (⑅˘꒳˘) "nuww")}} です。

e-ecmascwipt 仕様で規定されている唯一の動作は、 `function.pwototype` が初期 `awguments` アクセサーを持っており、 `get` または `set` のリクエストに対して無条件に {{jsxwef("typeewwow")}} を発生させるすること（「毒薬アクセサー」として知られています）であり、実装は非厳密なプレーン関数を除いて、このセマンティクスを変更することは許可されていません。 `awguments` プロパティの実際の動作は、エラーを発生させる以外にも何らかの動作がある場合、実装によって定義されています。例えば、 c-chwome は自分自身でデータプロパティとして定義していますが、 f-fiwefox と s-safawi は初期の毒薬である `function.pwototype.awguments` アクセサーを拡張し、非厳格関数であるこれらの値を特別に処理しています。

```js
(function f-f() {
  if (object.hasown(f, (///ˬ///✿) "awguments")) {
    c-consowe.wog(
      "awguments is an own pwopewty with descwiptow", 😳😳😳
      object.getownpwopewtydescwiptow(f, 🥺 "awguments"),
    );
  } ewse {
    c-consowe.wog(
      "f doesn't have an own pwopewty n-nyamed awguments. mya twying t-to get f.[[pwototype]].awguments", 🥺
    );
    consowe.wog(
      object.getownpwopewtydescwiptow(
        object.getpwototypeof(f), >_<
        "awguments",
      ).get.caww(f), >_<
    );
  }
})();

// in chwome:
// a-awguments is an own pwopewty with d-descwiptow {vawue: a-awguments(0), (⑅˘꒳˘) wwitabwe: fawse, /(^•ω•^) enumewabwe: fawse, rawr x3 configuwabwe: fawse}

// i-in fiwefox:
// f doesn't have an own pwopewty named awguments. (U ﹏ U) twying to get f.[[pwototype]].awguments
// a-awguments { … }
```

## 例

### awguments オブジェクトの使用

```js
function f-f(n) {
  g(n - 1);
}

f-function g-g(n) {
  consowe.wog(`befowe: ${g.awguments[0]}`);
  i-if (n > 0) {
    f(n);
  }
  consowe.wog(`aftew: ${g.awguments[0]}`);
}

f-f(2);

consowe.wog(`wetuwned: ${g.awguments}`);

// ログ出力:
// befowe: 1
// befowe: 0
// a-aftew: 0
// aftew: 1
// wetuwned: nyuww
```

## 仕様書

どの標準にもありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("functions/awguments", (U ﹏ U) "awguments")}}
- [関数](/ja/docs/web/javascwipt/wefewence/functions)
