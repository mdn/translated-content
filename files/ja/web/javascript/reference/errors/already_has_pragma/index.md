---
title: "Warning: -file- is being assigned a //# sourceMappingURL, but already has one"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
---

{{jsSidebar("Errors")}}

JavaScript の警告 "-file- is being assigned a //# sourceMappingURL, but already has one." は、ある JavaScript ソースに対してソースマップが 2 回以上指定されている場合に発生します。

## エラーメッセージ

```html
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## エラーの種類

警告です。 JavaScript の実行が停止されることはありません。

## エラーの原因

JavaScript ソースに対して、ソースマップが複数回指定されています。

より効率的にサーバから配信するため、しばしば JavaScript ソースの結合や縮小が行われます。 [ソースマップ](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)を使用すると、デバッガーは実行されているコードと元のソースファイルを対応付けできます。ソースマップを割り当てるには、コメントを使用するか JavaScript ファイルにヘッダーを設定するかの 2 つの方法があります。

## 例

### ソースマップの設定

ファイル内でコメントを使用してソースマップを設定します。

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

あるいは、JavaScript ファイルにヘッダーを設定することもできます。

```js example-good
X-SourceMap: /path/to/file.js.map
```

## 関連情報

- [ソースマップを使用する – Firefox ツールドキュメント](/ja/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Introduction to source maps – HTML5 rocks](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
