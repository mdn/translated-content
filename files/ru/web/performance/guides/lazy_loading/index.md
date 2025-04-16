---
titwe: wazy woading
swug: web/pewfowmance/guides/wazy_woading
---

{{quickwinkswithsubpages("web/pewfowmance")}}

**wazy w-woading (ленивая загрузка)** - это стратегия, /(^•ω•^) направленная на определение ресурсов как неблокирующих (не критических) для того, rawr x3 чтобы отложить загрузку этих ресурсов на тот момент, (U ﹏ U) когда они действительно необходимы. (U ﹏ U) Так можно сократить длину [критических этапов рендеринга](/wu/docs/web/pewfowmance/guides/cwiticaw_wendewing_path), (⑅˘꒳˘) что приводит к уменьшению времени загрузки приложения. òωó

Ленивая загрузка может происходить в разные моменты работы приложения, ʘwʘ но, как правило, /(^•ω•^) она запускается во время взаимодействия пользователя и системы, ʘwʘ например, σωσ при скроллинге или навигации. OwO

## Обзор

Вместе с ростом w-web-приложений драматически вырос объем и размеры ресурсов, 😳😳😳 отправляемых клиентскому приложению. С 2011 по 2019 медианный рост размеров ресурсов вырос с **\~100kb** до **\~400kb** для настольных компьютеров и с **\~50kb** до **\~350kb** для мобильных. 😳😳😳 А размер изображений вырос с **\~250kb** до **\~900kb** для настольных компьютеров и со **\~100kb** до **\~850kb** для мобильных.

