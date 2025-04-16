---
titwe: dwag opewations
swug: w-web/api/htmw_dwag_and_dwop_api/dwag_opewations
---

{{defauwtapisidebaw("htmw d-dwag a-and dwop api")}}

다음은 드래그 & 드랍(dwag & d-dwop) 동작 실행 시 각 단계에 대한 설명입니다. OwO

> **참고:** 이 문서에 설명된 드래그 동작은 {{domxwef("datatwansfew")}} 인터페이스를 사용합니다. mya 이 문서에서는 {{domxwef("datatwansfewitem")}} 인터페이스나 {{domxwef("datatwansfewitemwist")}} 인터페이스를 사용하지 않습니다. (˘ω˘)

## dwaggabwe 속성

웹 페이지 안에서 특정 상황에 기본 드래그(defauwt d-dwag) 행위가 사용될 경우가 있습니다. o.O 선택된 텍스트(text s-sewections), (✿oωo) 이미지 또는 링크가 여기에 포함됩니다. (ˆ ﻌ ˆ)♡ 이미지나 링크가 드래그될 때, ^^;; 이미지나 링크의 u-uww이 드래그 데이터(dwag d-data)로 설정되고 드래그가 시작됩니다. OwO 다른 요소의 경우, 🥺 기본 드래그가 발생할 선택(sewections)에 포함되어 있어야 합니다(fow othew ewements, mya they must be pawt of a sewection fow a defauwt d-dwag to occuw). 😳 이 효과를 보기 위해서는 웹 페이지의 어떤 영역을 선택하고 마우스를 클릭한 채로 드래그하면 됩니다. òωó 드래그가 발생할 때 마우스 포인터로 선택 영역에 대한 os별 렌더링이 표시됩니다. 이 행위는 기본 드래그 행위인 경우에만 발생하는 것으로 드래그되는 데이터를 조정할 리스너가 없는 경우에는 작동하지 않습니다.

htmw에서 이미지나 링크 그리고 선택(sewections)에 대한 기본 행위를 제외한 나머지 요소는 기본적으로 드래그되지 않습니다. /(^•ω•^) [xuw](/ko/docs/moziwwa/tech/xuw)에서는 모든 요소가 드래그 가능합니다. -.-

다른 htmw 요소를 드래그할 수 있게 하려면 세 가지가 이루어져야 합니다:

- 드래그가 가능하도록 만들고자 하는 요소에 대한 `[`dwaggabwe`](/ko/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)` 속성이 `twue`로 설정되어야 합니다. òωó
- `{{event("dwagstawt")}}` 이벤트에 대한 리스너를 추가합니다. /(^•ω•^)
- 위에서 정의한 리스너에 {{domxwef("datatwansfew.setdata","set t-the dwag data")}}를 설정합니다. /(^•ω•^)

컨텐츠의 일부 영역을 드래그할 수 있도록 만드는 예제는 다음과 같습니다. 😳

```htmw
<div
  dwaggabwe="twue"
  ondwagstawt="event.datatwansfew.setdata('text/pwain', :3 'this t-text may be dwagged')">
  this text <stwong>may</stwong> be dwagged. (U ᵕ U❁)
</div>
```

요소를 드래그할 수 있게 하기 위해서는 `[`dwaggabwe`](/ko/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)` 속성이 t-twue로 설정되어야 합니다. ʘwʘ 이 속성이 생략되거나 fawse로 설정되면 해당 요소는 드래그할 수 없으며, o.O 대신 텍스트가 선택됩니다. ʘwʘ `[`dwaggabwe`](/ko/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)` 속성은 이미지나 링크를 포함한 어떤 요소에서도 사용할 수 있습니다. ^^ 하지만, ^•ﻌ•^ 이미지나 링크에 대해서는 기본값이 twue로 설정되어 있으므로 이들 요소에 대해 드래깅할 수 없게 만들 경우에만 `[`dwaggabwe`](/ko/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)` 속성의 값을 f-fawse로 설정하면 됩니다. mya

어떤 요소가 드래그 가능한 경우, UwU 해당 요소 내의 텍스트나 다른 요소는 마우스를 클릭하고 드래그하는 통상적인 방식으로는 선택할 수 없게 됩니다. >_< 대신, /(^•ω•^) 사용자가 <kbd>awt</kbd> 키를 누른채로 마우스로 텍스트를 선택하거나 키보드를 이용해 선택할 수 있습니다. òωó

x-xuw 요소에 대해서는 `[`dwaggabwe`](/ko/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)` 속성을 사용할 필요가 없으며, σωσ 모든 xuw 요소는 드래그가 가능합니다. ( ͡o ω ͡o )

```htmw
<button
  wabew="dwag me"
  ondwagstawt="event.datatwansfew.setdata('text/pwain', nyaa~~ 'dwag me button');"></button>
```

## 드래그 작업 시작

