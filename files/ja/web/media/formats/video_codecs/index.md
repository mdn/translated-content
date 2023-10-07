---
title: ウェブ動画コーデックガイド
slug: Web/Media/Formats/Video_codecs
l10n:
  sourceCommit: f4d0f3108387f84fa235e070ef2e4ca28d8a5618
---

{{QuickLinksWithSubpages("/ja/docs/Web/Media")}}

このガイドでは、ウェブ上で使用する可能性の高い、または使用を検討している動画コーデックを紹介し、その機能の概要と互換性や有用性に関する懸念、そして自分のプロジェクトの動画に適したコーデックを選ぶためのアドバイスを提供します。

非圧縮動画データはサイズが大きいため、格納するのはもちろん、ネットワークで転送するにも、大幅に圧縮する必要があります。非圧縮動画を格納するために必要なデータ量を想像してみてください。

- ハイビジョン (1920x1080) のフルカラー（1 ピクセル 4 バイト）動画は単一のフレームで 8,294,400 バイトになります。
- 一般的な 30 フレーム/秒の HD 動画では、 1 秒間に 248,832,000 バイト (\~249MB) を占めることになる。
- 1 分間の HD 動画なら 14.93GB のストレージが必要です。
- 一般的な 30 分のビデオ会議では約 447.9GB、 2 時間の動画では約 1.79**TB**（つまり 1790GB）のストレージが必要となります。

必要なストレージ容量が膨大になるだけでなく、非圧縮の動画を伝送するために必要なネットワーク帯域も、音声やオーバーヘッドを含めない場合、 249MB/秒と膨大な量になります。そこで、動画コーデックの出番となります。音声コーデックが音声データを圧縮するように、動画コーデックは動画データを圧縮し、後でデコードして再生や編集ができる形式にエンコードします。

ほとんどの動画コーデックは、デコードされた動画が原版と正確に一致しないという意味で、**非可逆的**です。コーデックやその設定によって異なりますが、一般的には、圧縮を強くすればするほど、細部や忠実度が失われることになります。可逆圧縮コーデックも存在しますが、一般的にはネットワーク上で使用するよりも、アーカイブやローカル再生のための保存に使用されます。

## よくあるコーデック

以下の動画コーデックは、ウェブで最も一般的に使用されているものです。各コーデックについて、対応するコンテナー（ファイル形式）も掲載されています。各コーデックには、特定の機能や注意すべき互換性の問題など、そのコーデックに関する詳細な情報を提供する下記の節へのリンクがあります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">コーデック名 (短縮)</th>
      <th scope="col">完全なコーデック名</th>
      <th scope="col">対応するコンテナー</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#av1">AV1</a></th>
      <td>AOMedia Video 1</td>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#avc_h.264">AVC (H.264)</a></th>
      <td>Advanced Video Coding</td>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#h.263">H.263</a></th>
      <td>H.263 Video</td>
      <td><a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#hevc_h.265">HEVC (H.265)</a></th>
      <td>High Efficiency Video Coding</td>
      <td><a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#mp4v-es">MP4V-ES</a></th>
      <td>MPEG-4 Video Elemental Stream</td>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-1_part_2_video">MPEG-1</a></th>
      <td>MPEG-1 Part 2 Visual</td>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Part 2 Visual</td>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#theora">Theora</a></th>
      <td>Theora</td>
      <td><a href="/ja/docs/Web/Media/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp8">VP8</a></th>
      <td>Video Processor 8</td>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp9">VP9</a></th>
      <td>Video Processor 9</td>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
  </tbody>
</table>

## エンコードされた動画に影響を与える要素

どのエンコーダーでもそうですが、エンコードされた動画の容量と品質に影響を与える基本的な 2 つの要因のグループがあります。原本の動画の形式とコンテンツに関する特定の仕様と、動画をエンコードするときに使用されるコーデックの仕様と構成です。

最も単純なガイドラインは、エンコードされた動画が圧縮されていない元の動画により近く見えるようにするものは、一般的に結果として得られるデータも大きくなるということです。したがって、常にサイズと品質のトレードオフになります。状況によっては、データサイズを小さくするために品質を犠牲にすることは、失われた品質に見合うものです。他にも、品質の損失は受け入れられず、結果としてファイルが大きくなるコーデック設定を受け入れる必要がある場合もあります。

### エンコード出力における元の動画形式の影響について

元の動画形式が出力にどのように影響するかは、コーデックとそれがどのように動作するかによって異なります。コーデックがメディアを内部ピクセル形式に変換したり、他にも単純なピクセル以外の方法で画像を表したりする場合、元の画像の形式は、何の違いも生じません。しかし、フレームレートや、当然ながら解像度といったものは、メディアの出力サイズに常に影響を及ぼします。

さらに、すべてのコーデックには長所と短所があります。特定の図形やパターンが苦手なもの、シャープなエッジを再現するのが苦手なもの、暗部のディテールが失われがちなものなど、さまざまな可能性があります。これらはすべて、基本的なアルゴリズムと数学に依存しているのです。

<table class="standard-table">
  <caption>
    元の動画形式やコンテンツが、エンコードされた動画の品質やサイズに与える潜在的な影響
  </caption>
  <thead>
    <tr>
      <th scope="row">特性</th>
      <th scope="col">品質への影響</th>
      <th scope="col">サイズへの影響</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">色深度（ビット深度）</th>
      <td>
        色のビット深度が高いほど、動画の色の忠実さの品質は高くなります。さらに、画像の飽和部分（つまり、明るく純粋な赤 [<code>rgba(255, 0, 0, 1)</code>] など、色が純粋で強い部分）では、 1 成分あたり 10 ビット（10 ビットカラー）未満の色深度は、色の可視段差なしで勾配を表現できないバンディング（帯状）を可能にします。
      </td>
      <td>
        コーデックによっては、色深度が高いほど圧縮ファイルサイズが大きくなる場合があります。決定要因は、圧縮されたデータにどのような内部ストレージ形式を使用するかです。
      </td>
    </tr>
    <tr>
      <th scope="row">フレームレート</th>
      <td>
        主に、画像内の動きの滑らかさの知覚に影響を与えます。この点については、フレームレートが高いほど、動きはより滑らかでリアルに現れます。最終的には、この点を返すようになります。詳細は下記の<a href="#reduced_frame_rate">フレームレート</a>を参照してください。
      </td>
      <td>
        エンコード時にフレームレートを下げないことを想定すると、フレームレートが高いほど圧縮された動画サイズは大きくなります。
      </td>
    </tr>
    <tr>
      <th scope="row">動き</th>
      <td>
        動画の圧縮は通常、フレームを比較してその違いを見つけ、前のフレームを更新して次のフレームの見え方を近似させるのに十分な情報を含むレコードを構築することによって動作します。連続するフレームが互いに異なる形であればあるほど、その差は大きくなり、圧縮された動画にアーティファクトが生じるのを避けるために、圧縮の効果は低くなります。
      </td>
      <td>
        動きによって生じる複雑さは、フレーム間の差異の数が多くなるため、中間フレームが大きくなります。この理由と他の理由から、動画に動きがあるほど、出力ファイルは通常より大きくなります。
      </td>
    </tr>
    <tr>
      <th scope="row">ノイズ</th>
      <td>
        画像ノイズ（フィルムグレイン効果、ダスト、その他の画像の粗さなど）により、ばらつきが生じます。一般に、ばらつきがあると圧縮が難しくなり、同じ圧縮率を達成するために細部を落とす必要があるため、品質が損なわれます。
      </td>
      <td>
        画像にノイズなどの変動があると、圧縮処理が複雑になり、アルゴリズムが同じ程度に画像を圧縮する成功率は低くなります。ノイズによって発生する変動の一部またはすべてを無視する方法でエンコーダーを構成しない限り、圧縮された動画はより大きくなります。
      </td>
    </tr>
    <tr>
      <th scope="row">解像度（幅と高さ）</th>
      <td>
        同じ画面内へ表示するのであれば、解像度の高い動画の方が、圧縮時に生じた影響を除けば、元のシーンをより正確に描写することができます。
      </td>
      <td>
        動画の解像度が高くなればなるほど、動画は大きくなります。これは、動画の最終的なサイズに重要な役割を果たします。
      </td>
    </tr>
  </tbody>
</table>

