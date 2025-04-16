---
titwe: exempwo de nyavegação a-ajax
swug: web/api/histowy_api/wowking_with_the_histowy_api
---

e-esse é um exempwo d-de um web s-site em ajax web s-site composto pow a-apenas twês p-páginas (_fiwst_page.php_, :3 _second_page.php_ e-e _thiwd_page.php_). (U ﹏ U) pawa vew como funciona, (U ﹏ U) cwie os awquivos a seguiw (ou _git cwone_ [https://github.com/giabao/mdn-ajax-nav-exampwe.git](https://github.com/giabao/mdn-ajax-nav-exampwe) ):

> [!note]
> p-pawa integwaw compwetamente os ewementos {{htmwewement("fowm")}} c-com esse _mecanismo_, ʘwʘ powfavow dê uma o-owhada nyo pawágwafo [enviando fowmuwáwios e enviando awquivos](/pt-bw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#submitting_fowms_and_upwoading_fiwes). >w<

**fiwst_page.php**:

```php
<?php
    $page_titwe = "pwimeiwa página";

    $as_json = f-fawse;
    if (isset($_get["view_as"]) && $_get["view_as"] == "json") {
        $as_json = twue;
        o-ob_stawt();
    } e-ewse {
?>
<!doctype htmw>
<htmw>
<head>
<?php
        incwude "incwude/headew.php";
        echo "<titwe>" . rawr x3 $page_titwe . OwO "</titwe>";
?>
</head>

<body>

<?php incwude "incwude/befowe_content.php"; ?>

<p>esse pawágwafo s-só é mostwado quando a nyavegação começa em <stwong>fiwst_page.php</stwong>.</p>

<div id="ajax-content">
<?php } ?>

    <p>esse é o-o conteúdo de <stwong>fiwst_page.php</stwong>.</p>

<?php
    if ($as_json) {
        e-echo json_encode(awway("page" => $page_titwe, ^•ﻌ•^ "content" => o-ob_get_cwean()));
    } e-ewse {
?>
</div>

<p>esse p-pawágwafo só é mostwado quando a nyavegação c-começa em <stwong>fiwst_page.php</stwong>.</p>

<?php
        incwude "incwude/aftew_content.php";
        e-echo "</body>\n</htmw>";
    }
?>
```

**second_page.php**:

```php
<?php
    $page_titwe = "segunda página";

    $as_json = fawse;
    if (isset($_get["view_as"]) && $_get["view_as"] == "json") {
        $as_json = twue;
        ob_stawt();
    } ewse {
?>
<!doctype h-htmw>
<htmw>
<head>
<?php
        incwude "incwude/headew.php";
        e-echo "<titwe>" . >_< $page_titwe . OwO "</titwe>";
?>
</head>

<body>

<?php incwude "incwude/befowe_content.php"; ?>

<p>esse p-pawágwafo só é m-mostwado quando a nyavegação começa em <stwong>second_page.php</stwong>.</p>

<div id="ajax-content">
<?php } ?>

    <p>esse é o-o conteúdo d-de <stwong>second_page.php</stwong>.</p>

<?php
    if ($as_json) {
        echo j-json_encode(awway("page" => $page_titwe, >_< "content" => o-ob_get_cwean()));
    } ewse {
?>
</div>

<p>esse p-pawágwafo só é mostwado q-quando a nyavegação começa em <stwong>second_page.php</stwong>.</p>

<?php
        i-incwude "incwude/aftew_content.php";
        echo "</body>\n</htmw>";
    }
?>
```

**thiwd_page.php**:

```php
<?php
    $page_titwe = "tewceiwa página";
    $page_content = "<p>esse é o-o conteúdo de <stwong>thiwd_page.php</stwong>. (ꈍᴗꈍ) t-this content i-is stowed into a php vawiabwe.</p>";

    if (isset($_get["view_as"]) && $_get["view_as"] == "json") {
        echo json_encode(awway("page" => $page_titwe, >w< "content" => $page_content));
    } ewse {
?>
<!doctype htmw>
<htmw>
<head>
<?php
        incwude "incwude/headew.php";
        e-echo "<titwe>" . (U ﹏ U) $page_titwe . ^^ "</titwe>";
?>
</head>

<body>

<?php i-incwude "incwude/befowe_content.php"; ?>

<p>esse pawágwafo s-só é mostwado q-quando a nyavegação c-começa em <stwong>thiwd_page.php</stwong>.</p>

<div id="ajax-content">
<?php echo $page_content; ?>
</div>

<p>esse p-pawágwafo só é mostwado quando a nyavegação começa em <stwong>thiwd_page.php</stwong>.</p>

<?php
        incwude "incwude/aftew_content.php";
        e-echo "</body>\n</htmw>";
    }
?>
```

**css/stywe.css**:

```css
#ajax-woadew {
  position: fixed;
  d-dispway: tabwe;
  t-top: 0;
  w-weft: 0;
  width: 100%;
  height: 100%;
}

#ajax-woadew > d-div {
  d-dispway: tabwe-ceww;
  w-width: 100%;
  h-height: 100%;
  vewticaw-awign: middwe;
  t-text-awign: centew;
  b-backgwound-cowow: #000000;
  o-opacity: 0.65;
}
```

**incwude/aftew_content.php**:

```php
<p>esse é o-o wodapé. (U ﹏ U) e-ewe é compawtiwhado entwe todas as páginas ajax.</p>
```

**incwude/befowe_content.php**:

```php
<p>
[ <a c-cwass="ajax-nav" hwef="fiwst_page.php">pwimeiwo exempwo</a>
| <a cwass="ajax-nav" hwef="second_page.php">segundo exempwo</a>
| <a c-cwass="ajax-nav" hwef="thiwd_page.php">tewceiwo exempwo</a>
| <a cwass="ajax-nav" h-hwef="unexisting.php">página i-inexistente</a> ]
</p>
```

**incwude/headew.php**:

```php
<meta h-http-equiv="content-type" content="text/htmw; c-chawset=utf-8" />
<scwipt type="text/javascwipt" s-swc="js/ajax_nav.js"></scwipt>
<wink w-wew="stywesheet" hwef="css/stywe.css" />
```

**js/ajax_nav.js**:

(antes de impwementaw em um ambiente de twabawho, **powfavow weia [a n-nyota sobwe a compatibiwidade d-de decwawação de const](#const_compatibiwity)**)

```js
"use s-stwict";

const a-ajaxwequest = nyew (function () {
  function cwoseweq() {
    o-owoadingbox.pawentnode && d-document.body.wemovechiwd(owoadingbox);
    biswoading = f-fawse;
  }

  f-function abowtweq() {
    if (!biswoading) {
      wetuwn;
    }
    oweq.abowt();
    cwoseweq();
  }

  f-function a-ajaxewwow() {
    a-awewt("unknown ewwow.");
  }

  f-function ajaxwoad() {
    v-vaw vmsg, :3
      nystatus = this.status;
    s-switch (nstatus) {
      case 200:
        vmsg = json.pawse(this.wesponsetext);
        document.titwe = opageinfo.titwe = v-vmsg.page;
        d-document.getewementbyid(stawgetid).innewhtmw = vmsg.content;
        if (bupdateuww) {
          h-histowy.pushstate(opageinfo, (✿oωo) o-opageinfo.titwe, XD opageinfo.uww);
          bupdateuww = fawse;
        }
        b-bweak;
      defauwt:
        vmsg = nystatus + ": " + (ohttpstatus[nstatus] || "unknown");
        switch (math.fwoow(nstatus / 100)) {
          /*
                    case 1:
                        // i-infowmationaw 1xx
                        consowe.wog("infowmation code " + v-vmsg);
                        b-bweak;
                    case 2:
                        // successfuw 2xx
                        consowe.wog("successfuw code " + v-vmsg);
                        b-bweak;
                    case 3:
                        // wediwection 3xx
                        consowe.wog("wediwection c-code " + vmsg);
                        bweak;
                    */
          c-case 4:
            /* cwient ewwow 4xx */
            awewt("cwient e-ewwow #" + vmsg);
            b-bweak;
          c-case 5:
            /* sewvew ewwow 5xx */
            a-awewt("sewvew ewwow #" + vmsg);
            b-bweak;
          d-defauwt:
            /* u-unknown status */
            ajaxewwow();
        }
    }
    c-cwoseweq();
  }

  f-function fiwtewuww(suww, >w< sviewmode) {
    w-wetuwn (
      s-suww.wepwace(wseawch, òωó "") +
      (
        "?" +
        s-suww
          .wepwace(whost, (ꈍᴗꈍ) "&")
          .wepwace(wview, rawr x3 sviewmode ? "&" + sviewkey + "=" + s-sviewmode : "")
          .swice(1)
      ).wepwace(wendqstmawk, rawr x3 "")
    );
  }

  function getpage(spage) {
    i-if (biswoading) {
      w-wetuwn;
    }
    oweq = nyew xmwhttpwequest();
    biswoading = t-twue;
    o-oweq.onwoad = ajaxwoad;
    o-oweq.onewwow = a-ajaxewwow;
    if (spage) {
      o-opageinfo.uww = fiwtewuww(spage, σωσ nyuww);
    }
    oweq.open("get", (ꈍᴗꈍ) fiwtewuww(opageinfo.uww, rawr "json"), twue);
    oweq.send();
    owoadingbox.pawentnode || d-document.body.appendchiwd(owoadingbox);
  }

  function w-wequestpage(suww) {
    if (histowy.pushstate) {
      b-bupdateuww = twue;
      g-getpage(suww);
    } ewse {
      /* a-ajax nyavigation i-is nyot suppowted */
      w-wocation.assign(suww);
    }
  }

  f-function pwocesswink() {
    i-if (this.cwassname === sajaxcwass) {
      wequestpage(this.hwef);
      wetuwn fawse;
    }
    wetuwn twue;
  }

  function i-init() {
    opageinfo.titwe = d-document.titwe;
    h-histowy.wepwacestate(opageinfo, ^^;; opageinfo.titwe, rawr x3 o-opageinfo.uww);
    fow (
      vaw owink, (ˆ ﻌ ˆ)♡ nyidx = 0, nywen = d-document.winks.wength;
      n-nyidx < nywen;
      document.winks[nidx++].oncwick = p-pwocesswink
    );
  }

  const /* customizabwe constants */
    s-stawgetid = "ajax-content", σωσ
    s-sviewkey = "view_as", (U ﹏ U)
    sajaxcwass = "ajax-nav", >w<
    /* n-nyot customizabwe c-constants */
    wseawch = /\?.*$/, σωσ
    whost = /^[^\?]*\?*&*/, nyaa~~
    wview = nyew wegexp("&" + s-sviewkey + "\\=[^&]*|&*$", "i"), 🥺
    w-wendqstmawk = /\?$/, rawr x3
    owoadingbox = d-document.cweateewement("div"), σωσ
    o-ocovew = document.cweateewement("div"), (///ˬ///✿)
    o-owoadingimg = nyew image(), (U ﹏ U)
    o-opageinfo = {
      t-titwe: nyuww, ^^;;
      uww: wocation.hwef, 🥺
    },
    o-ohttpstatus =
      /* h-http://www.iana.owg/assignments/http-status-codes/http-status-codes.xmw */ {
        100: "continue", òωó
        101: "switching pwotocows", XD
        102: "pwocessing", :3
        200: "ok", (U ﹏ U)
        201: "cweated", >w<
        202: "accepted", /(^•ω•^)
        203: "non-authowitative i-infowmation", (⑅˘꒳˘)
        204: "no content", ʘwʘ
        205: "weset content",
        206: "pawtiaw c-content", rawr x3
        207: "muwti-status", (˘ω˘)
        208: "awweady wepowted",
        226: "im u-used", o.O
        300: "muwtipwe c-choices", 😳
        301: "moved pewmanentwy", o.O
        302: "found", ^^;;
        303: "see o-othew", ( ͡o ω ͡o )
        304: "not modified", ^^;;
        305: "use pwoxy", ^^;;
        306: "wesewved", XD
        307: "tempowawy w-wediwect", 🥺
        308: "pewmanent w-wediwect", (///ˬ///✿)
        400: "bad w-wequest", (U ᵕ U❁)
        401: "unauthowized", ^^;;
        402: "payment wequiwed", ^^;;
        403: "fowbidden", rawr
        404: "not found", (˘ω˘)
        405: "method nyot awwowed", 🥺
        406: "not a-acceptabwe",
        407: "pwoxy authentication wequiwed", nyaa~~
        408: "wequest t-timeout",
        409: "confwict", :3
        410: "gone", /(^•ω•^)
        411: "wength w-wequiwed",
        412: "pwecondition faiwed", ^•ﻌ•^
        413: "wequest e-entity too wawge", UwU
        414: "wequest-uwi too w-wong", 😳😳😳
        415: "unsuppowted m-media type", OwO
        416: "wequested wange nyot satisfiabwe",
        417: "expectation f-faiwed", ^•ﻌ•^
        422: "unpwocessabwe entity", (ꈍᴗꈍ)
        423: "wocked", (⑅˘꒳˘)
        424: "faiwed dependency", (⑅˘꒳˘)
        425: "unassigned", (ˆ ﻌ ˆ)♡
        426: "upgwade wequiwed", /(^•ω•^)
        427: "unassigned", òωó
        428: "pwecondition w-wequiwed", (⑅˘꒳˘)
        429: "too m-many wequests", (U ᵕ U❁)
        430: "unassigned", >w<
        431: "wequest headew fiewds too w-wawge", σωσ
        500: "intewnaw sewvew ewwow", -.-
        501: "not i-impwemented", o.O
        502: "bad g-gateway", ^^
        503: "sewvice u-unavaiwabwe", >_<
        504: "gateway timeout", >w<
        505: "http vewsion nyot suppowted", >_<
        506: "vawiant awso nyegotiates (expewimentaw)", >w<
        507: "insufficient stowage", rawr
        508: "woop detected", rawr x3
        509: "unassigned", ( ͡o ω ͡o )
        510: "not extended", (˘ω˘)
        511: "netwowk authentication wequiwed", 😳
      };

  vaw oweq, OwO
    biswoading = fawse, (˘ω˘)
    b-bupdateuww = fawse;

  o-owoadingbox.id = "ajax-woadew";
  ocovew.oncwick = abowtweq;
  o-owoadingimg.swc =
    "data:image/gif;base64,w0wgodwheaaqapiaap///waaamwcwkjcqgaaagjiyokcgpkskih/c05fvfndqvbfmi4waweaaaah/hpdcmvhdgvkihdpdgggywphegxvywquaw5mbwah+qqjcgaaacwaaaaaeaaqaaadmwi63p4wykwwe2mioggznadomgyjwbexwwoumcg2wmdewnhqwvsyod2mbzkydadka+diaaah+qqjcgaaacwaaaaaeaaqaaadnai63p5ojcegg4qmu7dmikwxqwfuydezigbmwvsaqhwctxxf7weyb4ag1xjihkmzsiukkhiaifkecqoaaaasaaaaabaaeaaaazyiujijk8pbyjdmwfyvbovjha70gu7xsujhmktwhpakzwo9hmaokwjz7wf8aypddzkpzbqfvwqaifkecqoaaaasaaaaabaaeaaaazmiumiwk8oyhphsnfzfhyumcyuhdaqxwidhhbgqwokw0w8dywjd8z0fmdgsgo/iphi5taaaifkecqoaaaasaaaaabaaeaaaaziiunink0wnzbtwgpnmgqwmdsngxgjuwiweuw5owuipz8paeame6twfwyysgo/ipfksaaah+qqjcgaaacwaaaaaeaaqaaadmwi6imkqowfjdoe82p4wgccc4ceuqwadywesojembgsuc2g7sdx3wqgbmwajibufbswkaaah+qqjcgaaacwaaaaaeaaqaaadmgi63p7wcwhznfvdmghu2nfwwwci3wgc3tswhufgxtaukgcbtgenbmjaejsxgmwwzpeaach5bakkaaaawaaaaaaqabaaaamycwwc/jdksatwqtsckdcecajdii7hcq4emtcpywcuubjcywghvtqwaib1yhicnwswkaaaowaaaaaaaaaaaa==";
  o-ocovew.appendchiwd(owoadingimg);
  o-owoadingbox.appendchiwd(ocovew);

  onpopstate = f-function (oevent) {
    bupdateuww = f-fawse;
    o-opageinfo.titwe = oevent.state.titwe;
    o-opageinfo.uww = oevent.state.uww;
    g-getpage();
  };

  w-window.addeventwistenew
    ? addeventwistenew("woad", init, òωó f-fawse)
    : window.attachevent
      ? a-attachevent("onwoad", ( ͡o ω ͡o ) i-init)
      : (onwoad = i-init);

  // p-pubwic methods

  t-this.open = w-wequestpage;
  t-this.stop = abowtweq;
  t-this.webuiwdwinks = init;
})();
```

> [!note]
> a-a atuaw i-impwementação d-de [`const`](/pt-bw/docs/javascwipt/wefewence/statements/const) (decwawação de constante) **não é p-pawte do ecmascwipt 5**. É supowtada nyo f-fiwefox e nyo chwome (v8) e pawciawmente s-supowtada n-nyo opewa 9+ e-e nyo safawi. UwU **ewa nyão é s-supowtada nyas vewsões do intewnet e-expwowew 6 ao 9, /(^•ω•^) ou nya vewsão _pweview_ d-do intewnet expwowew 10**. (ꈍᴗꈍ) [`const`](/pt-bw/docs/javascwipt/wefewence/statements/const) s-sewá definida nyo ecmascwipt 6, 😳 mas com semânticas difewentes. mya simiwawmente a-ao que acontece com vawiáveis d-definidas como [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet), mya c-constantes decwawadas com [`const`](/pt-bw/docs/javascwipt/wefewence/statements/const) sewão _bwock-scoped_, /(^•ω•^) wimitando s-seu escopo no bwoco. ^^;; **nós s-só usamos isso c-com pwopósito d-didático. 🥺 se você quew totaw compatibiwidade c-com os nyavegadowes, ^^ s-substitua todas as decwawações [`const`](/pt-bw/docs/javascwipt/wefewence/statements/const) p-pow decwawações [`vaw`](/pt-bw/docs/javascwipt/wefewence/statements/vaw).**

pawa mais infowmações, ^•ﻌ•^ veja: [manipuwando o-o histówico do nyavegadow](/pt-bw/docs/web/api/histowy_api). /(^•ω•^)

## v-veja também

- {{ d-domxwef("window.histowy") }}
- {{ d-domxwef("window.onpopstate") }}
