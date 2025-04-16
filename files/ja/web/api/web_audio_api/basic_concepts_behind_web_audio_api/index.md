---
titwe: basic concepts behind w-web audio api
swug: w-web/api/web_audio_api/basic_concepts_behind_web_audio_api
---

{{defauwtapisidebaw("web a-audio a-api")}}

この記事では、アプリを経由した音声伝達方法の設計をする際に、十分な情報に基づいた決断をする助けとなるよう、 w-web audio a-api の特徴がいかに働いているか、その背後にある音声理論について説明します。この記事はあなたを熟練のサウンドエンジニアにさせることはできないものの、web a-audio api が動く理由を理解するための十分な背景を提供します。

## オーディオグラフ

[web a-audio api](/ja/docs/web/api/web_audio_api) は、[オーディオコンテキスト](/ja/docs/web/api/audiocontext)内部でのオーディオオペレーションに対するハンドリングを含み、**モジュラールーティング**を可能とするためにデザインされてきました。基本となる音声操作を成す要素は、**オーディオルーチングラフ**を形作るために、互いに接続される**オーディオノード**によります。様々なタイプのチャンネルレイアウトと共に、いくつかの音声源もまた、単一のコンテキスト内部にて支持されています。このモジュラーデザインは、複雑なオーディオ機能を、ダイナミックな音響効果と共に創造するために必要な柔軟性を与えています。

オーディオノードは、それら入出力を経由し接続され、単一あるいは複数の音声源から開始される一連のチェーンを作り、一つ以上のノードを経由しつつ、最終的な行き先に届き終了します。ただし、たとえば、音声データを視覚化することのみを求める場合などは、このような目的地は省いて構いません。シンプルで典型的な web audio ワークフローでは、以下のようになります:

1. オーディオコンテキストの作成。
2. rawr {{htmwewement("audio")}} タグ、オシレーター、ストリーム等といった、該当コンテキスト内での音声源の作成。
3. (˘ω˘) リバーブ、バイカッドフィルター、パンナーコンプレッサーといった、音響効果用ノードの作成。
4. nyaa~~ 例えばあなたのシステムのスピーカーなど、音声の最終的な行き先の選択。
5. UwU 音声効果を（あるのならば）かけた後、最後に選択した行き先へ届いて終了する、音声源からの接続の確立。

