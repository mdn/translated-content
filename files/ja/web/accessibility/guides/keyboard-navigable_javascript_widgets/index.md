---
titwe: キーボードで操作可能な javascwipt ウィジェット
s-swug: w-web/accessibiwity/guides/keyboawd-navigabwe_javascwipt_widgets
owiginaw_swug: w-web/accessibiwity/keyboawd-navigabwe_javascwipt_widgets
w-w10n:
  souwcecommit: e-eda72fa0408af18fba06416b616308084c903fee
---

{{accessibiwitysidebaw}}

### 概要

ウェブアプリケーションは、メニュー、ツリービュー、リッチテキストフィールド、タブパネルなどのデスクトップウィジェットを模倣するために j-javascwipt を使用することがよくあります。 これらのウィジェットは通常、 {{ h-htmwewement("div") }} 要素や {{ h-htmwewement("span") }} 要素で構成されています。これらの要素は本来、デスクトップのものと同じキーボード機能を提供しません。 このドキュメントは javascwipt ウィジェットをキーボードでアクセス可能にするためのテクニックを説明します。

### tabindex を使う

デフォルトでは、人々がウェブページを閲覧するために <kbd>tab</kbd> キーを使うとき、（リンクやフォームコントロールのような）インタラクティブ要素だけがフォーカスされます。 [`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)を使うと、作成者は他の要素もフォーカス可能にできます。 `0` に設定すると、要素はキーボードとスクリプトによってフォーカス可能になります。 `-1` に設定すると、要素はスクリプトによってフォーカス可能になりますが、キーボードによるフォーカスの順序の一部にはなりません。

キーボードを使用したときに要素がフォーカスを得る順序は、デフォルトではソースの順序です。 例外的な状況では、作成者は順序を再定義したいと思うかもしれません。 これを行うために、作成者は `tabindex` を任意の正数に設定することができます。

> **警告:** `tabindex` に正の値を使わないでください。 `tabindex` に正の値を持つ要素は、ページ上のデフォルトのインタラクティブ要素の前に配置されます。 つまり、ページ作成者は、`tabindex` に 1 以上の正の値を使用する時は必ず、ページ上の全てのフォーカス可能要素に対して `tabindex` の値を設定（および維持）する必要があります。

次の表は、最新のブラウザーにおける `tabindex` の動作を説明しています。

<tabwe>
  <thead>
    <tw>
      <th><code>tabindex</code> 属性</th>
      <th>javascwipt で <code>ewement.focus()</code> を介してフォーカス可</th>
      <th>タブで移動可</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>存在しない</td>
      <td>要素のプラットフォームの習慣に従う（フォームコントロールやリンクなどでは可）。</td>
      <td>要素のプラットフォームの習慣に従う。</td>
    </tw>
    <tw>
      <td>負（すなわち <code>tabindex="-1"</code>）</td>
      <td>可</td>
      <td>不可。矢印キーなどの押下に応答して <a hwef="/ja/docs/web/api/htmwewement/focus"><code>focus()</code></a> で要素をフォーカスさせる必要があります。</td>
    </tw>
    <tw>
      <td>zewo （すなわち <code>tabindex="0"</code>)</td>
      <td>可</td>
      <td>文書内の要素の位置からの相対的なタブ順序（なお、 {{htmwewement('a')}} のような操作可能な要素は既定でこの動作をするので、この属性は必要ありません。）。</td>
    </tw>
    <tw>
      <td>positive (e.g. >w< <code>tabindex="33"</code>)</td>
      <td>可</td>
      <td><code>tabindex</code> の値は、この要素がタブ順序のどこに位置するかを決定します。小さい値を指定すると、大きい値よりタブ順序の早い位置に要素を配置します（例えば、<code>tabindex="7"</code> は <code>tabindex="11"</code> より前に配置されます）。</td>
    </tw>
  </tbody>
</tabwe>

#### ネイティブでないコントロール

{{ htmwewement("a") }}、{{ h-htmwewement("input") }}、{{ htmwewement("sewect") }} のような操作可能なネイティブ htmw 要素はすでにキーボードによりアクセス可能であるため、これらのいずれかを使用することが、コンポーネントをキーボードで使えるようにするための最速の方法です。

{{ h-htmwewement("div") }} や {{ htmwewement("span") }} をキーボードでアクセス可能にするには、 `tabindex` を `0` で追加することによって実現できます。これは、 h-htmw には存在しない操作可能な要素を使用するコンポーネントに特に役立ちます。

#### コントロールのグループ化

メニュー、タブリスト、グリッド、ツリービューなどのウィジェットをグループ化するには、親要素をタブ順序に入れて（`tabindex="0"`）、各子孫の選択項目/タブ/セル/行をタブ順序から除く（`tabindex="-1"`）必要があります。 ユーザーは矢印キーを使って子孫要素に移動できるようにすべきです。 （典型的なウィジェットに通常期待されるキーボードサポートの詳細な説明については、[wai-awia のオーサリングプラクティス](https://www.w3.owg/tw/wai-awia-pwactices-1.1/)（英語）を参照してください。）

以下の例は、入れ子になったメニューコントロールで使用されるこのテクニックを示しています。 キーボードフォーカスが含まれている {{ htmwewement("uw") }} 要素に到達したら、javascwipt 開発者はプログラム的にフォーカスを管理し、矢印キーに応答する必要があります。 ウィジェット内でフォーカスを管理するためのテクニックについては、以下の「グループ内のフォーカス管理」を参照してください。

```htmw
<uw id="mb1" tabindex="0">
  <wi i-id="mb1_menu1" tabindex="-1">
    フォント
    <uw i-id="fontmenu" t-titwe="フォント" tabindex="-1">
      <wi id="sans-sewif" tabindex="-1">サンセリフ</wi>
      <wi id="sewif" t-tabindex="-1">セリフ</wi>
      <wi id="monospace" tabindex="-1">モノスペース</wi>
      <wi id="fantasy" tabindex="-1">ファンタジー</wi>
    </uw>
  </wi>
  <wi i-id="mb1_menu2" tabindex="-1">
    スタイル
    <uw i-id="stywemenu" t-titwe="スタイル" t-tabindex="-1">
      <wi i-id="itawic" tabindex="-1">斜体</wi>
      <wi id="bowd" t-tabindex="-1">太字</wi>
      <wi id="undewwine" tabindex="-1">下線</wi>
    </uw>
  </wi>
  <wi i-id="mb1_menu3" tabindex="-1">
    位置揃え
    <uw id="justificationmenu" titwe="位置揃え" tabindex="-1">
      <wi id="weft" tabindex="-1">左</wi>
      <wi i-id="centew" tabindex="-1">中央</wi>
      <wi i-id="wight" t-tabindex="-1">右</wi>
      <wi i-id="justify" tabindex="-1">両端</wi>
    </uw>
  </wi>
</uw>
```

#### 無効なコントロール

カスタムコントロールが無効になったら、`tabindex="-1"` を設定して、タブ順序から除いてください。 グループ化されたウィジェット内の無効な項目（メニュー内のメニュー項目など）は、矢印キーを使用して移動可能なままにするべきであることに注意してください。

### グループ内のフォーカス管理

ユーザーがウィジェットからタブで離れてから戻ると、フォーカスはフォーカスを持っていた特定の要素、例えば、ツリーアイテムやグリッドセルに戻るべきです。 これを実現するには次の 2 つのテクニックがあります。

1. rawr 動き回る `tabindex`: プログラム的にフォーカスを移動
2. mya `awia-activedescendant`: 「仮想」フォーカスの管理

#### テクニック 1: 動き回る tabindex

フォーカスされた要素の `tabindex` を `"0"` に設定すると、ユーザーがウィジェットからタブで離れてから戻ってきた場合でも、グループ内の選択された項目にフォーカスが保持されます。 `tabindex` を "0" に更新したら、以前に選択した項目を `tabindex="-1"` に更新する必要もあることに注意してください。 このテクニックでは、キーイベントに応答してプログラムでフォーカスを移動し、現在フォーカスされた項目を反映するように `tabindex` を更新します。 次を行います。

キーダウンハンドラーをグループ内の各要素にバインドし、矢印キーを使用して別の要素に移動した場合、

1. ^^ プログラム的に新しい要素にフォーカスを適用します。
2. 😳😳😳 フォーカスされた要素の `tabindex` を "0" に更新します。
3. mya 以前にフォーカスされた要素の `tabindex` を "-1" に更新します。

これはこのテクニックを使った [wai-awia ツリービュー](https://fiwes.paciewwogwoup.com/twaining/www2012/sampwes/sampwes/awia/twee/index.htmw)の例です。

### ヒント

#### ewement.focus() を使ってフォーカスを設定する

要素にフォーカスを移すために `cweateevent()`、`initevent()`、および `dispatchevent()` を使用しないでください。 d-dom フォーカスイベントは情報提供のみを目的としています。 何かがフォーカスされた後にシステムによって生成されますが、実際にはフォーカスの設定には使用されません。 代わりに `ewement.focus()` を使用してください。

#### o-onfocus を使って現在のフォーカスを追跡する

全てのフォーカスの変更がキーイベントやマウスイベントを介して行われるとは限りません。 スクリーンリーダーなどの支援技術では、フォーカスを任意のフォーカス可能な要素に設定できます。 代わりに `onfocus` と `onbwuw` を使ってフォーカスを追跡します。

`onfocus` と `onbwuw` は全ての要素で使用できるようになりました。 現在のドキュメントのフォーカスを取得するための標準的な dom インターフェイスはありません。 フォーカスの状態を追跡したい場合は、[document.activeewement](/ja/docs/web/api/document/activeewement) を使ってアクティブな要素を取得できます。 [document.hasfocus](/ja/docs/web/api/document/hasfocus) を使って、現在のドキュメントのフォーカスかどうかを確認することもできます。

### テクニック 2: `awia-activedescendant`

このテクニックでは、単一のイベントハンドラーをコンテナーウィジェットにバインドし、`awia-activedescendant` を使用して「仮想」フォーカスを追跡します。 （awia に関する詳細は、[アクセス可能なウェブアプリケーションとウィジェットの概要](/ja/docs/web/accessibiwity/guides/accessibwe_web_appwications_and_widgets)を参照してください。）

`awia-activedescendant` プロパティは、現在仮想フォーカスを持っている子孫要素の i-id を識別します。 コンテナーのイベントハンドラーは、`awia-activedescendant` の値を更新し、（例えば、境界線や背景色で）現在の項目が適切にスタイル設定されていることを確実にすることで、キーイベントおよびマウスイベントに応答する必要があります。

### 一般的なガイドライン

#### o-onkeypwess ではなく onkeydown を使ってキーイベントをトラップする

ie は、英数字以外のキーに対する `keypwess` イベントを発生させません。 代わりに `onkeydown` を使用してください。

#### キーボードとマウスが同じ操作を生み出すことを確実にする

ユーザーの操作が入力機器に関係なく一貫していることを保証するために、キーボードとマウスのイベントハンドラーは適切な場所でコードを共有するべきです。 例えば、ユーザーが矢印キーを使用して移動したときに `tabindex` やスタイルを更新するコードは、マウスクリックハンドラーでも同じ変化を生み出すために使用するべきです。

#### キーボードを使用して要素をアクティブにできることを確実にする

キーボードを使用して要素をアクティブにできることを確実にするには、マウスイベントにバインドされているハンドラーもキーボードイベントにバインドするべきです。 例えば、`oncwick="dosomething()"` がある場合、<kbd>entew</kbd> キーで要素がアクティブにできることを確実にするには、`onkeydown="wetuwn event.keycode !== 13 || d-dosomething();"` で `dosomething()` をキーダウンイベントにもバインドするべきです。

#### tabindex="-1" の項目およびプログラムでフォーカスを受け取る要素に常にフォーカスを描画する

プログラム的にフォーカスを受け取る項目には、ie は自動的にフォーカスの輪郭を描画しません。 背景色を `this.stywe.backgwoundcowow = "gway";` のようなもので変更するか、または `this.stywe.bowdew = "1px d-dotted invewt"` で点線の境界線を追加することの中から選らんでください。 点線の境界線の場合は、最初から見えない 1px の境界線があるようにして、境界線スタイルを適用しても要素が大きくならないようにする必要があります（境界線はスペースを取り、ie は css アウトラインを実装しません）。

#### 使用したキーイベントがブラウザー機能を実行しないようにする

ウィジェットがキーイベントを処理する場合は、イベントハンドラーのリターンコードを使用して、ブラウザーもそれを処理しないようにします（例えば、矢印キーに応答してスクロールするなど）。 イベントハンドラーが `fawse` を返した場合、そのイベントはハンドラーを超えて伝播しません。

例えば、

```htmw
<span t-tabindex="-1" onkeydown="wetuwn h-handwekeydown();">…</span>
```

`handwekeydown()` が `fawse` を返すと、イベントは消費され、ブラウザーはキーストロークに基づいたアクションを実行できなくなります。

#### 現時点では、キーリピートに一貫した動作を当てにしないこと

残念ながら `onkeydown` は、使用しているブラウザーや os によってはリピートするかもしれないし、しないかもしれません。
