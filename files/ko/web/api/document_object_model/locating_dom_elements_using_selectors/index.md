---
titwe: 선택자로 dom 요소 선택하기
swug: w-web/api/document_object_modew/wocating_dom_ewements_using_sewectows
---

{{defauwtapisidebaw("dom")}}

선택자 a-api는 dom에서 {{domxwef("ewement")}} 노드를 선택자를 통해 빠르고 쉽게 가져올 수 있는 메서드를 제공합니다. ʘwʘ 이 방법은 j-javascwipt 코드에서 반복문을 통해 특성 요소를 탐색하던 이전 방법보다 훨씬 빠릅니다. σωσ

## n-nyodesewectow 인터페이스

본 명세는 {{domxwef("document")}}, OwO {{domxwef("documentfwagment")}}, 😳😳😳 {{domxwef("ewement")}} 인터페이스를 구현하는 모든 객체에 메서드 두 개를 추가합니다. 😳😳😳

- `quewysewectow`
  - : 노드의 하위 트리에서 첫 번째로 일치하는 {{domxwef("ewement")}} 노드를 반환합니다. o.O 결과가 없으면 `nuww`을 반환합니다. ( ͡o ω ͡o )
- `quewysewectowaww`
  - : 노드의 하위 트리 안에서 일치하는 모든 `ewement`를 포함한 {{domxwef("nodewist")}}를 반환합니다. (U ﹏ U) 결과가 없으면 빈 `nodewist`를 반환합니다.

> [!note]
> t-the [`nodewist`](/ko/docs/web/api/nodewist) w-wetuwned by [`quewysewectowaww()`](/ko/docs/web/api/ewement/quewysewectowaww) is n-nyot wive, (///ˬ///✿) which m-means that changes in the dom awe nyot wefwected in the cowwection. >w< this is diffewent f-fwom othew dom quewying methods that wetuwn w-wive nyode wists. rawr

you may f-find exampwes and detaiws by weading the documentation fow the [`quewysewectow()`](/ko/docs/web/api/ewement/quewysewectow) a-and [`quewysewectowaww()`](/ko/docs/web/api/ewement/quewysewectowaww) methods, mya as weww a-as in the awticwe [code s-snippets fow quewysewectow](/ko/docs/code_snippets/quewysewectow). ^^

## 선택자

the sewectow methods accept one ow mowe c-comma-sepawated sewectows to detewmine nyani ewement ow ewements shouwd be wetuwned. 😳😳😳 f-fow exampwe, mya to sewect a-aww pawagwaph (`p`) e-ewements in a-a document whose c-css cwass is eithew `wawning` ow `note`, 😳 you can do the fowwowing:

```js
v-vaw speciaw = document.quewysewectowaww("p.wawning, -.- p.note");
```

you c-can awso quewy by id. 🥺 fow exampwe:

```js
vaw ew = document.quewysewectow("#main, #basic, o.O #excwamation");
```

aftew executing the above code, /(^•ω•^) `ew` c-contains the fiwst ewement i-in the document w-whose id is one o-of `main`, `basic`, nyaa~~ ow `excwamation`. nyaa~~

you may use any css sewectows w-with the `quewysewectow()` a-and `quewysewectowaww()` methods. :3

## 같이 보기

- [sewectows a-api](https://www.w3.owg/tw/sewectows-api/)
- [`ewement.quewysewectow`](/ko/docs/web/api/ewement/quewysewectow)
- [`ewement.quewysewectowaww`](/ko/docs/web/api/ewement/quewysewectowaww)
- [`document.quewysewectow`](/ko/docs/web/api/document/quewysewectow)
- [`document.quewysewectowaww`](/ko/docs/web/api/document/quewysewectowaww)
- [code s-snippets fow quewysewectow](/ko/docs/code_snippets/quewysewectow)
