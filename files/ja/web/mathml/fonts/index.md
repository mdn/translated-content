---
title: MathML のためのフォント
slug: Web/MathML/Fonts
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{MathMLRef}}

適切な Unicode のカバー範囲と Open Font Format 機能を持つフォントは、優れた数式レンダリングに必須です。
このページでは、ユーザーがそのような数式フォントをインストールして、ブラウザーで MathML を正しく表示する方法を説明します。

## インストール手順

経験則として、 _Latin Modern Math_ （数式表記に人気の [Computer Modern](https://ja.wikipedia.org/wiki/Computer_Modern) スタイルを使用）と _STIX Two Math_ （科学記号のの Unicode を広く保有）の両方をインストールすることをお勧めします。次の章では、さまざまなオペレーティングシステムにこれらのフォントをインストールするための詳細な手順を紹介します。

### Windows

_Latin Modern Math_ および _STIX Two Math_ フォントのインストールは次のように行います。

1. [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) をダウンロードします。
2. この ZIP アーカイブを開き、 `latinmodern-math-1959` ディレクトリー内に移動し、さらに `otf` ディレクトリー内に移動します。 `latinmodern-math` フォントファイルを探します。
3. `latinmodern-math` フォントファイルを開き、**インストール**ボタンをクリックします。
4. [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) をダウンロードします。
5. `static_otf.zip` ZIP アーカイブを開き、 `static_otf` ディレクトリーの中に移動します。そこにあるファイルの中に、 `STIXTwoMath-Regular` ファイルが見つかるでしょう。
6. `STIXTwoMath-Regular` ファイルを開き、**インストール**ボタンをクリックします。 必要であれば、ディレクトリー内の他のフォントファイルについても同じ操作を行うことができます。

> **メモ:** _Cambria Math_ が既定で Windows にインストールされており、比較的良好な MathML レンダリングを保証します。

### macOS

_Latin Modern Math_ フォントのインストールは次のように行います。

1. [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) をダウンロードします。
2. この ZIP アーカイブを展開し、`latinmodern-math-1959` ディレクトリー内に移動し、さらにその中の `otf` ディレクトリー内に移動します。すると、`latinmodern-math` フォントファイルがみつかります。
3. `latinmodern-math` フォントファイルをダブルクリックし、開いたウィンドウの**フォントをインストール**ボタンをクリックします。

> [!NOTE]
> macOS Ventura （バージョン 13）またはそれ以上を使用している場合は、 _STIX Two Math_ はすでにプリインストールされていますので、下記の手順はスキップできます。

_STIX Two Math_ フォントのインストールは次のように行います。

1. [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) をダウンロードします。
2. `static_otf.zip` ZIP アーカイブを開き、 `static_otf` ディレクトリーの中に移動します。そこにあるファイルの中に、 `STIXTwoMath-Regular.otf` ファイルが見つかるでしょう。
3. `STIXTwoMath-Regular.otf` ファイルを開き、開いたウィンドウから**フォントをインストール**ボタンをクリックします。必要に応じて、ディレクトリー内の他のフォントファイルについても同じ操作を行うことができます。

> [!NOTE]
> 非推奨のバージョンの _STIX_ が、 OS X Lion（バージョン 10.7）からプリインストールされています。いくつかのブラウザーでは使用されているものもありますが、最適な数式レンダリングを行うには、上記の手順に従うことを強くお勧めします。

### Linux

下記では、一般的な Linux ディストリビューション上で実行する、パッケージ管理ツールから _Latin Modern Math_ と _STIX Two Math_ フォントをインストールするために、コマンドを探せます。Linuxディストリビューションがこれらのフォント専用のパッケージを提供していない場合は、代替の手法も提供されています。

#### Debian ベースのディストリビューション（Ubuntu や Mint を含む）

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Fedora ベースのディストリビューション

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE ベースのディストリビューション

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive パッケージ

お使いの Linux ディストリビューションで、 _Latin Modern Math_ および _STIX_ フォントのパッケージが提供されていない場合は、 _Latin Modern Math_ および _XITS_ フォントを含む `texlive` パッケージを代わりにインストールすることを検討してください。例えば Mageia の場合は次のようにします。

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

ただし、これらのフォントがシステムで確実に利用できるようにしておく必要があるでしょう。 fontconfig 構成ファイル `/etc/fonts/conf.avail/09-texlive-fonts.conf` を追加し、 TeXLive の `opentype` ディレクトリーを指すようにします。例えば、次のような内容です。

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

最後に、この構成ファイルをシステムフォントの場所リストに追加し、 fontconfig キャッシュを再生成します。

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### 上流パッケージ

お使いの Linux ディストリビューションで利用できるパッケージがない場合、または上流パッケージをインストールしたい場合は、次のことを試してみてください。

1. [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) and [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) をダウンロードします。
2. まだ作成されていない場合は、 `~/.fonts` を作成し、 `latinmodern-math.otf` と `STIXTwoMath-Regular.otf` をそのディレクトリーに配置します。
3. `fc-cache -f` を実行して、 fontconfig キャッシュを再生成します。

### Android

[MathML-fonts アドオン](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/)を使用する必要があります。

> [!NOTE]
> Noto Sans Math は数学記号の Unicode を十分にカバーしており、 [Google は数学レイアウト機能に対応する機能を追加する予定です](https://github.com/notofonts/math/issues/14#issuecomment-1161414446)。

### その他のシステム

他のシステムでは、パッケージマネージャーを使用して、 [MATH 表を含むフォント](#math_表を含むフォント)をインストールすることを検討してください。これらのフォントは通常、 [TeX Live](https://www.tug.org/texlive/) などの TeX ディストリビューションに含まれていますが、システムがフォントを認識できるように、特定の指示に従う必要がある場合もあります。最後の手段として、 [MathML fonts アドオン](https://addons.mozilla.org/ja/firefox/addon/mathml-fonts/)をインストールしてください。

## 高度なセットアップ

次の節では、 MathML のフォントのインストールと構成に役立つ有益なヒントを他にも探してみてください。

### アラビア数字のアルファベット記号

現在、アラビア数字のアルファベット記号に適切な字体のフォントは、とても少数しか存在しません。これらの文字が必要になる可能性がある場合は、 _XITS_ フォントまたは [Amiri](https://www.amirifont.org/) フォントをインストールすることをお勧めします。

### 管理者権限なしでのインストール

管理者権限なしでシステムにフォントをインストールする必要がある場合、最も簡単なオプションは、 [MathML-fonts アドオン](https://addons.mozilla.org/ja/firefox/addon/mathml-fonts/)を使用して数式フォントを利用することです。このアドオンを使用すると、 Gecko ブラウザーが、訪問するすべてのページで CSS スタイルシートを読み込むだけでなく、 MathML コンテンツを含むすべてのページでウェブ数式フォントを読み込むよう強制されるため、最適な方法ではありません。

UNIX システムでは、 [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) と [STIX](https://github.com/stipub/stixfonts) の OTF ファイルをいくつかのローカルフォントフォルダー内にインストールし、（必要に応じて）そのフォルダー内で `fc-cache` を実行するのがより良い方法です。 macOS と Linux では、標準のパスはそれぞれ、 `~/Library/Fonts/` と `~/.fonts` です。

### MATH 表を含むフォント

実際には、任意の[数学用 OpenType フォント](https://fred-wang.github.io/MathFonts/)をインストールし、 MathML レンダリングに使用することができます。ブラウザーによっては、フォント環境設定メニューで MathML の既定のフォントを構成可能なものもあります。あるいは、 [MathML フォント設定アドオン](https://addons.mozilla.org/ja/firefox/addon/mathml-font-settings/)を試すこともできます。

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
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
