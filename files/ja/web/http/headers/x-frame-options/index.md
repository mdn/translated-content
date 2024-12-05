---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> このヘッダーの代わりに、 {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} ディレクティブを {{HTTPHeader("Content-Security-Policy")}} ヘッダーで使用してください。

**`X-Frame-Options`** は [HTTP](/ja/docs/Web/HTTP) のレスポンスヘッダーで、ブラウザーがページを {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}}、{{HTMLElement("object")}} の中に表示することを許可するかどうかを示すために使用します。サイトはコンテンツが他のサイトに埋め込まれないよう保証することで、[クリックジャッキング](/ja/docs/Web/Security/Types_of_attacks#クリックジャッキング)攻撃を防ぐために使用することができます。

セキュリティが強化されるのは、ユーザーが `X-Frame-Options` に対応したブラウザーを使用して文書にアクセスした場合のみです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

`X-Frame-Options` には 2 つの有効なディレクティブがあります。

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### ディレクティブ

`DENY` を指定した場合は、フレームにページを他のサイトから読み込もうとした時だけでなく、同じサイトから読み込もうとした時にも失敗します。一方、 `SAMEORIGIN` を指定した場合は、フレームの中のページを含むサイトが、ページを提供しているサイトと同じである限り、フレーム内でページを利用することができます。

- `DENY`
  - : ページをフレーム内に表示することは、それを試みているサイトが何であろうとできません。
- `SAMEORIGIN` {{deprecated_inline}}
  - : ページは、すべての祖先フレームがページ自体と同じオリジンである場合にのみ表示できます。
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : これは古いディレクティブです。このディレクティブを持つレスポンスヘッダーに遭遇した現行のブラウザーは、そのヘッダーを完全に無視します。 HTTP の {{HTTPHeader("Content-Security-Policy")}} ヘッダーには {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} ディレクティブがありますので、そちらを使用してください。

## 例

> [!NOTE]
> X-Frame-Options を {{HTMLElement("meta")}} 要素に設定しても（例えば、`<meta http-equiv="X-Frame-Options" content="deny">`）効果はありません。 `X-Frame-Options` は HTTP ヘッダーを通じて設定された場合のみ動作します。

### Apache の設定

Apache で X-Frame-Options ヘッダーをすべてのページで送信するように設定するには、サイトの設定に以下の記述を追加してください。

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Apache で `X-Frame-Options` を DENY に設定するには、サイトの設定に以下の記述を追加してください

```apacheconf
Header set X-Frame-Options "DENY"
```

### nginx の設定

Nginx で `X-Frame-Options` ヘッダーを送信するように設定するには、以下の記述を http、server、 location のいずれかの設定に追加してください。

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

`X-Frame-Options` ヘッダーで `DENY` を設定するには、次のようにします。

```nginx
add_header X-Frame-Options DENY always;
```

### IIS の設定

IIS で `X-Frame-Options` ヘッダーを送信するように設定するには、サイトの `Web.config` ファイルに以下の設定を追加してください。

```xml
<system.webServer>
  …
  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>
  …
</system.webServer>
```

詳しくは、[IIS マネージャーのユーザーインターフェイスを使用してこの構成を設定する方法についてのマイクロソフトのサポート記事](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79)を参照してください。

### HAProxy の設定

HAProxy で `X-Frame-Options` ヘッダーを送信するように設定するには、以下の記述を front-end、listen、backend のいずれかの設定に追加してください。

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

他にも、より新しいバージョンでは次のような設定ができます。

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Express の設定

`X-Frame-Options` ヘッダーを [helmet](https://helmetjs.github.io/) を使用して `SAMEORIGIN` に設定するには、サーバー設定に次のものを追加してください。

```js
const helmet = require("helmet");
const app = express();
app.use(
  helmet({
    xFrameOptions: { action: "sameorigin" },
  }),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}} の {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} ディレクティブ
- [ClickJacking Defenses - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
