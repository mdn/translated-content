---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
tags:
  - Extensions
  - Themes
  - WebExtensions
  - add-on
translation_of: Mozilla/Add-ons/WebExtensions/API/theme
---
<div>{{AddonSidebar}}</div>

<p>ブラウザー拡張機能がブラウザーのテーマを更新できるようにします。</p>

<p>この API を使用するには、拡張機能の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> ファイルで "theme" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a> を要求しなければなりません。</p>

<div class="note">
<p>注記: バックグランドファイルでテーマをセットアップする場合、'theme' <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a>を宣言しなければなりません。さもなければ、manifest の <a href="/ja/Add-ons/WebExtensions/manifest.json/theme">theme</a> 関数を使用できません。</p>
</div>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.Theme")}}</dt>
 <dd>テーマのコンテンツを表します。</dd>
</dl>

<h2 id="Functions" name="Functions">関数</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.getCurrent()")}}</dt>
 <dd>現在のブラウザーテーマを取得します。</dd>
 <dt>{{WebExtAPIRef("theme.update()")}}</dt>
 <dd>ブラウザーのテーマを更新します。</dd>
 <dt>{{WebExtAPIRef("theme.reset()")}}</dt>
 <dd>{{WebExtAPIRef("theme.update()")}} の呼び出しで更新されたテーマをすべて削除します。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.onUpdated")}}</dt>
 <dd>ブラウザーテーマが変更された時に発火。</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<p>{{Compat("webextensions.api.theme")}}</p>

<p>{{WebExtExamples("h2")}}</p>
