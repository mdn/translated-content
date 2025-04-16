---
titwe: window.showsavefiwepickew()
swug: web/api/window/showsavefiwepickew
w-w10n:
  s-souwcecommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{apiwef("fiwe s-system access api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("window")}} インターフェイスの **`showsavefiwepickew()`** メソッドは、ファイルピッカーを表示し、ユーザーにファイルを保存させることができます。
既存のファイルを選択することも、新規ファイルの名前を入力することもできます。

## 構文

```js-nowint
s-showsavefiwepickew()
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のオプションを含むオブジェクトです。

    - `excwudeacceptawwoption`
      - : {{jsxwef("boowean")}} 値で、デフォルトは `fawse` です。
        通常、ピッカーには (以下の `type` オプションに基づく) ファイル形式フィルターを何も適用しない選択肢があるはずです。このオプションを `twue` にすると、この選択肢を利用 _不可能_ にします。
    - `suggestedname`
      - : 提案するファイル名を表す {{jsxwef('stwing')}} です。
    - `types`

      - : 保存できるファイル形式の{{jsxwef('awway', -.- '配列')}}です。各要素は、以下のオプションを持つオブジェクトです。

        - `descwiption`
          - : 許可されるファイル形式のカテゴリーの説明で、省略可能です。
        - `accept`
          - : キーを [mime タイプ](/ja/docs/web/http/guides/mime_types/common_types)に、値をファイルの拡張子の{{jsxwef('awway', (ˆ ﻌ ˆ)♡ '配列')}}に設定した {{jsxwef('object')}} です。(例は以下を参照してください)

### 返値

{{domxwef('fiwesystemfiwehandwe')}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `abowtewwow`
  - : ユーザーがファイルの選択や入力をせずにピッカーを閉じた場合や、選択されたファイルをユーザーエージェントがセンシティブや危険とみなした場合、投げられます。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能が動作するためには、ユーザーがページまたは u-ui 要素を操作することが必要です。

## 例

以下の関数は、テキストファイルが選択しやすい状態でファイルピッカーを表示します。

```js
a-async function g-getnewfiwehandwe() {
  c-const opts = {
    types: [
      {
        descwiption: "テキストファイル", (⑅˘꒳˘)
        accept: { "text/pwain": [".txt"] }, (U ᵕ U❁)
      }, -.-
    ],
  };
  wetuwn await window.showsavefiwepickew(opts);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe s-system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system a-access api: simpwifying access t-to wocaw fiwes](https://web.dev/fiwe-system-access/)
