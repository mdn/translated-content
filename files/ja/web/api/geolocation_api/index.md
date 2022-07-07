---
title: 位置情報 API
slug: Web/API/Geolocation_API
tags:
  - 位置情報 API
  - ガイド
  - 中級者
  - 概要
translation_of: Web/API/Geolocation_API
---
{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

**位置情報 API** (Geolocation API) を使用すると、ユーザーが望む場合に、自分の位置情報をウェブアプリケーションに提供することができます。プライバシー上の理由から、ユーザーは位置情報を報告する許可を求められます。

WebExtension で `Geolocation` オブジェクトを使用するには、マニフェストに `"geolocation"` パーミッションを追加しなければなりません。ユーザーのオペレーティングシステムは、最初に要求されたときに位置情報へのアクセスを許可するようにユーザーに促します。

## 概念と使用方法

ウェブアプリでユーザーの位置情報を取得したいと思うことはよくあります。例えば、ユーザーの位置を地図上にプロットしたり、ユーザーの位置に関連するパーソナライズされた情報を表示したりすることができます。

位置情報 APIは {{domxref("Navigator.geolocation", "navigator.geolocation")}} への呼び出しを介してアクセスします。これにより、ブラウザーはユーザーに自分の位置情報にアクセスする許可を要求します。ユーザーが許可すると、ブラウザーは端末上で利用可能な最良の機能（GPS など）を使用してこの情報にアクセスします。

開発者は、いくつかの異なる方法でこの位置情報にアクセスできるようになりました。

- {{domxref("Geolocation.getCurrentPosition()")}}: 端末の現在の位置を受け取ります。
- {{domxref("Geolocation.watchPosition()")}}: 端末の位置が変化するごとに自動的に呼び出され、更新された位置情報を返すハンドラー関数を登録します。

どちらの場合も、メソッド呼び出しには最大 3 つの引数を取ります。

- 成功コールバック（必須）: 位置情報の取得に成功した場合、このコールバックが {{domxref("GeolocationPosition")}} オブジェクトを唯一の引数として実行され、位置情報へのアクセスを提供します。
- エラーコールバック（オプション）: 位置情報の検索に失敗した場合、このコールバックが {{domxref("GeolocationPositionError")}} オブジェクトを唯一の引数として実行され、何が問題となったかに関するアクセス情報を提供します。
- 位置データを取得するためのオプションを提供するオプションのオブジェクト。

位置情報の使用に関するさらなる情報は、[位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)を参照してください。

## インターフェイス

- {{domxref("Geolocation")}}
  - : この API のメインクラスです。ユーザーの現在位置の取得、位置の変化の監視、および以前に設定した管理のクリアを行うメソッドが含まれています。
- {{domxref("GeolocationPosition")}}
  - : ユーザーの位置を表します。 `GeolocationPosition` インスタンスは、 {{domxref("Geolocation")}} に含まれるメソッドのいずれかの呼び出しが成功した場合に、成功コールバックの内部で返され、タイムスタンプと {{domxref("GeolocationCoordinates")}} オブジェクトのインスタンスが含まれます。
- {{domxref("GeolocationCoordinates")}}
  - : ユーザーの位置の座標を表します。 `GeolocationCoordinates` のインスタンスには、緯度、経度、その他の重要な関連情報が含まれています。
- {{domxref("GeolocationPositionError")}}
  - : `GeolocationPositionError` は、 {{domxref("Geolocation")}} に含まれるメソッドのいずれかの呼び出しに失敗した場合、エラーコールバック内で返され、エラーコードとメッセージが含まれています。
- {{domxref("Navigator.geolocation")}}
  - : API のエントリーポイント。 {{domxref("Geolocation")}} オブジェクトのインスタンスを返し、そこから他のすべての機能にアクセスすることができます。

## 例

例については[位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples)を参照してください。

## 仕様書

{{Specifications("api.Geolocation")}}

## ブラウザーの互換性

{{Compat("api.Geolocation")}}

### 可用性

Wi-Fi ベースの測位は Google が提供することが多いため、中国ではバニラの位置情報 API が利用できない場合があります。 [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation), [Tencent](https://lbs.qq.com/tool/component-geolocation.html) などの地域ののサードパーティプロバイダを使用することができます。これらのサービスは、ユーザーの IP アドレスおよび/またはローカルアプリを使用して、より高度な位置情報を提供します。

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Geolocation API on w3.org](https://www.w3.org/TR/geolocation-API/)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks blog)
