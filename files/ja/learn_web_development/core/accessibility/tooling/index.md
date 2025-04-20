---
title: アクセシビリティツールと支援技術
short-title: アクセシビリティツール
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

> [!NOTE]
> この記事のコンテンツは現在不完全です。申し訳ありません！私たちは MDN ウェブ開発の学習の章の改善に努めており、間もなく、 ("TODO") とマークされた場所も完了する予定です。

次に、私たちはアクセシビリティに注意を向け、一般的な問題、簡単なテストの方法、そしてアクセシビリティの問題を見つけるための監査/自動化ツールの使い方を説明します。この記事で紹介するツールは、今後掲載する記事でも使用します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、<a href="/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">基本的なアクセシビリティの概念の理解</a>の知識。</td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>アクセシビリティの課題を解決するのに役立つツール、例えば監査ツールなどに関する知識。</li>
          <li>スクリーンリーダーをデスクトップとモバイルの両方で設定し、ウェブサイトを検査するために使用。</li>
          <li>他にも、大きな文字や点字キーボード、代替のポインティングデバイス、画面拡大機能などの支援技術。</li>
          <li>自動化された検査と並んでユーザー検査の重要性。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## アクセシビリティツール

アクセシブルなウェブサイトを実装し、アクセシビリティの課題を修正する際に使用できるツールを見ていきましょう。

### ソース順のテスト

コンテンツはソースの順序で論理的な意味を持つべきです。後で CSS を使用してコンテンツを常に好きな場所に配置することができますが、始めにはソースの順序を正しく取得する必要があります。

試しに、サイトの CSS をオフにして、 CSS なしでどれだけ理解できるかを確認することができます。 CSS をコードから除去するだけなら手動でもできますが、最も簡単な方法はブラウザー機能を使用することです。例えば次のようにします。

- Firefox: メインメニューから _表示 > スタイルシート > スタイルシートを使用しない_ を選択
- Safari: メインメニューから _Develop > Disable Styles_ を選択（_Develop_ メニューを有効にするには、メニューバーの _Safari > Preferences > Advanced > Show Develop メニューを選択_）。
- Chrome: Web Developer Toolbar 拡張機能をインストールし、ブラウザーを再起動します。現れるギアアイコンをクリックし、 _CSS > Disable All Styles_ を選択。
- Edge: メインメニューから _View > Style > No Style_ を選択。

#### 色とカラーコントラスト

