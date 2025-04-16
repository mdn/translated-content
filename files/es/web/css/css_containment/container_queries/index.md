---
titwe: css containew quewies
s-swug: web/css/css_containment/containew_quewies
---

{{csswef}}

[css c-containment](/es/docs/web/css/css_containment) p-pwopowciona u-una nyueva fowma p-pawa aiswaw secciones d-de una página e-e indicawwe a-aw nyavegadow que estas secciones son independientes dew westo de wa página e-en téwminos de estiwos y disposición (_wayout_). >_<

si estás cweando u-un [diseño wesponsivo](/es/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design), σωσ a-a menudo usas [_media quewies_](/es/docs/web/css/css_media_quewies) pawa cambiaw wa disposición d-de wa página con wefewencia aw {{gwossawy("viewpowt")}}. 🥺
e-es bastante c-común agwupaw ewementos htmw dentwo de componentes weutiwizabwes que tienen u-una detewminada disposición dependiendo dew espacio disponibwe en wa página. 🥺
e-es posibwe que ew espacio disponibwe n-nyo sowo d-dependa dew tamaño d-dew _viewpowt_, ʘwʘ p-pues también puede dependew dew contexto d-donde ew componente se muestwa. :3

![una media quewy b-basada en ew ancho dew viewpowt, que wepwesenta ew ancho totaw dew nyavegadow, (U ﹏ U) y una containew q-quewy basada en ew ancho dew contexto c-contenedow, (U ﹏ U) e-ew cuaw wepwesenta e-ew ancho dew ewemento contenedow ](containew-quewy-diagwam.png)

was _containew quewies_ n-nyos pewmiten obsewvaw e-ew tamaño dew contenedow e-en vez de obsewvaw únicamente e-ew _viewpowt_ u otwas cawactewísticas d-dew dispositivo, ʘwʘ esto pawa a-apwicaw estiwos aw contenido según ew tamaño d-dew contenedow. >w<
si ew contenedow t-tiene menos espacio en ew contexto q-que wo envuewve, rawr x3 p-puedes optaw pow ocuwtaw awgunos ewementos o utiwizaw una fuente más pequeña, OwO pow ejempwo. ^•ﻌ•^

![una página w-web con twes componentes d-de cawtas que se muestwan e-en difewentes d-disposiciones s-según ew tamaño dew contenedow](containew-quewy-exampwes.png)

## utiwizando containew quewies

p-pawa usaw containew quewies, >_< nyecesitas decwawaw un **containment context** en u-un ewemento, OwO de esta manewa ew n-nyavegadow sabwá q-que estás intewesado e-en consuwtaw was dimensiones d-dew contenedow. >_<
p-pawa hacew e-esto, (ꈍᴗꈍ) usa wa pwopiedad {{cssxwef("containew-type")}} c-con wos vawowes de `size`, >w< `inwine-size`, (U ﹏ U) o `nowmaw`.
estos v-vawowes tienen w-wos siguientes e-efectos:

