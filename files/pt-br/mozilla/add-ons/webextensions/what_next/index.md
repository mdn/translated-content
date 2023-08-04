---
title: O que vem a seguir ?
slug: Mozilla/Add-ons/WebExtensions/What_next
---

{{AddonSidebar}}

Você está pronto para começar a tornar a tua ideia de extensão de navegador uma realidade. Antes de iniciar essa jornada, vale a pena estar ciente de algumas coisas que te ajudarão a torná-la tranquila.

## Teu ambiente de desenvolvimento

Você não precisa de ferramentas de desenvolvimento especiais para criar extensões de navegador: é inteiramente possível criar ótimas extensões de navegador sem mais que um editor de textos. Porém, talvez você tenha desenvolvido para a web e tenha um conjunto de ferramentas e um ambiente que quer usar. Se for assim, você precisa estar ciente de algumas coisas.

Se você usa ferramentas de minificação ou obfuscação para entregar seu código final, você precisará entregar seu código fonte para [o processo de revisão AMO](#The_review_process). Além disso, as ferramentas que você utiliza, — para minificação, obfuscação e contrução — devem ser open source ( ou oferecer uso gratuito sem limites ) e disponíveis para execução no computador do revisor (Windows, Mac ou Linux). Infelizmente, nossos revisores não podem trabalhar com ferramentas comerciais ou baseadas em web.

[Aprenda mais acerca de ferramentas de construção](/pt-BR/Add-ons/Source_Code_Submission#About_build_tools)

## Third-party libraries

Third-party libraries are a great way to add complex features or functionality to your browser extensions quickly. When you submit an extension to the [AMO review process](#The_review_processv), the process will also consider any third-party libraries used. To streamline the review, make sure you always download third-party libraries from their official website or repository, and if the library is minified provide a link to the source code. Please note that third-party libraries cannot be modified in any way.

[Learn more about submitting source code](/pt-BR/Add-ons/Source_Code_Submission)

## The Firefox Add-on Distribution Agreement

Browser extensions need to be signed to install into the release or beta versions of Firefox. Signing takes place in addons.mozilla.org (AMO) and is subject to the terms and conditions of the Firefox Add-on Distribution Agreement. The goal of the agreement is to ensure Firefox users get access to well supported, quality add-ons that enhance the Firefox experience.

[Read the agreement](/Add-ons/AMO/Policy/Agreement)

[Learn more about signing](/pt-BR/Add-ons/WebExtensions/Distribution)

## The review process

When a browser extension is submitted for signing, it's subject to automated review. It may also be subject to a manual review, when the automated review determines that a manual review is needed. Your browser extension won't be signed until it's passed the automated review and may have its signing revoked if it fails to pass the manual review. The review process follows a strict set of guidelines, so it's easy to check and avoid any likely review problems.

[Check out the review policy and guidelines](/pt-BR/Add-ons/AMO/Policy/Reviews)

## AMO featured browser extensions

If you choose to list your browser extension on AMO, your extension could be featured on the AMO website, in the Firefox browser's add-on manager, or elsewhere on a Mozilla website. We've compiled a list of guidelines about how extensions are selected for featuring, by following these guidelines you give your extension the best chance of being featured.

[Learn more about getting your add-ons featured](/pt-BR/Add-ons/AMO/Policy/Featured)

## Continue your learning experience

Now you know what lies ahead, it's time to dive into more details about browser extension development. In the sections that follow, you'll discover:

- More about the fundamental concepts behind browser extensions, starting with details on how to [use the JavaScript APIs](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs).
- A guide to the [user interface components](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/user_interface) available to your browser extensions.
- A collection of how-to guides on achieving key tasks in your extensions or making use of the JavaScript APIs.
- Information on how to port other browser extensions to Firefox.
- Details about the Firefox specific workflows you can use to develop browser extensions.
- A full reference guide to the JavaScript APIs.
- A full reference guide to the Manifest keys.
