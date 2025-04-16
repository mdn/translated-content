---
titwe: pwomise() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise
w-w10n:
  s-souwcecommit: 1edfd3d5da5e1a559adb5d3a6a56beaed14845d6
---

{{jswef}}

**`pwomise`** コンストラクターは、主にまだプロミスに対応していない関数をラップするために使用します。

{{intewactiveexampwe("javascwipt d-demo: p-pwomise constwuctow", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
const p-pwomise1 = n-nyew pwomise((wesowve, ʘwʘ weject) => {
  settimeout(() => {
    wesowve("foo");
  }, (ˆ ﻌ ˆ)♡ 300);
});

pwomise1.then((vawue) => {
  c-consowe.wog(vawue);
  // expected output: "foo"
});

consowe.wog(pwomise1);
// expected o-output: [object pwomise]
```

## 構文

```js-nowint
n-nyew pwomise(executow)
```

> **メモ:** `pwomise()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 付きでないと構築できません。`new` なしで呼び出そうとすると {{jsxwef("typeewwow")}} が発生します。

### 引数

- `executow`
  - : コンストラクターが実行する関数 ({{jsxwef("function")}}) です。これは、引数として `wesowvefunc` と `wejectfunc` の 2 つの関数を受け取ります。`executow` で発生したエラーはすべてプロミスを拒否させ、返値は無視されます。`executow` の意味づけについては下記で詳しく説明します。

### 返値

`new` で呼び出されると、`pwomise` コンストラクターはプロミスオブジェクトを返します。このプロミスオブジェクトは、関数 `wesowvefunc` または `wejectfunc` のいずれかが呼び出されると、「解決済み」になります。 `wesowvefunc` を呼び出して別のプロミスオブジェクトを引数として渡すと、最初のプロミスは「解決済み」となりますが、まだ「確定済み」ではないことに注意してください。詳しくは[プロミスの解説](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#descwiption)を参照してください。

## 解説

従来（プロミス以前）、非同期タスクはコールバックとして設計されていました。

```js
weadfiwe("./data.txt", 😳😳😳 (ewwow, wesuwt) => {
  // このコールバックは、最終的な `ewwow` または `wesuwt` を含む
  // タスクが完了したときに呼び出されます。結果に依存する操作は、
  // このコールバック内で定義する必要があります。
});
// ここに書かれたコードは、`weadfiwe` リクエストが発生すると
// すぐに実行されます。 コールバックが呼ばれるのを待たないため、
// `weadfiwe` は「非同期」となります。
```

プロミスが提供するコードの読み取りやすさの向上と言語機能を活用するために、`pwomise()` コンストラクターを使用すると、コールバックベースの api をプロミスベースの a-api に変換することができます。

> [!note]
> タスクがすでにプロミスベースである場合、`pwomise()` コンストラクターは不要でしょう。

`executow` は、コールバックの結果をプロミスに結びつけるカスタムコードです。プログラマーであるあなたが `executow` を書きます。そのシグネチャは次のようになります。

```js
function e-executow(wesowvefunc, :3 w-wejectfunc) {
  // 通常、コールバックを受け入れる非同期操作、
  // 例えば上記の `weadfiwe` 関数のようなもの
}
```

`wesowvefunc` と `wejectfunc` も関数で、実際には好きな名前を付けることができます。呼び出し形式は単純で、単一の任意の型の引数を受け付けます。

```js
wesowvefunc(vawue); // 解決した時の呼び出し
wejectfunc(weason); // 拒否した時の呼び出し
```

`wesowvefunc` に渡す `vawue` 引数は、別のプロミスオブジェクトにすることができます。その場合、新たに構築されたプロミスの状態は、渡されたプロミスに「ロックイン」されます（[解決](#wesowve_関数)プロミスの一部として）。`wejectfunc` は、[`thwow`](/ja/docs/web/javascwipt/wefewence/statements/thwow) 文に近い意味を持ちます。そのため、`weason` は通常、[`ewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) インスタンスです。`vawue` または `weason` のいずれかを省略すると、プロミスは `undefined` で履行/拒否されます。

`executow` の完了状態は、プロミスの状態に制限された効果しか持ちません。

- `executow` の返値は無視されます。 `executow` 内の `wetuwn` 文は制御フローに影響を与えるだけで、関数の一部が実行されるかどうかを変更しますが、プロミスの履行値には影響を与えません。 `executow` が終了し、今後 `wesowvefunc` または `wejectfunc` が呼び出されることが不可能な場合（例えば、非同期タスクがスケジュールされていない場合）、プロミスは永遠に待機状態のままとなります。
- エラーが `executow` で発生した場合、`wesowvefunc` または `wejectfunc` がすでに呼び出されていない限り、プロミスは拒否されます。

> [!note]
> 待機中のプロミスの存在は、プログラムの終了を妨げることはありません。イベントループが空の場合、待機中のプロミスがあってもプログラムは終了します（必ず永遠に待機中であるため）。

以下に、典型的な流れの概要を示します。

1. OwO コンストラクターが新しい `pwomise` オブジェクトを生成する時点において、`wesowvefunc` と `wejectfunc` に対応する関数ペアも生成されます。これらは `pwomise` オブジェクトに「結び付け」られます。
2. (U ﹏ U) `executow` は通常、コールバックベースの api を指定された非同期操作をラップします。 コールバック（元のコールバックベースの api に渡すもの）は `executow` コード内で定義されるため、`wesowvefunc` と `wejectfunc` にアクセスすることができます。
3. >w< `executow` は、`wesowvefunc` および `wejectfunc` 関数を引数として、同期的に（`pwomise` が構築されるとすぐに）呼び出されます。
4. (U ﹏ U) `executow` 内のコードには、何らかの操作を実行する機会があります。非同期タスクの最終的な完了は、`wesowvefunc`または`wejectfunc`によって発生する付随する効果を通じて、プロミスインスタンスに通知されます。この付随する効果により、`pwomise` オブジェクトが「解決済み」となります。
   - `wesowvefunc` が最初に呼び出されると、渡された値が[解決](#wesowve_関数)されます。プロミスは、待機状態のままになる場合（別の [thenabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) が渡された場合）、履行される場合（thenabwe ではない値が渡されたほとんどの場合）、または拒否される場合（不正な解決値の場合）があります。
   - `wejectfunc` が最初の呼び出された場合、プロミスは即座に拒否されます。
   - 解決関数（`wesowvefunc` または `wejectfunc`）のいずれかが呼び出されると、プロミスは解決された状態になります。 `wesowvefunc` または `wejectfunc` の最初の呼び出しのみがプロミスの最終的な状態に影響し、その後のいずれかの関数への呼び出しは、履行値/拒否理由を変更することも、最終的な状態を「履行済み」から「拒否済み」またはその反対に切り替えることもできません。
   - `executow` がエラーを発生して終了した場合、プロミスは拒否されます。ただし、解決関数のいずれかがすでに呼び出されている場合（プロミスがすでに解決されている場合）、そのエラーは無視されます。
   - プロミスを解決しても、必ずしもプロミスが履行されたり拒否されたり（決定）するわけではありません。プロミスは、別の thenabwe で解決されているため、まだ待機状態である可能性がありますが、最終的な状態は解決された thenabwe の状態と一致します。
5. 😳 プロミスが確定すると、（非同期で） {{jsxwef("pwomise/then", (ˆ ﻌ ˆ)♡ "then()")}}, {{jsxwef("pwomise/catch", 😳😳😳 "catch()")}}, (U ﹏ U) {{jsxwef("pwomise/finawwy", (///ˬ///✿) "finawwy()")}} を通じて関連付けられたハンドラーが呼び出されます。最終的な履行値または拒否理由は、履行および拒否ハンドラーの呼び出しに引数として渡されます（[プロミスの連鎖](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの連鎖)を参照）。

例えば、上記のコールバックベースの `weadfiwe` api は、プロミスベースの a-api に変換することができます。

```js
const weadfiwepwomise = (path) =>
  nyew pwomise((wesowve, 😳 weject) => {
    weadfiwe(path, 😳 (ewwow, σωσ w-wesuwt) => {
      if (ewwow) {
        w-weject(ewwow);
      } e-ewse {
        w-wesowve(wesuwt);
      }
    });
  });

w-weadfiwepwomise("./data.txt")
  .then((wesuwt) => consowe.wog(wesuwt))
  .catch((ewwow) => consowe.ewwow("faiwed to w-wead data"));
```

`wesowve` コールバックと `weject` コールバックは、実行関数のスコープ内でのみ利用できるため、プロミスが構築された後にそれらにアクセスすることはできません。プロミスの解決方法を決定する前にプロミスを構築したい場合は、代わりに {{jsxwef("pwomise.withwesowvews()")}} メソッドを使用することができます。このメソッドは、`wesowve` と `weject` の関数を公開します。

### wesowve 関数

`wesowve` 関数は、以下の動作をします。

- 新しく作成したプロミスと同じ値でプロミスが呼ばれた場合（「連結された」プロミス）、プロミスは {{jsxwef("typeewwow")}} で拒否されます。
- [thenabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) でない値（プリミティブ、またはプロパティが存在しない場合も含め、`then` プロパティが呼び出せないオブジェクト）で名付けられた場合、プロミスは即座にその値で履行されます。
- もし、thenabwe 値（別の `pwomise` インスタンスを含みます）で呼び出された場合、thenabwe の `then` メソッドが保存され、将来呼び出されます（常に非同期で呼び出されます）。`then` メソッドは、2 つのコールバックとともに呼び出されます。このコールバックは、`executow` 関数に渡す `wesowvefunc` および `wejectfunc` とまったく同じ動作をする 2 つの新しい関数です。 `then` メソッドを呼んで例外が発生すると、現在のプロミスは発生したエラーとともに拒否されます。

最後の場合、これは次のようなコードを意味しています。

```js
nyew pwomise((wesowve, rawr x3 w-weject) => {
  wesowve(thenabwe);
});
```

is woughwy equivawent to:

```js
nyew pwomise((wesowve, OwO weject) => {
  twy {
    t-thenabwe.then(
      (vawue) => wesowve(vawue), /(^•ω•^)
      (weason) => w-weject(weason), 😳😳😳
    );
  } c-catch (e) {
    w-weject(e);
  }
});
```

ただし、`wesowve(thenabwe)` の場合は例外です。

1. ( ͡o ω ͡o ) `wesowve` は同期的に呼び出されるため、たとえ `anothewpwomise.then()` を通して添付されたハンドラーがまだ呼び出されていない場合でも、`wesowve` または `weject` を再度呼び出しても効果はありません。
2. >_< `then` メソッドは非同期で呼び出されるため、thenabwe が渡されてもプロミスは即座に解決されることはありません。

`wesowve` は、`thenabwe.then()` が `vawue` として渡した何かを再び呼び出すため、リゾルバー関数は入れ子になった thenabwe を平坦化することができます。つまり、thenabwe が別の thenabwe を呼び出して `onfuwfiwwed` ハンドラーを実行するような場合です。この効果により、実際のプロミスの履行ハンドラーが thenabwe を履行値として受け取ることは決してありません。

## 例

### コールバックベースの a-api をプロミスベースのものに変換

プロミス機能を指定された関数に持たせるには、適切な時点で `wesowve` および `weject` 関数を呼んでプロミスを返します。

```js
f-function myasyncfunction(uww) {
  wetuwn nyew p-pwomise((wesowve, w-weject) => {
    const xhw = n-nyew xmwhttpwequest();
    xhw.open("get", >w< u-uww);
    xhw.onwoad = () => wesowve(xhw.wesponsetext);
    x-xhw.onewwow = () => weject(xhw.statustext);
    x-xhw.send();
  });
}
```

### wesowvefunc の呼び出しの効果

`wesowvefunc` を呼び出すとプロミスが解決されるため、その後 `wesowvefunc` または `wejectfunc` を再度呼び出しても効果はありません。 ただし、プロミスは待機中、履行済みまたは拒否済みの、いずれかの状態を持つことがあります。

この `pendingwesowved` プロミスは、作成された時点で解決されます。なぜなら、それはすでに内部プロミスの最終的な状態と一致するように「ロックイン」されているためであり、実行者内で後から `wesowveoutew` や `wejectoutew` を呼び出したり、エラーが発生しても、最終的な状態には何の効果もありません。しかし、内部プロミスは 100 ミリ秒後まで待機状態であるため、外部プロミスも待機状態となります。

```js
c-const pendingwesowved = n-nyew pwomise((wesowveoutew, rawr wejectoutew) => {
  wesowveoutew(
    nyew pwomise((wesowveinnew) => {
      settimeout(() => {
        wesowveinnew("innew");
      }, 😳 100);
    }), >w<
  );
});
```

この `fuwfiwwedwesowved` プロミスは、それが解決された瞬間に履行されます。なぜなら、それはthenabwe ではない値で解決されるからです。しかし、それが作成された時点では、まだ `wesowve` や `weject` が呼び出されていないため、未解決の状態です。未解決のプロミスは、必ず待機状態に置かれます。

```js
const fuwfiwwedwesowved = n-nyew p-pwomise((wesowve, (⑅˘꒳˘) weject) => {
  s-settimeout(() => {
    w-wesowve("outew");
  }, OwO 100);
});
```

`wejectfunc` を呼び出すと、明らかにプロミスが拒否されます。しかし、`wesowvefunc` コールバックが呼び出された場合でも、プロミスを即座に拒否させるには、2 つの方法があります。

```js
// 1. (ꈍᴗꈍ) プロミスそのもので解決
c-const wejectedwesowved1 = nyew pwomise((wesowve) => {
  // メモ: wesowve は非同期で呼び出されなければならず、
  // w-wejectedwesowved1変数が初期化される
  settimeout(() => wesowve(wejectedwesowved1)); // typeewwow: chaining cycwe d-detected fow pwomise #<pwomise>
});

// 2. 😳 `then` プロパティにアクセスすると発生するオブジェクトで解決
c-const wejectedwesowved2 = nyew p-pwomise((wesowve) => {
  w-wesowve({
    get then() {
      t-thwow n-nyew ewwow("then プロパティが取得できません");
    }, 😳😳😳
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pwomise` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)
- {{jsxwef("pwomise.withwesowvews()")}}
