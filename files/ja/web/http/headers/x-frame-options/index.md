---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
---

{{HTTPSidebar}}

**`X-Frame-Options`** は [HTTP](/ja/docs/Web/HTTP) のレスポンスヘッダーで、ブラウザーがページを {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}}、{{HTMLElement("object")}} の中に表示することを許可するかどうかを示すために使用します。サイトはコンテンツが他のサイトに埋め込まれないよう保証することで、[クリックジャッキング](https://ja.wikipedia.org/wiki/クリックジャッキング)攻撃を防ぐために使用することができます。

セキュリティが強化されるのは、ユーザーが `X-Frame-Options` に対応したブラウザーを使用して文書にアクセスした場合のみです。

**メモ:** {{HTTPHeader("Content-Security-Policy")}} ヘッダーに {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} ディレクティブがあり、対応しているブラウザーにおいてこのヘッダーを<a href="https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options">置き換えて</a>います。

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

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### ディレクティブ

`DENY` を指定した場合は、フレームにページを他のサイトから読み込もうとした時だけでなく、同じサイトから読み込もうとした時にも失敗します。一方、 `SAMEORIGIN` を指定した場合は、フレームの中のページを含むサイトが、ページを提供しているサイトと同じである限り、フレーム内でページを利用することができます。

- `DENY`
  - : ページをフレーム内に表示することは、それを試みているサイトが何であろうとできません。
- `SAMEORIGIN`
  - : ページは、ページ自体と同じオリジンのフレーム内でのみ表示されます。仕様書ではこのオプションを最上位、親、チェーン全体のどれに適用するかをブラウザーベンダーに任せていますが、すべての祖先が同じオリジンでない限り、利用価値がないと議論されています。 ([Firefox バグ 725490](https://bugzil.la/725490) を参照)。対応の詳細は[ブラウザーの互換性](#ブラウザーの互換性)もご覧ください。
- `ALLOW-FROM uri` {{deprecated_inline}}
  - : これは廃止されたディレクティブであり、最近のブラウザーでは動作しません。使用しないでください。対応している古いブラウザーでは、ページは指定されたオリジン _uri_ のフレーム内でのみ表示されます。なお、以前の Firefox では `SAMEORIGIN` と同じ問題がありました。 — フレームの祖先が同じオリジンであるかどうかをチェックしません。 {{HTTPHeader("Content-Security-Policy")}} ヘッダーには `frame-ancestors` ディレクティブがあり、代わりにこれを使用することができます。

## 例

> **メモ:** X-Frame-Options を {{HTMLElement("meta")}} 要素に設定しても意味がありません。例えば、`<meta http-equiv="X-Frame-Options" content="deny">` は効果がありません。使用しないでください。以下の例にあるように、 `X-Frame-Options` は HTTP ヘッダーを通じて設定された場合のみ動作します。

### Apache の設定

Apache で X-Frame-Options ヘッダをすべてのページで送信するように設定するには、サイトの設定に以下の記述を追加してください。

```
Header always set X-Frame-Options "SAMEORIGIN"
```

Apache で `X-Frame-Options` を DENY に設定するには、サイトの設定に以下の記述を追加してください

```
Header set X-Frame-Options "DENY"
```

### nginx の設定

nginx で `X-Frame-Options` ヘッダーを送信するように設定するには、以下の記述を http、server、 location のいずれかの設定に追加してください。

```
add_header X-Frame-Options SAMEORIGIN always;
```

### IIS の設定

IIS で `X-Frame-Options` ヘッダーを送信するように設定するには、サイトの `Web.config` ファイルに以下の設定を追加してください。

```html
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

または、IIS マネージャーのユーザーインターフェイスを使用してこの構成を設定する方法については、[マイクロソフトのサポート記事](https://support.office.com/en-us/article/Mitigating-framesniffing-with-the-X-Frame-Options-header-1911411b-b51e-49fd-9441-e8301dcdcd79)を参照してください。

### HAProxy の設定

HAProxy で `X-Frame-Options` ヘッダーを送信するように設定するには、以下の記述を front-end、listen、backend のいずれかの設定に追加してください。

```
rspadd X-Frame-Options:\ SAMEORIGIN
```

他にも、より新しいバージョンでは次のような設定ができます。

```
http-response set-header X-Frame-Options SAMEORIGIN
```

<h3 id="Configuring_Express" name="Configuring_Express">Express の設定</h3>

Express で `X-Frame-Options` ヘッダーを送信するように設定するには、[helmet](https://helmetjs.github.io/) を使用して [frameguard](https://helmetjs.github.io/docs/frameguard/) でヘッダーを設定してください。以下の記述をサーバー設定に追加してください。

```js
const helmet = require("helmet");
const app = express();
app.use(helmet.frameguard({ action: "SAMEORIGIN" }));
```

他にも、直接 frameguard を使用することもできます。

```js
const frameguard = require("frameguard");
app.use(frameguard({ action: "SAMEORIGIN" }));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}} の {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} ディレクティブ
- [HTTP Header Field X-Frame-Options - RFC 7034](https://datatracker.ietf.org/doc/html/rfc7034)
- [ClickJacking Defenses - IEBlog](https://docs.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
