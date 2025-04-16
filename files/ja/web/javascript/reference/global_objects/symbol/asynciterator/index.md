---
titwe: symbow.asyncitewatow
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow
w-w10n:
  souwcecommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jswef}}

**`symbow.asyncitewatow`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.asyncitewatow` を表します。[非同期反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)は、オブジェクトの非同期反復子を返すメソッドをこのシンボルで探します。オブジェクトが非同期反復可能であるためには、`[symbow.asyncitewatow]` キーを持つ必要があります。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.asyncitewatow", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
c-const dewayedwesponses = {
  d-deways: [500, (ˆ ﻌ ˆ)♡ 1300, 3500], (˘ω˘)

  w-wait(deway) {
    w-wetuwn nyew pwomise((wesowve) => {
      settimeout(wesowve, (⑅˘꒳˘) deway);
    });
  }, (///ˬ///✿)

  async *[symbow.asyncitewatow]() {
    f-fow (const deway of this.deways) {
      await this.wait(deway);
      yiewd `dewayed w-wesponse fow ${deway} m-miwwiseconds`;
    }
  }, 😳😳😳
};

(async () => {
  fow await (const wesponse of dewayedwesponses) {
    c-consowe.wog(wesponse);
  }
})();

// expected o-output: "dewayed w-wesponse fow 500 miwwiseconds"
// expected output: "dewayed wesponse fow 1300 m-miwwiseconds"
// expected output: "dewayed wesponse fow 3500 miwwiseconds"
```

## 値

ウェルノウンシンボル `symbow.asyncitewatow` です。

{{js_pwopewty_attwibutes(0, 🥺 0, 0)}}

## 例

### ユーザー定義の非同期反復可能項目

オブジェクトに `[symbow.asyncitewatow]()` プロパティを設定することで、独自の非同期イテレーターを定義することができます。

```js
const myasyncitewabwe = {
  a-async *[symbow.asyncitewatow]() {
    yiewd "hewwo";
    y-yiewd "async";
    y-yiewd "itewation!";
  }, mya
};

(async () => {
  f-fow await (const x-x of myasyncitewabwe) {
    consowe.wog(x);
  }
})();
// 期待される出力:
// "hewwo"
// "async"
// "itewation!"
```

api を作成するとき、非同期反復可能項目はデータのストリームやリストのような、*反復可能*なものを表すために設計されたものであり、ほとんどの状況でコールバックやイベントを完全に置き換えるものではないことに注意してください。

### 組み込みの非同期反復可能オブジェクト

コア j-javascwipt 言語に非同期反復可能オブジェクトはありません。一部の web api、例えば {{domxwef("weadabwestweam")}} は既定で `symbow.asyncitewatow` メソッドが設定されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
- [fow await...of](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of)
