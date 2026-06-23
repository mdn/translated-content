---
title: JavaScript プロトタイプ汚染
slug: Web/Security/Attacks/Prototype_pollution
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

**プロトタイプ汚染**とは、攻撃者がオブジェクトのプロトタイプにプロパティを追加または変更できる脆弱性です。これにより、アプリケーション内のオブジェクトに予期しない悪意のある値が現れる可能性があり、多くの場合、論理エラーや、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) などのさらなる攻撃につながります。

## JavaScript のプロトタイプ

JavaScript では、プロトタイプを使用して{{glossary("inheritance", "継承")}}を実装しています。各オブジェクトはプロトタイプへの参照を持っており、そのプロトタイプ自体もオブジェクトであり、さらにそのプロトタイプもまたオブジェクトである、というように連鎖し、最終的に `Object.prototype` と呼ばれる基本プロトタイプに到達し、そのプロトタイプは `null` です。

オブジェクトのプロパティにアクセスしたり、メソッドを呼び出そうとした際に、そのプロパティやメソッドが当該オブジェクトに定義されていない場合、JavaScript ランタイムは、そのオブジェクトのプロトタイプ内でそのプロパティやメソッドを検索し、次にそのプロトタイプのプロトタイプ内を検索し、というように、そのプロパティやメソッドが見つかるか、プロトタイプが `null` であるオブジェクトに到達するまで検索を続けます。

そのため、このようにすることができます。

```js
const mySet = new Set([1, 2, 3]);
// プロトタイプチェーン:
// mySet -> Set.prototype -> Object.prototype -> null

mySet.size;
// 3
// size は `mySet` のプロトタイプ (`Set.prototype`) で定義されています。

mySet.propertyIsEnumerable("size");
// false
// propertyIsEnumerable() は、`Set.prototype` のプロトタイプ
// （つまり `Object.prototype`）上で定義されています。
```

他の多くの言語とは異なり、JavaScript では、オブジェクトのプロトタイプを変更することで、実行時に継承されたプロパティやメソッドを追加することができます。

```js example-bad
const mySet = new Set([1, 2, 3]);

// 実行時に Object のプロトタイプを変更
Object.prototype.extra = "Object のプロトタイプの新しいプロパティです";

// 実行時に Set のプロトタイプを変更
Set.prototype.other = "Set のプロトタイプの新しいプロパティです";

mySet.extra;
// "Object のプロトタイプの新しいプロパティです"

mySet.other;
// "Set のプロトタイプの新しいプロパティです"
```

プロトタイプ汚染攻撃では、攻撃者は `Object.prototype` などの組み込みプロトタイプを変更し、攻撃者が直接アクセスできないオブジェクトを含め、すべての派生オブジェクトに余分なプロパティを持たせるようにします。

