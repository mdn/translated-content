---
title: "SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
---

{{jsSidebar("Errors")}}

JavaScript の警告 "Using `//@` to indicate sourceURL pragmas is deprecated. Use `//#` instead" は、 JavaScript の非推奨のソースマップ構文があったときに発生します。

## メッセージ

```
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## エラーの種類

{{jsxref("SyntaxError")}} が発生したという警告です。 JavaScript の実行は停止しません。

## エラーの原因

JavaScript のソースに非推奨のソースマップ構文があることです。

通常 JavaScript ソースは、サーバーからの提供を効率化するために、結合と最小化が行われます。[ソースマップ](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)があると、デバッガーが実行中のコードを元のソースファイルに対応付けすることができます。

IE の JScript エンジンは、`//@cc_on` の後でページが見つかると、条件付きコンパイルの有効化とみなします。 この IE での競合のために、ソースマップの仕様の構文が変更されました。IE の [@cc_on 文](https://msdn.microsoft.com/ja/library/8ka90k2e%28v=vs.94%29.aspx) はあまり知られていない機能ですが、[jQuery](https://bugs.jquery.com/ticket/13274) やそのほかのライブラリのソースマップを破壊します。

## 例

### 非推奨の構文

"@" 記号による構文は非推奨です。

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### 標準の構文

代わりに "#" 記号を使用してください。

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

あるいは、JavaScript ファイルに {{HTTPHeader("SourceMap")}} ヘッダーを設定して、コメントを全く表示しないようにすることもできます。

```js example-good
SourceMap: /path/to/file.js.map
```

## 関連情報

- [ソースマップの使用 – Firefox ツールドキュメント](/ja/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Introduction to source maps – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
- {{HTTPHeader("SourceMap")}}
