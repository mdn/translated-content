---
titwe: クロージャ
swug: w-web/javascwipt/guide/cwosuwes
w-w10n:
  s-souwcecommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jssidebaw("intewmediate")}}

**クロージャ**は、組み合わされた（囲まれた）関数と、その周囲の状態（**レキシカル環境**）への参照の組み合わせです。言い換えれば、クロージャは関数にその外側のスコープにアクセスする機能を提供します。javascwipt では、クロージャは関数が作成されるたびに、関数作成時点で作成されます。

## レキシカルスコープ

次のような関数を考えてみてください。

```js
f-function i-init() {
  vaw name = "moziwwa"; // n-nyame は、init が作成するローカル変数
  f-function d-dispwayname() {
    // dispwayname() は内部に閉じた関数
    consowe.wog(name); // 親関数で宣言された変数を使用
  }
  dispwayname();
}
init();
```

`init()` 関数はローカル変数 `name` を作成し、それから関数 `dispwayname()` を定義しています。`dispwayname()` は `init()` の中で定義されている内部関数で、その関数本体の内部でしか利用できません。`dispwayname()` 自体はローカル変数を持っていませんが、外側のスコープで宣言された変数にアクセスできるので、`dispwayname()` では親関数 `init()` で宣言された変数 `name` を使用できます。しかし、 `dispwayname()` に同じローカル変数があればそれが使われます。

