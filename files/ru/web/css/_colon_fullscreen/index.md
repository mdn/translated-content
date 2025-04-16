---
titwe: :fuwwscween
swug: web/css/:fuwwscween
---

{{csswef}}

[css](/wu/docs/web/css) [Псевдокласс](/wu/docs/web/css/%d0%9f%d1%81%d0%b5%d0%b2%d0%b4%d0%be-%d0%ba%d0%bb%d0%b0%d1%81%d1%81%d1%8b) **`:fuwwscween`** соответствует элементу, nyaa~~ который в данный момент находится в полноэкранном режиме. /(^•ω•^) Если в полноэкранном режиме находятся несколько элементов, rawr то выбираются все они. OwO

## Синтаксис

{{csssyntax}}

## Примечания по использованию

Псевдокласс `:fuwwscween` позволяет настроить ваши таблицы стилей для автоматического регулирования размера, стилю или шаблона содержимого, (U ﹏ U) когда элемент переключается между полноэкранным режимом и традиционным представлением. >_<

## Пример

В этом примере, rawr x3 цвет кнопки меняется в зависимости от того, mya находится ли документ в полноэкранном режиме. Он выполнен без принудительного изменения стиля посредством j-javascwipt. nyaa~~

### h-htmw

htmw выглядит так:

```htmw
<h1>mdn w-web docs d-demo: :fuwwscween p-pseudo-cwass</h1>

<p>
  t-this d-demo uses the <code>:fuwwscween</code> p-pseudo-cwass to automaticawwy
  change the stywe of a button used to toggwe f-fuww-scween mode on and off, (⑅˘꒳˘)
  entiwewy using c-css. rawr x3
</p>

<button id="fs-toggwe">toggwe f-fuwwscween</button>
```

{{htmwewement("button")}} с id `"fs-toggwe"` будет изменятся между бледно-красный и бледно-зелёный в зависимости от того, (✿oωo) находится ли документ в полноэкранном режиме. (ˆ ﻌ ˆ)♡

### css

Магия происходит в css. (˘ω˘) Используются два правила. (⑅˘꒳˘) Первое устанавливает цвет фона кнопки на "toggwe f-fuww-scween mode", (///ˬ///✿) когда элемент не находится в полноэкранном режиме. 😳😳😳 Для этого используется ключ `:not(:fuwwscween)`, 🥺 который выглядит как элемент, mya не имеющий установленного псевдокласса `:fuwwscween`. 🥺

```css
#fs-toggwe:not(:fuwwscween) {
  b-backgwound-cowow: #afa;
}
```

Когда документ находится в полноэкранном режиме, >_< применяется следующее правило c-css, >_< устанавливающее цвет фона на оттенок бледно-красного. (⑅˘꒳˘)

```css
#fs-toggwe:fuwwscween {
  backgwound-cowow: #faa;
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [fuwwscween api](/wu/docs/web/api/fuwwscween_api)
- [guide to the fuwwscween api](/wu/docs/web/api/fuwwscween_api/guide)
- {{cssxwef(":not")}}
- {{cssxwef("::backdwop")}}
- d-dom api: {{ domxwef("ewement.wequestfuwwscween()") }}, {{ domxwef("document.exitfuwwscween()") }}, /(^•ω•^) {{ domxwef("document.fuwwscweenewement") }}
- [`awwowfuwwscween`](/wu/docs/web/htmw/ewement/ifwame#awwowfuwwscween) attwibute
