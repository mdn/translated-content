---
title: Window.pageYOffset
slug: Web/API/Window/pageYOffset
---

{{ APIRef("CSSOM View") }}

**`pageYOffset`** - свойство окна {{domxref("Window")}} , доступное только для чтения. Это то же свойство, что и {{domxref("Window.scrollY", "scrollY")}} и, как таковое, оно тоже возвращает количество пикселей, на которое прокручен документ по вертикали (вниз или вверх). Значение свойства равное 0.0 говорит о том, что в данный момент верхний край документа {{domxref("Document")}} совпадает с верхним краем области содержимого окна.

Есть незначительная разница в поддержке `pageYOffset` и `scrollY`, первый поддерживается лучше в старых браузерах, но если не затрагивать очень старые версии, то использовать можно любое свойство. Они идентичны.

Соответствующее свойство {{domxref("Window.pageXOffset", "pageXOffset")}}, которое возвращает количество пикселей, на которое документ прокручен по горизонтали, это то же самое, что и {{domxref("Window.scrollX", "scrollX")}}.

## Синтаксис

```
yOffset = window.pageYOffset;
```

### Значение

Количество пикселей, на которое документ {{domxref("Document")}} прокручен вертикально в рамках окна {{domxref("Window")}}, выражено числом с плавающей запятой. Оно рассчитывается с субпиксельной точностью и, таким образом, не обязательно будет целым числом. Значение равное 0.0 означает, что вертикальная прокрутка ещё не была совершена, и верхний край документа сейчас соответствует верхнему краю области содержимого окна.

Т.к. данное свойство соответствует {{domxref("Window.scrollY")}}, обратитесь к его описанию за более детальной информацией о значении и использовании.

## Пример

```js hidden
var contentHTML = `
    <h2 id="introduction">Introduction</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean volutpat vitae felis non dictum. Ut auctor
eros tortor, vel elementum arcu rhoncus nec. Donec non
laoreet massa. Donec pretium nisi et condimentum convallis.
Nullam dictum molestie finibus. Nullam vitae lorem non
augue mattis cursus.</p>
  <p>Maecenas nec tortor tincidunt, sollicitudin mi eget,
fermentum turpis. Vestibulum ac ante et libero efficitur
faucibus id eget ex. Pellentesque tempor pharetra
tincidunt. Suspendisse potenti. Nulla vulputate nunc sit
amet hendrerit faucibus. Nullam metus dui, venenatis
lacinia nunc nec, vestibulum viverra nunc. Quisque interdum
quam tortor, sit amet varius neque consectetur at. Quisque
vel turpis justo.</p>
  <h2 id="overview">Overview</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Etiam dui dolor, pulvinar sed diam id, eleifend
dapibus odio. Duis vitae ante nibh. Integer bibendum
imperdiet suscipit. Fusce ligula leo, consectetur ac ante
eget, gravida laoreet purus. Cras sodales efficitur risus,
sed feugiat sem. Pellentesque justo augue, placerat non leo
sit amet, laoreet fringilla arcu.</p>
  <p>Class aptent taciti sociosqu ad litora torquent per
conubia nostra, per inceptos himenaeos. Proin in gravida
libero. Vivamus placerat, lacus eget condimentum sagittis,
enim nunc bibendum nisi, quis varius erat felis sit amet
risus.</p>
<p>Sed non finibus ligula. Fusce a magna auctor, molestie
nibh eget, sodales felis. Donec imperdiet facilisis mi ut
aliquam. Etiam sodales suscipit urna, eget hendrerit neque
elementum a. Vivamus fringilla sodales est ut ultricies.
Nulla convallis congue maximus. Nullam consectetur felis
vitae ultricies accumsan. Mauris at aliquam felis. Mauris
efficitur tellus massa, id ullamcorper ipsum fermentum eu.
Aenean mollis dignissim ultrices. Nunc gravida, sem sit
amet lobortis iaculis, dolor ligula convallis nibh, id
condimentum metus libero nec odio. Quisque nec ante
pretium, viverra neque nec, facilisis risus. Duis
condimentum sapien non felis cursus blandit. Integer
euismod lectus a ipsum pellentesque lacinia.</p>
`;

document.getElementById("frame").contentDocument.body.innerHTML = contentHTML;
```

В данном примере создаётся элемент {{HTMLElement("iframe")}}, и задаётся его содержимое, затем определённый элемент этого документа прокручивается в область рамки. Как только это произошло, выясняется положение вертикальной прокрутки с помощью значения `pageYOffset` у элемента {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} в рамке.

### HTML

HTML предельно прост и состоит из двух элементов: {{HTMLElement("iframe")}}, содержащий документ, который мы будем прокручивать, и {{HTMLElement("div")}}, в который мы выведем значение свойства `pageYOffset` по окончании прокрутки.

```html
<iframe id="frame"> </iframe>

<div id="info"></div>
```

### JavaScript

```js
var frame = document.getElementById("frame");
var frameDoc = frame.contentDocument;
var info = document.getElementById("info");

var target = frameDoc.getElementById("overview");
frameDoc.scrollingElement.scrollTop = target.offsetTop;

info.innerText =
  "Y offset after scrolling: " + frame.contentWindow.pageYOffset + " pixels";
```

Код JavaScript начинается с записи в переменные `frame` and `info` элементов `<iframe>`, содержащего наш документ, и элемента `<div>` , в который мы запишем результат проверки положения прокрутки. Затем мы получаем ссылку на элемент из нашего документа, который сразу должен быть прокручен до видимой области рамки, с помощью команды {{domxref("Document.getElementById", "getElementById()")}} у {{domxref("HTMLIFrameElement.contentDocument")}} рамки.

Имея целевой элемент, мы устанавливаем {{domxref("Element.scrollTop", "scrollTop")}} {{domxref("Document.scrollingElement", "scrollingElement")}} рамки от свойства {{domxref("Element.offsetTop", "offsetTop")}} целевого элемента. Тем самым мы настраиваем положение вертикальной прокрутки документа рамки таким образом, чтобы оно было таким же как и у верхнего края целевого элемента.

При этом автоматически установится максимально возможное значение у позиции прокрутки при попытке прокрутить дальше конца документа. Это предотвратит выход за границы документа. Никто не хочет знать, что там. Там могут быть драконы.

```css hidden
iframe {
  width: 620px;
  height: 450px;
  border: 1px solid black;
}

#info {
  margin-top: 20px;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial";
}
```

### Результат

Результат ниже. Обратите внимание на то, что содержимое документа уже прокручено до секции, под названием "Overview", а свойство `pageYOffset` имеет соответствующее значение.

{{EmbedLiveSample("Пример", 650, 500)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Window.pageXOffset", "pageXOffset")}}
- {{domxref("Window.scrollY", "scrollY")}} and {{domxref("Window.scrollX", "scrollX")}}
- {{domxref("Window.scroll", "scroll()")}}, {{domxref("Window.scrollBy", "scrollBy()")}}, and {{domxref("window.scrollTo", "scrollTo()")}}
