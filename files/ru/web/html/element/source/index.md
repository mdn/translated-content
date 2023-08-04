---
title: Элемент <source>
slug: Web/HTML/Element/source
---

**HTML-элемент `<source>`** указывает несколько медиа-ресурсов для элементов {{HTMLElement("picture")}}, {{HTMLElement("video")}} и {{HTMLElement("audio")}}. Это пустой элемент. Он обычно используется для обслуживания одного и того же медиа-контента [в нескольких форматах, поддерживаемых различными браузерами](/ru/docs/Media_formats_supported_by_the_audio_and_video_elements).

| [Категории контента](/ru/docs/Web/HTML/Content_categories) | Нет                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                         | Нет, это {{Glossary("пустой элемент")}}.                                                                                                                                                                                                                                                                          |
| Пропуск тегов                                              | Должен иметь открывающий тег; закрывающий тег необязателен.                                                                                                                                                                                                                                                       |
| Допустимые родители                                        | Медиа-элементы —{{HTMLElement("audio")}} или {{HTMLelement("video")}}—должен быть помещён перед любым [потоковым контентом](/ru/docs/HTML/Content_categories#Flow_content) или элементом{{HTMLElement("track")}}.Элемент {{HTMLElement("picture")}} , должен быть помещён перед элементом {{HTMLElement("img")}}. |
| Допустимые ARIA-роли                                       | Нет                                                                                                                                                                                                                                                                                                               |
| DOM-интерфейс                                              | {{domxref("HTMLSourceElement")}}                                                                                                                                                                                                                                                                                  |

## Атрибуты

Этот элемент включает в себя [универсальные атрибуты](/ru/docs/HTML/Global_attributes).

1. адреса изображения (URL);
2. дескриптора ширины, представляющего собой целое положительное число, за которым следует `'w'`. Значением по умолчанию, если оно отсутствует, является бесконечность.
3. дескриптора плотности пикселей, представляющее собой положительное десятичное число, за которым следует `'x'`. Значением по умолчанию, если оно отсутствует, является `1x`.

- {{htmlattrdef("sizes")}} {{experimental_inline}}
  - : Список размеров изображений для разных размеров страниц. Он состоит из разделённых запятыми медиавыражений со значениями ширины изображения. Эта информация используется браузером перед выкладкой страницы для определения конкретного изображения, заданного в атрибуте [`srcset`](/ru/docs/Web/HTML/Element/source#srcset). Атрибут `sizes` работает только тогда, когда элемент {{HTMLElement("source")}} расположен внутри элемента {{HTMLElement("picture")}}.
- {{htmlattrdef("src")}}
  - : Требуемый для элементов {{HTMLElement("audio")}} и {{HTMLElement("video")}} адрес медиа-ресурсов. Значение этого атрибута игнорируется браузером, когда элемент `<source>` размещён внутри элемента {{HTMLElement("picture")}}.
- {{htmlattrdef("srcset")}} {{experimental_inline}}
  - : Список из одной или нескольких строк, разделённых запятыми, определяющий набор возможных изображений, представленных для отображения в браузере. Каждая строка может состоять из:Каждая строка списка должна содержать по крайней мере дескриптор ширины или дескриптор плотности пикселей.Браузер выбирает самое подходящее изображение для отображения в данный момент времени.Атрибут `srcset` работает только в том случае, когда элемент {{HTMLElement("source")}} находится внутри элемента {{HTMLElement("picture")}}.
- {{htmlattrdef("type")}}
  - : MIME-тип ресурса, опционально содержащий параметр `codecs`. Для получения полной информации по указанию кодеков смотрите [RFC 4281](https://tools.ietf.org/html/rfc4281).
- {{htmlattrdef("media")}} {{experimental_inline}}
  - : Определяет [медиавыражение](/ru/docs/CSS/Media_queries) , согласно которому будет выводиться изображение. Работает только в элементе {{HTMLElement("picture")}}.

Если атрибут `type` не указан, то он запрашивается с сервера и проверяется, может ли {{Glossary("user agent")}} его обрабатывать. Если он не может быть обработан, проверяется следующий `<source>`. Если атрибут `type` указан, он сравнивается с типами, которые может поддерживать {{Glossary("user agent")}}, и если он не распознан, сервер даже не запрашивается, вместо этого проверяется следующий элемент `<source>`.

## Примеры

This example demonstrates how to offer a video in Ogg format for users whose browsers support Ogg format, and a QuickTime format video for users whose browsers support that. If the `audio` or `video` element is not supported by the browser, a notice is displayed instead. If the browser supports the element but does not support any of the specified formats, an `error` event is raised and the default media controls (if enabled) will indicate an error. See also the list of [media formats supported by the audio and video elements](/ru/docs/Media_formats_supported_by_the_audio_and_video_elements) in various browsers.

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML5 video.
</video>
```

For more examples, see [Using audio and video in Firefox](/ru/docs/Using_HTML5_audio_and_video).

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- Элемент {{HTMLElement("picture")}}
- Элемент {{HTMLElement("audio")}}
- Элемент {{HTMLElement("video")}}

{{HTMLSidebar}}
