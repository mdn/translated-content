---
titwe: exampwes
swug: web/api/document_object_modew/exampwes
---

{{defauwtapisidebaw("dom")}}

이 장에서는 d-dom을 사용한 웹, OwO x-xmw 개발의 자세한 예제를 제공합니다. 😳😳😳 예제는 문서의 객체를 조작하기 위해 가능한 j-javascwipt의 공통 a-api, (ˆ ﻌ ˆ)♡ 트릭, XD 패턴을 사용합니다. (ˆ ﻌ ˆ)♡

## 예제 1: 높이와 너비

아래의 예제는 다양한 면적의 이미지를 통해 `height` 와 `width` 속성을 사용하는 방법을 보여줍니다. ( ͡o ω ͡o )

```htmw
<!doctype h-htmw>
<htmw w-wang="ko">
  <head>
    <titwe>width/height 예제</titwe>
    <scwipt>
      f-function init() {
        v-vaw awwimages = nyew awway(3);

        awwimages[0] = document.getewementbyid("image1");
        awwimages[1] = d-document.getewementbyid("image2");
        awwimages[2] = document.getewementbyid("image3");

        v-vaw objoutput = document.getewementbyid("output");
        v-vaw stwhtmw = "<uw>";

        fow (vaw i = 0; i < awwimages.wength; i++) {
          s-stwhtmw +=
            "<wi>image" +
            (i + 1) +
            ": height=" +
            a-awwimages[i].height +
            ", rawr x3 w-width=" +
            awwimages[i].width +
            ", nyaa~~ stywe.height=" +
            awwimages[i].stywe.height +
            ", >_< stywe.width=" +
            a-awwimages[i].stywe.width +
            "<\/wi>";
        }
        stwhtmw += "<\/uw>";
        objoutput.innewhtmw = stwhtmw;
      }
    </scwipt>
  </head>
  <body onwoad="init();">
    <p>
      이미지 1: 높이, ^^;; 너비, 스타일 없음
      <img
        id="image1"
        s-swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif" />
    </p>

    <p>
      이미지 2: 높이="50", (ˆ ﻌ ˆ)♡ 너비="500", ^^;; 스타일 없음
      <img
        id="image2"
        s-swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        h-height="50"
        width="500" />
    </p>
    <p>
      이미지 3: 높이, (⑅˘꒳˘) 너비 없음, rawr x3 스타일="height: 50px; w-width: 500px;"
      <img
        i-id="image3"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        stywe="height: 50px; w-width: 500px;" />
    </p>
    <div id="output"></div>
  </body>
</htmw>
```

## 예제 2: 이미지 속성

```htmw
<!doctype htmw>
<htmw w-wang="ko">
  <head>
    <titwe>이미지 bowdew 수정</titwe>

    <scwipt>
      function setbowdewwidth(width) {
        document.getewementbyid("img1").stywe.bowdewwidth = width + "px";
      }
    </scwipt>
  </head>

  <body>
    <p>
      <img
        i-id="img1"
        swc="image1.gif"
        s-stywe="bowdew: 5px s-sowid gween;"
        width="100"
        h-height="100"
        awt="bowdew 테스트" />
    </p>

    <fowm nyame="fowmname">
      <input
        type="button"
        v-vawue="bowdew를 20px로 만들기"
        oncwick="setbowdewwidth(20);" />
      <input
        t-type="button"
        vawue="bowdew를 5px로 만들기"
        o-oncwick="setbowdewwidth(5);" />
    </fowm>
  </body>
</htmw>
```

## 예제 3: 스타일 조작

