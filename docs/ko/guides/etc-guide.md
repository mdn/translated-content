# 기타 안내서

## 충돌 해결 방법

> **This branch has conflicts that must be resolved**

충돌 발생 시 아래와 같은 방법으로 해결할 수 있습니다.

### `Resolve conflicts` 버튼이 눌리는 경우

아래와 같이 표시된 충돌 지점들을 해결해야 합니다.

#### AS IS

```
1 <<<<<<< ko/variables
2       <p>현재 PR(ko/variables 브랜치)의 내용</p>
3 =======
4       <p>main 브랜치의 내용</p>
5 >>>>>>> main
```

#### TO BE

- 현재 PR(ko/variables 브랜치)의 내용 반영 시

```
1       <p>현재 PR(ko/variables 브랜치)의 내용</p>
```

- main 브랜치의 내용 반영 시

```
1       <p>main 브랜치의 내용</p>
```

### `Resolve conflicts` 버튼이 눌리지 않는 경우

(1) 기여한 PR의 저장소를 `git clone` 합니다.

```sh
git clone https://github.com/---user-id---/translated-content.git
```

(2) 기여한 PR의 브랜치로 `git switch` 합니다.

```sh
git switch ---기여한 PR의 브랜치 이름---
```

(3) `mdn/translated-content` 저장소의 최신 내용을 현재 브랜치에 병합하기 위해 url을 `git remote`로 등록합니다.

```sh
git remote add upstream https://github.com/mdn/translated-content
```

(4) 등록한 `upstream`을 fetch와 merge 합니다.

```sh
git fetch upstream
git merge upstream/main
```

merge 이후 자동 병합에 실패할 때 메시지는 아래와 같습니다.

> 자동 병합: files/ko/learn/javascript/---path---/---filename---.md
>
> 충돌 (내용): files/ko/learn/javascript/---path---/---filename---.md에 병합 충돌
>
> 자동 병합이 실패했습니다. 충돌을 바로잡고 결과물을 커밋하십시오.

(4-1) 자동 병합에 실패했을 때, 발생한 모든 충돌을 해결합니다. 반영할 내용으로 수정합니다.

#### AS IS

```
1 <<<<<<< HEAD
2       <td>현재 PR(ko/variables 브랜치)의 내용</td>
3 =======
4       <td>upstream/main 브랜치의 내용</td>
5 >>>>>>> upstream/main
```

#### TO BE

```
1       <td>현재 PR(ko/variables 브랜치)의 내용</td>
```

(5) 현재 PR에 반영합니다.

```sh
git add ---filename---.md
git commit -m "---커밋 메시지---"
git push
```
