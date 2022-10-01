---
title: POST
slug: Web/HTTP/Methods/POST
---

{{HTTPSidebar}}

The **HTTP `POST` method** sends data to the server. The type of the body of the request is indicated by the {{HTTPHeader("Content-Type")}} header.

The difference between `PUT` and {{HTTPMethod("POST")}} is that `PUT` is idempotent: calling it once or several times successively has the same effect (that is no _side_ effect), where successive identical `POST` may have additional effects, like passing an order several times.

A `POST` request is typically sent via an [HTML form](/zh-TW/docs/Web/Guide/HTML/Forms) and results in a change on the server. In this case, the content type is selected by putting the adequate string in the {{htmlattrxref("enctype", "form")}} attribute of the {{HTMLElement("form")}} element or the {{htmlattrxref("formenctype", "input")}} attribute of the {{HTMLElement("input") }} or {{HTMLElement("button")}} elements:

- `application/x-www-form-urlencoded`: the keys and values are encoded in key-value tuples separated by `'&'`, with a `'='` between the key and the value. Non-alphanumeric characters in both keys and values are {{glossary("percent-encoding", "percent encoded")}}: this is the reason why this type is not suitable to use with binary data (use `multipart/form-data` instead)
- `multipart/form-data`: each value is sent as a block of data ("body part"), with a user agent-defined delimiter ("boundary") separating each part. The keys are given in the `Content-Disposition` header of each part.
- `text/plain`

When the `POST` request is sent via a method other than an HTML form — like via an {{domxref("XMLHttpRequest")}} — the body can take any type. As described in the HTTP 1.1 specification, `POST` is designed to allow a uniform method to cover the following functions:

- Annotation of existing resources
- Posting a message to a bulletin board, newsgroup, mailing list, or similar group of articles;
- Adding a new user through a signup modal;
- Providing a block of data, such as the result of submitting a form, to a data-handling process;
- Extending a database through an append operation.

| Request has body                                          | Yes                                       |
| --------------------------------------------------------- | ----------------------------------------- |
| Successful response has body                              | Yes                                       |
| {{Glossary("Safe")}}                              | No                                        |
| {{Glossary("Idempotent")}}                      | No                                        |
| {{Glossary("Cacheable")}}                          | Only if freshness information is included |
| Allowed in [HTML forms](/zh-TW/docs/Web/Guide/HTML/Forms) | Yes                                       |

## 格式

```plain
POST /test
```

## 範例

使用 `application/x-www-form-urlencoded` 內容類型的簡易表單:

```plain
POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

使用 `multipart/form-data` 內容類型的表單:

```plain
POST /test HTTP/1.1
Host: foo.example
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
