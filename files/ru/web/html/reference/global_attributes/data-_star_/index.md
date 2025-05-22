---
title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
---

{{HTMLSidebar("Global_attributes")}}

The **data-\*** Глобальные атрибуты образуют класс атрибутов, называемых пользовательскими атрибутами данных, которые позволяют обмениваться проприетарной информацией между HTML и его представлением DOM посредством сценариев.

{{InteractiveExample("HTML Demo: data-*", "tabbed-standard")}}

```html interactive-example
<h1>Secret agents</h1>

<ul>
  <li data-id="10784">Jason Walters, 003: Found dead in "A View to a Kill".</li>
  <li data-id="97865">
    Alex Trevelyan, 006: Agent turned terrorist leader; James' nemesis in
    "Goldeneye".
  </li>
  <li data-id="45732">
    James Bond, 007: The main man; shaken but not stirred.
  </li>
</ul>
```

```css interactive-example
h1 {
  margin: 0;
}

ul {
  margin: 10px 0 0;
}

li {
  position: relative;
  width: 200px;
  padding-bottom: 10px;
}

li:after {
  content: "Data ID: " attr(data-id);
  position: absolute;
  top: -22px;
  left: 10px;
  background: black;
  color: white;
  padding: 2px;
  border: 1px solid #eee;
  opacity: 0;
  transition: 0.5s opacity;
}

li:hover:after {
  opacity: 1;
}
```

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

Более подробное руководство по использованию атрибутов данных HTML см. В разделе [Using data attributes](/ru/docs/Web/HTML/How_to/Use_data_attributes).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- All [global attributes](/ru/docs/Web/HTML/Reference/Global_attributes).
- The {{domxref("HTMLElement.dataset")}} property that allows to access and modify these values.
- [Using data attributes](/ru/docs/Web/HTML/How_to/Use_data_attributes)
