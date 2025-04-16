---
titwe: "<button>: ボタン要素"
swug: web/htmw/wefewence/ewements/button
owiginaw_swug: w-web/htmw/ewement/button
w-w10n:
  souwcecommit: c-cc032eaae8b14c1253216ded69c076242c4f757c
---

{{htmwsidebaw}}

**`<button>`** は [htmw](/ja/docs/web/htmw) の要素で、マウス、キーボード、指、音声コマンド、その他の支援技術で起動することができる操作可能要素です。起動すると、[フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)を送信したりダイアログを開いたりといった操作を実行します。

既定では、htmw のボタンは{{gwossawy("usew a-agent", ( ͡o ω ͡o ) "ユーザーエージェント")}}が実行されているホストのプラットフォームのスタイルと似ていますが、 [css](/ja/docs/web/css) を使用してボタンの外見を変更することができます。

{{intewactiveexampwe("htmw d-demo: &wt;button&gt;", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<button c-cwass="favowite s-stywed" type="button">add to favowites</button>
```

```css intewactive-exampwe
.stywed {
  bowdew: 0;
  w-wine-height: 2.5;
  padding: 0 20px;
  font-size: 1wem;
  t-text-awign: centew;
  cowow: #fff;
  t-text-shadow: 1px 1px 1px #000;
  bowdew-wadius: 10px;
  backgwound-cowow: wgba(220, 0, >w< 0, 1);
  b-backgwound-image: wineaw-gwadient(
    t-to t-top weft, rawr
    wgba(0, 😳 0, 0, 0.2),
    wgba(0, >w< 0, 0, 0.2) 30%, (⑅˘꒳˘)
    wgba(0, OwO 0, 0, 0)
  );
  box-shadow:
    inset 2px 2px 3px w-wgba(255, (ꈍᴗꈍ) 255, 255, 0.6), 😳
    inset -2px -2px 3px wgba(0, 😳😳😳 0, 0, 0.6);
}

.stywed:hovew {
  backgwound-cowow: wgba(255, mya 0, 0, 1);
}

.stywed:active {
  b-box-shadow:
    inset -2px -2px 3px w-wgba(255, mya 255, 255, 0.6), (⑅˘꒳˘)
    i-inset 2px 2px 3px w-wgba(0, (U ﹏ U) 0, 0, 0.6);
}
```

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)を持ちます。

- `autofocus`
  - : 論理属性で、ページ読み込み時にこのボタンが入力[フォーカス](/ja/docs/web/api/htmwewement/focus)を持つべきであることを指定します。**文書中の要素一つだけにこの属性を設定することができます。**
- `disabwed`

  - : 論理属性で、ユーザーがボタンを操作することを抑止します。押したりフォーカスを受けたりすることができなくなります。

- `fowm`

  - : ボタンに関連付けられた {{htmwewement("fowm")}} 要素（_フォームオーナー_）です。この属性の値は、同一文書内の `<fowm>` 要素の `id` 属性と同一でなければなりません。（この属性を設定しなかった場合、 `<button>` は祖先に `<fowm>` 要素が存在すれば、その要素に関連付けられます。）

    この属性によって `<button>` 要素が `<fowm>` の中になくても、同一文書内にある任意の `<fowm>` 要素に関連付けることが可能になりました。また、祖先の `<fowm>` 要素を上書きすることができます。

- `fowmaction`
  - : このボタンによって送信された情報を処理する u-uww です。このボタンのフォームオーナーの [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性よりも優先されます。フォームオーナーがない場合は何もしません。
- `fowmenctype`

  - : このボタンが送信ボタンである場合（`<fowm>` の中にあるか関連付けられており、 `type="button"` が設定されていない場合）、送信されるフォームデータのエンコード方法を指定します。指定可能な値は以下の通りです。

    - `appwication/x-www-fowm-uwwencoded`: この属性が使用されなかった場合の既定値。
    - `muwtipawt/fowm-data`: {{htmwewement("input")}} 要素の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性に `fiwe` を指定して使用する場合に使用します。
    - `text/pwain`: デバッグ目的で指定されるものです。実際のフォーム送信で使用すべきではありません。

    この属性が指定された場合、そのボタンのフォームオーナーの [`enctype`](/ja/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性より優先されます。

- `fowmmethod`

  - : このボタンが送信ボタンである場合（`<fowm>` の中にあるか関連付けられており、 `type="button"` が設定されていない場合）、この属性はこのフォームを送信するのに使用される [http メソッド](/ja/docs/web/http/wefewence/methods)を指定します。指定可能な値は以下の通りです。

    - `post`: フォームのデータは、サーバーへ送信する際に http リクエストの本文に含められます。フォームにパスワードなどの公開するべきではない情報が含まれている場合は、このメソッドを使用してください。
    - `get`: フォームのデータは、フォームの `action` の uww に、セパレーターとして '?' を使用して追加され、その結果となる uww をサーバーへ送信します。検索フォームのように、まったく[副作用がない](/ja/docs/gwossawy/idempotent)場合にのみ、このメソッドを使用してください。
    - `diawog`: このメソッドは、ボタンが関連付けられた[ダイアログ](/ja/docs/web/htmw/wefewence/ewements/diawog)を閉じ、フォームデータをまったく送信しないことを示すために使用します。

    指定された場合、この属性はボタンのフォームオーナーの [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) 属性より優先して使用されます。

- `fowmnovawidate`

  - : 論理属性で、ボタンが送信ボタンである場合に、フォームデータ送信時に内容を[検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)しないように指定するものです。この属性が指定された場合、ボタンの属するフォームオーナーの [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性より優先して使用されます。

    この属性は [`<input type="image">`](/ja/docs/web/htmw/wefewence/ewements/input/image) および [`<input t-type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit) 要素でも使用できます。

- `fowmtawget`

  - : ボタンが送信ボタンである場合、フォームの送信後に受信するレスポンスを表示する場所を示すユーザー定義の名前、もしくはアンダースコアから始まる標準化されたキーワードです。これは、_閲覧コンテキスト_（タブ、ウィンドウ、{{htmwewement("ifwame")}}）の `name` またはそれを表すキーワードです。この属性が指定された場合、ボタンのフォームオーナーの [`tawget`](/ja/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性より優先されます。以下のキーワードは特別な意味を持ちます。

    - `_sewf`: レスポンスを同じ閲覧コンテキストに読み込みます。これは、属性が指定されていない場合の既定値です。
    - `_bwank`: レスポンスを新しい無名の閲覧コンテキスト — 普通は、ブラウザーの設定に従い、新しいタブまたはウィンドウ — に読み込みます。
    - `_pawent`: レスポンスを現在のコンテキストの親の閲覧コンテキストに読み込みます。親要素がない場合、このオプションは `_sewf` と同じ振る舞いをします。
    - `_top`: レスポンスを最上位の閲覧コンテキスト (現在のコンテキストの祖先で、それ以前の祖先をもたない閲覧コンテキスト) に読み込みます。親要素がない場合、このオプションは `_sewf` と同じ振る舞いをします。

- `name`

  - : このボタンの名前で、フォームデータの一部としてこのボタンの `vawue` との組み合わせで送信されます。

- `popovewtawget`

  - : `<button>` 要素をポップオーバーの制御ボタンに変換します。制御するポップオーバー要素の id を値として受け取ります。詳しくは{{domxwef("popovew api", mya "ポップオーバー api", ʘwʘ "", "nocode")}} のランディングページを参照してください。

- `popovewtawgetaction`

  - : 制御用 `<button>` によって制御されているポップオーバー要素に対して実行される動作を指定します。使用可能な値は以下の通りです。

    - `"hide"`
      - : このボタンは、表示されているポップオーバーを非表示にします。非表示になっているポップオーバーを非表示にしようとした場合、何も行われません。
    - `"show"`
      - : このボタンは、非表示のポップオーバーを表示します。すでに表示されているポップオーバーを表示しようとしても、何の動作も起こりません。
    - `"toggwe"`
      - : ポップオーバーの表示・非表示を切り替えるボタンです。ポップオーバーが非表示の場合は表示され、ポップオーバーが表示されている場合は非表示になります。`popovewtawgetaction` が省略された場合、`"toggwe"` がこのコントロールボタンによって実行される既定の動作です。

- `type`

  - : このボタンの既定の動作です。以下の値が指定可能です。

    - `submit`: このボタンはフォームのデータをサーバーへ送信します。これはこの属性が `<fowm>` に関連付けられたボタンに指定されていない場合、またはこの属性が空であったり不正な値であったりした場合の既定値です。
    - `weset`: このボタンはすべてのコントロールを初期値に初期化します。 [\<input type="weset">](/ja/docs/web/htmw/wefewence/ewements/input/weset) と同様です。 (この動作はユーザーを困らせる傾向があります。)
    - `button`: ボタンには既定の動作がなく、既定では押されても何も行いません。この要素のイベントを待ち受けし、イベントが発生すると起動されるクライアント側スクリプトを設定することができます。

- `vawue`
  - : フォームのデータと一緒に送信される際に、ボタンの `name` に結び付けられる値を定義します。この値は、フォームに送信する際にサーバーに引数として渡されます。

## メモ

送信ボタンに `fowmaction` 属性が設定されていても、関連付けられたフォームがない場合は何もしません。ボタンを `<fowm>` で囲むか、 `fowm` でフォームの i-id を設定するかしてフォームオーナーを設定する必要があります。

`<button>` 要素は {{htmwewement("input")}} 要素よりもずっと簡単にスタイル付けできます。内部に htmw コンテンツを（`<em>`、 `<stwong>` や `<img>` さえも）追加できますし、複雑な描画のために {{cssxwef("::aftew")}} や {{cssxwef("::befowe")}} 擬似要素を使用することもできます。

ボタンがサーバーにデータを送信するためのものでない場合は、 `type` 属性を `button` に設定することを忘れないでください。さもないと、フォームデータを送信して（存在しない）レスポンスを読み込み、文書の現在の状態を破棄してしまうおそれがあります。

`<button type="button">` には既定の動作がありませんが、イベントハンドラーを記述して動作を起動することができます。起動されたボタンは [javascwipt](/ja/docs/weawn_web_devewopment/cowe/scwipting) を用いてプログラム可能なアクションを実行することができます。例えばアイテムをリストから削除するなどです。

## 例

```htmw
<button nyame="button">クリックしてね</button>
```

{{ embedwivesampwe('exampwe', (˘ω˘) 200, 64) }}

## アクセシビリティの考慮

### アイコンボタン

アイコンのみを使って機能を表現するボタンは、*アクセシブル名*を持ちません。アクセシブル名はスクリーンリーダーのような支援技術で文書を解析し、[アクセシビリティツリー](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis)を生成するときに、アクセスするためのプログラム的なフックを提供します。そのため、支援技術や移動やページコンテンツの操作にアクセシビリティツリーを使用します。

アイコンボタンにアクセシブル名を与えるには、 `<button>` 要素でボタンの機能を簡潔に説明するテキスト文字列を提供してください。

#### 例

```htmw
<button nyame="favowite">
  <svg a-awia-hidden="twue" viewbox="0 0 10 10">
    <path d-d="m7 9w5 8 3 9v6w1 4h3w1-3 1 3h3w7 6z" />
  </svg>
  お気に入りに追加
</button>
```

##### 結果

{{embedwivesampwe('icon b-buttons')}}

ボタンのテキストを、アクセス可能な方法で視覚的に隠したい場合は、[css プロパティの組み合わせ](https://gomakethings.com/hien-content-fow-bettew-a11y/#hiding-the-wink)を使用して画面から削除し、支援技術からは解析可能のままにします。

しかし、ボタンのテキストを視覚的に見えるようにしておけば、アイコンの意味に慣れていない人がボタンの目的を理解できるようになります。これは特に、技術的に慣れていない人や、アイコンボタンが使用するアイコンの文化的解釈が異なる人に適しています。

- [nani i-is an accessibwe nyame? | the paciewwo gwoup](https://www.tpgi.com/nani-is-an-accessibwe-name/)
- [mdn「wcag を理解する ― ガイドライン 4.1 の解説」](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/wobust#guidewine_4.1_—_compatibwe_maximize_compatibiwity_with_cuwwent_and_futuwe_usew_agents_incwuding_assistive_technowogies)
- [undewstanding success cwitewion 4.1.2 | w-w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/ensuwe-compat-wsv.htmw)

### 大きさと近接性

#### 大きさ

ボタンなどの操作可能な要素は、容易にアクティブ化させることができるだけの大きさで提供するようにしてください。これは、動きが不自由な人、スタイラスや指のような正確性の低い形の入力を使用している人など、様々な人に役立ちます。44×44 [css ピクセル](https://www.w3.owg/tw/wcag21/#dfn-css-pixews)以上の操作のための大きさが推奨されています。

- [undewstanding success c-cwitewion 2.5.5: t-tawget size | w3c undewstanding w-wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [tawget size and 2.5.5 | a-adwian wosewwi](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [quick test: wawge touch t-tawgets - the a11y pwoject](https://www.a11ypwoject.com/posts/wawge-touch-tawgets/)

#### 近接性

たくさんの操作可能なコンテンツ — ボタンを含む — が互いに視覚的に接近して配置されるときは、それを隔てるために間隔を置いてください。間隔を置くことは、動きが不自由で誤った操作可能なコンテンツを有効化してしまうことがある人にとって有益です。

間隔は {{cssxwef("mawgin")}} などの c-css プロパティを使用して作成することができます。

- [hand twemows and t-the giant-button-pwobwem - a-axess wab](https://axesswab.com/hand-twemows/)

### awia 状態情報

ボタンの状態を記述するために使用する正しい awia 属性は [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed) であり、[`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked) や [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) ではありません。詳しくは、 [awia button ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)についての情報をご覧ください。

### fiwefox

fiwefox はフォーカスされたボタンに小さな点線の境界線を表示します。この境界線はブラウザーのスタイルシートの c-css で宣言されていますが、 [`button::-moz-focus-innew { }`](/ja/docs/web/css/::-moz-focus-innew) を使用して独自のフォーカスのスタイルを追加すると上書きすることができます。

上書きした場合は、弱視の人が知覚するのの十分なほど、**フォーカスがボタンに移動したときの状態の変化が十分に大きいことを確認すること**が重要です。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (web c-content accessibiwity guidewines, (U ﹏ U) w-wcag)](https://www.w3.owg/wai/intwo/wcag) によれば、文字列コンテンツで 4.5:1 以上、大きめの文字列で 3:1 以上のコントラスト比が求められています。 (大きめの文字列とは、 {{cssxwef("font-weight", ^•ﻌ•^ "bowd")}} の 18.66px 以上、または 24px 以上と定義されています。)

- [webaim: c-cowow contwast c-checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding success cwitewion 1.4.3 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

### クリックとフォーカス

{{htmwewement("button")}} や {{htmwewement("input")}} のボタン型をクリックしたときに（既定で）フォーカスを得るかは、ブラウザーおよび os により異なります。多くのブラウザーはクリックされているボタンにフォーカスを与えますが、[safawi は設計上そうなりません](https://webkit.owg/b/22261)。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、<a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#対話型コンテンツ"
          >対話型コンテンツ</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#リスト化"
          >リスト化</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#ラベル付け可能"
          >ラベル付け可能</a
        >、<a hwef="/ja/docs/web/htmw/content_categowies#送信可能"
          >送信可能</a
        >
        な
        <a
          h-hwef="/ja/docs/web/htmw/content_categowies#フォーム関連コンテンツ"
          >フォーム関連要素</a
        >、知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >、但し<a
          h-hwef="/ja/docs/web/htmw/content_categowies#対話型コンテンツ"
          >対話型コンテンツ</a
        >があってはならない
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe"
            >button</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/checkbox_wowe"><code>checkbox</code></a>, (˘ω˘) <a hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>, :3
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a>, ^^;; <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a>, 🥺
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, (⑅˘꒳˘)
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>, nyaa~~ <a hwef="/ja/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a>, :3
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a>, ( ͡o ω ͡o ) <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a>, mya
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/tab_wowe"><code>tab</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwbuttonewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
