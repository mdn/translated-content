---
title: 堅牢
slug: Web/Accessibility/Guides/Understanding_WCAG/Robust
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

この記事では、ウェブコンテンツ・アクセシビリティガイドライン（WCAG）2.0 および 2.1 の**堅牢**原則に概説されている達成基準に準拠するようにウェブコンテンツを作成する方法についての実用的なアドバイスを提供します。 堅牢とは、支援技術を含む多種多様なユーザーエージェントによって確実に解釈されることができるほど十分に堅牢でなければならないと述べています。 これは通常、ウェブ標準に準拠し、[厳密にテスト](/ja/docs/Learn_web_development/Extensions/Testing)することによって実現できます。

> [!NOTE]
> W3C の堅牢の定義とそのガイドラインおよび達成基準を読むには、[原則 4: 堅牢 — コンテンツは、支援技術を含むさまざまなユーザーエージェントによって確実に解釈されるよう十分に堅牢である必要があります](https://w3c.github.io/wcag/guidelines/22/#robust)（英語）を参照してください。

## ガイドライン 4.1 — 互換性: 支援技術を含む現在および将来のユーザーエージェントとの互換性を最大化する

このガイドラインは、現在のユーザーエージェント（例えば、ブラウザー）だけでなく将来のものともコンテンツをできる限り互換性を持たせることに焦点を当てています。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">達成基準</th>
      <th scope="col">基準への準拠方法</th>
      <th scope="col">実用的なリソース</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.1.1 構文解析 (A)</td>
      <td>
        <p>
          コンテンツは、ブラウザーやスクリーンリーダーのような他のユーザーエージェントによって正常に構文解析されるように、整形式 (well-formed) にするべきです。
        </p>
        <p>
          この基準に合格するには、HTML ができるだけ妥当 (valid) であることを確認してください。マークアップを検証するために
          <a href="https://validator.w3.org/">W3C validator</a>（英語）を使用してください。
        </p>
      </td>
      <td>
        実用的なガイドについては、
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML"
          >HTML のデバッグ</a
        >を参照してください。
      </td>
    </tr>
    <tr>
      <td>4.1.2 名前、役割、値 (A)</td>
      <td>
        <p>
          ユーザーインターフェイス・コンポーネント（例えば、フォーム入力、ボタン、リンクなど）の名前と役割（role、ロール）はプログラム的に決定可能であるべきです。
        </p>
        <p>
          意図された目的のために意味論の要素を正しく使用するとき、この基準に自動的に合格するはずです。 カスタムコンポーネントをスクリプト化するときは、例えば、晴眼でマウスを使うユーザーだけでなく、スクリーンリーダーのユーザー、キーボードのみのユーザーなども、コントロールが解釈されて意図したとおりに使用できるようにするために、WAI-ARIA のロールおよびその他の機能を使用する必要があります。
        </p>
      </td>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: アクセシビリティの良き基本</a
        >および<a href="/ja/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics"
          >WAI-ARIA の基本</a
        >を参照してください。
      </td>
    </tr>
    <tr>
      <td>
        4.1.3 ステータスメッセージ (AA)
      </td>
      <td>
        <p>
          支援技術のユーザーは、ページに追加された新しいステータスメッセージを認識します。
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
          >Understanding Status Messages</a
        >（英語）
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> [ガイドライン 4.1: 互換性: 支援技術を含む現在および将来のユーザーエージェントとの互換性を最大化する](https://w3c.github.io/wcag/guidelines/22/#compatible)（英語）に関する WCAG の説明も参照してください。

## 関連情報

- [WCAG](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [知覚可能](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [操作可能](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [理解可能](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. 堅牢
