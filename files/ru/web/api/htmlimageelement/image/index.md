---
title: Image()
slug: Web/API/HTMLImageElement/Image
---

{{ APIRef("HTML DOM") }}Конструктор **Image()** создаёт новый экземпляр HTMLImageElement. Эквивалентно document.createElement ('img').

### Конструктор элемента Image

Имеет два необязательных параметра: **ширину** и **высоту**:

```js
Image([unsigned long width, unsigned long height])
```

### Пример

##### Исходный код

```js
var img = new Image(100, 200);
img.src = "picture.jpg";
console.log(img);
```

##### Результат

```html
<img width="100" height="200" src="picture.jpg" />
```

> **Примечание:** Примечание: этот конструктор существует только для истории, и возвращает экземпляр [HTMLImageElement](/ru/docs/Web/API/HTMLImageElement) точно также, как и `document.createElement('img')`.
