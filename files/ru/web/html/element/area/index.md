---
title: <area>
slug: Web/HTML/Element/area
---

**HTML `<area>` элемент** определяет активную область на изображении и, при желании, связывает её с {{Glossary("Hyperlink", "гипертекстовой ссылкой")}}. Этот элемент используется только внутри элемента {{HTMLElement("map")}}.{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

| [Категории содержимого](/en-US/docs/HTML/Content_categories) | [Элементы потока](/ru/docs/Web/HTML/Content_categories#Flow_content), [фразового контента](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content).                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                        | Нет, это {{Glossary("пустой элемент")}}.                                                                                                                                                                            |
| Пропуск тегов                                                | Открывающий тег обязателен, закрывающего быть не должно.                                                                                                                                                            |
| Допустимые родители                                          | Любой элемент, допускающий [фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content). У элемента `<area>` должен быть родитель {{HTMLElement("map")}}, но он не должен быть прямым родителем. |
| Допустимые ARIA-роли                                         | Нет                                                                                                                                                                                                                 |
| DOM-интерфейс                                                | {{domxref("HTMLAreaElement")}}                                                                                                                                                                                      |

## Атрибуты

Этот элемент включает в себя только [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("accesskey")}}
  - : Specifies a keyboard navigation accelerator for the element. Pressing ALT or a similar key in association with the specified character selects the form control correlated with that key sequence. Page designers are forewarned to avoid key sequences already bound to browsers. This attribute is global since HTML5.
- {{htmlattrdef("alt")}}
  - : С помощью этого атрибута задаётся альтернативный текст, описывающий изображение, если оно не доступно. Он должен быть сформулирован так, чтобы предоставить пользователю тот же выбор, что и изображение, которое отрисуется без альтернативного текста. В HTML4 данный атрибут обязателен, но так же может содержать и пустую строку (""). В HTML5 этот атрибут обязателен только при наличии атрибута **href**.
- {{htmlattrdef("coords")}}
  - : Задаёт значения координат для активной области. Значение и количество значений зависят от значения указанного для атрибута **shape**. Для `rect` или прямоугольника задаются две пары значений x,y **coords**: лево, верх, право и низ. Для `circle`, значения `x,y,r` где `x,y` координаты центра круга, а `r` радиус. Для `poly` или многоугольника, значения задаются парой x и y для каждой вершины многоугольника: `x1,y1,x2,y2,x3,y3,` и т.д. В HTML4 значения задаются в пикселях или процентах, когда добавлен знак (%); в HTML5, значения — величины в пикселях.
- {{htmlattrdef("download")}}
  - : Этот атрибут, если он добавлен, указывает, что ссылка используется для скачивания файла. Смотри {{HTMLElement("a")}} для полного описания атрибута [`download`](/ru/docs/Web/HTML/Element/a#download).
- {{htmlattrdef("href")}}
  - : Ссылка для активной области. Это значение действующего URL. В HTML4, этот или **nohref** атрибут обязательный. В HTML5, данный атрибут можно пропустить при условии, что активная область не является ссылкой.
- {{htmlattrdef("hreflang")}}
  - : Указывает язык связанного ресурса. Допустимые значения определяются [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt). Используйте данный атрибут при наличии атрибута **href**.
- {{htmlattrdef("name")}}
  - : Определяет имя интерактивной области, чтобы оно могло прописаться в старых браузерах.
- {{htmlattrdef("media")}}
  - : A hint of the media for which the linked resource was designed, for example `print and screen`. If omitted, it defaults to `all`. Use this attribute only if the **href** attribute is present.
- {{htmlattrdef("nohref")}}
  - : Indicates that no hyperlink exists for the associated area. Either this attribute or the **href** attribute must be present in the element.
    > **Примечание:** This attribute is obsolete in HTML5, instead omitting the **href** attribute is sufficient.
- {{htmlattrdef("referrerpolicy")}} {{experimental_inline}}
  - : A string indicating which referrer to use when fetching the resource:
    - `"no-referrer"` meaning that the `Referer:` header will not be sent.
    - "`no-referrer-when-downgrade`" meaning that no `Referer:` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent's default behavior, if no policy is otherwise specified.
    - `"origin"` meaning that the referrer will be the origin of the page, that is roughly the scheme, the host and the port.
    - "origin-when-cross-origin" meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.
    - `"unsafe-url"` meaning that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.
- {{htmlattrdef("rel")}}
  - : For anchors containing the **href** attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of [link types values](/ru/docs/Web/HTML/Link_types). The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the **href** attribute is present.
- {{htmlattrdef("shape")}}
  - : The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values `rect`, which defines a rectangular region; `circle`, which defines a circular region; `poly`, which defines a polygon; and `default`, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support `circ`, `polygon`, and `rectangle` as valid values for **shape**; these values are {{Non-standard_inline}}.
- {{htmlattrdef("tabindex")}}
  - : A numeric value specifying the position of the defined area in the browser tabbing order. This attribute is global in HTML5.
- {{htmlattrdef("target")}}
  - : This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). The following keywords have special meanings:
    - `_self`: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed HTML4 window or HTML5 browsing context.
    - `_parent`: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.Use this attribute only if the **href** attribute is present.
- {{htmlattrdef("type")}}
  - : This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see <https://www.w3.org/TR/html4/references.html#ref-MIMETYPES>. Use this attribute only if the **href** attribute is present.

## Пример

```html
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="left.html"
    alt="Click to go Left" />
  <area
    shape="circle"
    coords="275,75,75"
    href="right.html"
    alt="Click to go Right" />
</map>
<img usemap="#primary" src="http://placehold.it/350x150" alt="350 x 150 pic" />
```

### Результат

{{ EmbedLiveSample('Пример', 360, 160) }}

## Notes

Under the HTML 3.2, 4.0, and 5 specifications, the closing tag `</area>` is forbidden.

The XHTML 1.0 specification requires a trailing slash: `<area />`.

The **id**, **class**, and **style** attributes have the same meaning as the core attributes defined in the HTML 4 specification, but only Netscape and Microsoft define them.

Netscape 1–level browsers do not understand the **target** attribute as it relates to frames.

HTML 3.2 defines only **alt**, **coords**, **href**, **nohref**, and **shape**.

HTML 5.1 [defines](https://www.w3.org/TR/html51/obsolete.html#obsolete) obsolete the attribute **type** on this tag.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
