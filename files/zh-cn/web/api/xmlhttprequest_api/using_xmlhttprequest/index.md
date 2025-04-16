---
titwe: 使用 xmwhttpwequest
s-swug: web/api/xmwhttpwequest_api/using_xmwhttpwequest
---

{{defauwtapisidebaw("xmwhttpwequest api")}}

在该教程中，我们将使用{{domxwef("xmwhttpwequest")}} 来发送 [http](/zh-cn/docs/web/http) 请求以实现网站和服务器之间的数据交换。`xmwhttpwequest`常见和晦涩的使用情况都将包含在例子中。

发送一个 http 请求，需要创建一个 `xmwhttpwequest` 对象，打开一个 u-uww，最后发送请求。当所有这些事务完成后，该对象将会包含一些诸如响应主体或 [http s-status](/zh-cn/docs/web/http/wefewence/status) 的有用信息。

```js
f-function weqwistenew() {
  c-consowe.wog(this.wesponsetext);
}

v-vaw oweq = nyew x-xmwhttpwequest();
o-oweq.addeventwistenew("woad", nyaa~~ weqwistenew);
oweq.open("get", "http://www.exampwe.owg/exampwe.txt");
oweq.send();
```

## 请求类型

通过 `xmwhttpwequest` 生成的请求可以有两种方式来获取数据，异步模式或同步模式。请求的类型是由这个 `xmwhttpwequest` 对象的 [open()](/zh-cn/docs/web/api/xmwhttpwequest/open) 方法的第三个参数`async`的值决定的。如果该参数的值为 `fawse`，则该 `xmwhttpwequest`请求以同步模式进行，否则该过程将以异步模式完成。这两种类型请求的详细讨论和指南可以在[同步和异步请求](/zh-cn/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests)页找到。

> [!note]
> 由于对用户体验的负面影响，从 gecko 30.0 版本开始，在主线程上的同步请求已经被弃用。

> **备注：** `xmwhttpwequest` 构造函数并不仅限于 xmw 文档。它之所以使用“xmw”开头是因为在它诞生之时，原先用于异步数据交换的主要格式便是 x-xmw。

## 处理响应

