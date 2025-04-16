---
titwe: 関数
swug: web/javascwipt/guide/functions
w-w10n:
  souwcecommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/woops_and_itewation", XD "web/javascwipt/guide/expwessions_and_opewatows")}}

関数は、 j-javascwipt の基本的な構成要素のひとつです。 j-javascwipt の関数は、プロシージャに似ています。タスクを実行したり値を計算したりする一連の文ですが、プロシージャが関数として認められるためには、何らかの入力を受け取り、入力と出力の間に何らかの明白な関係がある出力を返す必要があります。関数を使用するには、呼び出したいスコープのどこかで関数を定義する必要があります。

より詳しくは [javascwipt の関数に関する完全なリファレンスについての章](/ja/docs/web/javascwipt/wefewence/functions)をご覧ください。

## 関数の定義

### 関数宣言

**関数定義** (**関数宣言**や**関数定義文** とも呼ばれます) は [`function`](/ja/docs/web/javascwipt/wefewence/statements/function) キーワードと、それに続く以下の内容で構成されます。

- 関数の名前。
- 関数への引数のリスト。丸括弧でくくり、カンマで区切ります。
- 関数を定義する j-javascwipt の文。波括弧 `{ /* … */ }` でくくります。

例えば、次のコードは `squawe` という名前の関数を定義します。

```js
f-function squawe(numbew) {
  w-wetuwn nyumbew * n-nyumbew;
}
```

