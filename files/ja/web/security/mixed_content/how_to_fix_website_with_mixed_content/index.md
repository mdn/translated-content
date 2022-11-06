---
title: 混在コンテンツでブロックされるウェブサイトを修正するには
slug: Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
---

[Firefox 23](/ja/docs/Mozilla/Firefox/Releases/23) より、 Firefox は[能動的な混在コンテンツ](/ja/docs/Security/MixedContent#Mixed_active_content)を既定でブロックします。この機能は Internet Explorer ([バージョン 9 以降](http://blogs.msdn.com/b/ie/archive/2011/06/23/internet-explorer-9-security-part-4-protecting-consumers-from-malicious-mixed-content.aspx)) や [Chrome](https://security.googleblog.com/2011/06/trying-to-end-mixed-scripting.html?m=1) でも採用されています。

このページでは、ウェブ開発者として知っておくべきことを説明します。

## ウェブサイトが壊れることも

ウェブサイトを HTTPS で配信している場合、ページ上にある [能動的な混在コンテンツ](/ja/docs/Security/MixedContent#Mixed_active_content)はすべて既定でブロックされます。結果として、ユーザーからはそのウェブサイトが壊れているように見えるかもしれません (iframe やプラグインが読み込まれないなど)。一方、[受動的な混在コンテンツ](/ja/docs/Security/MixedContent#Mixed_passive.2Fdisplay_content)は既定で表示されますが、このようなコンテンツをブロックするようにユーザーが設定することも可能です。

混在コンテンツは Chrome と Internet Explorer でもブロックされるため、ウェブサイトがこの２つのブラウザーで正常に動作していれば、混在コンテンツをブロックする Firefox でも正常に動作する可能性が高いと言えます。

いずれにしても、ウェブサイトが Firefox で動作しない原因を特定するには、[最新の Firefox](https://www.mozilla.org/ja/firefox) を利用すると良いでしょう。ウェブサイトを開いた上で、開発ツールの[ウェブコンソール](/ja/docs/Tools/Web_Console)を開き、「セキュリティ」のメッセージを有効にします。そうすると、混在コンテンツを引き起こしている原因が表示されます。また、 [SSL-check](http://www.jitbit.com/sslcheck/) や [Missing Padlock](https://www.missingpadlock.com) などの無料のオンライン型クローラーや、 [HTTPSChecker](https://httpschecker.net/how-it-works) といったデスクトップ型のクローラー、または [mcdetect](https://github.com/agis/mcdetect) などの CLI ツールを使用して、安全ではないコンテンツを指すリンクがないかどうか、ウェブサイトを再帰的に検索することが出来ます。もし混在コンテンツに関する警告が出なければ、ウェブサイトの品質は保たれていると言えます。今後も維持し続けてください。

## ウェブサイトを修正する方法

混合コンテンツが原因でブロックされないためには、すべてのコンテンツを (HTTP ではなく) HTTPS で提供することが重要です。

**自分が保有するドメインの場合**、すべてのコンテンツが HTTPS で配信されるようにリンクを修正します。多くの場合、既にコンテンツは HTTPS として配信できるようになっているため、単に "s" を追加してリンクの http\:// を https\:// に変更するだけで対応できます。

しかし、場合によっては、問題のメディアに対してパスが正しくない可能性があります。 これを解決するためには、 [linkchecker](https://linkchecker.github.io/linkchecker/) のようなオンラインツールとオフラインツール (オペレーティングシステムに依存します) があります。

**他者が保有するドメインの場合**、可能であれば HTTPS でウェブサイトに接続します。 HTTPS でアクセスできない場合は、 HTTPS を介してコンテンツを配信してもらえるよう、ドメインの管理者に連絡してみてください。

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}
