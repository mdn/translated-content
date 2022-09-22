---
title: 'CSP: child-src'
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`child-src`** directive defines the valid sources for [web workers](/zh-CN/docs/Web/API/Web_Workers_API) and nested browsing contexts loaded using elements such as {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}. For workers, non-compliant requests are treated as fatal network errors by the user agent.

| CSP version                           | 2                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------- |
| Directive type                        | {{Glossary("Fetch directive")}}                                                    |
| {{CSP("default-src")}} fallback | Yes. If this directive is absent, the user agent will look for the `default-src` directive. |

## Syntax

One or more sources can be allowed for the child-src policy:

```plain
Content-Security-Policy: child-src <source>;
Content-Security-Policy: child-src <source> <source>;
```

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Examples

### Violation cases

Given this CSP header:

```bash
Content-Security-Policy: child-src https://example.com/
```

This {{HTMLElement("iframe")}} and worker are blocked and won't load:

```html
<iframe src="https://not-example.com"></iframe>

<script>
  var blockedWorker = new Worker("data:application/javascript,...");
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
