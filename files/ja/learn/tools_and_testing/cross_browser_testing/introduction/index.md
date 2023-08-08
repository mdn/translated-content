---
title: はじめてのクロスブラウザーテスト
slug: Learn/Tools_and_testing/Cross_browser_testing/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}

この記事では (クロス) ブラウザーテストのトピックの概要を説明し、「クロスブラウザーテストとは何ですか？」、「発生する最も一般的な問題の種類は何ですか？」、「問題のテスト、特定、および修正のための主なアプローチは？」などの質問に答えながらモジュールを始めます。

| 前提知識: | [HTML](/ja/docs/Learn/HTML), [CSS](/ja/docs/Learn/CSS), [JavaScript](/ja/docs/Learn/JavaScript) 言語の基礎に精通していること。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 目的:     | クロスブラウザーテストに関する高レベルのコンセプトを理解する。                                                                 |

## クロスブラウザーテストとは？

クロスブラウザーテストは、作成した Web サイトと Web アプリケーションが許容できる数の Web ブラウザーにわたって動作することを確認することです。Web 開発者として、自分のプロジェクトが機能するだけでなく、使用しているブラウザー、デバイス、その他の補助ツールに関係なく、すべてのユーザに対して機能することを確認するのはあなたの責任です。あなたは考える必要があります：

- 普段自分が使っているブラウザー以外にも、数多くのブラウザーが存在します。また、人によっては少し古いバージョンを使用していて、最新の CSS や JavaScript 機能をサポートしていない場合もあります。
- ウェブにアクセスするデバイスは様々で、最新の高性能タブレットやスマートフォンから、スマート TV からのアクセス、廉価なタブレットや、少し古いフィーチャーフォンに搭載されている機能が限定されたブラウザーなどもあります。
- 障がいを持った人で、スクリーンリーダーのような補助技術を使ってウェブを使用していたり、マウスを使わずにキーボードだけでブラウズしたりする人もいます。

ユーザーの状況は一人ひとり異なってきます — 自分の Macbook Pro やハイエンドな Galaxy Nexus で動いても、すべてのユーザーにとって動作するとは限りません 。それを確認するには膨大な数のテストが必要になってきます。

> **メモ:** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) では、人々が使っているさまざまなブラウザーの種類やそれぞれのマーケットシェア、それに伴うクロスブラウザーの懸念点などが説明されています。

ここでいくつかの用語を説明します。最初に、「クロスブラウザーでの動作」と言う時、様々なブラウザー間で受け入れられるユーザー体験が提供されることを言います。サイトがすべてのブラウザーでまったく同一の体験が提供していなくても、コア機能がいくつかの方法で受け入れられる限りは、潜在的に OK です。モダンブラウザーではアニメーションや 3D や目立つものがあり、いっぽう古いブラウザーでは平坦なグラフィックで同じ情報を表すだけのこともあるでしょう。サイト所有者が満足している限り、あなたの仕事は完了です。

その一方で、サイトが視力のあるユーザーにとって動作していても、視覚障がいのあるユーザーにとって、スクリーンリーダーアプリケーションがそこにある情報を読み取れないため完全にアクセスできない場合は、OK ではありません。

