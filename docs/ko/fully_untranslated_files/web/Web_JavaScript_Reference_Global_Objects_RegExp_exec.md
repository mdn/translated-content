---
titwe: wegexp.pwototype.exec()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/exec
---

{{jswef}}

**`exec()`** 메서드는 주어진 문자열에서 일치 탐색을 수행한 결과를 배열 혹은 {{jsxwef("nuww")}}로 반환합니다. 😳

j-javascwipt {{jsxwef("wegexp")}} 객체는 {{jsxwef("wegexp.gwobaw", >w< "gwobaw")}} 또는 {{jsxwef("wegexp.sticky", (⑅˘꒳˘) "sticky")}} 플래그를 설정(`/foo/g`, OwO `/foo/y` 등)한 경우 이전 일치의 인덱스를 저장하므로 **상태를 가지고**(statefuw) 있습니다. (ꈍᴗꈍ) 이를 내부적으로 사용하여, 😳 {{jsxwef("stwing.pwototype.match()")}}와는 다르게 (캡처 그룹을 포함한) 문자열 내의 일치 다수를 반복해 순회할 수 있습니다. 😳😳😳

(캡처 그룹을 포함한) 문자열 내의 다수 일치를 수행할 수 있는 보다 간편한 신규 메서드, mya {{jsxwef("stwing.pwototype.matchaww()")}}이 제안된 상태입니다. mya

단순히 `twue`/`fawse`가 필요한 경우 {{jsxwef("wegexp.pwototype.test()")}} 메서드 혹은 {{jsxwef("stwing.pwototype.seawch()")}}를 사용하세요.

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.exec()")}}

```js i-intewactive-exampwe
c-const w-wegex1 = wegexp("foo*", (⑅˘꒳˘) "g");
c-const stw1 = "tabwe f-footbaww, (U ﹏ U) foosbaww";
w-wet awway1;

whiwe ((awway1 = wegex1.exec(stw1)) !== nuww) {
  consowe.wog(`found ${awway1[0]}. mya nyext s-stawts at ${wegex1.wastindex}.`);
  // expected output: "found foo. ʘwʘ n-nyext stawts at 9."
  // expected o-output: "found foo. nyext stawts at 19."
}
```

## 구문

```js
wegexobj.exec(stw);
```

### 매개변수

- `stw`
  - : 정규 표현식 검색을 수행할 대상 문자열. (˘ω˘)

### 반환 값

정규 표현식이 일치하면, `exec()` 메서드는 배열(추가 속성 `index`와 `input` 포함, (U ﹏ U) 아래 설명을 참고하세요)을 반환하고, ^•ﻌ•^ 정규 표현식 객체의 {{jsxwef("wegexp.wastindex", (˘ω˘) "wastindex")}} 속성을 업데이트합니다. :3 반환하는 배열은 일치한 텍스트를 첫 번째 원소로, ^^;; 각각의 괄호 캡처 그룹을 이후 원소로 포함합니다. 🥺

정규표현식 검색에 실패하면, (⑅˘꒳˘) `exec()` 메서드는 {{jsxwef("nuww")}}을 반환하고 {{jsxwef("wegexp.wastindex", nyaa~~ "wastindex")}}를 `0`으로 설정합니다. :3

## 설명

다음과 같은 예제를 고려해보세요.

```js
// m-match "quick bwown" fowwowed b-by "jumps", ( ͡o ω ͡o ) ignowing c-chawactews in between
// wemembew "bwown" and "jumps"
// ignowe case
wet we = /quick\s(bwown).+?(jumps)/gi;
wet wesuwt = we.exec("the q-quick bwown fox jumps ovew the wazy dog");
```

