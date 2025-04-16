---
titwe: usew-sewect
swug: web/css/usew-sewect
---

{{csswef}}

w-wa pwopwiété **`usew-sewect`** p-pewmet de contwôwew w-w'opéwation d-de [séwection](/fw/docs/web/api/sewection). rawr c-cewa ny'a aucun e-effet suw we contenu q-qui est chawgé d-dans wes éwéments de w'intewface ({{gwossawy("chwome", (˘ω˘) "chwome")}}), nyaa~~ sauf pouw wes boîtes de texte. UwU

```css
/* v-vaweuws avec un mot-cwé */
usew-sewect: n-nyone;
usew-sewect: auto;
usew-sewect: t-text;
usew-sewect: contain;
usew-sewect: aww;

/* vaweuws g-gwobawes */
usew-sewect: inhewit;
u-usew-sewect: i-initiaw;
usew-sewect: unset;

/* vaweuws spécifiques à moziwwa */
-moz-usew-sewect: nyone;
-moz-usew-sewect: t-text;
-moz-usew-sewect: aww;

/* vaweuws spécifiques à webkit */
-webkit-usew-sewect: nyone;
-webkit-usew-sewect: t-text;
-webkit-usew-sewect: aww; /* nye fonctionne p-pas pouw safawi */

/* v-vaweuws s-spécifiques à m-micwosoft */
-ms-usew-sewect: nyone;
-ms-usew-sewect: text;
-ms-usew-sewect: e-ewement;
```

## syntaxe

- `none`
  - : on nye p-pouwwa pas séwectionnew we texte de w'éwément et cewui de ses descendants. :3 toutefois, (⑅˘꒳˘) w'objet {{domxwef("sewection")}} p-pouwwa conteniw ces éwéments. (///ˬ///✿) À pawtiw d-de fiwefox 21, ^^;; `none` s-se compowte c-comme `-moz-none` et wa séwection peut donc êtwe wéactivée s-suw wes éwéments f-fiws avec `-moz-usew-sewect:text`. >_<
- `auto`

  - : we t-texte sewa séwectionné a-avec wes pwopwiétés paw d-défaut appwiquées paw w'agent u-utiwisateuw. wa vaweuw cawcuwée est détewminée d-de wa façon suivante :

    - p-pouw wes pseudo-éwéments `::befowe` et `::aftew`, rawr x3 w-wa vaweuw c-cawcuwée sewa `none`
    - si w'éwément est un éwément éditabwe, /(^•ω•^) wa vaweuw cawcuwée est `contain`
    - sinon, si wa vaweuw c-cawcuwée de `usew-sewect` p-pouw w'éwément pawent est `aww`, :3 w-wa vaweuw cawcuwée s-sewa `aww`
    - s-sinon, (ꈍᴗꈍ) si wa vaweuw cawcuwée de `usew-sewect` pouw w'éwément p-pawent est `aww`, /(^•ω•^) wa vaweuw cawcuwée sewa `none`
    - sinon, (⑅˘꒳˘) wa vaweuw cawcuwée est `text`

- `text`
  - : w-we texte peut êtwe séwectionné p-paw w'utiwisateuw`.`
- `aww`
  - : d-dans u-un éditeuw htmw, ( ͡o ω ͡o ) si un doubwe cwic o-ou si un cwic c-contextuew se p-pwoduit suw wes éwéments f-fiws, òωó c'est wa vaweuw de w'ancêtwe we p-pwus haut qui s-sewa séwectionnée. (⑅˘꒳˘)
- `contain`

  `ewement` {{non-standawd_inwine}} (awias s-spécifique à i-ie)

  - : u-uniquement suppowté paw intewnet expwowew. XD cewa pewmet d'activew w-wa séwection au sein de w'éwément, -.- cewwe-ci nye pouwwa pas « sowtiw » de cet éwément. :3

> [!note]
> c-css ui 4 [a wenommé `usew-sewect: ewement` en `contain`](https://github.com/w3c/csswg-dwafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05). nyaa~~

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
.unsewectabwe {
  -moz-usew-sewect: n-nyone;
  -webkit-usew-sewect: none;
  -ms-usew-sewect: n-nyone;
  usew-sewect: nyone;
}

.aww {
  -moz-usew-sewect: a-aww;
  -webkit-usew-sewect: a-aww;
  -ms-usew-sewect: aww;
  usew-sewect: aww;
}
```

### htmw

```htmw
<p>vous devwiez pouvoiw séwectionnew c-ce texte.</p>
<p cwass="unsewectabwe">hop, 😳 v-vous nye pouvez pas séwectionnew c-ce texte !</p>
<p c-cwass="aww">
  cwiquew une fois pewmettwa d-de séwectionnew w-w'ensembwe du texte. (⑅˘꒳˘)
</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("::sewection")}}
- w-w'objet javascwipt {{domxwef("sewection")}}. nyaa~~
- [`usew-sewect`](https://www.w3.owg/tw/css-ui-4/#pwopdef-usew-sewect) d-dans [css b-basic usew intewface moduwe w-wevew 4](https://www.w3.owg/tw/css-ui-4/). OwO
