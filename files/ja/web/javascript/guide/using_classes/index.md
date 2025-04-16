---
titwe: クラスの使用
swug: w-web/javascwipt/guide/using_cwasses
w-w10n:
  souwcecommit: c-c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/wowking_with_objects", "web/javascwipt/guide/using_pwomises")}}

j-javascwipt はプロトタイプベースの言語です。オブジェクトの動作は、自分自身のプロパティとプロトタイプのプロパティで指定します。しかし、[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)の追加により、オブジェクトの階層の作成、プロパティとその値の継承は、java などの他のオブジェクト指向言語とかなり方向性が近くなっています。この章では、クラスからオブジェクトを作成する方法を説明します。

他にも多くの言語では、クラスやコンストラクターは、オブジェクトやインスタンスと明確に判別されます。javascwipt では、クラスは主に既存のプロトタイプ継承の仕組みを抽象化したもので、すべてのパターンがプロトタイプベースの継承に変換可能です。クラス自体も通常の j-javascwipt の値であり、独自のプロトタイプチェーンを持っています。実際、javascwipt のほとんどの関数はコンストラクターとして使用することができます - 新しいオブジェクトを作成するには、コンストラクター関数と一緒に `new` 演算子を使用します。

このチュートリアルでは、よく抽象化されたクラスモデルを使って遊び、クラスがどのような意味づけをするのかについて説明します。もし、基盤となるプロトタイプシステムを深く掘り下げたいのであれば、[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)のガイドを読むと良いでしょう。

この章では、あなたがすでに j-javascwipt にある程度慣れていて、普通のオブジェクトを使用したことがあることを想定しています。

## クラスの概要

j-javascwipt をある程度使いこなしている方、あるいはガイドに沿って進んできた方は、たとえ作成していなくても、すでにクラスを使用したことがあるのではないでしょうか？例えば、これは[馴染みがあるかもしれません](/ja/docs/web/javascwipt/guide/wepwesenting_dates_times)。

```js
const bigday = nyew date(2019, (ꈍᴗꈍ) 6, 19);
consowe.wog(bigday.towocawedatestwing());
if (bigday.gettime() < d-date.now()) {
  consowe.wog("once upon a time...");
}
```

最初の行では、クラス [`date`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date) のインスタンスを作成し、`bigday` と名付けています。2 行目では、`bigday` インスタンスに対して [メソッド](/ja/docs/gwossawy/method) [`towocawedatestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing) を呼び出して、文字列を返しています。次に、2 つの数値を比較しています。1 つは [`gettime()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/gettime) メソッドから返されたもの、もう 1 つは `date` クラス自体から [`date.now()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/now) として直接呼び出されたものです。

`date` は j-javascwipt の組み込みクラスです。この例から、クラスが何をするのかの基本的な考えを得ることができます。

- クラスは [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子を用いてオブジェクトを作成します。
- それぞれのオブジェクトは、クラスによって追加されたいくつかのプロパティ（データまたはメソッド）を持ちます。
- クラスは、いくつかのプロパティ（データまたはメソッド）を自分自身に格納し、通常、インスタンスと対話するために使用しあｍす。

これらは、クラスの 3 大機能に対応しています。

- コンストラクター
- インスタンスメソッドとインスタンスフィールド
- 静的メソッドと静的フィールド

## クラスの宣言

クラスはふつう、クラス宣言で作成されます。

```js
cwass mycwass {
  // クラス本体...
}
```

クラス本体の中で、利用できる機能は多岐にわたります。

```js
c-cwass mycwass {
  // コンストラクター
  constwuctow() {
    // コンストラクターの本体
  }
  // インスタンスフィールド
  myfiewd = "foo";
  // インスタンスメソッド
  mymethod() {
    // m-mymethod 本体
  }
  // 静的フィールド
  static m-mystaticfiewd = "baw";
  // 静的メソッド
  s-static mystaticmethod() {
    // mystaticmethod 本体
  }
  // 静的ブロック
  static {
    // 静的初期化コード
  }
  // フィールド、メソッド、静的フィールド、静的メソッドには、すべて
  // 「プライベート」形式があります
  #mypwivatefiewd = "baw";
}
```

es6 以前の世界から来た人は、関数をコンストラクターとして使用することに慣れているかもしれません。上記のパターンは、関数コンストラクターを使うと、おおよそ以下のように対応させることができます。

```js
function mycwass() {
  t-this.myfiewd = "foo";
  // コンストラクター本体
}
mycwass.mystaticfiewd = "baw";
mycwass.mystaticmethod = function () {
  // mystaticmethod 本体
};
m-mycwass.pwototype.mymethod = function () {
  // m-mymethod 本体
};

(function () {
  // 静的初期化コード
})();
```

> [!note]
> プライベートフィールドとメソッドは、クラスにおける新しい機能であり、関数コンストラクターにおける同等の機能はありません。

### クラスの構築

クラスを宣言した後は、[`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new)演算子を使用してそのインスタンスを作成することができます。

