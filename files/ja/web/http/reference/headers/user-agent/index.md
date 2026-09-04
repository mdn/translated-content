---
title: User-Agent ヘッダー
short-title: User-Agent
slug: Web/HTTP/Reference/Headers/User-Agent
l10n:
  sourceCommit: 0b852c3f5c46b69a57d23e860a833f6830951793
---

**User-Agent** {{Glossary("request header", "リクエストヘッダー")}}は、サーバーやネットワークピアがアプリケーション、オペレーティングシステム、ベンダーや、リクエストしている{{Glossary("user agent", "ユーザーエージェント")}}のバージョン等を識別できるようにする特性文字列です。

> [!WARNING]
> ブラウザーによって異なるウェブページやサービスを提供することが、通常は悪い考えである理由については、[ユーザーエージェント文字列を用いたブラウザーの判定](/ja/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)をお読みください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
User-Agent: <product> / <product-version> <comment>
```

ウェブブラウザーでよくある書式は以下のようなものです。

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### ディレクティブ

- `<product>`
  - : 製品の識別子です。名前または開発コードネームです。
- `<product-version>`
  - : 製品のバージョン番号です。
- `<comment>`
  - : ゼロ個以上のコメントで、サブ製品情報など、より詳細な情報を含みます。

## User-Agent の削減

`User-Agent`ヘッダーに公開される情報は、歴史的に[プライバシー](/ja/docs/Web/Privacy)上の懸念を引き起こしてきました。特定のユーザーエージェントを識別するために利用され、したがって{{glossary("fingerprinting", "フィンガープリンティング")}}に悪用される可能性があるためです。こうした懸念を軽減するため、[対応ブラウザー](#browser_compatibility)では `User-Agent` ヘッダーおよび関連 API 機能（{{domxref("Navigator.userAgent")}}、{{domxref("Navigator.appVersion")}}、{{domxref("Navigator.platform")}} など）において、提供される情報の量を削減しています。

例えば、以前は Android 上で動作する Chrome の `User-Agent` 文字列は以下のようなものだったかもしれません。

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

ユーザーエージェント削減の更新後、現在は以下のようになっています。

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

- プラットフォームのバージョンは常に固定値であり、この場合は `Android 10` です。
- デバイスモデルは常に固定値であり、この場合は `K` です。
- Chrome のメジャーバージョン番号は正しく表示されますが、マイナーバージョン番号は常にゼロ (`0.0.0`) として表示されます。

より多くの情報が必要なサーバーは、[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)を通じて要求できます。初期接続後、サーバーは必要なデータアイテムを詳細に記述した {{httpheader("Accept-CH")}} レスポンスヘッダーを送信でき、クライアントは [`Sec-CH-UA-*`](/ja/docs/Web/HTTP/Reference/Headers#user_agent_client_hints) ヘッダーを介してデータを返送できます。この情報は、[ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API) からもアクセスできます。

より詳細な情報（必要に応じて追加情報を取得する方法のガイドを含む）については、[User-Agent の削減](/ja/docs/Web/HTTP/Guides/User-agent_reduction)を参照してください。削減された `User-Agent` 文字列の例は、以下の節でも確認できます。

## Firefox の UA 文字列

Firefox や Gecko ベースのユーザーエージェント文字列の詳細については、 [Firefox のユーザーエージェント文字列リファレンス](/ja/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)を参照してください。 Firefox の UA 文字列は 4 つの部分に分解されます。

```plain
Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version
```

1. `Mozilla/5.0` は、 Mozilla と互換性があるブラウザーであるということを示す一般的なトークンで、現在はほぼすべてのブラウザーで共通です。
2. **_platform_** は、ブラウザーが動作しているプラットフォーム (Windows, Mac, Linux, Android など)、およびモバイル端末かどうかを示します。 **_platform_** が複数の `;` で区切られていることに留意してください。後述の詳細と例も併せてご覧ください。
3. **rv:_gecko-version_** は Gecko のリリースバージョンです ("_17.0_" など)。最近のブラウザーの **_gecko-version_** は **_firefox-version_** と同じです。
4. **_Gecko/gecko-trail_** は、ブラウザーが Gecko を基にしていることを示します。 (デスクトップでは、 **_gecko-trail_** は常に `20100101` の固定文字列です。)
5. **_Firefox/firefox-version_** は、ブラウザーが Firefox であること、またそのバージョン ("_17.0_" など) を示しています。

デスクトップの例:

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0

Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome の UA 文字列

Chrome (または Chromium/Blink ベースのエンジン) のユーザーエージェント文字列は Firefox のものと似ています。互換性のため、 `KHTML, like Gecko` や `Safari` のような文字列が追加されています。iPhone では `"CriOS/<version>"` が追加されます。

デスクトップの例:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
```

Android スマートフォンの例:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

## Opera の UA 文字列

Opera ブラウザーも Blink エンジンに基づいているので、大部分は同じですが、デスクトップと Android では `"OPR/<version>"` を追加し、iOS では `"OPT/<version>"` を追加します。プレビューバージョンでは、Opera は特定のブラウザーのエディションの説明を括弧の中に、 `(Edition developer)` のように含めます。

デスクトップの例:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 OPR/124.0.0.0 (Edition developer)

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 OPR/124.0.0.0 (Edition developer)
```

Android スマートフォンの例:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 OPR/92.0.0.0
```

## Microsoft Edge の UA 文字列

Edge ブラウザーも Blink エンジンをベースとしています。デスクトップのプラットフォームでは `"Edg/<version>"` を追加し、Android では `"EdgA/<version>"`、iPhone では `"EdgiOS/<version>"` を追加します。

デスクトップの例:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0
```

Android スマートフォンの例:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36 EdgA/141.0.0.0
```

## Safari の UA 文字列

Safari は WebKit エンジンに基づいていますが、UA 文字列は Blink ベースのブラウザーとも似ています。実際のエンジンビルドバージョン前に `Version/xxx` という文字列を含める傾向があり、これは Blink ベースのブラウザーとは異なり、ブラウザーのリリースバージョンを示すものです。 iPhone（モバイル）Safari の場合、この文字列には `Mobile` も含まれます。

> [!NOTE]
> 執筆時点では、Apple 製以外の iPhone のブラウザー（Firefox、Chrome、Edge など）は WebKit を基盤としているため、それらのユーザーエージェント文字列は Safari のユーザーエージェント文字列と類似しています。

デスクトップの例:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15
```

iPhone の例:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1
```

## ユーザーエージェント削減前の例

この節では、ユーザーエージェントの削減が導入される前の、古いバージョンのブラウザーにおけるユーザーエージェント文字列の例をいくつか示します。

Google Chrome:

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

Microsoft Edge:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

Opera:

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

古い Presto ベースの Opera リリースでは、次のような構造が使用されていました。

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00

Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## クローラーやボットの UA 文字列

### 例

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## ライブラリーやネットツールの UA 文字列

### 例

```plain
curl/7.64.1
```

```plain
PostmanRuntime/7.26.5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [User-Agent detection, history and checklist](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox ユーザーエージェント文字列リファレンス](/ja/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
- [ユーザーエージェント文字列を用いたブラウザーの判定](/ja/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
