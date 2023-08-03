---
title: <map>
slug: Web/HTML/Element/map
---

{{HTMLSidebar}}

**HTML-элемент `<map>` **используется с элементами {{HTMLElement("area")}} для определения карты изображения (интерактивной области ссылок).

{{EmbedInteractiveExample("pages/tabbed/map.html", "tabbed-standard")}}

| [Категории контента](/ru/docs/HTML/Content_categories) | [Потоковый контент](/ru/docs/HTML/Content_categories#Flow_content), [фразовый контент](/ru/docs/HTML/Content_categories#Phrasing_content), явный контент.                                                                  |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                  | Любой [прозрачный](/ru/docs/Web/Guide/HTML/Content_categories#%D0%9F%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D0%B0%D1%8F_%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C_%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82%D0%B0) элемент. |
| Пропуск тегов                                          | {{no_tag_omission}}                                                                                                                                                                                                        |
| Допустимые родители                                    | Любые элементы, которые принимают [фразовый контент](/ru/docs/HTML/Content_categories#Phrasing_content).                                                                                                                   |
| Допустимые ARIA-роли                                   | Нет                                                                                                                                                                                                                        |
| DOM-интерфейс                                          | {{domxref("HTMLMapElement")}}                                                                                                                                                                                              |

## Атрибуты

Элемент включает [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

- {{htmlattrdef("name")}}
  - : Атрибут name даёт карте имя, чтобы на неё можно было ссылаться. Атрибут должен быть определён и иметь не пустое значение без пробелов. Значение атрибута name не должно совпадать с регистром совместимости со значением атрибута name другого элемента карты в том же документе. Если также указан атрибут id, то они оба должны иметь одинаковое значение.

## Пример

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html" />
  <area shape="circle" coords="275,75,75" href="right.html" />
</map>
<img usemap="#primary" src="https://placehold.it/350x150" alt="350 x 150 pic" />
```

## Живой пример

{{ EmbedLiveSample('Пример', '350', '150') }}

### Ожидаемые выходные данные

Живой пример выше должен выглядеть как нижеследующее изображение (при использовании клавиши на клавиатуре):

_Для ссылки `left.html`:_
![](screen_shot_2017-02-02_at_10.48.40_pm.png)

_Для ссылки `right.html`:_
![](screen_shot_2017-02-02_at_10.49.04_pm.png)

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}
