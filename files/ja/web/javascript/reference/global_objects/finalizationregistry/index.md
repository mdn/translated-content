---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`FinalizationRegistry`** オブジェクトにより、オブジェクトがガベージコレクションで回収されるときにコールバックを要求することができます。

## 解説

`FinalizationRegistry` は、レジストリーに登録されているオブジェクトが回収（ガベージコレクション）される時に、クリーンアップコールバックを要求する方法を提供します。（クリーンアップコールバックは「ファイナライザー」と呼ばれることもあります。）

> [!NOTE]
> クリーンアップコールバックは、重要なプログラムロジックには使用しないでください。詳細は、[クリーンアップコールバックに関する注意点](#クリーンアップコールバックに関する注意点)を参照してください。

コールバックで渡すレジストリーを作成します。

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

次に、 `register` メソッドを呼び出して、クリーンアップコールバックを行いたいオブジェクトを登録し、そのオブジェクトと*保持値*を渡します。

```js
registry.register(target, "some value");
```

レジストリーは、その値への強い参照を保持しません。そうすると本来の目的が果たせなくなるからです（レジストリーが強い参照を保持してしまうと、その値は解放されなくなるため）。JavaScript で、オブジェクトや[未登録のシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)はガベージコレクションの対象となるため、`FinalizationRegistry` オブジェクトにターゲットまたはトークンとして登録することができます。

`target` が回収された場合、クリーンアップコールバックは、指定した*保持値*（上記の `"some value"`）で呼び出される可能性があります。保持値は、プリミティブでもオブジェクトでも、 `undefined` であっても構いません。保持値がオブジェクトの場合、レジストリーはその値への強い参照を保持します（これにより、後でクリーンアップコールバックに渡すことができます）。

ターゲット値の登録を解除したい場合は、3 番目の値を渡します。 これは、後でレジストリーの `unregister` 関数を呼び出して、オブジェクトの登録を解除する際に使用する登録解除トークンです。レジストリーは、登録解除トークンへの弱い参照のみを保持します。

よくターゲット値自身が登録解除トークンとして使われ、これは良い結果になります。

```js
registry.register(target, "some value", target);
// …

// しばらく経って、`target` をもう必要としなくなったら、その登録を解除する
registry.unregister(target);
```

ただし、同じオブジェクトである必要はありません。異なるものでも構いません。

```js
registry.register(target, "some value", token);
// …

// some time later
registry.unregister(token);
```

### 可能な限り避ける

`FinalizationRegistry` の正しい使用には慎重な検討が必要であり、可能であれば使用を避けるのが最善です。同時に、仕様上保証されていない特定の挙動に依存しないことも重要です。ガベージコレクションがいつ、どのように、そして実行されるかどうかは、各 JavaScript エンジンの実装に依存します。あるエンジンで観察された挙動は、別のエンジンや、同じエンジンの別のバージョン、あるいは同じバージョンの同じエンジンであってもわずかに異なる状況下では、異なる可能性があります。ガベージコレクションは困難な問題であり、JavaScript エンジンの実装者はその解決策を絶えず洗練し、改善し続けています。

`FinalizationRegistry` を導入した [提案](https://github.com/tc39/proposal-weakrefs) において、作成者らが記載した具体的な点は次の通りです。

> [ガベージコレクション](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>)は複雑です。アプリケーションやライブラリーが、GC が WeakRef をクリーンアップしたり、ファイナライザー \[クリーンアップコールバック] を適時かつ予測可能な方法で呼び出したりすることに依存している場合、期待外れの結果になる可能性が高いです。クリーンアップが予想よりもはるかに遅れて現れたり、まったく現れなかったりする可能性があるからです。変動の原因としては、次のようなものが挙げられます。
>
> - たとえば、世代別ガベージコレクションの影響などにより、あるオブジェクトと別のオブジェクトが同時に到達できない状態になったとしても、一方のオブジェクトの方が他方よりもはるかに早くガベージコレクションの対象となる場合があります。
> - ガベージコレクションの処理は、増分方式や並行処理といった手法を用いて、時間経過に伴う分割が行われる可能性があります。
> - メモリー使用量とレスポンスのバランスをとるために、さまざまな実行時の探査的手法が使用される可能性があります。
> - JavaScript エンジンは、一見すると到達できないもの（たとえば、クロージャやインラインキャッシュ内など）を参照している場合があります。
> - JavaScript エンジンによって、これらのことをするのが最適な方法は異なる場合があります。また、同じエンジンであっても、バージョンによってアルゴリズムが変更されることがあります。
> - 特定の API を使用するなど、複雑な要因により、オブジェクトが予期せぬほど長い時間存続し続けることがあります。

### クリーンアップコールバックの注意

- 開発者は、プログラムの重要なロジックをクリーンアップコールバックに依存すべきではありません。クリーンアップコールバックは、プログラムの実行中にメモリー使用量を縮小する上では有益かもしれませんが、それ以外の目的ではほとんど役に立たないでしょう。
- コードでレジストリーに値を登録したばかりの場合、そのターゲットは、現在の JavaScript [ジョブ](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) が終了するまで解放されません。詳細については、[WeakRef に関する注意事項](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs)を参照してください。
- 仕様に準拠した JavaScript の実装であっても、ガベージコレクションを行うものであっても、クリーンアップコールバックを呼び出す必要はありません。それをいつ、あるいは呼び出すかどうかは、完全に JavaScript エンジンの実装次第です。登録されたオブジェクトが回収された際、そのオブジェクトに対するクリーンアップコールバックは、その時点で呼び出されることもあれば、しばらくしてから呼び出されることもあれば、まったく呼び出されないこともあります。
- 主要な実装では、実行中のどこかの時点でクリーンアップコールバックが呼び出される可能性が高いですが、それらの呼び出しは、関連するオブジェクトが解放された後、かなり時間が経ってから行われる可能性があります。さらに、あるオブジェクトが 2 つのレジストリーに登録されている場合、2 つのコールバックが連続して呼び出される保証はありません。一方のコールバックは呼び出されても、もう一方は呼び出されない場合や、もう一方がかなり後になってから呼び出される場合もあります。
- 同時に、通常はクリーンアップコールバックを呼び出す実装であっても、それを呼び出さない可能性が高い状況もあります。
  - JavaScript プログラムが完全に終了したとき（たとえば、ブラウザーのタブが閉じられたときなど）。
  - `FinalizationRegistry` インスタンス自体が、JavaScript コードから参照できなくなくなったとき。
- `WeakRef` のターゲットが `FinalizationRegistry` にも含まれている場合、その `WeakRef` のターゲットは、レジストリーに関連付けられたクリーンアップコールバックが呼び出されるのと同時に、あるいはそれ以前にクリアされます。クリーンアップコールバック内で、そのオブジェクトに対する `WeakRef` の `deref` を呼び出した場合、`undefined` が返されます。

## コンストラクター

- {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}
  - : 新しい `FinalizationRegistry` オブジェクトを生成します。

## インスタンスプロパティ

これらのプロパティは `FinalizationRegistry.prototype` で定義されており、すべての `FinalizationRegistry` インスタンスで共有されます。

- {{jsxref("Object/constructor", "FinalizationRegistry.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数です。`FinalizationRegistry` インスタンスの場合、初期値は {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry")}} コンストラクターです。
- `FinalizationRegistry.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"FinalizationRegistry"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("FinalizationRegistry.prototype.register()")}}
  - : オブジェクトをレジストリーに登録して、オブジェクトがガベージコレクションされたときにクリーンアップコールバックが実行できるようにします。
- {{jsxref("FinalizationRegistry.prototype.unregister()")}}
  - : オブジェクトをレジストリーから登録解除します。

## 例

### 新しいレジストリーの生成

コールバックを渡すことでレジストリーを作成することができます。

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

### クリーンアップのためにオブジェクトを登録

それから、クリーンアップコールバックを呼び出す任意のオブジェクトを登録するには、 `register` メソッドを呼び出して、そのオブジェクトと*保持値*を渡します。

```js
registry.register(theObject, "some value");
```

### コールバックは同期的に呼び出されない

ガベージコレクターにどれほど負荷をかけたとしても、クリーンアップのコールバックが同期的に呼び出されることは決してありません。オブジェクトは同期的に解放される場合がありますが、コールバックは常に現在のジョブが完了した後に呼び出されます。

```js
let counter = 0;
const registry = new FinalizationRegistry(() => {
  console.log(`Array は ${counter} でガベージコレクションされました`);
});

registry.register(["foo"]);

(function allocateMemory() {
  // 50000 件の関数を割り当てます。 — メモリーをたくさん消費します。
  Array.from({ length: 50000 }, () => () => {});
  if (counter > 5000) return;
  counter++;
  allocateMemory();
})();

console.log("メインジョブ終了");
// Logs:
// メインジョブ終了
// Array は 5001 でガベージコレクションされました
```

ただし、それぞれの割り当ての間に少し間隔を空けることができると、コールバックがより早く呼び出されることがあります。

```js
let arrayCollected = false;
let counter = 0;
const registry = new FinalizationRegistry(() => {
  console.log(`Array は ${counter} でガベージコレクションされました`);
  arrayCollected = true;
});

registry.register(["foo"]);

(function allocateMemory() {
  // 50000 件の関数を割り当てます。 — メモリーをたくさん消費します。
  Array.from({ length: 50000 }, () => () => {});
  if (counter > 5000 || arrayCollected) return;
  counter++;
  // setTimeout を使用することで、それぞれの allocateMemory を別々のジョブとして実行
  setTimeout(allocateMemory);
})();

console.log("メインジョブ終了");
```

コールバックがそれより早く呼び出されることや、そもそも呼び出されること自体を保証するものではありませんが、ログ出力されるメッセージのカウンター値が 5000 未満である可能性はあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakRef")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
