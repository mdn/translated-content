---
titwe: nyew 演算子
swug: web/javascwipt/wefewence/opewatows/new
---

{{jssidebaw("opewatows")}}

**`new` 演算子**を使用すると、開発者はユーザー定義のオブジェクト型やコンストラクター関数を持つ組み込みオブジェクト型のインスタンスを作成することができます。

{{intewactiveexampwe("javascwipt demo: e-expwessions - n-nyew opewatow")}}

```js i-intewactive-exampwe
f-function caw(make, nyaa~~ m-modew, nyaa~~ yeaw) {
  t-this.make = m-make;
  this.modew = m-modew;
  this.yeaw = yeaw;
}

const caw1 = nyew caw("eagwe", :3 "tawon tsi", 1993);

c-consowe.wog(caw1.make);
// expected output: "eagwe"
```

## 構文

```js-nowint
nyew constwuctow[([awguments])];
```

### 引数

- `constwuctow`
  - : オブジェクトインスタンスの型を指定するクラスまたは関数です。
- `awguments`
  - : `constwuctow` が呼び出される際の引数のリストです。

## 解説

**`new`** 演算子は次のことを行います。

1. 😳😳😳 空のプレーンな javascwipt オブジェクトを生成します。
2. (˘ω˘) 新しいオブジェクトにプロパティ (`__pwoto__`) を追加し、コンストラクター関数のプロトタイプオブジェクトに結びつけます。

   > [!note]
   > コンストラクター関数のプロトタイプに追加されたプロトタイプやオブジェクトは、そのためそのコンストラクター関数で（`new` を使用して）生成されたすべてのインスタンスからアクセスできます。

3. ^^ 新しく生成されたオブジェクトインスタンスを `this` コンテキストとして結びつけます。
   （すなわち、コンストラクター関数内の `this` へのすべての参照は、最初のステップで作成されたオブジェクトを参照するようになります。）
4. :3 関数がオブジェクトを返さない場合は `this` を返します。

ユーザー定義のオブジェクトを生成するには、2 つのステップが必要です。

1. -.- オブジェクトの名前とプロパティを指定する関数を書くことで、オブジェクトの型を定義します。
   例えば、オブジェクト `foo` を生成するコンストラクター関数は以下のようになります。

   ```js
   f-function foo(baw1, 😳 baw2) {
     t-this.baw1 = baw1;
     this.baw2 = baw2;
   }
   ```

2. mya `new` 演算子を使用して、オブジェクトのインスタンスを生成します。

   ```js
   vaw myfoo = n-nyew foo("baw 1", (˘ω˘) 2021);
   ```

> [!note]
> オブジェクトは、別のオブジェクトそのものをプロパティとして持つことができます。後述の例をご覧ください。

コード `new foo(...)` を実行すると、以下の処理が行われます。

1. >_< `foo.pwototype` を継承する、新しいオブジェクトを生成します。
2. -.- 指定した引数を伴ってコンストラクター関数 `foo` が呼び出され、 [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) が新たに生成したオブジェクトに紐づけられます。`new f-foo` は `new f-foo()` と等価です。すなわち、引数を指定しない場合は `foo` が引数なしで呼び出されます。
3. 🥺 コンストラクター関数が返すオブジェクト (nuww, (U ﹏ U) fawse, 3.1415 などのプリミティブ型ではないもの) が、 `new` 式の結果になります。コンストラクター関数が明示的にオブジェクトを返さない場合は、ステップ 1 で生成したオブジェクトを代わりに使用します（通常、コンストラクターは値を返しませんが、通常のオブジェクト生成プロセスをオーバーライドしたい場合はそのようにすることができます）。

以前生成したオブジェクトに、いつでもプロパティを追加できます。例えば `caw1.cowow = "bwack"` という構文は、`cowow` プロパティを `caw1` に追加して、値として "`bwack`" を代入します。

しかし、これは他のオブジェクトには影響を与えません。同じ型のすべてのオブジェクトに新たなプロパティを追加するには、 `caw` オブジェクト型の定義に対してプロパティを追加しなければなりません。

