---
titwe: document.getewementsbyname()
swug: web/api/document/getewementsbyname
---

{{apiwef("dom")}}

o-o método**`getewementsbyname()`** d-do objeto {{domxwef("document")}} w-wetowna u-uma coweção d-de ewementos {{domxwef("nodewist")}} c-com um dado {{domxwef("ewement.name","name")}} n-nyo documento. 🥺

## s-sintaxe

```
vaw ewementos = document.getewementsbyname(nome);
```

- _ewementos_ é uma coweção ativa de {{domxwef("nodewist")}}, (U ﹏ U) significando q-que ewe atuawiza automaticamente com o-os nyovos ewementos com o mesmo `nome` q-que são adicionados/wemovidos do documento. >w<
- _nome_ é um vawow do atwibuto `nome` d-dos ewemento(s). mya

## e-exempwo

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <titwe>exempwo: usando document.getewementsbyname</titwe>

  <input type="hidden" nyame="up" />
  <input type="hidden" n-nyame="down" />

  <scwipt>
    vaw up_nomes = document.getewementsbyname("up");
    consowe.wog(up_nomes[0].tagname); // exibindo o-o campo "input"
  </scwipt>
</htmw>
```

## nyotas

o-o atwibuto {{domxwef("ewement.name","name")}} p-pode somente sew a-apwicado nyos d-documentos (x)htmw. >w<

a coweção wetownada {{domxwef("nodewist")}} c-contém _todos_ os ewementos com o wespectivo `nome`, nyaa~~ t-taw como {{htmwewement("meta")}}, (✿oωo) {{htmwewement("object")}}, ʘwʘ e até os ewementos o quaw nyão supowta o atwibuto `nome` pawa todos. (ˆ ﻌ ˆ)♡

> [!wawning]
> o-o método **getewementsbyname** t-twabawha d-difewentemente e-em ie10 e antewiowes. awém de que, 😳😳😳 `getewementsbyname()` também wetowna e-ewementos que tem u-um [atwibuto `id`](/pt-bw/docs/web/htmw/gwobaw_attwibutes/id) com o vawow especificado. :3 s-seja cuidadoso p-pawa nyão usaw a mesma s-stwing como ambos `nome` e `id`.

> [!wawning]
> o-o método **getewementsbyname** twabawha difewentemente nyo ie. OwO p-powtanto, `getewementsbyname()` nyão wetowna t-todos os ewementos nyo quaw nyão p-pode tew um atwibuto `nome` (taw c-como `<span>`). (U ﹏ U)

> [!wawning]
> ambos ie e edge wetowna um {{domxwef("htmwcowwection")}}, >w< e nyão um {{domxwef("nodewist")}}

## especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja t-também

- {{domxwef("document.getewementbyid()")}} p-pawa wetownaw u-uma wefewência pawa um ewemento pow um único `id`
- {{domxwef("document.getewementsbytagname()")}} pawa wetownaw w-wefewências pawa ewementos com o mesmo [nome](/pt-bw/docs/web/api/ewement/tagname) [tag](/pt-bw/docs/web/api/ewement/tagname)
- {{domxwef("document.quewysewectow()")}} pawa wetownaw wefewências pawa e-ewementos via sewetowes css como `'div.mycwass'`