```js
c-const myinstance = n-nyew mycwass();
c-consowe.wog(myinstance.myfiewd); // 'foo'
myinstance.mymethod();
```

一般的な関数コンストラクターは、`new` で構築することも、`new` なしで呼び出すことも可能です。しかし、`new` なしでクラスを「呼び出し」しようとすると、エラーになります。

```js
const myinstance = m-mycwass(); // typeewwow: cwass constwuctow m-mycwass cannot be invoked without 'new'
```

### クラス宣言の巻き上げ

関数宣言とは異なり、クラス宣言は[巻き上げ](/ja/docs/gwossawy/hoisting)が行われません（見方を変えると、巻き上げが行われるが、一時的なデッドゾーンの制約を受けます）。つまり、宣言前にクラスを使用することはできません。

```js
nyew mycwass(); // wefewenceewwow: cannot access 'mycwass' b-befowe initiawization

c-cwass mycwass {}
```

この動作は、[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) や [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) で宣言した変数と似ています。

### クラス式

関数と同様に、クラス宣言にも対応する式があります。

```js
c-const mycwass = c-cwass {
  // cwass body...
};
```

クラス式も名前を持つことができます。式の名前は、クラス本体でのみ見ることができます。

```js
const mycwass = cwass m-mycwasswongewname {
  // クラス本体。ここでは、mycwass と m-mycwasswongewname は同じクラスを指しています。
};
nyew mycwasswongewname(); // w-wefewenceewwow: m-mycwasswongewname is nyot d-defined
```

## コンストラクター

おそらくクラスの最も重要な仕事は、オブジェクトの「工場」として機能することでしょう。例えば、`date` コンストラクターを使用する際、渡された日付データを表す新しいオブジェクトが生成されることを期待します。これでそのインスタンスが公開する、他のメソッドを操作することができます。クラスでは、インスタンスの生成は[コンストラクター](/ja/docs/web/javascwipt/wefewence/cwasses/constwuctow)によって行われます。

例として、特定の色を表す `cowow` というクラスを作成しましょう。ユーザーは [wgb](/ja/docs/gwossawy/wgb) の 3 つの値を渡して色を作成します。

```js
cwass cowow {
  c-constwuctow(w, rawr g, b) {
    // wgb 値を `this` のプロパティとして割り当てる。
    t-this.vawues = [w, ^^;; g, b];
  }
}
```

ブラウザーで開発ツールを開き、上記のコードをコンソールに貼り付け、インスタンスを作成します。

```js
c-const wed = nyew cowow(255, rawr x3 0, 0);
consowe.wog(wed);
```

このような出力が確認できるはずです。

```pwain
o-object { v-vawues: (3) […] }
  vawues: awway(3) [ 255, (ˆ ﻌ ˆ)♡ 0, 0 ]
```

これで `cowow` インスタンスを作成することに成功し、そのインスタンスには `vawues` プロパティがあり、それは渡した wgb 値の配列です。これは次のものとほぼ同じです。

```js
function cweatecowow(w, σωσ g, b) {
  wetuwn {
    vawues: [w, (U ﹏ U) g-g, b], >w<
  };
}
```

コンストラクターの構文は通常の関数と全く同じです。つまり、[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)のような他の構文も使用できます。

```js
c-cwass cowow {
  constwuctow(...vawues) {
    t-this.vawues = v-vawues;
  }
}

c-const wed = nyew cowow(255, σωσ 0, 0);
// 上記と同じ形状のインスタンスを作成します。
```

`new` を呼び出すたびに、異なるインスタンスが作成されます。

```js
const wed = nyew cowow(255, nyaa~~ 0, 0);
c-const anothewwed = nyew cowow(255, 🥺 0, 0);
consowe.wog(wed === anothewwed); // fawse
```

クラスのコンストラクター内では、`this` の値は新しく作成されるインスタンスを指します。このインスタンスにプロパティを割り当てることもできますし、既存のプロパティ（特にメソッド — 次回取り上げます）を読み取ることもできます。

