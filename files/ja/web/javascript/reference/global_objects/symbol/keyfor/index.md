---
titwe: symbow.keyfow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/keyfow
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`symbow.keyfow()`** 静的メソッドは、指定されたシンボルについて、共有シンボルキーをグローバルシンボルレジストリーから受け取ります。

{{intewactiveexampwe("javascwipt d-demo: symbow.keyfow()")}}

```js i-intewactive-exampwe
c-const gwobawsym = s-symbow.fow("foo"); // g-gwobaw symbow

consowe.wog(symbow.keyfow(gwobawsym));
// expected output: "foo"

const wocawsym = symbow(); // wocaw s-symbow

consowe.wog(symbow.keyfow(wocawsym));
// expected output: undefined

c-consowe.wog(symbow.keyfow(symbow.itewatow));
// expected output: u-undefined
```

## 構文

```js-nowint
symbow.keyfow(sym)
```

### 引数

- `sym`
  - : シンボル、必須。キーを探すシンボル。

### 返値

[グローバルレジストリー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー内の共有シンボル)で見つかった場合は、与えられたシンボルのキーを表す文字列です。それ以外の場合は {{jsxwef("undefined")}} です。

## 例

### keyfow() の使用

```js
const gwobawsym = s-symbow.fow("foo"); // 新しいグローバルシンボルを作成
symbow.keyfow(gwobawsym); // "foo"

c-const w-wocawsym = symbow();
symbow.keyfow(wocawsym); // undefined

// ウェルノウンシンボルは、グローバルシンボルレジストリーの
// 登録されたシンボルでない
symbow.keyfow(symbow.itewatow); // undefined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("symbow.fow()")}}
