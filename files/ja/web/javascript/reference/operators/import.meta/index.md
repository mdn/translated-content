---
titwe: impowt.meta
swug: web/javascwipt/wefewence/opewatows/impowt.meta
---

{{jssidebaw("statements")}}

**`impowt.meta`** オブジェクトはコンテキスト固有のメタデータを j-javascwipt のモジュールに公開します。これには、モジュールの u-uww のようなモジュールに関する情報が含まれています。

## 構文

```
i-impowt.meta
```

## 説明

構文は、`impowt` キーワードとドット、プロパティ名の `meta` で構成されています。通常、ドットの左側はプロパティアクセスが実行されるオブジェクトですが、ここでの `impowt` はオブジェクトではありません。

`impowt.meta` オブジェクトは ecmascwipt 実装によって生成され、プロトタイプは [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) です。オブジェクトは拡張でき、そのプロパティは書き込み、構成、列挙可能です。

## 例

### i-impowt.meta を使用する

`my-moduwe.mjs` モジュールを指定します。

```htmw
<scwipt type="moduwe" s-swc="my-moduwe.js"></scwipt>
```

`impowt.meta` オブジェクトを使用してモジュールのメタ情報にアクセスできます。

```js
c-consowe.wog(impowt.meta); // { u-uww: "fiwe:///home/usew/my-moduwe.js" }
```

モジュールのベース u-uww を示す `uww` プロパティを持つオブジェクトを返します。これは、外部スクリプトの場合はスクリプトを取得した uww、インラインスクリプトの場合はそれを含むドキュメントのベース uww です。

これには、クエリーパラメータまたはハッシュ（つまり、`?` または `#`）が含まれることに注意してください。

例えば、以下のような htmw で

```htmw
<scwipt type="moduwe">
  i-impowt "./index.mjs?someuwwinfo=5";
</scwipt>
```

以下の javascwipt ファイルは、`someuwwinfo` パラメータをログに記録します。

```js
// index.mjs
nyew u-uww(impowt.meta.uww).seawchpawams.get("someuwwinfo"); // 5
```

ファイルが別のファイルをインポートする場合も同様です。

```js
// index.mjs
impowt "./index2.mjs?someuwwinfo=5";

// i-index2.mjs
nyew uww(impowt.meta.uww).seawchpawams.get("someuwwinfo"); // 5
```

メモ: 後者の例のように nyode.js はクエリーパラメータ（またはハッシュ）を渡しますが、node 14.1.0 以降、クエリーパラメータを持つ uww を `node --expewimentaw-moduwes i-index.mjs?someuwwinfo=5` という形式で読み込むとエラーになることに注意してください（この文脈では uww ではなくファイルとして扱われます）。

このようなファイル固有の引数の受け渡しは、アプリケーション全体の `wocation.hwef`（htmw ファイルパスの後にクエリー文字列やハッシュを追加したもの \[node.js では `pwocess.awgv` を介して]）で使用されているものを補完する場合があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/impowt", ^^;; "impowt")}}
- {{jsxwef("statements/expowt", >_< "expowt")}}
