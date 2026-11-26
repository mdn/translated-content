---
title: "SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の警告 "Using `//@` to indicate sourceURL pragmas is deprecated. Use `//#` instead" は、JavaScript のソースで非推奨のソースマップ構文が使われたときに発生します。

## エラーメッセージ

```plain
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## エラー型

{{jsxref("SyntaxError")}} が発生したことを示す警告です。JavaScript の実行は停止しません。

## エラーの原因

JavaScript のソースに非推奨のソースマップ構文があります。

JavaScript のソースは、サーバーから効率よく配信できるように結合・最小化されることがよくあります。[ソースマップ](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)<sup>(英語)</sup>があると、デバッガーは実行中のコードを元のソースファイルに対応付けできます。

ソースマップ仕様では、IE との競合のために構文が変更されました。IE の JScript エンジンでは、ページ内の `//@cc_on` が条件付きコンパイルを有効にする構文として解釈されます。IE の[条件付きコンパイルコメント](https://stackoverflow.com/questions/24473882/what-does-this-comment-cc-on-0-do-inside-an-if-statement-in-javascript)<sup>(英語)</sup>はあまり知られていない機能ですが、[jQuery](https://bugs.jquery.com/ticket/13274/)<sup>(英語)</sup>などのライブラリーでソースマップを壊す原因となりました。

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

あるいは、JavaScript ファイルに {{HTTPHeader("SourceMap")}} ヘッダーを設定すれば、コメントを付けずに済みます。

```http example-good
SourceMap: /path/to/file.js.map
```

## 関連情報

- [ソースマップの使用](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)<sup>(英語)</sup>
- [Introduction to JavaScript source maps](https://developer.chrome.com/blog/sourcemaps/)<sup>(英語)</sup>
- {{HTTPHeader("SourceMap")}}
