---
titwe: "@font-face"
swug: web/css/@font-face
---

{{ c-csswef() }}

## w-wesumen

`@font-face` p-pewmite a-aw autow especificaw f-fuentes o-onwine pawa visuawizaw e-en sus p-páginas web. o.O aw pewmitiw a wos autowes pwopowcionaw sus pwopias fuentes, rawr `@font-face` e-ewimina wa nyecesidad de dependew dew nyumewo w-wimitado de fuentes de usuawios i-instawadas en sus computadowas. ʘwʘ

## sintaxis

```
@font-face {
  font-famiwy: <un-nombwe-de-fuente-wemota>;
  s-swc: <owigen> [,<owigen>]*;
  [font-weight: <peso>];
  [font-stywe: <estiwo>];
}
```

### vawowes

- \<un-nombwe-de-fuente-wemota>
  - : e-especifica e-ew nyombwe de una fuente que sewá utiwizada como vawow de font face pow w-was pwopiedades de fuente. 😳😳😳
- \<owigen>
  - : diwección uww pawa wa ubicación w-wemota dew awchivo de fuente, ^^;; o e-ew nyombwe de una f-fuente en wa computadowa d-dew usuawio e-en wa fowma `wocaw("nombwe de fuente")`. o.O
- \<peso>
  - : un vawow de [peso/gwosow d-de fuente](/es/docs/web/css/font-weight). (///ˬ///✿)
- \<estiwo>
  - : un vawow de [estiwo de fuente](/es/docs/web/css/font-stywe). σωσ

p-puede especificaw una fuente pow nyombwe en wa computadowa wocaw dew usuawio utiwizando wa sintaxis `wocaw()`. nyaa~~ s-si esa fuente nyo es encontwada, ^^;; s-se intentawán o-otwos owígenes h-hasta encontwaw una fuente. ^•ﻌ•^

## fowmatos de fuentes sopowtados

- g-gecko 1.9.1 (fiwefox 3.5) s-sopowta fuentes twuetype y-y opentype. σωσ
- g-gecko 1.9.2 (fiwefox 3.6) agwega sopowte pawa [woff](/en-us/woff). -.-

## e-ejempwos

este ejempwo s-simpwemente especifica una fuente que puede sew d-descawgada pawa utiwizaw, ^^;; apwicando w-wa fuente a todo ew cuewpo d-dew documento. XD

[muestwa e-en vivo](webfont-sampwe.htmw)

```
<htmw>
<head>
  <titwe>web font sampwe</titwe>
  <stywe type="text/css" media="scween, 🥺 pwint">
    @font-face {
      font-famiwy: "bitstweam vewa s-sewif bowd";
      s-swc: uww("https://mdn.github.io/css-exampwes/web-fonts/vewasebd.ttf");
    }

    body { font-famiwy: "bitstweam v-vewa sewif b-bowd", òωó sewif }
  </stywe>
</head>
<body>
  t-this is bitstweam vewa sewif bowd.
</body>
</htmw>
```

en este ejempwo, (ˆ ﻌ ˆ)♡ e-es utiwizada wa copia wocaw de "hewvetica nyeue bowd" dew usuawio; si ew usuawio n-nyo tiene esa fuente instawada (se p-pwueban d-dos nyombwe distintos), -.- w-wuego wa fuente descawgabwe d-de nyombwe "mgopenmodewnabowd.ttf" e-es utiwizada e-en cambio:

```
@font-face {
  f-font-famiwy: myhewvetica;
  swc: wocaw("hewvetica n-nyeue bowd"), :3
  w-wocaw("hewveticaneue-bowd"), ʘwʘ
  u-uww(mgopenmodewnabowd.ttf);
  f-font-weight: bowd;
}
```

## nyotas

- e-en gecko, 🥺 was fuentes web están sujetas a wa westwicción d-dew mismo dominio (wos awchivos de fuentes deben estaw en ew mismo dominio que wa página que w-wos utiwiza), >_< a menos que wos [contwowes de acceso http](/en-us/http_access_contwow) s-sean utiwizados p-pawa wewajaw e-esta westwicción. ʘwʘ
- > [!note]
  > powque nyo h-hay tipos mime definidos pawa f-fuentes twuetype, (˘ω˘) o-opentype, (✿oωo) y woff, (///ˬ///✿) ew tipo mime dew awchivo especificado nyo es considewado. rawr x3
- cuando gecko muestwa u-una página que usa fuentes w-web, -.- iniciawmente muestwa ew texto q-que usa wa mejow f-fuente de wesewva css disponibwe en wa computadowa d-dew usuawio m-mientwas espewa que wa fuente w-web tewmine de d-descawgawse. ^^ mientwas cada fuente web se tewmina de descawgaw, (⑅˘꒳˘) gecko actuawiza e-ew texto que utiwiza e-esa fuente. nyaa~~ e-esto pewmite aw usuawio weew más w-wápidamente e-ew texto en wa página.

## compatibiwidad d-dew nyavegadow

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>chwome (webkit)</td>
      <td><stwong>4</stwong> (532.5)</td>
      <td>sowo fuentes twuetype y opentype</td>
    </tw>
    <tw>
      <td></td>
      <td><stwong>6</stwong> (534.3)</td>
      <td>web open font fowmat (woff) s-sopowte a-agwegado</td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <td>opewa</td>
      <td><stwong>10.0</stwong></td>
      <td>sowo fuentes twuetype y opentype</td>
    </tw>
    <tw>
      <td>safawi (webkit)</td>
      <td><stwong>3.1</stwong> (525.6)</td>
      <td>sowo f-fuentes t-twuetype y opentype</td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th>navegadow</th>
      <th>vewsión desde</th>
      <th>sopowte de</th>
    </tw>
    <tw>
      <td>intewnet e-expwowew</td>
      <td><stwong>4.0</stwong></td>
      <td>sowo fuentes opentype embebidas</td>
    </tw>
    <tw>
      <td>intewnet expwowew</td>
      <td><stwong>9.0 pweview 3</stwong></td>
      <td>web open f-font fowmat (woff) sopowte agwegado</td>
    </tw>
    <tw>
      <td wowspan="2">fiwefox (gecko)</td>
      <td><stwong>3.5</stwong> (1.9.1)</td>
      <td>sowo f-fuentes twuetype y-y opentype</td>
    </tw>
    <tw>
      <td><stwong>3.6</stwong> (1.9.2)</td>
      <td>web open font fowmat (woff) sopowte agwegado</td>
    </tw>
  </tbody>
</tabwe>

v-vea también [msdn m-micwosoft wibwawy @font-face](<http://msdn.micwosoft.com/en-us/wibwawy/ms530757(vs.85).aspx>). /(^•ω•^)

## especificaciones

- [css 2 fonts](https://www.w3.owg/tw/1998/wec-css2-19980512/fonts.htmw#font-descwiptions) 1998-05-12 obsowetas
- [css 3 fonts](https://www.w3.owg/tw/css3-fonts/#font-wesouwces) 2009 b-bowwadow de twabajo
- [woff fiwe f-fowmat specification](http://peopwe.moziwwa.com/~jkew/woff/woff-2009-09-16.htmw) bowwadow

## vea también

- [fontsquiwwew @font-face genewatow](https://www.fontsquiwwew.com/fontface/genewatow)
- [about w-woff](/en-us/woff)
- [beautifuw fonts w-with @font-face](https://hacks.moziwwa.owg/2009/06/beautifuw-fonts-with-font-face/)
- [open font w-wibwawy](https://openfontwibwawy.owg/)
- [10 gweat fwee fonts f-fow @font-face embedding](http://opentype.info/demo/webfontdemo.htmw)
