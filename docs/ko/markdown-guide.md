# MDN ko locale Markdown 번역에 대한 일반 지침 

## 존재하는 파일에 대한 변경 (존재하는 파일이 .html 확장자일 경우)

아래 두 가지 경우에 대해 각각 2개의 commit으로 구분해서 PR을 제출해주세요.

1. 확장자 변경
2. 내용 변경

### 확장자 변경

이전 html 파일의 Git History 유지를 위해 확장자만 먼저 .html에서 .md로 변경한 후 commit을 해주세요. 확장자 변경 작업이 없을 경우 Git History가 소멸됩니다. 예시는 [확장자 변경 PR](https://github.com/mdn/translated-content/pull/1769/commits/c7937cf2194d218d98394cd7f5f8acebd2e88aa0)를 참고해주세요.

### 내용 변경

html 형식에서 md로 형식으로 변경한 뒤 commit을 해주세요. `존재하는 파일에 대한 변경 (존재하는 파일이 .html 확장자일 경우)`에 대한 PR은 `squash and merge`를 할 수 없기 때문에, **해당 단계의 commit의 개수를 1개를 넘지 않게 해주세요.**

### 리뷰

리뷰로 인해 수정사항이 발생할 경우, 예외적으로 **수정 사항에 대해서 commit의 개수를 1개를 추가적으로 허용합니다.** 

> 참고
> `git log --follow (파일)` 로 해당 파일의 git history를 볼 수 있습니다.

## 그 이외의 경우 (이미 md 파일이 존재하거나, 해당 번역 페이지가 없는 경우)

일반 PR 방식대로 진행합니다.

# MDN ko locale Markdown 번역에 대한 일반 지침 (리뷰어)

1. `존재하는 파일에 대한 변경 (존재하는 파일이 .html 확장자일 경우)`에 대해서는 `squash and merge`가 아닌 `rebase and merge`를 진행해야합니다. 
2. Git History가 유지되는지 확인해주세요.
3. commit의 개수는 최소가 되어야 합니다.
