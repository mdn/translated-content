---
title: HTML Импорты
slug: conflicting/Web/Web_Components
original_slug: Web/Web_Components/HTML_Imports
---

> **Предупреждение:** Firefox will not ship _HTML Imports_ in its current form. See this [status update](https://hacks.mozilla.org/2015/06/the-state-of-web-components/) for more information. Until there is a consensus on the standard or alternative mechanisms are worked out, you can use a polyfill such as Google's [`webcomponents.js`](https://github.com/webcomponents/webcomponentsjs).

_HTML Импорты_ is intended to be the packaging mechanism for [web components](/ru/docs/Web/Web_Components), but you can also use HTML Imports by itself.

You import an HTML file by using a [`<link>`](/ru/docs/Web/HTML/Element/link) tag in an HTML document like this:

```
<link rel="import" href="myfile.html">
```

The `import` link type is new.

## Specification

<table class="spec-table standard-table">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>{{SpecName('HTML Imports', "", "")}}</td>
      <td>{{Spec2('HTML Imports')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>
