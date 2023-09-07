---
title: Public-Key-Pins
slug: conflicting/Web/HTTP/Headers/Expect-CT
---

{{HTTPSidebar}}{{deprecated_header}}

> **Nota:** O mecanismo de Fixação de Chaves Públicas (Public Key Pinning) foi depreciado em favor do [Certificado de Transparência](/pt-BR/docs/Web/Security/Certificate_Transparency) e do cabeçalho {{HTTPHeader("Expect-CT")}}.

O cabeçalho de resposta HTTP **`Public-Key-Pins`** usado para associar uma {{Glossary("key")}} pública criptográfica especifica com um certo servidor web para reduzir o risco de ataques {{Glossary("MITM")}} com certificados forjados, entretanto, ele foi removido em navegadores modernos e não é mais suportado. Use [Certificado de Transparência](/pt-BR/docs/Web/Security/Certificate_Transparency) e o cabeçalho {{HTTPHeader("Expect-CT")}} ao invés disso.

Para mais informação, veja o artigo _[HTTP Public Key Pinning](/pt-BR/docs/Web/HTTP/Public_Key_Pinning)_.

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
Public-Key-Pins: pin-sha256="<pin-value>";
                 max-age=<expire-time>;
                 includeSubDomains;
                 report-uri="<uri>"
```

## Diretivas

- `pin-sha256="<pin-value>"`
  - : A cadeia de caracteres entre aspas duplas é a impressão digital da Informação da Chave Pública do Sujeito \[_Subject Public Key Information_ ({{Glossary("SPKI")}})] codificada em Base64. É possível especificar múltiplos _pins_ para diferentes chaves públicas. Alguns navegadores podem permitir outros algoritmos de hasheamento além do SHA-256 no futuro.
- `max-age=<expire-time>`
  - : O tempo, em segundos, que o navegador deve lembrar que o site só deve ser acessado usando uma das chaves definidas.
- `includeSubDomains` {{optional_inline}}
  - : Se este parâmetro opcional é especificado, este regra vale para todos os subdomínios do site também.
- `report-uri="<uri>"` {{optional_inline}}
  - : Se este parâmetro opcional é especificado, validações de _pin_ que falharam são reportadas ao URL dado.

## Exemplo

> **Aviso:** HPKP tem o potencial de bloquear usuários por um longo período de tempo de usado incorretamente! O uso de _backup_ de certificados e/ou fixação do Autoridade de Certificados é recomendado.

```
Public-Key-Pins:
  pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=";
  pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";
  max-age=5184000; includeSubDomains;
  report-uri="https://www.example.org/hpkp-report"
```

Neste exemplo, **pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="** fixa a chave pública do servidor usada em produção. A segunda declaração de fixação **pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="** também fixa a chave de _backup_. **max-age=5184000** diz ao cliente para guardar esta informação por dois meses, que é um tempo limite razoável de acordo com a IETF RFC. Esta fixação de chave também é valida para todos os subdomínios, que é dito pela declaração do **includeSubDomains**. Finalmente, **report-uri="https\://www\.example.org/hpkp-report"** diz para onde reportar as validação de fixação que falharam.

## Especificações

| Especificação                                            | Título                                |
| -------------------------------------------------------- | ------------------------------------- |
| {{RFC("7469", "Public-Key-Pins", "2.1")}} | Public Key Pinning Extension for HTTP |

## Compatibilidade com navegadores

{{Compat("http.headers.Public-Key-Pins")}}

## Veja também

- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
- {{HTTPHeader("Expect-CT")}}
