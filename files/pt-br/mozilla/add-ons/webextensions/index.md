---
title: Extensões do navegador
slug: Mozilla/Add-ons/WebExtensions
tags:
  - Extensões
  - Passo a passo
  - WebExtension
translation_of: Mozilla/Add-ons/WebExtensions
---
Extensões são capazes de extender e modificar a capacidade de um navegador. As extensões para Firefox são criadas usando a API WebExtensions, um sistema comum a vários navegadores para desenvolvimento de extensões. Em grande parte, o sistema é compatível com a [API de extensões](https://developer.chrome.com/extensions) suportada pelo Google Chrome, Opera e [W3C Draft Community Group](https://browserext.github.io/browserext/).

Extensões escritas para esses navegadores na maioria dos casos vão funcionar no Firefox ou [Microsoft Edge](https://developer.microsoft.com/microsoft-edge/platform/documentation/extensions/) com [apenas algumas alterações](/en-US/Add-ons/WebExtensions/Porting_from_Google_Chrome). A API é também totalmente compatível com o [multiprocessamento do Firefox](/en-US/docs/Mozilla/Firefox/Multiprocess_Firefox).

Se você tem dúvidas ou sugestões, ou precisa de ajuda para migrar um complemento legado para usar APIs WebExtensions, pode entrar em contato conosco pela [newsletter de desenvolvimento de complementos](https://mail.mozilla.org/listinfo/dev-addons) ou [#webextensions](irc://irc.mozilla.org/webextensions) no [IRC](https://wiki.mozilla.org/IRC).

### Começando

- [O que é uma extensão](/Add-ons/WebExtensions/What_are_WebExtensions)
- [Sua primeira extensão](/Add-ons/WebExtensions/Your_first_WebExtension)
- [Sua segunda extensão](/Add-ons/WebExtensions/Your_second_WebExtension)
- [Anatomia de uma extensão](/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Extensões de exemplo](/Add-ons/WebExtensions/Examples)
- [E depois?](/docs/Mozilla/Add-ons/WebExtensions/What_next_)

### Conceitos

- [Visão geral da API JavaScript](/docs/Mozilla/Add-ons/WebExtensions/API)
- [Scripts de conteúdo](/Add-ons/WebExtensions/Content_scripts)
- [Padrões de correspondência](/Add-ons/WebExtensions/Match_patterns)
- [Trabalhando com arquivos](/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internacionalização](/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Melhores práticas de segurança](/docs/Mozilla/Add-ons/WebExtensions/Security_best_practices)
- [Política de segurança de conteúdo](/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Troca de mensagens nativa](/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Usando as APIs devtools](/docs/Mozilla/Add-ons/WebExtensions/Using_the_devtools_APIs)
- [Melhores práticas de experiência do usuário](/Add-ons/WebExtensions/User_experience_best_practices)
- [Manifestos nativos](/Add-ons/WebExtensions/Native_manifests)

### Interface do usuário

- [Introdução](/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [Botão na barra de ferramenta](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)
- [Botão na barra de ferramenta com um popup](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Botão na barra de endereços](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [Botão na barra de endereços com um popup](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Itens de menu de contexto](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [Painéis laterais](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [Página de opções](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
- [Páginas da extensão](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Bundled_web_pages)
- [Notificação](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [Sugestões na barra de endereços](/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [Painéis na ferramenta do desenvolvedor](/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)

### Como

- [Interceptar solicitações HTTP](/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
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

- [Portando uma extensão do Google Chrome](/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [Portando uma extensão legada do Firefox](/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [Desenvolvendo para o Firefox para Android](/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android)
- [WebExtensions incorporadas](/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Comparação com Add-on SDK](/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK)
- [Comparação com extensões XUL/XPCOM](/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions)
- [Incompatibilidades com Chrome](/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Diferenças entre desktop e Android](/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android)

### Fluxo de trabalho do Firefox

- [Experiência do usuário](/docs/Mozilla/Add-ons/WebExtensions/User_experience_best_practices)
- [Instalando](/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [Depurando](/Add-ons/WebExtensions/Debugging)
- [Testando funcionalidades de persistência e reinicialização](/docs/Mozilla/Add-ons/WebExtensions/Testing_persistent_and_restart_features)
- [Começando com web-ext](/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)
- [Referência de comandos web-ext](/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference)
- [Extensões e ID de complementos](/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)
- [Opções de distribuição alternativas](/Add-ons/WebExtensions/Alternative_distribution_options)
- [Solicitando as permissões corretas](/docs/Mozilla/Add-ons/WebExtensions/Request_the_right_permissions)
- [Compartilhando objetos com scripts de páginas](/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Publicando sua extensão](/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)
- [Descontinuando sua extensão](/docs/Mozilla/Add-ons/WebExtensions/Retiring_your_extension)
- [Dicas e truques](/Add-ons/WebExtensions/Tips)

### Referências

#### APIs JavaScript

- [Visão geral da API JavaScript](/docs/Mozilla/Add-ons/WebExtensions/API)
- [Tabelas de compatibilidade de navegadores com APIs JavaScript](/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/API") }}

#### Chaves do Manifest

- [Visão geral do manifest.json](/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Compatibilidade de navegadores com manifest.json](/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ ListSubpages ("/Add-ons/WebExtensions/manifest.json") }}{{AddonSidebar}}
