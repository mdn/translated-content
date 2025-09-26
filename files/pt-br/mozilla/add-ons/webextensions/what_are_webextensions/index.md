---
title: O que são extensões?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---

{{AddonSidebar}}

Extensões são bits de código que modificam a funcionalidade do navegador. Eles são escritos usando as tecnologias padrões da Web - JavaScript, HTML e CSS - além de APIs JavaScript dedicadas. Entre outras coisas, extensões podem adicionar novas funcionalidades para o navegador, ou mudar sua aparência, ou o conteúdo de páginas particulares.

Extensões para Firefox são construídas usando _WebExtensions APIs_, um sistema multi-navegador (_cross-browser_) para o desenvolvimento de extensões. Para uma maior portabilidade, a API é compatível com a [_extension API_,](https://developer.chrome.com/docs/extensions) suportada pelo Google Chrome e pelo Opera. Extensões escritas para esses navegadores, na maioria dos casos, vão rodar no Firefox ou Microsoft Edge [com poucas mudanças](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome). A API é também totalmente compatível com o _[multiprocess Firefox](/pt-BR/docs/Mozilla/Firefox/Multiprocess_Firefox)_.

No passado, você poderia desenvolver extensões para Firefox usando um dos três métodos diferentes: _[XUL/XPCOM overlays](/pt-BR/docs/Mozilla/Add-ons/Overlay_Extensions), [bootstrapped extensions](/pt-BR/docs/Mozilla/Add-ons/Bootstrapped_extensions)_ ou o _[Add-on SDK](/pt-BR/docs/Mozilla/Add-ons/SDK)_. A partir do fim de Novembro de 2017, _WebExtensions APIs_ será o único meio de desenvolver extensões para Firefox, e os outros métodos serão descontinuados.

Se você tem dúvidas ou sugestões, ou precisa de ajuda para migrar um _add-on_ antigo para o _WebExtensions APIs_, você pode entrar em contato conosco pela [_dev-addon mailing list_](https://mail.mozilla.org/listinfo/dev-addons) ou pelo canal _[#extdev](irc://irc.mozilla.org/extdev)_ no [IRC](https://wiki.mozilla.org/IRC).

## Próximos passos

- Para experimentar alguns exemplos de extensões, veja [Exemplos de extensões](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Examples)
- Para aprender sobre a estrutura de uma extensão, acesse [Anatomia de uma Extensão.](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- Para acompanhar do início ao fim o desenvolvimento de uma simples extensão, veja [Sua primeira Extensão.](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