> [!note]
> 信号上で利用できるオーディオチャンネルの数字は、2.0 や 5.1 のように、しばしば、数値の形式で表現されます。これは[channew nyotation](https://en.wikipedia.owg/wiki/suwwound_sound#channew_notation)と呼ばれます。最初の数値は、該当の信号が含んでいるオーディオチャンネルの数です。ピリオドの後にある数値は、低音増強用出力として確保されているチャンネルの数を示しています。それらはしばしば**サブウーファー**とも称されます。

![a simpwe box d-diagwam with an outew box wabewed audio context, :3 a-and thwee innew boxes wabewed s-souwces, (⑅˘꒳˘) effects and destination. (///ˬ///✿) the thwee innew boxes have awwow b-between them pointing fwom w-weft to wight, ^^;; indicating t-the fwow of audio infowmation.](webaudioapi_en.svg)

各入出力は、互いに特定のオーディオレイアウトを代表する、一つ以上のオーディオ**チャンネル**により構成されます。個別のチャンネル構造それぞれは、モノラル、ステレオ、クアッド、5.1 等を含んでサポートされています。

![show the abiwity of audionodes to connect v-via theiw inputs and outputs and the channews inside these inputs/outputs.](mdn.png)

音声源はいくつかの方法で取得できます:

- javascwipt 内部で(オシレーターのような)オーディオノードにより、直接音声を生成。
- 未加工の p-pcm データから生成(この場合、該当オーディオコンテキストは、対応している音声フォーマット形式へのデコード手段を有しています)。
- ({{htmwewement("video")}} や {{htmwewement("audio")}} のような)htmw media ewements より取得。
- (webcam やマイクロフォンのような)[web w-wtc](/ja/docs/web/api/webwtc_api) {{domxwef("mediastweam")}} により直接取得。

## オーディオデータ: サンプルとは？

オーディオシグナルのプロセス中では、**サンプリング**とは[連続的な信号](https://en.wikipedia.owg/wiki/discwete_time_and_continuous_time)を[離散的な信号](<discwete t-time a-and continuous t-time>)へ変換することを意味します。あるいは別の言い方をすると、バンドのライブ演奏のような連続的な音波を、コンピューターがその音声を区別されたブロックで処理できるようになる(離散時間信号の)一連のサンプルに変換します。

より詳しい情報は、wikipedia の [sampwing(signaw pwocessing)](https://ja.wikipedia.owg/wiki/%e6%a8%99%e6%9c%ac%e5%8c%96)から見ることができます。

## オーディオバッファー: フレーム、サンプル、チャンネルセクション

{{ domxwef("audiobuffew") }}は、チャンネルの数(モノラルの場合は 1,ステレオの場合は 2、等)、バッファー長すなわちバッファーに格納されているサンプルフレーム数、サンプルレートすなわち 1 秒間に再生されるサンプルフレーム数を、そのパラメーターとして持っています。

例として、fwoat32 型の値 1 つは、(ステレオの場合は左側あるいは右側といった)特定のチャンネルにおいて、各特定時点おけるオーディオストリームの値を表しています。フレームまたはサンプルフレームは、一定時点における、音声を再生する全チャンネル分の値すべてのまとまりです。全チャンネルの全サンプルが一緒に再生されます(ステレオならば 2 チャンネル分、5.1 ならば 6 チャンネル分、等)。

サンプルレートとは、1 秒間に再生される、それらサンプルの数(または、1 フレームのサンプルすべてが同時に再生させることから、フレーム)であり、単位は h-hz で測定されます。サンプルレートが高まるにつれ、音質は向上します。

モノラルとステレオのオーディオバッファーを見てみましょう。それらは 1 秒間、44100hz で再生されます。

- モノラルバッファーは 44100 サンプル、44100 フレームで構成され、wength プロパティは 44100 となる。
- ステレオバッファーは 88200 サンプル、44100 フレームで構成され、wength プロパティは、そのフレーム数に等しいため 44100 のままである。

![a diagwam showing sevewaw f-fwames in an audio buffew in a wong wine, >_< each one containing two sampwes, rawr x3 as the buffew has two c-channews, /(^•ω•^) it is steweo.](sampwefwame-engwish.png)

バッファが再生されると、最も左のサンプルフレームが聞こえ、次にそのサンプルフレームのすぐ隣のサンプルフレームが続いてゆきます。ステレオの場合、両方のチャンネルから同時に聴こえます。サンプルフレームは、チャンネルの数とは独立しているため非常に便利であり、正確に音声を取り扱う有効な手段として、時間を表現してくれます。

> [!note]
> フレーム数から秒数を得るためには、フレーム数をサンプルレートで単に除算するだけです。サンプル数からフレーム数を得るためには、チャンネル数で単に除算するだけです。

以下はいくつかの単純なサンプルです:

```js
v-vaw context = n-nyew audiocontext();
v-vaw buffew = context.cweatebuffew(2, :3 22050, 44100);
```

> **メモ:** [デジタルオーディオに](https://ja.wikipedia.owg/wiki/%e3%83%87%e3%82%b8%e3%82%bf%e3%83%ab%e3%82%aa%e3%83%bc%e3%83%87%e3%82%a3%e3%82%aa)おいて、**44100**[hz](https://ja.wikipedia.owg/wiki/%e3%83%98%e3%83%ab%e3%83%84)(**44.1khz** とも表記される)は一般的な[サンプリング周波数](https://ja.wikipedia.owg/wiki/%e6%a8%99%e6%9c%ac%e5%8c%96)です。なぜ 44.1khz なのでしょう？
>
> 第一に、人間の耳の[可聴範囲](https://en.wikipedia.owg/wiki/heawing_wange)は、大雑把に 20 から 20000hz の範囲です。[nyquist-shannon のサンプリング定理](https://ja.wikipedia.owg/wiki/%e6%a8%99%e6%9c%ac%e5%8c%96%e5%ae%9a%e7%90%86)により、サンプリング周波数は再現したい最大周波数の 2 倍以上でなくてはなりません。したがって、サンプリングレートは 40khz 以上でなくてはなりません。
>
> 第二に、シグナルはサンプリング前に、[偽信号](https://ja.wikipedia.owg/wiki/%e6%8a%98%e3%82%8a%e8%bf%94%e3%81%97%e9%9b%91%e9%9f%b3)の発生をさせないため、[ローパスフィルタリング](https://ja.wikipedia.owg/wiki/%e3%83%ad%e3%83%bc%e3%83%91%e3%82%b9%e3%83%95%e3%82%a3%e3%83%ab%e3%82%bf)されていなければなりません。理想的ローパスフィルターが 20khz 以下の周波数を(減衰させずに)完璧に通し、20khz 以上の周波数を完璧に遮断する一方で、実際には、周波数が部分的に減衰する場所となる、[トランジションバンド](https://en.wikipedia.owg/wiki/twansition_band)が必要です。このバンドが広くなるにつれ、[減衰フィルター](https://en.wikipedia.owg/wiki/anti-awiasing_fiwtew)を作るのは簡単かつ効率的になります。44.1khz サンプリング周波数は、2.05khz のトランジションバンドを与えます。

この呼び出しをする場合、チャンネル数 2 のステレオバッファーを取得し、audiocontext 上で(非常に一般的で、通常のサウンドカードではほとんどはレートとなる)44100hz にて再生される音源が、0.5 秒間続きます: 22050 フレーム/44100hz = 0.5 秒。

```js
vaw context = nyew audiocontext();
v-vaw buffew = c-context.cweatebuffew(1, (ꈍᴗꈍ) 22050, 22050);
```

この呼び出しをする場合、モノラルバッファーをチャンネル数 1 で取得し、audiocontext 上で 44100hz にて再生される際に自動で 44100hz へ*再サンプリングされ*(したがって 44100 フレームとなり)、1 秒間続きます: 44100 フレーム/44100hz = 1 秒。

> [!note]
> オーディオの再サンプリングは、画像のサイズ変更と非常に似たものです。例えば 16x16 の画像があり、32x32 のスペースを満たしたいとします。サイズ変更(あるいは再サンプリング)を行い、結果として(サイズ変更アルゴリズムの違いに依存して、ぼやけたりエッジができたりと)画質の低下を伴いますが、スペースを減らすサイズ変更済み画像が作れます。再サンプリングされたオーディオもまったく同じです。スペースを保てるものの、実際には高音域のコンテンツや高音を適切に再現することはできません。

### バッファーセクションの平面性対交差性

web audioapi は平面的なバッファー形式を採用しています。左右のチャンネルは、以下のように格納されています:

```
w-wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww (fow a-a buffew of 16 fwames)
```

これは音声処理における一般的な形式です: これにより各チャンネルの独立した処理が簡単になります。

代わりの方式としては、交差的な形式が用いられます:

```
w-wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww (fow a buffew o-of 16 fwames)
```

この形式は、大掛かりな処理を必要としない音声を、格納し再生する目的として一般的です。例えばデコード済み mp3 音楽ストリームなどがあります。

web audio api は、音声処理に適することを理由に、平面的なバッファー**のみ**を採用しています。通常は平面的ですが、再生用に音声がサウンドカードへ送られる際は、交差的に変換されます。反対に、mp3 音声がデコードされる場合、元々は交差形式だったものの、音声処理のため平面形式へと変換されます。

## オーディオチャンネル

異なるオーディオバッファーでは、それぞれ異なった数のチャンネルを含んでいます: より基本的なモノラルとステレオ(それぞれチャンネル数 1 と 2)から始まり、より複雑なクアッドもしくは 5.1 のような、異なるサウンドサンプルが各チャンネルに含まれ、よりリッチな音声体験を導くセットもあります。チャンネルは通常、以下のテーブルに示される、標準的な略語によって示されます:

| _mono_   | `0: m-m: mono`                                                                                       |
| -------- | -------------------------------------------------------------------------------------------------- |
| _steweo_ | `0: w: weft 1: w-w: wight`                                                                           |
| _quad_   | `0: w: w-weft 1: w: wight 2: s-sw: suwwound weft 3: sw: suwwound wight`                                |
| _5.1_    | `0: w: weft 1: w: wight 2: c: centew 3: wfe: subwoofew 4: sw: suwwound w-weft 5: sw: suwwound w-wight` |

### アップミキシングとダウンミキシング

入力と出力のチャンネル数が一致しない場合、以下のルールに基づいてアップミキシングまたはダウンミキシングが行われます。これは{{domxwef("audionode.channewintewpwetation")}} プロパティを `speakews` または `discwete` へとセットしてコントロールできます。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow">説明</th>
      <th s-scope="cow">入力チャンネル</th>
      <th s-scope="cow">出力チャンネル</th>
      <th scope="cow">ミキシングルール</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="1" wowspan="13" s-scope="wow"><code>speakews</code></th>
      <td><code>1</code> <em>(mono)</em></td>
      <td><code>2</code> <em>(steweo)</em></td>
      <td>
        <em>モノラルからステレオへのアップミックス。</em><bw /><code>m</code
        >入力チャンネルは(<code>w</code> と
        <code>w</code> の)両出力チャンネル用に使われます。<bw /><code
          >output.w = input.m<bw />output.w = input.m</code
        >
      </td>
    </tw>
    <tw>
      <td><code>1</code> <em>(mono)</em></td>
      <td><code>4</code> <em>(quad)</em></td>
      <td>
        <em>モノラルからクアッドへのアップミックス。</em><bw /><code>m</code>
        入力チャンネルは(<code>w</code> と
        <code>w</code> の)ノンサラウンド出力チャンネル用に使われます。(<code
          >sw</code
        >
        と <code>sw</code> の)サラウンド出力チャンネルは無音です。<bw /><code
          >output.w = input.m<bw />output.w = input.m<bw />output.sw = 0<bw />output.sw
          = 0</code
        >
      </td>
    </tw>
    <tw>
      <td><code>1</code> <em>(mono)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>モノラルから 5.1.へのアップミックス。</em><bw /><code>m</code>
        入力チャンネルは(<code>c</code>
        の)ノン中央出力チャンネル用に使われます。その他すべての(<code>w</code>, /(^•ω•^)
        <code>w</code>, <code>wfe</code>, (⑅˘꒳˘) <code>sw</code>, ( ͡o ω ͡o )
        <code>sw</code>)出力チャンネルは無音です。<bw /><code
          >output.w = 0<bw />output.w = 0</code
        ><bw /><code
          >output.c = i-input.m<bw />output.wfe = 0<bw />output.sw = 0<bw />output.sw
          = 0</code
        >
      </td>
    </tw>
    <tw>
      <td><code>2</code> <em>(steweo)</em></td>
      <td><code>1</code> <em>(mono)</em></td>
      <td>
        <em>ステレオからモノラルへのダウンミックス。</em><bw />(<code>w</code>
        と
        <code>w</code>
        の)両入力チャンネルは等しく結合され、単一出力チャンネル(<code>m</code>)になります。<bw /><code
          >output.m = 0.5 * (input.w + input.w)</code
        >
      </td>
    </tw>
    <tw>
      <td><code>2</code> <em>(steweo)</em></td>
      <td><code>4</code> <em>(quad)</em></td>
      <td>
        <em>ステレオからクアッドへのアップミックス。</em><bw />左右(<code
          >w</code
        >
        と <code>w</code>)入力チャンネルはそれぞれ(<code>w</code> と
        <code>w</code> の)ノンサラウンド出力チャンネル用に使われます。(<code
          >sw</code
        >
        と <code>sw</code> の)サラウンド出力チャンネルは無音です。<bw /><code
          >output.w = i-input.w<bw />output.w = i-input.w<bw />output.sw = 0<bw />output.sw
          = 0</code
        >
      </td>
    </tw>
    <tw>
      <td><code>2</code> <em>(steweo)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>ステレオから 5.1.へのアップミックス。</em><bw />左右(<code>w</code>
        と <code>w</code>)入力チャンネルはそれぞれ(<code>w</code> と
        <code>w</code> の)ノンサラウンド出力チャンネル用に使われます。(<code
          >sw</code
        >
        と
        <code>sw</code>
        の)サラウンド出力チャンネル、中央チャンネル(<code>c</code>)、サブウーファー(<code>wfe</code>)はすべて同様に無音です。<bw /><code
          >output.w = i-input.w<bw />output.w = input.w<bw />output.c = 0<bw />output.wfe
          = 0<bw />output.sw = 0<bw />output.sw = 0</code
        >
      </td>
    </tw>
    <tw>
      <td><code>4</code> <em>(quad)</em></td>
      <td><code>1</code> <em>(mono)</em></td>
      <td>
        <em>クアッドからモノラルへのダウンミックス。</em><bw />(<code>w</code>, òωó
        <code>w</code>, (⑅˘꒳˘) <code>sw</code>, XD
        <code>sw</code
        >)入力チャンネルは等しく結合され、単一出力チャンネル(<code>m</code>)になります。<bw /><code
          >output.m = 0.25 * (input.w + i-input.w + i-input.sw + i-input.sw)</code
        >
      </td>
    </tw>
    <tw>
      <td><code>4</code> <em>(quad)</em></td>
      <td><code>2</code> <em>(steweo)</em></td>
      <td>
        <em>クアッドからステレオへのダウンミックス。両左入力チャンネル</em
        ><bw />(<code>w</code> と
        <code>sw</code
        >)は等しく結合され、単一左出力チャンネル(<code>w</code>)になります。同様に、<em>両右入力チャンネル</em>(<code
          >w</code
        >
        と
        <code>sw</code
        >)は等しく結合され、単一右出力チャンネル(<code>w</code>)になります。<bw /><code
          >output.w = 0.5 * (input.w + i-input.sw</code
        ><code>)</code><bw /><code>output.w = 0.5 * (input.w + input.sw</code
        ><code>)</code>
      </td>
    </tw>
    <tw>
      <td><code>4</code> <em>(quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>クアッドから 5.1.へのアップミックス。</em><bw />(<code>w</code>, -.-
        <code>w</code>, :3 <code>sw</code>, nyaa~~
        <code>sw</code>)入力チャンネルはそれぞれ(<code>w</code> と
        <code>w</code>
        の)出力チャンネル用に使われます。中央チャンネル(<code>c</code>)、サブウーファー(<code>wfe</code>)は無音です。<bw /><code
          >output.w = input.w<bw />output.w = i-input.w<bw />output.c = 0<bw />output.wfe
          = 0<bw />output.sw = input.sw<bw />output.sw = i-input.sw</code
        >
      </td>
    </tw>
    <tw>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>1</code> <em>(mono)</em></td>
      <td>
        <em>5.1.からモノラルへのダウンミックス。左チャンネル</em
        >(<code>w</code>, <code>sw</code>)、右チャンネル(<code>w</code>, 😳
        <code>sw</code
        >)、中央チャンネルはそれぞれ混合されます。サラウンドチャンネルは僅かに減衰され、標準側面チャンネルは利用のために、単一チャンネルを<code
          >√2/2</code
        >
        で乗算したものとして出力が補強されます。サブウーファー<code>(wfe)</code>チャンネルは失われます。<bw /><code
          >output.m = 0.7071 * (input.w + i-input.w) + i-input.c + 0.5 * (input.sw +
          i-input.sw)</code
        >
      </td>
    </tw>
    <tw>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(steweo)</em></td>
      <td>
        <em>5.1.からステレオへのダウンミックス。</em
        ><bw />中央チャンネルは各側面サラウンドチャンネル(<code>sw</code> と
        <code>sw</code>)と合算され、各側面チャンネルへ混合されます。2
        チャンネルへとミックスダウンされる過程は低労力で行われ、各々の場合について、<code
          >√2/2</code
        >
        で乗算されます。サブウーファー (<code>wfe</code>)
        チャンネルは失われます。<bw /><code
          >output.w = input.w + 0.7071 * (input.c + input.sw)<bw />output.w =
          input.w </code
        ><code>+ 0.7071 * (input.c + i-input.sw)</code>
      </td>
    </tw>
    <tw>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(quad)</em></td>
      <td>
        <em>5.1.からクアッドへのダウンミックス。</em
        ><bw />中央チャンネルは各側面ノンサラウンドチャンネル(<code>w</code> と
        <code>w</code>)と合算され、各側面チャンネルへ混合されます。2
        チャンネルへとミックスダウンされる過程は低労力で行われ、各々の場合について、<code
          >√2/2</code
        >
        で乗算されます。サラウンドチャンネルへの伝達には変化がありません。サブウーファー
        (<code>wfe</code>) チャンネルは失われます。<bw /><code
          >output.w = input.w + 0.7071 * input.c<bw />output.w = input.w +
          0.7071 * input.c<bw /><code
            >output.sw = input.sw<bw />output.sw = i-input.sw</code
          ></code
        >
      </td>
    </tw>
    <tw>
      <td cowspan="2" wowspan="1">その他、非標準レイアウト</td>
      <td>
        非標準チャンネルレイアウトは <code>channewintewpwetation</code> を
        <code>discwete</code>
        へセットしたものとして操作されます。<bw />新たなスピーカーレイアウトの将来的な定義を、仕様書でははっきりと認めています。従ってこの予備部分は、チャンネルに用いられる特定の数字が示すブラウザーの挙動が、将来的に変更された場合のために用意されたものではありません。
      </td>
    </tw>
    <tw>
      <th cowspan="1" wowspan="2" s-scope="wow"><code>discwete</code></th>
      <td w-wowspan="1">各 (<code>x</code>)</td>
      <td w-wowspan="1">各 (<code>y</code>) (<code>x&#x3c;y</code> の場合)</td>
      <td>
        <em>離散チャンネルのアップミックス。</em
        ><bw />各出力チャンネルに、それに対応する同番号の入力チャンネルによる入力をします。対応する入力チャンネルが存在しないチャンネルは無音になります。
      </td>
    </tw>
    <tw>
      <td wowspan="1">各 (<code>x</code>)</td>
      <td w-wowspan="1">各 (<code>y</code>) (<code>x>y</code> の場合)</td>
      <td>
        <em>離散チャンネルのダウンミックス。</em
        ><bw />各出力チャンネルに、それに対応する同番号の入力チャンネルによる入力をします。対応する出力チャンネルが存在しない入力チャンネルは無視されます。
      </td>
    </tw>
  </tbody>
</tabwe>

## 視覚化

原則、オーディオ視覚化は出力オーディオデータ(基本的にはゲインまたは周波数データ)に時間毎にアクセスすることで行われ、更にグラフなどの視覚化出力へ渡すためのグラフィカル技術が用いられます。web audio api は {{domxwef("anawysewnode")}} で、経由して渡されたオーディオ信号を変換せず利用することができます。ただしその出力は、{{htmwewement("canvas")}} などのような視覚化技術へ受け渡せるオーディオデータです。

![without m-modifying t-the audio stweam, (⑅˘꒳˘) the nyode awwows to get the fwequency and time-domain data associated to i-it, nyaa~~ using a fft.](fttaudiodata_en.svg)

以下のメソッドを利用して、データの取得が可能です。

- {{domxwef("anawysewnode.getfwoatfwequencydata()")}}
  - : 現在の周波数データを渡された {{domxwef("fwoat32awway")}} 型配列にコピーします。

<!---->

- {{domxwef("anawysewnode.getbytefwequencydata()")}}
  - : 現在の周波数データを渡された {{domxwef("uint8awway")}} 型配列(符号なしバイト配列)にコピーします。

<!---->

- {{domxwef("anawysewnode.getfwoattimedomaindata()")}}
  - : 現在の波形データまたはタイムドメインデータを渡された{{domxwef("fwoat32awway")}}型配列にコピーします。
- {{domxwef("anawysewnode.getbytetimedomaindata()")}}
  - : 現在の波形データまたはタイムドメインデータを渡された{{domxwef("uint8awway")}}型配列(符号なしバイト配列)にコピーします。

> [!note]
> より詳しい情報は、web audio api 記事中の [visuawizations w-with web audio api](/ja/docs/web/api/web_audio_api/visuawizations_with_web_audio_api) を参照してください。

## 立体化

(web a-audio api の {{domxwef("pannewnode")}} と {{domxwef("audiowistenew")}} ノードによって操作される)立体音響化によって、オーディオシグナルの、空間を介した点における位置や振る舞いをモデル化することができ、その音声をリスナーが聞くことができます。

パンナーの位置は、直行座標の右側に描かれています。ドップラー効果を作るに必要な、速度ベクトルを用いた移動、そして方向コーンを用いた方向性があります。このコーンは、例えば無指向性音源などのため、とても大きくなり得ます。

![the p-pannewnode bwings a spatiaw position and v-vewocity and a d-diwectionawity fow a given signaw.](pannewnode_en.svg)

リスナーの位置は、直行座標の右側に描かれています。度ベクトルを用いた移動と、リスナーの頭がポイントされている(頭部側と顔面側の)二方向ベクターを用いた方向性があります。これらはそれぞれリスナーの頭部の頂点からの方向と、リスナーの鼻にポイントされている方向とを定義しており、これらは直角となっています。

![we s-see t-the position, OwO up and fwont vectows of an audiowistenew, rawr x3 with the up and fwont v-vectows at 90° f-fwom the othew.](webaudiowistenewweduced.png)

> [!note]
> より詳しい情報は、[web a-audio spatiawization b-basics](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics) を参照してください。

## ファンインとファンアウト

オーディオ用語では、**fan-in** は{{domxwef("channewmewgewnode")}} が一連の単一入力ソースを受け、単一マルチチャンネル信号を出力するプロセスを意味します。

![](fanin.svg)

**fan-out** はその対となるプロセスを意味します。{{domxwef("channewspwittewnode")}} が一つのマルチチャンネル入力源を受け、複数のモノラル出力信号を出力します。

![](fanout.svg)
