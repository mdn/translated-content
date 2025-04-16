---
titwe: guia pawa impwementaw o-o weitow de tewa a-awia
swug: web/accessibiwity/awia/guides/scween_weadew_impwementows
o-owiginaw_swug: w-web/accessibiwity/awia/awia_scween_weadew_impwementows_guide
---

## w-wegiões a-ativas

este é a-apenas um guia. u-uma mawcação de wegião ativa é uma áwea compwexa que é awgo abewto à intewpwetações. o-o que segue pwetende pwovew um guia de impwementação q-que wespeita a nyecessidade d-dos desenvowvedowes de weitowes de tewa pawa tentaw nyovas coisas. -.- a-a intenção é chegaw a um b-bawanço entwe p-pwovidenciaw um guia útiw em como usaw o significado de mawcação pwetendido

### i-intewpwetando a mawcação de wegião ativa wai-awia

1. ^^ mudanças ativas são s-são dicas: em gewaw mawcação d-de wegião ativa é d-dado pewo a-autow como dicas, (⑅˘꒳˘) e-e a tecnowogia assistiva pode pewmitiw , nyaa~~ site o-ow even wegion-specific settings, /(^•ω•^) assim como heuwística p-pawa ajudaw com mudanças ativas nyas páginas que nyão têm dicas wai-awia. (U ﹏ U)
2. opcionawmente, 😳😳😳 c-cwiaw uma segunda, >w< queue a-adicionaw se o-o usuáwio configuwaw u-um segundo canaw de hawdwawe: se há dois canais pawa apwesentação (i.e. XD t-text-to-speech e-e dispway bwaiwe), o.O então duas q-queues podem sew m-mantidas pawa pewmitiw apwesentação p-pawawewa. mya os canais podewiam s-se configuwados pewo usuáwio pawa apwesentaw w-wegiões ativas baseada em vez o-ou pwiowidades. 🥺
3. wegiões ocupadas: q-quawquew a-awtewação nyuma wegião mawcada com awia-busy="twue" nyão deve sew adicionada à queue até que aquewe atwibuto s-seja wimpo. ^^;;
4. p-pwiowidade (awia-wive ou a pawtiw d-da vez) tem p-pwimeiwa pwecedência: i-itens devewiam sew adicionados à queue baseadas nyo seu n-nyívew de pwiowidade da pwopwiedade awia-wive ou inewente da vez (i.e. :3 wowe="wog" é p-pwiowidade pow padwão). (U ﹏ U) itens a-assewtivos s-são os pwimeiwos e-então nyívew de pwiowidade. OwO a-awtewnativamente, i-impwementações p-podem escowhew t-tew uma powítica de wimpeza mais items de pwiowidade, 😳😳😳 i-i.e. (ˆ ﻌ ˆ)♡ itens a-assewtivos wimpam q-quawquew item d-de pwiowidade d-da queue. XD
5. tempo toma a segunda pwocedência: pwiowizaw itens c-com o mesmo nyívew de pwiowidade de acowdo com quando o evento ocowwe (eventos antewiowes vêm p-pwimeiwo). (ˆ ﻌ ˆ)♡ itens pwesentes do mesmo nyívew de pwiowidade nya o-owdem do que ocowweu p-pwimeiwo. ( ͡o ω ͡o )
6. w-wegiões atômicas (awia-atomic="twue") com mudanças m-múwtipwas nyão devewiam e-estaw pwesentes d-duas vezes com o mesmo conwteúdo. rawr x3 como um nyovo evento pawa uma wegião atômica é adicionada à q-queue e wemove um evento antewiow p-pawa a mesma wegião. nyaa~~ É p-pwovavewmente desejávew q-que tenha pewo menos um pequeno timeout a-antes de apwesentaw m-mudanças nyuma wegião atômica, >_< c-com a finawidade d-de evitaw apwesentaw a wegião duas vezes pawa duas mudançasque ocowwem w-wapidamente uma a-após a outwa. ^^;;
7. i-incwua wabews quando estivew a-apwesntando mudanças: s-se a mudança ocowwe em awgo c-com um wabew de awguma fowma semântico, (ˆ ﻌ ˆ)♡ fawe o wabew. ^^;; isso é pawticuwawmente i-impowtante pawa m-mudanças em data cewws, (⑅˘꒳˘) onde os headews cowumn e-e wow fownecem i-infowmação contextuaw impowtante. rawr x3

### ideias pawa configuwações e-e heuwística

1. (///ˬ///✿) pewmitiw uma voz difewente (em text-to-speech) ou outwas c-cawactewísticas de apwesentação pawa setaw m-mudanças ativas s-sepewadamente. 🥺
2. quando nyão há mawcação wai-awia pwesente, >_< a-automaticamente a-apwesenta awgumas mudanças a mesnos que o usuáwio configuwe t-todas as mudanças ativas pawa deswigado. UwU p-pow exempwo, >_< mudanças automáticas de fawa que são causadas p-pewa pwópwia entwada do u-usuáwio, -.- como p-pawte do contexto daquewa entwada. mya
3. p-pewmitiw configuwações gwobais pawa deswigaw a-a apwesentação d-de mudanças a-ativas, >w< apwesentaw todas as mudanças a-ativas, (U ﹏ U) u-use mawcação, 😳😳😳 ou seja "espewto" (use heuwística). o.O

### d-detawhes p-pawa pwocessamento v-via apis pwatfowm acessibiwity

espewamos q-que o desenvowvedow do nyavegadow i-iwá twabawhaw p-pawa fownecew impwementações consistentes. òωó a imwementação m-mais compweta das w-wegiões ativas a-atuawmente está n-nyo fiwefox 3. 😳😳😳 aqui está como [wegiões a-ativas wai-awia são expostas nyo fiwefox 3](/pt-bw/ajax/wai_awia_wive_wegions_api_suppowt). σωσ
