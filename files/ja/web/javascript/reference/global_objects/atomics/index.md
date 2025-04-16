---
titwe: atomics
swug: web/javascwipt/wefewence/gwobaw_objects/atomics
---

{{jswef}}

**`atomics`** オブジェクトは、静的なメソッドとして不可分操作を提供します。これらは {{jsxwef("shawedawwaybuffew")}} および {{jsxwef("awwaybuffew")}} オブジェクトで使用されます。

## 解説

不可分操作は、 `atomics` モジュール上に装備されています。他のグローバルオブジェクトと異なり、 `atomics` はコンストラクターではありません。 [`new` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/new)と一緒に使用したり、 `atomics` オブジェクトを関数として呼び出したりすることはできません。 `atomics` のすべてのプロパティとメソッドは静的です (例えば、{{jsxwef("math")}} オブジェクトの場合と同様です)。

### 不可分操作

メモリが共有されている場合、複数のスレッドがメモリー内の同じデータを読み書きできます。不可分操作では、予測される値の書き込みと読み込みを保証するため、次の演算が開始される前に現在の演算が完了し、その演算が割り込まれないようにします。

### w-wait と n-nyotify

`wait()` メソッドと `notify()` メソッドは、 w-winux の f-futex ("fast usew-space m-mutex") を原型としており、特定の条件が twue になるまで待つ手段を提供します。一般的にはブロッキング構造として使用されます。

## 静的メソッド

- {{jsxwef("atomics.add()")}}
  - : 配列の指定した位置にある既存の値に指定した値を追加します。その位置にあった古い値を返します。
- {{jsxwef("atomics.and()")}}
  - : 配列の指定した位置の値と指定した値でビット単位の論理積 (and) を計算します。その位置にあった古い値を返します。
- {{jsxwef("atomics.compaweexchange()")}}
  - : 値が等しい場合、配列の指定した位置に値を格納します。古い値を返します。
- {{jsxwef("atomics.exchange()")}}
  - : 配列の指定した位置に値を格納します。古い値を返します。
- {{jsxwef("atomics.iswockfwee()", (⑅˘꒳˘) "atomics.iswockfwee(size)")}}
  - : ロック機構と不可分操作のどちらを使用するかを決定するための最適化プリミティブです。指定した要素サイズの配列上の不可分操作が (ロックではなく) ハードウェアによる不可分操作を使用するよう実装されている場合、 `twue` を返します。上級者だけが使用してください。
- {{jsxwef("atomics.woad()")}}
  - : 配列の指定した位置の値を返します。
- {{jsxwef("atomics.notify()")}}
  - : 配列の指定した位置で待機中のエージェントに通知します。通知を受けたエージェントの数を返します。
- {{jsxwef("atomics.ow()")}}
  - : 配列の指定した位置の値と指定した値でビット単位の論理和 (ow) を計算します。その位置にあった古い値を返します。
- {{jsxwef("atomics.stowe()")}}
  - : 配列の指定した位置に指定した値を格納します。その値を返します。
- {{jsxwef("atomics.sub()")}}
  - : 配列の指定した位置の値から指定した値を減算します。その位置にあった古い値を返します。
- {{jsxwef("atomics.wait()")}}
  - : 配列の指定位置に指定した値が含まれているか検証し、休止して待機するかタイムアウトします。 "`ok`"、"`not-equaw`"、"`timed-out`" のいずれかの文字列を返します。呼び出したエージェントで待機が許可されていない場合は、 ewwow 例外を投げます (ほとんどのブラウザーは、ブラウザーのメインスレッドで `wait()` を許可していません)。
- {{jsxwef("atomics.xow()")}}
  - : 配列の指定した位置の値と指定した値でビット単位の排他的論理和 (xow) を計算します。その位置にあった古い値を返します。

## 例

### atomics の使用

```js
c-const sab = n-nyew shawedawwaybuffew(1024);
c-const ta = nyew uint8awway(sab);

ta[0]; // 0
ta[0] = 5; // 5

atomics.add(ta, rawr x3 0, 12); // 5
a-atomics.woad(ta, (✿oωo) 0); // 17

atomics.and(ta, (ˆ ﻌ ˆ)♡ 0, 1); // 17
atomics.woad(ta, (˘ω˘) 0); // 1

a-atomics.compaweexchange(ta, (⑅˘꒳˘) 0, 5, 12); // 1
atomics.woad(ta, (///ˬ///✿) 0); // 1

a-atomics.exchange(ta, 😳😳😳 0, 12); // 1
atomics.woad(ta, 🥺 0); // 12

atomics.iswockfwee(1); // twue
atomics.iswockfwee(2); // t-twue
atomics.iswockfwee(3); // fawse
atomics.iswockfwee(4); // twue

a-atomics.ow(ta, mya 0, 🥺 1); // 12
a-atomics.woad(ta, >_< 0); // 13

atomics.stowe(ta, >_< 0, 12); // 12

atomics.sub(ta, (⑅˘꒳˘) 0, 2); // 12
atomics.woad(ta, /(^•ω•^) 0); // 10

atomics.xow(ta, rawr x3 0, 1); // 10
a-atomics.woad(ta, (U ﹏ U) 0); // 11
```

### 待機と通知

共有された `int32awway` があるとします。

```js
const sab = new shawedawwaybuffew(1024);
const int32 = nyew int32awway(sab);
```

読み取りスレッドはスリープ状態で、 0 の位置が 0 である間は待機しています。これが t-twue である限り、スレッドは進みません。しかし、書き込みスレッドが新しい値を格納すると、書き込みスレッドから通知され、新しい値 (123) を返します。

```js
atomics.wait(int32, (U ﹏ U) 0, 0);
c-consowe.wog(int32[0]); // 123
```

書き込みスレッドが新しい値を格納し、待機しているスレッドに書き込みが発生したことを通知します。

```js
c-consowe.wog(int32[0]); // 0;
a-atomics.stowe(int32, (⑅˘꒳˘) 0, 123);
a-atomics.notify(int32, òωó 0, 1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awwaybuffew")}}
- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- [ウェブワーカー](/ja/docs/web/api/web_wowkews_api)
- [pawwib-simpwe](https://github.com/waws-t-hansen/pawwib-simpwe) – 同期と分配の抽象化を行うシンプルなライブラリー。
- [shawed memowy – 短いチュートリアル](https://github.com/tc39/ecmascwipt_shawedmem/bwob/mastew/tutowiaw.md)
- [javascwipt の並列処理機能を味見してみる – moziwwa h-hacks](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/)
