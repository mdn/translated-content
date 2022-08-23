---
title: notifications
slug: Mozilla/Add-ons/WebExtensions/API/notifications
tags:
  - API
  - Add-ons
  - Extensions
  - Notifications
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/notifications
---
<div>{{AddonSidebar}}</div>

<p>OS の通知メカニズムを使って、ユーザーへの通知を表示します。この API は OS の通知メカニズムを使うため、OS とユーザー設定によって通知の現れ方やふるまいは変わってきます。</p>

<p>この API を使うには "notifications" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a>が必要です。</p>

<p>すべてのデスクトップOSで通知は同じ見た目です。次のようなものです:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16856/notification.png" style="display: block; margin: 0 auto;"></p>

<h2 id="Types" name="Types">型</h2>

<dl>
 <dt>{{WebExtAPIRef("notifications.NotificationOptions")}}</dt>
 <dd>通知の中身を定義します。</dd>
 <dt>{{WebExtAPIRef("notifications.TemplateType")}}</dt>
 <dd>通知の種類。例えば、通知に画像を含められるかなどを定義します。</dd>
</dl>

<h2 id="Functions" name="Functions">関数</h2>

<dl>
 <dt>{{WebExtAPIRef("notifications.clear()")}}</dt>
 <dd>IDに基づいた特定の通知をクリアします。</dd>
 <dt>{{WebExtAPIRef("notifications.create()")}}</dt>
 <dd>新規の通知を作成、表示します。</dd>
 <dt>{{WebExtAPIRef("notifications.getAll()")}}</dt>
 <dd>すべての通知を取得します。</dd>
 <dt>{{WebExtAPIRef("notifications.update()")}}</dt>
 <dd>通知を更新します。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{WebExtAPIRef("notifications.onButtonClicked")}}</dt>
 <dd>ユーザーが通知内のボタンをクリックしたときに発火します。</dd>
 <dt>{{WebExtAPIRef("notifications.onClicked")}}</dt>
 <dd>ユーザーが通知内のボタン以外をクリックしたときに発火します。</dd>
 <dt>{{WebExtAPIRef("notifications.onClosed")}}</dt>
 <dd>通知が閉じたとき、システムかユーザーいずれかがやめた場合にも、発火します。</dd>
 <dt>{{WebExtAPIRef("notifications.onShown")}}</dt>
 <dd>通知が表示されるとすぐに発火します。</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("webextensions.api.notifications")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/notifications"><code>chrome.notifications</code></a> API.</p>
</div>
