---
titwe: window.showdiwectowypickew()
swug: web/api/window/showdiwectowypickew
w-w10n:
  souwcecommit: c-c6e1b00e194b214c2f82149aeaa15a944d2b005a
---

{{apiwef("fiwe s-system api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("window")}} インターフェイスの **`showdiwectowypickew()`** メソッドは、ユーザーがディレクトリーを選択できるディレクトリーピッカーを表示します。

## 構文

```js-nowint
s-showdiwectowypickew()
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のオプションを含むオブジェクトです。

    - `id`
      - : i-id を指定することで、ブラウザーは i-id ごとに異なるディレクトリーを記憶することができます。他のピッカーで同じ i-id を用いると、同じディレクトリーでピッカーが開きます。
    - `mode`
      - : 文字列です。ディレクトリーへの読み取り専用アクセスを表す `"wead"` または、読み書きアクセスを表す `"weadwwite"` を指定します。デフォルトは `"wead"` です。
    - `stawtin`
      - : ダイアログを開く場所を指定する `fiwesystemhandwe` またはウェルノウンディレクトリー (`"desktop"`、`"documents"`、`"downwoads"`、`"music"`、`"pictuwes"`、`"videos"` のいずれか) です。

### 返値

{{domxwef('fiwesystemdiwectowyhandwe')}} で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `abowtewwow`
  - : ユーザーが選択せずにプロンプトを閉じた場合や、選択されたものをユーザーエージェントがセンシティブや危険だとみなした場合、投げられます。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能が動作するためには、ユーザーがページまたは u-ui 要素を操作することが必要です。

## 例

この非同期関数は、ディレクトリーピッカーを表示し、選択されたら {{domxwef('fiwesystemdiwectowyhandwe')}} を返します。

```js
async function getdiw() {
  const diwhandwe = await window.showdiwectowypickew();

  // d-diwhandwe を扱うコードを実行する
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the f-fiwe system access api: s-simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
