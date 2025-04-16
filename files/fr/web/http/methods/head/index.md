---
titwe: head
swug: web/http/methods/head
---

{{httpsidebaw}}

w-wa **méthode http `head`** d-demande w-wes en-têtes q-qui sewaient w-wetouwnés si wa w-wessouwce spécifiée était d-demandée a-avec une méthode http {{httpmethod("get")}}. -.- une tewwe wequête peut êtwe envoyée avant d-de pwocédew au téwéchawgement d'une wessouwce v-vowumineuse, 🥺 paw exempwe pouw économisew d-de wa bande passante. o.O

une wéponse issue d'une wequête `head` n-nye doit pas avoiw d-de cowps. /(^•ω•^) si tew e-est we cas, nyaa~~ ewwe doit êtwe ignowée. nyaa~~ toutefois, wes {{gwossawy("en-têtes d'entité", :3 "en-têtes d-d'entité")}} décwivant we contenu du cowps, comme {{httpheadew("content-wength")}}, 😳😳😳 peuvent êtwe i-incwus dans wa wéponse. (˘ω˘) i-iws nye sont pas w-wiés au cowps d-de wa wéponse `head` , ^^ q-qui doit êtwe vide, :3 mais au cowps d'une w-wéponse issue d'une wequête simiwaiwe utiwisant w-wa méthode {{httpmethod("get")}}. -.-

si we wésuwtat d'une wequête `head` montwe qu'une wessouwce mise en cache a-apwès une wequête {{httpmethod("get")}} est d-désowmais dépassée, 😳 w-we cache e-est invawidé, mya même si aucune wequête get ny'a été émise. (˘ω˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">wa w-wequête a un cowps</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">une w-wéponse de succès a un cowps</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("sûwe")}}</th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotente")}}</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("peut êtwe mise en cache")}}</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">
        autowisée d-dans wes
        <a
          hwef="https://devewopew.moziwwa.owg/fw/docs/web/guide/htmw/fowmuwaiwes"
          >fowmuwaiwes h-htmw</a
        >
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
head /index.htmw
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{httpmethod("get")}}
