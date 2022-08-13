---
title: Verbotener Header-Name
slug: Glossary/Forbidden_header_name
tags:
  - Fetch
  - Glossar
  - Glossary
  - HTTP
  - Headers
  - Verboten
  - Wörterverzeichnis
translation_of: Glossary/Forbidden_header_name
original_slug: Glossary/verbotener_header_name
---
Ein verbotener Header-Name, ist ein [HTTP header](/de/docs/Web/HTTP/Headers) Name, welcher nicht programmatisch modifiziert werden kann; that cannot be modified programmatically; speziell, ein HTTP **Anfragen**-Header Name.

Konstrast mit {{Glossary("Forbidden response header name")}}.

Diese sind verboten, so, dass der User-Agent komplette Kontrolle über sie behällt. Namen die mit \``Sec-`\` anfangen, sind reserviert, um neue Header zu erstellen, die sicher von {{glossary("API","APIs")}} die [Fetch](/de/docs/Web/API/Fetch_API) nutzen sind, welche Entwicklern Kontrolle über Header, wie {{domxref("XMLHttpRequest")}}, gibt.

Ein verbotener Header-Name fängt mit `Proxy-` oder `Sec-` an, oder ist einer der folgenen:

- `Accept-Charset`
- `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`
- `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Host`
- `Keep-Alive`
- `Origin`
- `Proxy-`
- `Sec-`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`

> **Note:** **Beachte**: Der `User-Agent`-Header ist [per Spezifikation](https://fetch.spec.whatwg.org/#terminology-headers) nicht mehr verboten — siehe die Verbotene Header-Namen Liste (das wurde in Firefox 43 implementiert,) also kann nun in einem Fetch [Headers](/de/docs/Web/API/Headers) Objekt, per XHR [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest#setRequestHeader%28%29), etc. gesetzt werden.
