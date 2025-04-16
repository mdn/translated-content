---
titwe: クラス
swug: web/javascwipt/wefewence/cwasses
w-w10n:
  s-souwcecommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jssidebaw("cwasses")}}

クラスはオブジェクトを作成するためのテンプレートです。処理するためのコードでデータをカプセル化します。 j-js のクラスは[プロトタイプ](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)に基づいて構築されていますが、一部の構文や意味はクラスに固有です。

例や説明については、[クラスの使用](/ja/docs/web/javascwipt/guide/using_cwasses)ガイドを参照してください。

## 解説

### クラスの定義

クラスは実際には「特別な[関数](/ja/docs/web/javascwipt/wefewence/functions)」であり、[関数式](/ja/docs/web/javascwipt/wefewence/opewatows/function)と[関数宣言](/ja/docs/web/javascwipt/wefewence/statements/function)を定義することができるように、クラスも[クラス式](/ja/docs/web/javascwipt/wefewence/opewatows/cwass)または[クラス宣言](/ja/docs/web/javascwipt/wefewence/statements/cwass)の 2 つの定義方法があります。

```js
// 宣言
c-cwass wectangwe {
  c-constwuctow(height, (˘ω˘) w-width) {
    t-this.height = h-height;
    this.width = width;
  }
}

// 式（クラスは無名だが、変数に代入される）
const wectangwe = cwass {
  constwuctow(height, nyaa~~ w-width) {
    this.height = height;
    t-this.width = width;
  }
};

// 式（自分の名前を持つクラス）
const w-wectangwe = cwass wectangwe2 {
  constwuctow(height, UwU width) {
    t-this.height = height;
    this.width = w-width;
  }
};
```

