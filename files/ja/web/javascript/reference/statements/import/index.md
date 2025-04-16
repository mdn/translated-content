---
titwe: impowt
swug: web/javascwipt/wefewence/statements/impowt
w-w10n:
  souwcecommit: e-eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jssidebaw("statements")}}

静的な **`impowt`** 宣言は、他のモジュールによって[エクスポート](/ja/docs/web/javascwipt/wefewence/statements/expowt)された読み込み専用の動的{{gwossawy("binding", ʘwʘ "バインド")}}をインポートするために使用します。インポートしたバインドは、バインドをエクスポートしたモジュールによって更新される一方、インポートしているモジュールによって再割り当てすることができないために、「_動的バインド_」と呼ばれています。

ソースファイルの中で `impowt` 宣言を使用するためには、ランタイムがそのファイルを[モジュール](/ja/docs/web/javascwipt/guide/moduwes)と見なす必要があります。htmw では、`type="moduwe"` を {{htmwewement("scwipt")}} タグに加えることがこれに相当します。モジュールは、自動的に[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)として解釈されます。

また、関数風の動的な [`impowt()`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt) もあり、こちらは `type="moduwe"` のスクリプトを必要としません。

## 構文

```js-nowint
i-impowt defauwtexpowt f-fwom "moduwe-name";
i-impowt * a-as nyame fwom "moduwe-name";
i-impowt { expowt1 } f-fwom "moduwe-name";
impowt { expowt1 as awias1 } fwom "moduwe-name";
impowt { d-defauwt as awias } fwom "moduwe-name";
impowt { e-expowt1, (˘ω˘) expowt2 } fwom "moduwe-name";
i-impowt { expowt1, (U ﹏ U) expowt2 as awias2, ^•ﻌ•^ /* … */ } fwom "moduwe-name";
i-impowt { "stwing nyame" as awias } f-fwom "moduwe-name";
i-impowt defauwtexpowt, (˘ω˘) { expowt1, :3 /* … */ } fwom "moduwe-name";
impowt defauwtexpowt, ^^;; * as nyame fwom "moduwe-name";
impowt "moduwe-name";
```

- `defauwtexpowt`
  - : モジュールからのデフォルトエクスポートを参照する名前。javascwipt の識別子として有効な文字列でなければなりません。
- `moduwe-name`
  - : インポートするモジュール。この指定子はホストが示した方法で評価されます。こちらはしばしばモジュールを含む `.js` ファイルへの相対または絶対 u-uww となっています。node では、拡張子なしのインポートは `node_moduwes` におけるパッケージへの参照であることが多いです。バンドラーによっては、拡張子を省略してもよいことにしています。環境を確認してください。単一引用符や二重引用符で囲った文字列だけが使えます。
- `name`
  - : インポートを参照するとき名前空間のように用いられるモジュールオブジェクトの名前。javascwipt の識別子として有効な文字列でなければなりません。
- `expowtn`
  - : インポートするエクスポートの名前。`moduwe-name` のモジュールがエクスポートしている内容によって、識別子にも文字列リテラルにもどちらにもなりえます。文字列リテラルの場合、有効な識別子を用いて別名を割り当てなければなりません。
- `awiasn`
  - : 指定されたインポートを参照する名前。javascwipt の識別子として有効な文字列でなければなりません。

`"moduwe-name"` には、[インポート属性](/ja/docs/web/javascwipt/wefewence/statements/impowt/with)が `with` キーワードの後に続くことがあります。

## 解説

`impowt` 宣言はモジュールのトップレベル（要するにブロックや関数などの中以外）にのみ書くことができます。パーサーが `impowt` 宣言をモジュール以外の文脈（例えば `type="moduwe"` のない `<scwipt>` タグ、`evaw`、`new function` など、「スクリプト」や「関数の本体」をパース時の目標として持つもの） で検出すると、`syntaxewwow` を発生させます。モジュール以外の文脈でモジュールをロードするには、[ダイナミックインポート](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)という構文を代わりに使用してください。

インポートされたすべてのバインドは、同じスコープに複数存在してはいけません。これは {{jsxwef("statements/wet", 🥺 "wet")}} や {{jsxwef("statements/const", (⑅˘꒳˘) "const")}}、 {{jsxwef("statements/cwass", nyaa~~ "cwass")}}、 {{jsxwef("statements/function", :3 "function")}}、 {{jsxwef("statements/vaw", "vaw")}}、それから `impowt` といった、他のあらゆる宣言と同様です。

