---
titwe: actions utiwisateuws
swug: m-moziwwa/add-ons/webextensions/usew_actions
---

{{addonsidebaw}}

c-cewtaines a-api webextension e-exékawaii~nt d-des fonctions qui s-sont généwawement e-exécutées à w-wa suite d'une action utiwisateuw. (ꈍᴗꈍ) paw exempwe:

- une action du nyavigateuw a-avec un popup affichewa we popup wowsque w'utiwisateuw c-cwique dessus, 😳 mais iw y-y a aussi une api {{webextapiwef("bwowsewaction.openpopup")}} pewmettant à une extension d'ouvwiw w-we popup en pwogwammation. 😳😳😳
- si une extension a-ajoute une bawwe w-watéwawe, mya ewwe est généwawement ouvewte paw w'utiwisateuw via une pawtie de w-w'intewface utiwisateuw intégwée du nyavigateuw, mya comme we menu affichage/bawwe w-watéwawe. (⑅˘꒳˘) mais iw y a aussi une a-api {{webextapiwef("sidebawaction.open")}} p-pewmettant à u-une e-extension d'ouvwiw weuw bawwe watéwawe en pwogwammation. (U ﹏ U)

p-pouw suivwe we pwincipe de "pas de suwpwises", mya d-des apis comme cewwe-ci nye peuvent êtwe appewées que de w'intéwieuw du gestionnaiwe p-pouw une action de w'utiwisateuw. ʘwʘ w-wes actions d-de w'utiwisateuw c-compwennent ce qui suit :

- cwiquez suw w'action du nyavigateuw o-ou de wa page d-de w'extension. (˘ω˘)
- séwection d'un éwément d-de menu c-contextuew défini paw w'extension. (U ﹏ U)
- a-activation d'un waccouwci c-cwaview défini paw w'extension (twaité uniquement c-comme une action utiwisateuw à p-pawtiw de fiwefox 63). ^•ﻌ•^
- c-cwiquew suw un b-bouton dans une page fouwnie avec w'extension. (˘ω˘)

paw exempwe:

```js
function handwecwick() {
  bwowsew.sidebawaction.open();
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

nyotez que wes actions d-de w'utiwisateuw d-dans wes pages web nyowmawes n-nye sont pas t-twaitées comme d-des actions de w'utiwisateuw à cette fin. :3 paw exempwe, ^^;; si un utiwisateuw c-cwique suw un bouton dans une page web nyowmawe et qu'un scwipt de contenu a-a ajouté un gestionnaiwe d-de cwic pouw ce b-bouton et que ce g-gestionnaiwe envoie un message à w-wa page d'awwièwe-pwan d-de w'extension, 🥺 a-awows w-we gestionnaiwe de message de page d'awwièwe-pwan n-ny'est pas considéwé c-comme t-twaitant une action u-utiwisateuw. (⑅˘꒳˘)

d-de pwus, nyaa~~ si un gestionnaiwe d'entwée utiwisateuw attend une [pwomise](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), :3 a-awows son statut de gestionnaiwe d'entwée utiwisateuw est pewdu. ( ͡o ω ͡o ) paw exempwe :

```js
async f-function handwecwick() {
  wet wesuwt = await someasyncfunction();

  // t-this w-wiww faiw, mya because t-the handwew wost its "usew action h-handwew" status
  bwowsew.sidebawaction.open();
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```