これらがどの程度エンコード後の動画に影響するかは、使用するエンコーダーや その設定方法など、状況の詳細によって異なります。一般的なコーデックオプションに加えて、エンコーダーは、エンコード中にフレームレートを下げたり、ノイズを除去したり、動画の全体的な解像度を下げたりするように構成されることがあります。

### コーデック構成がエンコーダー出力に与える影響

動画をエンコードするために使用されるアルゴリズムは、一般的に、そのエンコードを実行するために、いくつかの一般的な技術のうちの1つ以上を使用しています。一般的に言って、動画の出力サイズを縮小するようにオプションを構成すると、おそらく動画の全体的な品質に悪影響を及ぼすか、または動画にある種のアーティファクトをもたらすことになります。また、可逆形式のエンコードを選択することも可能で、その場合、エンコードされたファイルのサイズは大きくなりますが、デコード時に元の動画が完全に再現されるようになります。

さらに、それぞれのエンコーダーユーティリティは、元の動画を処理する方法に異なる形にすることがあり、その結果、出力の品質やサイズに差異が生じることがあります。

<table class="standard-table">
  <caption>
    動画エンコーダーの構成が品質とサイズに与える影響
  </caption>
  <thead>
    <tr>
      <th scope="row">機能</th>
      <th scope="col">品質への影響</th>
      <th scope="col">サイズへの影響</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">可逆圧縮</th>
      <td>品質が損なわれない</td>
      <td>
        可逆圧縮は、非可逆圧縮ほど動画全体のサイズを縮小することができないため、結果的にファイルサイズが大きくなり、一般的な使用には適さない可能性があります。
      </td>
    </tr>
    <tr>
      <th scope="row">非可逆圧縮</th>
      <td>
        コーデックの仕様や圧縮率によって、ある程度はアーティファクトや他の形式での品質劣化が発生します。
      </td>
      <td>
        エンコードされた動画が元の動画から逸脱することが許されるほど、高い圧縮率を達成することが容易になります。
      </td>
    </tr>
    <tr>
      <th scope="row">品質の設定</th>
      <td>
        品質設定が高いほど、エンコードされた動画はより元メディアに近い見栄えになります。
      </td>
      <td>
        一般に、画質を高く設定するとエンコードされる動画ファイルのサイズが大きくなりますが、その程度はコーデックによって異なります。
      </td>
    </tr>
    <tr>
      <th scope="row">ビットレート</th>
      <td>一般的にビットレートが高くなると品質が向上します。</td>
      <td>ビットレートが高いほど、出力ファイルのサイズが大きくなります。</td>
    </tr>
  </tbody>
</table>

動画をエンコードするときに利用できるオプションと、それらのオプションに割り当てられる値は、コーデックによってだけでなく、使用するエンコーディングソフトウェアによっても異なります。これらのオプションがエンコードされた動画に与える特定の度合いを理解するためには、エンコードソフトウェアに記載されているドキュメントが役に立ちます。

## 圧縮時のアーティファクト

**アーティファクト**とは、非可逆エンコーダーの処理で、データが失われたり再配置されたりして、目に見えて悪影響を及ぼす辺りのことです。アーティファクトが一度現れると、動画がどのように表示されるかによって、しばらくの間、その状態が続くことがあります。動画のそれぞれのフレームは、現在表示されているフレームに設定された変更を適用して表示されます。つまり、エラーやアーティファクトは時間とともに蓄積され、グリッチや奇妙な、あるいは予期せぬ画像の逸脱が発生し、それがしばらく続くことになるのです。

これを解決し、動画データのシーク時間を改善するために、動画ファイルに定期的に**キーフレーム**（**イントラフレーム**または **i フレーム**とも呼ばれる）を配置しています。キーフレームはフルフレームで、現在見えているダメージやアーティファクトの残りを修復するために使用されます。

### エイリアシング

エイリアシングとは、エンコーダーのデータから再構成されたときに、圧縮前と同じようには見えなくなるものの総称です。エイリアシングにはさまざまな形のものがありますが、最も一般的なものは次のとおりです。

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="Moiré_patterns">モアレ模様</h4>
        <p>
          <a href="https://ja.wikipedia.org/wiki/%E3%83%A2%E3%82%A2%E3%83%AC"
            ><strong>モアレ模様</strong></a
          >とは、元画像のパターンとエンコーダーの処理方法が空間的にわずかにずれているときに発生する大規模な空間干渉模様のことです。エンコーダーで発生したアーチファクトは、デコードする際に画像パターンに奇妙な渦巻き状の効果をもたらします。
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="モアレ模様により波のような渦巻きを示すレンガ壁" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">階段効果</h4>
        <p>
          <strong>階段効果</strong>とは、本来は滑らかなはずの斜めの直線や曲線のエッジがギザギザになり、まるで階段の集合体のように見える空間表現です。アンチエイリアス」フィルターで低減される効果です。
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          階段効果を発生させるエイリアシングにより、斜め線が階段のように見える写真
          " src="staircase-effect.jpg"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">ワゴンホイール効果</h4>
        <p>
          <strong>ワゴンホイール効果</strong>（または<strong><a ref="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AD%E3%83%9C%E5%8A%B9%E6%9E%9C">ストロボ効果</a></strong>）とは、映画でよく見られる視覚効果で、フレームレートと圧縮アルゴリズムの相互作用により、回転する車輪が誤った速度で回転して見えたり、逆に回転して見えたりするものです。鉄道の線路や、道路の横に並んでいる柱など、移動する繰り返しパターンでも同じような効果が発生することがあります。これは時間的（時刻的）エイリアシングの問題で、回転の速さが圧縮やエンコーダーの際に行われるサンプリングの周波数と干渉するためです。
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="エイリアシングによる車輪の回転で、ワゴンホイール効果が発生します。" src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### カラーエッジング

**カラーエッジング**は、シーン内の色付きオブジェクトのエッジに沿って混入した偽の色として表示される視覚的アーチファクトの一種です。これらの色は、フレームのコンテンツと意図的な色の関係がありません。

### 鮮明度の低下

動画をエンコードする過程でデータを削除するため、細部が失われることがあります。十分な圧縮が適用されると、画像の一部またはすべてが鮮明さを失い、わずかにぼやけた、またはかすんだ外観になる可能性があります。

テキスト、特に小さなテキストは、とても細部が重要なコンテンツであるため、わずかな変化でも読みやすさに大きな影響を与える可能性があります。

### リンギング

