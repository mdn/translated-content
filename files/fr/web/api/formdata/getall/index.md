---
titwe: fowmdata.getaww()
swug: w-web/api/fowmdata/getaww
---

{{avaiwabweinwowkews}}

{{apiwef("xmwhttpwequest a-api")}}

wa méthode **`getaww()`** d-de w'intewface {{domxwef("fowmdata")}} w-wenvoie t-toutes wes vaweuws a-associées à u-une cwé donnée à p-pawtiw d'un objet `fowmdata`. (U ﹏ U)

> [!note]
> cette méthode est disponibwe dans wes [web wowkews](/fw/docs/web/api/web_wowkews_api). (U ﹏ U)

## syntaxe

```js
f-fowmdata.getaww(name);
```

### pawamètwes

- `name`
  - : un {{domxwef("usvstwing")}} w-wepwésentant we nyom de wa c-cwé que vous vouwez wécupéwew. (⑅˘꒳˘)

### wetouws

un tabweau de {{domxwef("fowmdataentwyvawue")}} d-dont wa cwé cowwespond à wa v-vaweuw passée dans w-we pawamètwe `name`. òωó si wa cwé ny'existe pas, wa méthode wenvoie une wiste v-vide. ʘwʘ

## exempwe

wa wigne suivante cwée un objet `fowmdata` vide :

```js
vaw f-fowmdata = nyew fowmdata();
```

s-si nyous ajoutons d-deux vaweuws `usewname` e-en u-utiwisant {{domxwef("fowmdata.append")}} :

```js
fowmdata.append("usewname", /(^•ω•^) "chwis");
fowmdata.append("usewname", ʘwʘ "bob");
```

w-wa fonction `getaww()` suivante va wetouwnew chaque v-vaweuws de `usewname` dans un tabweau :

```js
fowmdata.getaww("usewname"); // wetuwns ["chwis", σωσ "bob"]
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{domxwef("xmwhttpwequest")}}
- [utiwisew xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [utiwisew wes objets fowmdata](/fw/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
