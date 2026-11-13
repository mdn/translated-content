---
title: Node.js
slug: Glossary/Node.js
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Node.js は、クロスプラットフォームの {{Glossary("JavaScript")}} 実行環境であり、サーバー側アプリケーションやネットワークアプリケーションを JavaScript で構築することができます。

## Node Package Manager (npm)

[npm](https://www.npmjs.com/) は、Node.js と一緒にダウンロード・同梱されるパッケージマネージャーです。そのコマンドライン (CLI) クライアント `npm` を使用すると、Node.js プロジェクトで使用するパッケージのダウンロード、設定、作成を行うことができます。ダウンロードしたパッケージは、[ES imports](/ja/docs/Web/JavaScript/Reference/Statements/import) や [CommonJS `require()`](https://en.wikipedia.org/wiki/CommonJS) を使用して、ダウンロード先の依存関係ディレクトリー `node_modules/` を明示せずにインポートできます。Node.js が[解決](https://nodejs.org/api/modules.html#loading-from-node_modules-folders)するため、インポート時に相対パスや絶対パスを指定する必要はありません。

npm でホストされているパッケージは、[https://registry.npmjs.org/](https://registry.npmjs.org/) のレジストリーからダウンロードされますが、CLI は互換性のある任意のインスタンスを使用するように設定できます。

## 関連情報

- [Node.js](https://ja.wikipedia.org/wiki/Node.js) - ウィキペディア
- [Node.js のウェブサイト](https://nodejs.org/ja/)
- [API reference documentation](https://nodejs.org/api/)
- [Guides](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [npm Documentation](https://docs.npmjs.com/)
