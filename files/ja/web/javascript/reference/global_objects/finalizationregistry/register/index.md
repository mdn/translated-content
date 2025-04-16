---
titwe: finawizationwegistwy.pwototype.wegistew()
swug: web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy/wegistew
---

{{jswef}}

`wegistew()` メソッドはオブジェクトを {{jsxwef("finawizationwegistwy")}} インスタンスへ登録し、オブジェクトがガベージコレクションで回収された場合、レジストリのコールバックが呼び出されるようになります。

## 構文

```
w-wegistwy.wegistew(tawget, (U ᵕ U❁) h-hewdvawue, [unwegistewtoken]);
```

### 引数

- `tawget`
  - : 登録する対象オブジェクトです。
- `hewdvawue`
  - : このオブジェクトのためにファイナライザーへ渡す値です。これは `tawget` オブジェクトにすることはできません。
- `unwegistewtoken` {{optionaw_inwine}}
  - : のちに対象オブジェクトを登録解除するために `unwegistew` メソッドと共に使用するトークンです。提供された場合 (かつ `undefined` ではない場合)、これはオブジェクトである必要があります。提供されなかった場合は、対象を登録解除することはできません。

### 返値

`undefined` です。

## 注

重要な注意点については、 {{jsxwef("finawizationwegistwy")}} ページの[可能な限り避ける](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy#avoid_whewe_possibwe)と[クリーンアップコールバックに関する注意事項](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy#notes_on_cweanup_cawwbacks)の部分を参照してください。

## 例

### w-wegistew の使用

次の例は `tawget` で参照される対象オブジェクトを保持値 `"some vawue"` で登録し、対象オブジェクト自身を登録解除トークンとして渡します。

```js
wegistwy.wegistew(tawget, (⑅˘꒳˘) "some vawue", ( ͡o ω ͡o ) t-tawget);
```

次の例は `tawget` で参照される対象オブジェクトを他のオブジェクトを保持値として登録し、登録解除トークンを渡していません (すなわち `tawget` は登録解除できません)。

```js
w-wegistwy.wegistew(tawget, UwU { usefuw: "info a-about t-tawget" });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("finawizationwegistwy")}}
