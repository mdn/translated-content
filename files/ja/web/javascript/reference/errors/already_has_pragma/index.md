---
title: "Warning: -file- is being assigned a //# sourceMappingURL, but already has one"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の警告 "-file- is being assigned a //# sourceMappingURL, but already has one." は、ある JavaScript ソースに対してソースマップが複数回指定されたときに発生します。

## エラーメッセージ

```plain
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## エラー型

警告です。JavaScript の実行は停止しません。

## エラーの原因

JavaScript のソースに対して、ソースマップが複数回指定されています。

JavaScript のソースは、サーバーから効率よく配信できるように、しばしば結合・最小化されます。[ソースマップ](https://developer.chrome.com/blog/sourcemaps/)<sup>(英語)</sup>を使うと、デバッガーは実行中のコードを元のソースファイルに対応付けできます。ソースマップの指定方法には、コメントを使う方法と、JavaScript ファイルにヘッダーを設定する方法があります。

## 例

### ソースマップの指定

ファイル内のコメントでソースマップを指定します。

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

あるいは、JavaScript ファイルにヘッダーを設定することもできます。

```http example-good
X-SourceMap: /path/to/file.js.map
```

## 関連情報

- Firefox ソースドキュメントの[ソースマップの使用](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)<sup>(英語)</sup>
- [JavaScript ソースマップの概要](https://developer.chrome.com/blog/sourcemaps/)<sup>(英語)</sup> (developer.chrome.com、2012 年)