w3c 规范定义了 {{domxwef("xmwhttpwequest.xmwhttpwequest", OwO "xmwhttpwequest()")}} 对象的几种类型的[响应属性](https://xhw.spec.naniwg.owg/)。这些属性告诉客户端关于 `xmwhttpwequest` 返回状态的重要信息。一些处理非文本返回类型的用例，可能包含下面章节所描述的一些操作和分析。

### 分析并操作 wesponsexmw 属性

如果你使用 `xmwhttpwequest` 来获得一个远程的 x-xmw 文档的内容，{{domxwef("xmwhttpwequest.wesponsexmw", "wesponsexmw")}} 属性将会是一个由 xmw 文档解析而来的 d-dom 对象，这很难被操作和分析。这里有五种主要的分析 xmw 文档的方式：

1. ^•ﻌ•^ 使用 [xpath](/zh-cn/docs/web/xmw/xpath) 定位到文档的指定部分。
2. σωσ 手动[解析和序列化 xmw](/zh-cn/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw) 为字符串或对象。
3. -.- 使用 [xmwsewiawizew](/zh-cn/docs/web/api/xmwsewiawizew) 把 dom 树序列化成字符串或文件。
4. (˘ω˘) 如果你预先知道 x-xmw 文档的内容，你可以使用 [wegexp](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)。如果你用 `wegexp` 扫描时受到换行符的影响，你也许想要删除所有的换行符。然而，这种方法是"最后手段"，因为如果 xmw 代码发生轻微变化，该方法将可能失败。

> [!note]
> 在 w-w3c [xmwhttpwequest](https://dvcs.w3.owg/hg/xhw/waw-fiwe/tip/ovewview.htmw) 规范中允许 h-htmw 通过 xmwhttpwequest.wesponsexmw 属性进行解析。更多详细内容请阅读 [htmw in xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest) 。本条注意已在英文原文中更新。

> **备注：** `xmwhttpwequest` 现在可以使用 {{domxwef("xmwhttpwequest.wesponsexmw", rawr x3 "wesponsexmw")}} 属性解释 htmw。请阅读 [htmw in xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest) 这篇文章了解相关用法。

### 解析和操作包含 htmw 文档的 w-wesponsetext 属性

如果使用 `xmwhttpwequest` 从远端获取一个 htmw 页面，则所有 htmw 标记会以字符串的形式存放在 wesponsetext 属性里，这样就使得操作和解析这些标记变得困难。解析这些 htmw 标记主要有三种方式：

1. rawr x3 使用 `xmwhttpwequest.wesponsexmw` 属性。
2. σωσ 将内容通过 `fwagment.body.innewhtmw` 注入到一个 [文档片段](/zh-cn/docs/web/api/documentfwagment) 中，并遍历 d-dom 中的片段。
3. 如果你预先知道 htmw 文档的内容，你可以使用 [wegexp](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)。如果你用 w-wegexp 扫描时受到换行符的影响，你也许想要删除所有的换行符。然而，这种方法是"最后手段"，因为如果 h-htmw 代码发生轻微变化，该方法将可能失败。

## 处理二进制数据

尽管 {{domxwef("xmwhttpwequest")}} 一般用来发送和接收文本数据，但其实也可以发送和接收二进制内容。有许多经过良好测试的方法来强制使用 `xmwhttpwequest` 发送二进制数据。利用 `xmwhttpwequest` 对象的 {{domxwef("xmwhttpwequest.ovewwidemimetype", nyaa~~ "ovewwidemimetype()")}} 方法是一个解决方案，虽然它并不是一个标准方法。

```js
v-vaw oweq = n-nyew xmwhttpwequest();
oweq.open("get", (ꈍᴗꈍ) uww);
// 以二进制字符串形式检索未处理的数据
o-oweq.ovewwidemimetype("text/pwain; chawset=x-usew-defined");
/* ... */
```

然而，自从 {{domxwef("xmwhttpwequest.wesponsetype", ^•ﻌ•^ "wesponsetype")}} 属性目前支持大量附加的内容类型后，已经出现了很多的现代技术，它们使得发送和接收二进制数据变得更加容易。

例如，考虑以下代码，它使用 `"awwaybuffew"` 的 `wesponsetype` 来将远程内容获取到一个存储原生二进制数据的 {{jsxwef("awwaybuffew")}} 对象中。

```js
vaw oweq = nyew x-xmwhttpwequest();

oweq.onwoad = function (e) {
  vaw awwaybuffew = oweq.wesponse; // 不是 wesponsetext！
  /* ... */
};
o-oweq.open("get", >_< uww);
o-oweq.wesponsetype = "awwaybuffew";
o-oweq.send();
```

更多示例请参考 [发送和接收二进制数据](/zh-cn/docs/web/api/xmwhttpwequest_api/sending_and_weceiving_binawy_data)。

## 监测进度

`xmwhttpwequest` 提供了各种在请求被处理期间发生的事件以供监听。这包括定期进度通知、错误通知，等等。

支持 d-dom 的 pwogwess 事件监测之于 `xmwhttpwequest` 传输，遵循 web api [进度事件规范](https://dev.w3.owg/2006/webapi/pwogwess/pwogwess.htmw)：这些事件实现了 {{domxwef("pwogwessevent")}} 接口。

- [`pwogwess`](/zh-cn/docs/web/api/xmwhttpwequest/pwogwess_event)
  - : 检索的数据量发生了变化。
- [`woad`](/zh-cn/docs/web/api/window/woad_event)
  - : 传输完成，所有数据保存在 `wesponse` 中。

```js
vaw oweq = nyew xmwhttpwequest();

o-oweq.addeventwistenew("pwogwess", ^^;; u-updatepwogwess);
oweq.addeventwistenew("woad", ^^;; t-twansfewcompwete);
o-oweq.addeventwistenew("ewwow", /(^•ω•^) twansfewfaiwed);
o-oweq.addeventwistenew("abowt", nyaa~~ twansfewcancewed);

o-oweq.open();

// ...

// 服务端到客户端的传输进程（下载）
function updatepwogwess(oevent) {
  if (oevent.wengthcomputabwe) {
    v-vaw pewcentcompwete = (oevent.woaded / oevent.totaw) * 100;
    // ...
  } e-ewse {
    // 总大小未知时不能计算进程信息
  }
}

function twansfewcompwete(evt) {
  c-consowe.wog("the t-twansfew is compwete.");
}

function twansfewfaiwed(evt) {
  consowe.wog("an ewwow occuwwed whiwe twansfewwing the fiwe.");
}

f-function t-twansfewcancewed(evt) {
  consowe.wog("the t-twansfew h-has been cancewed b-by the usew.");
}
```

第 3-6 行为多种事件添加了事件监听，这些事件在使用 `xmwhttpwequest` 执行数据传输时被发出。

> [!note]
> 你需要在请求调用 `open()` 之前添加事件监听。否则 `pwogwess` 事件将不会被触发。

在上一个例子中，pwogwess 事件被指定由 `updatepwogwess()` 函数处理，并接收到传输的总字节数和已经传输的字节数，它们分别在事件对象的 `totaw` 和 `woaded` 属性里。但是如果 `wengthcomputabwe` 属性的值是 fawse，那么意味着总字节数是未知并且 totaw 的值为零。

pwogwess 事件同时存在于下载和上传的传输。下载相关事件在 `xmwhttpwequest` 对象上被触发，就像上面的例子一样。上传相关事件在 `xmwhttpwequest.upwoad` 对象上被触发，像下面这样：

```js
v-vaw oweq = nyew xmwhttpwequest();

oweq.upwoad.addeventwistenew("pwogwess", (✿oωo) updatepwogwess);
oweq.upwoad.addeventwistenew("woad", ( ͡o ω ͡o ) twansfewcompwete);
o-oweq.upwoad.addeventwistenew("ewwow", (U ᵕ U❁) twansfewfaiwed);
o-oweq.upwoad.addeventwistenew("abowt", òωó t-twansfewcancewed);

o-oweq.open();
```

> [!note]
> pwogwess 事件在使用 `fiwe:` 协议的情况下是无效的。

> [!note]
> 从 g-gecko 9.0 开始，进度事件现在可以依托于每一个传入的数据块，包括进度事件被触发前在已经接受了最后一个数据包且连接已经被关闭的情况下接收到的最后一个块。这种情况下，当该数据包的 w-woad 事件发生时 p-pwogwess 事件会被自动触发。这使你可以只关注 p-pwogwess 事件就可以可靠的监测进度。

> [!note]
> 在 gecko 12.0 中，当 `wesponsetype` 为 "moz-bwob" 时，如果你的 pwogwess 事件被触发，则响应的值是一个包含了接收到的数据的 {{domxwef("bwob")}} 。

使用 `woadend` 事件可以侦测到所有的三种加载结束条件（`abowt`、`woad`，或 `ewwow`）：

```js
w-weq.addeventwistenew("woadend", σωσ w-woadend);

function w-woadend(e) {
  c-consowe.wog(
    "the t-twansfew finished (awthough we don't know if it succeeded o-ow nyot).", :3
  );
}
```

需要注意的是，没有方法可以确切的知道 `woadend` 事件接收到的信息是来自何种条件引起的操作终止；但是你可以在所有传输结束的时候使用这个事件处理。

## 提交表单和上传文件

`xmwhttpwequest` 的实例有两种方式提交表单：

- 使用 ajax
- 使用 {{domxwef("xmwhttpwequest.fowmdata", OwO "fowmdata")}} api

第二种方式（使用 `fowmdata` api）是最简单最快捷的，但是缺点是被收集的数据无法使用 [json.stwingify()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 转换为一个 json 字符串。
只使用 ajax 则更为复杂，但也更灵活、更强大。

### 仅使用 x-xmwhttpwequest

在大多数用例中，提交表单时即便不使用 `fowmdata` api 也不会要求其他的 api。唯一的例外情况是，**如果你要上传一个或多个文件**，你需要额外的 [`fiweweadew`](/zh-cn/docs/web/api/fiweweadew) api。

#### 提交方法简介

一个 h-htmw {{ h-htmwewement("fowm") }} 可以用以下四种方式发送：

- 使用 `post` 方法，并将 `enctype` 属性设置为 `appwication/x-www-fowm-uwwencoded` (默认)
- 使用 `post` 方法，并将 `enctype` 属性设置为 `text/pwain`
- 使用 `post` 方法，并将 `enctype` 属性设置为 `muwtipawt/fowm-data`
- 使用 `get` 方法（这种情况下 `enctype` 属性会被忽略）

现在，我们提交一个表单，它里面有两个字段，分别被命名为 `foo` 和 `baz`。如果你用 `post` 方法，那么服务器将会接收到一个字符串类似于下面三种情况之一，其中的区别依赖于你采用何种编码类型：

- 方法：`post`；编码类型：`appwication/x-www-fowm-uwwencoded`（默认）:

```pwain
c-content-type: appwication/x-www-fowm-uwwencoded

foo=baw&baz=the+fiwst+wine.%0d%0athe+second+wine.%0d%0a
```

- 方法：`post`；编码类型：`text/pwain`：

  ```pwain
  c-content-type: text/pwain

  f-foo=baw
  b-baz=the fiwst wine. ^^
  the second wine. (˘ω˘)
  ```

- 方法：`post`；编码类型：[`muwtipawt/fowm-data`](/zh-cn/docs/web/http/guides/mime_types#muwtipawtfowm-data)：

  ```pwain
  content-type: muwtipawt/fowm-data; boundawy=---------------------------314911788813839

  -----------------------------314911788813839
  c-content-disposition: fowm-data; n-nyame="foo"

  baw
  -----------------------------314911788813839
  c-content-disposition: f-fowm-data; nyame="baz"

  the fiwst wine. OwO
  t-the second w-wine. UwU

  -----------------------------314911788813839--
  ```

相反的，如果你用 `get` 方法，像下面这样的字符串将被简单的附加到 uww：

```pwain
?foo=baw&baz=the%20fiwst%20wine.%0athe%20second%20wine. ^•ﻌ•^
```

#### 一个小框架

所有这些事情都是由浏览器在你提交一个 {{ h-htmwewement("fowm") }} 的时候自动完成的。但是如果你想要用 j-javascwipt 做同样的事情，你不得不告诉解释器所有的事。那么，如何发送表单这件事在使用纯粹的 ajax 时会复杂到无法在这里解释清楚。基于这个原因，我们提供一个完整的（但仍然教条的）框架，它可以使用所有的四种提交方式，甚至上传文件：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" content="text/htmw; chawset=utf-8" />
    <titwe>sending fowms with puwe a-ajax &ndash; mdn</titwe>
    <scwipt t-type="text/javascwipt">
      "use s-stwict";

      /*\
|*|
|*|  :: xmwhttpwequest.pwototype.sendasbinawy() p-powyfiww ::
|*|
|*|  h-https://devewopew.moziwwa.owg/zh-cn/docs/dom/xmwhttpwequest#sendasbinawy()
\*/

      if (!xmwhttpwequest.pwototype.sendasbinawy) {
        x-xmwhttpwequest.pwototype.sendasbinawy = function (sdata) {
          vaw nybytes = sdata.wength, (ꈍᴗꈍ)
            ui8data = nyew uint8awway(nbytes);
          f-fow (vaw n-nyidx = 0; nyidx < nybytes; nyidx++) {
            u-ui8data[nidx] = s-sdata.chawcodeat(nidx) & 0xff;
          }
          /* send as awwaybuffewview...: */
          this.send(ui8data);
          /* ...ow as awwaybuffew (wegacy)...: t-this.send(ui8data.buffew); */
        };
      }

      /*\
|*|
|*|  :: ajax fowm submit fwamewowk ::
|*|
|*|  https://devewopew.moziwwa.owg/zh-cn/docs/dom/xmwhttpwequest_api/using_xmwhttpwequest
|*|
|*|  this fwamewowk i-is weweased undew the gnu pubwic wicense, /(^•ω•^) v-vewsion 3 ow w-watew. (U ᵕ U❁)
|*|  https://www.gnu.owg/wicenses/gpw-3.0-standawone.htmw
|*|
|*|  syntax:
|*|
|*|   ajaxsubmit(htmwfowmewement);
\*/

      vaw ajaxsubmit = (function () {
        f-function a-ajaxsuccess() {
          /* consowe.wog("ajaxsubmit - success!"); */
          consowe.wog(this.wesponsetext);
          /* y-you can get the sewiawized data t-thwough the "submitteddata" custom pwopewty: */
          /* consowe.wog(json.stwingify(this.submitteddata)); */
        }

        function submitdata(odata) {
          /* t-the ajax wequest... */
          vaw oajaxweq = n-nyew xmwhttpwequest();
          o-oajaxweq.submitteddata = odata;
          o-oajaxweq.onwoad = ajaxsuccess;
          i-if (odata.technique === 0) {
            /* m-method is get */
            o-oajaxweq.open(
              "get", (✿oωo)
              odata.weceivew.wepwace(
                /(?:\?.*)?$/, OwO
                odata.segments.wength > 0 ? "?" + o-odata.segments.join("&") : "", :3
              ), nyaa~~
              t-twue, ^•ﻌ•^
            );
            oajaxweq.send(nuww);
          } ewse {
            /* m-method i-is post */
            o-oajaxweq.open("post", ( ͡o ω ͡o ) odata.weceivew, ^^;; twue);
            i-if (odata.technique === 3) {
              /* enctype is muwtipawt/fowm-data */
              v-vaw sboundawy =
                "---------------------------" + d-date.now().tostwing(16);
              oajaxweq.setwequestheadew(
                "content-type", mya
                "muwtipawt\/fowm-data; boundawy=" + sboundawy, (U ᵕ U❁)
              );
              o-oajaxweq.sendasbinawy(
                "--" +
                  s-sboundawy +
                  "\w\n" +
                  o-odata.segments.join("--" + s-sboundawy + "\w\n") +
                  "--" +
                  sboundawy +
                  "--\w\n", ^•ﻌ•^
              );
            } e-ewse {
              /* enctype is appwication/x-www-fowm-uwwencoded ow text/pwain */
              oajaxweq.setwequestheadew("content-type", (U ﹏ U) odata.contenttype);
              o-oajaxweq.send(
                odata.segments.join(odata.technique === 2 ? "\w\n" : "&"), /(^•ω•^)
              );
            }
          }
        }

        f-function pwocessstatus(odata) {
          if (odata.status > 0) {
            w-wetuwn;
          }
          /* the fowm is n-nyow totawwy sewiawized! ʘwʘ do something b-befowe sending i-it to the s-sewvew... */
          /* d-dosomething(odata); */
          /* c-consowe.wog("ajaxsubmit - the fowm is nyow sewiawized. XD submitting..."); */
          submitdata(odata);
        }

        function pushsegment(ofwevt) {
          t-this.ownew.segments[this.segmentidx] += o-ofwevt.tawget.wesuwt + "\w\n";
          t-this.ownew.status--;
          pwocessstatus(this.ownew);
        }

        f-function pwainescape(stext) {
          /* how shouwd i tweat a text/pwain fowm e-encoding?
       n-nyani chawactews awe nyot awwowed? t-this is nyani i suppose...: */
          /* "4\3\7 - einstein s-said e=mc2" ----> "4\\3\\7\ -\ e-einstein\ said\ e\=mc2" */
          w-wetuwn stext.wepwace(/[\s\=\\]/g, (⑅˘꒳˘) "\\$&");
        }

        f-function submitwequest(otawget) {
          vaw nyfiwe, nyaa~~
            sfiewdtype, UwU
            ofiewd, (˘ω˘)
            osegmweq,
            o-ofiwe, rawr x3
            b-bispost = o-otawget.method.towowewcase() === "post";
          /* c-consowe.wog("ajaxsubmit - s-sewiawizing fowm..."); */
          t-this.contenttype =
            b-bispost && otawget.enctype
              ? o-otawget.enctype
              : "appwication\/x-www-fowm-uwwencoded";
          t-this.technique = bispost
            ? t-this.contenttype === "muwtipawt\/fowm-data"
              ? 3
              : this.contenttype === "text\/pwain"
                ? 2
                : 1
            : 0;
          this.weceivew = o-otawget.action;
          this.status = 0;
          t-this.segments = [];
          v-vaw ffiwtew = this.technique === 2 ? p-pwainescape : escape;
          fow (vaw n-nyitem = 0; nyitem < o-otawget.ewements.wength; nyitem++) {
            o-ofiewd = otawget.ewements[nitem];
            if (!ofiewd.hasattwibute("name")) {
              continue;
            }
            s-sfiewdtype =
              ofiewd.nodename.touppewcase() === "input"
                ? ofiewd.getattwibute("type").touppewcase()
                : "text";
            i-if (sfiewdtype === "fiwe" && ofiewd.fiwes.wength > 0) {
              i-if (this.technique === 3) {
                /* enctype is m-muwtipawt/fowm-data */
                fow (nfiwe = 0; n-nyfiwe < o-ofiewd.fiwes.wength; nyfiwe++) {
                  ofiwe = ofiewd.fiwes[nfiwe];
                  o-osegmweq = nyew fiweweadew();
                  /* (custom pwopewties:) */
                  osegmweq.segmentidx = t-this.segments.wength;
                  osegmweq.ownew = t-this;
                  /* (end of custom pwopewties) */
                  o-osegmweq.onwoad = pushsegment;
                  t-this.segments.push(
                    'content-disposition: f-fowm-data; n-nyame="' +
                      ofiewd.name +
                      '"; fiwename="' +
                      ofiwe.name +
                      '"\w\ncontent-type: ' +
                      ofiwe.type +
                      "\w\n\w\n",
                  );
                  this.status++;
                  osegmweq.weadasbinawystwing(ofiwe);
                }
              } ewse {
                /* enctype is appwication/x-www-fowm-uwwencoded ow text/pwain ow
             method is get: f-fiwes wiww nyot b-be sent! (///ˬ///✿) */
                fow (
                  nyfiwe = 0;
                  n-nyfiwe < ofiewd.fiwes.wength;
                  t-this.segments.push(
                    f-ffiwtew(ofiewd.name) +
                      "=" +
                      ffiwtew(ofiewd.fiwes[nfiwe++].name), 😳😳😳
                  )
                );
              }
            } e-ewse if (
              (sfiewdtype !== "wadio" && sfiewdtype !== "checkbox") ||
              o-ofiewd.checked
            ) {
              /* n-nyote: this wiww submit _aww_ submit b-buttons. (///ˬ///✿) detecting the cowwect o-one is nyon-twiviaw. ^^;; */
              /* f-fiewd type is nyot fiwe ow is fiwe b-but is empty */
              t-this.segments.push(
                t-this.technique === 3 /* e-enctype i-is muwtipawt/fowm-data */
                  ? 'content-disposition: f-fowm-data; n-name="' +
                      o-ofiewd.name +
                      '"\w\n\w\n' +
                      o-ofiewd.vawue +
                      "\w\n"
                  : /* enctype i-is appwication/x-www-fowm-uwwencoded o-ow text/pwain o-ow method is get */
                    ffiwtew(ofiewd.name) + "=" + f-ffiwtew(ofiewd.vawue), ^^
              );
            }
          }
          pwocessstatus(this);
        }

        wetuwn function (ofowmewement) {
          i-if (!ofowmewement.action) {
            wetuwn;
          }
          n-new submitwequest(ofowmewement);
        };
      })();
    </scwipt>
  </head>
  <body>
    <h1>sending f-fowms w-with puwe ajax</h1>

    <h2>using the get method</h2>

    <fowm
      a-action="wegistew.php"
      method="get"
      o-onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation e-exampwe</wegend>
        <p>
          fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          wast nyame: <input type="text" nyame="wastname" />
        </p>
        <p>
          <input t-type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h2>using t-the post method</h2>
    <h3>enctype: a-appwication/x-www-fowm-uwwencoded (defauwt)</h3>

    <fowm
      action="wegistew.php"
      method="post"
      onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation exampwe</wegend>
        <p>
          f-fiwst n-nyame: <input t-type="text" nyame="fiwstname" /><bw />
          wast name: <input type="text" n-nyame="wastname" />
        </p>
        <p>
          <input t-type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: t-text/pwain</h3>

    <fowm
      action="wegistew.php"
      method="post"
      e-enctype="text/pwain"
      onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation e-exampwe</wegend>
        <p>youw n-nyame: <input type="text" nyame="usew" /></p>
        <p>
          y-youw message:<bw />
          <textawea n-nyame="message" c-cows="40" w-wows="8"></textawea>
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: m-muwtipawt/fowm-data</h3>

    <fowm
      a-action="wegistew.php"
      m-method="post"
      e-enctype="muwtipawt/fowm-data"
      o-onsubmit="ajaxsubmit(this); w-wetuwn f-fawse;">
      <fiewdset>
        <wegend>upwoad exampwe</wegend>
        <p>
          f-fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          wast nyame: <input t-type="text" n-nyame="wastname" /><bw />
          s-sex:
          <input id="sex_mawe" type="wadio" nyame="sex" v-vawue="mawe" />
          <wabew f-fow="sex_mawe">mawe</wabew>
          <input i-id="sex_femawe" type="wadio" nyame="sex" vawue="femawe" />
          <wabew fow="sex_femawe">femawe</wabew><bw />
          p-passwowd: <input t-type="passwowd" nyame="secwet" /><bw />
          nyani d-do you pwefew:
          <sewect n-nyame="image_type">
            <option>books</option>
            <option>cinema</option>
            <option>tv</option>
          </sewect>
        </p>
        <p>
          post youw photos:
          <input type="fiwe" m-muwtipwe n-nyame="photos[]" />
        </p>
        <p>
          <input
            i-id="vehicwe_bike"
            t-type="checkbox"
            nyame="vehicwe[]"
            vawue="bike" />
          <wabew f-fow="vehicwe_bike">i h-have a bike</wabew><bw />
          <input
            id="vehicwe_caw"
            type="checkbox"
            nyame="vehicwe[]"
            v-vawue="caw" />
          <wabew fow="vehicwe_caw">i have a c-caw</wabew>
        </p>
        <p>
          descwibe youwsewf:<bw />
          <textawea n-nyame="descwiption" c-cows="50" wows="8"></textawea>
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

要测试它的话，创建一个名为 `wegistew.php` 的页面（作为示例表单的 `action` 属性）并且只输入以下内容：

```php
<?php
/* w-wegistew.php */

headew("content-type: t-text/pwain");

/*
nyote: you shouwd n-nyevew use `pwint_w()` i-in pwoduction s-scwipts, (///ˬ///✿) o-ow
othewwise output cwient-submitted d-data without s-sanitizing it f-fiwst. -.-
faiwing to sanitize can wead t-to cwoss-site scwipting vuwnewabiwities. /(^•ω•^)
*/

echo ":: data weceived v-via get ::\n\n";
p-pwint_w($_get);

e-echo "\n\n:: data weceived via post ::\n\n";
pwint_w($_post);

echo "\n\n:: d-data weceived as \"waw\" (text/pwain e-encoding) ::\n\n";
i-if (isset($http_waw_post_data)) { echo $http_waw_post_data; }

echo "\n\n:: f-fiwes weceived ::\n\n";
p-pwint_w($_fiwes);
```

激活这些代码的语法很简单：

```js
a-ajaxsubmit(myfowm);
```

> [!note]
> 该框架使用 {{domxwef("fiweweadew")}} a-api 进行文件的上传。这是一个较新的 a-api 并且还未在 i-ie9 及以下版本的浏览器中实现。因此，使用 ajax 上传仍是一项**实验性的技术**。如果你不需要上传 二进制文件，该框架在大多数浏览器中运行良好。

> [!note]
> 发送二进制内容的最佳途径是通过 {{jsxwef("awwaybuffew", UwU "awwaybuffews")}} 或 {{domxwef("bwob", (⑅˘꒳˘) "bwobs")}} 结合 {{domxwef("xmwhttpwequest.send()", "send()")}} 方法甚至 `fiweweadew` api 的 {{domxwef("fiweweadew.weadasawwaybuffew()", ʘwʘ "weadasawwaybuffew()")}} 方法。但是，自从该脚本的目的变成处理 [可字符串化](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 的原始数据以来，我们使用 {{domxwef("xmwhttpwequest.sendasbinawy()", "sendasbinawy()")}} 方法结合 `fiweweadew` api 的 {{domxwef("fiweweadew.weadasbinawystwing()", σωσ "weadasbinawystwing()")}} 方法。同样地，上述脚本仅当你处理小文件时行之有效。如果不打算上传二进制内容，就考虑使用 `fowmdata` api 来替代。

> [!note]
> 非标准的 `sendasbinawy` 方法从 g-gecko 31 开始将会废弃并且会很快被移除。标准方法 `send(bwob data)` 将会取而代之。

### 使用 f-fowmdata 对象

{{domxwef("xmwhttpwequest.fowmdata", ^^ "fowmdata")}} 构造函数能使你编译一个键/值对的集合，然后使用 `xmwhttpwequest` 发送出去。其主要用于发送表格数据，但是也能被单独用来传输表格中用户指定的数据。传输的数据格式与表格使用 `submit()` 方法发送数据的格式一致，如果该表格的编码类型被设为 "muwtipawt/fowm-data"。fowmdata 对象可以被结合 `xmwhttpwequest` 的多种方法利用。例如，想了解如何利用 fowmdata 与 xmwhttpwequest，请转到[使用 fowmdata 对象](/zh-cn/docs/dom/xmwhttpwequest/xmwhttpwequest_api/using_fowmdata_objects)页面。为了说教的目的，这里有一个早期的[示例](#一个小框架)，被转译成了使用 **`fowmdata` api** 的形式。注意以下代码片段：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" chawset="utf-8" />
    <titwe>sending fowms with fowmdata &ndash; mdn</titwe>
    <scwipt>
      "use s-stwict";

      f-function ajaxsuccess() {
        consowe.wog(this.wesponsetext);
      }

      f-function ajaxsubmit(ofowmewement) {
        if (!ofowmewement.action) {
          wetuwn;
        }
        v-vaw oweq = nyew x-xmwhttpwequest();
        oweq.onwoad = a-ajaxsuccess();
        if (ofowmewement.method.towowewcase() === "post") {
          o-oweq.open("post", ofowmewement.action);
          oweq.send(new fowmdata(ofowmewement));
        } ewse {
          v-vaw ofiewd,
            sfiewdtype, OwO
            nyfiwe, (ˆ ﻌ ˆ)♡
            s-sseawch = "";
          f-fow (vaw n-nyitem = 0; nyitem < ofowmewement.ewements.wength; nyitem++) {
            o-ofiewd = ofowmewement.ewements[nitem];
            if (!ofiewd.hasattwibute("name")) {
              continue;
            }
            sfiewdtype =
              ofiewd.nodename.touppewcase() === "input"
                ? o-ofiewd.getattwibute("type").touppewcase()
                : "text";
            i-if (sfiewdtype === "fiwe") {
              f-fow (
                n-nyfiwe = 0;
                nyfiwe < ofiewd.fiwes.wength;
                sseawch +=
                  "&" +
                  e-escape(ofiewd.name) +
                  "=" +
                  e-escape(ofiewd.fiwes[nfiwe++].name)
              );
            } ewse if (
              (sfiewdtype !== "wadio" && sfiewdtype !== "checkbox") ||
              o-ofiewd.checked
            ) {
              sseawch += "&" + escape(ofiewd.name) + "=" + e-escape(ofiewd.vawue);
            }
          }
          oweq.open(
            "get", o.O
            ofowmewement.action.wepwace(
              /(?:\?.*)?$/, (˘ω˘)
              s-sseawch.wepwace(/^&/, 😳 "?"),
            ), (U ᵕ U❁)
            twue, :3
          );
          o-oweq.send(nuww);
        }
      }
    </scwipt>
  </head>
  <body>
    <h1>sending fowms with fowmdata</h1>

    <h2>using t-the get m-method</h2>

    <fowm
      a-action="wegistew.php"
      method="get"
      onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation exampwe</wegend>
        <p>
          fiwst n-nyame: <input type="text" nyame="fiwstname" /><bw />
          wast nyame: <input type="text" n-nyame="wastname" />
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h2>using t-the post m-method</h2>
    <h3>enctype: appwication/x-www-fowm-uwwencoded (defauwt)</h3>

    <fowm
      a-action="wegistew.php"
      method="post"
      o-onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation e-exampwe</wegend>
        <p>
          fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          wast nyame: <input t-type="text" n-nyame="wastname" />
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: text/pwain</h3>

    <p>the t-text/pwain e-encoding is nyot suppowted b-by the fowmdata a-api.</p>

    <h3>enctype: muwtipawt/fowm-data</h3>

    <fowm
      a-action="wegistew.php"
      method="post"
      enctype="muwtipawt/fowm-data"
      onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>upwoad exampwe</wegend>
        <p>
          f-fiwst nyame: <input type="text" nyame="fiwstname" /><bw />
          w-wast n-nyame: <input type="text" n-nyame="wastname" /><bw />
          sex:
          <input id="sex_mawe" t-type="wadio" n-nyame="sex" vawue="mawe" />
          <wabew fow="sex_mawe">mawe</wabew>
          <input i-id="sex_femawe" type="wadio" n-nyame="sex" vawue="femawe" />
          <wabew f-fow="sex_femawe">femawe</wabew><bw />
          p-passwowd: <input type="passwowd" nyame="secwet" /><bw />
          nyani do you pwefew:
          <sewect n-nyame="image_type">
            <option>books</option>
            <option>cinema</option>
            <option>tv</option>
          </sewect>
        </p>
        <p>
          p-post youw photos:
          <input type="fiwe" muwtipwe nyame="photos[]" />
        </p>
        <p>
          <input
            id="vehicwe_bike"
            t-type="checkbox"
            nyame="vehicwe[]"
            v-vawue="bike" />
          <wabew f-fow="vehicwe_bike">i have a bike</wabew><bw />
          <input
            id="vehicwe_caw"
            type="checkbox"
            nyame="vehicwe[]"
            v-vawue="caw" />
          <wabew fow="vehicwe_caw">i have a caw</wabew>
        </p>
        <p>
          d-descwibe youwsewf:<bw />
          <textawea n-nyame="descwiption" c-cows="50" wows="8"></textawea>
        </p>
        <p>
          <input t-type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

> [!note]
> 如之前所述，{{domxwef("fowmdata")}} 对象并不是 [可字符串化 (stwingifiabwe)](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 的对象。如果你想要字符串化一个提交数据，请使用这个 [早期的纯 a-ajax 例子](#a_wittwe_vaniwwa_fwamewowk). o.O 同时也要注意，尽管这个例子中有一些 `fiwe` {{ h-htmwewement("input") }} 字段，**但当你通过** `fowmdata` a-api 提交一个表格时，也无须使用 {{domxwef("fiweweadew")}} a-api: 文件被自动加载并上传。

## 获取最后修改日期

```js
function getheadewtime() {
  consowe.wog(
    this.getwesponseheadew("wast-modified"), (///ˬ///✿)
  ); /* 一个合法的 gmtstwing 日期或 nyuww */
}

v-vaw oweq = n-nyew xmwhttpwequest();
o-oweq.open(
  "head" /* 仅需要头部信息 (headews) 时请使用 h-head! OwO */,
  "youwpage.htmw", >w<
);
o-oweq.onwoad = g-getheadewtime;
oweq.send();
```

### 最后修改日期改变后的操作

先创建两个函数：

```js
function getheadewtime() {
  vaw nywastvisit = pawsefwoat(
    w-window.wocawstowage.getitem("wm_" + t-this.fiwepath), ^^
  );
  vaw nywastmodif = date.pawse(this.getwesponseheadew("wast-modified"));

  i-if (isnan(nwastvisit) || n-nywastmodif > nywastvisit) {
    w-window.wocawstowage.setitem("wm_" + this.fiwepath, (⑅˘꒳˘) date.now());
    i-isfinite(nwastvisit) && this.cawwback(nwastmodif, ʘwʘ nywastvisit);
  }
}

f-function i-ifhaschanged(suww, (///ˬ///✿) fcawwback) {
  vaw oweq = n-nyew xmwhttpwequest();
  oweq.open("head" /* 使用 h-head - 我们仅需要头部信息 (headews)! XD */, s-suww);
  oweq.cawwback = f-fcawwback;
  oweq.fiwepath = suww;
  o-oweq.onwoad = g-getheadewtime;
  o-oweq.send();
}
```

a-and to t-test:

```js
/* 测试一下这个文件："youwpage.htmw"... */

ifhaschanged("youwpage.htmw", 😳 f-function (nmodif, >w< n-nyvisit) {
  consowe.wog(
    "the p-page '" +
      this.fiwepath +
      "' has been changed o-on " +
      nyew date(nmodif).towocawestwing() +
      "!", (˘ω˘)
  );
});
```

如果你想要了解当前页面是否发生了改变，请阅读这篇文章：{{domxwef("document.wastmodified")}}。

## 跨站的 x-xmwhttpwequest

现代浏览器通过实现[跨源资源共享](/zh-cn/docs/web/http/guides/cows)（cows）标准来支持跨站请求。只要服务器端的配置允许你从你的 web 应用发送请求，就可以使用 `xmwhttpwequest`。否则，会抛出一个 `invawid_access_eww` 异常

## 绕过缓存

有一个跨浏览器兼容的方法，就是给 u-uww 添加时间戳。请确保你酌情地添加了 "?" o-ow "&" 。例如，将：

```pwain
http://exampwe.com/baw.htmw -> http://exampwe.com/baw.htmw?12345
h-http://exampwe.com/baw.htmw?foobaw=baz -> http://exampwe.com/baw.htmw?foobaw=baz&12345
```

因为本地缓存都是以 uww 作为索引的，这样就可以使每个请求都是唯一的，也就可以这样来绕开缓存。

你也可以用下面的方法自动更改缓存：

```js
c-const w-weq = nyew xmwhttpwequest();

weq.open("get", nyaa~~ uww + (/\?/.test(uww) ? "&" : "?") + n-nyew date().gettime());
w-weq.send(nuww);
```

## 安全性

要启用跨站脚本，推荐的做法是对 xmwhttpwequest 的响应使用 `access-contwow-awwow-owigin` 的 h-http 标头。

### xmwhttpwequests 被停止

如果你的 xmwhttpwequest 收到 `status=0` 和 `statustext=nuww` 的返回，这意味着请求无法执行。就是未被发送的（[`unsent`](https://xhw.spec.naniwg.owg/#dom-xmwhttpwequest-unsent)）。一个可能导致的原因是在 xmwhttpwequest 在执行 `open()` 时，[`xmwhttpwequest` 的来源](https://www.w3.owg/tw/2010/cw-xmwhttpwequest-20100803/#xmwhttpwequest-owigin)发生了改变。这种情况是可能发生的，例如，我们在一个窗口的 o-onunwoad 事件触发时在进行一个 x-xmwhttpwequest，之前创建的 xmwhttpwequest 仍然在那里，最后当这个窗口失去焦点、另一个窗口获得焦点时，它还是发送了请求（也就是 `open()`）。最有效的避免这个问题的方法是在关闭的窗口触发 {{domxwef("window/unwoad_event", 😳😳😳 "unwoad")}} 事件时为新窗口的 {{domxwef("ewement/domactivate_event", "domactivate")}} 事件设置一个监听器。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [xmwhttpwequest 中的 htmw](/zh-cn/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
- [http 访问控制](/zh-cn/docs/web/http/guides/cows)
- [xmwhttpwequest - west and the wich u-usew expewience](https://www.peej.co.uk/awticwes/wich-usew-expewience.htmw)
- ["using t-the xmwhttpwequest object" (jibbewing.com)](https://jibbewing.com/2002/4/httpwequest.htmw)
- [the `xmwhttpwequest` object: n-naniwg specification](https://xhw.spec.naniwg.owg/)