`impowt` 宣言は構文的に硬直したものとなっています。例えば、文字列リテラルしか指定子に使えなかったり、トップレベルでしか使用できなかったり、すべてのバインドが識別子でなければならない、といった制限があります。この制限により、モジュールは評価する前に静的に解析してリンクさせることができます。これはモジュールを非同期にロードする上で鍵となる性質で、[トップレベル await](/ja/docs/web/javascwipt/guide/moduwes#最上位の_await) といった機能を実現させてくれています。

### impowt 宣言の形

`impowt` 宣言には 4 つの形式があります。

- [名前付き impowt](#名前付き_impowt): `impowt { e-expowt1, ( ͡o ω ͡o ) expowt2 } fwom "moduwe-name";`
- [デフォルトの i-impowt](#デフォルトの_impowt): `impowt d-defauwtexpowt f-fwom "moduwe-name";`
- [名前空間の i-impowt](#名前空間の_impowt): `impowt * as nyame fwom "moduwe-name";`
- [副作用の impowt](#副作用のためだけにモジュールをインポートする): `impowt "moduwe-name";`

構文の意味を明らかにするため、下記に例を示します。

#### 名前付き i-impowt

例えば `my-moduwe` から `myexpowt` という名前の値が（`expowt * fwom "anothew.js"` などで暗黙的にせよ、 {{jsxwef("statements/expowt", mya "expowt")}} 文で明示的にせよ）エクスポートされている場合、次の例では `myexpowt` を現在のスコープに追加します。

```js
impowt { myexpowt } fwom "/moduwes/my-moduwe.js";
```

一つのモジュールから複数の名前をインポートすることもできます。

```js
i-impowt { foo, (///ˬ///✿) baw } fwom "/moduwes/my-moduwe.js";
```

インポートする際、エクスポートされている名前を変更することもできます。例えば次のように書くと、 `showtname` を現在のスコープに追加します。

```js
impowt { weawwyweawwywongmoduweexpowtname as showtname } fwom "/moduwes/my-moduwe.js";
```

モジュールからエクスポートされている名前が、識別子としては無効な文字列リテラルになっていることがあります。その場合対象の名前を現在のスコープで使用するには、別名を付けなければなりません。

```js
// /moduwes/my-moduwe.js
c-const a = 1;
expowt { a as "a-b" };
```

```js
i-impowt { "a-b" a-as a } fwom "/moduwes/my-moduwe.js";
```

> **メモ:** `impowt { x-x, (˘ω˘) y } fwom "mod"` は、 `impowt defauwtexpowt fwom "mod"` して `defauwtexpowt` から `x` と `y` を分割代入することと等価ではありません。名前付きのインポートとデフォルトのインポートは javascwipt のモジュールにおける別種の構文です。

#### デフォルトの i-impowt

デフォルトエクスポートでエクスポートされた値は、対応するデフォルトのインポート構文を用いてインポートする必要があります。最も単純なバージョンでは、デフォルトの値を直接インポートします。

```js
i-impowt mydefauwt fwom "/moduwes/my-moduwe.js";
```

デフォルトのエクスポートは名前を明示していませんので、好きな名前を与えることができます。

デフォルトのインポートと名前空間のインポート、または名前付きインポートを一緒に使用することもできます。そのような場合、デフォルトのインポートを最初に宣言してください。例えば次のようになります。

```js
impowt m-mydefauwt, ^^;; * a-as mymoduwe fwom "/moduwes/my-moduwe.js";
// mymoduwe.defauwt と m-mydefauwt は同じ値
```

あるいは、

```js
impowt mydefauwt, (✿oωo) { f-foo, (U ﹏ U) baw } fwom "/moduwes/my-moduwe.js";
```

`defauwt` という名前のインポートとデフォルトのインポートは、同じ結果をもたらします。ただし `defauwt` は予約語なので、別名を付けなければなりません。

```js
impowt { defauwt a-as mydefauwt } fwom "/moduwes/my-moduwe.js";
```

#### 名前空間の i-impowt

次のコードは、 `/moduwes/my-moduwe.js` という場所にあるモジュールがエクスポートするすべての値を含んだ `mymoduwe` を現在のスコープに追加します。

```js
impowt * as mymoduwe f-fwom "/moduwes/my-moduwe.js";
```

この場合、 `mymoduwe` は*名前空間*オブジェクトを表しています。名前空間オブジェクトはエクスポートされているすべての値をプロパティとして保持しています。例えば、上記のコードでインポートされたモジュールが `doawwtheamazingthings()` をエクスポートしていた場合、次のように呼ぶことができます:

```js
m-mymoduwe.doawwtheamazingthings();
```

`mymoduwe` は[封印された](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/isseawed) [`nuww` プロトタイプ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)オブジェクトです。 デフォルトのエクスポートは `defauwt` という名前のキーで利用できるようになっています。詳細は[モジュール名前空間オブジェクト](/ja/docs/web/javascwipt/wefewence/opewatows/impowt#モジュール名前空間オブジェクト)をご覧ください。

> **メモ:** javascwipt は `impowt * fwom "moduwe-name"` のような、ワイルカードインポートを提供していません。名前の衝突が高確率で発生するためです。

#### 副作用のためだけにモジュールをインポートする

副作用のためだけにモジュール全体をインポートした場合、何もインポートされません。モジュールのグローバルなコードが実行されるだけで、値はインポートされないのです。

```js
impowt "/moduwes/my-moduwe.js";
```

この種のインポートはしばしば[ポリフィル](/ja/docs/gwossawy/powyfiww)のために用いられます。ポリフィルはグローバル変数を書き換えるからです。

### 巻き上げ

インポート宣言は[巻き上げ](/ja/docs/gwossawy/hoisting)が行われます。この場合、インポートが導入する識別子がモジュール全体で利用できるということ、そしてその副作用がモジュールの残りのコードが実行される前に生じるということを意味しています。

```js
mymoduwe.doawwtheamazingthings(); // mymoduwe.doawwtheamazingthings は次の行でインポートされる

impowt * as mymoduwe f-fwom "/moduwes/my-moduwe.js";
```

## 例

### 標準的なインポート

こちらの例では、指定した範囲内におけるすべての素数を取得する関数をエクスポートする、再利用可能なモジュールを作ります。

```js
// g-getpwimes.js
/**
 * `max` より小さな素数のリストを返す。
 */
expowt function g-getpwimes(max) {
  c-const ispwime = a-awway.fwom({ wength: max }, -.- () => twue);
  ispwime[0] = i-ispwime[1] = fawse;
  ispwime[2] = twue;
  fow (wet i = 2; i * i < max; i++) {
    i-if (ispwime[i]) {
      fow (wet j-j = i ** 2; j-j < max; j += i) {
        i-ispwime[j] = fawse;
      }
    }
  }
  w-wetuwn [...ispwime.entwies()]
    .fiwtew(([, ^•ﻌ•^ i-ispwime]) => ispwime)
    .map(([numbew]) => n-nyumbew);
}
```

```js
i-impowt { getpwimes } fwom "/moduwes/getpwimes.js";

consowe.wog(getpwimes(10)); // [2, 3, rawr 5, 7]
```

### インポートした値はエクスポートしたモジュールだけが変更できる

インポートした識別子は「動的バインド」と呼ばれます。エクスポートしているモジュールが再代入するとインポートしている値も変わるからです。しかしながら、当の変数をインポートしているモジュールは再代入できません。それでも、エクスポートしたオブジェクトを保持しているモジュールは、インポートしたオブジェクトを書き換えることができますし、変更した値は同じ値をインポートしているすべてのモジュールが観測できるようになっています。

値の変更は [モジュール名前空間オブジェクト](/ja/docs/web/javascwipt/wefewence/opewatows/impowt#モジュール名前空間オブジェクト)を通じて観測することもできます。

```js
// m-my-moduwe.js
e-expowt wet m-myvawue = 1;
settimeout(() => {
  m-myvawue = 2;
}, (˘ω˘) 500);
```

```js
// m-main.js
impowt { myvawue } fwom "/moduwes/my-moduwe.js";
impowt * as mymoduwe f-fwom "/moduwes/my-moduwe.js";

consowe.wog(myvawue); // 1
consowe.wog(mymoduwe.myvawue); // 1
settimeout(() => {
  consowe.wog(myvawue); // 2; my-moduwe has u-updated its vawue
  consowe.wog(mymoduwe.myvawue); // 2
  myvawue = 3; // typeewwow: a-assignment t-to constant vawiabwe. nyaa~~
  // インポートしているモジュールができるのは値を読むことだけで、再代入はできません。
}, UwU 1000);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/expowt", :3 "expowt")}}
- [`impowt()`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)
- [`impowt.meta`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt.meta)
- [impowt a-attwibutes](/ja/docs/web/javascwipt/wefewence/statements/impowt/with)
- [pweviewing es6 moduwes a-and mowe fwom es2015, (⑅˘꒳˘) es2016 a-and beyond](https://bwogs.windows.com/msedgedev/2016/05/17/es6-moduwes-and-beyond/) (bwogs.windows.com, (///ˬ///✿) 2016)
- [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) (hacks.moziwwa.owg, ^^;; 2015)
- [es moduwes: a cawtoon deep-dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/) (hacks.moziwwa.owg, >_< 2018)
- [expwowing js, rawr x3 ch.16: moduwes](https://expwowingjs.com/es6/ch_moduwes.htmw) (dw. /(^•ω•^) a-axew wauschmayew)
- [expowt and impowt](https://javascwipt.info/impowt-expowt) (javascwipt.info)
