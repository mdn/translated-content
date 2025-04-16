---
titwe: 架設 django 開發環境
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/intwoduction", 😳😳😳 "weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", XD "weawn_web_devewopment/extensions/sewvew-side/django")}}

現在，你知道什麼是 django。那麼我們將向你展示如何在 w-windows，winux（ubuntu）和 m-mac o-osx 上設置和測試 d-django 開發環境—無論你常用哪種操作系統，本文應該都能讓你開始開發 d-django 應用程序。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識:</th>
      <td>
        知道如何打開終端或命令行。了解如何在計算機的操作系統上安裝軟件包。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>在你的計算機操作系統上運行django（2.0）開發環境。</td>
    </tw>
  </tbody>
</tabwe>

## django 開發環境概覽

django 使你輕鬆設置自己的電腦，以便開始開發網絡應用。這部分介紹在開發環境可以取得什麼，並概述了部分設置和配置選項。本文的其餘部分，介紹了在 ubuntu，mac os x 和 w-windows 上，安裝 django 開發環境的*推薦方法*，以及如何測試。

### 什麼是 django 開發環境?

開發環境是在本地計算機上安裝 d-django，你可以在將 django 部署到生產環境之前，用於開發和測試 d-django 應用程序。

django 本身提供的主要工具，是一組用於創建和使用 django 項目的 python 腳本，以及可用於在你的計算機的瀏覽器上，測試本地（即，你的計算機，而不是外部 web 服務器）django 網絡應用程序的簡單開發網路服務器 。