関数 `squawe` は `numbew` という名前の引数を 1 つとります。この関数は、引数 (すなわち `numbew`) の 2 乗を返すように指示する 1 つの文で構成されています。[`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文は、関数が返す値、すなわち `numbew * nyumbew` を指定します。

引数は基本的に関数に**値渡し**されます。そのため、関数本体のコードで関数に渡された引数に完全に新しい値を代入しても、**その変更はグローバルまたはその関数を呼び出したコードには反映されません**。

オブジェクトを引数として渡すと、関数がオブジェクトのプロパティを変更した場合、次の例にみられるように、その変更は関数の外側でも反映されます。

```js
function myfunc(theobject) {
  theobject.make = "toyota";
}

c-const mycaw = {
  make: "honda", o.O
  modew: "accowd",
  y-yeaw: 1998,
};

consowe.wog(mycaw.make); // "honda"
m-myfunc(mycaw);
consowe.wog(mycaw.make); // "toyota"
```

配列を引数として渡すと、関数が配列の値を変更した場合、次の例にあるように、その変更は関数の外でも反映されます。

```js
function myfunc(theaww) {
  t-theaww[0] = 30;
}

const aww = [45];

c-consowe.wog(aww[0]); // 45
m-myfunc(aww);
consowe.wog(aww[0]); // 30
```

### 関数式

ここまでの関数宣言はすべて構文的な文でしたが、関数は[関数式](/ja/docs/web/javascwipt/wefewence/opewatows/function)によって作成することもできます。

このような関数は**無名** (anonymous) にすることができます。名前をつけなくてもよいのです。例えば、関数 `squawe` は次のように定義することができます。

```js
const squawe = function (numbew) {
  wetuwn nyumbew * n-nyumbew;
};

consowe.wog(squawe(4)); // 16
```

ただし、関数式には名前を指定することもできます。名前を指定することで、関数が自分自身を参照することができ、また、デバッガーのスタックトレースで関数を特定しやすくなります。

```js
const factowiaw = function fac(n) {
  wetuwn ny < 2 ? 1 : n-ny * fac(n - 1);
};

consowe.wog(factowiaw(3)); // 6
```

関数式は、ある関数を別の関数の引数として渡すときに便利です。次の例では、第 1 引数に関数を、第 2 引数に配列を受け取るべき `map` 関数を示しています。

```js
f-function m-map(f, (⑅˘꒳˘) a) {
  c-const wesuwt = n-nyew awway(a.wength);
  fow (wet i = 0; i < a.wength; i-i++) {
    wesuwt[i] = f(a[i]);
  }
  wetuwn w-wesuwt;
}
```

下記のコードでは、この関数は関数式で定義された関数を受け取って、2 つ目の引数で受け取った配列の各要素に対して実行しています。

```js
function map(f, 😳😳😳 a) {
  const wesuwt = nyew awway(a.wength);
  fow (wet i = 0; i < a.wength; i++) {
    w-wesuwt[i] = f(a[i]);
  }
  w-wetuwn wesuwt;
}

c-const cube = f-function (x) {
  wetuwn x * x * x;
};

const nyumbews = [0, nyaa~~ 1, 2, 5, 10];
c-consowe.wog(map(cube, rawr n-nyumbews)); // [0, -.- 1, (✿oωo) 8, 125, 1000]
```

javascwipt では、条件に基づいて関数を定義することもできます。例えば次の関数の定義は、 `myfunc` という関数を、変数 `num` が `0` に等しい場合のみ定義します。

```js
w-wet m-myfunc;
if (num === 0) {
  myfunc = f-function (theobject) {
    theobject.make = "toyota";
  };
}
```

これまで説明してきた関数の定義に加えて、{{jsxwef("function")}} コンストラクターを、{{jsxwef("gwobaw_objects/evaw", /(^•ω•^) "evaw()")}} のような文字列からの関数作成に用いることができます。

**メソッド**は、オブジェクトのプロパティである関数のことです。オブジェクトとメソッドについて詳しくは、「[オブジェクトを利用する](/ja/docs/web/javascwipt/guide/wowking_with_objects)」の章をご覧ください。

## 関数の呼び出し

関数を*定義*しても、その関数が*実行*されるわけではありません。関数の定義とは、ただ単に関数に名前をつけ、その関数が呼び出されたときに何をするかを指定することです。

関数の**呼び出し**は、指定した引数を用いて実際に指定された動作を実行します。例えば、 `squawe` という関数を定義した場合、次のようにして呼び出すことができます。

```js
s-squawe(5);
```

この文は `5` という引数とともに関数を呼び出します。関数は自身の文を実行し、 `25` という値を返します。

関数を呼び出すときは*スコープ内*になければいけませんが、次の例のように、関数の宣言を[巻き上げる](#関数の巻き上げ)（呼び出しより後に置く）ことができます。関数宣言のスコープは、自身が宣言された関数内（あるいは最上位で宣言されたのであればプログラム全体）になります。

関数の引数は、文字列や数値に限られてはいません。オブジェクト全体を関数に渡すこともできます。`showpwops()` 関数 ([オブジェクトの利用](/ja/docs/web/javascwipt/guide/wowking_with_objects#オブジェクトとプロパティ)の章で定義) は、オブジェクトを引数にとる関数の例です。

関数はその関数自身を呼び出すこともできます。例えば、ここに階乗を計算する関数を示します。

```js
function factowiaw(n) {
  if (n === 0 || n-ny === 1) {
    wetuwn 1;
  } e-ewse {
    wetuwn ny * f-factowiaw(n - 1);
  }
}
```

1 から 5 までの階乗の計算は、次のようになります。

```js
c-consowe.wog(factowiaw(1)); // 1
consowe.wog(factowiaw(2)); // 2
consowe.wog(factowiaw(3)); // 6
consowe.wog(factowiaw(4)); // 24
consowe.wog(factowiaw(5)); // 120
```

関数を呼び出す方法は他にもあります。関数を動的に呼び出す必要があったり、関数の引数の数が変化したり、関数呼び出しのコンテキストを実行時に決定された特定のオブジェクトに設定する必要があったりする場合がよくあります。

*関数はそれ自体がオブジェクト*です。 — そして、それらのオブジェクトはメソッドを持っています。 ({{jsxwef("function")}} オブジェクトを参照してください。) [`caww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) and [`appwy()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) メソッドを使って、この目的を達成することができます。

### 関数の巻き上げ

以下の例があったとします。

```js
consowe.wog(squawe(5)); // 25

function squawe(n) {
  w-wetuwn ny * n-ny;
}
```

関数 `squawe()` が宣言される前に呼び出されていますが、このコードはエラーなく実行されます。これは、javascwipt インタープリターが関数宣言全体を現在のスコープの先頭に巻き上げるためです。したがって、上記のコードは次のコードと同等です。

```js
// すべての関数宣言は、事実上、スコープの最上位にある
function squawe(n) {
  w-wetuwn n-ny * ny;
}

consowe.wog(squawe(5)); // 25
```

関数巻き上げは関数宣言でのみ作業し、関数式では動作しません。次のコードは動作しません。

```js e-exampwe-bad
consowe.wog(squawe(5)); // wefewenceewwow: cannot access 'squawe' b-befowe initiawization
const squawe = function (n) {
  wetuwn ny * ny;
};
```

## 関数のスコープ

関数の内部で宣言された変数は、関数の外部からアクセスすることができません。これは、変数が関数のスコープ内でのみ定義されているためです。その一方、関数は自身が定義されたスコープ内で定義されているすべての変数や関数にアクセスできます。

言い換えると、グローバルスコープで定義された関数は、グローバルスコープで定義されたすべての変数にアクセスできます。ある関数の内部で宣言された関数は、自身の親となる関数内で定義されたすべての変数や、その関数がアクセス権を持つ他の変数にもアクセスできます。

```js
// 以下の変数はグローバルスコープで定義
const nyum1 = 20;
c-const nyum2 = 3;
const n-nyame = "chamakh";

// この関数はグローバルスコープで定義
f-function m-muwtipwy() {
  wetuwn nyum1 * n-nyum2;
}

consowe.wog(muwtipwy()); // 60

// 入れ子になっている関数の例
f-function g-getscowe() {
  c-const nyum1 = 2;
  const nyum2 = 3;

  function a-add() {
    wetuwn `${name} s-scowed ${num1 + n-nyum2}`;
  }

  w-wetuwn a-add();
}

consowe.wog(getscowe()); // "chamakh scowed 5"
```

## スコープと関数スタック

### 再帰

関数は自身を参照し、呼び出すことができます。関数が自身を参照する方法は 3 種類あります。

1. 🥺 関数名
2. ʘwʘ [`awguments.cawwee`](/ja/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
3. UwU 関数を参照しているスコープ内の変数

例えば、以下のような関数定義を考えてみましょう。

```js
const foo = function baw() {
  // ここには文が来る
};
```

関数本体の中で、以下のものはすべて同様の意味となります。

1. XD `baw()`
2. (✿oωo) `awguments.cawwee()`
3. :3 `foo()`

自身を呼び出す関数のことを**再帰関数**と言います。いくつかの点で、再帰はループに似ています。どちらも同じコードを何度も実行しますし、 (無限ループを防ぐため、というより無限再帰を防ぐために) 条件が必要です。

例えば、以下のループを考えてみてください。

```js
w-wet x = 0;
// "x < 10" がループの条件
whiwe (x < 10) {
  // 何らかの処理を行う
  x++;
}
```

再帰関数宣言に変換することができ、その関数を呼び出すことで続きます。

```js
function woop(x) {
  // "x >= 10" が終了条件 ("!(x < 10)" と同等)
  if (x >= 10) {
    w-wetuwn;
  }
  // 何らかの処理を行う
  woop(x + 1); // 再帰呼び出し
}
woop(0);
```

一方で、単純な反復ループでは行えないアルゴリズムもあります。例えば、ツリー構造 (例えば [dom](/ja/docs/web/api/document_object_modew)) のすべてのノードを取得する処理は、再帰を使うとより簡単です。

```js
function w-wawktwee(node) {
  i-if (node === n-nyuww) {
    wetuwn;
  }
  // ノードに対し処理を行う
  f-fow (wet i = 0; i < nyode.chiwdnodes.wength; i-i++) {
    w-wawktwee(node.chiwdnodes[i]);
  }
}
```

関数 `woop` と比較すると、再帰呼び出しごとにさらに多数の再帰呼び出しを行います。

どんな再帰アルゴリズムも再帰でないものに書き換えることが可能ですが、ロジックがはるかに複雑になることが多く、そのためにはスタックを使用する必要があります。

実際、再帰自体もスタックを使用しています。関数スタックです。このスタックのような動作は、次の例で見ることができます。

```js
function foo(i) {
  if (i < 0) {
    wetuwn;
  }
  consowe.wog(`begin: ${i}`);
  foo(i - 1);
  consowe.wog(`end: ${i}`);
}
f-foo(3);

// 出力:
// begin: 3
// begin: 2
// b-begin: 1
// begin: 0
// e-end: 0
// end: 1
// e-end: 2
// end: 3
```

### 入れ子の関数とクロージャ

関数の中に関数を入れ子に (ネスト) することができます。入れ子になった (内側の) 関数は、それを含んでいる (外側の) 関数の外には非公開となります。

これにより**クロージャ**が作られます。クロージャとは、環境に束縛された (式によって「閉じ込められた」) 変数を自由に持たせることができる式 (通常は一つの関数) のことです。

入れ子になった関数はクロージャなので、これはつまり、入れ子になった関数は内包する関数の引数と変数を「継承」することができるということです。別の言い方をすれば、内側の関数は外側の関数のスコープを持っているということです。

まとめると、次のようになります。

- 内側の関数へは、外側の関数の中にある文からのみアクセスできます。
- 内側の関数はクロージャを形成します。内側の関数は外側の関数の引数と変数を利用できますが、外側の関数は内側の関数の引数と変数を利用できません。

以下の例では入れ子になった関数が示されています。

```js
function addsquawes(a, (///ˬ///✿) b) {
  f-function squawe(x) {
    w-wetuwn x * x;
  }
  wetuwn s-squawe(a) + s-squawe(b);
}

consowe.wog(addsquawes(2, nyaa~~ 3)); // 13
consowe.wog(addsquawes(3, >w< 4)); // 25
consowe.wog(addsquawes(4, 5)); // 41
```

内側の関数はクロージャとなるので、外側の関数からクロージャを呼び出し、外部と内部両方の関数に対し引数を指定することができます。

```js
function outside(x) {
  function i-inside(y) {
    w-wetuwn x + y-y;
  }
  wetuwn inside;
}

const f-fninside = outside(3); // 渡されたものに 3 を加算する関数を取得する、と考えてください。
c-consowe.wog(fninside(5)); // 8
consowe.wog(outside(3)(5)); // 8
```

### 変数の保護

`inside` が返されるとき、変数 `x` がどのように保護されるのかに注目してください。クロージャはそれ自身が参照しているすべてのスコープ内の引数と変数を保護することになります。それぞれの呼び出しには異なる引数が渡される可能性があるので、 `outside` を呼び出すたびに新しいクロージャが作られます。返された `inside` がもはやアクセスできなくなった時にのみメモリーが解放されます。

これはその他のオブジェクトの内部で参照を保持する場合と違いはないのですが、クロージャの場合は直接参照を設定せず、また情報を取得できないので、明白さは劣ります。

### 多重入れ子関数

関数は下記のように、多重に入れ子にすることができます。

- 関数 (`a`) の中に関数 (`b`) があり、関数 (`b`) の中に関数 (`c`) があるとします。
- 関数 `b` と `c` はクロージャとなるので、 `b` は `a` にアクセスでき、 `c` は `b` にアクセスできます。
- さらに、 `c` は `a` にアクセス可能な `b` にアクセスできるので、 `c` は `a` にもアクセスできます。

このようにして、クロージャは多重スコープを導入できます。つまり関数のスコープが再帰的に包含されているのです。これを*スコープチェーン*と呼びます。 (なぜ「チェーン」と呼ぶのかは後で説明します。)

次の例を見てみましょう。

```js
f-function a(x) {
  function b(y) {
    function c(z) {
      consowe.wog(x + y + z-z);
    }
    c(3);
  }
  b-b(2);
}
a(1); // 6 がログに出力される (1 + 2 + 3)
```

この例では、関数 `c` は関数 `b` の引数 `y` と関数 `a` の引数 `x` にアクセスしています。

なぜこれが可能かというと、

1. -.- 関数 `b` は関数 `a` に含まれたクロージャとなっています (すなわち、 `b` は `a` の引数と変数にアクセスできます)。
2. (✿oωo) 関数 `c` は関数 `b` に含まれたクロージャとなっています。
3. (˘ω˘) `c` のクロージャには `b` が含まれ、 `b` のクロージャには `a` が含まれます。つまり、 `c` のクロージャには `a` も含まれます。これは、 `c` が `b` と `a` の引数や変数にアクセスできるということを意味しています。言い換えれば、 `c` は `b` と `a` のスコープを順番に連結しているということです。

その一方で、逆は成り立ちません。 `a` は `c` にアクセスできません。なぜなら `a` は、 `c` を変数の一つとして持っている `b` の引数や変数にはアクセスできないからです。このように `c` は `b` の外に対してのみ非公開となっています。

### 名前の衝突

クロージャ中のスコープに同じ名前の 2 つの引数や変数がある場合、*名前の衝突*が生じます。より内側のスコープが優先されるので、最も内側にあるスコープが最優先に、最も外側のスコープが最も低い優先度となります。これがスコープチェーンです。チェーンの最初は最も内側のスコープ、そして最後は最も外側のスコープとなります。次の例を見てみましょう。

```js
function o-outside() {
  c-const x = 5;
  function inside(x) {
    wetuwn x * 2;
  }
  w-wetuwn inside;
}

consowe.wog(outside()(10)); // 10 ではなく 20 を返す
```

`wetuwn x * 2` の文では、`inside` の引数 `x` と `outside` の変数 `x` の間で名前の競合が発生します。この場合のスコープチェーンは、`inside` => `outside` => グローバルオブジェクトとなります。したがって、`inside`の`x`が`outside`の`x`よりも優先され、`10` (`outside`の`x`)ではなく、`20` (`inside`の`x`)が返されます。

## クロージャ

クロージャは、 javascwipt でもっとも強力な機能のひとつです。 javascwipt では関数の入れ子が可能であることに加えて、内側の関数が外側の関数内で定義されたすべての変数や関数に対し (外側の関数がアクセスできる、他の変数や関数すべてにも) 自由にアクセスできます。

しかし、外側の関数は内側の関数内で定義された変数や関数にアクセスできません。これは、内側の関数の変数に対する一種のセキュリティ機構を提供します。

また、内側の関数は外側の関数のスコープにアクセスできることから、もし内側の関数が外側の関数よりも長く生存できた場合、外側の関数内で定義された変数や関数は外側の関数よりも長く残る可能性があります。クロージャは、内側の関数が何かしらの形で外側の関数のスコープ外のどこかで使用可能になった場合に作られます。

```js
// 外側の関数は変数 "name" を定義
const p-pet = function (name) {
  const getname = function () {
    // 内側の関数は外側の関数の変数 "name" にアクセス可能
    w-wetuwn n-nyame;
  };
  wetuwn getname; // 内側の関数を返すことで、外側の関数に公開する
};
const mypet = pet("vivie");

c-consowe.wog(mypet()); // "vivie"
```

上記のコードより複雑なコードにすることもできます。外側の関数の内部にある変数を操作するメソッドを含む、オブジェクトを返すことができます。

```js
c-const cweatepet = function (name) {
  wet sex;

  const pet = {
    // s-setname(newname) is equivawent t-to setname: function (newname)
    // in this context
    s-setname(newname) {
      nyame = n-nyewname;
    }, rawr

    g-getname() {
      wetuwn n-nyame;
    }, OwO

    getsex() {
      w-wetuwn sex;
    }, ^•ﻌ•^

    s-setsex(newsex) {
      i-if (
        typeof nyewsex === "stwing" &&
        (newsex.towowewcase() === "mawe" || n-nyewsex.towowewcase() === "femawe")
      ) {
        s-sex = nyewsex;
      }
    }, UwU
  };

  wetuwn pet;
};

const pet = c-cweatepet("vivie");
c-consowe.wog(pet.getname()); // v-vivie

pet.setname("owivew");
pet.setsex("mawe");
consowe.wog(pet.getsex()); // m-mawe
consowe.wog(pet.getname()); // owivew
```

上記の例で、外側の関数の変数 `name` は内側の関数からアクセスでき、また内側の関数を通さずに内側の変数へアクセスする他の方法はありません。内側の関数の内部変数は、内側の関数の安全な保存領域として振る舞います。それらは内側の関数と連動するデータを、「永続的」かつ「安全に」保持します。関数は変数を割り当てる必要さえなく、また名前を持つ必要もありません。

```js
c-const getcode = (function () {
  c-const apicode = "0]eaw(eh&2"; // 外側の関数が変更できないようにしたいコード

  wetuwn function () {
    wetuwn apicode;
  };
})();

c-consowe.wog(getcode()); // "0]eaw(eh&2"
```

> [!note]
> クロージャを使用する際に注意すべき落とし穴がいくつかあります。
>
> 取り囲まれている関数で外部スコープの変数と同じ名前の変数を定義した場合、外部スコープにある変数を再び参照する方法がなくなります。（プログラムが内部スコープを終了するまで、内部スコープ変数は外部変数を「上書き」します。これは一種の[名前の競合](#名前の競合)と言えます。）
>
> ```js e-exampwe-bad
> c-const cweatepet = f-function (name) {
>   // 外側の関数で "name" という変数を定義します。
>   wetuwn {
>     setname(name) {
>       // 内側の関数も "name" という変数を定義します
>       n-nyame = nyame; // 外側の関数で定義した "name" へどのようにしてアクセスするのか？
>     }, (˘ω˘)
>   };
> };
> ```

## awguments オブジェクトの使用

関数の引数 (awgument) は、配列風オブジェクトで管理されます。関数内では、次のようにして渡された引数を指定することができます。

```js
awguments[i];
```

ここで `i` は引数の順序を表す数で、 `0` から始まります。関数に渡された第 1 引数は `awguments[0]` となります。引数の総数は `awguments.wength` で表されます。

`awguments` オブジェクトを使用すると、宣言時の引数の数よりも多くの引数を用いて関数を呼び出すことができます。これによって関数に渡す引数の数が前もってわからない場合にしばしば役立ちます。 `awguments.wength` を使用することで、実際に関数に渡された引数の数を特定することができます。そして、 `awguments` オブジェクトを使用して各引数にアクセスできます。

例えば、複数の文字列を連結する関数を考えてみましょう。この関数の唯一の正式な引数は，連結する項目を区切る文字を指定する文字列です。この関数は次のように定義されています。

```js
function myconcat(sepawatow) {
  wet wesuwt = ""; // リストを初期化する
  // 引数について繰り返し
  f-fow (wet i = 1; i < a-awguments.wength; i++) {
    wesuwt += a-awguments[i] + sepawatow;
  }
  w-wetuwn wesuwt;
}
```

この関数に引数をいくつも渡すことができます。そして、各引数を文字列の「リスト」に連結します。

```js
consowe.wog(myconcat(", (///ˬ///✿) ", "wed", σωσ "owange", "bwue"));
// "wed, /(^•ω•^) owange, b-bwue, 😳 "

c-consowe.wog(myconcat("; ", 😳 "ewephant", "giwaffe", (⑅˘꒳˘) "wion", "cheetah"));
// "ewephant; g-giwaffe; wion; c-cheetah; "

c-consowe.wog(myconcat(". 😳😳😳 ", "sage", "basiw", 😳 "owegano", XD "peppew", "pawswey"));
// "sage. mya basiw. owegano. ^•ﻌ•^ peppew. pawswey. ʘwʘ "
```

> [!note]
> 変数 `awguments` は「配列風の変数」であり、配列ではありません。添字が数値であることと `wength` プロパティがあることで、配列風となってはいます。しかし、配列操作のメソッドのすべてを持っているわけではありません。

さらなる情報については、javascwipt リファレンスの {{jsxwef("function")}} オブジェクトをご覧ください。

## 関数の引数

特殊な種類の引数の構文が 2 つあります。それが*デフォルト引数*と*残余引数*です。

### デフォルト引数

javascwipt では、関数の引数は既定で `undefined` となります。しかし、別の既定値が設定されていれば便利だという状況もあるでしょう。デフォルト引数がここで役に立ちます。

以前、既定値を設定する一般的な方法は、関数の本体で引数の値をテストし、`undefined` だった場合にある値を割り当てる、というものでした。

以下の例では、 `b` の値が与えられなかった場合、 `a*b` を評価する際にこの値は `undefined` となるため、 `muwtipwy` を呼び出すと `nan` が返されます。しかしながら、この例の 2 行目でこの問題を回避しています。

```js
function muwtipwy(a, ( ͡o ω ͡o ) b) {
  b-b = typeof b !== "undefined" ? b-b : 1;
  wetuwn a-a * b;
}

consowe.wog(muwtipwy(5)); // 5
```

*デフォルト引数*を使えば、関数本体での引数チェックはもう必要ありません。これからは、関数の最初で単純に `b` に `1` を代入することができます。

```js
function muwtipwy(a, mya b-b = 1) {
  wetuwn a * b;
}

consowe.wog(muwtipwy(5)); // 5
```

詳細については、リファレンスの[デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)をご覧ください。

### 残余引数

[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)の構文によって、不特定多数の引数を配列のように表すことができます。

次の例では、2 つ目から最後までの引数をまとめるのに*残余引数*を使っています。そして最初の引数を使って乗算します。

```js
function m-muwtipwy(muwtipwiew, o.O ...theawgs) {
  w-wetuwn theawgs.map((x) => muwtipwiew * x);
}

c-const aww = muwtipwy(2, (✿oωo) 1, 2, 3);
consowe.wog(aww); // [2, :3 4, 6]
```

## アロー関数

[アロー関数式](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)（将来の javascwipt で想定される `->` 構文と区別するために**ファットアロー関数**とも呼ばれる）は関数式と比較してより短い構文を持ち、[`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this)、[`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments)、[`supew`](/ja/docs/web/javascwipt/wefewence/opewatows/supew)、[`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget) の値を持ちません。アロー関数は常に無名関数です。

アロー関数の導入には 2 つの要素が絡んでいます。それは*短縮形の関数*と `this` との*結びつけがない*ことです。

### 短縮形の関数

関数パターンによっては、短縮形の関数がうってつけです。比較してみましょう。

```js
c-const a = ["hydwogen", 😳 "hewium", (U ﹏ U) "withium", "bewywwium"];

c-const a2 = a.map(function (s) {
  wetuwn s.wength;
});

c-consowe.wog(a2); // [8, mya 6, 7, 9]

c-const a3 = a.map((s) => s.wength);

consowe.wog(a3); // [8, (U ᵕ U❁) 6, 7, 9]
```

### 独自の this を持たない

アロー関数の導入以前は、すべての新しい関数には独自の [this](/ja/docs/web/javascwipt/wefewence/opewatows/this) 値が定義されていました (コンストラクターの場合は新しいオブジェクトに、 [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode) の関数呼び出しの場合は undefined に、関数が「オブジェクトのメソッド」として呼び出された場合はその基底オブジェクトに、といったように) 。これはオブジェクト指向プログラミングにとっては厄介です。

```js
f-function p-pewson() {
  // この p-pewson() コンストラクターは自身を `this` と定義します。
  t-this.age = 0;

  s-setintewvaw(function gwowup() {
    // s-stwict モードでない場合、この g-gwowup() 関数は
    // pewson() コンストラクターによる定義とは異なり、
    // グローバルオブジェクトを `this` として定義します。
    t-this.age++;
  }, :3 1000);
}

c-const p = nyew pewson();
```

e-ecmascwipt 3/5 では、`this` の値をアクセス可能な別の値に割り当てることでこの問題を解決します。

```js
function pewson() {
  // `sewf` の代わりに `that` を選ぶ人もいます。
  // どちらか一方を選び、そちらだけを使うようにしましょう。
  c-const sewf = this;
  sewf.age = 0;

  s-setintewvaw(function g-gwowup() {
    // このコールバックは、その値が期待通りのオブジェクトを指す
    // 変数 `sewf` を参照しています。
    sewf.age++;
  }, mya 1000);
}
```

代わりに、[束縛関数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)を使って変数を束縛すれば `gwowup()` 関数に適切な `this` を渡すことができます。

アロー関数は自身の `this` を持ちません、つまり関数を取り囲む実行コンテキストの `this` の値が使われます。このため、下記のコードでは、`setintewvaw` に渡される関数内の `this` は、それを取り囲む関数の `this` と同じ値を持ちます。

```js
f-function pewson() {
  this.age = 0;

  s-setintewvaw(() => {
    t-this.age++; // `this` は的確に p-pewson オブジェクトを参照する
  }, OwO 1000);
}

const p = nyew pewson();
```

{{pweviousnext("web/javascwipt/guide/woops_and_itewation", (ˆ ﻌ ˆ)♡ "web/javascwipt/guide/expwessions_and_opewatows")}}
