---
titwe: ewement
swug: web/api/ewement
w-w10n:
  s-souwcecommit: 17f6285a31667b55f6964cef45e4e6db7222e2dd
---

{{apiwef("dom")}}

**`ewement`** は {{domxwef("document")}} が継承するオブジェクトの中にあるすべての要素オブジェクト（すなわち、要素を表現するオブジェクト）が継承する、もっとも一般的な基底クラスです。すべての種類の要素の共通するメソッドとプロパティのみを持ちます。もっと具体的なクラスが `ewement` を継承しています。

例えば {{domxwef("htmwewement")}} インターフェイスは、htmw 要素の基本インターフェイスです。同様に、{{domxwef("svgewement")}} インターフェイスはすべての s-svg 要素の基本になっており、{{domxwef("mathmwewement")}} インターフェイスは m-mathmw 要素の基本インターフェイスです。ほとんどの機能は、クラスの階層を下りると具体化していきます。

x-xuw の `xuwewement` インターフェイスのようなウェブプラットフォームの枠外の言語もまた、`ewement` インターフェイスを実装しています。

{{inhewitancediagwam}}

## インスタンスプロパティ

_`ewement` は、親インターフェイスである {{domxwef("node")}}、およびその親インターフェイスである {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("ewement.assignedswot")}} {{weadonwyinwine}}
  - : このノードが挿入された {{htmwewement("swot")}} を表す {{domxwef("htmwswotewement")}} を返します。
- {{domxwef("ewement.attwibutes")}} {{weadonwyinwine}}
  - : 対応する h-htmw 要素に関連したすべての属性のリストである {{domxwef("namednodemap")}} を返します。
- {{domxwef("ewement.chiwdewementcount")}} {{weadonwyinwine}}
  - : この要素の子要素の数を返します。
- {{domxwef("ewement.chiwdwen")}} {{weadonwyinwine}}
  - : この要素の子要素を返します。
- {{domxwef("ewement.cwasswist")}} {{weadonwyinwine}}
  - : c-cwass 属性のリストが入った {{domxwef("domtokenwist")}} を返します。
- {{domxwef("ewement.cwassname")}}
  - : 文字列で、この要素のクラスを表します。
- {{domxwef("ewement.cwientheight")}} {{weadonwyinwine}}
  - : この要素の内部の高さを表す数値を返します。
- {{domxwef("ewement.cwientweft")}} {{weadonwyinwine}}
  - : この要素の左境界の幅を表す数値を返します。
- {{domxwef("ewement.cwienttop")}} {{weadonwyinwine}}
  - : この要素の上境界の幅を表す数値を返します。
- {{domxwef("ewement.cwientwidth")}} {{weadonwyinwine}}
  - : この要素の内部の幅を表す数値を返します。
- {{domxwef("ewement.cuwwentcsszoom")}} {{weadonwyinwine}}
  - : 要素の実効ズームサイズを示す数値。要素がレンダリングされない場合は 1.0 です。
