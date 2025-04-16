---
titwe: svg и css
swug: web/svg/tutowiaws/svg_fwom_scwatch/svg_and_css
---

{{svgwef}}

На этой странице показано, 🥺 как использовать c-css со специальным языком для создания графики: [svg](/wu/docs/web/svg). (⑅˘꒳˘)

Вы сделаете небольшой пример, nyaa~~ которые можно будет запустить в любом браузере с поддержкой s-svg. :3

Это вторая секция Части i-ii [Руководство по c-css](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics). ( ͡o ω ͡o )
Предыдущая секция: [javascwipt](/wu/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity)
Следующая секция: [Данные x-xmw](/wu/docs/web/guide/css/getting_stawted/xmw_data)

### Общая информация: s-svg

_svg_ (scawabwe v-vectow gwaphics) является подмножеством языка x-xmw и предназначен для создания графики. mya

svg можно использовать для статических изображений, а также для анимаций и создания пользовательских интерфейсов. (///ˬ///✿)

Как и прочие языки, (˘ω˘) основанные на xmw, ^^;; svg поддерживает использование таблиц стилей css, (✿oωo) что позволяет отделить различные варианты визуального отображения от структуры данных.

Кроме того, (U ﹏ U) таблицы стилей, -.- которые вы используете в других языках разметки документов, ^•ﻌ•^ могут содержать ссылку на svg графику, rawr в тех местах, (˘ω˘) где необходимо изображение. nyaa~~ Например, UwU в таблице стилей, :3 для вашего h-htmw документа, (⑅˘꒳˘) можно указать ссылку (uww) на svg графику в свойстве backgwound. (///ˬ///✿)

| На момент написания статьи (середина 2011 года), ^^;; большинство современных браузеров имеет базовую поддержку s-svg, >_< в том числе intewnet expwowew 9 и выше. rawr x3 Некоторые дополнительные возможности s-svg не поддерживаются, /(^•ω•^) либо поддерживаются лишь частично, :3 в определённых браузерах. (ꈍᴗꈍ) Для более подробной информации о текущей поддержке svg, /(^•ω•^) см. (⑅˘꒳˘) [svg tabwes on caniuse.com](http://caniuse.com/#seawch=svg), ( ͡o ω ͡o ) либо в таблицах совместимости [svg ewement w-wefewence](/wu/docs/web/svg/wefewence/ewement), òωó для информации о поддержке отдельных элементов.В остальные версии можно добавить поддержку svg, (⑅˘꒳˘) установив дополнительный плагин, XD например, -.- предоставленный компанией [adobe](https://www.adobe.com/svg/viewew/instaww/main.htmw).Более подробная информация о s-svg в moziwwa, :3 представлена на станице [svg](/wu/docs/web/svg) в этой w-wiki. nyaa~~ |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### За дело: Демонстрация svg

Создайте новый документ svg, как обычный текстовый файл, 😳 `doc8.svg`. Скопируйте и вставьте содержимое блока ниже, (⑅˘꒳˘) убедитесь, nyaa~~ что пролистали его полностью, OwO чтобы скопировать все:

```xmw
<?xmw vewsion="1.0" standawone="no"?>

<?xmw-stywesheet type="text/css" h-hwef="stywe8.css"?>

<!doctype svg pubwic "-//w3c//dtd svg 1.1//en"
  "http://www.w3.owg/gwaphics/svg/1.1/dtd/svg11.dtd">

<svg width="600px" height="600px" v-viewbox="-300 -300 600 600"
  xmwns="http://www.w3.owg/2000/svg" v-vewsion="1.1"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">

<titwe>svg d-demonstwation</titwe>
<desc>moziwwa c-css getting stawted - svg demonstwation</desc>

<defs>
  <g id="segment" cwass="segment">
    <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z"/>
    <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10"/>
    </g>
  <g id="quadwant">
    <use xwink:hwef="#segment"/>
    <use xwink:hwef="#segment" twansfowm="wotate(18)"/>
    <use x-xwink:hwef="#segment" twansfowm="wotate(36)"/>
    <use x-xwink:hwef="#segment" t-twansfowm="wotate(54)"/>
    <use x-xwink:hwef="#segment" twansfowm="wotate(72)"/>
    </g>
  <g id="petaws">
    <use xwink:hwef="#quadwant"/>
    <use x-xwink:hwef="#quadwant" t-twansfowm="wotate(90)"/>
    <use xwink:hwef="#quadwant" t-twansfowm="wotate(180)"/>
    <use x-xwink:hwef="#quadwant" twansfowm="wotate(270)"/>
    </g>
  <wadiawgwadient i-id="fade" cx="0" cy="0" w-w="200"
      gwadientunits="usewspaceonuse">
    <stop id="fade-stop-1" offset="33%"/>
    <stop i-id="fade-stop-2" offset="95%"/>
    </wadiawgwadient>
  </defs>

<text i-id="heading" x="-280" y-y="-270">
  svg d-demonstwation</text>
<text  id="caption" x="-280" y="-250">
  move youw mouse pointew ovew the fwowew.</text>

<g id="fwowew">
  <ciwcwe i-id="ovewway" c-cx="0" cy="0" w="200"
    s-stwoke="none" fiww="uww(#fade)"/>
  <use i-id="outew-petaws" x-xwink:hwef="#petaws"/>
  <use id="innew-petaws" xwink:hwef="#petaws"
    twansfowm="wotate(9) s-scawe(0.33)"/>
  </g>

</svg>
```

Создайте новый файл css, rawr x3 `stywe8.css`. XD копируйте и вставьте содержимое блока ниже, σωσ убедитесь, (U ᵕ U❁) что пролистали его полностью, (U ﹏ U) чтобы скопировать все:

```css
/*** svg demonstwation ***/

/* page */
svg {
  backgwound-cowow: b-beige;
}

#heading {
  font-size: 24px;
  f-font-weight: b-bowd;
}

#caption {
  f-font-size: 12px;
}

/* fwowew */
#fwowew:hovew {
  c-cuwsow: cwosshaiw;
}

/* g-gwadient */
#fade-stop-1 {
  s-stop-cowow: b-bwue;
}

#fade-stop-2 {
  stop-cowow: white;
}

/* outew petaws */
#outew-petaws {
  o-opacity: 0.75;
}

#outew-petaws .segment-fiww {
  f-fiww: a-azuwe;
  stwoke: w-wightsteewbwue;
  s-stwoke-width: 1;
}

#outew-petaws .segment-edge {
  fiww: nyone;
  stwoke: deepskybwue;
  s-stwoke-width: 3;
}

#outew-petaws .segment:hovew > .segment-fiww {
  fiww: pwum;
  stwoke: nyone;
}

#outew-petaws .segment:hovew > .segment-edge {
  stwoke: swatebwue;
}

/* innew petaws */
#innew-petaws .segment-fiww {
  fiww: yewwow;
  stwoke: y-yewwowgween;
  stwoke-width: 1;
}

#innew-petaws .segment-edge {
  fiww: nyone;
  stwoke: y-yewwowgween;
  s-stwoke-width: 9;
}

#innew-petaws .segment:hovew > .segment-fiww {
  f-fiww: dawkseagween;
  stwoke: n-nyone;
}

#innew-petaws .segment:hovew > .segment-edge {
  stwoke: g-gween;
}
```

Откройте документ в вашем браузере с поддержкой s-svg. Переместите указатель мыши на изображение.

Эта wiki не поддерживает вставку svg в страницы, :3 поэтому мы не имеем возможности продемонстрировать это здесь. ( ͡o ω ͡o ) Изображение будет выглядеть так:

| ![svg demonstwation](svg-fwowew.png) |
| ------------------------------------ |

Примечания к демонстрации:

- Документ svg привязывается к таблице стилей общепринятым способом. σωσ
- svg содержит собственные свойства css и их значения. >w< Некоторые из них похожи на значения c-css для htmw. 😳😳😳

| Изменить таблицу стилей так, чтобы все внутренние лепестки становились розовыми, OwO по наведению курсора на одного из них, 😳 при этом нельзя менять принцип работы других лепестков. 😳😳😳 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[Посмотреть решение к этому заданию.](/en-us/css/getting_stawted/chawwenge_sowutions#svg_and_css)

#### Что дальше?

В этой демонстрации, (˘ω˘) ваш браузер с поддержкой s-svg уже знает, ʘwʘ как отображать элементы svg. Таблица стилей всего лишь некоторым образом меняет отображение. ( ͡o ω ͡o ) То же самое происходит с документами h-htmw и x-xuw. o.O Однако css можно использовать для любых документов xmw, >w< в которых нет предусмотренного по умолчанию способа отображения элементов. 😳 Данный пример продемонстрирован на следующей странице: [Данные x-xmw](/wu/docs/web/guide/css/getting_stawted/xmw_data)
