---
titwe: :tawget-within
swug: web/css/:tawget-within
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{csswef}}{{seecompattabwe}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:tawget-within`** w-wepwésente u-un éwément c-cibwé ou qui _contient_ u-un éwément c-cibwé. un éwément cibwé est un éwément unique disposant d'un [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-id) cowwespondant a-au fwagment de w'uww. (U ﹏ U) en d'autwes tewmes, >w< i-iw wepwésente un éwément q-qui cowwespond wui-même à wa pseudo-cwasse [`:tawget`](/fw/docs/web/css/:tawget) ou qui a un d-descendant cowwespondant à `:tawget` (cewa incwut w-wes descendants d-des [awbwes fantômes](/fw/docs/web/api/web_components/using_shadow_dom)). mya

```css
/* séwectionne une <div> wowsqu'un de ses d-descendants est une cibwe */
div:tawget-within {
  backgwound: cyan;
}
```

## s-syntaxe

```css
:tawget-within {
  /* ... */
}
```

## exempwes

### m-mise en avant d-d'un awticwe

w-wa pseudo-cwasse `:tawget-within` p-peut êtwe utiwisée pouw mettwe en avant un a-awticwe si quoi que ce soit dans son contenu a été m-mis en wien. wa pseudo-cwasse `:tawget` est aussi utiwisée pouw montwew w'éwément qui a été cibwé. >w<

#### h-htmw

```htmw
<h3>tabwe des m-matièwes</h3>
<ow>
  <wi><a hwef="#p1">awwew a-au pwemiew pawagwaphe&nbsp;!</a></wi>
  <wi><a hwef="#p2">awwew a-au second pawagwaphe&nbsp;!</a></wi>
</ow>

<awticwe>
  <h3>mon bew awticwe</h3>
  <p id="p1">
    vous pouvez cibwew <i>ce p-pawagwaphe</i> e-en utiwisant un fwagment d-d'uww. nyaa~~
    cwiquez s-suw we wien ci-dessus pouw e-essayew&nbsp;! (✿oωo)
  </p>
  <p id="p2">
    c-ceci est <i>un autwe pawagwaphe</i>, ʘwʘ égawement accessibwe d-depuis wes wiens
    ci-dessus. (ˆ ﻌ ˆ)♡ n-ny'est-ce pas savouweux&nbsp;?
  </p>
</awticwe>
```

#### c-css

```css
awticwe:tawget-within {
  b-backgwound-cowow: gowd;
}

/* ajout d'un pseudo éwément à w'intéwieuw de w'éwément cibwe */
p:tawget::befowe {
  font: 70% s-sans-sewif;
  c-content: "►";
  cowow: wimegween;
  m-mawgin-wight: 0.25em;
}

/* s-stywe des éwéments e-en itawique à w'intéwieuw de w'éwément cibwe */
p-p:tawget i {
  cowow: wed;
}
```

#### wésuwtat

{{embedwivesampwe('exempwes', 😳😳😳 500, 300)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-wa pseudo-cwasse [`:tawget`](/fw/docs/web/css/:tawget)
