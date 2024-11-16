---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{JSRef}}

**`Proxy.revocable()`** メソッドは、取り消し可能な {{jsxref("Proxy")}} オブジェクトを作成するために使用します。

## 構文

```js-nolint
Proxy.revocable(target, handler)
```

### 引数

- `target`
  - : `Proxy` でラップする対象のオブジェクトです。これは一連のオブジェクト、例えばネイティブの配列、関数、他のプロキシーなどを取ることもできます。
- `handler`
  - : プロキシー `p` に対して操作が行われたときの動作を定義する関数をプロパティとするオブジェクトです。

### 返値

以下の 2 つのプロパティを持つプレーンなオブジェクトです。

- `proxy`
  - : [`new Proxy(target, handler)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) 呼び出しで生成したプロキシーオブジェクトです。
- `revoke`
  - : `proxy` を無効にするための引数を持たない関数です。

## 解説

`Proxy.revocable()` はファクトリー関数で、[`Proxy()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) コンストラクターと同じですが、プロキシーオブジェクトを作成するだけでなく、プロキシーを無効にするために求められる `revoke` 関数を作成します。プロキシーオブジェクトと `revoke` 関数はプレーンオブジェクトにラップされています。

`revoke` 関数は引数を取らず、`this` 値にも頼りません。作成された `proxy` オブジェクトは `revoke` 関数に[プライベートプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)として結び付けられ、`revoke` 関数が呼び出されたときに自分自身でアクセスします（プライベートプロパティの存在は外からは観測できませんが、ガーベジコレクションが発生する方法については影響があります）。`proxy` オブジェクトは `revoke` 関数の[クロージャ](/ja/docs/Web/JavaScript/Closures)内には収容されません（`revoke` がまだ生きている場合、`proxy` のガベージコレクションは不可能になります）。

`revoke()` 関数が呼び出された後、プロキシーは使用できなくなります。ハンドラーのトラップが発生すると {{jsxref("TypeError")}} が発生します。一度プロキシーが取り消されると、取り消されたままになり、再び `revoke()` を呼び出しても何の効果もありません。実際、`revoke()` を呼び出すと `proxy` オブジェクトを `revoke` 関数から切り離すので、`revoke` 関数が再びプロキシーにアクセスできることは全くありません。プロキシーが他の場所で参照されていない場合、ガベージコレクションの対象となります。`revoke` 関数は `target` と `handler` も `proxy` から切り離すので、`target` が他の場所で参照されていない場合、プロキシーがまだ生きていても、対象のオブジェクトと意味のあるやりとりをする方法がなくなったので、それもガベージコレクションの対象となります。

ユーザーが取り消し可能なプロキシーを通してオブジェクトと対話することで、ユーザーに公開されるオブジェクトの[ライフタイムを制御](/ja/docs/Web/JavaScript/Memory_management)できます。ユーザーがまだそのプロキシーを参照しているときでも、オブジェクトをガベージコレクション可能にすることができます。

## 例

### Proxy.revocable() の使用

```js
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError が発生
proxy.foo = 1; // TypeError が発生
delete proxy.foo; // これも TypeError
typeof proxy; // "object" と表示。 typeof でトラップは発生しない
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
