---
title: Firefox 9 for developers
slug: Mozilla/Firefox/Releases/9
tags:
  - Firefox
  - Firefox 9
  - Gecko 9
  - NeedsTranslation
  - TopicStub
translation_of: Mozilla/Firefox/Releases/9
---

Firefox 9 was released for Windows on December 20, 2011. Mac and Linux version 9.0.1, which fixed a crashing bug discovered at the last minute, were released on December 21, 2011.

## Changes for web developers

### HTML

- The `value` attribute of [`<li>`](/es/docs/Web/HTML/Element/li) now can be negative as specified in HTML5. Previously negative values were converted to 0.
- You can now [specify the start and stop time of media](/es/docs/Using_HTML5_audio_and_video#Specifying_playback_range) in the URI of the media when using [`<audio>`](/es/docs/Web/HTML/Element/audio) and [`<video>`](/es/docs/Web/HTML/Element/video) elements.
- [`<input>`](/es/docs/Web/HTML/Element/input) and [`<textarea>`](/es/docs/Web/HTML/Element/textarea) elements [now respect the value of the `lang` attribute](/es/docs/HTML/Controlling_spell_checking_in_HTML_forms#Controlling_the_spellchecker_language) when invoking the spell checker.
- Firefox on Android now lets users snap photos with their phone's camera without leaving the browser when the [`<input>`](/es/docs/Web/HTML/Element/input) element is used with `type="file"` and `accept="image/*"`.
- Windows Vista style PNG ICO images are now supported.
- Drawing images that use the [`crossorigin`](/es/docs/HTML/CORS_settings_attributes) attribute to request CORS access no longer incorrectly [taint the canvas](/es/docs/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F) when CORS is granted.
- The value of the [`rowspan`](/es/docs/Web/HTML/Element/td#attr-rowspan) attribute may now be as large as 65,534, up from 8190.

### CSS

- The [`font-stretch`](/es/docs/Web/CSS/font-stretch) property is now supported.
- The [`columns`](/es/docs/Web/CSS/columns) property is now supported, with the `-moz` prefix. This is a shorthand for the following properties: [`column-width`](/es/docs/Web/CSS/column-width) and [`column-count`](/es/docs/Web/CSS/column-count).
- When a stylesheet included using the [`<link>`](/es/docs/Web/HTML/Element/link) element has been fully loaded and parsed (but not yet applied to the document), a [`load` event](/es/docs/HTML/Element/link#Stylesheet_load_events) is now fired. Also, if an error occurs processing a style sheet, an `error` event is fired.
- You can now specify overflow settings for both the left and right edges of content using a new two-value syntax for [`text-overflow`](/es/docs/Web/CSS/text-overflow).

### JavaScript

_No change._

### DOM

- [Using full-screen mode](/es/docs/DOM/Using_full-screen_mode)
  - : The new full-screen API provides a way to present content using the entire screen, with no browser interface. This is great for video and games. This API is currently experimental and prefixed.

<!---->

- The [`Node.contains()`](/es/docs/Web/API/Node/contains) method is now implemented; this lets you determine if a given node is a descendant of another node.
- The [`Node.parentElement`](/es/docs/Web/API/Node/parentElement) attribute has been implemented; this returns the parent [`Element`](/es/docs/Web/API/Element) of a DOM node, or `null` if the parent isn't an element.
- DOM Level 3 [composition events](/es/docs/DOM/CompositionEvent) are now supported.
- The [`Document.scripts`](/es/docs/Web/API/Document/scripts) attribute has been implemented; this returns an [`HTMLCollection`](/es/docs/Web/API/HTMLCollection) of all the [`<script>`](/es/docs/Web/HTML/Element/script) elements on the document.
- The [`Document.queryCommandSupported()`](/es/docs/Web/API/Document/queryCommandSupported) method has been implemented.
- The set of events that can be listened for on [`<body>`](/es/docs/Web/HTML/Element/body) elements has been revised to match the latest draft of the HTML5 specification. The list of events in the [DOM event reference](/es/docs/DOM/DOM_event_reference) reflects which events can be listened for on [`<body>`](/es/docs/Web/HTML/Element/body).
- The `readystatechange` event is now fired only on the [`Document`](/es/docs/Web/API/Document), as intended.
- Event handlers are now implemented as standard IDL interfaces. For most cases, this won't affect content, but [there are exceptions](/es/docs/DOM/DOM_event_handlers#Event_handler_changes_in_Firefox_9).
- A new response type, "`moz-json`", has been added to `XMLHttpRequest`, letting `XMLHttpRequest` automatically parse [JSON](/es/docs/JSON) strings for you; when you request this type, a returned JSON string is parsed, so that the value of the `response` property is the resulting JavaScript object.
- [`XMLHttpRequest` "progress" events](/es/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress) are now reliably sent for every chunk of data received; in the past it was possible for the last chunk of data received to not fire a "progress" event. Now you can track progress by following only "progress" events, instead of also having to monitor "load" events to detect the receipt of the last chunk of data.
- In the past, calling [`addEventListener()`](/es/docs/DOM/element.addEventListener) with a `null` listener would throw an exception. Now it returns without error and with no effect.
- The new [`navigator.doNotTrack`](/es/docs/Web/API/Navigator/doNotTrack 'Devuelve los ajustes de do-not-track del usuario. Esto es "1" si el usuario ha solicitado no ser rastreado por sitios web, contenidos, o anuncios.') property lets your content easily determine whether or not the user has enabled their do-no-track preference; if this value is "yes", you should not track the user.
- [`Range`](/es/docs/Web/API/Range) and [`Selection`](/es/docs/Web/API/Selection) objects now behave according to their specifications when [`splitText()`](/es/docs/Web/API/Text/splitText) and [`normalize()`](/es/docs/Web/API/Node/normalize) are called.
- The value of [`Node.ownerDocument`](/es/docs/Web/API/Node/ownerDocument) for doctype nodes is now the document on which [`createDocumentType()`](/es/docs/DOM/DOMImplementation.createDocumentType) was called to create the node, instead of `null`.
- `window.navigator.taintEnabled` has been removed; it has not been supported in many years.

### Workers

- Workers implemented in blob URLs were broken in Firefox 8, and work again starting in Firefox 9.

### WebGL

- The [WebGL](/es/docs/WebGL) context `drawingBufferWidth` and `drawingBufferHeight` attributes are now supported.

### MathML

- The non-standard `restyle` value for the `actiontype` attribute on [`<maction>`](/es/docs/Web/MathML/Element/maction) elements has been removed.
- While still unsupported, using the [`<mlabeledtr>`](/es/docs/Web/MathML/Element/mlabeledtr) element no longer breaks rendering completely. See [error 689641](https://bugzilla.mozilla.org/show_bug.cgi?id=689641) for progress on actual support of this element.

### Networking

- You can now send the contents of [JavaScript typed arrays](/es/docs/JavaScript_typed_arrays) (that is, the contents of an [`ArrayBuffer`](/es/docs/JavaScript_typed_arrays/ArrayBuffer) object) [using XMLHttpRequest](/es/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Sending_typed_arrays_as_binary_data).
- WebSocket connections now permit non-characters in otherwise valid UTF-8 data frames to be received, instead of failing.
- The HTTP `Accept` header for XSLT requests has been changed to simply "\*/\*" for simplicity. Since fetching XSLT has always fallen back to "\*/\*" anyway, it made sense to simplify the initial request.
- Attempts by a server to use the `301 Moved Permanently` or `307 Temporary Redirect` response codes to redirect the user to a `javascript:` URI now [result in a "bad connection" error](/es/docs/HTTP#More_on_redirection_responses) instead of actually redirecting. This prevents certain types of cross-site scripting attacks.
- Content served with an empty [`Content-Disposition`](/es/docs/Web/HTTP/Headers/Content-Disposition) were previously treated as if the [`Content-Disposition`](/es/docs/Web/HTTP/Headers/Content-Disposition) were "attachment"; this didn't always work as expected. These are now handled as if the [`Content-Disposition`](/es/docs/Web/HTTP/Headers/Content-Disposition) were "inline".
- The default maximum size of an item in the disk cache has been increased to 50 MB; previously, only items up to 5 MB were cached.

### Developer tools

- The web console now supports basic [string substitutions](/es/docs/Using_the_Web_Console#String_substitutions) in its logging methods.
- You can now [create visually nested blocks of output](/es/docs/Using_the_Web_Console#Using_groups_in_the_console) in the web console, to help make it easier to read.

## Changes for Mozilla and add-on developers

See [Updating add-ons for Firefox 9](/es/docs/Firefox/Updating_add-ons_for_Firefox_9) for an overview of the changes you may need to make to get your add-ons working in Firefox 9.

### XUL

- The [`tab`](/es/docs/Mozilla/Tech/XUL/tab) element now has a [`pending`](/es/docs/Mozilla/Tech/XUL/Attribute/pending) attribute, whose value is `true`, when the tab is in the process of being restored by the session store service. This can be used for styling the tab in themes. The attribute isn't present on tabs that aren't pending.
- The [`tab`](/es/docs/Mozilla/Tech/XUL/tab) element now has an [`unread`](/es/docs/Mozilla/Tech/XUL/Attribute/unread) attribute, whose value is `true`, when the tab has changed since the last time it was the active tab or if it hasn't been selected since the current session began. The attribute isn't present on tabs that are not unread.
- You can now use a [`panel`](/es/docs/Mozilla/Tech/XUL/panel) as a drag image for DOM drag and drop operations. This lets you use the standard drag & drop API for [drag and drop of XUL content](/es/docs/DragDrop/Drag_Operations#Using_XUL_panels_as_drag_images).
- The [`notificationbox`](/es/docs/Mozilla/Tech/XUL/notificationbox) element's [`appendNotification`](/es/docs/Mozilla/Tech/XUL/Method/appendNotification) method now lets you specify a callback that gets called for interesting events related to the notification box. Currently, the only event is "removed", which tells you the box has been removed from its window.

### JavaScript code module changes

- [`FileUtils.jsm`](/es/docs/JavaScript_code_modules/FileUtils.jsm) now has a `File` constructor that returns an [`nsIFile`](/es/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFile) object representing a file specified by its pathname.

### Service changes

- The content preference service now [handles private mode browsing](/es/docs/Using_content_preferences#private-browsing) (see [error 679784](https://bugzilla.mozilla.org/show_bug.cgi?id=679784)).

### NSPR

- NSPR now has an "append" module, which lets you append new data to the end of an existing log.

### Interface changes

#### Removed interfaces

- [`nsIGlobalHistory3`](/es/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIGlobalHistory3) has been removed during streamlining of the Places and DocShell code.

#### Miscellaneous interface changes

- The [`nsISound`](/es/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISound) interface has a new constant, `EVENT_EDITOR_MAX_LEN`. The allows for playing the system sound for when more characters than the maximum allowed are typed into a text field. Currently, this is only used on Windows.
- The [`nsIScriptError2`](/es/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScriptError2) interface has new `timeStamp` and `innerWindowID` properties; in addition, the `initWithWindowID()` method now takes an inner window ID instead of an outer window ID.
- The [`nsIBidiKeyboard.haveBidiKeyboards`](/es/docs/XPCOM_Interface_Reference/nsIBidiKeyboard#haveBidiKeyboards) attribute has been added; this lets you determine if the system has at least one keyboard installed for each direction: left-to-right and right-to-left.
- The new [`nsIEditor.isSelectionEditable`](/es/docs/XPCOM_Interface_Reference/nsIEditor#isSelectionEditable) attribute lets you determine if the current selection anchor is editable. This helps to support cases where only parts of the document are editable, by letting you see if the current selection is in an editable section.
- The [`nsIBrowserHistory.registerOpenPage()`](</es/docs/XPCOM_Interface_Reference/nsIBrowserHistory#registerOpenPage()>) and [`nsIBrowserHistory.unregisterOpenPage()`](</es/docs/XPCOM_Interface_Reference/nsIBrowserHistory#unregisterOpenPage()>) methods have been removed as part of a performance overhaul in the Places system. You can use the corresponding methods in [`mozIPlacesAutoComplete`](/es/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIPlacesAutoComplete) instead.
- The [`nsIDOMWindowUtils.wrapDOMFile()`](</es/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils#wrapDOMFile()>) method has been added; this returns a DOM [`File`](/es/docs/Web/API/File) object for a given [`nsIFile`](/es/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFile).
- The [`nsIChromeFrameMessageManager.removeDelayedFrameScript()`](</es/docs/XPCOM_Interface_Reference/nsIChromeFrameMessageManager#removeDelayedFrameScript()>) method was added to support removing delayed load scripts. Bootstrapped add-ons should use this, at shutdown, to remove any scripts it loaded using [`nsIChromeFrameMessageManager.loadFrameScript()`](</es/docs/XPCOM_Interface_Reference/nsIChromeFrameMessageManager#loadFrameScript()>) with the delayed load flag set. This is exposed to add-ons as `browser.messageManager.removeDelayedFrameScript()`.
- The [`nsIAppStartup`](/es/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAppStartup) interface has a new `interrupted` attribute, which lets you know if the startup process was interrupted at any point by an interactive prompt. This can be helpful, for example, when timing startups during performance evaluation, to be able to drop numbers from sessions that were interrupted.
- The [`nsIEditorSpellCheck`](/es/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIEditorSpellCheck) interface has been revised to support per-site selection of spell checker dictionaries.

### IDL parser

The IDL parser no longer includes support for the never fully-implemented notion of unique pointers.

### Build system changes

- The `--enable-application=standalone` option for building standalone XPConnect has been removed; it hasn't worked since 2007 anyway.
- Support for building Necko and Transformiix XSLT standalone has been removed; you can no longer use `--enable-application=network` or `--enable-application=content/xslt`.
- The build system now looks for `.mozconfig` at `$topsrcdir/.mozconfig` or `$topsrcdir/mozconfig`, and nowhere else, unless you override the `.mozconfig` path using the `MOZCONFIG` environment variable.
- The `xpidl` utility has been replaced in the SDK with [pyxpidl](/es/docs/XPIDL/pyxpidl).

### Other changes

- The spell checker no longer has an arbitrary 130-character word-length limit on the length of words it will attempt to spell check. This limit was previously in place to prevent crashes that were occurring in the spell checker, but the underlying bugs have since been fixed.
- You can now register components to add features to the [`window.navigator`](/es/docs/Web/API/Window/navigator) object by using the "JavaScript-navigator-property" category. See [Adding APIs to the navigator object](/es/docs/Developer_Guide/Adding_APIs_to_the_navigator_object) for details and examples.

## See also

- [Firefox 8 for developers](/es/docs/Mozilla/Firefox/Releases/8)
- [Firefox 7 for developers](/es/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 for developers](/es/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 for developers](/es/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/es/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/es/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/es/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/es/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/es/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/es/docs/Mozilla/Firefox/Releases/1.5)

<section id="Quick_links">
  <ol>
    <li class="toggle">
      <details>
        <summary>Notas de la Versión para Desarrolladores de Firefox</summary>
        <ol>
          <li>
            <a href="/es/docs/Mozilla/Firefox/Releases"
              >Notas de la Versión para Desarrolladores de Firefox</a
            >
          </li>
        </ol>
      </details>
    </li>
    <li class="toggle">
      <details>
        <summary>Complementos</summary>
        <ol>
          <li>
            <a href="/es/Add-ons/WebExtensions">Extensiones del navegador</a>
          </li>
          <li><a href="/es/Add-ons/Themes">Temas</a></li>
        </ol>
      </details>
    </li>
    <li class="toggle">
      <details>
        <summary>Firefox por dentro</summary>
        <ol>
          <li><a href="/es/docs/Mozilla/">Proyecto Mozilla (Inglés)</a></li>
          <li><a href="/es/docs/Mozilla/Gecko">Gecko</a></li>
          <li>
            <a href="/es/docs/Mozilla/Firefox/Headless_mode">Headless mode</a>
          </li>
          <li>
            <a href="/es/docs/Mozilla/JavaScript_code_modules"
              >Modulos de código JavaScript (Inglés)</a
            >
          </li>
          <li><a href="/es/docs/Mozilla/js-ctypes">JS-ctypes (Inglés)</a></li>
          <li><a href="/es/docs/Mozilla/MathML_Project">Proyecto MathML</a></li>
          <li><a href="/es/docs/Mozilla/MFBT">MFBT (Inglés)</a></li>
          <li>
            <a href="/es/docs/Mozilla/Projects">Proyectos Mozilla (Inglés)</a>
          </li>
          <li>
            <a href="/es/docs/Mozilla/Preferences"
              >Sistema de Preferencias (Inglés)</a
            >
          </li>
          <li>
            <a href="/es/docs/Mozilla/WebIDL_bindings"
              >Ataduras WebIDL (Inglés)</a
            >
          </li>
          <li><a href="/es/docs/Mozilla/Tech/XPCOM">XPCOM</a></li>
          <li><a href="/es/docs/Mozilla/Tech/XUL">XUL</a></li>
        </ol>
      </details>
    </li>
    <li class="toggle">
      <details>
        <summary>Crear y contribuir</summary>
        <ol>
          <li>
            <a href="/es/docs/Mozilla/Developer_guide/Build_Instructions"
              >Instrucciones para la compilación</a
            >
          </li>
          <li>
            <a
              href="/es/docs/Mozilla/Developer_guide/Build_Instructions/Configuring_Build_Options"
              >Configurar las opciones de compilación</a
            >
          </li>
          <li>
            <a
              href="/es/docs/Mozilla/Developer_guide/Build_Instructions/How_Mozilla_s_build_system_works"
              >Cómo funciona el sistema de compilación (Inglés)</a
            >
          </li>
          <li>
            <a href="/es/docs/Mozilla/Developer_guide/Source_Code/Mercurial"
              >Código fuente de Mozilla</a
            >
          </li>
          <li><a href="/es/docs/Mozilla/Localization">Localización</a></li>
          <li><a href="/es/docs/Mozilla/Mercurial">Mercurial (Inglés)</a></li>
          <li><a href="/es/docs/Mozilla/QA">Garantía de Calidad</a></li>
          <li>
            <a href="/es/docs/Mozilla/Using_Mozilla_code_in_other_projects"
              >Usar Mozilla en otros proyectos (Inglés)</a
            >
          </li>
        </ol>
      </details>
    </li>
  </ol>
</section>
