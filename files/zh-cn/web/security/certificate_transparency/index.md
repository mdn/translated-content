---
title: HTTP Public Key Pinning (HPKP)
slug: Web/Security/Certificate_Transparency
original_slug: Web/HTTP/Public_Key_Pinning
---

HTTP 公钥锁定（HPKP）是一种安全功能，它告诉 Web 客户端将特定加密公钥与某个 Web 服务器相关联，以降低使用伪造证书进行 MITM 攻击的风险。

为确保 TLS 会话中使用的服务器公钥的真实性，此公钥将包装到 X.509 证书中，该证书通常由证书颁发机构（CA）签名。诸如浏览器之类的 Web 客户端信任许多这些 CA，它们都可以为任意域名创建证书。如果攻击者能够攻击单个 CA，则他们可以对各种 TLS 连接执行 MITM 攻击。HPKP 可以通过告知客户端哪个公钥属于某个 Web 服务器来规避 HTTPS 协议的这种威胁。

HPKP 是首次使用信任（TOFU）技术。Web 服务器第一次通过特殊的 HTTP 标头告诉客户端哪些公钥属于它，客户端会在给定的时间段内存储此信息。当客户端再次访问服务器时，它希望证书链中至少有一个证书包含一个公钥，其指纹已通过 HPKP 已知。如果服务器提供未知的公钥，则客户端应向用户发出警告。

Firefox 和 Chrome 禁用固定主机的引脚验证，其验证的证书链终止于用户定义的信任锚（而不是内置信任锚）。这意味着对于导入自定义根证书的用户，将忽略所有固定违规。

## 启用 HPKP

要为您的站点启用此功能，您需要在通过 HTTPS 访问站点时返回 Public-Key-Pins HTTP 标头：

```plain
Public-Key-Pins: pin-sha256="base64=="; max-age=expireTime [; includeSubDomains][; report-uri="reportURI"]
```

- `pin-sha256`
  - : 引用的字符串是 Base64 编码的主题公钥信息（SPKI）指纹。可以为不同的公钥指定多个引脚。某些浏览器将来可能允许使用其他哈希算法而不是 SHA-256。请参阅下文，了解如何从证书或密钥文件中提取此信息。
- `max-age`
  - : 浏览器应记住仅使用其中一个已定义的密钥访问此站点的时间（以秒为单位）。
- `includeSubDomains` {{optional_inline}}
  - : 如果指定了此可选参数，则此规则也适用于所有站点的子域。
- `report-uri` {{optional_inline}}
  - : 如果指定了此可选参数，则会将引脚验证失败报告给给定的 URL。

> **备注：** 当前规范要求包含第二个用于备份密钥的引脚，该引脚尚未在生产中使用。这允许更改服务器的公钥，而不会破坏已经记下引脚的客户端的无障碍。例如，当前一个密钥被泄露时，这很重要。

### 提取 Base64 编码的公钥信息

> **备注：** 虽然下面的示例显示了如何在服务器证书上设置引脚，但建议将引脚放在颁发服务器证书的 CA 的中间证书上，以简化证书续订和轮换。

首先，您需要从证书或密钥文件中提取公钥信息，并使用 Base64 对其进行编码。

以下命令将帮助您从密钥文件，证书签名请求或证书中提取 Base64 编码信息。

```plain
openssl rsa -in my-rsa-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64
```

```plain
openssl ec -in my-ecc-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64
```

```plain
openssl req -in my-signing-request.csr -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

```plain
openssl x509 -in my-certificate.crt -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

以下命令将提取网站的 Base64 编码信息。

```plain
openssl s_client -servername www.example.com -connect www.example.com:443 | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

### HPKP 头示例

```plain
Public-Key-Pins:
  pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=";
  pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";
  max-age=5184000; includeSubDomains;
  report-uri="https://www.example.org/hpkp-report"
```

在此示例中，`pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="` 固定服务器在生产中使用的公钥。第二个引脚声明引脚- `sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="` 也固定备份密钥。 `max-age=5184000` 告诉客户端将此信息存储两个月，根据 IETF RFC，这是一个合理的时间限制。此密钥固定也适用于所有子域，includeSubDomains 声明告知。最后，`report-uri="https://www.example.net/hpkp-report"` 解释了报告引脚验证失败的位置。

### Report-Only header

Instead of using a {{HTTPHeader("Public-Key-Pins")}} header you can also use a {{HTTPHeader("Public-Key-Pins-Report-Only")}} header. This header only sends reports to the `report-uri` specified in the header and does still allow browsers to connect to the webserver even if the pinning is violated.

### Setting up your webserver to include the HPKP header

The concrete steps necessary to deliver the HPKP header depend on the web server you use.

> **备注：** These examples use a max-age of two months and include all subdomains. It is advised to verify that this setup will work for your server.

> **警告：** HPKP has the potential to lock out users for a long time if used incorrectly! The use of backup certificates and/or pinning the CA certificate is recommended.

#### Apache

Adding a line similar to the following to your webserver's config will enable HPKP on your Apache. This requires `mod_headers` enabled.

```plain
Header always set Public-Key-Pins "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains"
```

#### Nginx

Adding the following line and inserting the appropriate `pin-sha256="..."` values will enable HPKP on your nginx. This requires the `ngx_http_headers_module.`

```plain
add_header Public-Key-Pins 'pin-sha256="base64+primary=="; pin-sha256="base64+backup=="; max-age=5184000; includeSubDomains' always;
```

#### Lighttpd

The following line with your relevant key information (pin-sha256="..." fields) will enable HPKP on lighttpd.

```plain
setenv.add-response-header  = ( "Public-Key-Pins" => "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains")
```

**Note:** This requires the `mod_setenv` server.module loaded which can be included by the following if not already loaded.

```plain
server.modules += ( "mod_setenv" )
```

#### IIS

Add the following line to the Web.config file to send the `Public-Key-Pins` header:

```xml
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="Public-Key-Pins" value="pin-sha256=&quot;base64+primary==&quot;; pin-sha256=&quot;base64+backup==&quot;; max-age=5184000; includeSubDomains" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Public-Key-Pins")}}
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
- Browser test site: [HSTS and HPKP test](https://projects.dm.id.lv/Public-Key-Pins_test)
