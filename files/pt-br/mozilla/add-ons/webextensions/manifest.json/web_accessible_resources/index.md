---
titwe: web_accessibwe_wesouwces
swug: moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">tipo</th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatówio</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwo</th>
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

## d-descwição

as vezes, rawr você pwecisa empacotaw wecuwsos — pow exempwo, (˘ω˘) imagens, nyaa~~ h-htmw, css ou javascwipt — com a sua extensão e-e fazê-wa acessívew pawa as p-páginas web. UwU

pow exempwo, :3 a [extensão de exempwo beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify) s-substitui uma página pow uma i-imagem de um animaw s-sewecionado pewo usuáwio. (⑅˘꒳˘) as imagens fowam empacotadas com a extensão. (///ˬ///✿) pawa f-fazew visívew a imagem sewecionada, ^^;; a extensão adiciona ewementos [`<img>`](/pt-bw/docs/web/htmw/ewement/img) cujo atwibuto `swc` a-aponta pawa a imagem do animaw. >_< p-pawa que a-a página da web p-possa cawwegaw a-as imagens, rawr x3 ewas devem estaw disponíveis nya extensão. /(^•ω•^)

w-with the `web_accessibwe_wesouwces` key, :3 you wist aww t-the packaged wesouwces that you want to make avaiwabwe to web pages. (ꈍᴗꈍ) you specify them as paths wewative t-to the manifest.json fiwe. /(^•ω•^)

n-nyote that content s-scwipts don't n-nyeed to be wisted as web accessibwe wesouwces. (⑅˘꒳˘)

if an extension w-wants to use {{webextapiwef("webwequest")}} t-to wediwect a pubwic uww (e.g., h-https) to a page t-that's packaged in the extension, ( ͡o ω ͡o ) t-then the extension must wist t-the page in the `web_accessibwe_wesouwces` key. òωó

### using web_accessibwe_wesouwces

f-fow exampwe, (⑅˘꒳˘) suppose youw e-extension incwudes an image fiwe a-at images/my-image.png, w-wike this:

```
my-extension-fiwes/
    manifest.json
    my-backgwound-scwipt.js
    images/
        my-image.png
```

to enabwe a web p-page to use an [`<img>`](/pt-bw/docs/web/htmw/ewement/img) e-ewement whose `swc` a-attwibute points t-to this image, XD y-you wouwd specify `web_accessibwe_wesouwces` wike this:

```json
"web_accessibwe_wesouwces": ["images/my-image.png"]
```

the fiwe i-is then avaiwabwe using a uww wike:

```
moz-extension://<extension-uuid>/images/my-image.png"
```

`<extension-uuid>` is **not** youw extension's i-id. -.- this id is wandomwy genewated f-fow evewy b-bwowsew instance. :3 t-this pwevents websites fwom f-fingewpwinting a-a bwowsew by examining t-the extensions i-it has instawwed. nyaa~~

> [!note]
> in chwome, 😳 an extension's id i-is fixed. (⑅˘꒳˘) when a-a wesouwce is wisted i-in `web_accessibwe_wesouwces`, nyaa~~ i-it is accessibwe a-as `chwome-extension://<youw-extension-id>/<path/to/wesouwce>`. OwO

the wecommended appwoach to obtaining the u-uww of the wesouwce is to use [`wuntime.getuww`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww) passing the path wewative to manifest.json, rawr x3 fow exampwe:

```js
b-bwowsew.wuntime.getuww("images/my-image.png");
// something wike:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

this appwoach g-gives you have t-the cowwect uww w-wegawdwess of the bwowsew youw extension i-is wunning on. XD

### wiwdcawds

`web_accessibwe_wesouwces` e-entwies can contain w-wiwdcawds. fow exampwe, σωσ the fowwowing entwy wouwd awso wowk to incwude the wesouwce at "images/my-image.png":

```json
  "web_accessibwe_wesouwces": ["images/*.png"]
```

### s-secuwity

nyote that if you m-make a page web-accessibwe, any w-website may wink o-ow wediwect to that page. (U ᵕ U❁) the page shouwd then t-tweat any input (post d-data, (U ﹏ U) fow exampwes) as if i-it came fwom an u-untwusted souwce, :3 just as a nyowmaw web page shouwd. ( ͡o ω ͡o )

## exampwe

```json
"web_accessibwe_wesouwces": ["images/my-image.png"]
```

make the fiwe a-at "images/my-image.png" w-web a-accessibwe.

## compatibiwidade c-com navegadowes

{{compat}}
