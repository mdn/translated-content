---
title: FinalizationRegistry.prototype.register()
short-title: register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`register()`** は {{jsxref("FinalizationRegistry")}} インスタンスのメソッドで、値をこの `FinalizationRegistry` へ登録し、オブジェクトがガベージコレクションで回収された場合、このレジストリーのコールバックが呼び出されるようになります。

## 構文

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### 引数

- `target`
  - : 登録する対象オブジェクトです。
- `heldValue`
  - : このオブジェクトのためにファイナライザーへ渡す値です。これは `target` オブジェクトにすることはできません。
- `unregisterToken` {{optional_inline}}
  - : のちに対象オブジェクトを登録解除するために `unregister` メソッドと共に使用するトークンです。提供される場合（かつ `undefined` ではない場合）、これはオブジェクトまたは[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)である必要があります。提供されなかった場合は、対象を登録解除することはできません。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : 以下のいずれかの場合に発生します。
    - `target` はオブジェクトでも、[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない（オブジェクトはプリミティブとは対照的です。関数もオブジェクトです）。
    - `target` が `heldValue` と同じ値である (`target === heldValue`)
    - `unregisterToken` がオブジェクトでも[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない

## 解説

重要な注意点については、 {{jsxref("FinalizationRegistry")}} ページの[可能な限り避ける](/ja/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#可能な限り避ける)と[クリーンアップコールバックの注意](/ja/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#クリーンアップコールバックの注意)の部分を参照してください。

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

{{Compat}}

## 関連情報

- {{jsxref("FinalizationRegistry")}}
