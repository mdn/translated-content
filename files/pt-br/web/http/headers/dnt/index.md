---
title: DNT
slug: Web/HTTP/Headers/DNT
---

{{HTTPSidebar}}

O cabeçalho de requisição **`DNT`** (**D**o **N**ot **T**rack) indica a preferência do usuário de permitir ser "seguido". Ele indica se o usuário prefere privacidade ao invés de conteúdo personalizado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
DNT: 0
DNT: 1
```

## Diretivas

- 0
  - : O usuário prefere **permitir** ser seguido no site alvo.
- 1
  - : O usuário prefere **não permitir** ser seguido no site alvo.

## Exemplos

### Lendo status Do Not Track status do JavaScript

A preferência DNT do usuário também pode ser lida do JavaScript usando a propriedade {{domxref("Navigator.doNotTrack")}}:

```js
navigator.doNotTrack; // "0" or "1"
```

## Especificações

| Especificação                                                                      | Status                | Comentários        |
| ---------------------------------------------------------------------------------- | --------------------- | ------------------ |
| {{SpecName('Tracking','#dnt-header-field', 'DNT Header Field for HTTP Requests')}} | {{Spec2("Tracking")}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("http.headers.DNT")}}

## Veja também

- {{domxref("Navigator.doNotTrack")}}
- Cabeçalho {{HTTPHeader("Tk")}}
- [Do Not Track no Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [donottrack.us](https://donottrack.us/)
- Ajuda das configurações DNT dos navegadores:

  - [Firefox](https://www.mozilla.org/pt-BR/firefox/dnt/)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
