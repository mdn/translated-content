---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
---

{{HTTPSidebar}}

O cabeçalho `Expect-CT` deixa sites optarem em reportar e/ou forçar requirimentos do [Certificado de Transparência](/pt-BR/docs/Web/Security/Certificate_Transparency), para previnir o uso incorreto de certificados do site passar despercebido.

Os requerimentos do CT podem ser satisfeitos utilizando qualquer um dos seguintes mecanismos:

- A extensão do certificado X.509v3 permite embebedar uma marcação de data e hora de certificados assinados reportados por _logs_ individuais.
- A extensão TLS do tipo `signed_certificate_timestamp` enviada durante um _handshake_.
- Dando suporte a OCSP (que é, a extensão TLS `status_request`) e provendo uma `SignedCertificateTimestampList`

> [!NOTE]
> Quando um site habilita o cabeçalho `Expect-CT`, ele está requisitando que o navegador verifique se qualquer certificado para aquele site aparece em **[_logs_ CT públicos](https://www.certificate-transparency.org/known-logs)**.

> **Nota:** **Navegadores ignoram** o cabeçalho `Expect-CT` através do HTTP; o cabeçalho só tem efeito em conexões HTTPS.

> [!NOTE]
> O `Expect-CT` provavelmente se tornará obsoleto em Junho de 2021. Desde Maio de 2018, esperasse que novos certificados suportem SCTs por padrão. Certificados de antes de Maio de 2018 eram permitidos ter uma vida útil de 39 meses, todos eles serão expirados em Junho de 2021.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Expect-CT: report-uri="<uri>",
           enforce,
           max-age=<age>
```

## Diretivas

- `max-age`

  - : O número de segundos depois da recepção do cabeçalho `Expect-CT` durante o qual o agente de usuário deve identificar o hospedeiro da mensagem recebida como um hospedeiro `Expect-CT` conhecido.

    Se o cache receber um valor maior do que ele pode representar, or se qualquer um dos seus cálculos subsequentes estourar o limite, o cache vai considerar este valor a ser 2,147,483,648 (231) ou o maior inteiro positivo que ele pode representar.

- `report-uri="<uri>"` {{optional_inline}}

  - : A URI onde o agente de usuário deve reportar falhas `Expect-CT`.

    Quando presente com a diretiva `enforce`, a configuração é referida como uma configuração "executar-e-reportar", sinalizando ao agente de usuário que ambos o _compliance_ da política do Certificado de Transparência deve ser executado _e_ que as violações devem ser reportadas.

- `enforce` {{optional_inline}}

  - : Sinais ao agente do usuário que conforme a política do Certificado de Transparência deve ser executada (ao invés de somente ser reportada) e o agente de usuário deve recusar futuras conexões que violem a política do Certificado de Transparência.

    Quando ambas as diretivas `enforce` e `report-uri` estiverem presentes, configuração é referida como uma configuração "executar-e-reportar", sinalizando ao agente de usuário que ambos o _compliance_ da política do Certificado de Transparência deve ser executado _e_ que as violações devem ser reportadas.

## Exemplo

O seguinte exemplo especifica uma execução do Certificado de Transparência por 24 horas e reporta violações para `foo.example`.

```
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example/report"
```

## Notas

Certificados de Autoridade Raiz (_Root CAs_) manualmente adicionados para a loja de confiança, sobrescrevendo e suprimindo relatórios e execuções do `Expect-CT`.

Navegadores não vão lembrar de uma política `Expect-CT`, a menos que o site tenha "provado" que ele pode servir um certificado satisfazendo os requerimentos do certificado de transparência. Navegadores implementam seus próprios modelos em relação a quais _logs_ CT são considerados confiáveis para o certificado logar.

Versões do Chrome são desenvolvidas para parar execução de políticas de `Expect-CT` 10 semanas depois da data de instalação da versão.

## Especificações

| Especificação                                                                 | Título                       |
| ----------------------------------------------------------------------------- | ---------------------------- |
| [Internet Draft](https://tools.ietf.org/html/draft-ietf-httpbis-expect-ct-08) | Expect-CT Extension for HTTP |

## Compatibilidade com navegadores

{{Compat}}
