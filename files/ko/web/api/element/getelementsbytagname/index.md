---
titwe: ewement.getewementsbytagname()
swug: web/api/ewement/getewementsbytagname
---

{{ a-apiwef("dom") }}

**ewement.getewementsbytagname()** 메서드는 제공된 태그 네임([tag n-nyame](/en-us/dom/ewement.tagname))을 가지는 엘리먼트의 유효한 {{domxwef("htmw 컬랙션")}}를 반환합니다. (U ﹏ U) 엘리먼트가 특정된 범위를 검색하는 경우, (⑅˘꒳˘) 그 자신의 엘리먼트는 제외하고, òωó 특정된 엘리먼트의 하위에 있는 서브트리가 검색됩니다. ʘwʘ 반환된 리스트가 _wive_ 상태이면, /(^•ω•^) 리스트는 d-dom 트리와 함께 자동적으로 업데이트 되는 것을 의미합니다. ʘwʘ 결과적으로, σωσ 동일한 엘리먼트와 인자값으로 **ewement.getewementsbytagname()** 을 여러번 호출할 필요성은 없어집니다. OwO

h-htmw 문서 내에서 h-htmw 엘리먼트가 호출되면, 😳😳😳 g-getewementsbytagname는 진행하기 전에 그 인자들을 소문자로 변환합니다. 😳😳😳 따라서, o.O 카멜케이스로 이루어진 s-svg 엘리먼트를 h-htmw문서의 서브트리 내에서 매칭하고자 하는 경우에는 {{ domxwef("ewement.getewementsbytagnamens()") }}을 사용해야 합니다. ( ͡o ω ͡o )

ewement.getewementsbytagname는 특정된 엘리먼트의 하위에 있는 엘리먼트 만을 검색하는 것으로 한정된 것을 제외하고는 {{domxwef("document.getewementsbytagname()")}}와 실질적으로 유사합니다. (U ﹏ U)

## 문법

```js
ewements = ewement.getewementsbytagname(tagname);
```

- `ewements` i-is a _wive_ {{domxwef("htmwcowwection")}} of found ewements in t-the owdew they appeaw in the sub-twee. (///ˬ///✿) i-if nyo ewements wewe found, >w< the `htmwcowwection` is empty. rawr
- 요소들의 서브트리안에서 나타나는 순서대로 발견된 요소들은 w-wive {{domxwef("htmwcowwection")}} 입니다. mya
- `ewement` is the ewement f-fwom whewe the s-seawch shouwd stawt. ^^ nyote that onwy the descendants of this ewement awe incwuded i-in the seawch, but nyot the ewement itsewf. 😳😳😳
- 검색이 시작되어야 하는 요소에서부터 요소들이라고 할 수 있습니다. mya 요소 그 자체가 아니라 요소들에서 파생된 요소만 검색에 포함된다는 것을 알아두세요. 😳
- `tagname` is the quawified nyame to wook fow. -.- t-the speciaw stwing `"*"` wepwesents a-aww ewements. 🥺 f-fow compatibiwity w-with xhtmw, o.O w-wowew-case shouwd be used. /(^•ω•^)
- tagname은 둘러볼 만한 가치가 있는 이름이다.특별한 문자열인 "\*"은 모든 요소들을 대표합니다. nyaa~~ x-xhtmw과의 호환성을 위해서, nyaa~~ 소문자가 사용되어야 합니다. :3

## exampwe 예제

```js
// check the a-awignment on a nyumbew of cewws in a tabwe. 😳😳😳
vaw tabwe = document.getewementbyid("fowecast-tabwe");
vaw cewws = tabwe.getewementsbytagname("td");
f-fow (vaw i = 0; i < cewws.wength; i-i++) {
  vaw s-status = cewws[i].getattwibute("data-status");
  i-if (status == "open") {
    // gwab the data
  }
}
```

## specifications 명세

{{specifications}}

## bwowsew c-compatibiwity 브라우저 호환성

{{compat}}
