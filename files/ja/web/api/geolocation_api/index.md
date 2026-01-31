---
title: 位置情報 API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
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

### 他のインターフェイスへの拡張

- {{domxref("Navigator.geolocation")}}
  - : API のエントリーポイント。 {{domxref("Geolocation")}} オブジェクトのインスタンスを返し、そこから他のすべての機能にアクセスすることができます。

## セキュリティの考慮事項

Geolocation API を使用すると、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)内でユーザーがプログラムによって位置情報にアクセスすることができるようになります。

アクセスはさらに[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)ディレクティブの {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} によって制御されます。
`geolocation` のデフォルト許可リストは `self` であり、同一オリジンのネストされたフレーム内でのみ位置情報にアクセスするその権限を許可します。
サードパーティの利用を許可するには、 `Permissions-Policy` レスポンスヘッダーを設定して、特定のサードパーティオリジンへ権限を与えます。

```http
Permissions-Policy: geolocation=(self b.example.com)
```

それから、そのオリジンからのソースの iframe 要素に `allow="geolocation"` 属性を追加する必要があります。

```html
<iframe src="https://b.example.com" allow="geolocation"></iframe>
```

位置情報データは、その端末の所有者が共有したくない情報があることがあり、それを明らかにする可能性があります。
したがって、{{domxref("Geolocation.getCurrentPosition()")}} または {{domxref("Geolocation.watchPosition()")}} が呼び出される際には、ユーザーが明示的なその権限をプロンプト経由で許可しなければなりません（その権限の状態が既に `granted` または `denied` である場合を除く）。
許可されたその権限の有効期間はユーザーエージェントによって異なり、時間ベース、セッションベース、あるいは永続的であることがあります。
[権限 API](/ja/docs/Web/API/Permissions_API) の `geolocation` 権限を使用することができます。これにより、位置情報を使用する際のアクセスが `granted`（許可済み）、`denied`（拒否済み）、または `prompt`（プロンプト表示が必要）のいずれであるかを検査することができます。

## 例

例については[位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 可用性

Wi-Fi ベースの測位は Google が提供することが多いため、中国ではバニラの位置情報 API が利用できない場合があります。 [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation), [Tencent](https://lbs.qq.com/tool/component-geolocation.html) などの地域ののサードパーティプロバイダーを使用することができます。これらのサービスは、ユーザーの IP アドレスやローカルアプリを使用して、より高度な位置情報を提供します。

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks blog)
