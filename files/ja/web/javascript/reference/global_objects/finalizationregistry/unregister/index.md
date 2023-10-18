---
title: FinalizationRegistry.prototype.unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
---

{{JSRef}}

`unregister` は対象のオブジェクトを {{jsxref("FinalizationRegistry")}} インスタンスから登録解除します。

## 構文

```
registry.unregister(unregisterToken);
```

### 引数

- `unregisterToken`
  - : 対象オブジェクトを登録したときに {{jsxref("FinalizationRegistry.prototype.register", "register")}} メソッドで使用したトークンです。

### 返値

`undefined` です。

## 注

対象オブジェクトの回収が完了すると、レジストリに登録された状態ではなくなります。クリーンアップコールバックですべてに `unregister` を行う必要はありません。クリーンアップコールバックを受信しておらず、クリーンアップコールバックを受信する必要がなくなった場合にのみ `unregister` を呼び出してください。

## 例

### unregister の使用

この例では、登録解除トークンとして同じオブジェクトを使用して対象のオブジェクトを登録し、その後、 `unregister` を介して対象のオブジェクトの登録を解除します。

```js
class Thingy {
  #cleanup = (label) => {
    //        ^^^^^−−−−− held value
    console.error(
      `The \`release\` method was never called for the object with the label "${label}"`,
    );
  };
  #registry = new FinalizationRegistry(this.#cleanup);

  /**
   * Constructs a `Thingy` instance. Be sure to call `release` when you're done with it.
   *
   * @param   label       A label for the `Thingy`.
   */
  constructor(label) {
    //                            vvvvv−−−−− held value
    this.#registry.register(this, label, this);
    //          target −−−−−^^^^         ^^^^−−−−− unregister token
  }

  /**
   * Releases resources held by this `Thingy` instance.
   */
  release() {
    this.#registry.unregister(this);
    //                        ^^^^−−−−− unregister token
  }
}
```

この例では、登録解除トークンとして別のオブジェクトを使用して対象のオブジェクトを登録しています。

```js
 {
    //         ^^^^−−−−− held value
        console.error(
            `The \`release\` method was never called for the \`Thingy\` for the file "${file.name}"`
        );
    };
    #registry = new FinalizationRegistry(this.#cleanup);

    /**
     * Constructs a `Thingy` instance for the given file. Be sure to call `release` when you're done with it.
     *
     * @param   filename    The name of the file.
     */
    constructor(filename) {
        this.#file = File.open(filename);
        //                            vvvvv−−−−− held value
        this.#registry.register(this, label, this.#file);
        //          target −−−−−^^^^         ^^^^^^^^^^−−−−− unregister token
    }

    /**
     * Releases resources held by this `Thingy` instance.
     */
    release() {
        if (this.#file) {
            this.#registry.unregister(this.#file);
            //                        ^^^^^^^^^^−−−−− unregister token
            File.close(this.#file);
            this.#file = null;
        }
    }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.FinalizationRegistry.unregister")}}

## 関連情報

- {{jsxref("FinalizationRegistry")}}