2 つ目に、「受け入れられる数のウェブブラウザー間で」と言った時、世界中のブラウザーの 100% の意味ではありません — これは不可能です。ユーザーが使うブラウザーや端末の情報を呼び出すことができます (このシリーズの 2 つ目の記事で見ていきましょう — [Gotta test 'em all?](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#Gotta_test_%27em_all)を見てください)が、すべてを保証することはできません。ウェブ開発者としては、ある範囲のブラウザーと端末にてコードが完全に動作することをサイトオーナーと同意しておく必要があります。しかしそれを超えて、その他のブラウザーでコンテンツを使う機会をできるだけ与えられるよう防衛的なコードを書いておく必要があります。

> **メモ:** このモジュールの後の方でも、防衛的なコードをカバーします。

## なぜクロスブラウザー問題が起きるのか？

クロスブラウザー問題が生じる原因はたくさんあります。そして、本記事ではブラウザー・端末・ブラウザーの設定によって生じる問題について述べます。クロスブラウザーの問題に取り組む前に、ソース中のバグを解決するべきです（必要に応じて前述の[Debugging HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/ja/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS), and [What went wrong? Troubleshooting JavaScript](/ja/docs/Learn/JavaScript/First_steps/What_went_wrong)の記事を見て記憶を呼び覚ましてください）。

クロスブラウザー問題が発生する原因は主に以下になります。

- 時々ブラウザーにはバグがあったり、異なる仕様で機能が実装されています。この状況はかつてよりはましになっています。1990 年代に IE4 と Netscape4 がブラウザーの支配権を争っっていたとき、ブラウザー会社は意図的に競争優位性を得るために互いに異なる実装をしていました。これは開発者にとってはたまったもんじゃありませんでした。今日ではそのときに比べてはブラウザーを取り巻く環境は遥かにましになっています。しかし、それでもブラウザー間での違いやバグは時々あります。
- ブラウザー間で機能についてのサポートのレベルが異なる場合があります。これは実装されたばかりの最先端の機能を使おうとした場合や新しい機能が開発されるよりずっと前に開発終了になったものすごく古いブラウザーをサポートする場合には避けることはできません。たとえば、自分のサイトで JavaScript 最新の機能を使いたい場合、これらの機能は古いブラウザーでは動作しないかもしれません。もし古いブラウザーをサポートする必要があるならそれらの機能を使わないかクロスコンパイラを使って古い書き方に変換する必要があります。
- 端末によっては制約があり、それによってウェブサイトの表示が遅くなったり表示がおかしくなったりします。たとえば、デスクトップ PC でよく見えるように意図されたサイトは、携帯端末ではひょっとすると小さく読むのが難しかったりするかもしれません。また大量のアニメーションを読み込むサイトは、ハイスペックのタブレットでは大丈夫かもしれませんが、低スペックの端末ではカクつくかもしれません。

上記の他にも理由はあります。

後述の記事では、クロスブラウザー問題についてよくある問題について掘り下げ、解決策を提示します。

## クロスブラウザーテストの作業手順

All of this cross browser testing business may sound time consuming and scary, but it needn't be — you just need to plan carefully for it, and make sure you do enough testing in the right places to make sure you don't run into unexpected problems. If you are working on a large project, you should be testing it regularly, to make sure that new features work for your target audience, and that new additions to the code don't break old features that were previously working.

If you leave all the testing to the end of a project, any bugs you uncover will be a lot more expensive and time consuming to fix than if you uncover them and fix them as you go along.

The workflow for testing and bug fixes on a project can be broken down into roughly the following four phases (this is only very rough — different people may do things quite differently to this):

**Initial planning > Development > Testing/discovery > Fixes/iteration**

Steps 2–4 will tend to be repeated as many times as necessary to get all of the implementation done. We will look at the different parts of the testing process in much greater detail in subsequent articles, but for now let's just summarize what may occur in each step.

### 初期計画

In the initial planning phase, you will probably have several planning meetings with the site owner/client (this might be your boss, or someone from an external company you are building a web site for), in which you determine exactly what the web site should be — what content and functionality should it have, what should it look like, etc. At this point you'll also want to know how much time you have to develop the site — what is their deadline, and how much are they going to pay you for your work? We won't go into much detail about this, but cross-browser issues can have a serious effect on such planning.

Once you've got an idea of the required featureset, and what technologies you will likely build these features with, you should start exploring the target audience — what browsers, devices, etc. will the target audience for this site be using? The client might already have data about this from previous research they've done, e.g. from other web sites they own, or from previous versions of the web site you are now working on. If not, you will be able to get a good idea by looking at other sources, such as usage stats for competitors, or countries the site will be serving. You can also use a bit of intuition.

So for example, you might be building an e-commerce site that serves customers in North America. the site should work entirely in the last few versions of the most popular desktop and mobile (iOS, Android, Windows phone) browsers — this should include Chrome (and Opera as it is based on the same rendering engine as Chrome), Firefox, IE/Edge, and Safari. It should also provide an acceptable experience on IE 8 and 9, and be accessible with WCAG AA compliance.

Now you know your target testing platforms, you should go back and review the required featureset and what technologies you are going to use. For example, if the e-commerce site owner wants a WebGL-powered 3D tour of each product built into the product pages, they will need to accept that this just won't work in IE versions before 11. You'd have to agree to provide a version of the site without this feature to users of older IE versions.

You should compile a list of the potential problem areas.

> **メモ:** You can find browser support information for technologies by looking up the different features on MDN — the site you're on! You should also consult [caniuse.com](https://caniuse.com/), for some further useful details.

Once you've agreed on these details, you can go ahead and start developing the site.

### 開発

Now on to the development of the site. You should split the different parts of the development into modules, for example you might split the different site areas up — home page, product page, shopping cart, payment workflow, etc. You might then further subdivide these — implement common site header and footer, implement product page detail view, implement persistent shopping cart widget, etc.

There are multiple general strategies to cross browser development, for example:

- Get all the functionality working as closely as possible in all target browsers. This may involve writing different code paths that reproduce functionality in different ways aimed at different browsers, or using a {{glossary("Polyfill")}} to mimic any missing support using JavaScript or other technologies, or using a library that allows you to write a single bit of code and then does different things in the background depending on what the browser supports.
- Accept that some things aren't going to work the same on all browsers, and provide different (acceptable) solutions in browsers that don't support the full functionality. Sometimes this is inevitable due to device constraints — a cinema widescreen isn't going to give the same visual experience as a 4" mobile screen, regardless of how you program your site.
- Accept that your site just isn't going to work in some older browsers, and move on. This is OK, provided your client/userbase is OK with it.

Normally your development will involve a combination of the above three approaches. The most important thing is that you test each small part before committing it — don't leave all the testing till the end!

### テスト/発見

After each implementation phase, you will need to test the new functionality. To start with, you should make sure there are no general issues with your code that are stopping your feature from working:

1. Test it in a couple of stable browsers on your system, like Firefox, Safari, Chrome, or IE/Edge.
2. Do some low fi accessibility testing, such as trying to use your site with only the keyboard, or using your site via a screen reader to see if it is navigable.
3. Test on a mobile platform, such as Android or iOS.

At this point, fix any problems you find with your new code.

Next, you should try expanding your list of test browsers to a full list of target audience browsers and start concentrating on weeding out cross browser issues (see the next article for more information on [determining your target browsers](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#Gotta_test_%27em_all)). For example:

- Try to test the latest change on all the modern desktop browsers you can — including Firefox, Chrome, Opera, IE, Edge, and Safari on desktop (Mac, Windows, and Linux, ideally).
- Test it in common phone and tablet browsers (e.g. iOS Safari on iPhone/iPad, Chrome and Firefox on iPhone/iPad/Android),
- Also do tests in any other browsers you have included inside your target list.

The most low fi option is to just do all the testing you can by yourself (pulling in team mates to help out if you are working in a team). You should try to test it on real physical devices where possible.

If you haven't got the means to test all those different browser, operating system, and device combinations on physical hardware, you can also make use of emulators (emulate a device using software on your desktop computer) and virtual machines (software that allows you to emulate multiple operating system/software combinations on your desktop computer). This is a very popular choice, especially in some circumstances — for example, Windows doesn't let you have multiple versions of Windows installed simulataneously on the same machine, so using multiple virtual machines is often the only option here.

Another option is user groups — using a group of people outside your development team to test your site. This could be a group of friends or family, a group of other employees, a class at a local university, or a professional user testing setup, where people are paid to test out your site and provide results.

Finally, you can get smarter with your testing using auditing or automation tools; this is a sensible choice as your projects get bigger, as doing all this testing by hand can start to take a really long time. You can set up your own testing automation system ([Selenium](http://www.seleniumhq.org/) being the popular app of choice) that could for example load your site in a number of different browsers, and:

- see if a button click causes something to happen successfully (like for example, a map displaying), displaying the results once the tests are completed
- take a screenshot of each, allowing you to see if a layout is consistent across the different browsers.

You can also go further than this, if wished. There are commercial tools available such as [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/), [LambdaTest](https://www.lambdatest.com/), [TestingBot](https://testingbot.com), and [CrossBrowserTesting](https://crossbrowsertesting.com) that do this kind of thing for you, without you having to worry about the setup, if you wish to invest some money in your testing. It is also possible to set up an environment that automatically runs tests for you, and then only lets you check in your changes to the central code repository if the tests still pass.

#### Testing on prerelease browsers

It is often a good idea to test on prerelease versions of browsers; see the following links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Edge Insider Preview](https://insider.windows.com/)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/browser/canary.html)
- [Opera Developer](http://www.opera.com/computer/beta)

This is especially prevalent if you are using very new technologies in your site, and you want to test against the latest implementations, or if you are coming across a bug in the latest release version of a browser, and you want to see if the browser's developers have fixed the bug in a newer version.

### 修正/繰り返し

Once you've discovered a bug, you need to try to fix it.

The first thing to do is to narrow down where the bug occurs as much as possible. Get as much information as you can from the person reporting the bug — what platform(s), device(s), browser version(s), etc. Try it on similar configurations (e.g. the same browser version on different desktop platforms, or a few different versions of the same browser on the same platform) to see how widely the bug persists.

It might not be your fault — if a bug exists in a browser, then hopefully the vendor will rapidly fix it. It might have already been fixed — for example if a bug is present in Firefox release 49, but it is no longer there in Firefox Nightly (version 52), then they have fixed it. If it is not fixed, then you may want to file a bug (see [Reporting bugs](#reporting_bugs), below).

If it is your fault, you need to fix it! Finding out the cause of the bug involves the same strategy as any web development bug (again, see [Debugging HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/ja/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS), and [What went wrong? Troubleshooting JavaScript](/ja/docs/Learn/JavaScript/First_steps/What_went_wrong)). Once you've discovered what is causing your bug, you need to decide how to work around it in the particular browser it is causing problems in — you can't just change the problem code outright, as this may break the code in other browsers. The general approach is usually to fork the code in some way, for example use JavaScript feature detection code to detect situations in which a problem feature doesn't work, and run some different code in those cases that does work.

Once a fix has been made, you'll want to repeat your testing process to make sure your fix is working OK, and hasn't caused the site to break in other places or in other browsers.

## バグを報告する

ブラウザーでバグを発見した場合は、上記で述べたことを繰り返しますが、それらを報告する必要があります。

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [EdgeHTML issue tracker](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://bugs.chromium.org/p/chromium/issues/list)
- [Opera](https://bugs.opera.com/wizard/desktop)

## 要約

この記事では、クロスブラウザーテストに関して知っておくべき最も大事な概念について、高位の理解を与えてきました。この知識を備えたことで、クロスブラウザーテストの戦略について学び始める準備ができています。

{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}
