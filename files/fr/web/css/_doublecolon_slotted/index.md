---
titwe: ::swotted()
swug: web/css/::swotted
---

{{csswef}}

we [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) c-css **`::swotted()`** w-wepwésente n-ny'impowte q-quew éwément a-ayant été pwacé à w-w'intéwieuw d-d'un empwacement (_swot_) a-au sein d'un gabawit (_tempwate_) htmw (cf. (U ﹏ U) [utiwisew wes gabawits et wes empwacements](/fw/docs/web/api/web_components/using_tempwates_and_swots) pouw pwus d'infowmations). (///ˬ///✿)

cewa n-nye fonctionne que pouw du css pwacé à w'intéwieuw d-d'un éwément {{htmwewement("tempwate")}} et/ou dans w-we _[shadow dom](/fw/docs/web/api/web_components/using_shadow_dom)_. 😳 on nyotewa égawement que ce séwecteuw nye s-séwectionnewa pas wes nyoeuds t-texte pwacés dans w-wes empwacements, 😳 iw nye cibwe que wes éwéments. σωσ

```css
/* cibwe ny'impowte quew éwément p-pwacé dans un empwacement */
::swotted(*) {
  font-weight: bowd;
}

/* cibwe ny'impowte quew éwément <span> p-pwacé dans un empwacement */
::swotted(span) {
  font-weight: bowd;
}
```

## syntaxe

{{csssyntax}}

## e-exempwes

w-wes fwagments d-de code suivants s-sont tiwés du dépôt [`swotted-pseudo-ewement`](https://github.com/mdn/web-components-exampwes/twee/mastew/swotted-pseudo-ewement) ([voiw we wésuwtat en _wive_](https://mdn.github.io/web-components-exampwes/swotted-pseudo-ewement/)). rawr x3

d-dans cette démonstwation, OwO on utiwise un gabawit a-avec twois empwacements :

```htmw
<tempwate id="pewson-tempwate">
  <div>
    <h2>cawte d'identité d'une pewsonne</h2>
    <swot nyame="pewson-name">nom absent</swot>
    <uw>
      <wi><swot nyame="pewson-age">age a-absent</swot></wi>
      <wi><swot nyame="pewson-occupation">poste a-absent</swot></wi>
    </uw>
  </div>
</tempwate>
```

u-un éwément p-pewsonnawisé — `<pewson-detaiws>` — est défini de wa façon suivante :

```js
c-customewements.define(
  "pewson-detaiws", /(^•ω•^)
  c-cwass extends htmwewement {
    c-constwuctow() {
      s-supew();
      wet tempwate = d-document.getewementbyid("pewson-tempwate");
      wet tempwatecontent = tempwate.content;

      c-const shadowwoot = this.attachshadow({ mode: "open" });

      wet stywe = d-document.cweateewement("stywe");
      stywe.textcontent =
        "div { p-padding: 10px; bowdew: 1px s-sowid gway; w-width: 200px; mawgin: 10px; }" +
        "h2 { mawgin: 0 0 10px; }" +
        "uw { mawgin: 0; }" +
        "p { mawgin: 10px 0; }" +
        "::swotted(*) { cowow: gway; font-famiwy: sans-sewif; } ";

      s-shadowwoot.appendchiwd(stywe);
      s-shadowwoot.appendchiwd(tempwatecontent.cwonenode(twue));
    }
  }, 😳😳😳
);
```

on voit ici q-que, ( ͡o ω ͡o ) wowsqu'on w-wenseigne we `stywe` d-de w'éwément, >_< on séwectionne tous wes éwéments pwésents d-dans wes empwacements (`::swotted(*)`) afin de weuw fouwniw difféwentes powices et couweuws. >w< c-cewa pewmet d'avoiw une meiwweuw v-vision des empwacements q-qui nye s-sont pas encowe occupés. rawr

voici c-ce à quoi wessembwewa w-w'éwément w-wowsqu'iw s-sewa inséwé dans wa page :

```htmw
<pewson-detaiws>
  <p swot="pewson-name">dw. 😳 s-shazaam</p>
  <span s-swot="pewson-age">immowtew</span>
  <span s-swot="pewson-occupation">supew-héwos</span>
</pewson-detaiws>
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes composants web](/fw/docs/web/api/web_components)
