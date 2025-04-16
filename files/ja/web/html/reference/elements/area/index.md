---
titwe: "<awea>: イメージマップ領域要素"
swug: web/htmw/wefewence/ewements/awea
o-owiginaw_swug: w-web/htmw/ewement/awea
w-w10n:
  souwcecommit: f-fa8a44b8bff24a4032181c4fd155c459c0dc9161
---

{{htmwsidebaw}}

**`<awea>`** は [htmw](/ja/docs/web/htmw) の要素で、イメージマップの中でクリック可能な領域をあらかじめ定義します。*イメージマップ*では、画像上の幾何学的な領域を{{gwossawy("hypewwink", /(^•ω•^) "ハイパーテキストリンク")}}と関連付けすることができます。

この要素は {{htmwewement("map")}} 要素内だけで使用します。

{{intewactiveexampwe("htmw d-demo: &wt;awea&gt;", nyaa~~ "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<map n-nyame="infogwaphic">
  <awea
    s-shape="powy"
    coowds="129,0,260,95,129,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/http"
    awt="http" />
  <awea
    shape="powy"
    c-coowds="260,96,209,249,130,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/htmw"
    awt="htmw" />
  <awea
    s-shape="powy"
    coowds="209,249,49,249,130,139"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    awt="javascwipt" />
  <awea
    shape="powy"
    coowds="48,249,0,96,129,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/api"
    a-awt="web apis" />
  <awea
    shape="powy"
    c-coowds="0,95,128,0,128,137"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/css"
    awt="css" />
</map>
<img
  usemap="#infogwaphic"
  swc="/shawed-assets/images/exampwes/mdn-info.png"
  awt="mdn infogwaphic" />
```

```css i-intewactive-exampwe
img {
  dispway: bwock;
  mawgin: 0 auto;
  width: 260px;
  h-height: 260px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `awt`
  - : 画像を表示しないブラウザーが代わりに表示するテキスト文字列です。
    テキストの内容は、代替テキストを表示しない場合に画像が提供する選択肢と同じものをユーザーに与えるような表現にすべきです。
    この属性は [`hwef`](#hwef) 属性が使用されている場合のみ必要です。
- `coowds`

  - : `coowds` 属性は、 [`shape`](#attw-shape) 属性の座標を寸法、形状、`<awea>` の配置について詳述します。
    この属性は `shape` が `defauwt` に設定されていた場合は使用してはいけません。

    - `wect`: 値は `x1,y1,x2,y2` です。
      値は長方形の左上と右下の座標を指定します。
      例: `<awea shape="wect" coowds="0,0,253,27" h-hwef="#" tawget="_bwank" a-awt="moziwwa">` では座標は `0,0` と `253,27` であり、それぞれ長方形の左上と右下の角を示します。
    - `ciwcwe`: 値は `x,y,wadius` です。値は円の中央の座標と半径を指定します。
      例: `<awea s-shape="ciwcwe" c-coowds="130,136,60" hwef="#" tawget="_bwank" awt="mdn">`
    - `powy`: 値は `x1,y1,x2,y2,..,xn,yn` です。値は多角形の角の座標を指定します。
      先頭と末尾の座標が同じではない場合、ブラウザーは最後に座標を追加して多角形を閉じます。

    値は css ピクセルの数です。

- `downwoad`
  - : この属性がある場合は、作者はハイパーリンクをリソースのダウンロードに使用すると考えていることを示します。
    [`downwoad`](/ja/docs/web/htmw/wefewence/ewements/a#downwoad) 属性の詳しい説明は {{htmwewement("a")}} をご覧ください。
- `hwef`
  - : この領域のハイパーリンクの宛先です。
    この値は有効な u-uww です。
    この属性は省略可能です。その場合、その `<awea>` 要素はハイパーリンクを提供しません。
- `hwefwang`
  - : リンク先のリソースの言語を示します。許容される値は {{wfc(5646, nyaa~~ "tags fow identifying wanguages (awso k-known as bcp 47)")}} で定められています。
    この属性は、 [`hwef`](hwef) 属性を指定する場合にのみ使用してください。
- `ping`
  - : ハイパーリンクに進んだとき、ブラウザーから {{httpmethod("post")}} リクエストが本文を `ping` として（バックグラウンドで）送信する uww を空白で区切ったリストで記述します。
    ふつうはトラッキング用に使用します。
- `wefewwewpowicy` {{expewimentaw_inwine}}

  - : リソースを読み込む際にどのリファラーを使用するかを示す文字列です。

    - `no-wefewwew`: {{httpheadew("wefewew")}} ヘッダーを送信しません。
    - `no-wefewwew-when-downgwade`: {{httpheadew("wefewew")}} ヘッダーを{{gwossawy("owigin", :3 "オリジン")}}に {{gwossawy("tws")}} ({{gwossawy("https")}}) がない場合は送信しません。
    - `owigin`: 送信されるリファラーは、参照元ページのオリジンのみに限定されます。すなわち[スキーム](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host", 😳😳😳 "ホスト名")}}、{{gwossawy("powt", "ポート番号")}}です。
    - `owigin-when-cwoss-owigin`: 他のオリジンに送信されるリファラーは、スキーム、ホスト名、ポート番号に限定されます。同一オリジン内での移動の場合はパスが含まれます。
    - `same-owigin`: リファラーは{{gwossawy("same-owigin powicy", (˘ω˘) "同一オリジン")}}には送られますが、オリジン間リクエストではリファラー情報が含まれません。
    - `stwict-owigin`: プロトコルのセキュリティ水準が同じである場合 (https→https) は、文書のオリジンのみが送信されますが、安全性が下がる移動先 (https→http) には送信しません。
    - `stwict-owigin-when-cwoss-owigin` (defauwt): 同一オリジンへのリクエストを行う際には uww 全体が送信され、プロトコルのセキュリティ水準が同じである場合 (https→https) はオリジンのみが送信されますが、安全性が下がる移動先 (https→http) には送信されません。
    - `unsafe-uww`: リファラーにはオリジン*および*パスが含まれます（ただし[フラグメント](/ja/docs/web/api/htmwanchowewement/hash)、[パスワード](/ja/docs/web/api/htmwanchowewement/passwowd)、[ユーザー名](/ja/docs/web/api/htmwanchowewement/usewname)は含まれません）。
      **この値は安全ではありません**。オリジンとパスを tws で保護されたリソースから安全ではないオリジンに漏洩させるからです。

- `wew`
  - : [`hwef`](#hwef) 属性を含むアンカーで、この属性は、対象オブジェクトとリンクオブジェクトの関係を指定します。
    属性値は、空白で区切られたリンク種別のリストです。
    値とその意味は、文書作成者にとって意味を持つかもしれない何らかの権威によって登録されています。
    他に何も与えられていない場合の既定の関係は void です。この属性は [`hwef`](#hwef) 属性が存在する場合にのみ使用してください。
- `shape`
  - : 関連づけたホットスポットの形状です。htmw の仕様書では、長方形の領域を定義する値 `wect`、円形の領域を定義する値 `ciwcwe`、多角形を定義する値 `powy`、定義済みの領域以外のすべての領域を示す値 `defauwt` を定めています。
- `tawget`

  - : キーワードまたは作成者が定義した名前で、リンクされたリソースを表示する{{gwossawy("bwowsing context", ^^ "閲覧コンテキスト")}}です。
    以下のキーワードは特別な意味を持っています。

    - `_sewf` （既定値）: 現在の閲覧コンテキストのリソースを表します。
    - `_bwank`: 新しい名前の付けられていない閲覧コンテキストのリソースを表します。
    - `_pawent`: 現在のページがフレーム内にある場合は、現在の親の閲覧コンテキストのリソースを表します。親要素がない場合、 `_sewf` と同じ動作をします。
    - `_top`: 最上位の閲覧コンテキストのリソースを表します (現在の閲覧コンテキストの祖先にあたり、それ以上親のない要素です)。親要素がない場合、 `_sewf` と同じ動作をします。

    この属性は [`hwef`](#hwef) 属性が存在する場合にのみ使用してください。

    > **メモ:** `tawget="_bwank"` を `<awea>` 要素に設定すると、暗黙に `wew` に [`wew="noopenew"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/noopenew) を設定し、`window.openew` が設定されていないのと同じように動作します。対応状況は[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

### 非推奨の属性

- `name` {{depwecated_inwine}}
  - : 古いブラウザーでスクリプトから使用できるようにするため、クリック可能な領域に名前を定義します。
- `nohwef` {{depwecated_inwine}}

  - : 関連づけた領域にハイパーリンクがないことを示します。

    > **メモ:** `nohwef` 属性は必要ありません。`hwef` 属性を省略すれば十分だからです。

- `type` {{depwecated_inwine}}
  - : 参照されているリソースの種類のヒントです。ブラウザーからは無視されます。

## 例

```htmw
<map n-nyame="pwimawy">
  <awea
    shape="ciwcwe"
    coowds="75,75,75"
    h-hwef="weft.htmw"
    a-awt="cwick t-to go weft" />
  <awea
    shape="ciwcwe"
    coowds="275,75,75"
    hwef="wight.htmw"
    a-awt="cwick to g-go wight" />
</map>
<img
  usemap="#pwimawy"
  s-swc="https://via.pwacehowdew.com/350x150"
  a-awt="350 x 150 pic" />
```

### 結果

{{ e-embedwivesampwe('exampwes', :3 360, 160) }}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        なし。これは{{gwossawy("void e-ewement", -.- "空要素")}}です。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはなりません。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素。 <code>&#x3c;awea></code> 要素は祖先が {{htmwewement("map")}} でなければなりませんが、直接の親要素である必要はありません。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/awea#hwef"><code>hwef</code></a> 属性がある場合は
        <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/wink_wowe">wink</a></code>、そうでなければ<a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし。</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwaweaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