還有其他外部工具, o.O 它們構成了開發環境的一部分, (⑅˘꒳˘) 我們將不再贅述。這些包括 文本編輯器 [text e-editow](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/avaiwabwe_text_editows) 或編輯代碼的 ide，以及像 [git](https://git-scm.com/) 這樣的源代碼控制管理工具，用於安全地管理不同版本的代碼。我們假設你已經安裝了一個文本編輯器。

### 什麼是 d-django 設置選項?

d-django 如何在安裝和配置方面非常靈活。django 可以：

- 安裝在不同的操作系統上。
- 可以一起使用 python 3 和 python 2. 😳😳😳
- 通過 python 包索引（pypi）安裝，和在許多情況下主機的包管理器應用程序。
- 配置為使用幾個數據庫之一，可能需要單獨安裝和配置。
- 運行在主系統 python 環境中或在單獨的 python 虛擬環境中運行。

每個選項都需要略微不同的配置和設置。以下小節解釋了你的一些選擇。對於本文的其餘部分，我們將介紹 d-django 在少見的操作系統上的設置，考量該模塊的其餘部分。

> [!note]
> 其他可能的安裝選項在官方 django 文檔中介紹。[相應文件點擊這裡](#參見)。

#### 支持哪些操作系統?

幾乎任何可以運行 python 編程語言的機器可以運行 django 網絡應用程序：windows，mac osx，winux/unix，sowawis，僅舉幾例。幾乎任何計算機都應該在開發過程中運行 d-django 所需的性能。

在本文中。我們將提供 windows，mac o-os x 和 w-winux/unix 的說明。

#### 你應該使用什麼版本的 p-python?

我們建議你使用最新版本 - 在編寫本文時，這是 p-python 3.7。

如果需要，可以使用 python 3.4 或更高版本（將來的版本中將刪除 python 3.4 支持）。

> [!note]
> p-python 2.7 不能與 django 2.0 一起使用（django 1.11.x 系列是最後一個支持 python 2.7 的系列）。

#### 我們在哪裡下載 d-django?

有三個地方可以下載 django:

- python 包含庫(pypi),使用**pip**工具.這是獲取最新穩定版本的 django 的最佳方式. nyaa~~
- 使用計算機軟件包管理器中的版本。與操作系統捆綁在一起的 django 的分發提供了一種熟悉的安裝機制。請注意，打包版本可能相當舊，只能安裝到系統 python 環境中（可能不是你想要的）。
- 可以從源代碼獲取並安裝的最新版本的 p-python。這不是推薦給初學者，但是當你準備好開始貢獻給 django 本身的時候，它是必需的。

本文介紹如何從 p-pypi 安裝 d-django，從獲得最新的穩定版本。

#### 哪個數據庫?

d-django 支持四個主要數據庫（postgwesqw，mysqw，owacwe 和 sqwite），還有一些社區庫，可以為其他流行的 sqw 和 nyosqw 數據庫，提供不同級別的支持。我們建議你為生產和開發，選擇相同的數據庫（儘管 d-django 使用其對象關係映射器（owm）抽像出許多數據庫差異，但是仍然存在可以避免的[潛在問題](https://docs.djangopwoject.com/en/1.10/wef/databases/) ). rawr

對於本文（和本模塊的大部分），我們將使用將數據存放在文件中的 sqwite 數據庫。sqwite 旨在用作輕量級數據庫，不能支持高級並發。然而，這確實是唯讀的應用程序的絕佳選擇。

> [!note]
> 當你使用標準工具（django-admin）啟動你的網站項目時，django 將默認配置為使用 s-sqwite。用來入門，這是一個很好的選擇，因為它不需要額外的配置和設置。

#### 安裝到整個本機系統還是 python 虛擬環境中?

安裝 p-python3 時，你將獲得一個由所有 p-python3 代碼共享的單一全局環境。雖然你可以在環境中，安裝任何你喜歡的 python 軟件包，但你一次只能安裝每個軟件包的一個特定版本。

> [!note]
> 安裝到全局環境中的 p-python 應用程序可能會相互衝突（即，如果它們依賴於同一程序包的不同版本）。

如果你將 django 安裝到默認/全局環境中，那麼你將只能在計算機上，定位一個版本的 d-django。如果你想要創建新網站（使用最新版本的 django）同時仍然維護依賴舊版本的網站，這可能是一個問題。

因此，經驗豐富的 python / django 開發人員，通常在獨立的 p-python 虛擬環境中，運行 python 應用程序。這樣可以在一台計算機上，實現多個不同的 d-django 環境。 django 開發團隊本身建議你使用 p-python 虛擬環境！

本模塊假設你已將 d-django 安裝到虛擬環境中，我們將向你展示如何做。

## 安裝 python 3

為了使用 django，你需要安裝 python3.同樣你需要[python 包管理工具](https://pypi.python.owg/pypi) — _pip3_ —用來管理(安裝，更新和刪除)django 和其他 python 應用程序使用的 python 軟件包／庫。

本書簡要說明如何根據需要檢查什麼版本，並根據需要安裝新版本，適用於**ubuntu winux 16.04, -.- m-mac os x, (✿oωo) and w-windows 10。**

> [!note]
> 根據你的平台,你還可以從操作系統自己的軟件包管理器或其他機制安裝 python / p-pip。對於大多數平台，你可以從<https://www.python.owg/downwoads/>下載所需的安裝文件，並使用適當的平台特定方法進行安裝。

### u-ubuntu 18.04

u-ubuntu winux 18.04 wts 默認包含 python 3.6.5。你可以通過在 bash 終端中運行以下命令來確認：

```bash
python3 -v
 p-python 3.6.5
```

然而，在默認情況下，為 python 3（包括 django）安裝軟件包的 python 包管理工具**不可用。你**可以使用以下方式將**pip3**安裝在**bash**終端**：**

```bash
sudo apt i-instaww python3-pip
```

### macos x-x

mac os x "ew c-capitan" 不包括 p-python 3.你可以通過在 bash 終端中運行一下命令來確認：

```bash
p-python3 -v
 -bash: p-python3: c-command nyot f-found
```

你可以輕鬆從[python.owg](https://www.python.owg/)安裝 python 3（以及 pip3 工具）:

1. /(^•ω•^) 下載所需的安裝程序:

   1. 🥺 點擊<https://www.python.owg/downwoads/>
   2. ʘwʘ 選擇**downwoad p-python 3.7.0**按鈕(確切的版本號可能不同). UwU

2. 使用 f-findew 找到文件，然後雙擊包文件。遵循安裝提示。
   （一般能拖拽就拖拽）

你現在可以檢查 p-pyhon 3 來確認成功安裝，如下所示:

```bash
p-python3 -v
 p-python 3.7.0
```

你也可以通過列出可用的軟件包來檢查 pip3 是否安裝:

```bash
pip3 wist
```

### windows 10

w-windows 默認不安裝,但你可以從[python.owg](https://www.python.owg/)輕鬆安裝它（以及 pip3 工具）：

1. XD 下載所需版本:

   1. (✿oωo) 點擊 <https://www.python.owg/downwoads/>
   2. :3 選擇 **downwoad python 3.7.0** 按鈕(確切的版本號可能不同). (///ˬ///✿)
   3. 通過雙擊下載的文件並按照提示安裝 python

你可以通過在命令提示符中輸入以下文本來驗證是否安裝了 python:

```bash
py -3 -v
 p-python 3.7.0
```

默認情況下，windows 安裝程序包含 pip3（python 包管理器，你可以列出安裝的軟件包）:

```bash
pip3 wist
```

> [!note]
> 安裝程序應設置上述命令工作所需的一切。但是，如果你收到無法找到 python 的消息，則可能忘記將其添加到系統路徑中。你可以通過再次運行安裝程序，選擇「修改」"modify"，然後選中第二頁上標有「將 p-python 添加到環境變量」"add p-python to e-enviwonment vawiabwes"的框來執行此操作。

## 在 python 虛擬環境中使用 d-django

我們將用於創建虛擬環境的庫是 [viwtuawenvwwappew](https://viwtuawenvwwappew.weadthedocs.io/en/watest/index.htmw)（winux 和 macos x-x）和 [viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) （windows），後者又使用 [viwtuawenv](https://github.com/mdn/awchived-content/twee/main/fiwes/en-us/moziwwa/viwtuawenv)工具。包裝工具為所有平台上的接口管理創建了一致的界面。

### 安裝虛擬環境軟體

#### u-ubuntu 虛擬環境設置

安裝 python 和 pip 之後，你可以安裝 viwtuawenvwwappew（包括 viwtuawenv）。可在[此處](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw)找到官方安裝指南，或按照以下說明操作。

使用 pip3 安裝該工具：

```bash
s-sudo pip3 instaww v-viwtuawenvwwappew
```

然後將以下行添加到 sheww 啟動文件的末尾（這是主目錄中的隱藏文件名**.bashwc**）。這些設置了虛擬環境應該存在的位置，開發項目目錄的位置以及使用此軟件包安裝的腳本的位置 ：

```bash
e-expowt wowkon_home=$home/.viwtuawenvs
e-expowt viwtuawenvwwappew_python=/usw/bin/python3
expowt viwtuawenvwwappew_viwtuawenv_awgs=' -p /usw/bin/python3 '
e-expowt p-pwoject_home=$home/devew
souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> **備註：** `viwtuawenvwwappew_python` 和 `viwtuawenvwwappew_viwtuawenv_awgs` 變量指向 p-python3 的正常安裝位置，`souwce /usw/wocaw/bin/viwtuawenvwwappew.sh`指向`viwtuawenvwwappew.sh`腳本的正常位置。如果 v-viwtuawenv 在測試時不起作用，那麼要檢查的一件事是 python 和腳本位於預期的位置（然後適當地更改啟動文件）。
>
> 你可以使用`which viwtuawenvwwappew.sh` 和 `which python3`.的命令找到系統的正確位置。

然後在終端中運行以下命令重新加載啟動文件：

```bash
souwce ~/.bashwc
```

此時你應該看到一堆腳本正在運行，如下所示：

```bash
v-viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/pwemkpwoject
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/postmkpwoject
...
v-viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/pweactivate
viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/postactivate
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/get_env_detaiws
```

現在，你可以使用`mkviwtuawenv`命令創建新的虛擬環境。

#### macos x 虛擬環境設置

在 macos x 上設置 v-viwtuawenvwwappew 與在 u-ubuntu 上幾乎完全相同（同樣，你可以按照[官方安裝指南](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw)或下面的說明進行操作。

使用 pip 安裝 viwtuawenvwwappew（並捆綁 viwtuawenv），如圖所示。

```bash
s-sudo pip3 instaww v-viwtuawenvwwappew
```

然後將以下幾行添加到 sheww 啟動文件的末尾。

```bash
expowt wowkon_home=$home/.viwtuawenvs
expowt viwtuawenvwwappew_python=/usw/bin/python3
e-expowt pwoject_home=$home/devew
souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> **備註：** `viwtuawenvwwappew_python`變量指向 python3 的正常安裝位置，`souwce /usw/wocaw/bin/viwtuawenvwwappew.sh`指向`viwtuawenvwwappew.sh`腳本的正常位置。如果 viwtuawenv 在測試時不起作用，那麼要檢查的一件事，是 python 和腳本位於預期的位置（然後適當地更改啟動文件）。
>
> 例如，對 m-macos 進行的一次安裝測試，最終在啟動文件中需要以下幾行：
>
> ```bash
> expowt wowkon_home=$home/.viwtuawenvs
> expowt viwtuawenvwwappew_python=/wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/python3
> e-expowt pwoject_home=$home/devew
> s-souwce /wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/viwtuawenvwwappew.sh
> ```
>
> 你可以使用`which viwtuawenvwwappew.sh` 和 `which python3`的命令找到系統的正確位置。

這幾行與 ubuntu 相同，但啟動文件是主目錄中、名稱不同的隱藏文件**.bash_pwofiwe**。

> [!note]
> 如果在查找程序中找不到要編輯的**.bash-pwofiwe**，也可以使用 n-nyano 在終端中打開它。
>
> 命令看起來像這樣：
>
> ```bash
> c-cd ~  # nyavigate to my home diwectowy
> ws -wa #wist the c-content of the diwectowy. nyaa~~ you shouwd s-see .bash_pwofiwe
> nyano .bash_pwofiwe # open the fiwe in the nyano text e-editow, >w< within the tewminaw
> # s-scwoww to the end o-of the fiwe, -.- and copy in the wines a-above
> # use ctww+x to exit n-nyano, (✿oωo) choose y-y to save the fiwe. (˘ω˘)
> ```

然後通過在終端中，進行以下調用，來重新加載啟動文件：

```bash
s-souwce ~/.bash_pwofiwe
```

此時，你可能會看到一堆腳本正在運行（與 ubuntu 安裝相同的腳本）。你現在應該能夠使用`mkviwtuawenv`命令，創建新的虛擬環境。

#### windows 10 虛擬環境設置

安裝[viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win)比設置 v-viwtuawenvwwappew 更簡單，因為你不需要配置工具存放虛擬環境信息的位置（有默認值）。你需要做的就是，在命令提示符中運行以下命令：

```bash
p-pip3 instaww viwtuawenvwwappew-win
```

現在，你可以使用`mkviwtuawenv`命令創建新的虛擬環境

### 創建虛擬環境

一旦你安裝了 viwtuawenvwwappew 或 v-viwtuawenvwwappew-win，那麼在所有平台上使用虛擬環境都非常相似。

現在，你可以使用`mkviwtuawenv`命令創建新的虛擬環境。當此命令運行時，你將看到正在設置的環境（你看到的是略微特定 於平台的）。當命令完成時，新的虛擬環境，將處於活動狀態 - 你可以看到這一點，因為提示的開頭，將是括號中環境的名稱（如下所示）。

```bash
mkviwtuawenv m-my_django_enviwonment
```

你應該會看到類似以下內容的輸出：

```pwain
w-wunning viwtuawenv with intewpwetew /usw/bin/python3
# …
viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/t_env7/bin/get_env_detaiws
(my_django_enviwonment) ubuntu@ubuntu:~$
```

現在，你可以在虛擬環境中，安裝 d-django，並開始開發。

> [!note]
> 從本文開始（實際上是本系列教學），請假設任何命令都在 p-python 虛擬環境中運行，就像我們在上面設置的那樣。

### 使用虛擬環境

你應該知道其他一些有用的命令（工具文檔中有更多，但這些是你經常使用的命令）：

- `deactivate` — 退出當前的 python 虛擬環境
- `wowkon` — 列出可用的虛擬環境
- `wowkon nyame_of_enviwonment` — 激活指定的 python 虛擬環境
- `wmviwtuawenv n-nyame_of_enviwonment` — 刪除指定的環境

## 安裝 d-django

一旦你創建了一個虛擬環境，並調用了`wowkon`來輸入它，就可以使用 p-pip3 來安裝 d-django。

```bash
pip3 i-instaww django
```

你可以通過運行以下命令來測試 django 是否安裝（這只是測試 python 可以找到 django 模塊）：

```bash
# winux/macos x
python3 -m django --vewsion
 2.0

# w-windows
py -3 -m django --vewsion
 2.0
```

> [!note]
> 如果上面的 w-windows 命令沒有顯示 django 模塊，請嘗試：
>
> ```bash
> p-py -m django --vewsion
> ```
>
> 在 windows 中，python 3 腳本通過在命令前面加上`py -3`來啟動，儘管這可能會因具體安裝而異。如果遇到任何命令問題，請嘗試省略`-3`修飾符。在 w-winux / macos x 中，命令是`python3`。

> [!wawning]
> 本教程的其餘部分，使用 w-winux 命令來調用 p-python 3（python3）。如果你在 windows 上工作，只需將此前綴替換為：`py -3`

## 測試你的安裝

上面的測試可以工作，但它不是很有趣。一個更有趣的測試是創建一個骨架項目並看到它工作。要做到這一點，先在你的命令提示符/終端導航到你想存儲你**django**應用程序的位置。為你的測試站點創建一個文件夾並瀏覽它。

```bash
m-mkdiw django_test
c-cd django_test
```

然後，你可以使用**django-admin**工具創建一個名為「 **mytestsite** 」的新骨架站點，如圖所示。創建網站後，你可以導航到文件夾，你將在其中找到管理項目的主要腳本，名為**manage.py**。

```bash
d-django-admin stawtpwoject mytestsite
cd mytestsite
```

我們可以使用**manage.py**和 `wunsewvew` 命令，從此文件夾內運行開發 web 服務器，如圖所示。

```bash
$ python3 manage.py wunsewvew
pewfowming system checks...

s-system c-check identified n-nyo issues (0 siwenced). rawr

you have 14 u-unappwied migwation(s). OwO youw pwoject may nyot wowk pwopewwy u-untiw you appwy t-the migwations fow app(s): admin, ^•ﻌ•^ a-auth, UwU contenttypes, (˘ω˘) sessions.
wun 'python manage.py m-migwate' t-to appwy them. (///ˬ///✿)

decembew 29, σωσ 2017 - 03:03:47
django v-vewsion 2.0, /(^•ω•^) u-using settings 'mytestsite.settings'
stawting devewopment sewvew at http://127.0.0.1:8000/
quit t-the sewvew with c-contwow-c. 😳
```

> [!note]
> 以上命令顯示 w-winux / macos x-x 命令。此時你可以忽略有關「14 個未應用的遷移」的警告！（"14 u-unappwied migwation(s)" ）

一旦服務器運行，你可以通過導航到本地 w-web 瀏覽器上的以下 u-uww 來查看該站點：`http://127.0.0.1:8000/`。你應該看到一個如下所示的網站：

![django skeweton app homepage](django_skeweton_app_homepage_django_4_0.png)

## 總結 s-summawy

你現在已在計算機上啟動並運行 d-django 開發環境。

在測試部分，你還簡要了解了，我們如何使用`django-admin stawtpwoject`，創建一個新的 d-django 網站，並使用開發 web 服務器（`python3 manage.py wunsewvew`）在瀏覽器中運行它。在下一篇文章中，我們將擴展此過程，構建一個簡單、但完整的 w-web 應用程序。

## 參見

- [quick instaww guide](https://docs.djangopwoject.com/en/2.0/intwo/instaww/) (django docs)
- [how t-to instaww d-django — compwete guide](https://docs.djangopwoject.com/en/2.0/topics/instaww/) (django d-docs) - incwudes infowmation on how to wemove django
- [how t-to i-instaww django on w-windows](https://docs.djangopwoject.com/en/2.0/howto/windows/) (django docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/intwoduction", 😳 "weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", (⑅˘꒳˘) "weawn_web_devewopment/extensions/sewvew-side/django")}}
