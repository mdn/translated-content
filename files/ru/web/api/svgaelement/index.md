---
title: SVGAElement
slug: Web/API/SVGAElement
---

{{APIRef("SVG")}}

{{SeeCompatTable}}

Интерфейс **`SVGAElement`**`предоставляет доступ к свойствам`{{ SVGElement("a") }} элемента а также к методам манипулирования ими.

Интерфейс наследует следующие интерфейсы: {{ domxref("SVGElement") }}, {{ domxref("SVGURIReference") }}, {{ domxref("SVGTests") }}, {{ domxref("SVGLangSpace") }}, {{ domxref("SVGExternalResourcesRequired") }}, {{ domxref("SVGStylable") }}, {{ domxref("SVGTransformable") }}.

## Свойства

_Этот интерфейс также наследует свойства от его родителя, {{domxref("SVGGraphicsElement")}} и реализует свойства из {{domxref("SVGURIReference")}} и {{domxref("HTMLHyperlinkElementUtils")}}._

- {{domxref("SVGAElement.download")}}
  - : См. {{domxref("HTMLAnchorElement.download")}}.
- {{domxref("SVGAElement.href")}}
  - : См. {{domxref("HTMLAnchorElement.href")}}.
- {{domxref("SVGAElement.hreflang")}}
  - : Является {{domxref("DOMString")}}, который отражает атрибут `hreflang`, указывающий язык связанного ресурса.
- {{domxref("SVGAElement.ping")}}
  - : Является {{domxref("DOMString")}}, отражая атрибут ping, содержащий список URL-адресов, разделённых пробелами, к которым, когда выполняется гиперссылка, {{HTTPMethod("POST")}} запрос с телом `PING` будет отправлен браузером (в фоновом режиме). Обычно используется для отслеживания.
- {{domxref("SVGAElement.referrerPolicy")}}
  - : См. {{domxref("HTMLAnchorElement.referrerPolicy")}}.
- {{domxref("SVGAElement.rel")}}
  - : См. {{domxref("HTMLAnchorElement.rel")}}.
- {{domxref("SVGAElement.relList")}}
  - : См. {{domxref("HTMLAnchorElement.relList")}}.
- {{domxref("SVGAElement.target")}} {{readonlyInline}}
  - : соответствует атрибуту {{SVGAttr("target")}} данного элемента.
- {{domxref("SVGAElement.text")}}
  - : Является {{domxref("DOMString")}} синонимом свойства {{domxref("Node.textContent")}}.
- {{domxref("SVGAElement.type")}}
  - : Is a that reflects theattribute, indicating the MIME type of the linked resource.
    Является {{domxref("DOMString")}}, который отражает атрибут `type` , указывающий тип MIME связанного ресурса.

## Методы

_Этот интерфейс не имеет методов, но наследует методы от его родителя, {{domxref ("SVGGraphicsElement")}}._

## Пример

В примере ниже, атрибуту {{SVGAttr("target")}} элемента {{SVGElement('a')}} присвоено значение _\_blank_ и при клике по ссылке, при соблюдении условий, выведется сообщение в модальном окне.

```js
var linkRef = document.querySelector("a");
linkRef.target = "_self";

linkRef.onclick = function () {
  if (linkRef.target == "_blank") {
    alert("BLANK !");
    linkRef.target = "_self";
  } else alert("SORRY! not _blank");
};
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- SVG {{SVGElement("a")}} элемент
