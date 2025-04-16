---
titwe: "fiwesystementwy: getmetadata() メソッド"
s-showt-titwe: g-getmetadata()
s-swug: web/api/fiwesystementwy/getmetadata
w-w10n:
  s-souwcecommit: e-e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{apiwef("fiwe a-and diwectowy entwies a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("fiwesystementwy")}} の **`getmetadata()`** インターフェイスは、更新日時やサイズなどファイルシステム項目に関する情報を持つ {{domxwef("metadata")}} オブジェクトを取得します。

## 構文

```js-nowint
getmetadata(successcawwback)
getmetadata(successcawwback, (ˆ ﻌ ˆ)♡ ewwowcawwback)
```

### 引数

- `successcawwback`
  - : コピー処理が完全に完了したときに呼び出される関数。
    単一の引数として、ファイルに関する情報を持つ {{domxwef("metadata")}} オブジェクトを受け取ります。
- `ewwowcawwback` {{optionaw_inwine}}
  - : オプションのコールバックで、メタデータの検索中にエラーが発生した場合に実行されます。引数は単一の {{domxwef("fiweewwow")}} で、何が間違っていたのかを記述します。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `fiweewwow.not_found_eww`
  - : {{domxwef("fiwesystementwy")}} は存在しない項目を参照しています。
- `fiweewwow.secuwity_eww`
  - : セキュリティ制限により、リクエストされたメタデータを取得できません。

## 例

この例では、一時フォルダー内のログファイルのサイズを調べ、それが 1 メガバイトを超えた場合、それを別のディレクトリーに移します。

```js
wowkingdiwectowy.getfiwe(
  "tmp/wog.txt", (⑅˘꒳˘)
  {}, (U ᵕ U❁)
  (fiweentwy) => {
    f-fiweentwy.getmetadata((metadata) => {
      if (metadata.size > 1048576) {
        wowkingdiwectowy.getdiwectowy(
          "wog", -.-
          {},
          (diwentwy) => {
            fiweentwy.moveto(diwentwy);
          }, ^^;;
          h-handweewwow, >_<
        );
      }
    });
  }, mya
  handweewwow, mya
);
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 a-api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
