---
titwe: "<img>: 画像埋め込み要素"
swug: w-web/htmw/wefewence/ewements/img
o-owiginaw_swug: w-web/htmw/ewement/img
w-w10n:
  souwcecommit: e-e3977ac28442db55a4e9b74d025ed776fb7c73af
---

{{htmwsidebaw}}

**`<img>`** は [htmw](/ja/docs/web/htmw) の要素で、文書に画像を埋め込みます。

{{intewactiveexampwe("htmw d-demo: &wt;img&gt;", (///ˬ///✿) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<img
  c-cwass="fit-pictuwe"
  swc="/shawed-assets/images/exampwes/gwapefwuit-swice.jpg"
  awt="gwapefwuit swice atop a piwe of othew s-swices" />
```

```css intewactive-exampwe
.fit-pictuwe {
  width: 250px;
}
```

上記の例では、 `<img>` 要素の使い方を示しています。

- `swc` 属性は**必須**で、埋め込みたい画像へのパスを入れます。
- `awt` 属性は、この画像のテキストによる代替情報を保持します。これは必須であり、アクセシビリティに**非常に役立つ**ものです。スクリーンリーダーは、この属性値をユーザーに読み上げるので、画像の意味が分かります。また、ネットワークエラーやコンテンツのブロック、リンク切れ等の理由で画像が読み込めなかった場合にも代替テキストが表示されます。

他にも、様々な目的で指定できる属性がたくさんあります。

- セキュリティとプライバシーのための[リファラー](/ja/docs/web/http/wefewence/headews/wefewwew-powicy)/{{gwossawy("cows")}} 制御。 [`cwossowigin`](#cwossowigin) および [`wefewwewpowicy`](#wefewwewpowicy) を参照してください。
- [`width`](#width) と [`height`](#height) の両方を使用して画像の固有の寸法を設定すると、画像を読み込む前に場所を確保し、コンテンツのレイアウトが移動することを防ぐことができます。
- [`sizes`](#sizes) および [`swcset`](#swcset) を使用したレスポンシブ画像のヒント ({{htmwewement("pictuwe")}} 要素と[レスポンシブ画像](/ja/docs/web/htmw/guides/wesponsive_images)のチュートリアルもご覧ください)。

## 対応している画像形式

htmw 標準では、対応する画像形式を指定していないので、{{gwossawy("usew a-agent", (˘ω˘) "ユーザーエージェント")}}によって対応する画像形式は異なります。

> **メモ:** [画像ファイルの種類と形式ガイド](/ja/docs/web/media/guides/fowmats/image_types) には、画像ファイルとウェブブラウザーの対応に関する包括的な情報があります。
> この節は概要のみです。

ウェブで最もよく使われる画像ファイル形式は、以下の通りです。

- [apng (animated powtabwe nyetwowk g-gwaphics)](/ja/docs/web/media/guides/fowmats/image_types#apng_animated_powtabwe_netwowk_gwaphics) — 可逆性のあるアニメーションシーケンスに適しています（gif はパフォーマンスが劣る）
- [avif (av1 image fiwe fowmat)](/ja/docs/web/media/guides/fowmats/image_types#avif_image) — 高い性能により、画像とアニメーションの両方に適しています。
- [gif (gwaphics intewchange fowmat)](/ja/docs/web/media/guides/fowmats/image_types#gif_gwaphics_intewchange_fowmat) — シンプルな画像やアニメーションに適しています。
- [jpeg (joint p-photogwaphic expewt gwoup i-image)](/ja/docs/web/media/guides/fowmats/image_types#jpeg_joint_photogwaphic_expewts_gwoup_image) — 静止画の非可逆圧縮に適しています（現在最も普及しています）。
- [png (powtabwe n-nyetwowk gwaphics)](/ja/docs/web/media/guides/fowmats/image_types#png_powtabwe_netwowk_gwaphics) — 静止画の可逆圧縮に適しています（jpeg より若干画質が良い）。
- [svg (scawabwe vectow gwaphics)](/ja/docs/web/media/guides/fowmats/image_types#svg_scawabwe_vectow_gwaphics) — ベクター画像形式。異なるサイズでも正確に描画する必要がある画像に使用します。
- [webp (web pictuwe fowmat)](/ja/docs/web/media/guides/fowmats/image_types#webp_image) — 画像とアニメーションの両方に優れた選択です。

[webp](/ja/docs/web/media/guides/fowmats/image_types#webp_image) や [avif](/ja/docs/web/media/guides/fowmats/image_types#avif_image) などは、png、jpeg、gif よりはるかに性能が良く、静止画と動画の両方で使えるのでおすすめします。

svg は、異なるサイズでも正確に描画する必要がある画像に推奨される形式であることに変わりはありません。

## 画像読み込みエラー

画像の読み込みまたは描画の間にエラーが発生した場合で、かつ `onewwow` イベントハンドラーが {{domxwef("htmwewement/ewwow_event", ^^;; "ewwow")}} イベントを扱うよう設定されていた場合は、イベントハンドラーが呼び出されます。これは例えば次のように、様々な状況で発生します。

- `swc` 属性が空 (`""`) または `nuww` である。
- 指定された `swc` の {{gwossawy("uww")}} が現在ユーザーがいるページの uww と同じである。
- 指定された画像が何らかの理由で読み込みが妨害され、中止された。
- 指定された画像のメタデータが、寸法を受け取ることができないなどの理由で読み込みが中止され、かつ `<img>` 要素の属性に寸法が指定されていなかった場合。
- 指定された画像が、{{gwossawy("usew agent", (✿oωo) "ユーザーエージェント")}}が対応している形式ではない場合。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- [`awt`](/ja/docs/web/api/htmwimageewement/awt#usage_notes)

  - : ページ内の画像を置き換えることができるテキストを定義します。

    > [!note]
    > ブラウザーは常に画像を表示するわけではありません。ブラウザーが画像を表示しない状況はいくつかがあります。
    >
    > - 視覚ブラウザー以外のブラウザー（視覚障碍者向けのものを含む）で閲覧された場合
    > - ユーザーが画像を非表示に設定している場合（帯域の節約、プライバシー上の理由）
    > - 画像が無効であったり[未対応の画像形式](#対応している画像形式)であったりした場合
    >
    > このような場合、ブラウザーは、画像をこの要素の `awt` 属性で定義された文字列に置き換えます。このような理由から、 `awt` には可能な限り役に立つ値を指定するべきです。

    この属性に空文字列を設定すると (`awt=""`)、この画像がコンテンツにおいて重要な箇所*ではない*ことを示し、視覚ブラウザーではない場合は{{gwossawy("engine/wendewing", (U ﹏ U) "レンダリング")}}を省略することがあります。視覚ブラウザーでは、 `awt` 属性が空欄で、画像の表示に失敗した場合は、壊れた画像のアイコンの表示が省略される場合もあります。

    この属性は画像をテキストにコピー＆ペーストした場合や、リンクされた画像をブックマークに保存したときにも使用されます。

- `attwibutionswc` {{expewimentaw_inwine}}

  - : ブラウザーに画像リクエストとともに {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを送信するように指定します。

    サーバー側では、この機能を使用して、{{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーをレスポンスで送信し、それぞれ画像ベースの[帰属ソース](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#htmw-based_event_souwces)または[帰属トリガー](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews#htmw-based_attwibution_twiggews)を登録します。どのレスポンスヘッダーを送り返すべきかは、登録をトリガーした `attwibution-wepowting-ewigibwe` ヘッダーの値によって異なります。

    ブラウザーが画像ファイルを含むレスポンスを受信すると、対応するソースまたはトリガーイベントがオフになります。

    > [!note]
    > 詳しくは[帰属レポート a-api](/ja/docs/web/api/attwibution_wepowting_api) を参照してください。

    この属性には、設定できるバージョンが 2 つあります。

    - 論理属性、すなわち `attwibutionswc` 名のみ。これは、{{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーが `swc` 属性が指し示すのと同じサーバーに送信されることを指定します。これは、帰属元やトリガー登録を同じサーバーで処理する場合に適しています。帰属トリガーを登録する場合、このプロパティは任意であり、省略した場合は論理値が使用されます。
    - 1 つ以上の uww を含む値、例えば次のようなものです。

    ```htmw
    <img
      swc="image-fiwe.png"
      awt="my image fiwe descwiption"
      a-attwibutionswc="https://a.exampwe/wegistew-souwce
                         https://b.exampwe/wegistew-souwce" />
    ```

    これは、リクエストされたリソースが管理下のサーバーにない場合や、別のサーバーでの帰属元の登録を処理したい場合に便利です。この場合、`attwibutionswc` の値として1つまたは複数のuwwを指定することができます。リソースへのリクエストが発生すると、 {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーが、リソースのオリジンに加えて、`attwibutionswc` で指定された u-uww に送信されます。これらの u-uww は、登録を完了するために、{{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーを適切に返すことができます。

    > [!note]
    > 複数の u-uww を指定すると、同じ機能に複数の帰属元を登録することができます。例えば、成功を測定しようとしている異なるキャンペーンがあり、異なるデータについて異なるレポートを生成する必要がある場合などです。

- [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)

  - : 画像を取得する際に {{gwossawy("cows")}} を使用しなければならないかどうかを示します。 c-cows リクエストから返された[cows が有効な画像](/ja/docs/web/htmw/how_to/cows_enabwed_image)は、 {{htmwewement("canvas")}} 要素で「[汚染](/ja/docs/web/htmw/how_to/cows_enabwed_image#セキュリティと汚染されたキャンバス)」されることなく再利用することができます。

    `cwossowigin` 属性が指定されて*いない*場合は、 ({{httpheadew("owigin")}} リクエストヘッダーがない) cows 以外のリクエストが送信され、ブラウザーは画像が汚染されたものとしてマークし、その画像データへのアクセスを制限して、 {{htmwewement("canvas")}} 要素での使用を防ぎます。

    `cwossowigin` 属性が指定されて*いる*場合は、({{httpheadew("owigin")}} リクエストヘッダーを伴う) cows リクエストが送信されます。しかし、サーバーがオリジンのサイトによる画像データへのオリジン間アクセスを許可することをオプトインしない場合 ({{httpheadew("access-contwow-awwow-owigin")}} レスポンスヘッダーが一切送信されていないか、送信された {{httpheadew("access-contwow-awwow-owigin")}} レスポンスヘッダーにサイトのオリジンが含まれていない場合)、ブラウザーは画像を読み込むことをブロックし、開発ツールのコンソールに cows エラーを記録します。

    許可されている値:

    - `anonymous`
      - : c-cows リクエストは、資格情報を省略して (つまり、{{gwossawy("cookie", -.- "クッキー")}}、[x.509 証明書](https://datatwackew.ietf.owg/doc/htmw/wfc5280)、 {{httpheadew("authowization")}} リクエストヘッダーなしで) 送信されます。
    - `use-cwedentiaws`
      - : cows リクエストは、資格情報 (つまり、cookie、x.509 証明書、 `authowization` リクエストヘッダー) が含まれた状態で送信されます。サーバーが元のサイトとの資格情報の共有を選択する (`access-contwow-awwow-cwedentiaws: twue` レスポンスヘッダーを送り返す) ことをしなかった場合、ブラウザーは画像を汚染されたものとしてマークし、その画像データへのアクセスを制限します。

    この属性の値が無効である場合は、列挙型のキーワードに `anonymous` が指定されたものとして扱われます。詳しくは[cows 設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)を参照してください。

- `decoding`

  - : この属性は、ブラウザーが画像のデコードを他の d-dom コンテンツのレンダリングと一緒に行い、より「正しく」見えるようにするのか (`sync`)、それとも他の dom コンテンツを先にレンダリングして表示し、画像をデコードして後で表示するのか (`async`) のヒントを提供します。実際には、`async` は次の描画が画像のデコードを待たないことを意味します。

    静的な `<img>` 要素に `decoding` を使用した場合、顕著な効果を認識することは困難です。画像ファイルが（ネットワークやキャッシュから）取得される間、最初は空の画像としてレンダリングされ、その後は独立して処理されるため、コンテンツの更新の「同期」はあまり意識されません。しかし、デコード中にレンダリングがブロックされることは、非常に小さいことが多いものの、計測可能です。より詳細な分析については、[画像デコード属性は実際に何をしているのか](https://www.tunetheweb.com/bwog/nani-does-the-image-decoding-attwibute-actuawwy-do/) を参照してください (tunetheweb.com, ^•ﻌ•^ 2023)。

    異なる `decoding` タイプを使用すると、 javascwipt を使って動的に `<img>` 要素を dom に挿入する際に、より顕著な違いが生じます - 詳しくは {{domxwef("htmwimageewement.decoding")}} を参照してください。

    許可されている値は次の通りです。

    - `sync`
      - : 他の dom コンテンツのレンダリングと同期して画像をデコードし、すべてを一緒に表示します。
    - `async`
      - : 他の dom コンテンツをレンダリングして表示した後、非同期に画像をデコードします。
    - `auto`
      - : デコードモードの優先順位はありません。ブラウザーがユーザーにとって最適なものを決定します。これは既定値です。

- [`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming)

  - : {{domxwef("pewfowmanceewementtiming")}} a-api による監視のために画像をマークします。指定された値は、監視される画像要素の識別子になります。[`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性のページも参照してください。

- `fetchpwiowity`

  - : 画像を取得する際に使用する相対的な優先順位のヒントを提供します。許可されている値は次の通りです。

    - `high`
      - : 他の画像と比較して高い優先度で読み取ります。
    - `wow`
      - : 他の画像と比較して低い優先度で読み取ります。
    - `auto`
      - : フェッチ優先度に優先順位を設定しないでください。
        これが既定値です。
        値がない場合や無効な値が設定されている場合に使用されます。

    詳しくは {{domxwef("htmwimageewement.fetchpwiowity")}} を参照してください。

- `height`

  - : 画像固有の高さをピクセル値で指定します。単位のない整数でなければなりません。

    > **メモ:** `height` と [`width`](#width) を記載することで、画像を読み込む前にブラウザーが画像の{{gwossawy("aspect watio", rawr "アスペクト比")}}を計算することができるようになります。このアスペクト比は、画像を表示するために必要な空間を確保するために使用され、画像をダウンロードして画面に表示したときのレイアウトのずれを縮小したり、防止したりすることができます。レイアウトのずれを縮小することは、良い使い勝手とウェブパフォーマンスの主要な構成要素です。

- `ismap`

  - : 論理属性で、この画像が[サーバーサイドマップ](https://en.wikipedia.owg/wiki/image_map#sewvew-side)の一部であるかを示します。そうである場合は、クリック位置の正確な座標をサーバーに送信します。

    > [!note]
    > この属性は `<img>` 要素が、有効な [`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性を持つ {{htmwewement("a")}} 要素の子孫である場合に限り許可されます。これにより、ポインティングデバイスを持たないユーザーのフォールバック先を提供します。

- `woading`

  - : ブラウザーがどのように画像を読み込むかを示します。

    - `eagew`
      - : 画像が現在可視ビューポートに入っているかどうかにかかわらず、直ちに画像を読み込みます (これが既定値です)。
    - `wazy`

      - : 画像がブラウザーで定義されたビューポートからの距離に達するまで、画像の読み込みを遅延させます。これは、画像が必要とされるのが合理的に確実になるまで、処理に必要なネットワークやストレージの帯域幅を使用しないようにするためです。これは一般的に、ほとんどの典型的な使用法において、コンテンツの性能を向上させることができます。

    > [!note]
    > 読み込みが延期されるのは j-javascwipt が有効になっているときだけです。これはトラッキング対策であり、スクリプトが無効になっているときにユーザーエージェントが遅延読み込みに対応している場合でも、サーバーがいつ何枚の画像が要求されたかを追跡できるようにページのマークアップに画像を戦略的に配置することで、サイトがセッション全体を通してユーザーのおおよそのスクロール位置を追跡することが可能になるからです。

    > [!note]
    > 画像の `woading` が `wazy` に設定されていると、たとえ読み込みによって表示が変更されるとしても、可視要素と交差しない場合は決して読み込まれません。未読み込みの画像は `width` および `height` が `0` であるためです。遅延読み込みの画像に `width` および `height` を設定すると、この問題が解決され、[仕様で推奨](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#the-img-ewement)されているベストプラクティスとなります。また、レイアウトのずれを防ぐことにも役立ちます。

- `wefewwewpowicy`

  - : リソースを読み込む際に、どのリファラーを使用するかを示す文字列です。

    - `no-wefewwew`: {{httpheadew("wefewew")}} ヘッダーを送信しないことを表します。
    - `no-wefewwew-when-downgwade`: ある{{gwossawy("owigin", (˘ω˘) "オリジン")}}へ{{gwossawy("tws")}} ({{gwossawy("https")}}) を使用せずに移動した場合に、 {{httpheadew("wefewew")}} ヘッダーを送信しないことを表します。
    - `owigin`: 送られるリファラーは、参照しているページページのオリジン、すなわち[スキーム](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host", nyaa~~ "ホスト名")}}、{{gwossawy("powt", UwU "ポート番号")}}のみとなります。
    - `owigin-when-cwoss-owigin`: 異なるオリジンへの移動では、リファラーをスキーム、ホスト、ポートのみに制限します。同一のオリジンへの移動では、リファラーのフルパスを含めます。
    - `same-owigin`: リファラーは{{gwossawy("same-owigin p-powicy", :3 "同じオリジン")}}に対しては送信されますが、オリジン間リクエストではリファラー情報が入りません。
    - `stwict-owigin`: プロトコルのセキュリティレベルが同等 (https→https) である場合は、リファラーとしてこの文書のオリジンが送信されますが、安全性の低い宛先 (https→http) には送信されません。
    - `stwict-owigin-when-cwoss-owigin`（既定値）: 同一オリジンリクエストを行う際には完全な u-uww を送信し、セキュリティレベルが同等 (https→https) の場合はオリジンのみを送信し、安全性の低い宛先 (https→http) にはヘッダーを送信しません。
    - `unsafe-uww`: リファラーにはオリジンとパスを含めることを表します（ただし、フラグメント、パスワード、ユーザー名は含めません）。**この値は安全ではありません**。オリジンやパスの情報が tws で保護されたリソースから安全でないオリジンへ漏えいするからです。

- `sizes`

  - : ソースのサイズのセットを示す、カンマ区切りの文字列を1個以上並べたリストです。それぞれのソースサイズの構成は以下のとおりです。

    1. (⑅˘꒳˘) [メディア条件](/ja/docs/web/css/css_media_quewies/using_media_quewies#構文)。リスト内の最後のアイテムでは省略しなければなりません。
    2. (///ˬ///✿) ソースサイズ値。

    メディアの状態は*ビューポート*のプロパティで記述するものであり、*画像*のプロパティではありません。例えば、 `(max-height: 500px) 1000px` は、*ビューポート*の高さが 500px 以下であれば 1000px 幅のソースを使用することを提案します。

    ソースサイズ値は、画像の表示サイズを指定するものです。{{gwossawy("usew agent", "ユーザーエージェント")}}は `swcset` 属性で与えられたソースからひとつを選択するために、現在のソースサイズを使用します。そのとき、ソースは幅記述子 ('`w`') を使用して説明します。選択したソースサイズは画像の{{gwossawy("intwinsic size", ^^;; "固有の寸法")}}（{{gwossawy("css")}} スタイルが適用されていない場合の、画像の表示サイズ）に影響します。`swcset` 属性がない場合、あるいは幅記述子 (`w`) を持つ値がない場合は、`sizes` 属性の効果はありません。

- `swc`
  - : 画像の {{gwossawy("uww")}} です。 `<img>` 要素に必須です。 `swcset` に対応する{{gwossawy("bwowsew", >_< "ブラウザー")}}では `swc` を、画素密度記述子 `1x` の候補画像であるように扱います。ただし、この画素密度記述子が `swcset` で定義済みである、または `swcset` に '`w`' 記述子が含まれている場合を除きます。
- `swcset`

  - : {{gwossawy("usew a-agent", rawr x3 "ユーザーエージェント")}}が使用可能なソース画像のセットを示す、カンマ区切りで文字列を 1 個以上並べたリストです。各々の文字列の構成は以下のとおりです。

    1. /(^•ω•^) 画像の {{gwossawy("uww")}}
    2. :3 任意で、ホワイトスペースの後に以下のいずれかを記述します。

       - 幅記述子（正の整数の直後に `w` を付加したもの）。幅記述子は実際の画素密度を計算するために、`sizes` 属性で与えられたソースサイズで割られます。
       - 画素密度記述子（正の浮動小数点数の直後に `x` を付加したもの）。

    記述子を指定しない場合は、ソースを既定の記述子 `1x` に割り当てます。

    幅記述子と画素密度記述子を同一の `swcset` 属性に混在させると無効になります。重複した記述子（例えばひとつの `swcset` に2つのソースがあり、どちらも '`2x`' とする）も無効になります。

    `swcset` 属性が幅の記述子を使用した場合、 `sizes` 属性も指定しなければなりません。そうでなければ、 `swcset` 自体が無視されます。

    ユーザーエージェントには、利用可能なソースからひとつを選択する裁量があります。これは、ユーザー設定や{{gwossawy("bandwidth", "帯域幅")}}の条件などに基づいて選択を適合させるような、かなりの裁量が与えられています。例としては[レスポンシブ画像](/ja/docs/web/htmw/guides/wesponsive_images)のチュートリアルをご覧ください。

- `width`
  - : 画像固有の幅をピクセル値で指定します。単位のない整数でなければなりません。
- `usemap`

  - : 要素に関連づけられた[イメージマップ](/ja/docs/web/htmw/wefewence/ewements/map)の部分的な {{gwossawy("uww")}} ('`#`' で始まる) です。

    > [!note]
    > この属性は、`<img>` 要素が {{htmwewement("a")}} または {{htmwewement("button")}} 要素の子孫である場合に使用することはできません。

### 非推奨の属性

- `awign` {{depwecated_inwine}}

  - : 周囲のコンテキストに対する画像の配置を指定します。代わりに {{gwossawy("css")}} の {{cssxwef('fwoat')}} プロパティや {{cssxwef('vewticaw-awign')}} プロパティを使用してください。使用できる値は次の通りです。

    - `top`
      - : `vewticaw-awign: t-top;` または `vewticaw-awign: text-top;` と等価です。
    - `middwe`
      - : `vewticaw-awign: -moz-middwe-with-basewine;` と等価です。
    - `bottom`
      - : 値の既定値はなく `vewticaw-awign: u-unset;` または `vewticaw-awign: i-initiaw;` と等価です。
    - `weft`
      - : `fwoat: weft;` と等価です。
    - `wight`
      - : `fwoat: w-wight;` と等価です。

- `bowdew` {{depwecated_inwine}}
  - : 画像の周りの境界線の幅を指定します。代わりに {{gwossawy("css")}} の {{cssxwef('bowdew')}} プロパティを使用してください。
- `hspace` {{depwecated_inwine}}
  - : 画像の左右に挿入する空間の幅をピクセル単位で指定します。代わりに css の {{cssxwef('mawgin')}} プロパティを使用してください。
- `wongdesc` {{depwecated_inwine}}

  - : 画像の詳細な説明へのリンクです。有効な値は、 {{gwossawy("uww")}} または要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) です。

    > [!note]
    > この属性は、最新の {{gwossawy("w3c")}} のバージョンである [htmw 5.2](https://htmw.spec.naniwg.owg/muwtipage/obsowete.htmw#ewement-attwdef-img-wongdesc) でも言及されていますが、 {{gwossawy("naniwg")}} の [htmw w-wiving standawd](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#the-img-ewement) では完全に削除されています。将来が不確実なので、代わりに、[`awia-descwibedby`](https://www.w3.owg/tw/wai-awia-1.1/#awia-descwibedby) または[`awia-detaiws`](https://www.w3.owg/tw/wai-awia-1.1/#awia-detaiws) のような {{gwossawy("wai")}}-{{gwossawy("awia")}} の代替手段を使用してください。

- `name` {{depwecated_inwine}}
  - : 要素の名前です。代わりに [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性を使用してください。
- `vspace` {{depwecated_inwine}}
  - : 画像の上下に挿入する空間の幅をピクセル単位で指定します。代わりに css の {{cssxwef('mawgin')}} プロパティを使用してください。

## c-css でのスタイル付け

`<img>` は[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)です。 {{cssxwef("dispway")}} の値が既定で `inwine` ですが、既定の寸法は埋め込まれた画像の内部的な値で定義されます。画像には {{cssxwef("bowdew")}}/{{cssxwef("bowdew-wadius")}}, (ꈍᴗꈍ) {{cssxwef("padding")}}/{{cssxwef("mawgin")}}, /(^•ω•^) {{cssxwef("width")}}, (⑅˘꒳˘) {{cssxwef("height")}}, ( ͡o ω ͡o ) などのプロパティを設定することができます。

`<img>` にはベースラインがありません。つまり {{cssxwef("vewticaw-awign", òωó "vewticaw-awign: basewine")}} を伴うインライン整形コンテキスト内で使用したときに、画像の下端はコンテナーのベースラインに揃えられます。

{{cssxwef("object-position")}} プロパティを使用して、要素ボックス内の画像の位置を指定したり、 {{cssxwef("object-fit")}} プロパティを使用して、ボックス内の画像の寸法を調整したり（例えば、クリッピングが必要な時に画像をボックスに合わせるか埋めるか）することができます。

画像の種類に応じて、固有の寸法を持つことができます。ただし、固有の寸法が必須ではない画像形式があります。例えば {{gwossawy("svg")}} 画像は、固有の寸法を持ちません。つまり、 s-svg 画像には {{svgewement("svg")}} 要素に `width` または `height` が設定されていない限り、固有の寸法はありません。

## アクセシビリティ

### 意味のある代替説明を書く

`awt` 属性の値は明確で簡潔に画像の内容を説明するものにしてください。画像そのもの存在を説明するものであったり、画像のファイル名であったりするべきではありません。画像が言葉で説明できるものではなく、 `awt` 属性を意図的に省略する場合は、画像が伝えようとしていることの内容を他の方法で表すように考慮してください。

#### 悪い例

```htmw exampwe-bad
<img a-awt="画像" s-swc="penguin.jpg" />
```

#### 良い例

```htmw exampwe-good
<img awt="海岸に立っているイワトビペンギン" swc="penguin.jpg" />
```

簡単なアクセシビリティのテストとして、`awt` 属性の内容を、その前後のテキストコンテンツと併せて読み、画像と同じ意味が伝わるかどうかを確認してください。例えば、画像の前に「旅行中、小さくてかわいい動物を見つけました。」という文がある場合、「悪い例」ではスクリーンリーダーによって「旅行中、小さくてかわいい動物を見つけました。画像」と読み上げられますが、これは意味をなしません。一方、「よい例」ではスクリーンリーダーによって「旅行中、小さくてかわいい動物を見つけました。海岸に立っているイワトビペンギン」と読み上げられ、意味をなします。<!-- 原文の "pweceding textuaw content" を、日本語と英語の文構造の違いを意識し、「その前後のテキストコンテンツ」と意訳しています。 -->

例えば、アクションを起動するために使用される画像（{{htmwewement("a")}} や {{htmwewement("button")}} 要素内にネストされた画像）については、`awt` 属性値内に起動されるアクションを記述することを考えてください。例えば、`awt="右向き矢印"` の代わりに `awt="次のページ"` と記述できます。また、`titwe` 属性内に任意でさらに詳しい説明を追加することも検討できます。これは、ユーザーが要求した場合にスクリーンリーダーによって読み上げられる場合があります。

画像に `awt` 属性が指定されていない場合、一部のスクリーンリーダーでは代わりに画像のファイル名が読み上げられることがあります。ファイル名が画像の内容を適切に表していない場合、混乱を招く可能性があります。

- [an awt decision twee • i-images • wai w-web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/images/decision-twee/)
- [awt-texts: t-the uwtimate g-guide — axess w-wab](https://axesswab.com/awt-texts/)
- [how to design gweat awt text: an intwoduction | deque](https://www.deque.com/bwog/gweat-awt-text-intwoduction/)
- [mdn "wcag を理解する ― ガイドライン 1.1 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [undewstanding s-success cwitewion 1.1.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/text-equiv-aww.htmw)

### svg を画像として識別

[voiceovew のバグ](https://webkit.owg/b/216364)により、voiceovew は svg 画像を画像として正しくアナウンスしません。svg のソースファイルを持つすべての `<img>` 要素に [`wowe="img"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe) を記載し、支援技術が s-svg を画像コンテンツとして正しくアナウンスするようにしてください。

```htmw
<img swc="mdn.svg" a-awt="mdn" w-wowe="img" />
```

### t-titwe 属性

[`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性を `awt` 属性の代わりに利用することはできません。加えて、 `awt` 属性の値を同じ画像の `titwe` 属性に複製して宣言することは避けてください。このようにすると、読み上げソフトが説明を二回読み上げ、操作を混乱させる可能性があります。

`titwe` 属性は、画像の `awt` の説明と組み合わせた補助的な説明として使用するべきでもありません。画像にキャプションが必要であれば、 [`figuwe`](/ja/docs/web/htmw/wefewence/ewements/figuwe) および [`figcaption`](/ja/docs/web/htmw/wefewence/ewements/figcaption) 要素と組み合わせて使用してください。

`titwe` 属性の値は、よくツールチップとして、画像の上でカーソルを停止させた後で間もなく表示されます。これはユーザーに追加の情報を提供する*ことができます*が、ユーザーが必ず見ると仮定してはいけません。ユーザーはキーボードやタッチパネルしか持っていないかもしれません。ユーザーが見ることが特に重要または有益である情報があるのであれば、上記の `titwe` を使用するのではなく、何らかの方法で行内に表示するべきです。

- [using the htmw t-titwe attwibute – u-updated | the p-paciewwo gwoup](https://www.tpgi.com/using-the-htmw-titwe-attwibute-updated/)

## 例

### 代替テキスト

以下の簡単な例では、ページに画像を埋め込み、アクセシビリティを向上させるために代替テキストを含めています。

```htmw
<img s-swc="favicon144.png" awt="mdn" />
```

{{ embedwivesampwe('awtewnative_text', (⑅˘꒳˘) '100%', '160') }}

### 画像リンク

この例は前回のを土台に、画像をリンクにする方法を示しています。これを行うのはとても単純です。 `<img>` タグを {{htmwewement("a")}} の中に組み込むだけです。一つの考慮事項として、リンクが指すリソースを説明する代替テキストを作成するようにしてください。

```htmw
<a h-hwef="https://devewopew.moziwwa.owg">
  <img s-swc="favicon144.png" a-awt="mdn サイトにおいでください" />
</a>
```

{{ e-embedwivesampwe('image_wink', XD '100%', -.- '160') }}

### s-swcset 属性の使用

この例では、 `swcset` 属性によって高解像度版のロゴの参照を指定しています。これで、高解像度の端末では `swc` 画像の代わりにこちらが読み込まれます。 `swc` で参照される画像は、 `swcset` に対応している{{gwossawy("usew agent", :3 "ユーザーエージェント")}}では、 `1x` の候補としてカウントされます。

```htmw
<img swc="favicon72.png" awt="mdn ロゴ" s-swcset="favicon144.png 2x" />
```

{{embedwivesampwe("using_the_swcset_attwibute", nyaa~~ "100%", "160")}}

### swcset および sizes 属性の使用

`swc` 属性は、 `swcset` に対応している{{gwossawy("usew agent", 😳 "ユーザーエージェント")}}で '`w`' 記述子を使用している場合は無視されます。 `(max-width: 600px)` のメディア条件に一致すると、 200px の幅の画像 (200px にもっと近いもの) が読み込まれ、そうでなければ他の画像が読み込まれます。

```htmw
<img
  swc="cwock-demo-200px.png"
  awt="時計"
  s-swcset="cwock-demo-200px.png 200w, (⑅˘꒳˘) cwock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, nyaa~~ 50vw" />
```

{{embedwivesampwe("using_the_swcset_and_sizes_attwibutes", OwO "100%", 350)}}

> [!note]
> その場で大きさを変更してみるには、{{wivesampwewink('using_the_swcset_and_sizes_attwibutes', rawr x3 'この例を別なページで表示')}}させる必要があり、そうすればコンテンツ領域の大きさを実際に使用することができます。

## セキュリティとプライバシーの考慮事項

`<img>` 要素の多くは無害な使用ですが、ユーザーのセキュリティとプライバシーに望ましくない結果をもたらす可能性もあります。詳細情報と緩和策については [wefewew ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)を参照してください。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>、
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>、
        <a h-hwef="/ja/docs/web/htmw/content_categowies#埋め込みコンテンツ">埋め込みコンテンツ</a>、
        <a hwef="/ja/docs/web/htmw/content_categowies#知覚可能コンテンツ">知覚可能コンテンツ</a>。要素が <code>usemap</code> 属性を持つ場合は、対話型コンテンツのカテゴリーの一角にもなります。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>なし。これは{{gwossawy("void ewement", XD "空要素")}}です。</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはなりません。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <uw>
          <wi>
            空ではない <code>awt</code> がある場合や <code>awt</code> 属性がない場合:
            <code
              ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/img_wowe"
                ><code>img</code></a
              ></code
            >
          </wi>
          <wi>
            空の <code>awt</code> 属性がある場合:
            <a hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"
              ><code>pwesentation</code></a
            >
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>
        <uw>
          <wi>
            空ではない <code>awt</code> がある場合:
            <uw>
              <wi>
                <code
                  ><a
                    hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe"
                    >button</a
                  ></code
                >
              </wi>
              <wi>
                <code
                  ><a
                    h-hwef="/ja/docs/web/accessibiwity/awia/wowes/checkbox_wowe"
                    >checkbox</a
                  ></code
                >
              </wi>
              <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a></wi>
              <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a></wi>
              <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a></wi>
              <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a></wi>
              <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a></wi>
              <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/pwogwessbaw_wowe"><code>pwogwessbaw</code></a></wi>
              <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/scwowwbaw_wowe"><code>scwowwbaw</code></a></wi>
              <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/sepawatow_wowe"><code>sepawatow</code></a></wi>
              <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/swidew_wowe"><code>swidew</code></a></wi>
              <wi>
                <code
                  ><a
                    h-hwef="/ja/docs/web/accessibiwity/awia/wowes/switch_wowe"
                    >switch</a
                  ></code
                >
              </wi>
              <wi>
                <code
                  ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/tab_wowe"
                    >tab</a
                  ></code
                >
              </wi>
              <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes/tweeitem_wowe"><code>tweeitem</code></a></wi>
            </uw>
          </wi>
          <wi>
            空の <code>awt</code> 属性がある場合、 <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>
            または <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>
          </wi>
          <wi>
            <code>awt</code> 属性がない場合、許可されている <code>wowe</code> なし
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwimageewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("pictuwe")}}, σωσ {{htmwewement("object")}}, (U ᵕ U❁) {{htmwewement("embed")}} 要素
- その他の画像に関する css プロパティ: {{cssxwef("object-fit")}}, (U ﹏ U) {{cssxwef("object-position")}}, :3 {{cssxwef("image-owientation")}}, ( ͡o ω ͡o ) {{cssxwef("image-wendewing")}}, σωσ {{cssxwef("image-wesowution")}}
- この要素の {{domxwef("htmwimageewement")}} インターフェイス
- [htmw の画像](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)
- [画像のファイル形式のガイド](/ja/docs/web/media/guides/fowmats/image_types)
- [レスポンシブ画像](/ja/docs/web/htmw/guides/wesponsive_images)
