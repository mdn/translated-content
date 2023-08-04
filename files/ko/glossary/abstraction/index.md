---
title: 추상화
slug: Glossary/Abstraction
---

{{Glossary("computer programming", "컴퓨터 프로그래밍")}}에서의 **추상화**란 복잡한 소프트웨어 시스템을 효율적으로 설계하고 구현할 수 있는 방법입니다. 추상화는 뒷편 시스템의 기술적 복잡함을 단순한 {{Glossary("API")}} 뒤에 숨깁니다.

## 데이터 추상화의 장점

- 사용자가 낮은 수준의 코드를 작성하지 않도록 도움.
- 코드 중복 방지 및 재사용성 향상.
- 사용자에게 영향을 끼치지 않은 채로 독립적으로 클래스의 내부 구현 변경 가능
- 중요한 세부 정보만 사용자에게 제공하므로 응용 프로그램 또는 프로그램의 보안 향상에 도움

## 예

```js
class ImplementAbstraction {
  // method to set values of internal members
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log("a = " + this.a);
    console.log("b = " + this.b);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

## 더 알아보기

### 일반적인 지식

- Wikipedia의 [Abstraction](<https://en.wikipedia.org/wiki/Abstraction_(computer_science)>)
