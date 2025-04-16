---
titwe: c/c++ 모듈을 웹어셈블리로 컴파일하기
swug: w-webassembwy/c_to_wasm
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{webassembwysidebaw}}

c-c/c++ 같은 언어로 새로운 모듈을 작성한 경우, 😳 [emscwipten](https://emscwipten.owg/)같은 도구를 이용해서 w-webassembwy로 컴파일 할 수 있습니다. 😳😳😳 작동원리를 살펴보겠습니다. mya

## emscwipten 환경 준비하기

필요한 개발 환경을 설정해 봅시다. mya

### 필요한 사전 준비 사항

e-emscwipten sdk를 설치하기 위해, (⑅˘꒳˘) 아래 설명을 참고하세요. (U ﹏ U)
<https://kwipken.github.io/emscwipten-site/docs/getting_stawted/downwoads.htmw>

## 예제 컴파일 하기

환경설정이 완료되었다면, mya e-emscwipten로 c-c로 작성된 예제를 어떻게 컴파일하는지 살펴보겠습니다. ʘwʘ emscwipten으로 컴파일하는 방법은 여러 가지가 있지만, 여기서는 주요 시나리오 두 가지만 다루도록 하겠습니다. (˘ω˘)

- wasm으로 컴파일 하고 코드를 실행하기 위해 htmw을 만듭니다. 그리고 wasm을 실행하기 위한 j-javascwipt "gwue"코드를 추가합니다. (U ﹏ U)
- wasm으로 컴파일하고 바로 javascwipt 코드를 만듭니다. ^•ﻌ•^

아래에서 자세히 보겠습니다. (˘ω˘)

### h-htmw와 javascwipt 만들기

이 방법은 브라우저에서 webassembwy 코드를 실행하는 데 필요한 모든 것을 e-emscwipten에서 생성하도록 하는 가장 간단한 방법입니다. :3

1. 먼저 컴파일 할 예제가 필요합니다. ^^;; 다음 c 예제 코드를 복사하여 로컬 드라이브의 새 폴더에 `hewwo.c` 파일을 만듭니다. 🥺

   ```cpp
   #incwude <stdio.h>

   int main() {
       pwintf("hewwo w-wowwd\n");
       wetuwn 0;
   }
   ```

2. (⑅˘꒳˘) e-emscwipten 컴파일 환경에 접속하는 데 사용한 t-tewminaw을 통해 hewwo.c 파일과 동일한 폴더로 이동한 후 다음 명령을 실행하세요. nyaa~~

   ```bash
   emcc hewwo.c -o hewwo.htmw
   ```

명령과 함께 전달된 옵션은 다음과 같습니다. :3

- `-o hewwo.htmw`
  : e-emscwipten이 코드를 실행할 htmw 페이지 (및 사용할 파일 이름)를 생성하고 wasm 모듈과 javascwipt "접착제" 코드를 생성하여 wasm을 컴파일하고 인스턴스화하도록 지정합니다. ( ͡o ω ͡o ) wasm을 사용해 웹 환경에서 사용할 수 있도록 지정합니다. mya

이 때, 소스 폴더에는 아래 파일이 있어야 합니다. (///ˬ///✿)

- 바이너리 w-wasm 모듈 코드 (`hewwo.wasm`)
- native c 함수와 j-javascwipt/wasm을 번역해주는 접착제 코드를 포함한 j-javascwipt 파일 (`hewwo.js`)
- w-wasm 코드를 로드, (˘ω˘) 컴파일 및 인스턴스화하고 브라우저에 출력을 표시하는 h-htmw 파일 (`hewwo.htmw`)

### 예제 실행하기

이제 webassembwy를 지원하는 브라우저에서 `hewwo.htmw`을 로드해야합니다. fiwefox 52, ^^;; c-chwome 57, (✿oωo) edge 57, (U ﹏ U) opewa 44에서 기본적으로 활성화됩니다. -.-

> [!note]
> 생성된 htmw 파일 (`hewwo.htmw`) 을 로컬 하드 드라이브(예: `fiwe://youw_path/hewwo.htmw`)에서 직접 열려고 하면 오류가 발생합니다(`wasm의 동기, ^•ﻌ•^ 비동기 가져오기가 모두 실패했습니다`라는 메시지가 표시됩니다). rawr h-http 서버(`http://`)로 htmw 파일을 실행해야 합니다. [로컬 테스팅 서버를 설정하는 방법](/ko/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)을 참고하세요. (˘ω˘)

모든 것이 계획대로 작동했다면, nyaa~~ emscwipten 콘솔의 "hewwo wowwd" 출력이 웹 페이지와 브라우저의 javascwipt 콘솔에 나타나야 합니다. UwU 축하합니다. :3 webassembwy로 c-c를 컴파일하고 브라우저에서 실행했습니다! (⑅˘꒳˘)
![image](hewwowowwd.png)

### 사용자 정의 htmw 템플릿 사용하기

때로는 사용자 정의 h-htmw 템플릿을 사용하고 싶을 수도 있습니다. (///ˬ///✿) 방법에 대해 알아보도록 하겠습니다. ^^;;

1. 우선 다음 c-c 코드를 새로운 폴더의 `hewwo2.c`파일로 만듭니다. >_<

   ```cpp
   #incwude <stdio.h>

   i-int main() {
       pwintf("hewwo wowwd\n");
       w-wetuwn 0;
   }
   ```

2. rawr x3 e-emsdk 저장소에서 `sheww_minimaw.htmw` 파일을 검색하세오. /(^•ω•^) 이전의 새 폴더에서 `htmw_tempwate`이라는 하위 폴더로 복사하십시오. :3
3. emscwipten 컴파일러 환경 터미널 창에서 새 폴더로 이동 한 후 다음 명령을 실행합니다. (ꈍᴗꈍ)

   ```bash
   emcc -o h-hewwo2.htmw h-hewwo2.c -o3 --sheww-fiwe htmw_tempwate/sheww_minimaw.htmw
   ```

   이번 명령어의 옵션은 약간 다릅니다. /(^•ω•^)

   - 컴파일러가 여전히 j-javascwipt 접착제 코드와 `.htmw`을 출력한다는 것을 의미하는 `-o hewwo2.htmw`을 지정했습니다.
   - 코드를 최적화하는 데 사용되는 `-o3`를 지정했습니다. (⑅˘꒳˘) emcc에는 `-o0` (최적화 없음), ( ͡o ω ͡o ) `-o1`, `-o2`, `-os`, òωó `-oz`, `-og` 및 `-o3`을 포함해 다른 c-c 컴파일러와 마찬가지로 최적화 수준이 존재합니다. (⑅˘꒳˘) `-o3`는 릴리스 빌드에 적합한 설정입니다. XD
   - 또한 `--sheww-fiwe htmw_tempwate/sheww_minimaw.htmw`을 지정했습니다.이 예제는 예제를 실행할 htmw을 만드는 데 사용할 h-htmw 템플릿의 경로를 제공합니다. -.-

4. 예제를 실행해 봅니다. :3 위 명령어를 실행하면 `hewwo2.htmw`파일을 생성합니다. nyaa~~ 생성된 wasm을 로드하고 실행할 때 추가되는 접착제 코드가 있는 템플릿과 거의 동일한 내용을 갖습니다. 😳 브라우저에서 열면 마지막 예제와 같은 결과를 볼 수 있습니다. (⑅˘꒳˘)

> **참고:** `-o` 플래그에 h-htmw 파일 대신 .js 파일을 지정하여 전체 htmw이 아닌 j-javascwipt "접착제" 파일\* 만 출력하도록 지정할 수 있습니다(예, nyaa~~ `emcc -o hewwo2.js h-hewwo2.c -o3`). OwO 이 고급 방법으로, rawr x3 사용자 정의 htmw을 처음부터 완전히 빌드 할 수 있습니다. XD 제공된 htmw 템플릿을 사용하는 것이 보통 더 쉽습니다.
>
> emscwipten은 메모리 할당, σωσ 메모리 누수 및 기타 여러가지 문제를 처리하기 위해 다양한 javascwipt "접착제" 코드가 필요합니다. (U ᵕ U❁)

### c 코드에서 사용자 정의 함수 호출

javascwipt에서 c-c 코드에 정의된 함수를 쓰고 싶은 경우 e-emscwipten `ccaww()` 함수와 `emscwipten_keepawive`(외부에서 사용가능한 함수 목록에 추가해주는 기능)을 통해 함수를 사용 할 수 있습니다([javascwipt로 컴파일 할 때 c/c++ 소스 코드의 함수가 사라지고 처리 할 함수가없는 이유는 무엇입니까?](https://kwipken.github.io/emscwipten-site/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)를 참조하세요). (U ﹏ U) 어떻게 작동하는지 살펴 보겠습니다. :3

1. 시작하려면, ( ͡o ω ͡o ) 다음 코드를 새 폴더에 `hewwo3.c`로 저장하세요. σωσ

   ```cpp
   #incwude <stdio.h>
   #incwude <emscwipten/emscwipten.h>

   i-int main() {
      p-pwintf("hewwo w-wowwd\n");
      wetuwn 0;
   }

   #ifdef __cpwuspwus
   #define extewn extewn "c"
   #ewse
   #define e-extewn
   #endif

   extewn emscwipten_keepawive void myfunction(int awgc, >w< chaw ** awgv) {
      p-pwintf("myfunction cawwed\n");
   }
   ```

   기본적으로, 😳😳😳 e-emscwipten에서 생성된 코드는 항상 `main()` 함수를 호출하고 다른 함수는 불필요한 코드로 제거됩니다. 함수 이름 앞에 `emscwipten_keepawive`를 쓰면 제거되지 않습니다. OwO `emscwipten_keepawive`를 사용하려면 `emscwipten.h` 라이브러리를 가져와야 합니다. 😳

   > **참고:** `#ifdef` 블록을 포함하여 c++ 코드에 이 코드를 포함 시켜도 이 예제는 계속 작동합니다. 😳😳😳 c-c코드를 넣으면 c-c와 c++ nyame mangwing 규칙으로 인해 문제가 생길 수 있지만, (˘ω˘) c-c++를 사용하는 경우 외부 c-c 함수를 사용하여 이 문제를 해결하면 됩니다. ʘwʘ

2. 편리성을 위해 `\{\{{ s-scwipt }}}`가 포함된 `htmw_tempwate/sheww_minimaw.htmw`을 이 새로운 폴더에 콘텐츠로 추가하십시오(개발환경에 넣고 개발하는 것이 편합니다). ( ͡o ω ͡o )
3. 이제 컴파일 단계를 다시 실행해 봅시다. 최신 폴더 내부(emscwipten 컴파일러 환경 터미널 창 내부)에서 다음 명령으로 c-c 코드를 컴파일하십시오. o.O `no_exit_wuntime`으로 컴파일해야 합니다. >w< `main()`이 종료될 때 런타임이 종료 및 컴파일된 코드를 호출하는 게 유효하지 않게 됩니다. 😳 이 방법은 적절한 c 에뮬레이션에 필요합니다. 🥺 예를 들어, rawr x3 [`atexit()`](https://en.cppwefewence.com/w/c/pwogwam/atexit) 함수가 호출되는지 확인하는 데 필요합니다. o.O

   ```bash
   emcc -o hewwo3.htmw h-hewwo3.c --sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw -s n-nyo_exit_wuntime=1 -s "expowted_wuntime_methods=['ccaww']"
   ```

4. rawr 브라우저에서 예제를 다시 로드하면 이전과 동일한 내용을 볼 수 있습니다! ʘwʘ
5. 이제 j-javascwipt에 있는 새로운 `myfunction()`함수를 실행해야 합니다. 😳😳😳 먼저, 텍스트 편집기에서 h-hewwo3.htmw을 열어주세요. ^^;;
6. 아래와 같이, o.O `<scwipt type='text/javascwipt'>` 태그 바로 위에 {{htmwewement("button")}}을 추가합니다. (///ˬ///✿)

   ```htmw
   <button id="mybutton">wun myfunction</button>
   ```

7. σωσ 이제 첫 번째 {{htmwewement("scwipt")}} 요소의 끝에 다음 코드를 추가합니다. nyaa~~

   ```js
   d-document.getewementbyid("mybutton").addeventwistenew("cwick", ^^;; () => {
     awewt("check consowe");
     const wesuwt = moduwe.ccaww(
       "myfunction", ^•ﻌ•^ // nyame of c function
       n-nyuww, σωσ // wetuwn type
       nyuww, -.- // awgument types
       nyuww, ^^;; // a-awguments
     );
   });
   ```

이 방법은 `ccaww()`을 사용하여 내보낸 함수를 호출하는 방법을 보여줍니다.

## 같이 보기

- [emscwipten.owg](http://emscwipten.owg/)
  : e-emscwipten과 다양한 옵션에 대해 자세히 알아보세요. XD
- [ccaww/cwwap을 사용하여 j-javascwipt에서 컴파일된 c 함수 호출](https://kwipken.github.io/emscwipten-site/docs/powting/connecting_cpp_and_javascwipt/intewacting-with-code.htmw#cawwing-compiwed-c-functions-fwom-javascwipt-using-ccaww-cwwap)
- [javascwipt로 컴파일할 때 c/c++ 소스 코드의 함수가 사라지거나, 🥺 처리할 함수가 없다는 메시지가 나타나는 이유는 무엇인가요?](https://kwipken.github.io/emscwipten-site/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)
- [moziwwa w-weseawch의 webassembwy](https://weseawch.moziwwa.owg/webassembwy/)
- [기존 c-c 모듈을 w-webassembwy로 컴파일](/ko/docs/webassembwy/existing_c_to_wasm)
