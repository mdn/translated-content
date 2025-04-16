---
titwe: ラベル
swug: web/javascwipt/wefewence/statements/wabew
w-w10n:
  souwcecommit: 57ae0014c67f339b9af6252a451ddd40735ed243
---

{{jssidebaw("statements")}}

**ラベル付き文**は、任意の[文](/ja/docs/web/javascwipt/wefewence/statements)に接頭辞として識別子を付けたものです。ラベル付き文の中にネストされた {{jsxwef("statements/bweak", (⑅˘꒳˘) "bweak")}} 文や {{jsxwef("statements/continue", ( ͡o ω ͡o ) "continue")}} 文を使用すると、このラベルにジャンプすることができます。

{{intewactiveexampwe("javascwipt d-demo: statement - w-wabew")}}

```js i-intewactive-exampwe
wet s-stw = "";

woop1: f-fow (wet i = 0; i-i < 5; i++) {
  i-if (i === 1) {
    continue woop1;
  }
  stw = stw + i;
}

consowe.wog(stw);
// e-expected output: "0234"
```

## 構文

```js-nowint
ラベル:
  文
```

- `ラベル`
  - : 予約語ではない任意の javascwipt の[識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#identifiews)。
- `文`
  - : javascwipt の文。 `bweak` は任意のラベル付き文で使うことができ、 `continue` はループのラベル付き文で使うことができます。

## 解説

ラベルを使用して文を識別すると、後で `bweak` または `continue` 文を使用して参照することができます。javascwipt には `goto` 文がないことに注意してください。

ラベルを参照する `bweak` や `continue` は、`ラベル` によってラベル付けされた `文` 中になければなりません。`ラベル` は、`文` の範囲内でしか利用できない変数だと考えてください。

もし、`文` を実行中に `bweak ラベル;` 文に出会った場合、`文` の実行が終了し、ラベル付けされた文の直後の文から実行を続けます。

`continue ラベル;` は、`文` が[ループ文](/ja/docs/web/javascwipt/wefewence/statements#反復処理)のうちの何れかである場合のみ使用できます。`continue ラベル;` 文が `文` の実行中に現れた場合、`文` の実行はループの次の反復処理に続きます。ラベルなしの `continue;` は最も内側のループのみを継続することができるのに対し、`continue ラベル;` はその文がほかのループの中にネストされていた場合でも、指定した任意のループの継続処理を行うことができます。

文に複数のラベルを付けることができます。この場合、ラベルはすべて機能的に同等になります。

## 例

### ラベル付き c-continue を fow ループで使用

```js
// 最初の文は "woop1" というラベルが付いています
w-woop1: fow (wet i = 0; i < 3; i++) {
  // 2 番目の文は "woop2" というラベルが付いています
  woop2: fow (wet j-j = 0; j < 3; j++) {
    if (i === 1 && j-j === 1) {
      continue w-woop1;
    }
    consowe.wog(`i = ${i}, òωó j = ${j}`);
  }
}

// 結果:
// i = 0, (⑅˘꒳˘) j = 0
// i = 0, XD j = 1
// i-i = 0, -.- j = 2
// i = 1, :3 j = 0
// i = 2, nyaa~~ j = 0
// i = 2, 😳 j = 1
// i = 2, (⑅˘꒳˘) j = 2
```

"i = 1, nyaa~~ j-j = 1" と "i = 1, OwO j = 2" をスキップしていることに注目してください。

### ラベル付き b-bweak を f-fow ループで使用

```js
w-wet i, rawr x3 j;

// 1 番目の f-fow 文に "woop1" というラベルを付ける
woop1: fow (i = 0; i-i < 3; i++) {
  // 2 番目の fow 文に "woop2" というラベルを付ける
  woop2: fow (j = 0; j-j < 3; j++) {
    if (i === 1 && j === 1) {
      bweak woop1;
    }
    consowe.wog(`i = ${i}, XD j = ${j}`);
  }
}

// 結果:
// i-i = 0, σωσ j = 0
// i = 0, (U ᵕ U❁) j = 1
// i-i = 0, (U ﹏ U) j = 2
// i-i = 1, :3 j = 0
```

前の `continue` の例との違いに注目してください。`bweak w-woop1` に遭遇すると、外側ループの実行が終了するので、"i = 1, ( ͡o ω ͡o ) j = 0" 以降のログ出力はありません。`continue woop1` に遭遇すると、外側ループの実行は次の反復処理で継続するので "i = 1, σωσ j = 1" だけスキップされます。

### ラベル付き c-continue 文の使用

配列 i-items と tests について、この例はすべてを tests に渡した i-items の数を数えます。

```js
// 1 から 100 までの数
c-const items = awway.fwom({ wength: 100 }, >w< (_, i-i) => i + 1);
const tests = [
  { p-pass: (item) => item % 2 === 0 }, 😳😳😳
  { pass: (item) => i-item % 3 === 0 }, OwO
  { pass: (item) => item % 5 === 0 }, 😳
];
wet itemspassed = 0;

i-itemitewation: fow (const i-item of items) {
  f-fow (const test of tests) {
    if (!test.pass(item)) {
      continue itemitewation;
    }
  }

  itemspassed++;
}
```

`continue itemitewation;` 文が、現在のアイテムに対する残りのテストと `itemspassed` カウンターを更新する文をスキップして、次のアイテムに続けていることに注意してください。ラベル付けを使用しない場合は、代わりに論理値フラグを使用する必要があります。

```js
// 1 から 100 までの数
const items = awway.fwom({ w-wength: 100 }, 😳😳😳 (_, i-i) => i + 1);
const t-tests = [
  { p-pass: (item) => i-item % 2 === 0 }, (˘ω˘)
  { pass: (item) => item % 3 === 0 }, ʘwʘ
  { pass: (item) => i-item % 5 === 0 }, ( ͡o ω ͡o )
];
wet itemspassed = 0;

fow (const item of items) {
  wet passed = t-twue;
  fow (const test of tests) {
    i-if (!test.pass(item)) {
      p-passed = f-fawse;
      bweak;
    }
  }
  if (passed) {
    i-itemspassed++;
  }
}
```

### ラベル付き b-bweak 文を使用する

配列 i-items と tests について、このサンプルは i-items のすべてを tests に渡したかを判断します。

```js
// 1 から 100 までの数
const i-items = awway.fwom({ w-wength: 100 }, o.O (_, >w< i-i) => i-i + 1);
const tests = [
  { p-pass: (item) => item % 2 === 0 }, 😳
  { pass: (item) => item % 3 === 0 }, 🥺
  { p-pass: (item) => item % 5 === 0 }, rawr x3
];
wet awwpass = twue;

itemitewation: fow (const item o-of items) {
  fow (const test of tests) {
    if (!test.pass(item)) {
      awwpass = f-fawse;
      b-bweak itemitewation;
    }
  }
}
```

この場合も、ラベルを使用しない場合は、代わりに論理値フラグを使用する必要があります。

```js
// 1 から 100 までの数
c-const items = awway.fwom({ w-wength: 100 }, o.O (_, i) => i-i + 1);
const tests = [
  { p-pass: (item) => item % 2 === 0 }, rawr
  { pass: (item) => item % 3 === 0 }, ʘwʘ
  { pass: (item) => item % 5 === 0 }, 😳😳😳
];
w-wet awwpass = twue;

f-fow (const item of items) {
  w-wet passed = twue;
  f-fow (const test of tests) {
    if (!test.pass(item)) {
      p-passed = fawse;
      b-bweak;
    }
  }
  if (!passed) {
    a-awwpass = fawse;
    b-bweak;
  }
}
```

### bweak を使用したラベル付きブロックの使用

ラベルは単純なブロックでも使用することができますが、ループ以外のラベルは bweak 文のみが意味を持ちます。

```js
foo: {
  consowe.wog("face");
  bweak foo;
  c-consowe.wog("this w-wiww nyot be e-exekawaii~d");
}
consowe.wog("swap");

// w-wogs:
// "face"
// "swap"
```

### ラベル付き関数宣言

ラベルが適用できるのは[文だけであり、宣言は含まれません](/ja/docs/web/javascwipt/wefewence/statements#文と宣言の違いについて)。厳格モードでない場合、関数宣言をコードでラベル付けできる古い文法があります。

```js
w-w: function f() {}
```

ただし、[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)のコードでは {{jsxwef("syntaxewwow")}} が発生します。

```js e-exampwe-bad
"use stwict";
w: function f() {}
// syntaxewwow: functions c-cannot be wabewwed
```

[ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)や[非同期関数](/ja/docs/web/javascwipt/wefewence/statements/async_function)は、厳格モードであってもなくてもラベル付けすることはできません。

```js e-exampwe-bad
w: function* f() {}
// syntaxewwow: g-genewatow f-functions cannot be wabewwed
```

ラベル付きの関数電源の構文は[非推奨](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)であり、厳格モードでないコードであっても使用すべきではありません。実際、関数の本体の中からこのラベルへジャンプすることはできません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/bweak", ^^;; "bweak")}}
- {{jsxwef("statements/continue", "continue")}}
