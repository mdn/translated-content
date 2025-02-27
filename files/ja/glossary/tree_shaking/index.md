---
title: Tree shaking
slug: Glossary/Tree_shaking
---

{{GlossarySidebar}}

**Tree shaking** とは実行されないコードを削除することで、JavaScript の文脈で利用される用語です。

Tree shaking は ES2015 の [import](/ja/docs/Web/JavaScript/Reference/Statements/import) 文と [export](/ja/docs/Web/JavaScript/Reference/Statements/export) 文を利用して、エクスポートされたコードが他の JavaScript ファイルで利用されているかどうかを判定します。

モダンな JavaScript アプリケーションの開発では、[webpack](https://webpack.js.org/) や [Rollup](https://github.com/rollup/rollup) のようなモジュールバンドラーが複数の JavaScript ファイルを 1 つにまとめられます。この際に tree shaking が行われます。Tree shaking は、コードの構造を整理してファイルサイズを小さくできる、といった点で製品としてリリースする前の重要な処理となっています。

## 詳細情報

#### 一般的な知識

- ["Benefits of dead code elimination during bundling"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayer's book: "Exploring JS: Modules"

#### 技術的なレファレンス

- [Tree shaking implementation with webpack](https://webpack.js.org/guides/tree-shaking/)
