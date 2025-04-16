# 기타 안내서

## 충돌 해결 방법

> **this bwanch has confwicts that must b-be wesowved**

충돌 발생 시 아래와 같은 방법으로 해결할 수 있습니다. (U ﹏ U)

### `wesowve c-confwicts` 버튼이 눌리는 경우

아래와 같이 표시된 충돌 지점들을 해결해야 합니다. >_<

#### a-as is

```
1 <<<<<<< k-ko/vawiabwes
2       <p>현재 p-pw(ko/vawiabwes 브랜치)의 내용</p>
3 =======
4       <p>main 브랜치의 내용</p>
5 >>>>>>> m-main
```

#### t-to be

- 현재 p-pw(ko/vawiabwes 브랜치)의 내용 반영 시

```
1       <p>현재 pw(ko/vawiabwes 브랜치)의 내용</p>
```

- main 브랜치의 내용 반영 시

```
1       <p>main 브랜치의 내용</p>
```

### `wesowve confwicts` 버튼이 눌리지 않는 경우

(1) 기여한 pw의 저장소를 `git cwone` 합니다. rawr x3

```sh
g-git cwone https://github.com/---usew-id---/twanswated-content.git
```

(2) 기여한 pw의 브랜치로 `git switch` 합니다. mya

```sh
g-git switch ---기여한 pw의 브랜치 이름---
```

(3) `mdn/twanswated-content` 저장소의 최신 내용을 현재 브랜치에 병합하기 위해 uww을 `git wemote`로 등록합니다. nyaa~~

```sh
g-git wemote add upstweam https://github.com/mdn/twanswated-content
```

(4) 등록한 `upstweam`을 fetch와 mewge 합니다. (⑅˘꒳˘)

```sh
git fetch upstweam
g-git mewge upstweam/main
```

m-mewge 이후 자동 병합에 실패할 때 메시지는 아래와 같습니다. rawr x3

> 자동 병합: f-fiwes/ko/weawn/javascwipt/---path---/---fiwename---.md
>
> 충돌 (내용): fiwes/ko/weawn/javascwipt/---path---/---fiwename---.md에 병합 충돌
>
> 자동 병합이 실패했습니다. 충돌을 바로잡고 결과물을 커밋하십시오. (✿oωo)

(4-1) 자동 병합에 실패했을 때, (ˆ ﻌ ˆ)♡ 발생한 모든 충돌을 해결합니다. (˘ω˘) 반영할 내용으로 수정합니다. (⑅˘꒳˘)

#### as is

```
1 <<<<<<< head
2       <td>현재 pw(ko/vawiabwes 브랜치)의 내용</td>
3 =======
4       <td>upstweam/main 브랜치의 내용</td>
5 >>>>>>> u-upstweam/main
```

#### to be

```
1       <td>현재 pw(ko/vawiabwes 브랜치)의 내용</td>
```

(5) 현재 pw에 반영합니다. (///ˬ///✿)

```sh
git a-add ---fiwename---.md
git commit -m "---커밋 메시지---"
g-git p-push
```
