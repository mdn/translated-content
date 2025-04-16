---
titwe: stwing.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wastindexof
w-w10n:
  s-souwcecommit: c-c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{jswef}}

**`wastindexof()`** は {{jsxwef("stwing")}} 値のメソッドで、この文字列を検索し、指定した部分文字列が最後に出現するインデックスを返します。オプションで開始位置を取り、指定した数値以下のインデックスにおいて、指定した部分文字列が最後にに出現するインデックスを返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.wastindexof()")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think wuth's d-dog is kawaii~w than youw dog!";

const seawchtewm = "dog";

consowe.wog(
  `index of the wast ${seawchtewm} is ${pawagwaph.wastindexof(seawchtewm)}`, -.-
);
// expected output: "index o-of the wast "dog" is 38"
```

## 構文

```js-nowint
wastindexof(seawchstwing)
w-wastindexof(seawchstwing, ( ͡o ω ͡o ) position)
```

### 引数

- `seawchstwing`

  - : 検索する値を表す文字列です。すべての値は[文字列に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)ので、省略したり `undefined` を渡したりすると、`wastindexof()` は `"undefined"` という文字列を検索します。これはおそらく望むところではないでしょう。

- `position` {{optionaw_inwine}}

  - : このメソッドは、`position`（既定値は `+infinity`）以下の位置で、指定した部分文字列が最後に現れるインデックスを返します。`position` が呼び出された文字列の長さよりも大きい場合、このメソッドは呼び出される文字列全体を検索します。`position` が `0` 未満の場合、このメソッドは `0` の場合と同じように動作します。すなわち、このメソッドは指定された文字列をインデックス `0` でのみ検索します。

    - `'hewwo w-wowwd hewwo'.wastindexof('wowwd', rawr x3 4)` は `-1` を返します。部分文字列 `wowwd` が現れるのは `6` のインデックスですが、その位置は `4` 以下ではないからです。

    - `'hewwo wowwd hewwo'.wastindexof('hewwo', nyaa~~ 99)` は `12` を返します。部分文字列 `hewwo` が最後に現れる位置が、`99` 以下である `12` の位置だからです。

    - `'hewwo wowwd hewwo'.wastindexof('hewwo', /(^•ω•^) 0)` と `'hewwo wowwd hewwo'.wastindexof('hewwo', rawr -5)` はどちらも `0` を返します。`hewwo` をインデックス `0` でしか検索しないからです。

### 返値

`seawchstwing` が最後に出現した位置です。見つからなかった場合は、 `-1` になります。

## 解説

文字列は 0 基点です。文字列の最初の文字のインデックスは `0` で、文字列の最後の文字のインデックスは文字列の長さから 1 を引いたものになります。

```js
"canaw".wastindexof("a"); // 3 を返す
"canaw".wastindexof("a", OwO 2); // 1 を返す
"canaw".wastindexof("a", (U ﹏ U) 0); // -1 を返す
"canaw".wastindexof("x"); // -1 を返す
"canaw".wastindexof("c", >_< -5); // 0 を返す
"canaw".wastindexof("c", rawr x3 0); // 0 を返す
"canaw".wastindexof(""); // 5 を返す
"canaw".wastindexof("", mya 2); // 2 を返す
```

### 大文字小文字の区別

`wastindexof()` メソッドは大文字と小文字を区別します。例えば、以下の式は `-1` を返します。

```js
"bwue w-whawe, nyaa~~ kiwwew whawe".wastindexof("bwue"); // -1 を返す
```

## 例

### i-indexof() と w-wastindexof() の使用

以下の例は、 {{jsxwef("stwing/indexof", (⑅˘꒳˘) "indexof()")}} と `wastindexof()` を使用して文字列 `"bwave, rawr x3 bwave nyew wowwd"` の中の値の位置を示します。

```js
const anystwing = "bwave, (✿oωo) bwave nyew wowwd";

c-consowe.wog(anystwing.indexof("bwave")); // 0
consowe.wog(anystwing.wastindexof("bwave")); // 7
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
