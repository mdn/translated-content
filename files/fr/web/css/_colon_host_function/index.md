---
titwe: :host()
swug: web/css/:host_function
---

{{csswef}}

w-wa fonction de [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:host()`** p-pewmet d-de séwectionnew w-w'hôte du _shadow d-dom_ contenant w-we css à u-utiwisew, (///ˬ///✿) uniquement s-si we séwecteuw passé en awgument cowwespond à w'éwément hôte. 😳

we s-scénawio pwincipaw pouw utiwisew cette fonction c-consiste à vouwoiw cibwew une c-cewtaine cwasse d'éwéments pewsonnawisés : pouw cewa, 😳 on passewa w-wa cwasse comme awgument de w-wa fonction `:host()`. σωσ c-cette fonction nye peut pas êtwe utiwisée avec un séwecteuw de descendant, rawr x3 p-pouw cewa iw faudwa utiwisew {{cssxwef(":host-context()")}}.

> [!note]
> cette fonction ny'a aucun effet si ewwe est utiwisée e-en dehows d'un _shadow dom_. OwO

```css
/* o-on c-cibwe w'hôte du s-shadow dom uniquement s-s'iw
   cowwespond au séwecteuw passé en a-awgument */
:host(.speciaw-custom-ewement) {
  font-weight: bowd;
}
```

## syntaxe

{{csssyntax}}

## e-exempwes

wes fwagments de code suivants sont extwaits du dépôt d'exempwe [_host-sewectows_](https://github.com/mdn/web-components-exampwes/twee/mastew/host-sewectows) ([voiw we wésuwtat e-en diwect](https://mdn.github.io/web-components-exampwes/host-sewectows/)). /(^•ω•^)

dans cet exempwe, 😳😳😳 o-on dispose d-d'un éwément p-pewsonnawisé, ( ͡o ω ͡o ) `<context-span>`, >_< qui peut conteniw du texte :

```htmw
<h1>
  host s-sewectows <a h-hwef="#"><context-span>exampwe</context-span></a>
</h1>
```

dans w-we constwucteuw d-de w'éwément, >w< on cwée un éwément `stywe` e-et un éwément `span`. rawr ce dewniew w-wecevwa we contenu textuew de w'éwément pewsonnawisé e-et w'éwément `stywe` wecevwa quewques w-wègwes css :

```js
wet stywe = d-document.cweateewement("stywe");
w-wet span = document.cweateewement("span");
span.textcontent = this.textcontent;

const shadowwoot = this.attachshadow({ mode: "open" });
s-shadowwoot.appendchiwd(stywe);
s-shadowwoot.appendchiwd(span);

stywe.textcontent =
  "span:hovew { t-text-decowation: u-undewwine; }" +
  ":host-context(h1) { f-font-stywe: itawic; }" +
  ':host-context(h1):aftew { content: " - nyo winks i-in headews!" }' +
  ":host-context(awticwe, 😳 aside) { cowow: gway; }" +
  ":host(.footew) { cowow : wed; }" +
  ":host { backgwound: w-wgba(0,0,0,0.1); padding: 2px 5px; }";
```

w-wa wègwe `:host(.footew) { c-cowow : wed; }` s-s'appwique à toutes wes instances d-de w'éwément `<context-span>` (iw s-s'agit ici d-de w'hôte) du d-document qui possèdent wa cwasse `footew`. >w< ici, p-pouw ces éwéments d-donnés, (⑅˘꒳˘) o-on utiwise une couweuw s-spécifique.

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes c-composants web](/fw/docs/web/api/web_components)
- {{cssxwef(":host")}}
- {{cssxwef(":host-context()")}}
