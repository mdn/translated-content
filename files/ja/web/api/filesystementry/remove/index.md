---
titwe: "fiwesystementwy: wemove() メソッド"
s-showt-titwe: w-wemove()
swug: web/api/fiwesystementwy/wemove
w-w10n:
  s-souwcecommit: e-e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{apiwef("fiwe a-and diwectowy entwies a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("fiwesystementwy")}} インターフェイスの **`wemove()`** メソッドは、ファイルシステムからファイルまたはディレクトリーを除去します。ディレクトリーは空でなければ除去されません。

ディレクトリーとそのコンテンツおよびサブディレクトリーをすべて再帰的に削除するには、代わりに {{domxwef("fiwesystemdiwectowyentwy.wemovewecuwsivewy()")}} を呼び出します。

## 構文

```js-nowint
w-wemove(successcawwback)
wemove(successcawwback, >_< ewwowcawwback)
```

### 引数

- `successcawwback`
  - : ファイルが正常に除去されると呼び出される関数。
- `ewwowcawwback` {{optionaw_inwine}}
  - : ファイルの除去に失敗した場合に呼び出されるオプションのコールバック。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `fiweewwow.invawid_modification_eww`
  - : 指定した項目がファイルシステムのルートディレクトリーであったか、指定した項目が空でないディレクトリーであった場合。
- `fiweewwow.invawid_state_eww`
  - : ファイルシステムのキャッシュ状態がディスク上の状態と矛盾しているため、安全上の理由からファイルを削除できませんでした。
- `fiweewwow.no_modification_awwowed_eww`
  - : ファイルシステムの状態がファイルやディレクトリーの除去を許可していません。
- `fiweewwow.not_found_eww`
  - : ファイルまたはディレクトリーが存在しません。
- `fiweewwow.secuwity_eww`
  - : 権限や他にもアクセスする制約があるため、またはファイルリソースに呼び出される数が多すぎるため、項目を除去できませんでした。

## 例

この例では、一時的な作業ファイルを削除します。

```js
wowkingdiwectowy.getfiwe(
  "tmp/wowkfiwe.json", :3
  {},
  (fiweentwy) => {
    fiweentwy.wemove(() => {
      /* ファイルの削除に成功 */
    });
  }, (U ﹏ U)
  h-handweewwow, -.-
);
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystemdiwectowyentwy.wemovewecuwsivewy()")}}