> [!NOTE]
> プロトタイプについてさらに詳しく知りたい場合は、以下を参照してください。
>
> - [オブジェクトのプロトタイプ](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
> - [継承](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
> - [オブジェクトの操作](/ja/docs/Web/JavaScript/Guide/Working_with_objects)

## プロトタイプ汚染の構造

プロトタイプによる汚染には、次の 2 つの段階があります。

1. **汚染**: 攻撃者は、オブジェクトのプロトタイプ上のプロパティを追加または変更することができます。
2. **搾取**: 元のアプリケーションコードが汚染されたプロパティにアクセスし、予期しない動作を誘発します。

### 汚染源

オブジェクトを汚染するためには、攻撃者はプロトタイプオブジェクトに任意のプロパティを追加する手段が必要となります。これは、攻撃者がページの JavaScript 実行環境に直接アクセスできる [XSS](/ja/docs/Web/Security/Attacks/XSS) の結果として生じる可能性があります。しかし、このレベルのアクセス権を持つ攻撃者は、より直接的に損害を与えることができるため、プロトタイプ汚染は通常、_データのみ_の攻撃として議論されます。この場合、攻撃者はアプリケーションコードによって処理され、汚染を引き起こすペイロードを構築します。

主要な攻撃ベクトルの一つは、[`__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) プロパティであり、これにより任意のオブジェクトのプロトタイプオブジェクトにアクセスできます。また、`yourObject.constructor.prototype` を通じてプロトタイプにアクセスすることも可能です。汚染の原因となる主なコードパターンは、次のような動的なプロパティ変更です。

```js
obj[key1][key2] = value;
```

この場合、`obj` が通常のオブジェクトであり、`key1` が `"__proto__"`、`key2` が `"test"` などのプロパティ名であるとき、このコードは `Object.prototype`（すべての通常のオブジェクトのプロトタイプ）に `test` というプロパティを追加します。たとえ [`"__proto__"` のセッターが無効化されていても](#node.js_の_--disable-proto_フラグ)、`.constructor.prototype` というアクセスパターンを使えばプロトタイプにアクセスすることができ、通常のオブジェクトの場合、これも `Object.prototype` になります。

```js
obj[key1][key2][key3] = value;
```

...ここで、`key1` は `"constructor"`、`key2` は `"prototype"`、`key3` は `"test"` などのプロパティ名です。

この行をより広いコンテキストで考えると、`key1`、`key2`、`key3` は、攻撃者が制御する値である可能性があります。例えば、ユーザー名のリストと、各ユーザーについて照会するフィールドのリストを受け取り、各ユーザー名をそのフィールドにマッピングしたオブジェクトを返す API エンドポイントを想像してみてください。

```js
function getUsers(request) {
  const result = {};
  const userNames = new URL(request.url).searchParams.getAll("names");
  const fields = new URL(request.url).searchParams.getAll("fields");
  for (const name of userNames) {
    const userInfo = database.lookup(name);
    result[name] ??= {};
    for (const field of fields) {
      // 汚染源
      result[name][field] = userInfo[field];
    }
  }
  return result;
}
```

ここで、攻撃者が URL `https://example.com/api?names=__proto__&fields=age` を使用してこの API を呼び出すと、コードは `Object.prototype` に `age` というプロパティを追加し、その値は `__proto__` ユーザーの `age` プロパティの値と同じになります。その値は `undefined` になる可能性もありますが、攻撃者が（例えば別のAPI呼び出しを通じて）`__proto__` という名前のユーザーをデータベースに追加できれば、`age` プロパティの値を制御できるようになります。

[URL クエリー文字列の独自解析](https://github.com/BlackFan/client-side-prototype-pollution)を行う多くのライブラリーは、クエリー文字列を介して深いオブジェクト構造を指定できるようにしており、`?__proto__[test]=test` や `?__proto__.test=test` のように動的なプロパティ変更を用いてオブジェクトを構築するため、特に脆弱です。ライブラリーは一般的に、アプリケーションコードよりも脆弱です。これは、有効なキーを許可リストに登録することができず、汎用性を確保するために動的なプロパティ変更を使用する必要がある場合が多いためです。

なお、[JSON](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) では、`__proto__` プロパティは単なる通常のプロパティ名に過ぎないため、`{"__proto__": {"test": "value"}}` のような JSON 本体を解析しても、単に `__proto__` というプロパティを持つオブジェクトが生成されるだけであり、直ちに問題となることはありません。しかし、その後ののコードで、{{jsxref("Object.assign()")}} や [`for...in` ループ](/ja/docs/Web/JavaScript/Reference/Statements/for...in)などを通じて、そのオブジェクトが別のオブジェクトにマージされた場合、暗黙のプロパティ代入操作によってセッターが呼び出されます。通常、動的なプロパティへのアクセスは 1 段階のみであるため、実際には `Object.prototype` は変更されませんが、対象オブジェクトのプロトタイプは変更されます。なお、[スプレッド演算](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)はこの種の攻撃の影響を受けません。スプレッド演算はセッターを呼び出さないためです。

```js
// 単なる `__proto__` というプロパティを持つオブジェクト
const options = JSON.parse('{"__proto__": {"test": "value"}}');
const withDefaults = Object.assign({ mode: "cors" }, options);
// `options` をマージする過程で、間接的に
// `withDefaults.__proto__ = { test: "value" }` を実行したため、
// `withDefaults` のプロトタイプが異なるものとなってしまう
console.log(withDefaults.test); // "value"
```

### 搾取の対象

プロトタイプ汚染の影響は、次の {{domxref("fetch()")}} の呼び出しがどのように完全に変更されるかを見ればわかります。デフォルトでは、これはサーバーに送信するコンテンツのない {{HTTPMethod("GET")}} リクエストですが、`Object.prototype` オブジェクトに 2 つの新しいデフォルトプロパティを追加して「汚染」したため、`fetch()` の呼び出しは {{HTTPMethod("POST")}} リクエストに変換され、リクエスト本文には、例えば任意の金額を任意のアドレスに送金するといった、サーバーへの指示が含まれるようになりました。

```js
// 攻撃者は、間接的に以下の汚染を発生させる
Object.prototype.body = "action=transfer&amount=1337&to=1337-1337-1337-1337";
Object.prototype.method = "POST";

fetch("https://example.com", {
  mode: "cors",
});
// Promise {status: "pending", body: "action=transfer&amount=1337&to=1337-1337-1337-1337", method: "POST"}

// 新しいオブジェクトの初期化処理は、追加のデフォルトプロパティを含むように変更された
console.log({}.method); // "POST"
console.log({}.body); // "action=transfer&amount=1337&to=1337-1337-1337-1337"
```

もう 1 つの危険な汚染攻撃の標的となるのは、{{HTMLElement("iframe")}} 要素のコンテンツを指定する {{domxref("HTMLIframeElement.srcdoc")}} プロパティです。この値を上書きすることで、任意のコードを実行できる可能性があります。

```js
Object.prototype.srcdoc = "<script>alert(1)<\/script>";
```

上記のコード例にある `fetch()` の {{domxref("RequestInit")}} オブジェクトや、`<iframes>` のインスタンス化、サニタイザーの設定（{{domxref("SanitizerConfig")}} オブジェクト）などの設定オブジェクトは、最も脆弱なオブジェクトの一部であり、プロトタイプ汚染攻撃の標的となることがよくあります。データオブジェクトも同様に汚染される可能性があります。

```js
function accessDashboard(user) {
  if (!user.isAdmin) {
    return new Response("Access denied", { status: 403 });
  }
  // 管理者ページを表示
}
```

`Object.prototype.isAdmin` が `true` に設定されており、かつ管理者以外のユーザーに対して `isAdmin` プロパティが明示的に `false` に設定されていない場合、すべてのユーザーが管理者として扱われ、アクセス制御が完全に迂回されてしまいます。

## プロトタイプ汚染からの防御

プロトタイプ汚染に対する防御策は、プロトタイプの変更につながる可能性のあるコードを避けることと、汚染されている可能性のあるプロパティへのアクセスを避けることの 2 つのアプローチがあります。次の節いでは、状況に応じて活用できるいくつかの対策を紹介します。

### ユーザー入力の検証

[ajv](https://ajv.js.org) や [Zod](https://zod.dev/) などのバリデーターを使用して、ユーザー入力を常に検証し、入力データの構造に適切なプロパティと適切な型が含まれていることを確認してください。プロトタイプ汚染攻撃を軽減するには、スキーマ内で `additionalProperties` を `false` に設定して、不要なプロパティを拒否してください。また、スキーマを使用することで、欠落しているプロパティのデフォルト値を設定することもでき、これによりプロトタイプの参照を回避できます。

`key` の値を検証できない限り、動的なプロパティの変更（`obj[key] = value` のような形）は避けるべきです。そのような状況にある場合は、検証の際に `__proto__`、`constructor`、`prototype` をキーとして除外するとよいでしょう。

### Node.js の `--disable-proto` フラグ

Node.js 環境であれば、`Object.prototype.__proto__` が `--disable-proto=MODE` オプションを使用すると無効にできます。ここで、`MODE` には `delete`（プロパティを完全に削除する）または `throw`（プロパティへのアクセス時に `ERR_PROTO_ACCESS` というコードの例外をスローする）のどちらか指定します。Node.js 以外の環境では、同様の効果を得るために `delete Object.prototype.__proto__` を使用してください。

これだけではプロトタイプ汚染を完全に防ぐことはできません（`constructor.prototype` はまだ利用可能だからです）が、そのような侵入経路の一つは排除できます。

### 組み込みオブジェクトのロックダウン

セキュリティ要件が厳しい環境では、組み込みオブジェクトへのいかなる変更も防止する "_realm lockdown_" と呼ばれる防御策が導入される場合があります。例えば、[Hardened JavaScript](https://hardenedjs.org) 向けの [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses) シムがあります。これは {{jsxref("Object.freeze()")}} 関数に基づいて実装されており、プロパティの追加を防止するとともに、既存のプロパティを書き込み不可かつ設定不可にします。オブジェクトの凍結は、JavaScriptが提供する最高レベルの整合性です。一方、{{jsxref("Object.seal()")}} を使用すると、書き込み可能なプロパティに限り変更が可能ですが、{{jsxref("Object.preventExtensions()")}} を使用すると、オブジェクトへの新しいプロパティの追加が防止されます。

```js
Object.freeze(Object.prototype);
const obj = {};
const key1 = "__proto__";
const key2 = "a";
obj[key1][key2] = 1; // fails silently in non-strict mode
obj.a; // undefined
```

ただし、通常は{{glossary("Polyfill", "ポリフィル")}}の実装を提供するために、正当なプロトタイプの変更が行われる場合があることに注意してください。[厳格モード以外](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、凍結されたオブジェクトを変更しようとしてもエラーは発生しませんが、厳格モードでは `TypeError` が発生します。ポリフィルを有効にするには、ポリフィルコードが凍結処理の前に実行される必要があります。

{{jsxref("Object.freeze()")}} に関するもう 1 つの注意点として、デフォルトではディープフリーズが行われない点が挙げられます。真の不変性を確保したい場合は、すべてのプロパティを再帰的にフリーズする必要があります（[例](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#深い凍結)）。SES のようなライブラリが推奨されるのは、すべての組み込みオブジェクトを「走査」し、どのオブジェクトのフリーズも忘れずに処理してくれるからです。

### プロトタイプでの検索を避ける

オブジェクトのプロパティにアクセスするコードでは、そのプロパティがオブジェクト自体に存在することを必ず確認してください。オブジェクトのキーにアクセスしたり、キーを走査したりする際は、{{jsxref("Object.hasOwn()")}} によるチェックを行うことができます。

次のようにする代わりに、

```js example-bad
if (!user.isAdmin) {
  return new Response("Access denied", { status: 403 });
}
```

こうするように検討してください。

```js
if (!Object.hasOwn(user, "isAdmin") || !user.isAdmin) {
  return new Response("Access denied", { status: 403 });
}
```

反復処理を行う際、[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループはプロトタイプを走査します。可能であれば、このようなループを [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) および {{jsxref("Object.keys()")}} に置き換え、自身のキーのみを処理するようにしてください。

```js
// プロトタイプを検索
for (const key in payload) {
  doSomething(payload[key]);
}

// 自分自身のキーのみを処理
for (const key of Object.keys(payload)) {
  doSomething(payload[key]);
}
```

関数では、デフォルト引数を未定義のままにせず、明示的に設定してください。そうすることで、プロトタイプチェーンでの検索を行う代わりに、デフォルトの引数値を使用できるようになります。次のような記述は避けてください。

```js example-bad
function doDangerousAction(options = {}) {
  if (!options.enableDangerousAction) {
    return;
  }
}
```

このようにしてください。

```js
function doDangerousAction(options = { enableDangerousAction: false }) {
  if (!options.enableDangerousAction) {
    return;
  }
}
```

### プロトタイプが null の JavaScript オブジェクトを作成する

[null プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)は、プロトタイプの汚染を回避すると同時に（オブジェクトに `__proto__` および `constructor` プロパティが存在しないため）、プロトタイプへの検索も回避します。これらは、{{jsxref("Object.create()", "Object.create(null)")}} 関数、またはオブジェクト初期化子での `{ __proto__: null }` という構文を使用して作成されます。

> [!NOTE]
> オブジェクト初期化子における `{ __proto__: null }` [プロトタイプセッター](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#プロトタイプセッター) の構文は、`obj.__proto__` アクセサープロパティとは異なり、完全に安全です。

オブジェクトをオプションとして渡す必要がある場合（たとえば、`fetch()` のような API でオブジェクトの使用が必須とされる場合など）、null プロトタイプオブジェクトを作成してください。プロトタイプを持たないオブジェクトの作成はデフォルトではないため、オブジェクトをインスタンス化する際は、通常のオブジェクト初期化子（`const myObj = {}`）ではなく、明示的に null プロトタイプオブジェクトを作成することを忘れないでください。

```js
Object.prototype.method = "POST";

// オブジェクトにプロトタイプがないため、GET リクエストが送信されます
fetch("https://example.com", {
  __proto__: null,
  mode: "cors",
});
```

後で変更される予定のオブジェクト（例：`obj[key] = value` など）を作成する場合は、null プロトタイプオブジェクトとして作成してください。

```js
const result = { __proto__: null };
const key1 = "__proto__";
const key2 = "a";
result[key1] ??= {};
result[key1][key2] = 1; // modifies result, not Object.prototype
```

### `Map` や `Set` での代用

JavaScript オブジェクトを手軽なキーと値のペアとして使用する場合は、代わりに {{jsxref("Map")}} または {{jsxref("Set")}} オブジェクトの使用を検討してください。これらを使用することで、オブジェクトのプロパティの変更や検索を回避し、オブジェクトのプロトタイプの汚染を防ぐこともできます。`Map` のドキュメントで、[Map とオブジェクトの比較](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map#object_と_map_の比較)を確認してください。{{jsxref("Map.prototype.get()")}} メソッドは、常に `Map` 内のエントリーのみを返します。

```js
// Object が何らかの理由で汚染されたと仮定する
Object.prototype.admin = true;

const config = new Map();
config.set("admin", false);

config.admin; // true
config.get("admin"); // false
```

## 防衛概要チェックリスト

オブジェクトを作成する際に、次のようにしてください。

- オブジェクトが必要かどうか、あるいは {{jsxref("Map")}} や {{jsxref("Set")}} の方が適しているかどうかを検討してください。
- `FetchInit` や `SanitizerConfig` などの他の関数にオブジェクトを渡す際は、すべてのキーが定義されていることを確認するか、[null プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を使用してください。
- 後で動的に変更されるオブジェクト（例：`obj[key] = value` など）を作成する場合は、それらも null プロトタイプオブジェクトとして作成してください。

URL のクエリー文字列、JSON ペイロード、関数の引数などを通じてユーザー入力を受け付ける際は、次のようにします。

- ユーザー入力は常にスキーマのバリデーターで検証してください。認識できないプロパティは拒否し、欠落しているプロパティにはデフォルト値を設定してください。
- オブジェクトを引数として受け取る関数では、オブジェクト自体に期待されるすべてのキーが定義されていることを（デフォルト値を設定することで）確認するか、またはそのキーにアクセスする前に、まずオブジェクト自体にそのキーが存在するかどうかを（例：{{jsxref("Object.hasOwn()")}} などを使用して）確認する必要があります。
- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループよりも、[`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) および {{jsxref("Object.keys()")}} を使用することを推奨します。

組み込みオブジェクトおよびサードパーティ製オブジェクトについては、

- 組み込みオブジェクトやサードパーティ製オブジェクトを凍結することを検討してください。例えば、[SES](https://github.com/endojs/endo/tree/master/packages/ses#ses) シムを使用する方法などがあります。

実行環境の保護については、

- Node.js で `--disable-proto` を使用すると、`Object.prototype.__proto__` を無効にできます。
- Node.js 以外の環境では、`delete Object.prototype.__proto__` を使用してください。

## 関連情報

- [OWASP: Prototype pollution prevention cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html#other-resources)
- [Client-side prototype pollution](https://github.com/BlackFan/client-side-prototype-pollution)
- [Server-side prototype pollution](https://github.com/KTH-LangSec/server-side-prototype-pollution)
