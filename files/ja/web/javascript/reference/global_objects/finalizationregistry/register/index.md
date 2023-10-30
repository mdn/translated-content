---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
---

{{JSRef}}

`register()` メソッドはオブジェクトを {{jsxref("FinalizationRegistry")}} インスタンスへ登録し、オブジェクトがガベージコレクションで回収された場合、レジストリのコールバックが呼び出されるようになります。

## 構文

```
registry.register(target, heldValue, [unregisterToken]);
```

### 引数

- `target`
  - : 登録する対象オブジェクトです。
- `heldValue`
  - : このオブジェクトのためにファイナライザーへ渡す値です。これは `target` オブジェクトにすることはできません。
- `unregisterToken` {{optional_inline}}
  - : のちに対象オブジェクトを登録解除するために `unregister` メソッドと共に使用するトークンです。提供された場合 (かつ `undefined` ではない場合)、これはオブジェクトである必要があります。提供されなかった場合は、対象を登録解除することはできません。

### 返値

`undefined` です。

## 注

重要な注意点については、 {{jsxref("FinalizationRegistry")}} ページの[可能な限り避ける](/ja/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#Avoid_where_possible)と[クリーンアップコールバックに関する注意事項](/ja/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#Notes_on_cleanup_callbacks)の部分を参照してください。

## 例

### register の使用

次の例は `target` で参照される対象オブジェクトを保持値 `"some value"` で登録し、対象オブジェクト自身を登録解除トークンとして渡します。

```js
registry.register(target, "some value", target);
```

次の例は `target` で参照される対象オブジェクトを他のオブジェクトを保持値として登録し、登録解除トークンを渡していません (すなわち `target` は登録解除できません)。

```js
registry.register(target, { useful: "info about target" });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.FinalizationRegistry.register")}}

## 関連情報

- {{jsxref("FinalizationRegistry")}}
