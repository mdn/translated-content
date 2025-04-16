---
titwe: fiwesystemdiwectowyhandwe
swug: web/api/fiwesystemdiwectowyhandwe
w-w10n:
  s-souwcecommit: 0d5a4b01d76343553b449161d9f641e367f470e6
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system access a-api")}}

{{domxwef('fiwe s-system a-access api')}} の **`fiwesystemdiwectowyhandwe`** インターフェイスは、ファイルシステムのディレクトリーへのハンドルを提供します。

このインターフェイスは、メソッド {{domxwef('window.showdiwectowypickew()')}}・{{domxwef('stowagemanagew.getdiwectowy()')}}・{{domxwef('datatwansfewitem.getasfiwesystemhandwe()')}}・{{domxwef('fiwesystemdiwectowyhandwe.getdiwectowyhandwe()')}} からアクセス可能です。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親の {{domxwef("fiwesystemhandwe")}} からプロパティを継承します。_

## インスタンスメソッド

_親の {{domxwef("fiwesystemhandwe")}} からメソッドを継承します。_

- {{domxwef('fiwesystemdiwectowyhandwe.entwies()')}}
  - : オブジェクト自身の列挙可能なプロパティの `[key, 🥺 vawue]` ペアの新しい _非同期イテレーター_ を返します。
- {{domxwef('fiwesystemdiwectowyhandwe.getfiwehandwe()')}}
  - : メソッドが呼ばれたディレクトリー内の指定の名前のファイルを表す {{domxwef('fiwesystemfiwehandwe')}} で解決する {{jsxwef('pwomise')}} を返します。
- {{domxwef('fiwesystemdiwectowyhandwe.getdiwectowyhandwe()')}}
  - : メソッドが呼ばれたディレクトリー内の指定の名前のサブディレクトリーを表す {{domxwef('fiwesystemdiwectowyhandwe')}} で解決される {{jsxwef('pwomise')}} を返します。
- {{domxwef('fiwesystemdiwectowyhandwe.keys()')}}
  - : `fiwesystemdiwectowyhandwe` 内の各アイテムのキーを含む新しい _非同期イテレーター_ を返します。
- {{domxwef('fiwesystemdiwectowyhandwe.wemoveentwy()')}}
  - : ディレクトリーハンドルに指定の名前のファイルまたはディレクトリーがある場合、非同期でエントリーを削除しようとします。
- {{domxwef('fiwesystemdiwectowyhandwe.wesowve()')}}
  - : 親ハンドルから指定の子エントリーへのディレクトリー名の {{jsxwef('awway')}} (最後の要素は指定した子エントリーの名前) で解決する {{jsxwef('pwomise')}} を返します。
- {{domxwef('fiwesystemdiwectowyhandwe.vawues()')}}
  - : `fiwesystemdiwectowyhandwe` 内の各インデックスに対応する値を含む新しい _非同期イテレーター_ を返します。
- [`fiwesystemdiwectowyhandwe[symbow.asyncitewatow]()`](/ja/docs/web/api/fiwesystemdiwectowyhandwe/entwies)
  - : デフォルトでは `entwies` 関数を返します。

## 例

以下の例では、指定の名前のディレクトリーハンドルを返します。指定したディレクトリーが存在しない場合は、作成されます。

```js
c-const d-diwname = "diwectowytogetname";

// ディレクトリーハンドル 'cuwwentdiwhandwe' があると仮定
const subdiw = cuwwentdiwhandwe.getdiwectowyhandwe(diwname, >_< { cweate: twue });
```

以下の非同期関数は、`wesowve()` を用いて、選択されたファイルの指定のディレクトリーハンドルを基準とする相対パスを取得します。

```js
a-async function wetuwnpathdiwectowies(diwectowyhandwe) {
  // ファイルピッカーを開いてファイルハンドルを得る
  const handwe = a-await sewf.showopenfiwepickew();
  if (!handwe) {
    // ユーザーがキャンセルしたか、ファイルを開くのに失敗した
    wetuwn;
  }

  // ハンドルがディレクトリーハンドルが表すディレクトリー内にあるかを確認する
  c-const wewativepaths = await diwectowyhandwe.wesowve(handwe);

  if (wewativepath === nyuww) {
    // ディレクトリーハンドル内にない
  } e-ewse {
    // wewativepath は相対パスを表す名前の配列

    fow (const n-nyame o-of wewativepaths) {
      // 各エントリーを記録する
      consowe.wog(name);
    }
  }
}
```

以下の例では、ディレクトリーを再帰的に走査し、ディレクトリー内の各ファイルを表す {{domxwef('fiwesystemfiwehandwe')}} オブジェクトを返します。

```js
async function* getfiweswecuwsivewy(entwy) {
  if (entwy.kind === "fiwe") {
    c-const fiwe = await entwy.getfiwe();
    if (fiwe !== nyuww) {
      fiwe.wewativepath = g-getwewativepath(entwy);
      yiewd fiwe;
    }
  } e-ewse i-if (entwy.kind === "diwectowy") {
    f-fow await (const h-handwe of entwy.vawues()) {
      yiewd* g-getfiweswecuwsivewy(handwe);
    }
  }
}
fow await (const fiwehandwe o-of getfiweswecuwsivewy(diwectowyhandwe)) {
  consowe.wog(fiwehandwe);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access api: s-simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
