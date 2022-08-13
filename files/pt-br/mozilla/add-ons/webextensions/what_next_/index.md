---
title: O que vem a seguir ?
slug: Mozilla/Add-ons/WebExtensions/What_next_
translation_of: Mozilla/Add-ons/WebExtensions/What_next_
original_slug: Mozilla/Add-ons/WebExtensions/O_que_vem_a_seguir_
---
<div>{{AddonSidebar}}</div>

<p>Você está pronto para começar a tornar a tua ideia de extensão de navegador uma realidade. Antes de iniciar essa jornada, vale a pena estar ciente de algumas coisas que te ajudarão a torná-la tranquila.</p>

<h2 id="Teu_ambiente_de_desenvolvimento">Teu ambiente de desenvolvimento</h2>

<p>Você não precisa de ferramentas de desenvolvimento especiais para criar extensões de navegador: é inteiramente possível criar ótimas extensões de navegador sem mais que um editor de textos. Porém, talvez você tenha desenvolvido para a web e tenha um conjunto de ferramentas e um ambiente que quer usar. Se for assim, você precisa estar ciente de algumas coisas.</p>

<p>Se você usa ferramentas de minificação ou obfuscação para entregar seu código final, você precisará entregar seu código fonte para <a href="#The_review_process">o processo de revisão AMO</a>. Além disso, as ferramentas que você utiliza, — para minificação,  obfuscação e contrução — devem ser open source ( ou oferecer uso gratuito sem limites ) e disponíveis para execução no computador do revisor (Windows, Mac ou Linux). Infelizmente, nossos revisores não podem trabalhar com ferramentas comerciais ou baseadas em web.</p>

<p><a href="/en-US/Add-ons/Source_Code_Submission#About_build_tools">Aprenda mais acerca de ferramentas de construção</a></p>

<h2 id="Third-party_libraries">Third-party libraries</h2>

<p>Third-party libraries are a great way to add complex features or functionality to your browser extensions quickly. When you submit an extension to the <a href="#The_review_processv">AMO review process</a>, the process will also consider any third-party libraries used. To streamline the review, make sure you always download third-party libraries from their official website or repository, and if the library is minified provide a link to the source code. Please note that third-party libraries cannot be modified in any way.</p>

<p><a href="/en-US/Add-ons/Source_Code_Submission">Learn more about submitting source code</a></p>

<h2 id="The_Firefox_Add-on_Distribution_Agreement">The Firefox Add-on Distribution Agreement</h2>

<p>Browser extensions need to be signed to install into the release or beta versions of Firefox. Signing takes place in addons.mozilla.org (AMO) and is subject to the terms and conditions of the Firefox Add-on Distribution Agreement. The goal of the agreement is to ensure Firefox users get access to well supported, quality add-ons that enhance the Firefox experience.</p>

<p><a href="/Add-ons/AMO/Policy/Agreement">Read the agreement</a></p>

<p><a href="/en-US/Add-ons/WebExtensions/Distribution">Learn more about signing</a></p>

<h2 id="The_review_process">The review process</h2>

<p>When a browser extension is submitted for signing, it's subject to automated review. It may also be subject to a manual review, when the automated review determines that a manual review is needed. Your browser extension won't be signed until it’s passed the automated review and may have its signing revoked if it fails to pass the manual review. The review process follows a strict set of guidelines, so it’s easy to check and avoid any likely review problems.</p>

<p><a href="/en-US/Add-ons/AMO/Policy/Reviews">Check out the review policy and guidelines</a></p>

<h2 id="AMO_featured_browser_extensions">AMO featured browser extensions</h2>

<p>If you choose to list your browser extension on AMO, your extension could be featured on the AMO website, in the Firefox browser’s add-on manager, or elsewhere on a Mozilla website. We've compiled a list of guidelines about how extensions are selected for featuring, by following these guidelines you give your extension the best chance of being featured.</p>

<p><a href="/en-US/Add-ons/AMO/Policy/Featured">Learn more about getting your add-ons featured</a></p>

<h2 id="Continue_your_learning_experience">Continue your learning experience</h2>

<p>Now you know what lies ahead, it's time to dive into more details about browser extension development. In the sections that follow, you’ll discover:</p>

<ul>
 <li>More about the fundamental concepts behind browser extensions, starting with details on how to <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs">use the JavaScript APIs</a>.</li>
 <li>A guide to the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface">user interface components</a> available to your browser extensions.</li>
 <li>A collection of how-to guides on achieving key tasks in your extensions or making use of the JavaScript APIs.</li>
 <li>Information on how to port other browser extensions to Firefox.</li>
 <li>Details about the Firefox specific workflows you can use to develop browser extensions.</li>
 <li>A full reference guide to the JavaScript APIs.</li>
 <li>A full reference guide to the Manifest keys.</li>
</ul>
