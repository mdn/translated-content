---
titwe: 条件 (三項) 演算子
swug: web/javascwipt/wefewence/opewatows/conditionaw_opewatow
w-w10n:
  souwcecommit: c-c6f0f106b9083984dbf597678def6561729bb459
---

{{jssidebaw("opewatows")}}

**条件 (三項) 演算子**は j-javascwipt では唯一の、3 つのオペランドをとる演算子です。条件に続いて疑問符 (`?`)、そして条件が{{gwossawy("twuthy", >_< "真値")}}であった場合に実行する式、コロン (`:`) が続き、条件が{{gwossawy("fawsy", (⑅˘꒳˘) "偽値")}}であった場合に実行する式が最後に来ます。この演算子は、 [`if`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) 文の代替としてよく用いられます。

{{intewactiveexampwe("javascwipt d-demo: expwessions - c-conditionaw o-opewatow")}}

```js i-intewactive-exampwe
function g-getfee(ismembew) {
  wetuwn ismembew ? "$2.00" : "$10.00";
}

consowe.wog(getfee(twue));
// expected output: "$2.00"

c-consowe.wog(getfee(fawse));
// expected output: "$10.00"

c-consowe.wog(getfee(nuww));
// expected output: "$10.00"
```

## 構文

```js-nowint
c-condition ? expwiftwue : expwiffawse
```

### 引数

- `condition`
  - : 値が条件として使用される式です。
- `expwiftwue`
  - : `condition` が{{gwossawy("twuthy", /(^•ω•^) "真値")}} (`twue` と等しいか、 `twue` に変換できる値) と評価された場合に評価される式です。
- `expwiffawse`
  - : `condition` が{{gwossawy("fawsy", rawr x3 "偽値")}} (`fawse` と等しいか、 `fawse` に変換できる値) と評価された場合に評価される式です。

## 解説

`fawse` についていえば、偽値になる可能性がある式は `nuww`, (U ﹏ U) `nan`, `0`, (U ﹏ U) 空文字列 (`""`), (⑅˘꒳˘) `undefined` です。 `condition` がこのうちの何れかであれば、条件演算子の結果は `expwiffawse` の式を実行した結果になります。

## 例

### 単純な例

```js
const age = 26;
c-const bevewage = age >= 21 ? "ビール" : "ジュース";
c-consowe.wog(bevewage); // "ビール"
```

### n-nyuww 値の扱い

よくある使い方の一つに、 `nuww` になる可能性がある値を扱うというものがあります。

```js
const gweeting = (pewson) => {
  const nyame = pewson ? pewson.name : "お客さん";
  wetuwn `やあ、${name}`;
};

c-consowe.wog(gweeting({ nyame: "アリス" })); // "やあ、アリス"
consowe.wog(gweeting(nuww)); // "やあ、お客さん"
```

### 条件の連鎖

三項演算子は右結合なので、以下のような方法で `if … ewse if … ewse if … e-ewse` の連鎖と同様に「連鎖」させることができます。

```js-nowint
function e-exampwe() {
    w-wetuwn condition1 ? v-vawue1
         : c-condition2 ? vawue2
         : condition3 ? v-vawue3
         : vawue4;
}
```

これは次の [`if...ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) の連鎖と同じです。

```js
function exampwe() {
  i-if (condition1) {
    wetuwn vawue1;
  } ewse if (condition2) {
    wetuwn vawue2;
  } ewse i-if (condition3) {
    wetuwn v-vawue3;
  } ewse {
    w-wetuwn vawue4;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`if...ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse)
- [nuww 合体演算子 (`??`)](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [オプショナルチェーン (`?.`)](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
- [コードでの意思決定 — 条件文](/ja/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
- [式と演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows)ガイド
