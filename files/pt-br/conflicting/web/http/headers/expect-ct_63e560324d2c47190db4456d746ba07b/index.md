---
title: Public-Key-Pins-Report-Only
slug: conflicting/Web/HTTP/Headers/Expect-CT_63e560324d2c47190db4456d746ba07b
---

{{HTTPSidebar}}{{deprecated_header}}

> **Nota:** O mecanismo de Fixação de Chave Pública (_Public Key Pinning_) foi depreciado em favor do [Certificado de Transparência (Certificate Transparency)](/pt-BR/docs/Web/Security/Certificate_Transparency) e do cabeçalho {{HTTPHeader("Expect-CT")}}.

O cabeçalho de resposta HTTP **`Public-Key-Pins-Report-Only`** era utilizado para enviar relatórios de violação de fixação para a `report-uri` especificada em cabeçalho mas, diferente do {{HTTPHeader("Public-Key-Pins")}} que ainda permite os navegadores se conectarem ao servidor se a fixação é violada. O cabeçalho é silenciosamente ignorado em navegadores modernos já que o suporte para HPKP foi removido. Use o [Certificado de Transparência](/pt-BR/docs/Web/Security/Certificate_Transparency) e o cabeçalho {{HTTPHeader("Expect-CT")}} ao invés disso.

Para mais informação, veja a página de referência do cabeçalho {{HTTPHeader("Public-Key-Pins")}} e o artigo de [Fixação de Chaves Públicas HTTP (HTTP Public Key Pinning)](/pt-BR/docs/Web/HTTP/Public_Key_Pinning).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Public-Key-Pins-Report-Only: pin-sha256="<pin-value>";
                             max-age=<expire-time>;
                             includeSubDomains;
                             report-uri="<uri>"
```

## Diretivas

- `pin-sha256="<pin-value>"`
  - : A cadeia de caracteres entre aspas duplas é a impressão digital da Informação da Chave Pública do Sujeito \[_Subject Public Key Information_ ({{Glossary("SPKI")}})] codificada em Base64. É possível especificar múltiplos _pins_ para diferentes chaves públicas. Alguns navegadores podem permitir outros algoritmos de hasheamento além do SHA-256 no futuro.
- max-age=\<expire-time>
  - : Esta diretiva não tem significado para o cabeçalho Public-Key-Pins-Report-Only, ela será ignorada pelos agentes de usuário e o cabeçalho não será cacheado.
- `includeSubDomains` {{optional_inline}}
  - : Se este parâmetro opcional for especificado, esta regra é aplicada a todos os subdomínios do site também.
- `report-uri="<uri>"`
  - : Falhas na validação da fixação são reportadas para a URL dada. Esta diretiva deve ser usada com este cabeçalho, caso contrário o cabeçalho não terá efeito.

## Exemplo

```
Public-Key-Pins-Report-Only:
  pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=";
  pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";
  includeSubDomains;
  report-uri="https://www.example.org/hpkp-report"
```

Neste exemplo, **pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="** fixa a chave pública do servidor em produção. A segunda declaração de fixação **pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="** também fixa a chave de _backup_. Esta fixação de chave também é válida para todos os subdomínios, que é dito pela declaração **includeSubDomains**. Finalmente, **report-uri="https\://www\.example.org/hpkp-report"** explica para onde devem ser reportar falhas de validação de fixação.

## Especificações

| Especificação                                                            | Título                                |
| ------------------------------------------------------------------------ | ------------------------------------- |
| {{RFC("7469", "Public-Key-Pins-Report-Only", "2.1")}} | Public Key Pinning Extension for HTTP |

## Compatibilidade com navegadores

{{Compat("http.headers.Public-Key-Pins-Report-Only")}}

## Veja também

- {{HTTPHeader("Public-Key-Pins")}}
