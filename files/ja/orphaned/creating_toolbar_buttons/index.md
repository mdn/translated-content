---
title: Creating toolbar buttons
slug: orphaned/Creating_toolbar_buttons
---

この記事ではツールキットアプリケーション（Firefox、Thunderbird、Nvu など）に [オーバレイ](/ja/XUL_Overlays) を使用してツールバーボタンを追加する方法を説明します。[XUL](/ja/XUL) と [CSS](/ja/CSS) の基礎知識を備えた [拡張機能](/ja/Extension) の開発者が対象です。

また、Firefox の拡張機能の作り方の基礎に通じており、[Hello World 拡張機能](/ja/Building_an_Extension) を動作させられることも前提です。別のチュートリアルも [利用可能](/ja/Custom_Toolbar_Button) です。そちらは全体の過程を最初から見ていく形式です。

### オーバレイの作成

はじめに、機能を強化させたいツールバーを含む文書への [オーバレイ](/ja/XUL_Overlays) を作成する必要があります。オーバレイの説明はこのチュートリアルでは扱いません。[XUL チュートリアル](/ja/XUL_Tutorial/Cross_Package_Overlays) をご覧ください。

文書をオーバレイするには、その文書の URI を知らなければなりません。よくオーバレイされる文書の URI は [このページの最後](#.E3.82.88.E3.81.8F.E3.82.AA.E3.83.BC.E3.83.90.E3.83.AC.E3.82.A4.E3.81.95.E3.82.8C.E3.82.8B.E3.83.84.E3.83.BC.E3.83.AB.E3.83.90.E3.83.BC.E3.82.92.E6.8C.81.E3.81.A4.E3.82.A6.E3.82.A3.E3.83.B3.E3.83.89.E3.82.A6.E3.81.AE.E3.83.AA.E3.82.B9.E3.83.88) にあります。

> **メモ:** 
> _chrome://messenger/content/mailWindowOverlay.xul_
> にオーバレイする人がいます。これによって mailWindowOverlay.xul が適用されるすべてのウィンドウ（たとえばメインウィンドウやメッセージ表示ウィンドウ）にボタンが現れます。確認してください。

### ツールバーボタンの追加

ツールキットアプリケーションのツールバーはカスタマイズ可能です。そのため、拡張機能の練習として、直接ツールバーにボタンを追加するのではなく、ツールバーボタンをツールバーパレットに追加するというものがよくあります。直接追加することも可能ですが、非推奨であり、実装も面倒です。

ツールバーパレットにボタンを追加するのはとても簡単です。このようにこのコードをオーバレイに追加するだけです：

```
<toolbarpalette id="BrowserToolbarPalette">
  <toolbarbutton id="myextension-button" class="toolbarbutton-1"
    label="&toolbarbutton.label;" tooltiptext="&toolbarbutton.tooltip;"
    oncommand="MyExtension.onToolbarButtonCommand(event);"/>
</toolbarpalette>
```

注意：

- パレットの `id`（この例では `BrowserToolbarPalette`）はボタンを追加したいツールバーのあるウィンドウによって異なります。[下](#.E3.82.88.E3.81.8F.E3.82.AA.E3.83.BC.E3.83.90.E3.83.AC.E3.82.A4.E3.81.95.E3.82.8C.E3.82.8B.E3.83.84.E3.83.BC.E3.83.AB.E3.83.90.E3.83.BC.E3.82.92.E6.8C.81.E3.81.A4.E3.82.A6.E3.82.A3.E3.83.B3.E3.83.89.E3.82.A6.E3.81.AE.E3.83.AA.E3.82.B9.E3.83.88) のよく使われるパレットの ID のリストを参照してください。
- `class="toolbarbutton-1"` によって、「アイコンと文字」モードで正常にツールバーボタンが表示されるようになります。さらにパッディングも調整されます。
- `oncommand` 属性で、ボタンがクリックされたときに実行されるコマンドを指定してください。ミドルクリックを扱いたい場合は `onclick` ハンドラを追加し、その中で `event.button` を確認してください。

```
onclick: function(event) {
  switch(event.button) {
    case 0:
      // Left click
      break;
    case 1:
      // Middle click
      break;
    case 2:
      // Right click
      break;
  }
}
```

さらにボタンを追加するには、`<toolbarbutton>` 要素を `<toolbarpalette>` 要素の内側にさらに追加してください。`<toolbarbutton>` 以外の要素は `<toolbaritem>` 内に内包するようにしてください。

### ボタンの装飾

ツールバーボタンのほとんどはアイコンが付いています。ボタンに画像を付けるには Mozilla のスキン機能を使用します。これについてよく知らないのであれば、[Jonah Bishop によるすばらしいツールバーチュートリアルのスキンの使用に関するセクション](http://www.borngeek.com/firefox/toolbar-tutorial/ch_5.html) を読んでおくことをお勧めします。その記事ではボタンを作るだけというよりもむしろツールバー全体を作ることを扱っていますが、私たちがここで使うテクニックの説明としてはすばらしいものです。

#### アイコンのサイズ

ツールバーボタンは大小 2 種類のサイズを持ちえます。つまり、ツールバーボタンにそれぞれ 2 つのアイコンを持たせる必要があるということです。さまざまなアプリケーションでの大小両方のアイコンの寸法は以下の表のとおりです（他のアプリケーションについての情報もご自由に追加してください【訳註：英語版に追加すべき】）：

| アプリケーション（テーマ名） | 大きいアイコンのサイズ | 小さいアイコンのサイズ |
| ---------------------------- | ---------------------- | ---------------------- |
| Firefox 1.0 (Winstripe)      | 24x24                  | 16x16                  |
| Thunderbird 1.0 (Qute)       | 24x24                  | 16x16                  |

#### スタイルシート

ツールバーボタンに画像を指定するために、以下の CSS ルールを使用してください：

```
/*  skin/toolbar-button.css  */

#myextension-button {
  list-style-image: url("chrome://myextension/skin/btn_large.png");
}

toolbar[iconsize="small"] #myextension-button {
  list-style-image: url("chrome://myextension/skin/btn_small.png");
}
```

#### スタイルシートの適用

作成したスタイルシートをオーバレイファイルと Customize Toolbar ウィンドウの両方に適用するのを忘れないでください。オーバレイファイルに適用するには、この処理命令 (PI) をオーバレイファイルの頭に付けてください：

```
<?xml-stylesheet href="chrome://myextension/skin/toolbar-button.css" type="text/css"?>
```

Customize Toolbar ウィンドウ (\<tt>chrome://global/content/customizeToolbar.xul\</tt>) に適用するには、以下のような \<tt>skin/contents.rdf\</tt> を使用することのがよいでしょう：

```
<?xml version="1.0"?>
<RDF xmlns="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:chrome="http://www.mozilla.org/rdf/chrome#">

  <Seq about="urn:mozilla:skin:root">
    <li resource="urn:mozilla:skin:classic/1.0"/>
  </Seq>

  <Description about="urn:mozilla:skin:classic/1.0">
    <chrome:packages>
      <Seq about="urn:mozilla:skin:classic/1.0:packages">
        <li resource="urn:mozilla:skin:classic/1.0:myextension"/>
      </Seq>
    </chrome:packages>
  </Description>

  <Seq about="urn:mozilla:stylesheets">
    <li resource="chrome://global/content/customizeToolbar.xul"/>
  </Seq>

  <Seq about="chrome://global/content/customizeToolbar.xul">
    <li>chrome://myextension/skin/toolbar-button.css</li>
  </Seq>
</RDF>
```

Firefox/Thunderbird 1.5 向けの拡張機能では代わりに以下のような [chrome.manifest](/ja/Chrome.manifest) を使用すべきです：

```
skin  myextension  classic/1.0  chrome/skin/
style chrome://global/content/customizeToolbar.xul chrome://myextension/skin/toolbar-button.css
```

### よくある間違い

これは拡張機能作者がよく起こす間違いとその症状、そしてその解決策のリストです。

**問題点：** ツールバー上や Customize Toolbars ウィンドウ内に自分のアイコンではなく、デフォルトのボタン全体が表示される。

**原因：** スタイルシートが正しく記述されていないか、またはスタイルシートが適用されていない。

**解決法：** スタイルシートに誤りがないか、\<tt>contents.rdf\</tt>（または \<tt>chrome.manifest\</tt>）に誤りがないかを確認し、確実に \<tt>customizeToolbar.xul\</tt> に [スタイルシートを適用する](#.E3.82.B9.E3.82.BF.E3.82.A4.E3.83.AB.E3.82.B7.E3.83.BC.E3.83.88.E3.81.AE.E9.81.A9.E7.94.A8)。

### よくオーバレイされるツールバーを持つウィンドウのリスト

| URL                                                   | アプリケーションと影響のあるウィンドウ | パレット id               |
| ----------------------------------------------------- | -------------------------------------- | ------------------------- |
| chrome://browser/content/browser.xul                  | Firefox - メインウィンドウ             | BrowserToolbarPalette     |
| chrome://messenger/content/messenger.xul              | Thunderbird - メインウィンドウ         | MailToolbarPalette        |
| chrome://messenger/content/messenger...gercompose.xul | Thunderbird - 編集ウィンドウ           | MsgComposeToolbarPalette  |
| chrome://messenger/content/addressbo...ddressbook.xul | Thunderbird - アドレス帳               | AddressBookToolbarPalette |
| chrome://editor/content/editor.xul                    | Nvu - メインウィンドウ                 | NvuToolbarPalette         |
| chrome://calendar/content/calendar.xul                | Sunbird - メインウィンドウ             | calendarToolbarPalette    |

### 詳細情報

- XulPlanet.com リファレンス: [`<toolbarbutton>`](http://xulplanet.com/references/elemref/ref_toolbarbutton.html)、[`<toolbaritem>`](http://xulplanet.com/references/elemref/ref_toolbaritem.html)
- [ツールバーボタンのラベルの位置を調整する方法](http://forums.mozillazine.org/viewtopic.php?t=220220)
- 拡張機能のインストール直後に（パレットにではなく）ツールバーにアイテムを追加することに関する [フォーラムのスレッド](http://forums.mozillazine.org/viewtopic.php?t=189667)。この方法は非推奨であることに注意。
- MDC 上には SeaMonkey のさまざまなウィンドウにボタンを追加することについての [別のページ](/ja/Custom_Toolbar_Button/SeaMonkey) があります。ChatZilla へのオーバレイについての便利な情報が載っています。
