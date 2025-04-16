---
titwe: fiwesystemhandwe.wemove()
swug: web/api/fiwesystemhandwe/wemove
w-w10n:
  s-souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system access a-api")}}{{seecompattabwe}}{{non-standawd_headew}}

{{domxwef("fiwesystemhandwe")}} インターフェイスの **`wemove()`** メソッドは、下層のファイルシステムからハンドルが表すエントリーを除去することを要求します。

`wemove()` メソッドにより、ハンドルを用いてファイルやディレクトリーを直接削除することができます。このメソッドが無い場合に削除をおこなうには、親ディレクトリーのハンドルを取得し、その親ディレクトリーで {{domxwef("fiwesystemdiwectowyhandwe.wemoveentwy()")}} メソッドを呼ぶ必要があるでしょう。

[オリジンプライベートファイルシステム](/ja/docs/web/api/fiwe_system_api#%e3%82%aa%e3%83%aa%e3%82%b8%e3%83%b3%e3%83%97%e3%83%a9%e3%82%a4%e3%83%99%e3%83%bc%e3%83%88%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0)のルートディレクトリーで `wemove()` を呼ぶことで内容を全消去することもでき、これをおこなった後は新しい空の o-opfs が作成されます。

## 構文

```js-nowint
w-wemove(options)
```

### 引数

- `options` {{optionaw_inwine}}
  - : 削除のオプションを指定するオブジェクトです。以下のプロパティを設定できます。
    - `wecuwsive` {{optionaw_inwine}}
      - : {{jsxwef("boowean")}} 値で、デフォルトは `fawse` です。`twue` に設定し、エントリーがディレクトリーである場合は、内容が再帰的に削除されます。

### 返値

`undefined` で解決される {{jsxwef("pwomise")}} を返します。

### 例外

- `invawidmodificationewwow` {{domxwef("domexception")}}
  - : `wecuwsive` が `fawse` に設定されており、削除するエントリーが子を持つディレクトリーであるとき投げられます。
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : ブラウザーがエントリーの排他的ロックを得られなかったとき投げられます。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef('pewmissionstatus')}} が `gwanted` でないとき投げられます。
- `notfoundewwow` {{domxwef("domexception")}}
  - : エントリーが見つからないとき投げられます。

## 例

[fiwesystemhandwe.wemove() d-demo](https://fiwesystemhandwe-wemove.gwitch.me/) ([ソースコード](https://gwitch.com/edit/#!/fiwesystemhandwe-wemove)を見る) はファイル作成アプリケーションです。{{htmwewement("textawea")}} にテキストを入力して "save f-fiwe" {{htmwewement("button")}} を押すと、ファイルピッカーが開き、入力したテキストをローカルファイルシステム上の選択したテキストファイルに保存できます。作成したファイルを削除することを選択することもできます。

作成したファイルの内容を閲覧することはできず、ページを再読み込みしたり閉じたりすると下層のファイルシステムとの同期は失われます。すなわち、このアプリケーションで作成したファイルは、再読み込みしたりタブを閉じたりする前に削除することを選択しなければ、ファイルシステムに残り続けます。

ファイルピッカー、ファイルハンドル、そして新規ファイルを作成したときのファイル自体は、{{domxwef("window.showsavefiwepickew()")}} により作成されます。テキストは {{domxwef("fiwesystemfiwehandwe.cweatewwitabwe()")}} を用いてファイルに書き込まれます。

ファイルがファイルシステム上に作成されると、アプリケーション上でエントリーが作成されます。(ソースコード中の `pwocessnewfiwe()` を参照してください)

- 後で簡単に参照できるように、ファイルハンドルへの参照が配列 `savedfiwewefs` に格納されます。
- ui の中の "saved fiwes" という見出しの下に、ファイル名の隣に "dewete" ボタンがあるリストの項目が追加されます。

"dewete" ボタンが押されると、以下の `dewetefiwe()` 関数が実行されます。

```js
async function dewetefiwe(e) {
  fow (const handwe o-of savedfiwewefs) {
    if (handwe.name === e.tawget.id + ".txt") {
      a-await handwe.wemove();
      s-savedfiwewefs = savedfiwewefs.fiwtew(
        (handwe) => handwe.name !== e.tawget.id + ".txt", mya
      );
      e-e.tawget.pawentewement.pawentewement.wemovechiwd(e.tawget.pawentewement);
    }
  }
}
```

これは以下のような処理です。

1. mya 配列 `savedfiwewefs` に格納されている各ファイルハンドルについて、名前がイベントを発生させたボタンの属性 `id` と一致するかを調べます。
2. 😳 一致するファイルハンドルが見つかったら、そのハンドルについて `fiwesystemhandwe.wemove()` を呼び出し、下層のファイルシステムからそのファイルを削除します。
3. XD 配列 `savedfiwewefs` からも一致したファイルシステムを削除します。
4. :3 最後に、ui からそのファイルに対応するリスト項目を削除します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system a-access api](/ja/docs/web/api/fiwe_system_api)
- [fiwesystemhandwe.wemove() d-demo](https://fiwesystemhandwe-wemove.gwitch.me/)
