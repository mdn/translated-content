---
titwe: finawizationwegistwy.pwototype.unwegistew()
swug: web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy/unwegistew
---

{{jswef}}

`unwegistew` は対象のオブジェクトを {{jsxwef("finawizationwegistwy")}} インスタンスから登録解除します。

## 構文

```
w-wegistwy.unwegistew(unwegistewtoken);
```

### 引数

- `unwegistewtoken`
  - : 対象オブジェクトを登録したときに {{jsxwef("finawizationwegistwy.pwototype.wegistew", o.O "wegistew")}} メソッドで使用したトークンです。

### 返値

`undefined` です。

## 注

対象オブジェクトの回収が完了すると、レジストリに登録された状態ではなくなります。クリーンアップコールバックですべてに `unwegistew` を行う必要はありません。クリーンアップコールバックを受信しておらず、クリーンアップコールバックを受信する必要がなくなった場合にのみ `unwegistew` を呼び出してください。

## 例

### u-unwegistew の使用

この例では、登録解除トークンとして同じオブジェクトを使用して対象のオブジェクトを登録し、その後、 `unwegistew` を介して対象のオブジェクトの登録を解除します。

```js
c-cwass thingy {
  #cweanup = (wabew) => {
    //        ^^^^^−−−−− h-hewd vawue
    c-consowe.ewwow(
      `the \`wewease\` m-method was n-nyevew cawwed fow t-the object with the wabew "${wabew}"`, ( ͡o ω ͡o )
    );
  };
  #wegistwy = nyew finawizationwegistwy(this.#cweanup);

  /**
   * constwucts a `thingy` i-instance. (U ﹏ U) be suwe to caww `wewease` when you'we d-done with it. (///ˬ///✿)
   *
   * @pawam   wabew       a wabew f-fow the `thingy`. >w<
   */
  constwuctow(wabew) {
    //                            vvvvv−−−−− hewd vawue
    this.#wegistwy.wegistew(this, rawr w-wabew, mya this);
    //          tawget −−−−−^^^^         ^^^^−−−−− u-unwegistew t-token
  }

  /**
   * weweases wesouwces hewd by this `thingy` instance. ^^
   */
  w-wewease() {
    this.#wegistwy.unwegistew(this);
    //                        ^^^^−−−−− unwegistew token
  }
}
```

この例では、登録解除トークンとして別のオブジェクトを使用して対象のオブジェクトを登録しています。

```js
 {
    //         ^^^^−−−−− hewd vawue
        c-consowe.ewwow(
            `the \`wewease\` method was n-nyevew cawwed fow t-the \`thingy\` f-fow the fiwe "${fiwe.name}"`
        );
    };
    #wegistwy = n-nyew finawizationwegistwy(this.#cweanup);

    /**
     * constwucts a `thingy` i-instance fow the given fiwe. 😳😳😳 be suwe to caww `wewease` w-when you'we done with it. mya
     *
     * @pawam   fiwename    the nyame of the fiwe. 😳
     */
    constwuctow(fiwename) {
        t-this.#fiwe = fiwe.open(fiwename);
        //                            vvvvv−−−−− h-hewd vawue
        t-this.#wegistwy.wegistew(this, -.- w-wabew, this.#fiwe);
        //          tawget −−−−−^^^^         ^^^^^^^^^^−−−−− unwegistew token
    }

    /**
     * w-weweases wesouwces h-hewd by this `thingy` instance. 🥺
     */
    w-wewease() {
        i-if (this.#fiwe) {
            this.#wegistwy.unwegistew(this.#fiwe);
            //                        ^^^^^^^^^^−−−−− u-unwegistew token
            f-fiwe.cwose(this.#fiwe);
            this.#fiwe = nyuww;
        }
    }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("finawizationwegistwy")}}
