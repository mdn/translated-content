---
title: FinalizationRegistry.prototype.unregister()
short-title: unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`unregister()`** は {{jsxref("FinalizationRegistry")}} インスタンスのメソッドで、対象のオブジェクトをこの `FinalizationRegistry` から登録解除します。

## 構文

```js-nolint
unregister(unregisterToken)
```

### 引数

- `unregisterToken`
  - : 対象値を登録する際に、{{jsxref("FinalizationRegistry/register", "register()")}} メソッドで使用されたトークンです。同じ `unregisterToken` で登録された複数のセルは、まとめて登録解除されます。

### 返値

論理値で、少なくとも 1 つのセルが登録解除された場合は `true`、登録解除されたセルがない場合は `false` となります。

### 例外

- {{jsxref("TypeError")}}
  - : `unregisterToken` がオブジェクトでも[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)でもない場合に発生します。

## 解説

対象オブジェクトの回収が完了すると、レジストリーに登録された状態ではなくなります。
クリーンアップコールバックですべてに `unregister` を行う必要はありません。クリーンアップコールバックを受信しておらず、クリーンアップコールバックを受信する必要がなくなった場合にのみ `unregister` を呼び出してください。

## 例

### unregister の使用

この例では、登録解除トークンとして同じオブジェクトを使用して対象のオブジェクトを登録し、その後、 `unregister` を介して対象のオブジェクトの登録を解除します。

```js
class Thingy {
  static #cleanup = (label) => {
    //               ^^^^^−−−−− 保持値
    console.error(
      `ラベル "${label}" を持つオブジェクトに対して、"release" メソッドは一度も呼び出されませんでした。`,
    );
  };
  #registry = new FinalizationRegistry(Thingy.#cleanup);

  /**
   * `Thingy` インスタンスを構築します。
   * 使用が終わったら、必ず `release` を呼び出してください。
   *
   * @param label `Thingy` のラベルです。
   */
  constructor(label) {
    //                            vvvvv−−−−− 保持値
    this.#registry.register(this, label, this);
    //       対象 −−−−−^^^^         ^^^^−−−−− unregister トークン
  }

  /**
   * Releases resources held by this `Thingy` instance.
   */
  release() {
    this.#registry.unregister(this);
    //                        ^^^^−−−−− unregister トークン
  }
}
```

この例では、登録解除トークンとして別のオブジェクトを使用して対象のオブジェクトを登録しています。

```js
class Thingy {
  static #cleanup = (file) => {
    //               ^^^^−−−−− 保持値
    console.error(
      `ファイル名 "${file.name}" の "Thingy" に対して、"release" メソッドは一度も呼び出されませんでした。`,
    );
  };
  #registry = new FinalizationRegistry(Thingy.#cleanup);
  #file;

  /**
   * 指定されたファイルに対して `Thingy` のインスタンスを作成します。
   * 使用が終わったら、必ず `release` を呼び出してください。
   *
   * @param filename The name of the file.
   */
  constructor(filename) {
    this.#file = File.open(filename);
    //                            vvvvv−−−−− 保持値
    this.#registry.register(this, label, this.#file);
    //          target −−−−−^^^^         ^^^^^^^^^^−−−−− unregister トークン
  }

  /**
   * この `Thingy` インスタンスが保持しているリソースを解放します。
   */
  release() {
    if (this.#file) {
      this.#registry.unregister(this.#file);
      //                        ^^^^^^^^^^−−−−− unregister トークン
      File.close(this.#file);
      this.#file = null;
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("FinalizationRegistry")}}
