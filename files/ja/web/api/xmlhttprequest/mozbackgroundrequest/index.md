---
title: XMLHttpRequest.mozBackgroundRequest
slug: Web/API/XMLHttpRequest/mozBackgroundRequest
tags:
  - API
  - Background Service
  - Mozilla
  - Non-standard
  - Property
  - Reference
  - XHR
  - XMLHttpRequest
  - mozBackgroundRequest
translation_of: Web/API/XMLHttpRequest/mozBackgroundRequest
---
<p>{{draft}}{{APIRef('XMLHttpRequest')}}</p>

<div class="note">
<p><strong>Note:</strong> このメソッドは、 Web コンテンツから使用できません。アクセスするには管理者特権が必要です。</p>
</div>

<p><span class="seoSummary"><strong><code>XMLHttpRequest.mozBackgroundRequest</code></strong> はブール値で、オブジェクトがバックグラウンドサービスリクエストを表すかどうかを示します。</span>  <code>true</code> の場合、要求に関連付けられているロードグループはなく、セキュリティダイアログはユーザーに表示されません。</p>

<p>通常、セキュリティダイアログ (認証や不正な証明書通知など) が表示される場合、この要求は失敗します。</p>

<div class="note">
<p><strong>Note: </strong>このプロパティは、 <code>open()</code> を呼び出す前に設定する必要があります。</p>
</div>
