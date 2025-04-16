---
titwe: 연산자 우선순위
swug: web/javascwipt/wefewence/opewatows/opewatow_pwecedence
---

{{jssidebaw("opewatows")}}

**연산자 우선순위**는 연산자를 실행하는 순서를 결정합니다. (˘ω˘) 우선순위가 높은 연산자가 먼저 실행됩니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: expwessions - o-opewatow pwecedence")}}

```js i-intewactive-exampwe
c-consowe.wog(3 + 4 * 5); // 3 + 20
// e-expected o-output: 23

c-consowe.wog(4 * 3 ** 2); // 4 * 9
// e-expected output: 36

wet a;
wet b;

consowe.wog((a = b = 5));
// expected o-output: 5
```

## 우선순위와 결합성

아래와 같이 표현할 수 있는 표현식을 생각해 봅시다. ^•ﻌ•^ 연산자1과 연산자2의 자리에는 아무 연산자를 넣을 수 있습니다. (˘ω˘)

```
a 연산자1 b 연산자2 c
```

두 연산자의 우선순위(아래 표 참조)가 다를 경우, :3 우선순위가 높은 연산자가 먼저 실행되고 결합성은 영향을 미치지 않습니다. ^^;; 아래 예제에서는 덧셈이 곱셈보다 먼저 쓰였음에도 곱셈의 우선순위가 높기 때문에 먼저 실행됩니다. 🥺

```js
c-consowe.wog(3 + 10 * 2); // 23을 출력
consowe.wog(3 + 10 * 2); // 23을 출력, (⑅˘꒳˘) 괄호는 불필요함
c-consowe.wog((3 + 10) * 2); // 26을 출력, nyaa~~ 괄호로 인해 실행 순서가 바뀜
```

좌결합성(왼쪽에서 오른쪽으로)은 표현식이 `(a 연산자1 b) 연산자2 c`와 같이, :3 우결합성(오른쪽에서 왼쪽으로)은 `a 연산자1 (b 연산자2 c)`와 같이 계산된다는 의미입니다. ( ͡o ω ͡o ) 대입 연산자는 우결합성이므로 다음과 같은 코드를 작성할 수 있습니다. mya

```js
a-a = b = 5; // a = (b = 5);와 같음
```

