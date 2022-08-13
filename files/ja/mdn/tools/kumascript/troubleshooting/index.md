---
title: KumaScript エラーのトラブルシューティング
slug: MDN/Tools/KumaScript/Troubleshooting
tags:
  - KumaScript
  - MDN Meta
  - Tools
  - エラー
  - ガイド
translation_of: MDN/Tools/KumaScript/Troubleshooting
---
{{MDNSidebar}}

ページに出てくる [KumaScript](/ja/docs/MDN/Contribute/Tools/KumaScript) エラーは読み手にとって不快なもので、大きく赤い恐ろしげなボックスですが、幸運なことに MDN アカウントを持つユーザーは誰でも、ドキュメントを直してこうしたエラーを修正できます。ページがエラーを起こしたとき、[エラーのあるドキュメント](/ja/docs/with-errors)リストに追加されます。サイト編集者は通常このリストを検査して、エラーを発見、修正します。この記事では 4 種類の KumaScript エラーと、修正するための対策について詳しく見ます。

## DocumentParsingError

`DocumentParsingError` のエラーは KumaScript がドキュメント自体を理解できないときに表示されます。最もよくある原因は [macro](/ja/docs/MDN/Contribute/Content/Macros) 内の文法エラーです。

以下をチェックします:

- マクロ呼出しのつもりではない場合に中括弧を使った。
  - : If you need to write \\{ in a document without calling a macro you can escape it with a \ like this: `\\{`
- マクロパラメーターに特殊な文字を使った。
  - : If you need to use a " or a \ inside of a macro parameter they can be escaped with a \ like this: `\\` or `\"`
- マクロパラメーター間にカンマがない。
  - : Macro parameters need to be delimited by a comma (,) but not at the end of the list of parameters; for example `\{\{compat("html.elements.link", 2)}}`.
- マクロ呼び出し内に HTML タグがある
  - : If you apply styling to a macro, it will often break because, for example, a `</code>` tag may have appeared inside the macro code in the source code. Check the source view to see what's there, and remove any unnecessary styling.

<!---->

## TemplateLoadingError

`TemplateLoadingError` のエラーは KumaScript がページにどの [macro](/ja/docs/MDN/Contribute/Content/Macros) を取り込むか探せないときに表示されます。

以下をチェックします:

- マクロ名を誤ったり、マクロがリネームされた。
  - : [GitHub repo](https://github.com/mdn/kumascript/tree/master/macros) で既知のマクロのリストを確認できます。

> **Note:** **Tip:** You can make it quick and easy to jump to a specific macro by adding a [search keyword](http://kb.mozillazine.org/Using_keyword_searches) to Firefox. See {{SectionOnPage("/en-US/docs/MDN/Contribute/Tools/KumaScript", "Using search keywords to open template pages")}} for a step-by-step guide to creating the search keyword for this.

## TemplateExecutionError

`TemplateExecutionError` のエラーは KumaScript が macro 内のエラーに遭遇したときに表示されます。このエラーは管理者のみが修正できて、バグとして報告が必要となります。

エラーを報告する前に、これが修正済みでないことを確認します。KumaScript を強制的にページのフレッシュコピーを読み込ませることでできます。これには <kbd>Shift</kbd> を押しっぱなしでページ再読み込みします (Windows/Linux では <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>R</kbd> 、Mac では <kbd>Shift</kbd> + <kbd>Cmd</kbd> + <kbd>R</kbd> )。

エラーが続く場合、ページの URL とエラーのテキストをつけて[bug 報告します](https://bugzilla.mozilla.org/enter_bug.cgi?product=Mozilla_Developer_Network&component=General#h=detail|bug)。

## Error & Unknown

これは、エラーがこれ以外の種類にない場合のカテゴリーです。

修正をチェックして、[TemplateExecutionError](#TemplateExecutionError) に記述されるようなしつこいバグとして報告します。
