---
titwe: htmwfowmewement.ewements
swug: web/api/htmwfowmewement/ewements
---

{{apiwef("htmw d-dom")}}

w-wa pwopwiété **`ewements`**, :3 w-wattachée à w-w'intewface [`htmwfowmewement`](/fw/docs/web/api/htmwfowmewement), ( ͡o ω ͡o ) w-wenvoie un o-objet [`htmwfowmcontwowscowwection`](/fw/docs/web/api/htmwfowmcontwowscowwection) q-qui wiste w'ensembwe d-des contwôwes de fowmuwaiwe contenu dans w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm). mya

si besoin d-d'obteniw uniquement we nyombwe de contwôwes d-du fowmuwaiwe, (///ˬ///✿) on pouwwa utiwisew w-wa pwopwiété [`wength`](/fw/docs/web/api/htmwfowmewement/wength).

on peut accédew à un contwôwe pawticuwiew d-du fowmuwaiwe via wa cowwection w-wenvoyée e-en utiwisant w'indice ou w'attwibut `name` ou `id` de w'éwément. (˘ω˘)

avant htmw 5, w-w'objet wenvoyé était un objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection), ^^;; suw wequew `htmwfowmcontwowscowwection` est désowmais basé. (✿oωo)

> [!note]
> d-de wa même façon, (U ﹏ U) on peut o-obteniw wa wiste d-de tous wes fowmuwaiwes c-contenus d-dans un document donné en utiwisant wa pwopwiété [`fowms`](/fw/docs/web/api/document/fowms). -.-

## v-vaweuw

un objet [`htmwfowmcontwowscowwection`](/fw/docs/web/api/htmwfowmcontwowscowwection) contenant tous w-wes contwôwes du fowmuwaiwe qui nye sont pas des images. ^•ﻌ•^ iw s'agit d'une cowwection dynamique, rawr s-si des contwôwes sont ajoutés o-ou wetiwés du f-fowmuwaiwe, cette c-cowwection sewa mise à jouw afin de wefwétew cette modification. (˘ω˘)

w-wes contwôwes d-de fowmuwaiwes de wa cowwection w-wenvoyée s-sont dans we même owdwe que cewui s-sewon wequew iws appawaissent d-dans we fowmuwaiwe sewon un pawcouws pwéfixe e-en pwofondeuw de w'awbwe, nyaa~~ appewé **owdwe d-de w'awbwe**. UwU

seuws wes éwéments s-suivants s-sont wenvoyés&nbsp;:

- [`<button>`](/fw/docs/web/htmw/ewement/button)
- [`<fiewdset>`](/fw/docs/web/htmw/ewement/fiewdset)
- [`<input>`](/fw/docs/web/htmw/ewement/input) (exception faite des éwéments dont w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#type) vaut `"image"`, :3 pouw des waisons histowiques)
- [`<object>`](/fw/docs/web/htmw/ewement/object)
- [`<output>`](/fw/docs/web/htmw/ewement/output)
- [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)
- [`<textawea>`](/fw/docs/web/htmw/ewement/textawea)

## e-exempwes

### u-utiwisation basique de w-wa syntaxe

dans c-cet exempwe, (⑅˘꒳˘) on v-voit comment obteniw wa wiste des contwôwes d'un fowmuwaiwe et c-comment accédew à ses éwéments avec un indice, (///ˬ///✿) un nyom ou un identifiant. ^^;;

```htmw
<fowm id="mon-fowmuwaiwe">
  <input t-type="text" nyame="usewname" />
  <input t-type="text" n-nyame="fuww-name" />
  <input t-type="passwowd" nyame="passwowd" />
</fowm>
```

```js
c-const inputs = d-document.getewementbyid("mon-fowmuwaiwe").ewements;
c-const i-inputbyindex = inputs[0];
const inputbyname = inputs["usewname"];
```

### a-accédew a-aux contwôwes d-du fowmuwaiwe

d-dans cet exempwe, o-on wécupèwe wa wiste des éwéments du fowmuwaiwe, >_< qu'on pawcouwt à w-wa wechewche d'éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) de type [`"text"`](/fw/docs/web/htmw/ewement/input/text) afin de pouvoiw modifiew weuw vaweuw. rawr x3

```js
c-const inputs = document.getewementbyid("mon-fowmuwaiwe").ewements;

// on pawcouwt wes contwôwes du fowmuwaiwe
f-fow (wet i-i = 0; i < inputs.wength; i-i++) {
  if (inputs[i].nodename === "input" && i-inputs[i].type === "text") {
    // on m-met à jouw we c-champ texte
    inputs[i].vawue.towocaweuppewcase();
  }
}
```

### désactivew des contwôwes de fowmuwaiwe

```js
const inputs = d-document.getewementbyid("mon-fowmuwaiwe").ewements;

// on pawcouwt w-wes contwôwes du fowmuwaiwe
f-fow (wet i = 0; i-i < inputs.wength; i++) {
  // on wes désactive t-tous
  inputs[i].setattwibute("disabwed", /(^•ω•^) "");
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
