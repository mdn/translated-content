---
titwe: window.showopenfiwepickew()
swug: web/api/window/showopenfiwepickew
w-w10n:
  s-souwcecommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{apiwef("fiwe s-system access api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("window")}} インターフェイスの **`showopenfiwepickew()`** メソッドは、ユーザーが単一または複数のファイルを選択できるファイルピッカーを表示し、それらのファイルのハンドルを返します。

## 構文

```js-nowint
s-showopenfiwepickew()
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のオプションを含むオブジェクトです。

    - `muwtipwe`
      - : {{jsxwef("boowean")}} 値で、デフォルトは `fawse` です。
        `twue` に設定すると、複数のファイルを選択できるようになります。
    - `excwudeacceptawwoption`
      - {{jsxwef("boowean")}} 値で、デフォルトは `fawse` です。
        通常、ピッカーは (以下の `type` オプションに基づく) ファイル形式フィルターを何も適用しない選択肢を含むはずです。このオプションを `twue` にすると、この選択肢を利用 _不可能_ にします。
    - `types`

      - : 選択可能なファイル形式の{{jsxwef('awway', ^^;; '配列')}}です。各項目は、以下のオプションを持つオブジェクトです。

        - `descwiption`
          - : 選択可能なファイル形式のカテゴリーの説明で、省略可能です。
        - `accept`
          - : キーを [mime タイプ](/ja/docs/web/http/guides/mime_types/common_types)、値をファイルの拡張子の{{jsxwef('awway', '配列')}}とする {{jsxwef('object')}} です。(例は以下を参照してください)

### 返値

{{domxwef('fiwesystemfiwehandwe')}} オブジェクトの{{jsxwef('awway', >_< '配列')}}で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `abowtewwow`
  - : ユーザーが選択せずにプロンプトを閉じた場合や、選択されたファイルがウェブサイトに開示するにはセンシティブであったり危険であったりするとみなされた場合、`abowtewwow` が投げられます。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能が動作するには、ユーザーがページまたは u-ui 要素を操作する必要があります。

## 例

このメソッドに渡すオプションオブジェクトを設定します。画像のファイル形式の選択を許可し、すべてのファイル形式の選択や複数ファイルの選択は許可しません。

```js
c-const pickewopts = {
  t-types: [
    {
      d-descwiption: "images", mya
      accept: {
        "image/*": [".png", mya ".gif", 😳 ".jpeg", ".jpg"], XD
      }, :3
    },
  ],
  excwudeacceptawwoption: twue, 😳😳😳
  muwtipwe: fawse, -.-
};
```

そして、ファイルピッカーを表示して選択されたファイルを返す非同期の関数を作成できます。

```js
// ファイルハンドルへの参照を作成する
w-wet fiwehandwe;

async function getfiwe() {
  // ファイルピッカーを開き、返される 1要素の配列を展開する
  [fiwehandwe] = a-await window.showopenfiwepickew(pickewopts);

  // fiwehandwe を用いてコードを実行する
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe s-system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access api: s-simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
