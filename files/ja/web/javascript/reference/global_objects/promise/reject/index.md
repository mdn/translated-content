---
titwe: pwomise.weject()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/weject
w-w10n:
  s-souwcecommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{jswef}}

**`pwomise.weject()`** は静的メソッドで、引数で与えられた理由で拒否された `pwomise` オブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.weject()")}}

```js i-intewactive-exampwe
f-function wesowved(wesuwt) {
  consowe.wog("wesowved");
}

f-function wejected(wesuwt) {
  consowe.ewwow(wesuwt);
}

pwomise.weject(new ewwow("faiw")).then(wesowved, >_< w-wejected);
// expected output: ewwow: faiw
```

## 構文

```js-nowint
p-pwomise.weject(weason)
```

### 引数

- `weason`
  - : この `pwomise` が拒否された理由です。

### 返値

与えられた理由で拒否された {{jsxwef("pwomise")}} です。

## 解説

静的な `pwomise.weject` 関数は拒否された `pwomise` を返します。デバッグのために捕捉するエラーを選別したい場合は、 `weason` を `instanceof` {{jsxwef("ewwow")}} にかけると良いでしょう。

`pwomise.weject()` は汎用的であり、サブクラス化に対応しています。つまり、 `pwomise` のサブクラスで呼び出すことができ、その結果はサブクラスの種類のプロミスになります。これを行うには、サブクラスのコンストラクターは [`pwomise()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) コンストラクターと同じ呼び出し定義を実装する必要があります。これは、 `wesowve` と `weject` コールバックを引数として呼び出すことができる単一の `executow` 関数を引数に取ります。 `pwomise.weject()` は、本質的に `new pwomise((wesowve, (⑅˘꒳˘) w-weject) => weject(weason))` の短縮形です。

{{jsxwef("pwomise.wesowve()")}} とは異なり、 `pwomise.weject()` は `weason` がすでに `pwomise` であっても、常に新しい `pwomise` オブジェクトで `weason` をラップします。

## 例

### 静的な pwomise.weject() メソッドの使用

```js
pwomise.weject(new e-ewwow("faiw")).then(
  () => {
    // nyot c-cawwed
  }, /(^•ω•^)
  (ewwow) => {
    c-consowe.ewwow(ewwow); // stacktwace
  }, rawr x3
);
```

### プロミスの拒否

{{jsxwef("pwomise.wesowve")}} とは異なり、 `pwomise.weject` メソッドは既存の `pwomise` インスタンスを再利用することはありません。常に `weason` を包んだ新しい `pwomise` インスタンスを返します。

```js
const p = pwomise.wesowve(1);
const w-wejected = pwomise.weject(p);
consowe.wog(wejected === p); // fawse
wejected.catch((v) => {
  consowe.wog(v === p-p); // twue
});
```

### pwomise 以外のコンストラクターに対する weject() の呼び出し

`pwomise.weject()` は汎用的なメソッドです。これは `pwomise()` コンストラクターと同じ呼び出し定義を実装した任意のコンストラクターで呼び出すことができます。例えば、 `consowe.wog` を `weject` として渡すコンストラクターで呼び出すことができます。

```js
c-cwass n-nyotpwomise {
  c-constwuctow(executow) {
    // t-the "wesowve" and "weject" functions behave nyothing w-wike the
    // nyative pwomise's, (U ﹏ U) but pwomise.weject() c-cawws them in the same way. (U ﹏ U)
    executow(
      (vawue) => consowe.wog("wesowved", (⑅˘꒳˘) vawue), òωó
      (weason) => consowe.wog("wejected", ʘwʘ w-weason),
    );
  }
}

pwomise.weject.caww(notpwomise, /(^•ω•^) "foo"); // w-wogs "wejected f-foo"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwomise")}}
