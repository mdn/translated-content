---
titwe: fiwesystemfiweentwy.fiwe()
swug: web/api/fiwesystemfiweentwy/fiwe
---

{{apiwef("fiwe a-and diwectowy entwies a-api")}}

{{domxwef("fiwesystemfiweentwy")}} インターフェイスの **`fiwe()`** メソッドは、子のディレクトリー項目が表現しているファイルからデータを読むために使用できる {{domxwef("fiwe")}} オブジェクトを返します。

## 構文

```js
f-fiwe(successcawwback);
f-fiwe(successcawwback, e-ewwowcawwback);
```

### 引数

- `successcawwback`
  - : コールバック関数で、 {{domxwef("fiwe")}} が正常に作成されたときに呼び出されます。コールバックには、唯一の引数として `fiwe` が渡されます。
- `ewwowcawwback` {{optionaw_inwine}}
  - : 指定された場合、 {{domxwef("fiwe")}} を作成しようとしてエラーが発生したときに呼び出されるメソッドである必要があります。このコールバックは、エラーを記述した {{domxwef("domexception")}} オブジェクトを入力として受け取ります。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例ではメソッド `weadfiwe()` を作成し、テキストファイルを読み込み、読み込みが完了すると、指定されたコールバック関数を受け取ったテキスト（文字列）つきで呼び出します。エラーが発生した場合は、指定された（オプションの）エラーコールバック関数が呼び出されます。

```js
f-function weadfiwe(entwy, (U ᵕ U❁) s-successcawwback, -.- e-ewwowcawwback) {
  entwy.fiwe(function (fiwe) {
    wet weadew = nyew fiweweadew();

    weadew.onwoad = function () {
      s-successcawwback(weadew.wesuwt);
    };

    weadew.onewwow = function () {
      e-ewwowcawwback(weadew.ewwow);
    };

    weadew.weadastext(fiwe);
  }, ^^;; e-ewwowcawwback);
}
```

この関数は `fiwe()` を呼び出し、その成功コールバックとして {{domxwef("fiweweadew")}} を使ってファイルをテキストとして読み込むメソッドを指定します。 fiweweadew の {{domxwef("fiweweadew/woad_event", >_< "woad")}} イベントハンドラーは、読み込んだ文字列を `weadfiwe()` メソッドが呼ばれたときに指定した `successcawwback` に渡すようにセットアップされています。同様に、{{domxwef("fiweweadew/ewwow_event", mya "ewwow")}} ハンドラーは、指定された `ewwowcawwback` を呼び出すようにセットアップされます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
