---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
---

{{HTTPSidebar}}

**User-Agent** {{Glossary("request header", "リクエストヘッダー")}}は、サーバーやネットワークピアがアプリケーション、オペレーティングシステム、ベンダーや、リクエストしている{{Glossary("user agent", "ユーザーエージェント")}}のバージョン等を識別できるようにする特性文字列です。

> **警告:** ブラウザーによって異なるウェブページやサービスを提供することが、通常は悪い考えである理由については、[ユーザーエージェント文字列を用いたブラウザーの判定](/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent)をお読みください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
User-Agent: <product> / <product-version> <comment>
```

ウェブブラウザーでよくある書式は以下のようなものです。

```
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

Firefox や Gecko ベースのユーザエージェント文字列の詳細については、 [Firefox のユーザエージェント文字列リファレンス](/ja/docs/Web/HTTP/Headers/User-Agent/Firefox)を参照してください。 Firefox の UA 文字列は 4 つの部分に分解されます。

```
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` は、 Mozilla と互換性があるブラウザーであるということを示す一般的なトークンで、現在はほぼすべてのブラウザーで共通です。
2. **_platform_** は、ブラウザーが動作しているプラットフォーム (Windows, Mac, Linux, Android など)、およびモバイル端末かどうかを示します。 {{Glossary("Firefox OS")}} のスマートフォンはウェブプラットフォームなので、 `Mobile` だけです。 **_platform_** が複数の "; " という区切りから成っていることに留意してください。後述の詳細と例も併せてご覧ください。
3. **rv:_geckoversion_** は Gecko のリリースバージョンです ("_17.0_" など)。最近のブラウザーの **_geckoversion_** は **_firefoxversion_** と同じです。
4. **_Gecko/geckotrail_** は、ブラウザーが [Gecko](/ja/docs/Mozilla/Gecko) を基にしていることを示します。 (デスクトップでは、 _**geckotrail**_ は常に `20100101` の固定文字列です。)
5. _**Firefox/firefoxversion**_ は、ブラウザーが Firefox であること、またそのバージョン ("_17.0_" など) を示しています。

### 例

```
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome の UA 文字列

Chrome (または Chromium/Blink ベースのエンジン) のユーザーエージェント文字列は Firefox のものと似ています。互換性のため、 `KHTML, like Gecko` や `Safari` のような文字列が追加されています。

### 例

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera の UA 文字列

Opera ブラウザーも Blink エンジンに基づいているので、大部分は同じですが、 `"OPR/<version>"` を追加します。

### 例

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

古い Presto ベースの Opera のリリースは、次のものを使用していました。

```
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Safari の UA 文字列

この例では、ユーザーエージェント文字列はモバイル Safari のものです。これは `Mobile` という語を含んでいます。

### 例

```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Internet Explorer の UA 文字列

### 例

```
Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
```

## クローラーやボットの UA 文字列

### 例

```
Googlebot/2.1 (+http://www.google.com/bot.html)
```

## 仕様書

| 仕様書                               | 題名                                                          |
| ------------------------------------ | ------------------------------------------------------------- |
| {{RFC(7231, "User-Agent", "5.5.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |
| {{RFC(2616, "User-Agent", "14.43")}} | Hypertext Transfer Protocol — HTTP/1.1                        |

## ブラウザーの互換性

{{Compat("http.headers.User-Agent")}}

## 関連情報

- [User-Agent detection, history and checklist](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox ユーザーエージェント文字列リファレンス](/ja/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [ユーザーエージェント文字列を用いたブラウザーの判定](/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent)