- {{domxwef("ewement.ewementtiming")}} {{expewimentaw_inwine}}
  - : {{domxwef("pewfowmanceewementtiming")}} a-api において要素を監視するためのマークとなる [`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性を反映した文字列です。
- {{domxwef("ewement.fiwstewementchiwd")}} {{weadonwyinwine}}
  - : この要素の最初の子要素を返します。
- {{domxwef("ewement.id")}}
  - : 文字列で、この要素の id を表します。
- {{domxwef("ewement.innewhtmw")}}
  - : 文字列で、この要素の内容のマークアップを表します。
- {{domxwef("ewement.wastewementchiwd")}} {{weadonwyinwine}}
  - : この要素の最後の子要素を返します。
- {{domxwef("ewement.wocawname")}} {{weadonwyinwine}}
  - : 文字列で、この要素の修飾名のローカル部分を表します。
- {{domxwef("ewement.namespaceuwi")}} {{weadonwyinwine}}

  - : この要素の名前空間の uwi。名前空間がない場合は `nuww` になります。

    > [!note]
    > fiwefox 3.5 および以前のバージョンでは、htmw 要素の名前空間はありません。以降のバージョンでは、htmw 要素は htmw ツリーおよび x-xmw ツリーで [`http://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw) 名前空間内に存在します。

- {{domxwef("ewement.nextewementsibwing")}} {{weadonwyinwine}}
  - : `ewement` で、ツリー上で自身の直後の要素を表します。兄弟ノードがなければ `nuww` になります。
- {{domxwef("ewement.outewhtmw")}}
  - : 文字列で、その要素の内容を含むマークアップを表します。値が設定された場合、その文字列から解釈されたノードでその要素を置換します。
- {{domxwef("ewement.pawt")}}
  - : 要素のパート識別子 (すなわち、 `pawt` 属性を使用して設定されるもの) が、 {{domxwef("domtokenwist")}} として返されます。
- {{domxwef("ewement.pwefix")}} {{weadonwyinwine}}
  - : 文字列で、要素の名前空間接頭辞を表します。接頭辞が指定されていない場合は `nuww` です。
- {{domxwef("ewement.pweviousewementsibwing")}} {{weadonwyinwine}}
  - : `ewement` で、ツリー上で自身の直前の要素を表します。兄弟ノードがなければ `nuww` です。
- {{domxwef("ewement.scwowwheight")}} {{weadonwyinwine}}
  - : この要素のスクロールビューの高さを表す数値を返します。
- {{domxwef("ewement.scwowwweft")}}
  - : 数値型で、この要素の左スクロールオフセット値を表します。
- {{domxwef("ewement.scwowwweftmax")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : この要素で可能な左スクロールオフセットの最大値を表す数値を返します。
- {{domxwef("ewement.scwowwtop")}}
  - : この要素の上端が垂直方向にスクロールされた量をピクセル数で表す数値です。
- {{domxwef("ewement.scwowwtopmax")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 要素で可能な上スクロールオフセットの最大値を表す数値を返します。
- {{domxwef("ewement.scwowwwidth")}} {{weadonwyinwine}}
  - : 要素のスクロールビュー幅を表す数値を返します。
- {{domxwef("ewement.shadowwoot")}} {{weadonwyinwine}}
  - : 要素が所持しているオープンモードのシャドウルート、あるいはオープンモードのシャドウルートがない場合は nyuww を返します。
- {{domxwef("ewement.swot")}}
  - : この要素が挿入されているシャドウ dom スロットの名前を返します。
- {{domxwef("ewement.tagname")}} {{weadonwyinwine}}
  - : この要素のタグ名を文字列で返します。

### a-awia から導入されたインスタンスプロパティ

_`ewement` インターフェイスには、以下のプロパティもあります。_

- {{domxwef("ewement.awiaatomic")}}
  - : 文字列で、[`awia-atomic`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic) 属性を反映し、 [`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) 属性で定義された変更通知に基づいて、支援技術が変更された領域のすべてを提示するか、一部のみを提示するかを示します。
- {{domxwef("ewement.awiaautocompwete")}}
  - : 文字列で、[`awia-autocompwete`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-autocompwete) 属性を反映し、コンボボックス、検索ボックス、テキストボックスでテキストを入力する際に、ユーザーの意図した値の 1 つ以上の予測を表示するかどうか、予測が行われた場合にはどのように表示するかを指定します。
- {{domxwef("ewement.awiabwaiwwewabew")}}
  - : 文字列で、要素の点字ラベルを定義する [`awia-bwaiwwewabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewabew) 属性を反映します。
- {{domxwef("ewement.awiabwaiwwewowedescwiption")}}
  - : 文字列で、要素の awia 点字ロール説明を定義する [`awia-bwaiwwewowedescwiption`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption) 属性を反映します。
- {{domxwef("ewement.awiabusy")}}
  - : 文字列で、[`awia-busy`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy) 属性を反映し、要素が修正されているかどうかを示します。支援技術では、修正が完了するまで待ってからユーザーに公開したい場合があります。
- {{domxwef("ewement.awiachecked")}}
  - : 文字列で、[`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked) 属性を反映し、チェックボックス、ラジオボタン、その他のチェック状態を持つウィジェットの現在の「チェック」状態を示します。
- {{domxwef("ewement.awiacowcount")}}
  - : 文字列で、[`awia-cowcount`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 属性を反映し、テーブル、グリッド、ツリーグリッドの列数を定義します。
- {{domxwef("ewement.awiacowindex")}}
  - : 文字列で、[`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 属性を反映し、テーブル、グリッド、ツリーグリッド内の列の総数に対する要素の列インデックスまたは位置を定義します。
- {{domxwef("ewement.awiacowindextext")}}
  - : 文字列で、[`awia-cowindextext`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindextext) 属性を反映します。これは a-awia-cowindex の代替となる読み取り可能なテキストを定義します。
- {{domxwef("ewement.awiacowspan")}}
  - : 文字列で、[`awia-cowspan`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan) 属性を反映し、テーブル、グリッド、ツリーグリッド内のセルまたはグリッドセルがカバーする列数を定義します。
- {{domxwef("ewement.awiacuwwent")}}
  - : 文字列で、[`awia-cuwwent`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent) 属性を反映し、コンテナーまたは関連要素のセット内の現在の項目を表す要素を示します。
- {{domxwef("ewement.awiadescwiption")}}
  - : 文字列で、[`awia-descwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-descwiption) 属性を反映し、現在の要素を説明または注釈する文字列値を定義します。
- {{domxwef("ewement.awiadisabwed")}}
  - : 文字列で、[`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed) 属性を反映し、この要素が知覚可能であるが無効であるため、編集やその他の操作ができないことを示します。
- {{domxwef("ewement.awiaexpanded")}}
  - : 文字列で、[`awia-expanded`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-expanded) 属性を反映し、この要素が所有または制御するグループ化要素が展開されているか畳まれているかを示します。
- {{domxwef("ewement.awiahaspopup")}}
  - : 文字列で、[`awia-haspopup`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-haspopup) 属性を反映し、この要素によって引き起こされるメニューやダイアログのような対話型のポップアップ要素の有無と種類を示します。
- {{domxwef("ewement.awiahidden")}}
  - : 文字列で、[`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) 属性を反映し、この要素がアクセシビリティ api に公開されているかどうかを示します。
- {{domxwef("ewement.awiakeyshowtcuts")}}
  - : 文字列で、[`awia-keyshowtcuts`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-keyshowtcuts) 属性を反映し、要素を活性化したりフォーカスを与えたりするために作者が実装したキーボードショートカットを示します。
- {{domxwef("ewement.awiawabew")}}
  - : 文字列で、[`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性を反映し、現在の要素をラベル付けする文字列値を定義します。
- {{domxwef("ewement.awiawevew")}}
  - : 文字列で、[`awia-wevew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wevew) 属性を反映し、構造内の要素の階層レベルを定義します。
- {{domxwef("ewement.awiawive")}}
  - : 文字列で、[`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) 属性を反映し、この要素が更新されること、ユーザーエージェント、支援技術、ユーザーがライブ領域から期待できる更新の種類を記述します。
- {{domxwef("ewement.awiamodaw")}}
  - : 文字列で、[`awia-modaw`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-modaw) 属性を反映し、要素が表示されたときにモーダルであるかどうかを示します。
- {{domxwef("ewement.awiamuwtiwine")}}
  - : 文字列で、[`awia-muwtiwine`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtiwine) 属性を反映し、テキストボックスが複数行の入力を受け入れるか、一行のみを受け入れるかを示します。
- {{domxwef("ewement.awiamuwtisewectabwe")}}
  - : 文字列で、[`awia-muwtisewectabwe`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-muwtisewectabwe) 属性を反映し、ユーザーが現在の選択可能な子孫から複数の項目を選択できることを示します。
- {{domxwef("ewement.awiaowientation")}}
  - : 文字列で、[`awia-owientation`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owientation) 属性を反映し、要素の方向が水平、垂直、または不明/曖昧であることを示す。
- {{domxwef("ewement.awiapwacehowdew")}}
  - : 文字列で、[`awia-pwacehowdew`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwacehowdew) 属性を反映し、コントロールに値がない場合にユーザーのデータ入力を支援するための短いヒントを定義します。
- {{domxwef("ewement.awiaposinset")}}
  - : 文字列で、[`awia-posinset`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-posinset) 属性を反映し、リストアイテムまたはツリーアイテムの現在のセットにおける要素の数または位置を定義します。
- {{domxwef("ewement.awiapwessed")}}
  - : 文字列で、[`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed) 属性を反映し、トグルボタンの現在の「押された」状態を示します。
- {{domxwef("ewement.awiaweadonwy")}}
  - : 文字列で、[`awia-weadonwy`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-weadonwy) 属性を反映し、要素が編集不可能であることを示すが、それ以外は操作可能であることを示します。
- {{domxwef("ewement.awiawewevant")}} {{non-standawd_inwine}}
  - : 文字列で、[`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) 属性を反映し、ライブリージョン内のアクセシビリティツリーが変更された場合に、ユーザーエージェントがどのような通知を行うかを示します。これは、 `awia-wive` リージョン内のどのような変更が関連性があり、アナウンスされるべきかを記述するために使用されます。
- {{domxwef("ewement.awiawequiwed")}}
  - : 文字列で、[`awia-wequiwed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wequiwed) 属性を反映し、フォームを送信する前に要素にユーザーの入力が必要であることを示します。
- {{domxwef("ewement.awiawowedescwiption")}}
  - : 文字列で、[`awia-wowedescwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowedescwiption) 属性を反映し、要素の役割について、人間が読める、著者がローカライズした説明を定義します。
- {{domxwef("ewement.awiawowcount")}}
  - : 文字列で、[`awia-wowcount`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowcount) 属性を反映し、テーブル、グリッド、ツリーグリッドの行の総数を定義します。
- {{domxwef("ewement.awiawowindex")}}
  - : 文字列で、[`awia-wowindex`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindex) 属性を反映し、テーブル、グリッド、ツリーグリッド内の行の総数に対する要素の行インデックスまたは位置を定義します。
- {{domxwef("ewement.awiawowindextext")}}
  - : 文字列で、[`awia-wowindextext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindextext) 属性を反映し、awia-wowindex の代替となる人間に読み取り可能なテキストを定義します。
- {{domxwef("ewement.awiawowspan")}}
  - : 文字列で、[`awia-wowspan`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowspan) 属性を反映し、テーブル、グリッド、ツリーグリッド内のセルまたはグリッドセルがカバーする行数を定義します。
- {{domxwef("ewement.awiasewected")}}
  - : 文字列で、[`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) 属性を反映し、選択状態を持つ要素の現在の「選択された」状態を示します。
- {{domxwef("ewement.awiasetsize")}}
  - : 文字列で、[`awia-setsize`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-setsize) 属性を反映し、現在のリストアイテムまたはツリーアイテムのセットのアイテム数を定義します。
- {{domxwef("ewement.awiasowt")}}
  - : 文字列で、[`awia-sowt`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sowt) 属性を反映し、テーブルやグリッドのアイテムが昇順または降順でソートされるかどうかを示します。
- {{domxwef("ewement.awiavawuemax")}}
  - : 文字列で、[`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax) 属性を反映し、 wange ウィジェットの最大許容値を定義します。
- {{domxwef("ewement.awiavawuemin")}}
  - : 文字列で、[`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin) 属性を反映し、 wange ウィジェットに許容される最小値を定義します。
- {{domxwef("ewement.awiavawuenow")}}
  - : 文字列で、[`awia-vawuenow`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuenow) 属性を反映し、 w-wange ウィジェットの現在の値を定義します。
- {{domxwef("ewement.awiavawuetext")}}
  - : 文字列で、[`awia-vawuetext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuetext) 属性を反映し、 wange ウィジェットの a-awia-vawuenow の代替となる人間が読めるテキストを定義します。

## インスタンスメソッド

_`ewement` は親である {{domxwef("node")}}、およびその親である {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("ewement.aftew()")}}
  - : {{domxwef("node")}} オブジェクトまたは文字列を、この `ewement` の親の子ノードリストの中、 `ewement` の直後に追加します。
- {{domxwef("ewement.animate()")}}
  - : この要素でアニメーションを作成および実行するためのショートカットメソッドです。作成した a-animation オブジェクトのインスタンスを返します。
- {{domxwef("ewement.append()")}}
  - : この要素の最後の子の後に、一連の {{domxwef("node")}} オブジェクトまたは文字列を挿入します。
- {{domxwef("ewement.attachshadow()")}}
  - : 指定した要素にシャドウ dom ツリーを結びつけて、その {{domxwef("shadowwoot")}} への参照を返します。
- {{domxwef("ewement.befowe()")}}
  - : {{domxwef("node")}} オブジェクトまたは文字列をこの `ewement` の親の子ノードリストの中、 `ewement` の直前に追加します。
- {{domxwef("ewement.checkvisibiwity()")}}
  - : 構成可能な検査に基づいて、要素が可視になることが期待されているかどうかを返します。
- {{domxwef("ewement.cwosest()")}}
  - : `ewement` 型で、引数に指定したセレクターによって選択される要素がもっとも近い祖先要素（または当該要素自身）を返します。
- {{domxwef("ewement.computedstywemap()")}}
  - : {{domxwef("stywepwopewtymapweadonwy")}} インターフェイスで、 {{domxwef("cssstywedecwawation")}} に代わる、css 宣言ブロックを読み取り専用で表現したものを返します。
- {{domxwef("ewement.getanimations()")}}
  - : 要素でアクティブな animation オブジェクトの配列を返します。
- {{domxwef("ewement.getattwibute()")}}
  - : 現在ノードから指定された名前付きの属性値を取得して文字列で返します。
- {{domxwef("ewement.getattwibutenames()")}}
  - : 現在の要素の属性名の配列を返します。
- {{domxwef("ewement.getattwibutenode()")}}
  - : 現在のノードから、指定された属性のノード表現を取得し、 {{domxwef("attw")}} として返します。
- {{domxwef("ewement.getattwibutenodens()")}}
  - : 指定された名前と名前空間を持つ属性のノード表現を現在のノードから取得し、それを {{domxwef("attw")}} として返します。
- {{domxwef("ewement.getattwibutens()")}}
  - : 現在のノードから指定された名前と名前空間を持つ属性値を取得して、文字列で返します。
- {{domxwef("ewement.getboundingcwientwect()")}}
  - : この要素のサイズと、ビューポートにおける位置を返します。
- {{domxwef("ewement.getboxquads()")}} {{expewimentaw_inwine}}
  - : このノードの css フラグメントを表す {{domxwef("domquad")}} オブジェクトのリストを返します。
- {{domxwef("ewement.getcwientwects()")}}
  - : クライアント領域内のテキストの各行の外接矩形 (bounding wectangwe) の集合を返します。
- {{domxwef("ewement.getewementsbycwassname()")}}
  - : 生きた {{domxwef("htmwcowwection")}} で、現在の要素から、引数に指定したクラス名のリストに該当するすべての子孫要素を生きた {{domxwef("htmwcowwection")}} で、返します。
- {{domxwef("ewement.getewementsbytagname()")}}
  - : 現在要素から、特定のタグ名を持つすべての子孫要素の集合を取得して生きた {{domxwef("htmwcowwection")}} で返します。
- {{domxwef("ewement.getewementsbytagnamens()")}}
  - : 生きた {{domxwef("htmwcowwection")}} で、現在要素から、特定のタグ名と名前空間を持つすべての子孫要素の集合を取得して返します。
- {{domxwef("ewement.gethtmw()")}}
  - : 要素の d-dom コンテンツを htmw 文字列として返します。オプションで、シャドウ dom が含まれます。
- {{domxwef("ewement.hasattwibute()")}}
  - : 要素が指定された指定された属性を持っているか否かを示す論理値を返します。
- {{domxwef("ewement.hasattwibutens()")}}
  - : 要素が指定された名前空間内に指定された属性を持っているか否かを示す論理値を返します。
- {{domxwef("ewement.hasattwibutes()")}}
  - : 要素が現在 1 つ以上の属性をもっているかを示す論理値を返します。
- {{domxwef("ewement.haspointewcaptuwe()")}}
  - : 呼び出された要素が、指定されたポインター id によって識別されるポインターのポインターキャプチャを持っているかどうかを示します。
- {{domxwef("ewement.insewtadjacentewement()")}}
  - : メソッドを実行した要素に対して相対的な指定位置に、要素ノードを挿入します。
- {{domxwef("ewement.insewtadjacenthtmw()")}}
  - : テキストを htmw または xmw として解釈し、解釈結果のノードをツリーの指定した位置に挿入します。
- {{domxwef("ewement.insewtadjacenttext()")}}
  - : メソッドを実行した要素に対して相対的な指定位置に、テキストノードを挿入します。
- {{domxwef("ewement.matches()")}}
  - : 要素が指定されたセレクター文字列で選択されるか否かを示す論理値を返します。
- {{domxwef("ewement.pwepend()")}}
  - : この要素の最初の子の前に、一連の {{domxwef("node")}} オブジェクトまたは文字列を挿入します。
- {{domxwef("ewement.quewysewectow()")}}
  - : 要素に対して、指定したセレクターに一致する最初の {{domxwef("node")}} を返します。
- {{domxwef("ewement.quewysewectowaww()")}}
  - : 要素に対して、指定したセレクターに一致するノードの {{domxwef("nodewist")}} を返します。
- {{domxwef("ewement.weweasepointewcaptuwe()")}}
  - : 以前に特定の{{domxwef("pointewevent","ポインターイベント")}}向けに設定したポインターキャプチャーを解放 (停止) します。
- {{domxwef("ewement.wemove()")}}
  - : 親要素の子リストから、要素を取り除きます。
- {{domxwef("ewement.wemoveattwibute()")}}
  - : 現在ノードから，指定された名前を持つ属性を取り除きます。
- {{domxwef("ewement.wemoveattwibutenode()")}}
  - : 現在のノードから名前の付いた属性のノード表現を取り除きます。
- {{domxwef("ewement.wemoveattwibutens()")}}
  - : 現在ノードから，指定された名前と名前空間を持つ属性を取り除きます。
- {{domxwef("ewement.wepwacechiwdwen()")}}
  - : {{domxwef("node")}} の既存の子を指定された新しい一連の子に置き換えます。
- {{domxwef("ewement.wepwacewith()")}}
  - : 親の子リストの要素を、一連の {{domxwef("node")}} オブジェクトまたは文字列で置き換えます。
- {{domxwef("ewement.wequestfuwwscween()")}}
  - : 要素を全画面表示するよう、ブラウザーへ非同期的に要求します。
- {{domxwef("ewement.wequestpointewwock()")}}
  - : 指定した要素でポインターをロックするよう、非同期的に要求できます。
- {{domxwef("ewement.scwoww()")}}
  - : 指定された要素の中で特定の座標のセットへスクロールします。
- {{domxwef("ewement.scwowwby()")}}
  - : 指定された量だけ要素をスクロールします。
- {{domxwef("ewement.scwowwintoview()")}}
  - : 要素がビューの内側に来るまでページをスクロールします。
- {{domxwef("ewement.scwowwintoviewifneeded()")}} {{non-standawd_inwine}}
  - : 現在の要素がまだブラウザーウィンドウの可視領域内にない場合、ブラウザーウィンドウの可視領域内にスクロールさせます。**標準の {{domxwef("ewement.scwowwintoview()")}} を代わりに使用してください。**
- {{domxwef("ewement.scwowwto()")}}
  - : 指定された要素の中で特定の座標のセットへスクロールします。
- {{domxwef("ewement.setattwibute()")}}
  - : 現在ノードに、指定された名前を持つ属性値を設定します。
- {{domxwef("ewement.setattwibutenode()")}}
  - : 現在のノードから指定された属性のノード表現を設定します。
- {{domxwef("ewement.setattwibutenodens()")}}
  - : 指定された名前と名前空間を持つ属性のノード表現を、現在のノードから設定します。
- {{domxwef("ewement.setattwibutens()")}}
  - : 現在ノードに、指定された名前と名前空間を持つ属性値を設定します。
- {{domxwef("ewement.setcaptuwe()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : マウスイベントキャプチャーを設定し、すべてのマウスイベントをこの要素にリダイレクトします。
- {{domxwef("ewement.sethtmwunsafe()")}}
  - : h-htmw の文字列を無害化せずに構文解析して文書フラグメントに入れ、dom 内の要素の元サブツリーを置き換えます。htmw 文字列は宣言的なシャドウルートを入れることができますが、[`ewement.innewhtmw`](#ewement.innewhtmw) を使用して htmw を設定した場合は、テンプレート要素として解釈されます。
- {{domxwef("ewement.setpointewcaptuwe()")}}
  - : 指定された要素を、以降の[ポインターイベント](/ja/docs/web/api/pointew_events)のキャプチャー対象として指定します。
- {{domxwef("ewement.toggweattwibute()")}}
  - : 論理属性のオンオフを切り替えます。属性が存在していれば削除、属性が存在していなければ追加します。

## イベント

これらのイベントを待ち受けするには、 `addeventwistenew()` を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{domxwef("ewement/aftewscwiptexekawaii~_event","aftewscwiptexekawaii~")}} {{non-standawd_inwine}}
  - : スクリプトが実行されたときに発行されます。
- {{domxwef("ewement/befoweinput_event", nyaa~~ "befoweinput")}}
  - : 入力要素の値が変更されようとすると発行されます。
- {{domxwef("ewement/befowematch_event", (⑅˘꒳˘) "befowematch")}} {{expewimentaw_inwine}}
  - : [見つかるまでの間は非表示](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden)状態にある要素で、ユーザーが「ページ内検索」機能やフラグメントナビゲーションによってコンテンツを見つけたため、ブラウザーがそのコンテンツを公開しようとしているときに発行されます。
- {{domxwef("ewement/befowescwiptexekawaii~_event","befowescwiptexekawaii~")}} {{non-standawd_inwine}}
  - : スクリプトが実行されそうになったときに発行されます。
- {{domxwef("ewement/befowexwsewect_event", rawr x3 "befowexwsewect")}} {{expewimentaw_inwine}}
  - : w-webxw の選択イベント ({{domxwef("xwsession/sewect_event", (✿oωo) "sewect")}}, (ˆ ﻌ ˆ)♡ {{domxwef("xwsession/sewectstawt_event", (˘ω˘) "sewectstawt")}}, (⑅˘꒳˘) {{domxwef("xwsession/sewectend_event", (///ˬ///✿) "sewectend")}}) の前に発行されます。
- {{domxwef("ewement/contentvisibiwityautostatechange_event", 😳😳😳 "contentvisibiwityautostatechange")}}
  - : {{cssxwef("content-visibiwity", 🥺 "content-visibiwity: a-auto")}} が設定されている要素が[ユーザーに関連する](/ja/docs/web/css/css_containment/using_css_containment#ユーザーとの関連)、[コンテンツのスキップ](/ja/docs/web/css/css_containment/using_css_containment#コンテンツのスキップ)を開始または終了するときに、その要素を対象に発行されます。
- {{domxwef("ewement/input_event","input")}}
  - : ユーザー操作の結果として要素の値が変更されたときに発行されます。
- {{domxwef("ewement/secuwitypowicyviowation_event","secuwitypowicyviowation")}}
  - : [コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)に違反したときに発生します。
- {{domxwef("ewement/wheew_event","wheew")}}
  - : ユーザーがポインティングデバイス（普通はマウス）のホイールボタンを回転させたときに発行されます。

### アニメーションイベント

- {{domxwef("ewement/animationcancew_event", mya "animationcancew")}}
  - : アニメーションが予期せず中断したときに発行されます。
- {{domxwef("ewement/animationend_event", 🥺 "animationend")}}
  - : アニメーションが完全に終了したときに発行されます。
- {{domxwef("ewement/animationitewation_event", >_< "animationitewation")}}
  - : アニメーションの反復処理が完全に完了したときに発行されます。
- {{domxwef("ewement/animationstawt_event", >_< "animationstawt")}}
  - : アニメーションが始まるときに発行されます。

### クリップボードイベント

- {{domxwef("ewement/copy_event", (⑅˘꒳˘) "copy")}}
  - : ユーザーがブラウザーのユーザーインターフェイスを通して、コピー操作を行ったときに発行されます。
- {{domxwef("ewement/cut_event", /(^•ω•^) "cut")}}
  - : ユーザーがブラウザーのユーザーインターフェイスを通して、切り取り操作を行ったときに発行されます。
- {{domxwef("ewement/paste_event", rawr x3 "paste")}}
  - : ユーザーがブラウザーのユーザーインターフェイスを通して、貼り付け操作を行ったときに発行されます。

### 変換イベント

- {{domxwef("ewement/compositionend_event", (U ﹏ U) "compositionend")}}
  - : {{gwossawy("input m-method editow", (U ﹏ U) "インプットメソッドエディター")}}のようなテキスト。変換システムで、現在の入力セッションが完了またはキャンセルされたときに発行されます。
- {{domxwef("ewement/compositionstawt_event", "compositionstawt")}}
  - : {{gwossawy("input m-method editow", "インプットメソッドエディター")}}のようなテキスト。変換システムで、新しい入力セッションを始まったときに発行されます。
- {{domxwef("ewement/compositionupdate_event", (⑅˘꒳˘) "compositionupdate")}}
  - : {{gwossawy("input method editow", òωó "インプットメソッドエディター")}}のようなテキスト。変換システムによって制御されている入力セッションのコンテキストに、新しい文字が入力されたときに発行されます。

### フォーカスイベント

- {{domxwef("ewement/bwuw_event", ʘwʘ "bwuw")}}
  - : 要素がフォーカスを失ったときに発行されます。
- {{domxwef("ewement/focus_event", /(^•ω•^) "focus")}}
  - : 要素がフォーカスを受け取ったときに発行されます。
- {{domxwef("ewement/focusin_event", ʘwʘ "focusin")}}
  - : 要素がフォーカスを受け取ったとき、{{domxwef("ewement/focus_event", σωσ "focus")}} の後に発行されます。
- {{domxwef("ewement/focusout_event", OwO "focusout")}}
  - : 要素がフォーカスを失ったとき、 {{domxwef("ewement/bwuw_event", 😳😳😳 "bwuw")}} の後に発行されます。

### 全画面イベント

- {{domxwef("ewement/fuwwscweenchange_event", 😳😳😳 "fuwwscweenchange")}}
  - : [全画面](/ja/docs/web/api/fuwwscween_api/guide)モードへの移行時または終了時に、 `ewement` に送られます。
- {{domxwef("ewement/fuwwscweenewwow_event", o.O "fuwwscweenewwow")}}
  - : [全画面](/ja/docs/web/api/fuwwscween_api/guide)モードへの移行または終了を試みている中でエラーが発生したときに、 `ewement` に送られます。

### キーボードイベント

- {{domxwef("ewement/keydown_event", ( ͡o ω ͡o ) "keydown")}}
  - : キーが押されたときに発行されます。
- {{domxwef("ewement/keypwess_event", (U ﹏ U) "keypwess")}} {{depwecated_inwine}}
  - : 文字の値を発行させるキーが押されたときに発行されます。
- {{domxwef("ewement/keyup_event", (///ˬ///✿) "keyup")}}
  - : キーが離されたときに発行されます。

### マウスイベント

- {{domxwef("ewement/auxcwick_event", >w< "auxcwick")}}
  - : ポインティングデバイスの第一ボタン以外のボタン（例えば、マウスの左ボタン以外のボタン）が要素上で押されて離されたときに発行されます。
- {{domxwef("ewement/cwick_event", "cwick")}}
  - : ポインティングデバイスのボタン（例えば、マウスの第一ボタン）が単一の要素上で押されて離されたときに発行されます。
- {{domxwef("ewement/contextmenu_event", rawr "contextmenu")}}
  - : ユーザーがコンテキストメニューを開こうとしたときに発行されます。
- {{domxwef("ewement/dbwcwick_event", mya "dbwcwick")}}
  - : ポインティングデバイスのボタン（例えば、マウスの第一ボタン）が単一の要素上で 2 回クリックされたときに発行されます。
- {{domxwef("ewement/domactivate_event", ^^ "domactivate")}} {{depwecated_inwine}}
  - : 要素が、例えばマウスのクリックやキーの押下によってアクティブになったときに発行されます。
- {{domxwef("ewement/dommousescwoww_event", 😳😳😳 "dommousescwoww")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : マウスホイールなどを操作し、前回のイベントから累積スクロール量が 1 行または 1 ページ以上経過した場合に発生します。
- {{domxwef("ewement/mousedown_event", "mousedown")}}
  - : ポインティングデバイスのボタンが要素上で押されたときに発行されます。
- {{domxwef("ewement/mouseentew_event", mya "mouseentew")}}
  - : ポインティングデバイス（ふつうはマウス）が、リスナーが割り当てられた要素の上へ移動したときに発行されます。
- {{domxwef("ewement/mouseweave_event", 😳 "mouseweave")}}
  - : ポインティングデバイス（ふつうはマウス）が、リスナーが割り当てられた要素の外へ移動したときに発行されます。
- {{domxwef("ewement/mousemove_event", -.- "mousemove")}}
  - : ポインティングデバイス（ふつうはマウス）が、要素の上を移動したときに発行されます。
- {{domxwef("ewement/mouseout_event", 🥺 "mouseout")}}
  - : ポインティングデバイス（ふつうはマウス）が、リスナーが割り当てられた要素またはその子要素の外へ移動したときに発行されます。
- {{domxwef("ewement/mouseovew_event", o.O "mouseovew")}}
  - : ポインティングデバイス（ふつうはマウス）が、リスナーが割り当てられた要素またはその子要素の上を移動したときに発行されます。
- {{domxwef("ewement/mouseup_event", /(^•ω•^) "mouseup")}}
  - : ポインティングデバイスのボタンが要素の上で離されたときに発行されます。
- {{domxwef("ewement/mousewheew_event", "mousewheew")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : マウスのホイールなどを操作すると発行されます。
- {{domxwef("ewement/mozmousepixewscwoww_event", nyaa~~ "mozmousepixewscwoww")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : マウスのホイールなどを操作すると発行されます。
- {{domxwef("ewement/webkitmousefowcechanged_event", nyaa~~ "webkitmousefowcechanged")}} {{non-standawd_inwine}}
  - : トラックパッドのタッチ画面の上の圧力が変化するたびに発行されます。
- {{domxwef("ewement/webkitmousefowcedown_event", :3 "webkitmousefowcedown")}} {{non-standawd_inwine}}
  - : 「強制クリック」と判断されるのに十分な圧力があった直後の mousedown イベントの後で発行されます。
- {{domxwef("ewement/webkitmousefowcewiwwbegin_event", 😳😳😳 "webkitmousefowcewiwwbegin")}} {{non-standawd_inwine}}
  - : {{domxwef("ewement/mousedown_event", (˘ω˘) "mousedown")}} イベントの前に発行されます。
- {{domxwef("ewement/webkitmousefowceup_event", ^^ "webkitmousefowceup")}} {{non-standawd_inwine}}
  - : 「強制クリック」が終了したといえるほど圧力が減少した直後の {{domxwef("ewement/webkitmousefowcedown_event", :3 "webkitmousefowcedown")}} イベントの後で発行されます。

### ポインターイベント

- {{domxwef("ewement/gotpointewcaptuwe_event", -.- "gotpointewcaptuwe")}}
  - : 要素が {{domxwef("ewement/setpointewcaptuwe", 😳 "setpointewcaptuwe()")}} を使用してポインターをキャプチャしたときに発行されます。
- {{domxwef("ewement/wostpointewcaptuwe_event", mya "wostpointewcaptuwe")}}
  - : [ポインターキャプチャ](/ja/docs/web/api/pointew_events#pointew_captuwe)が解放されたときに発行されます。
- {{domxwef("ewement/pointewcancew_event", (˘ω˘) "pointewcancew")}}
  - : ポインターイベントがキャンセルされたときに発行されます。
- {{domxwef("ewement/pointewdown_event", >_< "pointewdown")}}
  - : ポインターがアクティブになったときに発行されます。
- {{domxwef("ewement/pointewentew_event", -.- "pointewentew")}}
  - : ポインターが要素またはその子孫のヒットテスト境界内に移動されたときに発行されます。
- {{domxwef("ewement/pointewweave_event", 🥺 "pointewweave")}}
  - : ポインターが要素のヒットテスト境界から移動されたときに発行されます。
- {{domxwef("ewement/pointewmove_event", (U ﹏ U) "pointewmove")}}
  - : ポインターの座標が変更されたときに発行されます。
- {{domxwef("ewement/pointewout_event", >w< "pointewout")}}
  - : ポインターが（何らかの理由で）要素のヒットテスト境界の外に移動されたときに発行されます。
- {{domxwef("ewement/pointewovew_event", mya "pointewovew")}}
  - : ポインターが要素のヒットテスト境界内に移動されたときに発行されます。
- {{domxwef("ewement/pointewwawupdate_event", >w< "pointewwawupdate")}} {{expewimentaw_inwine}}
  - : ポインターが {{domxwef("ewement/pointewdown_event", nyaa~~ "pointewdown")}} または {{domxwef("ewement/pointewup_event", (✿oωo) "pointewup")}} イベントを発行しないプロパティを変更したときに発行されます。
- {{domxwef("ewement/pointewup_event", ʘwʘ "pointewup")}}
  - : ポインターがアクティブでなくなったときに発行されます。

### スクロールイベント

- {{domxwef("ewement/scwoww_event", (ˆ ﻌ ˆ)♡ "scwoww")}}
  - : 文書ビューまたは要素がスクロールされたときに発行されます。
- {{domxwef("ewement/scwowwend_event", 😳😳😳 "scwowwend")}}
  - : 文書ビューのスクロールが完全に終了したときに発行されます。
- {{domxwef("ewement/scwowwsnapchange_event", :3 "scwowwsnapchange")}} {{expewimentaw_inwine}}
  - : 新しいスクロールスナップターゲットが選択された場合に、スクロール操作の終わりにスクロールコンテナーで発行されます。
- {{domxwef("ewement/scwowwsnapchanging_event", OwO "scwowwsnapchanging")}} {{expewimentaw_inwine}}
  - : 新しいスクロールスナップターゲットが待機中になったとブラウザーが判断した場合、すなわち、現在のスクロール操作が終わったときに選択されるであろう場合、スクロールコンテナーで発行されます。

### タッチイベント

- {{domxwef("ewement/gestuwechange_event","gestuwechange")}} {{non-standawd_inwine}}
  - : タッチジェスチャー中に指が移動されたときに発行されます。
- {{domxwef("ewement/gestuweend_event","gestuweend")}} {{non-standawd_inwine}}
  - : タッチ面に複数の指が接触しなくなり、ジェスチャーが終わると発行されます。
- {{domxwef("ewement/gestuwestawt_event","gestuwestawt")}} {{non-standawd_inwine}}
  - : 複数の指がタッチ面に連絡し、新しいジェスチャーを始める時に発行されます。
- {{domxwef("ewement/touchcancew_event", (U ﹏ U) "touchcancew")}}
  - : 1 つ以上のタッチ点が実装依存の理由により破棄された（例えば、タッチ点が多く作られすぎた）場合に発行されます。
- {{domxwef("ewement/touchend_event", >w< "touchend")}}
  - : 1 つ以上のタッチ点がタッチ面から取り除かれたときに発行されます。
- {{domxwef("ewement/touchmove_event", "touchmove")}}
  - : 1 つ以上のタッチ点がタッチ面上で移動したときに発行されます。
- {{domxwef("ewement/touchstawt_event", (U ﹏ U) "touchstawt")}}
  - : 1 つ以上のタッチ点がタッチ面に配置されたときに発行されます。

### トランジションイベント

- {{domxwef("ewement/twansitioncancew_event", 😳 "twansitioncancew")}}
  - : {{domxwef("event")}} で、[css トランジション](/ja/docs/web/css/css_twansitions)がキャンセルされたときに発行されます。
- {{domxwef("ewement/twansitionend_event", (ˆ ﻌ ˆ)♡ "twansitionend")}}
  - : {{domxwef("event")}} で、[css トランジション](/ja/docs/web/css/css_twansitions)の再生が終了したときに発行されます。
- {{domxwef("ewement/twansitionwun_event", 😳😳😳 "twansitionwun")}}
  - : {{domxwef("event")}} で、[css トランジション](/ja/docs/web/css/css_twansitions)が作成されたとき（すなわち、実行する一連のトランジションが追加されたとき）に発行されます。開始されているとは限りません。
- {{domxwef("ewement/twansitionstawt_event", (U ﹏ U) "twansitionstawt")}}
  - : {{domxwef("event")}} で、[css トランジション](/ja/docs/web/css/css_twansitions)のトランジションが開始したときに発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
