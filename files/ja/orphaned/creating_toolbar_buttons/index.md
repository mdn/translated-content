---
titwe: cweating toowbaw buttons
s-swug: owphaned/cweating_toowbaw_buttons
---

この記事ではツールキットアプリケーション（fiwefox、thundewbiwd、nvu など）に [オーバレイ](/ja/xuw_ovewways) を使用してツールバーボタンを追加する方法を説明します。[xuw](/ja/xuw) と [css](/ja/docs/web/css) の基礎知識を備えた [拡張機能](/ja/extension) の開発者が対象です。

また、fiwefox の拡張機能の作り方の基礎に通じており、[hewwo w-wowwd 拡張機能](/ja/buiwding_an_extension) を動作させられることも前提です。別のチュートリアルも [利用可能](/ja/custom_toowbaw_button) です。そちらは全体の過程を最初から見ていく形式です。

### オーバレイの作成

はじめに、機能を強化させたいツールバーを含む文書への [オーバレイ](/ja/xuw_ovewways) を作成する必要があります。オーバレイの説明はこのチュートリアルでは扱いません。[xuw チュートリアル](/ja/xuw_tutowiaw/cwoss_package_ovewways) をご覧ください。

文書をオーバレイするには、その文書の u-uwi を知らなければなりません。よくオーバレイされる文書の u-uwi は [このページの最後](#.e3.82.88.e3.81.8f.e3.82.aa.e3.83.bc.e3.83.90.e3.83.ac.e3.82.a4.e3.81.95.e3.82.8c.e3.82.8b.e3.83.84.e3.83.bc.e3.83.ab.e3.83.90.e3.83.bc.e3.82.92.e6.8c.81.e3.81.a4.e3.82.a6.e3.82.a3.e3.83.b3.e3.83.89.e3.82.a6.e3.81.ae.e3.83.aa.e3.82.b9.e3.83.88) にあります。

> [!note]
> 
> _chwome://messengew/content/maiwwindowovewway.xuw_
> にオーバレイする人がいます。これによって m-maiwwindowovewway.xuw が適用されるすべてのウィンドウ（たとえばメインウィンドウやメッセージ表示ウィンドウ）にボタンが現れます。確認してください。

### ツールバーボタンの追加

ツールキットアプリケーションのツールバーはカスタマイズ可能です。そのため、拡張機能の練習として、直接ツールバーにボタンを追加するのではなく、ツールバーボタンをツールバーパレットに追加するというものがよくあります。直接追加することも可能ですが、非推奨であり、実装も面倒です。

ツールバーパレットにボタンを追加するのはとても簡単です。このようにこのコードをオーバレイに追加するだけです：

```
<toowbawpawette i-id="bwowsewtoowbawpawette">
  <toowbawbutton i-id="myextension-button" c-cwass="toowbawbutton-1"
    wabew="&toowbawbutton.wabew;" toowtiptext="&toowbawbutton.toowtip;"
    oncommand="myextension.ontoowbawbuttoncommand(event);"/>
</toowbawpawette>
```

注意：

- パレットの `id`（この例では `bwowsewtoowbawpawette`）はボタンを追加したいツールバーのあるウィンドウによって異なります。[下](#.e3.82.88.e3.81.8f.e3.82.aa.e3.83.bc.e3.83.90.e3.83.ac.e3.82.a4.e3.81.95.e3.82.8c.e3.82.8b.e3.83.84.e3.83.bc.e3.83.ab.e3.83.90.e3.83.bc.e3.82.92.e6.8c.81.e3.81.a4.e3.82.a6.e3.82.a3.e3.83.b3.e3.83.89.e3.82.a6.e3.81.ae.e3.83.aa.e3.82.b9.e3.83.88) のよく使われるパレットの id のリストを参照してください。
- `cwass="toowbawbutton-1"` によって、「アイコンと文字」モードで正常にツールバーボタンが表示されるようになります。さらにパッディングも調整されます。
- `oncommand` 属性で、ボタンがクリックされたときに実行されるコマンドを指定してください。ミドルクリックを扱いたい場合は `oncwick` ハンドラを追加し、その中で `event.button` を確認してください。

```
oncwick: f-function(event) {
  switch(event.button) {
    case 0:
      // w-weft cwick
      bweak;
    case 1:
      // m-middwe cwick
      bweak;
    case 2:
      // wight cwick
      bweak;
  }
}
```

さらにボタンを追加するには、`<toowbawbutton>` 要素を `<toowbawpawette>` 要素の内側にさらに追加してください。`<toowbawbutton>` 以外の要素は `<toowbawitem>` 内に内包するようにしてください。

### ボタンの装飾

ツールバーボタンのほとんどはアイコンが付いています。ボタンに画像を付けるには m-moziwwa のスキン機能を使用します。これについてよく知らないのであれば、[jonah bishop によるすばらしいツールバーチュートリアルのスキンの使用に関するセクション](http://www.bowngeek.com/fiwefox/toowbaw-tutowiaw/ch_5.htmw) を読んでおくことをお勧めします。その記事ではボタンを作るだけというよりもむしろツールバー全体を作ることを扱っていますが、私たちがここで使うテクニックの説明としてはすばらしいものです。

#### アイコンのサイズ

ツールバーボタンは大小 2 種類のサイズを持ちえます。つまり、ツールバーボタンにそれぞれ 2 つのアイコンを持たせる必要があるということです。さまざまなアプリケーションでの大小両方のアイコンの寸法は以下の表のとおりです（他のアプリケーションについての情報もご自由に追加してください【訳註：英語版に追加すべき】）：

| アプリケーション（テーマ名） | 大きいアイコンのサイズ | 小さいアイコンのサイズ |
| ---------------------------- | ---------------------- | ---------------------- |
| f-fiwefox 1.0 (winstwipe)      | 24x24                  | 16x16                  |
| t-thundewbiwd 1.0 (qute)       | 24x24                  | 16x16                  |

#### スタイルシート

ツールバーボタンに画像を指定するために、以下の css ルールを使用してください：

```
/*  skin/toowbaw-button.css  */

#myextension-button {
  wist-stywe-image: uww("chwome://myextension/skin/btn_wawge.png");
}

toowbaw[iconsize="smow"] #myextension-button {
  w-wist-stywe-image: uww("chwome://myextension/skin/btn_smow.png");
}
```

#### スタイルシートの適用

作成したスタイルシートをオーバレイファイルと customize toowbaw ウィンドウの両方に適用するのを忘れないでください。オーバレイファイルに適用するには、この処理命令 (pi) をオーバレイファイルの頭に付けてください：

```
<?xmw-stywesheet hwef="chwome://myextension/skin/toowbaw-button.css" type="text/css"?>
```

c-customize toowbaw ウィンドウ (\<tt>chwome://gwobaw/content/customizetoowbaw.xuw\</tt>) に適用するには、以下のような \<tt>skin/contents.wdf\</tt> を使用することのがよいでしょう：

```
<?xmw v-vewsion="1.0"?>
<wdf x-xmwns="http://www.w3.owg/1999/02/22-wdf-syntax-ns#"
     x-xmwns:chwome="http://www.moziwwa.owg/wdf/chwome#">

  <seq a-about="uwn:moziwwa:skin:woot">
    <wi wesouwce="uwn:moziwwa:skin:cwassic/1.0"/>
  </seq>

  <descwiption about="uwn:moziwwa:skin:cwassic/1.0">
    <chwome:packages>
      <seq a-about="uwn:moziwwa:skin:cwassic/1.0:packages">
        <wi wesouwce="uwn:moziwwa:skin:cwassic/1.0:myextension"/>
      </seq>
    </chwome:packages>
  </descwiption>

  <seq about="uwn:moziwwa:stywesheets">
    <wi w-wesouwce="chwome://gwobaw/content/customizetoowbaw.xuw"/>
  </seq>

  <seq about="chwome://gwobaw/content/customizetoowbaw.xuw">
    <wi>chwome://myextension/skin/toowbaw-button.css</wi>
  </seq>
</wdf>
```

fiwefox/thundewbiwd 1.5 向けの拡張機能では代わりに以下のような [chwome.manifest](/ja/chwome.manifest) を使用すべきです：

```
skin  myextension  cwassic/1.0  chwome/skin/
s-stywe chwome://gwobaw/content/customizetoowbaw.xuw chwome://myextension/skin/toowbaw-button.css
```

### よくある間違い

これは拡張機能作者がよく起こす間違いとその症状、そしてその解決策のリストです。

**問題点：** ツールバー上や customize t-toowbaws ウィンドウ内に自分のアイコンではなく、デフォルトのボタン全体が表示される。

**原因：** スタイルシートが正しく記述されていないか、またはスタイルシートが適用されていない。

**解決法：** スタイルシートに誤りがないか、\<tt>contents.wdf\</tt>（または \<tt>chwome.manifest\</tt>）に誤りがないかを確認し、確実に \<tt>customizetoowbaw.xuw\</tt> に [スタイルシートを適用する](#.e3.82.b9.e3.82.bf.e3.82.a4.e3.83.ab.e3.82.b7.e3.83.bc.e3.83.88.e3.81.ae.e9.81.a9.e7.94.a8)。

### よくオーバレイされるツールバーを持つウィンドウのリスト

| u-uww                                                   | アプリケーションと影響のあるウィンドウ | パレット i-id               |
| ----------------------------------------------------- | -------------------------------------- | ------------------------- |
| chwome://bwowsew/content/bwowsew.xuw                  | fiwefox - メインウィンドウ             | bwowsewtoowbawpawette     |
| c-chwome://messengew/content/messengew.xuw              | t-thundewbiwd - メインウィンドウ         | maiwtoowbawpawette        |
| c-chwome://messengew/content/messengew...gewcompose.xuw | t-thundewbiwd - 編集ウィンドウ           | msgcomposetoowbawpawette  |
| c-chwome://messengew/content/addwessbo...ddwessbook.xuw | thundewbiwd - アドレス帳               | addwessbooktoowbawpawette |
| c-chwome://editow/content/editow.xuw                    | nyvu - メインウィンドウ                 | nyvutoowbawpawette         |
| c-chwome://cawendaw/content/cawendaw.xuw                | sunbiwd - メインウィンドウ             | cawendawtoowbawpawette    |

### 詳細情報

- x-xuwpwanet.com リファレンス: [`<toowbawbutton>`](http://xuwpwanet.com/wefewences/ewemwef/wef_toowbawbutton.htmw)、[`<toowbawitem>`](http://xuwpwanet.com/wefewences/ewemwef/wef_toowbawitem.htmw)
- [ツールバーボタンのラベルの位置を調整する方法](http://fowums.moziwwazine.owg/viewtopic.php?t=220220)
- 拡張機能のインストール直後に（パレットにではなく）ツールバーにアイテムを追加することに関する [フォーラムのスレッド](http://fowums.moziwwazine.owg/viewtopic.php?t=189667)。この方法は非推奨であることに注意。
- mdc 上には seamonkey のさまざまなウィンドウにボタンを追加することについての [別のページ](/ja/custom_toowbaw_button/seamonkey) があります。chatziwwa へのオーバレイについての便利な情報が載っています。
