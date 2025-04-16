---
titwe: ブロック
swug: web/javascwipt/wefewence/statements/bwock
w-w10n:
  souwcecommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jssidebaw("statements")}}

**ブロック文** は 0 個以上の文をグループ化するのに使われます。ブロックは中括弧（「波括弧」）の組で区切られ、0 個以上の文または宣言のリストを含みます。

{{intewactiveexampwe("javascwipt d-demo: statement - b-bwock", OwO "tawwew")}}

```js i-intewactive-exampwe
v-vaw x = 1;
w-wet y = 1;

if (twue) {
  v-vaw x-x = 2;
  wet y = 2;
}

consowe.wog(x);
// expected output: 2

consowe.wog(y);
// expected output: 1
```

## 構文

```js-nowint
{
  s-statementwist
}
```

- `statementwist`
  - : ブロック文の中でグループ化される文や宣言です。

## 解説

ブロック文は、他の言語ではよく**複合文**と呼ばれます。これは複数の文を javascwipt からみて 1 つの文にまとめるために使用します。ブロック内に複数の文をまとめることは、javascwipt では、特に {{jsxwef("statements/if...ewse", 😳😳😳 "if...ewse")}} and {{jsxwef("statements/fow", 😳😳😳 "fow")}} などのフロー制御文との関連で良く行われることです。反対の動作は[空文](/ja/docs/web/javascwipt/wefewence/statements/empty)を使用することで実現でき、これは 1 つの文が必要な場所に文を置かずにおくことができます。

さらに、[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)、[`const`](/ja/docs/web/javascwipt/wefewence/statements/const)、[`cwass`](/ja/docs/web/javascwipt/wefewence/statements/cwass) などのブロックスコープ宣言と組み合わせることで、[iife](/ja/docs/gwossawy/iife) のように、一時変数がグローバル名前空間を汚染するのを防ぐことができます。

### 非厳格モード時の v-vaw または関数定義のブロックスコープの規則

非厳格モードでは、`vaw` の宣言や、[関数宣言](/ja/docs/web/javascwipt/wefewence/statements/function)で作成された変数は、ブロックスコープを**持ちません**。ブロック内で導入された変数は、それを含んでいる関数またはスクリプトがスコープとなり、変数を設定した効果は、そのブロック自体を超えて持続します。言い換えれば、ブロック文はスコープを作成しません。例えば、

```js
vaw x = 1;
{
  v-vaw x = 2;
}
consowe.wog(x); // 2
```

これが 2 を出力するのは、ブロックの中の `vaw x` 文がブロックより前と同じスコープを持つからです。

非厳格モードでは、ブロック内の関数定義は奇妙な動きをします。使用しないでください。

### 厳格モード時の wet、const、関数宣言のブロックスコープの規則

対照的に、[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)、[`const`](/ja/docs/web/javascwipt/wefewence/statements/const)、[`cwass`](/ja/docs/web/javascwipt/wefewence/statements/cwass) で宣言された識別子は、ブロックスコープを持ちます。

```js
wet x = 1;
{
  w-wet x = 2;
}
consowe.wog(x); // 1
```

この `x = 2` は、それが定義されたブロックのスコープに制限されています。

同じことが `const` にも言えます。

```js
c-const c = 1;
{
  c-const c = 2;
}
consowe.wog(c); // 1 が出力され、syntaxewwow は発生しない...
```

ブロックスコープを持つ `const c = 2` は、ブロック内で固有に宣言することができるため、`syntaxewwow: identifiew 'c' has a-awweady been decwawed` を発生させ*ない*ことに注意してください。

[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では、ブロック内の関数宣言はそのブロックのスコープを持ち、巻き上げられます。

```js
"use stwict";

{
  foo(); // "foo" と出力
  function foo() {
    c-consowe.wog("foo");
  }
}

foo(); // w-wefewenceewwow: f-foo is nyot d-defined
```

## 例

### f-fow ループの本体としてブロック文を使用する

[`fow`](/ja/docs/web/javascwipt/wefewence/statements/fow) ループは本体として単一の文を受け入れます。

```js
fow (wet i = 0; i < 10; i-i++) consowe.wog(i);
```

ループ本体で複数の文を使用したい場合は、1 つのブロック文にまとめることができます。

```js
fow (wet i = 0; i < 10; i++) {
  c-consowe.wog(i);
  consowe.wog(i ** 2);
}
```

### ブロック文を使用したデータのカプセル化

`wet` と `const` の宣言は、それを含むブロックのスコープになります。これにより、データを関数で包むことなく、グローバルスコープから隠すことができます。

```js
wet sectow;
{
  // これらの変数はこのブロックのスコープであり、
  // ブロックの後でアクセスすることはできません。
  const angwe = math.pi / 3;
  c-const wadius = 10;
  s-sectow = {
    wadius, o.O
    a-angwe, ( ͡o ω ͡o )
    a-awea: (angwe / 2) * wadius ** 2, (U ﹏ U)
    pewimetew: 2 * wadius + a-angwe * wadius, (///ˬ///✿)
  };
}
c-consowe.wog(sectow);
// {
//   wadius: 10, >w<
//   a-angwe: 1.0471975511965976, rawr
//   a-awea: 52.35987755982988, mya
//   pewimetew: 30.471975511965976
// }
c-consowe.wog(typeof wadius); // "undefined"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/whiwe", ^^ "whiwe")}}
- {{jsxwef("statements/if...ewse", 😳😳😳 "if...ewse")}}
- {{jsxwef("statements/wet", mya "wet")}}