非可逆圧縮アルゴリズムでは、圧縮アルゴリズムによって生成された色のついたピクセルがオブジェクトの外側に混入する **[リンギング](https://en.wikipedia.org/wiki/Ringing_artifacts)** が発生することがあります。これは、オブジェクトとその背景の間の鋭い境界をまたぐブロックを使用するアルゴリズムで発生します。これは特に圧縮レベルが高い場合によく見られます。

[![リンギング効果の例](ringing-effects.png)](ringing-effects.png)

上の星の縁の周りにある青とピンクのフリンジに注目してください（他にも手順やその他の重要な圧縮アーチファクトもあります）。これらのフリンジは、リンギング効果です。リンギングは[モスキートノイズ](#モスキートノイズ)といくつかの点で似ていますが、リンギングがほぼ一定で変化しないのに対し、モスキートノイズは揺らいだり移動したりするのが特徴です。

リンギングは、画像に格納されたテキストを特に読みにくくするアーチファクトの一種で す。

### ポスタリゼーション

**ポスタリゼーション**は、圧縮によってグラデーションの色の詳細が失われた場合に発生します。ある領域のさまざまな色が滑らかに変化する代わりに、画像は元の画像の外観に近い色の塊となり、ブロック化します。

[![白頭ワシの写真で、解像度がにじんでいる。](posterize-effect.jpg)](posterize-effect.jpg)

上の写真のハクトウワシ（と背景のユキフクロウ）の羽の色がブロック状になっていることに注目してください。羽の細部は、このようなポスタリゼーション・アーチファクトによって、ほとんど失われています。

### コンターリング

**コンターリング**または**カラーバンディング**は、ポスタリゼーションの特定の一形態で、色ブロックが画像内で帯または縞を形成します。これは、動画が粗すぎる量子化構成でエンコードされている場合に発生します。その結果、動画のコンテンツは、滑らかなグラデーションや遷移の代わりに、色から色への遷移が突然で、色の帯が現れる「層状」な外観を示すようになるのです。

[![圧縮により輪郭が生じた画像の例](contouring-effect.jpg)](contouring-effect.jpg)

上の画像の例では、空の色が地平線に向かって変化する際に、一貫したグラデーションではなく、異なる色調の青の帯が存在していることに注目してください。これがコンターリング効果です。

### モスキートノイズ

**モスキートノイズ**は、エッジのきついオブジェクトのエッジの外側や、前景オブジェクトと背景の間の急激な遷移にほぼ従う、ノイズや**エッジのビジー状態**として表示されるテンポラルアーティファクトです。この効果は、[リンギング](#リンギング)と同様に現れることがあります。

![圧縮によりモスキートノイズが発生した画像の例。](mosquito-effect-sm.png)

上の写真では、橋の周りの空など、様々な場所にモスキートノイズが記載されています。右上に、モスキートノイズが発生している画像の一部をクローズアップして示しています。

モスキートノイズは MPEG 動画に最も多く見られますが、離散コサイン変換 (DCT) アルゴリズムを使用する場合には必ず発生し、例えば JPEG 静止画にも現れます。

### 動き補償ブロック境界のアーチファクト

動画の圧縮は一般に、 2 つのフレームを比較し、その違いを 1 フレームずつ動画の終わりまで記録することで作業します。この手法は、カメラがその場に固定されていたり、フレーム内のオブジェクトが比較的静止している場合にはうまく動作しますが、フレーム内に大きな動きがある場合には、フレーム間の差分の数が非常に多くなり、圧縮がうまくいかないことがあります。

**[動き補償](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E9%96%93%E4%BA%88%E6%B8%AC)** とは、（カメラやフレーム内のオブジェクトの）動きを見て、動いているオブジェクトが各方向に何ピクセルずつ移動したかを判断する技術です。そして、その移動量は、その移動量だけでは記述できない移動したピクセルの記述とともに格納されます。要するに、エンコーダーは移動するオブジェクトを見つけ、元画像のような内部フレームを構築し、すべてのオブジェクトが新しい位置に移されるようにするのです。理論的には、これが新しいフレームの出現を近似させます。そして、作業を完了するために、残りの差異が得られ、オブジェクトのシフトの集合とピクセルの差異の集合が新しいフレームを表すデータとして格納されます。このシフトとピクセル差を記述しているオブジェクトを**残差フレーム**と呼ばれます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">元のフレーム</th>
      <th scope="col" style="width: 216px">フレーム間の差異</th>
      <th scope="col" style="width: 216px">
        動き補償後の差異
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="動画の元フレーム" src="motion-comp-orig.jpg" /></td>
      <td><img alt="最初のフレームと次のフレームとの相違" src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="2 ピクセル右シフト後のフレーム間の差異"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        視聴者から見た最初のフルフレーム。
      </td>
      <td style="vertical-align: top">
        ここでは、最初のフレームと次のフレームとの間の差異のみが見えています。他はすべて黒です。よく見ると、この差分の大部分はカメラの水平移動によるもので、動き補償の良い候補であることがわかります。
      </td>
      <td style="vertical-align: top">
        異なるピクセルの数を最小にするために、ここではカメラのパンニングを考慮して、まず最初のフレームを 2 ピクセル分右にずらしてから、差分をとっています。これにより、カメラのパンニングが補正され、 2 つのフレームがより多く重なり合うようになります。
      </td>
    </tr>
    <tr>
      <th
        colspan="3"
        style="
          font: italic 0.9em Arial, x-locale-body, sans-serif;
          vertical-align: middle;
        "
      >
        Images from
        <a
          href="https://en.wikipedia.org/wiki/Motion_compensation#Illustrated_example"
          >Wikipedia</a
        >
      </th>
    </tr>
  </tbody>
</table>

動き補償には、一般的に2つの種類があります。**グローバルモーション補正**と**ブロックモーション補正**です。グローバルモーション補正は、一般的に、トラッキング、ドリー移動、パン、チルト、ローリング、上下移動などのカメラの動きを調整します。ブロックモーション補正は局所的な変化を処理し、モーション補正を使用してエンコードすることができる画像の小さな部分を探します。このブロックは通常、グリッド状に固定されたサイズですが、ブロックのサイズを変更したり、ブロックが重なることを許容する動き補償の形式があります。

しかし、動き補償によって発生するアーチファクトがあります。それは、ブロックの境界線に沿った急激なエッジという形式で発生し、偽リンギングなどのエッジ効果をもたらします。これは、残差フレームのコード化に関わる数学に起因するもので、次のキーフレームで修復される前に簡単に気づくものです。

### フレームサイズの縮小

状況によっては、動画ファイルの最終的なサイズを改善するために、動画の寸法を縮小することが有益な場合があります。サイズやスムーズな再生がすぐに失われることはマイナス要因ですが、慎重に判断することで最終的に良い結果が得られる場合があります。1080p の動画を 720p に縮小してからエンコードすると、より高い画質を保有しながらサイズを小さくすることができます。再生時に縮小しても、元の動画をフルサイズでエンコードしてサイズ要件を満たすために画質の劣化を受け入れるよりも良い結果になる場合があります。

### フレームレートの縮小化

同様に、動画からフレームを完全に削除し、フレームレートを下げて補正することができます。これには 2 つの好ましいことがあります。動画全体が小さくなることと、その小さいサイズによって動き補償がより多く達成されることです。例えば、フレーム間の動きのために 2 ピクセル離れている 2 つのフレームの動きの違いをコンピューターで計算する代わりに、他のフレームを 1 つ飛ばし、4 ピクセルの動きの違いを計算することができます。これにより、より少ない残差フレームでカメラ全体の動きを表現することができます。

人間の目でコンテンツが動きとして見えなくなるまでのフレームレートの絶対最小値は、 1 秒間に約 12 フレームです。それ以下になると、動画は静止画の羅列になってしまう。映画フィルムは通常1秒間に 24 フレーム、標準画質のテレビは 1 秒間に約 30 フレーム（それよりいくつか少ないが十分近い）、高画質のテレビは 1 秒間に 24 フレームから 60 フレームです。 24FPS 以上のものであれば、一般的に満足のいく滑らかさとみなされます。 30FPS または 60FPS は、ニーズに応じて理想的なターゲットとなります。

最終的に、どのようなものを犠牲にできるかは、あなたやあなたのデザインチーム次第です。

## コーデックの詳細

### AV1

**AOMedia Video 1** (**AV1**) コーデックは、インターネット動画に特化して [Alliance for Open Media](https://aomedia.org/) によって設計されたオープンな形式です。 [VP9](#vp9) や [H.265/HEVC](#hevc_h.265) よりも高いデータ圧縮率を実現し、 [AVC](#avc_h.264) よりも最大 50% 高い圧縮率を達成します。 AV1 は完全にロイヤリティフリーで、 {{HTMLElement("video")}} 要素と [WebRTC](/ja/docs/Web/API/WebRTC_API) の両方で使用するために設計されています。

AV1 は現在 3 つのプロファイルを提供しています。**メイン**、**ハイ**、**プロフェッショナル**の 3 つのプロファイルがあり、色深度やクロマサブサンプリングに対応したものが増えています。さらに、一連の**レベル**が指定され、それぞれが動画の属性の範囲に制限を定義しています。これらの属性には、フレーム寸法、ピクセル単位の画像領域、表示およびデコードレート、平均および最大ビットレート、エンコード/デコード処理で使用されるタイルおよびタイル列の数の制限などがあります。

例えば、 AV1 レベル 2.0 は最大フレーム幅 2048 ピクセル、最大フレーム高さ 1152 ピクセルですが、ピクセル単位の最大フレームサイズは 147456 なので、実際にはレベル 2.0 で 2048x1152 の動画にすることはできません。ただし、少なくとも Firefox と Chrome では、ソフトウェアデコードを実行するときにレベルは実際には無視され、デコーダーは指定された集合を与えられた動画を再生するために最善を尽くすだけであることはメモしておく必要があります。しかし、今後の互換性のために、選んだレベルの範囲内にとどめるべきです。

現時点での AV1 の最大の欠点は、とても新しく、ほとんどのブラウザーに対応するのがまだ途中であることです。また、エンコーダーやデコーダーはまだ性能の最適化が行われておらず、ハードウェアのエンコーダーやデコーダーはまだほとんど開発中で、生産されていません。このため、動画を AV1 形式にエンコードする際には、すべての作業をソフトウェアで行うため、とても長い時間を要します。

これらのことから、当分の間、 AV1 は動画コーデックの最初の選択肢にはなりませんが、将来的に使用する準備が整うのを見守る必要があります。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>
        <p>
          動画のレベルにより異なります。理論上の最大値はレベル 6.3 で 800Mbps に達します。
        </p>
        <p>
          各レベルの最大解像度とレートを記述している AV1 仕様書の<a href="https://aomediacodec.github.io/av1-spec/#levels"
            >レベル一覧表</a
          >を参照してください。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>
        レベルによって異なります。例: レベル 2.0 は最大 30FPS であるのに対し、レベル 6.3 は 120FPS に達することができます
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆の
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>
        8 x 8 ピクセル～ 65,535 x 65,535 ピクセルで、各寸法はこの間の任意の値を導くことができます。
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">プロファイル</th>
              <th scope="col">色深度</th>
              <th scope="col">色のサブサンプリング</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Main</th>
              <td>8 or 10</td>
              <td>4:0:0 （グレースケール）または 4:2:0</td>
            </tr>
            <tr>
              <th scope="row">High</th>
              <td>8 or 10</td>
              <td>4:0:0 （グレースケール）, 4:2:0, 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Professional</th>
              <td>8, 10, or 12</td>
              <td>4:0:0 （グレースケール）, 4:2:0, 4:2:2, 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AV1 対応</th>
              <td>70</td>
              <td>75</td>
              <td>67</td>
              <td>なし</td>
              <td>57</td>
              <td>なし</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td><a href="https://aomedia.org/">Alliance for Open Media</a></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf"
          >https://aomediacodec.github.io/av1-spec/av1-spec.pdf</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>ロイヤリティフリー、オープン標準</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

MPEG-4 仕様書群の **Advanced Video Coding** (**AVC**) 標準は、同一の ITU H.264 仕様書と MPEG-4 Part 10 仕様書によって規定されています。動き補償に基づくコーデックで、現在では放送テレビ、 {{Glossary("RTP")}} テレビ会議、ブルーレイディスクの動画コーデックなど、あらゆるメディアで広く使用されています。

AVC は柔軟性が高く、さまざまな機能を持つプロファイルがあります。例えば、 Constrained Baseline プロファイルは、ビデオ会議やモバイルのシナリオで使用するために設計されており、 Main プロファイル（一部の地域で標準画質のデジタルテレビに使用）や High プロファイル（ブルーレイディスクの動画に使用）より少ない帯域幅で使用します。ほとんどのプロファイルは 8 ビット色成分と 4:2:0 クロマサブサンプリングを使用しています。 High 10 プロファイルは 10 ビット色に対応しており、 High 10 の上級形式では 4:2:2 と 4:4:4 クロマサブサンプリングを追加しています。

AVC はまた、同じシーンの複数のビュー (Multiview Video Coding) に対応するなどの特別な機能を持ち、他にも立体映像の制作を可能にしています。

しかし、 AVC は専有的な形式であり、その技術に関しては複数の当事者によって多数の特許が所有されています。 AVC 形式のメディアを商業的に使用するにはライセンスが必要ですが、 MPEG LA パテントプールでは、エンドユーザーが無料で使用する限り、 AVC 形式のインターネット動画のストリーミングにはライセンス料を要求していません。

ウェブ ブラウザー以外のウェブ RTC の実装（JavaScript API を記載していない実装）は、ウェブ RTC 呼び出しのコーデックとして AVC に対応することが必須です。ウェブブラウザーは必須ではありませんが、一部のブラウザーは対応しています。

ウェブブラウザーの HTML コンテンツでは、AVC は広く互換性があり、多くのプラットフォームが AVC メディアのハードウェアエンコードとデコードに対応しています。しかし、自分のプロジェクトで AVC を使用することを選ぶ前に、その[ライセンス要件](https://www.mpegla.com/programs/avc-h-264/)に注意してください。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>レベルによって異なる</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>レベルによって異なる。 300FPS まで可能</td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆の
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >ですが、画像内に可逆的なマクロブロックを作成することは可能です。
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>8,192 x 4,320 ピクセルまで</td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        <p>より一般的な、または興味深いプロファイルをいくつか紹介します。:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">プロファイル</th>
              <th scope="col">色深度</th>
              <th scope="col">色のサブサンプリング</th>
            </tr>
            <tr>
              <td>Constrained Baseline (CBP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Baseline (BP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Extended (XP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main (MP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>High (HiP)</td>
              <td>8</td>
              <td>4:0:0 （グレースケール）および 4:2:0</td>
            </tr>
            <tr>
              <td>Progressive High (ProHiP)</td>
              <td>8</td>
              <td>4:0:0 （グレースケール）および 4:2:0</td>
            </tr>
            <tr>
              <td>High 10 (Hi10P)</td>
              <td>8 to 10</td>
              <td>4:0:0 （グレースケール）および 4:2:0</td>
            </tr>
            <tr>
              <td>High 4:2:2 (Hi422P)</td>
              <td>8 to 10</td>
              <td>4:0:0 （グレースケール）, 4:2:0, 4:2:2</td>
            </tr>
            <tr>
              <td>High 4:4:4 Predictive</td>
              <td>8 to 14</td>
              <td>4:0:0 （グレースケール）, 4:2:0, 4:2:2, 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>
        あり。<a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> または
        Advanced HDR/SL-HDR。どちらも ATSC の一部。
      </td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AVC/H.264 対応</th>
              <td>4</td>
              <td>12</td>
              <td>35</td>
              <td>9</td>
              <td>25</td>
              <td>3.2</td>
            </tr>
          </tbody>
        </table>
        <p>
          Firefox の AVC 対応は、特許の問題を避けるため、オペレーティングシステムに内蔵またはプリインストールされた AVC およびそのコンテナー用のコーデックに依存します。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a
          href="https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding"
          >https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding</a
        ><br /><a href="https://www.itu.int/rec/T-REC-H.264"
          >https://www.itu.int/rec/T-REC-H.264</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        多数の特許を有する独占的なものです。商用利用する場合は<a href="https://www.mpegla.com/programs/avc-h-264/"
          >ライセンスが必要</a
        >です。複数のパテントプールが適用される場合があるので注意。
      </td>
    </tr>
  </tbody>
</table>

### H.263

ITU の **H.263** コーデックは、主に低帯域幅の状況で使用するために設計されました。具体的には、PSTN（公衆交換電話網）、{{Glossary("RTSP")}}、SIP（IP ベースのビデオ会議）システムでのビデオ会議用に重点が置かれています。低帯域のネットワークに最適化されているとはいえ、かなりCPUに負荷がかかるため、下位のコンピューターでは十分なパフォーマンスが得られない可能性があります。データ形式は MPEG-4 Part 2 と似ています。

H.263 は、ウェブで広く使用されたことはありません。 H.263 の変化形は、 Flash 動画や Sorenson コーデックなど、他の独占的な形式の基礎として使用されています。しかし、主要なブラウザーは、これまで既定値で H.263 に対応していません。特定のメディアプラグインが H.263 メディアの対応を可能にしています。

ほとんどのコーデックとは異なり、 H.263 は、フレーム（画像）あたりの最大ビットレート、または **BPPmaxKb** でエンコードされた動画の基本を定義しています。エンコード中に BPPmaxKb の値が選択され、動画はそれぞれのフレームでこの値を超えることができません。最終的なビットレートは、この値、フレームレート、圧縮、選ばれた解像度とブロック形式によって決まります。

H.263 は H.264 に取って代わられ、したがって、一般的に可能であれば使用を避けるべきであるレガシーメディア形式とみなされています。新しいプロジェクトで H.263 を使用する唯一の現実的な理由は、 H.263 があなたの最良の選択肢である非常に古い機器に対応する必要がある場合です。

H.263 は独占的な形式で、Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm など多くの組織や会社が[特許](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242)を保有しています。 H.263 を使用するためには、適切なライセンスを取得することが法的に義務付けられています。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>制約なし、ただしふつうは 64Kbps 未満</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆の
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>
        <p>1408 x 1152 ピクセル以下</p>
        <p>
          H.263 のバージョン 1 では、対応している画像サイズの集合を指定しています。それ以降のバージョンでは、さらに多くの解像度に対応している可能性があります。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        YCbCr; 各画像形式 (サブ QCIF、QCIF、CIF、4CIF、16CIF) は、ピクセル単位のフレームサイズと、各フレームに使用されるルミナンスとクロミナンスの各サンプル列の数を定義します。
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">H.263 対応</th>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td><a href="https://www.itu.int/">ITU</a></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.263/"
          >https://www.itu.int/rec/T-REC-H.263/</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        独占的であり、適切なライセンスが必要です。複数のパテントプールが適用される場合がありますので、ご注意ください。
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

**[高効率動画コーデック](http://hevc.info/)** (**HEVC**) は、ITU の H.265 と MPEG-H Part 2 (MPEG-4 に続く、まだ開発中のもの) によって定義されています。HEVC は、非常に高い解像度（8K 動画を含む）を含むサイズの動画の効率的なエンコードとデコードに対応するように設計されており、ソフトウェアが現代のプロセッサーの利点を生かすために特別に設計された構造になっています。理論的には、HEVC は [AVC](#avc_h.264) の半分の圧縮ファイルサイズで、同等の画像品質を実現することができます。

例えば、以前のコーデックで使用されていたマクロブロックと同様に、それぞれの符号化木単位 (CTU) は、各サンプルのルマ値の木と、同じ符号化木単位で使用される各クロマサンプルのクロマ値の木、および必要な構文要素から構成されています。この構造により、複数のコアで容易に処理できるよう対応されています。

HEVC の興味深い機能は、メインプロファイルが 4:2:0 のクロマサブサンプリングで 8 ビット/成分色のみを対応していることです。また、4:4:4動画が特別に処理される点も興味深い点です。ルマサンプル（画像のピクセルをグレースケールで表現）とCb、Crサンプル（グレーをどのように変化させて色のピクセルを作成するかを示す）を保有する代わりに、3チャンネルを各色ごとに3つのモノクロ画像として扱い、それをレンダリング時に合成してフルカラー画像を作成します。

HEVCは独占的な形式で、多くの特許で保護されています。ライセンスは [MPEG LAによって管理](https://www.mpegla.com/programs/hevc/)され、料金はコンテンツ制作者や配信者ではなく、開発者に請求されます。アプリやウェブサイトで HEVC を使用するかどうかを決める前に、最新のライセンス条項と要件を必ず確認してください。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>800,000 Kbps まで</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>レベルによって異なる。 300FPS まで可能</td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆の
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>128 x 96 から 8,192 x 4,320 ピクセルまで。プロファイトレベルによって異なります。</td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        <p>
          下記の情報は、主要なプロファイルについて指定されたものです。ここに記載されていないプロファイルも多数利用できます。
        </p>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">プロファイル</th>
              <th scope="col">色深度</th>
              <th scope="col">色のサブサンプリング</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 10</td>
              <td>8 to 10</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 12</td>
              <td>8 to 12</td>
              <td>4:0:0 4:2:0</td>
            </tr>
            <tr>
              <td>Main 4:2:2 10</td>
              <td>8 to 10</td>
              <td>4:0:0, 4:2:0, 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:2:2 12</td>
              <td>8 to 12</td>
              <td>4:0:0, 4:2:0, 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:4:4</td>
              <td>8</td>
              <td>4:0:0, 4:2:0, 4:2:2, 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 10</td>
              <td>8 to 10</td>
              <td>4:0:0, 4:2:0, 4:2:2, 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 12</td>
              <td>8 to 12</td>
              <td>4:0:0, 4:2:0, 4:2:2, 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 16 Intra</td>
              <td>8 to 16</td>
              <td>4:0:0, 4:2:0, 4:2:2, 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">HEVC / H.265 対応</th>
              <td>107</td>
              <td>18</td>
              <td>なし</td>
              <td>11</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome は、ハードウェアコーデックを備えた Windows 8 以降、Linux、ChromeOS デバイス、およびすべての macOS Big Sur+ および Android 5.0 以降のデバイスで HEVC をサポートします。 </p>
        <p>Edge (Chromium) は、ハードウェアコーデックを備えた Windows 10 1709 以降の端末で、<a href="https://apps.microsoft.com/store/detail/hevc-video-extension/9NMZLZ57R3T7">Microsoft Store から HEVC 動画拡張機能</a>をインストールした場合に対応します。他のプラットフォームにおける Chrome と同様の対応状況となります。Edge（レガシー）は、ハードウェアデコーダーのある端末でのみ HEVC に対応しています。
        </p>
        <p>HEVC は特許で保護されているため、Mozilla は HEVC をサポートしません。</p>
        <p>Internet Explorer は、ハードウェアデコーダーを備えた端末でのみ HEVC に対応します。</p>
        <p>Opera およびその他の Chromium ベースのブラウザーは、Chrome と同じ対応状況です。</p>
        <p>Safari は、macOS High Sierra 以降のすべての端末で HEVC に対応しています。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
            >ISOBMFF</a
          >、MPEG-TS、<a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/ja/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td>
        <a href="https://www.itu.int/">ITU</a> /
        <a href="https://mpeg.chiariglione.org/">MPEG</a>
      </td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.265"
          >http://www.itu.int/rec/T-REC-H.265</a
        ><br /><a href="https://www.iso.org/standard/69668.html"
          >https://www.iso.org/standard/69668.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        独占的であり、<a href="https://www.mpegla.com/programs/hevc/"
          >ライセンス要件</a
        >を満たしていることを確認してください。複数のパテントプールが適用される場合がありますので、ご注意ください。
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

**MPEG-4 Video Elemental Stream** (**MP4V-ES**) 形式は、 MPEG-4 Part 2 Visual 標準の一部です。一般的に、 MPEG-4 パート 2 動画は、他のコーデックと比較して有益な値が示されていないため、誰にも使用されていませんが、 MP4V-ES はモバイルで使用されているものがあります。 MP4V は、基本的に H.263 を MPEG-4 コンテナーでエンコードしたものです。

そのため、 {{Glossary("RTP")}} セッション上で MPEG-4 音声と動画をストリーミングするために使用されます。しかし、 MP4V-ES は、 [3GP](/ja/docs/Web/Media/Formats/Containers#3gp) を使用してモバイル接続を介して MPEG-4 の音声と映像を送信するために使用されます。

この形式は、主要なブラウザーで意味のある形で対応しておらず、かなり時代遅れなので、ほぼ間違いなく使用しない方がよいでしょう。この種類のファイルは `.mp4v` という拡張子があるはずですが、時には `.mp4` という不正確なラベルが付いていることがあります。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>5 Kbps to 1 Gbps more</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>No specific limit; restricted only by the data rate</td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        Lossy
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>Up to 4,096 x 4,096 pixels</td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        YCrCb でクロマサンプリング (4:2:0, 4:2:2, 4:4:4) に対応、コンポーネントごとに 12 ビットまで
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MP4V-ES 対応</th>
              <td>なし</td>
              <td>なし</td>
              <td>あり</td>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
            </tr>
          </tbody>
        </table>
        <p>
          Firefox は MP4V-ES を
          <a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a>
          コンテナーでのみ対応しています。
        </p>
        <p>Chrome は MP4V-ES に対応していません。ただし、 Chrome OS は対応しています。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>{{RFC(6416)}}</td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        独占的。
        <a href="https://www.mpegla.com/programs/mpeg-4-visual/"
          >ライセンスの取得</a
        >は、 <a href="https://www.mpegla.com/">MPEG LA</a> や <a href="https://about.att.com/innovation/ip/patents/mpeg-4"
          >AT&#x26;T</a
        > から必要に応じて
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** は 1990 年代の始めに発表されました。後の MPEG 動画規格とは異なり、 MPEG-1 は {{Glossary("ITU")}} の関与なく MPEG だけで作成されました。

MPEG-2 デコーダーで MPEG-1 動画も再生できるため、様々なソフトウェアやハードウェア機器と互換性があります。 MPEG-1 動画関連の有効な特許は残っていないため、ライセンスに関わることなく使用することができます。しかし、プラグインのサポートなしで MPEG-1 動画に対応しているブラウザーは少数であり、ウェブブラウザーでプラグインの使用が非推奨であるため、これらは一般的にもはや使用することはできません。これにより、 MPEG-1 はウェブサイトやウェブアプリケーションで使用するために選択される可能性は乏しくなっています。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>Up to 1.5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS, 60 FPS
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆の
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>4,095 x 4,095 ピクセルまで</td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        Y'CbCr で 4:2:0 玄間サンプリング、成分あたり 12 ビットまで
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-1 対応</th>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>あり</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>MPEG</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://www.iso.org/standard/22411.html"
          >https://www.iso.org/standard/22411.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        独占的であるが、すべての特許が失効しているため、 MPEG-1 を自由に使用することができます。
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** は、 MPEG-2 仕様書で定義されている動画形式で、 ITU の呼称である H.262 と呼ばれることもあります。それは MPEG-1 動画にとても似ています。実際、MPEG-2 プレーヤーは、特別な作業をせずに自動的に MPEG-1 を処理することができます。ただし、それはより高いビットレートと拡張エンコーディング技術に対応して拡張されています。

MPEG-2 の目標は、標準画質のテレビを圧縮できるようにすることだったので、インターレース動画にも対応しています。標準画質の圧縮率と得られる動画の品質が十分にニーズを満たしたため、 MPEG-2 は DVD 動画メディアで使用される主要な動画コーデックとなっています。

MPEG-2 には、異なる形で利用できるいくつかのプロファイルがあります。それぞれのプロファイルは、フレームレート、解像度、ビットレートなど、動画の属性を増加させる 4 つのレベルを利用できるようになっています。ほとんどのプロファイルは、 4:2:0 クロマサブサンプリングの Y'CbCr を使用されますが、より高度なプロファイルは 4:2:2 にも対応します。さらに、 4 つのレベルがあり、それぞれがより大きなフレーム寸法とビットレートに対応しています。例えば、北米で使用されているテレビの [ATSC](https://ja.wikipedia.org/wiki/ATSC) 仕様は、高レベルのメインプロファイルを使用して高解像度の MPEG-2 動画に対応しており、 1920 x 1080 (30FPS) および 1280 x 720 (60FPS) の両方で、最大ビットレート 80Mbps、4:2:0 動画を許可しています。

しかし、プラグインのサポートなしに MPEG-2 に対応するウェブブラウザーはわずかであり、ウェブブラウザーにプラグインを使用することが非推奨されているため、一般に利用できなくなりました。このため、 MPEG-2 はウェブサイトやウェブアプリケーションで使用するには不向きです。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>Up to 100 Mbps; レベルによって異なる profile</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">略語</th>
              <th scope="col">レベル名</th>
              <th scope="col">フレームレートの対応</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>23.9, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>23.976, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆の
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">略語</th>
              <th scope="col">レベル名</th>
              <th scope="col">最大フレームサイズ</th>
            </tr>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>352 x 288 pixels</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>720 x 576 pixels</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>1440 x 1152 pixels</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>1920 x 1152 pixels</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        多くのプロファイルでは、 Y'CbCr で 4:2:0 クロマサブサンプリング。 "High" および
        "4:2:2" プロファイルでは、同様に 4:2:2 クロマサブサンプリングに対応している。
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-2 対応</th>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>なし</td>
              <td>あり</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        MPEG-TS (MPEG Transport Stream),
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.262"
          >https://www.itu.int/rec/T-REC-H.262</a
        ><br /><a href="https://www.iso.org/standard/61152.html"
          >https://www.iso.org/standard/61152.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        独占的。 2019 年 4 月 1 日時点でマレーシアとフィリピンを除く全世界ですべての特許が失効しているため、この 2 カ国以外では MPEG-2 を自由に使用することができます。特許は <a href="https://www.mpegla.com/programs/mpeg-2/">MPEG LA</a> がライセンスしています。
      </td>
    </tr>
  </tbody>
</table>

### Theora

**[Theora](https://en.wikipedia.org/wiki/Theora)** は、 [Xiph.org](https://xiph.org/) が開発したもので、ロイヤリティやライセンスなしで使用することができる、オープンで無料な動画コーデックです。 Theora は、MPEG-4 Part 2 Visual や AVC と同等の品質と圧縮率であり、動画エンコーダーの最上位ではないにしろ、とても優れた選択肢です。しかし、ライセンスの心配がないことと、 CPU リソースの必要量が比較的少ないことから、多くのソフトウェアやウェブプロジェクトでよく使われています。 Theora で利用できるハードウェアデコーダーがないため、 CPU への影響が少ないことは特に有益です。

Theora は元々 On2 Technologies の VC3 コーデックをベースにしていました。このコーデックとその仕様は LGPL ライセンスで公開され、 Xiph.org に委託され、 Xiph.org がこれを Theora 標準として開発しました。

Theora の欠点は、色成分あたり 8 ビットしか対応していないことで、カラーバンディングを避けるために 10 ビット以上を使用するオプションはありません。とはいえ、 8 ビット/成分は現在でも最も一般的に使用されている色形式なので、ほとんどの用途で不便に感じることはないでしょう。また、 Theora は Ogg コンテナーでのみ使用することができます。しかし、最大の欠点は、 Safari が対応していないことです。そのため、 Theora は macOS だけでなく、何百万台もの iPhone や iPad でも利用することができません。

[Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) は、 Theora と、その中で使用される Ogg コンテナー形式について、さらなる詳細を提供しています。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>2 Gbps まで</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>
        任意。 0 以外の任意の値に対応しています。フレームレートは、非整数のフレームレートを許容するために、 32 ビットの分子と 32 ビットの分母として指定されます。
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆の
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>
        最大 1,048,560 x 1,048,560 ピクセルまでで、幅と高さの組み合わせは自由です。
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        Y'CbCr with 4:2:0, 4:2:2, 4:4:4 玄間サンプリングで、 8 ビット/成分
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>
        <p>あり</p>
        <p>
          Theora は単一のストリーム内での可変フレームレート (VFR) に対応していませんが、単一のファイル内で複数のストリームを連結することができ、それぞれに独自のフレームレートがあるため、実質的に VFR が可能です。しかし、フレームレートを頻繁に変更する必要がある場合、これは非現実的です。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Theora 対応</th>
              <td>3</td>
              <td>あり</td>
              <td>3.5</td>
              <td>なし</td>
              <td>10.5</td>
              <td>なし</td>
            </tr>
          </tbody>
        </table>
        <p>
          Edge は Theora にオプションの
          <a
            href="https://www.microsoft.com/ja/p/web-media-extensions/9n5tdp8vcmhs?activetab=pivot:overviewtab"
            >Web Media Extensions</a
          >
          アドオンで対応しています。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td><a href="/ja/docs/Web/Media/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td><a href="https://www.xiph.org/">Xiph.org</a></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://www.theora.org/doc/">https://www.theora.org/doc/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>ロイヤリティや他にもライセンスが必要なものはなく、オープンでフリーです。</td>
    </tr>
  </tbody>
</table>

### VP8

**Video Processor 8** (**VP8**) コーデックは、当初 On2 Technologies 社によって作成されました。 On2 の購入に従うことで、 Google は関連する特許を行使しないことを約束し、オープンかつロイヤリティフリーの動画形式として VP8 をリリースしました。品質と圧縮率の点で、 VP8 は [AVC](#avc_h.264) に匹敵します。

ブラウザーが対応している場合、 VP8 ではアルファチャンネルを持つ動画を再生でき、それぞれのピクセルのアルファ成分で指定した程度まで背景が透けて見えるようにすることができます。

VP8 のブラウザーの対応は、 HTML コンテンツ、特に [WebM](/ja/docs/Web/Media/Formats/Containers#webm) ファイル内では良好です。
このため、 VP8 はコンテンツの有力な候補となりますが、利用できるのであれば VP9 がより望ましい選択となります。
ウェブブラウザーは、 WebRTC のために VP8 に対応している必要がありますが、対応しているすべてのブラウザーが HTML の audio おｙび video 要素で VP8 に対応しているわけではありません。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>任意。レベルによる制限を行わない限り、最大値はありません。</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆の
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>最大 16,384 x 16,384 ピクセル</td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>Y'CbCr が 4:2:0 のクロマサブサンプリングで、 8 ビット/成分です。</td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">VP8 対応</th>
              <td>25</td>
              <td>14</td>
              <td>4</td>
              <td>9</td>
              <td>16</td>
              <td>12.1</td>
            </tr>
            <tr>
              <th scope="row">MSE の互換性</th>
              <td></td>
              <td></td>
              <td>あり</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>Edge が VP8 に対応するには、 <a href="/ja/docs/Web/API/Media_Source_Extensions_API">Media Source Extensions</a> のpしようが必要です。</p>
        <p>macOS: Safari 14.1 では、WebRTC、MSE、 video 要素で VP8 に対応しています。Safari 12.2 は、 WebRTC 接続の VP8 のみに対応しています。</p>
        <p>iOS: Safari 12.1 以降 では、 WebRTC 接続時のみ VP8 に対応しています。</p>
        <p>Firefox は H.264 ハードウェアデコーダが利用できない場合のみ、MSE で VP8 に対応します。利用できるかどうかを調べるには {{domxref("MediaSource.isTypeSupported()")}} を使用してください。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>はい。 VP8 は WebRTC の仕様に必要なコーデックのひとつです。</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>ロイヤリティや他にもライセンスが必要なものはなく、オープンでフリーです。</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) は、Google が開発した古い VP8 標準の後継規格です。
VP8 と同様に、 VP9 は完全にオープンでロイヤルティフリーです。
VP9 のエンコーダーとデコードの性能は、AVC と同等かやや高速ですが、品質はより優れています。
VP9 でエンコードされた動画の品質は、同程度のビットレートであれば HEVC と同等です。

VP9 のメインプロファイルは、 4:2:0 のクロマサブサンプリングレベルで 8 ビット色深度のみに対応していますが、そのプロファイルは、より深い色とクロマサブサンプリングモードのフルレンジに対応するために記載されています。
また、複数の HDR 実装に対応しており、フレームレート、アスペクト比、フレームサイズを自由に選択することができます。

VP9 はブラウザーで広く対応しており、このコーデックのハードウェア実装はかなり一般的になっています。
VP9 は [WebM](/ja/docs/Web/Media/Formats/Containers#webm) で義務づけられている 2 つの動画コーデックのうちの 1 つです（他にも [VP8](#vp8) があります）。
ただし、 WebM と VP9 の Safari 対応はバージョン 14.1 でしか導入されていないので、 VP9 を使用することを選んだ場合は、iPhone、iPad、Mac ユーザー向けに AVC や HEVC などのフォールバック形式を提供することを検討してください。

VP9 は、WebM コンテナーを使用することができる（そして、必要なときにフォールバック動画を提供することができる）場合に、良い選択肢となります。
独占的なコーデックではなく、オープンなコーデックを使用したい場合は、特にそうです。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">対応しているビットレート</th>
      <td>任意。レベルによる制限がない限り、最大値はありません。</td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームレート</th>
      <td>任意。</td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        Lossy
        <a href="https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E5%A4%89%E6%8F%9B"
          >DCT ベースのアルゴリズム</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">対応しているフレームサイズ</th>
      <td>Up to 65,536 x 65,536 pixels</td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">プロファイル</th>
              <th scope="col">色深度</th>
              <th scope="col">色のサブサンプリング</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Profile 0</th>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 1</th>
              <td>8</td>
              <td>4:2:0, 4:2:2, 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Profile 2</th>
              <td>10 ～ 12</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 3</th>
              <td>10 ～ 12</td>
              <td>4:2:0, 4:2:2, f:4:4</td>
            </tr>
          </tbody>
        </table>
        <p>
          対応している色空間:
          <a href="https://en.wikipedia.org/wiki/Rec._601">Rec. 601</a>、
          <a href="https://en.wikipedia.org/wiki/Rec._709">Rec. 709</a>、
          <a href="https://en.wikipedia.org/wiki/Rec._2020">Rec. 2020</a>、
          <a href="https://en.wikipedia.org/wiki/SMPTE_C">SMPTE C</a>、 SMPTE-240M
          （廃止、Rec. 709 で置き換え）、
          <a href="https://en.wikipedia.org/wiki/SRGB">sRGB</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 対応</th>
      <td>
        あり。 HDR10+, <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">HLG</a>,
        <a href="https://en.wikipedia.org/wiki/Perceptual_Quantizer">PQ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">可変フレームレート (VFR) 対応</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">VP9 support</th>
              <td>29</td>
              <td>14</td>
              <td>28</td>
              <td>なし</td>
              <td>10.6</td>
              <td>14 (macOS), 15 (iOS)</td>
            </tr>
            <tr>
              <th scope="row">MSE の互換性</th>
              <td></td>
              <td></td>
              <td>あり</td>
              <td></td>
              <td></td>
              <td>14 (macOS 11.3+), 15 (iOS)</td>
            </tr>
          </tbody>
        </table>
        <p>
          Firefox は、H.264 ハードウェアデコーダーが利用できない場合にのみ、MSE で VP8 に対応します。{{domxref("MediaSource.isTypeSupported()")}} を使用して、利用できるかどうかを調べてください。
        </p>
        <ul>
          <li>Safari 14: (macOS, iOS) は、 WebRTC 用 のW ebM で VP9 に対応しています。</li>
          <li>Safari 14: (macOS) は VP9 に <a href="/ja/docs/Web/API/Media_Source_Extensions_API">MSE</a> によって MacOS 11.3 から対応しています。</li>
          <li>Safari 14.1: (macOS) は、 VP9 映像トラックを格納した WebM ファイルに「どこでも」対応しています。</li>
          <li>Safari 15: (macOS) は、 VP9 に WebM で <a href="/ja/docs/Web/API/Media_Source_Extensions_API">MSE</a> によって対応しています。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">コンテナーの対応</th>
      <td>
        <a href="/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/ja/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> 互換
      </th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">サポート/管理組織</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://www.webmproject.org/vp9/">https://www.webmproject.org/vp9/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>オープンで、ロイヤリティフリーで、他のライセンスも必要ありません。</td>
    </tr>
  </tbody>
</table>

## 動画コーデックの選び方

どのコーデックを使用するかは、自分自身で準備をするための一連の質問から始めることになります。

- オープンな形式を使用したいですか、それとも独占的な形式も検討しますか？
- それぞれの動画に複数の形式を作成するためのリソースがありますか？代替オプションが提供できれば、意思決定プロセスが大幅に簡素化されます。
- 互換性を犠牲にしてもよいブラウザーはありますか？
- 対応する必要があるウェブブラウザーの最も古いバージョンは何ですか？例 えば、過去 5 年間に出荷されたすべてのブラウザーで作業する必要があるでしょうか、それとも過去 1 年間のものだけでよいでしょうか。

下記の項では、具体的な用途に応じた推奨コーデックの選択を提示します。それぞれの用途について、最大で 2 つの推奨コーデックを紹介します。使用例に最適と思われるコーデックが独占的であったり、ロイヤリティの支払いが必要な場合は、 2 つの選択肢を示しています。第 1 の選択肢は、オープンでロイヤリティフリーのもので、その後は独占的なものです。

それぞれの動画の単一のバージョンしか提供できない場合は、ニーズに合わせて最適な形式を選べます。第 1 の選択肢は、品質と、パフォーマンスと、互換性の良い組み合わせであるため推奨されます。第 2 の選択肢は、品質や、パフォーマンスや、サイズをある程度犠牲にして、最も広範な互換性のある選択肢となります。

### 普段使いの動画におすすめ

まず、ブログ、情報サイト、動画が製品のデモに使用される（ただし、動画自体が製品であるわけではない）中小企業のウェブサイトなど、一般的なウェブサイトで表示される動画に最適なオプションを見てみましょう。

1. **[WebM](/ja/docs/Web/Media/Formats/Containers#webm)** コンテナーで、動画には **[VP9](#vp9)** コーデック、音声には **[Opus](/ja/docs/Web/Media/Formats/Audio_codecs#opus)** コーデックを使用する方法。これらはすべてオープンでロイヤリティフリーの形式で、対応が進んでいますが、かなり最近のブラウザーでしか対応していませんので、フォールバックを使用するといいでしょう。

   ```html
   <video controls src="filename.webm"></video>
   ```

2. **[MP4](/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4)** コンテナーで、動画には **[AVC](#avc_h.264)** (**H.264**) コーデック、音声には **[AAC](/ja/docs/Web/Media/Formats/Audio_codecs#aac)** コーデックが理想的です。これは、 MP4 コンテナー、 AVC および AAC コーデックの組み合わせが、すべての主要なブラウザーで広く対応しているためで、その品質は、ほとんどの用途で一般的に良好です。ただし、ライセンス要件に準拠していることを確認してください。

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> **メモ:** {{HTMLElement("video")}} 要素は、その中に {{HTMLElement("source")}} 要素があってもなくても、閉じタグの `</video>` が必要です。

### 高画質な動画表示におすすめ

可能な限り最高の品質で動画を表示することを使命とする場合、できるだけ多くの形式を提供することが好ましいと思われます。最高の品質を実現するコーデックは、最新のものである傾向があり、したがって、ブラウザーの互換性にギャップが生じる可能性が最も高くなるからです。

1. WebM コンテナーで、動画に AV1、音声に Opus を使用したもの。 AV1 をエンコードする際に、 High または Professional プロファイルを使用することができれば、 6.3 などの高いレベルで、 4K または 8K の解像度で、優れた動画品質を維持したまま、非常に高いビットレートを取得することが可能です。 Opus の Fullband プロファイルを使用して音声を 48kHz のサンプルレートでエンコードすると、取り込める音声帯域が最大になり、人間の可聴域であるほぼすべての周波数帯域を取り込むことができます。

   ```html
   <video controls src="filename.webm"></video>
   ```

2. MP4 コンテナーで、 [HEVC](#hevc_h.265) コーデックを使用した 10 ビットまたは 12 ビット色深度のメイン 4:2:2、あるいはコンポーネントあたり最大 16 ビットのメイン 4:4:4 プロファイルなど、高度なメインプロファイルのいずれかを使用しているもの。高ビットレートでは、色再現性の高い優れたグラフィック品質を提供します。さらに、オプションで HDR メタデータを記載することで、ハイダイナミックレンジの動画を提供することも可能です。音声については、高いサンプルレート（最低でも 48kHz、理想的には 96kHz）で AAC コーデックを使用し、高速エンコードではなく、複雑なエンコードで使用されます。

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### アーカイブ、編集、リミックスにおすすめ

現在、ウェブブラウザーで一般に利用できる可逆圧縮動画コーデック、あるいは可逆圧縮に近い動画コーデックさえありません。その理由は単純で、動画は巨大だからです。可逆圧縮は、非可逆圧縮よりも効果が低いという定義があります。例えば、非圧縮の 1080p 動画（1920 × 1080 ピクセル）で 4:2:0 のクロマサブサンプリングを行う場合、少なくとも 1.5Gbps が必要です。 FFV1 （ウェブブラウザーの対応なし）のような可逆圧縮を使用すると、コンテンツにもよりますが、おそらく 600Mbps 程度に縮小することができます。それでも、 1 秒間に接続するビット数は膨大であり、現在のところ実際の使用には適しません。

たとえ一部の非可逆圧縮コーデックに可逆圧縮モードが利用できても、これは事実です。可逆圧縮モードは、現在のどのウェブブラウザーにも実装されていません。最善なのは、非可逆圧縮を使用する高品質のコーデックを選択し、可能な限り圧縮を行わないように設定することです。これを行う 1 つの方法は、コーデックが「高速」圧縮を使用するように設定することです。これは、本質的に、圧縮がより少なく行われることを意味します。

#### 動画を外部に準備する

ウェブサイトやアプリの外部からアーカイブ用に動画を準備するには、元の非圧縮動画データに対して圧縮を行うユーティリティを使用します。例えば、無料の [x264](https://www.videolan.org/developers/x264.html) ユーティリティは、非常に高いビットレートを使用して [AVC](#avc_h.264) 形式で動画をエンコードするために使用できます。

```bash
x264 --crf 18 -preset ultrafast --output outfilename.mp4 infile
```

他のコーデックは、動画を大幅に圧縮した場合、最良の品質レベルを持つことができますが、それらのエンコーダーは十分に遅い傾向があり、この圧縮で取得するほぼ無損失のエンコーディングは、ほぼ同じ全体の品質レベルで圧倒的に速くなります。

#### 動画撮影

可逆圧縮にどれだけ近づけることができるかという制約を考えると、[AVC](#avc_h.264) や [AV1](#av1) を使用することを考えることができます。例えば、[MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) を使用して動画を記録する場合、 {{domxref("MediaRecorder")}} オブジェクトを作成する際に、以下のようなコードを使用することができます。

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

この例では `MediaRecorder` を作成し、 BT.2100 HDR を使用した [AV1](#av1) 動画を 12 ビット色で 4:4:4 クロマサブサンプリングで、音声を [FLAC](/ja/docs/Web/Media/Formats/Audio_codecs#flac) の可逆圧縮で記録する設定にしています。結果として得られるファイルは、動画と音声のトラックで共有される 800Mbps 以下のビットレートを使用します。ハードウェアの性能、要件、使用する特定のコーデックに応じて、これらの値を調整する必要がある可能性があります。このビットレートは明らかにネットワーク伝送には現実的でなく、ローカルにのみ使用されるでしょう。

`codecs` 引数の値をドットで区切られたプロパティに分解すると、以下のようになります。

| 値     | 説明                                                                                                                                                                                                                                                  |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | 4 文字のコード (4CC) の指定で、 [AV1](#av1) コーデックを識別する。                                                                                                                                                                                    |
| `2`    | プロファイルを示します。値 2 は Professional プロファイルを示します。値 1 は High プロファイル、値 0 は Main プロファイルを指定します。                                                                                                               |
| `19H`  | レベルと階層です。この値は AV1 仕様書の [A.3](https://aomediacodec.github.io/av1-spec/#levels) 節の表からきており、レベル 6.3 の高次の階層を示します。                                                                                                |
| `12`   | 色深度。 1 成分あたり 12 ビットを示します。他に使用可能な値は 8 と 10 ですが、 AV1 では 12 が最も精度の高い色表現となります。                                                                                                                         |
| `0`    | モノクロモードフラグ。 1 の場合、クロマプレーンは記録されず、すべてのデータは厳密にルマデータとなり、グレイスケールの画像となります。ここでは色をつけたいので 0 を指定します。                                                                        |
| `000`  | AV1 仕様書の [6.4.2 節](https://aomediacodec.github.io/av1-spec/#color-config-semantics)からきたクロマサブサンプリングモード。値 000 は、モノクロモード値 0 と組み合わせて、 4:4:4 クロマサブサンプリング、または色データの損失がないことを示します。 |
| `09`   | 使用する色のプライマリー。この値は AV1 仕様書の [6.4.2 節](https://aomediacodec.github.io/av1-spec/#color-config-semantics)で定められています。 9 は、 HDR に使用される BT.2020 色を使用したいことを示します。                                        |
| `16`   | 使用する撮像素子特性。同様に [6.4.2 節](https://aomediacodec.github.io/av1-spec/#color-config-semantics)で定められています。 16 は、 BT.2100 PQ 色の特性を使用することを示します。                                                                    |
| `09`   | これも [6.4.2 節](https://aomediacodec.github.io/av1-spec/#color-config-semantics)にある、使用する行列係数。値 9 は、可変輝度の BT.2020 を使用することを指定します。これは、 BT.2010 YbCbCr としても有益なものです。                                  |
| `1`    | 動画の「フルレンジ」フラグ。 1 の値は、全色範囲を使用することを示す。                                                                                                                                                                                 |

コーデック選択のための文書は、おそらく `codecs` 引数を作成するときに使用する情報を提供してくれるでしょう。

## 関連情報

- [ウェブ音声コーデックガイド](/ja/docs/Web/Media/Formats/Audio_codecs)
- [メディアコンテナー形式（ファイル形式）](/ja/docs/Web/Media/Formats/Containers)
- [ウェブコンテンツにおけるメディア対応に関する問題の扱い](/ja/docs/Web/Media/Formats/Support_issues)
- [WebRTC で使用されるコーデック](/ja/docs/Web/Media/Formats/WebRTC_codecs)
- {{RFC(6381)}}: The "Codecs" and "Profiles" parameters for "Bucket" media types
- {{RFC(5334)}}: Ogg Media Types
- {{RFC(3839)}}: MIME Type Registrations for 3GPP Multimedia Files
- {{RFC(4381)}}: MIME Type Registrations for 3GPP2 Multimedia Files
- {{RFC(4337)}}: MIME Type Registrations for MPEG-4
- [Video codecs in Opera](https://dev.opera.com/articles/introduction-html5-video/#codecs--the-fly-in-the-ointment)
- Internet Explorer における[動画](/ja/docs/Web/API/HTMLVideoElement)と[音声](/ja/docs/Web/HTML/Element/audio)のコーデック
- [Video and audio codecs in Chrome](https://www.chromium.org/audio-video/)
