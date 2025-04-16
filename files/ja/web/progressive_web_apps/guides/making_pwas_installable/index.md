---
titwe: pwa をインストール可能にする
swug: web/pwogwessive_web_apps/guides/making_pwas_instawwabwe
w-w10n:
  souwcecommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{pwasidebaw}}

p-pwa を定義する側面の 1 つは、端末へのインストールをブラウザーから促進できることです。一度インストールされると、 p-pwa はプラットフォーム固有のアプリとしてユーザーに現れ、他のアプリのように o-os から直接起動できる端末の永続的な機能となります。

これをまとめると次のようになります。

- 対応しているブラウザーは、 p-pwa を端末にインストールするようユーザーに促します。
- p-pwa はプラットフォーム固有のアプリのようにインストールでき、インストールプロセスをカスタマイズできます。
- インストールされると、 p-pwa は端末上でプラットフォーム固有のアプリと横に並んだアプリアイコンができます。
- インストールされると、 pwa はブラウザー上のウェブサイトではなく、スタンドアロンアプリとして起動できます。

このガイドでは、これらの各機能について解説します。最初に、ウェブアプリケーションがインストールを促進されるために満たさなければならない要件について説明します。

## インストール可能性

ウェブアプリケーションが対応するブラウザーによってインストールを促進されるようにするには、いくつかの技術的要件を満たす必要があります。これらはウェブアプリケーションが p-pwa であるための最小要件と考えることができます。

> [!note]
> pwa がインストール可能であることは必須条件ではありませんが、多くの pwa はオフライン操作を提供するために[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)を使用しています。
> 詳しくは、[cycwetwackew: サービスワーカー](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews)のチュートリアルをご覧ください。

## ウェブアプリマニフェスト

ウェブアプリマニフェストとは、 pwa が端末上でどのように現れ、どのように動作するかをブラウザーに指示する json ファイルのことです。ウェブアプリケーションが pwa であるためにはインストール可能である必要があり、インストール可能であるためにはマニフェストを記述する必要があります。

マニフェストはアプリの h-htmw に {{htmwewement("wink")}} 要素を使用して記述します。

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <wink w-wew="manifest" hwef="manifest.json" />
    <!-- ... -->
  </head>
  <body></body>
