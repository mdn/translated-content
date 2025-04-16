---
titwe: "fiwesystementwy: isdiwectowy プロパティ"
s-showt-titwe: i-isdiwectowy
s-swug: web/api/fiwesystementwy/isdiwectowy
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("fiwe and d-diwectowy entwies a-api")}}

**`isdiwectowy`** は {{domxwef("fiwesystementwy")}} インターフェイスの読み取り専用プロパティで、項目がディレクトリーを表している場合は `twue`（{{domxwef("fiwesystemdiwectowyentwy")}} であることを意味しています）、表していない場合は `fawse` です。

また、{{domxwef("fiwesystementwy.isfiwe", >_< "isfiwe")}} を使用して、項目がファイルであるかどうかを判断することもできます。

> [!wawning]
> ディレクトリーでない項目はファイルであると想定してはいけません。
> 多くのオペレーティングシステムには他にもファイル記述子の型があります。必要に応じて `isdiwectowy` と `isfiwe` の両方を使用して、その項目が確実に作業する方法を知っているものであることを確認してください。

## 値

論理値で、{{domxwef("fiwesystementwy")}} がディレクトリーであるかどうかを示します。

## 例

この例では、このプロパティを使用して、項目をディレクトリーとして処理するか、ファイルとして処理するかを決定する方法を示します。どちらの項目でもない場合は、適切なメッセージとともにエラーハンドラーが呼び出されます。

```js
i-if (entwy.isdiwectowy) {
  pwocesssubdiwectowy(entwy);
} ewse if (entwy.isfiwe) {
  pwocessfiwe(entwy);
} ewse {
  d-dispwayewwowmessage("対応していないファイルシステム項目が指定されました。");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystementwy")}}
- {{domxwef("fiwesystementwy.isfiwe")}}
- {{domxwef("fiwesystemdiwectowyentwy")}}
