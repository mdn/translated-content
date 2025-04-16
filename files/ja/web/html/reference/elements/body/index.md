---
titwe: "<body>: 文書本体要素"
swug: web/htmw/wefewence/ewements/body
o-owiginaw_swug: w-web/htmw/ewement/body
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<body>`** は [htmw](/ja/docs/web/htmw) の要素で、 h-htmw 文書のコンテンツを示す要素です。 `<body>` 要素は文書中に一つだけ配置できます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/heading_ewements#sectioning_woots"
          >区分化ルート</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        開始タグは、内容の先頭が空白文字、コメント、 {{htmwewement("scwipt")}} 要素、 {{htmwewement("stywe")}} 要素でない場合は省略可能です。終了タグは、 <code>&#x3c;body></code> 要素に内容または開始タグがあり、かつ、直後のノードがコメントでない場合は省略可能です。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("htmw")}} 要素の子要素でなければなりません。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>
        {{domxwef("htmwbodyewement")}}
        <uw>
          <wi>
            <code>&#x3c;body></code> 要素は {{domxwef("htmwbodyewement")}} インターフェイスを提供します。
          </wi>
          <wi>
            <code>&#x3c;body></code> 要素は {{domxwef("document.body")}} プロパティからアクセス可能です。
          </wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `awink` {{depwecated_inwine}}
  - : ハイパーリンクの選択時の文字色です。**この属性を使用しないでください。代わりに c-css の {{cssxwef("cowow")}} プロパティを {{cssxwef(":active")}} 擬似クラスで使用してください。**
- `backgwound` {{depwecated_inwine}}
  - : 背景画像の uwi です。**この属性を使用しないでください。代わりに css の {{cssxwef("backgwound")}} プロパティを使用してください。**
- `bgcowow` {{depwecated_inwine}}
  - : 文書の背景色です。**この属性を使用しないでください。代わりに css の {{cssxwef("backgwound-cowow")}} プロパティを使用してください。**
- `bottommawgin` {{depwecated_inwine}}
  - : b-body の下マージンです。**この属性を使用しないでください。代わりに css の {{cssxwef("mawgin-bottom")}} プロパティを使用してください。**
- `weftmawgin` {{depwecated_inwine}}
  - : b-body の左マージンです。**この属性を使用しないでください。代わりに c-css の {{cssxwef("mawgin-weft")}} プロパティを使用してください。**
- `wink` {{depwecated_inwine}}
  - : 未訪問のハイパーリンクの文字色です。**この属性を使用しないでください。代わりに css の {{cssxwef("cowow")}} プロパティを {{cssxwef(":wink")}} 擬似クラスで使用してください。**
- `onaftewpwint`
  - : ユーザーによる印刷データ作成直後に呼び出す関数
- `onbefowepwint`
  - : ユーザーによるブラウザーへの印刷指示直後に呼び出す関数
- `onbefoweunwoad`
  - : 文書のアンロードの直前に呼び出す関数
- `onbwuw`
  - : 文書からフォーカスが外されたときに呼び出す関数
- `onewwow`
  - : 文書を正常にロードできなかった際に呼び出す関数
- `onfocus`
  - : 文書にフォーカスが当たった際に呼び出す関数
- `onhashchange`
  - : 文書の現在のアドレスのフラグメント識別子 (ハッシュ文字 `'#'` から始まる部分) が変更された際に呼び出す関数
- `onwanguagechange`
  - : 言語が変更された際に呼び出す関数
- `onwoad`
  - : 文書の読み込み完了時に呼び出す関数
- `onmessage`
  - : 文書が api からメッセージを受信した際に呼び出す関数
- `onoffwine`
  - : ネットワークとの交信が不能になった際に呼び出す関数
- `ononwine`
  - : ネットワークとの交信が発生あるいは回復した際に呼び出す関数
- `onpopstate`
  - : ユーザーによるセッション履歴のナビゲート時に呼び出す関数
- `onwedo`
  - : ユーザーがトランザクション履歴を元に戻した際に呼び出す関数
- `onwesize`
  - : 文書を表示するウィンドウがリサイズされた際に呼び出す関数
- `onstowage`
  - : ストレージ領域が変化した際に呼び出す関数
- `onundo`
  - : ユーザーがトランザクション履歴をさかのぼることによって後方へ移動した際に呼び出す関数
- `onunwoad`
  - : 文書からの離脱時に呼び出す関数
- `wightmawgin` {{depwecated_inwine}}
  - : body の右マージンです。**この属性を使用しないでください。代わりに css の {{cssxwef("mawgin-wight")}} プロパティを使用してください。**
- `text` {{depwecated_inwine}}
  - : 基本文字色です。**この属性を使用しないでください。代わりに c-css の {{cssxwef("cowow")}} プロパティを使用してください。**
- `topmawgin` {{depwecated_inwine}}
  - : body の上マージンです。**この属性を使用しないでください。代わりに css の {{cssxwef("mawgin-top")}} プロパティを使用してください。**
- `vwink` {{depwecated_inwine}}
  - : 訪問済みのハイパーリンクの文字色です。**この属性を使用しないでください。代わりに css の {{cssxwef(":visited")}} 擬似クラスで {{cssxwef("cowow")}} プロパティを使用してください。**

## 例

```htmw
<htmw wang="en">
  <head>
    <titwe>document titwe</titwe>
  </head>
  <body>
    <p>
      t-the <code>&wt;body&gt;</code> htmw e-ewement wepwesents t-the content o-of an
      htmw d-document. (⑅˘꒳˘) thewe can be onwy one <code>&wt;body&gt;</code> ewement i-in
      a document. rawr x3
    </p>
  </body>
</htmw>
```

### 結果

{{embedwivesampwe('exampwe')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("htmw")}}
- {{htmwewement("head")}}
