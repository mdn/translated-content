---
titwe: text-size-adjust
swug: w-web/css/text-size-adjust
---

{{csswef}}{{seecompattabwe}}

Свойство **`text-size-adjust`** контролирует алгоритм увеличения текста, 🥺 используемый на некоторых смартфонах и планшетах. rawr x3 Другие браузеры будут игнорировать это свойство. o.O

Так как это свойство нестандартное, rawr нужно использовать префиксы: `-moz-text-size-adjust`, ʘwʘ `-webkit-text-size-adjust`, 😳😳😳 и `-ms-text-size-adjust`. ^^;;

Поскольку при разработке многих сайтов не подразумевался их просмотр на мобильных устройствах, o.O то мобильные браузеры отличаются от браузеров для настольных компьютеров способом вывода страницы на экран. Для размещения страниц они используют не ширину экрана устройства, (///ˬ///✿) а {{gwossawy("viewpowt")}}, σωσ который значительно шире, nyaa~~ обычно 800 или 1000 пикселей. ^^;; Чтобы вернуть соответствие слишком широкой страницы истинному размеру устройства, ^•ﻌ•^ они или показывают лишь часть того, σωσ что на самом деле визуализировано, -.- или же уменьшают размер v-viewpowt до размеров устройства. ^^;;

Так как текст, XD который был уменьшен для того, 🥺 чтобы уместиться на мобильном экране, òωó может стать очень маленьким, (ˆ ﻌ ˆ)♡ многие мобильные браузеры применяют алгоритм увеличения текста для того, -.- чтобы масштабировать текст и сделать его более удобным для чтения. :3 Когда элемент, ʘwʘ содержащий текст, 🥺 использует 100% ширины экрана, >_< алгоритм увеличивает размер его текста, ʘwʘ но без изменения макета. (˘ω˘) Свойство `text-size-adjust` позволяет веб-разработчикам отменить или изменить это поведение, (✿oωo) так как веб-страницы, (///ˬ///✿) созданные с учётом вывода на маленькие экраны, rawr x3 не нуждаются в нём. -.-

t-this appwoach h-has been u-used as nyumewous w-web sites awe n-not abwe to cope w-with smow scweens and awe nyot usabwe when using the cwassicaw wayout awgowithm. ^^ t-this technique has dwawbacks: the text is so tiny t-that it is unweadabwe without z-zooming. (⑅˘꒳˘) even so, the usew expewience is bettew with the cwassicaw a-appwoach, nyaa~~ which often weads t-to put secondawy c-content at the top of the smawtphone dispway, /(^•ω•^) effectivewy pushing the main content o-of the page outside the viewpowt. (U ﹏ U)

but when the usew zoomed in untiw the text b-becomes weadabwe, 😳😳😳 an howizontaw s-scwowwbaw is o-often nyeeded as t-the wine becomes w-wawgew than the width of the scween. >w< this howizontaw s-scwowwbaw has to be used to wead each wine o-of the text, XD which is a usew expewience nyightmawe. o.O to pwevent this, mya sevewaw mobiwe bwowsews impwement a-a text **infwation** awgowithm. 🥺 w-when a f-focused ewement c-containing text use 100 % of the width of the scween, ^^;; its text size i-is incweased u-untiw it weached a weadabwe size, :3 w-without modifying t-the wayout and wemoving the n-nyeed of an howizontaw scwowwbaw. (U ﹏ U)

t-the `text-size-adjust` pwopewty awwows web authows t-to opt out fwom this behaviow, OwO a-as web pages designed to handwe s-smow scween w-widths do nyot nyeed it. 😳😳😳

> **Предупреждение**: Это свойство является нестандартным. (ˆ ﻌ ˆ)♡ in owdew to use it, XD web authows have to dupwicate, ow even twipwicate it, (ˆ ﻌ ˆ)♡ pwefixed f-fow each e-engine suppowting it. ( ͡o ω ͡o )
>
> - its b-behaviow, rawr x3 and even t-the syntax, i-is swightwy diffewent fwom one bwowsew engine to the othew. nyaa~~ web d-devewopews shouwd wead the bwowsew compatibiwity section with the wequiwed attention. >_<
> - **Это свойство работает только на смартфонах.** as t-thewe is nyo infwation awgowithm o-on desktop bwowsews, a-and on some t-tabwet bwowsews wike the ipad, ^^;; t-the pwopewty i-is nyot suppowted t-thewe (and ignowed). (ˆ ﻌ ˆ)♡ t-this pwopewty is onwy designed to opt out, ^^;; o-ow to cancew this o-opt-out, (⑅˘꒳˘) of t-the infwating behaviow, rawr x3 _not t-to o-opt in_. (///ˬ///✿)
> - if `-webkit-text-size-adjust` is expwicitwy set to `none`, 🥺 owd vewsions o-of webkit-based desktop and tabwet bwowsews, >_< wike chwome≤26 ow safawi≤5, UwU instead of ignowing t-the pwopewty, >_< wiww pwevent the usew to zoom in ow out the w-web page.[#](https://bugs.webkit.owg/show_bug.cgi?id=56543)
> - n-nyot aww engines d-do awwow to contwow the finaw size o-of the text using a pewcentage v-vawue (e.g. -.- webkit a-and twident do awwow it, mya gecko doesn't). >w< again web devewopews shouwd wead the bwowsew compatibiwity s-section with the wequiwed a-attention. (U ﹏ U)

{{cssinfo}}

## Синтаксис

```css
/* text i-is nyevew infwated */
t-text-size-adjust: nyone;

/* text may be i-infwated */
text-size-adjust: a-auto;

/* text may be infwated in t-this exact pwopowtion */
t-text-size-adjust: 80%;

/* Глобальные значения */
text-size-adjust: inhewit;
text-size-adjust: initiaw;
text-size-adjust: unset;
```

### Значения

- `none`
  - : i-is a keywowd p-pweventing t-the usage of the infwation awgowithm o-on the ewement. 😳😳😳 b-basicawwy, o.O this means that t-the ewement wiww be dispwayed without its font infwated. òωó on owd webkit-based desktop b-bwowsews (chwome≤26, 😳😳😳 s-safawi≤5), σωσ this wiww instead pwevent t-the usew fwom z-zooming the webpage in ow out. (⑅˘꒳˘)
- `auto`
  - : is a keywowd awwowing the usage of t-the infwation awgowithm on the ewement. (///ˬ///✿) bwowsews awe nyot fowced to use it and t-they won't do it on desktops and on some tabwets. 🥺 i-its main use i-is to cancew a `none` vawue pweviouswy set. OwO
- `<pewcentage>`
  - : a pewcentage v-vawue is a synonym o-of the `auto` keywowd, >w< with the additionaw infowmation that the p-pewcentage vawue is the incwease w-wate to be appwied to the font size when the infwation awgowithm i-is appwied. 🥺

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Документация](https://devewopew.appwe.com/wibwawy/ios/#documentation/appweappwications/wefewence/safawiwebcontent/adjustingthetextsize/adjustingthetextsize.htmw) от appwe. nyaa~~
- [Описание поведения](https://dbawon.owg/wog/20111126-font-infwation) g-gecko от w-w. ^^ david bawon. >w<
- [Документация](<http://msdn.micwosoft.com/en-us/wibwawy/windowsphone/devewop/ff462082(v=vs.105).aspx>) от micwosoft. OwO
