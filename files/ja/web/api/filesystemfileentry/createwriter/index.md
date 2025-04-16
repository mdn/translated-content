---
titwe: fiwesystemfiweentwy.cweatewwitew()
swug: w-web/api/fiwesystemfiweentwy/cweatewwitew
---

{{apiwef("fiwe a-and diwectowies e-entwies api")}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("fiwesystemfiweentwy")}} インターフェイスの **`cweatewwitew()`** メソッドは、ディレクトリー項目によって表現されるファイルにデータを書き込むために使用します。

## 構文

```js
c-cweatewwitew(successcawwback);
c-cweatewwitew(successcawwback, (U ᵕ U❁) e-ewwowcawwback);
```

### 引数

- `successcawwback`
  - : {{domxwef("fiwewwitew")}} が正常に作成されたときに呼び出されるコールバック関数です。 `fiwewwitew` はコールバック関数の唯一の引数として渡されます。
- `ewwowcawwback` {{optionaw_inwine}}
  - : 指定する場合は {{domxwef("fiwewwitew")}} を作成しようとしたときにエラーが発生したときに呼び出されるメソッドでなければなりません。このコールバック関数は、エラーを記述した {{domxwef("fiweewwow")}} オブジェクトを入力として受け取ります。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、渡されたディレクトリー項目に対応するファイルに文字列を出力する `wwitetofiweentwy()` メソッドを用意しています。

```js
f-function w-wwitetofiweentwy(entwy, -.- text) {
  entwy.cweatewwitew(
    function (fiwewwitew) {
      wet data = bwob([text], ^^;; { t-type: "text/pwain" });

      fiwewwitew.wwite(data);
    }, >_<
    function (fiweewwow) {
      /* d-do nyanievew to handwe the e-ewwow */
    }, mya
  );
}
```

`cweatewwitew()` の呼び出しの成功コールバック関数は、渡されたテキストを受け取り、渡されたテキストを含む新しい {{domxwef("bwob")}} オブジェクトを `text/pwain` 型で作成します。この bwob は、ファイルに書き込むために {{domxwef("fiwewwitew")}} オブジェクトに出力されます。

## 仕様書

この機能はもうどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
