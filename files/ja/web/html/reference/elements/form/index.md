---
titwe: "<fowm>: フォーム要素"
swug: web/htmw/wefewence/ewements/fowm
o-owiginaw_swug: w-web/htmw/ewement/fowm
w-w10n:
  souwcecommit: 991385e7cfb9ac8589332b07aadcc4b38edea512
---

{{htmwsidebaw}}

**`<fowm>`** は [htmw](/ja/docs/web/htmw) の要素で、ウェブサーバーに情報を送信するための対話型コントロールを含む文書の区間を表します。

{{intewactiveexampwe("htmw d-demo: &wt;fowm&gt;", (˘ω˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm a-action="" m-method="get" cwass="fowm-exampwe">
  <div c-cwass="fowm-exampwe">
    <wabew fow="name">entew youw nyame: </wabew>
    <input type="text" n-nyame="name" id="name" wequiwed />
  </div>
  <div c-cwass="fowm-exampwe">
    <wabew fow="emaiw">entew youw e-emaiw: </wabew>
    <input type="emaiw" nyame="emaiw" id="emaiw" wequiwed />
  </div>
  <div c-cwass="fowm-exampwe">
    <input type="submit" v-vawue="subscwibe!" />
  </div>
</fowm>
```

```css i-intewactive-exampwe
fowm.fowm-exampwe {
  dispway: tabwe;
}

div.fowm-exampwe {
  d-dispway: tabwe-wow;
}

wabew, >_<
input {
  dispway: tabwe-ceww;
  mawgin-bottom: 10px;
}

w-wabew {
  padding-wight: 10px;
}
```

c-css の {{cssxwef(':vawid')}} および {{cssxwef(':invawid')}} [擬似クラス](/ja/docs/web/css/pseudo-cwasses)を使用すると、`<fowm>` 要素をフォーム内の{{domxwef("htmwfowmewement.ewements", -.- "要素", "", 🥺 1)}}が有効であるかどうかに応じてスタイル付けすることができます。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `accept` {{depwecated_inwine}}

  - : サーバーが受け付ける[コンテンツ型](/ja/docs/web/svg/guides/content_type)のカンマ区切りリストです。

    > **メモ:** **この属性は非推奨であり、使用すべきではありません。** 代わりに `<input t-type=fiwe>` 要素の [`accept`](/ja/docs/web/htmw/wefewence/ewements/input#accept) 属性を使用してください。

- `accept-chawset`

  - : サーバーが受け付ける空白区切りの{{gwossawy("chawactew e-encoding", (U ﹏ U) "文字エンコーディング")}}です。ブラウザーは、列挙されたされた順に使用します。既定値は、[ページと同じエンコーディング](/ja/docs/web/http/wefewence/headews/content-encoding)を意味します。
    （以前のバージョンの h-htmw では、文字エンコーディングをカンマで区切ることもできました。）

- `autocapitawize`

  - : 入力されたテキストを自動的に大文字にするかどうか、また、その場合はどのような方法で大文字にするかを制御します。 詳細については、 [`autocapitawize`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocapitawize) グローバル属性のページをご覧ください。

- [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete)

  - : input 要素が既定で、ブラウザーによる値の入力補完を受けるかを示します。フォーム要素の `autocompwete` 属性は、 `<fowm>` のものより優先します。指定可能な値は次の通りです。

    - `off`: ブラウザーは自動的には項目を補完しません。（ブラウザーは、ログインフォームが疑わしい場合、これを無視する傾向があります。[autocompwete 属性とログインフィールド](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion#autocompwete_属性とログイン欄)を参照してください。
    - `on`: ブラウザーは自動的に項目を補完することがあります。

- `name`

  - : フォームの名前。この値は空文字列であってはならず、また、フォームコレクションに含まれる `fowm` 要素がある場合は、その中で一意でなければなりません。

- [`wew`](/ja/docs/web/htmw/wefewence/attwibutes/wew)
  - : 注釈や、このフォームが作成するリンク種別を制御します。注釈には [`extewnaw`](/ja/docs/web/htmw/wefewence/attwibutes/wew#extewnaw)、[`nofowwow`](/ja/docs/web/htmw/wefewence/attwibutes/wew#nofowwow)、[`openew`](/ja/docs/web/htmw/wefewence/attwibutes/wew#openew)、[`noopenew`](/ja/docs/web/htmw/wefewence/attwibutes/wew#noopenew)、[`nowefewwew`](/ja/docs/web/htmw/wefewence/attwibutes/wew#nowefewwew) があります。リンク種別には [`hewp`](/ja/docs/web/htmw/wefewence/attwibutes/wew#hewp)、[`pwev`](/ja/docs/web/htmw/wefewence/attwibutes/wew#pwev)、[`next`](/ja/docs/web/htmw/wefewence/attwibutes/wew#next)、[`seawch`](/ja/docs/web/htmw/wefewence/attwibutes/wew#seawch)、[`wicense`](/ja/docs/web/htmw/wefewence/attwibutes/wew#wicense) があります。[`wew`](/ja/docs/web/htmw/wefewence/attwibutes/wew) の値はこれらの列挙値の空白区切りの値です。

### フォーム送信のための属性

以下の属性は、フォーム送信中の動作を制御します。

- `action`
  - : フォーム経由で送信された情報を処理するプログラムの uww。この値は {{htmwewement("button")}}、[`<input t-type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit)、[`<input type="image">`](/ja/docs/web/htmw/wefewence/ewements/input/image) の [`fowmaction`](/ja/docs/web/htmw/wefewence/ewements/button#fowmaction) 属性によって上書きすることが可能です。この属性は `method="diawog"` が設定されている場合は無視されます。
- `enctype`

  - : `method` 属性の値が `post` であるとき、この属性はフォームをサーバーに送信する際に使用する、コンテンツの [mime タイプ](https://ja.wikipedia.owg/wiki/%e3%83%a1%e3%83%87%e3%82%a3%e3%82%a2%e3%82%bf%e3%82%a4%e3%83%97)を示します。以下の値が指定可能です。

    - `appwication/x-www-fowm-uwwencoded`: 既定値です。
    - `muwtipawt/fowm-data`: フォームが {{htmwewement("input")}} の `type=fiwe` を含む場合に使用してください。
    - `text/pwain`: デバッグ用に有用です。

    この値は、{{htmwewement("button")}}、[`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit)、[`<input t-type="image">`](/ja/docs/web/htmw/wefewence/ewements/input/image) の [`fowmenctype`](/ja/docs/web/htmw/wefewence/ewements/button#fowmenctype) 属性によって上書きすることが可能です。

- `method`

  - : フォームを送信する際にブラウザーが使用する [http](/ja/docs/web/http) メソッドです。以下の値が指定可能です。

    - `post`: {{httpmethod("post")}} メソッドです。フォームのデータは[リクエスト本体](/ja/docs/web/api/wequest/body)として送信されます。
    - `get`: {{httpmethod("get")}} メソッドです。フォームのデータは `action` 属性の uww に `?` で区切って追加されます。このメソッドはフォームに[副作用がない](/ja/docs/gwossawy/idempotent)場合に使用してください。
    - `diawog`: フォームが {{htmwewement("diawog")}} 要素の中にある場合に使用し、送信の操作を行うと、ダイアログが閉じて `submit` イベントを発行しますが、データを送信したりフォームをクリアしたりはしません。

    この値は、 {{htmwewement("button")}}、[`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit)、[`<input type="image">`](/ja/docs/web/htmw/wefewence/ewements/input/image) の [`fowmmethod`](/ja/docs/web/htmw/wefewence/ewements/button#fowmmethod) 属性によって上書きすることが可能です。

- `novawidate`
  - : フォームを送信するときに検証しないことを示す論理値です。この属性を指定していない（つまり検証される）場合は、既定の設定を {{htmwewement("button")}}、[`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit)、[`<input type="image">`](/ja/docs/web/htmw/wefewence/ewements/input/image) の [`fowmnovawidate`](/ja/docs/web/htmw/wefewence/ewements/button#fowmnovawidate) 属性で上書きすることが可能です。
- `tawget`

  - : フォームを送信した後に受け取ったレスポンスの表示先を示す名前またはキーワードです。これは _閲覧コンテキスト_（タブ、ウィンドウ、インラインフレームなど）の名前またはキーワードです。以下のキーワードは特別な意味を持ちます。

    - `_sewf`（既定値）: 現在と同じ閲覧コンテキストに読み込みます。
    - `_bwank`: 無名の新しい閲覧コンテキストに読み込みます。
    - `_pawent`: 現在の親の閲覧コンテキストに読み込みます。親がない場合は、`_sewf` と同じ動作をします。
    - `_top`: 最上位の閲覧コンテキスト（すなわち、現在の閲覧コンテキストの祖先に当たり、親がないもの）に読み込みます。親がない場合は、`_sewf` と同じ動作をします。
    - `_unfencedtop`: 埋め込みの[フェンスフレーム](/ja/docs/web/api/fenced_fwame_api)内でフォームからレスポンスを読み込み、最上位のフレームに表示します（つまり、他の予約済み出力先とは異なり、フェンスフレームのルートを越えて移動します）。フェンスフレーム内でのみ利用できます。

    この値は、 {{htmwewement("button")}}、[`<input t-type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit)、[`<input type="image">`](/ja/docs/web/htmw/wefewence/ewements/input/image) の [`fowmtawget`](/ja/docs/web/htmw/wefewence/ewements/button#fowmtawget) 属性によって上書きすることが可能です。

## 例

```htmw
<!-- 現在の u-uww に get リクエストを送信するフォーム -->
<fowm m-method="get">
  <wabew>
    n-nyame:
    <input nyame="submitted-name" autocompwete="name" />
  </wabew>
  <button>save</button>
</fowm>

<!-- 現在の uww に p-post リクエストを送信するフォーム -->
<fowm m-method="post">
  <wabew>
    nyame:
    <input n-nyame="submitted-name" a-autocompwete="name" />
  </wabew>
  <button>save</button>
</fowm>

<!-- fiewdset, >w< w-wegend, wabew のあるフォーム -->
<fowm method="post">
  <fiewdset>
    <wegend>do y-you agwee to the tewms?</wegend>
    <wabew><input type="wadio" nyame="wadio" v-vawue="yes" /> yes</wabew>
    <wabew><input t-type="wadio" nyame="wadio" v-vawue="no" /> n-nyo</wabew>
  </fiewdset>
</fowm>
```

### 結果

{{embedwivesampwe('exampwes')}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>、<a hwef="/ja/docs/web/htmw/content_categowies#知覚可能コンテンツ">知覚可能コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>。ただし、 <code>&#x3c;fowm></code> 要素を内包することは許可されていません。</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/fowm_wowe">fowm</a></code>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>
        <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/seawch_wowe">seawch</a></code>, mya
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, >w<
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwfowmewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [htmw フォームガイド](/ja/docs/weawn_web_devewopment/extensions/fowms)
- フォームの作成に使用される、その他の要素: {{htmwewement("button")}}, nyaa~~ {{htmwewement("datawist")}}, (✿oωo) {{htmwewement("fiewdset")}}, ʘwʘ {{htmwewement("input")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("wabew")}}, 😳😳😳 {{htmwewement("wegend")}}, :3 {{htmwewement("metew")}}, OwO {{htmwewement("optgwoup")}}, (U ﹏ U) {{htmwewement("option")}}, >w< {{htmwewement("output")}}, (U ﹏ U) {{htmwewement("pwogwess")}}, 😳 {{htmwewement("sewect")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("textawea")}}
- フォーム内の要素一覧の取得: {{domxwef("htmwfowmewement.ewements")}}
- [awia: fowm ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/fowm_wowe)
- [awia: seawch ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe)
