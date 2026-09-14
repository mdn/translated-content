---
title: Tree shaking (ツリーシェイキング)
slug: Glossary/Tree_shaking
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**ツリーシェイキング**とは実行されないコードを削除することで、JavaScript の文脈で利用される用語です。

ツリーシェイキングは ES2015 の [import](/ja/docs/Web/JavaScript/Reference/Statements/import) 文と [export](/ja/docs/Web/JavaScript/Reference/Statements/export) 文を利用して、エクスポートされたコードが他の JavaScript ファイルで利用されているかどうかを判定します。

モダンな JavaScript アプリケーションの開発では、[webpack](https://webpack.js.org/) や [Rollup](https://github.com/rollup/rollup) のようなモジュールバンドラーが複数の JavaScript ファイルを 1 つにまとめられます。この際にツリーシェイキングが行われます。ツリーシェイキングは、コードの構造を整理してファイルサイズを小さくできる、といった点で製品としてリリースする前の重要な処理となっています。

## 関連情報

- ["Benefits of dead code elimination during bundling"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayer's book: "Exploring JS: Modules"
- [Tree shaking implementation with webpack](https://webpack.js.org/guides/tree-shaking/)
