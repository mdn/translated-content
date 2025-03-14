---
title: Extensões do navegador
slug: Mozilla/Add-ons/WebExtensions
---

Extensões são capazes de extender e modificar a capacidade de um navegador. As extensões para Firefox são criadas usando a API WebExtensions, um sistema comum a vários navegadores para desenvolvimento de extensões. Em grande parte, o sistema é compatível com a [API de extensões](https://developer.chrome.com/docs/extensions) suportada pelo Google Chrome, Opera e [W3C Draft Community Group](https://browserext.github.io/browserext/).

Extensões escritas para esses navegadores na maioria dos casos vão funcionar no Firefox ou [Microsoft Edge](https://developer.microsoft.com/microsoft-edge/platform/documentation/extensions/) com [apenas algumas alterações](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome). A API é também totalmente compatível com o [multiprocessamento do Firefox](/pt-BR/docs/Mozilla/Firefox/Multiprocess_Firefox).

Se você tem dúvidas ou sugestões, ou precisa de ajuda para migrar um complemento legado para usar APIs WebExtensions, pode entrar em contato conosco pela [newsletter de desenvolvimento de complementos](https://mail.mozilla.org/listinfo/dev-addons) ou [#webextensions](irc://irc.mozilla.org/webextensions) no [IRC](https://wiki.mozilla.org/IRC).

### Começando

- [O que é uma extensão](/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
- [Sua primeira extensão](/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Sua segunda extensão](/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [Anatomia de uma extensão](/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Extensões de exemplo](/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [E depois?](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/What_next)

### Conceitos

- [Visão geral da API JavaScript](/docs/Mozilla/Add-ons/WebExtensions/API)
- [Scripts de conteúdo](/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Padrões de correspondência](/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [Trabalhando com arquivos](/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internacionalização](/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Melhores práticas de segurança](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/)
- [Política de segurança de conteúdo](/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Troca de mensagens nativa](/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Usando as APIs devtools](/docs/Mozilla/Add-ons/WebExtensions/Using_the_devtools_APIs)
- [Melhores práticas de experiência do usuário](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)
- [Manifestos nativos](/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)

### Interface do usuário

- [Introdução](/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [Botão na barra de ferramenta](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)
- [Botão na barra de ferramenta com um popup](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Botão na barra de endereços](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [Botão na barra de endereços com um popup](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Itens de menu de contexto](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [Painéis laterais](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [Página de opções](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
- [Páginas da extensão](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Bundled_web_pages)
- [Notificação](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [Sugestões na barra de endereços](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [Painéis na ferramenta do desenvolvedor](/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)

### Como

- [Interceptar solicitações HTTP](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Modificar uma página da web](/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Adicionar um botão na barra de ferramenta](/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Implementar uma página de configurações](/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Interagir com a área de transferência](/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Trabalhar com a API de abas](/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Trabalhar com a API de favoritos](/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Trabalhar com a API de cookies](/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Trabalhar com identidades contextuais](/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [Inserir conteúdo externo](/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)

### Portabilidade

- [Portando uma extensão do Google Chrome](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/)
- [Portando uma extensão legada do Firefox](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/)
- [Desenvolvendo para o Firefox para Android](https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/)
- [WebExtensions incorporadas](/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Comparação com Add-on SDK](https://extensionworkshop.com/documentation/develop/comparison-with-the-add-on-sdk/)
- [Comparação com extensões XUL/XPCOM](https://extensionworkshop.com/documentation/develop/comparison-with-xul-xpcom-extensions/)
- [Incompatibilidades com Chrome](/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Diferenças entre desktop e Android](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/)

### Fluxo de trabalho do Firefox

- [Experiência do usuário](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)
- [Instalando](/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [Depurando](/docs/Mozilla/Add-ons/WebExtensions/Debugging)
- [Testando funcionalidades de persistência e reinicialização](https://extensionworkshop.com/documentation/develop/testing-persistent-and-restart-features/)
- [Começando com web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
- [Referência de comandos web-ext](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)
- [Extensões e ID de complementos](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/)
- [Opções de distribuição alternativas](/docs/Mozilla/Add-ons/WebExtensions/Alternative_distribution_options)
- [Solicitando as permissões corretas](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/)
- [Compartilhando objetos com scripts de páginas](/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Publicando sua extensão](/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)
- [Descontinuando sua extensão](/docs/Mozilla/Add-ons/WebExtensions/Retiring_your_extension)
- [Dicas e truques](/docs/Mozilla/Add-ons/WebExtensions/Tips)

### Referências

#### APIs JavaScript

- [Visão geral da API JavaScript](/docs/Mozilla/Add-ons/WebExtensions/API)
- [Tabelas de compatibilidade de navegadores com APIs JavaScript](/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

{{ ListSubpages ("/pt-BR/Add-ons/WebExtensions/API") }}

#### Chaves do Manifest

- [Visão geral do manifest.json](/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Compatibilidade de navegadores com manifest.json](/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ ListSubpages ("/Add-ons/WebExtensions/manifest.json") }}{{AddonSidebar}}