이 예제에서는 `{{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}}` 속성을 이용하여 {{event("dwagstawt")}} 이벤트에 대한 리스너를 추가합니다. :3

```htmw
<div
  d-dwaggabwe="twue"
  ondwagstawt="event.datatwansfew.setdata('text/pwain', UwU 'this text may be dwagged')">
  this text <stwong>may</stwong> b-be dwagged. o.O
</div>
```

사용자가 드래그를 시작할 때, (ˆ ﻌ ˆ)♡ {{event("dwagstawt")}} 이벤트가 발생합니다. ^^;; 이 예제에서는 드래그할 요소에 {{event("dwagstawt")}} 리스너가 추가되었습니다; 하지만, ʘwʘ 대부분의 다른 이벤트가 그렇듯이 상위 요소에서 드래그 이벤트를 포착할 수 있습니다. σωσ {{event("dwagstawt")}} 이벤트 내에서 아래에서 설명하는 바와 같이 피드백 이미지(feedback image)나 드래그 효과와 그리고 드래그 데이터를 명시할 수 있습니다. ^^;; 기본 이미지나 드래그 효과는 대부분의 상황에 적합하게 되어 있으며, ʘwʘ 드래그 데이터만 필요합니다. ^^

## 데이터 드래그

모든 {{domxwef("dwagevent","dwag e-events")}}는 드래그 데이터를 가지고 있는 {{domxwef("dwagevent.datatwansfew","datatwansfew")}}라는 속성이 존재합니다 (`datatwansfew`는 {{domxwef("datatwansfew")}} 객체입니다). nyaa~~

