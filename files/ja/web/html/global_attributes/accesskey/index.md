---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`accesskey`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、現在の要素のショートカットキーを生成するためのヒントを与えます。この属性は空白で区切った表示可能な文字（キーボードから生成できるアクセント付き文字やその他の文字を含む）から成ります。

{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

> **メモ:** WHATWG の仕様書では、空白区切りの複数の文字を指定することができ、ブラウザーは対応する最初の一つを使用するとしています。しかし、これは多くのブラウザーでは動作しません。 IE や Edge は、他のコマンドと競合がない問題なく使用することができる最初の 1 つを使用します。

アクセスキーを有効にする方法は、ブラウザーやプラットフォームによって異なります。

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2">
        <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        Firefox 57 以降では <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>key</em></kbd> または <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />Firefox 14 以降では <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />Firefox 13 以前では <kbd>Control</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>N/A</td>
      <td rowspan="3">
        <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>key</em></kbd
        ><br /><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Google Chrome</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Safari</th>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <th>Opera 15+</th>
      <td colspan="2">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 12</th>
      <td colspan="3">
        <kbd>Shift</kbd> + <kbd>Esc</kbd> で、accesskey
        でアクセスできるコンテンツの一覧を開きます。そして
        <kbd><em>key</em></kbd> を押すと、該当項目を選択できます。
      </td>
    </tr>
  </tbody>
</table>

## アクセシビリティの考慮

`accesskey` 属性は、ブラウザーの対応が貧弱であることに加え、数々の考慮事項があります。

- `accesskey` の値はシステムやブラウザーのショートカットキーや支援技術の機能と競合する可能性があります。あるオペレーティングシステム、支援技術、ブラウザーの組み合わせで動作しても、他の組み合わせでは動作しない可能性があります。
- 特に国際化を考慮している場合、特定の `accesskey` の値が特定のキーボードに存在しないことがあります。そのため、特定の言語において更なる問題が発生する可能性があります。
- 数字に依存した `accesskey` の値は、認知障碍を持つ人に混乱を招く可能性があります。数字には、起動する機能と論理的な関連性がありません。
- `accesskey` が存在することをユーザーに通知することで、ユーザーはその機能を認識します。システムがその機能について知らされる方法がない場合は、 `accesskey` が誤って有効になる可能性があります。

これらの問題のため、一般用途のウェブサイトやウェブアプリの多くでは、 `accesskey` を使用しないよう一般的にアドバイスされています。

- [WebAIM: Keyboard Accessibility - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.accessKey")}}
- {{domxref("HTMLElement.accessKeyLabel")}}
- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- [`aria-keyshortcuts`](https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts)
