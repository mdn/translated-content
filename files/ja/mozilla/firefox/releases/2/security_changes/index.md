---
title: Firefox 2 のセキュリティ
slug: Mozilla/Firefox/Releases/2/Security_changes
---

{{FirefoxSidebar}}

この記事では、Firefox 2 のセキュリティに影響を与える変更点について説明しています。

## Weak ciphers disabled by default

[Firefox 2](/ja/Firefox_2_for_developers) disables SSLv2 and the weak "export" cipher suites (those with key lengths less than 64 bits) by default, in favor of SSLv3. This provides improved security.

The preferred encryption methods are `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` and `TLS_RSA_WITH_3DES_EDE_CBC_SHA`. Some servers refer to these as `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` and `SSL_RSA_WITH_3DES_EDE_CBC_SHA`.

If SSLv2 support must be enabled, it can be by setting the appropriate `security.ssl2.*` user preferences to `true`.

## New features

- Firefox 2 supports [Elliptic Curve Cryptography](http://en.wikipedia.org/wiki/Elliptic_curve_cryptography) in TLS. Support is presently limited to curves of 256, 384, and 521 (yes, 521) bits.
- Firefox 2 supports the TLS server name indication extension to facilitate secure connections to servers hosting multiple virtual servers on a single underlying network address, as per [RFC 3546](http://tools.ietf.org/html/rfc3546).
- When Firefox 2 makes an [OCSP](http://en.wikipedia.org/wiki/Ocsp) request to validate a web server's certificate, it now uses the proxy that has been configured for normal HTTP traffic.

## Determining what ciphers are available

As always, you can find out what ciphers are supported — and which are enabled or disabled — by going to about:config and searching on "ssl" or "tls".

## Security improved for the jar: protocol

In order to correct a potential security problem when using the `jar:` protocol, it's now necessary to serve JAR files with the MIME type `application/java-archive`. See [Security and the jar protocol](/ja/Security_and_the_jar_protocol) for further details.
