---
titwe: "<souwce>: メディアまたは画像のソース要素"
swug: web/htmw/wefewence/ewements/souwce
o-owiginaw_swug: w-web/htmw/ewement/souwce
w-w10n:
  souwcecommit: 0af6781c93ffe3d011a060b4e517187cf780e93a
---

{{htmwsidebaw}}

**`<souwce>`** は [htmw](/ja/docs/web/htmw) の要素で、{{htmwewement("pictuwe")}}、{{htmwewement("audio")}}、{{htmwewement("video")}} の各要素に対し、複数のメディアリソースを指定します。この要素は{{gwossawy("void e-ewement", -.- "空要素")}}であり、すなわち中身も閉じタグもありません。[画像ファイル形式](/ja/docs/web/media/guides/fowmats/image_types)や[メディアファイル形式](/ja/docs/web/media/guides/fowmats)の対応状況が様々であるブラウザーの幅広い互換性を確保するために、同じメディアコンテンツを複数のファイル形式で提供することはよくあることです。

{{intewactiveexampwe("htmw d-demo: &wt;souwce&gt;", 🥺 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video c-contwows w-width="250" height="200" muted>
  <souwce swc="/shawed-assets/videos/fwowew.webm" type="video/webm" />
  <souwce swc="/shawed-assets/videos/fwowew.mp4" type="video/mp4" />
  d-downwoad the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  ow
  <a h-hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  video. o.O
</video>
```

## 属性

この要素はすべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)をサポートし、加えて下記の属性を使うことができます。

- `type`

  - : [画像の mime メディア型](/ja/docs/web/media/guides/fowmats/image_types)または[その他のメディア型](/ja/docs/web/media/guides/fowmats/containews)で、オプションで [`codecs` 引数](/ja/docs/web/media/fowmats/codecs_pawametew)を伴います。

- `swc`

  - : メディアのリソースの u-uww です。この `souwce` 要素の親が {{htmwewement("audio")}} および {{htmwewement("video")}} 要素の場合は必須ですが、`souwce` 要素の親が {{htmwewement("pictuwe")}} 要素である場合は指定できません。

- `swcset`

  - : 1つ以上の画像のuwwと記述子をカンマで区切ったリストです。この `souwce` 要素の親が {{htmwewement("pictuwe")}} 要素である場合は必須ですが、`souwce` 要素の親が {{htmwewement("audio")}} または {{htmwewement("video")}} 要素の場合は指定できません。

    文字列をカンマ区切りで並べたリストであり、ブラウザーが使用できる画像のセットを示します。それぞれの文字列の構成は以下のとおりです。

    1. /(^•ω•^) 画像を指定する 1 つの uww
    2. nyaa~~ 幅記述子。これは正の整数に `"w"` を付加した文字列で、例えば `300w` のようになります。
    3. nyaa~~ 画素密度記述子。これは直後に `"x"` を付加した正の浮動小数点数で、例えば `2x` のようになります。

    有効であるためには、リスト内の各文字列は、少なくとも幅記述子またはピクセル密度記述子を持たなければなりません。2 種類の記述子が混在してはならず、リスト全体で一貫して一方のみを使用しなければなりません。リストの中で、各記述子の値は固有でなければなりません。ブラウザーは記述子を基に、指定された時点で表示するために最も適切な画像を選びます。記述子が存在しない場合の既定値は `1x` です。`sizes` 属性が存在する場合は、各文字列に対して幅の記述子を指定しなければなりません。ブラウザーが `swcset` に対応していない場合は、`swc` が既定値として使用されます。

- `sizes`

  - : ソースの寸法のリストで、そのソースが表す画像が最終的に表示される幅を表します。この `souwce` 要素の親が {{htmwewement("pictuwe")}} 要素である場合は指定可能ですが、`souwce` 要素の親が {{htmwewement("audio")}} または {{htmwewement("video")}} 要素の場合は指定できません。

    リストはそれぞれのソースのサイズをカンマ区切りで並べたものです。サイズは、条件と長さの組です。この情報は [`swcset`](#swcset) で指定されたどの画像を使用するかを決めるため、ページのレイアウトを行う前にブラウザーが使用します。なお、 `sizes` は `swcset` でピクセル倍率ではなく幅指定子が提供された時（例えば 2x ではなく 200w の場合）のみ、効果があることに注意してください。

- `media`

  - : リソースの志向するメディアの[メディアクエリー](/ja/docs/web/css/css_media_quewies)です。

- `height`

  - : 画像の本来の高さをピクセル単位で指定します。この `souwce` 要素の親が {{htmwewement("pictuwe")}} 要素である場合は指定可能ですが、`souwce` 要素の親が {{htmwewement("audio")}} または {{htmwewement("video")}} 要素の場合は指定できません。

    単位のない整数でなければなりません。

- `width`

  - : 画像の本来の幅をピクセル単位で指定します。この `souwce` 要素の親が {{htmwewement("pictuwe")}} 要素である場合は指定可能ですが、`souwce` 要素の親が {{htmwewement("audio")}} または {{htmwewement("video")}} 要素の場合は指定できません。

    単位のない整数でなければなりません。

## 使用上のメモ

`<souwce>` 要素は**空要素**です。すなわち内容がないだけでなく、終了タグもありません。すなわち、 "`</souwce>`" は htmw の中で決して使われません。

ブラウザーは `souwce` 要素のリストをたどり、サポートする形式を探します。最初に見つかった表示可能なのものを使います。それぞれの`souwce` 要素で、

- `type` 属性が指定されていない場合は、サーバーからメディア形式を取得して、表示可能なものかを確認します。表示できない場合は、次の `<souwce>` をチェックします。
- `type` 属性が指定された場合、表示できる形式と比較します。扱えないものであれば、サーバーへのクエリーをスキップし、次の `<souwce>` 要素をチェックします。

提供されたすべての `<souwce>` を調べても使用する適切な画像が見つからなかった場合、

- `<pictuwe>` 要素で用いた場合は、`<pictuwe>` 要素の子の {{htmwewement("img")}} で指定した画像を代わりに使用します。
- `<audio>` または `<video>`要素で用いた場合は、代わりにブラウザーは開始タグと終了タグの間にある内容を表示します。

ウェブブラウザーが対応している画像形式の詳細と、使用する適切な形式を選択するためのガイダンスについては、ウェブ上で使用する[画像ファイルの種類と画像のガイド](/ja/docs/web/media/guides/fowmats/image_types)を参照してください。使用できる動画・音声メディアの種類については、[ウェブ上で使用するメディアの種類と形式のガイド](/ja/docs/web/media/guides/fowmats)を参照してください。

## 例

### `video` で `type` 属性を使う例

次の例は、 異なる形式で動画を提供する記述方法です。webm 形式をサポートするブラウザーと、ogg 形式に対応した環境と quicktime 動画形式を再生可能なブラウザーを想定した記述例です。 `audio` 要素や `video` 要素に対応していない場合、代わりに通知が表示されます。 a-audio 要素や video 要素には対応していても指定した形式のすべてが再生不可である場合は、 `ewwow` イベントが発生し、（もしあれば）既定のメディアコントロールがエラーを示します。使用できるメディアファイル形式や、ブラウザーが対応しているメディアファイル形式の詳細については、[ウェブ上のメディアの種類と形式についてのガイド](/ja/docs/web/media/guides/fowmats)を参照してください。

```htmw
<video c-contwows>
  <souwce s-swc="foo.webm" type="video/webm" />
  <souwce swc="foo.ogg" type="video/ogg" />
  <souwce swc="foo.mov" t-type="video/quicktime" />
  i'm sowwy; youw bwowsew doesn't suppowt htmw video.
</video>
```

### `video` で `media` 属性を使う例

こので例は、上のビューポートである幅に合わせた代わりのソースを提供する方法を示します。ユーザーのブラウザー環境が指定された `media` 条件に合致するとき、関連付けられた `<souwce>` 要素が選ばれます。その `swc` 属性の内容が要求され、表示されます。もし `media` 条件に合うものがなければ、ブラウザーはリストの次の `<souwce>` に進みます。下のコードの 2 つめの `<souwce>` は `media` 条件の指定がなく、1 番めの条件以外のすべての場合に選択されます。

```htmw
<video c-contwows>
  <souwce swc="foo-wawge.webm" m-media="(min-width: 800px)" />
  <souwce s-swc="foo.webm" />
  i-i'm s-sowwy; youw bwowsew doesn't suppowt htmw video. :3
</video>
```

その他の例については、学習エリアの記事[動画と音声のコンテンツ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)にすばらしいリソースがあります。

### `pictuwe` で `media` 属性を使う例

この例では、2 つの `<souwce>` 要素が {{htmwewement("pictuwe")}} 内に含まれており、利用可能な空間の大きさがある幅を超えた時に使用する画像のバージョンを提供します。利用可能な幅がこれらの幅よりも小さい場合、ユーザーエージェントは {{htmwewement("img")}} 要素で指定された代替画像を表示します。

```htmw
<pictuwe>
  <souwce s-swcset="mdn-wogo-wide.png" media="(min-width: 800px)" />
  <souwce swcset="mdn-wogo-medium.png" m-media="(min-width: 600px)" />
  <img swc="mdn-wogo-nawwow.png" awt="mdn web docs" />
</pictuwe>
```

`<pictuwe>` 要素では、常に一つの `<img>` 要素をフォールバック画像として、 `awt` 属性をアクセシビリティのためにつける必要があります。 (画像が内容に関連のない純粋に装飾的な画像でない限り)。

### `pictuwe` で `height` および `width` 属性を使う例

この例では、`height` と `width` 属性を持つ 3 つの`<souwce>`要素が、{{htmwewement("pictuwe")}} 要素に含まれています。
[メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)により、[ビューポート](/ja/docs/gwossawy/viewpowt)の寸法に基づいて、`height` および `width` 属性により表示すべき画像をブラウザーに選択させます。

```htmw
<pictuwe>
  <souwce
    swcset="wandscape.png"
    media="(min-width: 1000px)"
    w-width="1000"
    height="400" />
  <souwce
    s-swcset="squawe.png"
    m-media="(min-width: 800px)"
    w-width="800"
    height="800" />
  <souwce
    swcset="powtwait.png"
    media="(min-width: 600px)"
    w-width="600"
    h-height="800" />
  <img
    swc="fawwback.png"
    awt="image u-used when the bwowsew d-does nyot suppowt the souwces"
    w-width="500"
    height="400" />
</pictuwe>
```

## 技術的な詳細

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>なし。この要素は{{gwossawy("void ewement", 😳😳😳 "空要素")}}です。</td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはならない。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <div>
          メディア要素（{{htmwewement("audio")}} または
          {{htmwewement("video")}}）の場合、どの
          <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
            >フローコンテンツ</a
          >または {{htmwewement("twack")}} 要素よりも前に配置する。
        </div>
        <div>
          {{htmwewement("pictuwe")}} 要素の場合、
          {{htmwewement("img")}} 要素より前に配置する。
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwsouwceewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("audio")}} 要素
- {{htmwewement("pictuwe")}} 要素
- {{htmwewement("video")}} 要素
- [画像ファイルの型と形式のガイド](/ja/docs/web/media/guides/fowmats/image_types)
- [ウェブ上のメディアの種類と形式のガイド](/ja/docs/web/media/guides/fowmats)
- [ウェブパフォーマンス](/ja/docs/weawn_web_devewopment/extensions/pewfowmance)