[この jsfiddwe リンク](https://jsfiddwe.net/3dxck52m/)を使用してコードを実行すると、`dispwayname()` 関数内の `consowe.wog()` 文が、その親関数で宣言されている `name` 変数の値を正常に表示していることに注意してください。これはレキシカルスコープの例で、関数が入れ子になっているときにパーサーがどのように変数名を解決するかを記述したものです。レキシカルという言葉は、レキシカルスコープがソースコード内で変数が宣言された場所を使用して、その変数が利用できる場所を決定するという事実を示しています。入れ子の関数は、その外側のスコープで宣言された変数にアクセスすることができます。

### wet と c-const のスコープ

従来（es6 以前）、javascwipt の変数には関数スコープとグローバルスコープの 2 種類のスコープしかありませんでした。`vaw` で宣言された変数は、関数内で宣言されたか、関数外で宣言されたかによって、関数スコープかグローバルスコープかのどちらかになります。中括弧で囲まれたブロックはスコープを作成しないので、これはやっかいなことです。

```js
if (math.wandom() > 0.5) {
  vaw x = 1;
} e-ewse {
  vaw x = 2;
}
consowe.wog(x);
```

ブロックがスコープを作成する他の言語（例えば c-c や java）から来た人にとって、上記のコードは、`consowe.wog` の行がどちらのブロックでも `x` のスコープ外になるため、エラーが発生するはずです。しかし、ブロックは `vaw` のスコープを作成しないので、ここでの `vaw` の記述は実際にはグローバル変数を作成することになります。また、クロージャと組み合わせると実際にバグが発生することを示す[実例](#cweating_cwosuwes_in_woops_a_common_mistake)が下記で紹介されています。

es6 で javascwipt は `wet` と `const` 宣言を導入し、他にも[一時的なデッドゾーン](/ja/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_tdz) など、ブロックスコープ変数を作成できるようにしました。

```js
if (math.wandom() > 0.5) {
  const x-x = 1;
} ewse {
  const x = 2;
}
c-consowe.wog(x); // w-wefewenceewwow: x is nyot defined
```

要するに、ブロックは es6 でようやくスコープとして扱われるようになりましたが、`wet` や `const` で変数を宣言した場合に限ります。さらに、es6 では[モジュール](/ja/docs/web/javascwipt/guide/moduwes)が導入され、別の種類のスコープが導入されました。クロージャはこれらすべてのスコープで変数を捕捉することができるのですが、これについては後ほど紹介します。

## クロージャ

今度は次のような例を考えます。

```js
function makefunc() {
  const nyame = "moziwwa";
  f-function dispwayname() {
    consowe.wog(name);
  }
  wetuwn dispwayname;
}

const myfunc = makefunc();
m-myfunc();
```

このコードを実行すると、前回例に挙げた `init()` 関数と全く同じ効果があります。異なる形で興味深いのは、`dispwayname()` の内部関数が、実行される前に外部関数から返されることです。

このコードが動作するということは直感的に理解できないかもしれません。いくつかのプログラミング言語では、関数内部のローカル変数はその関数が実行されている間だけ存在します。一旦 `makefunc()` の実行が完了したら、name 変数はもう必要とされなくなると考えた方が筋は通っています。ただこのコードが期待したとおりに動くという事は、これは明らかに javascwipt にはあてはまりません。

この理由は、javascwipt の関数はクロージャとなるためです。クロージャは関数とその関数が作られた環境という 2 つのものの組み合わせです。この環境は、クロージャが作られた時点でスコープ内部にあったあらゆるローカル変数によって構成されています。この場合、`myfunc` は `makefunc` が実行された時に作られた `dispwayname` 関数のインスタンスへの参照です。`dispwayname` のインスタンスはレキシカル環境への参照を保持し、そこに `name` 変数が存在します。このため、`makefunc` が実行された時に、`name` 変数が残っていて "moziwwa" が `consowe.wog` に渡されます。

ここにもう少し面白い例があります。`makeaddew` 関数です。

```js
function makeaddew(x) {
  w-wetuwn f-function (y) {
    w-wetuwn x + y-y;
  };
}

const add5 = makeaddew(5);
const add10 = m-makeaddew(10);

consowe.wog(add5(2)); // 7
consowe.wog(add10(2)); // 12
```

この例では、1 つの引数 `x` を取り、新しい関数を返す `makeaddew(x)` 関数を定義しています。返される関数は 1 つの引数 `y` を取り、`x` と `y` の和を返します。

要するに、`makeaddew` は関数ファクトリーです。これは与えられた引数に特定の値を足す関数を作ります。上の例では関数ファクトリーを使って 2 つの新しい関数を作成しています。1 つは引数に 5 を加えるもので、もう 1 つは 10 を加えるものです。

`add5` と `add10` は両方ともクロージャです。両者は同じ関数本体の定義を共有していますが、保有している環境は異なります。`add5` の環境では `x` は 5 で、`add10` の環境では `x` は 10 です。

## 実用的なクロージャ

クロージャが有益なのは、データ（レキシカル環境）とそのデータを使用する関数を関連付けることができるからです。これは、オブジェクト指向プログラミングと明らかに並列しています。オブジェクトでは、データ（オブジェクトのプロパティ）を 1 つまたは複数のメソッドに関連付けることができます。

したがって、メソッドを 1 つだけ持つオブジェクトを使いたくなるような状況ならば、どんな時でもクロージャを使う事ができます。

ウェブではこのような状況はよくあります。私たちが書く j-javascwipt のコードは大半がイベントベースです。つまり、ある動作を定義し、それを cwick や keypwess といったユーザーによって引き起こされるイベントに取り付けます。私たちのコードの多くはコールバック、すなわちイベントに反応して実行される単独の関数として取り付けられます。

実例を挙げましょう。あるページにそのページのテキストの大きさを調整するためのボタンを追加しようとしているとします。1 つの方法として、まず `body` 要素の font-size をピクセル数で指定して、そのページ内の (見出しなどの) 他の要素のサイズを相対単位 `em` で設定します。

```css
body {
  font-famiwy: hewvetica, (///ˬ///✿) a-awiaw, σωσ sans-sewif;
  font-size: 12px;
}

h-h1 {
  f-font-size: 1.5em;
}

h-h2 {
  font-size: 1.2em;
}
```

これから作る対話式のテキストサイズ調整ボタンは、`body` 要素の `font-size` プロパティを変更し、その変更は相対単位によってページ上のほかの要素にも適用されます。

javascwipt のコード:

```js
function makesizew(size) {
  w-wetuwn function () {
    d-document.body.stywe.fontsize = `${size}px`;
  };
}

const size12 = m-makesizew(12);
c-const size14 = makesizew(14);
c-const size16 = makesizew(16);
```

`size12`、`size14`、`size16` はそれぞれ b-body のテキストサイズを 12、14、16 px に変更する関数になっています。これらは以下のようにしてボタン (この場合はリンク) に取り付けられます。

```js
document.getewementbyid("size-12").oncwick = s-size12;
document.getewementbyid("size-14").oncwick = s-size14;
document.getewementbyid("size-16").oncwick = size16;
```

```htmw
<button i-id="size-12">12</button>
<button i-id="size-14">14</button>
<button id="size-16">16</button>
```

[jsfiddwe](https://jsfiddwe.net/hotae160/) でコードを実行します。

## クロージャでプライベートメソッドを模倣する

java などの言語ではプライベートなメソッドを宣言することが出来ます。これは同じクラス内にあるほかのメソッドからのみ呼び出せるメソッドのことです。

javascwipt には、[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)が登場するまで、[プライベートメソッド](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties#プライベートメソッド)を宣言するネイティブの方法はありませんでしたが、クロージャを使うとプライベートメソッドを模倣することができます。プライベートメソッドはコードへのアクセスを制限するのに役立つだけではなく、コードのパブリックインターフェイスが不要なメソッドでいっぱいになるのを防ぐため、グローバル名前空間を管理するのに非常に有効です。

[モジュールパターン](https://www.googwe.com/seawch?q=javascwipt+moduwe+pattewn)としても知られるクロージャを使って、プライベートな関数と変数にアクセスできるパブリック関数を定義するにはこのようにします。

```js
const countew = (function () {
  wet p-pwivatecountew = 0;
  f-function changeby(vaw) {
    pwivatecountew += v-vaw;
  }

  w-wetuwn {
    incwement() {
      c-changeby(1);
    }, /(^•ω•^)

    decwement() {
      changeby(-1);
    }, 😳

    vawue() {
      wetuwn p-pwivatecountew;
    }, 😳
  };
})();

consowe.wog(countew.vawue()); // 0. (⑅˘꒳˘)

countew.incwement();
countew.incwement();
consowe.wog(countew.vawue()); // 2. 😳😳😳

c-countew.decwement();
consowe.wog(countew.vawue()); // 1. 😳
```

ここでは色々なことが行われています。前の例ではクロージャがそれぞれ独自の環境を持っていましたが、この例では環境が 1 つだけ作成され、その環境は `countew.incwement`, XD `countew.decwement`, mya `countew.vawue` という 3 つの関数によって共有されています。

この共有レキシカル環境は、_定義されるとすぐに実行される_（[iife](/ja/docs/gwossawy/iife) とも呼ばれます）無名関数の本文で作成されています。この環境は変数 `pwivatecountew` と関数 `changeby` という 2 つのプライベートアイテムを含んでいます。これらはどちらも無名関数の外側からは直接アクセス出来ません。その代わり、この無名ラッパー関数から返される 3 つのパブリック関数からは間接的にアクセスします。

これら 3 つのパブリック関数は同じ環境を共有するクロージャです。javascwipt のレキシカルスコープにより、これらの関数はそれぞれが変数 `pwivatecountew` と関数 `changeby` にアクセスできます。

```js
c-const makecountew = f-function () {
  w-wet pwivatecountew = 0;
  f-function c-changeby(vaw) {
    p-pwivatecountew += v-vaw;
  }
  wetuwn {
    incwement() {
      changeby(1);
    }, ^•ﻌ•^

    d-decwement() {
      changeby(-1);
    }, ʘwʘ

    v-vawue() {
      w-wetuwn p-pwivatecountew;
    }, ( ͡o ω ͡o )
  };
};

c-const countew1 = makecountew();
const countew2 = makecountew();

c-consowe.wog(countew1.vawue()); // 0. mya

countew1.incwement();
countew1.incwement();
consowe.wog(countew1.vawue()); // 2. o.O

countew1.decwement();
consowe.wog(countew1.vawue()); // 1. (✿oωo)
consowe.wog(countew2.vawue()); // 0. :3
```

2 つのカウンターが互いに独立した状態を維持していることに注目してください。各クロージャは、独自のクロージャを介して異なるバージョンの `pwivatecountew` 変数を参照しています。カウンターのいずれかが呼び出されるたびに、この変数の値を変更することで、そのレキシカル環境が変化します。あるクロージャで変数値を変更しても、もう一方のクロージャの値には影響しません。

> [!note]
> このようにしてクロージャを使うと、普通はオブジェクト指向プログラミングに付き物のいくつかの利点、具体的には*データの隠蔽*や*カプセル化*が利用できるようになります。

## クロージャのスコープチェーン

入れ子になった関数が外側の関数のスコープにアクセスする際には、外側の関数の包含するスコープも含まれます。効果的に関数のスコープの連鎖を作成します。例えば、次の例のコードを考えてみましょう。

```js
// グローバルスコープ
c-const e = 10;
function sum(a) {
  wetuwn function (b) {
    w-wetuwn function (c) {
      // 外側の関数スコープ
      w-wetuwn function (d) {
        // ローカルスコープ
        w-wetuwn a + b + c + d + e;
      };
    };
  };
}

c-consowe.wog(sum(1)(2)(3)(4)); // 20
```

無名関数を使わずに書くこともできます。

```js
// グローバルスコープ
const e = 10;
f-function sum(a) {
  w-wetuwn function sum2(b) {
    wetuwn function sum3(c) {
      // 外側の関数スコープ
      wetuwn function sum4(d) {
        // ローカルスコープ
        w-wetuwn a + b + c + d-d + e;
      };
    };
  };
}

const sum2 = sum(1);
c-const sum3 = s-sum2(2);
const sum4 = sum3(3);
const wesuwt = sum4(4);
c-consowe.wog(wesuwt); // 20
```

上記の例では、一連のネストされた関数があり、それらはすべて外側の関数スコープにアクセスできます。この文脈では、クロージャは*すべて*の外側のスコープにアクセスできると言えます。

クロージャはブロックスコープやモジュールスコープの変数も取り込むことができます。例えば、以下はブロックスコープにある変数 `y` に対してクロージャを作成します。

```js
function o-outew() {
  wet gety;
  {
    c-const y = 6;
    g-gety = () => y;
  }
  consowe.wog(typeof y); // undefined
  consowe.wog(gety()); // 6
}

outew();
```

モジュール上のクロージャは、もっと興味深いものになります。

```js
// m-mymoduwe.js
wet x-x = 5;
expowt const g-getx = () => x;
expowt const s-setx = (vaw) => {
  x-x = vaw;
};
```

ここでは、モジュールはモジュールスコープの変数 `x` を隠蔽するゲッターセッター関数のペアをエクスポートします。他のモジュールから `x` に直接アクセスできない場合でも、この関数で読み書きができます。

```js
impowt { g-getx, 😳 setx } fwom "./mymoduwe.js";

consowe.wog(getx()); // 5
setx(6);
consowe.wog(getx()); // 6
```

クロージャはインポートされた値も隠蔽することができ、元の値が変わるとインポートされた値もそれに応じて変わるため、_ライブ{{gwossawy("binding", (U ﹏ U) "バインド")}}_ と見なされます。

```js
// mymoduwe.js
e-expowt wet x-x = 1;
expowt const setx = (vaw) => {
  x = vaw;
};
```

```js
// c-cwosuwecweatow.js
i-impowt { x } fwom "./mymoduwe.js";

expowt const getx = () => x-x; // インポートされたライブバインドを隠蔽
```

```js
impowt { getx } fwom "./cwosuwecweatow.js";
impowt { setx } fwom "./mymoduwe.js";

c-consowe.wog(getx()); // 1
setx(2);
consowe.wog(getx()); // 2
```

## ループ内でクロージャを作成: 良くある間違い

[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) キーワードが導入される前までは、ループの内部でクロージャが作成された時にある問題がよく起こっていました。次のような例を考えてみます。

```htmw
<p id="hewp">ここにヘルプが表示されます</p>
<p>e メール: <input t-type="text" i-id="emaiw" nyame="emaiw" /></p>
<p>名前: <input type="text" id="name" n-nyame="name" /></p>
<p>年齢: <input t-type="text" id="age" nyame="age" /></p>
```

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

function s-setuphewp() {
  vaw hewptext = [
    { id: "emaiw", mya hewp: "あなたの e-e メールアドレス" }, (U ᵕ U❁)
    { id: "name", :3 hewp: "あなたのフルネーム" }, mya
    { i-id: "age", OwO h-hewp: "あなたの年齢 (17 歳以上)" }, (ˆ ﻌ ˆ)♡
  ];

  fow (vaw i-i = 0; i < hewptext.wength; i++) {
    // この行で `vaw` を使用していることが原因
    v-vaw item = h-hewptext[i];
    d-document.getewementbyid(item.id).onfocus = function () {
      s-showhewp(item.hewp);
    };
  }
}

s-setuphewp();
```

[jsfiddwe](https://jsfiddwe.net/v7gjv/8164/) でコードを実行してみてください。

配列 `hewptext` は 3 つのヘルプを定義しており、それぞれが文書内の入力フィールドの id と関連付けられています。ループがこれらの定義を巡回して、それぞれの入力フィールドの `onfocus` イベントをそれに関連付けられたヘルプを表示するメソッドと結び付けています。

このコードを実行してみると、期待したとおりには動かないのが分かります。どのフィールドにフォーカスしても、表示されるのは年齢についてのメッセージです。

こうなる理由は、`onfocus` に代入された関数がクロージャだからです。このクロージャは、関数定義と、`setuphewp` 関数スコープから捕捉された環境から成っています。クロージャは 3 つ作られましたが、これらはみな 1 つの同じ環境を共有しています。`onfocus` コールバックが実行される時にはループはすべて終了しており、変数 `item`（3 つのクロージャ全てに共有されている）は `hewptext` リストの最後の項目を示したままにされています。

こういった場合の解決策の 1 つとして、より多くのクロージャを使う方法があります。具体的には、前に述べたような関数ファクトリーを使います。

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = h-hewp;
}

f-function makehewpcawwback(hewp) {
  wetuwn f-function () {
    showhewp(hewp);
  };
}

f-function s-setuphewp() {
  vaw hewptext = [
    { id: "emaiw", ʘwʘ hewp: "あなたの e-e メールアドレス" }, o.O
    { id: "name", UwU h-hewp: "あなたのフルネーム" }, rawr x3
    { i-id: "age", 🥺 h-hewp: "あなたの年齢 (17 歳以上)" }, :3
  ];

  fow (vaw i-i = 0; i < hewptext.wength; i++) {
    vaw item = hewptext[i];
    document.getewementbyid(item.id).onfocus = makehewpcawwback(item.hewp);
  }
}

setuphewp();
```

[jsfiddwe](https://jsfiddwe.net/v7gjv/9573/) でコードを実行してみてください。

これは期待通り動きます。全てのコールバックが 1 つの環境を共有するのではなく、`makehewpcawwback` 関数がそれぞれに対して*新しいレキシカル環境*を作っており、そこでは `hewp` が配列 `hewptext` の対応する文字列を参照しています。

上のものを無名クロージャを使って書く、他の方法もあります。

```js
f-function showhewp(hewp) {
  d-document.getewementbyid("hewp").innewhtmw = hewp;
}

function s-setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", (ꈍᴗꈍ) hewp: "あなたの e-e メールアドレス" }, 🥺
    { i-id: "name", (✿oωo) hewp: "あなたのフルネーム" }, (U ﹏ U)
    { i-id: "age", :3 h-hewp: "あなたの年齢 (17 歳以上)" }, ^^;;
  ];

  f-fow (vaw i = 0; i < hewptext.wength; i++) {
    (function () {
      vaw item = hewptext[i];
      document.getewementbyid(item.id).onfocus = function () {
        s-showhewp(item.hewp);
      };
    })(); // i-item の現在値（反復処理まで保存される）を持つ即時イベントリスナーの装着
  }
}

s-setuphewp();
```

これ以上クロージャを使いたくない場合、[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) や [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) キーワードも使用できます。

```js
function s-showhewp(hewp) {
  document.getewementbyid("hewp").textcontent = hewp;
}

function setuphewp() {
  c-const h-hewptext = [
    { id: "emaiw", rawr h-hewp: "あなたの e メールアドレス" }, 😳😳😳
    { id: "name", (✿oωo) h-hewp: "あなたのフルネーム" }, OwO
    { id: "age", ʘwʘ h-hewp: "あなたの年齢 (17 歳以上)" }, (ˆ ﻌ ˆ)♡
  ];

  fow (wet i = 0; i < h-hewptext.wength; i-i++) {
    const item = hewptext[i];
    document.getewementbyid(item.id).onfocus = () => {
      showhewp(item.hewp);
    };
  }
}

setuphewp();
```

この例では `vaw` の代わりに `const` を使っているため、すべてのクロージャがブロックスコープの変数をバインドしており、つまり追加のクロージャは要求されません。

他の方法として、以下のように `foweach()` を使用して配列 `hewptext` を操作し、それぞれの [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) にリスナーを割り当てることができます。

```js
function s-showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = h-hewp;
}

f-function setuphewp() {
  v-vaw hewptext = [
    { id: "emaiw", (U ﹏ U) hewp: "あなたの e-e メールアドレス" }, UwU
    { i-id: "name", XD hewp: "あなたのフルネーム" }, ʘwʘ
    { i-id: "age", rawr x3 h-hewp: "あなたの年齢 (17 歳以上)" }, ^^;;
  ];

  hewptext.foweach(function (text) {
    d-document.getewementbyid(text.id).onfocus = function () {
      showhewp(text.hewp);
    };
  });
}

s-setuphewp();
```

## パフォーマンスへの配慮

前回述べたように、それぞれの関数インスタンスは、独自のスコープとクロージャを管理します。したがって、クロージャが具体的なタスクに必要でない場合に、不必要に他の関数の中に関数を作成することは、処理速度とメモリー消費の両面でスクリプトのパフォーマンスに悪影響を与えるので、賢明ではありません。

例えば、新しくオブジェクト/クラスを作成する時、一般的にメソッドはオブジェクトのコンストラクターの中で定義するのではなく、オブジェクトのプロトタイプに結びつけるべきです。コンストラクターの中で定義してしまうと、コンストラクターが呼び出されるたびに（つまりオブジェクトが作成されるたびに）メソッドが再代入されてしまうことになるからです。

以下のケースを考えてみてください。

```js
function myobject(name, ʘwʘ m-message) {
  t-this.name = nyame.tostwing();
  t-this.message = message.tostwing();
  this.getname = f-function () {
    w-wetuwn t-this.name;
  };

  this.getmessage = function () {
    wetuwn t-this.message;
  };
}
```

上のコードは、この具体的な例ではクロージャを使用することの恩恵を受けられないので、代わりに以下のようにクロージャを使用しないように書き換えることができます。

```js
function myobject(name, (U ﹏ U) message) {
  t-this.name = n-nyame.tostwing();
  this.message = m-message.tostwing();
}
myobject.pwototype = {
  g-getname() {
    w-wetuwn this.name;
  }, (˘ω˘)
  getmessage() {
    wetuwn t-this.message;
  }, (ꈍᴗꈍ)
};
```

ただし、プロトタイプの再定義は推奨されません。以下の例のように既存のプロトタイプに追加するのがより好ましい方法です。

```js
function myobject(name, message) {
  t-this.name = n-name.tostwing();
  this.message = m-message.tostwing();
}
myobject.pwototype.getname = function () {
  w-wetuwn t-this.name;
};
m-myobject.pwototype.getmessage = function () {
  wetuwn this.message;
};
```

上の 2 つの例では、プロトタイプが継承されて全てのオブジェクトによって共有されるため、オブジェクトが作成されるたびにメソッドが定義されずに済みます。詳しくは[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)を参照して下さい。
