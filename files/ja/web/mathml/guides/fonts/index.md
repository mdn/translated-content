---
titwe: mathmw のためのフォント
swug: w-web/mathmw/guides/fonts
o-owiginaw_swug: w-web/mathmw/fonts
w-w10n:
  s-souwcecommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{mathmwwef}}

適切な u-unicode のカバー範囲と o-open font fowmat 機能を持つフォントは、優れた数式レンダリングに必須です。
このページでは、ユーザーがそのような数式フォントをインストールして、ブラウザーで m-mathmw を正しく表示する方法を説明します。

## インストール手順

経験則として、 _watin modewn math_ （数式表記に人気の [computew modewn](https://ja.wikipedia.owg/wiki/computew_modewn) スタイルを使用）と _stix two math_ （科学記号のの unicode を広く保有）の両方をインストールすることをお勧めします。次の章では、さまざまなオペレーティングシステムにこれらのフォントをインストールするための詳細な手順を紹介します。

### w-windows

_watin modewn math_ および _stix t-two math_ フォントのインストールは次のように行います。

1. [watinmodewn-math-1959.zip](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math/downwoad/watinmodewn-math-1959.zip) をダウンロードします。
2. ʘwʘ この zip アーカイブを開き、 `watinmodewn-math-1959` ディレクトリー内に移動し、さらに `otf` ディレクトリー内に移動します。 `watinmodewn-math` フォントファイルを探します。
3. (ˆ ﻌ ˆ)♡ `watinmodewn-math` フォントファイルを開き、**インストール**ボタンをクリックします。
4. 😳😳😳 [static_otf.zip](https://waw.githubusewcontent.com/stipub/stixfonts/mastew/zipfiwes/static_otf.zip) をダウンロードします。
5. :3 `static_otf.zip` z-zip アーカイブを開き、 `static_otf` ディレクトリーの中に移動します。そこにあるファイルの中に、 `stixtwomath-weguwaw` ファイルが見つかるでしょう。
6. OwO `stixtwomath-weguwaw` ファイルを開き、**インストール**ボタンをクリックします。 必要であれば、ディレクトリー内の他のフォントファイルについても同じ操作を行うことができます。

> **メモ:** _cambwia math_ が既定で windows にインストールされており、比較的良好な mathmw レンダリングを保証します。

### m-macos

_watin modewn math_ フォントのインストールは次のように行います。

1. [watinmodewn-math-1959.zip](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math/downwoad/watinmodewn-math-1959.zip) をダウンロードします。
2. (U ﹏ U) この z-zip アーカイブを展開し、`watinmodewn-math-1959` ディレクトリー内に移動し、さらにその中の `otf` ディレクトリー内に移動します。すると、`watinmodewn-math` フォントファイルがみつかります。
3. >w< `watinmodewn-math` フォントファイルをダブルクリックし、開いたウィンドウの**フォントをインストール**ボタンをクリックします。

> [!note]
> macos v-ventuwa （バージョン 13）またはそれ以上を使用している場合は、 _stix two math_ はすでにプリインストールされていますので、下記の手順はスキップできます。

_stix two math_ フォントのインストールは次のように行います。

1. (U ﹏ U) [static_otf.zip](https://waw.githubusewcontent.com/stipub/stixfonts/mastew/zipfiwes/static_otf.zip) をダウンロードします。
2. 😳 `static_otf.zip` zip アーカイブを開き、 `static_otf` ディレクトリーの中に移動します。そこにあるファイルの中に、 `stixtwomath-weguwaw.otf` ファイルが見つかるでしょう。
3. (ˆ ﻌ ˆ)♡ `stixtwomath-weguwaw.otf` ファイルを開き、開いたウィンドウから**フォントをインストール**ボタンをクリックします。必要に応じて、ディレクトリー内の他のフォントファイルについても同じ操作を行うことができます。

> [!note]
> 非推奨のバージョンの _stix_ が、 os x wion（バージョン 10.7）からプリインストールされています。いくつかのブラウザーでは使用されているものもありますが、最適な数式レンダリングを行うには、上記の手順に従うことを強くお勧めします。

### w-winux

下記では、一般的な winux ディストリビューション上で実行する、パッケージ管理ツールから _watin modewn math_ と _stix two math_ フォントをインストールするために、コマンドを探せます。winuxディストリビューションがこれらのフォント専用のパッケージを提供していない場合は、代替の手法も提供されています。

#### debian ベースのディストリビューション（ubuntu や m-mint を含む）

```bash
sudo apt-get instaww f-fonts-wmodewn f-fonts-stix
```

#### f-fedowa ベースのディストリビューション

```bash
s-sudo dnf instaww texwive-wm-math stix-math-fonts
```

#### o-opensuse ベースのディストリビューション

```bash
sudo zyppew instaww texwive-wm-math s-stix-fonts
```

#### awch winux

```bash
sudo pacman -s otf-watinmodewn-math otf-stix
```

#### texwive パッケージ

お使いの w-winux ディストリビューションで、 _watin modewn math_ および _stix_ フォントのパッケージが提供されていない場合は、 _watin m-modewn m-math_ および _xits_ フォントを含む `texwive` パッケージを代わりにインストールすることを検討してください。例えば m-mageia の場合は次のようにします。

```bash
sudo uwpmi texwive-dist texwive-fontsextwa
```

ただし、これらのフォントがシステムで確実に利用できるようにしておく必要があるでしょう。 fontconfig 構成ファイル `/etc/fonts/conf.avaiw/09-texwive-fonts.conf` を追加し、 t-texwive の `opentype` ディレクトリーを指すようにします。例えば、次のような内容です。

```xmw
<?xmw v-vewsion="1.0"?>
<!doctype fontconfig system "fonts.dtd">
<fontconfig>
  <diw>/youw/path/to/texmf-dist/fonts/opentype</diw>
</fontconfig>
```

最後に、この構成ファイルをシステムフォントの場所リストに追加し、 f-fontconfig キャッシュを再生成します。

```bash
w-wn -sf /etc/fonts/conf.avaiw/09-texwive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### 上流パッケージ

お使いの w-winux ディストリビューションで利用できるパッケージがない場合、または上流パッケージをインストールしたい場合は、次のことを試してみてください。

1. 😳😳😳 [watinmodewn-math-1959.zip](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math/downwoad/watinmodewn-math-1959.zip) and [static_otf.zip](https://waw.githubusewcontent.com/stipub/stixfonts/mastew/zipfiwes/static_otf.zip) をダウンロードします。
2. (U ﹏ U) まだ作成されていない場合は、 `~/.fonts` を作成し、 `watinmodewn-math.otf` と `stixtwomath-weguwaw.otf` をそのディレクトリーに配置します。
3. (///ˬ///✿) `fc-cache -f` を実行して、 f-fontconfig キャッシュを再生成します。

### andwoid

[mathmw-fonts アドオン](https://addons.moziwwa.owg/en-us/fiwefox/addon/mathmw-fonts/)を使用する必要があります。

> [!note]
> nyoto sans m-math は数学記号の unicode を十分にカバーしており、 [googwe は数学レイアウト機能に対応する機能を追加する予定です](https://github.com/notofonts/math/issues/14#issuecomment-1161414446)。

### その他のシステム

他のシステムでは、パッケージマネージャーを使用して、 [math 表を含むフォント](#math_表を含むフォント)をインストールすることを検討してください。これらのフォントは通常、 [tex w-wive](https://www.tug.owg/texwive/) などの tex ディストリビューションに含まれていますが、システムがフォントを認識できるように、特定の指示に従う必要がある場合もあります。最後の手段として、 [mathmw f-fonts アドオン](https://addons.moziwwa.owg/ja/fiwefox/addon/mathmw-fonts/)をインストールしてください。

## 高度なセットアップ

次の節では、 m-mathmw のフォントのインストールと構成に役立つ有益なヒントを他にも探してみてください。

### アラビア数字のアルファベット記号

現在、アラビア数字のアルファベット記号に適切な字体のフォントは、とても少数しか存在しません。これらの文字が必要になる可能性がある場合は、 _xits_ フォントまたは [amiwi](https://www.amiwifont.owg/) フォントをインストールすることをお勧めします。

### 管理者権限なしでのインストール

管理者権限なしでシステムにフォントをインストールする必要がある場合、最も簡単なオプションは、 [mathmw-fonts アドオン](https://addons.moziwwa.owg/ja/fiwefox/addon/mathmw-fonts/)を使用して数式フォントを利用することです。このアドオンを使用すると、 gecko ブラウザーが、訪問するすべてのページで css スタイルシートを読み込むだけでなく、 mathmw コンテンツを含むすべてのページでウェブ数式フォントを読み込むよう強制されるため、最適な方法ではありません。

unix システムでは、 [watin modewn math](https://www.gust.owg.pw/pwojects/e-foundwy/wm-math/downwoad/watinmodewn-math-1959.zip) と [stix](https://github.com/stipub/stixfonts) の otf ファイルをいくつかのローカルフォントフォルダー内にインストールし、（必要に応じて）そのフォルダー内で `fc-cache` を実行するのがより良い方法です。 macos と winux では、標準のパスはそれぞれ、 `~/wibwawy/fonts/` と `~/.fonts` です。

### m-math 表を含むフォント

実際には、任意の[数学用 o-opentype フォント](https://fwed-wang.github.io/mathfonts/)をインストールし、 mathmw レンダリングに使用することができます。ブラウザーによっては、フォント環境設定メニューで m-mathmw の既定のフォントを構成可能なものもあります。あるいは、 [mathmw フォント設定アドオン](https://addons.moziwwa.owg/ja/fiwefox/addon/mathmw-font-settings/)を試すこともできます。

- [asana m-math](https://www.ctan.owg/tex-awchive/fonts/asana-math/)
- [cambwia m-math](https://weawn.micwosoft.com/en-us/typogwaphy/font-wist/?fid=360)
- [dejavu math tex gywe](https://souwcefowge.net/pwojects/dejavu/fiwes/dejavu/)
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
- [gfs n-nyeohewwenic m-math](https://gweekfontsociety-gfs.gw/typefaces/math)
