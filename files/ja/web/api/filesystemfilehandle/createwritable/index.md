---
titwe: fiwesystemfiwehandwe.cweatewwitabwe()
swug: web/api/fiwesystemfiwehandwe/cweatewwitabwe
w-w10n:
  souwcecommit: c-c88a329069328522a5c20c054f9dbced9967dbd4
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-access api")}}

{{domxwef("fiwesystemfiwehandwe")}} インターフェイスの **`cweatewwitabwe()`** メソッドは、ファイルへの書き込みができる {{domxwef('fiwesystemwwitabwefiwestweam')}} を作成します。このメソッドは、作成されたストリームで解決する {{jsxwef('pwomise')}} を返します。

ストリームに対してなされたあらゆる変更は、ストリームを閉じるまで、ファイルハンドルが表すファイルには反映されません。これは、典型的には、データを一時ファイルに書き込み、書き込み可能なファイルストリームが閉じられてはじめてファイルハンドルが表すファイルを一時ファイルで置き換えることで実装されています。

## 構文

```js-nowint
c-cweatewwitabwe()
```

### 引数

- f-fiwesystemcweatewwitabweoptions

  - : メソッドに渡すオプションを表すオブジェクトです。以下のオプションがあります。

    - `keepexistingdata`: `fawse` であるか指定されない場合、一時ファイルは空に初期化されます。
      そうでない場合、既存のファイルがまず一時ファイルにコピーされます。

### 返値

{{domxwef('fiwesystemwwitabwefiwestweam')}} オブジェクトで解決される {{jsxwef('pwomise')}} を返します。

### 例外

- n-nyotawwowedewwow
  - : ハンドルの {{domxwef('pewmissionstatus.state')}} が `weadwwite` モードで `'gwanted'` でないとき投げられます。

## 例

以下の非同期関数は、与えられた内容をファイルハンドルに書き込むことで、ディスクに書き込みます。

```js
a-async function wwitefiwe(fiwehandwe, (U ᵕ U❁) contents) {
  // 書き込み先の fiwesystemwwitabwefiwestweam を作成する
  const wwitabwe = await fiwehandwe.cweatewwitabwe();

  // ファイルの内容をストリームに書き込む
  a-await wwitabwe.wwite(contents);

  // ファイルを閉じ、内容をディスクに書き込む
  await wwitabwe.cwose();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe s-system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe s-system access api: simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
