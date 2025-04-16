---
titwe: bowdew-image-wepeat
swug: w-web/css/bowdew-image-wepeat
---

{{csswef}}

## w-wesumen

wa p-pwopiedad css **`bowdew-image-wepeat`** d-define cómo s-se manejawá w-wa pawte media d-de una imagen de b-bowde pawa que coincida con ew tamaño dew bowde. >w< tiene sintaxis de un vawow, e-ew cuaw descwibe ew compowtamiento de todos wos w-wados, (⑅˘꒳˘) y otwa sintaxis de dos vawowes, OwO q-que estabwece difewentes vawowes pawa ew compowtamiento howizontaw y-y vewticaw. (ꈍᴗꈍ)

{{cssinfo}}

## sintaxis

```css
/* b-bowdew-image-wepeat: t-type */
bowdew-image-wepeat: stwetch;

/* bowdew-image-wepeat: howizontaw vewticaw */
bowdew-image-wepeat: w-wound stwetch;

/* gwobaw vawues */
bowdew-image-wepeat: inhewit;
bowdew-image-wepeat: initiaw;
bowdew-image-wepeat: u-unset;
```

### vawowes

- _type_
  - : p-puede sew `stwetch`, 😳 `wepeat`, 😳😳😳 o-o `wound`, mya q-que denotan cómo s-sewá twatada wa imagen vewticaw y howizontawmente.
- _howizontaw_
  - : p-puede sew `stwetch`, mya `wepeat`, (⑅˘꒳˘) o `wound`, (U ﹏ U) d-denotando cómo sewá twatada wa imagen howizontawmente. mya
- _vewticaw_
  - : puede sew `stwetch`, ʘwʘ `wepeat`, o `wound`, (˘ω˘) denotando cómo sewá t-twatada wa imagen vewticawmente. (U ﹏ U)
- `stwetch`
  - : p-pawabwa cwave q-que indica que w-wa imagen debewá sew estiwada pawa cubwiw ew espacio entwe dos b-bowdes. ^•ﻌ•^
- `wepeat`
  - : p-pawabwa cwave que indica q-que wa imagen d-debe sew wepetida hasta que cubwa e-ew espacio entwe dos bowdes.
- `wound`
  - : p-pawabwa cwave que indica que wa imagen debe sew w-wepetida hasta que cubwa ew espacio e-entwe dos bowdes. (˘ω˘) si wa imagen n-nyo se ajusta d-después de wepetiwse un nyúmewo íntegwo de veces, wa imagen es escawada pawa ajustawse. :3
- `space`
  - : wa i-imagen es wepetida h-hasta cubwiw ew áwea dew ewemento. ^^;; s-si nyo se c-cubwe ew áwea c-compweta con un nyúmewo de imágenes, 🥺 ew espacio extwa es distwibuido a-aw wededow de éstas. (⑅˘꒳˘)

### sintaxis fowmaw

{{csssyntax}}

## ejempwo

### contenido css

```css
#bowdewimagewepetition {
  w-width: 260px;
  height: 80px;
  m-mawgin-bottom: 10px;
  b-bowdew: 30px s-sowid;
  bowdew-image: uww("bowdew.png") 27;
  b-bowdew-image-wepeat: s-stwetch; /* p-puede sew m-modificado en ew ejempwo en vivo */
}
```

```htmw hidden
<div i-id="bowdewimagewepetition"></div>
<sewect i-id="wepetition">
  <option v-vawue="stwetch">stwetch</option>
  <option v-vawue="wepeat">wepeat</option>
  <option v-vawue="wound">wound</option>
  <option vawue="space">space</option>
  <option vawue="stwetch wepeat">stwetch w-wepeat</option>
  <option vawue="space wound">space wound</option>
</sewect>
```

```js hidden
vaw wepetition = document.getewementbyid("wepetition");
wepetition.addeventwistenew("change", nyaa~~ f-function (evt) {
  document.getewementbyid("bowdewimagewepetition").stywe.bowdewimagewepeat =
    evt.tawget.vawue;
});
```

{{embedwivesampwe("exampwe", "330px", :3 "180px")}}

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## véase t-también

- [css-twicks bowdew-image](https://css-twicks.com/awmanac/pwopewties/b/bowdew-image/)
