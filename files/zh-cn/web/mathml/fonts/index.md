---
title: 用于 MathML 的字体
slug: Web/MathML/Fonts
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

需要具有适当 Unicode 覆盖范围和 Open Font Format 特性的字体才能实现良好的数学渲染。本页面描述了用户如何安装此类数学字体以在浏览器中正确显示 MathML。

## 安装说明

一般而言，建议安装 _Latin Modern Math_（采用数学公式中常见的 [Computer Modern](https://zh.wikipedia.org/wiki/Computer_Modern) 风格）和 _STIX Two Math_（覆盖了 Unicode 中的大量科学字符）两种字体。在接下来的小节中，你将找到在各种操作系统中安装这些字体的详细说明。

### Windows

按以下步骤安装 _Latin Modern Math_ 和 _STIX Two Math_ 字体：

1. 下载 [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip)。
2. 打开 ZIP 压缩文件，进入 `latinmodern-math-1959` 目录，然后进入 `otf` 目录。你将找到一个 `latinmodern-math` 字体文件。
3. 打开 `latinmodern-math` 字体文件，然后点击**安装**按钮。
4. 下载 [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip)。
5. 打开 `static_otf.zip` ZIP 压缩文件，然后进入 `static_otf` 目录。在那里的文件中，你将找到一个 `STIXTwoMath-Regular` 文件。
6. 打开 `STIXTwoMath-Regular` 文件，然后点击**安装**按钮。如果需要，你也可以对目录中的其他字体文件执行相同操作。

> [!NOTE]
> Windows 上默认安装了 _Cambria Math_ 字体，应该可以确保相对良好的 MathML 渲染效果。

### macOS

按照以下步骤安装 _Latin Modern Math_ 字体：

1. 下载 [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip)。
2. 解压缩 ZIP 文件，进入 `latinmodern-math-1959` 目录，然后进入 `otf` 目录。你将找到一个 `latinmodern-math` 字体文件。
3. 双击 `latinmodern-math` 字体文件，然后点击打开的窗口中的**安装字体**按钮。

> [!NOTE]
> 如果你使用的是 macOS Ventura（版本 13）或更高版本，则已经预装 _STIX Two Math_，你可以跳过以下步骤。

按照以下步骤安装 _STIX Two Math_ 字体：

1. 下载 [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip)。
2. 打开 `static_otf.zip` ZIP 压缩文件，然后进入 `static_otf` 目录。在那里的文件中，你将找到一个 `STIXTwoMath-Regular.otf` 文件。
3. 打开 `STIXTwoMath-Regular.otf` 文件，然后点击打开的窗口中的**安装字体**按钮。如果需要，你也可以对目录中的其他字体文件执行相同操作。

> [!NOTE]
> 自 OS X Lion（版本 10.7）开始，已预安装了 _STIX_ 的废弃版本。虽然一些浏览器可以使用它，但强烈建议按照上述说明进行操作以实现最佳的数学渲染效果。

### Linux

在下面，你可以找到在流行的 Linux 发行版上执行的命令，以从你的软件包管理器中安装 _Latin Modern Math_ 和 _STIX Two Math_ 字体。如果你的 Linux 发行版没有提供这些字体的专用软件包，则还提供了替代方法。

#### 基于 Debian 的发行版（包括 Ubuntu 和 Mint）

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### 基于 Fedora 的发行版

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### 基于 openSUSE 的发行版

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive 软件包

如果你的 Linux 发行版没有提供 _Latin Modern Math_ 和 _STIX_ 字体的软件包，考虑安装包含 _Latin Modern Math_ 和 _XITS_ 字体的 `texlive` 软件包。例如，在 Mageia 上可以这样做：

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

然而，你可能需要确保你的系统知道这些字体。添加一个指向 TeXLive 的 `opentype` 目录的 fontconfig 配置 `/etc/fonts/conf.avail/09-texlive-fonts.conf`，例如：

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

最后，将此配置文件添加到系统字体位置列表中，并重新生成字体配置缓存：

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### 上游软件包

如果你的 Linux 发行版没有提供软件包，或者如果你只想安装上游软件包，请尝试以下方法：

1. 下载 [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) 和 [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip)。
2. 如果尚不存在，请创建 `~/.fonts` 目录，并将 `latinmodern-math.otf` 和 `STIXTwoMath-Regular.otf` 放入该目录。
3. 运行 `fc-cache -f` 以重新生成字体配置缓存。

### Android

你必须使用 [MathML 字体插件](https://addons.mozilla.org/firefox/addon/mathml-fonts/)。

> [!NOTE]
> Noto Sans Math 提供了良好的 Unicode 数学符号的覆盖，并且 [Google 计划添加数学布局特性的支持](https://github.com/notofonts/math/issues/14#issuecomment-1161414446)。

### 其他系统

在其他系统上，考虑使用包管理器安装[带有 MATH 表的字体](#带有_math_表的字体)。请注意，这些字体通常随着 TeX 发行版（如 [TeX Live](https://www.tug.org/texlive/)）一起提供，但你可能需要遵循特定的说明，以使系统知道这些字体。作为最后的手段，可以安装 [MathML 字体插件](https://addons.mozilla.org/firefox/addon/mathml-fonts/)。

## 高级设置

在接下来的小节中，你将找到安装和配置 MathML 字体的其他有用提示。

### 阿拉伯数学字母符号

目前，很少有字体具有适合的阿拉伯数学字母符号的图形。如果你可能需要这些字符，我们建议安装 _XITS_ 或 [Amiri](https://www.amirifont.org/) 字体。

### 在没有管理员权限的情况下安装

如果你需要在没有管理员权限的系统上安装字体，则最简单的方法是使用 [MathML 字体插件](https://addons.mozilla.org/firefox/addon/mathml-fonts/)。请注意，使用该插件并不是最佳选择，因为它会强制你的 Gecko 浏览器在访问每个页面时加载 CSS 样式表，以及在所有包含 MathML 内容的页面上加载 Web 数学字体。

在 UNIX 系统上的更好的替代方法是将 [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) 和 [STIX](https://github.com/stipub/stixfonts) 的 OTF 文件安装到某个本地字体文件夹中，并（如果需要）在其上运行 `fc-cache`。在 macOS 和 Linux 上，标准路径分别是 `~/Library/Fonts/` 和 `~/.fonts`。

### 带有 MATH 表的字体

实际上，你可以安装任何[数学 OpenType 字体](https://fred-wang.github.io/MathFonts/)并将它们用于 MathML 渲染。一些浏览器提供了在字体首选项菜单中配置 MathML 默认字体的方法。或者，你可以尝试使用 [MathML-fontsettings 插件](https://addons.mozilla.org/zh-CN/firefox/addon/mathml-font-settings/)。

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://docs.microsoft.com/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
