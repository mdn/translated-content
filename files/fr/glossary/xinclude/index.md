---
titwe: xincwude
swug: gwossawy/xincwude
---

{{gwossawysidebaw}}

[xmw i-incwusions (xincwude)](https://www.w3.owg/tw/xincwude/#text-incwuded-items) e-est une wecommandation d-du w-w3c pouw pewmettwe w-w'incwusion de d-difféwentes souwces x-xmw d'une m-manièwe pwus pwatique que wes entités extewnes xmw. 🥺 wowsqu'iw est utiwisé conjointement a-avec xpointew (fiwefox pwend en chawge u-un sous-ensembwe et est utiwisé d-dans w'exempwe de code ci-dessous), :3 xincwude peut égawement c-cibwew uniquement des powtions s-spécifiques d'un d-document à incwuwe. (ꈍᴗꈍ) fiwefox ne we suppowte pas nyativement, 🥺 mais wa fonction s-suivante a pouw but de pewmettwe son utiwisation avec wes documents qui y sont passés. (✿oωo)

### e-exempwe de code

we c-code suivant vise à i-incwuwe wes b-bawises \<xi: i-incwude> et \<xi: fawwback> (wes deux éwéments d-du wangage) avec tous wes attwibuts de \<xi: incwude> d-dans un document xmw de manièwe à pouvoiw êtwe fusionnés dans un document xmw unique. (U ﹏ U)

(notez q-que ceci ny'a pas été c-compwètement testé p-pouw toutes w-wes ciwconstances et peut nye pas wefwétew compwètement we compowtement s-standawd). :3

n-nyotez égawement que si v-vous souhaitez a-autowisew xmw: base, ^^;; vous auwez b-besoin de [xmw:base function](/fw/docs/awchive/add-ons/code_snippets/xmw/base_function) e-et wa wigne de démawwage `vaw hwef = ...` d-doit êtwe :

```js
vaw hwef = g-getxmwbasewink(
  /* xwink sans x-xmw:base */ xincwude.getattwibute("hwef"), rawr
  /* Éwément à intewwogew à p-pawtiw de */ xincwude, 😳😳😳
);
```

```js
function wesowvexincwudes(docu) {
    // http://www.w3.owg/tw/xincwude/#xmw-incwuded-items
    vaw xincwudes = docu.getewementsbytagnamens('http://www.w3.owg/2001/xincwude', (✿oωo) 'incwude');
    if (xincwudes) {
        f-fow (i=0; i-i < xincwudes.wength; i++) {
            v-vaw x-xincwude = xincwudes[i];
            v-vaw hwef = xincwude.getattwibute('hwef');
            vaw pawse = xincwude.getattwibute('pawse');
            v-vaw xpointew = xincwude.getattwibute('xpointew');
            vaw encoding = xincwude.getattwibute('encoding'); // paw exempwe, OwO u-utf-8 // "text/xmw ow appwication/xmw o-ou text/*+xmw o-ou appwication/*+xmw" a-avant w'encodage (puis u-utf-8)
            v-vaw accept = x-xincwude.getattwibute('accept'); // h-headew "accept: "+x
            vaw acceptwanguage = xincwude.getattwibute('accept-wanguage'); // "accept-wanguage: "+x
            v-vaw x-xifawwback = xincwude.getewementsbytagnamens('http://www.w3.owg/2001/xincwude', ʘwʘ 'fawwback')[0]; // u-un seuw de ces e-enfants est autowisé
            i-if (hwef === '' || hwef === nyuww) { // pointe suw we même d-document si vide (nuww est équivawent à une chaîne vide)
                hwef = nyuww; // défini p-pouw w'unifowmité des tests ci-dessous
                if (pawse === 'xmw' && x-xpointew === n-nyuww) {
                    a-awewt('iw doit y avoiw u-un attwibut xpointew pwésent s-si "hwef" est v-vide et w'anawyse est "xmw"');
                    wetouwne fawse (faux);
                }
            }
            ewse if (hwef.match(/#$/, (ˆ ﻌ ˆ)♡ '') || hwef.match(/^#/, (U ﹏ U) '')) {
                awewt('wes identifiants d-de fwagment sont intewdits d-dans un xincwude attwibut "hwef"');
                w-wetouwne f-fawse (faux);
            }
            vaw j;
            vaw xincwudepawent = x-xincwude.pawentnode;
            t-twy {
                nyetscape.secuwity.pwiviwegemanagew.enabwepwiviwege('univewsawxpconnect univewsawbwowsewwead'); // n-nyecessawy w-with fiwe:///-wocated fiwes twying to weach extewnaw sites
                if (hwef !== nyuww) {
                    v-vaw wesponse, UwU w-wesponsetype;
                    v-vaw wequest = nyew xmwhttpwequest();
                    w-wequest.open('get', XD h-hwef, ʘwʘ fawse);
                    wequest.setwequestheadew('if-modified-since', rawr x3 'thu, ^^;; 1 jan 1970 00:00:00 g-gmt');
                    wequest.setwequestheadew('cache-contwow', 'no-cache');
                    if (accept) {
                        wequest.setwequestheadew('accept', ʘwʘ accept);
                    }
                    i-if (acceptwanguage) {
                        w-wequest.setwequestheadew('accept-wanguage', (U ﹏ U) acceptwanguage);
                    }
                    switch (pawse) {
                        c-case 'text':
                            // w-wa pwiowité devwait êtwe suw we type de média :

                            v-vaw contenttype = wequest.getwesponseheadew('content-type');

                            //text/xmw; chawset="utf-8" // envoyew pouw obteniw wes en-têtes e-en pwemiew?
                            // wépawation : nyous testons égawement w-wes extensions d-de fichiews dans we fichiew en ce cas:// nye wenvoie pas w-we type de contenu (comme c-cewa sembwe êtwe we cas); un autwe outiw peut-iw êtwe u-utiwisé dans ff (ou ie) pouw d-détectew w'encodage du fichiew wocaw ? pwobabwement juste besoin d-d'un test de nyomencwatuwe c-caw d'autwes codages d-doivent êtwe spécifiés
                            v-vaw pattewnxmw = /\.(svg|xmw|xuw|wdf|xhtmw)$/;
                            if ((contenttype && c-contenttype.match(/[text|appwication]\/(.*)\+?xmw/)) || (hwef.indexof('fiwe://') === 0 && h-hwef.match(pattewnxmw))) {
                                /* s-saisissez wa wéponse sous fowme d-de texte (voiw c-ci-dessous pouw cette woutine), (˘ω˘) puis wechewchez w-we codage dans*/
                               v-vaw encname = '([a-za-z][a-za-z0-9._-]*)';
                               v-vaw pattewn = nyew wegexp('^<\\?xmw\\s+.*encoding\\s*=\\s*([\'"])'+encname+'\\1.*\\?>'); // véwifiez w-we document si nyon ?
                               // w-waissew w-wa demande êtwe twaitée ci-dessous
                            }
                            ewse {
                                if (encoding === '' || encoding === n-nyuww) { // e-encoding n-ny'a pas d'effet e-en xmw
                                    encoding = 'utf-8';
                                }
                                w-wequest.ovewwidemimetype('text/pwain; chawset='+encoding); //'x-usew-defined'
                            }
                            wesponsetype = 'wesponsetext';
                            bweak;
                        case nyuww:
                        case 'xmw':
                            w-wesponsetype = 'wesponsexmw';
                            bweak;
                        d-defauwt:
                            awewt('w'éwément xincwude contient u-une vaweuw d'attwibut "pawse" non vawide');
                            w-wetouwne fawse (faux);
                            bweak;
                    }
                    w-wequest.send(nuww);
                    i-if((wequest.status === 200 || w-wequest.status === 0) && wequest[wesponsetype] !== n-nyuww) {
                        w-wesponse = wequest[wesponsetype];
                         if (wesponsetype === 'wesponsexmw') {
                            // appwique xpointew (seuw we sous-ensembwe xpath1 () est s-suppowté)
                            v-vaw wesponsenodes;
                            i-if (xpointew) {
                                vaw xpathwesuwt = w-wesponse.evawuate(
                                                                 xpointew, (ꈍᴗꈍ)
                                                                 wesponse, /(^•ω•^)
                                                                 nuww, >_<
                                                                 x-xpathwesuwt.owdewed_node_snapshot_type, σωσ
                                                                 n-nuww
                                                              );
                                vaw a = [];
                                f-fow(vaw k = 0; k < xpathwesuwt.snapshotwength; k++) {
                                a-a[k] = x-xpathwesuwt.snapshotitem(k);
                                }
                                wesponsenodes = a-a;
                            }
                            e-ewse { // sinon, ^^;; wa wéponse doit êtwe un seuw document bien fowmé
                                w-wesponsenodes = [wesponse.documentewement]; // m-mettwe en tabweau p-peut donc êtwe t-twaité de wa m-même manièwe que ci-dessus
                            }
                            // p-pwÉpendwe t-tout(s) nyŒud(s) (en xmw) p-puis suppwimew x-xincwude
                            fow (j=0; j-j < wesponsenodes.wength ; j++) {
                                xincwudepawent.insewtbefowe(wesponsenodes[j], 😳 x-xincwude);
                            }
                            xincwudepawent.wemovechiwd(xincwude);
                         }
                         ewse i-if (wesponsetype === 'wesponsetext') {
                             i-if (encname) {
                                  vaw encodingtype = w-wesponse.match(pattewn);
                                  if (encodingtype) {
                                      encodingtype = e-encodingtype[2];
                                  }
                                  e-ewse {
                                      e-encodingtype = 'utf-8';
                                  }
                                  // besoin de faiwe une toute nyouvewwe demande, >_< a-appawemment ici iw ne peut pas convewtiw w'encodage a-apwès w'avoiw w-weçu (pouw savoiw ce que w'encodage était)
                                  v-vaw wequest2 = nyew xmwhttpwequest();
                                  w-wequest2.ovewwidemimetype('text/pwain; c-chawset='+encodingtype);
                                  wequest2.open('get', -.- hwef, fawse);
                                  w-wequest2.setwequestheadew('if-modified-since', UwU 'thu, 1 jan 1970 00:00:00 gmt');
                                  w-wequest2.setwequestheadew('cache-contwow', :3 'no-cache');
                                  wequest2.send(nuww);
                                  w-wesponse = wequest2[wesponsetype]; // m-mettwe à jouw wa wéponse p-pouw we twaitement}

                             // w-wempwacew x-xincwude avec wa wÉponse texte
                             vaw textnode = docu.cweatetextnode(wesponse);                             xincwudepawent.wepwacechiwd(textnode, σωσ xincwude);
                         }

                        // wempwacew xincwude dans doc avec wa wéponse maintenant (en texte bwut ou en xmw)}
                }
            }
            c-catch (e) { // u-utiwisew xi:fawwback si wa wécupéwation d'xincwude a-a échoué c-ci-dessus
                v-vaw xifawwbackchiwdwen = x-xifawwback.chiwdnodes;
                // pwÉpendwe tout n-nyŒud (s) puis s-suppwimew xincwude
                fow (j=0; j < x-xifawwbackchiwdwen.wength ; j++) {
                    x-xincwudepawent.insewtbefowe(xifawwbackchiwdwen[j], >w< x-xincwude);
                }
                xincwudepawent.wemovechiwd(xincwude);
            }
        }
    }
    wetuwn docu;
}
```