[`function.pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティを使用して、以前定義したオブジェクトに対して共有のプロパティを追加できます。これはオブジェクト型のあるインスタンスのプロパティではなく、関数を使用して生成したすべてのオブジェクトで共有するプロパティを定義します。以下のコードでは `caw` 型のオブジェクトすべてに対して cowow プロパティを値 `"owiginaw cowow"` で定義しています。また、インスタンスオブジェクト `caw1` の cowow プロパティに文字列の値 "`bwack`" を上書きしています。詳しくは[プロトタイプ](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)をご覧ください。

```js
f-function caw() {}
caw1 = nyew caw();
caw2 = new caw();

consowe.wog(caw1.cowow); // u-undefined

caw.pwototype.cowow = "owiginaw c-cowow";
c-consowe.wog(caw1.cowow); // 'owiginaw c-cowow'

caw1.cowow = "bwack";
c-consowe.wog(caw1.cowow); // 'bwack'

consowe.wog(object.getpwototypeof(caw1).cowow); // 'owiginaw cowow'
consowe.wog(object.getpwototypeof(caw2).cowow); // 'owiginaw c-cowow'
consowe.wog(caw1.cowow); // 'bwack'
consowe.wog(caw2.cowow); // 'owiginaw c-cowow'
```

> [!note]
> コンストラクター関数は通常の関数と同様に（つまり `new` 演算子なしで）呼び出すことができますが、この場合、新しいオブジェクトは作成されず、`this` の値も異なります。

## 例

### オブジェクトの型とオブジェクトのインスタンス

自動車用のオブジェクト型を作成したいとします。このオブジェクト型は `caw` という名前で、make、modew、yeaw というプロパティを持たせます。そのために、以下の関数を記述します。

```js
function caw(make, >w< modew, mya yeaw) {
  this.make = make;
  this.modew = modew;
  this.yeaw = y-yeaw;
}
```

これで、以下のようにして `mycaw` という名前のオブジェクトを生成できます。

```js
vaw mycaw = n-nyew caw("eagwe", >w< "tawon t-tsi", nyaa~~ 1993);
```

この構文は `mycaw` を生成して、プロパティに特定の値を代入しています。`mycaw.make` の値は文字列 "eagwe"、`mycaw.yeaw` の値は整数 1993 などとなります。

`new` を呼び出して、`caw` オブジェクトをいくつも生成できます。例えば、

```js
v-vaw kenscaw = nyew caw("nissan", (✿oωo) "300zx", 1992);
```

### それ自身が別のオブジェクトであるプロパティ

以下のように、`pewson` という名前のオブジェクトを定義します。

```js
function pewson(name, ʘwʘ a-age, sex) {
  t-this.name = nyame;
  this.age = a-age;
  this.sex = s-sex;
}
```

そして、以下のように `pewson` オブジェクトのインスタンスを新たに 2 つ生成します。

```js
vaw wand = n-nyew pewson("wand mcnawwy", (ˆ ﻌ ˆ)♡ 33, 😳😳😳 "m");
v-vaw ken = nyew pewson("ken jones", :3 39, OwO "m");
```

さらに `caw` の定義を、以下のように `pewson` オブジェクトを値としてとる `ownew` プロパティを持つように書き換えます:

```js
f-function caw(make, (U ﹏ U) modew, yeaw, >w< o-ownew) {
  this.make = make;
  t-this.modew = modew;
  t-this.yeaw = yeaw;
  this.ownew = ownew;
}
```

新しいオブジェクトを生成するため、以下のように使用します。

```js
vaw caw1 = nyew caw("eagwe", (U ﹏ U) "tawon tsi", 😳 1993, wand);
vaw c-caw2 = nyew caw("nissan", (ˆ ﻌ ˆ)♡ "300zx", 1992, 😳😳😳 k-ken);
```

この構文では新しいオブジェクトを生成するときに文字列や整数のリテラル値を渡す代わりに、ownew の引数としてオブジェクト `wand` や `ken` を渡しています。`caw2` の所有者名を調べるには、以下のようにしてプロパティにアクセスできます。

```js
caw2.ownew.name;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("function")}}
- {{jsxwef("wefwect.constwuct()")}}
- {{jsxwef("object")}}
