---
title: '<script>: The Script element'
slug: Web/HTML/Element/script
tags:
  - Script
translation_of: Web/HTML/Element/script
---
{{HTMLRef}}

HTML Элемент** `<script>` **используется для встраивания или подключения исполняемого JavaScript кода. Элемент `<script>` также может использоваться с другими языками, такими как [GLSL](/ru/docs/Web/API/WebGL_API/By_example/Hello_GLSL) от [WebGL](/ru/docs/Web/API/WebGL_API).

| [Content categories](/ru/docs/Web/Guide/HTML/Content_categories) | [Метаданные](/ru/docs/Web/Guide/HTML/Content_categories#Метаданные), [Потоковый контент](/ru/docs/Web/Guide/HTML/Content_categories#Main_content_categories), [Фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content). |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённый контент                                              | Динамический скрипт, используя атрибут `text/javascript`.                                                                                                                                                                                      |
| Пропуск тегов                                                    | Нет. Открывающий и закрывающий теги обязательны                                                                                                                                                                                                |
| Разрешённые родительские элементы                                | Любые элементы в которых разрешены [метаданные](/ru/docs/Web/Guide/HTML/Content_categories#Метаданные) или [фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content)                                                     |
| Разрешённая ARIA роль                                            | Отсутствует                                                                                                                                                                                                                                    |
| DOM интерфейс                                                    | {{domxref("HTMLScriptElement")}}                                                                                                                                                                                                   |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

- {{htmlattrdef("async")}}{{HTMLVersionInline(5)}}
  - : Это логический атрибут, указывающий браузеру, если возможно, загружать скрипт, указанный в атрибуте `{{htmlattrdef("src")}}`, асинхронно.> **Предупреждение:** Атрибут `{{htmlattrdef("async")}}` не будет оказывать никакого эффекта, если атрибут `{{htmlattrdef("src")}}` отсутствует.Обычно браузеры загружают `<script>` синхронно, (т.е. `async="false"`) во время разбора документа.Динамически вставленный `<script>` (используя, например, `document.createElement`) по умолчанию загружаются браузером асинхронно, поэтому для включения синхронной загрузки (т.е. когда скрипты загружаются в порядке их вставки) укажите `async="false"`.
- {{htmlattrdef("crossorigin")}}
  - : Обычные элементы тега `script` передают мало информации в {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}} для скриптов, которые не проходят проверку [CORS](/ru/docs/HTTP_access_control). Чтобы разрешить ведение журнала ошибок сайта, которые используют отдельный домен для статических файлов (например, изображение, видео-файл, CSS-стили или Javascript-код), используйте атрибут `{{htmlattrdef("crossorigin")}}`. Посмотрите статью «[настройки атрибутов CORS](/ru/docs/Web/HTML/CORS_settings_attributes)» для более наглядного объяснения его допустимых аргументов.
- {{htmlattrdef("defer")}}
  - : Это логический атрибут, указывающий браузеру, что скрипт должен выполняться после разбора документа, но до события {{event("DOMContentLoaded")}}.Скрипты с атрибутом `{{htmlattrdef("defer")}}` будут предотвращать запуск события {{event("DOMContentLoaded")}} до тех пор, пока скрипт не загрузится полностью и не завершится его инициализация.> **Предупреждение:** Атрибут `{{htmlattrdef("defer")}}` не будет оказывать никакого эффекта, если атрибут `{{htmlattrdef("src")}}` отсутствует.Чтобы достигнуть такого же эффекта для динамически вставленных скриптов используйте `async=false.`Скрипты с атрибутом `{{htmlattrdef("defer")}}` будут выполняться в том порядке, в котором они появились при разборе документа.
- {{htmlattrdef("integrity")}}
  - : This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](/ru/docs/Web/Security/Subresource_Integrity).
