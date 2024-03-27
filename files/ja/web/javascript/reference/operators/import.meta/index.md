---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
---

{{JSSidebar("Statements")}}

**`import.meta`** オブジェクトはコンテキスト固有のメタデータを JavaScript のモジュールに公開します。これには、モジュールの URL のようなモジュールに関する情報が含まれています。

## 構文

```
import.meta
```

## 説明

構文は、`import` キーワードとドット、プロパティ名の `meta` で構成されています。通常、ドットの左側はプロパティアクセスが実行されるオブジェクトですが、ここでの `import` はオブジェクトではありません。

`import.meta` オブジェクトは ECMAScript 実装によって生成され、プロトタイプは {{jsxref("null")}} です。オブジェクトは拡張でき、そのプロパティは書き込み、構成、列挙可能です。

## 例

### import.meta を使用する

`my-module.mjs` モジュールを指定します。

```html
<script type="module" src="my-module.js"></script>
```

`import.meta` オブジェクトを使用してモジュールのメタ情報にアクセスできます。

```js
console.log(import.meta); // { url: "file:///home/user/my-module.js" }
```

モジュールのベース URL を示す `url` プロパティを持つオブジェクトを返します。これは、外部スクリプトの場合はスクリプトを取得した URL、インラインスクリプトの場合はそれを含むドキュメントのベース URL です。

これには、クエリパラメータまたはハッシュ（つまり、`?` または `#`）が含まれることに注意してください。

例えば、以下のような HTML で

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

以下の JavaScript ファイルは、`someURLInfo` パラメータをログに記録します。

```js
// index.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

ファイルが別のファイルをインポートする場合も同様です。

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

メモ: 後者の例のように Node.js はクエリパラメータ（またはハッシュ）を渡しますが、Node 14.1.0 以降、クエリパラメータを持つ URL を `node --experimental-modules index.mjs?someURLInfo=5` という形式で読み込むとエラーになることに注意してください（この文脈では URL ではなくファイルとして扱われます）。

このようなファイル固有の引数の受け渡しは、アプリケーション全体の `location.href`（HTML ファイルパスの後にクエリ文字列やハッシュを追加したもの \[Node.js では `process.argv` を介して]）で使用されているものを補完する場合があります。

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat}}

## 関連情報

- {{JSxRef("Statements/import", "import")}}
- {{JSxRef("Statements/export", "export")}}
