---
title: Node.baseURI
slug: Web/API/Node/baseURI
---

{{APIRef("DOM")}}

Свойство **`Node.baseURI`** только для чтения, возвращающее абсолютный базовый URL узла.

Базовый URL используется для [разрешения](https://developers.whatwg.org/urls.html#resolving-urls) относительных URLs, когда браузеру нужно получить абсолютный URL, например, когда обрабатывает элемент HTML {{HTMLElement("img")}}, `src` атрибут или XML `xlink:href` атрибут.

В самом простом случае, базовый URL это просто местонахождение документа, но это может зависеть от многих факторов, включая элемент {{HTMLElement("base")}} в HTML и атрибут [`xml:base`](/ru/docs/Web/API/Node/baseURI) в XML.

## Синтаксис

```
var baseURI = node.baseURI;
```

- `baseURI` это {{ domxref("DOMString") }} представляющий базовый URL обусловленный {{domxref("Node")}}. Может быть `null` если не удалось получить абсолютный URI
- `node.baseURI` только для чтения.
- `node.baseURI` может измениться со временем (с.м. ниже).

## Подробности

### Базовый URL документа

Базовый URL _документа_ по умолчанию, адрес документа (как отображено в браузере и доступно в {{domxref("window.location")}}), но может измениться по умолчанию:

- Когда HTML {{HTMLElement("base")}} тег найден в документе;
- Когда этот новый документ создан динамически.

Смотрите [Раздел базовый URLs в действующем стандарте HTML](https://developers.whatwg.org/urls.html#base-urls) для уточнения деталей.

Вы можете использовать `{{domxref("document")}}.baseURI` для получения базового URL документа. Заметим, что получение базового URL для документа, может возвращать различные URLs в течение долгого времени, если {{HTMLElement("base")}} теги или местонахождение документа изменилось.

### Базовый URL элемента

Базовый URL _элемента_ в HTML обычно равен базовому URL документу узла.

Если документ содержит атрибуты [`xml:base`](/ru/docs/Web/API/Node/baseURI) (которые вы не должны использовать в документах HTML), `element.baseURI` принимает во внимание `xml:base` атрибуты родительского элемента, когда вычисляет базовый URL. Для уточнения деталей смотрите [xml:base](/ru/docs/Web/API/Node/baseURI).

Вы можете использовать `{{domxref("element")}}.baseURI` для получения базового URL of элемента.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("base")}} element (HTML)
- [`xml:base`](/ru/docs/Web/API/Node/baseURI) атрибуты (XML документы).
- {{domxref("Node.baseURIObject")}} - вариант этого API для Mozilla дополнений и внутреннего кода. Возвращает базовый URL как `nsIURI`.
