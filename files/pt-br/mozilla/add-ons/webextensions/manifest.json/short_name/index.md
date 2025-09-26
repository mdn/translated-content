---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Tipo</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Obrigatório</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Exemplo</th>
      <td>
        <pre class="brush: json no-line-numbers">
"short_name": "Minha Extensão"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Nome abreviado (short name) da extensão. Se informado, ele será usado em contextos onde o campo de nome for muito longo. É recomendado que o nome abreviado não deva exceder 12 caracteres. Se o campo do nome abreviado não for incluído no manifest.json, então o nome será usado em vez disso e pode ser truncado.

Isto é um [propriedade localizável](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Exemplo

```json
"short_name": "Minha Extensão"
```

## Compatibilidade com navegadores

{{Compat}}
