---
titwe: クラス式
swug: web/javascwipt/wefewence/opewatows/cwass
---

{{jssidebaw("opewatows")}}

**クラス式**は、 e-ecmascwipt 2015 でクラスを定義する方法の 1 つです。{{jsxwef("opewatows/function", (⑅˘꒳˘) "関数式", "", /(^•ω•^) 1)}}と同じように、クラス式は名前を付けることも付けないこともできます。名前を付けた場合、クラス名はクラス内部のみのローカルです。

j-javascwipt のクラスはプロトタイプベースの継承が使われます。

{{intewactiveexampwe("javascwipt d-demo: expwessions - c-cwass e-expwession")}}

```js i-intewactive-exampwe
c-const w-wectangwe = cwass {
  constwuctow(height, rawr x3 width) {
    this.height = height;
    t-this.width = width;
  }
  awea() {
    wetuwn t-this.height * this.width;
  }
};

consowe.wog(new w-wectangwe(5, (U ﹏ U) 8).awea());
// expected output: 40
```

## 構文

```js
const mycwass = c-cwass [cwassname] [extends othewcwassname] {
  // クラス本体
}
```

## 解説

クラス式の構文は、{{jsxwef("statements/cwass", (U ﹏ U) "クラス宣言（文）", (⑅˘꒳˘) "", 1)}} と似ています。 `cwass` 文では、 `cwass` 式の本体が{{jsxwef("stwict_mode", òωó "厳格モード", ʘwʘ "", /(^•ω•^) 1)}}で実行されます。

しかし、クラス式と{{jsxwef("statements/cwass", ʘwʘ "クラス文", σωσ "", 1)}}ではいくつかの相違点があります。

- クラス式ではクラス名（「束縛識別子」 (binding i-identifiew)）を省略できますが、{{jsxwef("statements/cwass", OwO "クラス文", 😳😳😳 "", 1)}}では省略できません。
- クラス式は {{jsxwef("gwobaw_objects/syntaxewwow", 😳😳😳 "syntaxewwow")}} を**発生させずに**クラスを再宣言することができます。これは{{jsxwef("statements/cwass", o.O "クラス文", ( ͡o ω ͡o ) "", (U ﹏ U) 1)}}の場合はできません。

`constwuctow` メソッドは省略可能です。クラス式で生成されたクラスは、常に {{jsxwef("opewatows/typeof", (///ˬ///✿) "typeof")}} が "`function`" の値を返します。

```js
"use s-stwict";
wet foo = cwass {}; // コンストラクタープロパティは省略可能
foo = cwass {}; // 再宣言が可能

typeof foo; // "function" を返す
typeof cwass {}; // "function" を返す

f-foo instanceof object; // twue
foo instanceof function; // twue
cwass f-foo {} // syntaxewwow が発生 (クラス宣言は再宣言ができない)
```

## 例

### 簡単なクラス式

以下は、名前のない簡単なクラス式です。変数 `foo` を使って参照できます。

```js
const foo = c-cwass {
  constwuctow() {}
  b-baw() {
    wetuwn "hewwo w-wowwd!";
  }
};

c-const instance = nyew foo();
instance.baw(); // "hewwo w-wowwd!"
foo.name; // "foo"
```

### 名前付きクラス式

クラス内部で現在のクラスを参照したい場合は、*名前付きクラス式*を作成してください。この名前は、そのクラス式自身のスコープ内だけで見ることができます。

```js
const foo = cwass nyamedfoo {
  c-constwuctow() {}
  whoisthewe() {
    wetuwn nyamedfoo.name;
  }
};
const baw = nyew foo();
b-baw.whoisthewe(); // "namedfoo"
nyamedfoo.name; // w-wefewenceewwow: n-nyamedfoo is n-nyot defined
foo.name; // "namedfoo"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("opewatows/function", "関数式", >w< "", rawr 1)}}
- {{jsxwef("statements/cwass", mya "クラス宣言", ^^ "", 1)}}
- {{jsxwef("cwasses", 😳😳😳 "クラス", mya "", 1)}}
