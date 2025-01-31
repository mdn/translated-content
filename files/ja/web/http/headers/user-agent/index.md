---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

**User-Agent** {{Glossary("request header", "リクエストヘッダー")}}は、サーバーやネットワークピアがアプリケーション、オペレーティングシステム、ベンダーや、リクエストしている{{Glossary("user agent", "ユーザーエージェント")}}のバージョン等を識別できるようにする特性文字列です。

> [!WARNING]
> ブラウザーによって異なるウェブページやサービスを提供することが、通常は悪い考えである理由については、[ユーザーエージェント文字列を用いたブラウザーの判定](/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent)をお読みください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
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

## Firefox の UA 文字列

Firefox や Gecko ベースのユーザーエージェント文字列の詳細については、 [Firefox のユーザーエージェント文字列リファレンス](/ja/docs/Web/HTTP/Headers/User-Agent/Firefox)を参照してください。 Firefox の UA 文字列は 4 つの部分に分解されます。

```plain
Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version
```

1. `Mozilla/5.0` は、 Mozilla と互換性があるブラウザーであるということを示す一般的なトークンで、現在はほぼすべてのブラウザーで共通です。
2. **_platform_** は、ブラウザーが動作しているプラットフォーム (Windows, Mac, Linux, Android など)、およびモバイル端末かどうかを示します。 {{Glossary("Firefox OS")}} のスマートフォンはウェブプラットフォームなので、 `Mobile` だけです。 **_platform_** が複数の `;` で区切られていることに留意してください。後述の詳細と例も併せてご覧ください。
3. **rv:_gecko-version_** は Gecko のリリースバージョンです ("_17.0_" など)。最近のブラウザーの **_gecko-version_** は **_firefox-version_** と同じです。
4. **_Gecko/gecko-trail_** は、ブラウザーが Gecko を基にしていることを示します。 (デスクトップでは、 **_gecko-trail_** は常に `20100101` の固定文字列です。)
5. **_Firefox/firefox-version_** は、ブラウザーが Firefox であること、またそのバージョン ("_17.0_" など) を示しています。

### 例

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome の UA 文字列

Chrome (または Chromium/Blink ベースのエンジン) のユーザーエージェント文字列は Firefox のものと似ています。互換性のため、 `KHTML, like Gecko` や `Safari` のような文字列が追加されています。

### 例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera の UA 文字列

Opera ブラウザーも Blink エンジンに基づいているので、大部分は同じですが、 `"OPR/<version>"` を追加します。

### 例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

古い Presto ベースの Opera のリリースは、次のものを使用していました。

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Microsoft Edge の UA 文字れ鵜t

Edge ブラウザーも Blink エンジンをベースとしています。 `"Edg/<version>"` を追加します。

### 例

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Safari の UA 文字列

この例では、ユーザーエージェント文字列はモバイル Safari のものです。これは `"Mobile"` という語を含んでいます。

### 例

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
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
- [Firefox ユーザーエージェント文字列リファレンス](/ja/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [ユーザーエージェント文字列を用いたブラウザーの判定](/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [クライアントヒント](/ja/docs/Web/HTTP/Client_hints)
