---
title: 架設 Django 開發環境
slug: Learn/Server-side/Django/development_environment
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}

現在，你知道什麼是 Django。那麼我們將向你展示如何在 Windows，Linux（Ubuntu）和 Mac OSX 上設置和測試 Django 開發環境—無論你常用哪種操作系統，本文應該都能讓你開始開發 Django 應用程序。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先備知識:</th>
      <td>
        知道如何打開終端或命令行。了解如何在計算機的操作系統上安裝軟件包。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>在你的計算機操作系統上運行Django（2.0）開發環境。</td>
    </tr>
  </tbody>
</table>

## Django 開發環境概覽

Django 使你輕鬆設置自己的電腦，以便開始開發網絡應用。這部分介紹在開發環境可以取得什麼，並概述了部分設置和配置選項。本文的其餘部分，介紹了在 Ubuntu，Mac OS X 和 Windows 上，安裝 Django 開發環境的*推薦方法*，以及如何測試。

### 什麼是 Django 開發環境?

開發環境是在本地計算機上安裝 Django，你可以在將 Django 部署到生產環境之前，用於開發和測試 Django 應用程序。

Django 本身提供的主要工具，是一組用於創建和使用 Django 項目的 Python 腳本，以及可用於在你的計算機的瀏覽器上，測試本地（即，你的計算機，而不是外部 Web 服務器）Django 網絡應用程序的簡單開發網路服務器 。

