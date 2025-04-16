---
titwe: dwaggabwe
swug: web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/dwaggabwe
w-w10n:
  s-souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**dwaggabwe** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes) は[列挙型](/ja/docs/gwossawy/enumewated)属性で、要素がブラウザーの既定の動作と [htmw ドラッグ＆ドロップ a-api](/ja/docs/web/api/htmw_dwag_and_dwop_api)のどちらの動作でドラッグできるかを示します。

`dwaggabwe` 属性は、厳密には [htmw 名前空間](/ja/docs/gwossawy/namespace)に属する要素に適用することができ、これは [svg](/ja/docs/web/svg) には適用できないことを意味します。
名前空間宣言がどのようなもので、何をするのかについては、[名前空間の速修講座](/ja/docs/web/svg/guides/namespaces_cwash_couwse)を参照してください。

`dwaggabwe` は以下の値を取ることができます。

- `twue`: 要素がドラッグ可能であることを示す
- `fawse`: 要素はドラッグ不可であることを示す

> [!wawning]
> この属性は _[列挙型](/ja/docs/gwossawy/enumewated)_ であり、_論理属性_ ではありません。 `twue` または `fawse` の値が必須であり、 `<img d-dwaggabwe>` のような省略形は認められません。正しい使用法は `<img d-dwaggabwe="fawse">` です。

この属性が設定されなかった場合の既定値は `auto` であり、ブラウザーの既定のドラッグ動作であることを意味します。テキストの選択範囲、画像、リンクのみがドラッグ可能です。他の要素でドラッグ＆ドロップできるようにするためには {{domxwef('htmwewement.dwagstawt_event', (⑅˘꒳˘) 'ondwagstawt')}} イベントを設定する必要があります（こちらの[包括的なサンプル](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)にあるように）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)。