- {{htmlattrdef("nomodule")}}
  - : This Boolean attribute is set to indicate that the script should not be executed in browsers that support[ ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.
- {{htmlattrdef("nonce")}}
  - : A cryptographic nonce (number used once) to whitelist inline scripts in a [script-src Content-Security-Policy](/ru/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
- {{htmlattrdef("src")}}
  - : This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.> **Предупреждение:** Если у элемента `script` будет указан атрибут `{{htmlattrdef("src")}}`, то он не должен иметь встроенный скрипт между тегами.
- {{htmlattrdef("text")}}
  - : Like the `textContent` attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM.
- {{htmlattrdef("type")}}
  - : Этот атрибут указывает тип представленного скрипта. Значение этого атрибута будет находиться в одной из следующих категорий:\* **Omitted or a JavaScript MIME type:** For HTML5-compliant browsers this indicates the script is JavaScript. HTML5 specification urges authors to omit the attribute rather than provide a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types).
    - **`module`:** For HTML5-compliant browsers the code is treated as a JavaScript module. The processing of the script contents is not affected by the `charset` and `{{htmlattrdef("defer")}}` attributes. For information on using `module`, see [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). Code may behave differently when the `module` keyword is used.
    - **Any other value:** The embedded content is treated as a data block which won't be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The `src` attribute will be ignored.> **Примечание:**in Firefox you could specify the version of JavaScript contained in a `<script>` element by including a non-standard `version` parameter inside the `type` attribute — for example `type="text/javascript;version=1.8"`. This has been removed in Firefox 59 (see {{bug(1428745)}}).

### Устаревшие атрибуты

- {{htmlattrdef("charset")}} {{Deprecated_inline}}
  - : If present, its value must be an ASCII case-insensitive match for "`utf-8`". Both it’s unnecessary to specify the `charset` attribute, because documents must use UTF-8, and the `script` element inherits its character encoding from the document.
- {{htmlattrdef("language")}} {{Deprecated_inline}}
  - : Like the `type` attribute, this attribute identifies the scripting language in use. Unlike the `type` attribute, however, this attribute’s possible values were never standardized. The `type` attribute should be used instead.

## Примечания

Элемент `<script>` без указания атрибутов {{HTMLAttrxRef("async", "script")}} , {{HTMLAttrxRef("defer", "script")}} или `type="module"`, а также встроенный скрипт, загружается и выполняется сразу, до того как браузер продолжит разбор документа.

Для обработки скрипт должен иметь тип данных `text/javascript`, но браузеры снисходительны и блокируют обработку только в том случае, если скрипт представляет данные одного из типов: изображение (`image/*`); видео (`video/*`); аудио (`audio/*`); или `text/csv`. Если скрипт заблокирован, элементу отправляется событие {{event("error")}}, если не было отправлено событие {{event("load")}}.

## Примеры

### Основное использование

Эти примеры показывают как импортировать скрипт используя элемент `<script>` в HTML4 и HTML5.

```html
<!-- HTML4 -->
<script type="text/javascript" src="javascript.js"></script>

<!-- HTML5 -->
<script src="javascript.js"></script>
```

### Module fallback

Браузеры, поддерживающие использование значения `module` для атрибута `type`, игнорируют любые скрипты с атрибутом `nomodule`. Это разрешает использовать модульные скрипты, и в тот же самый момент позволяет использовать `nomodule-`скрипты для браузеров без поддержки модульных скриптов.

```html
<script type="module" src="main.mjs"></script>
<script nomodule src="fallback.js"></script>
```

## Спецификация

{{Specifications}}

## Совместимость браузеров

{{Compat}}

### Примечания по совместимости

In older browsers that don't support the `async` attribute, parser-inserted scripts block the parser; script-inserted scripts execute asynchronously in IE and WebKit, but synchronously in Opera and pre-4 Firefox. In Firefox 4, the `async` DOM property defaults to `true` for script-created scripts, so the default behaviour matches the behaviour of IE and WebKit.

To request script-inserted external scripts be executed in the insertion order in browsers where the `document.createElement("script").async` evaluates to `true` (such as Firefox 4), set `async=false` on the scripts you want to maintain order.

> **Предупреждение:** Never call `document.write()` from an async script. In Firefox 3.6, calling `document.write()` has an unpredictable effect. In Firefox 4, calling `document.write()` from an async script has no effect (other than printing a warning to the error console).

## Смотрите также

- {{domxref("document.currentScript")}}
- [Ryan Grove's \<script> and \<link> node event compatibility chart](https://pie.gd/test/script-link-events/)
- [Асинхронные скрипты для asm.js](/ru/docs/Games/Techniques/Async_scripts)