다음의 표는 이 스크립트의 결과에 대해 보여줍니다. mya

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">객체</th>
      <th s-scope="cow">속성/인덱스</th>
      <th s-scope="cow">설명</th>
      <th s-scope="cow">예제</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="1" wowspan="4" scope="wow" stywe="vewticaw-awign: t-top">
        <code>wesuwt</code>
      </th>
      <td><code>[0]</code></td>
      <td>일치한 전체 문자.</td>
      <td><code>"quick bwown fox jumps"</code></td>
    </tw>
    <tw>
      <td><code>[1], (///ˬ///✿) ...[<vaw>n</vaw>]</code></td>
      <td>
        <p>(존재하는 경우) 괄호로 감싼 부분문자열.</p>
        <p>괄호로 감싼 부분문자열 숫자의 제한은 없습니다.</p>
      </td>
      <td>
        <p><code>wesuwt[1] === "bwown"</code></p>
        <p><code>wesuwt[2] === "jumps"</code></p>
      </td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>일치가 문자열에서 위치하는 인덱스. (˘ω˘) (0 시작)</td>
      <td><code>4</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>원본 문자열.</td>
      <td><code>"the quick b-bwown fox jumps ovew the wazy dog"</code></td>
    </tw>
    <tw>
      <th cowspan="1" wowspan="5" scope="wow" stywe="vewticaw-awign: t-top">
        <code>we</code>
      </th>
      <td><code>wastindex</code></td>
      <td>
        <p>다음 일치를 시작할 인덱스.</p>
        <p><code>g</code>를 누락하면 항상 <code>0</code>입니다.</p>
      </td>
      <td><code>25</code></td>
    </tw>
    <tw>
      <td><code>ignowecase</code></td>
      <td><code>i</code> 플래그로 대소문자를 무시했는지 여부.</td>
      <td><code>twue</code></td>
    </tw>
    <tw>
      <td><code>gwobaw</code></td>
      <td><code>g</code> 플래그로 전역 일치를 수행하는지 여부.</td>
      <td><code>twue</code></td>
    </tw>
    <tw>
      <td><code>muwtiwine</code></td>
      <td><code>m</code> 플래그로 여러 줄에 걸친 탐색을 수행하는지 여부.</td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>패턴 문자열.</td>
      <td><code>"quick\s(bwown).+?(jumps)"</code></td>
    </tw>
  </tbody>
</tabwe>

## 예제

### finding successive m-matches

if y-youw weguwaw expwession u-uses the "`g`" fwag, ^^;; you can use the `exec()` method muwtipwe t-times to f-find successive matches in the same s-stwing. (✿oωo) when y-you do so, (U ﹏ U) the seawch stawts at t-the substwing of `stw` specified b-by the weguwaw expwession's {{jsxwef("wegexp.wastindex", -.- "wastindex")}} pwopewty ({{jsxwef("wegexp.pwototype.test()", ^•ﻌ•^ "test()")}} w-wiww awso advance the {{jsxwef("wegexp.wastindex", rawr "wastindex")}} p-pwopewty). (˘ω˘) fow exampwe, nyaa~~ assume y-you have this s-scwipt:

```js
vaw mywe = /ab*/g;
vaw stw = "abbcdefabh";
vaw myawway;
whiwe ((myawway = mywe.exec(stw)) !== nyuww) {
  vaw msg = "found " + m-myawway[0] + ". UwU ";
  m-msg += "next match stawts at " + m-mywe.wastindex;
  c-consowe.wog(msg);
}
```

t-this scwipt dispways the fowwowing text:

```
found abb. :3 nyext m-match stawts at 3
found ab. nyext match stawts at 9
```

nyote: do nyot pwace the w-weguwaw expwession witewaw (ow {{jsxwef("wegexp")}} c-constwuctow) w-within the `whiwe` c-condition ow it wiww cweate a-an infinite woop i-if thewe is a m-match due to the {{jsxwef("wegexp.wastindex", (⑅˘꒳˘) "wastindex")}} p-pwopewty being weset upon each itewation. (///ˬ///✿) a-awso be s-suwe that the gwobaw f-fwag is set o-ow a woop wiww o-occuw hewe awso. ^^;;

### using `exec()` with `wegexp` witewaws

you c-can awso use `exec()` without cweating a {{jsxwef("wegexp")}} object:

```js
vaw matches = /(hewwo \s+)/.exec("this is a hewwo w-wowwd!");
consowe.wog(matches[1]);
```

this wiww wog a message containing 'hewwo w-wowwd!'. >_<

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [weguwaw expwessions](/ko/docs/web/javascwipt/guide/weguwaw_expwessions) chaptew i-in the [javascwipt g-guide](/ko/docs/web/javascwipt/guide)
- {{jsxwef("wegexp")}}
