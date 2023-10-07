---
title: O que é um nome de domínio?
slug: Learn/Common_questions/Web_mechanics/What_is_a_domain_name
---

Nesse artigo examinaremos nomes de domínios: o que são, como são estruturados, e como conseguir um.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Primeiro você precisa conhecer
        <strong
          ><a
            href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Como_a_internet_funciona"
            >como a Internet funciona</a
          ></strong
        >
        e entender
        <strong
          ><a href="/en-US/Learn/Understanding_URLs">what URLs are</a>.</strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivos:</th>
      <td>
        Aprender o que são <strong>"nomes de domínios"</strong>, como funcionam,
        e porquê são importantes.
      </td>
    </tr>
  </tbody>
</table>

## Sumário

"Nomes de Domínios" são uma parte fundamental da infraestrutura da Internet. Eles provêm um endereço legível para qualquer servidor web disponível na Internet.

Qualquer computador conectado na Internet pode ser alcançado através de um endereço {{Glossary("IP")}} público, consistido de 32 bits para IPv4 (eles são, normalmente, escritos com quatro grupos de três números entre 0 e 255, separados por pontos (p.e., `173.194.121.32`) ou consistidos de 128 bits para IPv6 (eles são normalmente escritos com oito grupos de 4 números hexadecimais, separados por dois pontos (p.e., `2027:0da8:8b73:0000:0000:8a2e:0370:1337`). Computadores podem manipular esses endereços facilmente, mas as pessoas tem dificuldade em descobrir quem está executando o servidor ou que serviço o site oferece. Endereços de IP são difíceis de lembrar e podem mudar com o tempo. Para resolver todos esses problemas nós usamos endereços legíveis chamados domain names (nomes de domínio).

## Active Learning

_There is no active learning available yet. [Please, consider contributing](/pt-BR/docs/MDN/Getting_started)._

## Deeper dive

### Estrutura dos domain names

Um "nome de domínio" tem uma estrutura simples feita de várias partes (pode ser apenas uma parte, duas, três...), separados por pontos e **lidos da direita para a esquerda**:

![Anatomy of the MDN domain name](structure.png)

Cada uma dessas partes fornece informações específicas sobre todo o domain name.

- {{Glossary("TLD")}} (Top-Level Domain).
  - : O TLD fornece as informações mais genéricas. TLDs informa aos usuários o propósito geral do serviço por trás do nome de domínio. Os TLDs mais genéricos (.com, .org, .net) não requer web services para atender a critérios rigorosos, mas alguns TLDs impõem políticas mais rigorosas. Por exemplo, TLDs locais tais como .us, .fr, or .sh podem exigir que o serviço seja fornecido em um determinado idioma ou hospedado em um determinado país.
- Label (ou componente)
  - : Os labels são os que seguem o TLD. Um label pode ser qualquer coisa, de uma letra a uma frase completa. O label localizado a direita antes do TLD pode também ser referido como um _Domínio de Nível Secundário_ (SLD). Um _nome de domínio_ pode ter muitos labels, não é obrigatório nem necessário ter 3 labels para formar um nome de domínio. Por exemplo, www\.inf.ed.ac.uk é um nome de domínio correto. Ao controlar a parte "superior" de um nome de domínio (p.e. [mozilla.org](https://mozilla.org)), pode-se criar outros nomes de domínios (às vezes chamados de "subdomínios") (p.e. [developer.mozilla.org](/)).

### Comprando um nome de domínio

#### Quem possui um nome de domínio?

Você não pode "comprar um nome de domínio". Você paga pelo direito de usar um nome de domínio por um ano ou mais. Você pode renovar seu direito, e sua renovação tem prioridade sobre as aplicações de outras pessoas. Mas você nunca possui o nome de domínio.

As empresas chamadas registradoras usam registros de nome de domínio para acompanhar as informações técnicas e administrativas que conectam você a seu nome de domínio.

> **Nota:** **Nota :** Alguns nomes de domínios podem não ter um registrador encarregado de acompanhar. Por exemplo, todo o nome sob o domínio .fire é gerenciado pela Amazon.

#### Encontrando um nome de domínio disponível

Para descobrir se um determinado domain name está disponível,

- Ir até um site registrador de nome de domínio. A maioria deles fornece um serviço "whois" que diz se seu nome de domínio está disponível.
- Alternativamente, se você usa um sistema com shell embutido nele, digite um comnaod `whois` nele, como mostrado aqui para `mozilla.org`:

```
$ whois mozilla.org
Domain Name:MOZILLA.ORG
Domain ID: D1409563-LROR
Creation Date: 1998-01-24T05:00:00Z
Updated Date: 2013-12-08T01:16:57Z
Registry Expiry Date: 2015-01-23T05:00:00Z
Sponsoring Registrar:MarkMonitor Inc. (R37-LROR)
Sponsoring Registrar IANA ID: 292
WHOIS Server:
Referral URL:
Domain Status: clientDeleteProhibited
Domain Status: clientTransferProhibited
Domain Status: clientUpdateProhibited
Registrant ID:mmr-33684
Registrant Name:DNS Admin
Registrant Organization:Mozilla Foundation
Registrant Street: 650 Castro St Ste 300
Registrant City:Mountain View
Registrant State/Province:CA
Registrant Postal Code:94041
Registrant Country:US
Registrant Phone:+1.6509030800
```

Como você pode ver, eu não posso registrar `mozilla.org` porque a Mozilla Foundation já registrou.

Por outro lado, vamos ver se eu poderia registrar `afunkydomainname.org`:

```
$ whois afunkydomainname.org
NOT FOUND
```

Como você pode ver, o domínio não existe no banco de dados `whois` (neste momento em que escrevo), então poderíamos pedir para registrá-lo. Bom saber!

#### Obtendo um nome de domínio

O processo é bastante simples:

1. Ir para o site de um registrador.
2. Geralmente há um apelo chamativo "Obeter um domain name" call to action. Clique nele.
3. Preencher o formulário com todos os detalhes requeridos. Certifique-se especialmente de que você não digitou incorretamente o domain name desejado. Uma vez pago, é tarde demais!
4. O registrador informará quando o domain name estiver registrado corretamente. Dentro de algumas horas, todos os servidores de DNS receberão suas informações de DNS.

> **Nota:** Este tempo é frequentemente chamado de **tempo de propagação.** No entanto, este termo não é preciso, pois a atualização não está se propagando (top → down). Os servidores DNS consultados pelo seu computador (abaixo) são aqueles que buscam as informações do servidor autoritativo (superior) quando precisam.

#### Atualização de DNS

Bancos de dados DNS são armazenados em todos os servidores DNS em todo o mundo, e todos esses servidores referem-se a alguns chamados "servidores de nome autoritativo" ou "servidores DNS de nível superior". Sempre que seu registrador cria ou atualiza qualquer informação para um determinado domínio, a informação deve ser atualizada em todo banco de dados DNS. Cada servidor DNS que conhece um determinado domínio armazena as informações por algum tempo antes de serem automaticamente invalidadas e atualizadas (o servidor DNS cosulta novamente um servidor autoritativo). Assim, leva algum tempo para que os servidores DNS que conhecem esse nome de domínio obtenham as informações atualizadas.

> **Nota:** **Note :** This time is often called **propagation time**. However this term is not precise since the update is not propagating itself (top → down). DNS servers queried by your computer (down) are the ones that fetch the information from the authoritative server (top) when they need it.

### Como funciona uma solicitação de DNS?

Como já vimos, quando você deseja exibir uma página da Web em seu navegador, é mais fácil digitar um nome de domínio do que um endereço IP. Vamos dar uma olhada no processo:

1. Digite mozilla.org na barra de localização do seu navegador.
2. Seu navegador pergunta ao seu computador se ele já reconhece o endereço IP identificado por esse nome de domínio (usando um cache DNS local). Em caso afirmativo, o nome é traduzido para o endereço IP e o navegador negocia o conteúdo com o servidor da Web. Fim da história.
3. Se o seu computador não sabe qual IP está por trás do nome mozilla.org, ele vai perguntar a um servidor DNS, cujo trabalho é precisamente informar ao seu computador qual endereço IP corresponde a cada nome de domínio registrado.
4. Agora que o computador conhece o endereço IP solicitado, seu navegador pode negociar o conteúdo com o servidor da web.

![Explanation of the steps needed to obtain the result to a DNS request](2014-10-dns-request2.png)

## Próximos passos

Ok, conversamos muito sobre processos e arquitetura. Hora de seguir em frente.

- Se você quer se envolver, é um bom momento para começar a investigar o design e explorar a [anatomia de uma página da web.](/en-US/Learn/Anatomy_of_a_web_page)
- É importante notar também que alguns aspectos da construção de um site custam dinheiro. Por favor, [consulte quanto custa construir um site](/pt-BR/docs/Learn/How_much_does_it_cost).
- Ou leia mais sobre o [nome de domínio](http://en.wikipedia.org/wiki/Domain_name) na Wikipedia.
- Você também pode encontrar [aqui](https://howdns.works/) uma explicação divertida e colorida de como o DNS funciona.
