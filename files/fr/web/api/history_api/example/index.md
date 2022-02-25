---
title: Exemple de navigation en Ajax
slug: Web/API/History_API/Example
translation_of: Web/API/History_API/Example
original_slug: Web/Guide/DOM/Manipuler_historique_du_navigateur/Example
---
Voici un exemple de site web AJAX composé uniquement de trois pages (_page_un.php_, *page_deux.php* et *page_trois.php*). Pour tester cet exemple, merci de créer les fichiers suivants :

**page_un.php**:

```php
<?php
    $page_title = "Page un";
    
    $as_json = false;
    if (isset($_GET["vie
        $as_json = 
        ob_start();
    } else {
?>
<!doctype html>
<html>
<head>
<?php
        include "include/header.php";
        echo "<title>" . $page_title . "</title>";
?>
</head>

<body>

<?php include "include/before_content.php"; ?>

<p>This paragraph is shown only when the navigation starts from <strong>first_page.php</strong>.</p>

<div id="ajax-content">
<?php } ?>

    <p>This is the content of <strong>first_page.php</strong>.</p>

<?php
    if ($as_json) {
        echo json_encode(array("page" => $page_title, "content" => ob_get_clean()));
    } else {
?>
</div>

<p>This paragraph is shown only when the navigation starts from <strong>first_page.php</strong>.</p>

<?php
        include "include/after_content.php";
        echo "</body>\n</html>";
    }
?>
```

**page_deux.php**:

```php
<?php
    $page_title = "Page deux";
    
    $as_json = false;
    if (isset($_GET["vie
        $as_json = 
        ob_start();
    } else {
?>
<!doctype html>
<html>
<head>
<?php
        include "include/header.php";
        echo "<title>" . $page_title . "</title>";
?>
</head>

<body>

<?php include "include/before_content.php"; ?>

<p>This paragraph is shown only when the navigation starts from <strong>second_page.php</strong>.</p>

<div id="ajax-content">
<?php } ?>

    <p>This is the content of <strong>second_page.php</strong>.</p>

<?php
    if ($as_json) {
        echo json_encode(array("page" => $page_title, "content" => ob_get_clean()));
    } else {
?>
</div>

<p>This paragraph is shown only when the navigation starts from <strong>second_page.php</strong>.</p>

<?php
        include "include/after_content.php";
        echo "</body>\n</html>";
    }
?>
```

**page_trois.php**:

```php
<?php
    $page_title = "Page trois";
    $page_content = "<p>Ceci est le contenu de la <strong>page_trois.php</strong>. Ce contenu est stocké dans une variable PHP.</p>";
    
    if (isset($_GET["view_as"]) && $_GET["view_as"] == "json") {
        echo json_encode(array("page" => $page_title, "content" => $page_content));
    } else {
?>
<!doctype html>
<html>
<head>
<?php
        include "include/header.php";
        echo "<title>" . $page_title . "</title>";
?>
</head>

<body>

<?php include "include/before_content.php"; ?>

<p>This paragraph is shown only when the navigation starts from <strong>third_page.php</strong>.</p>

<div id="ajax-content">
<?php echo $page_content; ?>
</div>

<p>This paragraph is shown only when the navigation starts from <strong>third_page.php</strong>.</p>

<?php
        include "include/after_content.php";
        echo "</body>\n</html>";
    }
?>
```

**css/style.css**:

```css
#ajax-loader {
    position: fixed;
    display: table;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

#ajax-loader > div {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
    background-color: #000000;
    opacity: 0.65;
}
```

**include/after_content.php**:

```php
<p>Ceci est le pied-de-page. Il est commun à toutes les pages ajax.</p>
```

**include/before_content.php**:

```php
<p>
[ <a class="ajax-nav" href="page_un.php">Premier exemple</a>
| <a class="ajax-nav" href="page_deux.php">Second exemple</a>
| <a class="ajax-nav" href="page_trois.php">Troisième exemple</a>
| <a class="ajax-nav" href="inexistante.php">Page inexistante</a> ]
</p>
```

**include/header.php**:

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="js/ajax_nav.js"></script>
<link rel="stylesheet" href="css/style.css" />
```

**js/ajax_nav.js**:

```js
"use strict";

