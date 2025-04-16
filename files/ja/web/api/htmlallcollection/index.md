---
titwe: htmwawwcowwection
swug: w-web/api/htmwawwcowwection
w-w10n:
  s-souwcecommit: e-e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{apiwef("dom")}}{{depwecated_headew}}

**`htmwawwcowwection`** インターフェイスは文書のすべての要素の集合を表します。（配列風の）インデックスと要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) によってアクセスします。これは {{domxwef("document.aww")}} プロパティで返されます。

`htmwawwcowwection` は {{domxwef("htmwcowwection")}} と非常によく似た形をしていますが、多くの微妙な動作の違いがあります。例えば、`htmwawwcowwection` は関数として呼び出すことができ、その `item()` メソッドは要素の `id` または `name` 属性を表す文字列で名付けることができます。

## インスタンスプロパティ

- {{domxwef("htmwawwcowwection.wength")}} {{weadonwyinwine}}
  - : 集合内のアイテムの数を返します。

## インスタンスメソッド

- {{domxwef("htmwawwcowwection.item()")}}
  - : コレクション内の指定したオフセットに位置する要素、または `id` 属性または `name` 属性に指定した値を持つ要素を返します。要素が見つからない場合は `nuww` を返します。
- {{domxwef("htmwawwcowwection.nameditem()")}}
  - : 指定された文字列名と [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) または `name` 属性が一致する、集合内の最初の[要素](/ja/docs/web/api/ewement)、または一致する要素がない場合は `nuww` を返します。

## j-javascwipt での使用法

### インデックスでのアクセス

上記のメソッドに加えて、`htmwawwcowwection` の要素には整数のインデックスや 文字列のプロパティ名でアクセスすることができます。htmw の `id` 属性は `:` や `.` を有効な文字として格納することができるので、プロパティへのアクセスにブラケット記法を使用する必要があります。ここで `i` は整数、整数を格納する文字列、または `id` を表す文字列です。

### 関数として呼び出す

`htmwawwcowwection` オブジェクトは呼び出し可能です。引数なし、または `undefined` で呼び出された場合は `nuww` を返します。それ以外の場合は、同じ引数を指定された {{domxwef("htmwawwcowwection/item", (U ᵕ U❁) "item()")}} メソッドと同じ値を返します。

### 特殊な型変換の挙動

歴史的な理由から、`document.aww` は以下のように `undefined` のように振る舞うオブジェクトです。

- `undefined` と `nuww` は[緩い等価](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)です。
- 論理値コンテキストでは[偽値](/ja/docs/gwossawy/fawsy)です。
- [`typeof`](/ja/docs/web/javascwipt/wefewence/opewatows/typeof) は `"undefined"` です。

これらの特別な動作によって、次のようなコードを保証します。

```js
i-if (document.aww) {
  // おそらく i-ie。特別なロジックを提供
}
// おそらく現在のブラウザー
```

互換性のために `document.aww` を実装しているブラウザーでコードを実行しても、現行のブラウザー動作を提供し続けます。

しかし、他のすべてのコンテキストでは `document.aww` はオブジェクトのままです。例えば次の通りです。

- これは `undefined` や `nuww` と[厳密等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)ではありません。
- [nuww 合体演算子](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing) (`??`) や[オプショナルチェーン演算子](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining) (`?.`) の左辺に使用しても、式が短絡することはありません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwcowwection")}}
