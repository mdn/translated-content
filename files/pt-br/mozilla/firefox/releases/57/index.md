---
title: Firefox Quantum 57 for developers
slug: Mozilla/Firefox/Releases/57
---

{{FirefoxSidebar}}This article provides information about the changes in Firefox 57 (a.k.a. Firefox Quantum) that will affect developers. Firefox 57 was released on November 14, 2017.

## Firefox 57 === Firefox Quantum

O Firefox 57 recebeu o nome de lançamento **Quantum**, após o projeto de engenharia Firefox [Quantum](https://wiki.mozilla.org/Quantum) que tem como objetivo reconstruir o Firefox a partir do zero, trazendo consigo grande desempenho, estabilidade e melhorias visuais. This is the first version of Firefox to ship some of these improvements, so we wanted to mark the occasion.

> **Nota:** Para ler mais sobre os recursos do Quantum nesta versão, veja: [Firefox Quantum Developer Edition: the fastest Firefox ever with Photon UI and better tooling](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) por Dan Callahan.

[Firefox's new parallel CSS engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — também conhecido como **Quantum CSS** ou **Stylo** ─ está habilitado por padrão no Firefox 57 para desktop, com versões móveis do Firefox para seguir mais tarde. Os desenvolvedores não devem notar nada significativamente diferente, além de toda uma série de melhorias de desempenho. Existem, no entanto, algumas pequenas diferenças funcionais no Stylo, implementado para corrigir o comportamento não padronizado do Gecko que deve ser eliminado. Nos reportaremos tais diferenças nas páginas de referência e nas notas de lançamento conforme apropriado (veja [Quantum CSS notes](#quantum_css_notes)).

## Changes for Web developers

### Ferramentas de desenvolvimento

Sem mudanças.

### HTML

- Os types {{htmlelement("input")}} [date](/pt-BR/docs/Web/HTML/Element/Input/data) e [time](/pt-BR/docs/Web/HTML/Element/Input/time) agora estão habilitados em todos builds. ({{bug("1399036")}})

### CSS

- Os valores `minimal-ui` e `standalone` do media query [display-mode](/pt-BR/docs/Web/CSS/@media/display-mode) agora são suportados ({{bug(1369815)}}). Veja também o [Web app manifest `display` field](/pt-BR/docs/Web/Manifest#display).
- As propriedades {{CSSxRef("grid-row-gap")}} e {{CSSxRef("grid-column-gap")}} não são mais redefinidas pelo {{CSSxRef("grid")}} de forma abreviada ({{bug(1387410)}}).
- A preferência `layout.css.clip-path-shapes.enabled` foi removida ({{bug(1399767)}}). Esta preferência permite desabilitar a {{CSSxRef("&lt;basic-shape&gt;")}} suportado em {{CSSxRef("clip-path")}}. Este suporte foi enviado no Firefox 54 e não pode mais ser desativado.

#### Quantum CSS notes

Following bugs have been fixed in Quantum:

- Radial gradient values like `radial-gradient(circle gold,red)` will work in the old Gecko style system, even though they shouldn't because of the missing comma between `circle` and `gold` ({{bug(1383323)}}).
- When you animate an offscreen element onscreen but specify a delay, Gecko does not repaint on some platforms, e.g. Windows ({{bug(1383239)}}).
- In Gecko, {{htmlelement("details")}} elements can't be made open by default using the `open` attribute if they have an {{CSSxRef("animation")}} active on them ({{bug(1382124)}}).
- In Gecko, {{CSSxRef("transition", "transitions")}} will not work when transitioning from a {{CSSxRef("text-shadow")}} with a color specified to a `text-shadow` without a color specified ({{bug(726550)}}).
- In Gecko, cancelling a filling animation (e.g. with `animation-fill-mode: forwards` set) can trigger a transition set on the same element, although only once (see {{bug(1192592)}} and [these test cases](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) for more information). In general declarative animations should not trigger transitions.
- Animations using em units are not affected by changes to the {{CSSxRef("font-size")}} on the animated element's parent in Gecko, whereas they should be ({{bug(1254424)}}).
- Gecko also deals with `font-size` inheritance differently from Quantum CSS, meaning that for some language settings inherited font sizes end up being smaller than expected (see {{bug(1391341)}}).
- Gecko reuses the same mechanism used when parsing a url-token when parsing the `domain()` or `url-prefix()` URL matching functions for a {{CSSxRef("@document", "@-moz-document")}} rule. Quantum CSS does not use the same mechanism and it does not consider tokens invalid when they contain brackets or quotes ({{bug(1362333)}}).
- In Gecko, when you set a system font as the value of a canvas 2D context's {{DOMxRef("CanvasRenderingContext2D.font", "font")}} (e.g. `menu`), getting the font value fails to return the expected font (it returns nothing). This has been fixed in Quantum. ({{bug(1374885)}}).
- In Gecko, when you create a detached subtree (e.g. a {{htmlelement("div")}} created using {{DOMxRef("Document.createElement","createElement()")}} that is not yet inserted into the DOM), the subtree's root element is set as a block-level element. In Quantum CSS this is set as inline, as per spec ({{bug(1374994)}}).
- In Gecko, {{CSSxRef("calc")}} expressions are rejected — causing the value to be invalid — when used as the radius component of a {{CSSxRef("radial-gradient")}} function ({{bug(1376019)}}).
- In Gecko, `calc(1*2*3)` is not parsed successfully; Quantum CSS fixes this ({{bug(1379467)}}).
- In Quantum CSS, [`calc()` is supported everywhere that the spec explains it should be](https://drafts.csswg.org/css-values-3/#calc-notation) ({{bug(1350857)}}). In Gecko it is not.
- Gecko has a bug whereby the {{CSSxRef("::before")}} and {{CSSxRef("::after")}} pseudo-elements are still generated even if the {{CSSxRef("content")}} property value is set to `normal` or `none`. As per spec, they shouldn't be ({{bug(1387931)}}).
- Another Gecko bug means that the {{CSSxRef("background-position")}} property can't be transitioned between two values containing different numbers of {{CSSxRef("&lt;position&gt;")}} values, for example `background-position: 10px 10px;` and `background-position: 20px 20px, 30px 30px;` (see {{bug(1390446)}}).

### SVG

Sem mudanças.

### JavaScript

- O não-padronizado {{JSxRef("Statements/for_each...in", "for each...in")}} (E4X) loop foi removido. Por favor, use o {{JSxRef("Statements/for...of", "for...of")}} ao invés disso e veja [Warning: JavaScript 1.6's for-each-in loops are deprecated](/pt-BR/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) para ajudar na migração. ({{bug(1083470)}}).
- Os métodos {{JSxRef("Object.prototype.watch()")}} e {{JSxRef("Object.unwatch", "unwatch()")}} estão descontinuados, agora lançará um alerta(warning) quando usado, e será removido em breve. ({{bug(934669)}}).
- Os objetos não-padronizados Iterator e StopIteration assim como o protocolo de iteração legado foram removidos ({{bug(1098412)}}).
- Async generator está agora ativado. ({{bug(1352312)}}).
- A sintaxe for await (...of...) está agora ativado. ({{bug(1352312)}}).

#### Novas APIs

- A {{DOMxRef("PerformanceObserver")}} está habilitado por padrão(default). ({{bug(1386021)}}).
- As interfaces {{DOMxRef("AbortController")}} e {{DOMxRef("AbortSignal")}} (conhecidos como o Abort API) foram adicionados, permitindo requisições DOM (tal como [fetch requests](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/fetch)) ser abortado se desejar. ({{bug(1378342)}}).
- \[2] O [Storage API](/pt-BR/docs/Web/API/Storage_API) está implementado e habilitado por padrão(default). ({{bug(1399038)}}).

#### DOM

- A propriedade {{DOMxRef("Selection.type")}} do [Selection API](/pt-BR/docs/Web/API/Selection_API) está agora implementado ({{bug(1359157)}}).
- {{DOMxRef("Document.createEvent", "Document.createEvent('FocusEvent')")}} está agora implementado ({{bug(1388069)}}).
- A propriedade `files` da interface {{DOMxRef("HTMLInputElement")}} está agora definível ({{bug(1384030)}}).
- O método `HTMLDocument.getSelection()` foi movido para a interface {{DOMxRef("Document.getSelection","Document")}}, por isso está disponível para documentos XML ({{bug(718711)}}).
- O evento {{Event("messageerror")}} está agora implementado e pode ter código executado em resposta a disparar através de manipuladores de eventos implementados em destinos de mensagens ─ Veja {{DOMxRef("MessagePort.onmessageerror")}}, {{DOMxRef("DedicatedWorkerGlobalScope.onmessageerror")}}, {{DOMxRef("Worker.onmessageerror")}}, {{DOMxRef("BroadcastChannel.onmessageerror")}}, e {{DOMxRef("Window.onmessageerror")}} ({{bug(1359017)}}).
- Quando os valores do {{DOMxRef("Headers")}} são iterados, eles são automaticamente classificados em ordem lexicográfico e valores de nomes de cabeçalho duplicados são combinados ({{bug(1396848)}}).

#### DOM events

Sem mudanças.

#### Media and WebRTC

- Suporte para mensagens de tamanho arbitrário (até 1GiB, apesar de 256kiB é mais interoperável) está agora suportados em {{DOMxRef("RTCDataChannel")}} através do uso da flag end-of-record (EOR) em messagens SCTP. Veja {{SectionOnPage("/pt-BR/docs/Web/API/WebRTC_API/Using_data_channels", "Understanding message size limits")}} para mais informações ({{bug(979417)}}).

  > **Nota:** Porque o Firefox ainda não suporta o protocolo SCTP ndata que fornece a capacidade de intercalar mensagens SCTP de múltiplas fontes, o envio de objetos de dados grandes pode causar atrasos significativos em todos os outros tráfegos SCTP. Veja {{bug(1381145)}} para acompanhar o progresso na implementação e implementação do suporte a ndata no Firefox.

- O método {{DOMxRef("RTCDataChannel.send()")}} pode agora lançar uma exceção `TypeError` se o tamanho da mensagem que você está tentando enviar não é compatível com o recebimento {{Glossary("user agent")}} (Isto está implementado como parte do {{bug(979417)}}).
- O [MediaStream Recording API](/pt-BR/docs/Web/API/MediaStream_Recording_API) foi atualizado, assim, os eventos de {{event("error")}} enviados para relatar problemas que ocorrem durante a gravação agora são do tipo {{DOMxRef("MediaRecorderErrorEvent")}}, em vez de serem eventos genéricos.
- Atualizado a documentação ao redor {{DOMxRef("OfflineAudioContext")}} desde o seu campos construtores pode agora se especificado ao invés de uma lista de parâmetros ({{bug(1388591)}}).
- O [Web Audio API](/pt-BR/docs/Web/API/API_Web_Audio) agora suporta corretamente a saída multicanal ({{bug(1378070)}}).

### Security

- URLs `resources://` não mais vazar informações ({{bug(863246)}}).
- Data URIs agora são tratados como origens opacas únicas, em vez de herdar a origem do objeto de configuração responsável pela navegação ({{bug(1324406)}}).

### Plugins

Sem mudanças.

### Outros

- Firefox [headless mode](/pt-BR/docs/Mozilla/Firefox/Headless_mode) agora incluídos uma flag `-screenshot` que permite você pegar screenshots de website diretamente da linha de comando ({{bug(1378010)}}).

## Removals from the web platform

### HTML

- `<link rel=”preload”>` (see [Preloading content with rel="preload"](/pt-BR/docs/Web/HTML/Preloading_content)) foi desabilitado no Firefox 57 por causa de vários problemas de compatibilidade da web (por exemplo {{bug(1405761)}}). Espera-se que uma versão melhorada que funcione para recursos não armazenáveis em cache chegue ao Firefox 58.

### APIs

- Propriedade da Mozilla [Social API](/pt-BR/docs/Archive/Social_API) foi completamente removido ({{bug(1388902)}}).

### SVG

Sem mudanças.

## Alterações para add-on e desenvolvedores Mozilla

> **Nota:** Começando no Firefox 57, todo suporte para XPCOM-based add-ons foi removido. Todas as extensões devem ser convertidas no novo [browser extensions](/pt-BR/Add-ons/WebExtensions) (também conhecido como WebExtensions) ou eles não vão funcionar.

### WebExtensions

As seguintes APIs foram adicionadas ou estendidas:

- [`bookmarks`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - support for separators through [`bookmarks.BookmarkTreeNodeType`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)

  - `theme_icons` property for light/dark theme icons

- [`browserAction`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)

  - [`browserAction.openPopup()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup)

- [`browserSettings`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [`allowPopupsForUserEvents`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents)
  - [`homepageOverride`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride)
  - [`imageAnimationBehavior`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior)
  - [`newTabPageOverride`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride)

- [`browsingData`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [`browsingData.removeLocalStorage()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage)

- [`clipboard`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/clipboard)

  - [`setImageData()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData)

- [`contextualIdentities`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

  - [`onCreated`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onCreated)
  - [`onRemoved`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved)
  - [`onUpdated`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated)
  - `colorCode` and `iconUrl` in [`contextualIdentitities.ContextualIdentity`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity)

- [`devtools.panels`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels)

  - [`devtools.panels.ElementsPanel.createSidebarPane()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel/createSidebarPane)

- [`downloads`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

  - `incognito` option in [`downloads.download()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download)
  - `estimatedEndTime` property in [`downloads.DownloadItem`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem)

- [`find`](/pt-BR/Add-ons/WebExtensions/API/find)

  - [`find()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/find/find)
  - [`highlightResults()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/find/highlightResults)
  - [`removeHighlighting()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting)

- [`pageAction.openPopup()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup)
- [`privacy`](/pt-BR/Add-ons/WebExtensions/API/privacy/websites)

  - [`websites.trackingProtectionMode`](/pt-BR/Add-ons/WebExtensions/API/privacy/websites)

- [`proxy`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/proxy)

  - `FindProxyForURL()` can now return an object

- [`runtime`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/runtime)

  - [`runtime.openOptionsPage()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) support on Android

- [`sessions`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sessions)

  - [`setTabValue()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue)
  - [`getTabValue()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue)
  - [`removeTabValue()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue)
  - [`setWindowValue()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue)
  - [`getWindowValue()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue)
  - [`removeWindowValue()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue)

- [`sidebarAction`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)

  - [`sidebarAction.open()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open)

- [`storage`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/storage)

  - [`storage.managed`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed)

- [`tabs`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs)

  - `loadReplace` option in [`tabs.update()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)
  - `discarded` property in [`tabs.Tab`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.onUpdated`](/pt-BR/docs/), and [`tabs.query()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
  - [`tabs.create()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) can open "view-source:" URLs
  - `openerTabId` property in [`tabs.Tab`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.create()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create), [`tabs.query()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), and [`tabs.update()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)

- [`theme`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)

  - `colors.toolbar`
  - `colors.toolbar_field`
  - `colors.toolbar_field_text`
  - `colors.toolbar_text`

- [`theme`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/theme)

  - `windowId` option to [`theme.update()`](/pt-BR/Add-ons/WebExtensions/API/theme/update)

- [`webRequest`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

  - [`filterResponseData()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - `proxyInfo` property in [`webRequest`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) events

- [`windows`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/windows)

  - `allowScriptsToClose` option in [`windows.create()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)

## Versões anteriores

{{Firefox_for_developers(56)}}