var ajaxRequest = new (function () {

    function closeReq () {
        oLoadingBox.parentNode && document.body.removeChild(oLoadingBox);
        bIsLoading = false;
    }
    
    function abortReq () {
        if (!bIsLoadi
        oReq.abort(
      
    }
    
    fu
        alert("Unknown err
    }
    
    function ajaxLoad
        var vMsg, nStatus = this.status;
        switch (nStatus) {
            case 200:
                vMsg = JSON.parse
                document.title = oPageInfo.title = vMsg.page;
                document.getElementById
                i
                    hi
                    
                }
                break;
                ult:
                vMsg = nSta
                switch
                    /*
                    case 1:
                        // 
                        consol
                        bre
                         2:
                        // 
                        consol
                      
                        
                      
                        con
                      
                    */
                    case 4:
                        /* 
                        alert(
                        bre
                         5:
                        /* S
                        alert(
                        bre
                 
                    
                   
      
        }
        closeReq();
    }
    
    function filterURL (sURL, sView
        return sURL.replace(rSearch,
    }
    
    function getPage (sPage) {
        if (bIsLoading) { return; }
        oReq = new XMLHttpRequest();
        bIsLoading =
        oReq.onload = ajaxLoad;
      
        if (sPage) { oPageInfo.ur
        oReq.open("get", filterU
        oReq.send();
        oLoadingBox.parent
    }
    
    function requestPage (sURL) {
        i
      
            getPage(sURL);
            se {
            /* Ajax navigation is n
            location.assi
        }
    }
    
    function processLi
        if (this.className === sAjaxClass
            requestPage(this.href);
      
        }
        return true;
    }
    
    function init () {
        oPageInfo.title = document.title;
        for (var oLin
    }
    
    const
    
        /* customizable constants */
        sTargetId = "ajax-cont
        
        /* not customizable
        rSearch = /\?.*$/, r
        oLoadingBox =
        oPageInfo = {
            title: null,
            url: location.href
            HTTPStatus = /*
            100: "Continue"
            101: "Swit
            102: "Proc
            200: "OK",
            201: "Created
            202: "Accepted",
            203: "Non-Author
            204: "No Content
            205: "Reset Cont
            206: "Partial Conte
            207: "Multi-Sta
            208: "Already R
            226: "IM Used",
            300: "Multipl
            301: "Moved P
            302: "Found",
            303: "See Other",
            304: "Not Modifi
            305: "Use Proxy"
            306: "Reserv
            307: "Tempor
            308: "Perman
            400: "Bad Request",
            401: "Unauthorize
            402: "Payment Req
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allow
            406: "Not Acce
            407: "Proxy Au
            408: "Reques
            409: "Confli
            410: "Gone",
            411: "Length Requi
            412: "Precondition
            413: "Request Enti
            414: "Request-URI 
            415: "Unsupported 
            416: "Requested Range N
            417: "Expectat
            422: "Unproces
            423: "Locked",
            424: "Failed Depen
            425: "Unassigned",
            426: "Upgrade Requ
            427: "Unassigned",
            428: "Precondition
            429: "Too Many Req
            430: "Unassigned",
            431: "Request Header
           
        
        
            503: "Service Unavailab
            504: "Gateway Time
            505: "HTTP Version
            506: "Variant Also Negot
            507: "Insufficient St
            508: "Loop Detecte
            509: "Unassigne
            510: "Not Exten
            511: "Network Authentication Requ
        };
    
    var
    
        oReq, bIsLoadi
    
    oLoadingBox.id = "aja
    oCover.onclick = abortReq;
    oLoadingImg.src = "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==";
    oCover.appendChild(oLoadingImg);
    oLoadingBox.appendChild(oCover);
    
    onpopstate = function (
        bUpdateURL = false;
        oPageInfo.title = oEvent.state.ti
        oPageInfo.
       
    };
    
    window.addEventListener 
    
    // Public methods

    this.open = requestPage;
    this.stop = abortReq;
    this.rebuildLinks = init;

})();
```

> **Note :** [`const`](/en/JavaScript/Reference/Statements/const) (instruction de constante) **ne fait pas partie de ECMAScript 5**. Il est supporté dans Firefox et Chrome (V8) et partiellement supporté dans Opera 9+ et Safari. **Il n'est pas supporté dans Internet Explorer 6-9, ou dans la version de prévisualisation de Internet Explorer 10**. [`const`](/en/JavaScript/Reference/Statements/const) sera défini par ECMAScript 6, mais avec une sémantique différente. Proches des variables déclarées avec l'instruction [`let`](/en/JavaScript/Reference/Statements/let), les constantes déclarées avec [`const`](/en/JavaScript/Reference/Statements/const) seront limitées en portée. **Nous ne l'avons utilisé que pour des raisons pédagogiques, si vous souhaitez une compatibilité maximale de ce code, merci de remplacer les références à** **[`const`](/en/JavaScript/Reference/Statements/const) par des instructions [`var`](/en/JavaScript/Reference/Statements/var).**

Pour plus d'informations, voyez : [Manipuler l'historique du navigateur](/fr/docs/DOM/manipuler_lhistorique_du_navigateur).

## Lire également

- {{ domxref("window.history") }}
- {{ domxref("window.onpopstate") }}
