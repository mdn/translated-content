---
title: data-*
slug: Web/HTML/Global_attributes/data-*
---

{{HTMLSidebar("Global_attributes")}}

The **data-\*** Глобальные атрибуты образуют класс атрибутов, называемых пользовательскими атрибутами данных, которые позволяют обмениваться проприетарной информацией между HTML и его представлением DOM посредством сценариев.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

Все такие пользовательские данные доступны через интерфейс {{domxref ("HTMLElement")}} элемента, для которого установлен атрибут. Свойство {{domxref ("HTMLElement.dataset")}} предоставляет к ним доступ.
Символ \* может быть заменён любым именем, соответствующим производственному правилу имён xml, со следующими ограничениями:

- имя не должно начинаться с xml, в любом случае для этих букв используется регистр;
- имя не должно содержать точку с запятой (U + 003A);
- имя не должно содержать заглавных букв.

Обратите внимание, что свойство {{domxref ("HTMLElement.dataset")}} является {{domxref ("DOMStringMap")}}, и имя настраиваемого атрибута данных data-test-value будет доступно через HTMLElement.dataset. testValue (или HTMLElement.dataset \["testValue"]), поскольку любая тире (U + 002D) заменяется заглавной буквой следующей буквы, преобразуя имя в camelcase.

### Использование

Добавляя атрибуты data- \*, даже обычные элементы HTML могут стать довольно сложными и мощными программными объектами. Например, «спрайт» космического корабля в игре может быть простым элементом {{HTMLElement ("img")}} с атрибутом класса и несколькими атрибутами data- \*:

```html
<img class="spaceship cruiserX3" src="shipX3.png"
  data-ship-id="324" data-weapons="laserI laserII" data-shields="72%"
  data-x="414354" data-y="85160" data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()">
</img>
```

Более подробное руководство по использованию атрибутов данных HTML см. В разделе [Using data attributes](/ru/docs/Learn/HTML/Howto/Use_data_attributes).

## Specifications

| Specification                                                                                                  | Status                   | Comment                                                                           |
| -------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}} | {{Spec2('HTML WHATWG')}} | No change from latest snapshot, {{SpecName('HTML5.1')}}                           |
| {{SpecName('HTML5.1', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}     | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName('HTML WHATWG')}}, no change from {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5 W3C', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}   | {{Spec2('HTML5 W3C')}}   | Snapshot of {{SpecName('HTML WHATWG')}}, initial definition.                      |

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/ru/docs/Web/HTML/Global_attributes).
- The {{domxref("HTMLElement.dataset")}} property that allows to access and modify these values.
- [Using data attributes](/ru/docs/Learn/HTML/Howto/Use_data_attributes)
