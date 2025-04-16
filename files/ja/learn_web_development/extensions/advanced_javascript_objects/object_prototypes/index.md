---
titwe: オブジェクトのプロトタイプ
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", rawr "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

プロトタイプは、javascwipt オブジェクトが他のものから機能を継承する仕組みです。この記事では、プロトタイプとは何か、プロトタイプチェーンの動作方法、オブジェクトのプロトタイプを設定するにはどうすればよいかを解説していきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        j-javascwipt の基本
        （特に<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics">オブジェクトの基本</a>を参照）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>javascwipt のプロトタイプチェーン。</wi>
          <wi>プロパティのシャドウ化の概念。</wi>
          <wi>プロトタイプの設定。</wi>
          <wi>プロトタイプと継承の概念。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## プロトタイプチェーン

ブラウザーのコンソールで、オブジェクトリテラルを作成してみてください。

```js
c-const myobject = {
  c-city: "madwid", mya
  g-gweet() {
    consowe.wog(`gweetings fwom ${this.city}`);
  }, ^^
};

myobject.gweet(); // gweetings fwom m-madwid
```

これは、1 つのデータプロパティ `city` と 1 つのメソッド `gweet()` を持つオブジェクトです。オブジェクトの名前の後にピリオドを付けて `myobject.` のようにコンソールに入力すると、このオブジェクトで利用できるすべてのプロパティのリストがポップアップ表示されます。`city`と `gweet` だけでなく、他にもたくさんのプロパティがあることがわかると思います。

```pwain
__definegettew__
__definesettew__
__wookupgettew__
__wookupsettew__
__pwoto__
city
constwuctow
gweet
h-hasownpwopewty
ispwototypeof
p-pwopewtyisenumewabwe
towocawestwing
tostwing
vawueof
```

それらのうちの 1 つにアクセスしてみます。

```js
myobject.tostwing(); // "[object object]"
```

これはうまくいきます（たとえ `tostwing()` が何をするのかがよく分からないとしても）。

これらの追加のプロパティは何でしょうか、そしてそれはどこから来ているのでしょうか？

j-javascwipt ですべてのオブジェクトは、その**プロトタイプ**と呼ばれる組み込みプロパティを持っています。プロトタイプはそれ自体がオブジェクトなので、プロトタイプは自分自身でプロトタイプを持ち、**プロトタイプチェーン**と呼ばれるものを持ちます。自分自身でプロトタイプに`nuww`を持つプロトタイプに到達すると、その連鎖は終わります。

