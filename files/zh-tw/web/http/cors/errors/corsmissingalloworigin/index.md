---
title: 原因：缺少 CORS 標頭 'Access-Control-Allow-Origin'
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---

{{HTTPSidebar}}

## 原因

```plain
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## What went wrong?

The response to the {{Glossary("CORS")}} request is missing the required {{HTTPHeader("Access-Control-Allow-Origin")}} header, which is used to determine whether or not the resource can be accessed by content operating within the current origin.

If the server is under your control, add the origin of the requesting site to the set of domains permitted access by adding it to the `Access-Control-Allow-Origin` header's value.

For example, to allow a site at `https://amazing.site` to access the resource using CORS, the header should be:

```plain
Access-Control-Allow-Origin: https://amazing.site
```

You can also configure a site to allow any site to access it by using the `"*"` wildcard. You should only use this for public APIs. Private APIs should never use `"*"`, and should instead have a specific domain or domains set. In addition, the wildcard only works for requests made with the {{htmlattrxref("crossorigin")}} attribute set to `"anonymous"`.

```plain
Access-Control-Allow-Origin: *
```

> **警告：** Using the wildcard to allow all sites to access a private API is a bad idea for what should be obvious reasons.

For example, in Apache, add a line such as the following to the server's configuration (within the appropriate `<Directory>`, `<Location>`, `<Files>`, or `<VirtualHost>` section). The configuration is typically found in a `.conf` file (`httpd.conf` and `apache.conf` are common names for these), or in an `.htaccess` file.

```plain
Header set Access-Control-Allow-Origin 'origin-list'
```

For Nginx, the command to set up this header is:

```plain
add_header 'Access-Control-Allow-Origin' 'origin-list'
```

## 參見

- [CORS errors](/zh-TW/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/zh-TW/docs/Web/HTTP/CORS)
