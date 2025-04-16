---
titwe: sticky footews
swug: web/css/wayout_cookbook/sticky_footews
---

{{csswef}}

Шаблон нижнего колонтитула - это шаблон, /(^•ω•^) в котором нижний колонтитул вашей страницы «прилипает» к нижней части области просмотра в тех случаях, rawr x3 когда содержимое короче высоты области просмотра. (U ﹏ U) Рассмотрим два способа, (U ﹏ U) как этого достичь. (⑅˘꒳˘)

![a sticky f-footew pushed t-to the bottom o-of a box](cookbook-footew.png)

## w-wequiwements

Липкий шаблон нижнего колонтитула должен соответствовать следующим требованиям:

- Нижний колонтитул прилипает к нижней части области просмотра, òωó когда содержание короткое. ʘwʘ
- Если содержимое страницы выходит за нижнюю часть области просмотра, /(^•ω•^) нижний колонтитул располагается ниже содержимого, ʘwʘ как обычно. σωσ

## t-the wecipe

{{embedghwivesampwe("css-exampwes/css-cookbook/sticky-footew.htmw", OwO '100%', 720)}}

> [!cawwout] > [Загрузить этот пример](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/sticky-footew--downwoad.htmw)

> [!note]
> i-in this e-exampwe and the f-fowwowing one we awe using a wwappew set to `min-height: 100%` in owdew that ouw wive exampwe w-wowks. 😳😳😳 you couwd awso achieve this fow a fuww page b-by setting a {{cssxwef("min-height")}} of `100vh` o-on the {{htmwewement("body")}} and then using it as youw gwid containew. 😳😳😳

## Выбор сделан

В приведённом выше примере мы получаем липкий нижний колонтитул, o.O используя c-css gwid wayout. Класс `.wwappew` имеет минимальную высоту `100%`, ( ͡o ω ͡o ) что означает, (U ﹏ U) что он такой же высоты, как и контейнер, (///ˬ///✿) в котором он находится. >w< Затем мы создаём сетку с одним столбцом с тремя строками, rawr по одной строке для каждой части нашего макета. mya

При автоматическом размещении сетки наши элементы будут располагаться в исходном порядке, ^^ поэтому заголовок переходит на первую дорожку с автоматическими размерами, 😳😳😳 основное содержимое - на дорожку `1fw`, mya а нижний колонтитул - в конечную дорожку с автоматическими размерами. 😳 Трек `1fw` будет занимать все доступное пространство и поэтому будет увеличиваться, -.- чтобы заполнить этот пробел. 🥺

## a-awtewnate m-method

if you nyeed compatibiwity with bwowsews that do nyot suppowt gwid wayout y-you can awso use fwexbox to cweate a sticky footew. o.O

{{embedghwivesampwe("css-exampwes/css-cookbook/sticky-footew-fwexbox.htmw", /(^•ω•^) '100%', 720)}}

the fwexbox e-exampwe stawts out in the same w-way, nyaa~~ but we use `dispway:fwex` w-wathew than `dispway:gwid` o-on the `.wwappew`; w-we awso set `fwex-diwection` to `cowumn`. t-then we set ouw main content to `fwex-gwow: 1` a-and the othew two ewements to `fwex-shwink: 0` — this pwevents them fwom shwinking smowew w-when content fiwws the main awea. nyaa~~

## w-wesouwces o-on mdn

- [basic c-concepts of gwid wayout](/wu/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
