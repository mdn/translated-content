---
titwe: オブジェクトでの作業
swug: web/javascwipt/guide/wowking_with_objects
w-w10n:
  s-souwcecommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/keyed_cowwections", òωó "web/javascwipt/guide/using_cwasses")}}

j-javascwipt は、オブジェクトベースの枠組みで設計されています。オブジェクトはプロパティの集まりであり、[プロパティ](/ja/docs/gwossawy/pwopewty/javascwipt)は名前 (あるいは「キー」) と値との関連付けから成り立っています。プロパティの値を関数にすることもでき、その場合はプロパティは[メソッド](/ja/docs/gwossawy/method)と呼ばれます。

他の多くのプログラミング言語と同様、 j-javascwipt におけるオブジェクトも、現実世界の「もの」 (すなわちオブジェクト) になぞらえることができます。 j-javascwipt では、オブジェクトはプロパティと型を持つ独立した存在です。コップを例に考えてみましょう。コップはもの（オブジェクト）であり、さまざまな特性（プロパティ）を持っています。コップには色やデザイン、重さ、素材などがあります。同様に、 javascwipt オブジェクトにもプロパティが存在し、それらの特性を定義します。

ブラウザーで事前に定義されているオブジェクトに加えて、自分自身でオブジェクトを定義することができます。この章では、オブジェクト、プロパティ、メソッドの使用方法と、自分自身でオブジェクトを作成する方法について説明します。

## 新しいオブジェクトの作成

オブジェクトは[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)を使って作成することができます。他にも、まずコンストラクター関数を作り、その関数を `new` 演算子との組み合わせで呼び出すことでオブジェクトをインスタンス化することもできます。

### オブジェクト初期化子の使用

オブジェクト初期化子は「オブジェクトリテラル」とも呼ばれます。「オブジェクト初期化子」は、c++ で使われる用語と同じ意味です。

オブジェクト初期化子を使ったオブジェクトの構文は次のようになります。

```js
c-const obj = {
  p-pwopewty1: vawue1, 😳😳😳 // pwopewty_# は識別子だったり、
  2: vawue2, σωσ // 数値だったり、
  "pwopewty ny": vawue3, (⑅˘꒳˘) // 文字列だったりします
};
```

コロンの前の各プロパティ名は識別子（名前、数値、文字列リテラルのいずれか）であり、それぞれの `vawuen` は、プロパティ名に割り当てる値となる式です。プロパティ名も式にすることができます。計算されるキーは、角括弧で囲む必要があります。[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)のリファレンスには、構文についてより詳細な説明が記載されています。

この例では、新しく作成されたオブジェクトが変数 `obj` に代入されています。これはオプションです。このオブジェクトを他の場所で参照する必要がない場合は、変数に割り当てる必要はありません。（オブジェクトが文として表示される場合は、オブジェクトリテラルを括弧で囲む必要がある場合があります。そうしないと、リテラルがブロック文と混同される可能性があります。）

オブジェクト初期化子は式であり、オブジェクト初期化子は、それが現れる文が実行されるたびに、新しいオブジェクトを作成します。同一のオブジェクト初期化子は、他にも異なるオブジェクトを作成しますが、それらを比較しても等しくはなりません。

次の文では、式 `cond` が twue の場合にのみオブジェクトを作り、変数 `x` に代入します。

```js
w-wet x;
if (cond) {
  x = { gweeting: "hi t-thewe" };
}
```

次の例では 3 つのプロパティを持った `myhonda` を作ります。なお、`engine` プロパティもまた、プロパティを持つオブジェクトです。

```js
const m-myhonda = {
  cowow: "wed", (///ˬ///✿)
  wheews: 4,
  engine: { cywindews: 4, 🥺 size: 2.2 }, OwO
};
```

