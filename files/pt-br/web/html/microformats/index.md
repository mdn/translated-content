---
title: Microformatos
slug: Web/HTML/microformats
---

{{HTMLSidebar}}

[_Microformatos_](http://microformats.org/) (ás vezes abreviado como **μF**) são convenções utilizadas para incorporar convenções semânticas em HTML e providenciar uma API a ser usada por mecanismos de pesquisa, agregadores e outras ferramentas. Esses padrões mínimos de HTML são usados para marcar entidades que variam de informações fundamentais a específicas de domínio, como pessoas, organizações, eventos e locais.

Os microformatos são suportados pelos principais mecanismos de pesquisa. Os dados são transportados na propriedade de classe que pode ser adicionada a qualquer elemento HTML. Além de legíveis por máquina, seu formato é projetado para ser facilmente lido por humanos.

Existem [bibliotecas de análise para a maioria das linguagens](http://microformats.org/wiki/microformats2#Parsers) para microformatos2.

### Como os Microformatos Funcionam?

Um autor de uma página web pode adicionar microformatos no seu HTML. Por exemplo se ele quer se identificar ele podem utilizar um [h-card](http://microformats.org/wiki/h-card) como:

```html
<a class="h-card" href="http://example.com">Joe Bloggs</a>
```

Quando um analisador encontra esse dado, ele saberá que nessa página contém um "card" que descreve uma pessoa ou uma organização chamada `Joe Blogger` com uma URL de `http://example.com/`. O analisador disponibiliza esses dados por meio de APIs que podem ser usadas por diferentes aplicativos.

Como neste exemplo, alguns padrões de marcação requerem apenas um único nome de classe raiz de microformato, que os analisadores usam para encontrar algumas propriedades genéricas, como: `name`, `url`, `photo`.

## Prefixos de Microformatos

Todos os microformatos consistem de uma raíz e uma coleção de propriedades. As propriedades são opcionais e potencilamente multivaloradas - aplicações que necessitam de um valor único devem utilizar a primeira instância de uma propriedade. Os dados hierárquicos são representados com microformatos aninhados, normalmente como valores de propriedade.

Todas os nomes de classes de microformatos utilizam prefixos. Os prefixos são Os prefixos são **independentes da sintaxe dos vocabulários**, os quais são desenvolvidos separadamente.

- **"h-\*" para nome de classes raíz**, p.ex "h-card", "h-entry", "h-feed", e várias outras. Essas classes de alto nível normalmente indicam um tipo e o vocabulário esperado de propriedades correspondente. Por exemplo:

  - [h-card](http://microformats.org/wiki/h-card) descreve uma pessoa ou uma organização.
  - [h-entry](http://microformats.org/wiki/h-entry) descreve conteúdo on-line em série ou com data marcada como uma postagem de blog.
  - [h-feed](http://microformats.org/wiki/h-feed) descreve um fluxo de dados ou um feed de postagens.
  - Você pode encontrar vários outros You can find many more [vocabulários na wiki de microformatos2.](http://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" para propriedades de texto simples,** p.ex "p-name", "p-summary"

  - Análise de texto simples, texto de elemento em geral. Em certos elementos HTML, use atributos especiais primeiro, por exemplo img / alt, abbr / título.

- **"u-\*" para propriedades URL**, p.ex "u-url", "u-photo", "u-logo"

  - Análise especial necessária: prefer a/href, img/src, object/data etc. atributos sobre o conteúdo do elemento.

- **"dt-\*" para propriedades de data e hora**, p.ex "dt-start", "dt-end", "dt-bday"

  - Análise especial necessária: [value-class-pattern](http://microformats.org/wiki/value-class-pattern) and separate date time value parsing for readability.

- **"e-\*" para propriedades da árvore de elementos** em que toda a hierarquia de elementos contidos é o valor, p.ex "e-content". O prefixo "e-" também pode ser lembrado mnemonicamente como "árvore de elementos", "marcação incorporada", ou "marcação encapsulada".

## Alguns exemplos de microformatos

### h-card

O microformato [h-card](http://microformats.org/wiki/h-card) representa uma pessoa ou uma organização.

O valor de cada propriedade é definido no HTML utilizando a propriedade class, qualquer elemento pode receber.

#### Exemplo de h-card

```html
<p class="h-card">
  <img class="u-photo" src="http://example.org/photo.png" alt="" />
  <a class="p-name u-url" href="http://example.org">Joe Bloggs</a>
  <a class="u-email" href="mailto:joebloggs@example.com"
    >joebloggs@example.com</a
  >,
  <span class="p-street-address">17 Austerstræti</span>
  <span class="p-locality">Reykjavík</span>
  <span class="p-country-name">Iceland</span>
</p>
```

| Propriedade            | Descrição                                                          |
| ---------------------- | ------------------------------------------------------------------ |
| **`p-name`**           | O nome completo/formatado da pessoa ou organização                 |
| **`u-email`**          | endereço de e-mail                                                 |
| **`u-photo`**          | uma foto da                                                        |
| **`u-url`**            | página na web ou outra URL representando a pessoa ou a organização |
| **`u-uid`**            | identificador universal único, de preferência URL canônico         |
| **`p-street-address`** | número da rua + enderço                                            |
| **`p-locality`**       | cidade ou vilarejo                                                 |
| **`p-country-name`**   | nome do país                                                       |

#### Exemplo de h-card aninhado

```html
<div class="h-card">
  <a class="p-name u-url" href="http://blog.lizardwrangler.com/"
    >Mitchell Baker</a
  >
  (<a class="p-org h-card" href="http://mozilla.org/">Mozilla Foundation</a>)
</div>
```

JSON analisado:

```js
{
  "items": [{
  "type": ["h-card"],
  "properties": {
    "name": ["Mitchell Baker"],
    "url": ["http://blog.lizardwrangler.com/"],
    "org": [{
    "value": "Mozilla Foundation",
    "type": ["h-card"],
    "properties": {
      "name": ["Mozilla Foundation"],
      "url": ["http://mozilla.org/"]
    }
    }]
  }
  }]
}
```

Nota: o h-card aninhado implica nas propriedades 'name' e 'url', assim como qualquer outro h-card apenas com nome de classe raiz em um `<a href>`.

### h-entry

O microformato [h-entry](http://microformats.org/wiki/h-entry) representa um conteúdo em série ou um conteúdo com data marcada na web. h-entry é frequentemente usado com conteúdo destinado a ser distribuído, p.ex postagens em blog.

Exemplo de h-entry como uma postagem em blog:

```html
<article class="h-entry">
  <h1 class="p-name">Microformats are amazing</h1>
  <p>
    Published by
    <a class="p-author h-card" href="http://example.com">W. Developer</a> on
    <time class="dt-published" datetime="2013-06-13 12:00:00"
      >13<sup>th</sup> June 2013</time
    >
  </p>

  <p class="p-summary">In which I extoll the virtues of using microformats.</p>

  <div class="e-content">
    <p>Blah blah blah</p>
  </div>
</article>
```

#### Propriedades

| Propriedade        | Descrição                                                 |
| ------------------ | --------------------------------------------------------- |
| **`p-name`**       | nome/título da entrada                                    |
| **`p-author`**     | quem escreveu a entrada, h-card opcionalmente incorporado |
| **`dt-published`** | quando a entrada foi publicada                            |
| **`p-summary`**    | breve resumo da entrada                                   |
| **`e-content`**    | conteúdo completo da entrada                              |

#### Exemplo de h-entry analisado

```
<div class="h-entry">
  <p><span class="p-author h-card">
    <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" ><img class="u-photo" src="https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"/></a>
    <a class="p-name u-url" href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">Greg McVerry</a></span>
     Replied to <a class="u-in-reply-to" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/microformats">a post on
   <strong>developer.mozilla.org</strong> </a>:
  </p>
   <p class="p-name e-content">Hey thanks for making this microformats resource</p>
   <p> <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">Greg McVerry</a>
  published this <a class="u-url url" href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"><time class="dt-published"
   datetime="2019-05-31T14:19:09+0000">31 May 2019</time></a></p>
</div>
```

```
{
  "items": [
    {
      "type": [ "h-entry" ],
      "properties": {
        "in-reply-to": [ "https://developer.mozilla.org/pt-BR/docs/Web/HTML/microformats" ],
        "name": [ "Hey thanks for making this microformats resource" ],
        "url": [ "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource" ],
        "published": [ "2019-05-31T14:19:09+0000" ],
        "content": [
          {
            "html": "Hey thanks for making this microformats resource",
            "value": "Hey thanks for making this microformats resource",
            "lang": "en"
          }
        ],
        "author": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Greg McVerry" ],
              "photo": [ "https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg" ],
              "url": [ "https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" ]
            },
            "lang": "en",
            "value": "Greg McVerry"
          }
        ]
      },
      "lang": "en"
    }
```

### h-feed

O [h-feed](http://microformats.org/wiki/h-feed) é um fluxo de dados ou um feed de posts de [h-entry](http://microformats.org/wiki/h-entry), como postagens completas em uma página inicial ou em páginas de arquivo, sumários ou outras listagens de postagens

#### Exemplo h-feed

```html
<div class="h-feed">
  <h1 class="p-name">Microformats Blogs</h1>
  <article class="h-entry">
    <h2 class="p-name">Microformats are amazing</h2>
    <p>
      Published by
      <a class="p-author h-card" href="http://example.com">W. Developer</a> on
      <time class="dt-published" datetime="2013-06-13 12:00:00"
        >13<sup>th</sup> June 2013</time
      >
    </p>
    <p class="p-summary">
      In which I extoll the virtues of using microformats.
    </p>
    <div class="e-content"><p>Blah blah blah</p></div>
  </article>
</div>
```

#### Propriedades

| Propriedades   | Descrição                                              |
| -------------- | ------------------------------------------------------ |
| **`p-name`**   | nome do feed                                           |
| **`p-author`** | autor do feed, opcionalmente incorporado com um h-card |

#### Filhos

| **h-entry aninhado**                   |     |
| -------------------------------------- | --- |
| objetos representando os itens do feed |     |

### h-event

O `h-event` é para evento na web. O h-event é frequentemente usado com listagens de eventos e páginas de eventos individuais.

```html
<div class="h-event">
  <h1 class="p-name">Microformats Meetup</h1>
  <p>
    From
    <time class="dt-start" datetime="2013-06-30 12:00"
      >30<sup>th</sup> June 2013, 12:00</time
    >
    to <time class="dt-end" datetime="2013-06-30 18:00">18:00</time> at
    <span class="p-location">Some bar in SF</span>
  </p>
  <p class="p-summary">
    Get together and discuss all things microformats-related.
  </p>
</div>
```

#### Propriedades

| Propriedade      | Descrição                                                |
| ---------------- | -------------------------------------------------------- |
| **`p-name`**     | nome do evento (ou título)                               |
| **`p-summary`**  | breve sumário do evento                                  |
| **`dt-start`**   | data e hora de início do evento                          |
| **`dt-end`**     | data e hora de termino do evento                         |
| **`p-location`** | local do evento, opcionalmente incorporado com um h-card |

#### Exemplo de h-event analisado

```
<div class="h-event">
  <h2 class="p-name">IndieWeb Summit</h2>
  <time class="dt-start" datetime="2019-06-29T09:00:00-07:00">June 29, 2019 at 9:00am  (-0700)</time><br>through <time class="dt-end" datetime="2019-06-30T18:00:00-07:00">June 30, 2019 at 6:00pm (-0700)</time><br>
  <div class="p-location h-card">
    <div>
    <span class="p-name">Mozilla</span>
     </div>
     <div>
      <span class="p-street-address">1120 NW Couch St</span>,
      <span class="p-locality">Portland</span>,
      <span class="p-region">Oregon</span>,
      <span class="p-country">US</span>
     </div>
       <data class="p-latitude" value="45.52345"></data>
      <data class="p-longitude" value="-122.682677"></data>
  </div>
    <div class="e-content">Come join us
     </div>
    <div>
     <span class="p-author h-card"><a class="u-url p-name" href="https://aaronparecki.com">Aaron Parecki</a></span> Published this <a href="https://aaronparecki.com/2019/06/29/1/" class="u-url">event </a>on <time class="dt published" datetime="2019-05-25T18:00:00-07:00">May 5th, 2019</time>
    </div>
</div>
```

```
{
  "items": [
    {
      "type": [ "h-event" ],
      "properties": {
        "name": [ "IndieWeb Summit" ],
        "url": [ "https://aaronparecki.com/2019/06/29/1/" ],
        "author": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Aaron Parecki" ],
              "url": [ "https://aaronparecki.com"]
            },
            "lang": "en",
            "value": "Aaron Parecki"
          }
        ],
        "start": [ "2019-06-29T09:00:00-07:00" ],
        "end": [ "2019-06-30T18:00:00-07:00" ],
        "published": [ "2019-05-25T18:00:00-07:00" ],
        "content": [
          {
            "html": "Come join us",
            "value": "Come join us",
            "lang": "en"
          }
        ],
        "location": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Mozilla" ],
              p-street-address: [ "1120 NW Couch St" ]
              "locality": [ "Portland" ],
              "region": [ "Oregon" ],
              "country": [ "US" ],
              "latitude": [ "45.52345" ],
              "longitude": [ "-122.682677" ]
            },
            "lang": "en",
            "value": "Mozilla"
          }
        ]
      },
      "lang": "en"
    }
  ],
```

See also

- [Microformat](https://pt.wikipedia.org/wiki/Microformat) na Wikipedia
- [Site oficial dos Microformatos](http://microformats.org/)
- [Motores de busca suportados](http://microformats.org/wiki/search_engines) no site oficial do Microformats
- [Microformatos no IndieWebCamp](https://indiewebcamp.com/microformats)