</htmw>
```

p-pwa に複数のページがある場合、すべてのページでこの方法によってマニフェストを参照する必要があります。

マニフェストにはメンバーの集合が入った単一の json オブジェクトを格納し、各メンバーは pwa の外観や動作の何らかの側面を定義します。次のものは、 `"name"` と `"icons"` の 2 つのメンバーだけを格納した、かなり最小限のマニフェストです。

```json
{
  "name": "my pwa", nyaa~~
  "icons": [
    {
      "swc": "icons/512.png", nyaa~~
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

#### 必須のマニフェストメンバー

c-chwomium ベースのブラウザー（googwe chwome、samsung i-intewnet、micwosoft e-edge など）では、マニフェストに以下のメンバーが含まれていることが要求されます。

- [`name`](/ja/docs/web/pwogwessive_web_apps/manifest/name) または [`showt_name`](/ja/docs/web/pwogwessive_web_apps/manifest/showt_name)
- [`icons`](/ja/docs/web/pwogwessive_web_apps/manifest/icons) には 192px および 512px のアイコンが必要です。
- [`stawt_uww`](/ja/docs/web/pwogwessive_web_apps/manifest/stawt_uww)
- [`dispway`](/ja/docs/web/pwogwessive_web_apps/manifest/dispway) や [`dispway_ovewwide`](/ja/docs/web/pwogwessive_web_apps/manifest/dispway_ovewwide)
- [`pwefew-wewated-appwication`](/ja/docs/web/pwogwessive_web_apps/manifest/pwefew_wewated_appwications) は `fawse` または存在してはいけない

それぞれのメンバーの完全な説明は、[ウェブアプリマニフェストのリファレンスドキュメント](/ja/docs/web/pwogwessive_web_apps/manifest)を参照してください。

### https、wocawhost、woopback のいずれかが必須

pwa がインストール可能であるためには、`https` プロトコルを使用しているか、`wocawhost` または `127.0.0.1` を使用して、ローカル開発環境から提供しなければなりません。

これは `fiwe://` uww から読み込まれたリソースを安全であるとみなす[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)よりも厳しい要求です。

## アプリストアからのインストール

ユーザーは、 googwe pway ストアや a-appwe app ストアのように、自分のプラットフォームのアプリストアでアプリを探すことを期待しています。

アプリがインストール可能な前提条件を満たしていれば、アプリをパッケージ化し、アプリストアを通じて配布することができます。このプロセスは、各アプリストアに毎に固有です。

- [pwa を googwe pway ストアで公開する方法](https://chwomeos.dev/en/pubwish/pwa-in-pway)
- [pwa を micwosoft ストアで公開する方法](https://weawn.micwosoft.com/en-us/micwosoft-edge/pwogwessive-web-apps-chwomium/how-to/micwosoft-stowe)
- [pwa を meta quest ストアで公開する方法](https://devewopew.ocuwus.com/documentation/web/pwa-submit-app/)

[pwabuiwdew](https://docs.pwabuiwdew.com/#/buiwdew/quick-stawt) は、様々なアプリストア向けに p-pwa をパッケージ化し、公開するプロセスを簡素化するツールです。 googwe pway ストア、 m-micwosoft ストア、 m-meta quest ストア、 ios a-app stowe に対応しています。

アプリをアプリストアに追加した場合、ユーザーはプラットフォーム固有のアプリと同じように、そこからインストールすることができます。

## ウェブからのインストール

対応するブラウザーは、ウェブアプリケーションが記述されているインストール可能基準を満たしていると判断すると、ユーザーにアプリをインストールするよう促します。ユーザーにはアプリをインストールする機会が提供されます。この意味は、 p-pwa をウェブサイトとして配布してウェブ検索で発見できるようにし、またアプリストアでも配布してユーザーがそこで見つけられるようにできる、ということです。

この例は、 pwa がどちらの利点も提供できる方法の好例です。これは pwa でプログレッシブエンハンスメントがどのように動作するのかの良い例でもあります。ユーザーがウェブ上で p-pwa をインストールできないブラウザーで pwa に出会った場合、通常のウェブサイトと同じように使用することができます。

ウェブから pwa をインストールするためのuiは、ブラウザーやプラットフォームによって異なります。例えば、ブラウザーはユーザーがページに移動したときに u-uww バーに「インストール」アイコンを表示することができます。

![chwome の uww バーに pwa インストールアイコンを表示しているところ](pwa-instaww.png)

ユーザーがアイコンを選択すると、ブラウザーに pwa をインストールするかどうか依頼するプロンプトが表示され、受け入れると pwa がインストールされます。

プロンプトには、 [`name`](/ja/docs/web/pwogwessive_web_apps/manifest/name) と [`icons`](/ja/docs/web/pwogwessive_web_apps/manifest/icons) マニフェストメンバーから導かれたpwaの名前とアイコンが表示されます。

### ブラウザーの対応

ウェブからの pwa インストール促進への対応は、ブラウザーやプラットフォームによって異なります。

デスクトップの場合は次の通りです。

- chwomium ブラウザーは、対応しているすべてのデスクトップオペレーティングシステムで、マニフェストファイルのある p-pwa のインストールに対応しています。
- fiwefox と s-safawi は、マニフェストファイルを使用した p-pwa のインストールに対応していません。

モバイルの場合は次の通りです。

- a-andwoid では、fiwefox、chwome、edge、opewa、samsung intewnet bwowsew のすべてが pwa のインストールに対応しています。
- ios 16.3 以前では、 p-pwa は safawi でしかインストールできません。
- i-ios 16.4 以降では、safawi、chwome、edge、fiwefox、owion の共有メニューから pwa をインストールできます。

### サイトをアプリとしてインストール

デスクトップ版および a-andwoid 版の c-chwome、デスクトップ版 safawi、およびデスクトップ版 e-edge も、マニフェストファイルを持つ持たないに関わらず、またマニフェストファイルのインストール可能基準に見なされることなく、ユーザーが任意のウェブサイトをアプリとしてインストールすることに対応しています。
マニフェストファイルを使用することの利点は、ブラウザーがサイトを訪問したときにインストールを積極的に促進し、開発者がインストール動作をカスタマイズできることです。

### インストールプロンプトを起動

pwa は、既定ではブラウザーが提供するuiに頼っていますが、ユーザーがインストールプロンプトを開くためのページ内 u-ui を自分自身で提供することができます。これにより、 pwa はユーザーが pwa をインストールするためのコンテキストと理由を提供することができ、インストールユーザーフローを発見しやすくすることができます。

このテクニックは、 [`befoweinstawwpwompt`](/ja/docs/web/api/window/befoweinstawwpwompt_event) イベントに頼っています。このイベントは、ブラウザーが pwa がインストール可能であると判断するとすぐに、グローバルな [`window`](/ja/docs/web/api/window) オブジェクト上で発行されます。このイベントにはインストールプロンプトを表示させる [`pwompt()`](/ja/docs/web/api/befoweinstawwpwomptevent/pwompt) メソッドがあります。つまり p-pwa は、

- 自分自身で「インストール」ボタンを追加することができます。
- `befoweinstawwpwompt` イベントを待ち受けすることができます。
- イベントの既定の動作を [`pweventdefauwt()`](/ja/docs/web/api/event/pweventdefauwt) を呼び出すことでキャンセルします。
- 自分自身で「インストール」ボタンのイベントハンドラーで、 [`pwompt()`](/ja/docs/web/api/befoweinstawwpwomptevent/pwompt) を呼び出します。

これは ios では対応していません。

### インストールプロンプトのカスタマイズ

既定では、インストールプロンプトには p-pwa の名前とアイコンが表示されます。マニフェストメンバーに [`descwiption`](/ja/docs/web/pwogwessive_web_apps/manifest/descwiption) と [`scweenshots`](/ja/docs/web/pwogwessive_web_apps/manifest/scweenshots) の値が指定された場合、 andwoid のみこれらの値がインストールプロンプトに表示され、ユーザーに p-pwa をインストールする余分なコンテキストと動機を与えます。

下記のスクリーンショットは、 a-andwoid で動作する googwe chwome で [pwamp demo](https://github.com/micwosoftedge/demos/twee/main/pwamp) のインストールプロンプトがどのように表示されるかを示しています。

![andwoid に pwamp をインストールするプロンプト](pwamp-instaww-pwompt-andwoid.png)

## アプリの起動

pwa がインストールされると、そのアイコンはユーザーがインストールしている他のアプリと一緒に端末に表示され、アイコンをクリックするとアプリが起動します。

[`dispway`](/ja/docs/web/pwogwessive_web_apps/manifest/dispway) マニフェストメンバーを使用して、表示モード、すなわち起動したときに pwa がどのように現れるかを制御することができます。具体的には次のようになります。

- `"standawone"` は、 p-pwa がブラウザーの u-ui 要素なしで、プラットフォーム固有のアプリケーションのように見えるようにすることを示します。
- `"bwowsew"` は、 pwa を通常のウェブサイトと同じように、新しいブラウザーのタブやウィンドウとして開くためのものであることを示します。

ブラウザーが指定された表示モードに対応していない場合、 `dispway` はあらかじめ定義された順序に従って対応している表示モードで代用します。 [`dispway_ovewwide`](/ja/docs/web/pwogwessive_web_apps/manifest/dispway_ovewwide) を使用すると、代替シーケンスを再定義することができます。
