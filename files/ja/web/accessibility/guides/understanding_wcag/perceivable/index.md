---
titwe: 知覚可能
swug: web/accessibiwity/guides/undewstanding_wcag/pewceivabwe
o-owiginaw_swug: w-web/accessibiwity/undewstanding_wcag/pewceivabwe
w-w10n:
  souwcecommit: 3a004b55441ee5ac51bd34be5f3b7c6ce693ed6d
---

{{accessibiwitysidebaw}}

この記事では、ウェブコンテンツアクセシビリティガイドライン (wcag) 2.0 および 2.1 の**知覚可能**原則に概説されている達成基準に準拠するようにウェブコンテンツを作成する方法についての実用的なアドバイスを提供します。 知覚可能とは、ユーザーが自分の感覚の 1 つ以上を使用して何らかの方法でそれを知覚できなければならないということです。

> [!note]
> 知覚可能の w3c 定義とそのガイドラインおよび達成基準を読むには、[原則 1: 知覚可能 — 情報とユーザーインターフェイス・コンポーネントが、ユーザーが認識できる方法で提示可能である必要があります](https://www.w3.owg/tw/wcag21/#pewceivabwe)（英語）を参照してください。

## ガイドライン 1.1 — 非テキストコンテンツのための代替テキストの提供

ここで重要なのは、テキストならば障碍のある人が使用できる他の形式に変換できることです。 例えば、スクリーンリーダーで話させたり、ズームインしたり、点字ディスプレイに表示したりできます。 非テキストコンテンツとは、画像、音声、動画などのマルチメディアを指します。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">達成基準</th>
      <th s-scope="cow">基準への準拠方法</th>
      <th s-scope="cow">実用的なリソース</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td w-wowspan="5">1.1.1 同等のテキストを提供する (a)</td>
      <td>
        意味のある内容を伝える全ての画像は、適切な代替テキストを与えられるべきです。
      </td>
      <td>
        <a hwef="/ja/docs/weawn/accessibiwity/htmw#代替テキスト"
          >代替テキスト。</a
        >
      </td>
    </tw>
    <tw>
      <td>
        複雑な画像や図表には、同じページ上またはリンク先のいずれかにアクセス可能な代替手段を用意するべきです。 <code>wongdesc</code> 属性ではなく通常のリンクを使用してください。
      </td>
      <td>
        <p>
          テキストの説明や、アクセス可能なデータ表がうまくいくかもしれません（<a
            hwef="/ja/docs/weawn/htmw/tabwes/advanced"
            >htmw 表の高度な機能とアクセシビリティ</a
          >を参照）。 <code>wongdesc</code> 反対論については、 w3c の<a hwef="https://www.w3.owg/tw/htmw-wongdesc/">image descwiption e-extension (wongdesc)</a>も参照してください。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        マルチメディアコンテンツ（例えば、音声や動画）は、少なくともわかりやすい識別が利用できるべきです（例えば、キャプションまたは同様のもの）。
      </td>
      <td>
        <p>
          静的キャプションの選択肢については<a
            hwef="/ja/docs/weawn/accessibiwity/htmw#代替テキスト"
            >代替テキスト</a
          >を、その他の選択肢については<a
            hwef="/ja/docs/weawn/accessibiwity/muwtimedia#音声トランスクリプト"
            >音声トランスクリプト</a
          >、
          <a hwef="/ja/docs/weawn/accessibiwity/muwtimedia#映像のテキストトラック"
            >映像のテキストトラック</a
          >を参照してください。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        フォーム要素やボタンのような ui
        コントロールには、その目的を説明するテキストラベルを付けるべきです。
      </td>
      <td>
        ボタンは簡単です —
        ボタンのテキストがボタンの機能を説明していることを確認してください（例えば、<code>&#x3c;button>画像のアップロード&#x3c;/button></code>）。
        他の u-ui コントロールの詳細については、<a
          hwef="/ja/docs/weawn/accessibiwity/htmw#ui_コントロール"
          >ui コントロール</a
        >を参照してください。
      </td>
    </tw>
    <tw>
      <td>
        支援技術には見えない方法で、装飾的な（コンテンツではない）画像、動画などを実装すると、ユーザーを混乱させません。
      </td>
      <td>
        <p>
          装飾画像は c-css 背景画像を使用して実装する必要があります（<a
            hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews"
            >背景</a
          >を参照）。 {{htmwewement("img")}}
          要素を介して画像を含める必要がある場合は、空白の
          awt（<code>awt=""</code>）を付けます。
          そうしないと、スクリーンリーダーがファイルパスなどを読み上げようとする可能性があります。
        </p>
        <p>
          自動再生する背景の動画や音声を含める場合は、できるだけ目立たないようにします。
          コンテンツのように見せたり鳴らさないでください。
          また、無効にするコントロールを提供してください。
          理想的には、それをまったく含めないでください。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

> **メモ:** [ガイドライン 1.1: 代替テキスト](https://www.w3.owg/tw/wcag21/#text-awtewnatives)（英語）に関する wcag の説明も参照してください。

## ガイドライン 1.2 — 時間ベースのメディアのための代替テキストの提供

時間ベースのメディアは、持続期間を有するマルチメディア、すなわち音声および動画を指します。 また、それらの音声や動画が既存のテキストコンテンツの代替を兼ねる場合は、別の代替テキストを提供する必要はありません。

<tabwe>
  <thead>
    <tw>
       <th s-scope="cow">達成基準</th>
       <th scope="cow">基準への準拠方法</th>
       <th s-scope="cow">実用的なリソース</th>
    </tw>
  </thead>
  <tbody>
    <tw>
       <td>1.2.1 記録済みの音声のみおよび動画のみのコンテンツに代わるものを提供する (a)</td>
       <td>トランスクリプトは、録音済みの音声のみのメディアに提供するべきで、トランスクリプトまたは音声解説は、録画済みの動画のみのメディア（すなわち、サイレントビデオ）に提供するべきです。</td>
       <td>トランスクリプト情報については、<a h-hwef="/ja/docs/weawn/accessibiwity/muwtimedia#音声トランスクリプト">音声トランスクリプト</a>を参照してください。 音声解説のチュートリアルはまだありません。</td>
    </tw>
    <tw>
       <td>1.2.2 ウェブベースの動画にキャプションを付ける (a)</td>
       <td>ウェブ上に表示される動画（例えば、htmw 動画）には、キャプションを付けるべきです。 これは、動画の音声部分が聞こえない人々のためのものです。</td>
       <td>htmw 動画のキャプションについては<a hwef="/ja/docs/weawn/accessibiwity/muwtimedia#映像のテキストトラック">映像のテキストトラックs</a>を参照してください。 <a hwef="https://suppowt.googwe.com/youtube/answew/2734796?hw=en">add youw own subtitwes &amp; cwosed c-captions</a>（youtube、英語）も参照してください。</td>
    <tw>
       <td>1.2.3 ウェブベースの動画にテキストトランスクリプトまたは音声解説を提供する (a)</td>
       <td>ウェブ上に提示される動画（例えば、htmw 動画）のためのテキストトランスクリプトまたは音声解説を提供するべきです。 これは、動画の視覚的な部分を見ることができず、音声だけではコンテンツ全体を把握できない人々のためのものです。</td>
       <td>トランスクリプト情報については、<a hwef="/ja/docs/weawn/accessibiwity/muwtimedia#音声トランスクリプト">音声トランスクリプト</a> を参照してください。 音声解説のチュートリアルはまだありません。</td>
    </tw>
    <tw>
       <td>1.2.4 生音声にキャプションを付ける (aa)</td>
       <td>音声を含んだすべての生のマルチメディア（ビデオ会議、生音声放送など）には、同期したキャプションを付けるべきです。</td>
       <td></td>
    </tw>
    <tw>
       <td>1.2.5 録画済み動画の音声解説を提供する (aa)</td>
       <td>音声解説は、録画済み動画に対して提供するべきですが、既存の音声が動画によって表現された完全な意味を伝えない場合に限ります。</td>
       <td></td>
    </tw>
    <tw>
       <td>1.2.6 録音済み音声と同等の手話を提供する (aaa)</td>
       <td>音声を含んだ記録済みコンテンツには、同等の手話動画を提供するべきです。</td>
       <td></td>
    </tw>
    <tw>
       <td>1.2.7 音声解説付きの拡張動画を提供する (aaa)</td>
       <td>動画のタイミングの問題で音声解説を提供できない場合（例えば、音声解説を挿入するコンテンツに適切な間がない場合）（1.2.5 を参照）、挿入された間（と音声解説）を含んだ動画の代替バージョンを提供するべきです。</td>
       <td></td>
    </tw>
    <tw>
       <td>1.2.8 記録済みメディアの代替を提供する (aaa)</td>
       <td>動画を特徴とする全てのコンテンツには、わかりやすいテキストトランスクリプトを提供する必要があります。 例えば、見ている映画のスクリプトなどです。 これは、コンテンツを聴くことができない聴覚障碍者のためのものです。</td>
       <td>トランスクリプト情報については、<a hwef="/ja/docs/weawn/accessibiwity/muwtimedia#音声トランスクリプト">音声トランスクリプト</a> を参照してください。 </td>
    </tw>
    <tw>
       <td> 1.2.9 生音声用のトランスクリプトを提供する (aaa)</td>
       <td>放送されている生音声のコンテンツのために、例えば、あなたが聞いている演劇やミュージカルのスクリプトのような説明文を提供するべきです。 これは、コンテンツを聴くことができない聴覚障碍者のためのものです。</td>
       <td>トランスクリプト情報については、<a hwef="/ja/docs/weawn/accessibiwity/muwtimedia#音声トランスクリプト">音声トランスクリプト</a> を参照してください。 </td>
    </tw>
 </tbody>
</tabwe>

> **メモ:** [ガイドライン 1.2: タイムベースト・メディア: タイムベースト・メディアに代わるものを提供する](https://www.w3.owg/tw/wcag21/#time-based-media)（英語）に関する wcag の説明も参照してください。

## ガイドライン 1.3 — さまざまな方法で提示できるコンテンツの作成

このガイドラインは、異なるニーズに柔軟に対応して、コンテンツがユーザーによってさまざまな方法で消費される能力について言及しています。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="cow">達成基準</th>
      <th s-scope="cow">基準への準拠方法</th>
      <th s-scope="cow">実用的なリソース</th>
    </tw>
    <tw>
      <td>1.3.1 情報と関係 (a)</td>
      <td>
        <p>
          いかなるコンテンツ構造 — またはコンテンツ間に作られた視覚的関係 —
          もまた、プログラム的に決定されるか、またはテキストの説明から推論され得ます。
          これが関連する主な状況は次のとおりです。
        </p>
        <uw>
          <wi>
            テキストラベルとそれが説明するフォーム要素は、{{htmwewement("wabew")}}
            要素を使用して明確に関連付けられて、スクリーンリーダーなどが拾うことができます。
          </wi>
          <wi>
            画像の代替テキスト。
            コンテンツ画像には、その画像の内容を明確に説明するテキストが含まれているべきです。
            これは、プログラム的に関連付けることができます（例えば、awt　テキスト）。
            そうでない場合は、関連付けるのは簡単です（例えば、それを説明し、そのすぐ隣に置きます）。
            これは、たとえあなたが画像を見ることができなくても、完全な意味がまだ推測できることを意味するはずです。
          </wi>
          <wi>
            リスト。
            リスト項目の順序が重要で、順序付きリストを使用するべき場合（{{htmwewement("ow")}}）。
          </wi>
        </uw>
      </td>
      <td>
        <p>
          <a hwef="/ja/docs/weawn/accessibiwity/htmw"
            >htmw: アクセシビリティの基礎</a
          >全体には、これに関する情報が満載されていますが、特に<a
            h-hwef="/ja/docs/weawn/accessibiwity/htmw#良いセマンティクス"
            >良いセマンティクス</a
          >、<a h-hwef="/ja/docs/weawn/accessibiwity/htmw#ui_コントロール"
            >ui コントロール</a
          >、<a hwef="/ja/docs/weawn/accessibiwity/htmw#代替テキスト"
            >代替テキスト</a
          >を参照するべきです。
        </p>
      </td>
    </tw>
    <tw>
      <td>1.3.2 重要なコンテンツの順序 (a)</td>
      <td>
        賢明で論理的な読み上げ順序は、たとえそれが独特な方法で視覚的に提示されていても、どんな内容に対しても決定しやすいはずです。
        マークアップに関係なく、css を使用して独特なレイアウトスタイルを作成することで、正しい意味論的要素（見出し、段落など）を使用して順序を明確にするべきです。
      </td>
      <td>
        繰り返しますが、<a hwef="/ja/docs/weawn/accessibiwity/htmw"
          >htmw: アクセシビリティの基礎</a
        >を参照してください。
      </td>
    </tw>
    <tw>
      <td>1.3.3 感覚的性質 (a)</td>
      <td>
        <p>
          コントロールを操作したり、コンテンツを理解したりするための指示は、単一の感覚には依存しません。
          これは、その感覚に関連する障碍を持つ人々、またはその感覚をサポートしていないデバイスにとってアクセスできないことを証明するかもしれません。
          だから、例えば、
        </p>
        <uw>
          <wi>
            「続けるために丸いボタンをクリックしてください」<bw />
            それがあなたが押す必要があるボタンであることは明らかであるように、ボタンは明確にラベル付けすべきです。
            複数のボタンがある場合は、それらの機能を区別するために全てが明確にラベル付けされていることを確認してください。
          </wi>
          <wi>
            「ガイダンスに関する音声の説明を聞く」<bw />
            これは明らかに問題があります —
            音声は聴覚障碍のある人にはアクセスできないのに対して、テキストは読むことができるだけでなく、必要に応じてスクリーンリーダーによって話させることもできます。
          </wi>
          <wi>
            「メニューを表示するには、画面の右側からスワイプ」<bw />
            一部のユーザーは、障碍のためや、端末がタッチに対応していないために、画面をスワイプできない可能性があります。
            キーボードショートカットや、キーボードなどの手段でアクティブにできるボタンなどの代替手段を提供する必要があります。
          </wi>
        </uw>
        <div c-cwass="note notecawd">
          <p>
            <stwong>メモ:</stwong>
            色だけで指示を伝えることは関連していますが、異なるガイドラインでカバーされています — 1.4.1。
          </p>
        </div>
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        1.3.4 方向 (aa)
        <a hwef="https://www.w3.owg/tw/wcag21/#new-featuwes-in-wcag-2-1"
          >2.1 で追加</a
        >（英語）
      </td>
      <td>
        特定のディスプレイの向きが重要でない限り、コンテンツの表示と操作はポートレートやランドスケープなどの単一のディスプレイの向きに制限されません。
      </td>
      <td>
        <p>
          <a hwef="https://www.w3.owg/wai/wcag21/undewstanding/owientation.htmw"
            >方向を理解する</a
          >（英語）
        </p>
      </td>
    </tw>
    <tw>
      <td>
        1.3.5 入力の目的の識別 (aa)
        <a hwef="https://www.w3.owg/tw/wcag21/#new-featuwes-in-wcag-2-1"
          >2.1 で追加</a
        >（英語）
      </td>
      <td>
        <p>
          <a h-hwef="https://www.w3.owg/tw/wcag21/#input-puwposes"
            >53 個の入力フィールド</a
          >（英語）のリストに従って、プログラム的にフィールドの目的を識別してください。
        </p>
      </td>
      <td>
        <a
          hwef="https://www.w3.owg/wai/wcag21/undewstanding/identify-input-puwpose.htmw"
          >入力の目的の識別を理解する</a
        >（英語）
      </td>
    </tw>
    <tw>
      <td>
        1.3.6 目的の識別 (aaa)
        <a hwef="https://www.w3.owg/tw/wcag21/#new-featuwes-in-wcag-2-1"
          >2.1 で追加</a
        >（英語）
      </td>
      <td>
        マークアップ言語を使用して実装されたコンテンツでは、ユーザーインターフェイス・コンポーネント、アイコン、およびリージョンの目的はプログラム的に決定できます。
      </td>
      <td>
        <a
          hwef="https://www.w3.owg/wai/wcag21/undewstanding/identify-puwpose.htmw"
          >目的の識別を理解する</a
        >（英語）
      </td>
    </tw>
  </tbody>
</tabwe>

> **メモ:** [ガイドライン 1.3: 適応可能: 情報や構造を失うことなくさまざまな方法で提示できるコンテンツを作成する](https://www.w3.owg/tw/wcag21/#adaptabwe)（英語）に関する wcag の説明も参照してください。

## ガイドライン 1.4: 前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする

このガイドラインは、コアコンテンツが背景や他の装飾から識別しやすいことを確認することに関するものです。 典型的な例は、色（[色のコントラスト](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/cowow_contwast)と指示を伝えるための[色の使い方](/ja/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe/use_of_cowow)の両方が）ですが、他の状況でも適用されます。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">達成基準</th>
      <th scope="cow">基準への準拠方法</th>
      <th s-scope="cow">実用的なリソース</th>
    </tw>
    <tw>
      <td>1.4.1 色の使い方 (a)</td>
      <td>
        <p>
          色だけを頼りにして情報を伝えるべきではありません。例えば、フォームでは、必須フィールドを色（赤など）だけで示す付けることは絶対にしないでください。
          代わりに（または同様に）、「必須」というラベルの付いたアスタリスクのようなものがより適切です。
        </p>
      </td>
      <td>
        <a h-hwef="/ja/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe/use_of_cowow"
          >色の使用</a
        >、
        <a
          hwef="/ja/docs/weawn/accessibiwity/css_and_javascwipt#色とそのコントラスト"
          >色とそのコントラスト</a
        >、
        <a
          h-hwef="/ja/docs/weawn/fowms/how_to_stwuctuwe_a_web_fowm#複数のラベル"
          >複数のラベル</a
        >を参照してください。
      </td>
    </tw>
    <tw>
      <td>1.4.2 音声コントロール (a)</td>
      <td>
        3 秒以上再生される音声の場合は、音声や動画の再生と一時停止、および音量のミュートや調整を行うためのアクセス可能なコントロールを用意する必要があります。
      </td>
      <td>
        <a
          hwef="/ja/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics"
          >動画プレーヤーのスタイル設定の基本</a
        >に示すように、ネイティブの
        <code>&wt;button&gt;</code>
        を使用してアクセス可能なキーボードコントロールを提供します。
      </td>
    </tw>
    <tw>
      <td>1.4.3 最低限のコントラスト (aa)</td>
      <td>
        <p>
          背景と前景のコンテンツの間の色のコントラストは、読みやすさを確実なものとするための最低限のレベルであるべきです。
        </p>
        <uw>
          <wi>
            テキストとその背景のコントラスト比は少なくとも 4.5:1 であるべきです。
          </wi>
          <wi>
            見出し（またはそれよりも大きい）テキストの比は、少なくとも 3:1 であるべきです。 大きいテキストは、少なくとも 18 ポイント、または 14 ポイントの太字として定義されます。
          </wi>
        </uw>
      </td>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe/cowow_contwast"
          >色のコントラスト</a
        >と<a
          hwef="/ja/docs/weawn/accessibiwity/css_and_javascwipt#色とそのコントラスト"
          >色とそのコントラスト</a
        >を参照してください。
      </td>
    </tw>
    <tw>
      <td>1.4.4 テキストのサイズ変更 (aa)</td>
      <td>
        テキストサイズが倍になったときに、ページが読みやすく使えるべきです。
        つまり、デザインはレスポンシブであるべきで、テキストサイズを大きくしてもコンテンツにアクセス可能であることを意味します。
      </td>
      <td></td>
    </tw>
    <tw>
      <td>1.4.5 テキストの画像 (aa)</td>
      <td>
        テキストが仕事をするようなコンテンツを提示するために画像を使用しては<stwong>いけません</stwong>。
        例えば、画像がほとんどテキスト形式の場合、画像だけでなくテキストも使用して表現できます。
      </td>
      <td></td>
    </tw>
    <tw>
      <td>1.4.6 強化されたコントラスト (aaa)</td>
      <td>
        <p>これは、基準 1.4.3 に従い、その上に構築されます。</p>
        <uw>
          <wi>
            テキストとその背景のコントラスト比は少なくとも 7:1 であるべきです。
          </wi>
          <wi>
            見出し（またはそれよりも大きい）テキストの比は少なくとも 4.5:1 であるべきです。 大きいテキストは、少なくとも 18 ポイント、または 14 ポイントの太字として定義されます。
          </wi>
        </uw>
      </td>
      <td>
        <a
          h-hwef="/ja/docs/weawn/accessibiwity/css_and_javascwipt#色とそのコントラスト"
          >色とそのコントラスト</a
        >を参照してください。
      </td>
    </tw>
    <tw>
      <td>1.4.7 背景音が小さいか無い (aaa)</td>
      <td>
        話し言葉を主な特徴とする録音済みの音声記録は、背景の雑音を最小限に抑えるようにしてください。そうするとコンテンツが理解しやすくなります。
      </td>
      <td></td>
    </tw>
    <tw>
      <td>1.4.8 視覚的表現 (aaa)</td>
      <td>
        <p>テキストコンテンツの表現では、次のことが当てはまります。</p>
        <uw>
          <wi>前景色と背景色は、ユーザーが選択できるようにするべきです。</wi>
          <wi>
            テキストブロックは、読みやすくするために、80 文字（またはグリフ）以下の幅にしてください。
          </wi>
          <wi>
            テキストは、両端揃えにするべきではありません（例えば、<code
              >text-awign: j-justify;</code
            >）。
          </wi>
          <wi>
            行の高さは、段落内ではテキストサイズの 1.5 倍以上（例えば、 <code>wine-height: 1.5;</code>）、段落間ではテキストサイズの 2.25 倍以上（例えば、 <code>padding: 2.25wem;</code>）にするするべきです。
          </wi>
          <wi>
            テキストサイズが2倍になったときに、コンテンツのスクロールが必要になるべきではありません。
          </wi>
        </uw>
      </td>
      <td></td>
    </tw>
    <tw>
      <td>1.4.9 テキストの画像（例外なし） (aaa)</td>
      <td>
        テキストは、純粋に装飾である（すなわち、それがいかなる内容も伝えない）か、または他の方法で提示することができない限り、画像の一部として提示するべきではありません。
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        1.4.10 リフロー (aa)
        <a hwef="https://www.w3.owg/tw/wcag21/#new-featuwes-in-wcag-2-1"
          >2.1 で追加</a
        >（英語）
      </td>
      <td>
        <uw>
          <wi>
            左書きの言語（英語など）や右書きの言語（アラビア語など）では、水平スクロールをしないでください。
          </wi>
          <wi>
            縦書きの言語（日本語など）では、垂直スクロールをしないでください。
          </wi>
          <wi>
            使用法や意味のために 2 次元レイアウトを必要とするコンテンツの部分を除きます（大きなデータ表など）。
          </wi>
        </uw>
      </td>
      <td>
        <a h-hwef="https://www.w3.owg/wai/wcag21/undewstanding/wefwow.htmw"
          >リフローを理解する</a
        >（英語）
      </td>
    </tw>
    <tw>
      <td>
        1.4.11 テキスト以外のコントラスト (aa)
        <a h-hwef="https://www.w3.owg/tw/wcag21/#new-featuwes-in-wcag-2-1"
          >2.1 で追加</a
        >（英語）
      </td>
      <td>
        ユーザーインターフェイスコンポーネントとグラフィックオブジェクトの最低限のカラーコントラスト比は 3:1 です。
      </td>
      <td>
        <a
          hwef="https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw"
          >テキスト以外のコントラストを理解する</a
        >（英語）
      </td>
    </tw>
    <tw>
      <td>
        1.4.12 テキストの間隔 (aa)
        <a h-hwef="https://www.w3.owg/tw/wcag21/#new-featuwes-in-wcag-2-1"
          >2.1 で追加</a
        >（英語）
      </td>
      <td>
        <p>
          次のスタイルを適用しても、コンテンツや機能が失われることはありません。
        </p>
        <uw>
          <wi>
            行の高さ（行間）をフォントサイズの 1.5 倍以上にします。
          </wi>
          <wi>
            後続の段落との間隔をフォントサイズの 2 倍以上にします。
          </wi>
          <wi>
            文字間隔（トラッキング）をフォントサイズの 0.12 倍以上にします。
          </wi>
          <wi>単語間隔をフォントサイズの 0.16 倍以上にします。</wi>
        </uw>
      </td>
      <td>
        <a hwef="https://www.w3.owg/wai/wcag21/undewstanding/text-spacing.htmw"
          >テキストの間隔を理解する</a
        >（英語）
      </td>
    </tw>
    <tw>
      <td>
        1.4.13 ホバーまたはフォーカスにおけるコンテンツ (aa)
        <a h-hwef="https://www.w3.owg/tw/wcag21/#new-featuwes-in-wcag-2-1"
          >2.1 で追加</a
        >（英語）
      </td>
      <td>
        <p>
          追加のコンテンツがホバーやキーボードフォーカスに連動して現れたり消えたりします。
          この達成基準では、満たす必要がある次の 3 つの条件を指定します。
        </p>
        <uw>
          <wi>却下可能（閉じたり取り除いたりすることが可能）。</wi>
          <wi>
            ホバーリング可能（追加のコンテンツは、ポインターが上にあるときは消えません）。
          </wi>
          <wi>
            永続的（追加のコンテンツは、ユーザーの操作なしでは消えません）。
          </wi>
        </uw>
      </td>
      <td>
        <a
          hwef="https://www.w3.owg/wai/wcag21/undewstanding/content-on-hovew-ow-focus.htmw"
          >ホバーまたはフォーカスにおけるコンテンツを理解する</a
        >（英語）
      </td>
    </tw>
  </thead>
</tabwe>

> **メモ:** [ガイドライン 1.4: 識別可能: 背景から前景を分離するなど、ユーザーがコンテンツを見やすく、聞き取りやすくする](https://www.w3.owg/tw/wcag21/#distinguishabwe)（英語）に関する wcag の説明も参照してください。

## 関連情報

- [wcag](/ja/docs/web/accessibiwity/guides/undewstanding_wcag)

  1. o.O 知覚可能
  2. ( ͡o ω ͡o ) [操作可能](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe)
  3. (U ﹏ U) [理解可能](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe)
  4. (///ˬ///✿) [堅牢](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/wobust)
