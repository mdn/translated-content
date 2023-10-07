---
title: iarc_rating_id
slug: conflicting/Web/Manifest_e8c4835b067e177a000dc29c18483205
original_slug: Web/Manifest/iarc_rating_id
---

{{QuickLinksWithSubpages("/ru/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json no-line-numbers">
"iarc_rating_id": "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

_`iarc_rating_id`_ - это строка, представляющая [Международной коалиции возрастных рейтингов (IARC)](https://www.globalratings.com/) код сертификации веб-приложения. Он предназначен для определения возраста, для которого подходит веб-приложение.

> **Примечание:** The same code can be shared across multiple participating storefronts, as long as the distributed product remains the same (i.e., doesn’t serve totally different code paths on different storefronts).

## Пример

```json
"iarc_rating_id": "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7"
```

## Specification

| Specification                                                                                | Status                       | Comment             | Feedback                                                                         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- | -------------------------------------------------------------------------------- |
| {{SpecName('Manifest', '#iarc_rating_id-member', 'iarc_rating_id')}} | {{Spec2('Manifest')}} | Initial definition. | [Web App Manifest Working Group drafts](https://github.com/w3c/manifest/issues/) |

## Browser compatibility

{{Compat}}

## See also

- [How IARC Works](https://www.globalratings.com/how-iarc-works.aspx)
- [How developers can get their games and apps rated with IARC](https://www.globalratings.com/for-developers.aspx)
