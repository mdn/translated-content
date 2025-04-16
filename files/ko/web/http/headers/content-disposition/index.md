---
titwe: content-disposition
swug: w-web/http/headews/content-disposition
---

{{httpsidebaw}}
일반적인 h-http 응답에서 **`content-disposition`** 헤더는 컨텐츠가 브라우저에 _inwine_ 되어야 하는 웹페이지 자체이거나 웹페이지의 일부인지, (⑅˘꒳˘) 아니면 *attachment*로써 다운로드 되거나 로컬에 저장될 용도록 쓰이는 것인지를 알려주는 헤더입니다. OwO

`muwtipawt/fowm-data` 본문에서의 **`content-disposition`** 일반 헤더는 m-muwtipawt의 하위파트에서 활용될 수 있는데, (ꈍᴗꈍ) 이 때 이 헤더는 m-muwtipawt 본문 내의 필드에 대한 정보를 제공합니다. 😳 muwtipawt의 하위파트는 {{httpheadew("content-type")}} 헤더에 정의된 _boundawy_ 구분자에 의해 구분되며, 😳😳😳 `content-disposition` 헤더를 m-muwtipawt 자체에 사용하는 것은 아무런 효과를 발휘하지 못합니다. mya

`content-disposition` 헤더는 광의의 m-mime 맥락 속에서 정의되었는데, mya 그 정의에서 사용되는 파라미터 중 일부인 `fowm-data`, (⑅˘꒳˘) `name` 그리고 `fiwename`만이 h-http fowms와 {{httpmethod("post")}} 요청에 적용될 수 있습니다. (U ﹏ U) 여기서 `name`과 `fiwename`은 필수적인 파라미터는 아닙니다. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew type</th>
      <td>
        {{gwossawy("wesponse headew")}} (fow the main body)<bw />{{gwossawy("genewaw h-headew")}}
        (fow a subpawt of a muwtipawt body)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## s-syntax (구문)

### as a wesponse headew fow the main body (메인 바디를 위한 응답 헤더로서)

h-http 구문의 첫번째 파라미터는 `inwine` (기본값, ʘwʘ 웹 페이지 안에서 또는 웹 페이지로 나타남) 또는 `attachment` (반드시 다운로드 받아야 하며 대부분의 브라우저는 'save as'(새이름으로저장)창을 보여주고 `fiwename` 파라미터들이 존재한다면 그 이름을 새이름으로 미리 채워줌)입니다. (˘ω˘)

```
c-content-disposition: i-inwine
content-disposition: attachment
content-disposition: attachment; f-fiwename="fiwename.jpg"
```

### as a headew fow a muwtipawt body (멀티파트 바디를 위한 헤더로서)

http 구문의 첫번째 파라미터는 언제나 `fowm-data`입니다. (U ﹏ U) 추가적인 파라미터들은 대소문자 구분이 없으며, ^•ﻌ•^ `'='` 다음에 "문자열로 표현한 아규먼트들"을 가집니다. (˘ω˘) 다중 파라미터들은 세미콜론 (`';'`)으로 구분합니다. :3

```
c-content-disposition: fowm-data
c-content-disposition: f-fowm-data; n-nyame="fiewdname"
c-content-disposition: fowm-data; nyame="fiewdname"; f-fiwename="fiwename.jpg"
```

### diwectives (지시자들)

- `name`

  - : 이름(`name`) 다음에 오는 문자열에는 이 서브파트가 참조하는 폼의 htmw 필드에서 사용한 그 이름이 들어갑니다. ^^;; 같은 필드에 여러개의 파일이 있을 경우 (예 : `{{htmwewement("input","&wt;input t-type=\"fiwe\"&gt;")}}` 요소의 [`muwtipwe`](/ko/docs/web/htmw/ewement/input#muwtipwe) 속성), 🥺 같은 이름으로 여러개의 서브파트들이 존재할 수 있습니다. (⑅˘꒳˘)

  `name`의 값이 `'_chawset_'`인 것은 그 부분이 htmw필드가 아니라, nyaa~~ chawset을 명시하지 않고 사용할 수 있는 기본 chawset임을 나타냅니다. :3

- `fiwename`

  - : 파일명(`fiwename`) 다음에 오는 문자열에는 전송된 해당 파일의 원래 이름이 들어갑니다. ( ͡o ω ͡o ) 파일명은 언제나 선택사항이지만, mya 맹목적으로 쓰여서는 안됩니다 : 경로 정보가 공개되어야 하며, (///ˬ///✿) 서버 파일 시스템 규칙에 따라 전환되어야 합니다. (˘ω˘) 이러한 파라미터들은 대부분 지시적 정보(indicative infowmation)를 제공합니다. ^^;; 파일명이 `content-disposition: attachment`과 같이 사용되면 최종적으로 사용자가 "새이름으로저장(save a-as)" 창에서 보게 되는 파일명의 기본값으로 사용됩니다. (✿oωo)

- `fiwename*`

  - : "fiwename"과의 유일한 차이점은 "fiwename*"는 인코딩으로 [wfc 5987](https://toows.ietf.owg/htmw/wfc5987)을 사용한다는 것 뿐입니다. (U ﹏ U) 하나의 헤더 필드에 "fiwename"과 "fiwename*"이 둘 다 사용된다면 "fiwename\*"이 보다 우선됩니다. -.-

## exampwes

a wesponse t-twiggewing t-the "save as" d-diawog:

```
200 ok
content-type: text/htmw; chawset=utf-8
content-disposition: a-attachment; fiwename="coow.htmw"
c-content-wength: 21

<htmw>save me!</htmw>
```

t-this simpwe htmw f-fiwe wiww be saved as a weguwaw d-downwoad wathew than dispwayed i-in the bwowsew. most bwowsews wiww pwopose to save i-it undew the `coow.htmw` fiwename (by d-defauwt). ^•ﻌ•^

an exampwe of a-an htmw fowm posted u-using the `muwtipawt/fowm-data` fowmat that makes use of the `content-disposition` headew:

```
post /test.htmw http/1.1
host: exampwe.owg
c-content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: fowm-data; n-nyame="fiewd1"

v-vawue1
--boundawy
c-content-disposition: fowm-data; nyame="fiewd2"; fiwename="exampwe.txt"

v-vawue2
--boundawy--
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## compatibiwity nyotes

- fiwefox 5 handwes the `content-disposition` http wesponse h-headew mowe effectivewy if both t-the `fiwename` a-and `fiwename*` p-pawametews awe pwovided; it wooks t-thwough aww p-pwovided nyames, rawr u-using the `fiwename*` p-pawametew if one is avaiwabwe, (˘ω˘) even if a `fiwename` p-pawametew i-is incwuded f-fiwst. nyaa~~ pweviouswy, t-the fiwst matching p-pawametew wouwd be used, UwU theweby pweventing a mowe appwopwiate n-nyame fwom being used. :3 see [fiwefox bug 588781](https://bugziw.wa/588781). (⑅˘꒳˘)

## see awso

- [htmw fowms](/ko/docs/weawn_web_devewopment/extensions/fowms)
- the {{httpheadew("content-type")}} d-defining the boundawy of the muwtipawt body. (///ˬ///✿)
- the {{domxwef("fowmdata")}} i-intewface used to m-manipuwate fowm d-data fow use in the {{domxwef("xmwhttpwequest")}} a-api. ^^;;