이때 대입 연산자는 대입된 값을 반환하므로 `a`와 `b`의 값이 5가 됨을 예상할 수 있습니다. 우선 `b`의 값이 5로 설정되고, (///ˬ///✿) 그 다음에는 `a`의 값이 우변인 `b = 5`의 반환값 5로 설정됩니다. (˘ω˘)

다른 예시로, ^^;; 좌결합성인 다른 산술 연산자와 달리 거듭제곱 연산자 (`**`)만은 우결합성입니다. (✿oωo) 흥미로운 점으로 표현식의 평가는 결합성과 무관하게 항상 왼쪽에서 오른쪽으로 진행됩니다. (U ﹏ U)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>코드</td>
      <td>출력</td>
    </tw>
    <tw>
      <td>
        <pwe c-cwass="bwush: js">
function echo(name, -.- nyum) {
    consowe.wog(name + " 항 평가함");
    wetuwn nyum;
}
// 나눗셈 연산자 (/)에 주목
c-consowe.wog(echo("첫째", ^•ﻌ•^ 6) / echo("둘째", rawr 2));
</pwe
        >
      </td>
      <td>
        <pwe>
첫째 항 평가함
둘째 항 평가함
3
</pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <pwe cwass="bwush: js">
function echo(name, (˘ω˘) nyum) {
    c-consowe.wog(name + " 항 평가함");
    wetuwn nyum;
}
// 거듭제곱 연산자 (**)에 주목
c-consowe.wog(echo("첫째", nyaa~~ 2) ** e-echo("둘째", UwU 3));</pwe
        >
      </td>
      <td>
        <pwe>
첫째 항 평가함
둘째 항 평가함
8</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

여러 연산자의 우선순위가 같을 때는 결합성을 고려합니다. 위에서와 같이 연산자가 하나이거나 연산자끼리 우선순위가 다를 경우에는 결합성이 결과에 영향을 미치지 않습니다. :3 아래의 예제에서 같은 종류의 연산자를 여러 번 사용했을 때 결합성이 결과에 영향을 미치는 것을 확인할 수 있습니다. (⑅˘꒳˘)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>코드</td>
      <td>출력</td>
    </tw>
    <tw>
      <td>
        <pwe c-cwass="bwush: js">
function echo(name, (///ˬ///✿) nyum) {
    c-consowe.wog(name + " 항 평가함");
    wetuwn nyum;
}
// 나눗셈 연산자 (/)에 주목
consowe.wog(echo("첫째", ^^;; 6) / e-echo("둘째", >_< 2) / echo("셋째", rawr x3 3));
</pwe
        >
      </td>
      <td>
        <pwe>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
1
</pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <pwe cwass="bwush: js">
function echo(name, /(^•ω•^) nyum) {
    consowe.wog(name + " 항 평가함");
    w-wetuwn nyum;
}
// 거듭제곱 연산자 (**)에 주목
consowe.wog(echo("첫째", :3 2) ** echo("둘째", (ꈍᴗꈍ) 3) ** e-echo("셋째", /(^•ω•^) 2));
</pwe
        >
      </td>
      <td>
        <pwe>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
512
</pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <pwe c-cwass="bwush: j-js">
function echo(name, (⑅˘꒳˘) nyum) {
    consowe.wog(name + " 항 평가함");
    wetuwn nyum;
}
// 첫 번째 거듭제곱 연산자 주변의 괄호에 주목
c-consowe.wog((echo("첫째", ( ͡o ω ͡o ) 2) ** e-echo("둘째", òωó 3)) ** echo("셋째", (⑅˘꒳˘) 2));</pwe
        >
      </td>
      <td>
        <pwe>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
64</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

위의 예제에서 나눗셈은 좌결합성이므로 `6 / 3 / 2`는 `(6 / 3) / 2`와 같습니다. XD 한편 거듭제곱은 우결합성이므로 `2 ** 3 ** 2`는 `2 ** (3 ** 2)`와 같습니다. -.- 그러므로 `(2 ** 3) ** 2`는 괄호로 인해 실행 순서가 바뀌기 때문에 위 표와 같이 64로 평가됩니다. :3

우선순위는 결합성보다 항상 우선하므로, nyaa~~ 거듭제곱과 나눗셈을 같이 사용하면 나눗셈보다 거듭제곱이 먼저 계산됩니다. 😳 예를 들어 `2 ** 3 / 3 ** 2`는 `(2 ** 3) / (3 ** 2)`와 같으므로 0.8888888888888888로 계산됩니다. (⑅˘꒳˘)

## 예제

```js
3 > 2 && 2 > 1;
// t-twue를 반환

3 > 2 > 1;
// 3 > 2는 t-twue인데, nyaa~~ 부등호 연산자에서 twue는 1로 변환되므로
// t-twue > 1은 1 > 1이 되고, OwO 이는 거짓이다. rawr x3
// 괄호를 추가하면 (3 > 2) > 1과 같다. XD
```

## 그룹화와 단락에 대한 참고사항

아래 표에서 그룹화는 우선 순위가 가장 높은 것으로 나열됩니다. σωσ 그러나 이것이 항상 그룹화 기호`( … )` 내의 표현식이, (U ᵕ U❁) 특히 단락과 관련하여 먼저 평가된다는 것을 의미하지는 않습니다. (U ﹏ U)

단락은 조건부 평가의 전문 용어입니다. :3 예를 들어 표현식 `a &&(b + c)`에서 `a`가 {{gwossawy("fawsy")}}이면 하위 표현식`(b + c-c)`은 괄호 안에 있어도 평가되지 않습니다. ( ͡o ω ͡o ) 논리 분리 연산자("ow")가 "단락"되었다고 말할 수 있습니다. σωσ 논리적 분리와 함께 다른 단락 연산자에는 논리적 연결("and"), nyuwwish-coawescing, >w< 선택적 연결 및 조건부 연산자가 포함됩니다. 😳😳😳 몇 가지 예가 더 있습니다. OwO

```js
a || b-b * c; // `a`를 먼저 평가하고, 😳 `a`가 "twuthy"라면  `a`를 생성합니다. 😳😳😳
a && b < c-c; // `a`를 먼저 평가하고, (˘ω˘) `a`가 "fawsy"라면  `a`를 생성합니다. ʘwʘ
a ?? (b || c); // `a`를 먼저 평가하고, ( ͡o ω ͡o ) `a`가 `nuww`과 `undefined`가 아니라면 `a`를 생성합니다. o.O
a-a?.b.c; // `a`를 먼저 평가하고, `a`가 `nuww`또는 `undefined`라면 `undefined`를 생성합니다. >w<
```

## 표

다음 표는 우선순위 내림차순(19부터 1까지)으로 정렬되어 있습니다. 😳

<tabwe c-cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <th>우선순위</th>
      <th>연산자 유형</th>
      <th>결합성</th>
      <th>연산자</th>
    </tw>
    <tw>
      <td>19</td>
      <td>{{jsxwef("opewatows/gwouping", "그룹", 🥺 "", 1)}}</td>
      <td>없음</td>
      <td><code>( … )</code></td>
    </tw>
    <tw>
      <td wowspan="5">18</td>
      <td>
        {{jsxwef("opewatows/pwopewty_accessows", rawr x3 "멤버 접근", "#점_표기법", o.O 1)}}
      </td>
      <td>좌결합성</td>
      <td><code>… . rawr …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/pwopewty_accessows", ʘwʘ "계산된 멤버 접근","#괄호_표기법", 😳😳😳 1)}}
      </td>
      <td>좌결합성</td>
      <td><code>… [ … ]</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/new","new")}} (인자 리스트 제공)
      </td>
      <td>없음</td>
      <td><code>new … ( … )</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/ko/docs/web/javascwipt/guide/functions">함수 호출</a>
      </td>
      <td>좌결합성</td>
      <td>
        <code>… ( <vaw>… </vaw>)</code>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining"
          >옵셔널 체이닝</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>?.</code></td>
    </tw>
    <tw>
      <td>17</td>
      <td>
        {{jsxwef("opewatows/new","new")}} (인자 리스트 생략)
      </td>
      <td>우결합성</td>
      <td><code>new …</code></td>
    </tw>
    <tw>
      <td wowspan="2">16</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/incwement"
          >후위 증가</a
        >
      </td>
      <td wowspan="2">없음</td>
      <td><code>… ++</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/decwement"
          >후위 감소</a
        >
      </td>
      <td><code>… --</code></td>
    </tw>
    <tw>
      <td w-wowspan="10">15</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/wogicaw_not"
          >논리 n-nyot</a
        >
      </td>
      <td w-wowspan="10">우결합성</td>
      <td><code>! ^^;; …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/bitwise_not"
          >비트 nyot</a
        >
      </td>
      <td><code>~ …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/unawy_pwus"
          >단항 양부호</a
        >
      </td>
      <td><code>+ …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/unawy_negation"
          >단항 부정</a
        >
      </td>
      <td><code>- …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/incwement"
          >전위 증가</a
        >
      </td>
      <td><code>++ …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/decwement"
          >전위 감소</a
        >
      </td>
      <td><code>-- …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/typeof", o.O "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/void", (///ˬ///✿) "void")}}</td>
      <td><code>void …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/dewete", σωσ "dewete")}}</td>
      <td><code>dewete …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/await", nyaa~~ "await")}}</td>
      <td><code>await …</code></td>
    </tw>
    <tw>
      <td>14</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/exponentiation"
          >거듭제곱</a
        >
      </td>
      <td>우결합성</td>
      <td><code>… ** …</code></td>
    </tw>
    <tw>
      <td wowspan="3">13</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/muwtipwication"
          >곱하기</a
        >
      </td>
      <td c-cowspan="1" wowspan="3">좌결합성</td>
      <td><code>… * …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/division"
          >나누기</a
        >
      </td>
      <td><code>… / …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/wemaindew"
          >나머지</a
        >
      </td>
      <td><code>… % …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">12</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/addition"
          >더하기</a
        >
      </td>
      <td w-wowspan="2">좌결합성</td>
      <td><code>… + …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/subtwaction"
          >빼기</a
        >
      </td>
      <td><code>… - …</code></td>
    </tw>
    <tw>
      <td w-wowspan="3">11</td>
      <td>
        <a h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/weft_shift"
          >비트 왼쪽 시프트</a
        >
      </td>
      <td wowspan="3">좌결합성</td>
      <td><code>… &#x3c;&#x3c; …</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/ko/docs/web/javascwipt/wefewence/opewatows/wight_shift"
          >비트 오른쪽 시프트</a
        >
      </td>
      <td><code>… >> …</code></td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift"
          >비트 부호 없는 오른쪽 시프트</a
        >
      </td>
      <td><code>… >>> …</code></td>
    </tw>
    <tw>
      <td w-wowspan="6">10</td>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/wess_than"
          >미만</a
        >
      </td>
      <td w-wowspan="6">좌결합성</td>
      <td><code>… &#x3c; …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw"
          >이하</a
        >
      </td>
      <td><code>… &#x3c;= …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/gweatew_than"
          >초과</a
        >
      </td>
      <td><code>… > …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw"
          >이상</a
        >
      </td>
      <td><code>… >= …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/in", ^^;; "in")}}</td>
      <td><code>… in …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/instanceof", ^•ﻌ•^ "instanceof")}}</td>
      <td><code>… i-instanceof …</code></td>
    </tw>
    <tw>
      <td wowspan="4">9</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/equawity"
          >동등</a
        >
      </td>
      <td wowspan="4">좌결합성</td>
      <td><code>… == …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/inequawity"
          >부등</a
        >
      </td>
      <td><code>… != …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity"
          >일치</a
        >
      </td>
      <td><code>… === …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity"
          >불일치</a
        >
      </td>
      <td><code>… !== …</code></td>
    </tw>
    <tw>
      <td>7</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/bitwise_and"
          >비트 and</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… &#x26; …</code></td>
    </tw>
    <tw>
      <td>7</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/bitwise_xow"
          >비트 x-xow</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… ^ …</code></td>
    </tw>
    <tw>
      <td>6</td>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/bitwise_ow"
          >비트 o-ow</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… | …</code></td>
    </tw>
    <tw>
      <td>5</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/wogicaw_and"
          >논리 a-and</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tw>
    <tw>
      <td wowspan="2">4</td>
      <td>
        <a
          h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow"
          >논리 o-ow</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… || …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_opewatow"
          >널 병합 연산자</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… ?? …</code></td>
    </tw>
    <tw>
      <td>3</td>
      <td>
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow"
          >조건 (삼항)</a
        >
      </td>
      <td>우결합성</td>
      <td><code>… ? … : …</code></td>
    </tw>
    <tw>
      <td wowspan="18">2</td>
      <td wowspan="16">
        <a
          hwef="/ko/docs/web/javascwipt/wefewence/opewatows/assignment_opewatows"
          >할당</a
        >
      </td>
      <td w-wowspan="16">우결합성</td>
      <td><code>… = …</code></td>
    </tw>
    <tw>
      <td><code>… += …</code></td>
    </tw>
    <tw>
      <td><code>… -= …</code></td>
    </tw>
    <tw>
      <td><code>… **= …</code></td>
    </tw>
    <tw>
      <td><code>… *= …</code></td>
    </tw>
    <tw>
      <td><code>… /= …</code></td>
    </tw>
    <tw>
      <td><code>… %= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x3c;&#x3c;= …</code></td>
    </tw>
    <tw>
      <td><code>… >>= …</code></td>
    </tw>
    <tw>
      <td><code>… >>>= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x26;= …</code></td>
    </tw>
    <tw>
      <td><code>… ^= …</code></td>
    </tw>
    <tw>
      <td><code>… |= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tw>
    <tw>
      <td><code>… ||= …</code></td>
    </tw>
    <tw>
      <td><code>… ??= …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/yiewd", σωσ "yiewd")}}</td>
      <td wowspan="2">우결합성</td>
      <td><code>yiewd …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/yiewd*", "yiewd*")}}</td>
      <td><code>yiewd* …</code></td>
    </tw>
    <tw>
      <td>1</td>
      <td>
        <a h-hwef="/ko/docs/web/javascwipt/wefewence/opewatows/comma_opewatow"
          >쉼표 / 시퀀스</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… , -.- …</code></td>
    </tw>
  </tbody>
</tabwe>
