---
title: Document.createEntityReference()
slug: Web/API/Document/createEntityReference
tags:
  - API
  - DOM
  - Obsolete
  - Reference
  - メソッド
  - 廃止
translation_of: Web/API/Document/createEntityReference
---
<div>{{ApiRef("DOM")}} {{obsolete_header("7.0")}}</div>

<p>{{gecko("7.0")}} より前では、このメソッドはバグ {{bug("9850")}} の影響で、常に null のみを返すものとして登場しました。唯一の用途は、テキストノード、 CDATA セクション、属性ノード値など、エンティティから <a href="/ja/JavaScript/Guide/Obsolete_Pages/Unicode#Unicode_escape_sequences">Unicode エスケープシーケンス</a> または {{jsxref("String.fromCharCode", "fromCharCode()")}} を使用して参照される値があるもののみでした。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE">createEntityReference</a></p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.createEntityReference")}}</p>