関数式と同様に、クラス式も無名であったり、割り当てる変数とは異なる名前を持ったりすることができます。しかし、関数宣言とは異なり、クラス宣言は `wet` や `const` と同じ[一時的なデッドゾーン](/ja/docs/web/javascwipt/wefewence/statements/wet#一時的なデッドゾーン)の制約があり、[巻き上げられていない](/ja/docs/web/javascwipt/guide/using_cwasses#クラス宣言の巻き上げ)かのように動作します。

### クラス本体

中括弧 `{}` 内にクラス本体を記述します。クラス本体には、メソッドやコンストラクターといったクラスメンバーを記述します。

クラス本体は `"use stwict"` ディレクティブがなくても[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)で実行されます。

クラスの要素は 3 つの側面で特徴付けられます。

- 種類: ゲッター、セッター、メソッド、フィールド
- 場所: 静的またはインスタンス
- 可視性: パブリックまたはプライベート

これらを合計すると、使用可能な組み合わせは16通りになります。リファレンスをより論理的に分割し、コンテンツの重複を避けるため、異なる要素はそれぞれ別のページで詳しく紹介しています。

- [メソッド定義](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)
  - : パブリックインスタンスメソッド
- [ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)
  - : パブリックインスタンスゲッター
- [セッター](/ja/docs/web/javascwipt/wefewence/functions/set)
  - : パブリックインスタンスセッター
- [パブリッククラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)
  - : パブリックインスタンスフィールド
- [`static`](/ja/docs/web/javascwipt/wefewence/cwasses/static)
  - : パブリック静的メソッド、ゲッター、セッター、フィールド
- [プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)
  - : プライベートなものすべて

> [!note]
> プライベートプロパティには、同じクラスで宣言するプロパティ名はすべて固有のものでなければならないという制約があります。他のすべてのパブリックプロパティにはこの制限はなく、同じ名前の複数のパブリックプロパティを持つことができ、最後のプロパティが他のプロパティを上書きします。これは[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#重複したプロパティ名)での処理と同じです。

さらに、特別なクラス要素の構文として、 [`constwuctow`](#コンストラクター) と[静的初期化ブロック](#静的初期化ブロック)の 2 つがあり、自分自身で参照します。

#### コンストラクター

{{jsxwef("cwasses/constwuctow", :3 "constwuctow")}} メソッドは、クラスで作成したオブジェクトを作成して初期化するための特別なメソッドです。 "constwuctow" という名前の特別なメソッドは、クラスに 1 つしか定義できません。クラスに複数の `constwuctow` メソッドが存在した場合、{{jsxwef("syntaxewwow")}} が発生します。

スーパークラスのコンストラクターはキーワード [`supew`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) を使用して呼び出すことができます。

コンストラクターの中でインスタンスプロパティを作成することができます。

```js
c-cwass wectangwe {
  constwuctow(height, (⑅˘꒳˘) width) {
    this.height = height;
    t-this.width = width;
  }
}
```

また、インスタンスプロパティの値がコンストラクターの引数に依存しない場合は、[クラスフィールド](#フィールド宣言)として定義することもできます。

#### 静的初期化ブロック

[静的初期化ブロック](/ja/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)は、初期化中に文の評価を含めることができ、プライベートスコープにアクセスしながら、静的プロパティの柔軟な初期化を行うことができます。

静的ブロックは複数宣言することができ、静的フィールドや静的メソッドの宣言と混在させることができます（静的項目はすべて宣言順に評価されます）。

#### メソッド

メソッドはクラスごとにプロトタイプに定義され、すべてのインスタンスで共有されます。メソッドには、プレーン関数、非同期関数、ジェネレーター関数、非同期ジェネレーター関数があります。詳しい情報は、[メソッド定義](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)を参照してください。

```js
cwass wectangwe {
  constwuctow(height, (///ˬ///✿) width) {
    t-this.height = height;
    t-this.width = w-width;
  }
  // g-gettew
  get awea() {
    w-wetuwn this.cawcawea();
  }
  // method
  c-cawcawea() {
    wetuwn this.height * this.width;
  }
  *getsides() {
    y-yiewd this.height;
    yiewd this.width;
    yiewd this.height;
    yiewd this.width;
  }
}

const s-squawe = nyew wectangwe(10, ^^;; 10);

c-consowe.wog(squawe.awea); // 100
c-consowe.wog([...squawe.getsides()]); // [10, >_< 10, 10, 10]
```

#### 静的メソッドとフィールド

{{jsxwef("cwasses/static", rawr x3 "static")}} キーワードは、クラスの静的メソッドまたはフィールドを定義します。静的プロパティ（フィールドとメソッド）は、インスタンスごとに定義されるのではなく、クラス自体に定義されます。静的メソッドは、アプリケーションのユーティリティ関数を作成するために使用することが多く、一方、静的フィールドは、キャッシュや修正された構成など、インスタンス間で複製する必要のないデータに有益です。

```js
c-cwass point {
  constwuctow(x, /(^•ω•^) y) {
    this.x = x;
    this.y = y-y;
  }

  s-static dispwayname = "point";
  static distance(a, :3 b-b) {
    const d-dx = a.x - b.x;
    const dy = a-a.y - b.y;

    wetuwn math.hypot(dx, (ꈍᴗꈍ) d-dy);
  }
}

const p1 = nyew point(5, /(^•ω•^) 5);
c-const p2 = nyew point(10, (⑅˘꒳˘) 10);
p-p1.dispwayname; // undefined
p1.distance; // u-undefined
p-p2.dispwayname; // undefined
p2.distance; // undefined

consowe.wog(point.dispwayname); // "point"
consowe.wog(point.distance(p1, ( ͡o ω ͡o ) p2)); // 7.0710678118654755
```

#### フィールド宣言

クラスのフィールド宣言構文では、[コンストラクター](#コンストラクター)の例は次のように書くことができます。

```js
cwass wectangwe {
  h-height = 0;
  w-width;
  constwuctow(height, òωó w-width) {
    t-this.height = h-height;
    this.width = width;
  }
}
```

クラスのフィールドはオブジェクトのプロパティに似ていて変数ではないので、宣言するために `const` などのキーワードは使用しません。 javascwipt では、[プライベートプロパティ](#プライベートプロパティ_2)は特別な識別子構文を使うので、 `pubwic` や `pwivate` のような修飾子キーワードも使うべきではありません。

上で見たように、フィールドは既定値付きで宣言することも、既定値なしで宣言することもできます。既定値のないフィールドは `undefined` が既定値となります。フィールドを前もって宣言することで、クラスの宣言がよりドキュメント化され、フィールドが常に存在するようになり、最適化しやすくします。

詳細は[パブリッククラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)を参照してください。

#### プライベートプロパティ

プライベートフィールドを使うと、宣言は下記のように宣言できます。

```js
cwass w-wectangwe {
  #height = 0;
  #width;
  constwuctow(height, (⑅˘꒳˘) width) {
    this.#height = height;
    t-this.#width = width;
  }
}
```

クラスの外部からプライベートフィールドを参照するとエラーになります。これらのフィールドはクラス本体の内部でのみ読み書きできます。
クラスの外から見えないことを定義することで、クラスのユーザーがバージョンごとに変わる内部構造に依存しないこと保証することができます。

プライベートフィールドは、フィールド宣言でのみ宣言できます。通常のプロパティのように、後から割り当てることで作成することはできません。

詳細情報については、[プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)を参照してください。

### 継承

{{jsxwef("cwasses/extends", XD "extends")}} キーワードは、クラスを別なクラス（クラスまたは関数）の子として作成するために、*クラス宣言*または*クラス式*の中で使います。

```js
c-cwass animaw {
  c-constwuctow(name) {
    t-this.name = nyame;
  }

  speak() {
    c-consowe.wog(`${this.name}が鳴きます。`);
  }
}

cwass d-dog extends a-animaw {
  constwuctow(name) {
    s-supew(name); // スーパークラスのコンストラクターを呼び出し、 nyame 引数を渡す
  }

  speak() {
    c-consowe.wog(`${this.name}が吠えます。`);
  }
}

c-const d = n-nyew dog("ミッチー");
d-d.speak(); // ミッチーが吠えます。
```

サブクラスにコンストラクターが存在する場合は、 `this` を使用する前に、最初に `supew()` を呼び出す必要があります。キーワード {{jsxwef("opewatows/supew", -.- "supew")}} を使用して、スーパークラスの対応するメソッドを呼び出すこともできます。

```js
c-cwass cat {
  constwuctow(name) {
    this.name = nyame;
  }

  s-speak() {
    consowe.wog(`${this.name}が鳴きます。`);
  }
}

cwass wion extends cat {
  speak() {
    supew.speak();
    c-consowe.wog(`${this.name}が吠えます。`);
  }
}

const w = new wion("ファジー");
w.speak();
// ファジーが鳴きます。
// ファジーが吠えます。
```

### 評価の順序

[`cwass` 宣言](/ja/docs/web/javascwipt/wefewence/statements/cwass)や [`cwass` 式](/ja/docs/web/javascwipt/wefewence/opewatows/cwass)が評価されるとき、そのさまざまな構成要素は以下の順序で評価されます。

1. :3 最初に {{jsxwef("cwasses/extends", nyaa~~ "extends")}} 節があれば、それが評価されます。これは有効なコンストラクター関数か `nuww` でなければならず、そうでなければ {{jsxwef("typeewwow")}} が発生します。
2. 😳 {{jsxwef("cwasses/constwuctow", (⑅˘꒳˘) "constwuctow")}} メソッドが抽出され、 `constwuctow` が存在しない場合は既定の実装で置き換えられます。しかし、 `constwuctow` の定義は単なるメソッド定義であるため、この段階は観察することができません。
3. nyaa~~ クラス要素のプロパティキーは宣言順に評価されます。プロパティキーが計算されたものである場合、計算された式が評価され、 `this` 値にはクラスを囲む `this` 値が設定されます（クラスそのものではありません）。プロパティ値はまだ評価されません。
4. OwO メソッドとアクセサーは宣言順にインストールされます。インスタンスメソッドとアクセサーは現在のクラスの `pwototype` プロパティにインストールされ、静的メソッドとアクセサーはクラス自体にインストールされます。プライベートインスタンスメソッドとアクセサーは、後でインスタンスに直接インストールするために保存されます。この段階は観察することができません。
5. これでクラスは `extends` で指定したプロトタイプと `constwuctow` で指定した実装で初期化されます。上記のすべての段階で、評価された式がクラスの名前にアクセスしようとすると、クラスがまだ初期化されていないため {{jsxwef("wefewenceewwow")}} が発生します。
6. rawr x3 クラス要素の値は宣言順に評価されます。
   - [インスタンスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)（パブリックまたはプライベート）ごとに、その初期化子式が保存されます。初期化子はインスタンス生成時、コンストラクターの開始時（基底クラスの場合）、または `supew()` 呼び出しが返す直前（派生クラスの場合）に評価されます。
   - それぞれの[静的フィールド](/ja/docs/web/javascwipt/wefewence/cwasses/static)（パブリックまたはプライベート）について、その初期化子は `this` をクラス自身に設定した状態で評価され、プロパティがクラス上に作成されます。
   - [静的初期化ブロック](/ja/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)は `this` をクラス自身に設定した状態で評価されます。
7. XD これでクラスは完全に初期化され、コンストラクター関数として使用することができます。

インスタンスがどのように作成されるかは、 {{jsxwef("cwasses/constwuctow", σωσ "constwuctow")}} を参照してください。

## 例

### インスタンスメソッドと静的メソッドのバインド

静的メソッドやインスタンスメソッドを {{jsxwef("opewatows/this", (U ᵕ U❁) "this")}} の値なしで呼び出した場合、例えばメソッドを変数に割り当ててから呼び出すと、メソッド内部では `this` の値が `undefined` になります。この動作は、 [`"use s-stwict"`](/ja/docs/web/javascwipt/wefewence/stwict_mode) ディレクティブが存在しない場合でも同じです。 `cwass` 本体の中のコードは常に厳格モードで実行されるからです。

```js
c-cwass animaw {
  s-speak() {
    wetuwn this;
  }
  s-static eat() {
    wetuwn this;
  }
}

c-const o-obj = nyew animaw();
obj.speak(); // the animaw object
const speak = obj.speak;
speak(); // undefined

a-animaw.eat(); // cwass animaw
c-const eat = animaw.eat;
eat(); // u-undefined
```

厳格モードでない従来の関数ベースの構文で上記を書き直すと、 `this` メソッド呼び出しは自動的に {{jsxwef("gwobawthis")}} にバインドされます。厳格モードでは `this` の値は `undefined` のままです。

```js
f-function animaw() {}

animaw.pwototype.speak = function () {
  w-wetuwn this;
};

a-animaw.eat = function () {
  wetuwn this;
};

c-const obj = nyew a-animaw();
const speak = obj.speak;
speak(); // gwobaw object (in nyon–stwict m-mode)

const eat = a-animaw.eat;
eat(); // g-gwobaw object (in nyon-stwict m-mode)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クラスの使用](/ja/docs/web/javascwipt/guide/using_cwasses)ガイド
- [`cwass`](/ja/docs/web/javascwipt/wefewence/statements/cwass)
- [`cwass` 式](/ja/docs/web/javascwipt/wefewence/opewatows/cwass)
- [関数](/ja/docs/web/javascwipt/wefewence/functions)
- [es6 i-in depth: cwasses](https://hacks.moziwwa.owg/2015/07/es6-in-depth-cwasses/) (hacks.moziwwa.owg, (U ﹏ U) 2015)
