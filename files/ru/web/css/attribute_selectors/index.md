---
title: Селекторы атрибутов
slug: Web/CSS/Attribute_selectors
---

{{CSSRef("Selectors")}}

## Обзор

Селекторы атрибутов отбирают элементы по наличию атрибута или его значению.

- `[attr]`
  - : Обозначает элемент с атрибутом по имени attr.
- `[attr=value]`
  - : Обозначает элемент с именем атрибута attr и значением в точности совпадающим с value.
- `[attr~=value]`
  - : Обозначает элемент с именем атрибута attr значением которого является набор слов разделённых пробелами, одно из которых в точности равно value
- `[attr|=value]`
  - : Обозначает элемент с именем атрибута attr. Его значение при этом может быть или в точности равно "value" или может начинаться с "value" со сразу же следующим "-" (U+002D). Это может быть использовано когда язык описывается с подходом.
- `[attr^=value]`
  - : Обозначает элемент с именем атрибута attr значение которого начинается с "value"
- `[attr$=value]`
  - : Обозначает элемент с именем атрибута attr чьё значение заканчивается на "value"
- `[attr*=value]`
  - : Обозначает элемент с именем атрибута attr чьё значение содержит по крайней мере одно вхождение строки "value" как подстроки.

## Пример

```css
/* Все span с атрибутом "lang" будут жирными */
span[lang] {
  font-weight: bold;
}

/* Все span в Португалии будут зелёными */
span[lang="pt"] {
  color: green;
}

/* Все span с американским английским будут синими */
span[lang~="en-us"] {
  color: blue;
}

/* Любые span на китайском языке будут красными, как на упрощённом китайском (zh-CN) так и на традиционном (zh-TW) */
span[lang|="zh"] {
  color: red;
}

/* Все внутренние ссылки будут иметь золотой фон */
a[href^="#"] {
  background-color: gold;
}

/* Все ссылки с url заканчивающимся на .cn будут красными */
a[href$=".cn"] {
  color: red;
}

/* Все ссылки содержащие "example" в url будут иметь серый фон */
a[href*="example"] {
  background-color: #cccccc;
}
```

```html
<div class="hello-example">
  <a href="http://example.com">English:</a>
  <span lang="en-us en-gb en-au en-nz">Hello World!</span>
</div>
<div class="hello-example">
  <a href="#portuguese">Portuguese:</a>
  <span lang="pt">Olá Mundo!</span>
</div>
<div class="hello-example">
  <a href="http://example.cn">Chinese (Simplified):</a>
  <span lang="zh-CN">世界您好！</span>
</div>
<div class="hello-example">
  <a href="http://example.cn">Chinese (Traditional):</a>
  <span lang="zh-TW">世界您好！</span>
</div>
```

{{ EmbedLiveSample('Example', 250, 100) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [CSS селекторы: базовая поддержка браузерами](http://dev.l-c-n.com/CSS3-selectors/browser-support.php)
- [Совместимость с браузерами селекторов и псевдо-селекторов CSS](http://kimblim.dk/css-tests/selectors/)
