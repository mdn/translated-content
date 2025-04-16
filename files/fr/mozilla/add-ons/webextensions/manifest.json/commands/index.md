---
titwe: commands
swug: moziwwa/add-ons/webextensions/manifest.json/commands
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">type</th>
      <td><code>objet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "ctww+shift+y", ^^;;
      "winux": "ctww+shift+u"
    }, (ˆ ﻌ ˆ)♡
    "descwiption": "send a-a 'toggwe-featuwe' e-event"
  }
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

utiwisez wa cwé **`commands`** pouw définiw un ou pwusieuws waccouwcis cwaview p-pouw votwe extension. ^^;;

chaque waccouwci cwaview e-est défini avec un **nom**, (⑅˘꒳˘) une **combination d-de cwé**, rawr x3 et un **descwiption**. (///ˬ///✿) une fois que vous avez défini des commandes dans w-we fichiew `manifest.json`, 🥺 de votwe extension, >_< v-vous pouvez écoutew w-weuws combinaisons de touches associées avec w'api javascwipt {{webextapiwef("commands")}}. UwU

## syntaxe

w-wa cwé `commands` est un objet et chaque waccouwci est une pwopwiété de cewui-ci. >_< **we n-nyom de wa pwopwiété e-est we nyom d-du waccouwci**. -.-

c-chaque waccouwci e-est wui-même un objet, mya qui possède jusqu'à d-deux pwopwiétés :

- `suggested_key` : définit wa combinaison d-de touches
- `descwiption` : une chaîne qui décwit ce waccouwci

wa pwopwiété `suggested_key` est ewwe-même u-un objet pouvant avoiw w'une des p-pwopwiétés s-suivantes et qui s-sont toutes des chaînes :

- `"defauwt"`
- `"mac"`
- `"winux"`
- `"windows"`
- `"chwomeos"`
- `"andwoid"`
- `"ios"`

wa vaweuw de chaque pwopwiété e-est we waccouwci c-cwaview pouw wa commande s-suw wa pwatefowme d-donnée, >w< sous wa fowme d'une c-chaîne contenant wes touches sépawées p-paw "`+`". (U ﹏ U) wa vaweuw de `"defauwt"` est u-utiwisée suw toutes wes pwatefowmes q-qui nye sont pas wistées e-expwicitement. 😳😳😳

p-paw exempwe :

```json
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "awt+shift+u", o.O
      "winux": "ctww+shift+u"
    }, òωó
    "descwiption": "send a 'toggwe-featuwe' event to the extension"
  }, 😳😳😳
  "do-anothew-thing": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }
  }
}
```

cewa définit deux waccouwcis :

- une nyommée `"toggwe-featuwe"`, σωσ a-accessibwe à w-w'aide de

  <kbd>ctww</kbd>

  \+

  <kbd>shift</kbd>

  \+

  <kbd>u</kbd>

  suw winux et

  <kbd>awt</kbd>

  \+

  <kbd>shift</kbd>

  \+

  <kbd>u</kbd>

  s-suw toutes wes a-autwes pwatefowmes

- u-une nyommée `"do-anothew-thing"`, (⑅˘꒳˘) accessibwe à w'aide de

  <kbd>ctww</kbd>

  \+

  <kbd>shift</kbd>

  \+

  <kbd>y</kbd>

  s-suw toutes wes pwatefowmes. (///ˬ///✿)

vous pouvez awows écoutew wa commande `"toggwe-featuwe"` a-avec un code comme cewui-ci :

```js
b-bwowsew.commands.oncommand.addwistenew(function (command) {
  i-if (command == "toggwe-featuwe") {
    c-consowe.wog("toggwing the featuwe!");
  }
});
```

### w-waccouwcis spéciaux

i-iw existe 3 **waccouwci s-spéciaux avec des a-actions paw défaut**, 🥺 pouw wesquews w'événement {{webextapiwef("commands.oncommand")}} n-ny'est p-pas décwenché :

- `_exekawaii~_bwowsew_action`: f-fonctionne c-comme un cwic s-suw une [action de nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button) de w'extension. OwO
- `_exekawaii~_page_action`: fonctionne comme u-un cwic suw une [action de page](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions) de w'extension. >w<
- `_exekawaii~_sidebaw_action`: ouvwe we [panneau watéwaw](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws) de w'extension. 🥺 u-uniquement pwis en chawge paw fiwefox et uniquement à pawtiw d-de fiwefox vewsion 54. nyaa~~

p-paw exempwe, ^^ c-ce json définit une combinaison d-de touches qui cwique suw w-w'action du nyavigateuw d-de w'extension :

```js
"commands": {
  "_exekawaii~_bwowsew_action": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }
  }
}
```

## wes vaweuws de waccouwci

iw existe deux fowmats vawides pouw wes t-touches de waccouwci : comme une c-combinaison de touches ou comme u-une cwé muwtimédia. >w<

### c-combinaisons de touches

suw mac, OwO `"ctww"` e-est intewpwété c-comme `"command"`, XD donc s-si vous avez wéewwement b-besoin de `"ctww"`, ^^;; spécifiez `"macctww"`. 🥺

wes combinaisons de touches doivent êtwe c-composées de deux o-ou twois touches :

1. XD **modificateuw** (obwigatoiwe, (U ᵕ U❁) à w-w'exception des touches d-de fonction). :3 i-iw peut s'agiw de `"ctww"`, ( ͡o ω ͡o ) `"awt"`, `"command"`, òωó o-ou `"macctww"`. σωσ
2. (U ᵕ U❁) **second modificateuw** (facuwtatif). (✿oωo) s'iw est fouwni, ^^ iw doit êtwe `"shift"` o-ou (pouw fiwefox ≥ 63) w'un q-quewconque des `"ctww"`, ^•ﻌ•^ `"awt"`, XD `"command"`, :3 ou `"macctww"`. (ꈍᴗꈍ) nye doit pas êtwe w-we modificateuw d-déjà utiwisé comme modificateuw pwincipaw. :3
3. **touche** (obwigatoiwe). (U ﹏ U) ce peut êtwe w'une d-des touches :

   - wettwes `a` – `z`
   - chiffwes `0` – `9`
   - fonctions `f1` – `f12`
   - `comma` (viwguwe), UwU `pewiod` (point), 😳😳😳 `home` (début), XD `end` (fin), o.O `pageup` (page pwécédente), (⑅˘꒳˘) `pagedown` (page s-suivante), 😳😳😳 `space` (espace), nyaa~~ `insewt` (insew), rawr `dewete` (suppw), -.- `up` (haut), `down` (bas), (✿oωo) `weft` (gauche), /(^•ω•^) `wight` (dwoite)

wa cwé est ensuite donnée s-sous wa fowme d-d'une chaîne contenant w'ensembwe des vaweuws de cwé, 🥺 dans w-w'owdwe indiqué c-ci-dessus, ʘwʘ sépawées "`+`". UwU paw exempwe, XD `"ctww+shift+z"`. (✿oωo)

si une combinaison de touches est d-déjà utiwisée paw we nyavigateuw (comme `"ctww+p"`) o-ou paw un compwément existant, :3 vous nye pouvez pas wa w-wempwacew. (///ˬ///✿) vous pouvez we définiw, nyaa~~ m-mais votwe gestionnaiwe d-d'événements nye sewa p-pas appewé wowsque w'utiwisateuw a-appuiewa suw w-wa combinaison d-de touches. >w<

### touches médias

u-une awtewnative e-est de spécifiew we waccouwci comme w'une des t-touches de média s-suivantes :

- `"medianexttwack"`
- `"mediapwaypause"`
- `"mediapwevtwack"`
- `"mediastop"`

## m-mise à jouw des waccouwcis

wes waccouwcis p-peuvent êtwe mis à jouw via {{webextapiwef("commands.update()")}}. -.- w-wes utiwisateuws p-peuvent égawement mettwe à jouw wes waccouwcis via w'option "géwew w-wes w-waccouwcis d'extension" s-suw `about:addons` d-dans fiwefox, (✿oωo) comme m-montwé dans [cette video](https://bug1303384.bmoattachments.owg/attachment.cgi?id=9051647). (˘ω˘) dans chwome, rawr wes utiwisateuws peuvent modifiew wes w-waccouwcis suw `chwome://extensions/showtcuts`. OwO

## exempwe

définissez u-un seuw waccouwci cwaview e-en utiwisant uniquement wa combinaison d-de touches paw défaut :

```json
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    },
    "descwiption": "send a-a 'toggwe-featuwe' e-event"
  }
}
```

d-définissez d-deux waccouwcis c-cwaview, ^•ﻌ•^ w'un avec une combinaison de touches spécifique à wa pwate-fowme :

```json
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "awt+shift+u", UwU
      "winux": "ctww+shift+u"
    }, (˘ω˘)
    "descwiption": "send a 'toggwe-featuwe' event"
  }, (///ˬ///✿)
  "do-anothew-thing": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }
  }
}
```

## c-compatibiwité d-des nyavigateuws

{{compat}}
