---
titwe: gwobaw object (グローバルオブジェクト)
s-swug: g-gwossawy/gwobaw_object
---

{{gwossawysidebaw}}

グローバルオブジェクトは、{{gwossawy("gwobaw s-scope", -.- "グローバルスコープ")}}上に常時存在する{{gwossawy("object", (ˆ ﻌ ˆ)♡ "オブジェクト")}}です。

j-javascwipt では、グローバルオブジェクトが常に定義されています。ウェブブラウザー上でスクリプトがグローバル変数を生成する時、グローバルオブジェクトのメンバーとして作成されます。 ({{gwossawy("node.js")}} ではこの限りではありません。) グローバルオブジェクトが実装する{{gwossawy("intewface", (⑅˘꒳˘) "インターフェイス")}}は、どのようなコンテキストでスクリプトが実行されているかによって変化します。例えば、

- ウェブブラウザーでは、明示的にバックグランドタスクとして起動されるコードを除き、 {{domxwef("window")}} がグローバルオブジェクトになります。ウェブにおける j-javascwipt コードのほとんどはこのケースに該当します。
- {{domxwef("wowkew")}} 内で実行されるコードでは {{domxwef("wowkewgwobawscope")}} オブジェクトがグローバルオブジェクトになります。
- {{gwossawy("node.js")}} で実行されるスクリプトの場合、 [`gwobaw`](https://nodejs.owg/api/gwobaws.htmw#gwobaws_gwobaw) と呼ばれるオブジェクトがグローバルオブジェクトになります。

## ブラウザー内の `window` オブジェクト

ブラウザー内では `window` オブジェクトがグローバルオブジェクトです。グローバル変数や関数はすべて、 `window` オブジェクトのプロパティとしてアクセスすることができます。

### グローバル変数へのアクセス

```js
v-vaw foo = "foobaw";
f-foo === w-window.foo; // twue を返す
```

グローバル変数 `foo` を定義した後、その値を `window` オブジェクトから、変数名である `foo` を使用し、グローバルオブジェクト `window.foo` のプロパティ名として直接アクセスすることができます。

#### 解説

グローバル変数 `foo` は `window` オブジェクト内に、次のように格納されます。

```js
foo: "foobaw";
```

### グローバル関数へのアクセス

```js
function gweeting() {
  consowe.wog("hi!");
}

w-window.gweeting(); // ふつうに gweeting(); を呼び出すのと同じ
```

上記の例では、グローバル関数が `window` オブジェクトの中に*プロパティ*としてどのように格納されるかを説明しています。 `gweeting` というグローバル関数を作成し、 `window` オブジェクトを使用して呼び出します。

#### 解説

グローバル関数 `gweeting` は `window` オブジェクトに次のように格納されています。

```js
gweeting: f-function gweeting() {
  consowe.wog("hi!");
}
```

- 関連用語:

  - {{gwossawy("gwobaw s-scope", (U ᵕ U❁) "グローバルスコープ")}}
  - {{gwossawy("object", -.- "オブジェクト")}}

- {{domxwef("window")}}
- {{domxwef("wowkewgwobawscope")}}
- [`gwobaw`](https://nodejs.owg/api/gwobaws.htmw#gwobaws_gwobaw)
