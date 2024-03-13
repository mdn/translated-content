---
title: Onde está tudo no MDN? Um guia para nossos repositórios
slug: MDN/Community/Contributing/Our_repositories
---

{{MDNSidebar}}

MDN é um projeto complexo com muitas partes móveis. É fácil começar a contribuir para o site, se você sabe um pouco sobre GitHub e está começando com algum erro de escrita simples ou pequenas melhorias de código. Contudo, quando você começa a fazer contribuições significantes como adicionar páginas completamente novas, você vai notar que alguns pedaços de conteúdo não estão no código fonte da página e, ao invés disso, vem de algum outro lugar.

Este artigo age como um guia rápido para encontrar diferentes repositórios que você precisa editar e atualizar para mudar diferentes partes do conteúdo do MDN.

## Repositórios principais

- **Conteúdo principal**: <https://github.com/mdn/content>. O repositório mais importante para o conteúdo do MDN — Aqui é onde todo o conteúdo base, em inglês, do site está armazenado, e onde você vai fazer mudanças padrões para o conteúdo da página.
- **Plataforma MDN**: <https://github.com/mdn/yari>. Aqui é onde a plataforma MDN é armazenada, e onde você vai se quiser fazer mudanças de alto nível na estrutura de páginas do MDN ou no maquinário de renderização.
- **Dados de compatibilidade do Browser**: <https://github.com/mdn/browser-compat-data>. Aqui é onde os dados usados para gerar as tabelas de compatibilidade dos browsers em nossas páginas de referências são armazenados (exemplo). Vá aqui para fazer mudanças nos dados de compatibilidade!
- **Exemplos interativos**: <https://github.com/mdn/interactive-examples>. Este repositório armazena o renderizador de código e blocos de código de exemplo que juntos produzem os belos, editáveis e copiáveis exemplos encontrados no topo de muitas de nossas páginas de referência (exemplo). Edite esses exemplos aqui.
- **Conteúdo traduzido**: <https://github.com/mdn/translated-content>. Aqui é onde mora nosso conteúdo localizado. Vá aqui se você quiser ajudar a traduzir páginas em qualquer um de nossos locais mantidos ativamente.
- **Dados CSS**: <https://github.com/mdn/data>. Originalmente previsto para ser um repositório que guarda os dados gerais do MDN, o repositório agora tem o propósito de guardar dados sobre funcionalidades do CSS como sintaxe formal, herança, valor computado, tipos de animação, etc. Ele é usado para gerar seções nas páginas de referências de CSS como uma definição formal (exemplo) e sintaxe formal (exemplo).

## Outros repositórios

- **Repositório de demos**. O GitHub da organização do MDN contém um grande número de repositórios de demonstração, por exemplo [css-examples](https://github.com/mdn/css-examples), [dom-examples](https://github.com/mdn/dom-examples), [webaudio-examples](https://github.com/mdn/webaudio-examples). Estes, no geral, contém exemplos autônomos que são frequentemente ligados as páginas do MDN, mas, ocasionalmente, você vai encontrar algum destes exemplos embutidos em uma página usando uma chamada macro como esta — \\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}. Se você quer editar o exemplo autônomo, ele sempre será encontrado em algum destes repositórios de exemplos.
- **MDN-minimalist**: <https://github.com/mdn/mdn-minimalist>. As informações base de estilização do MDN. Se você quer ajudar a melhorar o estilo CSS do MDN, este é o lugar para visitar.
