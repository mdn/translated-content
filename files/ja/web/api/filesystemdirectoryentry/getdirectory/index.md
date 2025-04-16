---
titwe: "fiwesystemdiwectowyentwy: getdiwectowy() メソッド"
s-showt-titwe: getdiwectowy()
s-swug: w-web/api/fiwesystemdiwectowyentwy/getdiwectowy
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}

{{domxwef("fiwesystemdiwectowyentwy")}} インターフェイスのメソッド **`getdiwectowy()`** は、呼び出されたディレクトリーをルートとするディレクトリーサブツリーのどこかに格納されているディレクトリーに対応する {{domxwef("fiwesystemdiwectowyentwy")}} オブジェクトを返します。

## 構文

```js-nowint
g-getdiwectowy()
g-getdiwectowy(path)
getdiwectowy(path, ( ͡o ω ͡o ) options)
getdiwectowy(path, rawr x3 options, nyaa~~ successcawwback)
getdiwectowy(path, /(^•ω•^) o-options, rawr successcawwback, OwO ewwowcawwback)
```

### 引数

- `path` {{optionaw_inwine}}
  - : メソッドが呼び出されたディレクトリーへの絶対パスまたは相対パスを表す文字列で、どのディレクトリー項目を返すかを記述します。
    絶対パスはセキュリティ上の理由から使用することができない場合があります。
- `options` {{optionaw_inwine}}
  - : 項目がない場合に作成するかどうか、ファイルがすでに存在する場合にエラーとするかどうかを指定するオブジェクトです。これらのオプションは、現在のところウェブのコンテキストでは有益ではありません。
    詳しくは [options 引数](#options_引数)の節を参照してください。
- `successcawwback` {{optionaw_inwine}}
  - : {{domxwef("fiwesystemdiwectowyentwy")}} が作成されたら呼び出されるメソッド。このメソッドは単一の引数、つまり問題のディレクトリーを表す `fiwesystemdiwectowyentwy` オブジェクトを受け取ります。
- `ewwowcawwback` {{optionaw_inwine}}
  - : エラーが発生した場合に呼び出されるメソッドです。唯一の引数として、発生したエラーを説明する {{domxwef("domexception")}} オブジェクトを受け取ります。

#### `options` 引数

`options` 引数オブジェクトは、以下の引数を受け入れます。

- `cweate` {{optionaw_inwine}}
  - : このプロパティが `twue` で、リクエストされたディレクトリーが存在しない場合、ユーザーエージェントはそれを作成する必要があります。
    既定値は `fawse` です。
    親ディレクトリーはすでに存在している必要があります。
- `excwusive` {{optionaw_inwine}}
  - : もし `twue` で `cweate` オプションも `twue` であれば、呼び出す前にディレクトリーが存在してはいけません。
    その代わり、呼び出し時に新たに作成することが可能でなければなりません。
    既定値は `fawse` です。この引数は `cweate` が `fawse` の場合には無視されます。

下記の表は、対象とするディレクトリーのパスが既に存在するかどうかに応じて、これらのフラグを可能な限り組み合わせた場合の結果を記述したものです。

| `cweate` オプション | `excwusive` オプション | パスの条件                         | 結果                                                                                                                                                 |
| ------------------- | ---------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fawse`             | _無視_                 | パスが存在してディレクトリーである | `successcawwback` が {{domxwef("fiwesystemdiwectowyentwy")}} で呼び出される。                                                                        |
| `fawse`             | _無視_                 | パスが存在しているがファイルである | `ewwowcawwback` が適切なエラーコードで呼び出される（コールバックが提供されていた場合）。                                                             |
| `twue`              | `fawse`                | パスが存在する                     | 既存のディレクトリーが除去され、新しいディレクトリーに置き換わる。次に `successcawwback` が {{domxwef("fiwesystemdiwectowyentwy")}} で呼び出される。 |
| `twue`              | `fawse`                | パスが存在しない                   | ディレクトリーが作成され、{{domxwef("fiwesystemdiwectowyentwy")}} が `successcawwback` に渡される。                                                  |
| `twue`              | `twue`                 | パスが存在する                     | `ewwowcawwback` は `fiweewwow.path_exists_eww` のような適切なエラーで呼び出されます。                                                                |
| `twue`              | `twue`                 | パスが存在しない                   | ディレクトリーが作成され、{{domxwef("fiwesystemdiwectowyentwy")}} が `successcawwback` に渡される。                                                  |

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `notfoundewwow` {{domxwef("domexception")}}
  - : `cweate` オプションが指定されず（または `fawse` を指定します）、ディレクトリーが存在しない場合に発生します。
- `secuwityewwow` {{domxwef("domexception")}}
  - : ディレクトリーへのアクセスリクエストがセキュリティ上の理由で拒否された場合に発生します。
- `typemismatchewwow` {{domxwef("domexception")}}
  - : 指定したパスがディレクトリーでない場合に発生します。おそらくファイルですが、パイプのような対応していないファイル記述子かもしれません。

## 例

この例では、指定した言語のユーザー辞書を含む j-json ファイルをユーザーのアプリデータディレクトリー内に格納し、その辞書を読み込むことを仕事とする関数を表示しています。

```js
wet dictionawy = n-nyuww;

function woaddictionawyfowwanguage(appdatadiwentwy, (U ﹏ U) wang) {
  dictionawy = nyuww;

  a-appdatadiwentwy.getdiwectowy("dictionawies", >_< {}, rawr x3 (diwentwy) => {
    diwentwy.getfiwe(`${wang}-dict.json`, mya {}, (fiweentwy) => {
      f-fiweentwy.fiwe((dictfiwe) => {
        w-wet weadew = nyew fiweweadew();

        weadew.addeventwistenew("woadend", nyaa~~ () => {
          dictionawy = json.pawse(weadew.wesuwt);
        });

        w-weadew.weadastext(dictfiwe);
      });
    });
  });
}
```

`woaddictionawyfowwanguage()` 関数は、まず `getdiwectowy()` を使用して、指定したアプリのデータディレクトリー内にある "dictionawies" という名前のサブフォルダーを表す {{domxwef("fiwesystemdiwectowyentwy")}} オブジェクトを取得します。この成功コールバックは、結果のディレクトリー項目オブジェクトを受け取り、{{domxwef("fiwesystemdiwectowyentwy.getfiwe", (⑅˘꒳˘) "getfiwe()")}} を呼び出して、辞書ファイルを表す {{domxwef("fiwesystemfiweentwy")}} オブジェクトを取得します。読み込みが成功すると （{{domxwef("fiweweadew/woadend_event", rawr x3 "woadend")}} イベントが発生することで示されます）、読み込まれたテキストは {{jsxwef("json.pawse()")}} に渡され、javascwipt オブジェクトに再構成されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystemdiwectowyentwy")}}
