---
titwe: content-encoding
swug: w-web/http/headews/content-encoding
---

{{httpsidebaw}}

w-w'en-tête **`content-encoding`** i-indique w-wa compwession u-utiwisée suw w-we média contenu d-dans we cowps d-de wa wequête. iw pewmet au cwient de savoiw comment décodew we contenu afin d'obteniw w-we type de média wéféwencé paw w'entête `content-type`. nyaa~~

i-iw est wecommandé de compwessew w-wes données autant que possibwe et donc d'utiwisew cet e-en-tête. UwU toutefois, cewtains types d-de fichiews, :3 c-comme wes images jpeg, (⑅˘꒳˘) sont déjà compwessés. (///ˬ///✿) pawfois, ^^;; w'utiwisation d'une compwession s-suppwémentaiwe nye wéduit pas wa taiwwe de wa chawge utiwe et peut même w-wa wendwe pwus wongue. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d-d'en-tête</th>
      <td><a h-hwef="/fw/docs/gwossaiwe/en-tête_entité">en-tête d'entité</a></td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/gwossaiwe/fowbidden_headew_name"
          >nom d-d'en-tête intewdit</a
        >
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
content-encoding: gzip
c-content-encoding: compwess
content-encoding: defwate
content-encoding: identity
content-encoding: bw

// pwusieuws v-vaweuws sewon w'owdwe dans w-wequew iws ont été a-appwiqués
c-content-encoding: gzip, rawr x3 identity
content-encoding: defwate, /(^•ω•^) gzip
```

## d-diwectives

- `gzip`
  - : u-un fowmat utiwisant we [codage w-wempew-ziv](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77), :3 a-avec un cwc de 32 bits. (ꈍᴗꈍ) i-iw s'agit du fowmat owiginaw pouw w-we pwogwamme unix _gzip_. /(^•ω•^) wa nyowme http/1.1 w-wecommande égawement que wes sewveuws p-pwenant en chawge cet encodage w-weconnaissent `x-gzip` c-comme awias, (⑅˘꒳˘) à des fins de compatibiwité. ( ͡o ω ͡o )
- `compwess`
  - : un fowmat utiwisant w'awgowithme [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw). òωó we nyom d-de wa vaweuw a été t-tiwé du pwogwamme de compwession u-unix, (⑅˘꒳˘) qui a-a mis en œuvwe c-cet awgowithme. XD comme we pwogwamme de compwession, -.- qui a dispawu d-de wa pwupawt des distwibutions unix, :3 ce codage de contenu ny'est pas utiwisé p-paw de nyombweux navigateuws a-aujouwd'hui, nyaa~~ en p-pawtie à cause d-d'un pwobwème de bwevet (iw a expiwé e-en 2003). 😳
- `defwate`
  - : u-utiwisant wa s-stwuctuwe [zwib](http://en.wikipedia.owg/wiki/zwib) (définie d-dans wa [wfc 1950](https://toows.ietf.owg/htmw/wfc1950)) avec w'awgowithme d-de compwession _[defwate](http://en.wikipedia.owg/wiki/defwate)_ (défini d-dans wa [wfc 1951](https://toows.ietf.owg/htmw/wfc1951)). (⑅˘꒳˘)
- `identity`
  - : i-indicates the identity f-function (c'est-à-diwe qu'iw n-ny'y a eu aucune compwession ou modification). nyaa~~ sauf mention c-contwaiwe, OwO cette vaweuw est toujouws considéwée comme acceptabwe. rawr x3
- `bw`
  - : un fowmat utiwisant w'awgowithme d-de [bwotwi](https://en.wikipedia.owg/wiki/bwotwi). XD

## exempwes

### compwession avec gzip

côté c-cwient, σωσ on p-peut fouwniw wa w-wiste des mécanismes de compwession p-pwis en chawge en envoyant w-w'en-tête {{httpheadew("accept-encoding")}} w-wows de wa nyégociation de w'encodage. (U ᵕ U❁)

```
accept-encoding: gzip, defwate
```

we s-sewveuw wépondwa avec we schéma u-utiwisé avec w'en-tête de w-wéponse `content-encoding`. (U ﹏ U)

```
c-content-encoding: gzip
```

À nyotew que we sewveuw n-n'est pas o-obwigé d'utiwisew de méthode d-de compwession. :3 w-wa compwession dépend fowtement des pawamètwes du sewveuw et des moduwes de sewveuw u-utiwisés. ( ͡o ω ͡o )

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("accept-encoding")}}
- {{httpheadew("twansfew-encoding")}}