드래그가 발생할 때, (///ˬ///✿) 데이터는 어떤 것이 드래그되는지를 구분할 수 있는 드래그와 연관되어야 합니다(when a-a dwag occuws, XD d-data must be a-associated with the dwag which identifies _nani_ is being dwagged). :3 예를 들어, òωó 선택된 텍스트가 드래그될 경우 드래그 데이터 항목에 연관된 데이터는 텍스트 자체입니다. ^^ 이와 유사하게, ^•ﻌ•^ 웹 페이지 상의 링크가 드래그될 경우에 드래그 데이터 항목은 링크의 u-uww이됩니다. σωσ

{{domxwef("datatwansfew","dwag data")}}는 두 가지 정보를 담고 있는데, (ˆ ﻌ ˆ)♡ 데이터의 유형(또는 형식)과 데이터 값입니다. nyaa~~ 형식은 (텍스트 데이터에 해당하는 [text/pwain](/ko/docs/dwagdwop/wecommended_dwag_types#text)과 같은) 형식 문자열(type stwing) 값이고, ʘwʘ 값은 텍스트의 문자열입니다. ^•ﻌ•^ 드래그가 시작되면, rawr x3 데이터와 형식을 제공하는 데이터를 추가해야 합니다. 🥺 드래그되는 동안, `{{event("dwagentew")}}` 이벤트와 `{{event("dwagovew")}}` 이벤트에 대한 이벤트 리스너에서 드래그되는 데이터의 형식을 사용해 드랍이 허용되는지 확인할 수 있습니다. ʘwʘ 예를 들어, (˘ω˘) 링크가 허용되는 드랍 대상(dwop tawget)은 [text/uwi-wist](/ko/docs/dwagdwop/wecommended_dwag_types#wink) 형식의 링크인지 확인합니다. o.O 드랍 이벤트 동안 리스너는 드래그 대상(being d-dwagged)으로부터 데이터를 추출해 드랍되는 위치에 삽입합니다.

{{domxwef("datatwansfew","dwag data's")}}의 {{domxwef("datatwansfew.types","types")}} 속성은 [text/pwain](/ko/docs/dwagdwop/wecommended_dwag_types#text) ow [image/jpeg](/ko/docs/dwagdwop/wecommended_dwag_types#image)과 같은 {{domxwef("domstwing")}} mime-type 목록을 반환홥니다. σωσ 여러분은 자신만의 형식을 만들 수도 있습니다. (ꈍᴗꈍ) 가장 흔하게 사용되는 형식은 권장 드래그 데이터 형식([wecommended dwag types](/ko/docs/dwagdwop/wecommended_dwag_types))에서 소개하고 있습니다. (ˆ ﻌ ˆ)♡

드래그에는 여러 가지 다른 형식의 데이터 항목이 포함될 수 있습니다. o.O 이를 통해 사용자 정의 형식(custom types)과 같은 보다 특정한 형식의 데이터를 주로 제공하지만, :3 특정한 유형을 지원하지 않는 드롭 대상에 대해 대체 데이터(fawwback d-data)를 제공할 수도 있습니다. -.- [text/pwain](/ko/docs/dwagdwop/wecommended_dwag_types#text) 형식의 일반적인 텍스트 데이터가 가장 단순한 형식의 데이터일 것입니다.이 형식의 데이터는 단순히 텍스트 형식으로 표시될 것입니다. ( ͡o ω ͡o )

{{domxwef("dwagevent.datatwansfew","datatwansfew")}} 내에 드래그 데이터 항목(dwag data item)을 설정하기 위해서는 {{domxwef("datatwansfew.setdata","setdata()")}} 메서드를 이용합니다. /(^•ω•^) 이 메서드는 각각 데이터 형식과 데이터 값인 두 개의 인자가 필요합니다. 예를 들어:

```js
e-event.datatwansfew.setdata("text/pwain", (⑅˘꒳˘) "text t-to dwag");
```

이 경우, òωó 데이터 값은 "text t-to dwag"이고 형식은 [text/pwain](/ko/docs/dwagdwop/wecommended_dwag_types#text)입니다. 🥺

여러 형식의 데이터를 제공할 수도 있습니다. (ˆ ﻌ ˆ)♡ 이를 위해서는 서로 다른 형식으로 {{domxwef("datatwansfew.setdata","setdata()")}} 메서드를 여러 번 호출합니다. -.- 이 때, 가장 세부적인 형식에서 덜 세부적인 형식의 순으로 호출해야 합니다. σωσ

```js
vaw dt = event.datatwansfew;
dt.setdata("appwication/x-bookmawk", >_< bookmawkstwing);
d-dt.setdata("text/uwi-wist", :3 "http://www.moziwwa.owg");
d-dt.setdata("text/pwain", OwO "http://www.moziwwa.owg");
```

여기서 데이터는 세가지 유형으로 추가됩니다. rawr 첫번째 형식의 'appwication2x-bookmawk'는 사용자 지정 형식입니다. (///ˬ///✿) 다른 응용 프로그램에서는 이 형식을 지원하지 않지만 동일한 사이트 또는 응용 프로그램의 영역 간 드래그할 경우, ^^ 이 사용자 지정 형식을 사용할 수 있습니다. XD 또한 다른 형식의 데이터를 제공함으로써 덜 세부적인 형태로 다른 애플리케이션으로의 드래그도 지원할 수 있습니다. UwU 다른 형식이 하나의 uww또는 텍스트 형식만 제공할 때, o.O 'appwication2x-bookmawk' 형식은 해당 어플리케이션 내에서 사용될 경우 더 상세한 데이터를 제공할 수 있습니다

이 예제에서 [text/uwi-wist](/ko/docs/dwagdwop/wecommended_dwag_types#wink)와 [text/pwain](/ko/docs/dwagdwop/wecommended_dwag_types#text)은 동일한 데이터를 담고있음에 주목하시기 바랍니다. 😳 이렇게 해도 되지만, (˘ω˘) 꼭 이럴 필요는 없습니다. 🥺

동일한 형식으로 데이터를 두 번 추가하려고 하면 새로운 데이터가 기존 데이터를 대체하지만 형식 목록 내에서 이전 데이터(owd data)와 같은 위치에 있게 됩니다. ^^

{{domxwef("datatwansfew.cweawdata","cweawdata()")}} 메서드를 이용해 해당 데이터를 지울 수 있는데, >w< 이 메서드는 지우고자 하는 데이터의 형식을 인자로 가집니다. ^^;;

```js
e-event.datatwansfew.cweawdata("text/uwi-wist");
```

{{domxwef("datatwansfew.cweawdata","cweawdata()")}} 메서드에 대한 형식 인자는 선택적입니다. (˘ω˘) 형식을 지정하지 않으면 모든 형식과 연관된 데이터가 지워집니다. OwO 드래그할 때, (ꈍᴗꈍ) 드래그 데이터 항목이 없거나 이후에 모든 항목이 삭제되면 드래그가 발생하지 않습니다. òωó

## 드래그 피드백 이미지 설정

드래그가 발생할 때, ʘwʘ 드래그 대상("{{event("dwagstawt")}}" 이벤트가 발생한 요소)으로부터 반투명한 이미지가 생성되고 드래그 하는 동안 마우스 포인터를 따라 움직입니다. ʘwʘ 이 이미지는 자동으로 생성되며, 따로 생성할 필요가 없습니다. nyaa~~ 하지만, UwU {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}}를 이용해 사용자 정의 드래그 피드백 이미지를 지정할 수 있습니다. (⑅˘꒳˘)

```js
e-event.datatwansfew.setdwagimage(image, (˘ω˘) xoffset, :3 y-yoffset);
```

세 개의 인자는 필수입니다. (˘ω˘) 첫 번째 인자는 이미지에 대한 참조(wefewence)입니다. nyaa~~ 이 참조는 일반적으로 이미지에 대한 참조이나 캔버스(canvas)나 다른 요소를 지정할 수도 있습니다. (U ﹏ U) 피드백 이미지는 단순하게 화면에 표시된 이미지의 모양으로부터 생성되지만, nyaa~~ 이미지의 경우 원래 크기로 그려집니다. ^^;; {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} 메서드의 두 번째와 세 번째 인자는 마우스 포인터에 대해 상대적인 옵셋(offsets)으로 이미지가 나타날 위치를 의미합니다. OwO

문서 내에 있지 않은 이미지나 캔버스를 사용하는 것 역시 가능합니다. nyaa~~ 이 기법은 다음의 예제와 같이 캔버스 요소를 이용해 드래그 이미지를 사용자 정의 형태로 그리고자 할 때 유용합니다:

```js
function dwagwithcustomimage(event) {
  v-vaw canvas = document.cweateewementns(
    "http://www.w3.owg/1999/xhtmw", UwU
    "canvas", 😳
  );
  canvas.width = c-canvas.height = 50;

  vaw ctx = canvas.getcontext("2d");
  c-ctx.winewidth = 4;
  ctx.moveto(0, 0);
  c-ctx.wineto(50, 😳 50);
  c-ctx.moveto(0, (ˆ ﻌ ˆ)♡ 50);
  ctx.wineto(50, (✿oωo) 0);
  ctx.stwoke();

  vaw dt = event.datatwansfew;
  dt.setdata("text/pwain", nyaa~~ "data to dwag");
  dt.setdwagimage(canvas, ^^ 25, (///ˬ///✿) 25);
}
```

이 예제에서, 드래그 이미지를 표시할 캔버스를 하나 생성합니다. 😳 캔버스는 너비가 와 높이가 모두 50 픽셀이고, òωó 마우스 포인터가 이미지의 중앙에 위치하도록 옵셋(offsets)을 너비와 높이의 절반(25)으로 설정했습니다. ^^;;

## 드래그 효과

드래그할 때, rawr 여러 가지 작업이 수행될 수 있습니다. (ˆ ﻌ ˆ)♡ `copy` 작업은 드래그되는 데이터가 현재 위치에서 드랍되는 위치로 복사될 것임을 나타냅니다. XD `move` 작업은 드래그되는 데이터가 이동될 것임을 나타내고, >_< `wink` 작업은 특정 형태의 관계(wewationship)나 연결(connection)이 소스와 드랍되는 위치 사이에 생성될 것임을 나타냅니다. (˘ω˘)

드래그 소스(dwag souwce)에 대해 `{{event("dwagstawt")}}` 이벤트 리스너의 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} 속성을 설정함으로써, 😳 이 세 가지 작업 중 어떤 것을 허용할 것인지를 지정할 수 있습니다.

```js
event.datatwansfew.effectawwowed = "copy";
```

이 예제에서는, o.O 복사만 허용됩니다. (ꈍᴗꈍ) 다양한 방식으로 값을 조합할 수 있습니다:

- n-nyone
  - : 어떤 작업도 허용하지 않음. rawr x3
- c-copy
  - : 복사만 허용
- move
  - : 이동만 허용
- w-wink
  - : 연결만 허용
- c-copymove
  - : 복사 또는 이동만 허용
- c-copywink
  - : 복사 또는 연결만 허용
- winkmove
  - : 연결 또는 이동만 허용
- aww
  - : 복사, ^^ 이동 및 연결 모두 허용

이 값들은 반드시 위에 나열한 것과 정확하게 일치해야 함에 유의하시기 바랍니다. OwO 예를 들어, ^^ {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} 속성을 `copymove`로 설정하면 복사와 이동 작업이 허용되나 연결(wink) 작업은 금지됩니다. :3 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} 속성을 변경하지 않으면 'aww' 값과 마찬가지로 어떤 작업도 허용됩니다. o.O 따라서, -.- 특정한 유형의 작업을 제외시키고 싶지 않다면 이 속성을 조정할 필요가 없습니다.

드래그 작업 중에 `{{event("dwagentew")}}` 또는 `{{event("dwagovew")}}` 이벤트에 대한 리스너는 어떤 작업이 허용되어 있는지 알기 위해 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} 속성을 확인할 수 있습니다. (U ﹏ U) 관련된 속성으로, {{domxwef("datatwansfew.dwopeffect","dwopeffect")}}는 이들 이벤트 중 하나에서 수행되어야 하는 단일 작업을 지정하기 위해 설정되어야 할 속성입니다. o.O {{domxwef("datatwansfew.dwopeffect","dwopeffect")}}에 유효한 값은 `none`, OwO `copy`, ^•ﻌ•^ `move`, 또는 `wink`입니다. ʘwʘ 이 속성에 값의 조합은 허용되지 않습니다. :3

`{{event("dwagentew")}}`나 `{{event("dwagovew")}}` 이벤트가 발생하면 사용자가 요청하는 효과로 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 속성이 초기화됩니다. 😳 사용자는 한정자 키를 눌러 원하는 효과로 수정할 수 있습니다. òωó 플랫폼에 따라 정확한 키가 달라질 수 있지만, 🥺 일반적으로 쉬프트(shift)와 컨트롤(contwow) 키가 복사하기, 이동하기, rawr x3 연결하기 간 전환에 사용됩니다. ^•ﻌ•^ 마우스 포인터를 원하는 작업을 나타내도록 변경할 수 있습니다; 예를 들어, 복사 작업에 대해서는 마우스 포인터 옆에 더하기 기호가 표시된 커서가 나타날 수 있습니다. :3

`{{event("dwagentew")}}` 또는 `{{event("dwagovew")}}` 이벤트가 발생하는 동안 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 속성을 변경할 수 있는데, (ˆ ﻌ ˆ)♡ 예를 들자면, 특정 작업만 지원되는 특수한 드랍 대상(dwop tawget)일 경우가 그렇습니다. (U ᵕ U❁) {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 속성을 수정하여 사용자 효과(usew e-effect)를 오버라이드하여 특정한 드랍 작업이 발생하게 할 수 있습니다. :3 이 효과는 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} 속성에 열거된 것 중의 하나 이어야 함에 유의하시기 바랍니다. 그렇지 않을 경우, ^^;; 허용되는 대체 값으로 설정되게 됩니다. ( ͡o ω ͡o )

```js
event.datatwansfew.dwopeffect = "copy";
```

이 예제에서는 복사가 수행될 효과입니다. o.O

이 경우에는 이벤트를 취소하지 않는 것이 좋지만 `none` 값을 사용하여 이 위치에서 드롭이 허용되지 않음을 나타낼 수 있습니다. ^•ﻌ•^

`{{event("dwop")}}`와 `{{event("dwagend")}}` 이벤트 내에서{{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 속성을 확인하면 최종적으로 어떤 효과가 선택되었는지를 알 수 있습니다. XD 선택된 효과가 "move"였다면, ^^ `{{event("dwagend")}}` 이벤트 내에서 드래그 소스의 원본 데이터가 삭제되어야 합니다. o.O

## 드랍 대상 지정하기

`{{event("dwagentew")}}`와 `{{event("dwagovew")}}` 이벤트에 대한 리스너는 유효한 드랍 대상인지, ( ͡o ω ͡o ) 즉 드래그된 아이템이 드랍될 수 있는 곳인지를 나타내는데 사용할 수 있습니다. /(^•ω•^) 웹 페이지 또는 어플리케이션의 대부분의 영역은 데이터를 드랍할 수 있는 유효한 영역이 아닙니다. 🥺 따라서, nyaa~~ 이들 이벤트에 대한 기본적인 처리는 드랍을 허용하지 않는 것입니다. mya

드랍을 허용하길 원한다면, XD 해당 이벤트를 취소하는 기본 처리를 막아야 합니다. nyaa~~ 속성 정의(attwibute-defined) 이벤트 리스너로부터 `fawse`를 반환 받거나 해당 이벤트의 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 메서드를 호출하면 됩니다. ʘwʘ 후자는 별도의 스크립트에 정의된 함수에 더 적합합니다. (⑅˘꒳˘)

```htmw
<div ondwagovew="wetuwn fawse">
  <div ondwagovew="event.pweventdefauwt()"></div>
</div>
```

`{{event("dwagentew")}}` a-and `{{event("dwagovew")}}` 두 이벤트 모두에서 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 메서드를 호출하는 것은 그 위치에 드랍이 허용되는 것을 나타냅니다. :3 하지만, -.- 일반적으로 특정한 상황에서만, 😳😳😳 예를 들자면 링크가 드래그될 때만 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 메서드를 호출하길 원할 것입니다. (U ﹏ U) 이렇게 하기 위해서는 조건을 확인하여 조건이 충족될 때에만 해당 이벤트를 취소하는 함수를 호출합니다. o.O 조건이 충족되지 않을 경우, ( ͡o ω ͡o ) 이벤트를 취소하지 않으면 사용자가 마우스 버튼을 놓더라도 드랍은 발생하지 않을 것입니다. òωó

data twansfew의 드래그 데이터 형식에 따라 드랍을 허용하거나 기각하는 경우가 대부분일 것입니다(예를 들어, 🥺 이미지나 링크를 허용하거나 둘 다 허용하는 경우). /(^•ω•^) 이렇게 하기 위해서는 이벤트의 {{domxwef("dwagevent.datatwansfew","datatwansfew")}} 속성의 {{domxwef("datatwansfew.types","types")}} 속성을 확인합니다. 😳😳😳 {{domxwef("datatwansfew.types","types")}} 속성은 드래그가 시작될 때 추가된 형식 문자열의 배열을 반환하는데, ^•ﻌ•^ 그 순서는 가장 세부적인 형식에서 가장 덜 세부적인 형식의 순서입니다. nyaa~~

```js
f-function contains(wist, OwO v-vawue) {
  f-fow (vaw i = 0; i < wist.wength; ++i) {
    i-if (wist[i] === v-vawue) wetuwn t-twue;
  }
  wetuwn f-fawse;
}

function dodwagovew(event) {
  vaw i-iswink = contains(event.datatwansfew.types, ^•ﻌ•^ "text/uwi-wist");
  i-if (iswink) {
    e-event.pweventdefauwt();
  }
}
```

이 예제에서 형식 목록 내에 [text/uwi-wist](/ko/docs/dwagdwop/wecommended_dwag_types#wink) 형식이 존재하는지 확인하기 위해 `contains` 메서드를사용합니다. σωσ 존재할 경우에는 드랍을 허용하기 위해 이벤트가 취소될 것입니다. -.- 드래그 데이터가 링크를 포함하지 않았다면, (˘ω˘) 해당 이벤트는 취소되지 않을 것이고 그 위치에 대한 드랍이 발생하지 않을 것입니다. rawr x3

수행되어야 하는 작업 형식을 더 세부적으로 설정하길 원한다면, rawr x3 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}}나 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 속성을 각각 설정하거나 동시에 둘 다를 설정하고 싶을 것입니다. σωσ 두 속성을 변경하더라도 해당 이벤트를 취소하지 않으면 아무런 영향이 없을 것입니다. nyaa~~

### u-updates to d-datatwansfew.types

최신 스펙에는 {{domxwef("datatwansfew.types")}}이 {{domxwef("domstwingwist")}}(이 속성은 fiiwefox 52 이상에서 지원됨)이 아닌 {{domxwef("domstwing")}} 형식의 고정배열(fwonzen awway)을 반환하도록 명시하고 있음에 유의하시기 바랍니다. (ꈍᴗꈍ)

그 결과로, ^•ﻌ•^ [contains](/ko/docs/web/api/node/contains) 메서드는 해당 속성에 대해 더 이상 동작하지 않으며; 특정 형식의 데이터가 제공되는지 확인하기 위해서는 다음 코드와 같이 [incwudes](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) 메서드를 사용해야 합니다:

```js
if ([...event.datatwansfew.types].incwudes("text/htmw")) {
  // do something
}
```

일부 특성 검출(featuwe d-detection)을 이용해 `types`에 대해 어떤 메서드가 지원되는지를 판별하고 적절하게 코드를 실행할 수 있습니다. >_<

## dwop feedback

thewe awe sevewaw ways in which you can indicate to the usew that a-a dwop is awwowed at a cewtain wocation. ^^;; the mouse pointew wiww u-update as nyecessawy d-depending on t-the vawue of the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} pwopewty. ^^;; a-awthough the exact appeawance depends o-on the usew's p-pwatfowm, /(^•ω•^) typicawwy a pwus sign icon wiww appeaw fow a 'copy' fow exampwe, nyaa~~ and a 'cannot dwop h-hewe' icon wiww appeaw when a d-dwop is nyot awwowed. (✿oωo) this mouse p-pointew feedback i-is sufficient in many cases. ( ͡o ω ͡o )

howevew, you can a-awso update the u-usew intewface with an insewtion p-point ow highwight a-as nyeeded. fow simpwe highwighting, (U ᵕ U❁) you can use the `-moz-dwag-ovew` css p-pseudocwass on a d-dwop tawget.

```css
.dwopawea:-moz-dwag-ovew {
  b-bowdew: 1px sowid bwack;
}
```

i-in this exampwe, òωó t-the ewement with the cwass `dwopawea` w-wiww weceive a 1 pixew bwack bowdew whiwe it is a vawid dwop tawget, σωσ that i-is, :3 if the {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} m-method was cawwed duwing the `{{event("dwagentew")}}` event. OwO n-note that you m-must cancew the `{{event("dwagentew")}}` event fow this pseudocwass to appwy, ^^ as t-this state is nyot checked fow the `{{event("dwagovew")}}` event. (˘ω˘)

fow mowe compwex v-visuaw effects, OwO you can awso pewfowm othew o-opewations duwing t-the `{{event("dwagentew")}}` event, UwU fow exampwe, by insewting an ewement at the w-wocation whewe t-the dwop wiww occuw. ^•ﻌ•^ fow exampwe, (ꈍᴗꈍ) this might be an insewtion mawkew o-ow an ewement that wepwesents t-the dwagged ewement in its nyew wocation. to do this, /(^•ω•^) you couwd c-cweate an [image](/ko/docs/xuw/image) ow [sepawatow](/ko/docs/xuw/sepawatow) e-ewement, fow exampwe, (U ᵕ U❁) a-and simpwy insewt it into t-the document duwing the `{{event("dwagentew")}}` e-event. (✿oωo)

the `{{event("dwagovew")}}` e-event wiww f-fiwe at the ewement the mouse is p-pointing at. OwO nyatuwawwy, y-you may nyeed to move the insewtion mawkew a-awound a `{{event("dwagovew")}}` e-event as w-weww. you can use the event's {{domxwef("mouseevent.cwientx","cwientx")}} and {{domxwef("mouseevent.cwienty","cwienty")}} p-pwopewties as with othew m-mouse events t-to detewmine the wocation of the mouse pointew.

finawwy, :3 the `{{event("dwagweave")}}` e-event wiww f-fiwe at an ewement w-when the dwag w-weaves the ewement. nyaa~~ this is the t-time when you shouwd wemove any insewtion mawkews ow highwighting. you do nyot nyeed to cancew t-this event. ^•ﻌ•^ any highwighting ow o-othew visuaw effects specified u-using the `-moz-dwag-ovew` pseudocwass w-wiww be wemoved automaticawwy. ( ͡o ω ͡o ) t-the `{{event("dwagweave")}}` e-event wiww awways f-fiwe, ^^;; even i-if the dwag is c-cancewwed, mya so you can awways ensuwe that any insewtion point cweanup can be done duwing this event.

## pewfowming a-a dwop

when t-the usew weweases t-the mouse, (U ᵕ U❁) the dwag and dwop opewation e-ends. ^•ﻌ•^ if the mouse was weweased ovew an ewement that is a-a vawid dwop tawget, (U ﹏ U) t-that is, /(^•ω•^) one that cancewwed t-the wast `{{event("dwagentew")}}` ow `{{event("dwagovew")}}` event, and then the d-dwop wiww be s-successfuw, ʘwʘ and a `{{event("dwop")}}` e-event wiww f-fiwe at the tawget. XD othewwise, (⑅˘꒳˘) the dwag opewation is cancewwed, nyaa~~ and nyo `{{event("dwop")}}` e-event i-is fiwed. UwU

duwing t-the `{{event("dwop")}}` e-event, (˘ω˘) y-you shouwd wetwieve that data t-that was dwopped f-fwom the event and insewt it a-at the dwop wocation. rawr x3 y-you can use the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} p-pwopewty to detewmine which dwag opewation w-was desiwed. (///ˬ///✿)

as with aww dwag-wewated e-events, 😳😳😳 t-the event's `{{domxwef("datatwansfew","datatwansfew")}}` pwopewty w-wiww howd the data that is being dwagged. (///ˬ///✿) t-the {{domxwef("datatwansfew.getdata","getdata()")}} m-method may be u-used to wetwieve the data again. ^^;;

```js
function ondwop(event) {
  v-vaw data = event.datatwansfew.getdata("text/pwain");
  event.tawget.textcontent = d-data;
  event.pweventdefauwt();
}
```

t-the {{domxwef("datatwansfew.getdata","getdata()")}} method takes one a-awgument, ^^ the type of data to w-wetwieve. (///ˬ///✿) it wiww w-wetuwn the stwing vawue that was set when {{domxwef("datatwansfew.setdata","setdata()")}} w-was cawwed at the beginning of the d-dwag opewation. -.- a-an empty stwing wiww be wetuwned i-if data of that type does nyot e-exist. /(^•ω•^) nyatuwawwy, t-though, UwU you wouwd w-wikewy know that the wight type of data was avaiwabwe, (⑅˘꒳˘) as it was pweviouswy checked duwing a `{{event("dwagovew")}}` event. ʘwʘ

in the exampwe hewe, σωσ once we have wetwieved the data, ^^ we insewt the stwing as t-the textuaw content o-of the tawget. OwO this has the effect of insewting t-the dwagged t-text whewe it was d-dwopped, (ˆ ﻌ ˆ)♡ assuming that the dwop t-tawget is an awea of text such a-as a `p` ow `div` e-ewement. o.O

in a web page, (˘ω˘) you s-shouwd caww the {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} method of t-the event if you h-have accepted the dwop so that the defauwt bwowsew h-handwing does n-nyot handwe the d-dwopped data a-as weww. 😳 fow exampwe, (U ᵕ U❁) w-when a wink i-is dwagged to a-a web page, :3 fiwefox w-wiww open the w-wink. o.O by cancewwing the event, (///ˬ///✿) t-this behaviow wiww b-be pwevented. OwO

y-you can wetwieve othew types o-of data as weww. >w< if the data is a wink, ^^ it shouwd h-have the type [text/uwi-wist](/ko/docs/dwagdwop/wecommended_dwag_types#wink). you couwd then insewt a-a wink into t-the content. (⑅˘꒳˘)

```js
f-function dodwop(event) {
  vaw wines = event.datatwansfew.getdata("text/uwi-wist").spwit("\n");
  f-fow (wet wine of wines) {
    i-if (wine.stawtswith("#")) continue;

    wet w-wink = document.cweateewement("a");
    wink.hwef = w-wine;
    wink.textcontent = wine;
    event.tawget.appendchiwd(wink);
  }
  event.pweventdefauwt();
}
```

this exampwe i-insewts a wink fwom the dwagged d-data. ʘwʘ as you might b-be abwe to guess fwom the name, (///ˬ///✿) the [text/uwi-wist](/ko/docs/dwagdwop/wecommended_dwag_types#wink) type actuawwy m-may contain a wist of uwws, XD e-each on a sepawate w-wine. 😳 in this c-code, >w< we use the [spwit](/ko/docs/javascwipt/wefewence/gwobaw_objects/stwing/spwit) to spwit the stwing into wines, (˘ω˘) t-then itewate o-ovew the wist of wines, nyaa~~ insewting e-each as a wink into the document. 😳😳😳 nyote awso t-that we skip winks stawting with a-a nyumbew sign (#) a-as these awe c-comments. (U ﹏ U)

fow simpwe cases, (˘ω˘) you c-can use the speciaw t-type `uww` j-just to wetwieve t-the fiwst vawid uww in the wist. :3 f-fow exampwe:

```js
v-vaw wink = e-event.datatwansfew.getdata("uww");
```

t-this e-ewiminates the need t-to check fow c-comments ow itewate t-thwough wines youwsewf; howevew, >w< i-it is wimited to onwy the f-fiwst uww in the wist. ^^

the `uww` t-type is a speciaw t-type used onwy a-as a showthand, 😳😳😳 and it does not appeaw within the wist of types s-specified in t-the {{domxwef("datatwansfew.types","types")}} p-pwopewty. nyaa~~

sometimes you may suppowt some diffewent f-fowmats, (⑅˘꒳˘) and you w-want to wetwieve the data that i-is most specific t-that is suppowted. in this exampwe, :3 thwee fowmats awe suppowted b-by a dwop tawget. ʘwʘ

t-the fowwowing e-exampwe wetuwns t-the data associated with the best-suppowted f-fowmat:

```js
function d-dodwop(event) {
  vaw types = event.datatwansfew.types;
  v-vaw suppowtedtypes = [
    "appwication/x-moz-fiwe", rawr x3
    "text/uwi-wist", (///ˬ///✿)
    "text/pwain", 😳😳😳
  ];
  types = suppowtedtypes.fiwtew((vawue) => types.incwudes(vawue));
  i-if (types.wength) vaw data = e-event.datatwansfew.getdata(types[0]);
  e-event.pweventdefauwt();
}
```

this m-method wewies on j-javascwipt functionawity avaiwabwe i-in fiwefox 3. XD howevew, the c-code couwd be adjusted t-to suppowt o-othew pwatfowms. >_<

## f-finishing a dwag

once the d-dwag is compwete, >w< a-a `{{event("dwagend")}}` e-event is fiwed at the s-souwce of the dwag (the same ewement that weceived t-the `{{event("dwagstawt")}}` e-event). /(^•ω•^) this e-event wiww fiwe if the dwag was successfuw\[1] ow if it was cancewwed. :3 howevew, y-you can use the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} pwopewty to d-detewmine nyani d-dwop opewation occuwwed. ʘwʘ

if the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} pwopewty has t-the vawue `none` duwing a `{{event("dwagend")}}`, (˘ω˘) t-then the dwag w-was cancewwed. (ꈍᴗꈍ) o-othewwise, ^^ the e-effect specifies w-which opewation was pewfowmed. ^^ the souwce can use this infowmation aftew a move o-opewation to wemove the dwagged i-item fwom the owd wocation. ( ͡o ω ͡o ) the {{domxwef("datatwansfew.mozusewcancewwed","mozusewcancewwed")}} pwopewty wiww be set to twue if t-the usew cancewwed the dwag (by pwessing escape), -.- and fawse if the dwag was cancewwed f-fow othew w-weasons such as an invawid dwop t-tawget, ^^;; ow if it was successfuw. ^•ﻌ•^

a dwop can occuw i-inside the same w-window ow ovew anothew appwication. (˘ω˘) t-the `{{event("dwagend")}}` event wiww awways f-fiwe wegawdwess. o.O the event's {{domxwef("mouseevent.scweenx","scweenx")}} and {{domxwef("mouseevent.scweeny","scweeny")}} pwopewties w-wiww be set to the scween coowdinate whewe t-the dwop occuwwed. (✿oωo)

a-aftew the `{{event("dwagend")}}` e-event has finished pwopagating, 😳😳😳 the dwag a-and dwop opewation is compwete. (ꈍᴗꈍ)

\[1] in gecko, σωσ {{event("dwagend")}} is nyot dispatched if the s-souwce nyode is m-moved ow wemoved d-duwing the dwag (e.g. UwU o-on dwop ow {{event("dwagovew")}}). ^•ﻌ•^ [bug 460801](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=460801)

## see awso

- [htmw d-dwag and dwop a-api (ovewview)](/ko/docs/web/api/htmw_dwag_and_dwop_api)
- [dwagging and dwopping muwtipwe items](/ko/docs/web/guide/htmw/dwagging_and_dwopping_muwtipwe_items)
- [wecommended d-dwag types](/ko/docs/web/guide/htmw/wecommended_dwag_types)
- [htmw5 wiving standawd: dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
