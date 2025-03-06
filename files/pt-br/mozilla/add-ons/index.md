---
title: Complementos
slug: Mozilla/Add-ons
---

{{AddonSidebar}}Modifique e amplie os aplicativos da Mozilla

**Complementos** acrescentam novas funcionalidades para os aplicativos baseados no [Gecko](/pt-BR/docs/Mozilla/Gecko) tais como Firefox, SeaMonkey e Thunderbird. Há dois tipos de complementos principais [Extensões](/pt-BR/docs/Mozilla/Add-ons/Gerenciador_de_Add-on#Extensoes) adicionam novas características para o aplicativo, enquanto [Temas](/pt-BR/docs/Mozilla/Add-ons/Temas) modificam a interface do aplicativo do usuário.

Para ambos, extensões e temas, a Mozilla opera o repositório em [addons.mozilla.org](https://addons.mozilla.org), também conhecido como AMO. Quando você [Envia complementos para o AMO](/pt-BR/docs/Mozilla/Add-ons/Enviando-um-complemento-para-o-AMO) eles são revisados e depois de passados na revisão, são disponibilizados aos usuários. Você não tem que enviar complementos para AMO, mas se enviar, os usuários terão mais confiança no fato de que eles foram revisados, e você pode se beneficiar da visibilidade AMO como uma fonte confiável para complementos úteis.

O termo "complemento"(Add-ons) inclui plugins, extensões, temas, e plug-ins de mecanismos de busca (tal como google, bing, etc.).

O [Gerenciador de complementos](/pt-BR/docs/Mozilla/Add-ons/Gerenciador_de_Add-on) pode afetar o comportamento do aplicativo que o hospeda. Nós desenvolvemos [orientações de complementos](/pt-BR/docs/Mozilla/Add-ons/Orientacoes-de-complementos) para ajudar a garantir que eles proveriam uma boa experiência para os usuários. Estas orientações se aplicam em todos tipos de complementos, mesmo se eles são hospedados em [addons.mozilla.org](https://addons.mozilla.org) ou não.

O [Gerenciador de complementos](/pt-BR/docs/Mozilla/Add-ons/Gerenciador_de_Add-on) dá acesso aos complementos a fim de determinar o que está disponível, instalar, remover, desativar e atualizar.

## Extensões

Extensões adicionam novas funcionalidades para aplicativos da Mozilla como Firefox e Thunderbird. Eles podem adicionar novos recursos ao navegador, como um jeito diferente de gerenciar as abas, e eles podem modificar o conteúdo da web para aperfeiçoar a usabilidade ou segurança sites específicos.

Há três tipos de técnicas diferentes que você pode utilizar para construir uma extensão: Add-on baseado em extensões SDK, extensões _restartless_ inicializadas manualmente e extensões overlay.

- Desenvolva extensões que não requer a reinicialização do navegador utilizando um conjunto JavaScript APIs de alto nível.
- [Extensões _Restartless_](/pt-BR/docs/Mozilla/Add-ons/Bootstrapped_extensions)
  Desenvolva extensões que não requer a reinicialização do navegador.
- [Extensões Overlay](/pt-BR/docs/Mozilla/Add-ons/Overlay_Extensions)
  Extensões que requerem a reinicialização do navegador para instalar, geralmente usando [overlays XUL](/pt-BR/docs/Mozilla/Tech/XUL/Overlays).

Se você puder, é aconselhável utilizar o Add-on SDK, que usa o mecanismo de extensão restartless mas simplifica determinadas tarefas e limpa depois de si mesmo. Se o Add-on SDK não é suficiente para as suas necessidades, implemente uma extensão restartless manual no lugar.

Para obter mais informações sobre como escolher qual a técnica de usar, leia esta [comparação](/pt-BR/docs/Mozilla/Add-ons/Comparing_Extension_Toolchains).

### Práticas Recomendadas

Não importa como você desenvolve uma extensão, existem algumas orientações que você pode seguir para ajudar a garantir que sua extensão fornece uma experiência tão boa para o usuário o quão possível.

- [Desempenho](/pt-BR/docs/Mozilla/Add-ons/Performance_best_practices_in_extensions)
  - : Assegurando que sua extensão é rápida, responsiva e eficiente para a memória.
- [Segurança](/pt-BR/docs/Mozilla/Add-ons/Security_best_practices_in_extensions)
  - : Assegurando que sua extensão não exponha o usuário para websites maliciosos.
- [Etiqueta](/pt-BR/docs/Mozilla/Add-ons/Extension_etiquette)
  - : Assegurando que sua extensão funcione bem com outras extensões.

### Aplicativo específico

A maioria das documentações assume que você está desenvolvendo para o Firefox Desktop. Se você está desenvolvendo para algum outro aplicativo baseado no Gecko, há diferenças importantes que você precisa saber sobre.

- [Thunderbird](/pt-BR/docs/Mozilla/Add-ons/Thunderbird)
  - : Desenvolvendo extensões para o Thunderbird mail client.
- [Firefox para Android](/pt-BR/docs/Mozilla/Add-ons/Firefox_for_Android)
  - : Desenvolvendo extensões para Firefox para Android.
- [SeaMonkey](/pt-BR/docs/Mozilla/Add-ons/SeaMonkey_2)
  - : Desenvolvendo extensões para [SeaMonkey](https://www.seamonkey-project.org/) suíte de software.

## Temas

Os temas são add-ons que personalizam a IU do aplicativo. Existem dois tipos de temas: temas leves e temas completos.

[Temas Leves](https://addons.mozilla.org/pt-BR/developers/docs/themes) são muito mais simples de implementar do que temas completos, mas fornece a personalização muito limitada.

Com [Temas Completos](/pt-BR/docs/Themes) você pode fazer modificações mais profundas na IU. A documentação para temas completos é fora da data, mas está ligada a aqui como uma possível base para a documentação atualizada.

## Outros tipos de complementos

[Plugins de Search Engine](/pt-BR/docs/Mozilla/Add-ons/Creating_OpenSearch_plugins_for_Firefox) são um tipo simples e muito específico de add-on: eles adicionam novos mecanismos de busca para barra de pesquisa do navegador.

[Plugins](/pt-BR/docs/Glossary/Plugin) ajuda a aplicação a entender o conteúdo web que não é suportado nativamente. Plugins NPAPI são uma tecnologia antiga e os novos sites não devem usá-las. Em geral, os plugins não estão disponíveis na maioria dos sistemas móveis modernos, e os sites devem evitar usar plugins.
