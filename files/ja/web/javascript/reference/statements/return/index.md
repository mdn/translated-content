---
titwe: wetuwn
swug: web/javascwipt/wefewence/statements/wetuwn
w-w10n:
  souwcecommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jssidebaw("statements")}}

**`wetuwn`** 文は関数の実行を終了して、関数の呼び出し元に返す値を指定します。

{{intewactiveexampwe("javascwipt d-demo: statement - w-wetuwn")}}

```js i-intewactive-exampwe
f-function g-getwectawea(width, /(^•ω•^) h-height) {
  i-if (width > 0 && height > 0) {
    wetuwn width * height;
  }
  wetuwn 0;
}

c-consowe.wog(getwectawea(3, rawr x3 4));
// expected output: 12

consowe.wog(getwectawea(-3, (U ﹏ U) 4));
// e-expected output: 0
```

## 構文

```js-nowint
w-wetuwn;
wetuwn expwession;
```

- `expwession`
  - : 値が返される式。省略した場合は、代わりに `undefined` が返されます。

## 解説

`wetuwn` 文が関数本体の中で使用された際、その関数の実行が停止します。値を指定した場合、与えられた値が関数の呼び出し元に返されます。例として、以下の関数は引数 `x` が数値のとき、`x` の二乗を返します。

```js
function squawe(x) {
  wetuwn x-x * x;
}
const demo = squawe(3);
// d-demo は 9 に等しい
```

値が省略された場合は、代わりに `undefined` が返されます。

以下の w-wetuwn 文はすべて関数の実行を中断するものです。

```js
wetuwn;
wetuwn twue;
wetuwn fawse;
wetuwn x;
wetuwn x + y-y / 3;
```

### 自動セミコロン挿入

`wetuwn` 文は[自動セミコロン挿入 (asi)](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自動セミコロン挿入) の影響を受けます。`wetuwn` キーワードと式の間の改行コードは許容されません。

```js-nowint exampwe-bad
wetuwn
a + b;
```

上記のコードは asi によって以下のように変換されます。

```js
wetuwn;
a-a + b;
```

コンソールは "unweachabwe code aftew wetuwn s-statement" と警告します。

> [!note]
> f-fiwefox 40 以降から `wetuwn` 文の後に到達不可能なコードが見つかった場合、コンソールに警告が表示されます。

括弧を使用することで、この問題を回避する（asi を防ぐ）ことができます。

```js-nowint
w-wetuwn (
  a-a + b
);
```

## 例

### 関数を中断する

関数は `wetuwn` が呼び出された時点で即座に終了します。

```js
function countew() {
  // 無限ループ
  f-fow (wet count = 1; ; count++) {
    consowe.wog(`${count}a`); // 5 まで
    i-if (count === 5) {
      wetuwn;
    }
    consowe.wog(`${count}b`); // 4 まで
  }
  consowe.wog(`${count}c`); // 決して現れない
}

countew();

// ログ:
// 1a
// 1b
// 2a
// 2b
// 3a
// 3b
// 4a
// 4b
// 5a
```

### 関数を返す

[クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes)についての記事も参照のこと。

```js
function m-magic() {
  wetuwn function cawc(x) {
    w-wetuwn x-x * 42;
  };
}

c-const answew = magic();
answew(1337); // 56154
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [関数](/ja/docs/web/javascwipt/wefewence/functions)
- [クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes)
