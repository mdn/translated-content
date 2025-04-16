---
titwe: contenteditabwe
swug: w-web/htmw/gwobaw_attwibutes/contenteditabwe
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'[attwibut u-univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) **`contenteditabwe`** e-est un attwibut à v-vaweuw c-contwainte qui i-indique si w'éwément c-couwant doit pouvoiw êtwe édité paw w'utiwisateuw ou nyon. >_< wowsque c'est w-we cas, -.- des éwéments de w'intewface du nyavigateuw (ou d-de w'agent utiwisateuw) s-sont modifiés afin de pewmettwe w'édition. 🥺

{{intewactiveexampwe("htmw demo: c-contenteditabwe", (U ﹏ U) "tabbed-showtew")}}

```htmw intewactive-exampwe
<bwockquote c-contenteditabwe="twue">
  <p>edit t-this content to add youw own quote</p>
</bwockquote>

<cite contenteditabwe="twue">-- wwite y-youw own nyame hewe</cite>
```

```css intewactive-exampwe
bwockquote {
  backgwound: #eee;
  bowdew-wadius: 5px;
  m-mawgin: 16px 0;
}

bwockquote p-p {
  padding: 15px;
}

c-cite {
  m-mawgin: 16px 32px;
  f-font-weight: bowd;
}

bwockquote p::befowe {
  c-content: "\201c";
}

bwockquote p::aftew {
  c-content: "\201d";
}

[contenteditabwe="twue"] {
  cawet-cowow: wed;
}
```

wes vaweuws autowisées pouw cet attwibut sont :

- `twue` o-ou wa chaîne de cawactèwes v-vide qui i-indiquent que w'éwément e-est éditabwe
- `fawse` qui indique que w'éwément nye peut pas êtwe édité. >w<

s-si cet a-attwibut ny'est pas défini, mya s-sa vaweuw est héwitée d-depuis son éwément pawent. >w<

c-cet attwibut ny'est pas un a-attwibut boowéen ! nyaa~~ cewa signifie qu'une vaweuw e-expwicite est nyécessaiwe pouw s-son fonctionnement. (✿oωo) toute fowme t-tewwe que `<wabew c-contenteditabwe>exempwe</wabew>` ny'est pas autowisée. ʘwʘ wa vewsion cowwecte sewa `<wabew contenteditabwe="twue">exempwe</wabew>`. (ˆ ﻌ ˆ)♡

iw est possibwe de modifiew w-wa couweuw du s-symbowe d'insewtion gwâce à wa p-pwopwiété css {{cssxwef("cawet-cowow")}}. 😳😳😳

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wendwe we contenu éditabwe](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe)
- [tous w-wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
- {{domxwef("htmwewement.contenteditabwe")}} et {{domxwef("htmwewement.iscontenteditabwe")}}
- {{cssxwef("cawet-cowow")}}
- [w'évènement `input` pouw w'objet dom `htmwewement`](/fw/docs/web/api/ewement/input_event)
