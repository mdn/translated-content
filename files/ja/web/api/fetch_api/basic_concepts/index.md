---
title: Fetch の基本概念
slug: Web/API/Fetch_API/Basic_concepts
tags:
  - API
  - Fetch
  - Fetch API
  - XMLHttpRequest
  - 概念
  - guard
  - request
translation_of: Web/API/Fetch_API/Basic_concepts
---
{{DefaultAPISidebar("Fetch API")}}

[Fetch](/ja/docs/Web/API/Fetch_API) は、（ネットワーク越しの場合も含めて）リソースを取得するインターフェイスを提供します。 {{domxref("XMLHttpRequest")}} を使っていた人にはなじみ深いでしょうが、より強力で柔軟な機能を提供します。この記事では、 Fetch API の基本概念のいくつかを説明します。

> **Note:** この記事は随時加筆されます。より良い説明が必要な Fetch 概念を見つけた場合、[MDN ディスカッションフォーラム](https://discourse.mozilla-community.org/c/mdn) か [Matrix](https://wiki.mozilla.org/Matrix) の [MDN Web Docs](https://chat.mozilla.org/#/room/#mdn:mozilla.org) ルームで誰かに知らせてください。

## 概要

Fetch の核心はインターフェイスの抽象化であり、HTTP のリクエスト ({{domxref("Request")}})、レスポンス ({{domxref("Response")}})、ヘッダー ({{domxref("Headers")}}) を抽象化するインターフェイスであり、非同期のリソースのリクエストを行うための {{domxref("fetch()")}} メソッドで行います。 HTTP の主要部分が JavaScript オブジェクトとして抽象化されているため、他の API からそれらの機能を利用しやすくなっています。

[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)は、 Fetch を多用する API の一例です。

Fetch はそれらのリクエストの非同期な性質をもう一歩先へ進めるものです。 API は完全に {{jsxref("Promise")}} ベースです。

## ガード

ガードは {{domxref("Headers")}} オブジェクトの機能で、ヘッダーが使用されている場所に応じて `immutable`, `request`, `request-no-cors`, `response`, `none` のいずれかの値を取ります。

新しい {{domxref("Headers")}} オブジェクトが {{domxref("Headers.Headers","Headers()")}} {{glossary("constructor", "コンストラクター")}}を使用してが生成されるとき、ガードは `none` （既定値）に設定されます。{{domxref("Request")}} または {{domxref("Response")}} オブジェクトが生成された場合、関連づけられた {{domxref("Headers")}} オブジェクトのガードは下記のとおり設定されます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">新しいオブジェクト型</th>
      <th scope="col">コンストラクター</th>
      <th scope="col">
        関連する {{domxref("Headers")}} オブジェクトのガード設定
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">{{domxref("Request")}}</td>
      <td>{{domxref("Request.Request","Request()")}}</td>
      <td><code>request</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Request.Request","Request()")}} で {{domxref("Request.mode","mode")}} に <code>no-cors</code> を設定したもの
      </td>
      <td><code>request-no-cors</code></td>
    </tr>
    <tr>
      <td rowspan="2">{{domxref("Response")}}</td>
      <td>{{domxref("Response.Response","Response()")}}</td>
      <td><code>response</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Response.error","error()")}} または {{domxref("Response.redirect","redirect()")}} メソッド
      </td>
      <td><code>immutable</code></td>
    </tr>
  </tbody>
</table>

ヘッダーのガードは、ヘッダーの内容を変更する {{domxref("Headers.set","set()")}}、 {{domxref("Headers.delete","delete()")}}、{{domxref("Headers.append","append()")}} の各メソッドに影響します。 {{domxref("Headers")}} のガードが `immutable` の場合、変更しようとすると `TypeError` が発生します。しかし、次の場合は動作します。

- ガードが `request` で、ヘッダーの _name_ が{{Glossary("forbidden header name", "禁止ヘッダー名")}} ではない場合。
- ガードが `request-no-cors` で、ヘッダーの _name_/_value_ が{{Glossary("simple header", "単純ヘッダー")}}である場合。
- ガードが `response` で、ヘッダーの _name_ が{{Glossary("forbidden response header name", "禁止レスポンスヘッダー名")}}ではない場合。