ウェブサイトの配色を選択するときは、テキスト（前景）のカラーコントラストが背景色とよく合うことを確認するべきです。 あなたのデザインはかっこいいかもしれませんが、色覚異常のような視覚障碍を持つ人々がコンテンツを読むことができないならば、それは良くありません。 配色に十分なコントラストがあるかどうかチェックするために WebAIM の[カラーコントラストチェッカー](https://webaim.org/resources/contrastchecker/)（英語）のようなツールを使ってください。

もう 1 つのヒントは、道標や情報を色だけに頼らないようにすることです。 これは、色が見えない人には良くないでしょう。 例えば、必須のフォームフィールドを赤でマークする代わりに、赤いアスタリスクでマークします。

> [!NOTE]
> コントラスト比が高いと、光沢のある画面を備えたスマートフォンやタブレットを使用している人は誰でも、日光のような明るい環境にいるときにページを読みやすくなります。

### 監査ツール

ウェブページを読み込ませることができる、利用できる監査ツールは多数あります。それらのツールは、ページを検証し、ページに存在するアクセシビリティ上の問題のリストを返します。 例えば、 [Wave](https://wave.webaim.org/) というオンラインのアクセシビリティテストツールを使用すると、ウェブアドレスを受け入れ、アクセシビリティ上の問題がハイライトされた注釈付きのページを表示することができます。

1. [Wave のホームページ](https://wave.webaim.org/)（英語）に行きます。
2. ページの上部にあるテキスト入力ボックスに [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) の例の URL を入力してください。その後、 Enter キーを押すか、入力ボックスの右端にある矢印をクリック/タップしてください。
3. サイトは、アクセシビリティの問題についての説明を回答する必要があります。表示されたアイコンをクリックすると、 Wave の評価によって特定された各課題に関する詳細情報が表示されます。

他にもチェックする価値のある監査ツールがあります。

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> このようなツールは、アクセシビリティの問題を全て自分で解決するのに十分ではありません。 全体像を把握するには、これらの組み合わせ、知識と経験、ユーザーテストなどが必要です。

### 自動化ツール

[Deque の aXe ツール](https://www.deque.com/axe/)（英語）は、前述した監査ツールよりも少しばかり進化しています。 他のものと同様に、ページをチェックしてアクセシビリティエラーを返します。 その最もすぐに役立つ形式は、おそらく次のブラウザー拡張機能です。

- [Chrome 用の aXe](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)（英語）
- [Firefox 用の aXe](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)（英語）

これらはブラウザー開発者ツールにアクセシビリティタブを追加します。 例えば、Firefox 用のバージョンをインストールし、それを使用して [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) の例を監査すると、次の結果が得られます。

![Axe ツールによって特定されたアクセシビリティの課題のスクリーンショット。](axe-screenshot.png)

aXe は `npm` を使ってもインストール可能で、[Grunt](https://gruntjs.com/) や [Gulp](https://gulpjs.com/) のようなタスクランナー、[Selenium](https://www.selenium.dev/) や [Cucumber](https://cucumber.io/) のような自動化フレームワーク、[Jasmine](https://jasmine.github.io/) のような単体テストフレームワークなどと統合することができます（やはり、詳細については[メインの aXe ページ](https://www.deque.com/axe/)（英語）を参照してください）。

## スクリーンリーダー

重度の視覚障碍者がウェブをどのように使用しているかに慣れるには、スクリーンリーダーを使ってテストする価値があります。 次のように利用可能なスクリーンリーダーは多数あります。

- [JAWS](https://www.freedomscientific.com/Products/software/JAWS)（Windows）や [Window Eyes](http://www.gwmicro.com/)（Windows）のような有料製品もあります。
- [NVDA](https://www.nvaccess.org/)（Windows）、[ChromeVox](https://support.google.com/chromebook/answer/7031755)（Chrome、Windows、Mac OS X）、[Orca](https://wiki.gnome.org/Projects/Orca)（Linux）などの無料製品もあります。
- [VoiceOver](https://www.apple.com/accessibility/vision/)（Mac OS X、iOS）、[ChromeVox](https://support.google.com/chromebook/answer/7031755)（Chromebook 上）、および [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) （Android）など、一部はオペレーティングシステムに組み込まれています。

一般的に、スクリーンリーダーはホストオペレーティングシステム上で動作する独立したアプリで、ウェブページだけでなく他のアプリのテキストも読むことができます。 これは必ずしもそうとは限りませんが（ChromeVox はブラウザーの拡張機能です）、通常はそうです。 スクリーンリーダーは少し異なる方法で動作し、異なるコントロールを持つ傾向があるので、全ての詳細を得るためにはあなたが選んだスクリーンリーダーのドキュメントを参照しなければなりません。と言っても、それらは全て基本的に同じような方法で機能します。

いくつかの異なるスクリーンリーダーを使っていくつかのテストを行い、それらがどのように機能するのか、またどのようにテストするのかについての一般的な考えを説明しましょう。

> [!NOTE]
> WebAIM の[スクリーンリーダーの互換性のための設計](https://webaim.org/techniques/screenreader/)（英語）では、スクリーンリーダーの使用方法とスクリーンリーダーに最適な機能についての役立つ情報が提供されています。 いくつかの興味深いスクリーンリーダーの使用統計については、[第 9 回スクリーンリーダーのユーザー調査の結果](https://webaim.org/projects/screenreadersurvey9/#used)（英語）も参照してください。

### VoiceOver

VoiceOver（VO）は Mac / iPhone / iPad には無料で含まれているので、あなたが Apple 製品を使っているならそれはデスクトップ/モバイルでテストするのに役に立ちます。 ここでは、MacBook Pro の Mac OS X でテストします。

オンにするには、Cmd + Fn + F5 を押します。 今までに VO を使ったことがない場合は、ようこそ画面が表示され、そこで VO を起動するかどうかを選択できます。 また、使い方を学ぶためにかなり役に立つチュートリアルを実行することもできます。 再びオフにするには、もう一度 Cmd + Fn + F5 を押します。

> [!NOTE]
> チュートリアルは少なくとも一度は実行するべきです — これは VO を学ぶ上で非常に便利な方法です。

VO がオンになっていると、ディスプレイはほぼ同じに見えますが、画面の左下に、現在選択されている VO に関する情報を含む黒いボックスが表示されます。 現在の選択範囲も黒枠で強調表示されます — この強調表示は **VO カーソル**と呼ばれます。

![MDN ホームページで VoiceOver を使用したアクセシビリティテストのサンプルスクリーンショット。画像の左下は、ウェブページ上で選択されている情報のハイライトです。](voiceover.png)

VO を使用するには、「VO 修飾キー」を多用します — これは、実際の VO ショートカットキーに加えて、それらを機能させるために押す必要があるキーまたはキーの組み合わせです。 このような修飾キーを使用するのは、スクリーンリーダーに共通で、他のコマンドとコマンドが衝突しないようにするためです。 VO の場合、修飾キーは CapsLock または Ctrl + Option のいずれかです。

VO にはたくさんのキーボードコマンドがありますので、ここではそれら全てをリストしません。 ウェブページのテストに必要な基本的なものは、次の表のとおりです。 ショートカットキーでは、 "VO" は「VoiceOver 修飾キー」を意味します。

<table class="standard-table no-markdown">
  <caption>
    最も一般的な VoiceOver ショートカットキー
  </caption>
  <thead>
    <tr>
      <th scope="col">ショートカットキー</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + 矢印キー</td>
      <td>VO カーソルを上下左右に移動します。</td>
    </tr>
    <tr>
      <td>VO + スペースバー</td>
      <td>
        VO カーソルで強調表示されている項目を選択/アクティブ化します。 これには、ローター（下記参照）で選択した項目が含まれます。
      </td>
    </tr>
    <tr>
      <td>VO + Shift + 下矢印</td>
      <td>
        （HTML の表やフォームなどの）項目のグループ内に入ります。 グループ内に入ると、通常どおり上記のコマンドを使用してそのグループ内の項目を移動して選択できます。
      </td>
    </tr>
    <tr>
      <td>VO + Shift + 上矢印</td>
      <td>グループから出ます。</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>（表内の場合）現在の列のヘッダーを読み上げます。</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>（表内の場合）現在の行のヘッダーを読み上げます。</td>
    </tr>
    <tr>
      <td>VO + C + C（2 つの連続した C）</td>
      <td>
        （表内の場合）ヘッダーを含む現在の列全体を読み上げます。
      </td>
    </tr>
    <tr>
      <td>VO + R + R（2 つの連続した R）</td>
      <td>
        （表内の場合）各セルに対応するヘッダーを含め、現在の行全体を読み上げます。
      </td>
    </tr>
    <tr>
      <td>VO + 左矢印、VO + 右矢印</td>
      <td>
        （日付の選択や時刻の選択などの一部の水平オプション内の場合）オプション間を移動します。
      </td>
    </tr>
    <tr>
      <td>VO + 上矢印、VO + 下矢印</td>
      <td>
        （日付の選択や時刻の選択などの一部の水平オプション内の場合）現在のオプションを変更します。
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        簡単にナビゲーションできるように、見出し、リンク、フォームコントロールなどのリストを表示するローターを使用します。
      </td>
    </tr>
    <tr>
      <td>VO + 左矢印、VO + 右矢印</td>
      <td>
        （ローター内の場合）ローターで利用可能な異なるリスト間を移動します。
      </td>
    </tr>
    <tr>
      <td>VO + 上矢印、VO + 下矢印</td>
      <td>
        （ローター内の場合）現在のローターリスト内の異なる項目間を移動します。
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>（ローター内の場合）ローターを終了します。</td>
    </tr>
    <tr>
      <td>Ctrl</td>
      <td>（VO が話している場合）読み上げを一時停止/再開します。</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>読み上げの最後の部分をやり直します。</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>Mac の Dock に入るので、その中で実行するアプリを選択できます。</td>
    </tr>
  </tbody>
</table>

たくさんのコマンドがあるように見えますが、慣れればそれほど悪くありませんし、VOは特定の配置で使用するコマンドを定期的に教えてくれます。これで VO で遊んでみてください。この後、[スクリーンリーダーのテスト](#スクリーンリーダーのテスト)節にあるいくつかの例で遊ぶことができます。

### NVDA

NVDA は Windows 専用で、インストールする必要があります。

1. [nvaccess.org](http://www.nvaccess.org/) からダウンロードしてください。 寄付をするか無料でダウンロードするかを選択できます。 ダウンロードできるようになる前にあなたのメールアドレスを与える必要もあるでしょう。
2. ダウンロードしたら、インストールします — インストーラーをダブルクリックし、ライセンスに同意して指示に従います。
3. NVDA を起動するには、プログラムファイル/ショートカットをダブルクリックするか、ショートカットキーの Ctrl + Alt + N を使用します。 起動すると NVDA にようこそダイアログが表示されます。 ここでは、いくつかのオプションから選択し、次に \[OK] ボタンを押して作業を進めます。

これで NVDA はあなたのコンピューター上でアクティブになります。

NVDA を使用するには、「NVDA 修飾キー」を多用します — これは、実際の NVDA のショートカットキーに加えて、それらを機能させるために押す必要があるキーです。 このような修飾キーを使用するのは、スクリーンリーダーに共通で、他のコマンドとコマンドが衝突しないようにするためです。 NVDA の場合、修飾キーは Insert（既定）、または CapsLock（\[OK] を押す前に NVDA へようこそダイアログボックスの最初のチェックボックスをオンにして選択できます）のいずれかになります。

> [!NOTE]
> NVDA は、VoiceOver よりも、それがどこにあるのか、また何をしているのかを強調する方法という点では微妙です。 見出しやリストなどをスクロールしているとき、あなたが選択している項目は一般的に微妙なアウトラインでハイライトされますが、これはいつも全てのことに当てはまるわけではありません。 完全に迷子になった場合は、Ctrl + F5 を押して現在のページを更新し、もう一度上から始めることができます。

NVDA にはたくさんのキーボードコマンドがありますので、ここではそれら全てをリストしません。 ウェブページのテストに必要な基本的なものは、次の表のとおりです。 ショートカットキーでは、NVDA は「NVDA 修飾キー」を意味します。

<table class="standard-table no-markdown">
  <caption>
    一般的な NVDA のショートカットキー
  </caption>
  <thead>
    <tr>
      <th scope="col">ショートカットキー</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + Q</td>
      <td>起動している NVDA を再びオフにします。</td>
    </tr>
    <tr>
      <td>NVDA + 上矢印</td>
      <td>現在行を読み上げます。</td>
    </tr>
    <tr>
      <td>NVDA + 下矢印</td>
      <td>現在位置から読み上げを始めます。</td>
    </tr>
    <tr>
      <td>上矢印 と 下矢印、または Shift + Tab と Tab</td>
      <td>ページ内の前/次の項目に移動して、それを読み上げます。</td>
    </tr>
    <tr>
      <td>左矢印 と 右矢印</td>
      <td>現在の項目の前/次の文字に移動して、それを読み上げます。</td>
    </tr>
    <tr>
      <td>Shift + H と H</td>
      <td>前/次の見出しに移動して、それを読み上げます。</td>
    </tr>
    <tr>
      <td>Shift + K と K</td>
      <td>前/次のリンクに移動して、それを読み上げます。</td>
    </tr>
    <tr>
      <td>Shift + D と D</td>
      <td>
        前/次の文書のランドマーク（<code>&#x3C;nav></code> など）に移動して、それを読み上げます。
      </td>
    </tr>
    <tr>
      <td>Shift + 1 〜 6 と 1 〜 6</td>
      <td>前/次の見出し（レベル 1 〜 6）に移動して読み上げます。</td>
    </tr>
    <tr>
      <td>Shift + F と F</td>
      <td>前/次のフォーム入力に移動して、それにフォーカスを当てます。</td>
    </tr>
    <tr>
      <td>Shift + T と T</td>
      <td>前/次のデータ表に移動して、それにフォーカスを当てます。</td>
    </tr>
    <tr>
      <td>Shift + B と B</td>
      <td>前/次のボタンに移動して、ラベルを読み上げます。</td>
    </tr>
    <tr>
      <td>Shift + L と L</td>
      <td>前/次のリストに移動して、その最初のリスト項目を読み上げます。</td>
    </tr>
    <tr>
      <td>Shift + I と I</td>
      <td>前/次のリスト項目に移動して、それを読み上げます。</td>
    </tr>
    <tr>
      <td>Enter / Return</td>
      <td>
        （リンク/ボタンまたは他のアクティブ化可能項目が選択されている場合）項目をアクティブ化します。
      </td>
    </tr>
    <tr>
      <td>NVDA + スペースバー</td>
      <td>
        （フォームが選択されている場合）個々の項目を選択できるようにフォーム内に入るか、すでにフォームに入っている場合はフォームから出ます。
      </td>
    </tr>
    <tr>
      <td>Shift + Tab と Tab</td>
      <td>（フォーム内の場合）フォーム入力間を移動します。</td>
    </tr>
    <tr>
      <td>上矢印 と 下矢印</td>
      <td>
        （フォーム内の場合）フォーム入力の値を変更します（選択ボックスなどの場合）。
      </td>
    </tr>
    <tr>
      <td>スペースバー</td>
      <td>（フォーム内の場合）選択値を選択します。</td>
    </tr>
    <tr>
      <td>Ctrl + Alt + 矢印キー</td>
      <td>（表が選択されている場合）表のセル間を移動します。</td>
    </tr>
  </tbody>
</table>

### スクリーンリーダーのテスト

スクリーンリーダーを使用することに慣れてきましたが、スクリーンリーダーがどのようにウェブページの良い機能と悪い機能に対処するかを理解するために、簡単なアクセシビリティテストを行うためにスクリーンリーダーを使用したいと思います。

- [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) を見て、見出しがスクリーンリーダーによってどのように見つけられ、ナビゲーションに使用できるかに注目してください。 では、[bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) を見て、スクリーンリーダーがどのようにしてこの情報を取得できないのかに注目してください。 本当に長いページのテキストをナビゲートしようとすると、これがどれほど面倒なことになるか想像してください。
- [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) を見て、コンテキストから見たときにそれらがどのように意味をなすかに注目してください。 [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) ではそうではありません — それらは全てただの「ここをクリック」です。
- [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) を見て、`<label>` 要素を適切に使用することで、フォーム入力がラベルでどのように説明されるかに注目してください。 [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) では、それらは「空白」の行に沿って役に立たないラベルを取得します。
- [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) の例を見て、ヘッダーを正しく定義したので、スクリーンリーダーがどのようにしてコンテンツの列と行を関連付け、それらを全て読み取ることができるかを確認します。 [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) では、どのセルも関連付けることができません。 1 つのページに 1 つの表しかない場合、NVDA はやや奇妙なふるまいをするようです。 代わりに [WebAIM の表のテストのページ](https://webaim.org/articles/nvda/tables.htm)（英語）を試すことができます。
- 先ほど見た [WAI-ARIA のライブリージョンの例](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm)（英語）を見て、スクリーンリーダーが絶えず更新されているセクションが更新されるたびにそれを読み上げていくかに注目してください。

## ユーザーテスト

上記のように、サイトのアクセシビリティ問題を決定するために自動化されたツールだけに頼ることはできません。 テスト計画を立てる際には、可能であればアクセシビリティユーザーグループをいくつか含めることをお勧めします。必要に応じて、スクリーンリーダーを使用するユーザー、キーボードを使用するユーザー、聴覚を持たないユーザー、および他のグループも参加してください。

## その他のツール

他にも多くの種類の支援技術が存在します。例えば、

- 大きな文字や点字のキーボード。
- トラックボール、ジョイスティック、タッチパッドなどの代替ポインティングデバイス。
- 画面拡大機能。
- 音声認識ソフトウェア。
- スイッチ制御。

## アクセシビリティテストのチェックリスト

次のリストは、プロジェクトで推奨されるアクセシビリティテストを確実に実行したことを確認するためのチェックリストです。

1. HTML が意味論的にできるだけ正しいことを確認してください。 [監査ツール](#監査ツール)を使用して、[それを検証する](/ja/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_の検証)ことからスタートするといいでしょう。
2. CSS がオフになっているときにコンテンツが意味をなすことを確認してください。
3. 機能がキーボードからアクセス可能であることを確認してください（詳しくは[可能であれば意味のある UI コントロールを使用する](/ja/docs/Learn_web_development/Core/Accessibility/HTML#可能であれば意味のある_ui_コントロールを使う)を参照）。 Tab、Return/Enter などを使ってテストします。
4. テキスト以外のコンテンツに[代替テキスト](/ja/docs/Learn_web_development/Core/Accessibility/HTML#代替テキスト)があることを確認してください。 [監査ツール](#監査ツール)はそのような問題を捉えるのに適しています。
5. 適切なチェックツールを使用して、サイトの[カラーコントラスト](/ja/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#色とカラーコントラスト)が許容範囲内であることを確認してください。
6. [隠されたコンテンツ](/ja/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#ものごとを隠す)がスクリーンリーダーに見えるようにしてください。
7. 可能な限り JavaScript がなくても機能が使えることを確認してください。
8. 適切な場合は、ARIA を使用してアクセシビリティを向上させます。
9. [監査ツール](#監査ツール)を通してサイトを運営してください。
10. スクリーンリーダーでテストしてください。
11. あなたが行ったことを言うために、あなたのサイトのどこかに見つけることができるアクセシビリティの方針/声明を含めてください。

## まとめ

この記事が、アクセシビリティの課題を修正するために使用できるツールの種類について、アイディアを提示するものとなっていれば幸いです。また、無効なユーザーがウェブにアクセスするのを手助けするために保有する支援技術についても紹介しています。

次の記事では、アクセシブルな HTML の書き方を見ていきます。

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
