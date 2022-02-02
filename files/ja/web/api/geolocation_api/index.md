---
title: 位置情報 API
slug: Web/API/Geolocation_API
tags:
  - Geolocation API
  - Guide
  - Intermediate
  - Overview
  - ガイド
  - 位置情報
  - 概要
translation_of: Web/API/Geolocation_API
---
<div>{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}</div>

<p><ruby>位置情報<rp> (</rp><rt>Geolocation</rt><rp>)</rp></ruby> API を使用すると、ユーザーが望む場合には、自分の位置情報をウェブアプリケーションに提供することができます。プライバシー上の理由から、ユーザーは位置情報を報告する許可を求められます。</p>

<p>Geolocation オブジェクトを使用する WebExtension では、マニフェストに <code>"geolocation"</code> パーミッションを追加しなければなりません。ユーザーのオペレーティングシステムは、最初に要求されたときに位置情報へのアクセスを許可するようにユーザーに促します。</p>

<h2 id="Concepts_and_usage" name="Concepts_and_usage">概念と使用方法</h2>

<p>ウェブアプリでユーザーの位置情報を取得したいと思うことはよくあります。例えば、ユーザーの位置を地図上にプロットしたり、ユーザーの位置に関連するパーソナライズされた情報を表示したりすることができます。</p>

<p>位置情報 APIは {{domxref("Navigator.geolocation", "navigator.geolocation")}} への呼び出しを介してアクセスします。これにより、ブラウザーはユーザーに自分の位置情報にアクセスする許可を要求します。ユーザーが許可すると、ブラウザーは端末上で利用可能な最良の機能を使用してこの情報にアクセスします (GPS など)。</p>

<p>開発者は、いくつかの異なる方法でこの位置情報にアクセスできるようになりました。</p>

<ul>
 <li>{{domxref("Geolocation.getCurrentPosition()")}}: 端末の現在の位置を受け取ります。</li>
 <li>{{domxref("Geolocation.watchPosition()")}}: 端末の位置が変化するごとに自動的に呼び出され、更新された位置情報を返すハンドラー関数を登録します。</li>
</ul>

<p>どちらの場合も、メソッド呼び出しには最大3つの引数を取ります。</p>

<ul>
 <li>成功コールバック (必須): 位置情報の取得に成功した場合、このコールバックが {{domxref("GeolocationPosition")}} オブジェクトを唯一の引数として実行され、位置情報へのアクセスを提供します。</li>
 <li>エラーコールバック (オプション): 位置情報の検索に失敗した場合、このコールバックが {{domxref("GeolocationPositionError")}} オブジェクトを唯一の引数として実行され、何が問題となったかに関するアクセス情報を提供します。</li>
 <li>位置データを取得するためのオプションを提供するオプションの {{domxref("PositionOptions")}} オブジェクト。</li>
</ul>

<p>位置情報の使用に関するさらなる情報は、<a href="/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">位置情報 API の使用</a>を参照してください。</p>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{domxref("Geolocation")}}</dt>
 <dd>この API のメインクラスです。ユーザーの現在位置の取得、位置の変化の監視、および以前に設定した管理のクリアを行うメソッドが含まれています。</dd>
 <dt>{{domxref("GeolocationPosition")}}</dt>
 <dd>ユーザの位置を表します。 <code>GeolocationPosition</code> インスタンスは、 {{domxref("Geolocation")}} に含まれるメソッドのいずれかの呼び出しが成功した場合に、成功コールバックの内部で返され、タイムスタンプと {{domxref("GeolocationCoordinates")}} オブジェクトのインスタンスが含まれます。</dd>
 <dt>{{domxref("GeolocationCoordinates")}}</dt>
 <dd>ユーザーの位置の座標を表します。 <code>GeolocationCoordinates</code> のインスタンスには、緯度、経度、その他の重要な関連情報が含まれています。</dd>
 <dt>{{domxref("GeolocationPositionError")}}</dt>
 <dd><code>GeolocationPositionError</code> は、 {{domxref("Geolocation")}} に含まれるメソッドのいずれかの呼び出しに失敗した場合、エラーコールバック内で返され、エラーコードとメッセージが含まれています。</dd>
 <dt>{{domxref("Navigator.geolocation")}}</dt>
 <dd>API のエントリーポイント。 {{domxref("Geolocation")}} オブジェクトのインスタンスを返し、そこから他のすべての機能にアクセスすることができます。</dd>
</dl>

<h2 id="Dictionaries" name="Dictionaries">辞書</h2>

<dl>
 <dt>{{domxref("PositionOptions")}}</dt>
 <dd>{{domxref("Geolocation.getCurrentPosition()")}} と {{domxref("Geolocation.watchPosition()")}} の引数として渡すオプションを含むオブジェクトを表します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>{{page("/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API","Examples")}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("Geolocation")}}</td>
   <td>{{Spec2("Geolocation")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Geolocation")}}</p>

<h3 id="Availability" name="Availability">可用性</h3>

<p>WiFi ベースの測位は Google が提供することが多いため、中国ではバニラの位置情報 API が利用できない場合があります。 <a href="http://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation">Baidu</a>, <a href="https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation">Autonavi</a>, <a href="http://lbs.qq.com/tool/component-geolocation.html">Tencent</a> などの地域ののサードパーティプロバイダを使用することができます。これらのサービスは、ユーザーの IP アドレスおよび/またはローカルアプリを使用して、より高度な位置情報を提供します。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Using the Geolocation API</a></li>
 <li><a href="https://www.w3.org/TR/geolocation-API/" rel="external">Geolocation API on w3.org</a></li>
 <li><a href="https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/">Who moved my geolocation?</a> (Hacks blog)</li>
</ul>
