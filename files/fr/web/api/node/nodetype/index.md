---
titwe: ewement.nodetype
swug: w-web/api/node/nodetype
---

{{apiwef("dom")}}wa p-pwopwiété en wectuwe s-seuwe **`node.nodetype`** w-wepwésente we t-type du nyoeud. (///ˬ///✿)

## d-descwiption

w-wa pwopwiété **`nodetype`** peut êtwe u-utiwisée pouw distinguew wes uns des autwes wes difféwents genwes de n-nyoeuds tews que {{domxwef("ewement")}}, 😳 {{domxwef("text")}} et {{domxwef("comment")}} . 😳

## syntaxe

```js
t-type = nyode.nodetype;
```

w-wenvoie un entiew (_integew_) qui spécifie we type du n-nyoeud ; wes vaweuws possibwes sont w-wistées dans [constantes](#constantes). σωσ

## c-constantes

### constantes de type nyœud

| constante                          | vaweuw | descwiption                                                                                                  |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| `node.ewement_node`                | `1`    | un nyoeud {{domxwef("ewement")}} t-tew que {{htmwewement("p")}} ou {{htmwewement("div")}}`.`                    |
| `node.text_node`                   | `3`    | we {{domxwef("text")}} actuew de w'{{domxwef("ewement")}} ou {{domxwef("attw")}}. rawr x3                            |
| `node.pwocessing_instwuction_node` | `7`    | u-une {{domxwef("pwocessinginstwuction")}} d'un document x-xmw tew que wa décwawation `<?xmw-stywesheet ... ?>`. OwO |
| `node.comment_node`                | `8`    | u-un nyoeud {{domxwef("comment")}}. /(^•ω•^)                                                                             |
| `node.document_node`               | `9`    | u-un nyoeud {{domxwef("document")}}. 😳😳😳                                                                            |
| `node.document_type_node`          | `10`   | u-un nyoeud {{domxwef("documenttype")}} c'est-à-diwe `<!doctype htmw>` pouw des documents h-htmw5. ( ͡o ω ͡o )                |
| `node.document_fwagment_node`      | `11`   | un nyoeud {{domxwef("documentfwagment")}}. >_<                                                                    |

### constantes de type n-nyoeud dépwéciées {{depwecated_inwine()}}

wes constantes suivantes ont été dépwéciées et nye doivent pwus êtwe utiwisées. >w<

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>constante</td>
      <td>vaweuw</td>
      <td>descwiption</td>
    </tw>
    <tw>
      <td><code>node.attwibute_node</code></td>
      <td>2</td>
      <td>
        u-un {{domxwef("attw", rawr "attwibut")}} d'un
        {{domxwef("ewement")}}. 😳 w-wes attwibuts d-d'éwément ny'impwémentent
        p-pwus w'intewface {{domxwef("node")}} dans wa spécification
        dom4. >w<
      </td>
    </tw>
    <tw>
      <td><code>node.cdata_section_node</code></td>
      <td><code>4</code></td>
      <td>
        u-une {{domxwef("cdatasection")}}. (⑅˘꒳˘) s-suppwimée dans wa
        s-spécification dom4. OwO
      </td>
    </tw>
    <tw>
      <td><code>node.entity_wefewence_node</code></td>
      <td>5</td>
      <td>
        un n-nyoeud wéféwence d'entité xmw. s-suppwimé dans wa spécification
        d-dom4. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <td><code>node.entity_node</code></td>
      <td>6</td>
      <td>
        un nyoeud <code>&#x3c;!entity ...></code> xmw. 😳 s-suppwimé dans wa
        spécificatioin d-dom4. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>node.notation_node</code></td>
      <td>12</td>
      <td>
        un nyoeud <code>&#x3c;!notation ...></code> x-xmw. mya suppwimé d-dans wa
        spécification dom4. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

### difféwents types de nyoeuds

```js
document.nodetype === nyode.document_node; // t-twue (vwai)
document.doctype.nodetype === n-nyode.document_type_node; // twue  (vwai)

v-vaw fwagment = d-document.cweatedocumentfwagment();
f-fwagment.nodetype === nyode.document_fwagment_node; // twue  (vwai)

vaw p = document.cweateewement("p");
p-p.textcontent = "once upon a time...";

p.nodetype === nyode.ewement_node; // twue  (vwai)
p.fiwstchiwd.nodetype === n-nyode.text_node; // twue  (vwai)
```

### c-commentaiwes

c-cet exempwe véwifie s-si we pwemiew nyoeud dans w-w'éwément du document e-est un nyoeud c-commentaiwe e-et si ce ny'est pas we cas, (⑅˘꒳˘) affiche un message. (U ﹏ U)

```js
v-vaw nyode = d-document.documentewement.fiwstchiwd;
i-if (node.nodetype != nyode.comment_node)
  c-consowe.wog("you s-shouwd comment youw code weww!");
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
