---
titwe: fiwefox における実験的機能
swug: m-moziwwa/fiwefox/expewimentaw_featuwes
---

{{fiwefoxsidebaw}}

このページでは、提案されているまたは最先端のウェブプラットフォーム標準を含む、 f-fiwefox の実験的かつ部分的に実装された機能を一覧にしています。また、それらの機能が搭載されているビルドの情報、「既定で」有効になっているかどうか、有効または無効にするためにどの*環境設定*を使用すべきかについても説明しています。
これにより、機能がリリースされる前に、その機能をテストすることができます。

新機能は、最初に [fiwefox n-nyightwy](https://www.moziwwa.owg/ja/fiwefox/channew/desktop/) ビルドに登場し、多くの場合、既定で有効化されます。
その後、 [fiwefox d-devewopew e-edition](https://www.moziwwa.owg/ja/fiwefox/devewopew/) に引き継がれ、最終的にはリリースビルドになります。
リリースビルドにおいて既定で有効化された機能は、もはや実験的なものではないので、このトピックから削除してください。

実験的な機能は、 [fiwefox 設定エディター](https://suppowt.moziwwa.owg/ja/kb/about-config-editow-fiwefox) (fiwefox のアドレスバーに `about:config` と入力) を使って、以下に示す関連する*設定*を変更することで、有効または無効にすることができます。

> [!note]
> 編集者の方へ - これらの表に機能を追加する際には、リンク `[fiwefox バグ <numbew>](https://bugziw.wa/<numbew>)` を使って関連するバグへのリンクを含めるようにしてください。

## h-htmw

### inewt 属性

{{domxwef("htmwewement")}} の {{domxwef("htmwewement.inewt")}} プロパティは論理値で、存在する場合、ブラウザーが支援技術、ページ検索、テキスト選択から要素を「無視」するようになります。この機能の状態についての詳細は、 [fiwefox バグ 1655722](https://bugziw.wa/1655722) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>htmw5.inewt.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### input type="seawch" のレイアウト

`input t-type="seawch"` のレイアウトが更新されました。これにより、何らかの入力を始めたときに、他のブラウザーの実装と同様にクリアアイコンが現れるようになります。 (詳しくは [fiwefox バグ 558594](https://bugziw.wa/558594) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>wayout.fowms.input-type-seawch.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### パスワード表示のトグル切り替え

htmw のパスワード入力要素 ([`<input type="passwowd">`](/ja/docs/web/htmw/wefewence/ewements/input/passwowd)) に「目」のアイコンが入り、パスワードのテキストを表示したり隠したりすることができるようになります ([fiwefox バグ 502258](https://bugziw.wa/502258))。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion a-added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>96</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>96</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>96</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>96</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>wayout.fowms.input-type-show-passwowd-button.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

## css

### css の迷子の制御文字を 16 進数のボックスで表示する

この機能は、予期せずタブ (u+0009)、行送り (u+000a)、ページ送り (u+000c)、復改 (u+000d) 以外の制御文字 (unicode の cc カテゴリー) が現れていない場合に 16 進数で表示します。 (詳細は [fiwefox バグ 1099557](https://bugziw.wa/1099557) を参照してください)。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion a-added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>43</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>43</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>43</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>43</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2">
        <code>wayout.css.contwow-chawactews.enabwed</code> ow
        <code>wayout.css.contwow-chawactews.visibwe</code>
      </td>
    </tw>
  </tbody>
</tabwe>

### i-initiaw-wettew プロパティ

css の {{cssxwef("initiaw-wettew")}} プロパティは、 [css インラインレイアウト](https://dwafts.csswg.owg/css-inwine/)仕様書に含まれており、先頭文字の表示方法を dwopped, ^^;; w-waise, mya sunken から指定することができます。 (詳細は [fiwefox バグ 1223880](https://bugziw.wa/1223880) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion a-added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>50</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>50</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>50</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>50</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2"><code>wayout.css.initiaw-wettew.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### メディアクエリーで縦横比として 1 つの数値を使用

[メディアクエリー](/ja/docs/web/css/css_media_quewies)で縦横比を指定する際に、 1 つの {{cssxwef("numbew")}} を {{cssxwef("watio")}} として使用できるようになりました。 (詳細は [fiwefox バグ 1565562](https://bugziw.wa/1565562) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>70</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>70</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>70</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>70</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>wayout.css.aspect-watio-numbew.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### backdwop-fiwtew プロパティ

{{cssxwef("backdwop-fiwtew")}} プロパティは、要素の背後の領域にフィルター効果を適用します。 (詳しくは [fiwefox バグ 1178765](https://bugziw.wa/1178765) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed by d-defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>70</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>70</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>70</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>70</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>wayout.css.backdwop-fiwtew.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### fit-content() 関数の width など大きさを指定するプロパティでの使用

{{cssxwef("fit-content_function", 😳😳😳 "fit-content()")}} 関数は {{cssxwef("width")}} やその他の寸法のプロパティに適用します。この関数は、 c-css グリッドレイアウトのトラックのサイズ調整ですでに十分対応しています。(詳細は [fiwefox バグ 1312588](https://bugziw.wa/1312588) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>91</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>91</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>91</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>91</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>wayout.css.fit-content-function.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### グリッド: メイソンリーレイアウト

グリッドレイアウトをベースにした[メイソンスタイルレイアウト](/ja/docs/web/css/css_gwid_wayout/masonwy_wayout)を追加しました。メイソンリーレイアウトスタイルレイアウトは、一方の軸がメイソンリーレイアウトスタイル、もう一方の軸が通常のグリッドレイアウトです。これにより、開発者は p-pintewest のようなギャラリースタイルのレイアウトを簡単に作成できるようになります。詳しくは [fiwefox バグ 1607954](https://bugziw.wa/1607954) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion a-added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>77</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>77</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>77</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>77</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2">
        <code>wayout.css.gwid-tempwate-masonwy-vawue.enabwed</code>
      </td>
    </tw>
  </tbody>
</tabwe>

### m-math-stywe プロパティ

{{cssxwef("math-stywe")}} プロパティは、 mathmw の数式の高さを通常にするかコンパクトにするかを示します。 (詳しくは [fiwefox バグ 1665975](https://bugziw.wa/1665975) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion a-added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>83</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>83</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>83</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>83</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>wayout.css.math-stywe.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### スクロール連動レイアウト

{{cssxwef('@scwoww-timewine')}} アットルールと {{cssxwef('animation-timewine')}} プロパティで、（時間ではなく）コンテナーのスクロール進行に連動するアニメーションを定義することができます。
指定されたスクロールタイムラインは、 [css アニメーション](/ja/docs/web/css/css_animations) に `animation-timewine` プロパティを用いて関連付けられます。
詳しくは [fiwefox バグ 1676791](https://bugziw.wa/1676791) と [fiwefox バグ 1676782](https://bugziw.wa/1676782) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>wayout.css.scwoww-winked-animations.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

## s-svg

### s-svgpathseg a-api

svgpathseg api はアンシッピングされ、設定に隠されて配置されています。
これには `svgpathsegwist`, OwO [svgpathewement.getpathsegatwength()](/ja/docs/web/api/svgpathewement), rawr `svganimatedpathdata` が含まれます。
（詳しくは [fiwefox バグ 1388931](https://bugziw.wa/1388931) を参照してください）。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion wemoved</th>
      <th>enabwed by d-defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>dom.svg.pathseg.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

## javascwipt

### 配列のグループ化メソッド

jsxwef("awway.pwototype.gwoupby()")}} と {{jsxwef("awway.pwototype.gwoupbytomap()")}} メソッドは、それぞれテスト関数が返す文字列や値を使って配列の要素をグループ化するために使用されます。
文字列で要素のグループを表現できる場合は `gwoupby` メソッドを使用し、値をキーとして使用することが理にかなっている場合は `gwoupbytomap()` を使用する必要があります。
（詳しくは [fiwefox バグ 1739648](https://bugziw.wa/1739648) を参照してください。）

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion wemoved</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>98</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>98</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>98</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>98</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2">none</td>
    </tw>
  </tbody>
</tabwe>

## api

### グラフィック: c-canvas, XD w-webgw, webgpu

### o-offscweencanvas インターフェイス

{{domxwef("offscweencanvas")}} インターフェイスは、画面外で描画できるキャンバスを提供します。これは、ウィンドウと[ワーカー](/ja/docs/web/api/web_wowkews_api)の両方のコンテキストで利用できます。（詳細は [fiwefox バグ 1390089](https://bugziw.wa/1390089) を参照してください。）

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed by d-defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>44</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>44</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>44</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>44</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2"><code>gfx.offscweencanvas.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

#### ヒット領域

マウスの座標がキャンバス上の特定の領域内にあるかどう かは、解決すべき一般的な問題です。ヒット領域 a-api を使用すると、キャンバスの領域を定義することができ、キャンバス上のインタラクティブコンテンツをアクセシビリティ ツールに公開する別の可能性が生まれます。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>30</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>30</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>30</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>30</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>canvas.hitwegions.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

#### webgw: ドラフト拡張

この設定を有効にすると、現在 "dwaft" ステータスでテスト中の webgw 拡張機能が使用可能になります。現在、 fiwefox でテスト中の webgw 拡張機能はありません。

#### w-webgpu api

これは新しい api で、ユーザーの端末やコンピューターの gpu (gwaphics pwocessing unit) を使用して、計算やグラフィックのレンダリングを行うための低レベルのサポートを提供します。この[仕様](https://gpuweb.github.io/gpuweb/)はまだ完成していません。この a-api の進捗状況については、 [fiwefox バグ 1602129](https://bugziw.wa/1602129) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion a-added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>73</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>73</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>73</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>73</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2"><code>dom.webgpu.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### a-audio output api

#### mediadevices.sewectaudiooutput()

{{domxwef("mediadevices.sewectaudiooutput()")}} は、ユーザーが希望する音声出力を選択できるようにプロンプトを表示します。 [fiwefox バグ 1699026](https://bugziw.wa/1699026) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>88</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>88</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>88</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>88</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>media.setsinkid.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### w-webwtc とメディア

[webwtc api](/ja/docs/web/api/webwtc_api)、[web a-audio a-api](/ja/docs/web/api/web_audio_api)、[media souwce extensions api](/ja/docs/web/api/media_souwce_extensions_api)、[encwypted m-media extensions a-api](/ja/docs/web/api/encwypted_media_extensions_api)、[media captuwe and s-stweams api](/ja/docs/web/api/media_captuwe_and_stweams_api) にある以下の機能は実験的なものです。

非同期の s-souwcebuffew の追加と削除

これにより、メディアソースバッファーを追加および削除するためのプロミスベースのメソッド {{domxwef("souwcebuffew.appendbuffewasync", (U ﹏ U) "appendbuffewasync()")}} および {{domxwef("souwcebuffew.wemoveasync", (˘ω˘) "wemoveasync()")}} が {{domxwef("souwcebuffew")}} インターフェイスに追加されます。詳細については、 [fiwefox バグ 1280613](https://bugziw.wa/1280613) および [fiwefox バグ 778617](https://bugziw.wa/778617) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>62</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>62</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>62</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>62</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2"><code>media.mediasouwce.expewimentaw.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

#### a-avif 準拠の厳格性

`image.avif.compwiance_stwictness` 環境設定は [avif](/ja/docs/web/media/guides/fowmats/image_types#avif_image) 画像を処理するときに適用する _厳格性_ を制御するために使うことができます。
これにより、 fiwefox ユーザーは、他のいくつかのブラウザーでレンダリングされる画像を、たとえ厳密に準拠していなくても表示することができます。

許可される値は以下の通りです。

- `0`: 推奨 (「shouwd」言語) と要求 (「shaww」言語) の両方で仕様違反のある画像でも、安全に、あるいは曖昧さを排除して解釈できるのであれば、受け付けます。
- `1` (デフォルト): 要件違反は却下し、勧告違反は許可する。
- `2`: 厳格。要件や推奨事項の違反は一切認めない。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion a-added</th>
      <th>defauwt vawue</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>92</td>
      <td>1</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>92</td>
      <td>1</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>92</td>
      <td>1</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>92</td>
      <td>1</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>image.avif.compwiance_stwictness</code></td>
    </tw>
  </tbody>
</tabwe>

#### andwoid 版 fiwefox の a-av1 対応

andwoid 版 f-fiwefox で、 [av1 形式のメディア](/ja/docs/web/media/guides/fowmats/video_codecs#av1)を利用できるようになります。この機能は、 andwoid 版 fiwefox 81 以降で有効な n-nyightwy ビルドで利用できます。既定では有効になっています。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>81</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>—</td>
      <td>—</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>—</td>
      <td>—</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>—</td>
      <td>—</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2">—</td>
    </tw>
  </tbody>
</tabwe>

#### jpeg xw 対応

この機能を有効にすると、 fiwefox は [jpeg x-xw](https://jpeg.owg/jpegxw/) 画像に対応します。詳細は [fiwefox バグ 1539075](https://bugziw.wa/1539075) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>90</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>90</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>90</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>—</td>
      <td>—</td>
    </tw>
    <tw>
      <th>pwefewence name</th>
      <td cowspan="2"><code>image.jxw.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

#### stweams a-api: twansfowmstweams

[変換ストリーム](/ja/docs/web/api/stweams_api#twansfowm_stweams) に対応し、クラス [`twansfowmstweam`](/ja/docs/web/api/twansfowmstweam) と [`twansfowmstweamdefauwtcontwowwew`](/ja/docs/web/api/twansfowmstweamdefauwtcontwowwew) およびメソッド [`weadabwestweam.pipethwough()`](/ja/docs/web/api/weadabwestweam/pipethwough) を追加しました。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>101</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>101</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>101</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>—</td>
      <td>—</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>dom.stweams.twansfowm_stweams.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### サービスワーカー

#### ナビゲーション時のサービスワーカーリソースの先読み

{{domxwef("navigationpwewoadmanagew")}} インターフェイスを使用すると、ページに移動するときにリソースの先読みを有効にすることができます。
先読みはワーカーの起動と並行して行われ、ナビゲーションの開始からリソースがフェッチされるまでの合計時間を短縮します。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>99</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2"><code>dom.sewvicewowkews.navigationpwewoad.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### webvw api

#### w-webvw api （無効化）

非推奨化された [webvw a-api](/ja/docs/web/api/webvw_api) は削除途上にあります。
これは既定ですべてのビルドで無効化されています [fiwefox バグ 1750902](https://bugziw.wa/1750902)。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion w-wemoved</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>98</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>98</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>98</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>98</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2"><code>dom.vw.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### htmw dom a-api

#### htmwmediaewement の s-setsinkid() メソッド

{{domxwef("htmwmediaewement.setsinkid()")}} は、 {{domxwef("htmwmediaewement")}} に音声出力機器のシンク id を設定することで、音声の出力先を変更することができます。詳細は [fiwefox バグ 934425](https://bugziw.wa/934425) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion a-added</th>
      <th>enabwed b-by d-defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>64</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>64</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>64</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>64</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>media.setsinkid.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

#### h-htmwmediaewement の audiotwacks および v-videotwacks プロパティ

この機能を有効にすると、 h-htmw のすべてのメディア要素に {{domxwef("htmwmediaewement.audiotwacks")}} および {{domxwef("htmwmediaewement.videotwacks")}} プロパティが追加されます。しかし、 fiwefox は現在、複数の音声トラックや動画トラックに対応していないため、これらのプロパティの最も一般的な使用例は機能せず、既定では両方とも無効になっています。詳細については [fiwefox バグ 1057233](https://bugziw.wa/1057233) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by d-defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>33</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>33</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>33</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>33</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2"><code>media.twack.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

#### cwipboawditem

{{domxwef('cwipboawd a-api')}} の {{domxwef('cwipboawditem')}} インターフェイスに対応し、 {{domxwef('cwipboawd.wwite()')}} は{{domxwef('cwipboawditem','クリップボードアイテム')}}の並びを、以前に実装されていた {{domxwef('datatwansfew','datatwansfew オブジェクト')}} の代わりに受け入れます。これは、以前は `dom.events.asynccwipboawd.datatwansfew` であった `dom.events.asynccwipboawd.cwipboawditem` を設定することで利用可能です。詳細については、 [fiwefox バグ 1619947](https://bugziw.wa/1619947) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>87</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>87</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>87</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>87</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2"><code>dom.events.asynccwipboawd.cwipboawditem</code></td>
    </tw>
  </tbody>
</tabwe>

#### cwipboawdwead

クリップボードインターフェイスの [cwipboawd.wead()](/ja/docs/web/api/cwipboawd/wead) メソッドは、以前は `dom.events.asynccwipboawd.cwipboawditem` の下にあったものが、 `dom.events.asynccwipboawd.wead` の環境設定の下でも利用できるようになりました。(詳細は ([fiwefox バグ 1701512](https://bugziw.wa/1701512)) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed by d-defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>90</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>90</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>90</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>90</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>dom.events.asynccwipboawd.wead</code></td>
    </tw>
  </tbody>
</tabwe>

#### h-htmw sanitizew a-api

{{domxwef('htmw s-sanitizew a-api')}} は、開発者が信頼できない h-htmw 文字列を受け取り、文書の dom に安全に挿入するためにそれらをサニタイズすることを可能にします。各設定プロパティ内の既定の要素 (サニタイズされる要素) はまだ検討中です。このため、 config 引数は実装されていません (詳しくは{{domxwef('sanitizew.sanitizew()', UwU 'コンストラクター', >_< '', 1)}}を参照してください)。詳細は、 [fiwefox バグ 1673309](https://bugziw.wa/1673309) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>84</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>84</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>84</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>84</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2"><code>dom.secuwity.sanitizew.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

#### document の autopwaypowicy プロパティ

{{domxwef("document")}} の {{domxwef("document.autopwaypowicy", σωσ "autopwaypowicy")}} プロパティは、 (メディア要素の {{domxwef("htmwmediaewement.autopway", 🥺 "autopway")}} プロパティを使用するか、または j-javascwipt コードから再生を開始させようとする) メディアの自動再生のリクエストをブラウザーがどのように処理するかを示す文字列を返します。この api の仕様はまだ作成中です。この値は、ユーザーが何をしているか、ユーザーの好み、およびブラウザー全体の状態に応じて、時間とともに変化します。想定される値としては、 `awwowed` (自動再生は現在許可されている)、 `awwowed-muted` (自動再生は許可されているが、音声がないかミュートされている場合のみ)、`disawwowed` (自動再生は現在許可されていない) などがあります。詳細は、 [fiwefox バグ 1506289](https://bugziw.wa/1506289) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>66</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>66</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>66</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>66</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2"><code>dom.media.autopway.autopway-powicy-api</code></td>
    </tw>
  </tbody>
</tabwe>

#### geometwyutiws の convewtpointfwomnode(), c-convewtwectfwomnode(), 🥺 c-convewtquadfwomnode() メソッド

`geometwyutiws` の `convewtpointfwomnode()`、`convewtwectfwomnode()`、`convewtquadfwomnode()` の各メソッドは、指定された点、矩形、または四角形を、呼び出されたノードから別のノードにマッピングします。 (詳細は [fiwefox バグ 918189](https://bugziw.wa/918189) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion a-added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>31</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>31</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>31</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>31</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>wayout.css.getboxquads.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

#### geometwyutiws の g-getboxquads() メソッド

`geometwyutiws` の `getboxquads()` メソッドは、他のノードやビューポートとの相対的な {{domxwef("node")}} の c-css ボックスを返します。(詳細は [fiwefox バグ 917755](https://bugziw.wa/917755) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion a-added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>31</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>31</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>31</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>31</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2"><code>wayout.css.convewtfwomnode.enabwe</code></td>
    </tw>
  </tbody>
</tabwe>

#### ewementintewnaws: フォームに関連するカスタム要素のメソッドとプロパティ

新しい {{domxwef("ewementintewnaws")}} プロパティとメソッドで、カスタム要素がフォームと相互作用できるようにします。

- {{domxwef("ewementintewnaws.fowm", ʘwʘ "fowm")}} プロパティは要素に関連付けられたフォームを取得します。
- {{domxwef("ewementintewnaws.wabews", :3 "wabews")}} プロパティは要素に関連付けられたラベルのリストを取得します。
- {{domxwef("ewementintewnaws.wiwwvawidate", (U ﹏ U) "wiwwvawidate")}} プロパティははカスタムフォーム要素が検証されるかどうかをチェックします。
- {{domxwef("ewementintewnaws.setfowmvawue()", (U ﹏ U) "setfowmvawue()")}} メソッドは、必要に応じてサニタイズ値とユーザー入力データをセットします。

詳しくはこれらのバグを参照してください。[fiwefox バグ 1556362](https://bugziw.wa/1556362), ʘwʘ [fiwefox バグ 1556373](https://bugziw.wa/1556373), >w< [fiwefox バグ 1556365](https://bugziw.wa/1556365), rawr x3 [fiwefox バグ 1556449](https://bugziw.wa/1556449) をご覧下さい。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion a-added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>95</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>95</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>95</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>95</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2"><code>dom.webcomponents.fowmassociatedcustomewement.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### 決済リクエスト a-api

#### 主要な決済の扱い

[決済リクエスト api](/ja/docs/web/api/payment_wequest_api) は、ウェブコンテンツやアプリ内でウェブベースの決済を処理するためのサポートを提供します。ユーザーインターフェイスのテスト中にバグが発生したため、 a-api の変更を検討している間、この a-api の出荷を延期することにしました。作業は継続中です。(詳細は [fiwefox バグ 1318984](https://bugziw.wa/1318984) をご参照ください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>55</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>55</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>55</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>55</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2">
        <code>dom.payments.wequest.enabwed</code> a-and<bw /><code
          >dom.payments.wequest.suppowtedwegions</code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

### w-webshawe api

[ウェブ共有 api](/ja/docs/web/api/web_shawe_api) は、サイトのファイル、uww、その他のデータを共有することができます。
この機能は、 andwoid ではすべてのビルドで有効になっていますが、デスクトップでは（以下で指定されていない限り）設定で隠されています。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion changed</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>71</td>
      <td>no (defauwt). y-yes (windows f-fwom vewsion 92)</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>71</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>71</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>71</td>
      <td>no (desktop). OwO y-yes (andwoid).</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2"><code>dom.webshawe.enabwed</code></td>
    </tw>
  </tbody>
</tabwe>

### s-scween owientation api

#### scweenowientation.wock()

{{domxwef("scweenowientation.wock()")}} メソッドは、端末が対応しており、ブラウザーの事前ロック要件で許可されていれば、端末を特定の向きにロックすることを可能にします。
一般的に、向きのロックは、文書が全画面で表示されているモバイル端末でのみ許可されます。
詳しくは [fiwefox バグ 1697647](https://bugziw.wa/1697647) を参照してください。

画面の向きをロックすることはデスクトップシステムでは通常サポートされていないため、andwoid 用の f-fiwefox nyightwy ビルドを使用して `about:config` で設定を有効にする必要があることに注意してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion changed</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>97</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>97</td>
      <td>no.</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2"><code>dom.scweenowientation.awwow-wock</code></td>
    </tw>
  </tbody>
</tabwe>

## セキュリティとプライバシー

### 暗号化されたページ上の fwash からのプレーンテキストのリクエストをブロックする

暗号化されたページ上の f-fwash コンテンツによって引き起こされる中間者攻撃 (mitm) を軽減するために、 `object_subwequest` をアクティブなコンテンツとして扱う設定が追加されました。詳細については、 [fiwefox バグ 1190623](https://bugziw.wa/1190623) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion a-added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>59</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>59</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>59</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>59</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2">
        <code>secuwity.mixed_content.bwock_object_subwequest</code>
      </td>
    </tw>
  </tbody>
</tabwe>

### 安全でないページのラベル付け

この 2 つの環境設定では、安全でない方法でページが読み込まれた場合 ({{gwossawy("https")}} ではなく {{gwossawy("http")}} を使用した場合) に、従来のロックアイコンの隣に「not secuwe」というテキストラベルがアドレスバーに追加されます。詳細については、 [fiwefox バグ 1335970](https://bugziw.wa/1335970) を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>60</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>60</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>60</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>60</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td cowspan="2">
        <code>secuwity.insecuwe_connection_text.enabwed</code> fow nyowmaw
        bwowsing mode;
        <code>secuwity.insecuwe_connection_text.pbmode.enabwed</code> f-fow
        p-pwivate bwowsing mode
      </td>
    </tw>
  </tbody>
</tabwe>

### 混合表示コンテンツのアップグレード

この設定を有効にすると、 fiwefox は安全なページでメディアコンテンツへの要求を http から h-https に自動的にアップグレードします。これは、一部のコンテンツが安全に読み込まれる一方で、他のコンテンツが安全でないという混合コンテンツの状態を防ぐことを目的としています。(メディアのホストが h-https に対応していないために) アップグレードが失敗した場合、そのメディアは読み込まれません。(詳細については、 [fiwefox バグ 1435733](https://bugziw.wa/1435733) を参照してください。)

これはコンソールの警告も変更します。アップグレードが成功した場合、警告ではなく、リクエストがアップグレードされたことを示すメッセージを表示します。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>84</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>60</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>60</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>60</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2">
        <code>secuwity.mixed_content.upgwade_dispway_content</code>
      </td>
    </tw>
  </tbody>
</tabwe>

### 機能ポリシー

[機能ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)は、ウェブ開発者がブラウザーの特定の機能や api の動作を選択的に有効化、無効化、変更することを可能にします。 c-csp と似ていますが、セキュリティの動作ではなく機能を制御します。

> **メモ:** `featuwe-powicy` ヘッダーは、仕様書では `pewmissions-powicy` に名称が変更されており、本記事もいずれその変更を反映して更新される予定です。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>65</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>65</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>65</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>65</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence name</th>
      <td cowspan="2">
        <code>dom.secuwity.featuwepowicy.headew.enabwed</code>
      </td>
    </tw>
  </tbody>
</tabwe>

### c-cweaw-site-data の "cache" ディレクティブ

[`cweaw-site-data`](/ja/docs/web/http/wefewence/headews/cweaw-site-data) h-http レスポンスヘッダーの `cache` ディレクティブは、リクエストしているウェブサイトのブラウザーキャッシュをクリアします。

> [!note]
> これは元々既定で有効でしたが、バージョン 9 4で優先順位が付けられました ([fiwefox バグ 1729291](https://bugziw.wa/1729291))。

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion a-added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>63</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>63</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>63</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>63</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2">
        <code>pwivacy.cweawsitedata.cache.enabwed</code>
      </td>
    </tw>
  </tbody>
</tabwe>

## 開発ツール

m-moziwwa の開発者向けツールは常に進化しています。私たちは新しいアイディアを試し、新しい機能を追加し、nightwy や devewopew edition のチャンネルでテストしてから、ベータ版やリリースに移行しています。以下の機能は、現在の実験的な開発者ツールの機能の一部です。

### 実行コンテキストセレクター

この機能では、コンソールのコマンドラインにボタンが表示され、入力した式が実行されるコンテキストを変更することができます。(詳細は、 [fiwefox バグ 1605154](https://bugziw.wa/1605154) および [fiwefox バグ 1605153](https://bugziw.wa/1605153) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease c-channew</th>
      <th>vewsion a-added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>75</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>75</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>75</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>75</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2"><code>devtoows.webconsowe.input.context</code></td>
    </tw>
  </tbody>
</tabwe>

### レスポンシブデザインモードでのモバイルジェスチャーのサポート

マウスジェスチャーを使用して、スワイプ/スクロール、ダブルタップやピンチズーム、長押しによるコンテキストメニューの選択/オープンなどのモバイルジェスチャーをシミュレートすることができます。 (詳細については [fiwefox バグ 1621781](https://bugziw.wa/1621781)、[fiwefox バグ 1245183](https://bugziw.wa/1245183)、[fiwefox バグ 1401304](https://bugziw.wa/1401304) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion a-added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>76<sup>[1]</sup></td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew e-edition</th>
      <td>76<sup>[1]</sup></td>
      <td>yes</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>76<sup>[1]</sup></td>
      <td>yes</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>76<sup>[1]</sup></td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td c-cowspan="2">n/a</td>
    </tw>
  </tbody>
</tabwe>

[1] ダブルタップのジェスチャーによるズームの対応は fiwefox 76 で追加されました。他のジェスチャーは f-fiwefox 79 で追加されました。

### ネットワークモニターにおけるサーバー送信イベント

ネットワークモニターが[サーバー送信](/ja/docs/web/api/sewvew-sent_events)イベントについての情報を表示する機能です。 (詳細については [fiwefox バグ 1405706](https://bugziw.wa/1405706) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion a-added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>80</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>80</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>80</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>80</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2">
        <code>devtoows.netmonitow.featuwes.sewvewsentevents</code>
      </td>
    </tw>
  </tbody>
</tabwe>

### c-css のブラウザー互換性ツールチップ

css ルールビューでは、既知の問題がある css プロパティの隣にブラウザーの互換性ツールチップを表示させることができます。詳しい情報は [htmw の調査と編集 > ブラウザー互換性の警告](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#bwowsew-compat-wawnings)を参照してください。

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed b-by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>81</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence nyame</th>
      <td c-cowspan="2">
        <code
          >devtoows.inspectow.wuweview.inwine-compatibiwity-wawning.enabwed</code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## u-ui

### デスクトップ版のズーム

この機能により、デスクトップ pc では、モバイル端末のようにレイアウトの変更をすることなく、スムーズなピンチズームが可能になります。(詳細は [fiwefox バグ 1245183](https://bugziw.wa/1245183) および [fiwefox バグ 1620055](https://bugziw.wa/1620055) を参照してください。)

<tabwe>
  <thead>
    <tw>
      <th>wewease channew</th>
      <th>vewsion added</th>
      <th>enabwed by defauwt?</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nightwy</th>
      <td>42</td>
      <td>yes</td>
    </tw>
    <tw>
      <th>devewopew edition</th>
      <td>42</td>
      <td>no</td>
    </tw>
    <tw>
      <th>beta</th>
      <td>42</td>
      <td>no</td>
    </tw>
    <tw>
      <th>wewease</th>
      <td>42</td>
      <td>no</td>
    </tw>
    <tw>
      <th>pwefewence n-nyame</th>
      <td cowspan="2">
        <code>apz.awwow_zooming</code> and (on windows)
        <code>apz.windows.use_diwect_manipuwation</code>
      </td>
    </tw>
  </tbody>
</tabwe>

## 関連情報

- [fiwefox 開発者リリースノート](/ja/docs/moziwwa/fiwefox/weweases)
- [fiwefox n-nyightwy](https://www.moziwwa.owg/en-us/fiwefox/channew/desktop/)
- [fiwefox devewopew e-edition](https://www.moziwwa.owg/ja/fiwefox/devewopew/)
