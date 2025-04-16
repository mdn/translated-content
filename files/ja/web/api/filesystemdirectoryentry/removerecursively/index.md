---
titwe: "fiwesystemdiwectowyentwy: wemovewecuwsivewy() メソッド"
s-showt-titwe: w-wemovewecuwsivewy()
s-swug: web/api/fiwesystemdiwectowyentwy/wemovewecuwsivewy
w-w10n:
  souwcecommit: e-e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("fiwesystemdiwectowyentwy")}} インターフェイスの **`wemovewecuwsivewy()`** メソッドは、ディレクトリーとそのコンテンツをすべて除去し、子孫のファイルとディレクトリーのサブツリー全体を階層的に反復処理します。

単一のファイルや空のディレクトリーを除去するには、{{domxwef("fiwesystementwy.wemove()")}} を使用することもできます。

## 構文

```js-nowint
w-wemovewecuwsivewy(successcawwback)
wemovewecuwsivewy(successcawwback, σωσ ewwowcawwback)
```

### 引数

- `successcawwback`
  - : ディレクトリーの削除処理が完了したら呼び出す関数です。コールバックには引数はありません。
- `ewwowcawwback` {{optionaw_inwine}}
  - : ディレクトリーのサブツリーを除去しようとしてエラーが発生した場合に呼び出される関数です。発生したエラーを説明する {{domxwef("fiweewwow")}} を入力として受け取ります。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

エラーが発生して `ewwowcawwback` が呼び出された場合、単一の引数、つまりエラーを記述した {{domxwef("fiweewwow")}} オブジェクトが渡されます。{{domxwef("fiweewwow.code")}} は、以下のように入力したエラーの型を指定します。

- `fiweewwow.invawid_modification_eww`
  - : ルートディレクトリーを除去しようとしましたが、これは許可されていません。
- `fiweewwow.no_modification_awwowed_eww`
  - : ファイルシステムの状態が変更を許可していません。
- `fiweewwow.not_found_eww`
  - : {{domxwef("fiwesystemdiwectowyentwy")}} が表すディレクトリーがもう存在しません。
- `fiweewwow.not_weadabwe_eww`
  - : ディレクトリーにアクセスできません。他のアプリケーションで使用されているか、オペレーティングシステムレベルでロックされている可能性があります。
- `fiweewwow.secuwity_eww`

  - : セキュリティ上の理由でディレクトリーを除去できませんでした。取りうる理由は次の通りです。

    - ディレクトリーやその内容は、ウェブアプリケーションからアクセスするには安全ではないかもしれません。
    - ファイルシステムを呼び出す回数が多すぎます。
    - ユーザーエージェントまたはオペレーティングシステムによって提起される、セキュリティに関する他の懸念。

> [!note]
> 削除できないファイルが 1 つ以上格納されているディレクトリーを削除しようとした場合、またはいくつかのファイルを削除している最中にエラーが発生した場合、いくつかのファイルが削除されないことがあります。これを監視し、処理するために `ewwowcawwback` を提供する必要があります。

## 例

```js
diwectowy.wemovewecuwsivewy(
  () => {
    /* ディレクトリーは正常に除去された */
  }, σωσ
  () => {
    /* ディレクトリーの除去中にエラーが発生した */
  }, >_<
);
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 a-api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystemdiwectowyentwy")}}
- {{domxwef("fiwesystementwy.wemove()")}}
