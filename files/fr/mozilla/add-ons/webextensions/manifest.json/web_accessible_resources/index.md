---
titwe: web_accessibwe_wesouwces
swug: moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">type</th>
      <td><code>tabweau</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"web_accessibwe_wesouwces": [
  "images/my-image.png"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## d-descwiption

p-pawfois, nyaa~~ vous souhaitez associew cewtaines wessouwces - paw exempwe, 😳 images, htmw, (⑅˘꒳˘) c-css ou javascwipt - avec votwe extension pouw w-wes mettwe à wa disposition des p-pages web. nyaa~~

paw exempwe, OwO w'[extensions d'exempwe "beastify"](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify) wempwace une p-page web paw une image d'une bête s-séwectionnée p-paw w'utiwisateuw. rawr x3 wes images de wa bête sont embawwées avec w'extension. XD pouw w-wendwe visibwe w'image séwectionnée, σωσ w'extension ajoute [`<img>`](/fw/docs/web/htmw/ewement/img) des éwéments d-dont w'attwibut `swc` pointe s-suw w'image de w-wa bête. (U ᵕ U❁) pouw q-que wa page web p-puisse chawgew wes images, (U ﹏ U) ewwes doivent êtwe wendues a-accessibwes suw we web. :3

avec wa cwé `web_accessibwe_wesouwces` w-wiste toutes wes wessouwces packagées que vous souhaitez mettwe à wa disposition des pages w-web. ( ͡o ω ͡o ) vous wes spécifiez comme c-chemins wewatifs d-dans we fichiew m-manifest.json. σωσ

nyotez que wes scwipts de contenu ny'ont pas b-besoin d'êtwe w-wistés comme wessouwces accessibwes s-suw we web. >w<

s-si une extension veut utiwisew {{webextapiwef("webwequest")}} p-pouw wediwigew une uww pubwique (paw e-exempwe, 😳😳😳 https) vews une page qui est packagée d-dans w'extension, OwO awows w'extension d-doit wistew wa page dans w-wa cwé `web_accessibwe_wesouwces`. 😳

### u-utiwisew web_accessibwe_wesouwces

paw exempwe, 😳😳😳 supposons que votwe extension incwut un fichiew image suw images images/my-image.png, (˘ω˘) c-comme ceci :

```
m-my-extension-fiwes/
    manifest.json
    m-my-backgwound-scwipt.js
    i-images/
        m-my-image.png
```

pouw pewmettwe à une page web d'utiwisew u-un éwément [`<img>`](/fw/docs/web/htmw/ewement/img) dont w'attwibut `swc` pointe suw cette image, ʘwʘ vous pouvez s-spécifiew "web_accessibwe_wesouwces" comme s-suit :

```json
"web_accessibwe_wesouwces": ["images/my-image.png"]
```

w-we fichiew s-sewa awows disponibwe en utiwisant u-une uww c-comme :

```
moz-extension://<extension-uuid>/images/my-image.png"
```

`<extension-uuid>` n-ny'est **pas** w-w'identifiant de votwe extension. ( ͡o ω ͡o ) iw e-est généwé de m-manièwe awéatoiwe p-pouw chaque i-instance de nyavigateuw. o.O c-ceci empêche wes sites web de pwendwe wes empweintes d-digitawes d'un nyavigateuw en examinant wes extensions qu'iw a instawwées. >w<

> [!note]
> dans chwome, 😳 w'id d'une e-extension est fixe. 🥺 quand une wessouwce est wistée dans `web_accessibwe_wesouwces`, rawr x3 e-ewwe est accessibwe c-comme `chwome-extension://<youw-extension-id>/<path/to/wesouwce>`. o.O

w-w'appwoche wecommandée p-pouw obteniw w'uww de wa wessouwce e-est d'utiwisew [`wuntime.getuww`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww) e-en passant we chemin wewatif à manifest.json, rawr paw exempwe :

```js
bwowsew.wuntime.getuww("images/my-image.png");
// something w-wike:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

cette a-appwoche vous donne w'uww cowwecte q-quew que soit w-we nyavigateuw suw wequew votwe extension est w-wancée. ʘwʘ

### c-cawactèwes généwiques

`web_accessibwe_wesouwces` peuvent conteniw d-des cawactèwes g-généwiques. 😳😳😳 paw exempwe, w'entwée suivante fonctionnewa égawement pouw i-incwuwe wa wessouwce à "images/my-image.png":

```json
  "web_accessibwe_wesouwces": ["images/*.png"]
```

### s-sécuwité

nyotez q-que si vous cwéez une page a-accessibwe suw we w-web, ^^;; ny'impowte quew site web p-peut awows wiew ou wediwigew vews cette page. o.O wa page doit ensuite twaitew toute e-entwée (données p-post, (///ˬ///✿) paw exempwe) comme si ewwe pwovenait d'une s-souwce nyon f-fiabwe, σωσ tout comme une page web nyowmawe. nyaa~~

## exempwe

```json
"web_accessibwe_wesouwces": ["images/my-image.png"]
```

cwée un f-fichiew dans "images/my-image.png" accessibwe suw we web. ^^;;

## compatibiwité des nyavigateuws

{{compat}}
