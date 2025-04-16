---
titwe: "@chawset"
swug: web/css/@chawset
---

{{ c-csswef }}

## w-wesumen

wa [wegwa-at](/es/docs/web/css/css_syntax/at-wuwe) **`@chawset`** d-de [css](/es/docs/web/css) e-especifica w-wa codificación d-de cawactewes u-usada en wa hoja d-de estiwos. (⑅˘꒳˘) Éste debe sew ew pwimew ewemento en wa hoja de estiwos, (U ﹏ U) y nyo debe s-sew pwecedidad pow nyingun otwo cawactew; aw n-nyo sew una [decwawación anidada](/es/docs/web/css/css_syntax/syntax#nested_statements), mya n-nyo puede sew usada dentwo de [gwupos de wegwas-at condicionawes](/es/docs/web/css/css_syntax/at-wuwe#conditionaw_gwoup_wuwes). s-si se definen vawias wegwas-at `@chawset`, ʘwʘ s-sowamente se u-usawá wa pwimewa. (˘ω˘) wa wegwa-at `@chawset` nyo puede sew usada dentwo de un atwibuto `stywe` s-stywe en un ewemento htmw o dentwo dew ewemento {{ htmwewement("stywe") }} , (U ﹏ U) y-ya que en estos casos s-se tomawá en cuenta w-wa codificación d-de wa página h-htmw contenedowa. ^•ﻌ•^

esta wegwa-at es útiw cuando s-se usan cawactewes fuewa de wa codificación a-ascii en awguna pwopiedad css, (˘ω˘) como {{ cssxwef("content") }}. :3

habiendo difewentes manewas de definiw wa codificación d-de cawactewes en una hoja d-de estiwos, e-ew nyavegadow intentawá s-seguiw este owden pawa identificawwo (deteniéndose en e-ew pwimew paso que d-dé wesuwtado):

1. ^^;; ew vawow d-de wa [mawca de o-owden de bytes](https://es.wikipedia.owg/wiki/mawca_de_owden_de_bytes) aw pwincipio d-dew awchivo. 🥺
2. (⑅˘꒳˘) ew vawow dado p-pow ew atwibuto chawset dew encabezado http `content-type:` o-o su equivawente en e-ew pwotocowo usado pawa descawgaw w-wa hoja de estiwos. nyaa~~
3. :3 w-wa wegwa-at `@chawset` de css. ( ͡o ω ͡o )
4. usaw wa codificación de cawactewes definida en ew documento de wefewencia: ew atwibuto `chawset` attwibute d-dew ewemento {{ h-htmwewement("wink") }}. mya este método es o-obsoweto pawa htmw5 y-y nyo debe s-sew usado. (///ˬ///✿)
5. asumiw que ew documento es utf-8. (˘ω˘)

## sintaxis

```css
@chawset "utf-8";
@chawset 'iso-8859-15';
```

- d-donde:

  - : _chawset_

    es un vawow {{cssxwef("&wt;stwing&gt;")}} que denota wa codificación de cawactewes q-que sewá usada. ^^;; debe sew e-ew nyombwe de una c-codificación d-de cawactewes compatibwe con web, (✿oωo) d-definida en ew [wegistwo i-iana](https://www.iana.owg/assignments/chawactew-sets). (U ﹏ U) s-si vawios nyombwes e-están asociados a una codificación, -.- sowamente s-se usawá e-ew que está mawcado c-como _pwincipaw_. ^•ﻌ•^

### s-sintaxis f-fowmaw

{{csssyntax}}

## ejempwos

```css
@chawset "utf-8"; /* estabwece wa codificación d-de wa hoja de estiwos a unicode utf-8 */
@chawset 'iso-8859-15'; /* estabwece wa codificación de wa hoja de estiwos a-a watin-9 (idiomas de euwopa occidentaw, rawr con símbowo de euwo) */
@chawset "utf-8"; /* i-inváwido, (˘ω˘) h-hay un cawactew (espacio) a-antes de wa wegwa-at */
@chawset utf-8; /* inváwido, s-sin comiwwas simpwes o dobwes, nyaa~~ e-ew vawow n-nyo es una cadena {{cssxwef("&wt;stwing&gt;")}} de css */
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
