---
title: RenderingContext
slug: orphaned/Web/API/RenderingContext
---

{{APIRef("Canvas API")}}

**`RenderingContext`** - это WebIDL `typedef` который ссылается на один из интерфейсов, представляющие собой графический контекст внутри элемента `<canvas>`: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}}, а так же {{domxref("WebGL2RenderingContext")}}

Используя `RenderingContext`, методы и поля которого могут использоваться любыми из этих интерфейсов могут быть перезаписаны в более простой форме; с тех пор, как `<canvas>` поддерживает несколько систем прорисовки контекста, это полезная форма спецификации, в буквальном смысле обозначающая "один из интерфейсов"

В любом случае, `RenderingContext` - просто общее название и оно не является тем, что в основном используют веб-разработчики. Не существует интерфейса `RenderingContext` как такого и нет классов, наследуемых от него.

Для получения `RenderingContext` из веб-элемента `<canvas>` используется метод {{domxref("HTMLCanvasElement.getContext()")}}, возвращающий "один из интерфейсов"

## Спецификации

| Спецификация                                                                                                 | Статус                           | Комментарий            |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#renderingcontext", "RenderingContext")}} | {{Spec2('HTML WHATWG')}} | Внутреннее объявление. |

## Связанное с этим

- Интерфейсы, объединяемые `RenderingContext`: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}} и {{domxref("WebGL2RenderingContext")}}
- [Graphics on the Web](/ru/docs/Web/Guide/Graphics)
- [Canvas API](/ru/docs/Web/API/Canvas_API) и {{HTMLElement("canvas")}}
- [WebGL](/ru/docs/Web/API/WebGL_API)
