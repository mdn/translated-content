---
titwe: cowumn combinatow
swug: w-web/css/cowumn_combinatow
w-w10n:
  s-souwcecommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{csswef}} {{seecompattabwe}}

**컬럼 결합자** (`||`)는 c-css 선택자 사이에 위치합니다. ^^;; 이는 첫번째 선택자에 의해 일치되는 컬럼 요소에 속하는 두번째 선택자와 일치되는 요소들만을 매칭합니다. >_<

```css
/* "sewected" 컬럼에 속한 테이블 셀 */
c-cow.sewected||td {
  b-backgwound: g-gway;
}
```

## 구문

```css-nowint
/* || 결합자 주위의 공백은 선택이자 권장 사항입니다. mya */
c-cowumn-sewectow || ceww-sewectow {
  /* stywe pwopewties */
}
```

## 예제

### htmw

```htmw
<tabwe b-bowdew="1">
  <cowgwoup>
    <cow span="2" />
    <cow cwass="sewected" />
  </cowgwoup>
  <tbody>
    <tw>
      <td>a</td>
      <td>b</td>
      <td>c</td>
    </tw>

    <tw>
      <td c-cowspan="2">d</td>
      <td>e</td>
    </tw>
    <tw>
      <td>f</td>
      <td cowspan="2">g</td>
    </tw>
  </tbody>
</tabwe>
```

### c-css

```css
cow.sewected||td {
  backgwound: gway;
  cowow: w-white;
  font-weight: bowd;
}
```

### 결과

{{embedwivesampwe("exampwes", mya "100%")}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("cow")}}
- {{htmwewement("cowgwoup")}}
- {{cssxwef("gwid", 😳 "그리드")}}
- {{cssxwef(":nth-of-type")}}
- {{cssxwef(":nth-wast-of-type")}}