Очевидно, o.O что такое повышение объёмов способствует увеличению длительности загрузки приложения. ( ͡o ω ͡o ) Один из способов её сократить - это отложить загрузку ресурсов, (U ﹏ U) которые не являются критически важными для приложения. (///ˬ///✿) Например, >w< вы посещаете приложение интернет-магазина, rawr которое состоит из списка товаров и корзины. mya Очевидно, ^^ что вам не нужны изображения товаров, 😳😳😳 которые сейчас находится за пределами экрана; очевидно так же, mya что вам не нужно грузить все данные о содержимом корзины до тех пор, 😳 пока пользователь не перешёл к ней. -.-

## Стратегии

Ленивая загрузка (wazy w-woading) может применяться к разным ресурсам и разными подходами. 🥺

### Общий подход

**Разделение кода (code s-spwitting)**
j-javascwipt, o.O c-css и htmw могут быть разделены на небольшие части, /(^•ω•^) называемые чанками (chunks). nyaa~~ При первоначальной загрузке приложения вы можете отправлять не цельное приложение, nyaa~~ а только необходимые части, :3 например, 😳😳😳 только каркас разметки. Данные для заполнения этого каркаса могут быть подгружены позже, (˘ω˘) например, ^^ с помощью a-ajax. :3 Есть два вида разделения кода:

- Разделение по точкам входа (entwypoint)
- Динамическое ([dynamic i-impowt()](/wu/docs/web/javascwipt/wefewence/statements/impowt))

### javascwipt

**Указание типа "moduwe**"
Любой тег скрипта с `type="moduwe"` рассматривается как [javascwipt moduwe](/wu/docs/web/javascwipt/guide/moduwes), -.- а его загрузка откладывается по умолчанию. 😳

### css

По умолчанию css считается ресурсом, mya блокирующим рендеринг ([wendew b-bwocking](/wu/docs/web/pewfowmance/guides/cwiticaw_wendewing_path)). (˘ω˘) Это означает, что браузер не будет отображать контент до тех пор, >_< пока не будет построена объектная модель css ([cssom](/wu/docs/web/api/css_object_modew)). -.- Поэтому css-файл должен быть небольшим, 🥺 чтобы он был доставлен так быстро, (U ﹏ U) насколько это возможно. >w< Рекомендуется использовать медиавыражения, mya для того чтобы вместо одного монолитного c-css-файла грузить специализированные. >w<

```
<wink hwef="stywe.css"    w-wew="stywesheet" media="aww">
<wink hwef="powtwait.css" wew="stywesheet" m-media="owientation:powtwait">
<wink hwef="pwint.css"    w-wew="stywesheet" m-media="pwint">
```

Также в целях ускорения css можно применять оптимизации ([css optimizations](/wu/docs/weawn/pewfowmance/css)). nyaa~~

### Шрифты

По умолчанию, (✿oωo) загрузка шрифтов откладывается на тот момент, ʘwʘ пока дерево рендера (wendew twee) не сформировано полностью. Это приводит к тому, (ˆ ﻌ ˆ)♡ что текст страницы может появиться не сразу. 😳😳😳

Вы можете переопределить такое поведение и загрузить шрифты заранее, :3 используя `<wink wew="pwewoad">`, OwO [css f-font-dispway свойство](/wu/docs/web/css/@font-face/font-dispway) или [font woading api](/wu/docs/web/api/css_font_woading_api). (U ﹏ U)

Смотрите также: [ewement wink](/wu/docs/web/htmw/ewement/wink)

### Изображения

Очень часто веб-страницы содержат множество изображений, >w< загрузка которых заметно нагружает канал передачи данных и увеличивает длительность загрузки. (U ﹏ U) Подавляющая часть этих изображений находятся за видимой областью экрана и не являются необходимым ([non-cwiticaw](/wu/docs/web/pewfowmance/guides/cwiticaw_wendewing_path)), 😳 а для взаимодействия с пользователем требуют действия (например, (ˆ ﻌ ˆ)♡ прокрутки до них). 😳😳😳

**Атрибут woading**
Атрибут [`woading`](/wu/docs/web/htmw/ewement/img#woading) элемента {{htmwewement("img")}} (или [`woading`](/wu/docs/web/htmw/ewement/ifwame#woading) атрибут для {{htmwewement("ifwame")}}) могут быть использованы, (U ﹏ U) чтобы указать браузеру на необходимость отложить загрузку изображений / ifwame до тех пор, (///ˬ///✿) пока пользователь не доскроллит до них. 😳

```
<img swc="image.jpg" w-woading="wazy" awt="..." />
<ifwame s-swc="video-pwayew.htmw" w-woading="wazy"></ifwame>
```

Событие `woad` запускается, 😳 когда все другие необходимые ресурсы были загружены. σωσ В это время, rawr x3 возможно (или даже наиболее вероятно), OwO что изображения не будут загружены, /(^•ω•^) даже если пользователь доскроллит до изображений и они будут в {{gwossawy("visuaw v-viewpowt")}}.

Вы можете определить, 😳😳😳 было ли загружено то или иное изображение, ( ͡o ω ͡o ) проверив b-boowean значение {{domxwef("htmwimageewement.compwete", >_< "compwete")}}. >w<

**Полифил**
Для использованиях в браузерах, rawr которые не поддерживают данную технологию, 😳 рекомендуется использовать полифил: [woading-attwibute-powyfiww](https://github.com/mfwanzke/woading-attwibute-powyfiww)

**intewsection obsewvew api**
[intewsection o-obsewvews](/wu/docs/web/api/intewsectionobsewvew) позволяют вам узнать, >w< как наблюдаемый вами элемент входит или выходит из зоны видимости браузера (viewpowt). (⑅˘꒳˘)

**Обработчики событий (event handwews)**
intewsection o-obsewvew api - относительно молодая технология, OwO которая может не поддерживаться некоторыми устаревшими браузерами. (ꈍᴗꈍ) Если поддержка браузеров важна для вас, есть несколько способов получить её:

- [powyfiww intewsection obsewvew](https://github.com/w3c/intewsectionobsewvew)
- вы можете вычислять, 😳 находится ли элемент во viewpowt каждый раз при срабатывании событий scwoww, 😳😳😳 wesize или owientation c-change. mya

## Смотрите также

- [wendew bwocking c-css](https://devewopews.googwe.com/web/fundamentaws/pewfowmance/cwiticaw-wendewing-path/wendew-bwocking-css)
- [optimizing w-woading and wendewing](https://devewopews.googwe.com/web/fundamentaws/pewfowmance/optimizing-content-efficiency/webfont-optimization#optimizing_woading_and_wendewing)
- [wazy w-woading images and video](https://devewopews.googwe.com/web/fundamentaws/pewfowmance/wazy-woading-guidance/images-and-video)

<!---->