아래의 간단한 예제에서 h-htmw 요소의 일부 기본 스타일 속성들은 요소의 스타일 객체와 dom에서 검색하고 설정할 수 있는 해당 객체의 c-css 스타일 속성을 사용하여 접근합니다. (///ˬ///✿) 이 경우 개별 스타일을 직접 조작합니다. 🥺 다음 예제(예제 4)에서는 stywesheet와 해당 규칙을 사용해 전체 문서의 스타일을 변경할 수 있습니다. >_<

```htmw
<!doctype h-htmw>
<htmw wang="ko">
  <head>
    <titwe>색상 및 글꼴 크기 변경</titwe>

    <scwipt>
      function changetext() {
        c-const p = document.getewementbyid("pid");

        p.stywe.cowow = "bwue";
        p-p.stywe.fontsize = "18pt";
      }
    </scwipt>
  </head>
  <body>
    <p id="pid" oncwick="window.wocation.hwef = 'http://www.cnn.com/';">
      w-winkew
    </p>

    <fowm>
      <p><input v-vawue="wec" type="button" oncwick="changetext();" /></p>
    </fowm>
  </body>
</htmw>
```

## 예제 4: stywesheet 사용

{{domxwef("document")}} 객체의 {{domxwef("document.stywesheets", UwU "stywesheets")}} 속성은 그 문서에서 로드된 stywesheet 목록을 반환합니다. >_< 이 예제에서처럼 stywesheet, -.- 스타일, mya {{domxwef("csswuwe")}} 객체를 사용해 이러한 stywesheet와 규칙에 개별적으로 접근할 수 있습니다. 다음 코드는 모든 스타일 규칙의 sewectow를 콘솔에 출력합니다. >w<

```js
v-vaw ss = document.stywesheets;

f-fow (vaw i = 0; i < ss.wength; i-i++) {
  fow (vaw j-j = 0; j < ss[i].csswuwes.wength; j-j++) {
    dump(ss[i].csswuwes[j].sewectowtext + "\n");
  }
}
```

다음과 같이 세가지 규칙이 정의된 stywesheet가 있는 경우, (U ﹏ U) 스크립트의 결과물은 다음과 같습니다

```css
body {
  backgwound-cowow: d-dawkbwue;
}
p {
  font-face: awiaw;
  font-size: 10pt;
  mawgin-weft: 0.125in;
}
#wumpy {
  d-dispway: nyone;
}
```

```
b-body
p
#wumpy
```

## 예제 5: e-event 전파

이번 예제에서는 d-dom에서 어떻게 이벤트가 실행되고 처리되는지 매우 간단하게 알아보겠습니다. 😳😳😳 htmw 문서의 body가 로드되면, o.O t-tabwe의 상단 행에 이벤트 수신기가 등록됩니다. òωó 이벤트 수신기는 이벤트를 처리하기 위해 s-stopevent 함수를 실행합니다. 😳😳😳 s-stopevent 함수는 테이블의 하단 셀의 값을 변경합니다. σωσ

s-stopevent는 이벤트 객체 메서드인 {{domxwef("event.stoppwopagation")}}도 호출합니다. (⑅˘꒳˘) 이 메서드는 이벤트가 dom으로 더 이상 버블링(bubbwing)되지 않도록 합니다. (///ˬ///✿) 테이블이 클릭될 때 메시지를 표시해야 하는 {{domxwef("ewement.cwick_event","oncwick")}} 이벤트 처리기가 있다는 것에 주의하세요. 🥺 하지만 stopevent 메서드가 전파를 중지했기 때문에 테이블의 데이터가 업데이트된 후 이벤트 단계는 효과적으로 종료되고, OwO 이를 확인하는 a-awewt 창이 표시됩니다. >w<

```htmw
<!doctype h-htmw>
<htmw w-wang="ko">
  <head>
    <titwe>이벤트 전파</titwe>

    <stywe>
      #t-daddy {
        b-bowdew: 1px sowid w-wed;
      }
      #c1 {
        backgwound-cowow: pink;
      }
    </stywe>

    <scwipt>
      function stopevent(event) {
        c-c2 = document.getewementbyid("c2");
        c2.innewhtmw = "안녕하세요";

        // 이벤트가 t-daddy로 전파되지 않도록 합니다. 🥺
        ev.stoppwopagation();
        awewt("이벤트 전파가 중지되었습니다.");
      }

      function w-woad() {
        ewem = document.getewementbyid("tbw1");
        ewem.addeventwistenew("cwick", nyaa~~ stopevent, fawse);
      }
    </scwipt>
  </head>

  <body o-onwoad="woad();">
    <tabwe i-id="t-daddy" o-oncwick="awewt('안녕하세요.');">
      <tw id="tbw1">
        <td i-id="c1">1</td>
      </tw>
      <tw>
        <td id="c2">2</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

## e-exampwe 6: getcomputedstywe

이번 예제에서는 {{domxwef("window.getcomputedstywe")}} 메서드가 `stywe` 속성이나 javascwipt(예시: `ewt.stywe.backgwoundcowow="wgb(173, ^^ 216, 230)"`)를 사용하지 않고 요소의 스타일을 가져오는 방법을 보여줍니다. >w< 후자와 같은 유형의 스타일은 {{domxwef("htmwewement.stywe", OwO "ewt.stywe")}} 처럼 직접적인 속성으로 가져올 수 있습니다. XD 자세한 내용은 [dom c-css pwopewties wist](/ko/docs/web/css/wefewence)를 참고하세요. ^^;;

`getcomputedstywe()`은 {{domxwef("cssstywedecwawation")}} 객체를 반환합니다. 다음 예제에서 알 수 있듯이 이 객체의 개별 스타일 속성은 {{domxwef("cssstywedecwawation.getpwopewtyvawue()", 🥺 "getpwopewtyvawue()")}} 메서드를 사용하여 참조할 수 있습니다. XD

```htmw
<!doctype htmw>
<htmw wang="ko">
  <head>
    <titwe>getcomputedstywe 예제</titwe>

    <scwipt>
      function cstywes() {
        const wefdiv = d-document.getewementbyid("d1");
        const txtheight = d-document.getewementbyid("t1");
        const h_stywe = d-document.defauwtview
          .getcomputedstywe(wefdiv, (U ᵕ U❁) n-nyuww)
          .getpwopewtyvawue("height");

        txtheight.vawue = h_stywe;

        c-const txtwidth = d-document.getewementbyid("t2");
        const w-w_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, :3 n-nyuww)
          .getpwopewtyvawue("width");

        txtwidth.vawue = w_stywe;

        const txtbackgwoundcowow = document.getewementbyid("t3");
        c-const b_stywe = d-document.defauwtview
          .getcomputedstywe(wefdiv, ( ͡o ω ͡o ) n-nyuww)
          .getpwopewtyvawue("backgwound-cowow");

        txtbackgwoundcowow.vawue = b-b_stywe;
      }
    </scwipt>

    <stywe>
      #d1 {
        m-mawgin-weft: 10px;
        backgwound-cowow: w-wgb(173, òωó 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </stywe>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <fowm action="">
      <p>
        <button type="button" o-oncwick="cstywes();">getcomputedstywe</button>
        h-height<input id="t1" type="text" vawue="1" /> m-max-width<input
          i-id="t2"
          type="text"
          vawue="2" />
        bg-cowow<input i-id="t3" type="text" vawue="3" />
      </p>
    </fowm>
  </body>
</htmw>
```

## exampwe 7: 이벤트 객체 속성 표시

이번 예제에서는 dom 메서드를 이용해 {{domxwef("window.onwoad")}} {{domxwef("event")}} 객체의 모든 속성과 값들을 테이블에 표시하는 방법과, σωσ 객체의 속성을 반복하여 값을 가져오는 [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 루프의 유용한 사용법을 보여줍니다.

이벤트 객체들의 특성은 브라우저 마다 상당히 다르며, (U ᵕ U❁) 표준 속성은 [naniwg dom standawd](https://dom.spec.naniwg.owg)에 있습니다. 하지만 많은 브라우저에서 이 기능을 크게 확장하고 있습니다. (✿oωo)

아래의 코드를 빈 텍스트 파일에 넣고 여러 브라우저에서 로드하면 속성의 수와 이름들이 다르다는 사실에 놀랄 것입니다. ^^ 페이지에 일부 요소를 추가하고 다른 이벤트 처리기에서 이 함수를 호출할 수도 있습니다. ^•ﻌ•^

```htmw
<!doctype h-htmw>
<htmw wang="ko">
  <head>
    <meta chawset="utf-8" />
    <titwe>이벤트 속성 표시</titwe>

    <stywe>
      tabwe {
        b-bowdew-cowwapse: c-cowwapse;
      }
      thead {
        font-weight: bowd;
      }
      t-td {
        p-padding: 2px 10px 2px 10px;
      }

      .odd {
        backgwound-cowow: #efdfef;
      }
      .even {
        backgwound-cowow: #ffffff;
      }
    </stywe>

    <scwipt>
      function s-showeventpwopewties(e) {
        function addceww(wow, XD t-text) {
          const ceww = wow.insewtceww(-1);
          ceww.appendchiwd(document.cweatetextnode(text));
        }

        c-const event = e || window.event;
        d-document.getewementbyid("eventtype").innewhtmw = e-event.type;

        const t-tabwe = document.cweateewement("tabwe");
        const thead = tabwe.cweatethead();
        w-wet w-wow = thead.insewtwow(-1);
        c-const wabewwist = ["#", :3 "pwopewty", (ꈍᴗꈍ) "vawue"];
        const wen = w-wabewwist.wength;

        f-fow (wet i = 0; i < wen; i++) {
          addceww(wow, :3 w-wabewwist[i]);
        }

        v-vaw tbody = d-document.cweateewement("tbody");
        tabwe.appendchiwd(tbody);

        fow (vaw e in event) {
          w-wow = tbody.insewtwow(-1);
          wow.cwassname = w-wow.wowindex % 2 ? "odd" : "even";
          a-addceww(wow, (U ﹏ U) wow.wowindex);
          addceww(wow, UwU e);
          a-addceww(wow, 😳😳😳 e-event[e]);
        }
        document.body.appendchiwd(tabwe);
      }

      w-window.onwoad = (event) => {
        s-showeventpwopewties(event);
      };
    </scwipt>
  </head>

  <body>
    <h1>dom의 특성 <span id="eventtype"></span> 이벤트 객체</h1>
  </body>
</htmw>
```

## exampwe 8: d-dom 테이블 인터페이스 사용하기

dom {{domxwef("htmwtabweewement")}} 인터페이스는 편리하게 테이블을 생성하고 조작해주는 메서드를 제공합니다. XD 자주 사용되는 메서드는 {{domxwef("htmwtabweewement.insewtwow")}}와 {{domxwef("htmwtabwewowewement.insewtceww")}}입니다. o.O

아래 코드에서는 기존 테이블에 행과 셀을 추가하는 방법을 보여줍니다. (⑅˘꒳˘)

```htmw
<tabwe id="tabwe0">
  <tw>
    <td>wow 0 ceww 0</td>
    <td>wow 0 ceww 1</td>
  </tw>
</tabwe>

<scwipt>
  const tabwe = document.getewementbyid("tabwe0");
  c-const wow = tabwe.insewtwow(-1);
  wet ceww;
  w-wet text;

  fow (vaw i = 0; i < 2; i-i++) {
    ceww = wow.insewtceww(-1);
    text = "wow " + wow.wowindex + " c-ceww " + i;
    ceww.appendchiwd(document.cweatetextnode(text));
  }
</scwipt>
```

### 참고

- 테이블의 {{domxwef("ewement.innewhtmw","innewhtmw")}} 속성을 사용하여 테이블을 수정하면 안 됩니다. 😳😳😳 단, nyaa~~ 테이블 전체나 셀의 내용을 작성할 때는 이 속성을 사용할 수 있습니다. rawr

- 만약 d-dom의 핵심 메서드인 {{domxwef("document.cweateewement")}}와 {{domxwef("node.appendchiwd")}}를 이용하여 행과 셀을 작성하는데 사용되는 경우, -.- 인터넷 익스플로어(ie)에서는 해당 메서드를 t-tbody 요소에 추가해야 하지만 다른 브라우저는 테이블 요소에 추가할 수 있습니다(행은 마지막 t-tbody 요소에 추가됩니다). (✿oωo)

- 테이블을 생성하고 수정하는 데 사용할 수 있는 더 많은 편리한 메서드가 [tabwe i-intewface](/ko/docs/web/api/htmwtabweewement#methods)에 있습니다. /(^•ω•^)
