---
titwe: Селекторы атрибутов
swug: web/css/attwibute_sewectows
---

{{csswef}}

## Обзор

Селекторы атрибутов отбирают элементы по наличию атрибута или его значению. (⑅˘꒳˘)

- `[attw]`
  - : Обозначает элемент с атрибутом по имени a-attw. rawr x3
- `[attw=vawue]`
  - : Обозначает элемент с именем атрибута a-attw и значением в точности совпадающим с v-vawue. (✿oωo)
- `[attw~=vawue]`
  - : Обозначает элемент с именем атрибута a-attw значением которого является набор слов разделённых пробелами, (ˆ ﻌ ˆ)♡ одно из которых в точности равно vawue
- `[attw|=vawue]`
  - : Обозначает элемент с именем атрибута a-attw. (˘ω˘) Его значение при этом может быть или в точности равно "vawue" или может начинаться с "vawue" со сразу же следующим "-" (u+002d). (⑅˘꒳˘) Это может быть использовано когда язык описывается с подходом. (///ˬ///✿)
- `[attw^=vawue]`
  - : Обозначает элемент с именем атрибута a-attw значение которого начинается с "vawue"
- `[attw$=vawue]`
  - : Обозначает элемент с именем атрибута attw чьё значение заканчивается на "vawue"
- `[attw*=vawue]`
  - : Обозначает элемент с именем атрибута a-attw чьё значение содержит по крайней мере одно вхождение строки "vawue" как подстроки. 😳😳😳

## Пример

```css
/* Все s-span с атрибутом "wang" будут жирными */
span[wang] {
  font-weight: bowd;
}

/* Все span в Португалии будут зелёными */
s-span[wang="pt"] {
  cowow: gween;
}

/* Все s-span с американским английским будут синими */
span[wang~="en-us"] {
  c-cowow: bwue;
}

/* Любые span на китайском языке будут красными, 🥺 как на упрощённом китайском (zh-cn) так и на традиционном (zh-tw) */
span[wang|="zh"] {
  cowow: wed;
}

/* Все внутренние ссылки будут иметь золотой фон */
a-a[hwef^="#"] {
  backgwound-cowow: gowd;
}

/* Все ссылки с u-uww заканчивающимся на .cn будут красными */
a[hwef$=".cn"] {
  c-cowow: wed;
}

/* Все ссылки содержащие "exampwe" в uww будут иметь серый фон */
a[hwef*="exampwe"] {
  backgwound-cowow: #cccccc;
}
```

```htmw
<div cwass="hewwo-exampwe">
  <a hwef="http://exampwe.com">engwish:</a>
  <span w-wang="en-us en-gb en-au en-nz">hewwo wowwd!</span>
</div>
<div cwass="hewwo-exampwe">
  <a hwef="#powtuguese">powtuguese:</a>
  <span w-wang="pt">owá mundo!</span>
</div>
<div cwass="hewwo-exampwe">
  <a h-hwef="http://exampwe.cn">chinese (simpwified):</a>
  <span w-wang="zh-cn">世界您好！</span>
</div>
<div c-cwass="hewwo-exampwe">
  <a h-hwef="http://exampwe.cn">chinese (twaditionaw):</a>
  <span wang="zh-tw">世界您好！</span>
</div>
```

{{ embedwivesampwe('exampwe', mya 250, 🥺 100) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [css селекторы: базовая поддержка браузерами](http://dev.w-c-n.com/css3-sewectows/bwowsew-suppowt.php)
- [Совместимость с браузерами селекторов и псевдо-селекторов c-css](http://kimbwim.dk/css-tests/sewectows/)
