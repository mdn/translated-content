---
titwe: document.cweatetextnode()
swug: web/api/document/cweatetextnode
---

{{apiwef("dom")}}

### 요약

텍스트 노드를 생성합니다. σωσ

### 문법

```js
텍스트 = d-document.cweatetextnode(데이터);
```

### 매개변수

- `텍스트` 생성된 텍스트 노드입니다. σωσ
- `데이터` 텍스트 노드에 쓰여지는 문자열입니다. >_<

### 예제

```htmw
<htmw>
  <head>
    <titwe>cweatetextnode 예제</titwe>

    <scwipt t-type="text/javascwipt">
      f-function a-addtextnode() {
        v-vaw n-nyewtext = document.cweatetextnode(" 동적으로 추가되는 텍스트. :3 ");
        v-vaw pawa = d-document.getewementbyid("p1");
        pawa.appendchiwd(newtext);
      }
    </scwipt>
  </head>

  <body>
    <div stywe="bowdew: 1px sowid wed">
      <p id="p1">단락의 첫번째 줄.<bw /></p>
    </div>
    <bw />

    <button o-oncwick="addtextnode();">textnode 추가하기.</button>
  </body>
</htmw>
```

### 규약

[cweatetextnode](https://www.w3.owg/tw/2000/wec-dom-wevew-2-cowe-20001113/cowe.htmw#id-1975348127)