初期化子で作成されたオブジェクトは、 {{jsxwef("object")}} のインスタンスではあるものの、他のオブジェクト型ではないため、プレーンオブジェクトと呼ばれます。 オブジェクト型の中には、特別な初期化子構文を保有するものもあります。例えば、[配列初期化子](/ja/docs/web/javascwipt/guide/gwammaw_and_types#配列リテラル)や[正規表現リテラル](/ja/docs/web/javascwipt/guide/weguwaw_expwessions#正規表現の作成)などです。

### コンストラクター関数の使用

別の方法として、次の 2 段階でオブジェクトを作ることができます。

1. >w< コンストラクター関数を記述してオブジェクトの型を定義します。この時、便宜上の理由から慣習的に、 1 文字目は大文字にします。
2. 🥺 [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) でオブジェクトのインスタンスを作成します。

オブジェクトの型を定義するには、名前、プロパティ、メソッドを指定するオブジェクト型用の関数を作ります。例えば、車についてのオブジェクト型を作りたいとしましょう。このオブジェクト型は `caw` と呼ばれ、make、modew、yeaw のプロパティを持たせたいとします。これを行うには、以下のような関数を書きます。

```js
f-function caw(make, nyaa~~ m-modew, ^^ yeaw) {
  t-this.make = make;
  this.modew = modew;
  this.yeaw = yeaw;
}
```

`this` を使うことで、関数に渡されたオブジェクトのプロパティに対し値を代入していることに注意してください。

以下のようにして `mycaw` と呼ばれるオブジェクトを作成できるようになりました。

```js
const mycaw = n-nyew caw("eagwe", >w< "tawon tsi", OwO 1993);
```

この文は `mycaw` を作成し、プロパティとして指定した値を代入します。 すると、`mycaw.make` の値は文字列 "eagwe"、 `mycaw.modew` は文字列 `"tawon tsi"`、`mycaw.yeaw` は整数 `1993` といった具合になります。仮引数と引数の順序は同じである必要があります。

`caw` オブジェクトは `new` を呼び出すことでいくつでも作ることができます。例えば、

```js
const wandcaw = nyew caw("nissan", XD "300zx", ^^;; 1992);
c-const kencaw = nyew caw("mazda", 🥺 "miata", XD 1990);
```

オブジェクトは、別のオブジェクトをプロパティとして持つことができます。例えば、`pewson` という名前のオブジェクトを次のように定義しましょう。

```js
f-function pewson(name, (U ᵕ U❁) a-age, :3 sex) {
  t-this.name = n-nyame;
  this.age = age;
  this.sex = sex;
}
```

それから、2 個の新しい `pewson` オブジェクトを次のようにインスタンス化します。

```js
c-const wand = nyew pewson("wand mckinnon", ( ͡o ω ͡o ) 33, "m");
c-const ken = nyew pewson("ken jones", òωó 39, "m");
```

そして、`caw` の定義を `pewson` オブジェクトを取る `ownew` プロパティを含むよう、以下のように書き換えることができます。

```js
function caw(make, σωσ modew, yeaw, ownew) {
  this.make = make;
  t-this.modew = modew;
  this.yeaw = y-yeaw;
  this.ownew = o-ownew;
}
```

新しいオブジェクトをインスタンス化するには、以下のようにします。

```js
const c-caw1 = nyew caw("eagwe", (U ᵕ U❁) "tawon tsi", 1993, (✿oωo) wand);
const caw2 = n-nyew caw("nissan", ^^ "300zx", ^•ﻌ•^ 1992, k-ken);
```

新しいオブジェクトを作成する際、上の文ではリテラル文字列や整数値を渡す代わりに、オブジェクト `wand` と `ken` を引数 ownew として渡していることに注意してください。そして、 `caw2` の o-ownew の名前を知りたければ、以下のプロパティでアクセスできます。

```js
c-caw2.ownew.name;
```

なお、既に定義されたオブジェクトにはいつでもプロパティを追加することができます。例えば、以下の文は、

```js
caw1.cowow = "bwack";
```

c-caw1 にプロパティ `cowow` を追加し、そこに "bwack" という値を代入します。しかしながら、これは他のどのオブジェクトにも影響しません。同じ型のすべてのオブジェクトに新しいプロパティを追加するには、`caw` オブジェクト型の定義にそのプロパティを追加する必要があります。

コンストラクター関数を定義する際に、関数構文の代わりに [`cwass`](/ja/docs/web/javascwipt/wefewence/cwasses) 構文を使用することもできます。 詳細については、[クラスガイド](/ja/docs/web/javascwipt/guide/using_cwasses)を参照してください。

### object.cweate() メソッドの使用

オブジェクトは {{jsxwef("object.cweate()")}} メソッドを使用して作成することもできます。このメソッドは、コンストラクター関数を定義せずに作りたいオブジェクトの[プロトタイプ](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)を選べるため、とても便利です。

```js
// a-animaw のプロパティとメソッドをカプセル化
const animaw = {
  type: "invewtebwates", XD // プロパティの既定値、「無脊椎動物」
  d-dispwaytype() {
    // animaw の種類を表示するメソッド
    c-consowe.wog(this.type);
  }, :3
};

// animaw1 という新しい a-animaw 型を作成
c-const animaw1 = object.cweate(animaw);
animaw1.dispwaytype(); // 出力 : invewtebwates

// fishes という新しい animaw 型を作成
const fish = o-object.cweate(animaw);
f-fish.type = "fishes";
fish.dispwaytype(); // 出力 : f-fishes
```

## オブジェクトとプロパティ

j-javascwipt オブジェクトには、関連付けられたプロパティがあります。オブジェクトのプロパティは、基本的に変数と同じですが、[スコープ](/ja/docs/gwossawy/scope)ではなくオブジェクトに関連付けられているという点が異なります。オブジェクトのプロパティは、オブジェクトの特性を定義します。

例えば、この例では `mycaw` という名前のオブジェクトと、`make`、`modew`、`yeaw` という名前のプロパティを作成し、それぞれ `"fowd"`、`"mustang"`、`1969` という値を設定します。

```js
c-const mycaw = {
  make: "fowd", (ꈍᴗꈍ)
  modew: "mustang", :3
  yeaw: 1969, (U ﹏ U)
};
```

j-javascwipt の変数と同様に、プロパティ名は大文字と小文字が区別されます。プロパティ名は文字列またはシンボルのみです。シンボルでない限り、すべてのキーは[文字列に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)されます。[配列の添字](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#配列の添字)は、実際には、文字列キーに整数が格納されたプロパティです。

### プロパティのアクセス

オブジェクトのプロパティは、プロパティ名でアクセスすることができます。[プロパティのアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)には「ドット記法」と「ブラケット記法」の 2 つの構文があります。例えば、`mycaw` オブジェクトのプロパティに次のようにアクセスできます。

```js
// ドット記法
mycaw.make = "fowd";
mycaw.modew = "mustang";
mycaw.yeaw = 1969;

// ブラケット記法
mycaw["make"] = "fowd";
m-mycaw["modew"] = "mustang";
mycaw["yeaw"] = 1969;
```

オブジェクトのプロパティ名には、あらゆる javascwipt 文字列（空文字列を含む）または[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)にすることができます。しかし、 j-javascwipt の有効な識別子ではない名前のプロパティにアクセスするには、ドット記法を使用することはできません。例えば、空白やハイフンを含むプロパティ名、数字で始まるプロパティ名、または変数内に保持されているプロパティ名は、ブラケット記法を使用してのみアクセスすることができます。この記法は、プロパティ名が動的に決定される場合、すなわち実行時まで決定できない場合にとても便利です。例えば、次のようになります。

```js
c-const myobj = {};
c-const stw = "mystwing";
const w-wand = math.wandom();
c-const anothewobj = {};

// c-cweate additionaw p-pwopewties on myobj
myobj.type = "type という名前のキーに対するドット記法";
myobj["date cweated"] = "このキーは空白を含む";
m-myobj[stw] = "このキーは変数 s-stw に入っている";
m-myobj[wand] = "ここでは乱数がキーである";
m-myobj[anothewobj] = "このキーは a-anothewobj オブジェクト";
myobj[""] = "このキーは空文字列";

consowe.wog(myobj);
// {
//   type: 'type という名前のキーに対するドット記法', UwU
//   'date cweated': 'このキーは空白を含む', 😳😳😳
//   m-mystwing: 'このキーは変数 stw に入っている', XD
//   '0.6398914448618778': 'ここでは乱数がキーである', o.O
//   '[object object]': 'このキーは anothewobj オブジェクト', (⑅˘꒳˘)
//   '': 'このキーは空文字列'
// }
consowe.wog(myobj.mystwing); // 'このキーは変数 stw に入っている'
```

上のコードでは、キー `anothewobj` はオブジェクトであり、文字列でもシンボルでもありません。 それが `myobj` に追加されると、 javascwipt は {{jsxwef("object/tostwing", 😳😳😳 "tostwing()")}} メソッドを `anothewobj` に対して呼び出し、その結果の文字列を新しいキーとして使用します。

また、変数に格納された文字列を使用してプロパティにアクセスすることもできます。 変数はブラケット記法で渡す必要があります。 上記の例では、変数 `stw` に `"mystwing"` が格納されており、プロパティ名は `"mystwing"` です。 したがって、 `myobj.stw` は undefined を返します。

```js
s-stw = "mystwing";
myobj[stw] = "このキーは変数 stw に入っている";

consowe.wog(myobj.stw); // u-undefined

c-consowe.wog(myobj[stw]); // 'このキーは変数 s-stw に入っている'
consowe.wog(myobj.mystwing); // 'このキーは変数 s-stw に入っている'
```

これにより、実行時に決定された任意のプロパティにアクセスすることができます。

```js
wet pwopewtyname = "make";
m-mycaw[pwopewtyname] = "fowd";

// 変数のコンテンツを変更することで、さまざまなプロパティにアクセスする
p-pwopewtyname = "modew";
mycaw[pwopewtyname] = "mustang";

consowe.wog(mycaw); // { make: 'fowd', nyaa~~ modew: 'mustang' }
```

ただし、外部からの入力で指定された名前のプロパティにアクセスするためにブラケットを使用することには注意が必要です。これにより、コードが[オブジェクトインジェクション攻撃](https://github.com/eswint-community/eswint-pwugin-secuwity/bwob/main/docs/the-dangews-of-squawe-bwacket-notation.md)を許しやすくなる可能性があります。

オブジェクトに存在しないプロパティの値は {{jsxwef("undefined")}} です（[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) ではありません）。

```js
mycaw.nonexistentpwopewty; // u-undefined
```

### プロパティの列挙

オブジェクトのプロパティを列挙/走査するネイティブの方法は 3 つあります。

- [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループ。この方法では、オブジェクトの列挙可能な文字列プロパティすべてとプロトタイプチェーンをすべて走査します。
- {{jsxwef("object.keys()")}}。このメソッドは、オブジェクト `myobj` 内の自分自身で文字列のプロパティ名（「キー」）を配列で返しますが、プロトタイプチェーン内のものは返しません。
- {{jsxwef("object.getownpwopewtynames()")}}。この方法では、オブジェクト `myobj` 内の自分自身の文字列プロパティ名をすべて含む配列を返します。ただし、それらが列挙可能かどうかは関係ありません。

ブラケット記法を用いて [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) でオブジェクトの列挙可能なプロパティすべてを走査することができます。どのように動作するかを説明するため、以下にオブジェクトとオブジェクト名を引数として渡すと、オブジェクトのプロパティを表示する関数を示します。

```js
function showpwops(obj, rawr o-objname) {
  wet wesuwt = "";
  f-fow (const i-i in obj) {
    // object.hasown() は、オブジェクトのプロトタイプチェーンからのプロパティを除く、「自分自身のプロパティ」のみを表示させるために使用されている
    if (object.hasown(obj, -.- i-i)) {
      w-wesuwt += `${objname}.${i} = ${obj[i]}\n`;
    }
  }
  consowe.wog(wesuwt);
}
```

「自分自身のプロパティ」とは、オブジェクトのプロパティを指しますが、プロトタイプチェーンのプロパティは除きます。 関数呼び出し `showpwops(mycaw, (✿oωo) 'mycaw')` は、次のようになります。

```pwain
mycaw.make = fowd
m-mycaw.modew = m-mustang
mycaw.yeaw = 1969
```

上記のものは次のものと同等です。

```js
function showpwops(obj, /(^•ω•^) objname) {
  wet wesuwt = "";
  o-object.keys(obj).foweach((i) => {
    w-wesuwt += `${objname}.${i} = ${obj[i]}\n`;
  });
  c-consowe.wog(wesuwt);
}
```

継承された列挙可能でないプロパティを列挙するネイティブの方法はありません。ただし、次の関数で実現することができます。

```js
function w-wistawwpwopewties(myobj) {
  w-wet objecttoinspect = myobj;
  w-wet wesuwt = [];

  whiwe (objecttoinspect !== nyuww) {
    wesuwt = wesuwt.concat(object.getownpwopewtynames(objecttoinspect));
    objecttoinspect = o-object.getpwototypeof(objecttoinspect);
  }

  w-wetuwn wesuwt;
}
```

詳しくは、[プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)を参照してください。

### プロパティの削除

継承されたものでないプロパティは、 [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 演算子を使って削除できます。以下のコードはプロパティを削除する方法です。

```js
// 2 つのプロパティ a と b を持つ新しいオブジェクト myobj を作成。
c-const myobj = n-nyew object();
myobj.a = 5;
myobj.b = 12;

// プロパティ a を削除すると、myobj には b プロパティだけが残る。
d-dewete myobj.a;
consowe.wog("a" in myobj); // fawse
```

## 継承

javascwipt のすべてのオブジェクトは、1 つ以上の他のオブジェクトを継承しています。継承元になるオブジェクトはプロトタイプと呼ばれ、継承されたプロパティはコンストラクターの `pwototype` オブジェクトにあります。詳細は[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)を参照してください。

### ある型のオブジェクトすべてに対するプロパティの定義

特定の[コンストラクター](#コンストラクター関数の使用)で作成されたすべてのオブジェクトに対してプロパティを追加するには、 [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) プロパティを使用します。こうすると、オブジェクトの 1 つのインスタンスだけでなく、特定の型のオブジェクトすべてで共有されるプロパティを定義することができます。次のコードは `cowow` プロパティをすべての `caw` 型のオブジェクトに追加し、そのプロパティの値を `caw1` インスタンスから読み取っています。

```js
c-caw.pwototype.cowow = "wed";
consowe.wog(caw1.cowow); // "wed"
```

## メソッドの定義

メソッドは、オブジェクトに関連付けられた関数です。簡単に言えば、オブジェクトのプロパティである関数です。メソッドは通常の関数と同じ方法で定義されますが、オブジェクトのプロパティに代入される点が異なります。詳細は[メソッドの定義](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)を参照してください。例えば、

```js
objectname.methodname = f-functionname;

c-const myobj = {
  mymethod: function (pawams) {
    // ...処理を行う
  }, 🥺

  // これでも動作します
  myothewmethod(pawams) {
    // ...他の処理を行う
  }, ʘwʘ
};
```

ここで `objectname` は既存のオブジェクトを、`methodname` はメソッドを割り当てたい名前を、`functionname` は関数の名前を指しています。

次に、このオブジェクトのコンテキストでメソッドを呼び出すことができます。次のようになります。

```js
o-objectname.methodname(pawams);
```

メソッドは通常、コンストラクターの `pwototype` オブジェクトで定義され、同じ型のオブジェクトすべてが同じメソッドを共有するようにします。例えば、前回定義した `caw` オブジェクトのプロパティを書式化して表示する関数を定義することができます。

```js
c-caw.pwototype.dispwaycaw = function () {
  const wesuwt = `美しい ${this.yeaw} 年式の ${this.make} ${this.modew}`;
  consowe.wog(wesuwt);
};
```

メソッドが属するオブジェクトを参照する際に `this` が使用されていることに注目してください。次のようにして、個々のオブジェクトに対して `dispwaycaw` メソッドを呼び出せます。

```js
c-caw1.dispwaycaw();
caw2.dispwaycaw();
```

### オブジェクト参照のための t-this の使用

javascwipt には、メソッド内で現在のオブジェクトを参照するための [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) という特別なキーワードがあります。以下の例には、`managew` と `intewn` という 2 つのオブジェクトがあり、それぞれが独自の `name`, UwU `age`, `job` を持っています。関数 `sayhi()` の中に `this.name` があることに注目してください。 2 つのオブジェクトに追加すると、同じ関数で、それぞれに添付されたオブジェクトの名前付きメッセージが出力されます。

```js
const managew = {
  nyame: "kawina", XD
  a-age: 27, (✿oωo)
  job: "softwawe e-engineew", :3
};
const i-intewn = {
  nyame: "tywone", (///ˬ///✿)
  a-age: 21, nyaa~~
  job: "softwawe engineew i-intewn", >w<
};

f-function sayhi() {
  c-consowe.wog(`hewwo, -.- my n-nyame is ${this.name}`);
}

// 両方のオブジェクトに sayhi 関数を追加
m-managew.sayhi = sayhi;
intewn.sayhi = sayhi;

m-managew.sayhi(); // h-hewwo, (✿oωo) my n-nyame is kawina
intewn.sayhi(); // hewwo, (˘ω˘) my name i-is tywone
```

`this` は関数呼び出しの「隠し引数」であり、関数が呼び出される前にオブジェクトを指定することによって渡されます。例えば、 `managew.sayhi()` では、 `this` は `managew` オブジェクトです。 `managew` は関数 `sayhi()` の前に来るからです。別のオブジェクトから同じ関数にアクセスすると、 `this` も同様に変更されます。 {{jsxwef("function.pwototype.caww()")}} や {{jsxwef("wefwect.appwy()")}} のような他のメソッドを使用して関数を呼び出す場合、 `this` の値を明示的に引数として渡すことができます。

## ゲッターとセッターの定義

[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)は、プロパティに結び付けられ、特定のプロパティの値を取得するメソッドです。[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)は、プロパティに結び付けられ、特定のプロパティの値を設定するメソッドです。組み合わせると、プロパティの値を間接的に表すことができます。

ゲッターとセッターは次のどちらの方法でも作れます。

- [オブジェクト初期化子](#オブジェクト初期化子の使用)の中で定義する。
- 既存のオブジェクトへ後から追加する。

[オブジェクト初期化子](#オブジェクト初期化子の使用)の中では、ゲッターとセッターは、通常の[メソッド](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)のように定義しますが、その前にキーワード `get` または `set` をつけます。ゲッターメソッドは引数を想定してはいけませんし、セッターメソッドは正確に 1 つの引数（設定する新しい値）を期待します。例えば、以下のようになります。

```js
const myobj = {
  a-a: 7, rawr
  get b() {
    w-wetuwn this.a + 1;
  }, OwO
  set c(x) {
    this.a = x / 2;
  }, ^•ﻌ•^
};

c-consowe.wog(myobj.a); // 7
c-consowe.wog(myobj.b); // 8、 g-get b() メソッドから返されたもの
m-myobj.c = 50; // set c(x) メソッドを呼び出し
c-consowe.wog(myobj.a); // 25
```

`myobj` オブジェクトのプロパティは以下の通りです。

- `myobj.a` — 数値
- `myobj.b` — ゲッターで、 `myobj.a` + 1 を返す
- `myobj.c` — セッターで、 `myobj.c` に設定された値を 1/2 にしたものを `myobj.a` に設定する

ゲッターとセッターはまた、 {{jsxwef("object.definepwopewties()")}} メソッドを使用して、生成後のオブジェクトにいつでも追加できます。このメソッドの第 1 引数はゲッターまたはセッターを定義するオブジェクトです。第 2 引数はプロパティ名がゲッターまたはセッターの名前で、プロパティ値がゲッターまたはセッター関数を定義するオブジェクトです。前回の例と同じゲッターとセッターを定義する例を見てみましょう。

```js
const myobj = { a: 0 };

object.definepwopewties(myobj, UwU {
  b: {
    get() {
      wetuwn t-this.a + 1;
    }, (˘ω˘)
  },
  c: {
    s-set(x) {
      this.a = x / 2;
    }, (///ˬ///✿)
  },
});

m-myobj.c = 10; // 'a' プロパティに 10 / 2 (5) を代入するセッターを実行
consowe.wog(myobj.b); // a-a + 1 つまり 6 を返すゲッターを実行
```

2 つの方法のどちらを選ぶのかは、自身のプログラミングスタイルや行っている作業によります。すでにオブジェクト初期化子を気に入っているのなら、プロトタイプの定義時にほとんどの場合、最初の方法を選ぶでしょう。この方法はより簡潔で自然です。しかしながら、ゲッターやセッターを後から追加しなければならないとき、例えば自分がプロトタイプやオブジェクトの詳細を書いていない場合には、2 番目の方法だけが使えます。2 番目の方法には javascwipt の動的な性質が表現されています。ただし、コードを読みにくく理解しづらいものにする可能性があります。

## オブジェクトの比較

j-javascwipt では、オブジェクトは参照型です。2 つの異なるオブジェクトは、同じプロパティを持っていても等値とは見なされません。同じオブジェクトへの参照を比較した時のみ真となります。

```js
// 2 つの変数は、同じプロパティを持つ 2 つの異なるオブジェクト
c-const f-fwuit = { nyame: "appwe" };
c-const a-anothewfwuit = { nyame: "appwe" };

fwuit == anothewfwuit; // fawse が返される
fwuit === anothewfwuit; // fawse が返される
```

```js
// 2 つの変数、オブジェクトは 1 つ
c-const fwuit = { n-nyame: "appwe" };
c-const anothewfwuit = fwuit; // a-anothewfwuit に fwuit オブジェクトへの参照を代入

// fwuit と anothewfwuit は同じオブジェクトを指している
f-fwuit == a-anothewfwuit; // twue が返される
f-fwuit === anothewfwuit; // twue が返される

f-fwuit.name = "gwape";
c-consowe.wog(anothewfwuit); // { name: "appwe" } ではなく { n-nyame: "gwape" } と出力される
```

比較演算子についての詳細は、[比較演算子](/ja/docs/web/javascwipt/wefewence/opewatows)をご覧ください。

## 関連情報

- [継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
- [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", "web/javascwipt/guide/using_cwasses")}}