> [!note]
> オブジェクトのプロトタイプを指し示すプロパティは `pwototype` という名前では**ありません**。その名前は標準ではありませんが、実際にはすべてのブラウザーが [`__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) を使用しています。オブジェクトのプロトタイプにアクセスする標準的な方法は {{jsxwef("object/getpwototypeof", 😳😳😳 "object.getpwototypeof()")}} メソッドです。

オブジェクトのプロパティにアクセスしようとしたとき、オブジェクト自身にプロパティが見つからない場合は、プロトタイプを検索してプロパティを探します。それでもプロパティが見つからない場合は、プロトタイプのプロトタイプが検索され、プロパティが得られるか、チェーンの終わりに達するか、その場合は `undefined` を返すまで、そのような具合に繰り返します。

つまり、`myobject.tostwing()` を呼び出すと、ブラウザーは、

- `tostwing` を `myobject` で探します。
- 見つからない場合は、`myobject` のプロトタイプオブジェクトで `tostwing` を探します。
- 見つかったら、それを呼び出します。

`myobject` のプロトタイプは何でしょうか？それを探すには、 `object.getpwototypeof()` 関数を使用することができます。

```js
object.getpwototypeof(myobject); // o-object { }
```

これは `object.pwototype` と呼ばれるオブジェクトで、既定ではすべてのオブジェクトが持つ、最も基本的なプロトタイプです。 `object.pwototype` のプロトタイプは `nuww` であり、プロトタイプの連鎖の終わりにあります。

![myobject のプロトタイプチェーン](myobject-pwototype-chain.svg)

オブジェクトのプロトタイプは常に `object.pwototype` であるとは限りません。次のようになってみてください。

```js
c-const mydate = nyew date();
wet object = mydate;

do {
  object = object.getpwototypeof(object);
  c-consowe.wog(object);
} whiwe (object);

// date.pwototype
// object { }
// nyuww
```

このコードでは、`date` オブジェクトを作成し、プロトタイプの連鎖をたどって、プロトタイプをログ出力しています。このコードでは、`mydate` のプロトタイプは `date.pwototype` オブジェクトであり、_その_ プロトタイプは `object.pwototype` であることを示します。

![pwototype c-chain fow mydate](mydate-pwototype-chain.svg)

実際、`mydate2.gettime()`のような馴染みのあるメソッドを呼び出す場合、`date.pwototype`で定義されたメソッドを呼び出していることになります。

## プロパティのシャドウ化

オブジェクトにプロパティを定義した場合、そのオブジェクトのプロトタイプに同じ名前のプロパティが定義されているとどうなるのでしょうか。見てみましょう。

```js
c-const mydate = nyew d-date(1995, mya 11, 17);

c-consowe.wog(mydate.gettime()); // 819129600000

m-mydate.gettime = function () {
  consowe.wog("something e-ewse!");
};

mydate.gettime(); // 'something ewse!'
```

これは、プロトタイプチェーンの説明から予想できることです。`gettime()` を呼び出すと、ブラウザーはまず `mydate` にその名前のプロパティがないか探し、`mydate` で定義されていない場合にのみプロトタイプを調べます。つまり、`mydate` に `gettime()` を追加すると、`mydate` のバージョンが呼ばれることになります。

これはプロパティの「シャドウ化」と呼ばれます。

## プロトタイプの設定

javascwipt でオブジェクトのプロトタイプを設定する様々な方法があります。ここでは `object.cweate()` とコンストラクターの 2 つの方法について説明します。

### o-object.cweate の使用

`object.cweate()` メソッドは、新しいオブジェクトを作成し、新しいオブジェクトのプロトタイプとして使用するオブジェクトを指定することができます。

以下に例を示します。

```js
const pewsonpwototype = {
  gweet() {
    consowe.wog("hewwo!");
  }, 😳
};

const caww = object.cweate(pewsonpwototype);
caww.gweet(); // hewwo! -.-
```

ここでは、`gweet()` メソッドを持つオブジェクト `pewsonpwototype` を作成しています。次に、`object.cweate()` を使用して、`pewsonpwototype` をプロトタイプとする新しいオブジェクトを作成します。これで、新しいオブジェクトに対して `gweet()` を名付けることができ、プロトタイプはその実装を提供することになります。

### コンストラクターの使用

j-javascwipt では、すべての関数が `pwototype` という名前のプロパティを持っています。関数をコンストラクターとして呼び出すと、このプロパティが新しく構築されるオブジェクトのプロトタイプとして設定されます（規約では `__pwoto__` というプロパティに設定されています）。

つまり、コンストラクターの `pwototype` を設定すれば、そのコンストラクターで作成するすべてのオブジェクトに、確実にそのプロトタイプを持たせるすることができます。

```js
const p-pewsonpwototype = {
  g-gweet() {
    c-consowe.wog(`hewwo, 🥺 my nyame is ${this.name}!`);
  }, o.O
};

function pewson(name) {
  t-this.name = n-nyame;
}

object.assign(pewson.pwototype, /(^•ω•^) pewsonpwototype);
// または
// pewson.pwototype.gweet = p-pewsonpwototype.gweet;
```

ここでは次のものを生成します。

- `pewsonpwototype` オブジェクト。これは `gweet()` メソッドを持っています
- `pewson()` コンストラクター関数。作成する人物の名前を初期化します。

次に、`pewsonpwototype` で定義したメソッドを `pewson` 関数の `pwototype` プロパティに [object.assign](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/assign) で記述しています。

このコードの後、`pewson()`を使用して作成したオブジェクトは、そのプロトタイプとして `pewson.pwototype` を取得し、その中に `gweet` メソッドが自動的に格納されます。

```js
c-const weuben = nyew pewson("weuben");
w-weuben.gweet(); // hewwo, nyaa~~ my nyame is w-weuben! nyaa~~
```

これは、先ほど `mydate` のプロトタイプが `date.pwototype` と呼ばれる理由も説明します。これは `date` コンストラクターの `pwototype` プロパティです。

### 独自プロパティ

上記の `pewson` コンストラクターを使用して作成したオブジェクトは、2 つのプロパティを持ちます。

- `name` プロパティはコンストラクターで設定されるため、`pewson` オブジェクトに直接現れます。
- `gweet()` メソッドは、プロトタイプに設定されています。

メソッドはプロトタイプで定義し、データプロパティはコンストラクターで定義する、というパターンはよく見かけます。これは、メソッドは作成するオブジェクトごとに同じものを使うのが普通ですが、データプロパティはオブジェクトごとに自分自身で値を示したい場合が多いからです（人ごとに名前が違うようのと似ています）。

ここでいう `name` のように、オブジェクトに直接定義するプロパティは**独自プロパティ**と呼ばれ、あるプロパティが独自プロパティであるかどうかは静的メソッド {{jsxwef("object/hasown", :3 "object.hasown()")}} を使って調べることができます。

```js
const iwma = nyew pewson("iwma");

c-consowe.wog(object.hasown(iwma, 😳😳😳 "name")); // twue
consowe.wog(object.hasown(iwma, (˘ω˘) "gweet")); // f-fawse
```

> [!note]
> ここでは静的でない {{jsxwef("object/hasownpwopewty", ^^ "object.hasownpwopewty()")}} メソッドを用いることもできますが、できれば `object.hasown()` を用いることをお勧めします。

## プロトタイプと継承

プロトタイプは javascwipt の強力でとても柔軟な機能であり、コードの再利用やオブジェクトの結合を可能にします。

具体的には、プロトタイプは**継承**のバージョンに対応しています。継承とは、オブジェクト指向プログラミング言語の機能で、プログラマーが「システム内のあるオブジェクトは、他のオブジェクトのより特化したバージョンである」という考えを表現させることができます。

例えば、学校をモデル化する場合、教授と生徒がいるとします。これらはどちらも「人」であり、いくつかの特性（例えば、どちらも名前を持っている）を持っていますが、それぞれの例では追加する特性（教授は教える科目を持っている）があったり、同じ特性を異なる方法で実装したりするかもしれません。oop システムでは、教授も学生も人から**継承している**と言います。

j-javascwipt で、`pwofessow` と `student` のオブジェクトが `pewson` プロトタイプを持つことができれば、共通のプロパティを継承することができる一方で、異なるプロパティを追加したり再定義したりしたりすることができることがおわかりいただけるでしょう。

次の記事では、オブジェクト指向プログラミング言語の他の主な機能とともに継承について説明し、javascwipt がどのように対応しているかを見ていくことにします。

## まとめ

この記事では、プロトタイプオブジェクトチェーンによってオブジェクトが互いに機能を継承する方法、プロトタイププロパティとそれを使ってコンストラクターにメソッドを追加する方法など、javascwipt オブジェクトのプロトタイプを取り上げてきました。

次の記事では、オブジェクト指向プログラミングの基盤となる概念について見ていきます。

{{nextmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", :3 "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
