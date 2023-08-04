---
title: What software do I need to build a website?
slug: Learn/Common_questions/Tools_and_setup/What_software_do_I_need
---

이 글에서, 우리는 당신이 편집하고, 업로드하고, 웹사이트를 볼 때 어떤 소프트웨어 구성품이 필요한 지 제시한다.

<table class="learn-box nostripe standard-table">
  <tbody>
    <tr>
      <th scope="row">요구사항:</th>
      <td>
        <a href="/ko/docs/Learn/page_vs_site_vs_server_vs_search_engine"
          >웹페이지, 웹사이트, 웹서버, 검색엔진의 차이</a
        >를 알아야 한다.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        만약 당신이 웹사이트를 편집하거나 업로드하거나 볼 때, 필요한 소프트웨어
        구성품이 무엇인지 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## 요약

당신은 웹 개발에 필요한 대부분의 프로그램들을 무료로 다운 받을 수 있습니다. 우리는 이 글에서 몇 개의 링크를 제공할 것입니다. 당신은 1) 웹페이지를 생성하고 편집하기, 2) 웹 서버에 파일을 업로드하기, 3) 웹 페이지 보기 를 위한 툴들이 필요할 것입니다.

거의 모든 운영체제는 기본적으로 텍스트 에디터와 웹 뷰어(브라우저)를 포함하고 있습니다. 그래서 보통 웹 서버로 파일을 전송할 소프트웨어 필요합니다.

## Active Learning

_There is no active learning available yet. [Please, consider contributing](/ko/docs/MDN/Getting_started)._

## 깊게 들어가기

### 웹 페이지를 생성하고 편집하기

웹사이트를 생성하고 편집하기 위해, 텍스트 에디터가 필요합니다. 텍스트 에디터는 무서식의 텍스트 파일을 생성하고 수정합니다. (**{{Glossary("RTF")}}** 같은 다른 형식(format)들은, 볼드체와 밑줄같은 포멧을 추가하게 합니다. 이런 포맷들은 웹 페이지를 쓰는 데 적합하지 않습니다.) 당신은 현명하게 텍스트 에디터를 선택해야 합니다. 왜냐하면, 웹사이트를 구축하는 동안에, 광범위하게 사용해야하기 때문입니다.

모든 데스크탑 운영체제는 기본적인 텍스트 에디터가 딸려 있습니다. 이런 에디터들은 모두 간단하지만, 웹페이지 코딩에 특별한 기능들이 부족합니다. 만약 당신이 더 복잡한 것을 원한다면, 많은 이용가능한 다른(third-party) 툴들이 있습니다. 서드-파티 에디터들은 구문 색표시, 자동완성, 섹션접기, 코드검색을 포함하는 추가 기능이 딸려 있습니다. 에디터들의 간략한 리스트입니다:

