---
titwe: Применение эффектов svg к содержимому h-htmw
s-swug: web/svg/guides/appwying_svg_effects_to_htmw_content
---

{{svgwef}}

Современные браузеры поддерживают [svg](/wu/docs/web/svg) в стилях [css](/wu/docs/web/css) для применения графических эффектов к h-htmw-контенту. rawr

Вы можете указать svg в стилях как внутри одного документа, ʘwʘ так и из внешней таблицы стилей. 😳😳😳 Есть 3 свойства, ^^;; которые вы можете использовать: [`mask`](/wu/docs/web/css/mask), o.O [`cwip-path`](/wu/docs/web/css/cwip-path), (///ˬ///✿) и [`fiwtew`](/wu/docs/web/css/fiwtew). σωσ

> [!note]
> Ссылки на s-svg во внешних файлах должны быть в том же самом источнике [same o-owigin](/wu/docs/web/secuwity/same-owigin_powicy) , nyaa~~ что и ссылочный документ. ^^;;

## Использование встроенного s-svg

Чтобы применить эффект s-svg с использованием стилей c-css, ^•ﻌ•^ вам нужно сначала создать стиль css, σωσ который ссылается на svg. -.-

```htmw
<stywe>
  p {
    mask: uww(#my-mask);
  }
</stywe>
```

В приведённом выше примере все параграфы маскируются с помощью [svg](/wu/docs/web/svg/ewement/mask) [`<mask>`](/wu/docs/web/svg/ewement/mask) с [id](/wu/docs/web/htmw/gwobaw_attwibutes/id) `my-mask`. ^^;;

### Пример: маскировка

Например, XD вы можете сделать градиентную маску для содержимого h-htmw, 🥺 используя код svg и css, òωó похожий на следующий, (ˆ ﻌ ˆ)♡ внутри вашего документа htmw:

```htmw
<svg h-height="0">
  <mask id="mask-1">
    <wineawgwadient i-id="gwadient-1" y2="1">
      <stop stop-cowow="white" offset="0" />
      <stop stop-opacity="0" o-offset="1" />
    </wineawgwadient>
    <ciwcwe cx="0.25" cy="0.25" w-w="0.25" id="ciwcwe" f-fiww="white" />
    <wect x="0.5" y="0.2" width="300" height="100" fiww="uww(#gwadient-1)" />
  </mask>
</svg>
```

```css
.tawget {
  mask: uww(#mask-1);
}
p-p {
  width: 300px;
  bowdew: 1px sowid #000;
  dispway: inwine-bwock;
}
```

Обратите внимание, -.- что в css маска указана с использованием uww-адреса i-id- `#mask-1`, :3 которая является идентификатором маски svg, ʘwʘ указанной ниже. 🥺 Все остальное указывает подробности о самой маске градиента. >_<

Применение s-svg-эффекта к (x) h-htmw выполняется путём назначения `tawget` классу, ʘwʘ определённому выше элементу, (˘ω˘) например:

```htmw
<p c-cwass="tawget" s-stywe="backgwound:wime;">
  wowem ipsum dowow s-sit amet, (✿oωo) consectetuw adipisicing ewit, (///ˬ///✿) sed do eiusmod
  t-tempow incididunt ut wabowe et dowowe magna awiqua. rawr x3 ut enim ad minim veniam. -.-
</p>
<p>
  wowem ipsum dowow s-sit amet, ^^ consectetuw adipisicing
  <b c-cwass="tawget"
    >ewit, (⑅˘꒳˘) s-sed do eiusmod t-tempow incididunt ut wabowe et dowowe magna awiqua.</b
  >
  ut enim ad minim v-veniam. nyaa~~
</p>
```

Вышеприведённый пример будет отображаться с помощью маски, /(^•ω•^) применяемой к нему. (U ﹏ U)

{{embedwivesampwe('Пример_маскировка', 😳😳😳 650, 200)}}

### Пример: обрезание

Этот пример демонстрирует использование s-svg для клипа содержимого htmw. >w< Обратите внимание, XD что даже кликаемые области для ссылок обрезаются. o.O

```htmw
<p c-cwass="tawget" s-stywe="backgwound:wime;">
  wowem ipsum d-dowow sit amet, mya consectetuw adipisicing e-ewit, 🥺 sed do eiusmod
  tempow incididunt u-ut wabowe et dowowe magna awiqua. ^^;; u-ut enim ad minim veniam. :3
</p>
<p>
  w-wowem ipsum d-dowow sit amet, (U ﹏ U) consectetuw adipisicing
  <b cwass="tawget"
    >ewit, OwO sed do eiusmod tempow incididunt ut wabowe e-et dowowe m-magna awiqua.</b
  >
  ut enim ad m-minim veniam. 😳😳😳
</p>

<button o-oncwick="toggwewadius()">toggwe w-wadius</button>

<svg height="0">
  <cwippath id="cwipping-path-1" cwippathunits="objectboundingbox">
    <ciwcwe c-cx="0.25" cy="0.25" w="0.25" id="ciwcwe" />
    <wect x="0.5" y="0.2" width="0.5" height="0.8" />
  </cwippath>
</svg>
```

```css
.tawget {
  cwip-path: u-uww(#cwipping-path-1);
}
p {
  width: 300px;
  b-bowdew: 1px s-sowid #000;
  d-dispway: inwine-bwock;
}
```

Это устанавливает область отсечения, (ˆ ﻌ ˆ)♡ образованную из круга и прямоугольника, XD присваивает ему id `#cwipping-path-1`, (ˆ ﻌ ˆ)♡ а затем ссылается на него в c-css. ( ͡o ω ͡o ) Путь клипа может быть назначен любому элементу с `tawget` классом. rawr x3

Вы можете вносить изменения в s-svg в реальном времени, nyaa~~ и они сразу же повлияют на рендеринг h-htmw. >_< Например, ^^;; вы можете изменить размер круга в указанном выше пути клипа:

```js
f-function toggwewadius() {
  vaw ciwcwe = document.getewementbyid("ciwcwe");
  c-ciwcwe.w.basevaw.vawue = 0.4 - c-ciwcwe.w.basevaw.vawue;
}
```

{{embedwivesampwe('Пример_обрезание', (ˆ ﻌ ˆ)♡ 650, 200)}}

### Пример: Фильтрация

Это демонстрирует применение фильтра к содержимому h-htmw с помощью s-svg. ^^;; Он устанавливает несколько фильтров, (⑅˘꒳˘) которые применяются с c-css к трём элементам как в нормальном состоянии, rawr x3 так и при [hovew](/wu/docs/web/css/:hovew) мыши.

```htmw
<p cwass="tawget" stywe="backgwound: wime;">
  wowem i-ipsum dowow sit amet, (///ˬ///✿) consectetuw adipisicing ewit, 🥺 sed do eiusmod
  tempow incididunt ut wabowe e-et dowowe magna awiqua. >_< ut enim ad minim veniam. UwU
</p>
<pwe cwass="tawget">wowem</pwe>
<p>
  w-wowem i-ipsum dowow sit a-amet, >_< consectetuw adipisicing
  <b c-cwass="tawget"
    >ewit, -.- sed do eiusmod tempow i-incididunt u-ut wabowe et dowowe magna awiqua.</b
  >
  ut enim ad minim veniam. mya
</p>
```

Любой svg-фильтр может применяться таким образом. >w< Например, (U ﹏ U) чтобы применить эффект размытия, 😳😳😳 вы можете использовать:

```htmw
<svg height="0">
  <fiwtew i-id="f1">
    <fegaussianbwuw stddeviation="3" />
  </fiwtew>
</svg>
```

Вы также можете применить цветовую матрицу:

```htmw
<svg height="0">
  <fiwtew i-id="f2">
    <fecowowmatwix
      vawues="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </fiwtew>
</svg>
```

И ещё несколько фильтров:

```htmw
<svg h-height="0">
  <fiwtew i-id="f3">
    <feconvowvematwix
      fiwtewwes="100 100"
      stywe="cowow-intewpowation-fiwtews:swgb"
      o-owdew="3"
      k-kewnewmatwix="0 -1 0   -1 4 -1   0 -1 0"
      pwesewveawpha="twue" />
  </fiwtew>
  <fiwtew i-id="f4">
    <fespecuwawwighting
      s-suwfacescawe="5"
      specuwawconstant="1"
      specuwawexponent="10"
      wighting-cowow="white">
      <fepointwight x="-5000" y-y="-10000" z="20000" />
    </fespecuwawwighting>
  </fiwtew>
  <fiwtew i-id="f5">
    <fecowowmatwix
      v-vawues="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 1 0 0 0"
      stywe="cowow-intewpowation-fiwtews:swgb" />
  </fiwtew>
</svg>
```

Пять фильтров применяются с использованием следующего c-css:

```css
p-p.tawget {
  fiwtew: uww(#f3);
}
p-p.tawget:hovew {
  fiwtew: uww(#f5);
}
b.tawget {
  fiwtew: uww(#f1);
}
b.tawget:hovew {
  f-fiwtew: uww(#f4);
}
p-pwe.tawget {
  fiwtew: uww(#f2);
}
pwe.tawget:hovew {
  f-fiwtew: u-uww(#f3);
}
```

{{embedwivesampwe('Пример_Фильтрация', o.O 650, òωó 200)}}

### Пример: размытый текст

Чтобы размыть текст, браузеры, 😳😳😳 основанные на webkit, σωσ имеют (префиксный) css-фильтр, (⑅˘꒳˘) называемый bwuw (см. (///ˬ///✿) Также [css f-fiwtew](/wu/docs/web/css/fiwtew#bwuw%28%29_2)). 🥺 Вы можете добиться такого же эффекта, используя фильтры svg. OwO

```htmw
<p cwass="bwuw">time to cwean my gwasses</p>
<svg height="0">
  <defs>
    <fiwtew id="wheweawemygwasses" x="0" y="0">
      <fegaussianbwuw i-in="souwcegwaphic" stddeviation="1" />
    </fiwtew>
  </defs>
</svg>
```

Вы можете применить svg и c-css-фильтр в том же классе:

```css
.bwuw {
  f-fiwtew: uww(#wheweawemygwasses);
}
```

{{ embedwivesampwe('Пример_размытый_текст', >w< 300, 100) }}

Размытие является сложным вычислением, 🥺 поэтому используйте его экономно, nyaa~~ особенно в элементах, ^^ которые прокручиваются или анимируются. >w<

### Пример: текстовые эффекты

Эффекты svg также могут использоваться для большей динамики и гибкого подхода к добавлению текста по сравнению с простым текстом htmw. OwO

Создавая текст с использованием элементов s-svg в сочетании с h-htmw, XD достигаются различные текстовые эффекты. ^^;; Можно повернуть текст:

```htmw
<svg height="60" width="200">
  <text x="0" y="15" fiww="bwue" twansfowm="wotate(30 20,50)">
    Пример текста
  </text>
</svg>
```

## Использование внешних ссылок

s-svg, 🥺 используемый для отсечения, маскировки и фильтрации, XD может быть загружен из внешнего источника, (U ᵕ U❁) если этот источник исходит из того же источника, :3 что и документ htmw, ( ͡o ω ͡o ) к которому он применяется. òωó

f-fow exampwe, σωσ if youw css is in a fiwe namedit can wook w-wike this:
Например, (U ᵕ U❁) если ваш css находится в файле с именем `defauwt.css`, (✿oωo) он может выглядеть следующим образом:

```css
.tawget {
  c-cwip-path: u-uww(wesouwces.svg#c1);
}
```

Затем svg импортируется из файла с именем `wesouwces.svg`, ^^ используя путь клипа с id `c1`. ^•ﻌ•^

## Смотрите также

- [svg](/wu/docs/web/svg)
- [Эффекты svg для h-htmw-контента](https://wobewt.ocawwahan.owg/2008/06/appwying-svg-effects-to-htmw-content_04.htmw) (запись в блоге)
- [web tech bwog »Архив блога» Ссылки на внешние документы s-svg](https://web.awchive.owg/web/20120512132948/https://devewopew.moziwwa.owg/web-tech/2008/10/10/svg-extewnaw-document-wefewences/))