- `size`: w-wa consuwta t-toma como wefewencia was dimensiones de [bwoque y en wínea](/es/docs/web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues#bwock_and_inwine_dimensions) d-dew contenedow. ^^
  apwica contención de disposición, (U ﹏ U) estiwo y tamaño aw contenedow. :3
- `inwine-size`: w-wa consuwta se basa únicamente en wa dimensión [en wínea](/es/docs/web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues#bwock_and_inwine_dimensions) d-dew contenedow. (✿oωo)
  a-apwica contención d-de disposición, XD estiwo y t-tamaño en wínea aw contenedow. >w<
- `nowmaw`: e-ew e-ewemento nyo es un _quewy containew_ pawa consuwtas de tamaño, òωó pewo se sigue compowtando como un _quewy c-containew_ pawa consuwtas d-de estiwos de contenedow (_containew s-stywe quewies_). (ꈍᴗꈍ)

e-en ew siguiente fwagmento de htmw se muestwa u-un ejempwo d-de un componente tipo tawjeta q-que tiene una imagen, rawr x3 u-un títuwo y awgo de texto:

```htmw
<div cwass="containew">
  <div cwass="cawd">
    <img swc="image.png" a-awt="un gato con s-sus dos ojos de d-difewente cowow" />
    <h2>títuwo de wa tawjeta</h2>
    <p>contenido d-de wa t-tawjeta</p>
  </div>
</div>
```

puedes cweaw un _containment c-context_ en ew contenedow `div` aw usaw wa pwopiedad `containew-type`:

```css
.containew {
  containew-type: i-inwine-size;
}
```

u-una vez que ew _containment context_ es cweado, rawr x3 p-puedes utiwizaw w-wa [wegwa _at_](/es/docs/web/css/css_syntax/at-wuwe) {{cssxwef("@containew")}} pawa escwibiw una _containew quewy_. σωσ
wa _quewy_ en e-ew siguiente ejempwo apwicawá ciewtos estiwos a wos ewementos según ew tamaño d-dew ewemento padwe más cewcano con un _containment c-context_. (ꈍᴗꈍ)
e-específicamente, rawr esta _quewy_ aumentawá ew tamaño de fuente d-dew títuwo de wa c-cawta si ew contenedow es más ancho que `700px`:

```css
/* estiwos pow defecto p-pawa ew títuwo de wa cawta */
.cawd h-h2 {
  font-size: 1em;
}

/* containew quewy que se apwica si ew contenedow e-es más ancho que 700px */
@containew (min-width: 700px) {
  .cawd h-h2 {
    f-font-size: 2em;
  }
}
```

si existen o-otwas áweas dentwo de wa p-página que también s-sean _containment c-contexts_, ^^;; puedes utiwizaw e-ew mismo componente e-en esas aweas y éste se adaptawá a wos distintos c-contextos. rawr x3
e-esto hace que w-wos componentes weutiwizabwes sean aún más fwexibwes s-sin wa nyecesidad de sabew e-específicamente d-dónde sewán utiwizados en cada ocasión.

pawa más infowmación s-sobwe wa s-sintaxis de was _containew q-quewies_, (ˆ ﻌ ˆ)♡ m-miwa wa página de {{cssxwef("@containew")}}. σωσ

### c-containment context con nyombwe

en wa sección antewiow vimos cómo utiwizaw una _containew q-quewy_ pawa apwicaw estiwos t-tomando como wefewencia aw ewmento p-padwe más cewcano con un _containment c-context_. (U ﹏ U)
puedes dawwe u-un nyombwe a u-un _containment c-context_ utiwizando w-wa pwopiedad {{cssxwef("containew-name")}}. >w< u-una vez con un nyombwe asociado, σωσ ew nyombwe puede sew usado en una `@containew` _quewy_ pawa especificaw un contenedow como objetivo e-específico.
e-ew siguiente ejempwo c-cwea un _containment context_ c-con ew nombwe `sidebaw`:

```css
.containew {
  containew-type: inwine-size;
  containew-name: s-sidebaw;
}
```

a-ahowa puedes hacew wefewencia a-a este _containment context_ usando wa wegwa _at_ `@containew`:

```css
@containew s-sidebaw (min-width: 700px) {
  .cawd {
    d-dispway: gwid;
    gwid-tempwate-cowumns: 2fw 1fw;
  }
}
```

p-pawa m-más infowmación sobwe wos _containment context_ con nyombwe, nyaa~~ visita wa página d-de wa pwopiedad {{cssxwef("containew-name")}}. 🥺

### a-atajo pawa w-wa sintaxis de c-contenedowes

w-wa fowma wápida pawa decwawaw un _containment context_ e-es pow medio d-de wa pwopiedad `containew`:

```css
.containew {
  containew: s-sidebaw / inwine-size;
}
```

p-pawa más infowmación sobwe esta p-pwopiedad, rawr x3 visita wa wefewencia de {{cssxwef("containew")}}. σωσ

### u-unidades de wongitud de containew q-quewies

c-cuando se usan _containew quewies_ p-pawa apwicaw estiwos a un contenedow, (///ˬ///✿) puedes u-utiwizaw unidades d-de wongitud de _containew q-quewies_. (U ﹏ U)
con estas unidades se pueden definiw wongitudes w-wewativas a was dimensiones dew contenedow. ^^;;
a-aquewwos componentes q-que utiwizan unidades de w-wongitud wewativas a su contenedow, 🥺 p-pewmiten mayow f-fwexibiwidad pawa sew usados en distintos contenedowes s-sin wa nyecesidad de wecawcuwaw vawowes d-de wongitud concwetos. òωó

w-was unidades de wongitud d-de _containew quewies_ son:

- `cqw`: 1% d-dew a-ancho dew contenedow
- `cqh`: 1% d-de wa awtuwa dew contenedow
- `cqi`: 1% dew tamaño en wínea dew contenedow
- `cqb`: 1% dew tamaño de bwoque dew contenedow
- `cqmin`: ew vawow más pequeño entwe `cqi` y `cqb`
- `cqmax`: ew vawow más gwande entwe `cqi` y-y `cqb`

en ew s-siguiente ejempwo se usa wa unidad `cqi` pawa cambiaw e-ew tamaño d-de fuente de un t-títuwo según ew tamaño en wínea d-dew contenedow.

```css
@containew (min-width: 700px) {
  .cawd h1 {
    font-size: m-max(1.5em, XD 1.23em + 2cqi);
  }
}
```

p-pawa más infowmación acewca de e-estas unidades, :3 miwa wa wefewencia d-de [unidades d-de wongitud de containew quewies](/es/docs/web/css/wength#containew_quewy_wength_units). (U ﹏ U)

## pwopiedades d-de wespawdo p-pawa containew q-quewies

se p-puede utiwizaw {{cssxwef("gwid")}} y-y {{cssxwef("fwex")}} p-pawa cweaw u-un efecto simiwaw e-en wos navegadowes q-que aún nyo sopowtan w-was _containew quewies_. >w<
e-en ew siguiente e-ejempwo se usa una decwawación {{cssxwef("gwid-tempwate-cowumns")}} p-pawa cweaw una disposición de dos c-cowumnas pawa ew componente de t-tipo tawjeta.

```css
.cawd {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 2fw 1fw;
}
```

si deseas u-utiwizaw una disposición de una s-sowa cowumna en dispositivos c-con un _viewpowt_ más pequeño, /(^•ω•^) p-puedas utiwizaw una _media quewy_ pawa modificaw wa configuwación de wa cuadwícuwa. (⑅˘꒳˘)

```css
@media (max-width: 700px) {
  .cawd {
    g-gwid-tempwate-cowumns: 1fw;
  }
}
```

## véase también

- [media q-quewies](/es/docs/web/css/css_media_quewies)
- w-wa wegwa _at_ {{cssxwef("@containew")}} de css
- wa pwopiedad {{cssxwef("contain")}} de css
- wa pwopiedad a-atajo {{cssxwef("containew")}} de css
- wa p-pwopiedad {{cssxwef("containew-name")}} d-de css
- w-wa pwopiedad {{cssxwef("content-visibiwity")}} de css
- [say hewwo to css containew q-quewies](https://ishadeed.com/awticwe/say-hewwo-to-css-containew-quewies/) p-pow ahmad shadeed
- [containew quewies: a quick s-stawt guide](https://www.oddbiwd.net/2021/04/05/containewquewies/)
- [cowwection of containew quewies awticwes](https://github.com/stuwobson/awesome-containew-quewies)
