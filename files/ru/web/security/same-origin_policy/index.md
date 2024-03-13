---
title: Same-origin policy
slug: Web/Security/Same-origin_policy
---

**Политика одинакового источника** (same-origin policy) определяет как документ или скрипт, загруженный из одного источника ({{Glossary("origin")}}), может взаимодействовать с ресурсом из другого источника. Это помогает изолировать потенциально вредоносные документы, снижая количество возможных векторов атак.

## Определение origin

Две страницы имеют одинаковый origin (источник) если протокол , порт (если указан), и хост одинаковы для обеих страниц. Время от времени, вы можете видеть это как "scheme/host/port tuple" (где "tuple" переводится как кортеж или запись набор из трёх компонент, которые вместе составляют единое целое).

В следующей таблице даны примеры origin-сравнений с URL `http://store.company.com/dir/page.html`:

| URL                                               | Outcome | Reason             |
| ------------------------------------------------- | ------- | ------------------ |
| `http://store.company.com/dir2/other.html`        | Success |                    |
| `http://store.company.com/dir/inner/another.html` | Success |                    |
| `https://store.company.com/secure.html`           | Failure | Different protocol |
| `http://store.company.com:81/dir/etc.html`        | Failure | Different port     |
| `http://news.company.com/dir/other.html`          | Failure | Different host     |

Смотрите также [origin definition for `file:` URLs](/ru/docs/Same-origin_policy_for_file:_URIs).

### Наследование origins

Контент из `about:blank` и `javascript:` адреса наследуют источник документа, содержащего этот URL, поскольку они не содержат информации о сервере происхождения.

> **Примечание:** Например, `about:blank` часто используется в качестве URL новых, пустых окон в которые родительский скрипт записывает контент (например, с помощью {{domxref("Window.open()")}}). Если это окно также содержит JavaScript, то скрипт будет наследовать то же происхождение, что и его родитель.

> **Предупреждение:** `data:` адреса получают новый, пустой, безопасный контекст.

### Исключения в Internet Explorer

Internet Explorer два основных исключения из политики одно происхождения:

- Trust Zones (Зоны доверия)
  - : Если оба домена находятся в зоне высокого доверия (например, зоны корпоративной интрасети), то ограничения на одно и то же происхождение не применяется.
- Порт
  - : IE не включает порт в same-origin проверку. Следовательно, `https://company.com:81/index.html` и `https://company.com/index.html` являются адресами одного происхождения и ограничения действовать не будут.

Эти исключения являются нестандартными и не поддерживаются в любом другом браузере

## Изменение origin

Страница может изменить свой оригинальный origin с некоторыми ограничениями. Скрипт может установить значение {{domxref("document.domain")}} на текущий домен или супердомен текущего домена. Если значение будет установлено на супердомен текущего домена, более короткий домен будет использован для последующей проверки origin'а. Например, предполагается, что скрипт в документе по адресу `http://store.company.com/dir/other.html` выполняется следующим выражением:

```js
document.domain = "company.com";
```

После этого, страница может пройти такую же проверку на `http://company.com/dir/page.html` (`предполагая, что http://company.com/dir/page.html` установил `document.domain` в значение "`company.com`" чтобы указать, что у него получилось разрешение - смотри {{domxref("document.domain")}}). Однако, `company.com` **не может** установить `document.domain` в значение `othercompany.com`, поскольку это значение не является супердоменом `company.com`.

Номер порта проверяется браузером отдельно. Любой вызов `document.domain`, включающий `document.domain = document.domain`, заменяет номер порта, устанавливая его в значение `null`. Следовательно, **невозможно** вызов `company.com:8080` обозначить `company.com` одной лишь установкой `document.domain = "company.com"` в начале. Он должен быть установлен в обоих случаях и номер портов в этих случаях должны равняться значению `null`.

> **Примечание:** Когда используется `document.domain` для разрешения поддомена для родительского доступа к нему, вы должны установить `document.domain` в _такое же значение,_ как в родительском домене, так и в поддомене. Это необходимо, даже если при этом просто восстанавливается исходное значение родительского домена. Несоблюдение этого правила может привести к ошибкам разрешений.

## Cross-origin network access

The same-origin policy controls interactions between two different origins, such as when you use {{domxref("XMLHttpRequest")}} or an {{htmlelement("img")}} element. These interactions are typically placed into three categories:

