---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
---

{{DefaultAPISidebar("Web Crypto API")}}{{SeeCompatTable}}

A **Web Crypto API** é uma interface que permite um script utilizar criptografias primitivas para criar sistemas usando criptografia.

Uma característica fundamental desta API é permitir a manipulação e o armazenamento de keys de criptografia privadas e secretas sem que o JavaScript tenha acesso aos bits internos das keys.

Essa interface permite que scripts acessem as seguintes primitivas:

- _digest_, a habilidade de computar um hash de um bloco arbitrário de dados com o objetivo de detectar se houve alguma mudança.
- _mac_, a habilidade de computar um código de autenticação de mensagem.
- _sign_ e _verify_, a habilidade de assinar digitalmente um documento e de verificar se uma dada assinatura pertence àquele que afirma ser seu signatário.
- _encrypt_ e _decrypt_, a habilidade de codificar e decodificar um documento utilizando chaves criptográficas.
- _import_ e _export_, a habilidade de importar e exportar keys criptografadas.
- _key generation_, a habilidade de criar uma key ou um par de keys de criptografia segura, sem o uso de uma key base, mas utilizando a entropia do sistema local como fonte de aleatoriedade para essa geração.
- _key wrapping_ e _unwrapping_, a habilidade de transmitir e receber uma key de um terceiro, codificada utilizando uma outra key, sem expor a key subjacente ao código JavaScript.
- _random_, a habilidade de gerar números pseudo-randômicos de criptografia significante.

A Web Crypto API não resolve todos os problemas de criptografia que um site Web ou aplicação pode encontrar:

- Ela não dispensa o respeito ao [modelo de origem idêntica](/pt-BR/docs/Web/Security/Same-origin_policy) do navegador, como em casos em que chaves são fornecidas por autoridades centrais utilizadas por diversos sítios Web.
- Ela é incapaz de interagir com hardwares dedicados, como cartões inteligentes (smartcards), tokens USB ou geradores de aleatoriedade.

> **Aviso:** **Atenção!**
>
> - O mero uso de criptografia não faz seu sistema seguro. Segurança é um **processo** que constantemente avalia os riscos em que um sistema pode incorrer dentro do seu contexto de utilização. O contexto e os riscos que podem ocorrer evoluem no tempo.
> - Quando se lida com segurança, todo o **sistema** precisa ser considerado. No caso da Web Crypto API, os desenvolvedores Web não devem considerar apenas a segurança de seu código ou script, mas também a segurança da conexão que é mantida com o servidor e os dados que o servidor pode manter em texto plano (não criptografado). A segurança geral não será mais forte que a segurança de da parte mais fraca do sistema.

## Interfaces

Alguns navegadores implementam uma interface chamada {{domxref("Crypto")}} sem que ela esteja bem definida ou seja substancialmente criptografado. Para evitar confusões, métodos e propriedades desta interface foram retiradas de navegadores que implementaram Web Crypto API, e todos os métodos Web Crypto API estão disponíveis em uma nova interface: {{domxref("SubtleCrypto")}}. A propriedade {{domxref("Crypto.subtle")}} dá acesso a um objeto que a implementa.

## Casos de uso

A Web Crypto API pode ser utilizada:

- Para verificar que dados não foram alterados por um terceiro. Mesmo se dados foram armazenados sem criptografia, o armazenamento de uma assinatura, gerada a partir de uma senha, permite que pessoas que conhecem a senha identificar se o conteúdo e a assinatura são genuínos.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
