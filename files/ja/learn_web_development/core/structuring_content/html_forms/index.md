---
title: HTML におけるフォームとボタン
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

> [!NOTE]
> この記事のコンテンツは現在不完全です。申し訳ありません！私たちは MDN ウェブ開発の学習の章の改善に努めており、間もなく、 ("TODO") とマークされた場所も完了する予定です。

HTML フォームとボタンは、ユーザーとの操作上のやり取りを行うための強力なツールです。最も一般的な用途としては、ユーザーからのデータ収集やユーザーインターフェイスの制御などがあります。この記事では、フォームとボタンの基本について紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。 <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >見出しと段落</a
        >および<a href="/ja/docs/Learn_web_development/Core/Structuring_content/Lists"
          >リスト</a
        >などのテキストレベルの意味付け。<a href="/ja/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >構造化 HTML</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>ユーザーがウェブサイトと対話する主な手段は、リンクとともに、フォームとボタンであるという認識。</li>
          <li>よく使われる <code>&lt;button&gt;</code> の型。 <code>button</code>、<code>submit</code>、<code>reset</code>。</li>
          <li>よく使われる <code>&lt;input&gt;</code> の型。 <code>text</code>、<code>number</code>、<code>file</code>、<code>checkbox</code>、<code>radio</code>、<code>password</code>、<code>search</code>。</li>
          <li>よく使われる属性。 <code>name</code> や <code>value</code>。</li>
          <li>フォームのアクセシビリティの向上 — 正しい意味づけ、 <code>&lt;label&gt;</code> 要素、および <code>for</code> 属性。</li>
          <li>その他のコントロール型。<code>&lt;textarea&gt;</code>、<code>&lt;select&gt;</code>、<code>&lt;option&gt;</code>。</li>
          <li>クライアント側の検証の基本 — <code>required</code>、<code>min</code>、<code>max</code>、<code>minlength</code>、<code>maxlength</code>、<code>pattern</code>。</li>
          <li><code>&lt;form&gt;</code> 要素、そしてフォーム送信の基本。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> ここでは明示的に言及されていない入力型やフォーム機能が数多くあります。その目的は、ボタンやフォーム要素に関する一般的な概要を理解し、最も一般的なケースを学ぶことにあります。高度なケースや特殊なケースについては、必要に応じて、ウェブ開発者がキャリアを通じて常に学習を続ける一環として学ぶことができます。

## ボタン

TODO

## よく使われる入力型

TODO

## アクセシビリティのあるフォーム

- セマンティックHTMLの議論に戻りますが（2.2 優れた文書構造も参照）、正しい要素を正しい目的で使用することがなぜ重要なのかを理解する必要があります。例えば、フォームを送信するには `<button>` を使用し、`<button>` のように動作するようにプログラムされた `<div>` を使用してはいけません。
- ブラウザーが既定では `<button>` やフォーム要素にプログラムする機能と、それらがどれほど重要であるかを理解してください。例えば、キーボードのアクセシビリティ、フォーカスアウトライン、 AT が要素を識別し、その意味を伝えるための意味論的な意味を識別します。

## その他のコントロール型

TODO

## クライアント側フォーム検証

クライアント側フォーム検証は、サーバー側フォーム検証と並んで使用する、実にユーザビリティを向上させるものです。 これに代わるものではありません。

## `<form>` 要素

TODO

## スキルテスト

TODO

## まとめ

これで今回はすべてです。画像とキャプションについて詳しく説明しました。次の記事では、ギアを一段上げて、 HTML を使用してウェブページに動画と音声コンテンツを埋め込む方法について説明します。

## 関連情報

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
