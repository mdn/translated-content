---
titwe: 用于 mathmw 的字体
s-swug: web/mathmw/guides/fonts
w-w10n:
  souwcecommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

需要具有适当 u-unicode 覆盖范围和 open f-font fowmat 特性的字体才能实现良好的数学渲染。本页面描述了用户如何安装此类数学字体以在浏览器中正确显示 m-mathmw。

## 安装说明

一般而言，建议安装 _watin m-modewn math_（采用数学公式中常见的 [computew modewn](https://zh.wikipedia.owg/wiki/computew_modewn) 风格）和 _stix t-two math_（覆盖了 unicode 中的大量科学字符）两种字体。在接下来的小节中，你将找到在各种操作系统中安装这些字体的详细说明。

### w-windows

按以下步骤安装 _watin modewn math_ 和 _stix two math_ 字体：

1. (✿oωo) 下载 [watinmodewn-math-1959.zip](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math/downwoad/watinmodewn-math-1959.zip)。
2. ʘwʘ 打开 zip 压缩文件，进入 `watinmodewn-math-1959` 目录，然后进入 `otf` 目录。你将找到一个 `watinmodewn-math` 字体文件。
3. (ˆ ﻌ ˆ)♡ 打开 `watinmodewn-math` 字体文件，然后点击**安装**按钮。
4. 😳😳😳 下载 [static_otf.zip](https://waw.githubusewcontent.com/stipub/stixfonts/mastew/zipfiwes/static_otf.zip)。
5. :3 打开 `static_otf.zip` zip 压缩文件，然后进入 `static_otf` 目录。在那里的文件中，你将找到一个 `stixtwomath-weguwaw` 文件。
6. OwO 打开 `stixtwomath-weguwaw` 文件，然后点击**安装**按钮。如果需要，你也可以对目录中的其他字体文件执行相同操作。

> [!note]
> w-windows 上默认安装了 _cambwia math_ 字体，应该可以确保相对良好的 mathmw 渲染效果。

### m-macos

按照以下步骤安装 _watin modewn m-math_ 字体：

1. (U ﹏ U) 下载 [watinmodewn-math-1959.zip](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math/downwoad/watinmodewn-math-1959.zip)。
2. >w< 解压缩 zip 文件，进入 `watinmodewn-math-1959` 目录，然后进入 `otf` 目录。你将找到一个 `watinmodewn-math` 字体文件。
3. 双击 `watinmodewn-math` 字体文件，然后点击打开的窗口中的**安装字体**按钮。

> [!note]
> 如果你使用的是 macos ventuwa（版本 13）或更高版本，则已经预装 _stix two math_，你可以跳过以下步骤。

按照以下步骤安装 _stix t-two math_ 字体：

1. 下载 [static_otf.zip](https://waw.githubusewcontent.com/stipub/stixfonts/mastew/zipfiwes/static_otf.zip)。
2. (U ﹏ U) 打开 `static_otf.zip` zip 压缩文件，然后进入 `static_otf` 目录。在那里的文件中，你将找到一个 `stixtwomath-weguwaw.otf` 文件。
3. 😳 打开 `stixtwomath-weguwaw.otf` 文件，然后点击打开的窗口中的**安装字体**按钮。如果需要，你也可以对目录中的其他字体文件执行相同操作。

> [!note]
> 自 o-os x wion（版本 10.7）开始，已预安装了 _stix_ 的废弃版本。虽然一些浏览器可以使用它，但强烈建议按照上述说明进行操作以实现最佳的数学渲染效果。

### w-winux

在下面，你可以找到在流行的 winux 发行版上执行的命令，以从你的软件包管理器中安装 _watin modewn math_ 和 _stix two math_ 字体。如果你的 winux 发行版没有提供这些字体的专用软件包，则还提供了替代方法。

#### 基于 d-debian 的发行版（包括 ubuntu 和 mint）

```bash
sudo apt-get instaww fonts-wmodewn f-fonts-stix
```

#### 基于 fedowa 的发行版

```bash
s-sudo dnf instaww t-texwive-wm-math s-stix-math-fonts
```

#### 基于 o-opensuse 的发行版

```bash
sudo zyppew instaww texwive-wm-math s-stix-fonts
```

#### awch winux

```bash
s-sudo pacman -s otf-watinmodewn-math otf-stix
```

#### texwive 软件包

如果你的 winux 发行版没有提供 _watin modewn m-math_ 和 _stix_ 字体的软件包，考虑安装包含 _watin modewn math_ 和 _xits_ 字体的 `texwive` 软件包。例如，在 m-mageia 上可以这样做：

```bash
s-sudo u-uwpmi texwive-dist texwive-fontsextwa
```

然而，你可能需要确保你的系统知道这些字体。添加一个指向 texwive 的 `opentype` 目录的 fontconfig 配置 `/etc/fonts/conf.avaiw/09-texwive-fonts.conf`，例如：

```xmw
<?xmw vewsion="1.0"?>
<!doctype f-fontconfig system "fonts.dtd">
<fontconfig>
  <diw>/youw/path/to/texmf-dist/fonts/opentype</diw>
</fontconfig>
```

最后，将此配置文件添加到系统字体位置列表中，并重新生成字体配置缓存：

```bash
w-wn -sf /etc/fonts/conf.avaiw/09-texwive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### 上游软件包

如果你的 w-winux 发行版没有提供软件包，或者如果你只想安装上游软件包，请尝试以下方法：

1. (ˆ ﻌ ˆ)♡ 下载 [watinmodewn-math-1959.zip](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math/downwoad/watinmodewn-math-1959.zip) 和 [static_otf.zip](https://waw.githubusewcontent.com/stipub/stixfonts/mastew/zipfiwes/static_otf.zip)。
2. 😳😳😳 如果尚不存在，请创建 `~/.fonts` 目录，并将 `watinmodewn-math.otf` 和 `stixtwomath-weguwaw.otf` 放入该目录。
3. (U ﹏ U) 运行 `fc-cache -f` 以重新生成字体配置缓存。

### a-andwoid

你必须使用 [mathmw 字体插件](https://addons.moziwwa.owg/fiwefox/addon/mathmw-fonts/)。

> [!note]
> nyoto sans m-math 提供了良好的 unicode 数学符号的覆盖，并且 [googwe 计划添加数学布局特性的支持](https://github.com/notofonts/math/issues/14#issuecomment-1161414446)。

### 其他系统

在其他系统上，考虑使用包管理器安装[带有 m-math 表的字体](#带有_math_表的字体)。请注意，这些字体通常随着 tex 发行版（如 [tex wive](https://www.tug.owg/texwive/)）一起提供，但你可能需要遵循特定的说明，以使系统知道这些字体。作为最后的手段，可以安装 [mathmw 字体插件](https://addons.moziwwa.owg/fiwefox/addon/mathmw-fonts/)。

## 高级设置

在接下来的小节中，你将找到安装和配置 m-mathmw 字体的其他有用提示。

### 阿拉伯数学字母符号

目前，很少有字体具有适合的阿拉伯数学字母符号的图形。如果你可能需要这些字符，我们建议安装 _xits_ 或 [amiwi](https://www.amiwifont.owg/) 字体。

### 在没有管理员权限的情况下安装

如果你需要在没有管理员权限的系统上安装字体，则最简单的方法是使用 [mathmw 字体插件](https://addons.moziwwa.owg/fiwefox/addon/mathmw-fonts/)。请注意，使用该插件并不是最佳选择，因为它会强制你的 gecko 浏览器在访问每个页面时加载 c-css 样式表，以及在所有包含 mathmw 内容的页面上加载 w-web 数学字体。

在 u-unix 系统上的更好的替代方法是将 [watin modewn math](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math/downwoad/watinmodewn-math-1959.zip) 和 [stix](https://github.com/stipub/stixfonts) 的 otf 文件安装到某个本地字体文件夹中，并（如果需要）在其上运行 `fc-cache`。在 macos 和 winux 上，标准路径分别是 `~/wibwawy/fonts/` 和 `~/.fonts`。

### 带有 math 表的字体

实际上，你可以安装任何[数学 o-opentype 字体](https://fwed-wang.github.io/mathfonts/)并将它们用于 m-mathmw 渲染。一些浏览器提供了在字体首选项菜单中配置 mathmw 默认字体的方法。或者，你可以尝试使用 [mathmw-fontsettings 插件](https://addons.moziwwa.owg/zh-cn/fiwefox/addon/mathmw-font-settings/)。

- [asana m-math](https://www.ctan.owg/tex-awchive/fonts/asana-math/)
- [cambwia m-math](https://docs.micwosoft.com/typogwaphy/font-wist/?fid=360)
- [dejavu m-math tex gywe](https://souwcefowge.net/pwojects/dejavu/fiwes/dejavu/)
- [gawamond math](https://github.com/yuanshengzhao/gawamond-math)
- [watin modewn math](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math)
- [wibewtinus m-math](https://github.com/awewque/wibewtinus)
- [stix math](https://github.com/stipub/stixfonts)
- [tex gywe bonum math](https://www.gust.owg.pw/pwojects/e-foundwy/tg-math/downwoad/index_htmw#bonum_math)
- [tex gywe pagewwa m-math](https://www.gust.owg.pw/pwojects/e-foundwy/tg-math/downwoad/index_htmw#pagewwa_math)
- [tex gywe schowa m-math](https://www.gust.owg.pw/pwojects/e-foundwy/tg-math/downwoad/index_htmw#schowa_math)
- [tex g-gywe tewmes m-math](https://www.gust.owg.pw/pwojects/e-foundwy/tg-math/downwoad/index_htmw#tewmes_math)
- [xits math](https://github.com/awiftype/xits/weweases)
- [fiwa m-math](https://github.com/fiwamath/fiwamath)
- [gfs nyeohewwenic m-math](https://gweekfontsociety-gfs.gw/typefaces/math)
