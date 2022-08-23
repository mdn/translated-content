---
title: Firefox のプラグインロードマップ
slug: conflicting/Glossary/Plugin
translation_of: Plugins/Roadmap
original_slug: Plugins/Roadmap
---
プラグインは、Firefox ユーザーのセキュリティとパフォーマンスの問題があります。 NPAPI プラグインは時代遅れの技術であり、Mozilla はプラグインを必要としないウェブに移行しています。最後まで残った NPAPI プラグインである Adobe Flash は、サポート終了の計画を[発表](http://blogs.adobe.com/conversations/2017/07/adobe-flash-update.html)しました。 Flash からの移行をサポートするために、Firefox は他のブラウザーと連携して、Flash の利用を少なくするように徐々にかつ慎重に進めています。以下は、Firefox のプラグインに対する過去および将来のサポートのロードマップです。

### スケジュール

- 2016 年 6 月
  - : 2014 年 6 月の Firefox 47 以降、Adobe Flash 以外のすべてのプラグインは [click-to-activate](/ja/docs/Plugins/Flash_Activation:_Browser_Comparison)です。ユーザーは各プラグインを有効にするサイトを選択します。さらに、Windows 用 64 ビット Firefox は Flash プラグインのみをサポートしています。
- 2017 年 3 月
  - : 2017 年 3 月の Firefox 52 以降、Adobe Flash 以外のプラグインは Firefox ではサポートされなくなりました。 Firefox [Extended Support Release 52](https://www.mozilla.org/ja/firefox/organizations/faq/)は、2018 年の初めまで非 Flash プラグインを引き続きサポートします。
- 2017 年 8 月

  - : 2017 年 8 月の Firefox 55 以降、Flash プラグインを有効にするサイトを[選択](/ja/docs/Plugins/Flash_Activation:_Browser_Comparison)する必要があります。ユーザーは、サイトごとの Flash 設定を記憶させることができます。_この変更は、2017 年 8 月から 9 月の間に徐々に展開されます。_

    セキュリティとパフォーマンスを向上させるため、Mozilla はプラグインを使用できない[サイトのリストを維持します](/ja/docs/Plugins/Blocking_By_Domain)。

- 2017 年 9 月
  - : 2017 年 9 月の Firefox 56 以降、Android 用 Firefox はプラグインのサポートをすべて削除します ({{bug(1381916)}})。
- 2018 年後半
  - : 2018 年後半、Firefox は Flash の設定を記憶しなくなり、ユーザーは Flash をアクティブにするかどうかを各セッションごとに選択する必要があります。
- 2019 年前半
  - : 2019 年の早い段階で、Firefox は引き続き Flash を使用しているサイトでユーザーに警告を表示します。
- 2019 年
  - : ユーザーへの警告の数ヶ月後、Firefox はデフォルトで Flash プラグインを無効にします。ユーザーに Flash を有効にするよう指示しませんが、ブラウザー設定を使用して特定のサイトで Flash を有効にすることは可能です。
- 2020 年
  - : 2020 年の初めに、Flash のサポートは Firefox のコンシューマ版から完全に削除されます。Firefox 拡張サポートリリース (ESR) は、2020 年末まで Flash のサポートを継続します。
- 2021 年
  - : Adobe が 2020 年末に Flash のセキュリティアップデートの出荷を停止したとき、Firefox はプラグインの読み込みを拒否します。

### 関連情報

#### Mozilla Firefox

- October 2015 - [NPAPI Plugins in Firefox](https://blog.mozilla.org/futurereleases/2015/10/08/npapi-plugins-in-firefox/)
- July 2016 - [Reducing Adobe Flash Usage in Firefox](https://blog.mozilla.org/futurereleases/2016/07/20/reducing-adobe-flash-usage-in-firefox/)
- July 2017 - [Firefox Roadmap for Flash End-of-Life](https://blog.mozilla.org/futurereleases/2017/07/25/firefox-roadmap-flash-end-life/)

#### Adobe Flash

- November 2015 - [Flash, HTML5 and Open Web Standards](https://blogs.adobe.com/conversations/2015/11/flash-html5-and-open-web-standards.html)
- July 2017 - [Flash & the Future of Interactive Content](http://blogs.adobe.com/conversations/2017/07/adobe-flash-update.html)

#### Google Chrome

- [Flash Roadmap](https://sites.google.com/a/chromium.org/dev/flash-roadmap)
- Sep 2013 - [Saying Goodbye to Our Old Friend NPAPI](https://blog.chromium.org/2013/09/saying-goodbye-to-our-old-friend-npapi.html)
- May 2014 - [Update on NPAPI Deprecation](https://blog.chromium.org/2014/05/update-on-npapi-deprecation.html)
- November 2014 - [The Final Countdown for NPAPI](https://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html)
- August 2016 - [Flash and Chrome](https://blog.google/products/chrome/flash-and-chrome/)
- December 2016 - [Roll-out plan for HTML5 by Default](https://blog.chromium.org/2016/12/roll-out-plan-for-html5-by-default.html)
- July 2017 - [Saying Goodbye to Flash in Chrome](https://www.blog.google/products/chrome/saying-goodbye-flash-chrome/)

#### Microsoft Edge および Internet Explorer

- April 2016 - [Putting Users in Control of Flash](https://blogs.windows.com/msedgedev/2016/04/07/putting-users-in-control-of-flash/)
- December 2016 - [Extending User Control of Flash with Click-to-Run](https://blogs.windows.com/msedgedev/2016/12/14/edge-flash-click-run/)
- July 2017 - [Flash on Windows Timeline](https://blogs.windows.com/msedgedev/2017/07/25/flash-on-windows-timeline/) (日本語リソース: [Internet Explorer および Microsoft Edge での Flash の今後の対応予定について – Japan IE Support Team Blog](https://blogs.technet.microsoft.com/jpieblog/2018/03/23/flash-roadmap/))

#### Apple Safari

- June 2016 - [Next Steps for Legacy Plug-ins](https://webkit.org/blog/6589/next-steps-for-legacy-plug-ins/)
- July 2017 - [Adobe Announces Flash Distribution and Updates to End](https://webkit.org/blog/7839/adobe-announces-flash-distribution-and-updates-to-end/)
