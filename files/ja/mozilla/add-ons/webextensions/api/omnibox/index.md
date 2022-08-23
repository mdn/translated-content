---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
translation_of: Mozilla/Add-ons/WebExtensions/API/omnibox
---
<div>{{AddonSidebar}}</div>

<p>拡張機能に、ユーザーがアドレスバーに入力した時のカスタマイズされた振る舞いを有効にします。</p>

<p>ユーザーがブラウザーのアドレスバーにフォーカスした時、ブラウザーは、タイプした内容に応じたサジェストページを含んだドロップダウンリストを表示します。これはユーザーにとって、例えば履歴やブックマークからのページにすぐにアクセスできる方法を与えます。</p>

<p>omnibox API は、ユーザーが拡張機能で定義されたキーワードを入力した時に、ドロップダウンに表示されるサジェストを拡張機能がカスタマイズする方法を提供します。これは下記のように動作します:</p>

<ol>
 <li>まず、拡張機能は <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> ファイルに "<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox">omnibox</a>" キーを入れないといけません、ここでキーワードを定義します。</li>
 <li>ユーザーがアドレスバーにフォーカスしてキーワードに続いてスペースをタイプした時、拡張機能は {{WebExtAPIRef("omnibox.onInputStarted")}} イベントを受け取ります。</li>
 <li>オプションとして、拡張機能は {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} を呼んでアドレスバーのドロップダウンに最初に表示されるサジェストを定義します。</li>
 <li>ユーザーがこの後にも文字をタイプし続けると、拡張機能は {{WebExtAPIRef("omnibox.onInputChanged")}} イベントを受け取ります。イベントリスナーはユーザーがタイプした現在の値を受けて、アドレスバーのドロップダウンにサジェストを生成できます。拡張機能が {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} を使ったデフォルトのサジェストをセットした場合、これがドロップダウンの最初に出てきます。</li>
 <li>ユーザーがサジェストを受け入れたら、拡張機能は {{WebExtAPIRef("omnibox.onInputEntered")}} イベントを受け取ります。イベントリスナーは受け入れられたサジェストを受け取ります。</li>
 <li>ユーザーがドロップダウンを止めたら、拡張機能は {{WebExtAPIRef("omnibox.onInputCancelled")}} イベントを受け取ります。</li>
</ol>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}</dt>
 <dd>Describes the recommended method to handle the selected suggestion: open in the current tab, open in a new foreground tab, or open in a new background tab.</dd>
 <dt>{{WebExtAPIRef("omnibox.SuggestResult")}}</dt>
 <dd>Object representing a suggestion to add to the address bar drop-down.</dd>
</dl>

<h2 id="Functions" name="Functions">関数</h2>

<dl>
 <dt>{{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}</dt>
 <dd>Defines the first suggestion that appears in the drop-down when the user enters the keyword for your extension, followed by a space.</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{WebExtAPIRef("omnibox.onInputStarted")}}</dt>
 <dd>Fired when a the user focuses the address bar and types your extension's omnibox keyword, followed by a space.</dd>
 <dt>{{WebExtAPIRef("omnibox.onInputChanged")}}</dt>
 <dd>Fired whenever the user's input changes, after they have focused the address bar and typed your extension's omnibox keyword, followed by a space.</dd>
 <dt>{{WebExtAPIRef("omnibox.onInputEntered")}}</dt>
 <dd>Fired when the user accepts one of your extension's suggestions.</dd>
 <dt>{{WebExtAPIRef("omnibox.onInputCancelled")}}</dt>
 <dd>Fired when the user dismisses the address bar drop-down, after they have focused the address bar and typed your extension's omnibox keyword.</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.omnibox")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/omnibox"><code>chrome.omnibox</code></a> API.</p>

<p>Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.</p>
</div>
