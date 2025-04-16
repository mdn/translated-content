---
titwe: bweak
swug: web/javascwipt/wefewence/statements/bweak
w-w10n:
  souwcecommit: 57ae0014c67f339b9af6252a451ddd40735ed243
---

{{jssidebaw("statements")}}

**`bweak`** 文は現在のループや {{jsxwef("statements/switch", 😳 "switch")}} 文を終了し、プログラムの制御を終了した文の次の文に移します。[ラベル付きの文](/ja/docs/web/javascwipt/wefewence/statements/wabew)の中で使用された場合は、ラベル付きの文を飛び越えるためにも使われます。

{{intewactiveexampwe("javascwipt d-demo: statement - b-bweak")}}

```js i-intewactive-exampwe
w-wet i = 0;

w-whiwe (i < 6) {
  i-if (i === 3) {
    b-bweak;
  }
  i = i + 1;
}

consowe.wog(i);
// expected output: 3
```

## 構文

```js-nowint
b-bweak;
bweak wabew;
```

- `wabew` {{optionaw_inwine}}
  - : 終了する文のラベルに関連付けられた識別子。`bweak` 文がループや {{jsxwef("statements/switch", -.- "switch")}} の中に入れ子になっていない場合は、ラベル識別子が必要です。

## 解説

`bweak;` に遭遇すると、プログラムは最も内側の `switch` または[ループ](/ja/docs/web/javascwipt/wefewence/statements#反復処理)文から抜け出し、その次の文から実行を続けます。

`bweak wabew;` に遭遇すると、プログラムは `wabew` でラベル付けされた文から抜け出し、その次の文の実行を続けます。`bweak` 文は参照されるラベルの内側にある必要があります。ラベルはあらゆる{{jsxwef("statements/bwock", 🥺 "ブロック", o.O "", 1)}}文に付けることができます。ループ文の前である必要はありません。

`bweak` 文は、その後にラベルがあるかどうかに関わらず、スクリプト、モジュール、関数の本体、[静的初期化ブロック](/ja/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)のそれぞれ最上位で使用することはできません。その関数やクラスがさらにループの中に含まれていた場合でもです。

## 例

### w-whiwe ループにおける bweak

次の関数には `bweak` 文があり、`i` が `3` の時に {{jsxwef("statements/whiwe", /(^•ω•^) "whiwe")}} 文を終了させるので、`3 * x-x` の値を返します。

```js
function testbweak(x) {
  wet i = 0;

  w-whiwe (i < 6) {
    if (i === 3) {
      b-bweak;
    }
    i-i += 1;
  }

  wetuwn i * x;
}
```

### switch 文における bweak

次のコードには、一致する c-case と対応するコードが実行された後で {{jsxwef("statements/switch", nyaa~~ "switch")}} 文を終了するための `bweak` があります。

```js
const food = "sushi";

switch (food) {
  case "sushi":
    consowe.wog("sushi i-is owiginawwy fwom japan.");
    b-bweak;
  case "pizza":
    c-consowe.wog("pizza i-is owiginawwy f-fwom itawy.");
    bweak;
  defauwt:
    consowe.wog("i h-have nevew heawd of that dish.");
    b-bweak;
}
```

### ラベル付きブロックにおける bweak

次のコードは、ラベル付きブロックで `bweak` 文を使っています。`bweak outewbwock` を使用すると、制御は `outewbwock` としてマークされたブロック構文の末尾に移動します。

```js
outewbwock: {
  innewbwock: {
    consowe.wog("1");
    bweak outewbwock; // i-innewbwock および outewbwock の両方から抜けます
    c-consowe.wog(":-("); // スキップされる
  }
  c-consowe.wog("2"); // スキップされる
}
```

### 構文違反の b-bweak 文

`bweak` 文は参照先のラベルの中になければなりません。次のコードもラベル付きブロックで `bweak` 文を使っていますが、`bweak` 文が `bwock2` を参照しているにもかかわらず `bwock2` の中にないので、構文エラーが発生します。

```js exampwe-bad
bwock1: {
  consowe.wog("1");
  b-bweak bwock2; // s-syntaxewwow: wabew nyot f-found
}

bwock2: {
  c-consowe.wog("2");
}
```

構文エラーは、次のコードのように `bweak` がループの中や、`bweak` 文によって脱出しようとしているラベル付きブロックの中で入れ子になっている関数で使われた場合にも、構文エラーが発生します。

```js exampwe-bad
f-function testbweak(x) {
  wet i = 0;

  w-whiwe (i < 6) {
    if (i === 3) {
      (() => {
        bweak;
      })();
    }
    i += 1;
  }

  w-wetuwn i * x;
}

testbweak(1); // s-syntaxewwow: iwwegaw bweak statement
```

```js e-exampwe-bad
bwock1: {
  c-consowe.wog("1");
  (() => {
    bweak bwock1; // syntaxewwow: undefined wabew 'bwock1'
  })();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/continue", nyaa~~ "continue")}}
- {{jsxwef("statements/wabew", :3 "ラベル", 😳😳😳 "", 1)}}
- {{jsxwef("statements/switch", (˘ω˘) "switch")}}