| 운영 체제 | 내장 에디터                                                                                                                                                                                                                                | Third-party 에디터                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows   | [Notepad](http://en.wikipedia.org/wiki/Notepad_%28software%29)                                                                                                                                                                             | [Notepad++](http://notepad-plus-plus.org/)[Visual Studio Code](https://www.visualstudio.com/)[Web Storm](https://www.jetbrains.com/webstorm/)[Brackets](http://brackets.io/)[ShiftEdit](https://shiftedit.net/) |
| Mac OS    | [TextEdit](http://en.wikipedia.org/wiki/TextEdit)                                                                                                                                                                                          | [TextWrangler](http://www.barebones.com/products/textwrangler/)[Visual Studio Code](https://www.visualstudio.com/)[Brackets](http://brackets.io/)[ShiftEdit](https://shiftedit.net/)                            |
| Linux     | [Vi](http://en.wikipedia.org/wiki/Vi) (All UNIX) [GEdit](http://en.wikipedia.org/wiki/Gedit) (Gnome) [Kate](http://en.wikipedia.org/wiki/Kate_%28text_editor%29) (KDE) [LeafPad](<http://en.wikipedia.org/wiki/Kate_(text_editor)>) (Xfce) | [Emacs](http://www.gnu.org/software/emacs/) [Vim](http://www.vim.org/)[Visual Studio Code](https://www.visualstudio.com/)[Brackets](http://brackets.io/)[ShiftEdit](https://shiftedit.net/)                     |
| Chrome OS |                                                                                                                                                                                                                                            | [ShiftEdit](https://shiftedit.net/)                                                                                                                                                                             |

이것은 하나의 고급 텍스트 에디터의 스크린샷입니다:

![Screenshot of Notepad++.](notepadplusplus.png)

이것은 온라인 텍스트 에디터의 스크린샷입니다:

![Screenshot of ShiftEdit](shiftedit.png)

### 웹에 파일 업로드하기

당신의 웹사이트가 대중들에게 보여지기 전에, 웹 서버에 웹페이지를 업로드 해야할 것입니다. 당신은 다양한 제공자로부터 서버의 공간을 살 수 있습니다. ([How much does it cost to do something on the web?](/ko/docs/Learn/How_much_does_it_cost)를 보십시오). 일단, 당신이 어떤 제공자를 사용할 지 정했다면, 제공자는 당신에게 FTP(파일 전송 프로토콜) 접근 정보를 이메일로 보낼 것입니다.웹 사이트를 만들 때, 웹 서버에 파일을 업로드 하는 것은 매우 중요한 단계입니다, 그래서 우리는 상세한 부분은 [a separate article(따로 분리한 글)](/ko/docs/Learn/Upload_files_to_a_web_server)에서 다루겠습니다. 아래는 무료 기본 FTP 클라이언트의 목록입니다:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">운영체제</th>
      <th colspan="2" rowspan="1" scope="col" style="text-align: center">
        FTP 소프트웨어
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <p><a href="http://winscp.net" rel="external">WinSCP</a></p>
        <p><a href="http://mobaxterm.mobatek.net/">Moba Xterm</a></p>
      </td>
      <td colspan="1" rowspan="3">
        <p><a href="https://filezilla-project.org/">FileZilla</a> (All OS)</p>
        <p></p>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <a href="https://live.gnome.org/Nautilus" rel="external">Nautilus</a>
        (Gnome)<br /><a href="http://dolphin.com/" rel="external">Dolphin</a>
        (KDE)
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td><a href="http://cyberduck.de/">Cyberduck</a></td>
    </tr>
    <tr>
      <td>Chrome OS</td>
      <td><a href="https://shiftedit.net/">ShiftEdit</a> (All OS)</td>
      <td colspan="1"></td>
    </tr>
  </tbody>
</table>

### 웹사이트 보기

알다시피, 웹사이트를 보기 위해 웹 브라우저가 필요합니다. 개인적인 사용을 위한 [수 십개](http://en.wikipedia.org/wiki/List_of_web_browsers)의 브라우저 선택권이 있습니다. 그러나, 웹 사이트를 개발할 때, 대부분의 사람들이 당신의 사이트를 잘 이용하기 위해서는 다음의 주요 브라우저에서 테스트해야합니다.

- [Mozilla Firefox(파이어폭스)](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome(크롬)](https://www.google.fr/chrome/browser/)
- [Microsoft Internet Explorer(인터넷 익스플로러)](http://windows.microsoft.com/en-US/internet-explorer/download-ie)
- [Apple Safari(사파리)](http://www.apple.com/safari/)

만약 당신이 기술적인 플랫폼이나 국가 등 특정한 그룹을 목적으로 한다면, [Opera](http://www.opera.com/), [Konqueror](http://www.konqueror.org/), [UC Browser](http://www.ucweb.com/ucbrowser/) 같은 추가적인 브라우저도 테스트해야할 지도 모릅니다.

그러나 몇몇의 브라우저는 특정한 운영체제에서만 동작하기 때문에 테스트하는 것이 복잡합니다. 애플의 사파리는 iOS와 Max OS 에서만 동작하는 반면에, 인터넷 익스플로러는 윈도우에서만 동작합니다. [Browsershots](http://browsershots.org/)나 [Browserstack](http://www.browserstack.com/) 같은 서비스를 이용하는 것이 좋습니다. Browsershots은 다양한 브라우저에서 볼 때, 웹사이트의 스크린샷을 제공합니다. Browserstack은 사실 당신에게 가상머신에서 완전한 원거리 접근을 가능하게 해줍니다. 그래서 당신은 대부분의 공통 환경에서 사이트를 테스트할 수 있습니다. 그렇지 않으면, 당신 자신의 가상 머신을 설치하면 됩니다. 하지만 이것은 약간의 전문지식이 필요한 작업입니다. (만약 당신이 이런 길을 가고자 한다면, 마이크로소프트에서는 [modern.ie](https://modern.ie).에서 사용 준비가 완료된 가상 머신이 포함된 개발자를 위한 툴들을 가지고 있습니다.)

물론, 실제 장치에서 몇 번의 테스트를 해봐야한다. 특히, 실제 모바일 장치에서는. 모바일 장치 시뮬레이션은 새롭고, 진화하고 있는 기술이고 데스트탑 시뮬레이션보다 신뢰가 떨어진다. 물론, 모바일 장치는 돈이 든다. 그래서 우리는[Open Device Lab initiative](http://opendevicelab.com/)에서 보는 것을 제안한다. 당신이 너무 많은 소비없이 많은 플랫폼을 테스트하고 싶다면, 장치를 공유할 수 있다.

## 다음 단계

- 몇몇의 소프트웨어는 무료이나, 모두 무료는 아니다. [웹에서 무언가를 하기 위해 얼마나 비용이 드는 지 알아보기](/ko/docs/Learn/Common_questions/How_much_does_it_cost)[.](/ko/docs/Learn/How_much_does_it_cost)
- 당신이 더 많은 텍스트 에디터에 대해 배우고 싶다면, [텍스트 에디터를 선택하고 설치하는 법](/ko/docs/Learn/Choose,_Install_and_set_up_a_text_editor)에 대한 글을 읽으세요.
- 당신이 웹에서 웹사이트를 퍼블리싱하는 법에 대해 궁금하다면, ["웹 서버에 파일을 업로드하는 법"](/ko/docs/Learn/Upload_files_to_a_web_server)을 보십시오.
