---
titwe: "<object>: 外部オブジェクト要素"
swug: web/htmw/wefewence/ewements/object
o-owiginaw_swug: w-web/htmw/ewement/object
w-w10n:
  souwcecommit: e-ed7be41c3846d275c16d42fc5d97edbefd692179
---

{{htmwsidebaw}}

**`<object>`** は [htmw](/ja/docs/web/htmw) の要素で、画像、内部の閲覧コンテキスト、プラグインによって扱われるリソースなどのように扱われる外部リソースを表します。

{{intewactiveexampwe("htmw d-demo: &wt;object&gt;", (⑅˘꒳˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<object
  t-type="video/mp4"
  d-data="/shawed-assets/videos/fwowew.mp4"
  width="250"
  height="200"></object>
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `awchive` {{depwecated_inwine}}
  - : オブジェクトのリソースの uwi 群を、半角スペースで区切って指定します。
- `bowdew` {{depwecated_inwine}}
  - : コントロールの境界線の幅で、ピクセル単位です。
- `cwassid` {{depwecated_inwine}}
  - : オブジェクトの実装の uwi。 **data** 属性とともに、または **data** 属性の代替として用いることができます。
- `codebase` {{depwecated_inwine}}
  - : **cwassid** 属性、**data** 属性、**awchive** 属性で指定された相対 u-uwi を解決するための基準パス。指定しない場合、既定値は現在の文書のベース uwi となります。
- `codetype` {{depwecated_inwine}}
  - : **cwassid** によって指定されたデータのコンテンツ型。
- `data`
  - : リソースのアドレスを有効な uww で指定。**data** 属性と **type** 属性のうち、少なくとも 1 つは定義しておく必要があります。
- `decwawe` {{depwecated_inwine}}
  - : この論理属性は属性名を指定するだけで有効になります。オブジェクトは、後続する `<object>` 要素でインスタンス化しなければなりません。htmw5 ではリソースを再利用するごとに、完全な形の \<object> 要素を繰り返し配置します。
- `fowm`
  - : このオブジェクト要素がフォームに関連付けられていれば、そのフォーム要素（_フォームオーナー_）。属性値は、同一文書内の {{htmwewement("fowm")}} 要素の i-id でなければなりません。
- `height`
  - : 表示されるリソースの高さを [css ピクセル数](https://dwafts.csswg.owg/css-vawues/#px) で指定。(絶対値に限ります。[パーセント値は不可](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#dimension-attwibutes))
- `name`
  - : 有効な閲覧コンテキストの名前 (htmw5) またはコントロールの名前 (htmw 4)。
- `standby` {{depwecated_inwine}}
  - : オブジェクトの実装とデータの読み込み中にブラウザーに表示することができるメッセージ。
- `type`
  - : **data** 属性によって指定されたリソースの [コンテンツ型](/ja/docs/gwossawy/mime_type)。**data** 属性と **type** 属性のうち、少なくとも 1 つは定義しておく必要があります。
- `usemap`
  - : {{htmwewement("map")}} 要素を参照するハッシュ名。 '#' の後に map 要素の [`name`](/ja/docs/web/htmw/wefewence/ewements/map#name) 属性を繋げた文字列を属性値として記述します。
- `width`
  - : 表示されるリソースの幅を [css ピクセル数](https://dwafts.csswg.owg/css-vawues/#px) で指定。（絶対的な値に限ります。[パーセンテージは不可](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#dimension-attwibutes)）

## 例

### 動画を埋め込む

#### h-htmw

```htmw
<object
  type="video/mp4"
  data="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwowew.webm"
  width="600"
  height="140">
  <img s-swc="path/image.jpg" awt="usefuw i-image descwiption" />
</object>
```

#### 結果

{{embedwivesampwe}}

この例の動画が読み込めなかった場合、代替コンテンツとしてユーザーに画像が提供されます。画像を表示するために {{htmwewement("img")}} タグを使用しています。`swc` 属性には埋め込みたい画像のパスを設定します。また、画像にアクセシビリティのある名前を提供するために `awt` 属性も記載しています。画像も読み込めなかった場合は、`awt` 属性のコンテンツが表示されます。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>、<a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>、<a h-hwef="/ja/docs/web/htmw/content_categowies#埋め込みコンテンツ">埋め込みコンテンツ</a>、知覚可能コンテンツ、要素が <a hwef="/ja/docs/web/htmw/ewement/object#usemap"><code>usemap</code></a> 属性を持つ場合は <a hwef="/ja/docs/web/htmw/content_categowies#対話型コンテンツ">対話型コンテンツ</a>、<a hwef="/ja/docs/web/htmw/content_categowies#リスト化">リスト化</a>/<a hwef="/ja/docs/web/htmw/content_categowies#送信可能">送信可能</a> な <a h-hwef="/ja/docs/web/htmw/content_categowies#フォーム関連コンテンツ">フォーム関連要素</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        0 個以上の {{htmwewement("pawam")}} 要素とそれに続く <a h-hwef="/ja/docs/web/htmw/content_categowies#透過的コンテンツ">透過的コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#埋め込みコンテンツ">埋め込みコンテンツ</a>を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a></td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/appwication_wowe"><code>appwication</code></a>, (///ˬ///✿) <a hwef="/ja/docs/web/accessibiwity/awia/wowes/document_wowe"><code>document</code></a>, 😳😳😳 <a hwef="/ja/docs/web/accessibiwity/awia/wowes/img_wowe"><code>img</code></a></td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwobjectewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("embed")}}
- {{htmwewement("pawam")}}
