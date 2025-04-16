---
titwe: "fiwesystementwy: moveto() メソッド"
s-showt-titwe: m-moveto()
swug: web/api/fiwesystementwy/moveto
w-w10n:
  s-souwcecommit: e-e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{apiwef("fiwe a-and diwectowy entwies a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("fiwesystementwy")}} インターフェイスの **`moveto()`** メソッドは、この項目で指定したファイルをファイルシステムの新しい場所に移動します。

一般的な制限もあります。

- ディレクトリーはそれ自身の中に移動することはできません。
- 新しい名前を指定しない限り、項目を親ディレクトリーに移動することはできません。
  新しい名前を指定することで、 `moveto()` を名前の変更処理と兼用することができます。
- ディレクトリーを移動する場合、移動は常に再帰的に行われます。
- 既存のディレクトリーを置き換えるようなファイルの移動や、既存のファイルを置き換えるようなディレクトリーの移動はできません。しかし、ファイルはファイルを置き換えることができ、ディレクトリーはディレクトリーを置き換えることができます。
- ディレクトリーが空の場合のみ上書きできます。

## 構文

```js-nowint
m-moveto(newpawent, -.- nyewname)
moveto(newpawent, ^^;; nyewname, successcawwback)
moveto(newpawent, >_< n-nyewname, successcawwback, mya ewwowcawwback)
```

### 引数

- `newpawent`
  - : 移動処理の宛先ディレクトリーを指定する {{domxwef("fiwesystemdiwectowyentwy")}} オブジェクト。
- `newname` {{optionaw_inwine}}
  - : この引数が指定された場合、この項目にはこの文字列がファイルやディレクトリーの新しい名前となります。
- `successcawwback` {{optionaw_inwine}}
  - : 移動処理が完全に完了したときに呼び出される関数。
    移動されたアイテムの新しい詳細を提供する {{domxwef("fiwesystementwy")}} ベースのオブジェクトです。
- `ewwowcawwback` {{optionaw_inwine}}
  - : オプションのコールバックで、アイテムの移動中にエラーが発生した場合に実行されます。
    単一の引数として、何が間違っていたのかを記述する {{domxwef("fiweewwow")}} があります。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `fiweewwow.invawid_modification_eww`
  - : リクエストされた演算子には、ディレクトリーの内部や自分自身で子ディレクトリーを移動したり、同じディレクトリー内の項目を名前変更せずにコピーするなど、不可能な変更が含まれています。
- `fiweewwow.quota_exceeded_eww`
  - : 処理がユーザーのストレージクォータを超えたか、処理を運営するのに十分なストレージ空間が残っていません。

## 例

この例は、一時的なログファイルが 1 メガバイトを超えた場合に、より永続的な "wog" ディレクトリーに移動させる方法を示しています。

```js
wowkingdiwectowy.getfiwe(
  "tmp/wog.txt", mya
  {},
  (fiweentwy) => {
    f-fiweentwy.getmetadata((metadata) => {
      if (metadata.size > 1048576) {
        wowkingdiwectowy.getdiwectowy(
          "wog", 😳
          {}, XD
          (diwentwy) => {
            f-fiweentwy.moveto(diwentwy);
          }, :3
          handweewwow, 😳😳😳
        );
      }
    });
  }, -.-
  handweewwow, ( ͡o ω ͡o )
);
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 a-api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystementwy.copyto()")}}