- Cross-origin _writes_ are typically allowed. Examples are links, redirects and form submissions. Certain rarely used HTTP requests require [preflight](/ru/docs/HTTP/Access_control_CORS#Preflighted_requests).
- Cross-origin _embedding_ is typically allowed. Examples are listed below.
- Cross-origin _reads_ are typically not allowed, but read access is often leaked by embedding. For example, you can read the width and height of an embedded image, the actions of an embedded script, or the [availability of an embedded resource](https://bugzilla.mozilla.org/show_bug.cgi?id=629094).

Here are some examples of resources which may be embedded cross-origin:

- JavaScript with `<script src="..."></script>`. Error messages for syntax errors are only available for same-origin scripts.
- CSS with `<link rel="stylesheet" href="...">`. Due to the [relaxed syntax rules](http://scarybeastsecurity.blogspot.dk/2009/12/generic-cross-browser-cross-domain.html) of CSS, cross-origin CSS requires a correct `Content-Type` header. Restrictions vary by browser: [IE](http://msdn.microsoft.com/en-us/library/ie/gg622939%28v=vs.85%29.aspx), [Firefox](http://www.mozilla.org/security/announce/2010/mfsa2010-46.html), [Chrome](http://code.google.com/p/chromium/issues/detail?id=9877), [Safari](http://support.apple.com/kb/HT4070) (scroll down to CVE-2010-0051) and [Opera](http://www.opera.com/support/kb/view/943/).
- Images with {{htmlelement("img")}}. Supported image formats include PNG, JPEG, GIF, BMP, SVG, ...
- Media files with {{htmlelement("video")}} and {{htmlelement("audio")}}.
- Plug-ins with [`<object>`](/ru/docs/HTML/Element/object), [`<embed>`](/ru/docs/HTML/Element/embed) and [`<applet>`](/ru/docs/HTML/Element/applet).
- Fonts with [`@font-face`](/ru/docs/CSS/@font-face). Some browsers allow cross-origin fonts, others require same-origin fonts.
- Anything with [`<frame>`](/ru/docs/HTML/Element/frame) and [`<iframe>`](/ru/docs/HTML/Element/iframe). A site can use the [`X-Frame-Options`](/ru/docs/HTTP/X-Frame-Options) header to prevent this form of cross-origin interaction.

### How to allow cross-origin access

Use [CORS](/ru/docs/HTTP/Access_control_CORS) to allow cross-origin access.

### How to block cross-origin access

- To prevent cross-origin writes, check for an unguessable token in the request, known as a [Cross-Site Request Forgery (CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29) token. You must prevent cross-origin reads of pages that know this token.
- To prevent cross-origin reads of a resource, ensure that it is not embeddable. It is often necessary to prevent embedding because embedding a resource always leaks some information about it.
- To prevent cross-origin embedding, ensure that your resource cannot be interpreted as one of the embeddable formats listed above. The browser does not respect the `Content-Type` in most cases. For example, if you point a `<script>` tag at an HTML document, the browser will try to parse the HTML as JavaScript. When your resource is not an entry point to your site, you can also use a CSRF token to prevent embedding.

## Cross-origin script API access

JavaScript APIs such as [`iframe.contentWindow`](/ru/docs/DOM/HTMLIFrameElement), {{domxref("window.parent")}}, {{domxref("window.open")}} and {{domxref("window.opener")}} allow documents to directly reference each other. When the two documents do not have the same origin, these references provide very limited access to [`Window`](/ru/docs/Web/API/Window) and [`Location`](/ru/docs/Web/API/Location) objects, as described in the next two sections.

To communicate further between documents from different origins, use {{domxref("window.postMessage")}}.

### Window

Specification: <http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#security-window>.

The following cross-origin access to `Window` properties is allowed:

| Methods                           |
| --------------------------------- |
| {{domxref("window.blur")}}        |
| {{domxref("window.close")}}       |
| {{domxref("window.focus")}}       |
| {{domxref("window.postMessage")}} |

| Attributes                     |             |
| ------------------------------ | ----------- |
| {{domxref("window.closed")}}   | Read only.  |
| {{domxref("window.frames")}}   | Read only.  |
| {{domxref("window.length")}}   | Read only.  |
| {{domxref("window.location")}} | Read/write. |
| {{domxref("window.opener")}}   | Read only.  |
| {{domxref("window.parent")}}   | Read only.  |
| {{domxref("window.self")}}     | Read only.  |
| {{domxref("window.top")}}      | Read only.  |
| {{domxref("window.window")}}   | Read only.  |

Some browsers allow access to more properties than the specification allows.

### Location

Specification: <http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#security-location>.

The following cross-origin access to `Location` properties is allowed:

| Methods                         |
| ------------------------------- |
| {{domxref("location.replace")}} |

| Attributes                   |             |
| ---------------------------- | ----------- |
| {{domxref("URLUtils.href")}} | Write only. |

Some browsers allow access to more properties than the specification allows.

## Cross-origin data storage access

Access to data stored in the browser such as [localStorage](/ru/docs/Web/Guide/API/DOM/Storage) and [IndexedDB](/ru/docs/IndexedDB) are separated by origin. Each origin gets its own separate storage, and JavaScript in one origin cannot read from or write to the storage belonging to another origin.

Cookies use a separate definition of origins. A page can set a cookie for its own domain or any parent domain, as long as the parent domain is not a public suffix. Firefox and Chrome use the [Public Suffix List](http://publicsuffix.org/) to determine if a domain is a public suffix. Internet Explorer uses its own internal method to determine if a domain is a public suffix. The browser will make a cookie available to the given domain including any sub-domains, no matter which protocol (HTTP/HTTPS) or port is used. When you set a cookie, you can limit its availability using the Domain, Path, Secure and Http-Only flags. When you read a cookie, you cannot see from where it was set. Even if you use only secure https connections, any cookie you see may have been set using an insecure connection.

## See also

- [Same-origin policy for file: URIs](/ru/docs/Same-origin_policy_for_file:_URIs)
- [Same-Origin Policy at W3C](http://www.w3.org/Security/wiki/Same_Origin_Policy)

## Original Document Information

- Author(s): Jesse Ruderman

{{QuickLinksWithSubpages("/ru/docs/Web/Security")}}