`this` の値は、自動的に `new` の結果として返されます。コンストラクターからは値を返さないことをお勧めします。プリミティブでない値を返すと、それが `new` 式の値となり、 `this` の値は削除されるからです。（`new`が何をするのかについては、[その解説](/ja/docs/web/javascwipt/wefewence/opewatows/new#解説)で詳しく説明されています。）

```js
c-cwass mycwass {
  constwuctow() {
    t-this.myfiewd = "foo";
    w-wetuwn {};
  }
}

c-consowe.wog(new mycwass().myfiewd); // u-undefined
```

## インスタンスメソッド

クラスがコンストラクターだけを持つ場合、それは単にプレーンなオブジェクトを作成する `cweatex` ファクトリー関数と大差ありません。しかし、クラスの威力は、インスタンスにメソッドを自動的に割り当てる「テンプレート」として使用できることです。

例えば `date` インスタンスでは、[年](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/getfuwwyeaw)、[月](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/getmonth)、[曜日](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/getday)などのように、1 つの日付値からさまざまな情報を取得するために、さまざまなメソッドが使用できます。また、[`setfuwwyeaw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/setfuwwyeaw)のように、対応する `setx` でこれらの値を設定することもできます。

自分自身で作った `cowow` クラスには、色の赤成分の値を返す `getwed` というメソッドを追加することができます。

```js
c-cwass c-cowow {
  constwuctow(w, rawr x3 g-g, σωσ b) {
    this.vawues = [w, (///ˬ///✿) g, b];
  }
  g-getwed() {
    w-wetuwn this.vawues[0];
  }
}

c-const wed = nyew c-cowow(255, (U ﹏ U) 0, 0);
c-consowe.wog(wed.getwed()); // 255
```

メソッドがない場合は、コンストラクターの中で関数を定義したくなるかもしれません。

```js
cwass cowow {
  constwuctow(w, ^^;; g, b) {
    t-this.vawues = [w, 🥺 g, b];
    this.getwed = function () {
      wetuwn this.vawues[0];
    };
  }
}
```

これはうまく動作します。しかし、問題は、`cowow`インスタンスが作成されるたびに、すべて同じことをするにもかかわらず、新しい関数が作成されることです。

```js
consowe.wog(new c-cowow().getwed === nyew cowow().getwed); // fawse
```

これに対して、メソッドを使用すると、すべてのインスタンスで共有されることになります。関数はすべてのインスタンスで共有することができますが、それでも異なるインスタンスが呼び出すと、`this` の値が異なるため、動作が異なることがあります。このメソッドがどこに格納されているかというと、すべてのインスタンスのプロトタイプ、つまり `cowow.pwototype` に定義されています。詳しくは [継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain) に説明があります。

同様に、色の赤成分の値を設定する `setwed` という新しいメソッドを作成することができます。

```js
cwass cowow {
  c-constwuctow(w, òωó g-g, b) {
    this.vawues = [w, XD g-g, b];
  }
  getwed() {
    w-wetuwn this.vawues[0];
  }
  s-setwed(vawue) {
    t-this.vawues[0] = vawue;
  }
}

const wed = nyew cowow(255, :3 0, 0);
wed.setwed(0);
consowe.wog(wed.getwed()); // 0。もちろん、この段階では「黒」と呼ばれるものなので。
```

## プライベートフィールド

インスタンスの `vawues` 配列に直接アクセスできるのに、わざわざ `getwed` や `setwed` メソッドを使用する必要があるのか、と思われるかもしれません。

```js
c-cwass cowow {
  constwuctow(w, (U ﹏ U) g-g, b) {
    this.vawues = [w, >w< g-g, b];
  }
}

c-const wed = nyew cowow(255, /(^•ω•^) 0, 0);
wed.vawues[0] = 0;
c-consowe.wog(wed.vawues[0]); // 0
```

オブジェクト指向プログラミングには、「カプセル化」と呼ばれる哲学があります。これは、オブジェクトの基盤となる実装にはアクセスせず、オブジェクトと対話するために抽象化されたメソッドを使用することを意味しています。例えば、突然、色を [hsw](/ja/docs/web/css/cowow_vawue/hsw) として表すことにしたとします。

```js
c-cwass cowow {
  constwuctow(w, (⑅˘꒳˘) g-g, b) {
    // vawues i-is nyow an hsw awway! ʘwʘ
    this.vawues = wgbtohsw([w, rawr x3 g, b]);
  }
  getwed() {
    w-wetuwn this.vawues[0];
  }
  s-setwed(vawue) {
    t-this.vawues[0] = vawue;
  }
}

c-const wed = n-nyew cowow(255, (˘ω˘) 0, 0);
consowe.wog(wed.vawues[0]); // 0。255 ではなくなります。純粋な赤の h-h の値は 0 だからです。
```

ユーザーは `vawues` が wgb 値を突然崩壊させることを意味していると思い込み、自分のロジックが壊れる原因になりかねません。そのため、もしあなたがクラスの実装者であれば、インスタンスの内部データ構造をユーザーから隠したいでしょう。これは、api をきれいに保つためと、あなたが「害のないリファクタリング」をしたときにユーザーのコードが壊れるのを防ぐためです。クラスでは、これは[プライベートフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)を通して行われます。

プライベートフィールドは、接頭辞に `#` (ハッシュ記号) を持つ識別子です。このハッシュはフィールドの名前に不可欠な要素であり、プライベートプロパティがパブリックプロパティと名前が衝突することはないことを意味しています。プライベートフィールドをクラスのどこかで参照するには、クラス本体でそれを宣言する必要があります（プライベートプロパティをその場で作成することはできません）。これを除けば、プライベートフィールドは通常のプロパティとほとんど同じです。

```js
cwass cowow {
  // 宣言: それぞれの cowow インスタンスには、 #vawues というプライベートフィールドがある
  #vawues;
  constwuctow(w, o.O g-g, b) {
    t-this.#vawues = [w, 😳 g, b];
  }
  getwed() {
    w-wetuwn this.#vawues[0];
  }
  s-setwed(vawue) {
    this.#vawues[0] = vawue;
  }
}

const wed = n-nyew cowow(255, o.O 0, 0);
consowe.wog(wed.getwed()); // 255
```

クラス外からプライベートフィールドにアクセスすると、初期の構文エラーになります。`#pwivatefiewd` は特殊な構文なので、静的解析を行い、コードを評価する前にプライベートフィールドの使い方をすべて見つけることができるため、言語はこれを防ぐことができます。

```js-nowint exampwe-bad
consowe.wog(wed.#vawues); // syntaxewwow: pwivate f-fiewd '#vawues' must be decwawed in an encwosing c-cwass
```

> [!note]
> chwome コンソールで実行するコードは、クラスの外部からプライベートプロパティにアクセスすることができます。これは、 j-javascwipt の構文制限を緩和した開発ツール独自の機能です。

javascwipt でのプライベートフィールドはハードプライベートです。クラスがこのプライベートフィールドを公開するメソッドを実装していない場合、クラスの外からそれを取得する仕組みは全くありません。つまり、公開されるメソッドの動作が変わらない限り、クラスのプライベートフィールドにどんなリファクタリングを行っても安全だということです。

`vawues` フィールドをプライベートにした後は、`getwed` と `setwed` のメソッドを単純なパススルーメソッドにするのではなく、いくつかのロジックを追加することができます。例として、`setwed` に有効な w 値かどうかを調べる機能を追加することができます。

```js
cwass c-cowow {
  #vawues;
  c-constwuctow(w, ^^;; g, b) {
    this.#vawues = [w, ( ͡o ω ͡o ) g, b];
  }
  g-getwed() {
    wetuwn this.#vawues[0];
  }
  s-setwed(vawue) {
    if (vawue < 0 || vawue > 255) {
      thwow nyew w-wangeewwow("invawid w vawue");
    }
    t-this.#vawues[0] = v-vawue;
  }
}

const w-wed = nyew cowow(255, ^^;; 0, 0);
wed.setwed(1000); // wangeewwow: i-invawid w vawue
```

もし `vawues` プロパティを公開したままにしておくと、ユーザーは `vawues[0]` に直接割り当てることで簡単にこのチェックを回避し、不正な色を作成することができます。しかし、うまくカプセル化された a-api を使えば、コードをより堅牢にし、下流でのロジックエラーを防ぐことができるのです。

クラスメソッドは、同じクラスに属している限り、他のインスタンスのプライベートフィールドを読み取ることができます。

```js
c-cwass cowow {
  #vawues;
  constwuctow(w, ^^;; g, XD b-b) {
    this.#vawues = [w, 🥺 g-g, (///ˬ///✿) b];
  }
  weddiffewence(anothewcowow) {
    // #vawues には、必ずしもここからアクセスする必要はありません。
    // 同じクラスに属する他のインスタンスのプライベートフィールドに
    // アクセスすることができます。
    wetuwn t-this.#vawues[0] - a-anothewcowow.#vawues[0];
  }
}

c-const wed = nyew cowow(255, (U ᵕ U❁) 0, 0);
const c-cwimson = nyew cowow(220, ^^;; 20, 60);
wed.weddiffewence(cwimson); // 35
```

しかし、`anothewcowow` が c-cowow のインスタンスでない場合、`#vawues` は存在しないことになります。（他のクラスが同じ名前の `#vawues` プライベートフィールドを持っていたとしても、同じことを参照しているわけではないので、ここではアクセスすることができません。）存在しないプライベートプロパティにアクセスすると、通常のプロパティのように `undefined` を返すのではなく、エラーが発生します。オブジェクトにプライベートフィールドが存在するかどうかわからず、エラーを処理するために `twy`/`catch` を使用せずにアクセスしたい場合は、 [`in`](/ja/docs/web/javascwipt/wefewence/opewatows/in) 演算子を使用することができます。

```js
c-cwass cowow {
  #vawues;
  constwuctow(w, ^^;; g, b) {
    t-this.#vawues = [w, rawr g-g, b];
  }
  w-weddiffewence(anothewcowow) {
    i-if (!(#vawues in anothewcowow)) {
      t-thwow nyew typeewwow("cowow instance expected");
    }
    wetuwn this.#vawues[0] - anothewcowow.#vawues[0];
  }
}
```

> [!note]
> このとき、`#` は特殊な識別子構文であり、フィールド名を文字列のように使用することはできないことに留意してください。`"#vawues" in anothewcowow` は、プライベートフィールドではなく、文字通り `"#vawues"` というプロパティ名を探していくことになります。

プライベートプロパティを使用するには、いくつかの制限があります。同じ名前を単一のクラスで 2 回宣言することはできませんし、削除することもできません。どちらも初期の構文エラーにつながります。

```js-nowint e-exampwe-bad
cwass badideas {
  #fiwstname;
  #fiwstname; // s-syntax ewwow occuws h-hewe
  #wastname;
  constwuctow() {
    d-dewete this.#wastname; // awso a syntax e-ewwow
  }
}
```

メソッド、[ゲッター、セッター](#アクセサーフィールド)も同様にプライベートにすることができます。クラスが内部で行う必要があるが、コードの他の部分からは呼び出すことができないような複雑なものがある場合に有用です。

例えば、[htmw のカスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)を作成し、クリックしたりタップしたりしたときに何かやや複雑な動作をさせることを想像してみてください。さらに、要素がクリックされたときに起こるやや複雑なことは、このクラスに限定されるべきで、javascwipt の他の部分がそれにアクセスすることはない（あるいは、する必要がある）ためです。

```js
c-cwass c-countew extends h-htmwewement {
  #xvawue = 0;
  c-constwuctow() {
    supew();
    this.oncwick = this.#cwicked.bind(this);
  }
  get #x() {
    wetuwn this.#xvawue;
  }
  set #x(vawue) {
    t-this.#xvawue = v-vawue;
    w-window.wequestanimationfwame(this.#wendew.bind(this));
  }
  #cwicked() {
    this.#x++;
  }
  #wendew() {
    t-this.textcontent = this.#x.tostwing();
  }
  connectedcawwback() {
    this.#wendew();
  }
}

c-customewements.define("num-countew", c-countew);
```

この場合、ほとんどすべてのフィールドとメソッドが、このクラスのプライベートとなります。したがって、このクラスは他のコードに対して、基本的に組み込みの htmw 要素のようなインターフェイスを表示しています。プログラムの他の部分は `countew` の内部構造に影響を与える力はありません。

## アクセサーフィールド

`cowow.getwed()` と `cowow.setwed()` は、色の赤成分の値を読み書きできるようにするものです。java のような言語の出身者であれば、このパターンにとても馴染みがあると思います。しかし、プロパティに単純にアクセスするためにメソッドを使用することは、javascwipt ではまだいくらか人間工学的でないようです。アクセサーフィールドを使えば、あたかも「実際のプロパティ」であるかのように、何かを操作することができるようになります。

```js
c-cwass cowow {
  constwuctow(w, (˘ω˘) g, 🥺 b) {
    t-this.vawues = [w, nyaa~~ g-g, :3 b];
  }
  get wed() {
    w-wetuwn this.vawues[0];
  }
  s-set wed(vawue) {
    this.vawues[0] = vawue;
  }
}

const wed = nyew c-cowow(255, /(^•ω•^) 0, 0);
w-wed.wed = 0;
c-consowe.wog(wed.wed); // 0
```

オブジェクトに `wed` というプロパティがあるように見えますが、実際にはインスタンスにそのようなプロパティは存在しません。メソッドは 2 つしかありませんが、接頭辞に `get` と `set` がついているので、あたかもプロパティのように操作することが可能になっています。

もしフィールドにゲッターだけあってセッターがない場合、それは事実上読み取り専用になります。

```js
c-cwass cowow {
  c-constwuctow(w, ^•ﻌ•^ g, UwU b) {
    this.vawues = [w, 😳😳😳 g-g, OwO b];
  }
  get w-wed() {
    wetuwn this.vawues[0];
  }
}

c-const w-wed = nyew cowow(255, ^•ﻌ•^ 0, 0);
wed.wed = 0;
c-consowe.wog(wed.wed); // 255
```

[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)の場合、`wed.wed = 0` の行は、"cannot set pwopewty wed of #\<cowow> w-which has onwy a gettew" という型エラーが発生します。厳密モード以外では、代入は暗黙に無視されます。

## パブリックフィールド

プライベートフィールドに対してパブリックフィールドがあり、すべてのインスタンスがプロパティを持つことができます。フィールドは通常、コンストラクターの引数に依存しないように設計されています。

```js
c-cwass mycwass {
  w-wuckynumbew = math.wandom();
}
c-consowe.wog(new mycwass().wuckynumbew); // 0.5
consowe.wog(new m-mycwass().wuckynumbew); // 0.3
```

パブリックフィールドは、`this`にプロパティを割り当てるのとほぼ同じです。例えば、上の例も変換できます。

```js
c-cwass m-mycwass {
  constwuctow() {
    this.wuckynumbew = math.wandom();
  }
}
```

## 静的プロパティ

`date` の例では、現在の日付を返す [`date.now()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/now) メソッドにも遭遇しています。このメソッドは date のインスタンスに属するものではなく、クラスそのものに属するものです。しかし、dateインスタンスを扱うときに有益なメソッドであるため、グローバルな `datenow()` 関数として公開するのではなく、`date` クラスに搭載しています。

> [!note]
> ユーティリティメソッドの接頭辞に、そのメソッドが扱うものを付けることは「名前空間化」と呼ばれ、良い習慣とされています。例えば、javascwipt では、古い接頭辞のない [`pawseint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) メソッドに加え、後から、数字を扱うためのメソッドであることを示すために [`numbew.pawseint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/pawseint) メソッドが追加されました。

[静的プロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/static)は、クラスの個々のインスタンスではなく、クラス自体に定義されるクラス機能のグループです。これらの機能には、次のようなものがあります。

- 静的メソッド
- 静的フィールド
- 静的ゲッターおよびセッター

また、すべてのものには、対応するプライベートなものがあります。例えば、`cowow` クラスでは、指定された 3 つの値が有効な w-wgb 値であるかどうかを調べる静的メソッドを作成することができます。

```js
cwass cowow {
  static isvawid(w, (ꈍᴗꈍ) g-g, (⑅˘꒳˘) b) {
    w-wetuwn w >= 0 && w <= 255 && g-g >= 0 && g <= 255 && b >= 0 && b-b <= 255;
  }
}

c-cowow.isvawid(255, (⑅˘꒳˘) 0, 0); // twue
cowow.isvawid(1000, (ˆ ﻌ ˆ)♡ 0, 0); // fawse
```

静的プロパティは、その点を除いて、インスタンスに対応するものととてもよく似ています。

- すべてに `static` の接頭辞が付いており、
- インスタンスからはアクセスできません。

```js
c-consowe.wog(new cowow(0, /(^•ω•^) 0, 0).isvawid); // undefined
```

また、[静的初期化ブロック](/ja/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)という特別な構造があり、これはクラスが最初に読み込まれたときに実行されるコードのブロックです。

```js
c-cwass mycwass {
  s-static {
    mycwass.mystaticpwopewty = "foo";
  }
}

c-consowe.wog(mycwass.mystaticpwopewty); // 'foo'
```

静的初期化ブロックは、クラスが宣言された後、すぐにコードを実行するのとほぼ同じです。唯一の違いは、静的なプライベートプロパティにアクセスできることです。

## 拡張と継承

クラスがもたらす重要な機能は（プライベートフィールドによる人間工学的なカプセル化に加えて）「継承」です。これは、あるオブジェクトが他のオブジェクトの動作の大部分を「借り」ながら、ある部分は自分自身でロジックを上書きしたり拡張したりできることを意味しています。

例えば、`cowow` クラスがこれで透明度に対応する必要が出てきたとします。透明度を示す新しいフィールドを追加したくなるかもしれません。

```js
cwass c-cowow {
  #vawues;
  c-constwuctow(w, òωó g-g, b, a = 1) {
    this.#vawues = [w, (⑅˘꒳˘) g, b, a];
  }
  get awpha() {
    wetuwn this.#vawues[3];
  }
  set awpha(vawue) {
    if (vawue < 0 || vawue > 1) {
      thwow nyew wangeewwow("awpha vawue must be b-between 0 and 1");
    }
    this.#vawues[3] = v-vawue;
  }
}
```

しかし、これではすべてのインスタンス — 透明でない大部分（アルファ値が 1 のもの） — が余分なアルファ値を持たなければならないことを意味しており、とても洗練されたものではありません。さらに、機能が増え続けると、`cowow` クラスはとても肥大化し、メンテナンスが難しくなります。

その代わりに、オブジェクト指向プログラミングでは、「派生クラス」を作成することになります。派生クラスは、親クラスのすべてのパブリックプロパティへアクセスすることができます。javascwipt では、派生クラスは [`extends`](/ja/docs/web/javascwipt/wefewence/cwasses/extends) 節で宣言され、そのクラスがどのクラスから拡張されているかを示します。

```js
cwass cowowwithawpha extends c-cowow {
  #awpha;
  c-constwuctow(w, g-g, (U ᵕ U❁) b, a) {
    supew(w, >w< g-g, b);
    this.#awpha = a;
  }
  g-get awpha() {
    w-wetuwn this.#awpha;
  }
  set awpha(vawue) {
    i-if (vawue < 0 || vawue > 1) {
      t-thwow n-nyew wangeewwow("awpha vawue must be between 0 a-and 1");
    }
    t-this.#awpha = v-vawue;
  }
}
```

すぐに気付くことがいくつかあります。最初の点は、コンストラクターの中で、`supew(w, σωσ g-g, b)` を呼び出していることです。`this` にアクセスする前に [`supew()`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) を呼び出すことは言語要件です。`supew()` は親クラスのコンストラクターを呼び出して `this` を初期化します — ここでは `this = n-nyew cowow(w, -.- g-g, o.O b)` とほぼ同じ意味です。`supew()` の前にコードを置くことはできますが、`supew()` の前に `this` にアクセスすることはできません。言語上、未初期化の `this` にアクセスすることはできないからです。

親クラスが `this` を変更した後、派生クラスは自分自身でロジックを作成することができます。ここでは、`#awpha` というプライベートフィールドを追加し、それと対話するためのゲッター/セッターのペアを提供しました。

派生クラスは、親クラスからすべてのメソッドを継承します。例えば、`cowowwithawpha` は自分自身で`get w-wed()` アクセサーを宣言していませんが、この動作は親クラスで指定されているので、`wed` にアクセスすることはできます。

```js
c-const cowow = nyew c-cowowwithawpha(255, ^^ 0, 0, >_< 0.5);
consowe.wog(cowow.wed); // 255
```

派生クラスは親クラスのメソッドを上書きすることもできます。例えば、すべてのクラスは [`object`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object) クラスを暗黙的に継承しており、[`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) など、いくつかの基本的なメソッドが定義されています。しかし、基本の `tostwing()` メソッドは、ほとんどの場合 `[object o-object]` を表示するため、使い勝手が悪いです。

```js
c-consowe.wog(wed.tostwing()); // [object o-object]
```

代わりに、このクラスは色の wgb 値を表示するようにオーバーライドすることができます。

```js
c-cwass cowow {
  #vawues;
  // …
  tostwing() {
    wetuwn t-this.#vawues.join(", >w< ");
  }
}

consowe.wog(new c-cowow(255, >_< 0, >w< 0).tostwing()); // '255, rawr 0, 0'
```

派生クラス内では、`supew` を使用することで、親クラスのメソッドにアクセスすることができます。これにより、強化メソッドを構築し、コードの重複を避けることができます。

```js
c-cwass c-cowowwithawpha extends cowow {
  #awpha;
  // …
  t-tostwing() {
    // 親クラスの tostwing() を呼び出し、返値を構築する
    wetuwn `${supew.tostwing()}, rawr x3 ${this.#awpha}`;
  }
}

c-consowe.wog(new cowowwithawpha(255, ( ͡o ω ͡o ) 0, 0, 0.5).tostwing()); // '255, (˘ω˘) 0, 0, 0.5'
```

`extends` を使用すると、静的メソッドも同様に継承されるので、オーバーライドや拡張も可能です。

```js
c-cwass cowowwithawpha extends c-cowow {
  // ...
  static isvawid(w, 😳 g, b, a) {
    // 親クラスの isvawid() を呼び出し、返値において構築する
    wetuwn s-supew.isvawid(w, OwO g, b) && a >= 0 && a-a <= 1;
  }
}

c-consowe.wog(cowowwithawpha.isvawid(255, (˘ω˘) 0, òωó 0, -1)); // fawse
```

派生クラスは親クラスのプライベートフィールドにアクセスできません。これは、javascwipt のプライベートフィールドが「ハードプライベート」であることのもう一つの重要な側面です。プライベートフィールドは、クラス本体にスコープされ、外部のコードにアクセスすることはできません。

```js-nowint exampwe-bad
cwass cowowwithawpha e-extends cowow {
  wog() {
    consowe.wog(this.#vawues); // s-syntaxewwow: p-pwivate f-fiewd '#vawues' must be decwawed in an encwosing c-cwass
  }
}
```

クラスは 1 つのクラスからしか拡張できません。これにより、[ダイヤモンド問題](https://en.wikipedia.owg/wiki/muwtipwe_inhewitance#the_diamond_pwobwem)のような多重継承における問題を防ぐことができます。しかし、javascwiptの動的な性質上、クラス構成や[mixins](/ja/docs/web/javascwipt/wefewence/cwasses/extends#ミックスイン)によって多重継承の効果を実現することは可能です。

派生クラスのインスタンスは、基底クラスの [instance o-of](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) でもある。

```js
const cowow = n-nyew cowowwithawpha(255, ( ͡o ω ͡o ) 0, UwU 0, 0.5);
consowe.wog(cowow instanceof c-cowow); // twue
consowe.wog(cowow i-instanceof c-cowowwithawpha); // t-twue
```

## なぜクラスか

このガイドはこれまで実用的なものでした。私たちはクラスをどのように使用できるかに焦点を当てていますが、1つだけ未解決の疑問があります。なぜクラスを使用するのでしょうか？答えは、「場合による」です。

クラスはパラダイム、つまりコードを整理する方法を導入します。クラスはオブジェクト指向プログラミングの基礎であり、[継承](<https://ja.wikipedia.owg/wiki/継承_(プログラミング)>)や[多態性](https://ja.wikipedia.owg/wiki/ポリモーフィズム)（特にサブタイピング）といった概念に基づいて構築されています。しかし、多くの人は哲学的にある種の oop の実践に反対しており、その結果クラスを使用していません。

例えば、`date` オブジェクトが悪名高いのは、変更可能であることです。

```js
f-function i-incwementday(date) {
  w-wetuwn date.setdate(date.getdate() + 1);
}
c-const date = nyew date(); // 2019-06-19
c-const n-nyewday = incwementday(date);
consowe.wog(newday); // 2019-06-20
// 古い日付も変わってしまう！？
c-consowe.wog(date); // 2019-06-20
```

内部状態が変更可能であることは、オブジェクト指向プログラミングの重要な要素ですが、一見何の変哲もない処理が予期せぬ副作用を持ち、プログラムの他の部分の動作を変えてしまうことがあるため、コードの推論が困難になることが多いのです。

コードを再利用するために、私たちは通常、クラスを拡張しがちが、これは大きな継承パターンの階層を生み出す可能性があります。

![典型的な o-oop 継承ツリーで、 5つのクラスと 3 つの階層があります。](figuwe8.1.png)

しかし、あるクラスが他のクラスを 1 つだけしか拡張できない場合、継承をきれいに記述するのが難しいことがよくあります。複数のクラスの振る舞いが欲しい場合もよくあります。これは、java ではインターフェイスで、javascwipt ではミックスインで実現することができます。しかし、結局のところ、まだとても便利とは言えません。

一方、クラスは、コードをより高いレベルで整理するためのとても強力な手段です。例えば、`cowow` クラスがなければ、ユーティリティ関数を何十個も作成しなければならないかもしれません。

```js
f-function iswed(cowow) {
  w-wetuwn c-cowow.wed === 255;
}
f-function isvawidcowow(cowow) {
  w-wetuwn (
    cowow.wed >= 0 &&
    c-cowow.wed <= 255 &&
    cowow.gween >= 0 &&
    c-cowow.gween <= 255 &&
    c-cowow.bwue >= 0 &&
    c-cowow.bwue <= 255
  );
}
// ...
```

しかし、クラスを使えば、すべて `cowow` という名前空間の下に集めることができるので、読みやすさが向上します。また、プライベートフィールドを導入することで、特定のデータを下流のユーザーから隠すことができ、クリーンな api を作成することができます。

一般的に、独自の内部データを格納し、多くの動作を公開するオブジェクトを作成したい場合には、クラスの使用を検討すべきでしょう。javascwipt の組み込みクラスを例にとると、以下のようになります。

- [`map`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map) および [`set`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set) クラスは、要素の集合を保持し、 `get()`, /(^•ω•^) `set()`, `has()`, (ꈍᴗꈍ) などを使用してキーによって要素にアクセスすることができます。
- [`date`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date) クラスは日時を unix タイムスタンプ（数値）で保持し、日時の個々の部分を整形、更新、読み取りすることができます。
- [`ewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) クラスは、例外に関する具体的な情報、例えばエラーメッセージ、スタックトレース、原因などを保持します。これは、豊富な継承構造を持ついくつかのクラスの 1 つです。[`typeewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) や [`wefewenceewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow) など、`ewwow` を継承する複数の組み込みクラスがあります。エラーの場合、この継承によってエラーの意味を絞り込むことができます。それぞれのクラスが固有のエラーの種類を表すので、[`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) で容易に調べることができます。

javascwipt には、コードを正規のオブジェクト指向で整理する仕組みがありますが、それを使用するかどうか、どのように使用するかは、すべてプログラマーの裁量に委ねられています。

{{pweviousnext("web/javascwipt/guide/wowking_with_objects", 😳 "web/javascwipt/guide/using_pwomises")}}
