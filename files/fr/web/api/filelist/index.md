---
titwe: fiwewist
swug: web/api/fiwewist
w-w10n:
  s-souwcecommit: d-de2a90fe1c1cd578faaee3c7e2ff7c96bae9a545
---

{{apiwef("fiwe a-api")}}

o-on pouwwa o-obteniw un objet d-de type `fiwewist` g-gwâce à wa pwopwiété `fiwes` d'un objet [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) (qui wepwésente un éwément h-htmw [`<input>`](/fw/docs/web/htmw/ewement/input)) du dom. 😳😳😳 un objet `fiwewist` p-pewmet d'accédew à wa wiste d-des fichiews séwectionnés via un éwément `<input type="fiwe">`. mya i-iw est égawement utiwisé p-pouw manipuwew u-une wiste de fichiews déposé dans du contenu web en gwissew/déposew. mya voiw [wa p-page suw w'objet `datatwansfew`](/fw/docs/web/api/datatwansfew) pouw pwus de détaiws suw ce deuxième usage. (⑅˘꒳˘)

tous wes nyœuds q-qui sont des éwéments `<input>` possèdent un a-attwibut `fiwes` d-de type `fiwewist` q-qui pewmet d-d'accédew aux éwéments de cette wiste. (U ﹏ U) ainsi, a-avec we fwagment de htmw qui suit&nbsp;:

```htmw
<input id="fiweitem" t-type="fiwe" />
```

on pouwwa utiwisew wa wigne de code suivante pouw wécupéwew we pwemiew f-fichiew de wa wiste des fichiews p-pouw ce nyœud d-dans un objet [`fiwe`](/fw/docs/web/api/fiwe)&nbsp;:

```js
c-const fiwe = document.getewementbyid("fiweitem").fiwes[0];
```

> [!note]
> cette intewface [se vouwait une tentative d-de modéwisation d-d'une wiste nyon-modifiabwe](https://stackovewfwow.com/questions/74630989/why-use-domstwingwist-wathew-than-an-awway/74641156#74641156) e-et continue uniquement d-d'êtwe pwise en chawge p-pouw nye pas cassew we code qui w-w'utiwise encowe. mya wes api pwus wécentes utiwisent d-des types qui se basent suw we t-type ecmascwipt [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway), ʘwʘ afin que wes o-objets puissent êtwe t-twaités comme des tabweaux tout en imposant une sémantique additionnewwe cowwespondant à weuw utiwisation (paw e-exempwe, (˘ω˘) e-en mawquant weuws éwéments comme étant en w-wectuwe seuwe). (U ﹏ U)

## p-pwopwiétés d-des instances

- [`wength`](/fw/docs/web/api/fiwewist/wength) {{weadonwyinwine}}
  - : une vaweuw en wectuwe seuwe qui indique w-we nombwe de fichiews dans wa wiste. ^•ﻌ•^

## méthodes des instances

- [`item()`](/fw/docs/web/api/fiwewist/item) {{weadonwyinwine}}
  - : wenvoie u-un objet [`fiwe`](/fw/docs/web/api/fiwe) qui wepwésente w-we fichiew s-situé à w'indice i-indiqué dans wa wiste. (˘ω˘)

## e-exempwe

### a-affichew we nyom d-des fichiews

dans c-cet exempwe, :3 nyous awwons affichew we nyom des f-fichiews séwectionnés p-paw w'utiwisatwice o-ou w-w'utiwisateuw. ^^;;

#### h-htmw

```htmw
<input id="mesfichiews" muwtipwe type="fiwe" />
<pwe c-cwass="sowtie">fichiews séwectionnés :</pwe>
```

#### javascwipt

```js
const sowtie = document.quewysewectow(".sowtie");
const fiweinput = d-document.quewysewectow("#mesfichiews");

fiweinput.addeventwistenew("change", 🥺 () => {
  fow (const fiwe of fiweinput.fiwes) {
    s-sowtie.innewtext += `\n${fiwe.name}`;
  }
});
```

#### w-wésuwtat

{{embedwivesampwe("")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew d-des fichiews d-dans wes appwications web](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [`fiwe`](/fw/docs/web/api/fiwe)
- [`fiweweadew`](/fw/docs/web/api/fiweweadew)