還有其他外部工具, 它們構成了開發環境的一部分, 我們將不再贅述。這些包括 文本編輯器 [text editor](/zh-TW/docs/Learn/Common_questions/Available_text_editors) 或編輯代碼的 IDE，以及像 [Git](https://git-scm.com/) 這樣的源代碼控制管理工具，用於安全地管理不同版本的代碼。我們假設你已經安裝了一個文本編輯器。

### 什麼是 Django 設置選項?

Django 如何在安裝和配置方面非常靈活。Django 可以：

- 安裝在不同的操作系統上。
- 可以一起使用 Python 3 和 Python 2.
- 通過 Python 包索引（PyPi）安裝，和在許多情況下主機的包管理器應用程序。
- 配置為使用幾個數據庫之一，可能需要單獨安裝和配置。
- 運行在主系統 Python 環境中或在單獨的 Python 虛擬環境中運行。

每個選項都需要略微不同的配置和設置。以下小節解釋了你的一些選擇。對於本文的其餘部分，我們將介紹 Django 在少見的操作系統上的設置，考量該模塊的其餘部分。

> **備註：** 其他可能的安裝選項在官方 Django 文檔中介紹。[相應文件點擊這裡](/zh-CN/docs/learn/Server-side/Django/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83#furtherreading)。

#### 支持哪些操作系統?

幾乎任何可以運行 Python 編程語言的機器可以運行 Django 網絡應用程序：Windows，Mac OSX，Linux/Unix，Solaris，僅舉幾例。幾乎任何計算機都應該在開發過程中運行 Django 所需的性能。

在本文中。我們將提供 Windows，Mac OS X 和 Linux/Unix 的說明。

#### 你應該使用什麼版本的 Python?

我們建議您使用最新版本 - 在編寫本文時，這是 Python 3.7。

如果需要，可以使用 Python 3.4 或更高版本（將來的版本中將刪除 Python 3.4 支持）。

> **備註：** Python 2.7 不能與 Django 2.0 一起使用（Django 1.11.x 系列是最後一個支持 Python 2.7 的系列）。

#### 我們在哪裡下載 Django?

有三個地方可以下載 Django:

- Python 包含庫(PyPi),使用**pip**工具.這是獲取最新穩定版本的 Django 的最佳方式.
- 使用計算機軟件包管理器中的版本。與操作系統捆綁在一起的 Django 的分發提供了一種熟悉的安裝機制。請注意，打包版本可能相當舊，只能安裝到系統 Python 環境中（可能不是你想要的）。
- 可以從源代碼獲取並安裝的最新版本的 Python。這不是推薦給初學者，但是當你準備好開始貢獻給 Django 本身的時候，它是必需的。

本文介紹如何從 PyPi 安裝 Django，從獲得最新的穩定版本。

#### 哪個數據庫?

Django 支持四個主要數據庫（PostgreSQL，MySQL，Oracle 和 SQLite），還有一些社區庫，可以為其他流行的 SQL 和 NOSQL 數據庫，提供不同級別的支持。我們建議你為生產和開發，選擇相同的數據庫（儘管 Django 使用其對象關係映射器（ORM）抽像出許多數據庫差異，但是仍然存在可以避免的[潛在問題](https://docs.djangoproject.com/en/1.10/ref/databases/) ).

對於本文（和本模塊的大部分），我們將使用將數據存放在文件中的 SQLite 數據庫。SQLite 旨在用作輕量級數據庫，不能支持高級並發。然而，這確實是唯讀的應用程序的絕佳選擇。

> **備註：** 當你使用標準工具（django-admin）啟動你的網站項目時，Django 將默認配置為使用 SQLite。用來入門，這是一個很好的選擇，因為它不需要額外的配置和設置。

#### 安裝到整個本機系統還是 Python 虛擬環境中?

安裝 Python3 時，您將獲得一個由所有 Python3 代碼共享的單一全局環境。雖然您可以在環境中，安裝任何您喜歡的 Python 軟件包，但您一次只能安裝每個軟件包的一個特定版本。

> **備註：** 安裝到全局環境中的 Python 應用程序可能會相互衝突（即，如果它們依賴於同一程序包的不同版本）。

如果您將 Django 安裝到默認/全局環境中，那麼您將只能在計算機上，定位一個版本的 Django。如果您想要創建新網站（使用最新版本的 Django）同時仍然維護依賴舊版本的網站，這可能是一個問題。

因此，經驗豐富的 Python / Django 開發人員，通常在獨立的 Python 虛擬環境中，運行 Python 應用程序。這樣可以在一台計算機上，實現多個不同的 Django 環境。 Django 開發團隊本身建議您使用 Python 虛擬環境！

本模塊假設您已將 Django 安裝到虛擬環境中，我們將向您展示如何做。

## 安裝 Python 3

為了使用 Django，你需要安裝 Python3.同樣你需要[Python 包管理工具](https://pypi.python.org/pypi) — _pip3_ —用來管理(安裝，更新和刪除)Django 和其他 Python 應用程序使用的 Python 軟件包／庫。

本書簡要說明如何根據需要檢查什麼版本，並根據需要安裝新版本，適用於**Ubuntu Linux 16.04, Mac OS X, and Windows 10。**

> **備註：** 根據你的平台,您還可以從操作系統自己的軟件包管理器或其他機制安裝 Python / pip。對於大多數平台，您可以從<https://www.python.org/downloads/>下載所需的安裝文件，並使用適當的平台特定方法進行安裝。

### Ubuntu 18.04

Ubuntu Linux 18.04 LTS 默認包含 Python 3.6.5。您可以通過在 bash 終端中運行以下命令來確認：

```bash
python3 -V
 Python 3.6.5
```

然而，在默認情況下，為 Python 3（包括 Django）安裝軟件包的 Python 包管理工具**不可用。你**可以使用以下方式將**pip3**安裝在**bash**終端**：**

```bash
sudo apt install python3-pip
```

### macOS X

Mac OS X "El Capitan" 不包括 Python 3.你可以通過在 bash 終端中運行一下命令來確認：

```bash
python3 -V
 -bash: python3: command not found
```

你可以輕鬆從[python.org](https://www.python.org/)安裝 Python 3（以及 pip3 工具）:

1. 下載所需的安裝程序:

   1. 點擊<https://www.python.org/downloads/>
   2. 選擇**Download Python 3.7.0**按鈕(確切的版本號可能不同).

2. 使用 Finder 找到文件，然後雙擊包文件。遵循安裝提示。
   （一般能拖拽就拖拽）

你現在可以檢查 Pyhon 3 來確認成功安裝，如下所示:

```bash
python3 -V
 Python 3.7.0
```

你也可以通過列出可用的軟件包來檢查 pip3 是否安裝:

```bash
pip3 list
```

### Windows 10

windows 默認不安裝,但你可以從[python.org](https://www.python.org/)輕鬆安裝它（以及 pip3 工具）：

1. 下載所需版本:

   1. 點擊 <https://www.python.org/downloads/>
   2. 選擇 **Download Python 3.7.0** 按鈕(確切的版本號可能不同).
   3. 通過雙擊下載的文件並按照提示安裝 Python

你可以通過在命令提示符中輸入以下文本來驗證是否安裝了 Python:

```bash
py -3 -V
 Python 3.7.0
```

默認情況下，Windows 安裝程序包含 pip3（python 包管理器，你可以列出安裝的軟件包）:

```bash
pip3 list
```

> **備註：** 安裝程序應設置上述命令工作所需的一切。但是，如果您收到無法找到 Python 的消息，則可能忘記將其添加到系統路徑中。您可以通過再次運行安裝程序，選擇「修改」"Modify"，然後選中第二頁上標有「將 Python 添加到環境變量」"Add Python to environment variables"的框來執行此操作。

## 在 Python 虛擬環境中使用 Django

我們將用於創建虛擬環境的庫是 [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html)（Linux 和 macOS X）和 [virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win) （Windows），後者又使用 [virtualenv](/zh-TW/docs/Python/Virtualenv)工具。包裝工具為所有平台上的接口管理創建了一致的界面。

### 安裝虛擬環境軟體

#### Ubuntu 虛擬環境設置

安裝 Python 和 pip 之後，你可以安裝 virtualenvwrapper（包括 virtualenv）。可在[此處](http://virtualenvwrapper.readthedocs.io/en/latest/install.html)找到官方安裝指南，或按照以下說明操作。

使用 pip3 安裝該工具：

```bash
sudo pip3 install virtualenvwrapper
```

然後將以下行添加到 shell 啟動文件的末尾（這是主目錄中的隱藏文件名**.bashrc**）。這些設置了虛擬環境應該存在的位置，開發項目目錄的位置以及使用此軟件包安裝的腳本的位置 ：

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> **備註：** `VIRTUALENVWRAPPER_PYTHON` 和 `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` 變量指向 Python3 的正常安裝位置，`source /usr/local/bin/virtualenvwrapper.sh`指向`virtualenvwrapper.sh`腳本的正常位置。如果 virtualenv 在測試時不起作用，那麼要檢查的一件事是 Python 和腳本位於預期的位置（然後適當地更改啟動文件）。
>
> 您可以使用`which virtualenvwrapper.sh` 和 `which python3`.的命令找到系統的正確位置。

然後在終端中運行以下命令重新加載啟動文件：

```bash
source ~/.bashrc
```

此時您應該看到一堆腳本正在運行，如下所示：

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
...
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

現在，您可以使用`mkvirtualenv`命令創建新的虛擬環境。

#### macOS X 虛擬環境設置

在 macOS X 上設置 virtualenvwrapper 與在 Ubuntu 上幾乎完全相同（同樣，您可以按照[官方安裝指南](http://virtualenvwrapper.readthedocs.io/en/latest/install.html)或下面的說明進行操作。

使用 pip 安裝 virtualenvwrapper（並捆綁 virtualenv），如圖所示。

```bash
sudo pip3 install virtualenvwrapper
```

然後將以下幾行添加到 shell 啟動文件的末尾。

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> **備註：** `VIRTUALENVWRAPPER_PYTHON`變量指向 Python3 的正常安裝位置，`source /usr/local/bin/virtualenvwrapper.sh`指向`virtualenvwrapper.sh`腳本的正常位置。如果 virtualenv 在測試時不起作用，那麼要檢查的一件事，是 Python 和腳本位於預期的位置（然後適當地更改啟動文件）。
>
> 例如，對 macOS 進行的一次安裝測試，最終在啟動文件中需要以下幾行：
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> 您可以使用`which virtualenvwrapper.sh` 和 `which python3`的命令找到系統的正確位置。

這幾行與 Ubuntu 相同，但啟動文件是主目錄中、名稱不同的隱藏文件**.bash_profile**。

> **備註：** 如果在查找程序中找不到要編輯的**.bash-profile**，也可以使用 nano 在終端中打開它。
>
> 命令看起來像這樣：
>
> ```bash
> cd ~  # Navigate to my home directory
> ls -la #List the content of the directory. YOu should see .bash_profile
> nano .bash_profile # Open the file in the nano text editor, within the terminal
> # Scroll to the end of the file, and copy in the lines above
> # Use Ctrl+X to exit nano, Choose Y to save the file.
> ```

然後通過在終端中，進行以下調用，來重新加載啟動文件：

```bash
source ~/.bash_profile
```

此時，您可能會看到一堆腳本正在運行（與 Ubuntu 安裝相同的腳本）。您現在應該能夠使用`mkvirtualenv`命令，創建新的虛擬環境。

#### Windows 10 虛擬環境設置

安裝[virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win)比設置 virtualenvwrapper 更簡單，因為您不需要配置工具存放虛擬環境信息的位置（有默認值）。您需要做的就是，在命令提示符中運行以下命令：

```bash
pip3 install virtualenvwrapper-win
```

現在，您可以使用`mkvirtualenv`命令創建新的虛擬環境

### 創建虛擬環境

一旦你安裝了 virtualenvwrapper 或 virtualenvwrapper-win，那麼在所有平台上使用虛擬環境都非常相似。

現在，您可以使用`mkvirtualenv`命令創建新的虛擬環境。當此命令運行時，您將看到正在設置的環境（您看到的是略微特定 於平台的）。當命令完成時，新的虛擬環境，將處於活動狀態 - 您可以看到這一點，因為提示的開頭，將是括號中環境的名稱（如下所示）。

```
$ mkvirtualenv my_django_environment

Running virtualenv with interpreter /usr/bin/python3
...
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

現在，您可以在虛擬環境中，安裝 Django，並開始開發。

> **備註：** 從本文開始（實際上是本系列教學），請假設任何命令都在 Python 虛擬環境中運行，就像我們在上面設置的那樣。

### 使用虛擬環境

您應該知道其他一些有用的命令（工具文檔中有更多，但這些是您經常使用的命令）：

- `deactivate` — 退出當前的 Python 虛擬環境
- `workon` — 列出可用的虛擬環境
- `workon name_of_environment` — 激活指定的 Python 虛擬環境
- `rmvirtualenv name_of_environment` — 刪除指定的環境

## 安裝 Django

一旦你創建了一個虛擬環境，並調用了`workon`來輸入它，就可以使用 pip3 來安裝 Django。

```bash
pip3 install django
```

您可以通過運行以下命令來測試 Django 是否安裝（這只是測試 Python 可以找到 Django 模塊）：

```bash
# Linux/macOS X
python3 -m django --version
 2.0

# Windows
py -3 -m django --version
 2.0
```

> **備註：** 如果上面的 Windows 命令沒有顯示 django 模塊，請嘗試：
>
> ```bash
> py -m django --version
> ```
>
> 在 Windows 中，Python 3 腳本通過在命令前面加上`py -3`來啟動，儘管這可能會因具體安裝而異。如果遇到任何命令問題，請嘗試省略`-3`修飾符。在 Linux / macOS X 中，命令是`python3`。

> **警告：** 本教程的其餘部分，使用 Linux 命令來調用 Python 3（python3）。如果您在 Windows 上工作，只需將此前綴替換為：`py -3`

## 測試你的安裝

上面的測試可以工作，但它不是很有趣。一個更有趣的測試是創建一個骨架項目並看到它工作。要做到這一點，先在你的命令提示符/終端導航到你想存儲你**Django**應用程序的位置。為您的測試站點創建一個文件夾並瀏覽它。

```bash
mkdir django_test
cd django_test
```

然後，您可以使用**django-admin**工具創建一個名為「 **mytestsite** 」的新骨架站點，如圖所示。創建網站後，您可以導航到文件夾，您將在其中找到管理項目的主要腳本，名為**manage.py**。

```bash
django-admin startproject mytestsite
cd mytestsite
```

我們可以使用**manage.py**和 `runserver` 命令，從此文件夾內運行開發 Web 服務器，如圖所示。

```bash
$ python3 manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).

You have 14 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.

December 29, 2017 - 03:03:47
Django version 2.0, using settings 'mytestsite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

> **備註：** 以上命令顯示 Linux / macOS X 命令。此時您可以忽略有關「14 個未應用的遷移」的警告！（"14 unapplied migration(s)" ）

一旦服務器運行，您可以通過導航到本地 Web 瀏覽器上的以下 URL 來查看該站點：`http://127.0.0.1:8000/`。你應該看到一個如下所示的網站：

![Django Skeleton App Homepage](django_skeleton_app_homepage_django_4_0.png)

## 總結 Summary

您現在已在計算機上啟動並運行 Django 開發環境。

在測試部分，您還簡要了解了，我們如何使用`django-admin startproject`，創建一個新的 Django 網站，並使用開發 Web 服務器（`python3 manage.py runserver`）在瀏覽器中運行它。在下一篇文章中，我們將擴展此過程，構建一個簡單、但完整的 Web 應用程序。

## 參閱

- [Quick Install Guide](https://docs.djangoproject.com/en/2.0/intro/install/) (Django docs)
- [How to install Django — Complete guide](https://docs.djangoproject.com/en/2.0/topics/install/) (Django docs) - includes information on how to remove Django
- [How to install Django on Windows](https://docs.djangoproject.com/en/2.0/howto/windows/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}
