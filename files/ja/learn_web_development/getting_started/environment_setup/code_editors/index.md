---
title: コードエディター
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

> [!NOTE]
> この記事のコンテンツは現在不完全です。申し訳ありません！私たちは MDN ウェブ開発の学習の章の改善に努めており、間もなく、 ("TODO") とマークされた場所も完了する予定です。

以前、この道筋を読み進めている方は、コードエディターをインストールするよう指示しました。この記事では、コードエディターについてさらに詳しく見ていき、それがユーザーに何をもたらすかについての考えを提供します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステムに慣れていること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>どのようなコードエディターが利用でき、どのようなものが目的に適しているか。</li>
          <li>基本的なコードエディターでできること。</li>
          <li>コードエディターの拡張機能でできること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## どのようなコードエディターが利用できるか

Microsoft Word のようなバイナリファイルエディターは、コードの編集には適していません。必要なのは、プレーンテキストをきれいに処理し、出力できるものです。

OS の既定のプレーンテキストエディター、例えば macOS のテキストエディットや Windows のメモ帳も利用できますが、限界もあります。

本格的なコードエディター、例えば [Visual Studio Code](https://code.visualstudio.com/) （マルチプラットフォーム、無料）、Sublime Text（マルチプラットフォーム、無料ではない）、Notepad++（Windows、無料）などを使った方が良いでしょう。 Visual Studio Code は、私たちが最もよく使用しているエディターなので、お勧めします。他のコードエディターを使用したい場合は、それでも構いません。 Visual Studio Code とまったく同じように動作するわけではありませんが、多くの基本機能は似ているでしょう。

統合開発環境 (IDE) である Visual Studio（Windows、無料ではない）、NetBeans（マルチプラットフォーム、無料）、WebStorm（マルチプラットフォーム、無料ではない）は、単純なコードエディターよりも多くの機能を持っていますが、学習の段階では、必要以上に複雑になりがちです。

## 基本的なコードエディターの機能

- コードファイルを開き、編集すること。
- 構文の強調表示。
- 自動インデントやその他の簡単な構文修正。
- コードの補完やヘルプ。
- 検索と置換は、正規表現を使用できることが多く、機能性をより高めることができます（例えば、特定の文字列の先頭と末尾を残し、その間の文字列を置き換えるなど）。
- バージョン管理システムとの連携ができることが多い（[バージョン管理モジュール](/ja/docs/Learn_web_development/Core/Version_control)を参照）。

## 拡張機能でコードエディターを強化

- コード補完、強調表示、文法チェック、デバッグなどの言語固有の拡張機能。これは、JavaScript、Python、Go などの特定の言語、または [TypeScript](https://www.typescriptlang.org/) や [JSX](https://react.dev/learn/writing-markup-with-jsx) などの言語やフレームワークの抽象化に利用できます。
- GitHub/バージョン管理拡張機能（既定で提供されていない場合）。
- テーマと配色の拡張。
- コードスニペットや雛形生成ツールなどの生産性向上機能。
- GitHub Copilot のような AI によるコード提案ツール。 AI ツールは便利ですが、推論能力は持っておらず、誤解を招くような回答や、単に間違った回答を指定することがよくあるので注意が必要です。 AI による回答が正しいと想定するのではなく、他にもソースがある場合は、それらで検査/検証を行うべきです。

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
