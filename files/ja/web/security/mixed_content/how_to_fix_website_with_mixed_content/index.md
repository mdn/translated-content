---
title: 混在コンテンツでブロックされるウェブサイトを修正するには
slug: Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
tags:
  - HTTPS
  - Security
translation_of: Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
---
<p><a href="/ja/docs/Mozilla/Firefox/Releases/23">Firefox 23</a> より、 Firefox は<a href="/ja/docs/Security/MixedContent#Mixed_active_content">能動的な混在コンテンツ</a>を既定でブロックします。この機能は Internet Explorer (<a href="http://blogs.msdn.com/b/ie/archive/2011/06/23/internet-explorer-9-security-part-4-protecting-consumers-from-malicious-mixed-content.aspx">バージョン 9 以降</a>) や <a href="https://security.googleblog.com/2011/06/trying-to-end-mixed-scripting.html?m=1">Chrome</a> でも採用されています。</p>

<p>このページでは、ウェブ開発者として知っておくべきことを説明します。</p>

<h2 id="Your_website_may_break" name="Your_website_may_break">ウェブサイトが壊れることも</h2>

<p>ウェブサイトを HTTPS で配信している場合、ページ上にある <a href="/ja/docs/Security/MixedContent#Mixed_active_content">能動的な混在コンテンツ</a>はすべて既定でブロックされます。結果として、ユーザーからはそのウェブサイトが壊れているように見えるかもしれません (iframe やプラグインが読み込まれないなど)。一方、<a href="/ja/docs/Security/MixedContent#Mixed_passive.2Fdisplay_content">受動的な混在コンテンツ</a>は既定で表示されますが、このようなコンテンツをブロックするようにユーザーが設定することも可能です。</p>

<p>混在コンテンツは Chrome と Internet Explorer でもブロックされるため、ウェブサイトがこの２つのブラウザーで正常に動作していれば、混在コンテンツをブロックする Firefox でも正常に動作する可能性が高いと言えます。</p>

<p>いずれにしても、ウェブサイトが Firefox で動作しない原因を特定するには、<a href="https://www.mozilla.org/ja/firefox">最新の Firefox</a> を利用すると良いでしょう。ウェブサイトを開いた上で、開発ツールの<a href="/ja/docs/Tools/Web_Console">ウェブコンソール</a>を開き、「セキュリティ」のメッセージを有効にします。そうすると、混在コンテンツを引き起こしている原因が表示されます。また、 <a href="http://www.jitbit.com/sslcheck/">SSL-check</a> や <a href="https://www.missingpadlock.com">Missing Padlock</a> などの無料のオンライン型クローラーや、 <a href="https://httpschecker.net/how-it-works">HTTPSChecker</a> といったデスクトップ型のクローラー、または <a href="https://github.com/agis/mcdetect">mcdetect</a> などの CLI ツールを使用して、安全ではないコンテンツを指すリンクがないかどうか、ウェブサイトを再帰的に検索することが出来ます。もし混在コンテンツに関する警告が出なければ、ウェブサイトの品質は保たれていると言えます。今後も維持し続けてください。</p>

<h2 id="How_to_fix_your_website" name="How_to_fix_your_website">ウェブサイトを修正する方法</h2>

<p>混合コンテンツが原因でブロックされないためには、すべてのコンテンツを (HTTP ではなく) HTTPS で提供することが重要です。</p>

<p><strong>自分が保有するドメインの場合</strong>、すべてのコンテンツが HTTPS で配信されるようにリンクを修正します。多くの場合、既にコンテンツは HTTPS として配信できるようになっているため、単に "s" を追加してリンクの http:// を https:// に変更するだけで対応できます。</p>

<p>しかし、場合によっては、問題のメディアに対してパスが正しくない可能性があります。 これを解決するためには、 <a href="https://linkchecker.github.io/linkchecker/">linkchecker</a> のようなオンラインツールとオフラインツール (オペレーティングシステムに依存します) があります。</p>

<p><strong>他者が保有するドメインの場合</strong>、可能であれば HTTPS でウェブサイトに接続します。 HTTPS でアクセスできない場合は、 HTTPS を介してコンテンツを配信してもらえるよう、ドメインの管理者に連絡してみてください。</p>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}</p>
