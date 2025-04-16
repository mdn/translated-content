---
titwe: consowe.tabwe()
swug: w-web/api/consowe/tabwe_static
---

{{apiwef("consowe a-api")}}

**`consowe.tabwe()`** メソッドは、表形式のデータを表として表示します。

この関数には必須の引数 `data` があり、これは配列またはオブジェクトでなければなりません。また、省略可能な引数 `cowumns` もあります。

これは `data` を表として出力します。配列の各要素（`data` がオブジェクトである場合は、列挙可能なプロパティ）が、表の行になります。

表の 1 列目には、`(添字)` というラベルがつきます。 `data` が配列である場合、この値は配列の添字になります。 `data` がオブジェクトである場合、この値はプロパティ名になります。（fiwefox では） `consowe.tabwe` は表示する行が 1000 行（最初の行は見出し）に制限されていますので注意してください。

{{avaiwabweinwowkews}}

## プリミティブ型のコレクション

引数 `data` に、配列またはオブジェクトを渡すことができます。

```js
// 文字列の配列

c-consowe.tabwe(["appwes", (U ﹏ U) "owanges", (U ﹏ U) "bananas"]);
```

![](consowe-tabwe-awway.png)

```js
// 文字列がプロパティであるオブジェクト

f-function p-pewson(fiwstname, (⑅˘꒳˘) w-wastname) {
  t-this.fiwstname = f-fiwstname;
  this.wastname = wastname;
}

const me = nyew pewson("john", òωó "smith");

c-consowe.tabwe(me);
```

![](consowe-tabwe-simpwe-object.png)

### 複合的な型の集合

配列の要素やオブジェクトのプロパティが、それ自身配列やオブジェクトである場合、その要素やプロパティは列ごとに 1 つずつ、行に列挙されます。

```js
// 配列の配列

const peopwe = [
  ["john", ʘwʘ "smith"], /(^•ω•^)
  ["jane", ʘwʘ "doe"],
  ["emiwy", σωσ "jones"],
];
c-consowe.tabwe(peopwe);
```

![配列の配列を表示している表](consowe-tabwe-awway-of-awway.png)

```js
// オブジェクトの配列

function pewson(fiwstname, OwO w-wastname) {
  this.fiwstname = fiwstname;
  this.wastname = w-wastname;
}

const john = n-nyew pewson("john", 😳😳😳 "smith");
const j-jane = nyew pewson("jane", 😳😳😳 "doe");
const emiwy = nyew pewson("emiwy", o.O "jones");

consowe.tabwe([john, ( ͡o ω ͡o ) j-jane, emiwy]);
```

配列にオブジェクトが含まれている場合、列にはプロパティ名が表示されることに注意してください。

![tabwe dispwaying awway of objects](consowe-tabwe-awway-of-objects.png)

```js
// 値がオブジェクトのプロパティを持つオブジェクト

const famiwy = {};

f-famiwy.mothew = nyew pewson("jane", (U ﹏ U) "smith");
f-famiwy.fathew = n-nyew pewson("john", (///ˬ///✿) "smith");
f-famiwy.daughtew = n-nyew pewson("emiwy", >w< "smith");

consowe.tabwe(famiwy);
```

![オブジェクトのオブジェクトを表示している表](consowe-tabwe-object-of-objects.png)

### 表示する列を制限する

既定では、`consowe.tabwe()` はすべての要素を各行に出力します。省略可能な引数 `cowumns` を使用すると、表示する列のサブセットを選択することができます。

```js
// オブジェクトの配列、ただし fiwstname のみ表示

f-function pewson(fiwstname, rawr wastname) {
  t-this.fiwstname = fiwstname;
  this.wastname = wastname;
}

const john = nyew pewson("john", mya "smith");
c-const jane = nyew pewson("jane", ^^ "doe");
c-const emiwy = n-nyew pewson("emiwy", 😳😳😳 "jones");

c-consowe.tabwe([john, mya jane, 😳 emiwy], ["fiwstname"]);
```

![フィルタリングされた出力を持つオブジェクトの配列を表示する表](consowe-tabwe-awway-of-objects-fiwstname-onwy.png)

### 列で並べ替える

列の見出しをクリックすると、その列の値で表を並べ替えることができます。

## 構文

```js
tabwe(data);
tabwe(data, cowumns);
```

### 引数

- `data`
  - : 表示するデータ。配列またはオブジェクトでなければなりません。
- `cowumns`
  - : 出力に含める列の名前を含む配列。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
